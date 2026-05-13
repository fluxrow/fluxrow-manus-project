// Generates public/sitemap.xml from the canonical list of public routes.
// Runs on `predev` and `prebuild`. Private routes (admin, /p/, /c/, /preview,
// /relatorio, briefing, contratos) are intentionally excluded.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://fluxrow.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().split("T")[0];

const entries: SitemapEntry[] = [
  // Core
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/contato", changefreq: "monthly", priority: "0.8" },

  // Produtos (hub + páginas)
  { path: "/produtos", changefreq: "weekly", priority: "0.9" },
  { path: "/kit", changefreq: "weekly", priority: "0.9" },
  { path: "/kit/content", changefreq: "monthly", priority: "0.7" },
  { path: "/curso-ia-operator", changefreq: "weekly", priority: "0.9" },

  // Editorial hub + posts
  { path: "/conteudos", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/prompts-economia", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/produto-sugerido-ia", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/retrato-viral-ia", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/ia-tdah-organizacao", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/youtube-monetizacao-ia", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/ia-escalar-negocio", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/claude-code", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/mcp-claude", changefreq: "monthly", priority: "0.6" },
  { path: "/conteudos/claude-skills", changefreq: "monthly", priority: "0.6" },

  // Legal
  { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
