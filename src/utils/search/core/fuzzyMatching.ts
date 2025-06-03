
import { Tool } from "@/types/tools";

// Calculate Levenshtein distance for fuzzy matching
export const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Calculate similarity score (0-1, where 1 is perfect match)
export const calculateSimilarity = (str1: string, str2: string): number => {
  if (str1 === str2) return 1;
  
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

// Enhanced fuzzy matching for tool searches
export const fuzzyMatchTool = (tool: Tool, searchTerm: string): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  let totalScore = 0;
  let matched = false;
  
  // Check tool title words
  const titleWords = tool.title.toLowerCase().split(/\s+/);
  for (const searchWord of searchWords) {
    if (searchWord.length >= 3) {
      for (const titleWord of titleWords) {
        const similarity = calculateSimilarity(searchWord, titleWord);
        if (similarity >= 0.7) { // 70% similarity threshold
          matched = true;
          totalScore += similarity * 3000; // High score for title matches
        }
      }
    }
  }
  
  // Check description words for longer search terms
  if (lowerSearchTerm.length >= 4) {
    const descWords = tool.description.toLowerCase().split(/\s+/);
    for (const searchWord of searchWords) {
      if (searchWord.length >= 4) {
        for (const descWord of descWords) {
          const similarity = calculateSimilarity(searchWord, descWord);
          if (similarity >= 0.75) { // Higher threshold for description
            matched = true;
            totalScore += similarity * 1500; // Medium score for description matches
          }
        }
      }
    }
  }
  
  // Check category matching
  if (tool.category) {
    const categoryWords = tool.category.toLowerCase().split(/\s+/);
    for (const searchWord of searchWords) {
      if (searchWord.length >= 3) {
        for (const catWord of categoryWords) {
          const similarity = calculateSimilarity(searchWord, catWord);
          if (similarity >= 0.8) {
            matched = true;
            totalScore += similarity * 1000;
          }
        }
      }
    }
  }
  
  // Check tags matching
  if (tool.tags) {
    for (const tag of tool.tags) {
      const tagWords = tag.toLowerCase().split(/\s+/);
      for (const searchWord of searchWords) {
        if (searchWord.length >= 3) {
          for (const tagWord of tagWords) {
            const similarity = calculateSimilarity(searchWord, tagWord);
            if (similarity >= 0.75) {
              matched = true;
              totalScore += similarity * 800;
            }
          }
        }
      }
    }
  }
  
  return { score: totalScore, matched };
};

// Phonetic matching for common sound-alike words
export const phoneticMatch = (searchTerm: string): string[] => {
  const phoneticMappings: Record<string, string[]> = {
    'college': ['collge', 'colege', 'kollege', 'coledge'],
    'doctor': ['docter', 'docktor', 'doktor', 'dr'],
    'travel': ['travle', 'trvel', 'travel'],
    'music': ['musik', 'musick', 'muzic'],
    'business': ['buisness', 'bussiness', 'busness', 'bizness'],
    'writing': ['writting', 'writeing', 'riting'],
    'design': ['desing', 'desgn', 'dezign'],
    'research': ['resarch', 'reserch', 'reasearch'],
    'education': ['educaton', 'educatin', 'eduction'],
    'health': ['helath', 'healt', 'helth'],
    'finance': ['finace', 'finanace', 'fianance'],
    'legal': ['leagal', 'legall', 'ligal'],
    'marketing': ['marketting', 'marekting', 'markting'],
    'analysis': ['anlaysis', 'anaylsis', 'analysys'],
    'government': ['goverment', 'govenment', 'govermnent'],
    'political': ['politcal', 'poltical', 'politial'],
    'testimony': ['testimny', 'testmony', 'testimoney']
  };
  
  const matches: string[] = [];
  const lowerSearch = searchTerm.toLowerCase();
  
  for (const [correct, variations] of Object.entries(phoneticMappings)) {
    if (variations.includes(lowerSearch) || lowerSearch.includes(correct)) {
      matches.push(correct);
      matches.push(...variations);
    }
  }
  
  return [...new Set(matches)];
};
