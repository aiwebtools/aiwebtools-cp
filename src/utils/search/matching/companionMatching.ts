
import { Tool } from "@/types/tools";

export const matchCompanionTools = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Enhanced "friend" and companion search matching
  if (lowerSearchTerm.includes('friend') || lowerSearchTerm.includes('companion') || 
      lowerSearchTerm.includes('chat') || lowerSearchTerm.includes('buddy') ||
      lowerSearchTerm.includes('pal') || lowerSearchTerm.includes('social') ||
      lowerSearchTerm.includes('conversation') || lowerSearchTerm.includes('talk')) {
    
    // Priority companion/friend tools
    const priorityCompanionTools = [
      'replika',
      'character.ai',
      'chai',
      'janitor ai',
      'crushon.ai',
      'talk to history gpt',
      'celebrity chatline gpt',
      'talk to the gods gpt',
      'alan watts gpt',
      'mary magdalene gpt',
      'albert einstein gpt',
      'nikola tesla gpt'
    ];
    
    if (priorityCompanionTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General companion/friendship matching
    if (lowerTitle.includes('chat') || lowerDescription.includes('chat') ||
        lowerTitle.includes('companion') || lowerDescription.includes('companion') ||
        lowerTitle.includes('conversation') || lowerDescription.includes('conversation') ||
        lowerTitle.includes('talk') || lowerDescription.includes('talk') ||
        lowerTitle.includes('friend') || lowerDescription.includes('friend') ||
        lowerTitle.includes('social') || lowerDescription.includes('social') ||
        lowerCategory.includes('entertainment') || lowerCategory.includes('chat') ||
        lowerTags.some(tag => tag.includes('chat') || tag.includes('conversation') || 
                            tag.includes('companion') || tag.includes('social') ||
                            tag.includes('interactive') || tag.includes('ai character'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreCompanionTools = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('friend') || lowerSearchTerm.includes('companion') || 
      lowerSearchTerm.includes('chat') || lowerSearchTerm.includes('buddy') ||
      lowerSearchTerm.includes('pal') || lowerSearchTerm.includes('social') ||
      lowerSearchTerm.includes('conversation') || lowerSearchTerm.includes('talk')) {
    
    // Top priority companion tools for friend searches
    if (lowerTitle.includes('replika')) {
      score += 2200; // Highest priority for "friend" searches
    }
    if (lowerTitle.includes('character.ai')) {
      score += 2150; // Second highest
    }
    if (lowerTitle.includes('chai')) {
      score += 2100;
    }
    if (lowerTitle.includes('janitor ai')) {
      score += 2050;
    }
    if (lowerTitle.includes('crushon.ai')) {
      score += 2000;
    }
    if (lowerTitle.includes('talk to history gpt')) {
      score += 1950;
    }
    if (lowerTitle.includes('celebrity chatline gpt')) {
      score += 1900;
    }
    if (lowerTitle.includes('talk to the gods gpt')) {
      score += 1850;
    }
    if (lowerTitle.includes('alan watts gpt')) {
      score += 1800;
    }
    if (lowerTitle.includes('mary magdalene gpt')) {
      score += 1750;
    }
    if (lowerTitle.includes('albert einstein gpt')) {
      score += 1700;
    }
    if (lowerTitle.includes('nikola tesla gpt')) {
      score += 1650;
    }
    
    // General companion/friend matching
    if (lowerTitle.includes('chat') || lowerTitle.includes('companion')) {
      score += 1500;
    }
    if (lowerDescription.includes('chat') || lowerDescription.includes('companion')) {
      score += 1200;
    }
    if (lowerTitle.includes('conversation') || lowerTitle.includes('talk')) {
      score += 1400;
    }
    if (lowerDescription.includes('conversation') || lowerDescription.includes('talk')) {
      score += 1100;
    }
    if (lowerTitle.includes('friend') || lowerTitle.includes('social')) {
      score += 1600;
    }
    if (lowerDescription.includes('friend') || lowerDescription.includes('social')) {
      score += 1300;
    }
    if (lowerCategory.includes('entertainment') || lowerCategory.includes('chat')) {
      score += 1200;
    }
    if (lowerTags.some(tag => tag.includes('chat') || tag.includes('conversation') || 
                            tag.includes('companion') || tag.includes('social'))) {
      score += 1100;
    }
  }
  
  return score;
};
