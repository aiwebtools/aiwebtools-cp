
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
import { enhancedToolScoring } from "@/utils/search/enhancedKeywordMatching";
import { matchToolByIntent } from "@/utils/search/core/intentBasedMatching";
export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // Pre-index tools for ultra-fast matching (no regex)
  const indexedTools = useMemo(() => allTools.map(t => ({
    tool: t,
    lt: t.title.toLowerCase(),
    ld: (t.description || "").toLowerCase(),
    lc: (t.category || "").toLowerCase(),
    lta: (t.tags || []).join(" ").toLowerCase(),
  })), []);
  
  // Optimized debounce for smooth performance
  const debouncedSearchTerm = useDebounce(searchTerm, 120);
  // Optimized search with performance safeguards
  useEffect(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    // Early returns for performance
    if (!trimmedTerm) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      return;
    }

    const lowerTerm = trimmedTerm.toLowerCase();

    // Fast candidate pre-filter (no regex)
    const candidates = indexedTools.filter(ix =>
      ix.lt.includes(lowerTerm) ||
      ix.ld.includes(lowerTerm) ||
      ix.lc.includes(lowerTerm) ||
      ix.lta.includes(lowerTerm)
    );

    // If no obvious candidates and term is short, broaden via existing intelligent search
    let fallbackResults: any[] = [];
    if (candidates.length < 5 && trimmedTerm.length >= 3 && trimmedTerm.length <= 15) {
      try {
        fallbackResults = searchTools(allTools, trimmedTerm);
      } catch {
        fallbackResults = [];
      }
    }

    // Score and rank the union of candidates/fallback
    const baseList = (candidates.length ? candidates.map(ix => ix.tool) : fallbackResults);

    const scored = baseList.map(tool => {
      const lt = tool.title.toLowerCase();
      const ld = (tool.description || "").toLowerCase();
      const lc = (tool.category || "").toLowerCase();
      const lta = (tool.tags || []).join(" ").toLowerCase();

      let score = 0;

      // Absolute priority: exact title match first
      if (lt === lowerTerm) score += 10000;
      // Strong signal: title starts with term
      if (lt.startsWith(lowerTerm)) score += 1200;
      // General relevance signals
      if (lt.includes(lowerTerm)) score += 400;
      if (ld.includes(lowerTerm)) score += 160;
      if (lc.includes(lowerTerm)) score += 120;
      if (lta.includes(lowerTerm)) score += 90;

      // Intent awareness (e.g., "I want to write a book", "make a movie", "make an app", "website")
      try {
        const intent = matchToolByIntent(tool, trimmedTerm);
        if (intent?.matched) score += intent.score;
      } catch {}

      // Enhanced category-aware scoring (aggregates many specific matchers)
      try {
        score += enhancedToolScoring(tool, trimmedTerm) || 0;
      } catch {}

      return { tool, score };
    });

    // Sort by score desc, then ensure exact match first, then alpha for stability
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const aExact = a.tool.title.toLowerCase() === lowerTerm ? 1 : 0;
      const bExact = b.tool.title.toLowerCase() === lowerTerm ? 1 : 0;
      if (bExact !== aExact) return bExact - aExact;
      return a.tool.title.localeCompare(b.tool.title);
    });

    const ranked = scored.map(s => s.tool);
    const deduped = quickDeduplicateSearchResults ? quickDeduplicateSearchResults(ranked) : ranked;

    // Cap results for performance (UI still uses displayedCount for virtualized display)
    const limited = deduped.slice(0, 300);

    setSearchResults(limited);
    setDisplayedCount(30);
    setIsOpen(true);
  }, [debouncedSearchTerm, indexedTools]);

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
