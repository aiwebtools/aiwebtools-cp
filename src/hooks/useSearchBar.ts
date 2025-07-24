
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
  const [displayedCount, setDisplayedCount] = useState(30);
  
  // ULTRA FAST search results - optimized for instant typing without lag
  const searchResults = useMemo(() => {
    const trimmedTerm = searchTerm.trim();
    
    // No search for empty or very short terms
    if (!trimmedTerm || trimmedTerm.length < 2) return [];
    
    const lowerTerm = trimmedTerm.toLowerCase();
    
    // INSTANT 2-character search - title starts with only (ultra fast)
    if (trimmedTerm.length === 2) {
      return allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(lowerTerm)
      ).slice(0, 50); // Limit for performance
    }
    
    // FAST 3-character search - simple matching only (no heavy processing)
    if (trimmedTerm.length === 3) {
      return allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        return lowerTitle.startsWith(lowerTerm) || 
               lowerTitle.includes(lowerTerm) ||
               (tool.category?.toLowerCase().includes(lowerTerm));
      }).slice(0, 75); // Slightly more results
    }
    
    // OPTIMIZED 4+ character search - still fast but more comprehensive
    if (trimmedTerm.length >= 4) {
      // Quick filtering first to reduce dataset
      const quickFiltered = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerDesc = tool.description.toLowerCase();
        const lowerCat = tool.category?.toLowerCase() || '';
        
        return lowerTitle.includes(lowerTerm) ||
               lowerDesc.includes(lowerTerm) ||
               lowerCat.includes(lowerTerm) ||
               (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(lowerTerm)));
      });
      
      // Only use heavy search function if we have manageable results
      if (quickFiltered.length <= 200) {
        const results = searchTools(quickFiltered, trimmedTerm);
        return results.slice(0, 100);
      } else {
        // For large result sets, stick to simple matching for speed
        return quickFiltered.slice(0, 100);
      }
    }
    
    return [];
  }, [searchTerm]);

  // Display results with performance limits for rendering only
  const displayedResults = useMemo(() => 
    searchResults.slice(0, Math.min(displayedCount, 100)), // Only limit display for performance
    [searchResults, displayedCount]
  );

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 2;

  // INSTANT search change handler - no delays
  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 2);
    if (!trimmed) setDisplayedCount(30);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    console.log('🔍 Search result clicked - closing dropdown and clearing search');
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(30);
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
      setDisplayedCount(prev => Math.min(prev + 20, searchResults.length)); // Load more in chunks
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
