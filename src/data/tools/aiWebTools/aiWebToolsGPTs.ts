
import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./fourthPriorityFeaturedGPTs";
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
import { newSpecializedGPTs } from "./newSpecializedGPTs";
import { customGeminiGems } from "./customGeminiGems";
import { videoPromptGPTs } from "./videoPromptGPTs";
import { aiHumanBillOfRightsGPT } from "./aiHumanBillOfRightsGPT";

// Combine all AI Web Tools GPTs from organized categories - PRIORITY TOOLS FIRST
export const aiWebToolsGPTs: Tool[] = [
  ...aiHumanBillOfRightsGPT, // AI HUMAN BILL OF RIGHTS — featured at top
  ...videoPromptGPTs, // Meta.ai Video Prompt Generator at the top
  ...priorityFeaturedGPTs, // Put the first 10 priority tools at the very beginning
  ...secondPriorityFeaturedGPTs, // Add the second set of 13 priority tools
  ...thirdPriorityFeaturedGPTs, // Add the third set of 10 priority tools
  ...fourthPriorityFeaturedGPTs, // Add the fourth set of 12 priority tools
  ...appraisalAndValuationGPTs,
  ...healthAndWellnessGPTs,
  ...businessAndFinanceGPTs,
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs, // This includes our new AD Maker GPT
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
  ...newSpecializedGPTs, // Add the new tools here too
  ...customGeminiGems, // Custom Gemini gem tools
  // Additional GPTs will be added here as new category files are created
];

// Log the total count for debugging
console.log(`🚀 Total AI Web Tools GPTs loaded: ${aiWebToolsGPTs.length}`);
console.log(`📋 Priority Featured GPTs: ${priorityFeaturedGPTs.length}`);
console.log(`📋 Second Priority Featured GPTs: ${secondPriorityFeaturedGPTs.length}`);
console.log(`📋 Third Priority Featured GPTs: ${thirdPriorityFeaturedGPTs.length}`);
console.log(`📋 Fourth Priority Featured GPTs: ${fourthPriorityFeaturedGPTs.length}`);
console.log(`🎯 First 20 GPT titles:`, aiWebToolsGPTs.slice(0, 20).map(tool => tool.title));
console.log(`🔍 Recently added tools verification complete`);
