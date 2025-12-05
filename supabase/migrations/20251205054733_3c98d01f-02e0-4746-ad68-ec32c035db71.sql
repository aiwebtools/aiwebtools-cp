-- Add user_id column for secure authentication-based access
ALTER TABLE public.tool_submissions 
ADD COLUMN submitter_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

-- Drop the vulnerable email-based SELECT policy
DROP POLICY IF EXISTS "Submitters can view their own submissions" ON public.tool_submissions;

-- Create new secure policy: authenticated users can only view their own submissions (by user_id)
-- Admin notes are protected since only admins can see all submissions
CREATE POLICY "Authenticated users can view their own submissions"
ON public.tool_submissions
FOR SELECT
TO authenticated
USING (
  (submitter_user_id = auth.uid()) OR has_role(auth.uid(), 'admin'::app_role)
);

-- Update INSERT policy to capture user_id when authenticated
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.tool_submissions;

-- Allow public inserts but automatically link to user_id if authenticated
CREATE POLICY "Anyone can insert submissions"
ON public.tool_submissions
FOR INSERT
WITH CHECK (
  -- Allow insert, and if authenticated, submitter_user_id must match auth.uid() or be null
  (submitter_user_id IS NULL OR submitter_user_id = auth.uid())
);

-- Create index for efficient user_id lookups
CREATE INDEX IF NOT EXISTS idx_tool_submissions_user_id ON public.tool_submissions(submitter_user_id);