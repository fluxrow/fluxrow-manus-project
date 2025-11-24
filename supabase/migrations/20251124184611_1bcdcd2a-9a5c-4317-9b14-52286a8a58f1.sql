-- Add new JSONB columns to relatorios_semanais table
ALTER TABLE public.relatorios_semanais
ADD COLUMN IF NOT EXISTS dados_rd_station jsonb,
ADD COLUMN IF NOT EXISTS dados_asset_groups jsonb,
ADD COLUMN IF NOT EXISTS dados_analytics jsonb;