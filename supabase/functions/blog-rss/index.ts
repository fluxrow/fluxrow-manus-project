// RSS feed for the bilingual blog. Lang via ?lang=pt|en, default pt.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE = "https://fluxrow.com";

function esc(s: string): string {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") === "en" ? "en" : "pt";

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, published_at")
    .eq("status", "published")
    .eq("lang", lang)
    .order("published_at", { ascending: false })
    .limit(50);

  const items = (data ?? []).map((p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${esc(p.slug)}?lang=${lang}</link>
      <guid>${SITE}/blog/${esc(p.slug)}?lang=${lang}</guid>
      <description>${esc(p.excerpt ?? "")}</description>
      <pubDate>${new Date(p.published_at).toUTCString()}</pubDate>
    </item>`).join("");

  const title = lang === "en" ? "Fluxrow Blog" : "Blog Fluxrow";
  const desc = lang === "en"
    ? "Daily AI, Lovable, and automation news, written by practitioners."
    : "Notícias diárias sobre IA, Lovable e automação, escritas por quem opera.";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${title}</title>
  <link>${SITE}/blog?lang=${lang}</link>
  <description>${desc}</description>
  <language>${lang === "en" ? "en-US" : "pt-BR"}</language>
  ${items}
</channel></rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=1800" },
  });
});
