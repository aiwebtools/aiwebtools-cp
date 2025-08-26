
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

    // SUPER INTELLIGENT 2-character search with predictive matching
    if (trimmedTerm.length === 2) {
      const lowerTerm = trimmedTerm.toLowerCase();
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerDescription = tool.description?.toLowerCase() || "";
        const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
        
        // Direct starts with match (highest priority)
        if (lowerTitle.startsWith(lowerTerm)) return true;
        
        // Predictive matching for common prefixes
        const predictions: Record<string, string[]> = {
          'sc': ['scribe', 'script', 'screen', 'screenplay'],
          'tr': ['transcribe', 'transcription', 'transcript', 'travel', 'trading', 'trader'],
          'po': ['podcast', 'policy', 'political', 'poll'],
          'dr': ['draft', 'draftsman', 'doctor', 'dream'],
          'co': ['college', 'course', 'content', 'contract', 'coloring'],
          'le': ['legal', 'learn', 'legislation', 'legislator'],
          'bl': ['blog', 'blockchain', 'blueprint'],
          'ar': ['article', 'art', 'artificial', 'architecture'],
          'gr': ['graphic', 'grant', 'grammar'],
          'go': ['god', 'gods', 'government', 'goal'],
          'sp': ['spiritual', 'speech', 'special', 'space'],
          'ta': ['talk', 'tax', 'tattoo', 'task'],
          'ho': ['home', 'health', 'hospital', 'house'],
          'ph': ['pharmaceutical', 'pharmacy', 'phone', 'photo'],
          're': ['resume', 'research', 'real', 'religion'],
          'jo': ['job', 'journal', 'journey'],
          'ca': ['cannabis', 'career', 'card', 'calculator'],
          'in': ['insurance', 'investment', 'interview', 'invoice']
        };
        
        if (predictions[lowerTerm]) {
          for (const prediction of predictions[lowerTerm]) {
            if (lowerTitle.includes(prediction) || 
                lowerDescription.includes(prediction) ||
                lowerTags.includes(prediction)) {
              return true;
            }
          }
        }
        
        // Fallback: broader matching
        return lowerTitle.includes(lowerTerm) || 
               lowerDescription.includes(lowerTerm) ||
               lowerTags.includes(lowerTerm);
      }).sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aStartsWith = aTitle.startsWith(lowerTerm) ? 0 : 1;
        const bStartsWith = bTitle.startsWith(lowerTerm) ? 0 : 1;
        // Prioritize tools that start with the term
        if (aStartsWith !== bStartsWith) return aStartsWith - bStartsWith;
        return aTitle.localeCompare(bTitle);
      });
      
      // Create endless results for scrolling
      const remainingTools = allTools.filter(tool => 
        !results.some(result => result.title === tool.title)
      );
      const endlessResults = [...results, ...remainingTools];
      
      console.log(`🔍 2-char predictive search for "${trimmedTerm}": ${results.length} matches + ${remainingTools.length} remaining = ${endlessResults.length} total`);
      
      setSearchResults(endlessResults);
      setDisplayedCount(30);
      setIsOpen(true);
      return;
    }

    // SUPER INTELLIGENT 3-character search with enhanced predictive matching
    if (trimmedTerm.length === 3) {
      const lowerTerm = trimmedTerm.toLowerCase();
      const results = allTools.filter(tool => {
        const lowerTitle = tool.title.toLowerCase();
        const lowerDescription = tool.description?.toLowerCase() || "";
        const lowerCategory = tool.category?.toLowerCase() || "";
        const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
        
        // Enhanced predictive matching for 3-character prefixes
        const predictions: Record<string, string[]> = {
          'scr': ['scribe', 'script', 'screenplay', 'transcribe', 'transcription', 'scriptwriter'],
          'tra': ['transcribe', 'transcription', 'travel', 'trading', 'trader', 'training'],
          'pod': ['podcast', 'podiatrist'],
          'dra': ['draft', 'draftsman', 'drama', 'drawing'],
          'col': ['college', 'coloring', 'color', 'collage'],
          'leg': ['legal', 'legislation', 'legislator', 'legacy'],
          'blo': ['blog', 'blockchain', 'blood'],
          'art': ['article', 'artificial', 'artist', 'artwork'],
          'gra': ['graphic', 'grant', 'grammar', 'graph'],
          'god': ['gods', 'goddess', 'godlike'],
          'spi': ['spiritual', 'spine', 'spirit'],
          'tal': ['talk', 'talent', 'tale'],
          'hom': ['home', 'homeschool'],
          'pha': ['pharmaceutical', 'pharmacy', 'phantom'],
          'res': ['resume', 'research', 'restaurant', 'results'],
          'bus': ['business', 'budget'],
          'can': ['cannabis', 'cancer', 'candidate'],
          'ins': ['insurance', 'investment', 'instruction'],
          'gam': ['game', 'gambling'],
          'vid': ['video'],
          'mus': ['music', 'museum', 'muscle']
        };
        
        // Direct matching (highest priority)
        if (lowerTitle.startsWith(lowerTerm) || 
            lowerTitle.includes(lowerTerm) ||
            lowerDescription.includes(lowerTerm) ||
            lowerCategory.includes(lowerTerm) ||
            lowerTags.includes(lowerTerm)) {
          return true;
        }
        
        // Predictive matching for 3-char prefixes
        if (predictions[lowerTerm]) {
          for (const prediction of predictions[lowerTerm]) {
            if (lowerTitle.includes(prediction) || 
                lowerDescription.includes(prediction) ||
                lowerTags.includes(prediction)) {
              console.log(`🎯 3-char prediction "${prediction}" matched tool: ${tool.title}`);
              return true;
            }
          }
        }
        
        // Enhanced word boundary matching for partial words like "god" in "gods"
        return lowerTitle.match(new RegExp(`\\b${lowerTerm}`, 'i')) ||
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
      
      console.log(`🔍 3-char predictive search for "${trimmedTerm}": ${results.length} matches + ${remainingTools.length} remaining = ${endlessResults.length} total`);
      
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
    console.log(`🔍 First 5 search results:`, intelligentResults.slice(0, 5).map(t => t.title));
    
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

  // FIXED scroll handler with proper endless loading and performance optimization
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Performance optimization - throttle scroll events
    if (isLoadingMore) return;
    
    // More responsive loading threshold for smooth endless scroll
    const threshold = 100;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    console.log(`📜 Scroll check: ${scrollTop + clientHeight} >= ${scrollHeight - threshold}? ${nearBottom}, Displayed: ${displayedCount}/${searchResults.length}`);
    
    if (nearBottom && displayedCount < searchResults.length) {
      setIsLoadingMore(true);
      
      // Immediate loading with shorter delay for better UX
      setTimeout(() => {
        const increment = Math.min(25, searchResults.length - displayedCount); // Load more items per batch
        console.log(`📜 Loading ${increment} more tools (${displayedCount + increment}/${searchResults.length})`);
        setDisplayedCount(prev => prev + increment);
        setIsLoadingMore(false);
      }, 100); // Reduced delay for snappier response
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
