import React, { memo, useCallback } from "react";
import { Tool } from "@/types/tools";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

interface PerformanceOptimizedCardProps {
  tool: Tool;
  index: number;
}

// Ultra-lightweight card component optimized for performance
const PerformanceOptimizedCard = memo(({ tool, index }: PerformanceOptimizedCardProps) => {
  const handleDirectAccess = useCallback((e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      createTimePortalEffect(tool.directUrl);
    }
  }, [tool.directUrl]);

  const IconComponent = tool.icon;

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-gray-800/70 hover:to-gray-700/50 backdrop-blur-sm overflow-hidden h-full"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '300px 200px' }}
    >
      <CardContent className="p-4 h-full flex flex-col">
        {/* Header with icon and rating */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${tool.color} bg-opacity-20 backdrop-blur-sm`}>
              <IconComponent className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-lg">{tool.emoji}</span>
              {tool.rating && (
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-300">{tool.rating}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-200">
          {tool.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-3 flex-1 mb-4">
          {tool.description}
        </p>

        {/* Bottom section */}
        <div className="space-y-3 mt-auto">
          {/* Category badge */}
          {tool.category && (
            <Badge 
              variant="secondary" 
              className="text-xs bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
            >
              {tool.category}
            </Badge>
          )}

          {/* Action button */}
          {tool.directUrl && (
            <Button
              onClick={handleDirectAccess}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
              size="sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Access Tool
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

PerformanceOptimizedCard.displayName = "PerformanceOptimizedCard";

export default PerformanceOptimizedCard;