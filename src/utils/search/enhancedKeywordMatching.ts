
import { Tool } from "@/types/tools";
import { aiWebToolsKeywords } from "@/data/keywords/aiWebToolsKeywords";

// Enhanced keyword matching specifically for newly added tools
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  
  // Direct text matching first
  if (toolText.includes(lowerSearchTerm)) {
    return true;
  }
  
  // Enhanced keyword matching for AI Web Tools GPTs
  for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
    // Check if search term matches keyword or any synonym
    if (lowerSearchTerm.includes(keyword.toLowerCase()) || 
        synonyms.some(syn => lowerSearchTerm.toLowerCase().includes(syn.toLowerCase()))) {
      
      // Check if tool matches the keyword or any synonym
      if (toolText.includes(keyword.toLowerCase()) || 
          synonyms.some(syn => toolText.includes(syn.toLowerCase()))) {
        return true;
      }
    }
  }
  
  // Special handling for newly added tools with exact matching
  const specialCases = [
    {
      searchTerms: ['ai tool expert', 'tool expert', 'ai expert', 'tool finder'],
      toolKeywords: ['ai tool expert', 'tool discovery', 'expert recommendations']
    },
    {
      searchTerms: ['king blueberry', 'blueberry', 'king', 'algebraic', 'algebra', 'mathematical', 'math', 'conversion', 'variables'],
      toolKeywords: ['king blueberry', 'blueberry', 'algebraic conversion', 'mathematical', 'algebra', 'math']
    },
    {
      searchTerms: ['ct mmp', 'connecticut', 'medical marijuana'],
      toolKeywords: ['ct mmp', 'connecticut', 'medical marijuana', 'data explorer']
    },
    {
      searchTerms: ['translator', 'translation', 'language'],
      toolKeywords: ['ai language translator', 'translation', 'multilingual']
    }
  ];
  
  for (const specialCase of specialCases) {
    if (specialCase.searchTerms.some(term => lowerSearchTerm.includes(term))) {
      if (specialCase.toolKeywords.some(keyword => toolText.includes(keyword))) {
        return true;
      }
    }
  }
  
  return false;
};

// Enhanced scoring for newly added tools
export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  let score = 0;
  
  // Higher priority for exact title matches of new tools
  const newToolTitles = [
    'ai tool expert',
    'king blueberry gpt',
    'king blueberry',
    'ct mmp data explorer',
    'ai language translator gpt'
  ];
  
  for (const newTitle of newToolTitles) {
    if (tool.title.toLowerCase().includes(newTitle)) {
      if (lowerSearchTerm.includes(newTitle) || 
          newTitle.split(' ').some(word => lowerSearchTerm.includes(word))) {
        score += 1000; // Very high priority for new tools
      }
    }
  }
  
  // Special boost for King Blueberry searches
  if (lowerSearchTerm.includes('king') || lowerSearchTerm.includes('blueberry') || 
      lowerSearchTerm.includes('algebraic') || lowerSearchTerm.includes('algebra')) {
    if (tool.title.toLowerCase().includes('king blueberry')) {
      score += 2000; // Extra high priority for King Blueberry
    }
  }
  
  // Standard scoring
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 500;
  }
  
  if (toolText.includes(lowerSearchTerm)) {
    score += 250;
  }
  
  return score;
};
