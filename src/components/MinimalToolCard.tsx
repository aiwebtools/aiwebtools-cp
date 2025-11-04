import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Tool } from "@/types/tools";
import { Card, CardContent } from "@/components/ui/card";
import { generateToolSlug } from "@/utils/urlGenerator";
import FavoriteButton from "@/components/favorites/FavoriteButton";

interface MinimalToolCardProps {
  tool: Tool;
  index?: number;
}

const MinimalToolCard = memo(({ tool, index = 0 }: MinimalToolCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    // Don't trigger if clicking on buttons or interactive elements
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    const slug = generateToolSlug(tool.title);
    navigate(`/tool/${slug}`);
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-gray-800 bg-gray-900/50 hover:bg-gray-800/70 relative"
      onClick={handleClick}
    >
      {/* Favorite Button */}
      <FavoriteButton tool={tool} size="sm" className="top-2 right-2 z-30" />
      
      <CardContent className="p-4 pr-10">
        <div className="flex items-start space-x-3">
          <div className="text-2xl flex-shrink-0">
            {tool.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2 mb-1">
              {tool.title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2">
              {tool.description}
            </p>
            {tool.category && (
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
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