


import { Tool } from "@/types/tools";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

export const createSearchResult = (tool: Tool, score: number, matched: boolean) => {
  // Exclude specific tools from search results
  if (EXCLUDED_TOOLS.includes(tool.title)) {
    return { tool, score: 0, matched: false };
  }
  
  return { tool, score, matched };
};

export const getSearchWords = (searchTerm: string): string[] => {
  return searchTerm
    .toLowerCase()
    .split(/[\s,.-]+/)
    .filter(word => word.length > 1);
};

export const performBasicSearch = (
  tool: Tool, 
  searchTerm: string, 
  searchWords: string[], 
  expandedKeywords: string[]
) => {
  // Early exit if tool is excluded
  if (EXCLUDED_TOOLS.includes(tool.title)) {
    return { matched: false, score: 0 };
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || "";
  const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
  
  let score = 0;
  let matched = false;

  // HIGHEST PRIORITY: Exact title match (case insensitive)
  if (lowerTitle === lowerSearchTerm) {
    matched = true;
    score += 15000;
  }
  
  // VERY HIGH PRIORITY: Title starts with search term
  else if (lowerTitle.startsWith(lowerSearchTerm)) {
    matched = true;
    score += 12000;
  }
  
  // HIGH PRIORITY: Title contains search term
  else if (lowerTitle.includes(lowerSearchTerm)) {
    matched = true;
    score += 8000;
  }

  // MEDIUM-HIGH PRIORITY: Description contains exact term
  if (lowerDescription.includes(lowerSearchTerm)) {
    matched = true;
    score += 4000;
  }

  // MEDIUM PRIORITY: Category match
  if (lowerCategory.includes(lowerSearchTerm)) {
    matched = true;
    score += 3000;
  }

  // MEDIUM PRIORITY: Tag matches
  for (const tag of lowerTags) {
    if (tag.includes(lowerSearchTerm)) {
      matched = true;
      score += 2000;
    }
  }

  // LOWER PRIORITY: Individual word matches
  for (const word of searchWords) {
    if (word.length < 2) continue;
    
    if (lowerTitle.includes(word)) {
      matched = true;
      score += 1000;
    }
    if (lowerDescription.includes(word)) {
      matched = true;
      score += 500;
    }
    if (lowerCategory.includes(word)) {
      matched = true;
      score += 300;
    }
    for (const tag of lowerTags) {
      if (tag.includes(word)) {
        matched = true;
        score += 200;
      }
    }
  }

  // EXPANDED KEYWORDS: Enhanced keyword matching
  for (const keyword of expandedKeywords) {
    const lowerKeyword = keyword.toLowerCase();
    if (lowerTitle.includes(lowerKeyword)) {
      matched = true;
      score += 800;
    }
    if (lowerDescription.includes(lowerKeyword)) {
      matched = true;
      score += 400;
    }
  }

  return { matched, score };
};

export const removeDuplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  return tools.filter(tool => {
    // Exclude specific tools
    if (EXCLUDED_TOOLS.includes(tool.title)) {
      return false;
    }
    
    if (seen.has(tool.title)) {
      return false;
    }
    seen.add(tool.title);
    return true;
  });
};

export const performIntelligentSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  // Filter out excluded tools before any processing
  const filteredTools = tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
  
  // Continue with normal search logic on filtered tools
  return filteredTools;
};


