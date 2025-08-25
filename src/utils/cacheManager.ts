// Advanced caching manager for better performance

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class CacheManager {
  private cache = new Map<string, CacheEntry<any>>();
  private maxSize = 100;

  set<T>(key: string, value: T, ttl: number = 5 * 60 * 1000): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.value;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache stats
  getStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: 0 // Could be implemented with hit/miss tracking
    };
  }
}

// Specialized caches for different data types
export const searchCache = new CacheManager();
export const imageCache = new CacheManager();
export const componentCache = new CacheManager();

// Auto-cleanup every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    searchCache.cleanup();
    imageCache.cleanup();
    componentCache.cleanup();
  }, 5 * 60 * 1000);
}

// React hook for cached values
export const useCachedValue = <T>(
  key: string,
  computeFn: () => T,
  ttl?: number
): T => {
  const cachedValue = componentCache.get<T>(key);
  
  if (cachedValue !== null) {
    return cachedValue;
  }

  const newValue = computeFn();
  componentCache.set(key, newValue, ttl);
  return newValue;
};

// Cached search results
export const getCachedSearchResults = (searchTerm: string, tools: any[]) => {
  const cacheKey = `search_${searchTerm}_${tools.length}`;
  return searchCache.get(cacheKey);
};

export const setCachedSearchResults = (searchTerm: string, tools: any[], results: any[]) => {
  const cacheKey = `search_${searchTerm}_${tools.length}`;
  searchCache.set(cacheKey, results, 2 * 60 * 1000); // 2 minute TTL
};