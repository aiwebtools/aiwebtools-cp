
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
  matchHistory, matchLearning, matchMedical, 
  scoreHistory, scoreLearning, scoreMedical 
} from "./matching/specialtyMatching";

// Enhanced keyword matching for specific tool categories
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  // Check all matching functions
  return matchAgents(tool, searchTerm) ||
         matchCodingAgents(tool, searchTerm) ||
         matchWebDesign(tool, searchTerm) ||
         matchTextToWebsite(tool, searchTerm) ||
         matchTextToVideo(tool, searchTerm) ||
         matchHistory(tool, searchTerm) ||
         matchLearning(tool, searchTerm) ||
         matchMedical(tool, searchTerm);
};

export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  let totalScore = 0;
  
  // Add scores from all scoring functions
  totalScore += scoreAgents(tool, searchTerm);
  totalScore += scoreCodingAgents(tool, searchTerm);
  totalScore += scoreWebDesign(tool, searchTerm);
  totalScore += scoreTextToWebsite(tool, searchTerm);
  totalScore += scoreTextToVideo(tool, searchTerm);
  totalScore += scoreHistory(tool, searchTerm);
  totalScore += scoreLearning(tool, searchTerm);
  totalScore += scoreMedical(tool, searchTerm);
  
  return totalScore;
};
