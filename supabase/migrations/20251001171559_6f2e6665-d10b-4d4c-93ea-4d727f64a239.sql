-- Adicionar campo email_contratante na tabela contratos_assinados
ALTER TABLE public.contratos_assinados
ADD COLUMN email_contratante TEXT;

-- Adicionar comentário explicativo
COMMENT ON COLUMN public.contratos_assinados.email_contratante IS 'Email da empresa contratante para envio de notificações';