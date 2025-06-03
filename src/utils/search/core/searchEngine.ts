
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "../keywordExpansion";
import { fuzzyMatchTool, phoneticMatch, calculateSimilarity } from "./fuzzyMatching";
import { predictUserIntent, enhanceSearchWithContext } from "./intelligentPrediction";

export interface SearchResult {
  tool: Tool;
  score: number;
  matched: boolean;
}

export const createSearchResult = (tool: Tool, score: number, matched: boolean): SearchResult => ({
  tool,
  score,
  matched
});

export const getSearchWords = (searchTerm: string): string[] => {
  return searchTerm.toLowerCase().trim().split(/\s+/);
};

export const getSearchableText = (tool: Tool): string => {
  return [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || []),
    tool.directUrl || ''
  ].join(' ').toLowerCase();
};

// Enhanced basic search with intelligent features
export const performBasicSearch = (
  tool: Tool, 
  searchTerm: string, 
  searchWords: string[], 
  expandedKeywords: string[]
): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = getSearchableText(tool);
  let score = 0;
  let matched = false;

  // PRIORITY 1: Exact matches (highest priority)
  if (tool.title.toLowerCase() === lowerSearchTerm) {
    matched = true;
    score += 10000;
  }

  // PRIORITY 2: Title starts with search term
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    matched = true;
    score += 8000;
  }

  // PRIORITY 3: Title contains search term
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 6000;
  }

  // PRIORITY 4: Fuzzy matching for misspellings
  const fuzzyResult = fuzzyMatchTool(tool, searchTerm);
  if (fuzzyResult.matched) {
    matched = true;
    score += fuzzyResult.score;
  }

  // PRIORITY 5: Phonetic matching
  const phoneticMatches = phoneticMatch(lowerSearchTerm);
  for (const phoneticMatch of phoneticMatches) {
    if (searchableText.includes(phoneticMatch)) {
      matched = true;
      score += 4000;
    }
  }

  // PRIORITY 6: Enhanced contextual search
  const contextualTerms = enhanceSearchWithContext(searchTerm);
  for (const term of contextualTerms) {
    if (searchableText.includes(term.toLowerCase())) {
      matched = true;
      score += 2000;
    }
  }

  // PRIORITY 7: Category matching
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 3000;
  }

  // PRIORITY 8: Description contains search term
  if (tool.description.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 2500;
  }

  // PRIORITY 9: Multi-word search - all words must be present
  if (searchWords.length > 1) {
    const allWordsPresent = searchWords.every(word => 
      word.length > 0 && searchableText.includes(word)
    );
    
    if (allWordsPresent) {
      matched = true;
      score += 2000 * searchWords.length;
    }
  }

  // PRIORITY 10: Partial word matching for flexibility
  for (const word of searchWords) {
    if (word.length >= 2) {
      if (searchableText.includes(word)) {
        matched = true;
        score += 500;
      }
    }
  }

  // PRIORITY 11: Tag matching with fuzzy support
  if (tool.tags) {
    for (const tag of tool.tags) {
      const tagLower = tag.toLowerCase();
      if (tagLower.includes(lowerSearchTerm)) {
        matched = true;
        score += 1500;
      }
      
      // Fuzzy match tags using imported function
      for (const searchWord of searchWords) {
        if (searchWord.length >= 3) {
          const similarity = calculateSimilarity(searchWord, tagLower);
          if (similarity >= 0.7) {
            matched = true;
            score += similarity * 1000;
          }
        }
      }
    }
  }

  // PRIORITY 12: URL matching (for direct tool searches)
  if (tool.directUrl && tool.directUrl.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 800;
  }

  // PRIORITY 13: Expanded keywords from keyword expansion
  for (const keyword of expandedKeywords) {
    if (keyword.length > 0 && searchableText.includes(keyword)) {
      matched = true;
      
      // Higher score for title matches
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 1500;
      }
      // Medium score for description matches
      else if (tool.description.toLowerCase().includes(keyword)) {
        score += 800;
      }
      // Lower score for other matches
      else {
        score += 400;
      }
    }
  }

  return { score, matched };
};

export const removeDuplicateTools = (tools: Tool[]): Tool[] => {
  return tools.reduce((acc, tool) => {
    const existingTool = acc.find(t => t.title.toLowerCase() === tool.title.toLowerCase());
    if (!existingTool) {
      acc.push(tool);
    }
    return acc;
  }, [] as Tool[]);
};

// Enhanced search with intelligent prediction
export const performIntelligentSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  const predictions = predictUserIntent(searchTerm, tools);
  const enhancedResults: Tool[] = [];
  
  // First, search with original term
  const originalResults = tools.filter(tool => {
    const searchableText = getSearchableText(tool);
    return searchableText.includes(searchTerm.toLowerCase());
  });
  
  // Then, search with predicted terms
  for (const prediction of predictions) {
    const predictedResults = tools.filter(tool => {
      const searchableText = getSearchableText(tool);
      return searchableText.includes(prediction.toLowerCase());
    });
    enhancedResults.push(...predictedResults);
  }
  
  // Combine and deduplicate
  const allResults = [...originalResults, ...enhancedResults];
  return removeDuplicateTools(allResults);
};
