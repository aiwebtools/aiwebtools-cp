
import { Tool } from "@/types/tools";

/**
 * Check if a tool is a video/entertainment tool that should be excluded from Image & Design
 */
export const isVideoEntertainmentTool = (tool: Tool): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  
  return lowerTitle.includes('movie maker studio') ||
         lowerTitle.includes('music video maker') ||
         lowerTitle.includes('stagemaster') ||
         lowerTitle.includes('video maker') ||
         lowerTitle.includes('music video') ||
         lowerTitle.includes('stage master') ||
         lowerTitle.includes('performing arts') ||
         (lowerTitle.includes('video') && !lowerTitle.includes('image')) ||
         (lowerTitle.includes('music') && !lowerTitle.includes('design')) ||
         lowerTitle.includes('movie') ||
         lowerTitle.includes('film');
};

/**
 * Check if a tool is a core image generation tool
 */
export const isCoreImageTool = (tool: Tool): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  
  return lowerTitle.includes('image generator') ||
         lowerTitle.includes('photo generator') ||
         lowerTitle.includes('ai image') ||
         lowerTitle.includes('picture generator') ||
         lowerDescription.includes('image generation') ||
         lowerDescription.includes('ai image') ||
         lowerDescription.includes('generate images') ||
         lowerDescription.includes('create images');
};

/**
 * Check if a tool is a pure design tool
 */
export const isPureDesignTool = (tool: Tool): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  
  return lowerTitle.includes('graphic design') ||
         lowerTitle.includes('logo design') ||
         lowerTitle.includes('sketch') ||
         lowerTitle.includes('tattoo') ||
         lowerTitle.includes('palette') ||
         lowerTitle.includes('avatar') ||
         lowerTitle.includes('meme') ||
         (lowerTitle.includes('design') && !lowerTitle.includes('movie') && !lowerTitle.includes('music') && !lowerTitle.includes('video')) ||
         lowerDescription.includes('graphic design') ||
         lowerDescription.includes('logo design') ||
         lowerDescription.includes('visual design');
};

/**
 * Check if a tool matches image/design categories
 */
export const isCategoryMatch = (tool: Tool): boolean => {
  const lowerCategory = tool.category?.toLowerCase() || '';
  
  return lowerCategory.includes('image') ||
         lowerCategory.includes('design') ||
         lowerCategory.includes('photo') ||
         lowerCategory.includes('graphic');
};
