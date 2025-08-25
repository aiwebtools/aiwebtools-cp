import { Tool } from "@/types/tools";
import { comprehensiveSearchIndex, allSearchTerms, categoryMappings } from "@/data/keywords/comprehensiveSearchIndex";

/**
 * Enhanced comprehensive search matching using the full search index
 */
export const matchComprehensiveSearch = (tool: Tool, searchTerm: string): { matched: boolean; score: number; category?: string } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = `${tool.title} ${tool.description} ${(tool.tags || []).join(' ')}`.toLowerCase();
  
  let bestScore = 0;
  let matched = false;
  let bestCategory = '';
  
  console.log(`🔍 Comprehensive search for "${tool.title}" with term "${searchTerm}"`);
  
  // Check each category for matches
  Object.entries(categoryMappings).forEach(([category, terms]) => {
    let categoryScore = 0;
    
    // Check if search term matches any terms in this category
    const matchingTerms = terms.filter(term => {
      const lowerTerm = term.toLowerCase();
      return lowerSearchTerm.includes(lowerTerm) || 
             lowerTerm.includes(lowerSearchTerm) ||
             searchableText.includes(lowerTerm);
    });
    
    if (matchingTerms.length > 0) {
      console.log(`🎯 Found ${matchingTerms.length} matching terms in ${category} category for ${tool.title}`);
      
      // Score based on relevance and matches
      matchingTerms.forEach(matchingTerm => {
        const lowerTerm = matchingTerm.toLowerCase();
        
        // Exact match in search term
        if (lowerSearchTerm === lowerTerm) {
          categoryScore += 15000;
          console.log(`🎯 EXACT MATCH: "${matchingTerm}" = +15000`);
        }
        // Search term contains the index term
        else if (lowerSearchTerm.includes(lowerTerm)) {
          categoryScore += 12000;
          console.log(`🎯 SEARCH CONTAINS TERM: "${matchingTerm}" = +12000`);
        }
        // Index term contains search term
        else if (lowerTerm.includes(lowerSearchTerm)) {
          categoryScore += 10000;
          console.log(`🎯 TERM CONTAINS SEARCH: "${matchingTerm}" = +10000`);
        }
        
        // Bonus for matches in tool content
        if (tool.title.toLowerCase().includes(lowerTerm)) {
          categoryScore += 8000;
          console.log(`🎯 TITLE MATCH: "${matchingTerm}" in title = +8000`);
        }
        else if (tool.description.toLowerCase().includes(lowerTerm)) {
          categoryScore += 5000;
          console.log(`🎯 DESC MATCH: "${matchingTerm}" in description = +5000`);
        }
        else if ((tool.tags || []).some(tag => tag.toLowerCase().includes(lowerTerm))) {
          categoryScore += 3000;
          console.log(`🎯 TAG MATCH: "${matchingTerm}" in tags = +3000`);
        }
      });
      
      // Category-specific bonuses
      categoryScore += getCategoryBonus(category, tool, lowerSearchTerm);
      
      if (categoryScore > bestScore) {
        bestScore = categoryScore;
        bestCategory = category;
        matched = true;
      }
    }
  });
  
  // Additional fuzzy matching with comprehensive terms
  if (!matched) {
    const fuzzyMatches = findFuzzyMatches(lowerSearchTerm, allSearchTerms);
    if (fuzzyMatches.length > 0) {
      console.log(`🔍 Found ${fuzzyMatches.length} fuzzy matches for "${searchTerm}"`);
      
      fuzzyMatches.forEach(fuzzyMatch => {
        if (searchableText.includes(fuzzyMatch.toLowerCase())) {
          bestScore += 2000 * fuzzyMatch.length / searchTerm.length; // Score based on similarity
          matched = true;
          console.log(`🔍 FUZZY MATCH: "${fuzzyMatch}" = +${2000 * fuzzyMatch.length / searchTerm.length}`);
        }
      });
    }
  }
  
  if (matched) {
    console.log(`🎯 COMPREHENSIVE MATCH: ${tool.title} scored ${bestScore} in category ${bestCategory}`);
  }
  
  return { matched, score: bestScore, category: bestCategory };
};

/**
 * Get category-specific scoring bonuses
 */
const getCategoryBonus = (category: string, tool: Tool, searchTerm: string): number => {
  const titleLower = tool.title.toLowerCase();
  const descLower = tool.description.toLowerCase();
  let bonus = 0;
  
  switch (category) {
    case 'spiritual':
      if (titleLower.includes('mary magdalene') || titleLower.includes('talk to the gods') || 
          titleLower.includes('alan watts') || titleLower.includes('sophia aeterna')) {
        bonus += 5000;
      }
      break;
      
    case 'esoteric':
      if (titleLower.includes('soul map') || titleLower.includes('oraculum') || 
          titleLower.includes('fortune teller') || titleLower.includes('dream')) {
        bonus += 4000;
      }
      break;
      
    case 'productivity':
      if (titleLower.includes('business') || titleLower.includes('startup') || 
          titleLower.includes('marketing') || titleLower.includes('trader')) {
        bonus += 4000;
      }
      break;
      
    case 'creative':
      if (titleLower.includes('book writer') || titleLower.includes('movie') || 
          titleLower.includes('music') || titleLower.includes('art')) {
        bonus += 4000;
      }
      break;
      
    case 'health':
      if (titleLower.includes('doctor') || titleLower.includes('wellness') || 
          titleLower.includes('mental') || titleLower.includes('therapy')) {
        bonus += 4000;
      }
      break;
      
    case 'everyday':
      if (titleLower.includes('home') || titleLower.includes('travel') || 
          titleLower.includes('education') || titleLower.includes('learn')) {
        bonus += 3000;
      }
      break;
      
    case 'philosophy':
      if (titleLower.includes('neo matrix') || titleLower.includes('interpretis') || 
          titleLower.includes('philosophy') || descLower.includes('wisdom')) {
        bonus += 4000;
      }
      break;
      
    case 'science':
      if (titleLower.includes('tesla') || titleLower.includes('stellaris') || 
          titleLower.includes('genome') || titleLower.includes('research')) {
        bonus += 4000;
      }
      break;
      
    case 'entertainment':
      if (titleLower.includes('game') || titleLower.includes('trivia') || 
          titleLower.includes('celebrity') || titleLower.includes('entertainment')) {
        bonus += 3000;
      }
      break;
  }
  
  return bonus;
};

/**
 * Find fuzzy matches in the comprehensive search index
 */
const findFuzzyMatches = (searchTerm: string, searchIndex: string[]): string[] => {
  const matches: string[] = [];
  const threshold = 0.6; // Similarity threshold
  
  searchIndex.forEach(term => {
    const similarity = calculateSimilarity(searchTerm, term.toLowerCase());
    if (similarity >= threshold) {
      matches.push(term);
    }
  });
  
  return matches.slice(0, 10); // Return top 10 matches
};

/**
 * Calculate string similarity (Levenshtein distance based)
 */
const calculateSimilarity = (str1: string, str2: string): number => {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;
  
  const distance = levenshteinDistance(str1, str2);
  return (maxLength - distance) / maxLength;
};

/**
 * Calculate Levenshtein distance between two strings
 */
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i += 1) {
    matrix[0][i] = i;
  }
  
  for (let j = 0; j <= str2.length; j += 1) {
    matrix[j][0] = j;
  }
  
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
};