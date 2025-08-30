
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";
import { useDebounce } from "@/hooks/useDebounce";
import { deduplicateSearchResults, quickDeduplicateSearchResults } from "@/utils/search/core/searchDeduplication";
import { sortToolsAlphabetically, getAlphabeticalSortKey } from "@/utils/search/alphabeticalSorting";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // Instant visual feedback with minimal delay
  const debouncedSearchTerm = useDebounce(searchTerm, 80);

  // INSTANT search effect - show results immediately as user types
  useEffect(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 1) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      return;
    }

    const lowerTerm = trimmedTerm.toLowerCase();
    
    // Ultra-fast exact title matching for instant feedback
    const quickMatches = allTools.filter(tool => 
      tool.title.toLowerCase().includes(lowerTerm)
    ).slice(0, 50);

    // Show quick results immediately
    setSearchResults([...quickMatches, ...allTools.filter(tool => 
      !quickMatches.some(quick => quick.title === tool.title)
    )]);
    setDisplayedCount(30);
    setIsOpen(true);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToolClick = useCallback((toolIndex: number) => {
    setIsOpen(false);
    setSearchTerm("");
    navigate(`/tool/${toolIndex}`);
  }, [navigate]);

  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked in global search for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTerm("");
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setIsOpen(false);
    setDisplayedCount(30);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setDisplayedCount(30);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      if (searchResults.length > 0) {
        const topResult = searchResults[0];
        const toolIndex = allTools.findIndex(t => t.title === topResult.title);
        if (toolIndex !== -1) {
          setIsOpen(false);
          setSearchTerm("");
          navigate(`/tool/${toolIndex}`);
        }
      }
    }
  }, [searchTerm, searchResults, navigate]);

  // FIXED scroll handler with proper endless loading and performance optimization
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Performance optimization - throttle scroll events
    if (isLoadingMore) return;
    
    // More responsive loading threshold for smooth endless scroll
    const threshold = 100;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    // Removed console.log for performance
    
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Immediate loading with shorter delay for better UX
      setTimeout(() => {
        const increment = Math.min(25, searchResults.length - displayedCount); // Load more items per batch
        // Removed console.log for performance
        setDisplayedCount(prev => prev + increment);
        setIsLoadingMore(false);
      }, 100); // Reduced delay for snappier response
    }
  }, [displayedCount, searchResults.length, isLoadingMore]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    isLoadingMore,
    toolStats,
    searchRef,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
  };
};
