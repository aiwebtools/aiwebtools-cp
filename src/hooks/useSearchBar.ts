
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
  const [displayedCount, setDisplayedCount] = useState(20);
  
  // INSTANT search results with ZERO delay
  const searchResults = useMemo(() => {
    const trimmedTerm = searchTerm.trim();
    if (!trimmedTerm || trimmedTerm.length < 1) return [];
    
    // Detect mobile for performance limits
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    // For single character, use super fast simple matching
    if (trimmedTerm.length === 1) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      ).slice(0, isMobile ? 4 : 6);
    }
    
    // For 2 characters, still use simple matching for speed
    if (trimmedTerm.length === 2) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
        tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
      ).slice(0, isMobile ? 8 : 10);
    }
    
    // For longer terms, use optimized search with limit
    const results = searchTools(allTools, trimmedTerm);
    return results.slice(0, isMobile ? 12 : 18);
  }, [searchTerm]); // Direct dependency for instant response

  // Pre-slice results for better performance
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 1;

  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 1);
    if (!trimmed) setDisplayedCount(20);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(20);
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
    // Minimal timeout for better responsiveness
    setTimeout(() => setIsOpen(false), 20);
  }, []);

  const handleInputFocus = useCallback(() => {
    if (searchTerm.trim().length >= 1 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [searchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && displayedCount < searchResults.length) {
      const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
      setDisplayedCount(prev => Math.min(prev + (isMobile ? 3 : 6), searchResults.length));
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
