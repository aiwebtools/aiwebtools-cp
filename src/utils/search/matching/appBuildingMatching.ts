
import { Tool } from "@/types/tools";

export const matchAppBuilding = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // App building related searches
  if (lowerSearchTerm.includes('build app') || lowerSearchTerm.includes('app builder') ||
      lowerSearchTerm.includes('web app builder') || lowerSearchTerm.includes('create app') ||
      lowerSearchTerm.includes('make app') || lowerSearchTerm.includes('develop app') ||
      lowerSearchTerm.includes('bolt.new') || lowerSearchTerm.includes('bolt') ||
      lowerSearchTerm.includes('lovable.dev') || lowerSearchTerm.includes('lovable') ||
      lowerSearchTerm.includes('cursor') || lowerSearchTerm.includes('no-code') ||
      lowerSearchTerm.includes('low-code')) {
    
    // Priority app building tools
    const priorityAppBuildingTools = [
      'lovable.dev',
      'bolt.new',
      'cursor',
      'webflow',
      'framer',
      'bubble',
      'glide'
    ];
    
    if (priorityAppBuildingTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General app building matching
    if (lowerTitle.includes('app builder') || lowerDescription.includes('app builder') ||
        lowerTitle.includes('web app') || lowerDescription.includes('web app') ||
        lowerTitle.includes('build app') || lowerDescription.includes('build app') ||
        lowerTitle.includes('no-code') || lowerDescription.includes('no-code') ||
        lowerTitle.includes('low-code') || lowerDescription.includes('low-code') ||
        lowerCategory.includes('development') || lowerCategory.includes('coding') ||
        lowerTags.some(tag => tag.includes('app builder') || tag.includes('web builder') || 
                           tag.includes('no-code') || tag.includes('low-code'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreAppBuilding = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('build app') || lowerSearchTerm.includes('app builder') ||
      lowerSearchTerm.includes('web app builder') || lowerSearchTerm.includes('create app') ||
      lowerSearchTerm.includes('make app') || lowerSearchTerm.includes('develop app') ||
      lowerSearchTerm.includes('bolt.new') || lowerSearchTerm.includes('bolt') ||
      lowerSearchTerm.includes('lovable.dev') || lowerSearchTerm.includes('lovable') ||
      lowerSearchTerm.includes('cursor') || lowerSearchTerm.includes('no-code') ||
      lowerSearchTerm.includes('low-code')) {
    
    // Top priority app building tools
    if (lowerTitle.includes('lovable.dev') || lowerTitle.includes('lovable')) {
      score += 2000; // Highest priority for app building
    }
    if (lowerTitle.includes('bolt.new') || lowerTitle.includes('bolt')) {
      score += 1950; // Second highest
    }
    if (lowerTitle.includes('cursor')) {
      score += 1900; // Third highest
    }
    if (lowerTitle.includes('webflow')) {
      score += 1850;
    }
    if (lowerTitle.includes('framer')) {
      score += 1800;
    }
    if (lowerTitle.includes('bubble')) {
      score += 1750;
    }
    if (lowerTitle.includes('glide')) {
      score += 1700;
    }
    
    // General app building matching
    if (lowerTitle.includes('app builder')) {
      score += 1600;
    }
    if (lowerDescription.includes('app builder')) {
      score += 1300;
    }
    if (lowerTitle.includes('web app')) {
      score += 1500;
    }
    if (lowerDescription.includes('web app')) {
      score += 1200;
    }
    if (lowerTitle.includes('build app')) {
      score += 1400;
    }
    if (lowerDescription.includes('build app')) {
      score += 1100;
    }
    if (lowerTitle.includes('no-code') || lowerTitle.includes('low-code')) {
      score += 1300;
    }
    if (lowerDescription.includes('no-code') || lowerDescription.includes('low-code')) {
      score += 1000;
    }
    if (lowerCategory.includes('development') || lowerCategory.includes('coding')) {
      score += 1200;
    }
    if (lowerTags.some(tag => tag.includes('app builder') || tag.includes('web builder'))) {
      score += 1100;
    }
    if (lowerTags.some(tag => tag.includes('no-code') || tag.includes('low-code'))) {
      score += 1000;
    }
  }
  
  return score;
};
