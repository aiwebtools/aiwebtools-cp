
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
    const qRaw = term.toLowerCase().trim();
    if (!qRaw) return [];

    // Lightweight normalization for common spaced compounds (keeps instant stage smart)
    const q = qRaw
      .replace(/\s+/g, " ")
      .replace(/\brun way\b/g, "runway")
      .trim();

    type Scored = { tool: any; score: number };
    const scored: Scored[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      let score = 0;

      // Title prefix is king ("run" => Runway*, Runpod, etc.)
      if (it.t.startsWith(q)) {
        score += 10000;

        // Prefer exact/near-exact matches first
        const title = it.t;
        if (title === q) score += 3000;
        if (title.startsWith(`${q} `) || title.startsWith(`${q}-`) || title.startsWith(`${q}:`)) score += 1500;

        // Shorter titles are usually the canonical product ("Runway ML" over "RunwayML Gen-2")
        score += Math.max(0, 600 - title.length);
      }

      // Any word in title starts with query
      if (!score) {
        const titleWords = it.t.split(/[\s\-_\u0026,.:]+/);
        for (const word of titleWords) {
          if (word && word.startsWith(q)) {
            score += 8000;
            score += Math.max(0, 400 - word.length);
            break;
          }
        }
      }

      // Title contains query
      if (!score && it.t.includes(q)) {
        score += 5000;
      }

      // Tags/category help (only when user is a bit more specific)
      if (!score && q.length >= 2) {
        if (it.c && (it.c.startsWith(q) || it.c.includes(q))) score += 2500;
        if (it.tags?.some((tag: string) => tag.startsWith(q))) score += 2400;
        else if (it.tags?.some((tag: string) => tag.includes(q))) score += 2000;
      }

      // Tiny extra boost for major platforms when query is a prefix
      if (score && (q === "run" || q === "runw" || q === "runway")) {
        if (it.t.startsWith("runway")) score += 1200;
      }

      if (score) scored.push({ tool: it.tool, score });

      if (scored.length >= 140) break;
    }

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const at = a.tool.title?.toLowerCase() || "";
      const bt = b.tool.title?.toLowerCase() || "";
      return at.localeCompare(bt);
    });

    return scored.map((s) => s.tool).slice(0, 100);
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
