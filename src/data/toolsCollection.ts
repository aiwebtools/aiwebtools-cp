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

// Import existing categories
import { threeDAndVisualizationTools } from './tools/threeDAndVisualizationTools';
import { dataAnalyticsTools } from './tools/dataAnalyticsTools';
import { automationAndWorkflowTools } from './tools/automationAndWorkflowTools';

// Import new categories (100 additional tools)
import { socialMediaTools } from './tools/socialMediaTools';
import { collaborationTools } from './tools/collaborationTools';
import { marketingTools } from './tools/marketingTools';
import { utilitiesTools } from './tools/utilitiesTools';
import { creativePlatforms } from './tools/creativePlatforms';
import { learningPlatforms } from './tools/learningPlatforms';
import { cloudServices } from './tools/cloudServices';
import { developerTools } from './tools/developerTools';
import { communicationTools } from './tools/communicationTools';
import { entertainmentTools } from './tools/entertainmentTools';
import { newsAndInformationTools } from './tools/newsAndInformationTools';
import { healthAndWellnessTools } from './tools/healthAndWellnessTools';

// Combine all tool categories
export const getAllToolCategories = (): Tool[] => {
  return [
    // ... keep existing code (existing tool category imports)
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
    ...educationAndLearning,
    ...threeDAndVisualizationTools,
    ...dataAnalyticsTools,
    ...automationAndWorkflowTools,
    
    // New tool categories (100 additional tools)
    ...socialMediaTools,
    ...collaborationTools,
    ...marketingTools,
    ...utilitiesTools,
    ...creativePlatforms,
    ...learningPlatforms,
    ...cloudServices,
    ...developerTools,
    ...communicationTools,
    ...entertainmentTools,
    ...newsAndInformationTools,
    ...healthAndWellnessTools
  ];
};
