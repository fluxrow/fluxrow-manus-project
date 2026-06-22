ALTER TABLE public.quiz_leads
  ADD COLUMN IF NOT EXISTS pillar_scores jsonb,
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS team_size text,
  ADD COLUMN IF NOT EXISTS estimated_hours_saved integer,
  ADD COLUMN IF NOT EXISTS report_sent_at timestamptz;