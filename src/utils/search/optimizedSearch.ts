import { Tool } from "@/types/tools";

// Simplified search for better performance
export const performOptimizedSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim() || searchTerm.length < 1) {
    return [];
  }

  // Performance optimization - prevent overly long queries
  const trimmed = searchTerm.trim();
  if (trimmed.length > 50) {
    return [];
  }

  const lowerSearchTerm = trimmed.toLowerCase();
  const searchWords = lowerSearchTerm.split(/\s+/).filter(word => word.length > 1);
  
  const scored: { tool: Tool; score: number }[] = [];

  for (const tool of tools) {
    if (!tool.title) continue;
    
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = (tool.description || "").toLowerCase();
    const lowerCategory = (tool.category || "").toLowerCase();
    
    let score = 0;

    // Exact title match (highest priority)
    if (lowerTitle === lowerSearchTerm) {
      score += 10000;
    }
    // Title starts with search term
    else if (lowerTitle.startsWith(lowerSearchTerm)) {
      score += 8000;
    }
    // Title contains search term
    else if (lowerTitle.includes(lowerSearchTerm)) {
      score += 6000;
    }

    // Description contains search term
    if (lowerDescription.includes(lowerSearchTerm)) {
      score += 3000;
    }

    // Category match
    if (lowerCategory.includes(lowerSearchTerm)) {
      score += 2000;
    }

    // Individual word matches (only for reasonable queries)
    if (searchWords.length <= 3) {
      for (const word of searchWords) {
        if (word.length >= 2) {
          if (lowerTitle.includes(word)) {
            score += 1000;
          }
          if (lowerDescription.includes(word)) {
            score += 500;
          }
        }
      }
    }

    if (score > 0) {
      scored.push({ tool, score });
    }
  }

  // Sort by score and return top results
  return scored
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool)
    .slice(0, 500); // Limit results for performance
};