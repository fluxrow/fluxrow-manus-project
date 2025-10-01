-- Adicionar campos separados para assinatura de contratante e contratada
ALTER TABLE public.contratos_assinados 
ADD COLUMN IF NOT EXISTS contratante_assinatura_nome text,
ADD COLUMN IF NOT EXISTS contratante_assinatura_cpf text,
ADD COLUMN IF NOT EXISTS contratante_assinatura_cargo text,
ADD COLUMN IF NOT EXISTS contratante_data_assinatura timestamp with time zone,
ADD COLUMN IF NOT EXISTS contratada_assinatura_nome text,
ADD COLUMN IF NOT EXISTS contratada_assinatura_cpf text,
ADD COLUMN IF NOT EXISTS contratada_assinatura_cargo text,
ADD COLUMN IF NOT EXISTS contratada_data_assinatura timestamp with time zone;

-- Migrar dados existentes: contratos com status 'assinado' viram 'totalmente_assinado'
-- e assumimos que os dados atuais são da CONTRATADA (Fluxrow)
UPDATE public.contratos_assinados 
SET 
  contratada_assinatura_nome = assinatura_nome_responsavel,
  contratada_assinatura_cpf = assinatura_cpf_responsavel,
  contratada_assinatura_cargo = assinatura_cargo_responsavel,
  contratada_data_assinatura = data_assinatura,
  status = 'parcialmente_assinado'
WHERE status = 'assinado' AND assinatura_nome_responsavel IS NOT NULL;

-- Atualizar constraint de status para incluir novos estados
ALTER TABLE public.contratos_assinados DROP CONSTRAINT IF EXISTS contratos_assinados_status_check;
ALTER TABLE public.contratos_assinados 
ADD CONSTRAINT contratos_assinados_status_check 
CHECK (status IN ('pendente', 'parcialmente_assinado', 'totalmente_assinado', 'assinado'));

-- Comentários para documentação
COMMENT ON COLUMN public.contratos_assinados.contratante_assinatura_nome IS 'Nome do representante legal da CONTRATANTE (Match Solutions)';
COMMENT ON COLUMN public.contratos_assinados.contratada_assinatura_nome IS 'Nome do representante legal da CONTRATADA (Fluxrow)';
COMMENT ON COLUMN public.contratos_assinados.status IS 'Status: pendente, parcialmente_assinado (1 parte assinou), totalmente_assinado (ambas assinaram), assinado (legado)';