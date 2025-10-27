
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
  const indexedTools = useMemo(() => allTools.map(t => {
    const lt = t.title.toLowerCase();
    const ld = (t.description || "").toLowerCase();
    const lc = (t.category || "").toLowerCase();
    const lta = (t.tags || []).join(" ").toLowerCase();
    return { tool: t, lt, ld, lc, lta, all: `${lt} ${ld} ${lc} ${lta}` };
  }), []);
  
  // Debounce for heavy scoring stage
  const heavyTerm = useDebounce(searchTerm, 320);
  // FAST stage: immediate results while typing (super lightweight)
  useEffect(() => {
    const t = searchTerm.trim();
    if (!t) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      return;
    }
    const q = t.toLowerCase();
    const tokens = q.split(/\s+/).filter(w => w.length >= 3);

    let fast = indexedTools
      .filter(ix => {
        if (tokens.length > 0) {
          // token-based match for long phrases
          return tokens.some(tok => ix.all.includes(tok));
        }
        return ix.lt.includes(q) || ix.lc.includes(q) || ix.ld.includes(q) || ix.lta.includes(q);
      })
      .map(ix => ix.tool);

    const quickScore = (tool: any) => {
      const lt = tool.title.toLowerCase();
      const ltNormalized = lt.replace(/\s+/g, ' ').trim(); // Normalize spaces
      const qNormalized = q.replace(/\s+/g, ' ').trim();
      
      // Extract key words from search query
      const queryWords = qNormalized.split(/\s+/).filter(w => w.length > 1);
      const titleWords = ltNormalized.split(/\s+/);
      
      let s = 0;
      
      // PERFECT EXACT match prioritization (super strong boost)
      if (ltNormalized === qNormalized) s += 100000;
      
      // Check if all query words appear in title in order (high relevance)
      let allWordsInOrder = true;
      let lastIndex = -1;
      for (const word of queryWords) {
        const index = ltNormalized.indexOf(word, lastIndex + 1);
        if (index === -1) {
          allWordsInOrder = false;
          break;
        }
        lastIndex = index;
      }
      if (allWordsInOrder && queryWords.length >= 2) {
        s += 90000; // Very high score for queries like "VEO 3 Prompt" matching "VEO3 TEXT TO VIDEO PROMPT GENERATOR"
      }
      
      // Title starts with query
      if (ltNormalized.startsWith(qNormalized)) s += 80000;
      
      // Check for number variations (e.g., "VEO 3" vs "VEO3")
      const qNoSpaces = qNormalized.replace(/\s+/g, '');
      const ltNoSpaces = ltNormalized.replace(/\s+/g, '');
      if (ltNoSpaces.includes(qNoSpaces)) s += 75000;
      
      // All query words match title words (exact word matches)
      const matchedWords = queryWords.filter(qw => 
        titleWords.some(tw => tw === qw || tw.startsWith(qw))
      );
      if (matchedWords.length === queryWords.length && queryWords.length >= 2) {
        s += 70000;
      }
      
      // Title contains query
      if (ltNormalized.includes(qNormalized)) s += 30000;
      
      // First word exact match bonus
      if (queryWords.length > 0 && titleWords.length > 0) {
        if (titleWords[0] === queryWords[0] || titleWords[0].startsWith(queryWords[0])) {
          s += 15000;
        }
      }

      // token-based scoring for longer sentences
      for (const tok of tokens) {
        if (lt === tok) s += 50000; // Exact token match in title
        if (lt.startsWith(tok)) s += 6000;
        if (lt.includes(tok)) s += 2400;
      }

      // Special rule: when user types MAKE, prefer "Make Automation Maker"
      if ((q === "make" || tokens[0] === "make")) {
        if (lt.startsWith("make ")) s += 3500;
        if (lt.includes("make automation")) s += 6000;
      }

      return s;
    };

    fast.sort((a, b) => quickScore(b) - quickScore(a));

    // Intent-like quick prioritization for common phrases
    const prioritize = (predicate: (tool: any) => boolean) => {
      const hits: any[] = [];
      const rest: any[] = [];
      for (const tool of fast) {
        (predicate(tool) ? hits : rest).push(tool);
      }
      fast = [...hits, ...rest];
    };

    if (/write.*book|book.*write|\bbook\b/i.test(t)) {
      prioritize(tool => tool.title.toLowerCase().includes("book writer") ||
        tool.title.toLowerCase().includes("book") ||
        (tool.tags || []).join(" ").toLowerCase().includes("book"));
    }

    if (/make.*movie|movie.*make|\bmovie\b|\bfilm\b/i.test(t)) {
      prioritize(tool => tool.title.toLowerCase().includes("movie maker") ||
        tool.title.toLowerCase().includes("movie scene") ||
        tool.title.toLowerCase().includes("movie script") ||
        tool.title.toLowerCase().includes("text to video"));
    }

    if (/make.*app|build.*app|\bapp\b/i.test(t)) {
      prioritize(tool => tool.title.toLowerCase().includes("microsaas") ||
        tool.title.toLowerCase().includes("agent") ||
        tool.title.toLowerCase().includes("app"));
    }

    if (/website|make.*website|build.*website|\bsite\b/i.test(t)) {
      prioritize(tool => tool.title.toLowerCase().includes("website") ||
        tool.title.toLowerCase().includes("site") ||
        tool.title.toLowerCase().includes("text to website") ||
        tool.title.toLowerCase().includes("builder"));
    }

    // Don't limit results - enable endless scrolling
    setSearchResults(fast);
    setDisplayedCount(30);
    setIsOpen(true);
  }, [searchTerm, indexedTools]);

  // HEAVY stage: intent + category-aware smart ranking after short pause
  useEffect(() => {
    const trimmedTerm = heavyTerm.trim();
    if (!trimmedTerm) return; // keep fast results when empty
    if (trimmedTerm !== searchTerm.trim()) return; // stale guard

    const lowerTerm = trimmedTerm.toLowerCase();
    const tokens = lowerTerm.split(/\s+/).filter(w => w.length >= 3);

    // Pre-filter to reduce workload
    const candidates = indexedTools.filter(ix =>
      (tokens.length ? tokens.some(tok => ix.all.includes(tok)) : (
        ix.lt.includes(lowerTerm) || ix.ld.includes(lowerTerm) || ix.lc.includes(lowerTerm) || ix.lta.includes(lowerTerm)
      ))
    );

    // If few candidates, broaden via existing intelligent search
    let fallbackResults: any[] = [];
    if (candidates.length < 5 && trimmedTerm.length >= 3 && trimmedTerm.length <= 20) {
      try {
        fallbackResults = searchTools(allTools, trimmedTerm);
      } catch {
        fallbackResults = [];
      }
    }

    const baseList = (candidates.length ? candidates.map(ix => ix.tool) : fallbackResults);

    const scored = baseList.map(tool => {
      const lt = tool.title.toLowerCase();
      const ld = (tool.description || "").toLowerCase();
      const lc = (tool.category || "").toLowerCase();
      const lta = (tool.tags || []).join(" ").toLowerCase();
      
      // Normalized versions for better matching
      const ltNormalized = lt.replace(/\s+/g, ' ').trim();
      const lowerTermNormalized = lowerTerm.replace(/\s+/g, ' ').trim();
      const queryWords = lowerTermNormalized.split(/\s+/).filter(w => w.length > 1);
      const titleWords = ltNormalized.split(/\s+/);
      
      let score = 0;
      
      // PERFECT exact title match
      if (ltNormalized === lowerTermNormalized) score += 100000;
      
      // Check if all query words appear in title in order
      let allWordsInOrder = true;
      let lastIndex = -1;
      for (const word of queryWords) {
        const index = ltNormalized.indexOf(word, lastIndex + 1);
        if (index === -1) {
          allWordsInOrder = false;
          break;
        }
        lastIndex = index;
      }
      if (allWordsInOrder && queryWords.length >= 2) {
        score += 90000; // Very high for ordered word matches
      }
      
      // Number variation matching (VEO 3 vs VEO3)
      const lowerNoSpaces = lowerTermNormalized.replace(/\s+/g, '');
      const ltNoSpaces = ltNormalized.replace(/\s+/g, '');
      if (ltNoSpaces.includes(lowerNoSpaces) && lowerNoSpaces.length > 3) {
        score += 75000;
      }
      
      // All query words match title words
      const matchedWords = queryWords.filter(qw => 
        titleWords.some(tw => tw === qw || tw.startsWith(qw))
      );
      if (matchedWords.length === queryWords.length && queryWords.length >= 2) {
        score += 70000;
      }
      
      // Standard matching
      if (lt === lowerTerm) score += 10000;
      if (lt.startsWith(lowerTerm)) score += 1400;
      if (lt.includes(lowerTerm)) score += 450;
      if (ld.includes(lowerTerm)) score += 180;
      if (lc.includes(lowerTerm)) score += 140;
      if (lta.includes(lowerTerm)) score += 100;

      // token-based reinforcement for long sentences
      for (const tok of tokens) {
        if (lt === tok) score += 5200;
        if (lt.startsWith(tok)) score += 700;
        if (lt.includes(tok)) score += 260;
      }

      // Manual boosters for key intents to guarantee top picks
      if (/write.*book|book.*write|\bbook\b/i.test(trimmedTerm)) {
        if (lt.includes("book writer")) score += 6000;
        else if (lt.includes("book")) score += 1200;
      }
      if (/make.*movie|movie.*make|\bmovie\b|\bfilm\b/i.test(trimmedTerm)) {
        if (lt.includes("movie maker")) score += 6000;
        if (lt.includes("text to video")) score += 2800;
        if (lt.includes("movie script") || lt.includes("movie scene")) score += 2000;
      }
      if (/make.*app|build.*app|\bapp\b/i.test(trimmedTerm)) {
        if (lt.includes("microsaas")) score += 5200;
        if (lt.includes("agent")) score += 2600;
        if (lt.includes("app")) score += 900;
      }
      if (/website|make.*website|build.*website|\bsite\b/i.test(trimmedTerm)) {
        if (lt.includes("text to website")) score += 5200;
        if (lt.includes("website") || lt.includes("site")) score += 1500;
        if (lt.includes("builder")) score += 1000;
      }

      try {
        const intent = matchToolByIntent(tool, trimmedTerm);
        if (intent?.matched) score += intent.score;
      } catch {}
      
      try {
        score += enhancedToolScoring(tool, trimmedTerm) || 0;
      } catch {}

      return { tool, score };
    });

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const aExact = a.tool.title.toLowerCase() === lowerTerm ? 1 : 0;
      const bExact = b.tool.title.toLowerCase() === lowerTerm ? 1 : 0;
      if (bExact !== aExact) return bExact - aExact;
      return a.tool.title.localeCompare(b.tool.title);
    });

    const ranked = scored.map(s => s.tool);
    const deduped = quickDeduplicateSearchResults ? quickDeduplicateSearchResults(ranked) : ranked;
    // Don't limit results - enable endless scrolling for all searches
    
    if (trimmedTerm === searchTerm.trim()) {
      setSearchResults(deduped);
      setDisplayedCount(30);
      setIsOpen(true);
    }
  }, [heavyTerm, searchTerm, indexedTools]);

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

  // ENHANCED scroll handler with proper endless loading and performance optimization
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Performance optimization - throttle scroll events
    if (isLoadingMore) return;
    
    // More aggressive threshold for smoother endless scroll experience
    const threshold = 150;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Immediate loading with optimized batch size
      setTimeout(() => {
        // Load larger batches for better UX (30 items at a time)
        const increment = Math.min(30, searchResults.length - displayedCount);
        setDisplayedCount(prev => prev + increment);
        setIsLoadingMore(false);
      }, 50); // Faster response time
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
