
import { keywordMapping, searchSynonyms, categoryKeywords } from "@/data/keywordMapping";

export const getExpandedKeywords = (searchTerm: string): string[] => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const expandedKeywords = new Set<string>();
  
  // Add the original search term
  expandedKeywords.add(lowerSearchTerm);
  
  // AGENTS SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Add specific agent tool names
    const agentKeywords = [
      'chatgpt operator',
      'manus autonomous agent',
      'surf.new web agents',
      'lindy ai automation',
      'auto-gpt',
      'babyagi',
      'agentgpt',
      'god mode gpt',
      'ai town',
      'autonomous',
      'automation',
      'intelligent agent',
      'ai assistant',
      'workflow automation',
      'task automation',
      'web automation',
      'browser automation',
      'ai workflow',
      'ai automation platform'
    ];
    
    agentKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // CODING AGENT SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent'))) {
    const codingAgentKeywords = [
      'lovable.dev',
      'bolt.new',
      'chatgpt operator',
      'manus autonomous agent',
      'auto-gpt',
      'agentgpt',
      'coding assistant',
      'ai coding',
      'code generation',
      'web development',
      'ai developer',
      'programming assistant'
    ];
    
    codingAgentKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // WEB DESIGN SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('web design') || lowerSearchTerm.includes('website design') ||
      lowerSearchTerm.includes('web development') || lowerSearchTerm.includes('website development')) {
    const webDesignKeywords = [
      'lovable.dev',
      'bolt.new',
      'web design',
      'website builder',
      'web development',
      'site builder',
      'website creation',
      'web app builder',
      'ui design',
      'frontend development'
    ];
    
    webDesignKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // TEXT TO WEBSITE SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('text to website') || lowerSearchTerm.includes('text-to-website') ||
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('website'))) {
    const textToWebsiteKeywords = [
      'lovable.dev',
      'bolt.new',
      'text to website',
      'ai website builder',
      'website generator',
      'site generator',
      'web app generator',
      'instant website',
      'ai web design',
      'automated web development'
    ];
    
    textToWebsiteKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // TEXT TO VIDEO SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    const textToVideoKeywords = [
      'luma labs dream machine',
      'luma dream machine',
      'pika labs',
      'google veo 3',
      'veo3',
      'movie maker studio',
      'runwayml gen-2',
      'runwayml',
      'sora',
      'video generation',
      'ai video',
      'text-to-video',
      'video creator',
      'ai video generator',
      'video ai',
      'prompt to video',
      'generate video',
      'video from text'
    ];
    
    textToVideoKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // HISTORY SEARCH EXPANSION - ONLY FOR EXPLICIT HISTORY SEARCHES
  if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
    const historyKeywords = [
      'time machine gpt',
      'talk to history gpt',
      'historical headlines gpt',
      'titanic resurrections gpt',
      'uncovering hidden historical patterns gpt',
      'native american history time machine gpt',
      'historical figures',
      'time travel',
      'historical events',
      'historical analysis',
      'historical research'
    ];
    
    historyKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // LEARNING EXPANSION
  if (lowerSearchTerm.includes('learn')) {
    const learningKeywords = [
      'learn any skill gpt',
      'learn any course gpt',
      'college degree gpt',
      'education',
      'tutorial',
      'training',
      'skill development',
      'course creation',
      'homeschool'
    ];
    
    learningKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // Check direct keyword mappings
  if (keywordMapping[lowerSearchTerm]) {
    keywordMapping[lowerSearchTerm].forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // Check search synonyms
  Object.entries(searchSynonyms).forEach(([key, synonyms]) => {
    if (synonyms.some(synonym => lowerSearchTerm.includes(synonym))) {
      expandedKeywords.add(key);
      synonyms.forEach(synonym => expandedKeywords.add(synonym));
    }
  });
  
  // Check category keywords
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    if (keywords.some(keyword => lowerSearchTerm.includes(keyword))) {
      keywords.forEach(keyword => expandedKeywords.add(keyword));
    }
  });
  
  // Add common variations for agents
  if (lowerSearchTerm.includes('agent')) {
    expandedKeywords.add('agents');
    expandedKeywords.add('ai agent');
    expandedKeywords.add('autonomous agent');
    expandedKeywords.add('intelligent agent');
  }
  
  // Convert back to array and remove empty strings
  return Array.from(expandedKeywords).filter(keyword => keyword.length > 0);
};
