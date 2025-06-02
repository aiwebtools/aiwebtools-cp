
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

// Function to calculate similarity score between two strings
const calculateSimilarity = (str1: string, str2: string): number => {
  if (str1 === str2) return 1;
  
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

// Levenshtein distance calculation for fuzzy matching
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  
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
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Enhanced fuzzy matching for title and description
const performFuzzyMatching = (tool: Tool, searchTerm: string): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  let score = 0;
  let matched = false;
  
  // Fuzzy match against title words
  const titleWords = tool.title.toLowerCase().split(/\s+/);
  for (const searchWord of searchWords) {
    if (searchWord.length >= 3) {
      for (const titleWord of titleWords) {
        const similarity = calculateSimilarity(searchWord, titleWord);
        if (similarity >= 0.7) { // 70% similarity threshold
          matched = true;
          score += similarity * 2000; // High score for title fuzzy matches
        }
      }
    }
  }
  
  // Fuzzy match against description words
  const descWords = tool.description.toLowerCase().split(/\s+/);
  for (const searchWord of searchWords) {
    if (searchWord.length >= 4) { // Slightly longer words for description matching
      for (const descWord of descWords) {
        const similarity = calculateSimilarity(searchWord, descWord);
        if (similarity >= 0.75) { // Higher threshold for description
          matched = true;
          score += similarity * 800; // Medium score for description fuzzy matches
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

  // Perform fuzzy matching for misspellings
  const fuzzyResult = performFuzzyMatching(tool, searchTerm);
  if (fuzzyResult.matched) {
    matched = true;
    score += fuzzyResult.score;
  }

  // Search through expanded keywords
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

  // Multi-word search - all words must be present
  if (searchWords.length > 1) {
    const allWordsPresent = searchWords.every(word => 
      word.length > 0 && searchableText.includes(word)
    );
    
    if (allWordsPresent) {
      matched = true;
      score += 1000 * searchWords.length;
    }
  }

  // Partial word matching for flexibility
  for (const word of searchWords) {
    if (word.length >= 3) {
      if (searchableText.includes(word)) {
        matched = true;
        score += 200;
      }
    }
  }

  // Tag matching
  if (tool.tags) {
    for (const tag of tool.tags) {
      if (tag.toLowerCase().includes(lowerSearchTerm)) {
        matched = true;
        score += 600;
      }
    }
  }

  // URL matching (for direct tool searches)
  if (tool.directUrl && tool.directUrl.toLowerCase().includes(lowerSearchTerm)) {
    matched = true;
    score += 300;
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
