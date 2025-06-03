
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
      );
      setSearchResults(results);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // OPTIMIZED 3-character search
    if (trimmedTerm.length === 3) {
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerTerm = trimmedTerm.toLowerCase();
        return lowerTitle.startsWith(lowerTerm) || 
               lowerTitle.includes(lowerTerm) ||
               tool.category?.toLowerCase().includes(lowerTerm);
      });
      setSearchResults(results);
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

  // ENHANCED scroll handler with proper endless loading
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // More aggressive loading threshold for smooth endless scroll
    const threshold = 50;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length) {
      const increment = Math.min(20, searchResults.length - displayedCount);
      console.log(`📜 Loading ${increment} more tools (${displayedCount + increment}/${searchResults.length})`);
      setDisplayedCount(prev => prev + increment);
    }
  }, [displayedCount, searchResults.length]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    toolStats,
    searchRef,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
  };
};
