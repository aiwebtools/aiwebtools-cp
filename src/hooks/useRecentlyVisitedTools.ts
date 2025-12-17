import { useState, useEffect, useCallback } from 'react';

export interface RecentTool {
  name: string;
  emoji: string;
  url: string;
  timestamp: number;
}

const MAX_RECENT_TOOLS = 5;
const STORAGE_KEY = 'aitools-recent-tools';

export const useRecentlyVisitedTools = () => {
  const [recentTools, setRecentTools] = useState<RecentTool[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecentTools(JSON.parse(stored));
      } catch {
        setRecentTools([]);
      }
    }
  }, []);

  const addRecentTool = useCallback((tool: Omit<RecentTool, 'timestamp'>) => {
    setRecentTools(prev => {
      // Remove existing entry for this tool
      const filtered = prev.filter(t => t.url !== tool.url);
      
      const newTool: RecentTool = {
        ...tool,
        timestamp: Date.now()
      };
      
      const updated = [newTool, ...filtered].slice(0, MAX_RECENT_TOOLS);
      
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      
      return updated;
    });
  }, []);

  const clearRecentTools = useCallback(() => {
    setRecentTools([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    recentTools,
    addRecentTool,
    clearRecentTools
  };
};

// Standalone function to add a tool without needing the hook (for use in timeEffects)
export const trackToolVisit = (name: string, emoji: string, url: string) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    let tools: RecentTool[] = stored ? JSON.parse(stored) : [];
    
    // Remove existing entry
    tools = tools.filter(t => t.url !== url);
    
    // Add new entry at front
    tools = [{ name, emoji, url, timestamp: Date.now() }, ...tools].slice(0, MAX_RECENT_TOOLS);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tools));
  } catch (e) {
    console.warn('Failed to track tool visit:', e);
  }
};
