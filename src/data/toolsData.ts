
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
  productivityAndAutomationTools,
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

import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';

// Combine all tools with YOUR GPTS AND ORIGINAL TOOLS PRIORITIZED AT THE TOP
export const allTools: Tool[] = [
  // YOUR PRIORITY GPTS AND TOOLS COME FIRST - ALWAYS MOST POPULAR
  ...spiritualityTools,
  ...rawUncutTools,
  ...learningAndEducation,
  ...timeAndHistory,
  ...creativeSuites,
  ...advancedAITools,
  ...gameDesignAndDevelopment,
  ...emergencyServices,
  ...creativeServices,
  ...legalProfessionals,
  ...educationAndLearning,
  ...contentCreationTools,
  
  // THEN AI-FOCUSED CATEGORIES
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
  
  // THEN CONTENT AND CREATIVE TOOLS
  ...writingAndContent,
  ...writingAndContentEnhancement,
  ...imageAndDesign,
  ...designAndGraphicsTools,
  ...videoTools,
  ...videoAndContentTools,
  ...videoEditingAndContentTools,
  ...audioMusicTools,
  ...audioAndVoiceTools,
  ...contentCreationAndWritingTools,
  ...contentDetectionTools,
  ...documentAndResearchTools,
  
  // IMAGE GENERATION TOOLS
  ...coreImageGenerators,
  ...imageEditingTools,
  ...specializedImageTools,
  ...backgroundAndObjectTools,
  
  // THEN BUSINESS AND PRODUCTIVITY
  ...businessAndProductivity,
  ...businessTools,
  ...businessAndTeamTools,
  ...searchAndProductivityTools,
  ...productivityAndAutomationTools,
  ...ecommerceAndMarketingTools,
  ...platformsAndDevelopment,
  ...professionalServices,
  ...resumeAndCareerTools,
  
  // MEETING AND TRANSCRIPTION TOOLS
  ...meetingAndTranscriptionTools,
  
  // THEN SPECIALIZED CATEGORIES
  ...specializedAndNiche,
  ...specializedTools,
  ...creativeAndEntertainment,
  ...researchAndLearning,
  ...healthcareProfessionals,
  ...personalServices,
  ...specializedPolicyTools,
  ...artAndCollectibles,
  
  // NEW CATEGORIES
  ...financialAndTradingTools,
  ...specializedNicheTools
];

// Create featured tools using the utility function
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };
