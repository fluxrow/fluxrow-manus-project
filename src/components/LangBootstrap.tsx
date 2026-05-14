import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { detectLang, persistLang } from "@/utils/langDetect";

// Routes that have bilingual rendering driven by ?lang=pt|en
const BILINGUAL_ROUTES = ["/produtos", "/produtos/ai-operator-kit"];

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

    if (!BILINGUAL_ROUTES.includes(location.pathname)) return;

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
