
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
  personalServices,
  specializedPolicyTools,
  artAndCollectibles,
  aiChatPlatforms,
  aiDevelopmentTools,
  localAISolutions,
  aiInferencePlatforms,
  imageGenerationPlatforms,
  aiProductivityTools,
  openSourceAIModels,
  timeAndHistory,
  creativeSuites,
  advancedAITools
} from './tools';

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
  ...timeAndHistory,
  ...creativeSuites,
  ...advancedAITools,
  ...aiChatPlatforms,
  ...aiDevelopmentTools,
  ...localAISolutions,
  ...aiInferencePlatforms,
  ...imageGenerationPlatforms,
  ...aiProductivityTools,
  ...openSourceAIModels,
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
  ...personalServices,
  ...specializedPolicyTools,
  ...artAndCollectibles
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
    
    // Enhanced special matches with focus on the user's provided tools
    const specialMatches = [
      // Learning tools - prioritize these since they were specifically requested
      (searchTerm.includes('l') && lowerTitle.includes('learn')),
      (searchTerm.includes('learn') && lowerTitle.includes('learn')),
      (searchTerm.includes('skill') && lowerTitle.includes('skill')),
      (searchTerm.includes('course') && lowerTitle.includes('course')),
      (searchTerm.includes('any') && lowerTitle.includes('any')),
      
      // All the user's provided tools
      (searchTerm.includes('phenomenon') && lowerTitle.includes('phenomenon')),
      (searchTerm.includes('explorer') && lowerTitle.includes('explorer')),
      (searchTerm.includes('ufo') && lowerTitle.includes('phenomenon')),
      (searchTerm.includes('legislation') && lowerTitle.includes('legislation')),
      (searchTerm.includes('writer') && lowerTitle.includes('writer')),
      (searchTerm.includes('graphic') && lowerTitle.includes('graphic')),
      (searchTerm.includes('cover') && lowerTitle.includes('cover')),
      (searchTerm.includes('fact') && lowerTitle.includes('fact')),
      (searchTerm.includes('checker') && lowerTitle.includes('checker')),
      (searchTerm.includes('sustainable') && lowerTitle.includes('sustainable')),
      (searchTerm.includes('futures') && lowerTitle.includes('futures')),
      (searchTerm.includes('nikola') && lowerTitle.includes('nikola')),
      (searchTerm.includes('tesla') && lowerTitle.includes('tesla')),
      (searchTerm.includes('food') && lowerTitle.includes('food')),
      (searchTerm.includes('quality') && lowerTitle.includes('quality')),
      (searchTerm.includes('inspector') && lowerTitle.includes('inspector')),
      (searchTerm.includes('home') && lowerTitle.includes('home')),
      (searchTerm.includes('renovator') && lowerTitle.includes('renovator')),
      (searchTerm.includes('renovation') && lowerTitle.includes('renovation')),
      (searchTerm.includes('fisherman') && lowerTitle.includes('fisherman')),
      (searchTerm.includes('fishing') && lowerTitle.includes('fisherman')),
      (searchTerm.includes('agronomus') && lowerTitle.includes('agronomus')),
      (searchTerm.includes('farming') && lowerTitle.includes('agronomus')),
      (searchTerm.includes('antique') && lowerTitle.includes('antique')),
      (searchTerm.includes('collectible') && lowerTitle.includes('collectible')),
      (searchTerm.includes('appraisal') && lowerTitle.includes('appraisal')),
      (searchTerm.includes('oraculum') && lowerTitle.includes('oraculum')),
      (searchTerm.includes('oracle') && lowerTitle.includes('oraculum')),
      (searchTerm.includes('trivia') && lowerTitle.includes('trivia')),
      (searchTerm.includes('night') && lowerTitle.includes('night')),
      (searchTerm.includes('veterinarian') && lowerTitle.includes('veterinarian')),
      (searchTerm.includes('vet') && lowerTitle.includes('veterinarian')),
      (searchTerm.includes('insurance') && lowerTitle.includes('insurance')),
      (searchTerm.includes('claims') && lowerTitle.includes('claims')),
      (searchTerm.includes('cannabis') && lowerTitle.includes('cannabis')),
      (searchTerm.includes('probability') && lowerTitle.includes('probability')),
      (searchTerm.includes('defender') && lowerTitle.includes('defender')),
      (searchTerm.includes('public') && lowerTitle.includes('public')),
      (searchTerm.includes('property') && lowerTitle.includes('property')),
      (searchTerm.includes('data') && lowerTitle.includes('data')),
      (searchTerm.includes('finder') && lowerTitle.includes('finder')),
      (searchTerm.includes('leonardo') && lowerTitle.includes('leonardo')),
      (searchTerm.includes('algebraic') && lowerTitle.includes('algebraic')),
      (searchTerm.includes('expression') && lowerTitle.includes('expression')),
      (searchTerm.includes('inventor') && lowerTitle.includes('inventor')),
      (searchTerm.includes('bolt') && lowerTitle.includes('bolt')),
      (searchTerm.includes('new') && lowerTitle.includes('bolt')),
      (searchTerm.includes('multitasker') && lowerTitle.includes('multitasker')),
      (searchTerm.includes('fortune') && lowerTitle.includes('fortune')),
      (searchTerm.includes('teller') && lowerTitle.includes('teller')),
      (searchTerm.includes('materiumor') && lowerTitle.includes('materiumor')),
      (searchTerm.includes('material') && lowerTitle.includes('material')),
      (searchTerm.includes('valuation') && lowerTitle.includes('valuation')),
      (searchTerm.includes('lovable') && lowerTitle.includes('lovable')),
      (searchTerm.includes('gemini') && lowerTitle.includes('gemini')),
      (searchTerm.includes('google') && lowerTitle.includes('gemini')),
      (searchTerm.includes('studio') && lowerTitle.includes('studio')),
      (searchTerm.includes('microsaas') && lowerTitle.includes('microsaas')),
      (searchTerm.includes('saas') && lowerTitle.includes('microsaas')),
      (searchTerm.includes('micro') && lowerTitle.includes('microsaas')),
      
      // Existing comprehensive matches for other tools
      (searchTerm.includes('business') && (lowerTitle.includes('business') || lowerCategory.includes('business'))),
      (searchTerm.includes('ai') && lowerTitle.includes('ai')),
      (searchTerm.includes('chat') && lowerTitle.includes('chat')),
      (searchTerm.includes('video') && (lowerTitle.includes('video') || lowerCategory.includes('video'))),
      (searchTerm.includes('music') && (lowerTitle.includes('music') || lowerCategory.includes('audio'))),
      (searchTerm.includes('design') && (lowerTitle.includes('design') || lowerCategory.includes('design'))),
      (searchTerm.includes('art') && (lowerTitle.includes('art') || lowerCategory.includes('art'))),
      (searchTerm.includes('health') && lowerTags.some(tag => tag.includes('health'))),
      (searchTerm.includes('automotive') && lowerTags.some(tag => tag.includes('automotive'))),
      (searchTerm.includes('fungus') && lowerTitle.includes('fungus')),
      (searchTerm.includes('mushroom') && lowerTitle.includes('fungus')),
      (searchTerm.includes('recipe') && lowerTags.some(tag => tag.includes('recipe'))),
      (searchTerm.includes('cooking') && lowerTags.some(tag => tag.includes('cooking'))),
      (searchTerm.includes('chef') && lowerTitle.includes('chef')),
      (searchTerm.includes('cocktail') && lowerTitle.includes('mixologist')),
      (searchTerm.includes('bartender') && lowerTitle.includes('mixologist')),
      (searchTerm.includes('mixologist') && lowerTitle.includes('mixologist')),
      (searchTerm.includes('style') && lowerTitle.includes('style')),
      (searchTerm.includes('fashion') && lowerTitle.includes('style')),
      (searchTerm.includes('hair') && lowerTitle.includes('hair')),
      (searchTerm.includes('fitness') && lowerTitle.includes('fitness')),
      (searchTerm.includes('trainer') && lowerTitle.includes('trainer')),
      (searchTerm.includes('peace') && lowerTitle.includes('peace')),
      (searchTerm.includes('wisdom') && lowerTags.some(tag => tag.includes('wisdom'))),
      (searchTerm.includes('claude') && lowerTitle.includes('claude')),
      (searchTerm.includes('midjourney') && lowerTitle.includes('midjourney')),
      (searchTerm.includes('ideogram') && lowerTitle.includes('ideogram')),
      (searchTerm.includes('fun') && lowerCategory.includes('fun')),
      (searchTerm.includes('game') && (lowerTitle.includes('game') || lowerTags.some(tag => tag.includes('game')))),
      (searchTerm.includes('entertainment') && lowerCategory.includes('entertainment'))
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
