-- Fix security issues: Drop the security definer view and recreate as a regular function
DROP VIEW IF EXISTS public.tool_popularity_stats;

-- Create a security definer function instead of a view for safe admin access
CREATE OR REPLACE FUNCTION public.get_tool_popularity_stats()
RETURNS TABLE (
  tool_title TEXT,
  tool_category TEXT,
  total_views BIGINT,
  total_clicks BIGINT,
  search_appearances BIGINT,
  avg_load_time_ms NUMERIC,
  last_interaction TIMESTAMPTZ,
  unique_sessions BIGINT
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    ta.tool_title,
    ta.tool_category,
    COUNT(*) FILTER (WHERE ta.event_type = 'view')::BIGINT as total_views,
    COUNT(*) FILTER (WHERE ta.event_type = 'click')::BIGINT as total_clicks,
    COUNT(*) FILTER (WHERE ta.event_type = 'search')::BIGINT as search_appearances,
    AVG(ta.load_time_ms) FILTER (WHERE ta.load_time_ms IS NOT NULL) as avg_load_time_ms,
    MAX(ta.created_at) as last_interaction,
    COUNT(DISTINCT ta.session_id)::BIGINT as unique_sessions
  FROM public.tool_analytics ta
  GROUP BY ta.tool_title, ta.tool_category
  ORDER BY total_clicks DESC, total_views DESC
$$;