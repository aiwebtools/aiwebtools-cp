
import { Tool } from "@/types/tools";
import { getToolNameMatchScore, calculateIntentScore } from "./search/scoringUtils";
import { getExpandedKeywords } from "./search/keywordExpansion";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  console.log(`🔍 Searching for: "${term}" across ${tools.length} tools`);
  
  // Minimum length check to prevent single character searches from triggering keyword expansion
  const isShortSearch = term.length <= 2;
  
  // Helper function to check if a tool matches the search term with scoring
  const getToolMatchScore = (tool: Tool, searchTerm: string): number => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    let score = 0;
    
    // First, check for intelligent tool name matching
    const nameMatchScore = getToolNameMatchScore(tool.title, searchTerm);
    score += nameMatchScore;
    
    // For very short searches, prioritize name matching
    if (isShortSearch) {
      // If we have a good name match, boost it significantly
      if (nameMatchScore > 200) {
        return score + 1000; // High priority for good name matches on short searches
      }
      
      // Only match if the search term is at the beginning of words for other content
      const titleWords = lowerTitle.split(' ');
      const hasWordStart = titleWords.some(word => word.startsWith(searchTerm));
      const categoryWords = lowerCategory.split(' ');
      const hasCategoryWordStart = categoryWords.some(word => word.startsWith(searchTerm));
      
      if (hasWordStart) score += 100;
      if (hasCategoryWordStart) score += 50;
      
      // Also check tags for word starts
      const hasTagWordStart = lowerTags.some(tag => 
        tag.split(' ').some(word => word.startsWith(searchTerm))
      );
      if (hasTagWordStart) score += 30;
      
      return score;
    }
    
    // Get expanded keywords for intelligent matching (only for longer searches)
    const expandedKeywords = getExpandedKeywords(searchTerm);
    
    // Exact title matches get highest score
    if (lowerTitle === searchTerm) {
      score += 200;
    }
    
    // Direct title matches get very high score
    if (lowerTitle.includes(searchTerm)) {
      score += 100;
    }
    
    // Partial title matches
    const searchWords = searchTerm.split(' ');
    const titleMatchCount = searchWords.filter(word => lowerTitle.includes(word)).length;
    score += titleMatchCount * 25;
    
    // Category matches
    if (lowerCategory.includes(searchTerm)) {
      score += 50;
    }
    
    // Tag matches
    const tagMatchCount = lowerTags.filter(tag => 
      tag.includes(searchTerm) || searchTerm.includes(tag)
    ).length;
    score += tagMatchCount * 20;
    
    // Description matches
    if (lowerDescription.includes(searchTerm)) {
      score += 30;
    }
    
    // Expanded keyword matches (only for longer searches)
    if (!isShortSearch) {
      expandedKeywords.forEach(keyword => {
        if (keyword !== searchTerm) { // Don't double count the original term
          if (lowerTitle.includes(keyword)) score += 30;
          if (lowerDescription.includes(keyword)) score += 20;
          if (lowerCategory.includes(keyword)) score += 25;
          if (lowerTags.some(tag => tag.includes(keyword))) score += 15;
        }
      });
    }
    
    // Add intent-based scoring
    score += calculateIntentScore(tool, searchTerm);
    
    // Boost for exact tool name matches (case insensitive)
    if (lowerTitle.replace(/[^a-z0-9]/g, '').includes(searchTerm.replace(/[^a-z0-9]/g, ''))) {
      score += 50;
    }
    
    return score;
  };
  
  // Get all tools with their match scores
  const toolsWithScores = tools.map(tool => ({
    tool,
    score: getToolMatchScore(tool, term)
  }));
  
  // Filter tools with score > 0 and sort by score (descending)
  const results = toolsWithScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
  
  console.log(`✅ Search results for "${term}": ${results.length} tools found`);
  console.log(`📊 Top 5 results:`, results.slice(0, 5).map(t => ({ title: t.title, category: t.category })));
  
  return results;
};
