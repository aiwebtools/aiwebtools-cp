
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
  
  // Immediate response for typing, debounced for full processing
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  // Fast search effect for immediate response while typing
  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) {
      if (debouncedSearchTerm.trim().length < 2) {
        setSearchResults([]);
        setIsOpen(false);
        setDisplayedCount(30);
      }
      return;
    }

    const lowerTerm = trimmedTerm.toLowerCase();
    
    // UNIVERSAL EXACT MATCHING LOGIC for all search lengths
    const exactMatches = allTools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      return lowerTitle === lowerTerm || lowerTitle.includes(lowerTerm);
    });

    const partialMatches = allTools.filter(tool => {
      if (exactMatches.some(exact => exact.title === tool.title)) return false;
      
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description?.toLowerCase() || "";
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
      
      // Check all searchable fields
      return lowerTitle.includes(lowerTerm) ||
             lowerDescription.includes(lowerTerm) ||
             lowerCategory.includes(lowerTerm) ||
             lowerTags.includes(lowerTerm) ||
             // Word boundary matching
             lowerTitle.match(new RegExp(`\\b${lowerTerm}`, 'i')) ||
             lowerDescription.match(new RegExp(`\\b${lowerTerm}`, 'i'));
    });

    // For 4+ characters, also use intelligent search
    let intelligentResults = [];
    if (trimmedTerm.length >= 4) {
      intelligentResults = searchTools(allTools, trimmedTerm).filter(tool => 
        !exactMatches.some(exact => exact.title === tool.title) &&
        !partialMatches.some(partial => partial.title === tool.title)
      );
    }

    // Sort exact matches by relevance with better AI tool handling
    const sortedExact = exactMatches.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      // Perfect match first
      if (aTitle === lowerTerm && bTitle !== lowerTerm) return -1;
      if (bTitle === lowerTerm && aTitle !== lowerTerm) return 1;
      
      // Starts with term
      const aStarts = aTitle.startsWith(lowerTerm);
      const bStarts = bTitle.startsWith(lowerTerm);
      if (aStarts && !bStarts) return -1;
      if (bStarts && !aStarts) return 1;
      
      // Finally by alphabetical sort key (emoji+AI tools go to end)
      const keyA = getAlphabeticalSortKey(a.title);
      const keyB = getAlphabeticalSortKey(b.title);
      return keyA.localeCompare(keyB);
    });

    // Sort partial matches with better alphabetical handling
    const sortedPartial = partialMatches.sort((a, b) => {
      // First by alphabetical sort key (emoji+AI tools go to end)
      const keyA = getAlphabeticalSortKey(a.title);
      const keyB = getAlphabeticalSortKey(b.title);
      return keyA.localeCompare(keyB);
    });

    // Combine results and apply QUICK deduplication for lightning-fast response
    const finalResults = [
      ...sortedExact,
      ...sortedPartial,
      ...intelligentResults
    ];

    // Use quick deduplication for instant response
    const quickResults = quickDeduplicateSearchResults(finalResults);
    
    // Add remaining tools for endless scroll
    const remainingTools = allTools.filter(tool => 
      !quickResults.some(result => result.title === tool.title)
    );
    
    const endlessResults = [...quickResults, ...remainingTools];
    
    setSearchResults(endlessResults);
    setDisplayedCount(30);
    setIsOpen(true);
  }, [searchTerm]);

  // Full deduplication effect for final results (debounced)
  useEffect(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) return;
    
    // Only apply full deduplication if we have search results and term matches debounced term
    if (searchResults.length > 0 && searchTerm === debouncedSearchTerm) {
      const currentResults = searchResults.slice(0, 100); // Get current visible results
      const fullyDeduplicated = deduplicateSearchResults(currentResults);
      
      // Add remaining tools back
      const remainingTools = allTools.filter(tool => 
        !fullyDeduplicated.some(result => result.title === tool.title)
      );
      
      const finalResults = [...fullyDeduplicated, ...remainingTools];
      
      if (finalResults.length !== searchResults.length) {
        setSearchResults(finalResults);
        console.log(`🔍 Applied full deduplication: ${currentResults.length} → ${fullyDeduplicated.length} tools`);
      }
    }
  }, [debouncedSearchTerm, searchTerm]);

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
