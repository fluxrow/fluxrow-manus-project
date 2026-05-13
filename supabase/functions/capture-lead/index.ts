// Edge function: capture-lead
// Validates input, inserts into public.leads, returns generic responses.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v) && v.length <= 255;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Verify apikey is present
  const apikey = req.headers.get("apikey") ?? req.headers.get("x-api-key");
  if (!apikey) return json({ ok: false, error: "missing_apikey" }, 401);

  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);

  let body: { name?: unknown; email?: unknown; source?: unknown; lang?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_payload" }, 400);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "";
  const lang = typeof body.lang === "string" && (body.lang === "pt" || body.lang === "en")
    ? body.lang
    : "pt";

  if (!name || name.length < 2 || name.length > 100) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }
  if (!email || !isEmail(email)) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }
  if (!source || source.length > 80) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  const metadata = {
    user_agent: req.headers.get("user-agent") ?? null,
    referer: req.headers.get("referer") ?? null,
  };

  try {
    const { error } = await supabase.from("leads").insert({
      name,
      email,
      source,
      lang,
      metadata,
    });

    if (error) {
      // Duplicate (unique violation): idempotent success with a flag
      if (error.code === "23505") {
        return json({ ok: true, duplicate: true });
      }
      return json({ ok: false, error: "insert_failed" }, 500);
    }
  } catch (_err) {
    return json({ ok: false, error: "internal_error" }, 500);
  }

  return json({ ok: true, duplicate: false });
});
