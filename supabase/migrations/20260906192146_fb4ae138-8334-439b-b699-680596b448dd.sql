DROP FUNCTION IF EXISTS public.get_category_popularity(INT);

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

CREATE OR REPLACE VIEW public.category_popularity
WITH (security_invoker = false) AS
  SELECT
    a.tool_title,
    COALESCE(a.tool_category, 'Uncategorized') AS tool_category,
    COUNT(*) FILTER (WHERE a.event_type = 'click') AS clicks,
    COUNT(*) FILTER (WHERE a.event_type = 'view') AS views,
    (COUNT(*) FILTER (WHERE a.event_type = 'click') * 5
      + COUNT(*) FILTER (WHERE a.event_type = 'view')) AS popularity
  FROM public.tool_analytics a
  GROUP BY a.tool_title, COALESCE(a.tool_category, 'Uncategorized');

GRANT SELECT ON public.category_popularity TO anon, authenticated;
GRANT ALL ON public.category_popularity TO service_role;