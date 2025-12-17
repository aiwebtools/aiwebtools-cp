
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTermInternal] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [displayedCount, setDisplayedCount] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Precompute lowercase fields once (keeps search snappy)
  const quickIndex = useMemo(() => {
    return allTools.map((tool) => ({
      tool,
      t: tool.title?.toLowerCase() || "",
      d: tool.description?.toLowerCase() || "",
      c: tool.category?.toLowerCase() || "",
      tags: tool.tags?.map(tag => tag.toLowerCase()) || [],
    }));
  }, []);

  // INSTANT prefix-based autocomplete search - type "R" = all R tools, "RU" = Runway etc.
  const quickSearch = useCallback((term: string) => {
    const q = term.toLowerCase().trim();
    if (!q) return [];

    // Tier 1: Exact title prefix matches (highest priority - "R" finds "Runway", "Restyle ME GPT")
    const prefixMatches: any[] = [];
    // Tier 2: Title contains the query
    const titleContains: any[] = [];
    // Tier 3: Word in title starts with query (e.g., "writ" matches "Book Writer GPT")  
    const wordPrefixMatches: any[] = [];
    // Tier 4: Tag/category matches
    const tagMatches: any[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      // TIER 1: Title starts with query - highest priority
      if (it.t.startsWith(q)) {
        prefixMatches.push(it.tool);
        continue;
      }

      // TIER 2: Any word in title starts with query
      const titleWords = it.t.split(/[\s\-_&,.:]+/);
      let wordMatch = false;
      for (const word of titleWords) {
        if (word.startsWith(q)) {
          wordPrefixMatches.push(it.tool);
          wordMatch = true;
          break;
        }
      }
      if (wordMatch) continue;

      // TIER 3: Title contains query anywhere
      if (it.t.includes(q)) {
        titleContains.push(it.tool);
        continue;
      }

      // TIER 4: Tags or category match (for 2+ char queries)
      if (q.length >= 2) {
        const tagMatch = it.tags.some(tag => tag.startsWith(q) || tag.includes(q));
        const catMatch = it.c.startsWith(q) || it.c.includes(q);
        if (tagMatch || catMatch) {
          tagMatches.push(it.tool);
        }
      }

      // Performance cap - we have plenty of results
      if (prefixMatches.length + wordPrefixMatches.length + titleContains.length + tagMatches.length >= 100) break;
    }

    // Return in priority order: prefix > word prefix > contains > tags
    return [...prefixMatches, ...wordPrefixMatches, ...titleContains, ...tagMatches].slice(0, 100);
  }, [quickIndex]);

  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleRef = useRef<number | null>(null);

  // INSTANT typing - show quick results immediately, refine when browser is idle
  const setSearchTerm = useCallback((value: string) => {
    setSearchTermInternal(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (idleRef.current && "cancelIdleCallback" in window) {
      // @ts-ignore
      window.cancelIdleCallback(idleRef.current);
      idleRef.current = null;
    }

    const t = value.trim();
    if (!t) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    setIsOpen(true);

    // 1) INSTANT suggestions - prefix matching runs synchronously (no delay!)
    const fast = quickSearch(t);
    setSearchResults(fast);
    setDisplayedCount(50);

    // 2) Full intelligent ranking only for 2+ chars (runs when browser has time)
    if (t.length >= 2) {
      const runFull = () => {
        const currentId = ++searchIdRef.current;
        const results = searchTools(allTools, t);
        if (currentId === searchIdRef.current) {
          setSearchResults(results);
          setDisplayedCount(50);
        }
      };

      // Prefer requestIdleCallback to avoid blocking typing
      if ("requestIdleCallback" in window) {
        // @ts-ignore
        idleRef.current = window.requestIdleCallback(runFull, { timeout: 200 });
        return;
      }

      // Fallback - very short delay
      debounceRef.current = setTimeout(runFull, 40);
    }
  }, [quickSearch]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToolClick = useCallback((toolIndex: number) => {
    setIsOpen(false);
    setSearchTermInternal("");
    navigate(`/tool/${toolIndex}`);
  }, [navigate]);

  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked in global search for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTermInternal("");
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTermInternal("");
    setSearchResults([]);
    setIsOpen(false);
    setDisplayedCount(50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTermInternal("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      if (searchResults.length > 0) {
        const topResult = searchResults[0];
        const toolIndex = allTools.findIndex(t => t.title === topResult.title);
        if (toolIndex !== -1) {
          setIsOpen(false);
          setSearchTermInternal("");
          navigate(`/tool/${toolIndex}`);
        }
      }
    }
  }, [searchTerm, searchResults, navigate]);

  // INFINITE SCROLL - Load more results as user scrolls
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Don't trigger if already loading or no more results
    if (isLoadingMore || displayedCount >= searchResults.length) return;
    
    // Trigger load when within 300px of bottom
    const threshold = 300;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom) {
      setIsLoadingMore(true);
      
      // Load 50 more items
      requestAnimationFrame(() => {
        setDisplayedCount(prev => Math.min(prev + 50, searchResults.length));
        setIsLoadingMore(false);
      });
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
