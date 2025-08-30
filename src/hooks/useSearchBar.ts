
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools, removeDuplicateTools } from "@/utils/search/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { enhancedKeywordMatching, enhancedToolScoring } from "@/utils/search/enhancedKeywordMatching";
import { predictUserIntent, generateAutoComplete } from "@/utils/search/core/intelligentPrediction";
import { toolAbbreviations, fuzzyMatches, acronymMatches } from "@/utils/search/toolAbbreviations";
import { deduplicateSearchResults, quickDeduplicateSearchResults } from "@/utils/search/core/searchDeduplication";
import { useDebounce } from "@/hooks/useDebounce";
import { sortToolsAlphabetically, getAlphabeticalSortKey } from "@/utils/search/alphabeticalSorting";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(30);
  
  // Instant visual feedback with minimal delay - same as hero search
  const debouncedSearchTerm = useDebounce(searchTerm, 80);
  
  // Prefix-based priority scoring for ultra-short queries (generalized)
  const prefixPriorityScore = useCallback((title: string, term: string) => {
    const t = term.toLowerCase();
    const tl = title.toLowerCase();
    let score = 0;

    // 1) Generic prefix boosts
    if (tl.startsWith(t)) score += 20000;
    else {
      const words = tl.split(/[^a-z0-9]+/);
      if (words.some((w) => w.startsWith(t))) score += 12000;
      else if (tl.includes(t)) score += 3000;
    }

    // 2) Thematic boosts for popular intents
    if (t.startsWith("chat")) {
      if (tl.includes("chatgpt")) score += 15000;
      if (tl.includes("chat")) score += 8000;
      if (tl.includes("gpt")) score += 5000; // prioritize your GPTs as chat tools
    }

    // Common brand anchors by prefix (including previous College behavior)
    const anchorByPrefix: Record<string, string[]> = {
      co: ["college degree gpt", "college"],
      col: ["college degree gpt", "college"],
      coll: ["college degree gpt", "college"],
      colle: ["college degree gpt", "college"],
      colleg: ["college degree gpt", "college"],
      run: ["runway ml", "runway"],
      mid: ["midjourney"],
      cla: ["claude"],
      gem: ["gemini"],
      per: ["perplexity"],
      not: ["notion"],
      can: ["canva"],
      fig: ["figma"],
      pho: ["photoshop"],
      dee: ["deepseek"],
      chatb: ["chatbase", "chatbase chatbot builder"],
      chatba: ["chatbase", "chatbase chatbot builder"],
      chatbas: ["chatbase", "chatbase chatbot builder"],
      chatbase: ["chatbase", "chatbase chatbot builder"],
      lau: ["launch.today", "launch today"],
      de: ["devin"],
      dev: ["devin"],
      ba: ["base44", "base44 ai agent"],
      bas: ["base44", "base44 ai agent"],
      base: ["base44", "base44 ai agent"],
      base4: ["base44", "base44 ai agent"],
      base44: ["base44", "base44 ai agent"],
      ip: ["iphone app maker ai agent", "appchef"],
      iph: ["iphone app maker ai agent", "appchef"],
      iphone: ["iphone app maker ai agent", "appchef"],
      appc: ["appchef", "iphone app maker ai agent"],
      appch: ["appchef", "iphone app maker ai agent"],
      appchef: ["appchef", "iphone app maker ai agent"],
      cli: ["cline", "cline.bot"],
      clin: ["cline", "cline.bot"],
      cline: ["cline", "cline.bot"],
      usem: ["usemotion", "usemotion ai employees builder"],
      usemo: ["usemotion", "usemotion ai employees builder"],
      usemot: ["usemotion", "usemotion ai employees builder"],
      usemoti: ["usemotion", "usemotion ai employees builder"],
      usemotio: ["usemotion", "usemotion ai employees builder"],
      usemotion: ["usemotion", "usemotion ai employees builder"],
      motion: ["usemotion", "usemotion ai employees builder"],
      oi: ["drill baby drill ai suite for oil & gas"],
      oil: ["drill baby drill ai suite for oil & gas"],
      ga: ["drill baby drill ai suite for oil & gas"],
      gas: ["drill baby drill ai suite for oil & gas"],
      dri: ["drill baby drill ai suite for oil & gas"],
      drill: ["drill baby drill ai suite for oil & gas"]
    };
    const anchors = anchorByPrefix[t] || [];
    for (const a of anchors) {
      if (tl.includes(a)) score += 15000;
    }

    // 2.5) Vibe agents priority for 'vibe' queries
    if (t.includes("vibe")) {
      const vibeAgents = [
        "lovable.dev",
        "lovable",
        "launch.today",
        "launch today",
        "base44",
        "appchef",
        "iphone app maker ai agent",
        "cline",
        "cline.bot",
        "devin",
        "cursor",
        "windsurf",
        "emergent",
        "emergent agentic coding ai",
        "surf.new",
        "same.new",
        "bolt.new",
        "rork mobile application vibe coding agent",
        "openai codex",
        "agentgpt",
        "auto-gpt",
        "chatgpt operator"
      ];
      if (vibeAgents.some((a) => tl.includes(a))) score += 16000;
    }

    // 3) Abbreviation and fuzzy alias dictionaries (lightweight scan)
    try {
      const allAliasSets: string[][] = [
        ...Object.values(toolAbbreviations || {}),
        ...Object.values(fuzzyMatches || {}),
        ...Object.values(acronymMatches || {}),
      ];
      for (const aliases of allAliasSets) {
        const lowerAliases = aliases.map((x) => x.toLowerCase());
        const prefixHit = lowerAliases.some((alias) => alias.startsWith(t));
        if (prefixHit && lowerAliases.some((alias) => tl.includes(alias))) {
          score += 10000;
          break;
        }
      }
    } catch {
      // no-op safeguard
    }

    return score;
  }, []);
  // Ultra-fast search results - same logic as hero search for consistency
  const searchResults = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 1) {
      return [];
    }

    const lowerTerm = trimmedTerm.toLowerCase();
    
    // Ultra-fast exact title matching for instant feedback
    const quickMatches = allTools.filter(tool => 
      tool.title.toLowerCase().includes(lowerTerm)
    ).slice(0, 50);

    // Simple combined results for immediate display
    const allResults = [...quickMatches, ...allTools.filter(tool => 
      !quickMatches.some(quick => quick.title === tool.title)
    )];
    
    return allResults.slice(0, 100);
  }, [debouncedSearchTerm]);

  // Display results with performance limits for rendering
  const displayedResults = useMemo(() => 
    searchResults.slice(0, Math.min(displayedCount, 100)),
    [searchResults, displayedCount]
  );

  // User intent predictions for better UX
  const userIntentPredictions = useMemo(() => {
    if (searchTerm.trim().length >= 3) {
      return predictUserIntent(searchTerm.trim(), allTools);
    }
    return [];
  }, [searchTerm]);

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 1;

  // INSTANT search change handler with intelligent suggestions
  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 1);
    if (!trimmed) setDisplayedCount(30);
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    console.log('🔍 Search result clicked - closing dropdown and clearing search');
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(30);
  }, [onSearchChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      setIsOpen(false);
      const element = document.querySelector('[data-search-results]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [onSearchChange, searchTerm]);

  const handleInputBlur = useCallback((e: React.FocusEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('[data-search-dropdown]')) {
      setTimeout(() => setIsOpen(false), 150);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    if (searchTerm.trim().length >= 1 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [searchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // More responsive threshold for better endless scrolling
    const threshold = 80;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 25, searchResults.length));
    }
  }, [displayedCount, searchResults.length]);

  const toolStats = useMemo(() => getCurrentToolCount(), []);

  return {
    isOpen,
    displayedCount,
    toolStats,
    searchResults,
    displayedResults,
    userIntentPredictions,
    shouldShowResults,
    handleSearchChange,
    handleResultClick,
    handleKeyDown,
    handleInputBlur,
    handleInputFocus,
    handleScroll,
  };
};
