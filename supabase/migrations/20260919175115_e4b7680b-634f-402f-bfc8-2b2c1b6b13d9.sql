CREATE TABLE public.gpt_chat_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  app_slug text NOT NULL,
  is_guest boolean NOT NULL DEFAULT true,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  model text,
  turn_count integer NOT NULL DEFAULT 0,
  prompt_chars integer NOT NULL DEFAULT 0,
  reply_chars integer NOT NULL DEFAULT 0,
  image_requested boolean NOT NULL DEFAULT false,
  image_succeeded boolean NOT NULL DEFAULT false,
  latency_ms integer,
  status text NOT NULL DEFAULT 'ok',
  error text,
  user_message text,
  assistant_reply text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.gpt_chat_logs TO authenticated;
GRANT ALL ON public.gpt_chat_logs TO service_role;

ALTER TABLE public.gpt_chat_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins read chat logs"
ON public.gpt_chat_logs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_gpt_chat_logs_slug_created ON public.gpt_chat_logs (app_slug, created_at DESC);
CREATE INDEX idx_gpt_chat_logs_status ON public.gpt_chat_logs (status, created_at DESC);