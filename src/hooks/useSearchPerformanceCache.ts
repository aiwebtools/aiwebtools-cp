import { useMemo, useRef } from 'react';
import { Tool } from '@/types/tools';

// Lightning-fast search cache for performance optimization
export const useSearchPerformanceCache = () => {
  // Cache for search results - prevents repeated expensive computations
  const searchCacheRef = useRef<Map<string, Tool[]>>(new Map());
  const predictionCacheRef = useRef<Map<string, string[]>>(new Map());
  
  // Clear cache periodically to prevent memory leaks
  const clearCache = useMemo(() => {
    let lastClear = Date.now();
    return () => {
      const now = Date.now();
      if (now - lastClear > 30000) { // Clear every 30 seconds
        searchCacheRef.current.clear();
        predictionCacheRef.current.clear();
        lastClear = now;
      }
    };
  }, []);

  const getCachedSearch = (searchTerm: string): Tool[] | null => {
    clearCache();
    return searchCacheRef.current.get(searchTerm.toLowerCase().trim()) || null;
  };

  const setCachedSearch = (searchTerm: string, results: Tool[]) => {
    const key = searchTerm.toLowerCase().trim();
    if (key.length >= 2 && results.length > 0) {
      searchCacheRef.current.set(key, results);
      // Limit cache size to prevent memory issues
      if (searchCacheRef.current.size > 100) {
        const firstKey = searchCacheRef.current.keys().next().value;
        if (firstKey) {
          searchCacheRef.current.delete(firstKey);
        }
      }
    }
  };

  const getCachedPredictions = (prefix: string): string[] | null => {
    return predictionCacheRef.current.get(prefix) || null;
  };

  const setCachedPredictions = (prefix: string, predictions: string[]) => {
    predictionCacheRef.current.set(prefix, predictions);
    // Limit prediction cache size
    if (predictionCacheRef.current.size > 50) {
      const firstKey = predictionCacheRef.current.keys().next().value;
      if (firstKey) {
        predictionCacheRef.current.delete(firstKey);
      }
    }
  };

  return {
    getCachedSearch,
    setCachedSearch,
    getCachedPredictions,
    setCachedPredictions,
    clearCache
  };
};