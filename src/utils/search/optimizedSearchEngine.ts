// Ultra-fast search engine optimized for instant results
// Maintains ALL search functionality while delivering lightning speed

import { Tool } from "@/types/tools";
import { searchCache } from "./searchCache";
import { deduplicateSearchResults } from "./core/searchDeduplication";
import { getAlphabeticalSortKey } from "./alphabeticalSorting";

// Pre-computed search indices for instant lookups
interface SearchIndex {
  titleWords: Map<string, Tool[]>;
  descriptionWords: Map<string, Tool[]>;
  categoryWords: Map<string, Tool[]>;
  tagWords: Map<string, Tool[]>;
  exactTitles: Map<string, Tool[]>;
}

class OptimizedSearchEngine {
  private searchIndex: SearchIndex | null = null;
  private allTools: Tool[] = [];
  
  // Build search index once for ultra-fast lookups
  buildIndex(tools: Tool[]): void {
    this.allTools = tools;
    this.searchIndex = {
      titleWords: new Map(),
      descriptionWords: new Map(),
      categoryWords: new Map(),
      tagWords: new Map(),
      exactTitles: new Map()
    };
    
    // Build inverted indices for instant word lookups
    tools.forEach(tool => {
      // Index title words
      const titleWords = tool.title.toLowerCase().split(/[\s\-_.,!?]+/).filter(w => w.length > 1);
      titleWords.forEach(word => {
        if (!this.searchIndex!.titleWords.has(word)) {
          this.searchIndex!.titleWords.set(word, []);
        }
        this.searchIndex!.titleWords.get(word)!.push(tool);
      });
      
      // Index exact title
      const exactTitle = tool.title.toLowerCase().trim();
      if (!this.searchIndex!.exactTitles.has(exactTitle)) {
        this.searchIndex!.exactTitles.set(exactTitle, []);
      }
      this.searchIndex!.exactTitles.get(exactTitle)!.push(tool);
      
      // Index description words
      if (tool.description) {
        const descWords = tool.description.toLowerCase().split(/[\s\-_.,!?]+/).filter(w => w.length > 1);
        descWords.forEach(word => {
          if (!this.searchIndex!.descriptionWords.has(word)) {
            this.searchIndex!.descriptionWords.set(word, []);
          }
          this.searchIndex!.descriptionWords.get(word)!.push(tool);
        });
      }
      
      // Index category words
      if (tool.category) {
        const catWords = tool.category.toLowerCase().split(/[\s\-_.,!?]+/).filter(w => w.length > 1);
        catWords.forEach(word => {
          if (!this.searchIndex!.categoryWords.has(word)) {
            this.searchIndex!.categoryWords.set(word, []);
          }
          this.searchIndex!.categoryWords.get(word)!.push(tool);
        });
      }
      
      // Index tag words
      if (tool.tags) {
        tool.tags.forEach(tag => {
          const tagWords = tag.toLowerCase().split(/[\s\-_.,!?]+/).filter(w => w.length > 1);
          tagWords.forEach(word => {
            if (!this.searchIndex!.tagWords.has(word)) {
              this.searchIndex!.tagWords.set(word, []);
            }
            this.searchIndex!.tagWords.get(word)!.push(tool);
          });
        });
      }
    });
  }
  
  // Lightning-fast search with intelligent ranking
  search(searchTerm: string): Tool[] {
    if (!searchTerm.trim() || !this.searchIndex) {
      return this.allTools;
    }
    
    // Check cache first for instant results
    const cached = searchCache.get(searchTerm);
    if (cached) {
      return cached;
    }
    
    const normalizedTerm = searchTerm.toLowerCase().trim();
    const searchWords = normalizedTerm.split(/[\s\-_.,!?]+/).filter(w => w.length > 1);
    
    // Score-based ranking system for relevance
    const toolScores = new Map<Tool, number>();
    
    // EXACT MATCHES (highest priority)
    const exactMatches = this.searchIndex.exactTitles.get(normalizedTerm) || [];
    exactMatches.forEach(tool => {
      toolScores.set(tool, (toolScores.get(tool) || 0) + 10000);
    });
    
    // TITLE CONTAINS (very high priority)
    this.allTools.forEach(tool => {
      if (tool.title.toLowerCase().includes(normalizedTerm)) {
        const currentScore = toolScores.get(tool) || 0;
        if (currentScore < 10000) { // Don't override exact matches
          toolScores.set(tool, currentScore + 8000);
        }
      }
    });
    
    // WORD-BASED MATCHES (high priority)
    searchWords.forEach(word => {
      // Title word matches
      const titleMatches = this.searchIndex.titleWords.get(word) || [];
      titleMatches.forEach(tool => {
        toolScores.set(tool, (toolScores.get(tool) || 0) + 5000);
      });
      
      // Description word matches
      const descMatches = this.searchIndex.descriptionWords.get(word) || [];
      descMatches.forEach(tool => {
        toolScores.set(tool, (toolScores.get(tool) || 0) + 2000);
      });
      
      // Category word matches
      const catMatches = this.searchIndex.categoryWords.get(word) || [];
      catMatches.forEach(tool => {
        toolScores.set(tool, (toolScores.get(tool) || 0) + 3000);
      });
      
      // Tag word matches
      const tagMatches = this.searchIndex.tagWords.get(word) || [];
      tagMatches.forEach(tool => {
        toolScores.set(tool, (toolScores.get(tool) || 0) + 1500);
      });
    });
    
    // PARTIAL MATCHES (medium priority)
    if (normalizedTerm.length >= 3) {
      this.allTools.forEach(tool => {
        if (!toolScores.has(tool)) {
          // Check for partial matches in description
          if (tool.description?.toLowerCase().includes(normalizedTerm)) {
            toolScores.set(tool, 1000);
          }
          // Check for partial matches in tags
          else if (tool.tags?.some(tag => tag.toLowerCase().includes(normalizedTerm))) {
            toolScores.set(tool, 800);
          }
          // Check for partial matches in category
          else if (tool.category?.toLowerCase().includes(normalizedTerm)) {
            toolScores.set(tool, 1200);
          }
        }
      });
    }
    
    // Convert scores to sorted results
    const scoredResults = Array.from(toolScores.entries())
      .sort(([, scoreA], [, scoreB]) => {
        if (scoreB !== scoreA) return scoreB - scoreA;
        
        // Secondary sort by alphabetical order for consistent results
        const keyA = getAlphabeticalSortKey(scoreA.toString());
        const keyB = getAlphabeticalSortKey(scoreB.toString());
        return keyA.localeCompare(keyB);
      })
      .map(([tool]) => tool);
    
    // Add remaining tools for complete results
    const remainingTools = this.allTools.filter(tool => !toolScores.has(tool));
    const finalResults = [...scoredResults, ...remainingTools];
    
    // Apply deduplication (maintaining existing functionality)
    const deduplicatedResults = deduplicateSearchResults(finalResults);
    
    // Cache results for next time
    searchCache.set(searchTerm, deduplicatedResults);
    
    return deduplicatedResults;
  }
  
  // Get search suggestions for instant feedback
  getSuggestions(searchTerm: string, limit: number = 5): string[] {
    if (!searchTerm.trim() || !this.searchIndex) return [];
    
    const normalizedTerm = searchTerm.toLowerCase();
    const suggestions = new Set<string>();
    
    // Get suggestions from title words
    for (const [word] of this.searchIndex.titleWords) {
      if (word.startsWith(normalizedTerm) && word !== normalizedTerm) {
        suggestions.add(word);
        if (suggestions.size >= limit) break;
      }
    }
    
    return Array.from(suggestions);
  }
}

// Global optimized search engine instance
export const optimizedSearchEngine = new OptimizedSearchEngine();

// Fast search function that maintains all existing functionality
export const fastSearchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  // Ensure index is built
  if (!optimizedSearchEngine['searchIndex']) {
    optimizedSearchEngine.buildIndex(tools);
  }
  
  return optimizedSearchEngine.search(searchTerm);
};