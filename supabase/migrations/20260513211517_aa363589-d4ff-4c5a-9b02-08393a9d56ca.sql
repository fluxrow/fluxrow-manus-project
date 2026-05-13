
ALTER TABLE public.kit_purchases
  ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_kit_purchases_user_id ON public.kit_purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_kit_purchases_email_lower ON public.kit_purchases(lower(email));

CREATE POLICY "Users can view own kit purchase"
  ON public.kit_purchases FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR lower(email) = lower(coalesce((auth.jwt() ->> 'email')::text, '')));

CREATE OR REPLACE FUNCTION public.has_kit_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.kit_purchases kp
    LEFT JOIN auth.users u ON u.id = _user_id
    WHERE kp.status = 'paid'
      AND (
        kp.user_id = _user_id
        OR lower(kp.email) = lower(coalesce(u.email, ''))
      )
  );
$$;

GRANT EXECUTE ON FUNCTION public.has_kit_access(uuid) TO authenticated, anon;
