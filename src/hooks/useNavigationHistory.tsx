import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface HistoryEntry {
  path: string;
  label: string;
  emoji?: string;
  timestamp: number;
}

const MAX_HISTORY = 5;
const STORAGE_KEY = 'aitools-nav-history';

// Helper to generate label from path
const getPageLabel = (path: string): { label: string; emoji?: string } => {
  if (path === '/') return { label: 'Home', emoji: '🏠' };
  if (path === '/favorites') return { label: 'Favorites', emoji: '❤️' };
  if (path === '/ai-tools-hub') return { label: 'AI Tools Hub', emoji: '🤖' };
  
  // Category pages
  if (path.startsWith('/category/')) {
    const category = path.replace('/category/', '').replace(/-/g, ' ');
    const formatted = category.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { label: formatted, emoji: '📂' };
  }
  
  // Tool pages
  if (path.startsWith('/tool/')) {
    const toolSlug = path.replace('/tool/', '').replace(/-/g, ' ');
    const formatted = toolSlug.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { label: formatted.substring(0, 30) + (formatted.length > 30 ? '...' : ''), emoji: '🔧' };
  }
  
  return { label: path.replace(/\//g, ' ').trim() || 'Page', emoji: '📄' };
};

export const useNavigationHistory = () => {
  const location = useLocation();
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // Load history from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  // Add current page to history when location changes
  useEffect(() => {
    const { label, emoji } = getPageLabel(location.pathname);
    
    setHistory(prev => {
      // Don't add duplicate consecutive entries
      if (prev.length > 0 && prev[0].path === location.pathname) {
        return prev;
      }

      const newEntry: HistoryEntry = {
        path: location.pathname,
        label,
        emoji,
        timestamp: Date.now()
      };

      // Remove any existing entry for this path and add to front
      const filtered = prev.filter(h => h.path !== location.pathname);
      const updated = [newEntry, ...filtered].slice(0, MAX_HISTORY);
      
      // Save to sessionStorage
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      
      return updated;
    });
  }, [location.pathname]);

  // Get history excluding current page
  const getPreviousPages = () => {
    return history.filter(h => h.path !== location.pathname).slice(0, MAX_HISTORY - 1);
  };

  return {
    history,
    previousPages: getPreviousPages()
  };
};
