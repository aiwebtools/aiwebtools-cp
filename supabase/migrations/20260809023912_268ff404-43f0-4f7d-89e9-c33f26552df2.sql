CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

CREATE TABLE IF NOT EXISTS public.link_health (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_title text NOT NULL,
  tool_category text,
  url text NOT NULL UNIQUE,
  last_checked_at timestamptz,
  last_status_code integer,
  consecutive_failures integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'unknown',
  last_error text,
  reported_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.link_health TO authenticated;
GRANT ALL ON public.link_health TO service_role;

ALTER TABLE public.link_health ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view link health"
ON public.link_health FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX IF NOT EXISTS link_health_last_checked_idx ON public.link_health (last_checked_at NULLS FIRST);
CREATE INDEX IF NOT EXISTS link_health_status_idx ON public.link_health (status);

CREATE TRIGGER update_link_health_updated_at
BEFORE UPDATE ON public.link_health
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.search_misses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL UNIQUE,
  hit_count integer NOT NULL DEFAULT 1,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.search_misses TO anon;
GRANT SELECT, INSERT, UPDATE ON public.search_misses TO authenticated;
GRANT ALL ON public.search_misses TO service_role;

ALTER TABLE public.search_misses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a search miss"
ON public.search_misses FOR INSERT TO anon, authenticated
WITH CHECK (char_length(query) BETWEEN 1 AND 200);

CREATE POLICY "Admins can view search misses"
ON public.search_misses FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));