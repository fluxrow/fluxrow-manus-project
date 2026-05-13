import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, verifyWebhook } from "../_shared/stripe.ts";

let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
  }
  return _supabase;
}

function getSiteUrl(): string {
  // Prefer explicit SITE_URL secret; fallback to production canonical.
  return Deno.env.get("SITE_URL") || "https://fluxrow.com";
}

async function generateMagicLink(email: string, lang: string) {
  const supabase = getSupabase();
  const redirectTo = `${getSiteUrl()}/kit?lang=${lang}`;

  const { data, error } = await supabase.auth.admin.generateLink({
    type: "magiclink",
    email,
    options: { redirectTo },
  });

  if (error) {
    console.error("generateLink error:", error.message);
    return { actionLink: null as string | null, userId: null as string | null };
  }
  // The action_link is a URL to /auth/v1/verify?token=... that, when opened,
  // logs the user in and redirects to redirectTo.
  const actionLink =
    (data?.properties?.action_link as string | undefined) ?? null;
  const userId = (data?.user?.id as string | undefined) ?? null;
  return { actionLink, userId };
}

async function handleCheckoutCompleted(session: any, env: StripeEnv) {
  const email =
    session.customer_details?.email ||
    session.customer_email ||
    null;
  const lang = session.metadata?.lang === "en" ? "en" : "pt";
  const priceId = session.metadata?.priceId || null;

  if (!email) {
    console.error("checkout.session.completed without email", session.id);
    return;
  }

  const supabase = getSupabase();
  const normalizedEmail = String(email).trim().toLowerCase();

  // 1. Generate magic link (also creates the auth.user if missing)
  const { actionLink, userId } = await generateMagicLink(normalizedEmail, lang);

  // 2. Idempotent upsert with user_id linked
  const { data: inserted, error } = await supabase
    .from("kit_purchases")
    .upsert(
      {
        stripe_session_id: session.id,
        stripe_customer_id: session.customer ?? null,
        email: normalizedEmail,
        lang,
        price_id: priceId,
        amount_total: session.amount_total ?? null,
        currency: session.currency ?? null,
        status: session.payment_status === "paid" ? "paid" : session.payment_status,
        environment: env,
        user_id: userId,
        raw: session,
      },
      { onConflict: "stripe_session_id", ignoreDuplicates: false },
    )
    .select()
    .single();

  if (error) {
    console.error("kit_purchases upsert error:", error.message);
    throw error;
  }

  // 3. Send delivery email with magic link
  if (inserted && !inserted.email_sent_at && actionLink) {
    try {
      const { error: invokeError } = await supabase.functions.invoke(
        "send-transactional-email",
        {
          body: {
            templateName: lang === "en" ? "kit-delivery-en" : "kit-delivery-pt",
            recipientEmail: normalizedEmail,
            idempotencyKey: `kit-delivery-${session.id}`,
            templateData: {
              magicLink: actionLink,
              amount: session.amount_total,
              currency: session.currency,
              email: normalizedEmail,
            },
          },
        },
      );
      if (invokeError) {
        console.error("send-transactional-email invoke error:", invokeError.message);
      } else {
        await supabase
          .from("kit_purchases")
          .update({ email_sent_at: new Date().toISOString() })
          .eq("stripe_session_id", session.id);
      }
    } catch (e) {
      console.error("Email send failed (will retry on next event):", e);
    }
  } else if (!actionLink) {
    console.error("No magic link generated; skipping email for", session.id);
  }
}

async function handleWebhook(req: Request, env: StripeEnv) {
  const event = await verifyWebhook(req, env);

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
      await handleCheckoutCompleted(event.data.object, env);
      break;
    default:
      console.log("Unhandled event:", event.type);
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const rawEnv = new URL(req.url).searchParams.get("env");
  if (rawEnv !== "sandbox" && rawEnv !== "live") {
    console.error("Webhook received with invalid env:", rawEnv);
    return new Response(JSON.stringify({ received: true, ignored: "invalid env" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    await handleWebhook(req, rawEnv as StripeEnv);
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response("Webhook error", { status: 400 });
  }
});
