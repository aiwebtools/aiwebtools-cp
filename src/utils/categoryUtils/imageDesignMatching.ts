
import { Tool } from "@/types/tools";
import { applyAIWebToolsPrioritization } from "@/utils/aiWebToolsPrioritization";
import { isVideoEntertainmentTool, isCoreImageTool, isPureDesignTool, isCategoryMatch } from "./exclusions";

/**
 * Priority tools that should appear at the top of Image & Design category
 */
const PRIORITY_IMAGE_TOOLS = [
  "GPT-4o Image Generation",
  "Google Whisk", 
  "Midjourney",
  "Leonardo AI",
  "Ideogram",
  "Flux AI"
];

/**
 * Check if a tool is one of the priority image tools
 */
const isPriorityImageTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  return PRIORITY_IMAGE_TOOLS.some(priorityTool => {
    const priorityLower = priorityTool.toLowerCase();
    return title.includes(priorityLower) || 
           title.includes(priorityLower.replace(/\s+/g, '')) ||
           (priorityTool === "Midjourney" && title.includes("midjourney")) ||
           (priorityTool === "Leonardo AI" && title.includes("leonardo")) ||
           (priorityTool === "Ideogram" && title.includes("ideogram")) ||
           (priorityTool === "Flux AI" && title.includes("flux")) ||
           (priorityTool === "Google Whisk" && title.includes("whisk")) ||
           (priorityTool === "GPT-4o Image Generation" && (title.includes("gpt-4o") || title.includes("dalle")));
  });
};

/**
 * Get tools specifically for Image & Design category with strict filtering and priority ordering
 */
export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  if (import.meta.env.DEV) console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  const imageDesignTools = tools.filter(tool => {
    // EXCLUDE video/entertainment tools FIRST (HIGHEST EXCLUSION PRIORITY)
    if (isVideoEntertainmentTool(tool)) {
      if (import.meta.env.DEV) console.log(`❌ EXCLUDING video/entertainment tool: ${tool.title}`);
      return false;
    }
    
    // Include tools that match image/design criteria OR are priority tools
    if (isPriorityImageTool(tool) || isCoreImageTool(tool) || isPureDesignTool(tool) || isCategoryMatch(tool)) {
      const matchType = isPriorityImageTool(tool) ? 'PRIORITY' : 
                       isCoreImageTool(tool) ? 'core-image' : 
                       isPureDesignTool(tool) ? 'pure-design' : 'category-match';
      if (import.meta.env.DEV) console.log(`✅ Including in Image & Design: ${tool.title} (${matchType})`);
      return true;
    }
    
    return false;
  });

  // 🚀 Apply AI Web Tools GPT prioritization (GPTs with videos/images first)
  const prioritizedTools = applyAIWebToolsPrioritization(imageDesignTools);
  
  if (import.meta.env.DEV) console.log(`🎨 Image & Design category: ${prioritizedTools.length} tools with AI Web Tools GPTs prioritized first`);
  
  return prioritizedTools;
};
