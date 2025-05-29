
import { Tool } from "@/types/tools";

// Enhanced tool name matching with intelligent scoring
export const getToolNameMatchScore = (toolTitle: string, searchTerm: string): number => {
  const lowerTitle = toolTitle.toLowerCase();
  const lowerSearch = searchTerm.toLowerCase();
  
  // Exact match gets highest score
  if (lowerTitle === lowerSearch) {
    return 500;
  }
  
  // Special handling for GPT searches - CRUCIAL for Ken's GPTs
  if (lowerSearch === 'gpt' && lowerTitle.includes('gpt')) {
    return 400; // High priority for GPT tools when searching "gpt"
  }
  
  // Tool title starts with search term
  if (lowerTitle.startsWith(lowerSearch)) {
    return 300;
  }
  
  // Search term is at the start of any word in the title
  const titleWords = lowerTitle.split(' ');
  if (titleWords.some(word => word.startsWith(lowerSearch))) {
    return 250;
  }
  
  // Tool title contains search term
  if (lowerTitle.includes(lowerSearch)) {
    return 200;
  }
  
  // Partial word matches
  const searchWords = lowerSearch.split(' ');
  let partialScore = 0;
  searchWords.forEach(word => {
    if (lowerTitle.includes(word)) {
      partialScore += 50;
    }
  });
  
  return partialScore;
};

// Calculate intent-based scoring for better tool matching
export const calculateIntentScore = (tool: Tool, searchTerm: string): number => {
  const lowerTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  
  let intentScore = 0;
  
  // GPT-specific intent scoring - Essential for Ken's custom GPTs
  if (lowerTerm.includes('gpt')) {
    if (lowerTitle.includes('gpt')) intentScore += 100;
    if (lowerDescription.includes('gpt') || lowerDescription.includes('assistant')) intentScore += 50;
    if (tool.directUrl?.includes('lovable.app')) intentScore += 75; // Boost Ken's custom GPTs
  }
  
  // Professional service intent
  if (['doctor', 'medical', 'legal', 'lawyer', 'financial', 'trader'].some(term => lowerTerm.includes(term))) {
    if (tool.category?.includes('Professional Services')) intentScore += 80;
  }
  
  // Creative intent
  if (['design', 'create', 'art', 'image', 'video'].some(term => lowerTerm.includes(term))) {
    if (tool.category?.includes('Design') || tool.category?.includes('Creative')) intentScore += 60;
  }
  
  // Business intent
  if (['business', 'productivity', 'work', 'office'].some(term => lowerTerm.includes(term))) {
    if (tool.category?.includes('Business') || tool.category?.includes('Productivity')) intentScore += 60;
  }
  
  return intentScore;
};
