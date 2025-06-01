
import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./aiWebTools/priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./aiWebTools/secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./aiWebTools/thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./aiWebTools/fourthPriorityFeaturedGPTs";
import { timeAndHistoryGPTs } from "./aiWebTools/timeAndHistoryGPTs";
import { businessAndFinanceGPTs } from "./aiWebTools/businessAndFinanceGPTs";
import { professionalServicesGPTs } from "./aiWebTools/professionalServicesGPTs";
import { healthAndWellnessGPTs } from "./aiWebTools/healthAndWellnessGPTs";
import { legalAndGovernmentGPTs } from "./aiWebTools/legalAndGovernmentGPTs";
import { appraisalAndValuationGPTs } from "./aiWebTools/appraisalAndValuationGPTs";
import { educationAndLearningGPTs } from "./aiWebTools/educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./aiWebTools/entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./aiWebTools/creativeAndMediaGPTs";
import { scienceAndResearchGPTs } from "./aiWebTools/scienceAndResearchGPTs";
import { multimediaAndContentGPTs } from "./aiWebTools/multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./aiWebTools/mysteriousAndUnusualGPTs";
import { utilityAndProductivityGPTs } from "./aiWebTools/utilityAndProductivityGPTs";
import { philosophyAndLifestyleGPTs } from "./aiWebTools/philosophyAndLifestyleGPTs";
import { foodAndHospitalityGPTs } from "./aiWebTools/foodAndHospitalityGPTs";
import { aiPromptingAndGenerationGPTs } from "./aiWebTools/aiPromptingAndGenerationGPTs";
import { researchAndPharmaceuticalGPTs } from "./aiWebTools/researchAndPharmaceuticalGPTs";
import { educationalToolsGPTs } from "./aiWebTools/educationalToolsGPTs";
import { specializedNicheToolsGPTs } from "./aiWebTools/specializedNicheToolsGPTs";
import { businessStrategyGPTs } from "./aiWebTools/businessStrategyGPTs";
import { contentCreationToolsGPTs } from "./aiWebTools/contentCreationToolsGPTs";
import { additionalSpecializedGPTs } from "./aiWebTools/additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./aiWebTools/finalSpecializedGPTs";
import { investigativeAndAnalysisGPTs } from "./aiWebTools/investigativeAndAnalysisGPTs";
import { artAndCreativeGPTs } from "./aiWebTools/artAndCreativeGPTs";
import { personalDevelopmentGPTs } from "./aiWebTools/personalDevelopmentGPTs";
import { communicationAndEntertainmentGPTs } from "./aiWebTools/communicationAndEntertainmentGPTs";
import { advancedSpecialtyGPTs } from "./aiWebTools/advancedSpecialtyGPTs";
import { governmentCivicGPTs } from "./aiWebTools/governmentCivicGPTs";
import { technologyInnovationGPTs } from "./aiWebTools/technologyInnovationGPTs";
import { spiritualAndPhilosophyGPTs } from "./aiWebTools/spiritualAndPhilosophyGPTs";

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
