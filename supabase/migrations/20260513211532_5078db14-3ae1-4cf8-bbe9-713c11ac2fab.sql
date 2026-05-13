
DROP FUNCTION IF EXISTS public.has_kit_access(uuid);

CREATE OR REPLACE FUNCTION public.has_kit_access()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.kit_purchases kp
    LEFT JOIN auth.users u ON u.id = auth.uid()
    WHERE kp.status = 'paid'
      AND (
        kp.user_id = auth.uid()
        OR lower(kp.email) = lower(coalesce(u.email, ''))
      )
  );
$$;

REVOKE ALL ON FUNCTION public.has_kit_access() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_kit_access() TO authenticated;
