-- Add WhatsApp conversions data column
ALTER TABLE public.relatorios_semanais
ADD COLUMN IF NOT EXISTS dados_whatsapp_conversoes JSONB DEFAULT NULL;

-- Add comment for documentation
COMMENT ON COLUMN public.relatorios_semanais.dados_whatsapp_conversoes IS 'Dados de conversões WhatsApp separados por plataforma (Google vs Meta)';