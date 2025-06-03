
import { Tool } from "@/types/tools";
import { extractPriorityTools } from "@/data/priorityTools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";
import { aiAssistants } from "@/data/tools/aiAssistants";
import { aiImageGeneration } from "@/data/tools/aiImageGeneration";
import { videoTools } from "@/data/tools/videoTools";
import { audioAndVoiceTools } from "@/data/tools/audioAndVoiceTools";
import { aiContentGenerators } from "@/data/tools/aiContentGenerators";
import { aiProductivityTools } from "@/data/tools/aiProductivityTools";
import { aiChatPlatforms } from "@/data/tools/aiChatPlatforms";
import { aiDevelopmentTools } from "@/data/tools/aiDevelopmentTools";
import { webDevelopmentTools } from "@/data/tools/webDevelopmentTools";
import { businessAndProductivity } from "@/data/tools/businessAndProductivity";
import { imageAndDesign } from "@/data/tools/imageAndDesign";
import { healthAndWellness } from "@/data/tools/healthAndWellness";
import { educationAndLearning } from "@/data/tools/educationAndLearning";
import { financialAndTradingTools } from "@/data/tools/financialAndTradingTools";
import { socialMediaTools } from "@/data/tools/socialMediaTools";
import { dataAnalyticsTools } from "@/data/tools/dataAnalyticsTools";
import { communicationTools } from "@/data/tools/communicationTools";
import { aiSecurityTools } from "@/data/tools/aiSecurityTools";
import { entertainmentTools } from "@/data/tools/entertainmentTools";
import { researchAndLearning } from "@/data/tools/researchAndLearning";
import { personalServices } from "@/data/tools/personalServices";
import { newsAndInformationTools } from "@/data/tools/newsAndInformationTools";
import { ecommerceAndMarketingTools } from "@/data/tools/ecommerceAndMarketingTools";
import { legalProfessionals } from "@/data/tools/legalProfessionals";
import { resumeAndCareerTools } from "@/data/tools/resumeAndCareerTools";
import { threeDAndVisualizationTools } from "@/data/tools/threeDAndVisualizationTools";
// Additional specialized tool categories
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
import { aiFinanceTools } from "@/data/tools/aiFinanceTools";
import { aiHealthcareTools } from "@/data/tools/aiHealthcareTools";
import { aiEducationTools } from "@/data/tools/aiEducationTools";
import { aiResearchTools } from "@/data/tools/aiResearchTools";
import { aiProductivitySuite } from "@/data/tools/aiProductivitySuite";
import { aiGenerativeTools } from "@/data/tools/aiGenerativeTools";

// Get all tools first, then extract priority tools
const baseTools: Tool[] = [
  ...aiWebToolsGPTs, // Our custom GPTs collection - PRIORITY FEATURED FIRST
  ...aiAssistants,
  ...aiImageGeneration,
  ...videoTools,
  ...audioAndVoiceTools,
  ...aiContentGenerators,
  ...aiProductivityTools,
  ...aiChatPlatforms,
  ...aiDevelopmentTools,
  ...webDevelopmentTools,
  ...businessAndProductivity,
  ...imageAndDesign,
  ...healthAndWellness,
  ...educationAndLearning,
  ...financialAndTradingTools,
  ...socialMediaTools,
  ...dataAnalyticsTools,
  ...communicationTools,
  ...aiSecurityTools,
  ...entertainmentTools,
  ...researchAndLearning,
  ...personalServices,
  ...newsAndInformationTools,
  ...ecommerceAndMarketingTools,
  ...legalProfessionals,
  ...resumeAndCareerTools,
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

// Extract priority tools and reorganize
const { priorityTools, remainingTools } = extractPriorityTools(baseTools);

// Combine all tools into a single array for easy access, with priority tools first
export const allTools: Tool[] = [
  ...priorityTools, // Keep priority tools first
  ...remainingTools
];

// Log the number of tools loaded
console.log(`Total tools loaded: ${allTools.length}`);

// Log the first 10 tool titles
console.log("First 10 tools:", allTools.slice(0, 10).map(tool => tool.title));
