// Dynamic sitemap.xml: includes static routes + all published blog posts (PT + EN)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE = "https://fluxrow.com";

interface Route {
  path: string;
  changefreq: string;
  priority: string;
  bilingual?: boolean;
}

const STATIC: Route[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/agencia", changefreq: "weekly", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.8" },
  { path: "/kit/content", changefreq: "monthly", priority: "0.6" },
  { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
  // Bilingual routes
  { path: "/produtos", changefreq: "weekly", priority: "0.9", bilingual: true },
  { path: "/produtos/ai-operator-kit", changefreq: "weekly", priority: "0.9", bilingual: true },
  { path: "/conteudos", changefreq: "weekly", priority: "0.8", bilingual: true },
  { path: "/conteudos/prompts-economia", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/produto-sugerido-ia", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/retrato-viral-ia", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/ia-tdah-organizacao", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/youtube-monetizacao-ia", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/ia-escalar-negocio", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/claude-code", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/mcp-claude", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/conteudos/claude-skills", changefreq: "monthly", priority: "0.6", bilingual: true },
  { path: "/blog", changefreq: "daily", priority: "0.9" },
];

function esc(s: string): string {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

function buildUrlBlock(loc: string, lastmod: string, changefreq: string, priority: string, alternates?: { pt?: string; en?: string }) {
  let block = `<url><loc>${esc(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority>`;
  if (alternates?.pt) {
    block += `<xhtml:link rel="alternate" hreflang="pt-BR" href="${esc(alternates.pt)}"/>`;
  }
  if (alternates?.en) {
    block += `<xhtml:link rel="alternate" hreflang="en" href="${esc(alternates.en)}"/>`;
  }
  if (alternates?.pt || alternates?.en) {
    const xdefault = alternates.en ?? alternates.pt;
    block += `<xhtml:link rel="alternate" hreflang="x-default" href="${esc(xdefault!)}"/>`;
  }
  block += `</url>`;
  return block;
}

Deno.serve(async () => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, lang, updated_at, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const today = new Date().toISOString().slice(0, 10);
  let urls = "";

  for (const r of STATIC) {
    if (r.bilingual) {
      const ptLoc = `${SITE}${r.path}?lang=pt`;
      const enLoc = `${SITE}${r.path}?lang=en`;
      urls += buildUrlBlock(ptLoc, today, r.changefreq, r.priority, { pt: ptLoc, en: enLoc });
      urls += buildUrlBlock(enLoc, today, r.changefreq, r.priority, { pt: ptLoc, en: enLoc });
    } else {
      urls += buildUrlBlock(`${SITE}${r.path}`, today, r.changefreq, r.priority);
    }
  }

  // group posts by slug for hreflang
  const grouped = new Map<string, { pt?: any; en?: any }>();
  for (const p of posts ?? []) {
    const g = grouped.get(p.slug) ?? {};
    if (p.lang === "pt") g.pt = p;
    if (p.lang === "en") g.en = p;
    grouped.set(p.slug, g);
  }

  for (const [slug, g] of grouped) {
    const lastmod = (g.pt?.updated_at ?? g.en?.updated_at ?? today).slice(0, 10);
    const ptLoc = `${SITE}/blog/${esc(slug)}?lang=pt`;
    const enLoc = `${SITE}/blog/${esc(slug)}?lang=en`;
    if (g.pt) {
      urls += buildUrlBlock(ptLoc, lastmod, "monthly", "0.8", { pt: ptLoc, en: g.en ? enLoc : undefined });
    }
    if (g.en) {
      urls += buildUrlBlock(enLoc, lastmod, "monthly", "0.8", { pt: g.pt ? ptLoc : undefined, en: enLoc });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
