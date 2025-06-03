
import { Tool } from "@/types/tools";
import { calculateSimilarity } from "./fuzzyMatching";

// Intelligent prediction based on partial input
export const predictUserIntent = (searchTerm: string, tools: Tool[]): string[] => {
  const lowerSearch = searchTerm.toLowerCase().trim();
  const predictions: Set<string> = new Set();
  
  // Common search patterns and their likely intents
  const intentPatterns = [
    // Educational patterns
    { pattern: /^(learn|cours|educat|stud|teach)/i, suggestions: ['college degree gpt', 'learn any skill gpt', 'learn any course gpt'] },
    { pattern: /^(writ|book|content|articl)/i, suggestions: ['book writer gpt', 'article writer', 'content creation'] },
    { pattern: /^(heal|medic|doct|dr)/i, suggestions: ['doctor gpt', 'health', 'medical assistant'] },
    { pattern: /^(trav|vacat|trip)/i, suggestions: ['travel advisor gpt', 'vacation planner'] },
    { pattern: /^(music|song|audio)/i, suggestions: ['music video maker', 'music melodies', 'audio generation'] },
    { pattern: /^(polit|civic|democr|activ)/i, suggestions: ['we the people ai', 'public testimony writer', 'political activism'] },
    { pattern: /^(busin|market|financ|money)/i, suggestions: ['business plan generator', 'financial calculator', 'marketing tools'] },
    { pattern: /^(design|graph|art|visual)/i, suggestions: ['graphic design gpt', 'logo maker', 'visual design'] },
    { pattern: /^(video|movie|film)/i, suggestions: ['movie maker studio', 'video creation', 'film production'] },
    { pattern: /^(legal|law|contract)/i, suggestions: ['contract review bot', 'legal assistant', 'legislation writer'] },
    { pattern: /^(resear|scien|analys)/i, suggestions: ['research assistant', 'data analysis', 'scientific research'] },
    { pattern: /^(code|program|dev|software)/i, suggestions: ['coding assistant', 'software development', 'programming tools'] }
  ];
  
  // Check against patterns
  for (const { pattern, suggestions } of intentPatterns) {
    if (pattern.test(lowerSearch)) {
      suggestions.forEach(suggestion => predictions.add(suggestion));
    }
  }
  
  // Find tools with similar names
  for (const tool of tools) {
    const toolWords = tool.title.toLowerCase().split(/\s+/);
    
    // Check if any tool word starts with the search term
    for (const word of toolWords) {
      if (word.startsWith(lowerSearch) && lowerSearch.length >= 2) {
        predictions.add(tool.title.toLowerCase());
      }
    }
    
    // Check similarity with tool title
    const similarity = calculateSimilarity(lowerSearch, tool.title.toLowerCase());
    if (similarity >= 0.6 && lowerSearch.length >= 3) {
      predictions.add(tool.title.toLowerCase());
    }
  }
  
  return Array.from(predictions).slice(0, 10); // Limit to top 10 predictions
};

// Auto-complete suggestions based on partial input
export const generateAutoComplete = (searchTerm: string, tools: Tool[]): string[] => {
  const lowerSearch = searchTerm.toLowerCase().trim();
  const suggestions: Set<string> = new Set();
  
  if (lowerSearch.length < 2) return [];
  
  // Find tools that start with the search term
  for (const tool of tools) {
    if (tool.title.toLowerCase().startsWith(lowerSearch)) {
      suggestions.add(tool.title);
    }
    
    // Check individual words in title
    const words = tool.title.toLowerCase().split(/\s+/);
    for (const word of words) {
      if (word.startsWith(lowerSearch) && word.length > lowerSearch.length) {
        suggestions.add(word);
      }
    }
    
    // Check category
    if (tool.category?.toLowerCase().startsWith(lowerSearch)) {
      suggestions.add(tool.category);
    }
    
    // Check tags
    if (tool.tags) {
      for (const tag of tool.tags) {
        if (tag.toLowerCase().startsWith(lowerSearch)) {
          suggestions.add(tag);
        }
      }
    }
  }
  
  return Array.from(suggestions).slice(0, 8);
};

// Context-aware search enhancement
export const enhanceSearchWithContext = (searchTerm: string): string[] => {
  const enhancements: string[] = [searchTerm];
  const lowerSearch = searchTerm.toLowerCase();
  
  // Add common variations and synonyms
  const contextualEnhancements: Record<string, string[]> = {
    'ai': ['artificial intelligence', 'machine learning', 'automation'],
    'gpt': ['chatgpt', 'openai', 'language model'],
    'write': ['writing', 'content creation', 'author', 'script'],
    'design': ['graphic design', 'visual design', 'creative', 'art'],
    'learn': ['education', 'course', 'study', 'tutorial', 'skill'],
    'health': ['medical', 'doctor', 'wellness', 'healthcare'],
    'business': ['finance', 'marketing', 'entrepreneur', 'startup'],
    'code': ['programming', 'development', 'software', 'coding'],
    'video': ['movie', 'film', 'animation', 'cinema'],
    'music': ['audio', 'sound', 'song', 'melody'],
    'travel': ['vacation', 'trip', 'tourism', 'adventure'],
    'legal': ['law', 'attorney', 'contract', 'legislation'],
    'research': ['analysis', 'data', 'science', 'study'],
    'political': ['civic', 'democracy', 'government', 'activism']
  };
  
  for (const [key, values] of Object.entries(contextualEnhancements)) {
    if (lowerSearch.includes(key)) {
      enhancements.push(...values);
    }
  }
  
  return [...new Set(enhancements)];
};
