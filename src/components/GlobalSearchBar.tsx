
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setDisplayedCount(30);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      // Navigate to the top matching tool result
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={`Search ${toolStats.marketing} AI tools...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-10 bg-black/80 border-cyan-500/50 text-cyan-100 placeholder-cyan-400/70 focus:border-cyan-400 focus:ring-cyan-400/30 rounded-lg shadow-lg shadow-cyan-500/10"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>

        {isOpen && searchResults.length > 0 && (
          <Card className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800" onScroll={handleScroll}>
            <CardContent className="p-2">
              <div className="text-xs text-cyan-400 px-3 py-2 border-b border-cyan-500/20 sticky top-0 bg-black/95">
                {searchResults.length} Results - Showing {displayedCount}
                {displayedCount < searchResults.length && " - Scroll for more"}
                {searchResults.length > 0 && (
                  <div className="text-cyan-300 mt-1">Press Enter to open top result</div>
                )}
              </div>
              {displayedResults.map((tool, index) => {
                const toolIndex = allTools.findIndex(t => t.title === tool.title);
                return (
                  <Tooltip key={`global-search-${tool.title}-${index}`} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 cursor-pointer group transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                        onClick={() => handleToolClick(toolIndex)}
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-xs sm:text-sm flex-shrink-0`}>
                          {tool.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-cyan-100 text-xs sm:text-sm leading-tight mb-1 group-hover:text-cyan-300 transition-colors">
                            {tool.title}
                          </h3>
                          {tool.category && (
                            <p className="text-xs text-cyan-400/70 truncate">{tool.category}</p>
                          )}
                        </div>
                        
                        {tool.directUrl && (
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-green-400/50 bg-green-400/10 text-green-300 hover:bg-green-400/20 hover:border-green-400 text-xs px-2 py-1 h-auto flex-shrink-0"
                            onClick={(e) => handleDirectAccess(tool, e)}
                          >
                            🚀
                          </Button>
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="right" 
                      className="max-w-sm p-3 bg-gray-900/95 text-cyan-100 border-cyan-500/30 shadow-xl z-[60]"
                      sideOffset={10}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{tool.emoji}</span>
                          <span className="font-semibold text-cyan-300">{tool.title}</span>
                        </div>
                        <p className="text-sm text-cyan-200/80 leading-relaxed">
                          {tool.description}
                        </p>
                        {tool.tags && tool.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {tool.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-cyan-500/20 text-xs rounded-full text-cyan-300 border border-cyan-500/30"
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
                <div className="text-center py-3 text-cyan-400/70 text-xs">
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
