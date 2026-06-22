// Edge function: capture-quiz-lead
// Validates quiz submission, inserts into public.quiz_leads, returns generic responses.

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const apikey = req.headers.get("apikey") ?? req.headers.get("x-api-key");
  if (!apikey) return json({ ok: false, error: "missing_apikey" }, 401);

  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_payload" }, 400);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const whatsappRaw = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
  const whatsapp = whatsappRaw.slice(0, 32);
  const score = typeof body.score === "number" && Number.isFinite(body.score) ? Math.trunc(body.score) : -1;
  const result_tier = typeof body.result_tier === "string" ? body.result_tier.trim().slice(0, 32) : "";
  const areas = Array.isArray(body.areas)
    ? body.areas.filter((a): a is string => typeof a === "string").slice(0, 10).map((a) => a.slice(0, 64))
    : [];
  const answers = body.answers && typeof body.answers === "object" ? body.answers : {};
  const source = typeof body.source === "string" ? body.source.trim().slice(0, 80) : "diagnostico-ig";
  const lang = body.lang === "en" ? "en" : "pt";
  const utm = body.utm && typeof body.utm === "object" ? body.utm : null;
  const referrer = typeof body.referrer === "string" ? body.referrer.slice(0, 500) : null;

  if (!name || name.length < 2 || name.length > 100) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }
  if (!whatsapp || whatsapp.length < 8 || whatsapp.length > 32) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }
  if (score < 0 || score > 100) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }
  if (!result_tier) {
    return json({ ok: false, error: "invalid_input" }, 400);
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  try {
    const { error } = await supabase.from("quiz_leads").insert({
      name,
      whatsapp,
      score,
      result_tier,
      areas,
      answers,
      source,
      lang,
      utm,
      user_agent: req.headers.get("user-agent") ?? null,
      referrer,
    });

    if (error) {
      return json({ ok: false, error: "insert_failed" }, 500);
    }
  } catch (_err) {
    return json({ ok: false, error: "internal_error" }, 500);
  }

  return json({ ok: true });
});
