
import { Tool } from "@/types/tools";

export const isHealthAndWellnessTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  // Health and wellness keywords
  const healthKeywords = [
    'health', 'wellness', 'medical', 'doctor', 'healthcare', 'medicine', 'therapy', 
    'mental health', 'fitness', 'nutrition', 'diet', 'exercise', 'pharmacy', 
    'pharmaceutical', 'veterinarian', 'pet care', 'mental wellness', 'therapy',
    'counseling', 'meditation', 'mindfulness', 'stress', 'anxiety', 'depression'
  ];
  
  // Health-related tool names
  const healthTools = [
    'personalized doctor',
    'veterinarian gpt',
    'pet care',
    'pharmaceutical assistant',
    'pharma research',
    'mental wellness',
    'marriage mender',
    'genome gpt'
  ];
  
  const toolTitle = tool.title.toLowerCase();
  
  // Check if it's a known health tool
  if (healthTools.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Check for health keywords
  const hasHealthKeyword = healthKeywords.some(keyword => searchText.includes(keyword));
  
  // Check for health-related categories
  const hasHealthCategory = tool.category && (
    tool.category.toLowerCase().includes('health') ||
    tool.category.toLowerCase().includes('wellness') ||
    tool.category.toLowerCase().includes('medical') ||
    tool.category.toLowerCase().includes('healthcare')
  );
  
  return hasHealthKeyword || hasHealthCategory;
};

export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  // Creative and entertainment keywords
  const creativeKeywords = [
    'creative', 'entertainment', 'art', 'design', 'music', 'game', 'story', 
    'writing', 'drawing', 'painting', 'illustration', 'animation', 'character',
    'fantasy', 'imagination', 'roleplay', 'chat', 'conversation', 'personality',
    'celebrity', 'fortune', 'tarot', 'astrology', 'spiritual', 'mystical',
    'historical figure', 'time travel', 'adventure', 'exploration', 'mystery'
  ];
  
  // Creative and entertainment tool names
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
    'children\'s picture book',
    'music melodies & lessons',
    'sophia aeterna',
    'playwriter',
    'book writer'
  ];
  
  const toolTitle = tool.title.toLowerCase();
  
  // Exclude video tools from creative category
  const videoTools = [
    'movie maker studio',
    'music video maker',
    'movie scene maker',
    'video'
  ];
  
  if (videoTools.some(name => toolTitle.includes(name))) {
    return false;
  }
  
  // Check if it's a known creative tool
  if (creativeTools.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Check for creative keywords
  const hasCreativeKeyword = creativeKeywords.some(keyword => searchText.includes(keyword));
  
  // Check for creative-related categories
  const hasCreativeCategory = tool.category && (
    tool.category.toLowerCase().includes('creative') ||
    tool.category.toLowerCase().includes('entertainment') ||
    tool.category.toLowerCase().includes('art') ||
    tool.category.toLowerCase().includes('design') ||
    tool.category.toLowerCase().includes('spiritual') ||
    tool.category.toLowerCase().includes('mystical') ||
    tool.category.toLowerCase().includes('time and history') ||
    tool.category.toLowerCase().includes('communication and entertainment')
  );
  
  return hasCreativeKeyword || hasCreativeCategory;
};
