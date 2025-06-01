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
import { Film } from "lucide-react";

// NEW TOP PRIORITY TOOL - MOVIE MAKER STUDIO AI SUITE
const topPriorityTool: Tool = {
  icon: Film,
  title: "Movie Maker Studio AI SUITE",
  description: "-Full-Blown Music Video & Music Production Creative Suite- Transform yourself into the star of cinematic-quality music videos with our cutting-edge AI director. Build scene-by-scene visuals where you and even your band are featured in vivid, realistic scenes tied to your music.",
  emoji: "🎬",
  color: "from-purple-500 to-pink-600",
  directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
  videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cwMTA2MjAyNQ",
  tags: ["movie production", "music videos", "AI director", "cinematic quality", "scene creation", "aiwebtools", "creative suite"],
  category: "Creative & Media",
  rating: 4.9,
  totalVotes: 7234
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
