
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useDebounce } from "@/hooks/useDebounce";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(50);
  
  // Use minimal debounce for instant responsiveness like homepage
  const debouncedSearchTerm = useDebounce(searchTerm, 50);
  
  // Memoize tool stats to prevent recalculation
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Optimize search results with direct search - no extra filtering
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return [];
    
    // Early return for very short terms
    if (debouncedSearchTerm.trim().length < 2) return [];
    
    const results = searchTools(allTools, debouncedSearchTerm);
    return results;
  }, [debouncedSearchTerm]);

  // Optimize displayed results calculation
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  // Update open state based on search results
  const shouldShowResults = searchResults.length > 0 && debouncedSearchTerm.trim().length >= 2;

  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    
    if (value.trim() && value.trim().length >= 2) {
      setIsOpen(true);
      setDisplayedCount(50);
    } else {
      setIsOpen(false);
      setDisplayedCount(50);
    }
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(50);
  }, [onSearchChange]);

  const scrollToResults = useCallback(() => {
    // Scroll down to show results below the search bar
    const searchElement = document.querySelector('[data-search-results]');
    if (searchElement) {
      searchElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback: scroll down by a reasonable amount
      window.scrollBy({ 
        top: 400, 
        behavior: 'smooth' 
      });
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      // Close dropdown and scroll to results
      setIsOpen(false);
      setTimeout(scrollToResults, 100); // Small delay to ensure UI updates
    }
  }, [onSearchChange, searchTerm, scrollToResults]);

  const handleInputBlur = useCallback(() => {
    setTimeout(() => setIsOpen(false), 200);
  }, []);

  const handleInputFocus = useCallback(() => {
    if (debouncedSearchTerm.trim() && debouncedSearchTerm.trim().length >= 2 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [debouncedSearchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 30, searchResults.length));
    }
  }, [displayedCount, searchResults.length]);

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
