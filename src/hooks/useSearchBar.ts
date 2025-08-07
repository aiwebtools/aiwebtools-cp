
import { useState, useCallback, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools, removeDuplicateTools } from "@/utils/search/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { enhancedKeywordMatching, enhancedToolScoring } from "@/utils/search/enhancedKeywordMatching";
import { predictUserIntent, generateAutoComplete } from "@/utils/search/core/intelligentPrediction";

interface UseSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const useSearchBar = ({ searchTerm, onSearchChange }: UseSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(30);
  
  // Prefix-based priority scoring for ultra-short queries (e.g., "co", "coll")
  const prefixPriorityScore = useCallback((title: string, term: string) => {
    const t = term.toLowerCase();
    const tl = title.toLowerCase();

    // Strongly prioritize "College Degree GPT" for common beginnings
    const collegePrefixes = ["co", "col", "coll", "colle", "colleg"];
    if (collegePrefixes.includes(t)) {
      if (tl.includes("college degree gpt")) return 30000;
      if (tl.includes("college")) return 20000;
    }

    return 0;
  }, []);
  
  // INTELLIGENT search results with comprehensive matching
  const searchResults = useMemo(() => {
    const trimmedTerm = searchTerm.trim();
    
    // No search for empty terms
    if (!trimmedTerm) return [];
    
    const lowerTerm = trimmedTerm.toLowerCase();
    
    // INSTANT 2-character search with intelligent predictions
    if (trimmedTerm.length === 2) {
      const predictions = generateAutoComplete(trimmedTerm, allTools);
      const titleMatches = allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(lowerTerm) ||
        predictions.some(pred => tool.title.toLowerCase().includes(pred.toLowerCase()))
      );
      // Score and sort so top-intent tools (e.g., College Degree GPT) appear first
      return titleMatches
        .map(tool => ({
          tool,
          score:
            (tool.title.toLowerCase().startsWith(lowerTerm) ? 10000 : 0) +
            prefixPriorityScore(tool.title, trimmedTerm)
        }))
        .sort((a, b) => b.score - a.score)
        .map(r => r.tool)
        .slice(0, 50);
    }
    
    // SMART 3-character search with enhanced matching
    if (trimmedTerm.length === 3) {
      const quickResults = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerDesc = tool.description.toLowerCase();
        const lowerCat = tool.category?.toLowerCase() || '';
        const lowerTags = (tool.tags || []).join(' ').toLowerCase();
        
        return lowerTitle.startsWith(lowerTerm) || 
               lowerTitle.includes(lowerTerm) ||
               lowerCat.includes(lowerTerm) ||
               lowerDesc.includes(lowerTerm) ||
               lowerTags.includes(lowerTerm) ||
               enhancedKeywordMatching(tool, trimmedTerm);
      });
      
      // Score and sort for better relevance
      return quickResults
        .map(tool => ({
          tool,
          score:
            enhancedToolScoring(tool, trimmedTerm) +
            (tool.title.toLowerCase().startsWith(lowerTerm) ? 10000 : 0) +
            prefixPriorityScore(tool.title, trimmedTerm)
        }))
        .sort((a, b) => b.score - a.score)
        .map(result => result.tool)
        .slice(0, 75);
    }
    
    // COMPREHENSIVE 4+ character search with full intelligence
    if (trimmedTerm.length >= 4) {
      // Use the enhanced search function for comprehensive results
      const results = searchTools(allTools, trimmedTerm);
      return removeDuplicateTools(results).slice(0, 100);
    }
    
    return [];
  }, [searchTerm]);

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

  const shouldShowResults = searchResults.length > 0 && searchTerm.trim().length >= 2;

  // INSTANT search change handler with intelligent suggestions
  const handleSearchChange = useCallback((value: string) => {
    onSearchChange(value);
    const trimmed = value.trim();
    setIsOpen(trimmed.length >= 2);
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
    if (searchTerm.trim().length >= 2 && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [searchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 30 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 20, searchResults.length));
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
