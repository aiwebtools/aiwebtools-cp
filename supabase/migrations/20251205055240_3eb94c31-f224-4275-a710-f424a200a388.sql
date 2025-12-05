-- Drop existing SELECT policy and create a more explicit one
DROP POLICY IF EXISTS "Authenticated users can view their own submissions" ON public.tool_submissions;

-- Create explicit policy: users can ONLY see submissions where their user_id matches
-- Anonymous submissions (NULL user_id) are ONLY visible to admins
CREATE POLICY "Users can view own submissions, admins see all"
ON public.tool_submissions
FOR SELECT
TO authenticated
USING (
  CASE 
    -- Admins can see everything
    WHEN has_role(auth.uid(), 'admin'::app_role) THEN true
    -- Non-admins can only see their own submissions (where user_id is NOT NULL and matches)
    WHEN submitter_user_id IS NOT NULL AND submitter_user_id = auth.uid() THEN true
    -- Explicitly deny access to anonymous submissions and others' submissions
    ELSE false
  END
);