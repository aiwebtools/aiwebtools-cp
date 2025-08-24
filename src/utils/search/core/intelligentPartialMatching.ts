import { Tool } from "@/types/tools";

// Smart partial word matching with predictive capabilities
export interface PartialMatchResult {
  tool: Tool;
  score: number;
  matchType: 'prefix' | 'partial' | 'fuzzy' | 'predictive';
  matchedWords: string[];
}

// Predictive word mappings for common searches
const PREDICTIVE_MAPPINGS: Record<string, string[]> = {
  // Single letter predictions
  'c': ['college', 'course', 'creative', 'content', 'custom', 'cannabis', 'crypto', 'chef', 'celebrity', 'contract', 'clarity', 'criminologist'],
  'co': ['college', 'course', 'content', 'custom', 'contract', 'coloring', 'coding', 'copywriting', 'commerce', 'company'],
  'col': ['college', 'coloring', 'collectible', 'collaboration'],
  'coll': ['college', 'collectible', 'collaboration'],
  'colle': ['college', 'collectible'],
  'colleg': ['college'],
  'college': ['college degree', 'college degrees', 'college education'],
  
  // Common partial words
  'g': ['game', 'graphic', 'government', 'generator', 'global', 'genome', 'grant'],
  'ga': ['game', 'gambling', 'garden', 'garage'],
  'gam': ['game', 'gambling'],
  'game': ['game design', 'game development', 'game generator', 'game maker'],
  'gp': ['gpt', 'generative'],
  'gpt': ['gpt maker', 'gpt creator', 'gpt builder'],
  
  'b': ['book', 'business', 'binary', 'budget', 'blockchain', 'brain'],
  'bo': ['book', 'bookmaker', 'bot', 'body'],
  'boo': ['book', 'booking'],
  'book': ['book writer', 'book generator', 'book maker'],
  'bu': ['business', 'budget', 'building'],
  'bus': ['business', 'budget'],
  'busi': ['business'],
  'busin': ['business'],
  'busine': ['business'],
  'busines': ['business'],
  'business': ['business plan', 'business generator', 'business planner'],
  
  'm': ['music', 'movie', 'medical', 'marketing', 'money', 'mental', 'material'],
  'mu': ['music', 'multiple', 'multi'],
  'mus': ['music', 'mushroom'],
  'musi': ['music'],
  'music': ['music video', 'music maker', 'music generator'],
  'mo': ['movie', 'money', 'mobile'],
  'mov': ['movie', 'movement'],
  'movi': ['movie'],
  'movie': ['movie maker', 'movie script', 'movie generator'],
  
  'h': ['health', 'home', 'history', 'hotel', 'help'],
  'he': ['health', 'help', 'heart'],
  'hea': ['health', 'heart', 'healing'],
  'heal': ['health', 'healing'],
  'healt': ['health'],
  'health': ['health care', 'health wellness', 'health professional'],
  'ho': ['home', 'hospital', 'hotel'],
  'hom': ['home', 'homework'],
  'home': ['home school', 'home renovation', 'home design'],
  'hi': ['history', 'historical'],
  'his': ['history', 'historical'],
  'hist': ['history', 'historical'],
  'histo': ['history', 'historical'],
  'histor': ['history', 'historical'],
  'history': ['history gpt', 'historical'],
  
  'a': ['ai', 'art', 'analysis', 'agent', 'automatic', 'astrology', 'audio'],
  'ai': ['ai agent', 'ai tool', 'ai assistant', 'ai generator'],
  'ar': ['art', 'article', 'architecture'],
  'art': ['art generator', 'article', 'artist'],
  
  'v': ['video', 'voice', 'virtual', 'veterinarian', 'venture'],
  'vi': ['video', 'voice', 'virtual', 'vision'],
  'vid': ['video'],
  'vide': ['video'],
  'video': ['video maker', 'video generator', 'video editor'],
  'vo': ['voice', 'voting'],
  'voi': ['voice'],
  'voic': ['voice'],
  'voice': ['voice generator', 'voice cloning'],
  
  'w': ['writing', 'web', 'weather', 'wellness', 'world'],
  'wr': ['writing', 'writer'],
  'wri': ['writing', 'writer'],
  'writ': ['writing', 'writer'],
  'writi': ['writing'],
  'writin': ['writing'],
  'writing': ['writing assistant', 'writing generator'],
  'we': ['web', 'wellness', 'weather'],
  'web': ['web design', 'web development', 'website'],
  
  't': ['travel', 'trading', 'therapy', 'tattoo', 'taxes', 'trivia'],
  'tr': ['travel', 'trading', 'therapy', 'training'],
  'tra': ['travel', 'trading', 'training'],
  'trav': ['travel'],
  'trave': ['travel'],
  'travel': ['travel advisor', 'travel agent', 'travel planner'],
  'trad': ['trading'],
  'tradi': ['trading'],
  'tradin': ['trading'],
  'trading': ['trading assistant', 'trader'],
  
  'l': ['legal', 'learn', 'language', 'law', 'life'],
  'le': ['legal', 'learn', 'lesson'],
  'lea': ['learn', 'learning', 'legal'],
  'lear': ['learn', 'learning'],
  'learn': ['learn skill', 'learn course', 'learning'],
  'leg': ['legal'],
  'lega': ['legal'],
  'legal': ['legal assistant', 'legal advisor'],
  
  'd': ['doctor', 'design', 'data', 'dream', 'diet'],
  'do': ['doctor', 'document'],
  'doc': ['doctor', 'document'],
  'doct': ['doctor'],
  'docto': ['doctor'],
  'doctor': ['doctor gpt', 'medical doctor'],
  'de': ['design', 'developer', 'dental'],
  'des': ['design', 'developer'],
  'desi': ['design'],
  'desig': ['design'],
  'design': ['design generator', 'graphic design'],
  'da': ['data', 'database'],
  'dat': ['data', 'database'],
  'data': ['data analysis', 'data analytics'],
  
  'r': ['research', 'resume', 'real', 'recipe'],
  're': ['research', 'resume', 'real', 'recipe'],
  'res': ['research', 'resume', 'restaurant'],
  'rese': ['research'],
  'resea': ['research'],
  'resear': ['research'],
  'researc': ['research'],
  'research': ['research assistant', 'research analysis'],
  'resu': ['resume'],
  'resum': ['resume'],
  'resume': ['resume builder', 'resume maker'],
  
  'f': ['finance', 'food', 'fitness', 'fashion', 'fact'],
  'fi': ['finance', 'fitness', 'financial', 'fire'],
  'fin': ['finance', 'financial'],
  'fina': ['finance', 'financial'],
  'finan': ['finance', 'financial'],
  'financ': ['finance', 'financial'],
  'finance': ['financial advisor', 'financial planning'],
  'fo': ['food', 'fortune', 'forex'],
  'foo': ['food'],
  'food': ['food quality', 'food inspector'],
  
  's': ['spiritual', 'school', 'startup', 'stock', 'social'],
  'sp': ['spiritual', 'space', 'speech'],
  'spi': ['spiritual'],
  'spir': ['spiritual'],
  'spiri': ['spiritual'],
  'spirit': ['spiritual'],
  'spiritu': ['spiritual'],
  'spiritua': ['spiritual'],
  'spiritual': ['spiritual advisor', 'spiritual guide'],
  'sc': ['school', 'science', 'script'],
  'sch': ['school'],
  'scho': ['school'],
  'schoo': ['school'],
  'school': ['school assistant', 'home school'],
  'st': ['startup', 'stock', 'student'],
  'sta': ['startup', 'stock'],
  'star': ['startup'],
  'start': ['startup'],
  'startu': ['startup'],
  'startup': ['startup validator', 'startup advisor'],
  'sto': ['stock'],
  'stoc': ['stock'],
  'stock': ['stock trading', 'stock analysis']
};

// Enhanced partial matching with predictive capabilities
export const performIntelligentPartialMatching = (
  tools: Tool[], 
  searchTerm: string
): PartialMatchResult[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const results: PartialMatchResult[] = [];
  
  // Skip very short terms unless they're in our predictions
  if (normalizedSearchTerm.length === 1 && !PREDICTIVE_MAPPINGS[normalizedSearchTerm]) {
    return results;
  }
  
  for (const tool of tools) {
    const titleWords = tool.title.toLowerCase().split(/[\s\-_]+/);
    const descWords = tool.description.toLowerCase().split(/[\s\-_]+/);
    const categoryWords = tool.category?.toLowerCase().split(/[\s\-_]+/) || [];
    const tagWords = (tool.tags || []).join(' ').toLowerCase().split(/[\s\-_]+/);
    
    let bestScore = 0;
    let bestMatchType: 'prefix' | 'partial' | 'fuzzy' | 'predictive' = 'partial';
    let matchedWords: string[] = [];
    
    // 1. PREDICTIVE MATCHING - Highest Priority
    const predictions = PREDICTIVE_MAPPINGS[normalizedSearchTerm] || [];
    for (const prediction of predictions) {
      const predictionScore = checkPredictiveMatch(tool, prediction, normalizedSearchTerm);
      if (predictionScore > bestScore) {
        bestScore = predictionScore;
        bestMatchType = 'predictive';
        matchedWords = [prediction];
      }
    }
    
    // 2. PREFIX MATCHING - Very High Priority
    const prefixScore = checkPrefixMatching(titleWords, descWords, categoryWords, tagWords, normalizedSearchTerm);
    if (prefixScore.score > bestScore) {
      bestScore = prefixScore.score;
      bestMatchType = 'prefix';
      matchedWords = prefixScore.matches;
    }
    
    // 3. PARTIAL WORD MATCHING - High Priority
    const partialScore = checkPartialMatching(titleWords, descWords, categoryWords, tagWords, normalizedSearchTerm);
    if (partialScore.score > bestScore && bestMatchType !== 'prefix') {
      bestScore = partialScore.score;
      bestMatchType = 'partial';
      matchedWords = partialScore.matches;
    }
    
    // 4. FUZZY MATCHING - Medium Priority (only for longer terms)
    if (normalizedSearchTerm.length >= 3) {
      const fuzzyScore = checkFuzzyMatching(titleWords, descWords, normalizedSearchTerm);
      if (fuzzyScore.score > bestScore && bestMatchType === 'partial') {
        bestScore = fuzzyScore.score;
        bestMatchType = 'fuzzy';
        matchedWords = fuzzyScore.matches;
      }
    }
    
    if (bestScore > 0) {
      results.push({
        tool,
        score: bestScore,
        matchType: bestMatchType,
        matchedWords
      });
    }
  }
  
  return results.sort((a, b) => {
    // Sort by match type priority first
    const typePriority = { 'predictive': 4, 'prefix': 3, 'partial': 2, 'fuzzy': 1 };
    const aPriority = typePriority[a.matchType];
    const bPriority = typePriority[b.matchType];
    
    if (aPriority !== bPriority) {
      return bPriority - aPriority;
    }
    
    // Then by score
    return b.score - a.score;
  });
};

// Check predictive matching based on our mappings
const checkPredictiveMatch = (tool: Tool, prediction: string, searchTerm: string): number => {
  const titleLower = tool.title.toLowerCase();
  const descLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  let score = 0;
  
  // Exact prediction match in title gets highest score
  if (titleLower.includes(prediction)) {
    score += 15000;
    
    // Bonus if the prediction starts a word in the title
    const titleWords = titleLower.split(/[\s\-_]+/);
    if (titleWords.some(word => word.startsWith(prediction))) {
      score += 5000;
    }
  }
  
  // Prediction match in description
  if (descLower.includes(prediction)) {
    score += 8000;
  }
  
  // Prediction match in category
  if (categoryLower.includes(prediction)) {
    score += 6000;
  }
  
  // Bonus for exact word boundaries
  const predictionRegex = new RegExp(`\\b${prediction}`, 'i');
  if (predictionRegex.test(titleLower)) {
    score += 3000;
  }
  
  return score;
};

// Check prefix matching (word starts with search term)
const checkPrefixMatching = (
  titleWords: string[], 
  descWords: string[], 
  categoryWords: string[], 
  tagWords: string[],
  searchTerm: string
): { score: number; matches: string[] } => {
  let score = 0;
  const matches: string[] = [];
  
  // Title word prefix matching - highest priority
  for (const word of titleWords) {
    if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
      score += 12000;
      matches.push(word);
    }
  }
  
  // Category word prefix matching
  for (const word of categoryWords) {
    if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
      score += 8000;
      matches.push(word);
    }
  }
  
  // Description word prefix matching
  for (const word of descWords) {
    if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
      score += 5000;
      matches.push(word);
    }
  }
  
  // Tag word prefix matching
  for (const word of tagWords) {
    if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
      score += 3000;
      matches.push(word);
    }
  }
  
  return { score, matches: [...new Set(matches)] };
};

// Check partial word matching (word contains search term)
const checkPartialMatching = (
  titleWords: string[], 
  descWords: string[], 
  categoryWords: string[], 
  tagWords: string[],
  searchTerm: string
): { score: number; matches: string[] } => {
  let score = 0;
  const matches: string[] = [];
  
  // Only do partial matching for terms of 2+ characters
  if (searchTerm.length < 2) return { score: 0, matches: [] };
  
  // Title word partial matching
  for (const word of titleWords) {
    if (word.includes(searchTerm) && word !== searchTerm) {
      score += 7000;
      matches.push(word);
    }
  }
  
  // Category word partial matching
  for (const word of categoryWords) {
    if (word.includes(searchTerm) && word !== searchTerm) {
      score += 4000;
      matches.push(word);
    }
  }
  
  // Description word partial matching
  for (const word of descWords) {
    if (word.includes(searchTerm) && word !== searchTerm) {
      score += 2000;
      matches.push(word);
    }
  }
  
  return { score, matches: [...new Set(matches)] };
};

// Check fuzzy matching for typos and similar words
const checkFuzzyMatching = (
  titleWords: string[], 
  descWords: string[], 
  searchTerm: string
): { score: number; matches: string[] } => {
  let score = 0;
  const matches: string[] = [];
  
  // Calculate fuzzy similarity
  const calculateFuzzySimilarity = (word1: string, word2: string): number => {
    if (word1 === word2) return 1;
    if (Math.abs(word1.length - word2.length) > 3) return 0;
    
    const longer = word1.length > word2.length ? word1 : word2;
    const shorter = word1.length > word2.length ? word2 : word1;
    
    let editDistance = 0;
    for (let i = 0; i < longer.length; i++) {
      if (i >= shorter.length || longer[i] !== shorter[i]) {
        editDistance++;
      }
    }
    
    return (longer.length - editDistance) / longer.length;
  };
  
  // Title fuzzy matching
  for (const word of titleWords) {
    if (word.length >= 3) {
      const similarity = calculateFuzzySimilarity(word, searchTerm);
      if (similarity >= 0.7) {
        score += similarity * 6000;
        matches.push(word);
      }
    }
  }
  
  // Description fuzzy matching (lower threshold)
  for (const word of descWords) {
    if (word.length >= 4) {
      const similarity = calculateFuzzySimilarity(word, searchTerm);
      if (similarity >= 0.8) {
        score += similarity * 2000;
        matches.push(word);
      }
    }
  }
  
  return { score, matches: [...new Set(matches)] };
};