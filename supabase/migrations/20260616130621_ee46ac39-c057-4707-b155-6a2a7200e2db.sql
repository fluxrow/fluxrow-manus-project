
-- Fix kit_purchases: remove JWT email fallback (unverified claim)
DROP POLICY IF EXISTS "Users can view own kit purchase" ON public.kit_purchases;
CREATE POLICY "Users can view own kit purchase"
  ON public.kit_purchases FOR SELECT
  USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Remove relatorios_semanais from realtime publication (service_role only access)
ALTER PUBLICATION supabase_realtime DROP TABLE public.relatorios_semanais;

-- Lock down pgmq wrapper functions: revoke from anon/authenticated, set search_path
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.update_contratos_updated_at() SET search_path = public;

REVOKE ALL ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
