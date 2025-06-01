
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

// NEW TOP PRIORITY TOOL - TIME MACHINE GPT COLLECTION
const topPriorityTool: Tool = {
  title: "AI TOOLS collection for this TIME MACHINE GPT",
  description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination. This comprehensive AI tools collection provides access to advanced time travel simulation and historical exploration capabilities.",
  emoji: "⏰",
  color: "from-purple-500 to-blue-600",
  directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
  videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
  imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298793409806528/time.webp",
  tags: ["time travel", "history exploration", "historical figures", "alternative realities", "time periods", "aiwebtools", "collection"],
  category: "Time & History",
  rating: 4.9,
  totalVotes: 8945
};

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  // TOP PRIORITY TOOL AT THE VERY BEGINNING
  topPriorityTool,
  
  // TIME-BASED TOOLS AT THE TOP (as requested)
  ...timeAndHistoryGPTs,
  
  // INDUSTRY-SPECIFIC SOLUTIONS TOWARDS THE TOP (as requested)
  ...businessAndFinanceGPTs,
  ...professionalServicesGPTs,
  ...healthAndWellnessGPTs,
  ...legalAndGovernmentGPTs,
  ...appraisalAndValuationGPTs,
  
  // CORE FUNCTIONAL CATEGORIES
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...scienceAndResearchGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  
  // SPIRITUALITY MOVED TO THE BOTTOM (as requested)
  ...spiritualAndPhilosophyGPTs,
  
  // Additional GPTs will be added here as new category files are created
];
