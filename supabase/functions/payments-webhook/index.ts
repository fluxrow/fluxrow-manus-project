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

  // Idempotent insert
  const { data: inserted, error } = await supabase
    .from("kit_purchases")
    .upsert(
      {
        stripe_session_id: session.id,
        stripe_customer_id: session.customer ?? null,
        email,
        lang,
        price_id: priceId,
        amount_total: session.amount_total ?? null,
        currency: session.currency ?? null,
        status: session.payment_status === "paid" ? "paid" : session.payment_status,
        environment: env,
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

  // Trigger email send (function may not exist yet — fire-and-forget, log errors)
  if (inserted && !inserted.email_sent_at) {
    try {
      const { error: invokeError } = await supabase.functions.invoke(
        "send-transactional-email",
        {
          body: {
            templateName: lang === "en" ? "kit-delivery-en" : "kit-delivery-pt",
            recipientEmail: email,
            idempotencyKey: `kit-delivery-${session.id}`,
            templateData: {
              accessToken: inserted.access_token,
              amount: session.amount_total,
              currency: session.currency,
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
