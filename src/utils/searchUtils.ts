
import { Tool } from "@/types/tools";
import { keywordMapping } from "@/data/keywordMapping";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  
  // Minimum length check to prevent single character searches from triggering keyword expansion
  const isShortSearch = term.length <= 2;
  
  // Helper function to get expanded keywords with better matching
  const getExpandedKeywords = (searchTerm: string): string[] => {
    // For very short searches, don't expand keywords to prevent false matches
    if (searchTerm.length <= 2) {
      return [searchTerm];
    }
    
    const words = searchTerm.split(' ');
    const expandedKeywords = new Set([searchTerm]);
    
    // Add the full search term
    expandedKeywords.add(searchTerm);
    
    // Add individual words (only if they're longer than 2 characters)
    words.forEach(word => {
      if (word.length > 2) {
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
      }
    });
    
    // Special handling for partial matches in keyword mapping (only for longer terms)
    if (searchTerm.length > 3) {
      Object.keys(keywordMapping).forEach(key => {
        if (searchTerm.includes(key) || key.includes(searchTerm)) {
          keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
        }
      });
    }
    
    return Array.from(expandedKeywords);
  };

  // Helper function to check if a tool matches the search term with scoring
  const getToolMatchScore = (tool: Tool, searchTerm: string): number => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    let score = 0;
    
    // For very short searches, be more restrictive
    if (isShortSearch) {
      // Only match if the search term is at the beginning of words
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
    
    // Specific keyword associations for learning tools
    if (searchTerm.includes('learn') || searchTerm.includes('skill') || searchTerm.includes('course')) {
      if (lowerTitle.includes('learn') || lowerTitle.includes('skill') || lowerTitle.includes('course')) {
        score += 75; // High boost for learning-related searches
      }
    }
    
    // Boost for exact tool name matches (case insensitive)
    if (lowerTitle.replace(/[^a-z0-9]/g, '').includes(searchTerm.replace(/[^a-z0-9]/g, ''))) {
      score += 50;
    }
    
    // Context-aware phrase matching (only for longer searches)
    if (!isShortSearch) {
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
         
        // AI context
        ((searchTerm.includes('ai') || searchTerm.includes('gpt')) && 
         (lowerTitle.includes('ai') || lowerTitle.includes('gpt') || lowerCategory.includes('ai'))),
      ];
      
      if (contextMatches.some(match => match)) {
        score += 40;
      }
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
