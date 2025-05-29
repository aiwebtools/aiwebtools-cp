
import { Tool } from "@/types/tools";

// Create featured tools by selecting diverse tools from different categories
export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  // Only select real, legitimate tools for featuring
  const realTools = [
    allTools.find(tool => tool.title.includes("Claude")),
    allTools.find(tool => tool.title.includes("Midjourney")),
    allTools.find(tool => tool.title.includes("ChatGPT")),
    allTools.find(tool => tool.title.includes("DALL·E")),
    allTools.find(tool => tool.title.includes("Runway")),
    allTools.find(tool => tool.title.includes("Synthesia"))
  ].filter(Boolean);

  // Add fallbacks from existing popular real tools if we don't have enough
  const fallbacks = allTools.slice(0, 6);

  // Combine and ensure we have exactly 6 tools
  const combined = [...realTools, ...fallbacks];
  return combined.slice(0, 6);
};
