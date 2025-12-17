
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
  
  // Learning/Education intent
  if (/want\s+to\s+learn|learn\s*(about|how)?|education|study|course|lesson|tutor|teach|training/i.test(q)) {
    return { intent: 'learning', keywords: ['learn', 'course', 'education', 'lesson', 'tutor', 'training', 'study', 'skill', 'degree', 'school', 'teach'] };
  }
  
  // Research intent
  if (/research|analyze|data|study|investigate|explore/i.test(q)) {
    return { intent: 'research', keywords: ['research', 'analysis', 'data', 'study', 'explore', 'investigate', 'report'] };
  }
  
  // Health/Medical intent
  if (/health|medical|doctor|wellness|fitness|diet|mental/i.test(q)) {
    return { intent: 'health', keywords: ['health', 'medical', 'doctor', 'wellness', 'fitness', 'mental', 'therapy'] };
  }
  
  // Business intent
  if (/business|startup|entrepreneur|marketing|sales|money/i.test(q)) {
    return { intent: 'business', keywords: ['business', 'startup', 'marketing', 'sales', 'plan', 'entrepreneur'] };
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
  const [searchTerm, setSearchTermInternal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // Pre-index tools for HYPER-INTELLIGENT matching - ALL 2000+ tools fully searchable
  const indexedTools = useMemo(() => getIndexedTools(), []);
  
  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  const searchTimeoutRef = useRef<number | null>(null);
  
  // PERF: progressive narrowing so each extra letter searches a smaller candidate set
  const lastQueryRef = useRef<string>("");
  const lastCandidatesRef = useRef<typeof indexedTools | null>(null);
  
  // INSTANT input - no debounce on display, only on computation
  const setSearchTerm = useCallback((value: string) => {
    // Update input immediately for instant feedback
    setSearchTermInternal(value);
    
    // Cancel previous search computation
    if (searchTimeoutRef.current) {
      cancelAnimationFrame(searchTimeoutRef.current);
    }
    
    const t = value.trim();
    if (!t || t.length < 2) {
      lastQueryRef.current = "";
      lastCandidatesRef.current = null;
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }
    
    // Defer search computation to next frame for instant typing
    searchTimeoutRef.current = requestAnimationFrame(() => {
      const currentId = ++searchIdRef.current;
      
      const q = t.toLowerCase();
      const { intent, keywords: intentKeywords } = extractIntent(t);

      // Always extract keywords (removes filler words like "to", "want", etc.)
      // This is critical to keep intent-based search precise.
      const keywords = extractKeywords(t);

      // For fallback token matching, avoid super-common short tokens that match everything.
      const tokens = (keywords.length > 0 ? keywords : q.split(/\s+/))
        .map(w => w.trim())
        .filter(w => w.length >= 3)
        .slice(0, 8);

      // Choose smallest possible candidate set
      const baseCandidates = (lastCandidatesRef.current && q.startsWith(lastQueryRef.current))
        ? lastCandidatesRef.current
        : indexedTools;

      // First pass: cheap candidate narrowing (uses tokens WITHOUT stopwords)
      const narrowedIndexed = tokens.length
        ? baseCandidates.filter(ix => tokens.some(tok => ix.all.includes(tok) || ix.normalized.includes(tok)))
        : baseCandidates;

      // Update progressive cache
      lastQueryRef.current = q;
      lastCandidatesRef.current = narrowedIndexed;

      const candidateTools = narrowedIndexed.map(ix => ix.tool);

      // Second pass: run the full hyper-intelligent search pipeline on the smaller candidate set
      // (intent matching, fuzzy matching, category aggregation, etc.)
      const results = searchTools(candidateTools, t);

      // Only update if this is still the current search
      if (currentId === searchIdRef.current) {
        setSearchResults(results);
        setDisplayedCount(50);
        setIsOpen(true);
      }
    });
  }, [indexedTools]);
  
  // Search logic moved to setSearchTerm callback for instant typing

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // NOTE: Do not lock body scrolling here.
  // Locking body overflow caused cases where the entire site became non-scrollable.
  // Scroll containment is handled inside the results dropdown itself.

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
