
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./search/keywordExpansion";
import { searchAIWebToolsGPTs, scoreAIWebToolsGPT } from "./search/aiWebToolsSearch";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.trim().length === 0) {
    return [];
  }

  const cleanSearchTerm = searchTerm.trim();
  console.log(`🔍 Main search for: "${cleanSearchTerm}"`);

  // Get AI Web Tools specific results first
  const aiWebToolsResults = searchAIWebToolsGPTs(tools, cleanSearchTerm);
  
  // Get expanded keywords for broader search
  const expandedKeywords = getExpandedKeywords(cleanSearchTerm);
  console.log(`🔍 Expanded keywords:`, expandedKeywords);

  // Search through all tools
  const allResults = tools.filter(tool => {
    const toolText = `${tool.title} ${tool.description || ''} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    const lowerSearchTerm = cleanSearchTerm.toLowerCase();

    // Direct match
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }

    // Check expanded keywords
    return expandedKeywords.some(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      return toolText.includes(lowerKeyword);
    });
  });

  // Combine and deduplicate results, prioritizing AI Web Tools
  const combinedResults = new Map<string, Tool>();
  
  // Add AI Web Tools results first (higher priority)
  aiWebToolsResults.forEach(tool => {
    combinedResults.set(tool.title, tool);
  });
  
  // Add other results
  allResults.forEach(tool => {
    if (!combinedResults.has(tool.title)) {
      combinedResults.set(tool.title, tool);
    }
  });

  const finalResults = Array.from(combinedResults.values());

  // Enhanced scoring that prioritizes AI Web Tools GPTs
  const scoredResults = finalResults.map(tool => ({
    tool,
    score: tool.directUrl?.includes('lovable.app') ? 
      scoreAIWebToolsGPT(tool, cleanSearchTerm) : 
      scoreRegularTool(tool, cleanSearchTerm)
  }));

  // Sort by score (highest first)
  scoredResults.sort((a, b) => b.score - a.score);

  const sortedResults = scoredResults.map(result => result.tool);
  
  console.log(`✅ Search complete: ${sortedResults.length} total results`);
  console.log(`🎯 AI Web Tools results: ${aiWebToolsResults.length}`);
  console.log(`📋 Top 10 results:`, sortedResults.slice(0, 10).map(t => t.title));
  
  return sortedResults;
};

// Regular tool scoring function
const scoreRegularTool = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  let score = 0;

  // Title exact match
  if (tool.title.toLowerCase() === lowerSearchTerm) {
    score += 100;
  } else if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 80;
  }

  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 40;
  }

  // Tags match
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 30;
  }

  // Category match
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 20;
  }

  // Popularity boost
  if (tool.rating && tool.rating > 4.5) {
    score += 10;
  }

  if (tool.totalVotes && tool.totalVotes > 5000) {
    score += 5;
  }

  return score;
};
