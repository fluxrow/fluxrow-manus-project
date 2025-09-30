-- Corrigir inversão de contratante/contratada no registro existente
UPDATE contratos_assinados
SET 
  nome_contratante = 'Match Solutions Fios e Cabos Elétricos LTDA',
  cnpj_contratante = '34325200000136',  -- CNPJ da Match Solutions (contratante)
  cpf_contratante = '00000000000',  -- CPF placeholder do Thiago
  nome_contratada = 'Fluxrow Inteligência Criativa',
  cnpj_contratada = '61260831000197',  -- CNPJ da Fluxrow (contratada)
  cpf_contratada = '33038348813',  -- CPF do Fabio
  updated_at = now()
WHERE id = '678ed11f-b9cb-44c0-9615-f23d4c09a9a9';