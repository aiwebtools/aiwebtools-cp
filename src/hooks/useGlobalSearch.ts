
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

// ==================== INTELLIGENCE MAPS (precomputed, instant lookup) ====================

// 1. COMMON MISSPELLINGS → correct spelling
const TYPO_MAP: Record<string, string> = {
  // Major platforms
  "chatgtp": "chatgpt", "chatgot": "chatgpt", "chtgpt": "chatgpt", "chatgbt": "chatgpt",
  "cluade": "claude", "clade": "claude", "claued": "claude",
  "midjourny": "midjourney", "midjorney": "midjourney", "midjouney": "midjourney", "midjoureny": "midjourney",
  "perplexty": "perplexity", "perplexiy": "perplexity", "perpelxity": "perplexity",
  "runwya": "runway", "runwa": "runway", "ruwnay": "runway", "rnuway": "runway",
  "stabledifusion": "stable diffusion", "stablediffusion": "stable diffusion",
  "dallE": "dalle", "dall-e": "dalle", "dali": "dalle",
  "elevnlabs": "elevenlabs", "elevenlab": "elevenlabs", "11labs": "elevenlabs",
  "synthsia": "synthesia", "syntehsia": "synthesia",
  "heyegn": "heygen", "heygne": "heygen",
  "luam": "luma", "lumaa": "luma",
  "pikaa": "pika", "piak": "pika",
  "soar": "sora", "soraa": "sora",
  "gemni": "gemini", "gemnii": "gemini", "gimini": "gemini",
  "leonadro": "leonardo", "lenoardo": "leonardo",
  "notoin": "notion", "ntoion": "notion",
  "canav": "canva", "canvaa": "canva",
  "grammrly": "grammarly", "gramamrly": "grammarly",
  "jaspr": "jasper", "jaspre": "jasper",
  // Custom GPTs
  "survivlist": "survivalist", "survivlaist": "survivalist",
  "crinimologist": "criminologist", "criminoligist": "criminologist",
  "vetrinarian": "veterinarian", "veternarian": "veterinarian",
  "apotehcary": "apothecary", "apothecray": "apothecary",
  "alchemsit": "alchemist", "alchemits": "alchemist",
  "interpetis": "interpretis", "interpretsi": "interpretis",
  "oraclum": "oraculum", "oracluum": "oraculum",
  "resurection": "resurrection", "ressurection": "resurrection",
  "legistlation": "legislation", "legilsation": "legislation",
  "probabilty": "probability", "probablity": "probability",
  "phenomeon": "phenomenon", "phenomenn": "phenomenon",
  "archeologist": "archaeologist", "archeaologist": "archaeologist",
  "genone": "genome", "genoe": "genome",
  "manichaesim": "manicheism", "manichaeism": "manicheism",
};

// 2. ABBREVIATIONS → full names
const ABBREV_MAP: Record<string, string[]> = {
  "mj": ["midjourney"],
  "sd": ["stable diffusion"],
  "gpt": ["chatgpt", "gpt"],
  "gpt4": ["chatgpt", "gpt-4"],
  "gpt4o": ["chatgpt", "gpt-4o"],
  "llm": ["chatgpt", "claude", "gemini", "llama"],
  "ai": ["artificial intelligence", "ai"],
  "ml": ["machine learning", "runway ml"],
  "cv": ["computer vision", "resume"],
  "nlp": ["natural language"],
  "tts": ["text to speech", "elevenlabs"],
  "stt": ["speech to text", "whisper"],
  "t2v": ["text to video", "sora", "runway", "pika"],
  "t2i": ["text to image", "midjourney", "dalle", "stable diffusion"],
  "vid": ["video"],
  "img": ["image"],
  "aud": ["audio", "music"],
  "doc": ["document", "documentation"],
  "ppt": ["powerpoint", "presentation"],
  "pdf": ["document", "pdf"],
};

// 3. SYNONYMS → related terms
const SYNONYM_MAP: Record<string, string[]> = {
  "picture": ["image", "photo", "visual"],
  "photo": ["image", "picture", "photography"],
  "film": ["video", "movie", "cinema"],
  "movie": ["film", "video", "cinema"],
  "song": ["music", "audio", "melody"],
  "voice": ["audio", "speech", "tts"],
  "write": ["writing", "writer", "content", "text"],
  "code": ["coding", "programming", "developer"],
  "learn": ["education", "course", "training", "skill"],
  "money": ["finance", "trading", "investment", "budget"],
  "health": ["medical", "wellness", "doctor", "fitness"],
  "law": ["legal", "lawyer", "attorney", "contract"],
  "spirit": ["spiritual", "soul", "meditation", "philosophy"],
  "god": ["spiritual", "divine", "religious", "deity"],
  "chat": ["chatbot", "conversation", "assistant"],
  "bot": ["chatbot", "assistant", "agent"],
  "make": ["create", "generate", "build"],
  "create": ["make", "generate", "build", "design"],
  "edit": ["editing", "editor", "modify"],
  "fix": ["repair", "correct", "improve"],
  "find": ["search", "discover", "locate", "finder"],
  "exercise": ["fitness", "workout", "running", "gym"],
  "run": ["runway", "running", "execute"],
  "game": ["gaming", "video game", "game design"],
};

// 4. MAJOR PLATFORM ALIASES
const PLATFORM_ALIASES: Record<string, string[]> = {
  "openai": ["chatgpt", "dalle", "sora", "whisper", "gpt"],
  "anthropic": ["claude"],
  "google": ["gemini", "bard", "vertex"],
  "meta": ["llama", "meta ai"],
  "microsoft": ["copilot", "bing", "azure"],
  "stability": ["stable diffusion", "stability ai"],
  "adobe": ["firefly", "photoshop", "premiere"],
};

// 5. INTENT KEYWORDS → tool types
const INTENT_MAP: Record<string, string[]> = {
  "want to write": ["book writer", "content", "writing"],
  "want to make video": ["video", "sora", "runway", "pika"],
  "want to make image": ["image", "midjourney", "dalle", "stable diffusion"],
  "want to learn": ["learn", "course", "education", "skill"],
  "want to code": ["coding", "developer", "programming"],
  "want to trade": ["trader", "trading", "finance"],
  "need help": ["assistant", "gpt", "helper"],
  "create music": ["music", "audio", "suno", "udio"],
};

// Helper: fast Levenshtein for short strings (max 2 edits)
const quickLevenshtein = (a: string, b: string): number => {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  if (a.length > 10 || b.length > 10) return 99; // skip long strings
  
  const m = a.length, n = b.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1] 
        ? dp[i-1][j-1] 
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
};

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
    return allTools.map((tool) => {
      const t = tool.title?.toLowerCase() || "";
      const tNoSpace = t.replace(/[\s\-_]+/g, "");
      const words = t.split(/[\s\-_\u0026,.:()]+/).filter(w => w.length > 0);
      return {
        tool,
        t,
        tNoSpace,
        words,
        d: tool.description?.toLowerCase() || "",
        c: tool.category?.toLowerCase() || "",
        tags: tool.tags?.map(tag => tag.toLowerCase()) || [],
      };
    });
  }, []);

  // HYPER-INTELLIGENT instant search
  const quickSearch = useCallback((term: string) => {
    let qRaw = term.toLowerCase().trim();
    if (!qRaw) return [];

    // === STEP 1: Normalize & expand query ===
    
    // Fix common typos instantly
    let q = TYPO_MAP[qRaw] || qRaw;
    
    // Expand abbreviations
    const abbrevExpansions = ABBREV_MAP[q] || [];
    
    // Get synonyms
    const synonyms = SYNONYM_MAP[q] || [];
    
    // Normalize compound words
    q = q
      .replace(/\s+/g, " ")
      .replace(/\brun way\b/g, "runway")
      .replace(/\bchat gpt\b/g, "chatgpt")
      .replace(/\bmid journey\b/g, "midjourney")
      .replace(/\bstable diffusion\b/g, "stablediffusion")
      .replace(/\bdall e\b/g, "dalle")
      .replace(/\beleven labs\b/g, "elevenlabs")
      .trim();

    const qNoSpace = q.replace(/\s+/g, "");

    // === STEP 2: Score all tools ===
    type Scored = { tool: any; score: number };
    const scored: Scored[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      let score = 0;
      const isAIWebToolsGPT = it.tool.directUrl?.includes('lovable.app') || it.tool.directUrl?.includes('chatgpt.com/g/');

      // TIER 1: EXACT MATCH (highest priority)
      if (it.t === q || it.tNoSpace === qNoSpace) {
        score = 50000;
        if (isAIWebToolsGPT) score += 5000; // Boost our GPTs for exact matches
      }
      // TIER 2: Title starts with query (e.g., "le" → "LEARN ANY SKILL GPT")
      else if (it.t.startsWith(q) || it.tNoSpace.startsWith(qNoSpace)) {
        score = 30000;
        // MAJOR BOOST for AIWebTools GPTs that directly start with query
        if (isAIWebToolsGPT) score += 8000;
        // Boost shorter/canonical names
        if (it.t.startsWith(`${q} `) || it.t.startsWith(`${q}-`)) score += 2000;
        
        // IMPORTANT: Prefer tools where query matches MORE of the first word
        // "le" matching "learn" (2/5 = 40%) beats "legislator" (2/10 = 20%)
        const firstWord = it.words[0] || it.t;
        const matchRatio = q.length / firstWord.length;
        score += Math.floor(matchRatio * 3000); // Up to 3000 bonus for near-complete first word
        
        // Secondary: shorter first words are usually more common/canonical
        score += Math.max(0, 400 - firstWord.length * 20);
      }
      // TIER 3: Any word in title starts with query
      else {
        for (const word of it.words) {
          if (word.startsWith(q)) {
            score = 20000;
            if (isAIWebToolsGPT) score += 4000; // Boost our GPTs
            score += Math.max(0, 500 - word.length);
            break;
          }
        }
      }

      // TIER 4: Title contains query
      if (!score && (it.t.includes(q) || it.tNoSpace.includes(qNoSpace))) {
        score = 12000;
        if (isAIWebToolsGPT) score += 2000;
      }

      // TIER 5: Abbreviation expansion matches
      if (!score && abbrevExpansions.length > 0) {
        for (const exp of abbrevExpansions) {
          if (it.t.includes(exp) || it.tNoSpace.includes(exp.replace(/\s/g, ""))) {
            score = 10000;
            if (isAIWebToolsGPT) score += 1500;
            break;
          }
        }
      }

      // TIER 6: Synonym matches
      if (!score && synonyms.length > 0) {
        for (const syn of synonyms) {
          if (it.t.includes(syn)) {
            score = 8000;
            if (isAIWebToolsGPT) score += 1200;
            break;
          }
        }
      }

      // TIER 7: Tag/category matches (2+ chars)
      if (!score && q.length >= 2) {
        if (it.c.startsWith(q) || it.c.includes(q)) {
          score = 5000;
        } else if (it.tags.some(tag => tag.startsWith(q))) {
          score = 4500;
        } else if (it.tags.some(tag => tag.includes(q))) {
          score = 4000;
        }
      }

      // TIER 8: Fuzzy match for short queries (typo tolerance)
      if (!score && q.length >= 3 && q.length <= 8) {
        // Check against first word of title
        const firstWord = it.words[0];
        if (firstWord && quickLevenshtein(q, firstWord) <= 1) {
          score = 6000;
        }
        // Check against common platform names in title
        for (const word of it.words) {
          if (word.length >= 3 && word.length <= 12 && quickLevenshtein(q, word) <= 1) {
            score = 5500;
            break;
          }
        }
      }

      // === BOOSTS for major platforms ===
      if (score > 0) {
        // Boost exact platform matches
        const majorPlatforms = ["runway", "chatgpt", "claude", "midjourney", "dalle", "sora", "pika", "luma", "gemini", "perplexity", "elevenlabs", "synthesia", "heygen"];
        for (const platform of majorPlatforms) {
          if (q.startsWith(platform.substring(0, Math.min(q.length, 4))) && it.t.includes(platform)) {
            score += 3000;
            break;
          }
        }
      }

      if (score > 0) {
        scored.push({ tool: it.tool, score });
      }
    }

    // === STEP 3: Sort by score, then alphabetically ===
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const at = a.tool.title?.toLowerCase() || "";
      const bt = b.tool.title?.toLowerCase() || "";
      return at.localeCompare(bt);
    });

    return scored.map(s => s.tool).slice(0, 120);
  }, [quickIndex]);

  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  const quickRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fullRef = useRef<number | null>(null);

  // INSTANT typing - defer ALL search work so input never blocks
  const setSearchTerm = useCallback((value: string) => {
    // 1) Update input state IMMEDIATELY - zero blocking
    setSearchTermInternal(value);

    // 2) Cancel any pending search operations
    if (quickRef.current) clearTimeout(quickRef.current);
    if (fullRef.current && "cancelIdleCallback" in window) {
      // @ts-ignore
      window.cancelIdleCallback(fullRef.current);
      fullRef.current = null;
    }

    const t = value.trim();
    if (!t) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    setIsOpen(true);
    const currentId = ++searchIdRef.current;

    // 3) Run quick search after a TINY delay (lets input paint first)
    quickRef.current = setTimeout(() => {
      if (currentId !== searchIdRef.current) return;
      const fast = quickSearch(t);
      setSearchResults(fast);
      setDisplayedCount(50);

      // 4) Full intelligent ranking for 3+ chars (runs when browser is idle)
      if (t.length >= 3) {
        const runFull = () => {
          if (currentId !== searchIdRef.current) return;
          const results = searchTools(allTools, t);
          setSearchResults(results);
          setDisplayedCount(50);
        };

        if ("requestIdleCallback" in window) {
          // @ts-ignore
          fullRef.current = window.requestIdleCallback(runFull, { timeout: 150 });
        } else {
          setTimeout(runFull, 50);
        }
      }
    }, 8); // 8ms = 1 frame, lets the keystroke paint first
  }, [quickSearch]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (quickRef.current) {
        clearTimeout(quickRef.current);
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

  // Generate prediction based on top result
  const prediction = useMemo(() => {
    if (!searchTerm.trim() || searchResults.length === 0) return "";
    
    const topResult = searchResults[0];
    if (!topResult?.title) return "";
    
    const topTitle = topResult.title.toLowerCase();
    const query = searchTerm.toLowerCase().trim();
    
    // Only predict if the top result starts with what user typed
    if (topTitle.startsWith(query)) {
      // Return the first word or two for cleaner predictions
      const words = topResult.title.split(/\s+/);
      if (words.length >= 2) {
        // Return first 2-3 words for multi-word predictions
        return words.slice(0, Math.min(3, words.length)).join(" ");
      }
      return topResult.title;
    }
    
    return "";
  }, [searchTerm, searchResults]);

  // Accept prediction (Tab key)
  const acceptPrediction = useCallback(() => {
    if (prediction) {
      setSearchTerm(prediction);
    }
  }, [prediction, setSearchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    isLoadingMore,
    toolStats,
    searchRef,
    prediction,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
    acceptPrediction,
  };
};
