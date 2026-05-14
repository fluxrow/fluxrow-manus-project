import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { detectLang, persistLang } from "@/utils/langDetect";

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

function isBilingualPath(pathname: string): boolean {
  return BILINGUAL_PATTERNS.some((pattern) => {
    if (pattern.endsWith("/*")) {
      const base = pattern.slice(0, -2);
      return pathname === base || pathname.startsWith(`${base}/`);
    }
    return pathname === pattern;
  });
}

/**
 * On every navigation, if the current route is bilingual and has no explicit
 * ?lang param, append the detected language and persist it. This guarantees
 * a fluid, language-matched experience from the very first click.
 */
export const LangBootstrap = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(location.search);
    const urlLang = params.get("lang");

    // Always persist when an explicit choice is in the URL.
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

  return null;
};

export default LangBootstrap;
