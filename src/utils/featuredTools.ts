
import { Tool } from "@/types/tools";

// Create featured tools by selecting diverse tools from different categories
export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  return [
    allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
    allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
    allTools.find(tool => tool.title.includes("SUNO")) || allTools[2],
    allTools.find(tool => tool.title.includes("Business Plan")) || allTools[3],
    allTools.find(tool => tool.title.includes("SORA")) || allTools[4],
    allTools.find(tool => tool.title.includes("Ideogram")) || allTools[5]
  ];
};
