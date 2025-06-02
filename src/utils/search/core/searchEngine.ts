
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "../keywordExpansion";

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

// Optimized similarity calculation
const calculateSimilarity = (str1: string, str2: string): number => {
  if (str1 === str2) return 1;
  
  // Early exit for very different lengths
  const lengthDiff = Math.abs(str1.length - str2.length);
  if (lengthDiff > Math.max(str1.length, str2.length) * 0.5) return 0;
  
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

// Optimized Levenshtein distance with early termination
const levenshteinDistance = (str1: string, str2: string): number => {
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  
  const matrix = [];
  const maxDistance = Math.max(str1.length, str2.length);
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
      
      // Early termination if distance gets too large
      if (matrix[i][j] > maxDistance * 0.7) {
        return maxDistance;
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Streamlined fuzzy matching with performance optimizations
const performFuzzyMatching = (tool: Tool, searchTerm: string): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  let score = 0;
  let matched = false;
  
  // Only process fuzzy matching for words of reasonable length
  const titleWords = tool.title.toLowerCase().split(/\s+/);
  for (const searchWord of searchWords) {
    if (searchWord.length >= 3 && searchWord.length <= 15) {
      for (const titleWord of titleWords) {
        if (titleWord.length >= 3) {
          const similarity = calculateSimilarity(searchWord, titleWord);
          if (similarity >= 0.75) {
            matched = true;
            score += similarity * 2000;
            break; // Found a match, move to next search word
          }
        }
      }
    }
  }
  
  return { score, matched };
};

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

  // Exact title match (highest priority)
  if (tool.title.toLowerCase() === lowerSearchTerm) {
    matched = true;
    score += 10000;
    return { score, matched }; // Early return for exact match
  }

  // Title starts with search term
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    matched = true;
    score += 5000;
  }

  // Title contains search term
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 3000;
  }

  // Category exact match
  if (tool.category?.toLowerCase() === lowerSearchTerm) {
    matched = true;
    score += 2000;
  }

  // Category contains search term
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 1500;
  }

  // Description contains search term
  if (tool.description.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 1000;
  }

  // Only perform fuzzy matching if no exact matches found and term is reasonable length
  if (!matched && lowerSearchTerm.length >= 3 && lowerSearchTerm.length <= 20) {
    const fuzzyResult = performFuzzyMatching(tool, searchTerm);
    if (fuzzyResult.matched) {
      matched = true;
      score += fuzzyResult.score;
    }
  }

  // Streamlined keyword matching - only first few keywords for performance
  for (let i = 0; i < Math.min(expandedKeywords.length, 10); i++) {
    const keyword = expandedKeywords[i];
    if (keyword.length > 2 && searchableText.includes(keyword)) {
      matched = true;
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 1500;
      } else if (tool.description.toLowerCase().includes(keyword)) {
        score += 800;
      } else {
        score += 400;
      }
      break; // Found a keyword match, no need to check more
    }
  }

  // Multi-word search optimization
  if (searchWords.length > 1 && searchWords.length <= 4) {
    const allWordsPresent = searchWords.every(word => 
      word.length > 0 && searchableText.includes(word)
    );
    
    if (allWordsPresent) {
      matched = true;
      score += 1000 * searchWords.length;
    }
  }

  // Tag matching - only check if not already matched
  if (!matched && tool.tags) {
    for (const tag of tool.tags) {
      if (tag.toLowerCase().includes(lowerSearchTerm)) {
        matched = true;
        score += 600;
        break;
      }
    }
  }

  return { score, matched };
};

export const removeDuplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  return tools.filter(tool => {
    const key = tool.title.toLowerCase();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};
