
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

// Combine all tools with YOUR PRIORITY GPTS AND TOOLS FIRST - ALWAYS MOST POPULAR
export const allTools: Tool[] = [
  // YOUR TOP PRIORITY GPTS COME FIRST - HIGHEST RATED AND MOST POPULAR
  ...spiritualityTools, // Contains TALK TO THE GODS GPT, Fortune Teller GPT, etc.
  ...advancedAITools, // Contains GODMODE GPT, MULTITASKER GPT, PERFECT PROMPT ENGINE, etc.
  ...timeAndHistory, // Contains TIME MACHINE GPT, Historical tools, etc.
  ...creativeSuites, // Contains Movie Maker Studio, Music Video Maker, etc.
  ...learningAndEducation, // Contains COLLEGE DEGREE GPT, LEARN ANY COURSE GPT, etc.
  ...gameDesignAndDevelopment, // Contains GAME DESIGNER GPT, etc.
  ...emergencyServices, // Contains specialized emergency GPTs
  ...professionalServices, // Contains specialized professional GPTs
  ...legalProfessionals, // Contains Legislation Writer GPT, etc.
  ...healthcareProfessionals, // Contains specialized health GPTs
  ...creativeServices, // Contains Oraculum, Trivia Night GPT, etc.
  ...technicalAndUtilityTools, // Contains technical GPTs
  
  // THEN AI-FOCUSED CATEGORIES (UPDATED WITH NEW TOOLS)
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
  
  // THEN CONTENT AND CREATIVE TOOLS (UPDATED WITH NEW TOOLS)
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
  
  // IMAGE GENERATION TOOLS (UPDATED WITH NEW TOOLS)
  ...coreImageGenerators,
  ...imageEditingTools,
  ...specializedImageTools,
  ...backgroundAndObjectTools,
  
  // THEN BUSINESS AND PRODUCTIVITY
  ...businessAndProductivity,
  ...businessTools,
  ...businessAndTeamTools,
  ...searchAndProductivityTools,
  ...ecommerceAndMarketingTools,
  ...platformsAndDevelopment,
  ...resumeAndCareerTools,
  
  // EMAIL AND WEB DEVELOPMENT (UPDATED WITH NEW TOOLS)
  ...emailManagementTools,
  ...webDevelopmentTools,
  
  // MEETING AND TRANSCRIPTION TOOLS
  ...meetingAndTranscriptionTools,
  
  // REFACTORED TOOLS CATEGORIES (UPDATED WITH NEW TOOLS)
  ...advancedVideoTools,
  ...creativeDesignTools,
  ...businessSalesTools,
  ...specializedAITools,
  ...entertainmentMediaTools,
  
  // THEN SPECIALIZED CATEGORIES (UPDATED WITH NEW TOOLS)
  ...specializedAndNiche,
  ...specializedTools,
  ...creativeAndEntertainment,
  ...researchAndLearning,
  ...personalServices,
  ...specializedPolicyTools,
  ...artAndCollectibles,
  
  // FINANCIAL AND TRADING TOOLS (UPDATED WITH NEW TOOLS)
  ...financialAndTradingTools,
  ...specializedNicheTools
];

// Create featured tools using the utility function - prioritizes your GPTs
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };
