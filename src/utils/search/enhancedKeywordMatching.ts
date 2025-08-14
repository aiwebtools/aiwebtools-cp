
import { Tool } from "@/types/tools";
import { 
  matchAgents, scoreAgents 
} from "./matching/agentMatching";
import { 
  matchCodingAgents, scoreCodingAgents 
} from "./matching/codingMatching";
import { 
  matchWebDesign, scoreWebDesign, matchTextToWebsite, scoreTextToWebsite 
} from "./matching/webDesignMatching";
import { 
  matchCompanionTools, scoreCompanionTools 
} from "./matching/companionMatching";
import { 
  matchTextToVideo, scoreTextToVideo 
} from "./matching/videoMatching";
import { 
  matchFarming, scoreFarming,
  matchHealth, scoreHealth,
  matchLearning, scoreLearning,
  matchMedical, scoreMedical,
  matchTravel, scoreTravel 
} from "./matching/specialtyMatching";
import { 
  matchEducation, scoreEducation 
} from "./matching/educationMatching";
import { 
  matchBookWriting, scoreBookWriting 
} from "./matching/bookWritingMatching";
import { 
  matchPolitical, scorePolitical 
} from "./matching/politicalMatching";
import { 
  matchAppBuilding, scoreAppBuilding 
} from "./matching/appBuildingMatching";
import { 
  matchVideoGeneration, scoreVideoGeneration 
} from "./matching/videoGenerationMatching";
import { 
  matchChatAssistant, scoreChatAssistant 
} from "./matching/chatAssistantMatching";
import { 
  matchNewAITools, scoreNewAITools 
} from "./matching/newAIToolsMatching";
import { 
  matchGameTools, scoreGameTools 
} from "./matching/gameMatching";

// Enhanced keyword matching for specific tool categories including video generation and chat assistants
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || "";
  
  // PRIORITY: AI Web Tools GPTs always get enhanced matching
  if (tool.directUrl?.includes('aiwebtools') || tool.tags?.includes('aiwebtools')) {
    // Enhanced matching for AI Web Tools
    if (lowerTitle.includes(lowerSearchTerm) || 
        lowerDescription.includes(lowerSearchTerm) ||
        lowerCategory.includes(lowerSearchTerm)) {
      return true;
    }
  }
  
  // NEW TOOLS CATEGORY MATCHING
  // Major AI platforms and companies
  const aiPlatforms = ['chatgpt', 'claude', 'gemini', 'perplexity', 'poe', 'runway', 'elevenlabs', 'leonardo', 'synthesia', 'luma'];
  if (aiPlatforms.some(platform => lowerSearchTerm.includes(platform) && (lowerTitle.includes(platform) || lowerDescription.includes(platform)))) {
    return true;
  }
  
  // Check all matching functions with AI Web Tools prioritization - CRITICAL FOR SEARCH BAR
  return matchNewAITools(tool, searchTerm) ||
         matchGameTools(tool, searchTerm) ||
         matchAgents(tool, searchTerm) ||
         matchCodingAgents(tool, searchTerm) ||
         matchWebDesign(tool, searchTerm) ||
         matchTextToWebsite(tool, searchTerm) ||
         matchCompanionTools(tool, searchTerm) ||
         matchTextToVideo(tool, searchTerm) ||
         matchFarming(tool, searchTerm) ||
         matchHealth(tool, searchTerm) ||
         matchLearning(tool, searchTerm) ||
         matchMedical(tool, searchTerm) ||
         matchTravel(tool, searchTerm) ||
         matchPolitical(tool, searchTerm) ||
         matchEducation(tool, searchTerm) ||
         matchBookWriting(tool, searchTerm) ||
         matchAppBuilding(tool, searchTerm) ||
         matchVideoGeneration(tool, searchTerm) ||
         matchChatAssistant(tool, searchTerm);
};

export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  let totalScore = 0;
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || "";
  const lowerTags = (tool.tags || []).join(' ').toLowerCase();
  
  // SPECIAL CATEGORY SCORING BOOSTS
  
  // AI Web Tools GPTs get highest priority boost
  if (tool.directUrl?.includes('aiwebtools') || tool.tags?.includes('aiwebtools')) {
    totalScore += 5000;
    
    // Additional boosts for specific AI Web Tools categories
    if (lowerCategory.includes('health') || lowerCategory.includes('wellness')) {
      totalScore += scoreHealth(tool, searchTerm) * 2;
    }
    if (lowerCategory.includes('business') || lowerCategory.includes('finance')) {
      totalScore += scoreAppBuilding(tool, searchTerm) * 2;
    }
    if (lowerCategory.includes('creative') || lowerCategory.includes('media')) {
      totalScore += scoreVideoGeneration(tool, searchTerm) * 2;
    }
    if (lowerCategory.includes('education') || lowerCategory.includes('learning')) {
      totalScore += scoreEducation(tool, searchTerm) * 2;
    }
  }
  
  // Real AI companies and platforms get medium priority
  const realAICompanies = ['openai', 'anthropic', 'google', 'microsoft', 'meta', 'runway', 'elevenlabs', 'jasper', 'notion', 'grammarly'];
  if (realAICompanies.some(company => lowerTitle.includes(company) || lowerDescription.includes(company))) {
    totalScore += 3000;
  }
   
  // Add scores from all scoring functions with AI Web Tools prioritization - CRITICAL FOR RANKING
  totalScore += scoreNewAITools(tool, searchTerm);
  totalScore += scoreGameTools(tool, searchTerm);
  totalScore += scoreAgents(tool, searchTerm);
  totalScore += scoreCodingAgents(tool, searchTerm);
  totalScore += scoreWebDesign(tool, searchTerm);
  totalScore += scoreTextToWebsite(tool, searchTerm);
  totalScore += scoreCompanionTools(tool, searchTerm);
  totalScore += scoreTextToVideo(tool, searchTerm);
  totalScore += scoreFarming(tool, searchTerm);
  totalScore += scoreHealth(tool, searchTerm);
  totalScore += scoreLearning(tool, searchTerm);
  totalScore += scoreMedical(tool, searchTerm);
  totalScore += scoreTravel(tool, searchTerm);
  totalScore += scorePolitical(tool, searchTerm);
  totalScore += scoreEducation(tool, searchTerm);
  totalScore += scoreBookWriting(tool, searchTerm);
  totalScore += scoreAppBuilding(tool, searchTerm);
  totalScore += scoreVideoGeneration(tool, searchTerm);
  totalScore += scoreChatAssistant(tool, searchTerm);
  
  return totalScore;
};
