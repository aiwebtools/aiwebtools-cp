
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useDebounce } from "@/hooks/useDebounce";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

// Global cache for search results to persist across component re-renders
const searchCache = new Map<string, any[]>();
const toolStatsCache = getCurrentToolCount(); // Cache tool stats globally

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(50);
  
  // Super aggressive debounce for instant feel
  const debouncedSearchTerm = useDebounce(searchTerm, 50); // Reduced from 16ms
  
  // Ultra-fast search with aggressive caching
  const searchResults = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    // Immediate return for empty or too short terms
    if (!trimmedTerm || trimmedTerm.length < 2) return [];
    
    // Check cache first
    if (searchCache.has(trimmedTerm)) {
      return searchCache.get(trimmedTerm)!;
    }
    
    // Perform search and cache result
    const results = searchTools(allTools, trimmedTerm);
    
    // Limit cache size to prevent memory issues
    if (searchCache.size > 20) {
      const firstKey = searchCache.keys().next().value;
      searchCache.delete(firstKey);
    }
    
    searchCache.set(trimmedTerm, results);
    return results;
  }, [debouncedSearchTerm]);

  // Pre-slice results for better performance
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  // Simple boolean check
  const shouldShowResults = searchResults.length > 0 && debouncedSearchTerm.trim().length >= 2;

  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    
    const trimmed = value.trim();
    if (trimmed && trimmed.length >= 2) {
      setIsOpen(true);
      setDisplayedCount(50);
    } else {
      setIsOpen(false);
    }
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(50);
  }, [onSearchChange]);

  const scrollToResults = useCallback(() => {
    const searchElement = document.querySelector('[data-search-results]');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: 400, behavior: 'smooth' });
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      setIsOpen(false);
      setTimeout(scrollToResults, 100);
    }
  }, [onSearchChange, searchTerm, scrollToResults]);

  const handleInputBlur = useCallback(() => {
    setTimeout(() => setIsOpen(false), 200);
  }, []);

  const handleInputFocus = useCallback(() => {
    const trimmed = debouncedSearchTerm.trim();
    if (trimmed && trimmed.length >= 2 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [debouncedSearchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 20, searchResults.length)); // Reduced increment
    }
  }, [displayedCount, searchResults.length]);

  return {
    isOpen,
    displayedCount,
    toolStats: toolStatsCache, // Use cached stats
    searchResults,
    displayedResults,
    shouldShowResults,
    handleSearchChange,
    handleResultClick,
    handleKeyDown,
    handleInputBlur,
    handleInputFocus,
    handleScroll,
  };
};
