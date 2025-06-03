import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchPhoneAgents, scorePhoneAgents } from "./matching/phoneAgentMatching";
import { matchMusicTools, scoreMusicTools } from "./matching/musicMatching";
import { matchAppBuilding, scoreAppBuilding } from "./matching/appBuildingMatching";
import { 
  matchHealth, 
  scoreHealth,
  matchLearning,
  scoreLearning,
  matchMedical,
  scoreMedical,
  matchFarming,
  scoreFarming
} from "./matching/specialtyMatching";
import { 
  matchPolitical, 
  scorePolitical 
} from "./matching/politicalMatching";
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
  
  // Enhanced debugging to find Name Insight tool in database
  console.log(`🔍 Searching for Name Insight tool in ${tools.length} tools...`);
  const possibleNameTools = tools.filter(tool => 
    tool.title.toLowerCase().includes('name') ||
    tool.directUrl?.includes('whatsmynamegpt') ||
    tool.description.toLowerCase().includes('name insight') ||
    tool.description.toLowerCase().includes('name meaning') ||
    tool.description.toLowerCase().includes('name analysis')
  );
  
  console.log(`🏷️ Found ${possibleNameTools.length} tools with "name" in title/description/URL:`);
  possibleNameTools.forEach((tool, index) => {
    console.log(`${index + 1}. "${tool.title}" - URL: ${tool.directUrl || 'NO URL'}`);
  });
  
  // Specifically look for the exact Name Insight tool
  const nameInsightTool = tools.find(tool => 
    tool.title.toLowerCase().includes('name insight') ||
    tool.directUrl?.includes('whatsmynamegpt') ||
    (tool.title.toLowerCase().includes('name') && tool.title.toLowerCase().includes('predictor'))
  );
  console.log(`🏷️ Name Insight tool found in database:`, nameInsightTool ? nameInsightTool.title : 'NOT FOUND');
  
  // Enhanced debugging for political tools
  const possiblePoliticalTools = tools.filter(tool => 
    tool.title.toLowerCase().includes('we the people') ||
    tool.title.toLowerCase().includes('political') ||
    tool.title.toLowerCase().includes('legislation') ||
    tool.description.toLowerCase().includes('political activism') ||
    tool.description.toLowerCase().includes('civic engagement')
  );
  
  console.log(`🏛️ Found ${possiblePoliticalTools.length} political/civic tools in database:`);
  possiblePoliticalTools.forEach((tool, index) => {
    console.log(`${index + 1}. "${tool.title}" - URL: ${tool.directUrl || 'NO URL'}`);
  });
  
  // Enhanced debugging for farming tools
  const possibleFarmingTools = tools.filter(tool => 
    tool.title.toLowerCase().includes('agro') ||
    tool.title.toLowerCase().includes('farm') ||
    tool.description.toLowerCase().includes('agriculture') ||
    tool.description.toLowerCase().includes('farming') ||
    tool.description.toLowerCase().includes('crop')
  );
  
  console.log(`🌾 Found ${possibleFarmingTools.length} farming/agriculture tools in database:`);
  possibleFarmingTools.forEach((tool, index) => {
    console.log(`${index + 1}. "${tool.title}" - URL: ${tool.directUrl || 'NO URL'}`);
  });
  
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
    
    // Political/civic specific matching (VERY HIGH PRIORITY for political searches)
    if (matchPolitical(tool, searchTerm)) {
      matched = true;
      const politicalScore = scorePolitical(tool, searchTerm);
      score += politicalScore;
      console.log(`🏛️ Political search match for "${tool.title}" with score: ${politicalScore}`);
    }
    
    // Farming/Agriculture specific matching (VERY HIGH PRIORITY for agro searches)
    if (matchFarming(tool, searchTerm)) {
      matched = true;
      const farmingScore = scoreFarming(tool, searchTerm);
      score += farmingScore;
      console.log(`🌾 Farming search match for "${tool.title}" with score: ${farmingScore}`);
    }
    
    // Health-specific matching (VERY HIGH PRIORITY for health searches)
    if (matchHealth(tool, searchTerm)) {
      matched = true;
      const healthScore = scoreHealth(tool, searchTerm);
      score += healthScore;
      console.log(`🏥 Health search match for "${tool.title}" with score: ${healthScore}`);
    }
    
    // Medical specific matching (high priority for medical searches)
    if (matchMedical(tool, searchTerm)) {
      matched = true;
      score += scoreMedical(tool, searchTerm);
    }
    
    // Learning specific matching (high priority for learning searches)
    if (matchLearning(tool, searchTerm)) {
      matched = true;
      score += scoreLearning(tool, searchTerm);
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
  
  // Enhanced debugging for political searches
  if (searchTerm.toLowerCase().includes('political') || searchTerm.toLowerCase().includes('activism') || 
      searchTerm.toLowerCase().includes('we the people') || searchTerm.toLowerCase().includes('civic') ||
      searchTerm.toLowerCase().includes('democracy') || searchTerm.toLowerCase().includes('government')) {
    console.log(`🏛️ POLITICAL SEARCH DEBUG - Found ${results.length} results for "${searchTerm}"`);
    console.log(`🔝 Top 10 results:`, results.slice(0, 10).map((t, i) => `${i+1}. ${t.title}`));
    
    // Check if WE THE PEOPLE AI tool is in the results
    const weThePeopleInResults = results.find(tool => 
      tool.title.toLowerCase().includes('we the people ai') || 
      tool.title.toLowerCase().includes('legislation writer')
    );
    console.log(`🏛️ WE THE PEOPLE AI tool in results:`, weThePeopleInResults ? weThePeopleInResults.title : 'NOT IN RESULTS');
  }
  
  // Enhanced debugging for farming searches
  if (searchTerm.toLowerCase().includes('agro') || searchTerm.toLowerCase().includes('farm') || 
      searchTerm.toLowerCase().includes('agriculture') || searchTerm.toLowerCase().includes('crop')) {
    console.log(`🌾 FARMING SEARCH DEBUG - Found ${results.length} results for "${searchTerm}"`);
    console.log(`🔝 Top 10 results:`, results.slice(0, 10).map((t, i) => `${i+1}. ${t.title}`));
    
    // Check if Agronomus tool is in the results
    const agronomusInResults = results.find(tool => 
      tool.title.toLowerCase().includes('agronomus') || 
      tool.title.toLowerCase().includes('farming expert')
    );
    console.log(`🌾 Agronomus tool in results:`, agronomusInResults ? agronomusInResults.title : 'NOT IN RESULTS');
  }
  
  // Enhanced debugging for health searches
  if (searchTerm.toLowerCase().includes('health') || searchTerm.toLowerCase().includes('medical') || 
      searchTerm.toLowerCase().includes('doctor') || searchTerm.toLowerCase().includes('wellness')) {
    console.log(`🏥 HEALTH SEARCH DEBUG - Found ${results.length} results for "${searchTerm}"`);
    console.log(`🔝 Top 10 results:`, results.slice(0, 10).map((t, i) => `${i+1}. ${t.title}`));
    
    // Check if key health tools are in the results
    const doctorGptInResults = results.find(tool => 
      tool.title.toLowerCase().includes('doctor gpt') || 
      tool.title.toLowerCase().includes('personalized dr. gpt')
    );
    const mentalWellnessInResults = results.find(tool => 
      tool.title.toLowerCase().includes('mental wellness gpt')
    );
    const dentalGptInResults = results.find(tool => 
      tool.title.toLowerCase().includes('dental gpt')
    );
    
    console.log(`🏥 Doctor GPT in results:`, doctorGptInResults ? doctorGptInResults.title : 'NOT IN RESULTS');
    console.log(`🧠 Mental Wellness GPT in results:`, mentalWellnessInResults ? mentalWellnessInResults.title : 'NOT IN RESULTS');
    console.log(`🦷 Dental GPT in results:`, dentalGptInResults ? dentalGptInResults.title : 'NOT IN RESULTS');
  }
  
  // Enhanced debugging for name searches
  if (searchTerm.toLowerCase().includes('name')) {
    console.log(`🏷️ NAME SEARCH DEBUG - Found ${results.length} results for "${searchTerm}"`);
    console.log(`🔝 Top 10 results:`, results.slice(0, 10).map((t, i) => `${i+1}. ${t.title}`));
    
    // Check if Name Insight tool is in the results
    const nameInsightInResults = results.find(tool => 
      tool.title.toLowerCase().includes('name insight') ||
      tool.directUrl?.includes('whatsmynamegpt')
    );
    console.log(`🏷️ Name Insight tool in results:`, nameInsightInResults ? nameInsightInResults.title : 'NOT IN RESULTS');
    
    // Show which tools matched for name searches
    console.log(`🏷️ All name-related tools that matched:`, results.filter(tool => 
      tool.title.toLowerCase().includes('name') || 
      tool.description.toLowerCase().includes('name')
    ).map(t => t.title));
  }
  
  // Enhanced debugging for different search types
  debugNameSearch(searchTerm, results);
  debugAppBuildingSearch(searchTerm, results);
  debugMusicSearch(searchTerm, results);
  debugPhoneAgentSearch(searchTerm, results);
  
  return results;
};
