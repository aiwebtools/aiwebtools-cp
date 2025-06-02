import { Tool } from "@/types/tools";

export const matchAgents = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Priority AI agent tools
    const priorityAgents = [
      'chatgpt operator',
      'manus autonomous agent',
      'surf.new web agents',
      'lindy ai automation',
      'auto-gpt',
      'babyagi',
      'agentgpt',
      'ai town',
      'god mode gpt',
      'ai agents',
      'autonomous agent'
    ];
    
    if (priorityAgents.some(agent => lowerTitle.includes(agent))) {
      return true;
    }
    
    // General agent-related matching
    if (lowerTitle.includes('agent') || lowerDescription.includes('agent') || 
        lowerTitle.includes('autonomous') || lowerDescription.includes('autonomous') ||
        lowerCategory.includes('agent') || lowerTags.some(tag => tag.includes('agent'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreAgents = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Top priority AI agent tools
    if (lowerTitle.includes('chatgpt operator')) {
      score += 2000; // Highest priority
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 1950; // Second highest
    }
    if (lowerTitle.includes('surf.new web agents')) {
      score += 1900; // Third highest
    }
    if (lowerTitle.includes('lindy ai automation')) {
      score += 1850; // Fourth highest
    }
    
    // Other important agent tools
    if (lowerTitle.includes('auto-gpt')) {
      score += 1800;
    }
    if (lowerTitle.includes('babyagi')) {
      score += 1750;
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 1700;
    }
    if (lowerTitle.includes('god mode gpt')) {
      score += 1650;
    }
    if (lowerTitle.includes('ai town')) {
      score += 1600;
    }
    
    // General agent matching
    if (lowerTitle.includes('agent')) {
      score += 1500;
    }
    if (lowerDescription.includes('agent')) {
      score += 1200;
    }
    if (lowerTitle.includes('autonomous')) {
      score += 1400;
    }
    if (lowerDescription.includes('autonomous')) {
      score += 1100;
    }
    if (lowerCategory.includes('agent')) {
      score += 1300;
    }
    if (lowerTags.some(tag => tag.includes('agent'))) {
      score += 1200;
    }
  }
  
  return score;
};
