
-- Add columns for auto-publishing flow
ALTER TABLE public.tool_submissions
  ADD COLUMN IF NOT EXISTS ai_safety_score integer,
  ADD COLUMN IF NOT EXISTS ai_safety_verdict text,
  ADD COLUMN IF NOT EXISTS ai_safety_reason text,
  ADD COLUMN IF NOT EXISTS image_storage_path text,
  ADD COLUMN IF NOT EXISTS slug text,
  ADD COLUMN IF NOT EXISTS published_at timestamptz;

-- Unique slugs for approved rows (partial index)
CREATE UNIQUE INDEX IF NOT EXISTS tool_submissions_slug_unique
  ON public.tool_submissions (slug)
  WHERE slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS tool_submissions_status_published_idx
  ON public.tool_submissions (status, published_at DESC);

-- Public read of approved submissions so the site can list them without auth
DROP POLICY IF EXISTS "Public can view approved submissions" ON public.tool_submissions;
CREATE POLICY "Public can view approved submissions"
  ON public.tool_submissions
  FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

-- Ensure anon has SELECT privilege (RLS still filters to approved)
GRANT SELECT ON public.tool_submissions TO anon;
