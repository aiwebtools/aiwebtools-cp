
import { Tool } from "@/types/tools";

// Import organized tool categories
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
  spiritualityTools
} from './toolsCollection/coreToolImports';

import {
  healthcareProfessionals,
  legalProfessionals,
  emergencyServices,
  creativeServices,
  personalServices,
  specializedPolicyTools,
  artAndCollectibles,
  professionalServices
} from './toolsCollection/professionalToolImports';

import {
  aiChatPlatforms,
  aiDevelopmentTools,
  localAISolutions,
  aiInferencePlatforms,
  imageGenerationPlatforms,
  aiProductivityTools,
  openSourceAIModels,
  aiAgents,
  platformsAndDevelopment,
  advancedChatPlatforms,
  developerAndCodingTools
} from './toolsCollection/platformToolImports';

import {
  contentCreationAndWritingTools,
  contentDetectionTools,
  documentAndResearchTools,
  designAndGraphicsTools,
  writingAndContentEnhancement,
  videoAndContentTools,
  videoEditingAndContentTools,
  coreImageGenerators,
  imageEditingTools,
  specializedImageTools,
  backgroundAndObjectTools,
  audioAndVoiceTools,
  meetingAndTranscriptionTools
} from './toolsCollection/contentMediaToolImports';

import {
  businessAndTeamTools,
  searchAndProductivityTools,
  ecommerceAndMarketingTools,
  resumeAndCareerTools,
  emailManagementTools,
  webDevelopmentTools,
  financialAndTradingTools,
  specializedNicheTools
} from './toolsCollection/businessProductivityImports';

import {
  timeAndHistory,
  creativeSuites,
  advancedAITools,
  gameDesignAndDevelopment,
  learningAndEducation,
  technicalAndUtilityTools,
  threeDAndVisualizationTools,
  dataAnalyticsTools,
  automationAndWorkflowTools,
  roboticsCompanies
} from './toolsCollection/specializedToolImports';

import {
  advancedVideoTools,
  creativeDesignTools,
  businessSalesTools,
  specializedAITools,
  entertainmentMediaTools
} from './toolsCollection/refactoredToolImports';

import {
  socialMediaTools,
  collaborationTools,
  marketingTools,
  utilitiesTools,
  creativePlatforms,
  learningPlatforms,
  cloudServices,
  developerTools,
  communicationTools,
  entertainmentTools,
  newsAndInformationTools,
  healthAndWellnessTools
} from './toolsCollection/newCategoryImports';

import {
  aiGenerativeTools,
  aiResearchTools,
  aiProductivitySuite,
  aiSecurityTools,
  aiFinanceTools,
  aiHealthcareTools,
  aiEducationTools,
  aiLegalTools,
  mindBlowingAITools,
  designAssistantTools,
  comprehensiveAITools
} from './toolsCollection/comprehensiveAIImports';

// Combine all tool categories
export const getAllToolCategories = (): Tool[] => {
  return [
    // Specialized and advanced tools
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
    
    // AI and development platforms
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
    
    // Content and media tools
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
    
    // Business and productivity
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
    
    // Creative and specialized
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
    
    // New tool categories
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
    ...healthAndWellnessTools,
    
    // Robotics and specialized hardware
    ...roboticsCompanies,
    
    // Comprehensive AI tool categories
    ...aiGenerativeTools,
    ...aiResearchTools,
    ...aiProductivitySuite,
    ...aiSecurityTools,
    ...aiFinanceTools,
    ...aiHealthcareTools,
    ...aiEducationTools,
    ...aiLegalTools,
    
    // Mind-blowing AI tools and design assistants
    ...mindBlowingAITools,
    ...designAssistantTools,
    ...comprehensiveAITools
  ];
};
