// Lightning-fast search result caching system
// Maintains instant search performance while preserving all functionality

import { Tool } from "@/types/tools";

interface CacheEntry {
  results: Tool[];
  timestamp: number;
  searchTerm: string;
}

class SearchCache {
  private cache: Map<string, CacheEntry> = new Map();
  private readonly MAX_CACHE_SIZE = 100;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  
  // Create cache key - normalize search terms for better hit rates
  private createKey(searchTerm: string): string {
    return searchTerm.toLowerCase().trim().replace(/\s+/g, ' ');
  }
  
  // Get cached results if available and fresh
  get(searchTerm: string): Tool[] | null {
    const key = this.createKey(searchTerm);
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    // Check if cache entry is still fresh
    const now = Date.now();
    if (now - entry.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.results;
  }
  
  // Store results in cache
  set(searchTerm: string, results: Tool[]): void {
    const key = this.createKey(searchTerm);
    
    // Clean up old entries if cache is getting too large
    if (this.cache.size >= this.MAX_CACHE_SIZE) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    this.cache.set(key, {
      results: [...results], // Create copy to prevent mutations
      timestamp: Date.now(),
      searchTerm: key
    });
  }
  
  // Clear cache when needed
  clear(): void {
    this.cache.clear();
  }
  
  // Get cache stats for debugging
  getStats(): { size: number; hitRate?: number } {
    return { size: this.cache.size };
  }
}

// Global cache instance
export const searchCache = new SearchCache();