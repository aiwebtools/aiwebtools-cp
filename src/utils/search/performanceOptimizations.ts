import { Tool } from "@/types/tools";

// Fast title matching cache
const titleMatchCache = new Map<string, boolean>();

// Optimized title matching with caching
export const fastTitleMatch = (title: string, searchTerm: string): boolean => {
  const cacheKey = `${title.toLowerCase()}|${searchTerm.toLowerCase()}`;
  
  if (titleMatchCache.has(cacheKey)) {
    return titleMatchCache.get(cacheKey)!;
  }
  
  const result = title.toLowerCase().includes(searchTerm.toLowerCase());
  
  // Limit cache size to prevent memory leaks
  if (titleMatchCache.size > 1000) {
    titleMatchCache.clear();
  }
  
  titleMatchCache.set(cacheKey, result);
  return result;
};

// Fast array filtering with early returns
export const fastFilter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

// Pre-computed search indices for common terms
export const searchIndexCache = new Map<string, number[]>();

// Fast search with pre-computed indices
export const fastSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  // Check cache first
  if (searchIndexCache.has(normalizedTerm)) {
    const indices = searchIndexCache.get(normalizedTerm)!;
    return indices.map(index => tools[index]).filter(Boolean);
  }
  
  // Perform search and cache results
  const matchingIndices: number[] = [];
  for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];
    if (fastTitleMatch(tool.title, normalizedTerm) || 
        tool.description.toLowerCase().includes(normalizedTerm)) {
      matchingIndices.push(i);
    }
  }
  
  // Cache results (limit cache size)
  if (searchIndexCache.size > 100) {
    searchIndexCache.clear();
  }
  searchIndexCache.set(normalizedTerm, matchingIndices);
  
  return matchingIndices.map(index => tools[index]);
};

// Batch DOM operations for better performance
export const batchDOMOperations = (operations: (() => void)[]): void => {
  requestAnimationFrame(() => {
    operations.forEach(op => op());
  });
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(null, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Clear all performance caches
export const clearPerformanceCaches = (): void => {
  titleMatchCache.clear();
  searchIndexCache.clear();
};