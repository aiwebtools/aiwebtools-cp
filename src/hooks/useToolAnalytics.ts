import { useCallback, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Generate a session ID that persists for the browser session
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

type EventType = 'view' | 'click' | 'search' | 'filter';

interface TrackEventParams {
  toolTitle: string;
  toolCategory?: string;
  eventType: EventType;
  loadTimeMs?: number;
}

export const useToolAnalytics = () => {
  const trackedViews = useRef<Set<string>>(new Set());
  const pageLoadTime = useRef<number>(performance.now());

  // Track a tool event
  const trackEvent = useCallback(async ({
    toolTitle,
    toolCategory,
    eventType,
    loadTimeMs
  }: TrackEventParams) => {
    // Debounce view events - only track once per session per tool
    if (eventType === 'view') {
      const viewKey = `${toolTitle}-view`;
      if (trackedViews.current.has(viewKey)) return;
      trackedViews.current.add(viewKey);
    }

    try {
      await supabase.from('tool_analytics').insert({
        tool_title: toolTitle,
        tool_category: toolCategory || null,
        event_type: eventType,
        session_id: getSessionId(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
        load_time_ms: loadTimeMs || null
      });
    } catch (error) {
      // Silently fail - analytics should never break the app
      console.debug('[Analytics] Track failed:', error);
    }
  }, []);

  // Track tool click (when user clicks to open a tool)
  const trackToolClick = useCallback((toolTitle: string, toolCategory?: string) => {
    trackEvent({
      toolTitle,
      toolCategory,
      eventType: 'click'
    });
  }, [trackEvent]);

  // Track tool view (when tool card becomes visible)
  const trackToolView = useCallback((toolTitle: string, toolCategory?: string) => {
    const loadTimeMs = Math.round(performance.now() - pageLoadTime.current);
    trackEvent({
      toolTitle,
      toolCategory,
      eventType: 'view',
      loadTimeMs
    });
  }, [trackEvent]);

  // Track search appearance
  const trackSearchAppearance = useCallback((toolTitle: string, toolCategory?: string) => {
    trackEvent({
      toolTitle,
      toolCategory,
      eventType: 'search'
    });
  }, [trackEvent]);

  // Track filter selection
  const trackFilterUsage = useCallback((toolTitle: string, toolCategory?: string) => {
    trackEvent({
      toolTitle,
      toolCategory,
      eventType: 'filter'
    });
  }, [trackEvent]);

  return {
    trackToolClick,
    trackToolView,
    trackSearchAppearance,
    trackFilterUsage
  };
};

// Standalone function for use outside of React components
export const trackToolClickEvent = async (toolTitle: string, toolCategory?: string) => {
  try {
    await supabase.from('tool_analytics').insert({
      tool_title: toolTitle,
      tool_category: toolCategory || null,
      event_type: 'click',
      session_id: getSessionId(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || null
    });
  } catch (error) {
    console.debug('[Analytics] Track click failed:', error);
  }
};
