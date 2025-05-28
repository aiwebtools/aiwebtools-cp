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
  openSourceAIModels
} from './tools';

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
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
    
    // Enhanced special matches with comprehensive coverage for all newly added tools
    const specialMatches = [
      // New tools from the latest additions
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
      
      // Learning & Education specific searches
      (searchTerm.includes('learn') && (lowerTitle.includes('learn') || lowerCategory.includes('education'))),
      (searchTerm.includes('skill') && lowerTitle.includes('skill')),
      (searchTerm.includes('course') && lowerTitle.includes('course')),
      (searchTerm.includes('any') && lowerTitle.includes('any')),
      (searchTerm.includes('education') && lowerCategory.includes('education')),
      (searchTerm.includes('training') && (lowerTitle.includes('training') || lowerTags.some(tag => tag.includes('training')))),
      
      // Medical & Healthcare
      (searchTerm.includes('doctor') && (lowerTitle.includes('doctor') || lowerTitle.includes('dr.'))),
      (searchTerm.includes('medical') && (lowerTitle.includes('medical') || lowerCategory.includes('healthcare'))),
      (searchTerm.includes('pharmaceutical') && lowerTitle.includes('pharmaceutical')),
      (searchTerm.includes('pharmacy') && (lowerTitle.includes('pharmaceutical') || lowerTitle.includes('pharma'))),
      (searchTerm.includes('apothecary') && lowerTitle.includes('apothecary')),
      (searchTerm.includes('research') && lowerTitle.includes('research')),
      
      // Education & Training
      (searchTerm.includes('homeschool') && lowerTitle.includes('homeschool')),
      (searchTerm.includes('home-school') && lowerTitle.includes('homeschool')),
      (searchTerm.includes('quiz') && lowerTitle.includes('quiz')),
      
      // Legal & Professional
      (searchTerm.includes('contract') && lowerTitle.includes('contract')),
      (searchTerm.includes('legal') && lowerTitle.includes('legal')),
      (searchTerm.includes('bot') && lowerTitle.includes('bot')),
      
      // Creative & Entertainment
      (searchTerm.includes('tattoo') && lowerTitle.includes('tattoo')),
      (searchTerm.includes('designer') && lowerTitle.includes('designer')),
      (searchTerm.includes('celebrity') && lowerTitle.includes('celebrity')),
      (searchTerm.includes('playwriter') && lowerTitle.includes('playwriter')),
      (searchTerm.includes('playwright') && lowerTitle.includes('playwriter')),
      
      // Specialized & Safety
      (searchTerm.includes('firearms') && lowerTitle.includes('firearms')),
      (searchTerm.includes('gun') && lowerTitle.includes('firearms')),
      (searchTerm.includes('safety') && lowerTitle.includes('safety')),
      (searchTerm.includes('instructor') && lowerTitle.includes('instructor')),
      
      // AI & Technology
      (searchTerm.includes('sora') && lowerTitle.includes('sora')),
      (searchTerm.includes('prompt') && lowerTitle.includes('prompt')),
      (searchTerm.includes('assistant') && lowerTitle.includes('assistant')),
      (searchTerm.includes('anything') && lowerTitle.includes('anything')),
      (searchTerm.includes('llm') && lowerTitle.includes('llm')),
      (searchTerm.includes('nucleus') && lowerTitle.includes('nucleus')),
      (searchTerm.includes('call') && lowerTitle.includes('call')),
      (searchTerm.includes('agents') && lowerTitle.includes('agents')),
      
      // Historical & Cultural
      (searchTerm.includes('einstein') && lowerTitle.includes('einstein')),
      (searchTerm.includes('albert') && lowerTitle.includes('albert')),
      (searchTerm.includes('interpretis') && lowerTitle.includes('interpretis')),
      (searchTerm.includes('historical') && lowerTitle.includes('historical')),
      (searchTerm.includes('titanic') && lowerTitle.includes('titanic')),
      (searchTerm.includes('headlines') && lowerTitle.includes('headlines')),
      (searchTerm.includes('alchemist') && lowerTitle.includes('alchemist')),
      (searchTerm.includes('scientist') && lowerTitle.includes('scientist')),
      (searchTerm.includes('archaeology') && lowerTitle.includes('archaeology')),
      (searchTerm.includes('indiana') && lowerTitle.includes('indiana')),
      (searchTerm.includes('archaeologist') && lowerTitle.includes('archaeologist')),
      (searchTerm.includes('time') && lowerTitle.includes('time')),
      
      // Travel & Exploration
      (searchTerm.includes('imagination') && lowerTitle.includes('imagination')),
      (searchTerm.includes('traveler') && lowerTitle.includes('traveler')),
      (searchTerm.includes('travel') && lowerTitle.includes('travel')),
      
      // Business & Finance
      (searchTerm.includes('trader') && lowerTitle.includes('trader')),
      (searchTerm.includes('trading') && lowerTitle.includes('trader')),
      (searchTerm.includes('manual') && lowerTitle.includes('manual')),
      (searchTerm.includes('generator') && lowerTitle.includes('generator')),
      (searchTerm.includes('resume') && lowerTitle.includes('resume')),
      (searchTerm.includes('job') && lowerTitle.includes('job')),
      (searchTerm.includes('finder') && lowerTitle.includes('finder')),
      (searchTerm.includes('data') && lowerTitle.includes('data')),
      (searchTerm.includes('analysis') && lowerTitle.includes('analysis')),
      (searchTerm.includes('report') && lowerTitle.includes('report')),
      
      // Personal & Relationship
      (searchTerm.includes('marriage') && lowerTitle.includes('marriage')),
      (searchTerm.includes('mender') && lowerTitle.includes('mender')),
      (searchTerm.includes('relationship') && lowerTitle.includes('marriage')),
      (searchTerm.includes('alan') && lowerTitle.includes('alan')),
      (searchTerm.includes('watts') && lowerTitle.includes('watts')),
      (searchTerm.includes('philosophy') && lowerTitle.includes('watts')),
      
      // Energy & Environment
      (searchTerm.includes('solar') && lowerTitle.includes('solar')),
      (searchTerm.includes('land') && lowerTitle.includes('land')),
      (searchTerm.includes('assessor') && lowerTitle.includes('assessor')),
      (searchTerm.includes('energy') && lowerTitle.includes('solar')),
      
      // Emergency Services
      (searchTerm.includes('firefighter') && lowerTitle.includes('firefighter')),
      (searchTerm.includes('fire') && lowerTitle.includes('firefighter')),
      (searchTerm.includes('emergency') && lowerCategory.includes('emergency')),
      
      // Technology & Conversion
      (searchTerm.includes('binary') && lowerTitle.includes('binary')),
      (searchTerm.includes('text') && lowerTitle.includes('text')),
      (searchTerm.includes('image') && lowerTitle.includes('image')),
      (searchTerm.includes('converter') && lowerTitle.includes('converter')),
      (searchTerm.includes('convert') && lowerTitle.includes('converter')),
      
      // Presentation & Design
      (searchTerm.includes('gamma') && lowerTitle.includes('gamma')),
      (searchTerm.includes('presentation') && lowerTitle.includes('presentation')),
      (searchTerm.includes('website') && lowerTitle.includes('website')),
      (searchTerm.includes('maker') && lowerTitle.includes('maker')),
      (searchTerm.includes('luma') && lowerTitle.includes('luma')),
      (searchTerm.includes('dream') && lowerTitle.includes('dream')),
      (searchTerm.includes('machine') && lowerTitle.includes('machine')),
      
      // Food & Restaurant
      (searchTerm.includes('restaurant') && lowerTitle.includes('restaurant')),
      (searchTerm.includes('menu') && lowerTitle.includes('menu')),
      
      // GPT Creation
      (searchTerm.includes('customizable') && lowerTitle.includes('customizable')),
      (searchTerm.includes('gpt') && lowerTitle.includes('gpt')),
      (searchTerm.includes('maker') && lowerTitle.includes('maker')),
      (searchTerm.includes('custom') && lowerTitle.includes('custom')),
      
      // All existing matches from previous version
      (searchTerm.includes('business') && (lowerTitle.includes('business') || lowerCategory.includes('business'))),
      (searchTerm.includes('ai') && lowerTitle.includes('ai')),
      (searchTerm.includes('chat') && lowerTitle.includes('chat')),
      (searchTerm.includes('video') && (lowerTitle.includes('video') || lowerCategory.includes('video'))),
      (searchTerm.includes('music') && (lowerTitle.includes('music') || lowerCategory.includes('audio'))),
      (searchTerm.includes('design') && (lowerTitle.includes('design') || lowerCategory.includes('design'))),
      (searchTerm.includes('art') && (lowerTitle.includes('art') || lowerCategory.includes('art'))),
      (searchTerm.includes('health') && lowerTags.some(tag => tag.includes('health'))),
      (searchTerm.includes('cannabis') && lowerTitle.includes('cannabis')),
      (searchTerm.includes('automotive') && lowerTags.some(tag => tag.includes('automotive'))),
      (searchTerm.includes('fungus') && lowerTitle.includes('fungus')),
      (searchTerm.includes('mushroom') && lowerTitle.includes('fungus')),
      (searchTerm.includes('food') && (lowerTitle.includes('food') || lowerCategory.includes('food'))),
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
      (searchTerm.includes('gemini') && lowerTitle.includes('gemini')),
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
