
import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche,
  educationAndLearning,
  creativeAndEntertainment,
  researchAndLearning,
  aiToolsAndUtilities,
  healthcareProfessionals,
  legalProfessionals,
  emergencyServices,
  creativeServices,
  personalServices,
  specializedPolicyTools,
  artAndCollectibles,
  aiChatPlatforms,
  aiDevelopmentTools,
  localAISolutions,
  aiInferencePlatforms,
  imageGenerationPlatforms,
  aiProductivityTools,
  openSourceAIModels,
  aiAgents,
  timeAndHistory,
  creativeSuites,
  advancedAITools,
  gameDesignAndDevelopment,
  learningAndEducation,
  platformsAndDevelopment,
  professionalServices,
  spiritualityTools,
  rawUncutTools,
  videoAndContentTools,
  businessAndTeamTools,
  searchAndProductivityTools,
  advancedChatPlatforms,
  developerAndCodingTools,
  contentDetectionTools,
  contentCreationAndWritingTools,
  documentAndResearchTools,
  designAndGraphicsTools,
  writingAndContentEnhancement,
  resumeAndCareerTools,
  ecommerceAndMarketingTools,
  videoEditingAndContentTools,
  coreImageGenerators,
  imageEditingTools,
  specializedImageTools,
  backgroundAndObjectTools,
  audioAndVoiceTools,
  financialAndTradingTools,
  specializedNicheTools,
  meetingAndTranscriptionTools,
  webDevelopmentTools,
  emailManagementTools,
  technicalAndUtilityTools
} from './tools';

// Import the refactored tools
import { advancedVideoTools } from './tools/advancedVideoTools';
import { creativeDesignTools } from './tools/creativeDesignTools';
import { businessSalesTools } from './tools/businessSalesTools';
import { specializedAITools } from './tools/specializedAITools';
import { entertainmentMediaTools } from './tools/entertainmentMediaTools';

import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';

// Helper function to extract priority tools and move them to the front
const extractPriorityTools = (toolsArray: Tool[]): { priorityTools: Tool[], remainingTools: Tool[] } => {
  const priorityTitles = ['BOOK WRITER GPT', 'MOVIE MAKER STUDIO', 'STAGE MASTER SUITE'];
  
  const priorityTools: Tool[] = [];
  const remainingTools: Tool[] = [];
  
  toolsArray.forEach(tool => {
    if (priorityTitles.some(title => tool.title.includes(title))) {
      priorityTools.push(tool);
    } else {
      remainingTools.push(tool);
    }
  });
  
  return { priorityTools, remainingTools };
};

// Combine all tool categories and apply consolidation
const allToolCategories = consolidateTools([
  ...spiritualityTools,
  ...advancedAITools,
  ...timeAndHistory,
  ...creativeSuites,
  ...learningAndEducation,
  ...gameDesignAndDevelopment,
  ...emergencyServices,
  ...professionalServices,
  ...legalProfessionals,
  ...healthcareProfessionals,
  ...creativeServices,
  ...technicalAndUtilityTools,
  ...aiChatPlatforms,
  ...aiDevelopmentTools,
  ...aiAgents,
  ...localAISolutions,
  ...aiInferencePlatforms,
  ...imageGenerationPlatforms,
  ...aiProductivityTools,
  ...openSourceAIModels,
  ...aiToolsAndDevelopment,
  ...aiToolsAndUtilities,
  ...aiAssistants,
  ...aiArtTools,
  ...advancedChatPlatforms,
  ...developerAndCodingTools,
  ...writingAndContent,
  ...writingAndContentEnhancement,
  ...imageAndDesign,
  ...designAndGraphicsTools,
  ...videoTools,
  ...videoAndContentTools,
  ...videoEditingAndContentTools,
  ...advancedVideoTools,
  ...audioMusicTools,
  ...audioAndVoiceTools,
  ...contentCreationTools,
  ...contentCreationAndWritingTools,
  ...contentDetectionTools,
  ...documentAndResearchTools,
  ...coreImageGenerators,
  ...imageEditingTools,
  ...specializedImageTools,
  ...backgroundAndObjectTools,
  ...businessAndProductivity,
  ...businessTools,
  ...businessAndTeamTools,
  ...businessSalesTools,
  ...searchAndProductivityTools,
  ...ecommerceAndMarketingTools,
  ...platformsAndDevelopment,
  ...resumeAndCareerTools,
  ...emailManagementTools,
  ...webDevelopmentTools,
  ...meetingAndTranscriptionTools,
  ...creativeDesignTools,
  ...specializedAITools,
  ...entertainmentMediaTools,
  ...specializedAndNiche,
  ...specializedTools,
  ...creativeAndEntertainment,
  ...researchAndLearning,
  ...personalServices,
  ...specializedPolicyTools,
  ...artAndCollectibles,
  ...financialAndTradingTools,
  ...specializedNicheTools,
  ...educationAndLearning
]);

// Remove duplicates based on title
const uniqueTools = allToolCategories.filter((tool, index, array) => 
  index === array.findIndex(t => t.title === tool.title)
);

// Extract priority tools and reorder
const { priorityTools, remainingTools } = extractPriorityTools(uniqueTools);

// Combine with priority tools first
export const allTools: Tool[] = [
  ...priorityTools,
  ...remainingTools
];

// Create featured tools using the utility function - prioritizes your GPTs
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };

// Debug information
console.log(`Total tools loaded: ${allTools.length}`);
console.log(`Categories found: ${Object.keys(getCategoriesWithCounts(allTools)).length}`);
const categoryBreakdown = getCategoriesWithCounts(allTools);
console.log('Category breakdown:', categoryBreakdown);

// Verify all tools have categories
const uncategorizedTools = allTools.filter(tool => !tool.category || tool.category.trim() === '');
if (uncategorizedTools.length > 0) {
  console.warn(`Found ${uncategorizedTools.length} uncategorized tools:`, uncategorizedTools.map(t => t.title));
}
