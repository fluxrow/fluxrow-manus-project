// Cron-triggered: flips scheduled blog posts to published when due.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const apikey = req.headers.get("apikey") ?? req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!apikey) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase
      .from("blog_posts")
      .update({ status: "published", updated_at: new Date().toISOString() })
      .eq("status", "scheduled")
      .lte("published_at", new Date().toISOString())
      .select("slug, lang, published_at");

    if (error) throw error;

    return new Response(JSON.stringify({ ok: true, published: data?.length ?? 0, posts: data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (_e) {
    return new Response(JSON.stringify({ error: "internal_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
