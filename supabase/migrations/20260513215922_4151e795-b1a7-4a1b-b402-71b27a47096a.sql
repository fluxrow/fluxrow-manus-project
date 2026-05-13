-- Tabela de leads capturados nas páginas de conteúdo
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'pt',
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Índices para consultas comuns
CREATE INDEX idx_leads_email ON public.leads (lower(email));
CREATE INDEX idx_leads_source ON public.leads (source);
CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);

-- Evita duplicar lead na mesma origem
CREATE UNIQUE INDEX idx_leads_unique_email_source
  ON public.leads (lower(email), source);

-- Habilitar RLS — somente service_role acessa (formulário usa edge function)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access leads"
  ON public.leads
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');