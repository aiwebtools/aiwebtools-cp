
import { keywordMapping } from "@/data/keywordMapping";

// Helper function to get expanded keywords with better matching
export const getExpandedKeywords = (searchTerm: string): string[] => {
  // For very short searches, don't expand keywords to prevent false matches
  if (searchTerm.length <= 2) {
    return [searchTerm];
  }
  
  const words = searchTerm.split(' ');
  const expandedKeywords = new Set([searchTerm]);
  
  // Add the full search term
  expandedKeywords.add(searchTerm);
  
  // Special handling for GPT searches - this is crucial for Ken's GPTs
  if (searchTerm.toLowerCase().includes('gpt')) {
    expandedKeywords.add('gpt');
    expandedKeywords.add('GPT');
    expandedKeywords.add('chatgpt');
    expandedKeywords.add('custom gpt');
    expandedKeywords.add('ai assistant');
    expandedKeywords.add('conversational ai');
  }
  
  // Add individual words (only if they're longer than 2 characters)
  words.forEach(word => {
    if (word.length > 2) {
      expandedKeywords.add(word);
      
      // Check if any keyword mapping key contains this word or vice versa
      Object.keys(keywordMapping).forEach(key => {
        if (key.includes(word) || word.includes(key)) {
          keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
        }
      });
      
      // Direct keyword mapping
      if (keywordMapping[word]) {
        keywordMapping[word].forEach(keyword => expandedKeywords.add(keyword));
      }
    }
  });
  
  // Special handling for partial matches in keyword mapping (only for longer terms)
  if (searchTerm.length > 3) {
    Object.keys(keywordMapping).forEach(key => {
      if (searchTerm.includes(key) || key.includes(searchTerm)) {
        keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
      }
    });
  }
  
  return Array.from(expandedKeywords);
};
