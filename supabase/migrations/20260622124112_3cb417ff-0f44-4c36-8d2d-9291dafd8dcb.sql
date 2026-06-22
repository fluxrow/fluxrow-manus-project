CREATE TABLE public.quiz_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp text NOT NULL,
  score integer NOT NULL,
  result_tier text NOT NULL,
  areas text[] NOT NULL DEFAULT '{}',
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  source text NOT NULL DEFAULT 'diagnostico-ig',
  lang text NOT NULL DEFAULT 'pt',
  utm jsonb,
  user_agent text,
  referrer text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.quiz_leads TO service_role;

ALTER TABLE public.quiz_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role manages quiz_leads"
  ON public.quiz_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX quiz_leads_created_at_idx ON public.quiz_leads (created_at DESC);