
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
  // Additional GPTs will be added here as new category files are created
];
