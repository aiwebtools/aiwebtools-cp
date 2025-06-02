
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchPhoneAgents, scorePhoneAgents } from "./matching/phoneAgentMatching";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    return tools;
  }

  console.log(`🔍 Enhanced search for: "${searchTerm}"`);
  
  const expandedKeywords = getExpandedKeywords(searchTerm);
  console.log(`📝 Expanded keywords:`, expandedKeywords);
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  
  const results = tools.map(tool => {
    let score = 0;
    let matched = false;
    
    // Phone agent specific matching (highest priority for phone searches)
    if (matchPhoneAgents(tool, searchTerm)) {
      matched = true;
      score += scorePhoneAgents(tool, searchTerm);
    }
    
    // Agent specific matching
    if (matchAgents(tool, searchTerm)) {
      matched = true;
      score += scoreAgents(tool, searchTerm);
    }
    
    // Get searchable text
    const searchableText = [
      tool.title,
      tool.description,
      tool.category,
      ...(tool.tags || []),
      tool.directUrl || ''
    ].join(' ').toLowerCase();
    
    // Exact title match (highest priority)
    if (tool.title.toLowerCase() === lowerSearchTerm) {
      matched = true;
      score += 10000;
    }
    
    // Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      matched = true;
      score += 5000;
    }
    
    // Title contains search term
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      matched = true;
      score += 3000;
    }
    
    // Category exact match
    if (tool.category?.toLowerCase() === lowerSearchTerm) {
      matched = true;
      score += 2000;
    }
    
    // Search through expanded keywords
    for (const keyword of expandedKeywords) {
      if (keyword.length > 0 && searchableText.includes(keyword)) {
        matched = true;
        
        // Higher score for title matches
        if (tool.title.toLowerCase().includes(keyword)) {
          score += 1500;
        }
        // Medium score for description matches
        else if (tool.description.toLowerCase().includes(keyword)) {
          score += 800;
        }
        // Lower score for other matches
        else {
          score += 400;
        }
      }
    }
    
    // Multi-word search - all words must be present
    if (searchWords.length > 1) {
      const allWordsPresent = searchWords.every(word => 
        word.length > 0 && searchableText.includes(word)
      );
      
      if (allWordsPresent) {
        matched = true;
        score += 1000 * searchWords.length;
      }
    }
    
    // Partial word matching for flexibility
    for (const word of searchWords) {
      if (word.length >= 3) {
        if (searchableText.includes(word)) {
          matched = true;
          score += 200;
        }
      }
    }
    
    // Tag matching
    if (tool.tags) {
      for (const tag of tool.tags) {
        if (tag.toLowerCase().includes(lowerSearchTerm)) {
          matched = true;
          score += 600;
        }
      }
    }
    
    // URL matching (for direct tool searches)
    if (tool.directUrl && tool.directUrl.toLowerCase().includes(lowerSearchTerm)) {
      matched = true;
      score += 300;
    }
    
    return { tool, score, matched };
  })
  .filter(result => result.matched)
  .sort((a, b) => b.score - a.score)
  .map(result => result.tool);

  console.log(`✅ Enhanced search found ${results.length} results`);
  
  // Log phone agent results for debugging
  if (lowerSearchTerm.includes('phone') || lowerSearchTerm.includes('call') || lowerSearchTerm.includes('agent')) {
    const phoneAgentResults = results.filter(tool => 
      tool.title.toLowerCase().includes('phone') || 
      tool.title.toLowerCase().includes('call') || 
      tool.title.toLowerCase().includes('nucleus') ||
      tool.title.toLowerCase().includes('agent')
    ).slice(0, 10);
    
    console.log(`📞 Phone/Call/Agent search results:`, phoneAgentResults.map(t => t.title));
  }
  
  return results;
};
