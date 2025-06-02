
import { Tool } from "@/types/tools";

export const isHealthAndWellnessTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  const toolTitle = tool.title.toLowerCase();
  
  // STRICT: Known health and wellness tools
  const healthTools = [
    'personalized doctor',
    'veterinarian gpt',
    'pet care',
    'pharmaceutical assistant',
    'pharma research',
    'mental wellness',
    'marriage mender',
    'genome gpt',
    'food quality inspector',
    'insurance claims',
    'cannabis gpt',
    'home renovator', // health/safety related
    'survivalist gpt' // health/safety related
  ];
  
  // Health and wellness keywords
  const healthKeywords = [
    'health', 'wellness', 'medical', 'doctor', 'healthcare', 'medicine', 'therapy', 
    'mental health', 'fitness', 'nutrition', 'diet', 'exercise', 'pharmacy', 
    'pharmaceutical', 'veterinarian', 'pet care', 'mental wellness', 'counseling',
    'meditation', 'mindfulness', 'stress', 'anxiety', 'depression', 'genome',
    'dna', 'genetic', 'clinical', 'patient', 'treatment', 'diagnosis'
  ];
  
  // Check if it's a known health tool
  if (healthTools.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Check for health keywords AND health-related categories
  const hasHealthKeyword = healthKeywords.some(keyword => searchText.includes(keyword));
  const hasHealthCategory = tool.category && (
    tool.category.toLowerCase().includes('health') ||
    tool.category.toLowerCase().includes('wellness') ||
    tool.category.toLowerCase().includes('medical') ||
    tool.category.toLowerCase().includes('healthcare') ||
    tool.category.toLowerCase().includes('pharmaceutical')
  );
  
  return hasHealthKeyword && hasHealthCategory;
};

export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  const toolTitle = tool.title.toLowerCase();
  
  // STRICT: Known creative and entertainment tools
  const creativeTools = [
    'godmode gpt',
    'mary magdalene',
    'alan watts',
    'multitasker',
    'talk to the gods',
    'oraculum',
    'resurrection gpt',
    'time machine gpt',
    'talk to history',
    'interpretis',
    'imagination traveler',
    'historical headlines',
    'fortune teller',
    'trivia night',
    'celebrity chatline',
    'tattoo designer',
    'restyle me',
    'mixologist',
    'chef sizzle',
    'dream interpreter',
    'sketch artist',
    'artwork & vintage appraisal',
    'coloring book generator',
    "children's picture book",
    'music melodies & lessons',
    'sophia aeterna',
    'playwriter',
    'book writer',
    'stellaris',
    'criminologist', // entertainment/simulation
    'tesla gpt',
    'einstein gpt',
    'indiana archaeologist',
    'titanic resurrections',
    'alchemist scientist',
    'native american history',
    'enter the matrix',
    'if ai ruled the world'
  ];
  
  // Exclude video tools from creative category
  const videoTools = [
    'movie maker studio',
    'music video maker',
    'movie scene maker',
    'sora',
    'kling ai',
    'video'
  ];
  
  if (videoTools.some(name => toolTitle.includes(name))) {
    return false;
  }
  
  // Check if it's a known creative tool
  if (creativeTools.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Creative and entertainment keywords
  const creativeKeywords = [
    'creative', 'entertainment', 'art', 'design', 'music', 'game', 'story', 
    'writing', 'drawing', 'painting', 'illustration', 'character',
    'fantasy', 'imagination', 'roleplay', 'chat', 'conversation', 'personality',
    'celebrity', 'fortune', 'tarot', 'astrology', 'spiritual', 'mystical',
    'historical figure', 'time travel', 'adventure', 'exploration', 'mystery',
    'simulation', 'interactive', 'narrative', 'storytelling', 'wisdom',
    'philosophy', 'guidance', 'divination', 'oracle'
  ];
  
  const hasCreativeKeyword = creativeKeywords.some(keyword => searchText.includes(keyword));
  
  // Check for creative-related categories
  const hasCreativeCategory = tool.category && (
    tool.category.toLowerCase().includes('creative') ||
    tool.category.toLowerCase().includes('entertainment') ||
    tool.category.toLowerCase().includes('spiritual') ||
    tool.category.toLowerCase().includes('mystical') ||
    tool.category.toLowerCase().includes('time and history') ||
    tool.category.toLowerCase().includes('communication and entertainment') ||
    tool.category.toLowerCase().includes('mysterious and unusual') ||
    tool.category.toLowerCase().includes('philosophy')
  );
  
  return hasCreativeKeyword || hasCreativeCategory;
};
