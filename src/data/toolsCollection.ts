
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

// Import MAJOR AI PLATFORMS - The essentials
import { majorAIPlatforms } from './tools/majorAIPlatforms';
import { topImageGenerators } from './tools/topImageGenerators';
import { topMusicVideoTools } from './tools/topMusicVideoTools';
import { topProductivityWriting } from './tools/topProductivityWriting';
import { developerProductivityAI } from './tools/developerProductivityAI';
import { aiResearchAcademicTools } from './tools/aiResearchAcademicTools';
import { aiPresentationTools } from './tools/aiPresentationTools';
import { aiSeoContentTools } from './tools/aiSeoContentTools';
import { aiCustomerSupportTools } from './tools/aiCustomerSupportTools';
import { aiDataAnalyticsTools } from './tools/aiDataAnalyticsTools';
import { aiVideoEditingTools } from './tools/aiVideoEditingTools';
import { aiHrRecruitmentTools } from './tools/aiHrRecruitmentTools';
import { aiTranslationTools } from './tools/aiTranslationTools';
import { aiProjectManagementTools } from './tools/aiProjectManagementTools';
import { aiEducationalTools } from './tools/aiEducationalTools';
import { aiCybersecurityTools } from './tools/aiCybersecurityTools';
import { aiSalesCrmTools } from './tools/aiSalesCrmTools';
import { aiLegalTechTools } from './tools/aiLegalTechTools';
import { aiHealthcareDiagnosisTools } from './tools/aiHealthcareDiagnosisTools';
import { aiRealEstateTools } from './tools/aiRealEstateTools';
import { aiAccountingFinanceTools } from './tools/aiAccountingFinanceTools';
import { aiFashionStyleTools } from './tools/aiFashionStyleTools';
import { aiLogisticsSupplyChainTools } from './tools/aiLogisticsSupplyChainTools';
import { aiMentalHealthWellnessTools } from './tools/aiMentalHealthWellnessTools';
import { aiEcommerceTools } from './tools/aiEcommerceTools';
import { aiVoiceSpeechTools } from './tools/aiVoiceSpeechTools';
import { aiGamingTools } from './tools/aiGamingTools';
import { aiGptStorePlatforms } from './tools/aiGptStorePlatforms';
import { aiBotMakingPlatforms } from './tools/aiBotMakingPlatforms';
import { aiDatingRelationshipTools } from './tools/aiDatingRelationshipTools';
import { aiFitnessNutritionTools } from './tools/aiFitnessNutritionTools';
import { aiInteriorDesignTools } from './tools/aiInteriorDesignTools';
import { aiCryptoTradingTools } from './tools/aiCryptoTradingTools';
import { aiSocialMediaTools } from './tools/aiSocialMediaTools';
import { aiMusicProductionTools } from './tools/aiMusicProductionTools';
import { aiTravelTourismTools } from './tools/aiTravelTourismTools';
import { aiPetCareTools } from './tools/aiPetCareTools';
import { aiAgricultureTools } from './tools/aiAgricultureTools';
import { aiConstructionTools } from './tools/aiConstructionTools';
import { aiShippingLogisticsTools } from './tools/aiShippingLogisticsTools';
import { aiInsuranceTools } from './tools/aiInsuranceTools';
import { aiAutomotiveTools } from './tools/aiAutomotiveTools';
import { additionalVideoImageGenerators } from './tools/additionalVideoImageGenerators';
import { ai3DModelingTools } from './tools/ai3DModelingTools';
import { aiPhotographyTools } from './tools/aiPhotographyTools';
import { aiRecruitmentHRTools } from './tools/aiRecruitmentHRTools';
import { aiSportsAnalyticsTools } from './tools/aiSportsAnalyticsTools';
import { aiVoiceAssistantTools } from './tools/aiVoiceAssistantTools';
import { aiAnimationTools } from './tools/aiAnimationTools';
import { aiPodcastTools } from './tools/aiPodcastTools';
import { aiTranscriptionToolsPro } from './tools/aiTranscriptionToolsPro';
import { aiMeetingAssistants } from './tools/aiMeetingAssistants';
import { aiNoteTakingTools } from './tools/aiNoteTakingTools';

// NEW 2025: Website Builders and Specialized Tools
import { newWebsiteBuilders2025 } from './tools/newWebsiteBuilders2025';
import { newSpecializedTools2025 } from './tools/newSpecializedTools2025';


// Import AI Gadgets & Devices (pet gadgets, smart glasses, wearables)
import { aiGadgetsDevicesTools } from './tools/aiGadgetsDevicesTools';

// Import AI Gadgets & Devices Batch 2026 (Ray-Ban Meta, Even Realities G1, Brilliant Frame, Omi, Plaud Note, Insta360 GO 3S, Looi, Eilik, Loona, Rewind Pendant)
import { aiGadgetsDevicesBatch2026 } from './tools/aiGadgetsDevicesBatch2026';

// Import One More Shot AI (AI music video generator)
import { oneMoreShotAi } from './tools/oneMoreShotAi';

// Import Trending AI Batch 2026 April (Cluely, Felo, Pi, SambaNova, Same.dev, Lambda, MotherDuck, Milvus, Heyboss, MultiOn)
import { trendingAiBatch2026Apr } from './tools/trendingAiBatch2026Apr';

// Import AI Hardware (legacy - moved to gadgets)
import { aiHardware } from './tools/aiHardware';

// Combine all tool categories - REORGANIZED FOR BETTER PRIORITY
export const getAllToolCategories = (): Tool[] => {
  return [
    // ========================================
    // TIER 1: MAJOR AI PLATFORMS (Most Popular & Essential)
    // ========================================
    ...majorAIPlatforms, // ChatGPT, Claude, Gemini, Perplexity, etc.
    ...topImageGenerators, // Midjourney, DALL-E, Flux, Stable Diffusion, etc.
    ...topMusicVideoTools, // Sora, Runway, ElevenLabs, Udio, etc.
    ...topProductivityWriting, // Notion AI, Grammarly, Jasper, etc.
    ...additionalPopularTools2025, // Kling AI, RunwayML Gen-3, etc.
    
    // ========================================
    // TIER 2: POWERFUL PROFESSIONAL TOOLS
    // ========================================
    ...developerProductivityAI, // GitHub Copilot, Cursor, Codeium, etc.
    ...aiDevelopmentTools,
    ...aiChatPlatforms,
    ...advancedChatPlatforms,
    ...aiAgents,
    ...aiAssistants,
    
    // ========================================
    // TIER 3: CONTENT CREATION & DESIGN
    // ========================================
    ...coreImageGenerators,
    ...imageGenerationPlatforms,
    ...videoGenerationTools,
    ...videoTools,
    ...advancedVideoTools,
    ...aiVideoEditingTools,
    ...videoEditingAndContentTools,
    ...videoAndContentTools,
    ...videoBusinessTools,
    ...videoMarketingTools,
    ...additionalVideoTools2025,
    ...additionalVideoImageGenerators,
    
    ...audioMusicTools,
    ...audioAndVoiceTools,
    ...coreAudioVoiceTools,
    ...aiVoiceSpeechTools,
    ...aiMusicProductionTools,
    ...additionalAudioTools2025,
    ...businessProductivityAudio,
    ...professionalGPTsAudio,
    
    ...imageEditingTools,
    ...specializedImageTools,
    ...backgroundAndObjectTools,
    ...aiImageGeneration,
    ...ai3DModelingTools,
    ...aiPhotographyTools,
    ...aiAnimationTools,
    
    ...writingAndContent,
    ...writingAndContentEnhancement,
    ...contentCreationTools,
    ...contentCreationAndWritingTools,
    ...aiSeoContentTools,
    ...contentDetectionTools,
    
    ...designAndGraphicsTools,
    ...imageAndDesign,
    ...creativeDesignTools,
    ...designAssistantTools,
    ...aiArtTools,
    
    // ========================================
    // TIER 4: BUSINESS & PRODUCTIVITY
    // ========================================
    ...businessAndProductivity,
    ...businessTools,
    ...businessAndTeamTools,
    ...businessSalesTools,
    ...aiProductivityTools,
    ...aiProductivitySuite,
    ...searchAndProductivityTools,
    ...aiProjectManagementTools,
    
    ...ecommerceAndMarketingTools,
    ...marketingTools,
    ...newMarketingTools2025,
    ...aiSocialMediaTools,
    ...socialMediaTools,
    
    ...aiSalesCrmTools,
    ...aiCustomerSupportTools,
    ...aiDataAnalyticsTools,
    ...dataAnalyticsTools,
    ...financialAndTradingTools,
    ...aiFinanceTools,
    ...aiAccountingFinanceTools,
    ...aiCryptoTradingTools,
    
    ...resumeAndCareerTools,
    ...aiHrRecruitmentTools,
    ...aiRecruitmentHRTools,
    
    ...meetingAndTranscriptionTools,
    ...aiTranscriptionToolsPro,
    ...aiMeetingAssistants,
    ...aiNoteTakingTools,
    
    // ========================================
    // TIER 5: RESEARCH & EDUCATION
    // ========================================
    ...aiResearchTools,
    ...aiResearchAcademicTools,
    ...documentAndResearchTools,
    ...researchAndLearning,
    
    ...aiEducationTools,
    ...aiEducationalTools,
    ...educationAndLearning,
    ...learningAndEducation,
    ...learningPlatforms,
    
    ...aiPresentationTools,
    ...aiTranslationTools,
    
    // ========================================
    // TIER 6: SPECIALIZED PROFESSIONAL SERVICES
    // ========================================
    ...professionalServices,
    ...legalProfessionals,
    ...aiLegalTools,
    ...aiLegalTechTools,
    
    ...healthcareProfessionals,
    ...aiHealthcareTools,
    ...aiHealthcareDiagnosisTools,
    ...aiMentalHealthWellnessTools,
    ...healthAndWellness,
    
    ...aiRealEstateTools,
    ...aiInsuranceTools,
    ...aiConstructionTools,
    
    // ========================================
    // TIER 7: DEVELOPMENT & TECHNICAL
    // ========================================
    ...developerAndCodingTools,
    ...developerTools,
    ...webDevelopmentTools,
    ...newWebsiteBuilders2025,
    ...platformsAndDevelopment,
    ...aiToolsAndDevelopment,
    ...aiToolsAndUtilities,
    
    ...localAISolutions,
    ...aiInferencePlatforms,
    ...openSourceAIModels,
    ...aiCybersecurityTools,
    ...aiSecurityTools,
    ...technicalAndUtilityTools,
    ...utilitiesTools,
    
    ...automationAndWorkflowTools,
    ...cloudServices,
    ...emailManagementTools,
    ...collaborationTools,
    ...communicationTools,
    
    // ========================================
    // TIER 8: CREATIVE & ENTERTAINMENT
    // ========================================
    ...creativeSuites,
    ...creativePlatforms,
    ...creativeAndEntertainment,
    ...entertainmentMediaTools,
    ...entertainmentTools,
    ...gameDesignAndDevelopment,
    ...aiGamingTools,
    ...aiPodcastTools,
    
    // ========================================
    // TIER 9: AI WEB TOOLS CUSTOM GPTs (Your Creations)
    // ========================================
    ...priorityFeaturedGPTs,
    ...secondPriorityFeaturedGPTs,
    ...thirdPriorityFeaturedGPTs,
    ...fourthPriorityFeaturedGPTs,
    ...aiWebToolsGPTs,
    ...advancedSpecialtyGPTs,
    ...additionalSpecializedGPTs,
    ...finalSpecializedGPTs,
    ...newSpecializedGPTs,
    
    // Categorized AI Web Tools GPTs
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
    ...timeAndHistoryGPTs,
    ...technologyInnovationGPTs,
    
    // ========================================
    // TIER 10: NICHE & SPECIALIZED TOOLS
    // ========================================
    ...aiFashionStyleTools,
    ...aiFitnessNutritionTools,
    ...aiTravelTourismTools,
    ...aiPetCareTools,
    ...aiDatingRelationshipTools,
    ...aiInteriorDesignTools,
    ...aiSportsAnalyticsTools,
    
    ...aiAgricultureTools,
    ...aiAutomotiveTools,
    ...aiLogisticsSupplyChainTools,
    ...aiShippingLogisticsTools,
    
    ...aiGptStorePlatforms,
    ...aiBotMakingPlatforms,
    ...aiVoiceAssistantTools,
    ...aiEcommerceTools,
    
    ...newSpecializedTools2025,
    ...specializedAITools,
    ...specializedAndNiche,
    ...specializedTools,
    ...specializedNicheTools,
    ...specializedNicheToolsGPTs,
    
    // ========================================
    // TIER 11: UNIQUE & EXPERIMENTAL (Funky/Unknown)
    // ========================================
    ...mindBlowingAITools,
    ...comprehensiveAITools,
    ...aiGenerativeTools,
    ...creativeExperimentalTools2025,
    
    ...spiritualityTools,
    ...spiritualAndPhilosophyGPTs,
    ...mysteriousAndUnusualGPTs,
    
    ...timeAndHistory,
    ...historicalAndCultural,
    
    ...emergencyServices,
    ...creativeServices,
    ...advancedAITools,
    ...specializedPolicyTools,
    ...artAndCollectibles,
    
    ...threeDAndVisualizationTools,
    ...newsAndInformationTools,
    ...roboticsCompanies,
    ...aiGadgetsDevicesTools,
    ...aiGadgetsDevicesBatch2026,
    ...oneMoreShotAi,
    ...trendingAiBatch2026Apr,
    ...aiHardware,
    
    // NEW 2025: Additional tools
    ...newVideoMultimediaTools2025,
    
    // Additional collections
    ...additionalRealAITools,
    ...moreRealAITools,
    
    // WEB3 & BLOCKCHAIN TOOLS (Niche)
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
    ...aiHardware,
    
    // MAJOR AI PLATFORMS - The essentials everyone expects
    ...majorAIPlatforms,
    ...topImageGenerators,
    ...topMusicVideoTools,
    ...topProductivityWriting,
    ...developerProductivityAI,
    ...aiResearchAcademicTools,
    ...aiPresentationTools,
    ...aiSeoContentTools,
    ...aiCustomerSupportTools,
    ...aiDataAnalyticsTools,
    ...aiVideoEditingTools,
    ...aiHrRecruitmentTools,
    ...aiTranslationTools,
    ...aiProjectManagementTools,
    ...aiEducationalTools,
    ...aiCybersecurityTools,
    ...aiSalesCrmTools,
    ...aiLegalTechTools,
    ...aiHealthcareDiagnosisTools,
    ...aiRealEstateTools,
    ...aiAccountingFinanceTools,
    ...aiFashionStyleTools,
    ...aiLogisticsSupplyChainTools,
    ...aiMentalHealthWellnessTools,
    ...aiEcommerceTools,
    ...aiVoiceSpeechTools,
    ...aiGamingTools,
    ...aiGptStorePlatforms,
    ...aiBotMakingPlatforms,
    ...aiDatingRelationshipTools,
    ...aiFitnessNutritionTools,
    ...aiInteriorDesignTools,
    ...aiCryptoTradingTools,
    ...aiSocialMediaTools,
    ...aiMusicProductionTools,
    ...aiTravelTourismTools,
    ...aiPetCareTools,
    ...aiAgricultureTools,
    ...aiConstructionTools,
    ...aiShippingLogisticsTools,
    ...aiInsuranceTools,
    ...aiAutomotiveTools,
    ...additionalVideoImageGenerators,
    ...ai3DModelingTools,
    ...aiPhotographyTools,
    ...aiRecruitmentHRTools,
    ...aiSportsAnalyticsTools,
    ...aiVoiceAssistantTools,
    ...aiAnimationTools,
    ...aiPodcastTools,
    ...aiTranscriptionToolsPro,
    ...aiMeetingAssistants,
    ...aiNoteTakingTools,
    
    // NEW 2025: Website Builders and Specialized Tools
    ...newWebsiteBuilders2025,
    ...newSpecializedTools2025
  ];
};
