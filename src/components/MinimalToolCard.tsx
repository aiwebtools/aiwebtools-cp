import React, { memo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tool } from "@/types/tools";
import { Card, CardContent } from "@/components/ui/card";
import { generateToolSlug } from "@/utils/urlGenerator";
import { prefetchToolData } from "@/utils/toolPrefetcher";
import { isFreeTool } from "@/utils/freeToolDetection";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import AutoScaleTitle from "@/components/ui/auto-scale-title";

interface MinimalToolCardProps {
  tool: Tool;
  index?: number;
}

const MinimalToolCard = memo(({ tool, index = 0 }: MinimalToolCardProps) => {
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const isCustomGPT = isFreeTool(tool);
  const isAIWebToolsOriginal = isCustomGPT;

  const previewDescription = (() => {
    const description = tool.description?.trim() || "Powerful AI tool for enhanced productivity.";
    if (description.length <= 155) return description;
    const truncated = description.slice(0, 155);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 110 ? lastSpace : 155)}...`;
  })();
  
  const handleMouseEnter = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      prefetchToolData(tool.title);
    }, 100);
  }, [tool.title]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);
  
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    const slug = generateToolSlug(tool.title);
    navigate(`/${slug}`);
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-gray-800 bg-gray-900/50 hover:bg-gray-800/70 relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FavoriteButton tool={tool} size="sm" className="top-2 right-2 z-30" />
      
      {isAIWebToolsOriginal && (
        <div className="absolute top-0 left-0 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-br-lg rounded-tl-lg text-xs font-bold shadow-lg">
            FREE
          </div>
        </div>
      )}
      
      <CardContent className="p-4 pr-14 sm:pr-10 pt-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="text-2xl flex-shrink-0 pt-0.5">
            {tool.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 mb-2 uppercase tracking-wide break-words hyphens-auto"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 0 12px rgba(34, 211, 238, 0.4)',
                wordBreak: 'break-word'
              }}
            >
              <AutoScaleTitle title={tool.title} baseSize="sm" />
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4.25rem]">
              {previewDescription}
            </p>
            {tool.category && (
              <div className="mt-2.5">
                <span className="inline-block max-w-full px-2.5 py-1 text-[11px] bg-gray-800 text-gray-300 rounded break-words">
                  {tool.category}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

MinimalToolCard.displayName = "MinimalToolCard";

export default MinimalToolCard;