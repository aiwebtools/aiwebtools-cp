
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Detect mobile for optimized handling
  const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
  
  // Memoize tool stats
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // INSTANT search - NO debouncing at all for mobile
  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      // Ultra-aggressive mobile optimization
      const mobileLimit = isMobile ? 3 : 6;
      const desktopLimit = isMobile ? 5 : 8;
      const fullLimit = isMobile ? 8 : 15;
      
      // Instant single character matching
      if (trimmedTerm.length === 1) {
        const simpleResults = allTools.filter(tool => 
          tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
        ).slice(0, mobileLimit);
        setSearchResults(simpleResults);
        setDisplayedCount(mobileLimit);
        setIsOpen(true);
        return;
      }
      
      // Instant two character matching
      if (trimmedTerm.length === 2) {
        const fastResults = allTools.filter(tool => 
          tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
          tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
        ).slice(0, desktopLimit);
        setSearchResults(fastResults);
        setDisplayedCount(desktopLimit);
        setIsOpen(true);
        return;
      }
      
      // Full search with mobile-friendly limits
      const results = searchTools(allTools, trimmedTerm);
      setSearchResults(results.slice(0, fullLimit));
      setDisplayedCount(isMobile ? 6 : 10);
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(15);
    }
  }, [searchTerm, isMobile]); // Direct dependency on searchTerm for instant response

  // Optimized click outside handler
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
    setDisplayedCount(15);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setDisplayedCount(15);
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
    
    if (scrollHeight - scrollTop <= clientHeight + 30 && displayedCount < searchResults.length) {
      const increment = isMobile ? 2 : 4; // Smaller increments on mobile
      setDisplayedCount(prev => Math.min(prev + increment, searchResults.length));
    }
  }, [displayedCount, searchResults.length, isMobile]);

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
