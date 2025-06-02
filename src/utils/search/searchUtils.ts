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
    
    // PRIORITY 1: AGENTS SEARCH - HIGHEST PRIORITY
    if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
      const agentTools = [
        'chatgpt operator',
        'manus autonomous agent',
        'surf.new web agents',
        'lindy ai automation',
        'auto-gpt',
        'babyagi',
        'agentgpt',
        'god mode gpt',
        'ai town'
      ];
      
      // Exact match for priority agent tools
      if (agentTools.some(agentTool => tool.title.toLowerCase().includes(agentTool))) {
        return true;
      }
      
      // General agent matching
      if (tool.title.toLowerCase().includes('agent') || 
          tool.description.toLowerCase().includes('agent') ||
          tool.title.toLowerCase().includes('autonomous') ||
          tool.description.toLowerCase().includes('autonomous') ||
          tool.category?.toLowerCase().includes('agent') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('agent'))) {
        return true;
      }
    }
    
    // PRIORITY 2: Exact title match (high priority for non-agent searches)
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 3: Enhanced keyword matching for new tools
    if (enhancedKeywordMatching(tool, searchTerm)) {
      return true;
    }
    
    // PRIORITY 4: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 5: Any word in title starts with search term
    const titleWords = tool.title.toLowerCase().split(' ');
    if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
      return true;
    }
    
    // PRIORITY 6: Check individual words for King Blueberry specifically
    if (lowerSearchTerm === 'king' || lowerSearchTerm === 'blueberry') {
      if (tool.title.toLowerCase().includes('king blueberry')) {
        return true;
      }
    }
    
    // PRIORITY 7: Direct text match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 8: Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // PRIORITY 9: Expanded keyword matching
    if (expandedKeywords.some(keyword => toolText.includes(keyword.toLowerCase()))) {
      return true;
    }
    
    // PRIORITY 10: Partial matching for longer terms
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
  if (lowerSearchTerm.includes('agent')) {
    console.log(`🤖 Agent search results:`, finalResults.filter(t => 
      t.title.toLowerCase().includes('agent') || 
      t.title.toLowerCase().includes('autonomous') ||
      t.category?.toLowerCase().includes('agent')
    ).slice(0, 10).map(t => t.title));
  }
  return finalResults;
};

// Enhanced scoring function
const calculateSearchScore = (tool: Tool, searchTerm: string, expandedKeywords: string[]): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  const titleWords = tool.title.toLowerCase().split(' ');
  let score = 0;
  
  // AGENTS SEARCH SCORING - ABSOLUTE HIGHEST PRIORITY
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Top priority AI agent tools
    if (tool.title.toLowerCase().includes('chatgpt operator')) {
      score += 3000; // Highest priority
    }
    if (tool.title.toLowerCase().includes('manus autonomous agent')) {
      score += 2950; // Second highest
    }
    if (tool.title.toLowerCase().includes('surf.new web agents')) {
      score += 2900; // Third highest
    }
    if (tool.title.toLowerCase().includes('lindy ai automation')) {
      score += 2850; // Fourth highest
    }
    
    // Other important agent tools
    if (tool.title.toLowerCase().includes('auto-gpt')) {
      score += 2800;
    }
    if (tool.title.toLowerCase().includes('babyagi')) {
      score += 2750;
    }
    if (tool.title.toLowerCase().includes('agentgpt')) {
      score += 2700;
    }
    if (tool.title.toLowerCase().includes('god mode gpt')) {
      score += 2650;
    }
    if (tool.title.toLowerCase().includes('ai town')) {
      score += 2600;
    }
    
    // General agent matching
    if (tool.title.toLowerCase().includes('agent')) {
      score += 2500;
    }
    if (tool.description.toLowerCase().includes('agent')) {
      score += 2200;
    }
    if (tool.title.toLowerCase().includes('autonomous')) {
      score += 2400;
    }
    if (tool.description.toLowerCase().includes('autonomous')) {
      score += 2100;
    }
    if (tool.category?.toLowerCase().includes('agent')) {
      score += 2300;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('agent'))) {
      score += 2200;
    }
  }
  
  // Enhanced scoring for new tools
  score += enhancedToolScoring(tool, searchTerm);
  
  // Exact word matching in title (Very High Priority for non-agent searches)
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
