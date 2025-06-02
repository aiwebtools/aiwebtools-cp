
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
  technicalAndUtilityTools,
  roboticsCompanies
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
import { healthAndWellness } from './tools/healthAndWellness';

// Import NEW comprehensive AI tool categories to reach 1000+
import { aiGenerativeTools } from './tools/aiGenerativeTools';
import { aiResearchTools } from './tools/aiResearchTools';
import { aiProductivitySuite } from './tools/aiProductivitySuite';
import { aiSecurityTools } from './tools/aiSecurityTools';
import { aiFinanceTools } from './tools/aiFinanceTools';
import { aiHealthcareTools } from './tools/aiHealthcareTools';
import { aiEducationTools } from './tools/aiEducationTools';
import { aiLegalTools } from './tools/aiLegalTools';

// Import mind-blowing AI tools for everyday users
import { mindBlowingAITools } from './tools/mindBlowingAITools';

// Import new design assistant tools category
import { designAssistantTools } from './tools/designAssistantTools';

// Import the comprehensive AI tools collection
import { comprehensiveAITools } from './tools/comprehensiveAITools';

// Import the new specialized GPTs from AI Web Tools
import { newSpecializedGPTs } from './tools/aiWebTools/newSpecializedGPTs';

// Combine all tool categories
export const getAllToolCategories = (): Tool[] => {
  return [
    ...businessTools,
    ...aiAssistants,
    ...videoTools,
    ...aiArtTools,
    ...audioMusicTools,
    ...contentCreationTools,
    ...aiToolsAndDevelopment,
    ...specializedTools,
    // CONSOLIDATED: Use only contentCreationAndWritingTools (no more writingAndContent)
    ...imageAndDesign,
    ...businessAndProductivity,
    ...specializedAndNiche,
    ...educationAndLearning,
    ...creativeAndEntertainment,
    ...researchAndLearning,
    ...aiToolsAndUtilities,
    ...healthcareProfessionals,
    ...legalProfessionals,
    ...emergencyServices,
    ...creativeServices,
    ...personalServices,
    ...specializedPolicyTools,
    ...artAndCollectibles,
    ...aiChatPlatforms,
    ...aiDevelopmentTools,
    ...localAISolutions,
    ...aiInferencePlatforms,
    ...imageGenerationPlatforms,
    ...aiProductivityTools,
    ...openSourceAIModels,
    ...aiAgents,
    ...timeAndHistory,
    ...creativeSuites,
    ...advancedAITools,
    ...gameDesignAndDevelopment,
    ...learningAndEducation,
    ...platformsAndDevelopment,
    ...professionalServices,
    ...spiritualityTools,
    ...rawUncutTools,
    ...videoAndContentTools,
    ...businessAndTeamTools,
    ...searchAndProductivityTools,
    ...advancedChatPlatforms,
    ...developerAndCodingTools,
    ...contentDetectionTools,
    ...contentCreationAndWritingTools,
    ...documentAndResearchTools,
    ...designAndGraphicsTools,
    ...resumeAndCareerTools,
    ...ecommerceAndMarketingTools,
    ...videoEditingAndContentTools,
    ...coreImageGenerators,
    ...imageEditingTools,
    ...specializedImageTools,
    ...backgroundAndObjectTools,
    ...audioAndVoiceTools,
    ...financialAndTradingTools,
    ...specializedNicheTools,
    ...meetingAndTranscriptionTools,
    ...webDevelopmentTools,
    ...emailManagementTools,
    ...technicalAndUtilityTools,
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
    ...healthAndWellness,
    
    // Robotics companies category
    ...roboticsCompanies,
    
    // NEW comprehensive AI tool categories to reach 1000+
    ...aiGenerativeTools,
    ...aiResearchTools,
    ...aiProductivitySuite,
    ...aiSecurityTools,
    ...aiFinanceTools,
    ...aiHealthcareTools,
    ...aiEducationTools,
    ...aiLegalTools,
    
    // NEW: 50 mind-blowing AI tools for everyday users
    ...mindBlowingAITools,
    
    // NEW: Design assistant tools
    ...designAssistantTools,
    
    // NEW: Comprehensive AI tools collection (120+ additional tools)
    ...comprehensiveAITools,
    
    // NEW: Specialized GPTs added by user request
    ...newSpecializedGPTs
  ];
};
