-- Remove the conflicting admin-only SELECT policy
DROP POLICY IF EXISTS "Only admins can view all submissions" ON public.tool_submissions;