
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

const GlobalSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Get accurate tool counts on component mount
  useEffect(() => {
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = searchTools(allTools, searchTerm);
      setSearchResults(results);
      setDisplayedCount(30);
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(30);
    }
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

  const handleToolClick = (toolIndex: number) => {
    setIsOpen(false);
    setSearchTerm("");
    navigate(`/tool/${toolIndex}`);
  };

  const handleDirectAccess = (tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked in global search for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
    setDisplayedCount(30);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 50 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 20, searchResults.length));
    }
  };

  const displayedResults = searchResults.slice(0, displayedCount);

  return (
    <TooltipProvider>
      <div ref={searchRef} className="relative w-full max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={`Search ${toolStats.total}+ AI tools...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>

        {isOpen && searchResults.length > 0 && (
          <Card className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-cyan-500/30 shadow-2xl z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800" onScroll={handleScroll}>
            <CardContent className="p-2">
              <div className="text-xs text-cyan-400 px-3 py-2 border-b border-gray-700 sticky top-0 bg-gray-900/95">
                {searchResults.length} Results - Showing {displayedCount}
                {displayedCount < searchResults.length && " - Scroll for more"}
              </div>
              {displayedResults.map((tool, index) => {
                const toolIndex = allTools.findIndex(t => t.title === tool.title);
                return (
                  <Tooltip key={`global-search-${tool.title}-${index}`} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer group transition-all duration-200"
                        onClick={() => handleToolClick(toolIndex)}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-sm flex-shrink-0`}>
                          {tool.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-white text-sm truncate group-hover:text-cyan-400 transition-colors">
                            {tool.title}
                          </h3>
                          {tool.category && (
                            <p className="text-xs text-gray-400 truncate">{tool.category}</p>
                          )}
                        </div>
                        
                        {tool.directUrl && (
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 text-xs px-2 py-1 h-auto flex-shrink-0"
                            onClick={(e) => handleDirectAccess(tool, e)}
                          >
                            🚀
                          </Button>
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="right" 
                      className="max-w-sm p-3 bg-gray-800 text-white border-gray-600 shadow-xl z-[60]"
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
                                className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
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
                <div className="text-center py-3 text-gray-400 text-xs">
                  <div className="animate-pulse">Loading more...</div>
                  <div className="mt-1">{searchResults.length - displayedCount} more tools available</div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
};

export default GlobalSearchBar;
