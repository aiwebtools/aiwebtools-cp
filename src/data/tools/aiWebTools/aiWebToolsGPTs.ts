
import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./fourthPriorityFeaturedGPTs";
import { timeAndHistoryGPTs } from "./timeAndHistoryGPTs";
import { businessAndFinanceGPTs } from "./businessAndFinanceGPTs";
import { professionalServicesGPTs } from "./professionalServicesGPTs";
import { healthAndWellnessGPTs } from "./healthAndWellnessGPTs";
import { legalAndGovernmentGPTs } from "./legalAndGovernmentGPTs";
import { appraisalAndValuationGPTs } from "./appraisalAndValuationGPTs";
import { educationAndLearningGPTs } from "./educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./creativeAndMediaGPTs";
import { scienceAndResearchGPTs } from "./scienceAndResearchGPTs";
import { multimediaAndContentGPTs } from "./multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./mysteriousAndUnusualGPTs";
import { utilityAndProductivityGPTs } from "./utilityAndProductivityGPTs";
import { philosophyAndLifestyleGPTs } from "./philosophyAndLifestyleGPTs";
import { foodAndHospitalityGPTs } from "./foodAndHospitalityGPTs";
import { aiPromptingAndGenerationGPTs } from "./aiPromptingAndGenerationGPTs";
import { researchAndPharmaceuticalGPTs } from "./researchAndPharmaceuticalGPTs";
import { educationalToolsGPTs } from "./educationalToolsGPTs";
import { specializedNicheToolsGPTs } from "./specializedNicheToolsGPTs";
import { businessStrategyGPTs } from "./businessStrategyGPTs";
import { contentCreationToolsGPTs } from "./contentCreationToolsGPTs";
import { additionalSpecializedGPTs } from "./additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./finalSpecializedGPTs";
import { investigativeAndAnalysisGPTs } from "./investigativeAndAnalysisGPTs";
import { artAndCreativeGPTs } from "./artAndCreativeGPTs";
import { personalDevelopmentGPTs } from "./personalDevelopmentGPTs";
import { communicationAndEntertainmentGPTs } from "./communicationAndEntertainmentGPTs";
import { advancedSpecialtyGPTs } from "./advancedSpecialtyGPTs";
import { governmentCivicGPTs } from "./governmentCivicGPTs";
import { technologyInnovationGPTs } from "./technologyInnovationGPTs";
import { spiritualAndPhilosophyGPTs } from "./spiritualAndPhilosophyGPTs";

// Combine all AI Web Tools GPTs from organized categories - REORGANIZED ORDER
export const aiWebToolsGPTs: Tool[] = [
  ...priorityFeaturedGPTs, // Put the first 10 priority tools at the very beginning
  ...secondPriorityFeaturedGPTs, // Add the second set of 13 priority tools
  ...thirdPriorityFeaturedGPTs, // Add the third set of 10 priority tools
  ...fourthPriorityFeaturedGPTs, // Add the fourth set of 12 priority tools
  
  // TIME-BASED TOOLS AT THE TOP (as requested)
  ...timeAndHistoryGPTs,
  
  // INDUSTRY-SPECIFIC SOLUTIONS TOWARDS THE TOP (as requested)
  ...businessAndFinanceGPTs,
  ...professionalServicesGPTs,
  ...healthAndWellnessGPTs,
  ...legalAndGovernmentGPTs,
  ...appraisalAndValuationGPTs,
  
  // CORE FUNCTIONAL CATEGORIES
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...scienceAndResearchGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  ...utilityAndProductivityGPTs,
  ...philosophyAndLifestyleGPTs,
  ...foodAndHospitalityGPTs,
  ...aiPromptingAndGenerationGPTs,
  ...researchAndPharmaceuticalGPTs,
  ...educationalToolsGPTs,
  ...specializedNicheToolsGPTs,
  ...businessStrategyGPTs,
  ...contentCreationToolsGPTs,
  ...additionalSpecializedGPTs,
  ...finalSpecializedGPTs,
  ...investigativeAndAnalysisGPTs,
  ...artAndCreativeGPTs,
  ...personalDevelopmentGPTs,
  ...communicationAndEntertainmentGPTs,
  ...advancedSpecialtyGPTs,
  ...governmentCivicGPTs,
  ...technologyInnovationGPTs,
  
  // MOVED SPIRITUALITY TO THE BOTTOM (as requested)
  ...spiritualAndPhilosophyGPTs,
  
  // Additional GPTs will be added here as new category files are created
];

// Log the total count for debugging
console.log(`🚀 Total AI Web Tools GPTs loaded: ${aiWebToolsGPTs.length}`);
console.log(`📋 Priority Featured GPTs: ${priorityFeaturedGPTs.length}`);
console.log(`📋 Second Priority Featured GPTs: ${secondPriorityFeaturedGPTs.length}`);
console.log(`📋 Third Priority Featured GPTs: ${thirdPriorityFeaturedGPTs.length}`);
console.log(`📋 Fourth Priority Featured GPTs: ${fourthPriorityFeaturedGPTs.length}`);
console.log(`🎯 First 20 GPT titles:`, aiWebToolsGPTs.slice(0, 20).map(tool => tool.title));
console.log(`🔍 Recently reorganized order - Time-based and Industry-specific tools prioritized`);
