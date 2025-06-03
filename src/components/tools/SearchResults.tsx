
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

interface SearchResultsProps {
  searchResults: any[];
  displayedResults: any[];
  displayedCount: number;
  onResultClick: () => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

const SearchResults = memo(({
  searchResults,
  displayedResults,
  displayedCount,
  onResultClick,
  onScroll,
}: SearchResultsProps) => {
  const navigate = useNavigate();

  const handleToolClick = (toolIndex: number) => {
    onResultClick();
    navigate(`/tool/${toolIndex}`);
  };

  const handleDirectAccess = (tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      onResultClick();
    }
  };

  return (
    <Card className="absolute top-full left-0 right-0 mt-2 bg-gray-900/98 border border-cyan-500/30 shadow-2xl max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800 z-[9999]" onScroll={onScroll}>
      <CardContent className="p-3">
        <div className="text-sm text-cyan-400 px-3 py-2 border-b border-gray-700 sticky top-0 bg-gray-900/98 z-[10000]">
          {searchResults.length} Results - Showing {displayedCount}
          {displayedCount < searchResults.length && " - Scroll for more"}
        </div>
        {displayedResults.map((tool, index) => {
          const toolIndex = allTools.findIndex(t => t.title === tool.title);
          return (
            <TooltipProvider key={`search-${tool.title}-${index}`}>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <div 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer group transition-all duration-200"
                    onClick={() => handleToolClick(toolIndex)}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-sm flex-shrink-0`}>
                      {tool.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white text-sm leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                        {tool.title}
                      </h3>
                      {tool.category && (
                        <p className="text-xs text-gray-400 truncate">{tool.category}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                    
                    {tool.directUrl && (
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 text-xs px-2 py-1 flex-shrink-0"
                        onClick={(e) => handleDirectAccess(tool, e)}
                      >
                        🚀 Launch
                      </Button>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="right" 
                  className="max-w-sm p-3 bg-gray-800 text-white border-gray-600 shadow-xl z-[10001]"
                  sideOffset={10}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{tool.emoji}</span>
                      <span className="font-semibold text-cyan-400 text-sm">{tool.title}</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
        {displayedCount < searchResults.length && (
          <div className="text-center py-3 text-gray-400 text-sm">
            <div className="animate-pulse">Loading more...</div>
            <div className="mt-1">{searchResults.length - displayedCount} more tools available</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

SearchResults.displayName = "SearchResults";
export default SearchResults;
