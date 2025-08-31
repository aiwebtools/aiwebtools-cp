
import { useState, useRef } from "react";
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
        className="absolute top-full left-0 right-0 mt-1 bg-black border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-[999] max-h-[12vh] min-h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800"
        onScroll={onScroll}
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          touchAction: 'pan-y',
          transform: 'translateZ(0)',
          willChange: 'scroll-position',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
      <CardContent className="p-0" style={{ transform: 'translateZ(0)' }}>
        <div className="p-1" style={{ transform: 'translateZ(0)' }}>
          {displayedResults.map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            return (
              <Tooltip key={`global-search-${tool.title}-${index}`} delayDuration={300}>
                <TooltipTrigger asChild>
                  <div 
                    className="flex items-center space-x-2 p-1.5 rounded-md hover:bg-cyan-500/10 cursor-pointer group transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                    onClick={() => onToolClick(toolIndex)}
                  >
                    <div className={`w-4 h-4 rounded-md bg-gradient-to-r ${tool.color} flex items-center justify-center text-xs flex-shrink-0`}>
                      {tool.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-cyan-100 text-xs leading-tight group-hover:text-cyan-300 transition-colors truncate">
                        {tool.title}
                      </h3>
                    </div>
                    
                    {tool.directUrl && (
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-green-400/50 bg-green-400/10 text-green-300 hover:bg-green-400/20 hover:border-green-400 text-xs px-1 py-0.5 h-5 w-6 flex-shrink-0"
                        onClick={(e) => onDirectAccess(tool, e)}
                      >
                        🚀
                      </Button>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="right" 
                  className="max-w-xs p-2 bg-gray-900/95 text-cyan-100 border-cyan-500/30 shadow-xl z-[60]"
                  sideOffset={5}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{tool.emoji}</span>
                      <span className="font-medium text-cyan-300 text-xs">{tool.title}</span>
                    </div>
                    <p className="text-xs text-cyan-200/80 leading-relaxed">
                      {tool.description?.substring(0, 80)}...
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
          {(hasMoreToLoad || isLoadingMore) && (
            <div className="text-center py-1 text-cyan-400/70 text-xs">
              {isLoadingMore ? (
                <div className="animate-pulse">🔄 Loading...</div>
              ) : (
                <div className="animate-pulse">📜 Scroll for more...</div>
              )}
            </div>
          )}
          {!hasMoreToLoad && !isLoadingMore && searchResults.length > 20 && (
            <div className="text-center py-1 text-cyan-300/80 text-xs">
              <div>🎉 All {searchResults.length} tools shown!</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>

    {/* Arrow Scroller Buttons - Hidden on mobile, only show on desktop */}
    {searchResults.length > 3 && (
      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex-col space-y-0.5 z-[60] hidden md:flex">
        <Button
          onClick={scrollToTop}
          size="sm"
          variant="outline"
          className="w-5 h-5 p-0 bg-black/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
        >
          <ChevronUp className="w-3 h-3" />
        </Button>
        <Button
          onClick={scrollToBottom}
          size="sm"
          variant="outline"
          className="w-5 h-5 p-0 bg-black/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
        >
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>
    )}
  </div>
  );
};

export default GlobalSearchResults;
