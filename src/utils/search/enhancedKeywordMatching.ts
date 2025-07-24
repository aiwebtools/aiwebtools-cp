
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

// Enhanced keyword matching for specific tool categories including app building and agents
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  // Check all matching functions including app building and enhanced agents - CRITICAL FOR SEARCH BAR
  return matchAgents(tool, searchTerm) ||
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
         matchAppBuilding(tool, searchTerm);
};

export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  let totalScore = 0;
  
  // Add scores from all scoring functions including app building and enhanced agents - CRITICAL FOR RANKING
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
  
  return totalScore;
};
