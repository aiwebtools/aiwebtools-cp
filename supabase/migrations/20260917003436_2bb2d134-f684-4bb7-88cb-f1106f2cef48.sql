DROP POLICY IF EXISTS "Public can view approved submissions" ON public.tool_submissions;

CREATE OR REPLACE VIEW public.approved_tool_submissions AS
SELECT id, slug, name, description, url, category, image_url, video_url,
       submitter_name, published_at, submitted_at, ai_safety_score, ai_safety_verdict
FROM public.tool_submissions
WHERE status = 'approved';

ALTER VIEW public.approved_tool_submissions SET (security_invoker = off);

GRANT SELECT ON public.approved_tool_submissions TO anon, authenticated;