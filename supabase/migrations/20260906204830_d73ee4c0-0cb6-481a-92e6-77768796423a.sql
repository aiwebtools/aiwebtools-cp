DROP VIEW IF EXISTS public.category_popularity;
DROP FUNCTION IF EXISTS public.get_category_popularity(INT);

CREATE TABLE public.tool_popularity (
  tool_title TEXT NOT NULL,
  tool_category TEXT NOT NULL DEFAULT 'Uncategorized',
  clicks BIGINT NOT NULL DEFAULT 0,
  views BIGINT NOT NULL DEFAULT 0,
  popularity BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (tool_title, tool_category)
);

CREATE INDEX idx_tool_popularity_rank ON public.tool_popularity (tool_category, popularity DESC);

GRANT SELECT ON public.tool_popularity TO anon, authenticated;
GRANT ALL ON public.tool_popularity TO service_role;

ALTER TABLE public.tool_popularity ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read tool popularity"
  ON public.tool_popularity FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO public.tool_popularity (tool_title, tool_category, clicks, views, popularity)
SELECT
  a.tool_title,
  COALESCE(a.tool_category, 'Uncategorized'),
  COUNT(*) FILTER (WHERE a.event_type = 'click'),
  COUNT(*) FILTER (WHERE a.event_type = 'view'),
  COUNT(*) FILTER (WHERE a.event_type = 'click') * 5 + COUNT(*) FILTER (WHERE a.event_type = 'view')
FROM public.tool_analytics a
GROUP BY a.tool_title, COALESCE(a.tool_category, 'Uncategorized')
ON CONFLICT (tool_title, tool_category) DO NOTHING;

CREATE OR REPLACE FUNCTION public.sync_tool_popularity()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.event_type NOT IN ('click', 'view') THEN
    RETURN NEW;
  END IF;

  INSERT INTO public.tool_popularity (tool_title, tool_category, clicks, views, popularity, updated_at)
  VALUES (
    NEW.tool_title,
    COALESCE(NEW.tool_category, 'Uncategorized'),
    CASE WHEN NEW.event_type = 'click' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'view' THEN 1 ELSE 0 END,
    CASE WHEN NEW.event_type = 'click' THEN 5 ELSE 1 END,
    now()
  )
  ON CONFLICT (tool_title, tool_category) DO UPDATE SET
    clicks = public.tool_popularity.clicks + EXCLUDED.clicks,
    views = public.tool_popularity.views + EXCLUDED.views,
    popularity = public.tool_popularity.popularity + EXCLUDED.popularity,
    updated_at = now();

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.sync_tool_popularity() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER sync_tool_popularity_trigger
AFTER INSERT ON public.tool_analytics
FOR EACH ROW EXECUTE FUNCTION public.sync_tool_popularity();

CREATE OR REPLACE FUNCTION public.get_tool_review_summary(_tool_slug TEXT)
RETURNS TABLE (average_rating NUMERIC, review_count BIGINT)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT ROUND(AVG(rating)::numeric, 2), COUNT(*)
  FROM public.tool_reviews
  WHERE tool_slug = _tool_slug;
$$;