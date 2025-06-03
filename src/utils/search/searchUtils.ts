


import { Tool } from "@/types/tools";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

// Enhanced search function with tool exclusions
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    // Filter out excluded tools from all results
    return tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  const searchWords = lowerSearchTerm.split(/[\s,.-]+/).filter(word => word.length > 1);
  
  const results = tools
    .filter(tool => !EXCLUDED_TOOLS.includes(tool.title)) // Exclude specific tools
    .map(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
      
      let score = 0;
      let matched = false;

      // HIGHEST PRIORITY: Exact title match
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

      return { tool, score, matched };
    })
    .filter(result => result.matched)
    .sort((a, b) => b.score - a.score)
    .map(result => result.tool);

  return results;
};

// Remove duplicate tools
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


