// Daily blog post generator: scrapes AI news sources via Firecrawl,
// then uses Lovable AI to write a bilingual (PT + EN) article.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
};

const SOURCES = [
  { url: "https://lovable.dev/blog", weight: 2 },
  { url: "https://www.anthropic.com/news", weight: 1.5 },
  { url: "https://openai.com/blog", weight: 1.5 },
  { url: "https://blog.google/technology/ai/", weight: 1 },
  { url: "https://techcrunch.com/category/artificial-intelligence/", weight: 1 },
];

const FIRECRAWL_V2 = "https://api.firecrawl.dev/v2";
const AI_GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function scrapeSource(url: string, key: string): Promise<string | null> {
  try {
    const r = await fetch(`${FIRECRAWL_V2}/scrape`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        url,
        formats: ["markdown"],
        onlyMainContent: true,
      }),
    });
    if (!r.ok) return null;
    const data = await r.json();
    const md = data?.data?.markdown ?? data?.markdown;
    return typeof md === "string" ? md.slice(0, 8000) : null;
  } catch {
    return null;
  }
}

async function callAI(messages: unknown[], jsonMode = false): Promise<string> {
  const key = Deno.env.get("LOVABLE_API_KEY");
  if (!key) throw new Error("LOVABLE_API_KEY missing");
  const r = await fetch(AI_GATEWAY, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages,
      ...(jsonMode ? { response_format: { type: "json_object" } } : {}),
    }),
  });
  if (!r.ok) {
    const txt = await r.text();
    throw new Error(`AI gateway ${r.status}: ${txt.slice(0, 300)}`);
  }
  const j = await r.json();
  return j?.choices?.[0]?.message?.content ?? "";
}

interface GeneratedPost {
  title: string;
  excerpt: string;
  body_md: string;
  tags: string[];
  keywords: string[];
  seo_title: string;
  seo_description: string;
  slug: string;
}

function parseAIJson(raw: string): GeneratedPost {
  // Strip code fences if present
  const cleaned = raw.replace(/^```json\s*|^```\s*|```\s*$/g, "").trim();
  const parsed = JSON.parse(cleaned);
  return {
    title: String(parsed.title ?? "").slice(0, 200),
    excerpt: String(parsed.excerpt ?? "").slice(0, 400),
    body_md: String(parsed.body_md ?? ""),
    tags: Array.isArray(parsed.tags) ? parsed.tags.slice(0, 8).map(String) : [],
    keywords: Array.isArray(parsed.keywords) ? parsed.keywords.slice(0, 12).map(String) : [],
    seo_title: String(parsed.seo_title ?? parsed.title ?? "").slice(0, 60),
    seo_description: String(parsed.seo_description ?? parsed.excerpt ?? "").slice(0, 160),
    slug: slugify(String(parsed.slug ?? parsed.title ?? "")),
  };
}

function readingMinutes(md: string): number {
  const words = md.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Light apikey verification
  const apikey = req.headers.get("apikey") ?? req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!apikey) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const run = await supabase
    .from("blog_generation_runs")
    .insert({ started_at: new Date().toISOString() })
    .select()
    .single();
  const runId = run.data?.id;

  try {
    const fcKey = Deno.env.get("FIRECRAWL_API_KEY");
    if (!fcKey) throw new Error("FIRECRAWL_API_KEY missing");

    // Scrape all sources in parallel
    const scraped = await Promise.all(
      SOURCES.map(async (s) => ({ url: s.url, md: await scrapeSource(s.url, fcKey) })),
    );
    const valid = scraped.filter((s) => s.md);
    if (valid.length === 0) throw new Error("no sources scraped");

    // Idempotency: hash combined source content
    const combined = valid.map((s) => s.md).join("\n---\n");
    const hash = await sha256(combined);

    const dup = await supabase
      .from("blog_posts")
      .select("id")
      .eq("sources_hash", hash)
      .limit(1);
    if (dup.data && dup.data.length > 0) {
      await supabase.from("blog_generation_runs").update({
        finished_at: new Date().toISOString(),
        sources_count: valid.length,
        posts_created: 0,
        error: "duplicate-content",
      }).eq("id", runId);
      return new Response(JSON.stringify({ skipped: "duplicate" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sourcesContext = valid
      .map((s, i) => `### Fonte ${i + 1}: ${s.url}\n${s.md!.slice(0, 3500)}`)
      .join("\n\n");

    const today = new Date().toISOString().slice(0, 10);

    // PT post
    const ptRaw = await callAI([
      {
        role: "system",
        content:
          "Você é um editor sênior da Fluxrow, agência brasileira de IA aplicada (Lovable, Claude, n8n, Supabase). Escreve em português do Brasil, tom de praticante: ativo, direto, sem hype, sem emojis, sem buzzwords vazias. Cita fontes com link em markdown.",
      },
      {
        role: "user",
        content: `Hoje é ${today}. Com base nas fontes abaixo (notícias recentes sobre IA, modelos, ferramentas e Lovable), escreva UM artigo de blog em português entre 1100 e 1500 palavras.

Estrutura obrigatória do body_md:
- Parágrafo de abertura forte (2-3 frases) com a palavra-chave principal nos primeiros 100 caracteres.
- 5 a 7 seções H2 (use ##) cobrindo subtemas distintos.
- Quando citar uma novidade específica, link para a fonte original em markdown.
- Seção H2 "Perguntas frequentes" com 4 perguntas H3 (###) e respostas curtas.
- Seção H2 final "Como aplicar isso no seu negócio" com sugestão prática conectada a Lovable / agentes / automação.

Responda SOMENTE em JSON válido com este shape:
{
  "title": "string até 70 chars",
  "slug": "kebab-case-curto",
  "excerpt": "1-2 frases até 280 chars",
  "body_md": "markdown completo do artigo",
  "tags": ["3 a 5 tags curtas em minúsculas"],
  "keywords": ["6 a 10 palavras-chave SEO"],
  "seo_title": "até 60 chars com keyword principal",
  "seo_description": "até 155 chars convidando ao clique"
}

FONTES:
${sourcesContext}`,
      },
    ], true);

    const pt = parseAIJson(ptRaw);
    if (!pt.title || !pt.body_md || !pt.slug) throw new Error("PT generation incomplete");

    // EN translation/adaptation
    const enRaw = await callAI([
      {
        role: "system",
        content:
          "You are a senior editor at Fluxrow, a Brazilian AI agency (Lovable, Claude, n8n, Supabase). Write in clear US English, practitioner voice: active, direct, no hype, no emojis. Adapt — don't literally translate.",
      },
      {
        role: "user",
        content: `Adapt the following Portuguese article into English. Keep the same structure (H2 sections, FAQ, final how-to-apply section), same source citations with markdown links, similar length (1100-1500 words). Slug should match (you can keep it identical).

Respond ONLY with a valid JSON object:
{
  "title": "string up to 70 chars",
  "slug": "${pt.slug}",
  "excerpt": "1-2 sentences up to 280 chars",
  "body_md": "full markdown article",
  "tags": ["3-5 short lowercase tags"],
  "keywords": ["6-10 SEO keywords"],
  "seo_title": "up to 60 chars with main keyword",
  "seo_description": "up to 155 chars, click-inviting"
}

PORTUGUESE ARTICLE:
Title: ${pt.title}
${pt.body_md}`,
      },
    ], true);

    const en = parseAIJson(enRaw);
    en.slug = pt.slug; // enforce same slug

    const sourcesPayload = valid.map((s) => ({ url: s.url }));

    // Upsert both
    const rows = [pt, en].map((p, idx) => ({
      slug: p.slug,
      lang: idx === 0 ? "pt" : "en",
      title: p.title,
      excerpt: p.excerpt,
      body_md: p.body_md,
      tags: p.tags,
      keywords: p.keywords,
      sources: sourcesPayload,
      sources_hash: hash,
      seo_title: p.seo_title,
      seo_description: p.seo_description,
      reading_minutes: readingMinutes(p.body_md),
      status: "published",
      published_at: new Date().toISOString(),
    }));

    const ins = await supabase.from("blog_posts").upsert(rows, { onConflict: "slug,lang" });
    if (ins.error) throw new Error(`insert failed: ${ins.error.message}`);

    await supabase.from("blog_generation_runs").update({
      finished_at: new Date().toISOString(),
      sources_count: valid.length,
      posts_created: rows.length,
      raw_log: { hash, slug: pt.slug },
    }).eq("id", runId);

    return new Response(JSON.stringify({ ok: true, slug: pt.slug, posts: rows.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "unknown error";
    await supabase.from("blog_generation_runs").update({
      finished_at: new Date().toISOString(),
      error: msg,
    }).eq("id", runId);
    return new Response(JSON.stringify({ error: "generation_failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
