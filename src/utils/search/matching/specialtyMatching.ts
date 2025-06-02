
import { Tool } from "@/types/tools";

export const matchHistory = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // HISTORY TOOLS ENHANCED MATCHING - ONLY FOR EXPLICIT HISTORY SEARCHES
  if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
    const historyTools = [
      'time machine gpt',
      'talk to history gpt',
      'historical headlines gpt',
      'titanic resurrections gpt',
      'uncovering hidden historical patterns gpt',
      'native american history time machine gpt'
    ];
    
    if (historyTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // Check for history-related terms only for explicit history searches
    if (lowerTitle.includes('history') || lowerDescription.includes('history') ||
        lowerTitle.includes('historical') || lowerDescription.includes('historical') ||
        lowerCategory.includes('history') || lowerTags.some(tag => tag.includes('history'))) {
      return true;
    }
  }
  
  return false;
};

export const matchLearning = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  if (lowerSearchTerm.includes('learn')) {
    const learningTools = [
      'learn any skill gpt',
      'learn any course gpt',
      'college degree gpt',
      'homeschool'
    ];
    
    if (learningTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
  }
  
  return false;
};

export const matchHealth = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Enhanced health search matching
  if (lowerSearchTerm.includes('health') || lowerSearchTerm.includes('medical') || 
      lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness') ||
      lowerSearchTerm.includes('dental') || lowerSearchTerm.includes('mental') ||
      lowerSearchTerm.includes('therapy') || lowerSearchTerm.includes('healthcare')) {
    
    // Priority health tools
    const healthTools = [
      'personalized dr. gpt',
      'doctor gpt',
      'mental wellness gpt',
      'dental gpt',
      'veterinarian gpt',
      'pharmaceutical assistant',
      'pharma research pro',
      'health',
      'wellness',
      'medical'
    ];
    
    // Check if tool matches health tools
    if (healthTools.some(healthTool => lowerTitle.includes(healthTool))) {
      return true;
    }
    
    // Check for health-related terms in title, description, category, or tags
    if (lowerTitle.includes('health') || lowerTitle.includes('medical') ||
        lowerTitle.includes('doctor') || lowerTitle.includes('wellness') ||
        lowerTitle.includes('dental') || lowerTitle.includes('mental') ||
        lowerDescription.includes('health') || lowerDescription.includes('medical') ||
        lowerDescription.includes('doctor') || lowerDescription.includes('wellness') ||
        lowerDescription.includes('dental') || lowerDescription.includes('mental') ||
        lowerCategory.includes('health') || lowerCategory.includes('medical') ||
        lowerTags.some(tag => tag.includes('health') || tag.includes('medical') || 
                            tag.includes('wellness') || tag.includes('dental'))) {
      return true;
    }
  }
  
  return false;
};

export const matchMedical = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  if (lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || 
      lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness')) {
    const medicalTools = [
      'personalized dr. gpt',
      'doctor gpt',
      'mental wellness gpt',
      'veterinarian gpt',
      'pharmaceutical assistant'
    ];
    
    if (medicalTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
  }
  
  return false;
};

export const scoreHistory = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
    if (lowerTitle.includes('time machine gpt')) {
      score += 1500;
    }
    if (lowerTitle.includes('talk to history gpt')) {
      score += 1450;
    }
    if (lowerTitle.includes('historical headlines gpt')) {
      score += 1400;
    }
    if (lowerTitle.includes('titanic resurrections gpt')) {
      score += 1350;
    }
    if (lowerTitle.includes('uncovering hidden historical patterns gpt')) {
      score += 1300;
    }
    if (lowerTitle.includes('native american history time machine gpt')) {
      score += 1250;
    }
    
    // General history matching for explicit history searches
    if (lowerTitle.includes('history') || lowerTitle.includes('historical')) {
      score += 1200;
    }
    if (lowerDescription.includes('history') || lowerDescription.includes('historical')) {
      score += 1000;
    }
    if (lowerCategory.includes('history')) {
      score += 1100;
    }
    if (lowerTags.some(tag => tag.includes('history'))) {
      score += 1000;
    }
  }
  
  return score;
};

export const scoreLearning = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  let score = 0;
  
  if (lowerSearchTerm.includes('learn')) {
    if (lowerTitle.includes('learn any skill gpt')) {
      score += 1500;
    }
    if (lowerTitle.includes('learn any course gpt')) {
      score += 1450;
    }
    if (lowerTitle.includes('college degree gpt')) {
      score += 1400;
    }
    if (lowerTitle.includes('homeschool')) {
      score += 1350;
    }
  }
  
  return score;
};

export const scoreHealth = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('health') || lowerSearchTerm.includes('medical') || 
      lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness') ||
      lowerSearchTerm.includes('dental') || lowerSearchTerm.includes('mental') ||
      lowerSearchTerm.includes('therapy') || lowerSearchTerm.includes('healthcare')) {
    
    // Highest priority for main health tools
    if (lowerTitle.includes('personalized dr. gpt') || lowerTitle.includes('doctor gpt')) {
      score += 2000;
    }
    if (lowerTitle.includes('mental wellness gpt')) {
      score += 1950;
    }
    if (lowerTitle.includes('dental gpt')) {
      score += 1900;
    }
    if (lowerTitle.includes('veterinarian gpt')) {
      score += 1850;
    }
    if (lowerTitle.includes('pharmaceutical assistant')) {
      score += 1800;
    }
    if (lowerTitle.includes('pharma research pro')) {
      score += 1750;
    }
    
    // General health matching
    if (lowerTitle.includes('health')) {
      score += 1600;
    }
    if (lowerTitle.includes('medical')) {
      score += 1550;
    }
    if (lowerTitle.includes('wellness')) {
      score += 1500;
    }
    if (lowerTitle.includes('dental')) {
      score += 1450;
    }
    if (lowerTitle.includes('mental')) {
      score += 1400;
    }
    
    // Description matching
    if (lowerDescription.includes('health') || lowerDescription.includes('medical')) {
      score += 1200;
    }
    if (lowerDescription.includes('wellness') || lowerDescription.includes('doctor')) {
      score += 1100;
    }
    
    // Category matching
    if (lowerCategory.includes('health') || lowerCategory.includes('medical')) {
      score += 1300;
    }
    
    // Tags matching
    if (lowerTags.some(tag => tag.includes('health') || tag.includes('medical') || 
                             tag.includes('wellness') || tag.includes('dental'))) {
      score += 1000;
    }
  }
  
  return score;
};

export const scoreMedical = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  let score = 0;
  
  if (lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || 
      lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness')) {
    if (lowerTitle.includes('personalized dr. gpt') || lowerTitle.includes('doctor gpt')) {
      score += 1200;
    }
    if (lowerTitle.includes('mental wellness gpt')) {
      score += 1150;
    }
    if (lowerTitle.includes('veterinarian gpt')) {
      score += 1100;
    }
    if (lowerTitle.includes('pharmaceutical assistant')) {
      score += 1050;
    }
  }
  
  return score;
};
