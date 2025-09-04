import { Tool } from "@/types/tools";

// Simple fallback search for performance
export const performSimpleSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return [];

  const lowerTerm = searchTerm.toLowerCase().trim();
  const results: { tool: Tool; score: number }[] = [];

  for (const tool of tools) {
    if (!tool.title) continue;
    
    const lowerTitle = tool.title.toLowerCase();
    let score = 0;

    // Simple exact and partial matching only
    if (lowerTitle === lowerTerm) {
      score = 1000;
    } else if (lowerTitle.includes(lowerTerm)) {
      score = 500;
    } else if (tool.description && tool.description.toLowerCase().includes(lowerTerm)) {
      score = 250;
    }

    if (score > 0) {
      results.push({ tool, score });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool)
    .slice(0, 100);
};