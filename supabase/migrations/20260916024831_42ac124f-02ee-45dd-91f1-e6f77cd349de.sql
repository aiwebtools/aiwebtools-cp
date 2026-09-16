CREATE TABLE public.gpt_guest_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_key TEXT NOT NULL,
  usage_date DATE NOT NULL DEFAULT (now() AT TIME ZONE 'utc')::date,
  message_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (guest_key, usage_date)
);

GRANT ALL ON public.gpt_guest_usage TO service_role;

ALTER TABLE public.gpt_guest_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages guest usage"
ON public.gpt_guest_usage FOR ALL
TO service_role
USING (true) WITH CHECK (true);