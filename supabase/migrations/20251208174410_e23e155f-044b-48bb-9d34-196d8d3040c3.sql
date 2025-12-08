-- Fix PUBLIC_DATA_EXPOSURE: Restrict access to contratos_assinados table
-- Only service_role (used by edge functions) should have access

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Acesso controlado via edge functions" ON public.contratos_assinados;

-- Create restrictive policy that only allows service_role access
-- Edge functions use SUPABASE_SERVICE_ROLE_KEY which has service_role
CREATE POLICY "Only service role can access contracts"
ON public.contratos_assinados
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');