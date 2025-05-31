
import { Tool } from "@/types/tools";

// AI Web Tools GPT identification and scoring
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('aiwebtools') ||
         tool.title.toLowerCase().includes('gpt') ||
         tool.description.toLowerCase().includes('gpt');
};

export const scoreAIWebToolsGPT = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerDescription = tool.description?.toLowerCase() || '';
  
  let score = 0;

  // HIGHEST PRIORITY: AI Web Tools GPTs get massive boost
  if (isAIWebToolsGPT(tool)) {
    score += 2000; // Base boost for AI Web Tools GPTs
  }

  // Enhanced exact matching for AI Web Tools GPTs
  if (lowerTitle === lowerSearchTerm) {
    score += 1500; // Perfect exact match
  }

  // Title starts with search term (this should catch your GPTs!)
  if (lowerTitle.startsWith(lowerSearchTerm)) {
    score += 1200; // High boost for title starts with
  }

  // Enhanced partial matching for GPTs
  if (lowerTitle.includes(lowerSearchTerm)) {
    score += 800; // Good boost for title contains
  }

  // Special boosting for specific AI Web Tools GPTs
  const specialGPTs = [
    'learn any course gpt',
    'learn any skill gpt',
    'music video maker ai studio',
    'music melodies & lessons gpt',
    'podcast script writer gpt',
    'mixologist gpt',
    'chef "sizzle" ai culinary assistant'
  ];

  specialGPTs.forEach(specialGPT => {
    if (lowerTitle.includes(specialGPT) || specialGPT.includes(lowerTitle)) {
      score += 500; // Extra boost for special GPTs
    }
  });

  // Multi-word search matching for GPTs
  const searchWords = lowerSearchTerm.split(' ');
  const titleWords = lowerTitle.split(' ');
  
  let matchingWords = 0;
  searchWords.forEach(searchWord => {
    if (searchWord.length >= 3) { // Only count meaningful words
      titleWords.forEach(titleWord => {
        if (titleWord.startsWith(searchWord) || titleWord.includes(searchWord)) {
          matchingWords++;
        }
      });
    }
  });

  if (matchingWords >= searchWords.length) {
    score += 600; // All search words found in title
  } else if (matchingWords >= searchWords.length / 2) {
    score += 300; // Most search words found
  }

  // Description matching for GPTs
  if (lowerDescription.includes(lowerSearchTerm)) {
    score += 200;
  }

  return score;
};

export const searchAIWebToolsGPTs = (tools: Tool[], searchTerm: string): Tool[] => {
  const cleanSearchTerm = searchTerm.trim().toLowerCase();
  
  // Filter AI Web Tools GPTs
  const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
  
  // Enhanced filtering for AI Web Tools GPTs
  const matchingGPTs = aiWebToolsGPTs.filter(tool => {
    const toolText = `${tool.title} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct search term match
    if (toolText.includes(cleanSearchTerm)) {
      return true;
    }

    // Word-by-word matching
    const searchWords = cleanSearchTerm.split(' ');
    const matchingWords = searchWords.filter(word => 
      word.length >= 3 && toolText.includes(word)
    );
    
    // Return true if most search words are found
    return matchingWords.length >= Math.max(1, searchWords.length - 1);
  });

  console.log(`🎯 AI Web Tools GPT search for "${searchTerm}": found ${matchingGPTs.length} matching GPTs`);
  return matchingGPTs;
};
