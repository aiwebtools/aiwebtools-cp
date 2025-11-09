
import { Tool } from "@/types/tools";

export const matchMusicTools = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('music') || lowerSearchTerm.includes('song') || 
      lowerSearchTerm.includes('audio') || lowerSearchTerm.includes('suno') ||
      lowerSearchTerm.includes('udio')) {
    
    // Priority music generation tools - EXACT MATCHES
    const priorityMusicTools = [
      'suno',
      'udio',
      'music generation',
      'ai music',
      'song creation',
      'music creator',
      'music maker',
      'audio generation'
    ];
    
    // Check for exact priority matches first
    if (priorityMusicTools.some(tool => 
        lowerTitle.includes(tool) || 
        lowerDescription.includes(tool) ||
        lowerTags.some(tag => tag.includes(tool))
    )) {
      return true;
    }
    
    // General music-related matching
    if (lowerTitle.includes('music') || lowerDescription.includes('music') || 
        lowerTitle.includes('audio') || lowerDescription.includes('audio') ||
        lowerTitle.includes('song') || lowerDescription.includes('song') ||
        lowerCategory.includes('music') || lowerCategory.includes('audio') ||
        lowerTags.some(tag => tag.includes('music') || tag.includes('audio') || tag.includes('song'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreMusicTools = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('music') || lowerSearchTerm.includes('song') || 
      lowerSearchTerm.includes('audio') || lowerSearchTerm.includes('suno') ||
      lowerSearchTerm.includes('udio')) {
    
    // ULTRA HIGHEST PRIORITY: Suno and Udio - ALWAYS FIRST
    if (lowerTitle.includes('suno')) {
      score += 50000; // ULTRA highest priority for Suno
    }
    if (lowerTitle.includes('udio')) {
      score += 49000; // ULTRA second highest for Udio
    }
    
    // High priority music generation specific matches
    if (lowerTitle.includes('music generation') || lowerTitle.includes('ai music')) {
      score += 4500;
    }
    if (lowerTitle.includes('song creation') || lowerTitle.includes('music creator')) {
      score += 4400;
    }
    if (lowerTitle.includes('music maker') || lowerTitle.includes('audio generation')) {
      score += 4300;
    }
    
    // Tag-based scoring for music tools
    if (lowerTags.some(tag => tag.includes('suno'))) {
      score += 48000;
    }
    if (lowerTags.some(tag => tag.includes('udio'))) {
      score += 47000;
    }
    if (lowerTags.some(tag => tag.includes('music generation') || tag.includes('ai music'))) {
      score += 4000;
    }
    if (lowerTags.some(tag => tag.includes('song creation') || tag.includes('music creator'))) {
      score += 3900;
    }
    
    // General music matching
    if (lowerTitle.includes('music')) {
      score += 2000;
    }
    if (lowerTitle.includes('audio')) {
      score += 1800;
    }
    if (lowerTitle.includes('song')) {
      score += 1900;
    }
    
    // Description matching (lower priority)
    if (lowerDescription.includes('music')) {
      score += 1500;
    }
    if (lowerDescription.includes('audio')) {
      score += 1300;
    }
    if (lowerDescription.includes('song')) {
      score += 1400;
    }
    
    // Category and general tags matching
    if (lowerCategory.includes('music') || lowerCategory.includes('audio')) {
      score += 1600;
    }
    if (lowerTags.some(tag => tag.includes('music') || tag.includes('audio') || tag.includes('song'))) {
      score += 1500;
    }
  }
  
  return score;
};
