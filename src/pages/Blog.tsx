import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Calendar } from "lucide-react";

type Post = {
  slug: string;
  lang: string;
  title: string;
  excerpt: string;
  tags: string[];
  reading_minutes: number;
  published_at: string;
};

function detectLang(): "pt" | "en" {
  const url = new URLSearchParams(window.location.search).get("lang");
  if (url === "en" || url === "pt") return url;
  if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) return "en";
  return "pt";
}

const COPY = {
  pt: {
    title: "Blog Fluxrow — IA, Lovable e automação",
    desc: "Notícias, análises e tutoriais sobre inteligência artificial, Lovable, Claude, agentes e automação. Atualizado todos os dias.",
    h1: "Blog Fluxrow",
    sub: "Notícias e análises diárias sobre IA aplicada, Lovable, Claude, agentes e automação prática para negócios.",
    empty: "Os primeiros artigos chegam em breve. Volte amanhã.",
    read: "Ler artigo",
    min: "min de leitura",
    tagsLabel: "Tópicos",
  },
  en: {
    title: "Fluxrow Blog — AI, Lovable, and automation",
    desc: "Daily news, analysis, and tutorials on AI, Lovable, Claude, agents, and practical business automation.",
    h1: "Fluxrow Blog",
    sub: "Daily news and analysis on applied AI, Lovable, Claude, agents, and practical business automation.",
    empty: "First articles arriving soon. Come back tomorrow.",
    read: "Read article",
    min: "min read",
    tagsLabel: "Topics",
  },
};

export default function Blog() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const l = detectLang();
    setLang(l);
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("slug, lang, title, excerpt, tags, reading_minutes, published_at")
        .eq("status", "published")
        .eq("lang", l)
        .order("published_at", { ascending: false })
        .limit(50);
      setPosts((data ?? []) as Post[]);
      setLoading(false);
    })();
  }, []);

  const t = COPY[lang];
  const canonical = `https://fluxrow.com/blog${lang === "en" ? "?lang=en" : ""}`;

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <Helmet>
        <html lang={lang === "en" ? "en" : "pt-BR"} />
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href="https://fluxrow.com/blog" />
        <link rel="alternate" hrefLang="en" href="https://fluxrow.com/blog?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://fluxrow.com/blog" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <link rel="alternate" type="application/rss+xml" title="Fluxrow Blog RSS" href={`https://lpuybtjctiffqlabjszc.supabase.co/functions/v1/blog-rss?lang=${lang}`} />
      </Helmet>

      <header className="border-b border-white/10 px-6 py-8 sticky top-0 bg-[#080807]/90 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl">Fluxrow</Link>
          <div className="flex items-center gap-4 text-sm">
            <button onClick={() => { window.location.search = "?lang=pt"; }} className={lang === "pt" ? "text-white" : "text-white/50"}>PT</button>
            <button onClick={() => { window.location.search = "?lang=en"; }} className={lang === "en" ? "text-white" : "text-white/50"}>EN</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-4">{t.h1}</h1>
        <p className="text-white/60 text-lg max-w-2xl mb-16">{t.sub}</p>

        {loading ? (
          <div className="text-white/40">…</div>
        ) : posts.length === 0 ? (
          <div className="text-white/40 border border-dashed border-white/10 rounded-xl p-12 text-center">{t.empty}</div>
        ) : (
          <div className="grid gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}?lang=${lang}`}
                className="group block border-b border-white/10 pb-8 hover:border-white/30 transition"
              >
                <div className="flex items-center gap-4 text-xs text-white/40 mb-3 font-mono uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{new Date(p.published_at).toLocaleDateString(lang === "en" ? "en-US" : "pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.reading_minutes} {t.min}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 group-hover:text-cyan-200 transition">{p.title}</h2>
                <p className="text-white/60 text-base mb-4 max-w-3xl">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 border border-white/10 rounded text-white/50 font-mono">{tag}</span>
                    ))}
                  </div>
                  <span className="text-sm text-white/40 group-hover:text-white flex items-center gap-1 transition">
                    {t.read} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
