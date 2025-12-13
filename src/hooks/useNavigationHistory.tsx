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

// Helper to generate human-readable label from path
const getPageLabel = (path: string): { label: string; emoji?: string } => {
  // Decode URL-encoded characters first
  const decodedPath = decodeURIComponent(path);
  
  if (decodedPath === '/') return { label: 'Home', emoji: '🏠' };
  if (decodedPath === '/favorites') return { label: 'Favorites', emoji: '❤️' };
  if (decodedPath === '/ai-tools-hub') return { label: 'AI Tools Hub', emoji: '🤖' };
  
  // Main category pages - /main-category/AI AGENTS, /main-category/CREATIVE & ENTERTAINMENT
  if (decodedPath.startsWith('/main-category/')) {
    const category = decodedPath.replace('/main-category/', '');
    // Already human-readable from URL, just clean up
    const cleanCategory = category.replace(/%20/g, ' ').trim();
    return { label: cleanCategory || 'Category', emoji: '📁' };
  }
  
  // Category pages - /category/VIDEO & MULTIMEDIA AI TOOLS
  if (decodedPath.startsWith('/category/')) {
    const category = decodedPath.replace('/category/', '');
    // Already human-readable from URL, just clean up
    const cleanCategory = category.replace(/%20/g, ' ').trim();
    return { label: cleanCategory || 'Category', emoji: '📂' };
  }
  
  // Tool pages - convert slug to readable name
  // Slugs are like "ai-tools-finder-gpt" or "movie-script-writer-gpt"
  if (decodedPath.match(/^\/[a-z0-9-]+$/i)) {
    const toolSlug = decodedPath.replace('/', '');
    // Convert kebab-case to Title Case
    const formatted = toolSlug
      .split('-')
      .map(word => {
        // Keep common acronyms uppercase
        const upperWord = word.toUpperCase();
        if (['AI', 'GPT', 'API', 'UI', 'UX', 'PDF', 'SEO', 'CRM', 'VR', 'AR', '3D', 'ML', 'NLP', 'LLM', 'RAG'].includes(upperWord)) {
          return upperWord;
        }
        // Capitalize first letter
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    
    // Truncate if too long
    const displayLabel = formatted.length > 35 ? formatted.substring(0, 35) + '...' : formatted;
    return { label: displayLabel, emoji: '🔧' };
  }
  
  // Tool pages with /tool/ prefix
  if (decodedPath.startsWith('/tool/')) {
    const toolSlug = decodedPath.replace('/tool/', '');
    const formatted = toolSlug
      .split('-')
      .map(word => {
        const upperWord = word.toUpperCase();
        if (['AI', 'GPT', 'API', 'UI', 'UX', 'PDF', 'SEO', 'CRM', 'VR', 'AR', '3D', 'ML', 'NLP', 'LLM', 'RAG'].includes(upperWord)) {
          return upperWord;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    
    const displayLabel = formatted.length > 35 ? formatted.substring(0, 35) + '...' : formatted;
    return { label: displayLabel, emoji: '🔧' };
  }
  
  // Fallback - convert path to readable format
  const fallbackLabel = decodedPath
    .replace(/\//g, ' ')
    .replace(/-/g, ' ')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return { label: fallbackLabel || 'Page', emoji: '📄' };
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
