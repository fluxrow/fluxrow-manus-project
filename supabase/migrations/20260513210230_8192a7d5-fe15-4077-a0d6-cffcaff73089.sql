CREATE TABLE public.kit_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id text NOT NULL UNIQUE,
  stripe_customer_id text,
  email text NOT NULL,
  lang text NOT NULL DEFAULT 'pt' CHECK (lang IN ('pt','en')),
  price_id text,
  amount_total integer,
  currency text,
  status text NOT NULL DEFAULT 'paid',
  access_token uuid NOT NULL DEFAULT gen_random_uuid(),
  email_sent_at timestamptz,
  environment text NOT NULL DEFAULT 'sandbox',
  raw jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_kit_purchases_email ON public.kit_purchases(email);
CREATE INDEX idx_kit_purchases_session ON public.kit_purchases(stripe_session_id);

ALTER TABLE public.kit_purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access kit_purchases"
ON public.kit_purchases
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE TRIGGER kit_purchases_set_updated_at
BEFORE UPDATE ON public.kit_purchases
FOR EACH ROW
EXECUTE FUNCTION public.update_contratos_updated_at();