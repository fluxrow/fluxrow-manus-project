-- Adicionar coluna cnpj_contratada na tabela contratos_assinados
ALTER TABLE contratos_assinados 
ADD COLUMN IF NOT EXISTS cnpj_contratada TEXT;

-- Atualizar o registro existente com os dados corretos
UPDATE contratos_assinados
SET 
  cnpj_contratante = '61260831000197',  -- CNPJ da Fluxrow (contratante)
  nome_contratante = 'Fluxrow Inteligência Criativa',
  cpf_contratante = '33038348813',  -- CPF do Fabio (representante da Fluxrow)
  cnpj_contratada = '34325200000136',  -- CNPJ da Match Solutions (contratada)
  nome_contratada = 'Match Solutions',
  cpf_contratada = '00000000000',  -- CPF placeholder para o Thiago assinar depois
  updated_at = now()
WHERE id = '678ed11f-b9cb-44c0-9615-f23d4c09a9a9';