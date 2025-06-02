
import { Tool } from "@/types/tools";
import { VIDEO_KEYWORDS } from "./constants";

// Check if a tool is video-related based on its properties
export const isVideoRelatedTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  // Check for video keywords in the content
  const hasVideoKeyword = VIDEO_KEYWORDS.some(keyword => searchText.includes(keyword));
  
  // Check for video-related categories
  const hasVideoCategory = tool.category && (
    tool.category.toLowerCase().includes('video') ||
    tool.category.toLowerCase().includes('film') ||
    tool.category.toLowerCase().includes('movie') ||
    tool.category.toLowerCase().includes('cinema') ||
    tool.category.toLowerCase().includes('multimedia') ||
    tool.category.toLowerCase().includes('content creation') ||
    tool.category.toLowerCase().includes('entertainment')
  );
  
  // Check for video URLs
  const hasVideoUrl = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Tool is video-related if it has video keywords, video category, or video URL
  return hasVideoKeyword || hasVideoCategory || hasVideoUrl;
};
