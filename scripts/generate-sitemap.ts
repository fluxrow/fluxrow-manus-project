// Generates public/sitemap.xml from the canonical list of public routes.
// Runs on `predev` and `prebuild`. Private routes (admin, /p/, /c/, /preview,
// /relatorio, briefing, contratos) are intentionally excluded.

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://fluxrow.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  /** When true, emit two URLs (?lang=pt and ?lang=en) with hreflang alternates. */
  bilingual?: boolean;
}

const today = new Date().toISOString().split("T")[0];

const entries: SitemapEntry[] = [
  // Core
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/agencia", changefreq: "weekly", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.8" },

  // Produtos (bilingual)
  { path: "/produtos", changefreq: "weekly", priority: "0.9", bilingual: true },
  { path: "/produtos/ai-operator-kit", changefreq: "weekly", priority: "0.9", bilingual: true },
  { path: "/kit/content", changefreq: "monthly", priority: "0.6" },

  // Editorial hub + posts (bilingual)
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
  { path: "/content/ai-scale-business", changefreq: "monthly", priority: "0.6" },

  // Legal
  { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
];

function urlBlock(loc: string, e: SitemapEntry, alternates?: { hreflang: string; href: string }[]) {
  const lines = [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    ...(alternates ?? []).map(
      (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`,
    ),
    `  </url>`,
  ].filter(Boolean);
  return lines.join("\n");
}

function generateSitemap(items: SitemapEntry[]) {
  const urls: string[] = [];
  for (const e of items) {
    if (e.bilingual) {
      const ptLoc = `${BASE_URL}${e.path}?lang=pt`;
      const enLoc = `${BASE_URL}${e.path}?lang=en`;
      const alternates = [
        { hreflang: "pt-BR", href: ptLoc },
        { hreflang: "en", href: enLoc },
        { hreflang: "x-default", href: enLoc },
      ];
      urls.push(urlBlock(ptLoc, e, alternates));
      urls.push(urlBlock(enLoc, e, alternates));
    } else {
      urls.push(urlBlock(`${BASE_URL}${e.path}`, e));
    }
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

// Sitemap mínimo para staging — apenas a home, para validar parsing
// sem expor rotas reais a crawlers que ignorem o robots.txt restritivo.
const stagingEntries: SitemapEntry[] = [
  { path: "/", changefreq: "never", priority: "0.1", lastmod: today },
];

// Sempre regenerar o template de staging (commitado no repo) para que
// auditorias possam abrir public/sitemap.staging.xml diretamente.
writeFileSync(
  resolve("public/sitemap.staging.xml"),
  generateSitemap(stagingEntries),
);

// Environment switch:
//   DEPLOY_ENV=staging  -> serve sitemap.staging.xml como sitemap.xml + robots restritivo
//   DEPLOY_ENV=production (default) -> sitemap completo + robots de produção
const env = (process.env.DEPLOY_ENV || "production").toLowerCase();

if (env === "staging") {
  const stagingXml = readFileSync(resolve("public/sitemap.staging.xml"), "utf8");
  writeFileSync(resolve("public/sitemap.xml"), stagingXml);
  const stagingRobots = readFileSync(resolve("public/robots.staging.txt"), "utf8");
  writeFileSync(resolve("public/robots.txt"), stagingRobots);
  console.log(`[staging] sitemap.xml (${stagingEntries.length} entry) + restrictive robots.txt written`);
} else {
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  const prodRobots = readFileSync(resolve("public/robots.production.txt"), "utf8");
  writeFileSync(resolve("public/robots.txt"), prodRobots);
  console.log(`[production] sitemap.xml written (${entries.length} entries) + production robots.txt`);
}
