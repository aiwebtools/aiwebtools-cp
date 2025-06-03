
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useSearchDebounce, useInstantSearch } from "@/hooks/useDebounce";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(50);
  
  // Ultra-fast debounce for search logic (50ms instead of 150ms)
  const debouncedSearchTerm = useSearchDebounce(searchTerm, 50);
  // Instant feedback for UI updates
  const instantSearchTerm = useInstantSearch(searchTerm);
  
  // Highly optimized search results with aggressive caching
  const searchResults = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    if (!trimmedTerm || trimmedTerm.length < 1) return [];
    
    // For single character, use super fast simple matching
    if (trimmedTerm.length === 1) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      ).slice(0, 15); // Reduced count for faster rendering
    }
    
    // For 2 characters, still use simple matching for speed
    if (trimmedTerm.length === 2) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
        tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
      ).slice(0, 20);
    }
    
    return searchTools(allTools, trimmedTerm);
  }, [debouncedSearchTerm]);

  // Pre-slice results for better performance
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  const shouldShowResults = searchResults.length > 0 && instantSearchTerm.trim().length >= 1;

  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 1);
    if (!trimmed) setDisplayedCount(50);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(50);
  }, [onSearchChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      setIsOpen(false);
      // Simple scroll without timeout for better performance
      const element = document.querySelector('[data-search-results]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [onSearchChange, searchTerm]);

  const handleInputBlur = useCallback(() => {
    // Reduced timeout for better responsiveness
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  const handleInputFocus = useCallback(() => {
    if (instantSearchTerm.trim().length >= 1 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [instantSearchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 15, searchResults.length)); // Smaller increments
    }
  }, [displayedCount, searchResults.length]);

  // Memoize tool stats to prevent recalculation
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  return {
    isOpen,
    displayedCount,
    toolStats,
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
