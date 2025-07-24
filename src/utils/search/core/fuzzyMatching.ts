
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
          // Removed console.log for performance
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
            // Removed console.log for performance
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
            // Removed console.log for performance
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
              // Removed console.log for performance
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
    // Educational terms - Priority for college searches
    'college': ['collge', 'colege', 'kollege', 'coledge', 'collega', 'colledge', 'collage', 'university', 'degree', 'education', 'school', 'academic', 'study', 'learn'],
    'education': ['educaton', 'educatin', 'eduction', 'educaion', 'educatoin', 'learning', 'study', 'school', 'course', 'lesson', 'teach'],
    'school': ['scool', 'shcool', 'schooll', 'skool', 'schol', 'schoo', 'education', 'learning', 'study'],
    'learn': ['lern', 'larn', 'leanr', 'learnn', 'study', 'education', 'course', 'skill', 'training'],
    'course': ['corse', 'cours', 'coures', 'coruse', 'class', 'lesson', 'education', 'study'],
    'study': ['studie', 'stdy', 'studey', 'stduy', 'learn', 'education', 'course'],
    'skill': ['skil', 'skiil', 'sklil', 'learn', 'ability', 'training'],
    'degree': ['degre', 'degee', 'dergee', 'college', 'university', 'education'],
    'class': ['clas', 'clase', 'claas', 'clss', 'calss', 'course', 'lesson'],
    'homework': ['homwork', 'homewrok', 'homeworkk', 'homwrok', 'hmework', 'assignment'],
    'lesson': ['leson', 'lesn', 'lessson', 'lesno', 'class', 'course'],
    'tutor': ['tuor', 'tuter', 'tutro', 'tuotr', 'teacher', 'instructor'],
    'teacher': ['techer', 'tecaher', 'teahcer', 'tutor', 'instructor'],
    'training': ['traning', 'trainig', 'trianing', 'learn', 'education'],
    
    // Medical/Health terms
    'doctor': ['docter', 'docktor', 'doktor', 'dr', 'dcotor', 'physician', 'medical', 'health'],
    'health': ['helath', 'healt', 'helth', 'heatlh', 'medical', 'wellness'],
    'medical': ['medial', 'medicla', 'medcial', 'health', 'doctor'],
    'wellness': ['welness', 'wellnes', 'welnes', 'health'],
    
    // Creative terms
    'book': ['bok', 'boook', 'buk', 'write', 'writing', 'author'],
    'writing': ['writting', 'writeing', 'riting', 'writen', 'writng', 'write', 'author', 'book'],
    'write': ['rite', 'wrtie', 'wriet', 'writing', 'author'],
    'author': ['auther', 'authro', 'authr', 'writer', 'writing'],
    'design': ['desing', 'desgn', 'dezign', 'deisng', 'graphic', 'creative'],
    'art': ['arte', 'atr', 'creative', 'design', 'artistic'],
    'music': ['musik', 'musick', 'muzic', 'misic', 'mucis', 'sound', 'audio'],
    'video': ['vdeo', 'vidoe', 'vide', 'film', 'movie'],
    'image': ['imag', 'iamge', 'imagge', 'picture', 'photo'],
    'picture': ['pictur', 'picure', 'pitcure', 'image', 'photo'],
    'photo': ['foto', 'phot', 'photoo', 'picture', 'image'],
    
    // Business terms
    'business': ['buisness', 'bussiness', 'busness', 'bizness', 'bussines', 'company', 'corporate'],
    'marketing': ['marketting', 'marekting', 'markting', 'promotion', 'advertising'],
    'finance': ['finace', 'finanace', 'fianance', 'finacial', 'financal', 'money', 'financial'],
    'money': ['mony', 'moeny', 'monye', 'mnoy', 'financial', 'finance'],
    'trading': ['tradeing', 'tradng', 'traidng', 'trade', 'investment'],
    'investment': ['invesment', 'investmnt', 'investmenet', 'investing', 'finance'],
    'budget': ['buget', 'budjet', 'budgit', 'financial', 'money'],
    'stock': ['stok', 'stoc', 'stokc', 'trading', 'investment'],
    
    // Other common terms
    'travel': ['travle', 'trvel', 'travell', 'trip', 'journey'],
    'research': ['resarch', 'reserch', 'reasearch', 'researh', 'reseach', 'study', 'analysis'],
    'legal': ['leagal', 'legall', 'ligal', 'law', 'lawyer'],
    'analysis': ['anlaysis', 'anaylsis', 'analysys', 'analyze', 'research'],
    'government': ['goverment', 'govenment', 'govermnent', 'governmnet', 'political'],
    'political': ['politcal', 'poltical', 'politial', 'polical', 'government'],
    'testimony': ['testimny', 'testmony', 'testimoney', 'testimonie', 'legal']
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
