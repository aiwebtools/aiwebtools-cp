
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
    }));
  }, []);

  const quickSearch = useCallback((term: string) => {
    const q = term.toLowerCase().trim();
    const words = q.split(/[\s,.-]+/).filter((w) => w.length > 1);

    // Fast path: prefer title matches first
    const starts: any[] = [];
    const includes: any[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      // Title startsWith gets top priority
      if (it.t.startsWith(q)) {
        starts.push(it.tool);
        continue;
      }

      // Title includes
      if (it.t.includes(q)) {
        includes.push(it.tool);
        continue;
      }

      // For 3+ chars, allow description/category word hits
      if (q.length >= 3 && words.length) {
        let hit = false;
        for (const w of words) {
          if (it.t.includes(w) || it.c.includes(w) || it.d.includes(w)) {
            hit = true;
            break;
          }
        }
        if (hit) includes.push(it.tool);
      }

      // Keep this ultra-fast: stop scanning once we have enough
      if (starts.length + includes.length >= 80) break;
    }

    return [...starts, ...includes].slice(0, 80);
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
    if (!t || t.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    setIsOpen(true);

    // 1) Immediate suggestions (no heavy intelligence yet)
    const fast = quickSearch(t);
    setSearchResults(fast);
    setDisplayedCount(50);

    // 2) Full hyper-intelligent ranking (runs when the browser has time)
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
      idleRef.current = window.requestIdleCallback(runFull, { timeout: 250 });
      return;
    }

    // Fallback
    debounceRef.current = setTimeout(runFull, 60);
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
