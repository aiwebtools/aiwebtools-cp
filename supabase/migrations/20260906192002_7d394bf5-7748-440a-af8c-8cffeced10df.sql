CREATE TABLE public.tool_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tool_slug TEXT NOT NULL,
  tool_title TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT CHECK (comment IS NULL OR char_length(comment) <= 1200),
  author_name TEXT NOT NULL DEFAULT 'Anonymous' CHECK (char_length(author_name) <= 60),
  avatar_seed TEXT NOT NULL DEFAULT 'seeker',
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_tool_reviews_slug ON public.tool_reviews (tool_slug, created_at DESC);

GRANT SELECT, INSERT ON public.tool_reviews TO anon;
GRANT SELECT, INSERT ON public.tool_reviews TO authenticated;
GRANT ALL ON public.tool_reviews TO service_role;

ALTER TABLE public.tool_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read tool reviews"
  ON public.tool_reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can leave a tool review"
  ON public.tool_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(tool_slug) BETWEEN 1 AND 200 AND char_length(tool_title) BETWEEN 1 AND 200);

CREATE OR REPLACE FUNCTION public.get_tool_review_summary(_tool_slug TEXT)
RETURNS TABLE (average_rating NUMERIC, review_count BIGINT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT ROUND(AVG(rating)::numeric, 2), COUNT(*)
  FROM public.tool_reviews
  WHERE tool_slug = _tool_slug;
$$;

GRANT EXECUTE ON FUNCTION public.get_tool_review_summary(TEXT) TO anon, authenticated, service_role;

CREATE OR REPLACE FUNCTION public.get_category_popularity(_limit INT DEFAULT 5000)
RETURNS TABLE (tool_title TEXT, tool_category TEXT, clicks BIGINT, views BIGINT, popularity BIGINT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    a.tool_title,
    COALESCE(a.tool_category, 'Uncategorized') AS tool_category,
    COUNT(*) FILTER (WHERE a.event_type = 'click') AS clicks,
    COUNT(*) FILTER (WHERE a.event_type = 'view') AS views,
    (COUNT(*) FILTER (WHERE a.event_type = 'click') * 5
      + COUNT(*) FILTER (WHERE a.event_type = 'view')) AS popularity
  FROM public.tool_analytics a
  GROUP BY a.tool_title, COALESCE(a.tool_category, 'Uncategorized')
  ORDER BY popularity DESC
  LIMIT GREATEST(_limit, 1);
$$;

GRANT EXECUTE ON FUNCTION public.get_category_popularity(INT) TO anon, authenticated, service_role;