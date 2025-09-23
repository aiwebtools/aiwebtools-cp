
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

// Import ALL AI Web Tools GPTs - CRITICAL for full indexing
import { aiWebToolsGPTs } from './tools/aiWebToolsGPTs';

// Import additional popular tools for 2025
import { additionalPopularTools2025 } from './tools/additionalPopularTools2025';

// Import ALL AI Web Tools GPT Collections to match toolsData.ts
import { priorityFeaturedGPTs } from "./tools/aiWebTools/priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./tools/aiWebTools/secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./tools/aiWebTools/thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./tools/aiWebTools/fourthPriorityFeaturedGPTs";
import { advancedSpecialtyGPTs } from "./tools/aiWebTools/advancedSpecialtyGPTs";
import { additionalSpecializedGPTs } from "./tools/aiWebTools/additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./tools/aiWebTools/finalSpecializedGPTs";
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

// Import the new additional real AI tools
import { additionalRealAITools } from './tools/additionalRealAITools';

// Import the NEWEST additional real AI tools
import { moreRealAITools } from './tools/moreRealAITools';

// Import historical and cultural tools
import { historicalAndCultural } from './tools/historicalAndCultural';

// Import new 2025 marketing and video tools
import { newMarketingTools2025 } from './tools/newMarketingTools2025';
import { newVideoMultimediaTools2025 } from './tools/newVideoMultimediaTools2025';

// Import additional 2025 tools
import { additionalVideoTools2025 } from './tools/additionalVideoTools2025';
import { additionalAudioTools2025 } from './tools/additionalAudioTools2025';
import { creativeExperimentalTools2025 } from './tools/creativeExperimentalTools2025';

// Import Web3 and Blockchain Tools
import { web3DomainsTools } from './tools/web3DomainsTools';

// Import missing tool categories (non-duplicates only)
import { aiImageGeneration } from './tools/aiImageGeneration';
import { businessProductivityAudio } from './tools/businessProductivityAudio';
import { coreAudioVoiceTools } from './tools/coreAudioVoiceTools';
import { videoBusinessTools } from './tools/videoBusinessTools';
import { videoEditingTools } from './tools/videoEditingTools';
import { videoGenerationTools } from './tools/videoGenerationTools';
import { videoMarketingTools } from './tools/videoMarketingTools';
import { professionalGPTsAudio } from './tools/professionalGPTsAudio';

// Import AI Hardware
import { aiHardware } from './tools/aiHardware';

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
    ...newSpecializedGPTs,
    
    // CRITICAL: ALL AI Web Tools GPTs including Soul Map GPT
    ...aiWebToolsGPTs,
    
    // ALL AI WEB TOOLS GPT COLLECTIONS to match toolsData.ts
    ...priorityFeaturedGPTs,
    ...secondPriorityFeaturedGPTs,
    ...thirdPriorityFeaturedGPTs,
    ...fourthPriorityFeaturedGPTs,
    ...advancedSpecialtyGPTs,
    ...additionalSpecializedGPTs,
    ...finalSpecializedGPTs,
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
    
    // NEW: Additional real AI tools (100 more tools)
    ...additionalRealAITools,
    
    // NEWEST: More real AI tools (100 additional tools)
    ...moreRealAITools,
    
    // NEW 2025: Marketing and Video Multimedia Tools
    ...newMarketingTools2025,
    ...newVideoMultimediaTools2025,
    
    // ADDITIONAL 2025: Video, Audio, and Creative Tools
    ...additionalVideoTools2025,
    ...additionalAudioTools2025,
    ...creativeExperimentalTools2025,
    
    // Historical and Cultural tools
    ...historicalAndCultural,
    
    // WEB3 & BLOCKCHAIN TOOLS
    ...web3DomainsTools,
    
    // MISSING TOOL CATEGORIES (non-duplicates only)
    ...aiImageGeneration,
    ...businessProductivityAudio,
    ...coreAudioVoiceTools,
    ...videoBusinessTools,
    ...videoEditingTools,
    ...videoGenerationTools,
    ...videoMarketingTools,
    ...professionalGPTsAudio,
    
    // ADDITIONAL POPULAR TOOLS 2025
    ...additionalPopularTools2025,
    
    // AI HARDWARE
    ...aiHardware
  ];
};
