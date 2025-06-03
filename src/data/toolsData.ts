import { Tool } from "@/types/tools";
import { priorityTools } from "@/data/priorityTools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";
import { aiAssistants } from "@/data/tools/aiAssistants";
import { aiImageGeneration } from "@/data/tools/aiImageGeneration";
import { aiVideoTools } from "@/data/tools/videoTools";
import { aiAudioTools } from "@/data/tools/audioAndVoiceTools";
import { aiContentGenerators } from "@/data/tools/aiContentGenerators";
import { aiProductivityTools } from "@/data/tools/aiProductivityTools";
import { aiChatPlatforms } from "@/data/tools/aiChatPlatforms";
import { aiDevelopmentTools } from "@/data/tools/aiDevelopmentTools";
import { webDevelopmentTools } from "@/data/tools/webDevelopmentTools";
import { businessAndProductivity } from "@/data/tools/businessAndProductivity";
import { creativeAndDesign } from "@/data/tools/imageAndDesign";
import { healthAndWellness } from "@/data/tools/healthAndWellness";
import { educationAndLearning } from "@/data/tools/educationAndLearning";
import { financeAndCrypto } from "@/data/tools/financialAndTradingTools";
import { socialMediaAndMarketing } from "@/data/tools/socialMediaTools";
import { dataAndAnalytics } from "@/data/tools/dataAnalyticsTools";
import { communicationAndCollaboration } from "@/data/tools/communicationTools";
import { securityAndPrivacy } from "@/data/tools/aiSecurityTools";
import { entertainmentAndGaming } from "@/data/tools/entertainmentTools";
import { researchAndAcademic } from "@/data/tools/researchAndLearning";
import { lifestyleAndPersonal } from "@/data/tools/personalServices";
import { newsAndInformation } from "@/data/tools/newsAndInformationTools";
import { ecommerceAndShopping } from "@/data/tools/ecommerceAndMarketingTools";
import { travelAndTransportation } from "@/data/tools/travelAndTransportation";
import { realEstateAndProperty } from "@/data/tools/realEstateAndProperty";
import { legalAndCompliance } from "@/data/tools/legalProfessionals";
import { humanResourcesAndRecruitment } from "@/data/tools/resumeAndCareerTools";
import { fashionAndBeauty } from "@/data/tools/fashionAndBeauty";
import { foodAndNutrition } from "@/data/tools/foodAndNutrition";
import { sportsAndFitness } from "@/data/tools/sportsAndFitness";
import { parentingAndFamily } from "@/data/tools/parentingAndFamily";
import { petsAndAnimals } from "@/data/tools/petsAndAnimals";
import { hobbyAndCrafts } from "@/data/tools/hobbyAndCrafts";
import { automotiveAndTransport } from "@/data/tools/automotiveAndTransport";
import { homeAndGarden } from "@/data/tools/homeAndGarden";
import { threeDAndVisualizationTools } from "@/data/tools/threeDAndVisualizationTools";
import { additionalRealAITools } from "@/data/tools/additionalRealAITools";
import { advancedAITools } from "@/data/tools/advancedAITools";
import { comprehensiveAITools } from "@/data/tools/comprehensiveAITools";
import { mindBlowingAITools } from "@/data/tools/mindBlowingAITools";
import { moreRealAITools } from "@/data/tools/moreRealAITools";
import { rawUncutTools } from "@/data/tools/rawUncutTools";
import { specializedAITools } from "@/data/tools/specializedAITools";
import { aiAgents } from "@/data/tools/aiAgents";
import { aiInferencePlatforms } from "@/data/tools/aiInferencePlatforms";
import { localAISolutions } from "@/data/tools/localAISolutions";
import { openSourceAIModels } from "@/data/tools/openSourceAIModels";
import { roboticsCompanies } from "@/data/tools/roboticsCompanies";
import { aiToolsAndDevelopment } from "@/data/tools/aiToolsAndDevelopment";
import { aiToolsAndUtilities } from "@/data/tools/aiToolsAndUtilities";
import { cloudServices } from "@/data/tools/cloudServices";
import { advancedVideoTools } from "@/data/tools/advancedVideoTools";
import { advancedChatPlatforms } from "@/data/tools/advancedChatPlatforms";
import { aiLegalTools } from "@/data/tools/aiLegalTools";
import { aiSecurityTools } from "@/data/tools/aiSecurityTools";
import { aiFinanceTools } from "@/data/tools/aiFinanceTools";
import { aiHealthcareTools } from "@/data/tools/aiHealthcareTools";
import { aiEducationTools } from "@/data/tools/aiEducationTools";
import { aiResearchTools } from "@/data/tools/aiResearchTools";
import { aiProductivitySuite } from "@/data/tools/aiProductivitySuite";
import { aiGenerativeTools } from "@/data/tools/aiGenerativeTools";

// Combine all tools into a single array for easy access
export const allTools: Tool[] = [
  ...priorityTools, // Keep priority tools first
  ...aiWebToolsGPTs, // Our custom GPTs collection - PRIORITY FEATURED FIRST
  ...aiAssistants,
  ...aiImageGeneration,
  ...aiVideoTools,
  ...aiAudioTools,
  ...aiContentGenerators,
  ...aiProductivityTools,
  ...aiChatPlatforms,
  ...aiDevelopmentTools,
  ...webDevelopmentTools,
  ...businessAndProductivity,
  ...creativeAndDesign,
  ...healthAndWellness,
  ...educationAndLearning,
  ...financeAndCrypto,
  ...socialMediaAndMarketing,
  ...dataAndAnalytics,
  ...communicationAndCollaboration,
  ...securityAndPrivacy,
  ...entertainmentAndGaming,
  ...researchAndAcademic,
  ...lifestyleAndPersonal,
  ...newsAndInformation,
  ...ecommerceAndShopping,
  ...travelAndTransportation,
  ...realEstateAndProperty,
  ...legalAndCompliance,
  ...humanResourcesAndRecruitment,
  ...fashionAndBeauty,
  ...foodAndNutrition,
  ...sportsAndFitness,
  ...parentingAndFamily,
  ...petsAndAnimals,
  ...hobbyAndCrafts,
  ...automotiveAndTransport,
  ...homeAndGarden,
  ...threeDAndVisualizationTools, // Add the 3D tools here
  // Additional specialized tool categories
  ...additionalRealAITools,
  ...advancedAITools,
  ...comprehensiveAITools,
  ...mindBlowingAITools,
  ...moreRealAITools,
  ...rawUncutTools,
  ...specializedAITools,
  ...aiAgents,
  ...aiInferencePlatforms,
  ...localAISolutions,
  ...openSourceAIModels,
  ...roboticsCompanies,
  ...aiToolsAndDevelopment,
  ...aiToolsAndUtilities,
  ...cloudServices,
  ...advancedVideoTools,
  ...advancedChatPlatforms,
  ...aiLegalTools,
  ...aiSecurityTools,
  ...aiFinanceTools,
  ...aiHealthcareTools,
  ...aiEducationTools,
  ...aiResearchTools,
  ...aiProductivitySuite,
  ...aiGenerativeTools
];

// Log the number of tools loaded
console.log(`Total tools loaded: ${allTools.length}`);

// Log the first 10 tool titles
console.log("First 10 tools:", allTools.slice(0, 10).map(tool => tool.title));
