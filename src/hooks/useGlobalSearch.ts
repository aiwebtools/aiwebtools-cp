
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(50); // Reduced initial load
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // LIGHTNING FAST search effect - optimized for speed
  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    // FAST simple matching for 2 characters
    if (trimmedTerm.length === 2) {
      const results = allTools.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      ).slice(0, 20);
      setSearchResults(results);
      setDisplayedCount(20);
      setIsOpen(true);
      return;
    }

    // For 3+ characters, use search with performance limits
    const results = searchTools(allTools, trimmedTerm);
    setSearchResults(results.slice(0, 100)); // Hard limit for performance
    setDisplayedCount(50);
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

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 20 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 25, searchResults.length, 50)); // Smaller increments, cap at 50
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
