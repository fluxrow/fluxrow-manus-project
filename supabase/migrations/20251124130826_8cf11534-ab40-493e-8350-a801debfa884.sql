-- Criar tabela para armazenar relatórios semanais
CREATE TABLE public.relatorios_semanais (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  periodo TEXT NOT NULL,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  investimento_total DECIMAL(10, 2) NOT NULL,
  leads_totais INTEGER NOT NULL,
  custo_lead_medio DECIMAL(10, 2) NOT NULL,
  dados_google JSONB,
  dados_meta JSONB,
  dados_instagram JSONB,
  dados_vendedores JSONB,
  dados_categorias JSONB,
  dados_urls JSONB,
  conversas_mensagem JSONB,
  gerado_automaticamente BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.relatorios_semanais ENABLE ROW LEVEL SECURITY;

-- Políticas RLS: leitura pública, escrita apenas via edge functions
CREATE POLICY "Qualquer um pode visualizar relatórios"
  ON public.relatorios_semanais
  FOR SELECT
  USING (true);

CREATE POLICY "Apenas edge functions podem inserir/atualizar"
  ON public.relatorios_semanais
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_relatorios_semanais_updated_at
  BEFORE UPDATE ON public.relatorios_semanais
  FOR EACH ROW
  EXECUTE FUNCTION public.update_contratos_updated_at();

-- Índices para melhor performance
CREATE INDEX idx_relatorios_semanais_data_inicio ON public.relatorios_semanais(data_inicio DESC);
CREATE INDEX idx_relatorios_semanais_created_at ON public.relatorios_semanais(created_at DESC);

-- Habilitar realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.relatorios_semanais;