
import { Tool } from "@/types/tools";
import { aiGenerativeTools } from "./tools/aiGenerativeTools";
import { aiProductivityTools } from "./tools/aiProductivityTools";
import { aiLegalTools } from "./tools/aiLegalTools";
import { aiSecurityTools } from "./tools/aiSecurityTools";
import { aiFinanceTools } from "./tools/aiFinanceTools";
import { aiHealthcareTools } from "./tools/aiHealthcareTools";
import { aiProductivitySuite } from "./tools/aiProductivitySuite";
import { aiEducationTools } from "./tools/aiEducationTools";
import { aiArtTools } from "./tools/aiArtTools";
import { utilitiesTools } from "./tools/utilitiesTools";
import { aiResearchTools } from "./tools/aiResearchTools";
import { threeDAndVisualizationTools } from "./tools/threeDAndVisualizationTools";
import { spiritualityTools } from "./tools/spiritualityTools";
import { aiImageGeneration } from "./tools/aiImageGeneration";
import { aiAssistants } from "./tools/aiAssistants";
import { aiInferencePlatforms } from "./tools/aiInferencePlatforms";
import { writingAndContent } from "./tools/writingAndContent";
import { writingAndContentEnhancement } from "./tools/writingAndContentEnhancement";
import { aiChatPlatforms } from "./tools/aiChatPlatforms";
import { webDevelopmentTools } from "./tools/webDevelopmentTools";
import { technicalAndUtilityTools } from "./tools/technicalAndUtilityTools";
// Import new tool categories
import { aiVideoTools } from "./tools/aiVideoTools";
import { aiCodeAssistants } from "./tools/aiCodeAssistants";
import { aiMusicTools } from "./tools/aiMusicTools";

export function getAllToolCategories(): Tool[] {
  return [
    ...aiGenerativeTools,
    ...aiProductivityTools,
    ...aiLegalTools,
    ...aiSecurityTools,
    ...aiFinanceTools,
    ...aiHealthcareTools,
    ...aiProductivitySuite,
    ...aiEducationTools,
    ...aiArtTools,
    ...utilitiesTools,
    ...aiResearchTools,
    ...threeDAndVisualizationTools,
    ...spiritualityTools,
    ...aiImageGeneration,
    ...aiAssistants,
    ...aiInferencePlatforms,
    ...writingAndContent,
    ...writingAndContentEnhancement,
    ...aiChatPlatforms,
    ...webDevelopmentTools,
    ...technicalAndUtilityTools,
    // Add new tool categories
    ...aiVideoTools,
    ...aiCodeAssistants,
    ...aiMusicTools
  ];
}
