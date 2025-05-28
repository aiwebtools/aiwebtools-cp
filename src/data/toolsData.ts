
import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  aiDevelopmentAndPlatforms,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche,
  educationAndLearning
} from './tools';

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
  ...aiDevelopmentAndPlatforms,
  ...writingAndContent,
  ...imageAndDesign,
  ...videoTools,
  ...audioMusicTools,
  ...businessAndProductivity,
  ...educationAndLearning,
  ...specializedAndNiche,
  ...businessTools,
  ...aiAssistants,
  ...aiArtTools,
  ...contentCreationTools,
  ...aiToolsAndDevelopment,
  ...specializedTools
];

// Create featured tools by selecting diverse tools from different categories
export const featuredTools: Tool[] = [
  allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
  allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
  allTools.find(tool => tool.title.includes("SUNO")) || allTools[2],
  allTools.find(tool => tool.title.includes("Business Plan")) || allTools[3],
  allTools.find(tool => tool.title.includes("SORA")) || allTools[4],
  allTools.find(tool => tool.title.includes("Ideogram")) || allTools[5]
];

// Enhanced search function with comprehensive keywords and fuzzy matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase();
  
  // Helper function to check if a tool matches the search term
  const matchesTool = (tool: Tool, searchTerm: string): boolean => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    // Direct matches
    if (lowerTitle.includes(searchTerm) || 
        lowerDescription.includes(searchTerm) || 
        lowerCategory.includes(searchTerm) || 
        lowerTags.some(tag => tag.includes(searchTerm))) {
      return true;
    }
    
    // Fuzzy matching for tool names - if user types partial name, find the tool
    const titleWords = lowerTitle.split(' ');
    const searchWords = searchTerm.split(' ');
    
    // Check if all search words match at least one title word (partial matching)
    const allWordsMatch = searchWords.every(searchWord => 
      titleWords.some(titleWord => titleWord.includes(searchWord) || searchWord.includes(titleWord))
    );
    
    if (allWordsMatch) return true;
    
    // Special handling for common abbreviations and variations
    const specialMatches = [
      // Educational tools
      (searchTerm.includes('learn') && (lowerTitle.includes('learn') || lowerCategory.includes('education'))),
      (searchTerm.includes('skill') && lowerTitle.includes('skill')),
      (searchTerm.includes('course') && lowerTitle.includes('course')),
      (searchTerm.includes('education') && lowerCategory.includes('education')),
      (searchTerm.includes('college') && lowerTitle.includes('college')),
      (searchTerm.includes('school') && (lowerTitle.includes('school') || lowerCategory.includes('education'))),
      
      // Business tools
      (searchTerm.includes('business') && (lowerTitle.includes('business') || lowerCategory.includes('business'))),
      (searchTerm.includes('startup') && lowerTitle.includes('startup')),
      (searchTerm.includes('entrepreneur') && lowerTags.some(tag => tag.includes('entrepreneur'))),
      
      // AI Development
      (searchTerm.includes('ai') && lowerTitle.includes('ai')),
      (searchTerm.includes('gpt') && lowerTitle.includes('gpt')),
      (searchTerm.includes('chat') && lowerTitle.includes('chat')),
      (searchTerm.includes('claude') && lowerTitle.includes('claude')),
      (searchTerm.includes('gemini') && lowerTitle.includes('gemini')),
      
      // Video & Audio
      (searchTerm.includes('video') && (lowerTitle.includes('video') || lowerCategory.includes('video'))),
      (searchTerm.includes('music') && (lowerTitle.includes('music') || lowerCategory.includes('audio'))),
      (searchTerm.includes('sora') && lowerTitle.includes('sora')),
      (searchTerm.includes('runway') && lowerTitle.includes('runway')),
      (searchTerm.includes('suno') && lowerTitle.includes('suno')),
      
      // Specialized tools
      (searchTerm.includes('legal') && lowerTags.some(tag => tag.includes('legal'))),
      (searchTerm.includes('medical') && lowerTags.some(tag => tag.includes('medical'))),
      (searchTerm.includes('health') && lowerTags.some(tag => tag.includes('health'))),
      (searchTerm.includes('cannabis') && lowerTitle.includes('cannabis')),
      (searchTerm.includes('automotive') && lowerTags.some(tag => tag.includes('automotive'))),
      (searchTerm.includes('real estate') && lowerTags.some(tag => tag.includes('real estate') || tag.includes('property'))),
      
      // Historical & Cultural
      (searchTerm.includes('history') && lowerTags.some(tag => tag.includes('history') || tag.includes('historical'))),
      (searchTerm.includes('time') && lowerTitle.includes('time')),
      
      // Science & Engineering
      (searchTerm.includes('science') && lowerTags.some(tag => tag.includes('science') || tag.includes('physics'))),
      (searchTerm.includes('engineering') && lowerTags.some(tag => tag.includes('engineering'))),
      (searchTerm.includes('einstein') && lowerTitle.includes('einstein')),
      (searchTerm.includes('tesla') && lowerTitle.includes('tesla')),
      
      // Image & Design
      (searchTerm.includes('image') && (lowerTitle.includes('image') || lowerCategory.includes('image'))),
      (searchTerm.includes('design') && (lowerTitle.includes('design') || lowerCategory.includes('design'))),
      (searchTerm.includes('art') && (lowerTitle.includes('art') || lowerCategory.includes('art'))),
      (searchTerm.includes('midjourney') && lowerTitle.includes('midjourney')),
      (searchTerm.includes('ideogram') && lowerTitle.includes('ideogram'))
    ];
    
    return specialMatches.some(match => match);
  };
  
  return tools.filter(tool => matchesTool(tool, term));
};

// Helper function to get categories with counts
export const getCategoriesWithCounts = (): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};
