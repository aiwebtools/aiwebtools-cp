
import { Link, useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { memo } from "react";

interface SearchResultsProps {
  searchResults: Tool[];
  displayedResults: Tool[];
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

  const handleToolClick = (tool: Tool, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const toolIndex = allTools.findIndex(t => t.title === tool.title);
    if (toolIndex !== -1) {
      console.log(`🔗 Navigating to tool: ${tool.title} at index ${toolIndex}`);
      onResultClick(); // Close the search dropdown
      navigate(`/tool/${toolIndex}`);
    }
  };

  return (
    <div 
      className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[60] max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" 
      onScroll={onScroll}
      style={{
        // Optimize scrolling performance
        willChange: 'scroll-position',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="px-3 py-3 border-b border-gray-100 sticky top-0 bg-white text-red-500 z-10" style={{ fontSize: '10px' }}>
        <div className="leading-tight mb-1">
          Search Results ({searchResults.length} total) - Showing {displayedResults.length}
        </div>
        {displayedCount < searchResults.length && (
          <div className="text-xs opacity-80 mb-2">Scroll for more...</div>
        )}
      </div>
      <div className="p-2 pt-4">
        {displayedResults.map((tool, index) => {
          const toolIndex = allTools.findIndex(t => t.title === tool.title);
          return (
            <Tooltip key={`${tool.title}-${index}`} delayDuration={200}>
              <TooltipTrigger asChild>
                <div
                  onClick={(e) => handleToolClick(tool, e)}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-50 last:border-b-0 rounded-lg mx-1 cursor-pointer"
                  style={{
                    // Optimize rendering performance
                    willChange: 'auto',
                    transform: 'translateZ(0)'
                  }}
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
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="right" 
                className="max-w-sm p-3 bg-gray-900 text-white border-gray-700 shadow-xl z-[70]"
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
  );
});

SearchResults.displayName = "SearchResults";
export default SearchResults;
