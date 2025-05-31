
import { Tool } from "@/types/tools";
import { toolAbbreviations, fuzzyMatches, acronymMatches } from "./toolAbbreviations";

// Helper function to check if a tool name matches partial input intelligently
export const getToolNameMatchScore = (toolTitle: string, searchTerm: string): number => {
  const lowerTitle = toolTitle.toLowerCase();
  const cleanTitle = lowerTitle.replace(/[^a-z0-9\s]/g, ''); // Remove special characters
  const words = cleanTitle.split(' ');
  
  let score = 0;
  
  // Exact match gets highest score
  if (lowerTitle === searchTerm) {
    return 500;
  }
  
  // Special boost for GPT tools when searching for "gpt"
  if (searchTerm.toLowerCase().includes('gpt') && lowerTitle.includes('gpt')) {
    score += 400;
  }
  
  // Check if search term matches beginning of title
  if (lowerTitle.startsWith(searchTerm)) {
    score += 400;
  }
  
  // Check if search term matches beginning of any word in title
  const startsWithWord = words.some(word => word.startsWith(searchTerm));
  if (startsWithWord) {
    score += 350;
  }
  
  // For very short searches (2-3 characters), be more intelligent about matching
  if (searchTerm.length >= 2 && searchTerm.length <= 3) {
    // Check if the search term matches any abbreviation
    if (toolAbbreviations[searchTerm]) {
      const matchingConcepts = toolAbbreviations[searchTerm];
      const hasConceptMatch = matchingConcepts.some(concept => 
        lowerTitle.includes(concept) || cleanTitle.includes(concept)
      );
      if (hasConceptMatch) {
        score += 300;
      }
    }
  }
  
  // Check for partial matches within words (for longer searches)
  if (searchTerm.length >= 3) {
    const hasPartialMatch = words.some(word => word.includes(searchTerm));
    if (hasPartialMatch) {
      score += 250;
    }
  }
  
  // Check if title contains search term anywhere
  if (lowerTitle.includes(searchTerm)) {
    score += 200;
  }
  
  // Fuzzy matching for common typos and variations
  if (searchTerm.length >= 3) {
    Object.entries(fuzzyMatches).forEach(([correct, variants]) => {
      if (variants.some(variant => variant.includes(searchTerm) || searchTerm.includes(variant))) {
        if (lowerTitle.includes(correct)) {
          score += 180;
        }
      }
    });
  }
  
  // Acronym matching (e.g., "AI" matches "Artificial Intelligence")
  if (searchTerm.length >= 2) {
    if (acronymMatches[searchTerm]) {
      const matchingTerms = acronymMatches[searchTerm];
      const hasAcronymMatch = matchingTerms.some(term => lowerTitle.includes(term));
      if (hasAcronymMatch) {
        score += 160;
      }
    }
  }
  
  return score;
};
