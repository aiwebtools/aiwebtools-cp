
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
      lowerSearchTerm.includes('phonecall') || lowerSearchTerm.includes('nucleus') ||
      lowerSearchTerm.includes('agent') || lowerSearchTerm.includes('agents')) {
    
    // Check if tool is in Phone & Voice Agents category
    if (lowerCategory.includes('phone & voice agents')) {
      return true;
    }
    
    // Priority phone/call agent tools - EXACT MATCHES
    const priorityPhoneAgents = [
      'nucleus ai inbound call agents platform',
      'nucleus ai',
      'nucleus',
      'call agent',
      'phone agent',
      'voice agent',
      'call center',
      'inbound',
      'outbound',
      'telephone',
      'phone automation',
      'call automation',
      'voice ai',
      'call ai',
      'phone ai',
      'conversational ai'
    ];
    
    // Check for exact priority matches first
    if (priorityPhoneAgents.some(agent => 
        lowerTitle.includes(agent) || 
        lowerDescription.includes(agent) ||
        lowerTags.some(tag => tag.includes(agent))
    )) {
      return true;
    }
    
    // General phone/call-related matching
    if (lowerTitle.includes('phone') || lowerDescription.includes('phone') || 
        lowerTitle.includes('call') || lowerDescription.includes('call') ||
        lowerTitle.includes('voice') || lowerDescription.includes('voice') ||
        lowerTitle.includes('telephone') || lowerDescription.includes('telephone') ||
        lowerCategory.includes('phone') || lowerCategory.includes('call') ||
        lowerTags.some(tag => tag.includes('phone') || tag.includes('call') || tag.includes('voice') || tag.includes('nucleus') || tag.includes('agent'))) {
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
      lowerSearchTerm.includes('phonecall') || lowerSearchTerm.includes('nucleus') ||
      lowerSearchTerm.includes('agent') || lowerSearchTerm.includes('agents')) {
    
    // BONUS: Phone & Voice Agents category
    if (lowerCategory.includes('phone & voice agents')) {
      score += 6000; // Highest priority for dedicated category
    }
    
    // HIGHEST PRIORITY: Nucleus AI
    if (lowerTitle.includes('nucleus ai inbound call agents platform') || 
        lowerTitle.includes('nucleus ai') || 
        lowerTitle.includes('nucleus')) {
      score += 5000; // Highest priority for Nucleus
    }
    
    // High priority phone agent specific matches
    if (lowerTitle.includes('call agent') || lowerTitle.includes('phone agent')) {
      score += 4500;
    }
    if (lowerTitle.includes('voice agent')) {
      score += 4400;
    }
    if (lowerTitle.includes('call center') || lowerTitle.includes('call automation') || lowerTitle.includes('phone automation')) {
      score += 4300;
    }
    if (lowerTitle.includes('inbound') || lowerTitle.includes('outbound')) {
      score += 4200;
    }
    
    // Tag-based scoring for phone agents
    if (lowerTags.some(tag => tag.includes('nucleus'))) {
      score += 4800;
    }
    if (lowerTags.some(tag => tag.includes('call agent') || tag.includes('phone agent'))) {
      score += 4000;
    }
    if (lowerTags.some(tag => tag.includes('voice agent'))) {
      score += 3900;
    }
    if (lowerTags.some(tag => tag.includes('call center') || tag.includes('inbound calls') || tag.includes('phone system'))) {
      score += 3800;
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
    if (lowerDescription.includes('nucleus')) {
      score += 2000;
    }
    
    // Category and general tags matching
    if (lowerCategory.includes('phone') || lowerCategory.includes('call') || lowerCategory.includes('communication')) {
      score += 1600;
    }
    if (lowerTags.some(tag => tag.includes('phone') || tag.includes('call') || tag.includes('voice') || tag.includes('agent'))) {
      score += 1500;
    }
  }
  
  return score;
};
