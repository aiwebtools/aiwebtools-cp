
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
        if (similarity >= 0.6) { // Lowered threshold for better misspelling support
          matched = true;
          totalScore += similarity * 3500; // Higher score for title matches
          console.log(`🎯 Fuzzy title match: "${searchWord}" ~ "${titleWord}" (${similarity.toFixed(2)})`);
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
          if (similarity >= 0.7) { // Threshold for description
            matched = true;
            totalScore += similarity * 1800; // Medium score for description matches
            console.log(`🎯 Fuzzy desc match: "${searchWord}" ~ "${descWord}" (${similarity.toFixed(2)})`);
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
          if (similarity >= 0.75) {
            matched = true;
            totalScore += similarity * 1200;
            console.log(`🎯 Fuzzy category match: "${searchWord}" ~ "${catWord}" (${similarity.toFixed(2)})`);
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
            if (similarity >= 0.7) {
              matched = true;
              totalScore += similarity * 900;
              console.log(`🎯 Fuzzy tag match: "${searchWord}" ~ "${tagWord}" (${similarity.toFixed(2)})`);
            }
          }
        }
      }
    }
  }
  
  return { score: totalScore, matched };
};

// Enhanced phonetic matching for common sound-alike words and misspellings
export const phoneticMatch = (searchTerm: string): string[] => {
  const phoneticMappings: Record<string, string[]> = {
    'college': ['collge', 'colege', 'kollege', 'coledge', 'collega', 'colledge', 'collage'],
    'doctor': ['docter', 'docktor', 'doktor', 'dr', 'dcotor'],
    'travel': ['travle', 'trvel', 'travell'],
    'music': ['musik', 'musick', 'muzic', 'misic', 'mucis'],
    'business': ['buisness', 'bussiness', 'busness', 'bizness', 'bussines'],
    'writing': ['writting', 'writeing', 'riting', 'writen', 'writng'],
    'design': ['desing', 'desgn', 'dezign', 'deisng'],
    'research': ['resarch', 'reserch', 'reasearch', 'researh', 'reseach'],
    'education': ['educaton', 'educatin', 'eduction', 'educaion', 'educatoin'],
    'health': ['helath', 'healt', 'helth', 'heatlh'],
    'finance': ['finace', 'finanace', 'fianance', 'finacial', 'financal'],
    'legal': ['leagal', 'legall', 'ligal'],
    'marketing': ['marketting', 'marekting', 'markting'],
    'analysis': ['anlaysis', 'anaylsis', 'analysys'],
    'government': ['goverment', 'govenment', 'govermnent', 'governmnet'],
    'political': ['politcal', 'poltical', 'politial', 'polical'],
    'testimony': ['testimny', 'testmony', 'testimoney', 'testimonie'],
    'school': ['scool', 'shcool', 'schooll', 'skool', 'schol', 'schoo'],
    'class': ['clas', 'clase', 'claas', 'clss', 'calss'],
    'homework': ['homwork', 'homewrok', 'homeworkk', 'homwrok', 'hmework'],
    'lesson': ['leson', 'lesn', 'lessson', 'lesno'],
    'tutor': ['tuor', 'tuter', 'tutro', 'tuotr'],
    'money': ['mony', 'moeny', 'monye', 'mnoy'],
    'trading': ['tradeing', 'tradng', 'traidng'],
    'investment': ['invesment', 'investmnt', 'investmenet'],
    'budget': ['buget', 'budjet', 'budgit'],
    'stock': ['stok', 'stoc', 'stokc']
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
