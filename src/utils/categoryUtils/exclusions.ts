
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
 * Check if a tool is a core image generation tool - EXPANDED
 */
export const isCoreImageTool = (tool: Tool): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  const imageKeywords = [
    'image generator', 'photo generator', 'ai image', 'picture generator',
    'image generation', 'generate images', 'create images', 'image creator',
    'image maker', 'image editing', 'photo editing', 'image enhancement',
    'image upscale', 'upscaler', 'background removal', 'background remover',
    'image restoration', 'colorize', 'colorization', 'ai photo', 'ai art',
    'text to image', 'text-to-image', 'image synthesis', 'diffusion',
    'stable diffusion', 'midjourney', 'dall-e', 'dalle', 'leonardo',
    'ideogram', 'flux', 'imagen', 'firefly', 'canva ai', 'adobe ai',
    'headshot', 'portrait', 'avatar generator', 'face generator', 'face swap',
    'qr code', 'icon generator', 'thumbnail', 'banner', 'poster maker'
  ];
  
  const haystack = `${lowerTitle} ${lowerDescription} ${lowerTags}`;
  return imageKeywords.some(kw => haystack.includes(kw));
};

/**
 * Check if a tool is a pure design tool - EXPANDED
 */
export const isPureDesignTool = (tool: Tool): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  const designKeywords = [
    'graphic design', 'logo design', 'sketch', 'tattoo', 'palette',
    'avatar', 'meme', 'design', 'designer', 'illustration', 'illustrator',
    'mockup', 'wireframe', 'prototype', 'ui design', 'ux design',
    'web design', 'brand', 'branding', 'visual identity', 'infographic',
    'presentation design', 'slide design', 'poster', 'flyer', 'brochure',
    'business card', 'social media design', 'template', 'layout', 'creative suite',
    'vector', 'svg', 'icon', 'emoji', 'sticker', 'coloring book', 'art generator'
  ];
  
  const haystack = `${lowerTitle} ${lowerDescription} ${lowerTags}`;
  
  // Exclude if it's clearly video/music focused
  const isVideoMusic = lowerTitle.includes('movie') || lowerTitle.includes('music') || 
                       lowerTitle.includes('video') || lowerTitle.includes('film');
  
  return !isVideoMusic && designKeywords.some(kw => haystack.includes(kw));
};

/**
 * Check if a tool matches image/design categories - EXPANDED
 */
export const isCategoryMatch = (tool: Tool): boolean => {
  const lowerCategory = tool.category?.toLowerCase() || '';
  
  const imageDesignCategories = [
    'image', 'design', 'photo', 'graphic', 'visual', 'art',
    'illustration', 'creative design', 'ai art', 'image generation'
  ];
  
  return imageDesignCategories.some(cat => lowerCategory.includes(cat));
};
