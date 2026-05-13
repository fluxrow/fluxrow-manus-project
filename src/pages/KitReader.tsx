import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { KIT_CHAPTERS, type Lang } from "@/content/kitChapters";
import { Loader2, LogOut, ShoppingCart } from "lucide-react";

const COPY = {
  pt: {
    loading: "Verificando acesso…",
    noAccess: "Esse email não tem uma compra do Kit",
    noAccessBody:
      "Se você comprou com outro email, faça login com o email da compra. Caso contrário, garanta seu acesso abaixo.",
    buy: "Comprar o Kit",
    relogin: "Entrar com outro email",
    logout: "Sair",
    chapters: "Capítulos",
    welcome: "Bem-vindo",
  },
  en: {
    loading: "Checking access…",
    noAccess: "This email doesn't have a Kit purchase",
    noAccessBody:
      "If you bought with a different email, log in with that one. Otherwise, get your access below.",
    buy: "Get the Kit",
    relogin: "Sign in with another email",
    logout: "Sign out",
    chapters: "Chapters",
    welcome: "Welcome",
  },
} as const;

type State = "loading" | "no-session" | "no-access" | "ok";

export default function KitReader() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const lang: Lang = params.get("lang") === "en" ? "en" : "pt";
  const t = COPY[lang];
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");
  const [activeSlug, setActiveSlug] = useState(KIT_CHAPTERS[0].slug);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        if (mounted) navigate(`/login?lang=${lang}`, { replace: true });
        return;
      }
      const userEmail = sessionData.session.user.email ?? "";
      const userId = sessionData.session.user.id;
      if (mounted) setEmail(userEmail);

      // Best-effort: link any prior purchase to this user_id
      await supabase
        .from("kit_purchases")
        .update({ user_id: userId })
        .is("user_id", null)
        .ilike("email", userEmail);

      const { data, error } = await supabase.rpc("has_kit_access");
      if (!mounted) return;
      if (error) {
        setState("no-access");
        return;
      }
      setState(data ? "ok" : "no-access");
    };
    check();
    return () => {
      mounted = false;
    };
  }, [lang, navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate(`/login?lang=${lang}`, { replace: true });
  };

  if (state === "loading") {
    return (
      <div className="min-h-screen bg-[#080807] text-white flex items-center justify-center font-dm-mono text-sm">
        <Loader2 className="w-5 h-5 animate-spin mr-3" /> {t.loading}
      </div>
    );
  }

  if (state === "no-access") {
    return (
      <div className="min-h-screen bg-[#080807] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-5">
          <h1 className="font-instrument-serif text-3xl">{t.noAccess}</h1>
          <p className="text-white/60 font-dm-mono text-sm">{t.noAccessBody}</p>
          <p className="text-white/40 font-dm-mono text-xs">{email}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
            <Link
              to={`/produtos/ai-operator-kit?lang=${lang}`}
              className="px-5 py-2.5 bg-white text-black rounded-md font-dm-mono text-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> {t.buy}
            </Link>
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 border border-white/20 hover:border-white/40 rounded-md font-dm-mono text-sm"
            >
              {t.relogin}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const active = KIT_CHAPTERS.find((c) => c.slug === activeSlug) ?? KIT_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-instrument-serif text-xl">
          Fluxrow / AI Operator Kit
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-white/40 font-dm-mono text-xs hidden sm:inline">{email}</span>
          <button
            onClick={handleLogout}
            className="text-white/60 hover:text-white font-dm-mono text-xs flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" /> {t.logout}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] max-w-6xl mx-auto">
        <aside className="border-r border-white/10 p-5 md:min-h-[calc(100vh-65px)]">
          <p className="text-white/40 font-dm-mono text-[10px] uppercase tracking-wider mb-3">
            {t.chapters}
          </p>
          <nav className="space-y-1">
            {KIT_CHAPTERS.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => setActiveSlug(c.slug)}
                className={`w-full text-left px-3 py-2 rounded font-dm-mono text-xs transition ${
                  c.slug === activeSlug
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-white/30 mr-2">{String(i + 1).padStart(2, "0")}</span>
                {c.title[lang]}
              </button>
            ))}
          </nav>
        </aside>

        <main className="p-8 md:p-12 max-w-3xl">
          <h1 className="font-instrument-serif text-4xl md:text-5xl mb-3">
            {active.title[lang]}
          </h1>
          <p className="text-white/50 font-dm-mono text-sm mb-10">{active.summary[lang]}</p>
          <article className="prose prose-invert font-dm-mono text-sm leading-relaxed whitespace-pre-wrap">
            {active.content[lang]}
          </article>
        </main>
      </div>
    </div>
  );
}
