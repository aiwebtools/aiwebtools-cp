
-- Crash & error logging table
CREATE TABLE public.error_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  error_type TEXT NOT NULL,
  message TEXT NOT NULL,
  stack TEXT,
  source TEXT,
  line_number INTEGER,
  column_number INTEGER,
  url TEXT,
  user_agent TEXT,
  session_id TEXT,
  component_stack TEXT,
  severity TEXT NOT NULL DEFAULT 'error',
  metadata JSONB
);

GRANT INSERT ON public.error_logs TO anon;
GRANT INSERT ON public.error_logs TO authenticated;
GRANT ALL ON public.error_logs TO service_role;

ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert error logs"
ON public.error_logs FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Only admins can view error logs"
ON public.error_logs FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete error logs"
ON public.error_logs FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_error_logs_created_at ON public.error_logs(created_at DESC);
CREATE INDEX idx_error_logs_error_type ON public.error_logs(error_type);
