
import { Tool } from "@/types/tools";
import { keywordMapping } from "@/data/keywordMapping";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  
  // Helper function to get expanded keywords with better matching
  const getExpandedKeywords = (searchTerm: string): string[] => {
    const words = searchTerm.split(' ');
    const expandedKeywords = new Set([searchTerm]);
    
    // Add the full search term
    expandedKeywords.add(searchTerm);
    
    // Add individual words
    words.forEach(word => {
      expandedKeywords.add(word);
      
      // Check if any keyword mapping key contains this word or vice versa
      Object.keys(keywordMapping).forEach(key => {
        if (key.includes(word) || word.includes(key)) {
          keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
        }
      });
      
      // Direct keyword mapping
      if (keywordMapping[word]) {
        keywordMapping[word].forEach(keyword => expandedKeywords.add(keyword));
      }
    });
    
    // Special handling for partial matches in keyword mapping
    Object.keys(keywordMapping).forEach(key => {
      if (searchTerm.includes(key) || key.includes(searchTerm)) {
        keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
      }
    });
    
    return Array.from(expandedKeywords);
  };

  // Helper function to check if a tool matches the search term with scoring
  const getToolMatchScore = (tool: Tool, searchTerm: string): number => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    let score = 0;
    
    // Get expanded keywords for intelligent matching
    const expandedKeywords = getExpandedKeywords(searchTerm);
    
    // Direct title matches get highest score
    if (lowerTitle.includes(searchTerm)) {
      score += 100;
    }
    
    // Partial title matches
    const searchWords = searchTerm.split(' ');
    const titleMatchCount = searchWords.filter(word => lowerTitle.includes(word)).length;
    score += titleMatchCount * 20;
    
    // Category matches
    if (lowerCategory.includes(searchTerm)) {
      score += 50;
    }
    
    // Tag matches
    const tagMatchCount = lowerTags.filter(tag => 
      tag.includes(searchTerm) || searchTerm.includes(tag)
    ).length;
    score += tagMatchCount * 15;
    
    // Description matches
    if (lowerDescription.includes(searchTerm)) {
      score += 30;
    }
    
    // Expanded keyword matches
    expandedKeywords.forEach(keyword => {
      if (keyword !== searchTerm) { // Don't double count the original term
        if (lowerTitle.includes(keyword)) score += 25;
        if (lowerDescription.includes(keyword)) score += 15;
        if (lowerCategory.includes(keyword)) score += 20;
        if (lowerTags.some(tag => tag.includes(keyword))) score += 10;
      }
    });
    
    // Specific keyword associations for learning tools
    if (searchTerm.includes('learn') || searchTerm.includes('skill') || searchTerm.includes('course')) {
      if (lowerTitle.includes('learn') || lowerTitle.includes('skill') || lowerTitle.includes('course')) {
        score += 75; // High boost for learning-related searches
      }
    }
    
    // Context-aware phrase matching
    const contextMatches = [
      // Learning context - should match learning tools
      ((searchTerm.includes('learn') || searchTerm.includes('skill') || searchTerm.includes('education')) && 
       (lowerTitle.includes('learn') || lowerTitle.includes('skill') || lowerTitle.includes('course') || lowerTitle.includes('education'))),
       
      // Business context
      ((searchTerm.includes('business') || searchTerm.includes('startup')) && 
       (lowerCategory.includes('business') || lowerTags.some(tag => tag.includes('business')))),
       
      // Creative context
      ((searchTerm.includes('creative') || searchTerm.includes('art') || searchTerm.includes('design')) && 
       (lowerCategory.includes('creative') || lowerCategory.includes('design') || lowerCategory.includes('art'))),
    ];
    
    if (contextMatches.some(match => match)) {
      score += 40;
    }
    
    return score;
  };
  
  // Get all tools with their match scores
  const toolsWithScores = tools.map(tool => ({
    tool,
    score: getToolMatchScore(tool, term)
  }));
  
  // Filter tools with score > 0 and sort by score (descending)
  return toolsWithScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
};
