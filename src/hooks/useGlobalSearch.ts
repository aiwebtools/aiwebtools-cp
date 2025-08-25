
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // ENHANCED search effect with endless scroll capability
  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      return;
    }

    // LIGHTNING FAST 2-character search
    if (trimmedTerm.length === 2) {
      const results = allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      ).sort((a, b) => a.title.localeCompare(b.title));
      setSearchResults(results);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // INTELLIGENT 3-character search with better matching
    if (trimmedTerm.length === 3) {
      const lowerTerm = trimmedTerm.toLowerCase();
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerDescription = tool.description?.toLowerCase() || "";
        const lowerCategory = tool.category?.toLowerCase() || "";
        const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
        
        // Priority scoring for better results ordering
        return lowerTitle.startsWith(lowerTerm) || 
               lowerTitle.includes(lowerTerm) ||
               lowerDescription.includes(lowerTerm) ||
               lowerCategory.includes(lowerTerm) ||
               lowerTags.includes(lowerTerm) ||
               // Special word boundary matching for partial words like "god" in "gods"
               lowerTitle.match(new RegExp(`\\b${lowerTerm}`, 'i')) ||
               lowerDescription.match(new RegExp(`\\b${lowerTerm}`, 'i'));
      }).sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aStartsWith = aTitle.startsWith(lowerTerm) ? 0 : 1;
        const bStartsWith = bTitle.startsWith(lowerTerm) ? 0 : 1;
        // Prioritize tools that start with the term, then alphabetical
        if (aStartsWith !== bStartsWith) return aStartsWith - bStartsWith;
        return aTitle.localeCompare(bTitle);
      });
      
      // Create endless results for scrolling
      const remainingTools = allTools.filter(tool => 
        !results.some(result => result.title === tool.title)
      );
      const endlessResults = [...results, ...remainingTools];
      
      console.log(`🔍 3-char search for "${trimmedTerm}": ${results.length} matches + ${remainingTools.length} remaining = ${endlessResults.length} total`);
      
      setSearchResults(endlessResults);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // For 4+ characters, use intelligent search with endless scroll capability
    const intelligentResults = searchTools(allTools, trimmedTerm);
    
    // Create endless list: search results + all remaining tools for infinite scroll
    const remainingTools = allTools.filter(tool => 
      !intelligentResults.some(result => result.title === tool.title)
    );
    
    // Get contextually similar tools to bridge the gap
    const similarTools = getContextAwareSimilarTools(
      intelligentResults, 
      trimmedTerm, 
      "", 
      100
    ).filter(tool => 
      !intelligentResults.some(result => result.title === tool.title) &&
      !remainingTools.some(remaining => remaining.title === tool.title)
    );
    
    // Combine: intelligent results + similar tools + all remaining tools for endless scroll
    const endlessResults = [
      ...intelligentResults,
      ...similarTools,
      ...remainingTools
    ];
    
    console.log(`🔍 Enhanced search for "${trimmedTerm}": ${intelligentResults.length} direct results + ${similarTools.length} similar + ${remainingTools.length} remaining = ${endlessResults.length} total endless scroll`);
    
    setSearchResults(endlessResults);
    setDisplayedCount(30); // Start with 30, then load more
    setIsOpen(true);
  }, [searchTerm]);

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

  // FIXED scroll handler with proper endless loading
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // More aggressive loading threshold for smooth endless scroll
    const threshold = 100;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length && !isLoadingMore) {
      setIsLoadingMore(true);
      
      // Simulate loading delay and then load more tools
      setTimeout(() => {
        const increment = Math.min(20, searchResults.length - displayedCount);
        console.log(`📜 Loading ${increment} more tools (${displayedCount + increment}/${searchResults.length})`);
        setDisplayedCount(prev => prev + increment);
        setIsLoadingMore(false);
      }, 200); // Small delay to show loading state
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
