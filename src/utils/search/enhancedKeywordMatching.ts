
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
  matchPolitical, scorePolitical 
} from "./matching/politicalMatching";

// Enhanced keyword matching for specific tool categories
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  // Check all matching functions including travel and political
  return matchAgents(tool, searchTerm) ||
         matchCodingAgents(tool, searchTerm) ||
         matchWebDesign(tool, searchTerm) ||
         matchTextToWebsite(tool, searchTerm) ||
         matchTextToVideo(tool, searchTerm) ||
         matchFarming(tool, searchTerm) ||
         matchHealth(tool, searchTerm) ||
         matchLearning(tool, searchTerm) ||
         matchMedical(tool, searchTerm) ||
         matchTravel(tool, searchTerm) ||
         matchPolitical(tool, searchTerm);
};

export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  let totalScore = 0;
  
  // Add scores from all scoring functions including travel and political
  totalScore += scoreAgents(tool, searchTerm);
  totalScore += scoreCodingAgents(tool, searchTerm);
  totalScore += scoreWebDesign(tool, searchTerm);
  totalScore += scoreTextToWebsite(tool, searchTerm);
  totalScore += scoreTextToVideo(tool, searchTerm);
  totalScore += scoreFarming(tool, searchTerm);
  totalScore += scoreHealth(tool, searchTerm);
  totalScore += scoreLearning(tool, searchTerm);
  totalScore += scoreMedical(tool, searchTerm);
  totalScore += scoreTravel(tool, searchTerm);
  totalScore += scorePolitical(tool, searchTerm);
  
  return totalScore;
};
