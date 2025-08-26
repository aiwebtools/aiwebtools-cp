import { useState, useEffect, useCallback } from 'react';
import { Tool } from '@/types/tools';

interface UseLazyToolsLoaderProps {
  initialLoadCount?: number;
  batchSize?: number;
}

interface ToolsLoaderState {
  tools: Tool[];
  isLoading: boolean;
  hasMore: boolean;
  loadedCount: number;
  totalCount: number;
}

export const useLazyToolsLoader = ({ 
  initialLoadCount = 25, 
  batchSize = 25 
}: UseLazyToolsLoaderProps = {}) => {
  const [state, setState] = useState<ToolsLoaderState>({
    tools: [],
    isLoading: true,
    hasMore: true,
    loadedCount: 0,
    totalCount: 0
  });

  // Lazy load tool collections in chunks
  const loadToolBatch = useCallback(async (startIndex: number = 0, count: number = batchSize) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Dynamic imports for better code splitting
      const toolModules = await Promise.all([
        // Load essential tools first
        import('@/data/tools/aiWebToolsGPTs').then(m => m.aiWebToolsGPTs || []),
        import('@/data/tools/aiAssistants').then(m => m.aiAssistants || []),
        import('@/data/tools/aiChatPlatforms').then(m => m.aiChatPlatforms || []),
        
        // Then load popular categories
        ...(startIndex === 0 ? [
          import('@/data/tools/videoTools').then(m => m.videoTools || []),
          import('@/data/tools/aiArtTools').then(m => m.aiArtTools || []),
          import('@/data/tools/businessTools').then(m => m.businessTools || []),
        ] : [])
      ]);

      const newTools = toolModules.flat();
      const batch = newTools.slice(startIndex, startIndex + count);
      
      setState(prev => ({
        ...prev,
        tools: startIndex === 0 ? batch : [...prev.tools, ...batch],
        loadedCount: startIndex === 0 ? batch.length : prev.loadedCount + batch.length,
        totalCount: newTools.length,
        hasMore: (startIndex + count) < newTools.length,
        isLoading: false
      }));

      return batch;
    } catch (error) {
      console.error('Error loading tools batch:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return [];
    }
  }, [batchSize]);

  // Load more tools progressively
  const loadMoreTools = useCallback(() => {
    if (state.isLoading || !state.hasMore) return;
    loadToolBatch(state.loadedCount, batchSize);
  }, [state.isLoading, state.hasMore, state.loadedCount, loadToolBatch, batchSize]);

  // Initial load
  useEffect(() => {
    // Delay initial load to allow page to render first
    const timer = setTimeout(() => {
      loadToolBatch(0, initialLoadCount);
    }, 100);

    return () => clearTimeout(timer);
  }, [loadToolBatch, initialLoadCount]);

  return {
    tools: state.tools,
    isLoading: state.isLoading,
    hasMore: state.hasMore,
    loadedCount: state.loadedCount,
    totalCount: state.totalCount,
    loadMoreTools
  };
};