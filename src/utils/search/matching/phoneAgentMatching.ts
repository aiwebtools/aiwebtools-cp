import { Tool } from "@/types/tools";

export const matchPhoneAgents = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('phone') || lowerSearchTerm.includes('call') || 
      lowerSearchTerm.includes('telephone') || lowerSearchTerm.includes('voice agent') ||
      lowerSearchTerm.includes('phone agent') || lowerSearchTerm.includes('call agent') ||
      lowerSearchTerm.includes('phonecall')) {
    
    // Priority phone/call agent tools
    const priorityPhoneAgents = [
      'nucleus ai inbound call agents platform',
      'nucleus',
      'call agent',
      'phone agent',
      'voice agent',
      'call center',
      'inbound',
      'outbound',
      'telephone'
    ];
    
    if (priorityPhoneAgents.some(agent => lowerTitle.includes(agent) || lowerDescription.includes(agent))) {
      return true;
    }
    
    // General phone/call-related matching
    if (lowerTitle.includes('phone') || lowerDescription.includes('phone') || 
        lowerTitle.includes('call') || lowerDescription.includes('call') ||
        lowerTitle.includes('voice') || lowerDescription.includes('voice') ||
        lowerTitle.includes('telephone') || lowerDescription.includes('telephone') ||
        lowerCategory.includes('phone') || lowerCategory.includes('call') ||
        lowerTags.some(tag => tag.includes('phone') || tag.includes('call') || tag.includes('voice'))) {
      return true;
    }
  }
  
  return false;
};

export const scorePhoneAgents = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('phone') || lowerSearchTerm.includes('call') || 
      lowerSearchTerm.includes('telephone') || lowerSearchTerm.includes('voice agent') ||
      lowerSearchTerm.includes('phone agent') || lowerSearchTerm.includes('call agent') ||
      lowerSearchTerm.includes('phonecall')) {
    
    // Top priority phone/call agent tools
    if (lowerTitle.includes('nucleus ai inbound call agents platform') || lowerTitle.includes('nucleus')) {
      score += 3000; // Highest priority for Nucleus
    }
    
    // Other phone agent specific matches
    if (lowerTitle.includes('call agent') || lowerTitle.includes('phone agent')) {
      score += 2500;
    }
    if (lowerTitle.includes('voice agent')) {
      score += 2400;
    }
    if (lowerTitle.includes('call center')) {
      score += 2300;
    }
    if (lowerTitle.includes('inbound') || lowerTitle.includes('outbound')) {
      score += 2200;
    }
    
    // General phone/call matching
    if (lowerTitle.includes('phone')) {
      score += 2000;
    }
    if (lowerTitle.includes('call')) {
      score += 1900;
    }
    if (lowerTitle.includes('voice')) {
      score += 1800;
    }
    if (lowerTitle.includes('telephone')) {
      score += 1700;
    }
    
    // Description matching (lower priority)
    if (lowerDescription.includes('phone')) {
      score += 1500;
    }
    if (lowerDescription.includes('call')) {
      score += 1400;
    }
    if (lowerDescription.includes('voice')) {
      score += 1300;
    }
    
    // Category and tags matching
    if (lowerCategory.includes('phone') || lowerCategory.includes('call')) {
      score += 1600;
    }
    if (lowerTags.some(tag => tag.includes('phone') || tag.includes('call') || tag.includes('voice'))) {
      score += 1500;
    }
  }
  
  return score;
};
