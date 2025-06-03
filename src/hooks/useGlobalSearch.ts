
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useSearchDebounce, useInstantSearch } from "@/hooks/useDebounce";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(20); // Reduced for faster initial render
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Ultra-fast debounce (50ms instead of 150ms)
  const debouncedSearchTerm = useSearchDebounce(searchTerm, 50);
  // Instant feedback for UI
  const instantSearchTerm = useInstantSearch(searchTerm);

  // Memoize tool stats
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Highly optimized search effect
  useEffect(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    if (trimmedTerm) {
      // Super fast single character matching
      if (trimmedTerm.length === 1) {
        const simpleResults = allTools.filter(tool => 
          tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
        ).slice(0, 10); // Reduced count
        setSearchResults(simpleResults);
        setDisplayedCount(10);
        setIsOpen(true);
        return;
      }
      
      // Fast two character matching
      if (trimmedTerm.length === 2) {
        const fastResults = allTools.filter(tool => 
          tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
          tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
        ).slice(0, 15);
        setSearchResults(fastResults);
        setDisplayedCount(15);
        setIsOpen(true);
        return;
      }
      
      const results = searchTools(allTools, trimmedTerm);
      setSearchResults(results);
      setDisplayedCount(20);
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(20);
    }
  }, [debouncedSearchTerm]);

  // Optimized click outside handler
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
    setDisplayedCount(20);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setDisplayedCount(20);
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

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 50 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 10, searchResults.length)); // Smaller increments
    }
  }, [displayedCount, searchResults.length]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    toolStats,
    searchRef,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
  };
};
