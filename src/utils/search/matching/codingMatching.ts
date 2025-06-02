
import { Tool } from "@/types/tools";

export const matchCodingAgents = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent'))) {
    // Priority coding agent tools
    const priorityCodingAgents = [
      'lovable.dev',
      'bolt.new',
      'chatgpt operator',
      'manus autonomous agent',
      'auto-gpt',
      'agentgpt'
    ];
    
    if (priorityCodingAgents.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General coding agent matching
    if (lowerTitle.includes('coding') || lowerDescription.includes('coding') ||
        lowerTitle.includes('code') || lowerDescription.includes('code') ||
        lowerTitle.includes('programming') || lowerDescription.includes('programming') ||
        lowerCategory.includes('coding') || lowerTags.some(tag => tag.includes('coding'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreCodingAgents = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent'))) {
    // Top priority coding agent tools
    if (lowerTitle.includes('lovable.dev')) {
      score += 2000; // Highest priority
    }
    if (lowerTitle.includes('bolt.new')) {
      score += 1950; // Second highest
    }
    if (lowerTitle.includes('chatgpt operator')) {
      score += 1900;
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 1850;
    }
    if (lowerTitle.includes('auto-gpt')) {
      score += 1800;
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 1750;
    }
    
    // General coding agent matching
    if (lowerTitle.includes('coding') || lowerTitle.includes('code')) {
      score += 1500;
    }
    if (lowerDescription.includes('coding') || lowerDescription.includes('code')) {
      score += 1200;
    }
    if (lowerTitle.includes('programming')) {
      score += 1400;
    }
    if (lowerDescription.includes('programming')) {
      score += 1100;
    }
    if (lowerCategory.includes('coding')) {
      score += 1300;
    }
    if (lowerTags.some(tag => tag.includes('coding'))) {
      score += 1200;
    }
  }
  
  return score;
};
