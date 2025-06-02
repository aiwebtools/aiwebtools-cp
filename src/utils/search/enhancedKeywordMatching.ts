
import { Tool } from "@/types/tools";
import { getToolNameMatchScore, calculateIntentScore } from "./scoringUtils";

// Enhanced keyword matching for specific tool categories
export const enhancedKeywordMatching = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // AGENTS SEARCH PRIORITIZATION
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
  
  // TEXT TO VIDEO SEARCH PRIORITIZATION
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    // Priority text-to-video tools
    const priorityVideoTools = [
      'luma labs dream machine',
      'luma dream machine',
      'pika labs',
      'google veo 3',
      'veo3',
      'movie maker studio',
      'runwayml gen-2',
      'runwayml',
      'sora',
      'text to video prompt generator'
    ];
    
    if (priorityVideoTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General text-to-video matching
    if (lowerTitle.includes('text-to-video') || lowerDescription.includes('text-to-video') ||
        lowerTitle.includes('video generation') || lowerDescription.includes('video generation') ||
        lowerTitle.includes('ai video') || lowerDescription.includes('ai video') ||
        lowerCategory.includes('video generation') || lowerTags.some(tag => tag.includes('text-to-video'))) {
      return true;
    }
  }
  
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
  
  // LEARNING TOOLS ENHANCED MATCHING
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
  
  // MEDICAL/HEALTH ENHANCED MATCHING for AI Web Tools GPTs
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

export const enhancedToolScoring = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // AGENTS SEARCH SCORING - HIGHEST PRIORITY
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
  
  // TEXT TO VIDEO SEARCH SCORING - HIGH PRIORITY
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    // Top priority text-to-video tools
    if (lowerTitle.includes('luma labs dream machine') || lowerTitle.includes('luma dream machine')) {
      score += 1800; // Highest priority for text-to-video
    }
    if (lowerTitle.includes('pika labs')) {
      score += 1750;
    }
    if (lowerTitle.includes('google veo 3') || lowerTitle.includes('veo3')) {
      score += 1700;
    }
    if (lowerTitle.includes('movie maker studio')) {
      score += 1650;
    }
    if (lowerTitle.includes('runwayml gen-2') || lowerTitle.includes('runwayml')) {
      score += 1600;
    }
    if (lowerTitle.includes('sora')) {
      score += 1550;
    }
    if (lowerTitle.includes('text to video prompt generator')) {
      score += 1500;
    }
    
    // General text-to-video matching
    if (lowerTitle.includes('text-to-video')) {
      score += 1400;
    }
    if (lowerDescription.includes('text-to-video')) {
      score += 1200;
    }
    if (lowerTitle.includes('video generation')) {
      score += 1300;
    }
    if (lowerDescription.includes('video generation')) {
      score += 1100;
    }
    if (lowerTitle.includes('ai video')) {
      score += 1200;
    }
    if (lowerDescription.includes('ai video')) {
      score += 1000;
    }
    if (lowerCategory.includes('video generation')) {
      score += 1200;
    }
    if (lowerTags.some(tag => tag.includes('text-to-video'))) {
      score += 1100;
    }
  }
  
  // HISTORY TOOLS SCORING - ONLY FOR EXPLICIT HISTORY SEARCHES
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
  
  // LEARNING TOOLS SCORING
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
  
  // MEDICAL TOOLS SCORING for AI Web Tools GPTs
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
