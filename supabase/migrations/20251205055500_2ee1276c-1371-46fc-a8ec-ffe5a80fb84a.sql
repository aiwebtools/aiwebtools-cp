-- Drop existing policy and create a clearer one
DROP POLICY IF EXISTS "Users can view own submissions, admins see all" ON public.tool_submissions;

-- Create explicit policy with clear protection for anonymous submissions
CREATE POLICY "Users can view own submissions, admins see all"
ON public.tool_submissions
FOR SELECT
TO authenticated
USING (
  -- Admins can see everything including anonymous submissions
  has_role(auth.uid(), 'admin'::app_role)
  OR
  -- Non-admins can ONLY see submissions where:
  -- 1. submitter_user_id is NOT NULL (excludes anonymous submissions)
  -- 2. AND it matches their own user ID
  (submitter_user_id IS NOT NULL AND submitter_user_id = auth.uid())
);