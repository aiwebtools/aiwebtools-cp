
import { useState, useCallback, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { Tool } from "@/types/tools";
import { Link } from "react-router-dom";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  preventAutoNavigation?: boolean;
}

const SearchBar = ({ searchTerm, onSearchChange, preventAutoNavigation = false }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(50);
  
  // Debounce search term to prevent excessive search operations
  const debouncedSearchTerm = useDebounce(searchTerm, 150); // Reduced from default to make it more responsive
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Memoize search results to prevent recalculation on every render
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return [];
    
    console.log("🔍 SearchBar - Performing search for:", debouncedSearchTerm);
    const results = searchTools(allTools, debouncedSearchTerm);
    console.log("🔍 SearchBar - Search results count:", results.length);
    return results;
  }, [debouncedSearchTerm]);

  // Update open state and displayed count when search results change
  const shouldShowResults = searchResults.length > 0 && debouncedSearchTerm.trim();

  const handleSearchChange = useCallback((value: string) => {
    console.log("🔍 SearchBar - handleSearchChange called with:", value);
    onSearchChange(value);
    
    if (value.trim()) {
      setIsOpen(true);
      setDisplayedCount(50);
    } else {
      setIsOpen(false);
      setDisplayedCount(50);
    }
  }, [onSearchChange]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onSearchChange("");
    setDisplayedCount(50);
  }, [onSearchChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
      setDisplayedCount(50);
    }
  }, [onSearchChange]);

  const handleInputBlur = useCallback(() => {
    setTimeout(() => setIsOpen(false), 200);
  }, []);

  const handleInputFocus = useCallback(() => {
    if (debouncedSearchTerm.trim() && searchResults.length > 0) {
      setIsOpen(true);
    }
  }, [debouncedSearchTerm, searchResults.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      console.log(`🔄 SearchBar infinite scroll triggered - Loading more results... Current: ${displayedCount}, Total: ${searchResults.length}`);
      setDisplayedCount(prev => Math.min(prev + 30, searchResults.length));
    }
  }, [displayedCount, searchResults.length]);

  // Memoize displayed results to prevent recalculation
  const displayedResults = useMemo(() => 
    searchResults.slice(0, displayedCount), 
    [searchResults, displayedCount]
  );

  return (
    <TooltipProvider>
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={`Search ${toolStats.marketing} AI tools... Try: 'canva', 'notion', 'social media', 'video editing', 'whatsapp', 'spotify', 'github', 'figma'`}
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          className="pl-10 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-300 shadow-lg"
        />

        {isOpen && shouldShowResults && (
          <div 
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" 
            onScroll={handleScroll}
          >
            <div className="p-2">
              <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100 sticky top-0 bg-white">
                Search Results ({searchResults.length} total) - Showing {displayedResults.length}
                {displayedCount < searchResults.length && (
                  <span className="text-cyan-600 ml-2">Scroll for more...</span>
                )}
              </div>
              {displayedResults.map((tool, index) => {
                const toolIndex = allTools.findIndex(t => t.title === tool.title);
                return (
                  <Tooltip key={`${tool.title}-${index}`} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link
                        to={`/tool/${toolIndex}`}
                        onClick={handleResultClick}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-b-0 rounded-lg mx-1"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-ai-purple to-ai-blue flex items-center justify-center text-white text-sm sm:text-lg flex-shrink-0">
                          {tool.emoji}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="text-gray-900 font-medium text-sm sm:text-base leading-tight mb-1">
                            {tool.title}
                          </div>
                          <div className="text-gray-500 text-xs sm:text-sm truncate">{tool.category}</div>
                        </div>
                        <div className="text-xs text-gray-400 flex-shrink-0">
                          ⭐ {tool.rating || '4.5'}
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="right" 
                      className="max-w-sm p-3 bg-gray-900 text-white border-gray-700 shadow-xl z-[60]"
                      sideOffset={10}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{tool.emoji}</span>
                          <span className="font-semibold text-cyan-400">{tool.title}</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {tool.description}
                        </p>
                        {tool.tags && tool.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {tool.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
              {displayedCount < searchResults.length && (
                <div className="text-center py-4 text-gray-500 text-sm">
                  <div className="animate-pulse">Loading more tools...</div>
                  <div className="text-xs mt-1">{searchResults.length - displayedCount} more available</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default SearchBar;
