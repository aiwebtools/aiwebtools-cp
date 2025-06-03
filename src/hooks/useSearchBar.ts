
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
  
  // Ultra-fast debounce for instant responsiveness
  const debouncedSearchTerm = useDebounce(searchTerm, 16); // ~1 frame at 60fps
  
  // Cache tool stats to prevent recalculation
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Highly optimized search with early bailouts
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return [];
    
    // Super early return for single characters to prevent lag
    if (debouncedSearchTerm.trim().length < 2) return [];
    
    // Use the optimized search function
    return searchTools(allTools, debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  // Memoized slice operation for displayed results
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  // Quick boolean check for showing results
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
    // Use requestAnimationFrame for smooth scrolling
    requestAnimationFrame(() => {
      const searchElement = document.querySelector('[data-search-results]');
      if (searchElement) {
        searchElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      } else {
        window.scrollBy({ 
          top: 400, 
          behavior: 'smooth' 
        });
      }
    });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      setIsOpen(false);
      setTimeout(scrollToResults, 50); // Shorter delay for responsiveness
    }
  }, [onSearchChange, searchTerm, scrollToResults]);

  const handleInputBlur = useCallback(() => {
    // Shorter timeout for snappier UX
    setTimeout(() => setIsOpen(false), 150);
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
