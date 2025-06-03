
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(100);
  
  // LIGHTNING FAST search results - INSTANT calculation
  const searchResults = useMemo(() => {
    const trimmedTerm = searchTerm.trim();
    if (!trimmedTerm || trimmedTerm.length < 1) return [];
    
    // INSTANT search with ALL results - no limiting
    const results = searchTools(allTools, trimmedTerm);
    return results; // Return ALL results for infinite scroll
  }, [searchTerm]);

  // Display results with virtual scrolling
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 1;

  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 1);
    if (!trimmed) setDisplayedCount(100);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(100);
  }, [onSearchChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      setIsOpen(false);
      // INSTANT scroll to results
      const element = document.querySelector('[data-search-results]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [onSearchChange, searchTerm]);

  const handleInputBlur = useCallback(() => {
    // MINIMAL timeout for lightning fast response
    setTimeout(() => setIsOpen(false), 10);
  }, []);

  const handleInputFocus = useCallback(() => {
    if (searchTerm.trim().length >= 1 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [searchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 30 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 50, searchResults.length)); // Load 50 more
    }
  }, [displayedCount, searchResults.length]);

  // Memoize tool stats for performance
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
