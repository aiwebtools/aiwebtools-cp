
-- 1. Lock down get_tool_popularity_stats RPC
CREATE OR REPLACE FUNCTION public.get_tool_popularity_stats()
 RETURNS TABLE(tool_title text, tool_category text, total_views bigint, total_clicks bigint, search_appearances bigint, avg_load_time_ms numeric, last_interaction timestamp with time zone, unique_sessions bigint)
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
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
  ORDER BY total_clicks DESC, total_views DESC;
END;
$function$;

REVOKE EXECUTE ON FUNCTION public.get_tool_popularity_stats() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_tool_popularity_stats() TO authenticated;

-- 2. Tool-images bucket: admins-only write, block listing while preserving direct public reads
DROP POLICY IF EXISTS "Admins can upload tool images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update tool images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete tool images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read individual tool images" ON storage.objects;
DROP POLICY IF EXISTS "Public can list tool images" ON storage.objects;

CREATE POLICY "Admins can upload tool images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update tool images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete tool images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role));

-- Public can read tool images by exact path (object name), but cannot list bucket contents
CREATE POLICY "Public can read individual tool images"
ON storage.objects FOR SELECT TO anon, authenticated
USING (bucket_id = 'tool-images');
