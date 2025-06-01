
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { Tool } from "@/types/tools";
import { Link } from "react-router-dom";
import { getCurrentToolCount } from "@/utils/toolCounter";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  preventAutoNavigation?: boolean;
}

const SearchBar = ({ searchTerm, onSearchChange, preventAutoNavigation = false }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [displayedCount, setDisplayedCount] = useState(50); // Start with 50 results
  const toolStats = getCurrentToolCount();

  const handleSearchChange = (value: string) => {
    console.log("Tools search - handleSearchChange called with:", value);
    onSearchChange(value);
    
    if (value.trim()) {
      console.log("Tools search - searching tools with term:", value);
      const results = searchTools(allTools, value); // Get ALL results, no slice limit
      console.log("Tools search - search results:", results.length, "total results");
      setSearchResults(results);
      setDisplayedCount(50); // Reset display count
      setIsOpen(true);
      console.log("Tools search - isOpen set to true");
    } else {
      console.log("Tools search - clearing results");
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    onSearchChange("");
    setSearchResults([]);
    setDisplayedCount(50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onSearchChange("");
      setSearchResults([]);
      setDisplayedCount(50);
    }
  };

  const handleInputBlur = () => {
    // Delay closing to allow clicks on results
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Load more when user scrolls near the bottom (within 100px)
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      console.log(`🔄 SearchBar infinite scroll triggered - Loading more results... Current: ${displayedCount}, Total: ${searchResults.length}`);
      setDisplayedCount(prev => Math.min(prev + 30, searchResults.length));
    }
  };

  const displayedResults = searchResults.slice(0, displayedCount);

  console.log("Tools search - rendering, isOpen:", isOpen, "searchResults.length:", searchResults.length, "displayedCount:", displayedCount);

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
          onFocus={() => {
            if (searchTerm.trim() && searchResults.length > 0) {
              setIsOpen(true);
            }
          }}
          className="pl-10 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-300 shadow-lg"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
          {searchTerm ? `${searchResults.length} found` : `${toolStats.marketing} Tools`}
        </div>

        {/* Search Results Dropdown with Infinite Scroll */}
        {isOpen && searchResults.length > 0 && (
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
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ai-purple to-ai-blue flex items-center justify-center text-white text-lg flex-shrink-0">
                          {tool.emoji}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="text-gray-900 font-medium truncate">{tool.title}</div>
                          <div className="text-gray-500 text-sm truncate">{tool.category}</div>
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
