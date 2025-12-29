import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { markFreeTools } from '@/utils/toolUtils';
import { applySpirtualTags } from '@/utils/spiritualTagging';

// Import AI Web Tools GPTs - PRIORITY FEATURED TOOLS
import { priorityFeaturedGPTs } from "./tools/aiWebTools/priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./tools/aiWebTools/secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./tools/aiWebTools/thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./tools/aiWebTools/fourthPriorityFeaturedGPTs";

// Import AI Web Tools GPT Collections
import { aiWebToolsGPTs } from "./tools/aiWebTools/aiWebToolsGPTs";
import { advancedSpecialtyGPTs } from "./tools/aiWebTools/advancedSpecialtyGPTs";
import { additionalSpecializedGPTs } from "./tools/aiWebTools/additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./tools/aiWebTools/finalSpecializedGPTs";
import { newSpecializedGPTs } from "./tools/aiWebTools/newSpecializedGPTs";

// Import AI Web Tools Category Collections
import { personalDevelopmentGPTs } from "./tools/aiWebTools/personalDevelopmentGPTs";
import { educationAndLearningGPTs } from "./tools/aiWebTools/educationAndLearningGPTs";
import { educationalToolsGPTs } from "./tools/aiWebTools/educationalToolsGPTs";
import { healthAndWellnessGPTs } from "./tools/aiWebTools/healthAndWellnessGPTs";
import { researchAndPharmaceuticalGPTs } from "./tools/aiWebTools/researchAndPharmaceuticalGPTs";
import { scienceAndResearchGPTs } from "./tools/aiWebTools/scienceAndResearchGPTs";
import { businessAndFinanceGPTs } from "./tools/aiWebTools/businessAndFinanceGPTs";
import { businessStrategyGPTs } from "./tools/aiWebTools/businessStrategyGPTs";
import { legalAndGovernmentGPTs } from "./tools/aiWebTools/legalAndGovernmentGPTs";
import { governmentCivicGPTs } from "./tools/aiWebTools/governmentCivicGPTs";
import { professionalServicesGPTs } from "./tools/aiWebTools/professionalServicesGPTs";
import { utilityAndProductivityGPTs } from "./tools/aiWebTools/utilityAndProductivityGPTs";
import { creativeAndMediaGPTs } from "./tools/aiWebTools/creativeAndMediaGPTs";
import { contentCreationToolsGPTs } from "./tools/aiWebTools/contentCreationToolsGPTs";
import { multimediaAndContentGPTs } from "./tools/aiWebTools/multimediaAndContentGPTs";
import { artAndCreativeGPTs } from "./tools/aiWebTools/artAndCreativeGPTs";
import { aiPromptingAndGenerationGPTs } from "./tools/aiWebTools/aiPromptingAndGenerationGPTs";
import { communicationAndEntertainmentGPTs } from "./tools/aiWebTools/communicationAndEntertainmentGPTs";
import { entertainmentAndGamingGPTs } from "./tools/aiWebTools/entertainmentAndGamingGPTs";
import { foodAndHospitalityGPTs } from "./tools/aiWebTools/foodAndHospitalityGPTs";
import { investigativeAndAnalysisGPTs } from "./tools/aiWebTools/investigativeAndAnalysisGPTs";
import { appraisalAndValuationGPTs } from "./tools/aiWebTools/appraisalAndValuationGPTs";
import { mysteriousAndUnusualGPTs } from "./tools/aiWebTools/mysteriousAndUnusualGPTs";
import { spiritualAndPhilosophyGPTs } from "./tools/aiWebTools/spiritualAndPhilosophyGPTs";
import { timeAndHistoryGPTs } from "./tools/aiWebTools/timeAndHistoryGPTs";
import { technologyInnovationGPTs } from "./tools/aiWebTools/technologyInnovationGPTs";
import { specializedNicheToolsGPTs } from "./tools/aiWebTools/specializedNicheToolsGPTs";

// PREVIOUSLY MISSING IMPORTS - NOW INCLUDED TO RAISE TOOL COUNT
import { customGeminiGems } from "./tools/aiWebTools/customGeminiGems";
import { inspectorAndSafetyGPTs } from "./tools/aiWebTools/inspectorAndSafetyGPTs";
import { philosophyAndLifestyleGPTs } from "./tools/aiWebTools/philosophyAndLifestyleGPTs";
import { videoPromptGPTs } from "./tools/aiWebTools/videoPromptGPTs";

import { newAffiliatePlatforms2025 } from "./tools/newAffiliatePlatforms2025";
import { newPersonalDevelopmentTools } from "./tools/newPersonalDevelopmentTools";

// Import WEB3 domains
import { web3DomainsTools } from "./tools/web3DomainsTools";

// Import SFX Generator Tools
import { sfxGeneratorTools } from "./tools/sfxGeneratorTools";

const allToolCategories = consolidateTools([
  ...getAllToolCategories(),
  ...newAffiliatePlatforms2025,
  ...newPersonalDevelopmentTools,
  ...web3DomainsTools,
  
  // Add the AI Web Tools GPT Collections
  ...priorityFeaturedGPTs,
  ...secondPriorityFeaturedGPTs,
  ...thirdPriorityFeaturedGPTs,
  ...fourthPriorityFeaturedGPTs,
  ...aiWebToolsGPTs,
  ...advancedSpecialtyGPTs,
  ...additionalSpecializedGPTs,
  ...finalSpecializedGPTs,
  ...newSpecializedGPTs,
  ...personalDevelopmentGPTs,
  ...educationAndLearningGPTs,
  ...educationalToolsGPTs,
  ...healthAndWellnessGPTs,
  ...researchAndPharmaceuticalGPTs,
  ...scienceAndResearchGPTs,
  ...businessAndFinanceGPTs,
  ...businessStrategyGPTs,
  ...legalAndGovernmentGPTs,
  ...governmentCivicGPTs,
  ...professionalServicesGPTs,
  ...utilityAndProductivityGPTs,
  ...creativeAndMediaGPTs,
  ...contentCreationToolsGPTs,
  ...multimediaAndContentGPTs,
  ...artAndCreativeGPTs,
  ...aiPromptingAndGenerationGPTs,
  ...communicationAndEntertainmentGPTs,
  ...entertainmentAndGamingGPTs,
  ...foodAndHospitalityGPTs,
  ...investigativeAndAnalysisGPTs,
  ...appraisalAndValuationGPTs,
  ...mysteriousAndUnusualGPTs,
  ...spiritualAndPhilosophyGPTs,
  ...timeAndHistoryGPTs,
  ...technologyInnovationGPTs,
  ...specializedNicheToolsGPTs,
  
  // PREVIOUSLY MISSING COLLECTIONS - NOW INCLUDED
  ...customGeminiGems,
  ...inspectorAndSafetyGPTs,
  ...philosophyAndLifestyleGPTs,
  ...videoPromptGPTs,
  
  // SFX Generator Tools
  ...sfxGeneratorTools
]);

// Apply deduplication to remove tools that appear in multiple categories
const deduplicatedTools = deduplicateTools(allToolCategories);

// Use deduplicatedTools directly (power ranking now handled in featured tools)
let combinedTools: Tool[] = [...deduplicatedTools];

// Apply specific fixes for known tools
combinedTools = combinedTools.map(tool => {
  if (tool.title === "Property Data Finder GPT") {
    return {
      ...tool,
      directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
      category: tool.category || "Real Estate & Property",
      description: tool.description || "Property Data Finder GPT by Ai Web Tools LLC delivers unparalleled, precise, and current information about properties."
    };
  }
  if (tool.title === "Manicheism GPT") {
    return { ...tool, imageUrl: "/images/manicheism-gpt-hero.png", isFree: true };
  }
  return tool;
});

// Remove duplicate Financial Calculator Pro entries
const filteredTools = combinedTools.filter(tool => {
  if (tool.title === 'Financial Calculator Pro') {
    return tool.category === 'Business & Productivity' && 
           tool.directUrl === 'https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools';
  }
  return true;
});

// Mark all AI Web Tools GPTs as free and apply spiritual/simulation tags
const toolsWithFreeFlags = markFreeTools(filteredTools);
const toolsWithTags = applySpirtualTags(toolsWithFreeFlags);

export const allTools: Tool[] = toolsWithTags;

// Use filtered tools for all exports
export const featuredTools: Tool[] = createFeaturedTools(filteredTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };
