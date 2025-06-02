
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchPhoneAgents, scorePhoneAgents } from "./matching/phoneAgentMatching";
import { matchMusicTools, scoreMusicTools } from "./matching/musicMatching";
import { matchAppBuilding, scoreAppBuilding } from "./matching/appBuildingMatching";
import { 
  createSearchResult, 
  getSearchWords, 
  performBasicSearch, 
  removeDuplicateTools 
} from "./core/searchEngine";
import { matchNameInsightTool } from "./core/specialtyMatching";
import { 
  debugNameSearch, 
  debugAppBuildingSearch, 
  debugMusicSearch, 
  debugPhoneAgentSearch 
} from "./core/searchDebugger";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    console.log("🔍 Empty search term, returning all tools");
    return tools;
  }

  console.log(`🔍 Enhanced search for: "${searchTerm}" across ${tools.length} tools`);
  
  const expandedKeywords = getExpandedKeywords(searchTerm);
  console.log(`📝 Expanded keywords:`, expandedKeywords);
  
  const searchWords = getSearchWords(searchTerm);
  
  // Remove duplicates by title before scoring
  const uniqueTools = removeDuplicateTools(tools);
  
  console.log(`🔧 Searching through ${uniqueTools.length} unique tools`);
  
  const results = uniqueTools.map(tool => {
    let score = 0;
    let matched = false;
    
    // Special name insight tool matching - HIGHEST PRIORITY
    const nameMatch = matchNameInsightTool(tool, searchTerm);
    if (nameMatch.matched) {
      matched = true;
      score += nameMatch.score;
      console.log(`🏷️ Name search match for "${tool.title}" with score: ${nameMatch.score}`);
    }
    
    // App building specific matching (high priority for app building searches)
    if (matchAppBuilding(tool, searchTerm)) {
      matched = true;
      score += scoreAppBuilding(tool, searchTerm);
    }
    
    // Music tool specific matching (high priority for music searches)
    if (matchMusicTools(tool, searchTerm)) {
      matched = true;
      score += scoreMusicTools(tool, searchTerm);
    }
    
    // Phone agent specific matching (high priority for phone searches)
    if (matchPhoneAgents(tool, searchTerm)) {
      matched = true;
      score += scorePhoneAgents(tool, searchTerm);
    }
    
    // Agent specific matching
    if (matchAgents(tool, searchTerm)) {
      matched = true;
      score += scoreAgents(tool, searchTerm);
    }
    
    // Perform basic search scoring
    const basicSearch = performBasicSearch(tool, searchTerm, searchWords, expandedKeywords);
    if (basicSearch.matched) {
      matched = true;
      score += basicSearch.score;
    }
    
    return createSearchResult(tool, score, matched);
  })
  .filter(result => result.matched)
  .sort((a, b) => b.score - a.score)
  .map(result => result.tool);

  console.log(`✅ Enhanced search found ${results.length} results for "${searchTerm}"`);
  
  // Enhanced debugging for name searches
  if (searchTerm.toLowerCase().includes('name')) {
    console.log(`🏷️ NAME SEARCH DEBUG - Found ${results.length} results for "${searchTerm}"`);
    console.log(`🔝 Top 10 results:`, results.slice(0, 10).map((t, i) => `${i+1}. ${t.title}`));
  }
  
  // Enhanced debugging for different search types
  debugNameSearch(searchTerm, results);
  debugAppBuildingSearch(searchTerm, results);
  debugMusicSearch(searchTerm, results);
  debugPhoneAgentSearch(searchTerm, results);
  
  return results;
};
