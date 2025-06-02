
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
