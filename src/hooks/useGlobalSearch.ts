
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

// SMART INTENT EXTRACTION - Parse natural language to find what user REALLY wants
const extractIntent = (query: string): { intent: string; keywords: string[] } => {
  const q = query.toLowerCase();
  
  // Comic book intent (check BEFORE general book intent)
  if (/comic\s*book|make\s*(a\s*)?comic|create\s*(a\s*)?comic|comic\s*(generat|creat|mak)/i.test(q)) {
    return { intent: 'comic', keywords: ['comic', 'comic book', 'coloring book', 'picture book', 'children', 'illustration'] };
  }
  
  // Children's book intent
  if (/children.*book|kids.*book|picture\s*book|coloring\s*book/i.test(q)) {
    return { intent: 'children_book', keywords: ['children', 'picture book', 'coloring book', 'kids', 'comic'] };
  }
  
  // Book/writing intent
  if (/write\s*(a\s*)?(book|novel|story)|looking\s+to\s+write|want\s+to\s+write\s*(a\s*)?(book|novel)|book\s*writ/i.test(q)) {
    return { intent: 'book', keywords: ['book writer', 'book', 'novel', 'story', 'writing'] };
  }
  
  // Movie script intent
  if (/write\s*(a\s*)?(movie|film|script|screenplay)|movie\s*script|screenplay|film\s*script|looking\s+to\s+write.*(movie|script)/i.test(q)) {
    return { intent: 'movie_script', keywords: ['movie script', 'screenplay', 'movie maker', 'film', 'script writer'] };
  }
  
  // Movie/video making intent
  if (/make\s*(a\s*)?(movie|film|video)|create\s*(a\s*)?(movie|film|video)|movie\s*mak|video\s*(creat|generat|mak)/i.test(q)) {
    return { intent: 'movie_making', keywords: ['movie maker', 'video', 'film', 'text to video', 'movie scene'] };
  }
  
  // Image generation intent
  if (/make\s*(an?\s*)?(image|picture|photo|art)|create\s*(an?\s*)?(image|picture|photo|art)|generat.*image|image\s*(generat|creat|mak)|want.*image/i.test(q)) {
    return { intent: 'image', keywords: ['image', 'art', 'picture', 'midjourney', 'dalle', 'stable diffusion', 'generate'] };
  }
  
  // Music intent
  if (/make\s*(a\s*)?(song|music|beat)|create\s*music|music\s*(generat|creat|mak)|write\s*(a\s*)?song/i.test(q)) {
    return { intent: 'music', keywords: ['music', 'song', 'audio', 'beat', 'melody'] };
  }
  
  // Website intent
  if (/make\s*(a\s*)?(website|site|webpage)|build\s*(a\s*)?(website|site)|create\s*(a\s*)?(website|site)/i.test(q)) {
    return { intent: 'website', keywords: ['website', 'site', 'web', 'builder', 'text to website'] };
  }
  
  // App intent
  if (/make\s*(an?\s*)?(app|application)|build\s*(an?\s*)?(app|application)|create\s*(an?\s*)?(app|application)/i.test(q)) {
    return { intent: 'app', keywords: ['app', 'saas', 'microsaas', 'application', 'agent'] };
  }
  
  // Presentation intent
  if (/make\s*(a\s*)?(presentation|ppt|powerpoint|slides)|create\s*(a\s*)?(presentation|slides)/i.test(q)) {
    return { intent: 'presentation', keywords: ['ppt', 'powerpoint', 'presentation', 'slides'] };
  }
  
  return { intent: '', keywords: [] };
};

// FAST keyword extraction - get important words from long sentences
const extractKeywords = (query: string): string[] => {
  // Remove common filler words for faster matching
  const fillers = /\b(i|am|a|an|the|to|for|of|and|or|in|on|is|it|my|me|we|us|looking|want|need|would|like|trying|help|please|can|you|how|do|make|create|get|find|some|with|that|this|have|what|where|when|just|really|very|also|too|so|but|if|as|be|been|was|were|will|would|could|should|may|might)\b/gi;
  const cleaned = query.toLowerCase().replace(fillers, ' ').replace(/\s+/g, ' ').trim();
  return cleaned.split(' ').filter(w => w.length >= 2);
};

// Global, cached index of ALL tools so we only pay the indexing cost once
// instead of recalculating on every route change / hook mount.
let cachedIndexedTools: {
  tool: any;
  lt: string;
  ld: string;
  lc: string;
  lta: string;
  all: string;
  normalized: string;
}[] | null = null;

const getIndexedTools = () => {
  if (cachedIndexedTools) return cachedIndexedTools;

  cachedIndexedTools = allTools.map((t) => {
    const lt = t.title.toLowerCase();
    const ld = (t.description || "").toLowerCase();
    const lc = (t.category || "").toLowerCase();
    const lta = (t.tags || []).join(" ").toLowerCase();
    // Create comprehensive searchable text including all fields for maximum discoverability
    const searchableText = `${lt} ${ld} ${lc} ${lta}`;
    // Also create normalized versions for fuzzy matching
    const normalized = searchableText.replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
    return {
      tool: t,
      lt,
      ld,
      lc,
      lta,
      all: searchableText,
      normalized,
    };
  });

  return cachedIndexedTools;
};

// Pre-warm the full tool index during browser idle time so opening menus/search feels instant.
// This avoids a big synchronous 2000+ tool map the moment a dropdown opens.
if (typeof window !== "undefined") {
  const w = window as unknown as { __aiwebtools_index_prewarm__?: boolean };
  if (!w.__aiwebtools_index_prewarm__) {
    w.__aiwebtools_index_prewarm__ = true;

    const warm = () => {
      try {
        getIndexedTools();
      } catch {
        // ignore
      }
    };

    // Prefer requestIdleCallback, fall back to a short timeout.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: { timeout: number }) => number);
    if (ric) ric(warm, { timeout: 1200 });
    else window.setTimeout(warm, 250);
  }
}

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // ULTRA-FAST: Minimal debounce for instant feedback (50ms just to batch rapid keystrokes)
  const debouncedSearchTerm = useDebounce(searchTerm, 50);
  
  // Pre-index tools for HYPER-INTELLIGENT matching - ALL 2000+ tools fully searchable
  const indexedTools = useMemo(() => getIndexedTools(), []);
  
  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  
  // FAST stage: HYPER-INTELLIGENT results with light debounce
  useEffect(() => {
    // Increment search ID immediately to invalidate any pending heavy searches
    searchIdRef.current += 1;
    
    const t = debouncedSearchTerm.trim();
    if (!t) {
      // INSTANT clear - no delay, no freeze
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    // Avoid huge match sets on 1-character queries (causes lag). Start searching at 2+ chars.
    if (t.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }
    
    const q = t.toLowerCase();
    
    // SMART: Extract intent from natural language
    const { intent, keywords: intentKeywords } = extractIntent(t);
    
    // FAST: Extract only important keywords for long sentences
    const smartKeywords = t.length > 30 ? extractKeywords(t) : [];
    const tokens = smartKeywords.length > 0 
      ? smartKeywords.slice(0, 5) // Limit tokens for speed
      : q.split(/\s+/).filter(w => w.length >= 2).slice(0, 8);

    let fast = indexedTools
      .filter(ix => {
        // INTENT-BASED matching (highest priority for natural language)
        if (intent && intentKeywords.length > 0) {
          const intentMatch = intentKeywords.some(kw => 
            ix.lt.includes(kw) || ix.lc.includes(kw) || ix.lta.includes(kw)
          );
          if (intentMatch) return true;
        }
        
        // Direct matching
        const directMatch = ix.lt.includes(q) || ix.lc.includes(q);
        if (directMatch) return true;
        
        // Smart keyword matching (for long sentences)
        if (tokens.length > 0) {
          const keywordMatch = tokens.some(tok => ix.lt.includes(tok) || ix.lc.includes(tok) || ix.lta.includes(tok));
          if (keywordMatch) return true;
        }
        
        return false;
      })
      .map(ix => ix.tool);

    // SMART SCORING with intent awareness
    const quickScore = (tool: any) => {
      const lt = tool.title.toLowerCase();
      const lc = (tool.category || "").toLowerCase();
      const lta = (tool.tags || []).join(" ").toLowerCase();
      
      let s = 0;
      
      // INTENT-BASED SCORING (strongest boost for what user actually wants)
      if (intent === 'comic') {
        if (lt.includes("comic book") || lt.includes("comic")) s += 250000;
        else if (lt.includes("coloring book")) s += 200000;
        else if (lt.includes("picture book") || lt.includes("children")) s += 180000;
        else if (lt.includes("illustration") || lt.includes("graphic")) s += 150000;
      } else if (intent === 'children_book') {
        if (lt.includes("children") && lt.includes("book")) s += 250000;
        else if (lt.includes("picture book")) s += 200000;
        else if (lt.includes("coloring book")) s += 180000;
        else if (lt.includes("comic")) s += 150000;
      } else if (intent === 'book') {
        if (lt.includes("book writer")) s += 200000;
        else if (lt.includes("book")) s += 100000;
      } else if (intent === 'movie_script') {
        if (lt.includes("movie script")) s += 200000;
        else if (lt.includes("script")) s += 150000;
        else if (lt.includes("movie maker") || lt.includes("movie scene")) s += 100000;
      } else if (intent === 'movie_making') {
        if (lt.includes("movie maker")) s += 200000;
        else if (lt.includes("movie scene")) s += 180000;
        else if (lt.includes("text to video") || lt.includes("video")) s += 150000;
      } else if (intent === 'image') {
        if (lt.includes("midjourney") || lt.includes("dall") || lt.includes("stable diffusion")) s += 200000;
        else if (lt.includes("image") && (lt.includes("generat") || lt.includes("creat"))) s += 180000;
        else if (lt.includes("art") || lt.includes("design")) s += 100000;
      } else if (intent === 'music') {
        if (lt.includes("music") || lt.includes("song") || lt.includes("audio")) s += 200000;
      } else if (intent === 'website') {
        if (lt.includes("text to website") || lt.includes("website builder")) s += 200000;
        else if (lt.includes("website") || lt.includes("site")) s += 150000;
      } else if (intent === 'app') {
        if (lt.includes("microsaas")) s += 200000;
        else if (lt.includes("app") || lt.includes("agent")) s += 150000;
      } else if (intent === 'presentation') {
        if (lt.includes("ppt") || lt.includes("powerpoint") || lt.includes("presentation")) s += 200000;
      }
      
      // Standard scoring (when no clear intent)
      if (lt === q) s += 100000;
      if (lt.startsWith(q)) s += 80000;
      if (lt.includes(q)) s += 30000;
      
      // Token scoring (lighter for speed)
      for (const tok of tokens.slice(0, 4)) {
        if (lt.includes(tok)) s += 2000;
        if (lc.includes(tok)) s += 1000;
        if (lta.includes(tok)) s += 500;
      }
      
      // Intent keyword bonus
      for (const kw of intentKeywords) {
        if (lt.includes(kw)) s += 5000;
      }

      return s;
    };

    fast.sort((a, b) => quickScore(b) - quickScore(a));

    // Don't limit results - enable true endless scrolling
    setSearchResults(fast);
    setDisplayedCount(50);
    setIsOpen(true);
  }, [debouncedSearchTerm, indexedTools]);

  // REMOVED: Heavy stage eliminated for instant performance
  // The fast stage above already provides intelligent scoring

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
    setDisplayedCount(50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setDisplayedCount(50);
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

  // FIXED INFINITE SCROLL - works consistently for ALL searches
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Don't trigger if already loading
    if (isLoadingMore) return;
    
    // CRITICAL FIX: More generous threshold to trigger loading earlier
    const threshold = 200; // Increased for smoother experience
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    // Load more when near bottom AND more results exist
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Immediate, smooth loading without delay
      requestAnimationFrame(() => {
        // Load LARGER batches (50 items) for fewer interruptions
        const increment = Math.min(50, searchResults.length - displayedCount);
        setDisplayedCount(prev => {
          const newCount = prev + increment;
          // Ensure we never exceed total results
          return Math.min(newCount, searchResults.length);
        });
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
