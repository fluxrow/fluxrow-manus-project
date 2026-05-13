// Dynamic sitemap.xml: includes static routes + all published blog posts (PT + EN)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE = "https://fluxrow.com";

const STATIC = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/agencia", changefreq: "monthly", priority: "0.8" },
  { path: "/produtos", changefreq: "monthly", priority: "0.8" },
  { path: "/produtos/ai-operator-kit", changefreq: "weekly", priority: "0.9" },
  { path: "/conteudos", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/claude-code", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/claude-skills", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/mcp", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/ia-escalar", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/ia-marketing", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/prompts", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/retrato-ia", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/tdah", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/youtube-monetizacao", changefreq: "monthly", priority: "0.7" },
  { path: "/contato", changefreq: "yearly", priority: "0.5" },
  { path: "/blog", changefreq: "daily", priority: "0.9" },
];

function esc(s: string): string {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
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
    urls += `<url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`;
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
      urls += `<url><loc>${ptLoc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority>`;
      urls += `<xhtml:link rel="alternate" hreflang="pt-BR" href="${ptLoc}"/>`;
      if (g.en) urls += `<xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>`;
      urls += `</url>`;
    }
    if (g.en) {
      urls += `<url><loc>${enLoc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority>`;
      urls += `<xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>`;
      if (g.pt) urls += `<xhtml:link rel="alternate" hreflang="pt-BR" href="${ptLoc}"/>`;
      urls += `</url>`;
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
