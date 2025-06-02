
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
    if (lowerTitle.includes('google veo 3') || lowerTitle.includes('veo3')) {
      score += 1700;
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
  
  return score;
};
