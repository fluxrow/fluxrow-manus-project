
-- Remove public SELECT policy that exposes all reports without authentication
DROP POLICY IF EXISTS "Qualquer um pode visualizar relatórios" ON public.relatorios_semanais;

-- Only service_role can read reports (edge functions and admin access)
CREATE POLICY "Only service role can read reports"
  ON public.relatorios_semanais
  FOR SELECT
  USING (auth.role() = 'service_role');
