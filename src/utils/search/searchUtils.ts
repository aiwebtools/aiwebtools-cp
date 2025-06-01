
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { enhancedKeywordMatching, enhancedToolScoring } from "./enhancedKeywordMatching";

// Enhanced search function with better indexing for all tools
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  const expandedKeywords = getExpandedKeywords(searchTerm);
  
  console.log(`🔍 Enhanced search for: "${searchTerm}"`);
  console.log(`📝 Expanded keywords:`, expandedKeywords.slice(0, 10));
  
  const results = tools.filter(tool => {
    const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    
    // PRIORITY 1: Exact title match (highest priority)
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 2: Enhanced keyword matching for new tools
    if (enhancedKeywordMatching(tool, searchTerm)) {
      return true;
    }
    
    // PRIORITY 3: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 4: Any word in title starts with search term
    const titleWords = tool.title.toLowerCase().split(' ');
    if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
      return true;
    }
    
    // PRIORITY 5: Direct text match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 6: Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // PRIORITY 7: Expanded keyword matching
    if (expandedKeywords.some(keyword => toolText.includes(keyword.toLowerCase()))) {
      return true;
    }
    
    // PRIORITY 8: Partial matching for longer terms
    if (lowerSearchTerm.length >= 4) {
      const partialMatches = [
        tool.title.toLowerCase().includes(lowerSearchTerm),
        tool.description?.toLowerCase().includes(lowerSearchTerm),
        tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      ];
      
      if (partialMatches.some(match => match)) {
        return true;
      }
    }
    
    return false;
  });
  
  // Enhanced scoring and sorting
  const scoredResults = results.map(tool => ({
    tool,
    score: calculateSearchScore(tool, searchTerm, expandedKeywords)
  }));
  
  // Sort by score (highest first)
  scoredResults.sort((a, b) => b.score - a.score);
  
  const finalResults = scoredResults.map(result => result.tool);
  
  console.log(`✅ Enhanced search found ${finalResults.length} results`);
  return finalResults;
};

// Enhanced scoring function
const calculateSearchScore = (tool: Tool, searchTerm: string, expandedKeywords: string[]): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  const titleWords = tool.title.toLowerCase().split(' ');
  let score = 0;
  
  // Enhanced scoring for new tools
  score += enhancedToolScoring(tool, searchTerm);
  
  // Exact word matching in title (Very High Priority)
  if (titleWords.some(word => word === lowerSearchTerm)) {
    score += 800;
  }
  
  // Title starts with search term
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    score += 700;
  }
  
  // Any word in title starts with search term
  if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
    score += 600;
  }
  
  // Exact title match
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 500;
  }
  
  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 250;
  }
  
  // Tag matches
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 200;
  }
  
  // Category match
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 150;
  }
  
  // Expanded keyword matches
  const keywordMatches = expandedKeywords.filter(keyword => 
    toolText.includes(keyword.toLowerCase())
  ).length;
  score += keywordMatches * 50;
  
  // Boost for AI Web Tools original GPTs
  if (tool.directUrl?.includes('lovable.app')) {
    score += 25;
  }
  
  return score;
};
