
import { Tool } from "@/types/tools";
import { aiWebToolsKeywords } from "@/data/keywords/aiWebToolsKeywords";

// Enhanced search specifically for AI Web Tools GPTs
export const searchAIWebToolsGPTs = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  
  console.log(`🔍 AI Web Tools search for: "${searchTerm}"`);
  
  // Filter only AI Web Tools GPTs
  const aiWebToolsGPTs = tools.filter(tool => 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('aiwebtools') ||
    tool.title.includes('GPT')
  );
  
  const results = aiWebToolsGPTs.filter(tool => {
    const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct text match
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // Enhanced keyword matching for AI Web Tools
    for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
      if (lowerSearchTerm.includes(keyword) || synonyms.some(syn => lowerSearchTerm.includes(syn))) {
        if (synonyms.some(syn => toolText.includes(syn)) || toolText.includes(keyword)) {
          return true;
        }
      }
    }
    
    // Fuzzy matching for common variations
    const fuzzyMatches = [
      { search: 'chatgpt', matches: ['gpt', 'chat'] },
      { search: 'openai', matches: ['gpt', 'artificial intelligence'] },
      { search: 'ai art', matches: ['restyle', 'graphic', 'design'] },
      { search: 'video', matches: ['movie', 'scene', 'sora'] },
      { search: 'writing', matches: ['book', 'script', 'content'] }
    ];
    
    for (const fuzzy of fuzzyMatches) {
      if (lowerSearchTerm.includes(fuzzy.search)) {
        if (fuzzy.matches.some(match => toolText.includes(match))) {
          return true;
        }
      }
    }
    
    return false;
  });
  
  console.log(`🎯 AI Web Tools search found ${results.length} results`);
  return results;
};

// Enhanced search scoring for AI Web Tools GPTs
export const scoreAIWebToolsGPT = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  let score = 0;
  
  // Exact title match gets highest score
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 100;
  }
  
  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 50;
  }
  
  // Tag matches
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 30;
  }
  
  // Keyword enhancement scoring
  for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
    if (lowerSearchTerm.includes(keyword)) {
      if (toolText.includes(keyword)) score += 40;
      if (synonyms.some(syn => toolText.includes(syn))) score += 25;
    }
  }
  
  // Boost for AI Web Tools original GPTs
  if (tool.directUrl?.includes('lovable.app')) {
    score += 20;
  }
  
  return score;
};
