import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./priorityFeaturedGPTs";
import { appraisalAndValuationGPTs } from "./appraisalAndValuationGPTs";
import { healthAndWellnessGPTs } from "./healthAndWellnessGPTs";
import { businessAndFinanceGPTs } from "./businessAndFinanceGPTs";
import { educationAndLearningGPTs } from "./educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./creativeAndMediaGPTs";
import { timeAndHistoryGPTs } from "./timeAndHistoryGPTs";
import { spiritualAndPhilosophyGPTs } from "./spiritualAndPhilosophyGPTs";
import { scienceAndResearchGPTs } from "./scienceAndResearchGPTs";
import { legalAndGovernmentGPTs } from "./legalAndGovernmentGPTs";
import { professionalServicesGPTs } from "./professionalServicesGPTs";
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

// Combine all AI Web Tools GPTs from organized categories - PRIORITY TOOLS FIRST
export const aiWebToolsGPTs: Tool[] = [
  ...priorityFeaturedGPTs, // Put the 10 priority tools at the very beginning
  ...appraisalAndValuationGPTs,
  ...healthAndWellnessGPTs,
  ...businessAndFinanceGPTs,
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...timeAndHistoryGPTs,
  ...spiritualAndPhilosophyGPTs,
  ...scienceAndResearchGPTs,
  ...legalAndGovernmentGPTs,
  ...professionalServicesGPTs,
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
  // Additional GPTs will be added here as new category files are created
];

// Log the total count for debugging
console.log(`🚀 Total AI Web Tools GPTs loaded: ${aiWebToolsGPTs.length}`);
console.log(`📋 Priority Featured GPTs: ${priorityFeaturedGPTs.length}`);
console.log(`🎯 First 10 GPT titles:`, aiWebToolsGPTs.slice(0, 10).map(tool => tool.title));
