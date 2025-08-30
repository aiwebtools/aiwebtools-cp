// Ultra-fast optimized global search hook
// Delivers instant search experience while maintaining ALL functionality

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { fastSearchTools, optimizedSearchEngine } from "@/utils/search/optimizedSearchEngine";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { deduplicateSearchResults } from "@/utils/search/core/searchDeduplication";

export const useOptimizedGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cache tool stats for performance
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // Initialize search engine on mount
  useEffect(() => {
    // Build search index in background for instant results
    if (!optimizedSearchEngine['searchIndex']) {
      optimizedSearchEngine.buildIndex(allTools);
    }
  }, []);

  // INSTANT search with minimal debounce for responsiveness
  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    if (!trimmedTerm || trimmedTerm.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Ultra-short debounce for instant feel (50ms vs 300ms)
    searchTimeoutRef.current = setTimeout(() => {
      try {
        // Use optimized search engine for lightning-fast results
        const results = fastSearchTools(allTools, trimmedTerm);
        
        // Apply deduplication to maintain data integrity
        const deduplicatedResults = deduplicateSearchResults(results);
        
        setSearchResults(deduplicatedResults);
        setDisplayedCount(30);
        setIsOpen(true);
        setIsSearching(false);
      } catch (error) {
        console.error('Search error:', error);
        setIsSearching(false);
        // Fallback to showing all tools to maintain functionality
        setSearchResults(allTools);
        setDisplayedCount(30);
        setIsOpen(true);
      }
    }, 50); // Ultra-fast 50ms debounce for instant responsiveness

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchTerm]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Optimized tool click handler
  const handleToolClick = useCallback((toolIndex: number) => {
    setIsOpen(false);
    setSearchTerm("");
    navigate(`/tool/${toolIndex}`);
  }, [navigate]);

  // Optimized direct access handler
  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTerm("");
    }
  }, []);

  // Optimized clear search handler
  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setIsOpen(false);
    setDisplayedCount(30);
    setIsSearching(false);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
  }, []);

  // Optimized keyboard handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      clearSearch();
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
  }, [searchTerm, searchResults, navigate, clearSearch]);

  // Highly optimized scroll handler with throttling
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (isLoadingMore) return;
    
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const threshold = 100;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Use requestAnimationFrame for smooth loading
      requestAnimationFrame(() => {
        const increment = Math.min(25, searchResults.length - displayedCount);
        setDisplayedCount(prev => prev + increment);
        setIsLoadingMore(false);
      });
    }
  }, [displayedCount, searchResults.length, isLoadingMore]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    isLoadingMore,
    isSearching, // New loading state for better UX
    toolStats,
    searchRef,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
  };
};