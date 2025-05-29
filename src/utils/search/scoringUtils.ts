
import { Tool } from "@/types/tools";
import { toolAbbreviations, fuzzyMatches, acronymMatches } from "./toolAbbreviations";
import { intentMatches, toolNameMatches, semanticGroups } from "./intentMatching";

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

export const calculateIntentScore = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // Check for intent matches
  Object.entries(intentMatches).forEach(([intent, keywords]) => {
    if (keywords.some(keyword => searchTerm.includes(keyword))) {
      // Boost tools that match this intent
      if (intent === "learn" && (lowerTitle.includes("learn") || lowerTitle.includes("skill") || lowerTitle.includes("course") || lowerTitle.includes("education"))) {
        score += 60;
      }
      if (intent === "help" && (lowerTitle.includes("assistant") || lowerTitle.includes("helper") || lowerTitle.includes("guide"))) {
        score += 50;
      }
      if (intent === "create" && (lowerTitle.includes("generator") || lowerTitle.includes("creator") || lowerTitle.includes("maker"))) {
        score += 55;
      }
      if (intent === "write" && (lowerTitle.includes("writing") || lowerTitle.includes("content") || lowerTitle.includes("text"))) {
        score += 60;
      }
      if (intent === "chat" && (lowerTitle.includes("chat") || lowerTitle.includes("conversation") || lowerTitle.includes("talk"))) {
        score += 65;
      }
      if (intent === "art" && (lowerTitle.includes("art") || lowerTitle.includes("design") || lowerTitle.includes("creative"))) {
        score += 55;
      }
      if (intent === "business" && (lowerCategory.includes("business") || lowerTags.some(tag => tag.includes("business")))) {
        score += 50;
      }
      if (intent === "fun" && (lowerCategory.includes("entertainment") || lowerCategory.includes("game"))) {
        score += 45;
      }
      if (intent === "health" && (lowerCategory.includes("health") || lowerCategory.includes("wellness"))) {
        score += 55;
      }
      if (intent === "spiritual" && (lowerCategory.includes("spiritual") || lowerCategory.includes("wellness"))) {
        score += 60;
      }
    }
  });
  
  // Specific tool name recognition for popular tools
  Object.entries(toolNameMatches).forEach(([toolName, keywords]) => {
    if (keywords.some(keyword => searchTerm.includes(keyword))) {
      if (lowerTitle.includes(toolName) || lowerDescription.includes(toolName)) {
        score += 80; // High boost for specific tool matches
      }
    }
  });
  
  // Semantic similarity for related concepts
  Object.values(semanticGroups).forEach(group => {
    if (group.some(concept => searchTerm.includes(concept))) {
      const toolText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      const semanticMatches = group.filter(concept => toolText.includes(concept)).length;
      score += semanticMatches * 15;
    }
  });
  
  return score;
};
