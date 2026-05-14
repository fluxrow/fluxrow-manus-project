import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { detectLang, persistLang, type Lang } from "@/utils/langDetect";

/**
 * Routes (or route prefixes) that render bilingually based on ?lang=pt|en.
 * Use a trailing "/*" to match a prefix (e.g. all content articles).
 */
const BILINGUAL_PATTERNS = [
  "/produtos",
  "/produtos/ai-operator-kit",
  "/conteudos",
  "/conteudos/*",
];

const SITE_ORIGIN = "https://fluxrow.com";

/**
 * Per-route bilingual meta. Keys match pathname; "default" applies to any
 * bilingual route without a specific entry (e.g. individual articles).
 */
type MetaPair = { title: string; description: string };
const META: Record<string, Record<Lang, MetaPair>> = {
  "/produtos": {
    pt: {
      title: "Produtos — Fluxrow",
      description:
        "Kits e sistemas práticos para operar com IA. Validação manual antes de automatizar.",
    },
    en: {
      title: "Products — Fluxrow",
      description:
        "Practical kits and systems to operate with AI. Validate manually before automating.",
    },
  },
  "/produtos/ai-operator-kit": {
    pt: {
      title: "AI Operator Kit — Sistema prático para operar com IA",
      description:
        "Kit bilíngue com 10 capítulos, repositório de SKILL.md e três trilhas de execução. R$147.",
    },
    en: {
      title: "AI Operator Kit — A practical system to operate with AI",
      description:
        "Bilingual kit with 10 chapters, SKILL.md repository, and three execution paths. $27.",
    },
  },
  "/conteudos": {
    pt: {
      title: "Conteúdos — Fluxrow",
      description:
        "Ensaios e guias práticos sobre IA aplicada a operações reais.",
    },
    en: {
      title: "Content — Fluxrow",
      description:
        "Essays and practical guides on AI applied to real operations.",
    },
  },
};

function isBilingualPath(pathname: string): boolean {
  return BILINGUAL_PATTERNS.some((pattern) => {
    if (pattern.endsWith("/*")) {
      const base = pattern.slice(0, -2);
      return pathname === base || pathname.startsWith(`${base}/`);
    }
    return pathname === pattern;
  });
}

function getMeta(pathname: string, lang: Lang): MetaPair | null {
  return META[pathname]?.[lang] ?? null;
}

function readUrlLang(search: string): Lang | null {
  const v = new URLSearchParams(search).get("lang");
  return v === "pt" || v === "en" ? v : null;
}

/**
 * On every navigation, if the current route is bilingual and has no explicit
 * ?lang param, append the detected language and persist it. Also injects
 * <html lang>, hreflang alternates, and PT/EN title/description so search
 * engines and social crawlers see the right language for the active route.
 */
export const LangBootstrap = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(location.search);
    const urlLang = params.get("lang");

    if (urlLang === "pt" || urlLang === "en") {
      persistLang(urlLang);
      return;
    }

    if (!isBilingualPath(location.pathname)) return;

    const lang = detectLang();
    params.set("lang", lang);
    navigate(
      { pathname: location.pathname, search: `?${params.toString()}`, hash: location.hash },
      { replace: true }
    );
  }, [location.pathname, location.search, location.hash, navigate]);

  // Render hreflang + meta only for bilingual routes.
  if (!isBilingualPath(location.pathname)) return null;

  const activeLang: Lang = readUrlLang(location.search) ?? detectLang();
  const meta = getMeta(location.pathname, activeLang);

  const baseUrl = `${SITE_ORIGIN}${location.pathname}`;
  const ptUrl = `${baseUrl}?lang=pt`;
  const enUrl = `${baseUrl}?lang=en`;
  const canonical = activeLang === "pt" ? ptUrl : enUrl;

  return (
    <Helmet>
      <html lang={activeLang === "pt" ? "pt-BR" : "en"} />
      {meta && <title>{meta.title}</title>}
      {meta && <meta name="description" content={meta.description} />}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="pt-BR" href={ptUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      {meta && <meta property="og:title" content={meta.title} />}
      {meta && <meta property="og:description" content={meta.description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={activeLang === "pt" ? "pt_BR" : "en_US"} />
      <meta
        property="og:locale:alternate"
        content={activeLang === "pt" ? "en_US" : "pt_BR"}
      />
    </Helmet>
  );
};

export default LangBootstrap;
