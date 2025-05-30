
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
  meetingAndTranscriptionTools
} from './tools';

// Import the refactored tools
import { advancedVideoTools } from './tools/advancedVideoTools';
import { creativeDesignTools } from './tools/creativeDesignTools';
import { businessSalesTools } from './tools/businessSalesTools';
import { specializedAITools } from './tools/specializedAITools';
import { entertainmentMediaTools } from './tools/entertainmentMediaTools';

// Import the new tools categories
import { webDevelopmentTools } from './tools/webDevelopmentTools';
import { emailManagementTools } from './tools/emailManagementTools';
import { technicalAndUtilityTools } from './tools/technicalAndUtilityTools';

import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';

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

// Combine all tool categories
const allToolCategories = [
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
  ...searchAndProductivityTools,
  ...ecommerceAndMarketingTools,
  ...platformsAndDevelopment,
  ...resumeAndCareerTools,
  ...emailManagementTools,
  ...webDevelopmentTools,
  ...meetingAndTranscriptionTools,
  ...advancedVideoTools,
  ...creativeDesignTools,
  ...businessSalesTools,
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
  ...specializedNicheTools
];

// Extract priority tools and reorder
const { priorityTools, remainingTools } = extractPriorityTools(allToolCategories);

// Combine with priority tools first, ensuring no duplicates
export const allTools: Tool[] = [
  ...priorityTools,
  ...remainingTools
];

// Create featured tools using the utility function - prioritizes your GPTs
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };
