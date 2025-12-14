
import React, { memo, useMemo, useCallback, useRef } from "react";
import { Tool } from "@/types/tools";
import { Card } from "@/components/ui/card";
import { useMobile } from "@/hooks/useMobile";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { prefetchToolData } from "@/utils/toolPrefetcher";
import { isFreeTool } from "@/utils/freeToolDetection";
import ToolCardHeader from "./ToolCardHeader";
import ToolCardContent from "./ToolCardContent";
import FavoriteButton from "@/components/favorites/FavoriteButton";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

// Memoized ToolCard for performance with large lists
const ToolCard = memo(({ tool, index = 0 }: ToolCardProps) => {
  const { isMobile, isTouch } = useMobile();
  const { enableReducedMotion, getOptimizedStyles } = usePerformanceOptimization();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Determine if this is a FREE custom GPT using centralized detection
  const isCustomGPT = useMemo(() => isFreeTool(tool), [tool]);
  
  const isAIWebToolsOriginal = isCustomGPT;
  
  // Prefetch tool detail page on hover (100ms delay to avoid unnecessary prefetches)
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
  
  // Handle card click - trigger time warp effect for external tools
  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger if clicking on buttons or interactive elements
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
      return;
    }
    
    // If tool has external URL, trigger time warp effect
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Tool card clicked - triggering time warp for:', tool.title);
      createTimePortalEffect(tool.directUrl, tool.title);
    }
  };
  
  // Dynamic sizing based on featured status and mobile optimization
  const isFeatured = index < 12; // First 12 tools are considered featured
  const cardSize = isMobile 
    ? (isFeatured ? "w-12 h-12" : "w-10 h-10") // Smaller on mobile
    : (isFeatured ? "w-16 h-16" : "w-12 h-12");
  const titleSize = isMobile 
    ? (isFeatured ? "text-base" : "text-sm") // Smaller text on mobile
    : (isFeatured ? "text-lg sm:text-xl" : "text-base sm:text-lg");
  const buttonSize = isFeatured ? "default" : "sm";
  const imageHeight = isMobile 
    ? (isFeatured ? "160px" : "140px") // Smaller images on mobile
    : (isFeatured ? "200px" : "160px");
  
  // Enhanced rating calculation
  const baseRating = tool.rating || 4.2;
  const boostFactor = isAIWebToolsOriginal ? 0.5 : 0.2;
  const boostedRating = Math.min(5.0, baseRating + boostFactor);
  const defaultVotes = tool.totalVotes || (isAIWebToolsOriginal ? 847 : 324);

  // Description function
  const getDescription = () => {
    if (!tool.description) return "Powerful AI tool for enhanced productivity.";
    
    const maxLength = isFeatured ? 180 : 140;
    if (tool.description.length <= maxLength) return tool.description;
    
    const truncated = tool.description.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > maxLength * 0.8 
      ? truncated.substring(0, lastSpace) + "..."
      : truncated + "...";
  };

  // Memoized optimized styles
  const optimizedStyles = useMemo(() => {
    const styles = getOptimizedStyles();
    return {
      ...styles,
      // Optimize rendering with contain property
      contain: 'layout style paint' as const,
      // Avoid rendering offscreen content until needed
      contentVisibility: 'auto' as any,
      containIntrinsicSize: '300px 400px' as any,
      // Improve scroll performance 
      willChange: isMobile ? 'auto' : 'transform',
      // Hardware acceleration for mobile
      transform: isMobile ? 'translateZ(0)' : undefined,
      backfaceVisibility: isMobile ? ('hidden' as const) : undefined,
    };
  }, [getOptimizedStyles, isMobile]);

  return (
    <Card 
      className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-4 lg:p-6 h-full flex flex-col focus-within:border-cyan-400 focus-within:shadow-cyan-400/20 ${
        enableReducedMotion 
          ? 'transition-none' 
          : 'transition-all duration-300'
      } ${
        !isTouch 
          ? 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 cursor-pointer' 
          : 'active:bg-gray-800/70'
      } ${
        isMobile ? 'touch-manipulation' : ''
      }`}
      style={optimizedStyles}
      tabIndex={0}
      role="article"
      aria-label={`AI Tool: ${tool.title}`}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ToolCardHeader 
        tool={tool}
        toolIndex={index}
        isFeatured={isFeatured}
        cardSize={cardSize}
        titleSize={titleSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        boostedRating={boostedRating}
        defaultVotes={defaultVotes}
      />
      
      {/* Favorite Button */}
      <FavoriteButton tool={tool} size="sm" className="top-1.5 right-1.5 z-30" />
      
      <ToolCardContent 
        tool={tool}
        toolIndex={index}
        isFeatured={isFeatured}
        buttonSize={buttonSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        imageHeight={imageHeight}
        getDescription={getDescription}
      />
    </Card>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo
  return (
    prevProps.tool.title === nextProps.tool.title &&
    prevProps.tool.directUrl === nextProps.tool.directUrl &&
    prevProps.tool.category === nextProps.tool.category &&
    prevProps.index === nextProps.index
  );
});

ToolCard.displayName = "ToolCard";

export default ToolCard;
