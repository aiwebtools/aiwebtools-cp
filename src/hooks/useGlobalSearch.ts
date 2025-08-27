
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchPerformanceCache } from "@/hooks/useSearchPerformanceCache";

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  // Performance optimizations
  const { getCachedSearch, setCachedSearch } = useSearchPerformanceCache();
  const toolStats = useMemo(() => getCurrentToolCount(), []);
  
  // Optimized debouncing - faster for better UX
  const debouncedSearchTerm = useDebounce(searchTerm, 150);

  // SUPER OPTIMIZED search effect with caching and performance improvements
  useEffect(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
      return;
    }

    // Check cache first for lightning-fast response
    const cachedResults = getCachedSearch(trimmedTerm);
    if (cachedResults) {
      setSearchResults(cachedResults);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // OPTIMIZED 2-character search with minimal computation
    if (trimmedTerm.length === 2) {
      const lowerTerm = trimmedTerm.toLowerCase();
      
      // Simplified prediction mapping for better performance
      const fastPredictions: Record<string, string[]> = {
        'ca': ['cannabis'], 'co': ['college', 'course'], 'le': ['learn'], 'vi': ['video'],
        'au': ['audio'], 'ch': ['chat'], 're': ['resume', 'research'], 'gr': ['graphic'],
        'tr': ['transcribe'], 'po': ['podcast'], 'dr': ['draft'], 'ho': ['home'],
        'ph': ['pharmaceutical'], 'jo': ['job'], 'bu': ['business'], 'in': ['insurance']
      };
      
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        if (lowerTitle.startsWith(lowerTerm) || lowerTitle.includes(lowerTerm)) return true;
        
        const predictions = fastPredictions[lowerTerm];
        if (predictions) {
          const searchText = `${lowerTitle} ${tool.description?.toLowerCase() || ""}`;
          for (const pred of predictions) {
            if (searchText.includes(pred)) return true;
          }
        }
        return false;
      }).sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        if (aTitle.startsWith(lowerTerm) !== bTitle.startsWith(lowerTerm)) {
          return aTitle.startsWith(lowerTerm) ? -1 : 1;
        }
        return aTitle.localeCompare(bTitle);
      });
      
      const endlessResults = [...results, ...allTools.filter(tool => 
        !results.some(result => result.title === tool.title)
      )];
      
      setCachedSearch(trimmedTerm, endlessResults);
      setSearchResults(endlessResults);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // OPTIMIZED 3+ character search
    const intelligentResults = searchTools(allTools, trimmedTerm);
    const remainingTools = allTools.filter(tool => 
      !intelligentResults.some(result => result.title === tool.title)
    );
    
    // Simplified similar tools for performance
    const endlessResults = [...intelligentResults, ...remainingTools];
    
    setCachedSearch(trimmedTerm, endlessResults);
    setSearchResults(endlessResults);
    setDisplayedCount(30);
    setIsOpen(true);
  }, [debouncedSearchTerm, getCachedSearch, setCachedSearch]);

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

  // OPTIMIZED scroll handler with throttling for smooth performance
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Performance throttling - prevent excessive computations
    if (isLoadingMore) return;
    
    const threshold = 150;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Optimized loading with requestAnimationFrame for smooth UX
      requestAnimationFrame(() => {
        const increment = Math.min(30, searchResults.length - displayedCount);
        setDisplayedCount(prev => prev + increment);
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
