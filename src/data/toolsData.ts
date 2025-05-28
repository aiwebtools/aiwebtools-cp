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
  educationAndLearning,
  creativeAndEntertainment,
  researchAndLearning,
  aiToolsAndUtilities,
  healthcareProfessionals,
  legalProfessionals,
  emergencyServices,
  creativeServices,
  personalServices
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
  ...specializedTools,
  ...creativeAndEntertainment,
  ...researchAndLearning,
  ...aiToolsAndUtilities,
  ...healthcareProfessionals,
  ...legalProfessionals,
  ...emergencyServices,
  ...creativeServices,
  ...personalServices
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
      (searchTerm.includes('ideogram') && lowerTitle.includes('ideogram')),
      
      // Fun & Entertainment
      (searchTerm.includes('fun') && lowerCategory.includes('fun')),
      (searchTerm.includes('game') && (lowerTitle.includes('game') || lowerTags.some(tag => tag.includes('game')))),
      (searchTerm.includes('entertainment') && lowerCategory.includes('entertainment')),
      (searchTerm.includes('celebrity') && lowerTitle.includes('celebrity')),
      (searchTerm.includes('dream') && lowerTitle.includes('dream')),
      (searchTerm.includes('matrix') && lowerTitle.includes('matrix')),
      (searchTerm.includes('trivia') && lowerTitle.includes('trivia')),
      
      // Hobbies & Interests
      (searchTerm.includes('fishing') && lowerTitle.includes('fisherman')),
      (searchTerm.includes('fish') && lowerTitle.includes('fisherman')),
      (searchTerm.includes('survival') && lowerTitle.includes('survivalist')),
      (searchTerm.includes('travel') && lowerTitle.includes('travel')),
      (searchTerm.includes('collectible') && lowerTitle.includes('collectible')),
      (searchTerm.includes('antique') && lowerTitle.includes('antique')),
      (searchTerm.includes('mushroom') && lowerTitle.includes('fungus')),
      (searchTerm.includes('fungus') && lowerTitle.includes('fungus')),
      
      // Food & Culinary
      (searchTerm.includes('food') && (lowerTitle.includes('food') || lowerCategory.includes('food'))),
      (searchTerm.includes('recipe') && lowerTags.some(tag => tag.includes('recipe'))),
      (searchTerm.includes('cooking') && lowerTags.some(tag => tag.includes('cooking'))),
      (searchTerm.includes('chef') && lowerTitle.includes('chef')),
      (searchTerm.includes('restaurant') && lowerTitle.includes('restaurant')),
      (searchTerm.includes('cocktail') && lowerTitle.includes('mixologist')),
      (searchTerm.includes('bartender') && lowerTitle.includes('mixologist')),
      
      // Health & Medical
      (searchTerm.includes('doctor') && lowerTitle.includes('doctor')),
      (searchTerm.includes('medical') && lowerCategory.includes('medical')),
      (searchTerm.includes('pharmacy') && lowerTitle.includes('pharmaceutical')),
      (searchTerm.includes('mental') && lowerTitle.includes('mental')),
      (searchTerm.includes('veterinarian') && lowerTitle.includes('veterinarian')),
      (searchTerm.includes('vet') && lowerTitle.includes('veterinarian')),
      (searchTerm.includes('pet') && lowerTitle.includes('veterinarian')),
      
      // Utility & Conversion
      (searchTerm.includes('binary') && lowerTitle.includes('binary')),
      (searchTerm.includes('convert') && lowerTitle.includes('convert')),
      (searchTerm.includes('utility') && lowerCategory.includes('utility')),
      (searchTerm.includes('prompt') && lowerTitle.includes('prompt')),
      
      // Ethical & Philosophical
      (searchTerm.includes('philosophy') && lowerTags.some(tag => tag.includes('philosophy'))),
      (searchTerm.includes('peace') && lowerTitle.includes('peace')),
      (searchTerm.includes('wisdom') && lowerTags.some(tag => tag.includes('wisdom'))),
      (searchTerm.includes('sustainable') && lowerTitle.includes('sustainable')),
      (searchTerm.includes('environment') && lowerTags.some(tag => tag.includes('environment'))),
      
      // Legal & Governmental
      (searchTerm.includes('contract') && lowerTitle.includes('contract')),
      (searchTerm.includes('legislation') && lowerTitle.includes('legislation')),
      (searchTerm.includes('cyber') && lowerTitle.includes('cyber')),
      (searchTerm.includes('security') && lowerTitle.includes('security')),
      (searchTerm.includes('fact') && lowerTitle.includes('fact')),
      
      // Real Estate & Property
      (searchTerm.includes('home') && lowerTitle.includes('home')),
      (searchTerm.includes('property') && lowerTitle.includes('property')),
      (searchTerm.includes('renovation') && lowerTitle.includes('renovator')),
      (searchTerm.includes('repair') && lowerTags.some(tag => tag.includes('repair'))),
      
      // Automotive
      (searchTerm.includes('car') && lowerTitle.includes('automobile')),
      (searchTerm.includes('auto') && lowerTitle.includes('automobile')),
      (searchTerm.includes('vehicle') && lowerTags.some(tag => tag.includes('vehicle'))),
      
      // AI Tool Aggregators
      (searchTerm.includes('ai tools') && lowerCategory.includes('aggregators')),
      (searchTerm.includes('tool finder') && lowerTitle.includes('finder')),
      (searchTerm.includes('1000') && lowerTitle.includes('1000')),
      (searchTerm.includes('list') && lowerTitle.includes('list'))
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
