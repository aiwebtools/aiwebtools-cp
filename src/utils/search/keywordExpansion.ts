
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
