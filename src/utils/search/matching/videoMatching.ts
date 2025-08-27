
import { Tool } from "@/types/tools";

export const matchTextToVideo = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    // Priority text-to-video tools
    const priorityVideoTools = [
      'luma labs dream machine',
      'luma dream machine',
      'pika labs',
      'google veo 3',
      'veo3',
      'veo 3',
      'kling ai',
      'kling',
      'hailuo ai',
      'higgsfield ai',
      'movie maker studio',
      'runwayml gen-2',
      'runwayml',
      'sora',
      'text to video prompt generator'
    ];
    
    if (priorityVideoTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General text-to-video matching
    if (lowerTitle.includes('text-to-video') || lowerDescription.includes('text-to-video') ||
        lowerTitle.includes('video generation') || lowerDescription.includes('video generation') ||
        lowerTitle.includes('ai video') || lowerDescription.includes('ai video') ||
        lowerCategory.includes('video generation') || lowerTags.some(tag => tag.includes('text-to-video'))) {
      return true;
    }
  }
  
  // Enhanced video search - match ANY tool with video in title/description/category/tags
  if (lowerSearchTerm === 'video' || lowerSearchTerm.includes('video')) {
    // Check if title contains "video"
    if (lowerTitle.includes('video')) {
      return true;
    }
    
    // Check if description contains "video"
    if (lowerDescription.includes('video')) {
      return true;
    }
    
    // Check if category contains "video"
    if (lowerCategory.includes('video')) {
      return true;
    }
    
    // Check if tags contain "video"
    if (lowerTags.some(tag => tag.includes('video'))) {
      return true;
    }
    
    // Priority text-to-video tools for higher scoring
    const textToVideoTools = [
      'luma labs dream machine',
      'luma dream machine', 
      'pika labs',
      'google veo 3',
      'veo3',
      'veo 3',
      'kling ai',
      'kling',
      'hailuo ai',
      'higgsfield ai',
      'movie maker studio',
      'runwayml gen-2',
      'runwayml',
      'sora',
      'text to video prompt generator',
      'video generation',
      'ai video'
    ];
    
    if (textToVideoTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
  }
  
  return false;
};

export const scoreTextToVideo = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    // Priority text-to-video tools
    if (lowerTitle.includes('luma labs dream machine') || lowerTitle.includes('luma dream machine')) {
      score += 1800; // Highest priority for text-to-video
    }
    if (lowerTitle.includes('pika labs')) {
      score += 1750;
    }
    if (lowerTitle.includes('google veo 3') || lowerTitle.includes('veo3') || lowerTitle.includes('veo 3')) {
      score += 1700;
    }
    if (lowerTitle.includes('kling ai') || lowerTitle.includes('kling')) {
      score += 1725;
    }
    if (lowerTitle.includes('hailuo ai') || lowerTitle.includes('hailuo')) {
      score += 1680;
    }
    if (lowerTitle.includes('higgsfield ai') || lowerTitle.includes('higgsfield')) {
      score += 1650;
    }
    if (lowerTitle.includes('movie maker studio')) {
      score += 1650;
    }
    if (lowerTitle.includes('runwayml gen-2') || lowerTitle.includes('runwayml')) {
      score += 1600;
    }
    if (lowerTitle.includes('sora')) {
      score += 1550;
    }
    if (lowerTitle.includes('text to video prompt generator')) {
      score += 1500;
    }
    
    // General text-to-video matching
    if (lowerTitle.includes('text-to-video')) {
      score += 1400;
    }
    if (lowerDescription.includes('text-to-video')) {
      score += 1200;
    }
    if (lowerTitle.includes('video generation')) {
      score += 1300;
    }
    if (lowerDescription.includes('video generation')) {
      score += 1100;
    }
    if (lowerTitle.includes('ai video')) {
      score += 1200;
    }
    if (lowerDescription.includes('ai video')) {
      score += 1000;
    }
    if (lowerCategory.includes('video generation')) {
      score += 1200;
    }
    if (lowerTags.some(tag => tag.includes('text-to-video'))) {
      score += 1100;
    }
  }
  
  // Enhanced scoring for general "video" search - prioritize text-to-video generators
  if (lowerSearchTerm === 'video' || (lowerSearchTerm.includes('video') && !lowerSearchTerm.includes('style'))) {
    if (lowerTitle.includes('luma labs dream machine') || lowerTitle.includes('luma dream machine')) {
      score += 1900; // Highest priority for video search
    }
    if (lowerTitle.includes('pika labs')) {
      score += 1850;
    }
    if (lowerTitle.includes('google veo 3') || lowerTitle.includes('veo3') || lowerTitle.includes('veo 3')) {
      score += 1800;
    }
    if (lowerTitle.includes('kling ai') || lowerTitle.includes('kling')) {
      score += 1825;
    }
    if (lowerTitle.includes('hailuo ai') || lowerTitle.includes('hailuo')) {
      score += 1775;
    }
    if (lowerTitle.includes('higgsfield ai') || lowerTitle.includes('higgsfield')) {
      score += 1725;
    }
    if (lowerTitle.includes('movie maker studio')) {
      score += 1750;
    }
    if (lowerTitle.includes('runwayml gen-2') || lowerTitle.includes('runwayml')) {
      score += 1700;
    }
    if (lowerTitle.includes('sora')) {
      score += 1650;
    }
    if (lowerTitle.includes('text to video')) {
      score += 1600;
    }
    if (lowerTitle.includes('video generation')) {
      score += 1500;
    }
    if (lowerTitle.includes('ai video')) {
      score += 1400;
    }
    if (lowerDescription.includes('video generation')) {
      score += 1300;
    }
    if (lowerDescription.includes('ai video')) {
      score += 1200;
    }
    if (lowerCategory.includes('video')) {
      score += 1000;
    }
    if (lowerTags.some(tag => tag.includes('video generation'))) {
      score += 1100;
    }
    if (lowerTags.some(tag => tag.includes('text-to-video'))) {
      score += 1200;
    }
  }
  
  return score;
};
