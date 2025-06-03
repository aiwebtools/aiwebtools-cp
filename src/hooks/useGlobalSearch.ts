import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30); // Reduced
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // SUPER FAST search effect - optimized for smooth typing
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
      ).slice(0, 15);
      setSearchResults(results);
      setDisplayedCount(15);
      setIsOpen(true);
      return;
    }

    // OPTIMIZED 3-character search - avoid full searchTools
    if (trimmedTerm.length === 3) {
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerTerm = trimmedTerm.toLowerCase();
        return lowerTitle.startsWith(lowerTerm) || 
               lowerTitle.includes(lowerTerm) ||
               tool.category?.toLowerCase().includes(lowerTerm);
      }).slice(0, 25);
      setSearchResults(results);
      setDisplayedCount(25);
      setIsOpen(true);
      return;
    }

    // For 4+ characters, use search with performance limits
    const results = searchTools(allTools, trimmedTerm);
    setSearchResults(results.slice(0, 50)); // Reduced limit
    setDisplayedCount(30);
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

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 20 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 15, searchResults.length, 30)); // Smaller increments
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
