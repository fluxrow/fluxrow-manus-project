
-- Drop the overly permissive ALL policy
DROP POLICY IF EXISTS "Apenas edge functions podem inserir/atualizar" ON public.relatorios_semanais;

-- Create restrictive write policy for service_role only
CREATE POLICY "Only service role can write reports"
  ON public.relatorios_semanais
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
