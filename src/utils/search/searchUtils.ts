import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchPhoneAgents, scorePhoneAgents } from "./matching/phoneAgentMatching";
import { matchMusicTools, scoreMusicTools } from "./matching/musicMatching";
import { matchAppBuilding, scoreAppBuilding } from "./matching/appBuildingMatching";
import { matchSoundEffect, scoreSoundEffect } from "./matching/soundEffectMatching";
import { matchCannabis, scoreCannabis } from "./matching/cannabisMatching";
import { matchWebDevelopment, scoreWebDevelopment } from "./matching/webDevelopmentMatching";
import { 
  matchHealth, 
  scoreHealth,
  matchLearning,
  scoreLearning,
  matchMedical,
  scoreMedical,
  matchFarming,
  scoreFarming,
  matchTravel,
  scoreTravel
} from "./matching/specialtyMatching";
import { 
  matchPolitical, 
  scorePolitical 
} from "./matching/politicalMatching";
import { 
  matchEducation, 
  scoreEducation 
} from "./matching/educationMatching";
import { 
  matchFinancial, 
  scoreFinancial 
} from "./matching/financialMatching";
import { 
  createSearchResult, 
  getSearchWords, 
  performBasicSearch, 
  removeDuplicateTools,
  performIntelligentSearch
} from "./core/searchEngine";
import { matchNameInsightTool } from "./core/specialtyMatching";
import { fuzzyMatchTool, phoneticMatch } from "./core/fuzzyMatching";
import { predictUserIntent, enhanceSearchWithContext } from "./core/intelligentPrediction";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    console.log("🔍 Empty search term, returning all tools");
    return tools;
  }

  console.log(`🧠 INTELLIGENT search for: "${searchTerm}" across ${tools.length} tools`);
  
  // Get enhanced search terms
  const enhancedTerms = enhanceSearchWithContext(searchTerm);
  const phoneticMatches = phoneticMatch(searchTerm);
  const predictions = predictUserIntent(searchTerm, tools);
  
  console.log(`🎯 Enhanced terms:`, enhancedTerms);
  console.log(`🔤 Phonetic matches:`, phoneticMatches);
  console.log(`🔮 Predictions:`, predictions);
  
  const expandedKeywords = getExpandedKeywords(searchTerm);
  const searchWords = getSearchWords(searchTerm);
  
  // Remove duplicates by title before scoring
  const uniqueTools = removeDuplicateTools(tools);
  
  console.log(`🔧 Intelligent search through ${uniqueTools.length} unique tools`);
  
  const results = uniqueTools.map(tool => {
    let score = 0;
    let matched = false;
    
    // PRIORITY 1: Special name insight tool matching - HIGHEST PRIORITY
    const nameMatch = matchNameInsightTool(tool, searchTerm);
    if (nameMatch.matched) {
      matched = true;
      score += nameMatch.score;
      console.log(`🏷️ Name search match for "${tool.title}" with score: ${nameMatch.score}`);
    }
    
    // PRIORITY 2: Web Development specific matching - HIGHEST PRIORITY
    if (matchWebDevelopment(tool, searchTerm)) {
      matched = true;
      const webDevScore = scoreWebDevelopment(tool, searchTerm);
      score += webDevScore;
      console.log(`💻 Web Dev search match for "${tool.title}" with score: ${webDevScore}`);
    }
    
    // PRIORITY 3: Cannabis specific matching - HIGHEST PRIORITY
    if (matchCannabis(tool, searchTerm)) {
      matched = true;
      const cannabisScore = scoreCannabis(tool, searchTerm);
      score += cannabisScore;
      console.log(`🌿 Cannabis search match for "${tool.title}" with score: ${cannabisScore}`);
    }
    
    // PRIORITY 4: Sound effect specific matching - HIGHEST PRIORITY
    if (matchSoundEffect(tool, searchTerm)) {
      matched = true;
      const soundEffectScore = scoreSoundEffect(tool, searchTerm);
      score += soundEffectScore;
      console.log(`🔊 Sound effect search match for "${tool.title}" with score: ${soundEffectScore}`);
    }
    
    // PRIORITY 5: Enhanced fuzzy matching for misspellings
    const fuzzyResult = fuzzyMatchTool(tool, searchTerm);
    if (fuzzyResult.matched) {
      matched = true;
      score += fuzzyResult.score;
      console.log(`🎯 Fuzzy match for "${tool.title}" with score: ${fuzzyResult.score}`);
    }
    
    // PRIORITY 6: Phonetic matching for sound-alike words
    for (const phoneticTerm of phoneticMatches) {
      const searchableText = [
        tool.title,
        tool.description,
        tool.category,
        ...(tool.tags || [])
      ].join(' ').toLowerCase();
      
      if (searchableText.includes(phoneticTerm.toLowerCase())) {
        matched = true;
        score += 4000;
        console.log(`🔤 Phonetic match for "${tool.title}" with term: ${phoneticTerm}`);
      }
    }
    
    // PRIORITY 7: Prediction-based matching
    for (const prediction of predictions) {
      const searchableText = [
        tool.title,
        tool.description,
        tool.category,
        ...(tool.tags || [])
      ].join(' ').toLowerCase();
      
      if (searchableText.includes(prediction.toLowerCase())) {
        matched = true;
        score += 3500;
        console.log(`🔮 Prediction match for "${tool.title}" with prediction: ${prediction}`);
      }
    }
    
    // PRIORITY 8: Education specific matching - HIGH PRIORITY
    if (matchEducation(tool, searchTerm)) {
      matched = true;
      const educationScore = scoreEducation(tool, searchTerm);
      score += educationScore;
      console.log(`🎓 Education search match for "${tool.title}" with score: ${educationScore}`);
    }
    
    // PRIORITY 9: Financial specific matching - HIGH PRIORITY
    if (matchFinancial(tool, searchTerm)) {
      matched = true;
      const financialScore = scoreFinancial(tool, searchTerm);
      score += financialScore;
      console.log(`💰 Financial search match for "${tool.title}" with score: ${financialScore}`);
    }
    
    // PRIORITY 10: Travel specific matching
    if (matchTravel(tool, searchTerm)) {
      matched = true;
      const travelScore = scoreTravel(tool, searchTerm);
      score += travelScore;
      console.log(`✈️ Travel search match for "${tool.title}" with score: ${travelScore}`);
    }
    
    if (matchFarming(tool, searchTerm)) {
      matched = true;
      score += scoreFarming(tool, searchTerm);
    }
    
    if (matchHealth(tool, searchTerm)) {
      matched = true;
      score += scoreHealth(tool, searchTerm);
    }
    
    if (matchMedical(tool, searchTerm)) {
      matched = true;
      score += scoreMedical(tool, searchTerm);
    }
    
    if (matchLearning(tool, searchTerm)) {
      matched = true;
      score += scoreLearning(tool, searchTerm);
    }
    
    if (matchAppBuilding(tool, searchTerm)) {
      matched = true;
      score += scoreAppBuilding(tool, searchTerm);
    }
    
    if (matchMusicTools(tool, searchTerm)) {
      matched = true;
      score += scoreMusicTools(tool, searchTerm);
    }
    
    if (matchPhoneAgents(tool, searchTerm)) {
      matched = true;
      score += scorePhoneAgents(tool, searchTerm);
    }
    
    if (matchAgents(tool, searchTerm)) {
      matched = true;
      score += scoreAgents(tool, searchTerm);
    }
    
    // PRIORITY 11: Enhanced basic search with all intelligent features
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

  console.log(`✅ Intelligent search found ${results.length} results for "${searchTerm}"`);
  
  // Enhanced debugging with intelligence info
  if (results.length > 0) {
    console.log(`🎯 Top 5 intelligent results:`, results.slice(0, 5).map((t, i) => `${i+1}. ${t.title}`));
  }
  
  return results;
};
