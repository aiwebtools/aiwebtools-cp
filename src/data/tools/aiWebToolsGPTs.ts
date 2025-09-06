
import { Tool } from "@/types/tools";
import { appraisalAndValuationGPTs } from "./aiWebTools/appraisalAndValuationGPTs";
import { healthAndWellnessGPTs } from "./aiWebTools/healthAndWellnessGPTs";
import { businessAndFinanceGPTs } from "./aiWebTools/businessAndFinanceGPTs";
import { educationAndLearningGPTs } from "./aiWebTools/educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./aiWebTools/entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./aiWebTools/creativeAndMediaGPTs";
import { timeAndHistoryGPTs } from "./aiWebTools/timeAndHistoryGPTs";
import { spiritualAndPhilosophyGPTs } from "./aiWebTools/spiritualAndPhilosophyGPTs";
import { scienceAndResearchGPTs } from "./aiWebTools/scienceAndResearchGPTs";
import { legalAndGovernmentGPTs } from "./aiWebTools/legalAndGovernmentGPTs";
import { professionalServicesGPTs } from "./aiWebTools/professionalServicesGPTs";
import { multimediaAndContentGPTs } from "./aiWebTools/multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./aiWebTools/mysteriousAndUnusualGPTs";
import { newSpecializedGPTs } from "./aiWebTools/newSpecializedGPTs";
import { inspectorAndSafetyGPTs } from "./aiWebTools/inspectorAndSafetyGPTs";

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  ...appraisalAndValuationGPTs,
  ...healthAndWellnessGPTs,
  ...businessAndFinanceGPTs,
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...timeAndHistoryGPTs,
  ...spiritualAndPhilosophyGPTs,
  ...scienceAndResearchGPTs,
  ...legalAndGovernmentGPTs,
  ...professionalServicesGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  ...newSpecializedGPTs,
  ...inspectorAndSafetyGPTs,
  // Additional GPTs will be added here as new category files are created
];
