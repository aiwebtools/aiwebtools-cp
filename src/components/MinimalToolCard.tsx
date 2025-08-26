import React, { memo } from "react";
import { Tool } from "@/types/tools";
import { Card, CardContent } from "@/components/ui/card";

interface MinimalToolCardProps {
  tool: Tool;
  index?: number;
}

const MinimalToolCard = memo(({ tool, index = 0 }: MinimalToolCardProps) => {
  const handleClick = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-gray-800 bg-gray-900/50 hover:bg-gray-800/70"
      onClick={handleClick}
    >
      <CardContent className="p-4">
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