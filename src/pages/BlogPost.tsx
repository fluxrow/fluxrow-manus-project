import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";

type Post = {
  slug: string;
  lang: string;
  title: string;
  excerpt: string;
  body_md: string;
  tags: string[];
  keywords: string[];
  sources: { url: string; title?: string }[];
  reading_minutes: number;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string;
  updated_at: string;
};

function detectLang(): "pt" | "en" {
  const url = new URLSearchParams(window.location.search).get("lang");
  if (url === "en" || url === "pt") return url;
  if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) return "en";
  return "pt";
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [post, setPost] = useState<Post | null>(null);
  const [related, setRelated] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasOtherLang, setHasOtherLang] = useState(false);

  useEffect(() => {
    const l = detectLang();
    setLang(l);
    if (!slug) return;
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("lang", l)
        .eq("status", "published")
        .maybeSingle();
      setPost((data as Post) ?? null);

      // Check the other language
      const otherLang = l === "pt" ? "en" : "pt";
      const { data: other } = await supabase
        .from("blog_posts")
        .select("slug")
        .eq("slug", slug)
        .eq("lang", otherLang)
        .eq("status", "published")
        .maybeSingle();
      setHasOtherLang(!!other);

      // Related: same lang, share at least one tag, exclude current
      if (data?.tags?.length) {
        const { data: rel } = await supabase
          .from("blog_posts")
          .select("slug, lang, title, excerpt, tags, reading_minutes, published_at, body_md, keywords, sources, seo_title, seo_description, updated_at")
          .eq("lang", l)
          .eq("status", "published")
          .neq("slug", slug)
          .overlaps("tags", data.tags)
          .order("published_at", { ascending: false })
          .limit(3);
        setRelated((rel as Post[]) ?? []);
      }

      // Fire-and-forget view increment
      void supabase.rpc("increment_blog_view", { _slug: slug, _lang: l });

      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-[#080807] flex items-center justify-center text-white/40">…</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#080807] text-white flex flex-col items-center justify-center px-6">
        <p className="text-white/60 mb-4">{lang === "en" ? "Article not found." : "Artigo não encontrado."}</p>
        <Link to="/blog" className="underline">{lang === "en" ? "Back to blog" : "Voltar ao blog"}</Link>
      </div>
    );
  }

  const canonical = `https://fluxrow.com/blog/${post.slug}${lang === "en" ? "?lang=en" : ""}`;
  const ptUrl = `https://fluxrow.com/blog/${post.slug}`;
  const enUrl = `https://fluxrow.com/blog/${post.slug}?lang=en`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo_description ?? post.excerpt,
    inLanguage: lang === "en" ? "en-US" : "pt-BR",
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: "Fluxrow", url: "https://fluxrow.com" },
    publisher: { "@type": "Organization", name: "Fluxrow", url: "https://fluxrow.com" },
    keywords: post.keywords?.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <Helmet>
        <html lang={lang === "en" ? "en" : "pt-BR"} />
        <title>{post.seo_title || post.title}</title>
        <meta name="description" content={post.seo_description || post.excerpt} />
        <meta name="keywords" content={post.keywords?.join(", ")} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={ptUrl} />
        {hasOtherLang && <link rel="alternate" hrefLang="en" href={enUrl} />}
        <link rel="alternate" hrefLang="x-default" href={ptUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seo_title || post.title} />
        <meta property="og:description" content={post.seo_description || post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <header className="border-b border-white/10 px-6 py-6 sticky top-0 bg-[#080807]/90 backdrop-blur z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/blog" className="text-sm text-white/60 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> {lang === "en" ? "All articles" : "Todos os artigos"}
          </Link>
          {hasOtherLang && (
            <a href={lang === "en" ? ptUrl : enUrl} className="text-xs font-mono text-white/50 hover:text-white">
              {lang === "en" ? "Ler em PT" : "Read in EN"}
            </a>
          )}
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4 font-mono uppercase tracking-wider">
          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString(lang === "en" ? "en-US" : "pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.reading_minutes} {lang === "en" ? "min read" : "min de leitura"}</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{post.title}</h1>
        <p className="text-white/70 text-lg mb-10">{post.excerpt}</p>

        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-white
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-white/80 prose-p:leading-relaxed
          prose-a:text-cyan-300 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-li:text-white/80
          prose-code:text-cyan-200 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-blockquote:border-l-cyan-500 prose-blockquote:text-white/60">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body_md}</ReactMarkdown>
        </div>

        {post.sources?.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="font-serif text-lg mb-4 text-white/60">{lang === "en" ? "Sources" : "Fontes consultadas"}</h3>
            <ul className="space-y-2 text-sm">
              {post.sources.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cyan-300 inline-flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    {s.title || s.url.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 border border-white/10 rounded text-white/50 font-mono">{tag}</span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 border border-cyan-500/30 rounded-2xl bg-cyan-500/5">
          <h3 className="font-serif text-2xl mb-3">
            {lang === "en" ? "Want to put AI to work in your business?" : "Quer colocar IA pra trabalhar no seu negócio?"}
          </h3>
          <p className="text-white/70 mb-5">
            {lang === "en"
              ? "The AI Operator Kit is the practitioner's playbook to ship real AI workflows in days, not months."
              : "O AI Operator Kit é o playbook prático para você operar IA de verdade em dias, não meses."}
          </p>
          <Link to={`/produtos/ai-operator-kit?lang=${lang}`} className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition">
            {lang === "en" ? "See the Kit →" : "Conhecer o Kit →"}
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl mb-6">{lang === "en" ? "Read next" : "Leia também"}</h3>
            <div className="grid gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}?lang=${lang}`} className="block border border-white/10 rounded-lg p-5 hover:border-white/30 transition">
                  <h4 className="font-serif text-lg mb-2">{r.title}</h4>
                  <p className="text-white/50 text-sm line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
