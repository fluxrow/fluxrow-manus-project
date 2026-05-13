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
}

const today = new Date().toISOString().split("T")[0];

const entries: SitemapEntry[] = [
  // Core
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/agencia", changefreq: "weekly", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.8" },

  // Produtos
  { path: "/produtos", changefreq: "weekly", priority: "0.9" },
  { path: "/produtos/ai-operator-kit?lang=en", changefreq: "weekly", priority: "0.9" },
  { path: "/produtos/ai-operator-kit?lang=pt", changefreq: "weekly", priority: "0.9" },
  { path: "/kit/content", changefreq: "monthly", priority: "0.6" },

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
  { path: "/content/ai-scale-business", changefreq: "monthly", priority: "0.6" },

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

// Environment switch:
//   DEPLOY_ENV=staging  -> escreve sitemap mínimo e copia robots.staging.txt
//   DEPLOY_ENV=production (default) -> escreve sitemap completo e mantém robots.production.txt
const env = (process.env.DEPLOY_ENV || "production").toLowerCase();

if (env === "staging") {
  // Sitemap mínimo (sem URLs reais) para evitar descoberta acidental.
  const emptyXml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
    ``,
  ].join("\n");
  writeFileSync(resolve("public/sitemap.xml"), emptyXml);
  // Copia o template restritivo para robots.txt
  const stagingRobots = readFileSync(
    resolve("public/robots.staging.txt"),
    "utf8",
  );
  writeFileSync(resolve("public/robots.txt"), stagingRobots);
  console.log("[staging] empty sitemap.xml + restrictive robots.txt written");
} else {
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  // Garante que o robots.txt em uso é o de produção
  const prodRobots = readFileSync(
    resolve("public/robots.production.txt"),
    "utf8",
  );
  writeFileSync(resolve("public/robots.txt"), prodRobots);
  console.log(
    `[production] sitemap.xml written (${entries.length} entries) + production robots.txt`,
  );
}
