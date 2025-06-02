
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchPhoneAgents, scorePhoneAgents } from "./matching/phoneAgentMatching";
import { matchMusicTools, scoreMusicTools } from "./matching/musicMatching";
import { matchAppBuilding, scoreAppBuilding } from "./matching/appBuildingMatching";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    console.log("🔍 Empty search term, returning all tools");
    return tools;
  }

  console.log(`🔍 Enhanced search for: "${searchTerm}" across ${tools.length} tools`);
  
  const expandedKeywords = getExpandedKeywords(searchTerm);
  console.log(`📝 Expanded keywords:`, expandedKeywords);
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  
  // Remove duplicates by title before scoring
  const uniqueTools = tools.reduce((acc, tool) => {
    const existingTool = acc.find(t => t.title.toLowerCase() === tool.title.toLowerCase());
    if (!existingTool) {
      acc.push(tool);
    }
    return acc;
  }, [] as Tool[]);
  
  console.log(`🔧 Searching through ${uniqueTools.length} unique tools`);
  
  const results = uniqueTools.map(tool => {
    let score = 0;
    let matched = false;
    
    // NAME SEARCH SPECIFIC MATCHING - HIGHEST PRIORITY
    if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('meaning') || 
        lowerSearchTerm.includes('identity') || lowerSearchTerm.includes('personality') ||
        lowerSearchTerm.includes('numerology')) {
      
      // Check if this is the Name Insight Research & Predictor GPT tool
      if (tool.title.toLowerCase().includes('name insight research') || 
          tool.title.toLowerCase().includes('name meaning') ||
          tool.title.toLowerCase().includes('name predictor') ||
          tool.directUrl?.includes('whatsmynamegpt')) {
        matched = true;
        score += 15000; // Highest priority for name searches
        console.log(`🎯 NAME MATCH FOUND: ${tool.title} with score ${score}`);
      }
      
      // Check description and tags for name-related content
      const nameKeywords = ['name analysis', 'personality insights', 'numerology', 'cultural significance', 'name meaning', 'identity', 'personal discovery'];
      for (const keyword of nameKeywords) {
        if (tool.description.toLowerCase().includes(keyword) || 
            tool.tags?.some(tag => tag.toLowerCase().includes(keyword))) {
          matched = true;
          score += 8000;
        }
      }
    }
    
    // App building specific matching (highest priority for app building searches)
    if (matchAppBuilding(tool, searchTerm)) {
      matched = true;
      score += scoreAppBuilding(tool, searchTerm);
    }
    
    // Music tool specific matching (highest priority for music searches)
    if (matchMusicTools(tool, searchTerm)) {
      matched = true;
      score += scoreMusicTools(tool, searchTerm);
    }
    
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
    
    // Category contains search term
    if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
      matched = true;
      score += 1500;
    }
    
    // Description contains search term
    if (tool.description.toLowerCase().includes(lowerSearchTerm)) {
      matched = true;
      score += 1000;
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

  console.log(`✅ Enhanced search found ${results.length} results for "${searchTerm}"`);
  
  // Enhanced debugging for name searches
  if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('meaning') || lowerSearchTerm.includes('identity')) {
    const nameResults = results.filter(tool => 
      tool.title.toLowerCase().includes('name') || 
      tool.description.toLowerCase().includes('name') ||
      tool.title.toLowerCase().includes('meaning') ||
      tool.description.toLowerCase().includes('meaning') ||
      tool.directUrl?.includes('whatsmynamegpt')
    ).slice(0, 10);
    
    console.log(`🏷️ Name search results (${nameResults.length}):`, nameResults.map(t => ({
      title: t.title,
      category: t.category,
      url: t.directUrl,
      hasNameInTitle: t.title.toLowerCase().includes('name'),
      hasNameInDesc: t.description.toLowerCase().includes('name')
    })));
  }
  
  // Log app building results for debugging
  if (lowerSearchTerm.includes('build app') || lowerSearchTerm.includes('bolt') || lowerSearchTerm.includes('lovable') || lowerSearchTerm.includes('cursor')) {
    const appBuildingResults = results.filter(tool => 
      tool.title.toLowerCase().includes('lovable') || 
      tool.title.toLowerCase().includes('bolt') || 
      tool.title.toLowerCase().includes('cursor') ||
      tool.title.toLowerCase().includes('app builder') ||
      tool.description.toLowerCase().includes('app builder')
    ).slice(0, 10);
    
    console.log(`🏗️ App building search results:`, appBuildingResults.map(t => t.title));
  }
  
  // Log music results for debugging
  if (lowerSearchTerm.includes('music') || lowerSearchTerm.includes('suno') || lowerSearchTerm.includes('udio')) {
    const musicResults = results.filter(tool => 
      tool.title.toLowerCase().includes('music') || 
      tool.title.toLowerCase().includes('suno') || 
      tool.title.toLowerCase().includes('udio') ||
      tool.title.toLowerCase().includes('audio')
    ).slice(0, 10);
    
    console.log(`🎵 Music search results:`, musicResults.map(t => t.title));
  }
  
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
