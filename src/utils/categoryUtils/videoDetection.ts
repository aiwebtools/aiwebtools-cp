
import { Tool } from "@/types/tools";
import { VIDEO_KEYWORDS } from "./constants";

// Check if a tool is video-related based on its properties
export const isVideoRelatedTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  return VIDEO_KEYWORDS.some(keyword => searchText.includes(keyword));
};
