
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronUp, ChevronDown } from "lucide-react";
import { allTools } from "@/data/toolsData";

interface GlobalSearchResultsProps {
  searchResults: any[];
  displayedCount: number;
  isLoadingMore: boolean;
  onToolClick: (toolIndex: number) => void;
  onDirectAccess: (tool: any, e: React.MouseEvent) => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

const GlobalSearchResults = ({
  searchResults,
  displayedCount,
  isLoadingMore,
  onToolClick,
  onDirectAccess,
  onScroll,
}: GlobalSearchResultsProps) => {
  const displayedResults = searchResults.slice(0, displayedCount);
  const hasMoreToLoad = displayedCount < searchResults.length;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep scroll at top when new search results load
  useEffect(() => {
    if (scrollRef.current && displayedResults.length > 0) {
      scrollRef.current.scrollTop = 0;
    }
  }, [searchResults]);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <Card 
        ref={scrollRef}
        data-scroll-container
        className="absolute top-full left-0 right-0 mt-2 bg-black border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-[999] max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800" 
        onScroll={onScroll}
      >
      <CardContent className="p-0" style={{ transform: 'translateZ(0)' }}>
        <div className="p-2 pt-4" style={{ transform: 'translateZ(0)' }}>
          {displayedResults.map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            
            const toolItem = (
              <div 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 cursor-pointer group transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                onClick={() => onToolClick(toolIndex)}
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
                    onClick={(e) => onDirectAccess(tool, e)}
                  >
                    🚀
                  </Button>
                )}
              </div>
            );

            return (
              <div key={`global-search-${tool.title}-${index}`}>
                {/* Show tooltip only on desktop (md and above) */}
                <div className="hidden md:block">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      {toolItem}
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
                </div>
                
                {/* Show plain item on mobile (below md) */}
                <div className="block md:hidden">
                  {toolItem}
                </div>
              </div>
            );
          })}
          {(hasMoreToLoad || isLoadingMore) && (
            <div className="text-center py-3 text-cyan-400/70 text-xs">
              {isLoadingMore ? (
                <div className="animate-pulse">🔄 Loading more amazing AI tools...</div>
              ) : (
                <div className="animate-pulse">📜 Scroll down to load more tools...</div>
              )}
              {hasMoreToLoad && !isLoadingMore && (
                <div className="mt-1">{searchResults.length - displayedCount} more tools in our endless collection!</div>
              )}
            </div>
          )}
          {!hasMoreToLoad && !isLoadingMore && searchResults.length > 50 && (
            <div className="text-center py-4 text-cyan-300/80 text-xs">
              <div className="text-lg mb-1">🎉</div>
              <div>You've explored all {searchResults.length} AI tools!</div>
              <div className="text-xs opacity-70 mt-1">Try a new search to discover more</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>

    {/* Arrow Scroller Buttons - Hidden on mobile, only show on desktop */}
    {searchResults.length > 5 && (
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex-col space-y-1 z-[60] hidden md:flex">
        <Button
          onClick={scrollToTop}
          size="sm"
          variant="outline"
          className="w-8 h-8 p-0 bg-black/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
        <Button
          onClick={scrollToBottom}
          size="sm"
          variant="outline"
          className="w-8 h-8 p-0 bg-black/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
        >
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    )}
  </div>
  );
};

export default GlobalSearchResults;
