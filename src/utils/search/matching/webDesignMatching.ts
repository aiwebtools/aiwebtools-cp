
import { Tool } from "@/types/tools";

export const matchWebDesign = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('web design') || lowerSearchTerm.includes('website design') ||
      lowerSearchTerm.includes('web development') || lowerSearchTerm.includes('website development')) {
    // Priority web design tools
    const priorityWebDesignTools = [
      'lovable.dev',
      'bolt.new',
      'figma',
      'canva',
      'webflow',
      'framer'
    ];
    
    if (priorityWebDesignTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General web design matching
    if (lowerTitle.includes('web design') || lowerDescription.includes('web design') ||
        lowerTitle.includes('website') || lowerDescription.includes('website') ||
        lowerTitle.includes('web development') || lowerDescription.includes('web development') ||
        lowerCategory.includes('web') || lowerTags.some(tag => tag.includes('web'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreWebDesign = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('web design') || lowerSearchTerm.includes('website design') ||
      lowerSearchTerm.includes('web development') || lowerSearchTerm.includes('website development')) {
    // Top priority web design tools
    if (lowerTitle.includes('lovable.dev')) {
      score += 1900; // Highest priority for web design
    }
    if (lowerTitle.includes('bolt.new')) {
      score += 1850; // Second highest
    }
    if (lowerTitle.includes('figma')) {
      score += 1800;
    }
    if (lowerTitle.includes('canva')) {
      score += 1750;
    }
    if (lowerTitle.includes('webflow')) {
      score += 1700;
    }
    if (lowerTitle.includes('framer')) {
      score += 1650;
    }
    
    // General web design matching
    if (lowerTitle.includes('web design')) {
      score += 1500;
    }
    if (lowerDescription.includes('web design')) {
      score += 1200;
    }
    if (lowerTitle.includes('website')) {
      score += 1400;
    }
    if (lowerDescription.includes('website')) {
      score += 1100;
    }
    if (lowerCategory.includes('web')) {
      score += 1300;
    }
    if (lowerTags.some(tag => tag.includes('web'))) {
      score += 1200;
    }
  }
  
  return score;
};

export const matchTextToWebsite = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Enhanced text-to-website matching
  if (lowerSearchTerm.includes('text to website') || lowerSearchTerm.includes('text-to-website') ||
      lowerSearchTerm.includes('text to website generator') || lowerSearchTerm.includes('website generator') ||
      lowerSearchTerm.includes('website builder') || lowerSearchTerm.includes('site generator') ||
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('website'))) {
    
    // Priority text-to-website tools
    const priorityTextToWebsiteTools = [
      'lovable.dev',
      'bolt.new',
      'webflow',
      'framer',
      'durable ai website builder',
      'windsurf'
    ];
    
    if (priorityTextToWebsiteTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General text-to-website matching
    if (lowerTitle.includes('text-to-website') || lowerDescription.includes('text-to-website') ||
        lowerTitle.includes('website builder') || lowerDescription.includes('website builder') ||
        lowerTitle.includes('site generator') || lowerDescription.includes('site generator') ||
        lowerTitle.includes('website generator') || lowerDescription.includes('website generator') ||
        lowerCategory.includes('website builder') || lowerTags.some(tag => tag.includes('text-to-website') || tag.includes('website builder'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreTextToWebsite = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('text to website') || lowerSearchTerm.includes('text-to-website') ||
      lowerSearchTerm.includes('text to website generator') || lowerSearchTerm.includes('website generator') ||
      lowerSearchTerm.includes('website builder') || lowerSearchTerm.includes('site generator') ||
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('website'))) {
    
    // Top priority text-to-website tools
    if (lowerTitle.includes('lovable.dev')) {
      score += 2100; // Highest priority for text-to-website
    }
    if (lowerTitle.includes('bolt.new')) {
      score += 2050; // Second highest
    }
    if (lowerTitle.includes('durable ai website builder')) {
      score += 2000; // High priority for dedicated website builder
    }
    if (lowerTitle.includes('windsurf')) {
      score += 1950; // High priority for coding/website tool
    }
    if (lowerTitle.includes('webflow')) {
      score += 1900;
    }
    if (lowerTitle.includes('framer')) {
      score += 1850;
    }
    
    // General text-to-website matching
    if (lowerTitle.includes('text-to-website') || lowerTitle.includes('website builder')) {
      score += 1700;
    }
    if (lowerDescription.includes('text-to-website') || lowerDescription.includes('website builder')) {
      score += 1400;
    }
    if (lowerTitle.includes('website generator') || lowerTitle.includes('site generator')) {
      score += 1600;
    }
    if (lowerDescription.includes('website generator') || lowerDescription.includes('site generator')) {
      score += 1300;
    }
    if (lowerCategory.includes('website builder')) {
      score += 1500;
    }
    if (lowerTags.some(tag => tag.includes('text-to-website') || tag.includes('website builder'))) {
      score += 1400;
    }
  }
  
  return score;
};
