
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
  const [displayedCount, setDisplayedCount] = useState(50); // Reduced initial load
  
  // LIGHTNING FAST search results - optimized for speed
  const searchResults = useMemo(() => {
    const trimmedTerm = searchTerm.trim();
    
    // No search for empty or very short terms
    if (!trimmedTerm || trimmedTerm.length < 2) return [];
    
    // FAST simple matching for 2 characters - title starts with only
    if (trimmedTerm.length === 2) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      ).slice(0, 20); // Limit to 20 for speed
    }
    
    // For 3+ characters, use optimized search with limits
    const results = searchTools(allTools, trimmedTerm);
    return results.slice(0, 100); // Hard limit for performance
  }, [searchTerm]);

  // Display results with performance limits
  const displayedResults = useMemo(() => 
    searchResults.slice(0, Math.min(displayedCount, 50)), // Cap at 50 for speed
    [searchResults, displayedCount]
  );

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 2;

  // INSTANT search change handler - no delays
  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 2); // Only open for 2+ chars
    if (!trimmed) setDisplayedCount(50);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    console.log('🔍 Search result clicked - closing dropdown and clearing search');
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
      const element = document.querySelector('[data-search-results]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [onSearchChange, searchTerm]);

  const handleInputBlur = useCallback((e: React.FocusEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('[data-search-dropdown]')) {
      setTimeout(() => setIsOpen(false), 150);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    if (searchTerm.trim().length >= 2 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [searchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 30 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 25, searchResults.length, 50)); // Smaller increments
    }
  }, [displayedCount, searchResults.length]);

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
