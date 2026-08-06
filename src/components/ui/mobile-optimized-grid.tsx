import React, { memo, useMemo, useCallback, useState } from 'react';
import { Tool } from '@/types/tools';
import { useMobile } from '@/hooks/useMobile';
import { Skeleton } from './skeleton';
import ToolThumb from '@/components/tools/ToolThumb';

interface MobileOptimizedGridProps {
  tools: Tool[];
  onToolClick?: (tool: Tool) => void;
  loading?: boolean;
}

const ToolCell = memo(({ tool, onToolClick }: { tool: Tool; onToolClick?: (tool: Tool) => void }) => {
  return (
    <div className="p-2">
      <div 
        className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        onClick={() => onToolClick?.(tool)}
        style={{ 
          contain: 'layout style paint',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <ToolThumb tool={tool} className="w-10 h-10" emojiClassName="text-2xl" />
          <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2">
            {tool.title}
          </h3>
        </div>
        <p className="text-gray-300 text-xs line-clamp-3 leading-relaxed">
          {tool.description}
        </p>
        {tool.rating && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-gray-300 text-xs">{tool.rating}</span>
          </div>
        )}
      </div>
    </div>
  );
});

ToolCell.displayName = 'ToolCell';

export const MobileOptimizedGrid = memo(({ 
  tools, 
  onToolClick, 
  loading = false 
}: MobileOptimizedGridProps) => {
  const { isMobile, isTablet } = useMobile();

  const gridConfig = useMemo(() => {
    const itemsPerRow = isMobile ? 1 : isTablet ? 2 : 3;
    return { itemsPerRow };
  }, [isMobile, isTablet]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </div>
    );
  }

  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔍</div>
        <p className="text-gray-300">No tools found</p>
      </div>
    );
  }

  return (
    <div 
      className="w-full"
      style={{ contain: 'size layout style' }}
    >
      <div className={`grid gap-4 p-4 ${
        isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
      }`}>
        {tools.map((tool, index) => (
          <ToolCell key={`${tool.title}-${index}`} tool={tool} onToolClick={onToolClick} />
        ))}
      </div>
    </div>
  );
});

MobileOptimizedGrid.displayName = 'MobileOptimizedGrid';