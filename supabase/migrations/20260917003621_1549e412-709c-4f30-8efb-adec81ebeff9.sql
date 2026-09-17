ALTER VIEW public.approved_tool_submissions SET (security_invoker = on);

CREATE POLICY "Public can view approved submissions"
ON public.tool_submissions
FOR SELECT
TO anon, authenticated
USING (status = 'approved');

REVOKE SELECT ON public.tool_submissions FROM anon, authenticated;

GRANT SELECT (id, slug, name, description, url, category, image_url, video_url,
              submitter_name, status, published_at, submitted_at,
              ai_safety_score, ai_safety_verdict, ai_safety_reason,
              submitter_user_id, reviewed_at)
ON public.tool_submissions TO anon, authenticated;

GRANT ALL ON public.tool_submissions TO service_role;