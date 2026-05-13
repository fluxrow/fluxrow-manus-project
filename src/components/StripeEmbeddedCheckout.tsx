import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

interface StripeEmbeddedCheckoutProps {
  priceId: string;
  quantity?: number;
  customerEmail?: string;
  userId?: string;
  returnUrl?: string;
  title?: string;
  subtitle?: string;
}

export function StripeEmbeddedCheckout({
  priceId,
  quantity,
  customerEmail,
  userId,
  returnUrl,
  title = "Finalizar compra",
  subtitle,
}: StripeEmbeddedCheckoutProps) {
  const fetchClientSecret = async (): Promise<string> => {
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: {
        priceId,
        quantity,
        customerEmail,
        userId,
        returnUrl: returnUrl || `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
        environment: getStripeEnvironment(),
      },
    });
    if (error || !data?.clientSecret) {
      throw new Error(error?.message || "Falha ao iniciar checkout");
    }
    return data.clientSecret;
  };

  const checkoutOptions = { fetchClientSecret };

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {subtitle}
            </p>
          )}
        </header>

        <div
          id="checkout"
          className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <EmbeddedCheckoutProvider stripe={getStripe()} options={checkoutOptions}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>

        <p
          className="mt-6 text-center text-xs text-white/40"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Pagamento seguro processado pela Stripe.
        </p>
      </div>
    </div>
  );
}
