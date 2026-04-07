import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { markFreeTools } from '@/utils/toolUtils';
import { applySpirtualTags } from '@/utils/spiritualTagging';

// Import ONLY tools that are NOT already in toolsCollection.ts
import { newAffiliatePlatforms2025 } from "./tools/newAffiliatePlatforms2025";
import { newPersonalDevelopmentTools } from "./tools/newPersonalDevelopmentTools";
import { sfxGeneratorTools } from "./tools/sfxGeneratorTools";
import { emergingAITools2025 } from "./tools/emergingAITools2025";
import { healthcareAITools2025 } from "./tools/healthcareAITools2025";
import { healthcareAITools2025Batch2 } from "./tools/healthcareAITools2025Batch2";
import { emailProductivityTools2025 } from "./tools/emailProductivityTools2025";
import { threeDModelingTools2025 } from "./tools/threeDModelingTools2025";
import { aiAgents2025 } from "./tools/aiAgents2025";
import { aiAgents2025Batch2 } from "./tools/aiAgents2025Batch2";
import { lifestyleTools2025 } from "./tools/lifestyleTools2025";
import { multiCategoryTools2025 } from "./tools/multiCategoryTools2025";
import { imageTranslationStorytelling2025 } from "./tools/imageTranslationStorytelling2025";
import { marketingTranscriberStorytelling2025 } from "./tools/marketingTranscriberStorytelling2025";
import { verifiedToolsBatch2025 } from "./tools/verifiedToolsBatch2025";
import { missingToolsBatch2025 } from "./tools/missingToolsBatch2025";
import { auditBatch2025Q2Tools } from "./tools/auditBatch2025Q2";
import { auditBatch2025Q2Part2Tools } from "./tools/auditBatch2025Q2Part2";
import { auditBatch2025Q2Part3 } from "./tools/auditBatch2025Q2Part3";
import { auditBatch2025Q2Part4Tools } from "./tools/auditBatch2025Q2Part4";
import { auditBatch2025Q2Part5Tools } from "./tools/auditBatch2025Q2Part5";
import { auditBatch2025Q2Part6Tools } from "./tools/auditBatch2025Q2Part6";
import { auditBatch2025Q2Part7Tools } from "./tools/auditBatch2025Q2Part7";
import { auditBatch2025Q2Part8Tools } from "./tools/auditBatch2025Q2Part8";
import { auditBatch2025Q2Part9Tools } from "./tools/auditBatch2025Q2Part9";
import { auditBatch2025Q2Part10Tools } from "./tools/auditBatch2025Q2Part10";
import { auditBatch2025Q2Part11Tools } from "./tools/auditBatch2025Q2Part11";
import { auditBatch2025Q2Part12Tools } from "./tools/auditBatch2025Q2Part12";
import { auditBatch2025Q2Part13Tools } from "./tools/auditBatch2025Q2Part13";
import { auditBatch2025Q2Part14Tools } from "./tools/auditBatch2025Q2Part14";
import { auditBatch2025Q2Part15Tools } from "./tools/auditBatch2025Q2Part15";
import { futureToolsBatch2025Q2 } from "./tools/futureToolsBatch2025Q2";
import { trendingToolsBatch2025 } from "./tools/trendingToolsBatch2025";
import { topAgentPlatforms2026 } from "./tools/topAgentPlatforms2026";
import { topAgentPlatforms2026Batch2 } from "./tools/topAgentPlatforms2026Batch2";
import { newAIAgents2026 } from "./tools/newAIAgents2026";
import { enterpriseAgents2026 } from "./tools/enterpriseAgents2026";
import { advancedAgentsBatch2026 } from "./tools/advancedAgentsBatch2026";
import { frontierAgentsBatch2026 } from "./tools/frontierAgentsBatch2026";
import { frontierInfraBatch2026 } from "./tools/frontierInfraBatch2026";
import { frontierInfraBatch2026B2 } from "./tools/frontierInfraBatch2026B2";
import { frontierInfraBatch2026B3 } from "./tools/frontierInfraBatch2026B3";
import { frontierInfraBatch2026C1 } from "./tools/frontierInfraBatch2026C1";
import { frontierInfraBatch2026C2 } from "./tools/frontierInfraBatch2026C2";
import { frontierInfraBatch2026C3 } from "./tools/frontierInfraBatch2026C3";
import { frontierInfraBatch2026C4 } from "./tools/frontierInfraBatch2026C4";
import { frontierBatchD1 } from "./tools/frontierBatchD1";
import { frontierBatchD2 } from "./tools/frontierBatchD2";
import { frontierBatchD3 } from "./tools/frontierBatchD3";
import { frontierBatchD4 } from "./tools/frontierBatchD4";
import { frontierBatchE1 } from "./tools/frontierBatchE1";
import { frontierBatchE2 } from "./tools/frontierBatchE2";
import { videoToolsBatch2026 } from "./tools/videoToolsBatch2026";
import { specializedAgentsBatch2026 } from "./tools/specializedAgentsBatch2026";
import { voiceAgentsBatch2026 } from "./tools/voiceAgentsBatch2026";
import { productivityAgentsBatch2026 } from "./tools/productivityAgentsBatch2026";
import { digitalHumansBatch2026 } from "./tools/digitalHumansBatch2026";
import { enterpriseOrchBatch2026 } from "./tools/enterpriseOrchBatch2026";
import { phoneAgentsBatch2026 } from "./tools/phoneAgentsBatch2026";
import { roboticsBatch2026 } from "./tools/roboticsBatch2026";
import { nicheBatch2026 } from "./tools/nicheBatch2026";
import { nicheSpecialty2026B1 } from "./tools/nicheSpecialty2026B1";
import { nicheSpecialty2026B2 } from "./tools/nicheSpecialty2026B2";
import { toolifyBatch2026 } from "./tools/toolifyBatch2026";
import { toolifyBatch2026B2 } from "./tools/toolifyBatch2026B2";
import { toolifyBatch2026B3 } from "./tools/toolifyBatch2026B3";
import { toolifyBatch2026B4 } from "./tools/toolifyBatch2026B4";
import { toolifyBatch2026B5 } from "./tools/toolifyBatch2026B5";
import { toolifyBatch2026B6 } from "./tools/toolifyBatch2026B6";
import { toolifyBatch2026B7 } from "./tools/toolifyBatch2026B7";
import { toolifyBatch2026B8 } from "./tools/toolifyBatch2026B8";
import { toolifyBatch2026B9 } from "./tools/toolifyBatch2026B9";
import { toolifyBatch2026B10 } from "./tools/toolifyBatch2026B10";
import { toolifyBatch2026B11 } from "./tools/toolifyBatch2026B11";
import { toolifyBatch2026B12 } from "./tools/toolifyBatch2026B12";
import { toolifyBatch2026B13 } from "./tools/toolifyBatch2026B13";
import { toolifyBatch2026B14 } from "./tools/toolifyBatch2026B14";
import { toolifyBatch2026B15 } from "./tools/toolifyBatch2026B15";
import { toolifyBatch2026B16 } from "./tools/toolifyBatch2026B16";
import { toolifyBatch2026B17 } from "./tools/toolifyBatch2026B17";
import { toolifyBatch2026B18 } from "./tools/toolifyBatch2026B18";
import { toolifyBatch2026B19 } from "./tools/toolifyBatch2026B19";
import { toolifyBatch2026B20 } from "./tools/toolifyBatch2026B20";
import { toolifyBatch2026B21 } from "./tools/toolifyBatch2026B21";
import { apocalypseSurvivalBatch2026 } from "./tools/apocalypseSurvivalBatch2026";
import { hotNewBatch2026March } from "./tools/hotNewBatch2026March";
import { apocalypseSurvivalBatch2026B2 } from "./tools/apocalypseSurvivalBatch2026B2";
import { researchedToolsBatch2026 } from "./tools/researchedToolsBatch2026";
import { newVerifiedBatch2026 } from "./tools/newVerifiedBatch2026";
import { medicusGPT } from "./tools/medicusGPT";
import { hormuzCrisisGPT } from "./tools/hormuzCrisisGPT";
import { gameVR3DBatch2026 } from "./tools/gameVR3DBatch2026";
import { robotSafetyGPTs2026 } from "./tools/robotSafetyGPTs2026";
import { preparednessAndScholarsBatch2026 } from "./tools/preparednessAndScholarsBatch2026";
import { civicTransparencyBatch2026 } from "./tools/civicTransparencyBatch2026";
import { mustHaveToolsBatch2026 } from "./tools/mustHaveToolsBatch2026";
import { agentsAndCreatorsBatch2026 } from "./tools/agentsAndCreatorsBatch2026";

// Consolidate ALL tools from toolsCollection + additional batches not in toolsCollection
const allToolCategories = consolidateTools([
  // Base collection (toolsCollection.ts has ALL GPT collections + core tool categories)
  ...getAllToolCategories(),

  // Additional batches only in toolsData.ts
  ...newAffiliatePlatforms2025,
  ...newPersonalDevelopmentTools,
  ...sfxGeneratorTools,
  ...emergingAITools2025,
  ...healthcareAITools2025,
  ...healthcareAITools2025Batch2,
  ...emailProductivityTools2025,
  ...threeDModelingTools2025,
  ...aiAgents2025,
  ...aiAgents2025Batch2,
  ...lifestyleTools2025,
  ...multiCategoryTools2025,
  ...imageTranslationStorytelling2025,
  ...marketingTranscriberStorytelling2025,
  ...verifiedToolsBatch2025,
  ...missingToolsBatch2025,
  ...auditBatch2025Q2Tools,
  ...auditBatch2025Q2Part2Tools,
  ...auditBatch2025Q2Part3,
  ...auditBatch2025Q2Part4Tools,
  ...auditBatch2025Q2Part5Tools,
  ...auditBatch2025Q2Part6Tools,
  ...auditBatch2025Q2Part7Tools,
  ...auditBatch2025Q2Part8Tools,
  ...auditBatch2025Q2Part9Tools,
  ...auditBatch2025Q2Part10Tools,
  ...auditBatch2025Q2Part11Tools,
  ...auditBatch2025Q2Part12Tools,
  ...auditBatch2025Q2Part13Tools,
  ...auditBatch2025Q2Part14Tools,
  ...auditBatch2025Q2Part15Tools,
  ...futureToolsBatch2025Q2,
  ...trendingToolsBatch2025,
  ...topAgentPlatforms2026,
  ...topAgentPlatforms2026Batch2,
  ...newAIAgents2026,
  ...enterpriseAgents2026,
  ...advancedAgentsBatch2026,
  ...frontierAgentsBatch2026,
  ...frontierInfraBatch2026,
  ...frontierInfraBatch2026B2,
  ...frontierInfraBatch2026B3,
  ...frontierInfraBatch2026C1,
  ...frontierInfraBatch2026C2,
  ...frontierInfraBatch2026C3,
  ...frontierInfraBatch2026C4,
  ...frontierBatchD1,
  ...frontierBatchD2,
  ...frontierBatchD3,
  ...frontierBatchD4,
  ...frontierBatchE1,
  ...frontierBatchE2,
  ...videoToolsBatch2026,
  ...specializedAgentsBatch2026,
  ...voiceAgentsBatch2026,
  ...productivityAgentsBatch2026,
  ...digitalHumansBatch2026,
  ...enterpriseOrchBatch2026,
  ...phoneAgentsBatch2026,
  ...roboticsBatch2026,
  ...nicheBatch2026,
  ...nicheSpecialty2026B1,
  ...nicheSpecialty2026B2,
  ...toolifyBatch2026,
  ...toolifyBatch2026B2,
  ...toolifyBatch2026B3,
  ...toolifyBatch2026B4,
  ...toolifyBatch2026B5,
  ...toolifyBatch2026B6,
  ...toolifyBatch2026B7,
  ...toolifyBatch2026B8,
  ...toolifyBatch2026B9,
  ...toolifyBatch2026B10,
  ...toolifyBatch2026B11,
  ...toolifyBatch2026B12,
  ...toolifyBatch2026B13,
  ...toolifyBatch2026B14,
  ...toolifyBatch2026B15,
  ...toolifyBatch2026B16,
  ...toolifyBatch2026B17,
  ...toolifyBatch2026B18,
  ...toolifyBatch2026B19,
  ...toolifyBatch2026B20,
  ...toolifyBatch2026B21,
  ...apocalypseSurvivalBatch2026,
  ...hotNewBatch2026March,
  ...apocalypseSurvivalBatch2026B2,
  ...researchedToolsBatch2026,
  ...newVerifiedBatch2026,
  ...medicusGPT,
  ...hormuzCrisisGPT,
  ...gameVR3DBatch2026,
  ...robotSafetyGPTs2026,
  ...preparednessAndScholarsBatch2026,
  ...civicTransparencyBatch2026,
  ...mustHaveToolsBatch2026,
  ...agentsAndCreatorsBatch2026
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
      description: tool.description || "Property Data Finder GPT by Ai Web Tools delivers unparalleled, precise, and current information about properties."
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
