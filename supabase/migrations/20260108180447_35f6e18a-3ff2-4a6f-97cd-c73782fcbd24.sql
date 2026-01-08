-- Create tool analytics table for tracking engagement
CREATE TABLE public.tool_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tool_title TEXT NOT NULL,
  tool_category TEXT,
  event_type TEXT NOT NULL CHECK (event_type IN ('view', 'click', 'search', 'filter')),
  session_id TEXT,
  user_agent TEXT,
  referrer TEXT,
  load_time_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX idx_tool_analytics_tool_title ON public.tool_analytics(tool_title);
CREATE INDEX idx_tool_analytics_event_type ON public.tool_analytics(event_type);
CREATE INDEX idx_tool_analytics_created_at ON public.tool_analytics(created_at DESC);
CREATE INDEX idx_tool_analytics_category ON public.tool_analytics(tool_category);

-- Enable RLS
ALTER TABLE public.tool_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics (anonymous tracking)
CREATE POLICY "Anyone can insert analytics"
ON public.tool_analytics
FOR INSERT
WITH CHECK (true);

-- Only admins can view analytics
CREATE POLICY "Only admins can view analytics"
ON public.tool_analytics
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete analytics
CREATE POLICY "Only admins can delete analytics"
ON public.tool_analytics
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create aggregated stats view for performance
CREATE VIEW public.tool_popularity_stats AS
SELECT 
  tool_title,
  tool_category,
  COUNT(*) FILTER (WHERE event_type = 'view') as total_views,
  COUNT(*) FILTER (WHERE event_type = 'click') as total_clicks,
  COUNT(*) FILTER (WHERE event_type = 'search') as search_appearances,
  AVG(load_time_ms) FILTER (WHERE load_time_ms IS NOT NULL) as avg_load_time_ms,
  MAX(created_at) as last_interaction,
  COUNT(DISTINCT session_id) as unique_sessions
FROM public.tool_analytics
GROUP BY tool_title, tool_category;