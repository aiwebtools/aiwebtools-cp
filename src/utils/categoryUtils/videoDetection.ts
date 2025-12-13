
import { Tool } from "@/types/tools";
import { VIDEO_KEYWORDS } from "./constants";

// Check if a tool is video-related based on its properties
// NOTE: Having a videoUrl does NOT make a tool video-related - that's just a demo video
export const isVideoRelatedTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  // Check for video keywords in the content (title, description, tags)
  const hasVideoKeyword = VIDEO_KEYWORDS.some(keyword => searchText.includes(keyword));
  
  // Check for video-related categories - must be PRIMARY video category
  const hasVideoCategory = tool.category && (
    tool.category.toLowerCase().includes('video') ||
    tool.category.toLowerCase().includes('film') ||
    tool.category.toLowerCase().includes('movie') ||
    tool.category.toLowerCase().includes('cinema') ||
    tool.category.toLowerCase().includes('multimedia') ||
    tool.category.toLowerCase() === 'video & multimedia' ||
    tool.category.toLowerCase() === 'video & content tools'
  );
  
  // Tool is video-related ONLY if it has video keywords in content OR video category
  // Having a videoUrl property is NOT sufficient - that's just a demo/promo video
  return hasVideoKeyword || hasVideoCategory;
};
