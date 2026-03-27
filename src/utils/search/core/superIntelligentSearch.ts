import { Tool } from "@/types/tools";
import { TYPO_DICTIONARY } from "../typoDictionary";
import { calculatePeopleSearchScore } from "../matching/peopleSearchMatching";

// Super intelligent partial matching patterns - MASSIVELY EXPANDED
const PARTIAL_PATTERNS: Record<string, string[]> = {
  // Spirituality & Religion - COMPREHENSIVE
  "spir": ["spiritual", "spirituality", "spirit"],
  "spirit": ["spiritual", "spirituality", "spirit guide"],
  "spiritual": ["spirituality", "spiritual guidance", "spiritual teacher"],
  "spirituality": ["spiritual", "religion", "faith", "divine"],
  "relig": ["religion", "religious"],
  "religion": ["religious", "spirituality", "faith", "divine"],
  "religious": ["religion", "spirituality", "faith"],
  "saint": ["saints", "saint francis", "saint teresa", "saint augustine"],
  "saints": ["saint", "catholic saints", "christian saints"],
  "prophet": ["prophets", "spiritual teacher"],
  "prophets": ["prophet", "religious leaders"],
  "chr": ["christian", "christ"],
  "christ": ["christian", "christianity", "jesus"],
  "christian": ["christianity", "christ", "jesus"],
  "christianity": ["christian", "christ", "religion"],
  "buddh": ["buddha", "buddhism"],
  "buddha": ["buddhism", "meditation", "enlightenment"],
  "buddhism": ["buddha", "zen", "meditation"],
  "jew": ["jewish", "judaism"],
  "jewish": ["judaism", "torah", "kabbalah"],
  "judaism": ["jewish", "torah", "hebrew"],
  "musl": ["muslim", "islam"],
  "muslim": ["islam", "islamic"],
  "islam": ["muslim", "islamic", "quran"],
  "meditat": ["meditation", "mindfulness"],
  "meditation": ["mindfulness", "spiritual practice"],
  "yog": ["yoga", "meditation"],
  "yoga": ["meditation", "spirituality"],
  "myst": ["mystical", "mysticism"],
  "mystical": ["mysticism", "esoteric"],
  "mysticism": ["mystical", "esoteric"],
  
  "co": ["college", "course", "coding", "content", "creative", "company", "commercial"],
  "col": ["college", "coloring", "collectible", "collaboration"],
  "coll": ["college", "collectible", "collaboration"],
  "colleg": ["college degree"],
  "college": ["college degree gpt"],
  
  "tim": ["time", "time machine", "time travel"],
  "time": ["time machine gpt", "time travel"],
  
  "wr": ["writer", "writing", "write"],
  "wri": ["writer", "writing"],
  "writ": ["writer", "writing"],
  "write": ["writer", "book writer", "script writer"],
  "writer": ["book writer gpt", "script writer gpt"],
  
  "bo": ["book", "bot", "body"],
  "boo": ["book", "book writer"],
  "book": ["book writer gpt"],
  
  "vid": ["video", "vibe"],
  "vide": ["video"],
  "video": ["video maker", "video editor", "video generator"],
  
  "mus": ["music", "mushroom"],
  "musi": ["music"],
  "music": ["music video maker", "music generator"],
  
  "gam": ["game"],
  "ga": ["game"],
  "game": ["game design", "video game", "game generator"],
  
  "ai": ["artificial intelligence", "ai tools", "ai agent"],
  "art": ["artificial", "art", "artist"],
  "arti": ["artificial", "artist"],
  
  "bus": ["business"],
  "busi": ["business"],
  "busin": ["business", "business plan"],
  "business": ["business plan", "business tools", "business strategy"],
  
  "heal": ["health", "healthcare"],
  "hea": ["health", "healthcare"],
  "health": ["healthcare", "health tools", "wellness", "medical"],
  
  "med": ["medical", "medicine"],
  "medi": ["medical", "medicine"],
  "medical": ["medical tools", "medical gpt"],
  
  "doc": ["doctor"],
  "doct": ["doctor"],
  "doctor": ["doctor gpt", "ai doctor"],
  
  "leg": ["legal"],
  "lega": ["legal"],
  "legal": ["legal tools", "legal gpt", "law", "lawyer"],
  
  "ed": ["education", "editor"],
  "edu": ["education"],
  "educ": ["education", "educational"],
  "education": ["education tools", "educational", "learning", "teaching"],
  
  "cr": ["creative", "crypto"],
  "cre": ["creative"],
  "creat": ["creative", "creation"],
  "creative": ["creative tools", "creative design", "creativity", "art"],
  
  "des": ["design", "designer"],
  "desi": ["design", "designer"],
  "design": ["graphic design", "web design", "designer"],
  
  "fin": ["finance", "financial", "finder"],
  "fina": ["finance", "financial"],
  "financ": ["finance", "financial"],
  "finance": ["financial tools", "finance gpt", "money", "trading"],
  
  "tra": ["trading", "travel", "training"],
  "trad": ["trading"],
  "trading": ["trading tools", "trader gpt"],
  
  "web": ["website", "web development", "web design"],
  "webs": ["website"],
  "website": ["website gpt", "website builder", "web development"],
  
  "perp": ["perplexity"],
  "perpl": ["perplexity"],
  "perplex": ["perplexity"],
  "perplexity": ["perplexity comet"],
  
  "com": ["comet", "company", "commerce"],
  "come": ["comet"],
  "comet": ["perplexity comet"],
  
  // Person/People search patterns
  "per": ["person", "personal", "perplexity"],
  "pers": ["person", "personal"],
  "perso": ["person", "personal"],
  "person": ["person information finder", "person finder", "personal"],
  "people": ["people search", "person finder", "people finder"],
  "find": ["finder"],
  "finder": ["person finder", "information finder"],
  "info": ["information", "information finder"],
  "inform": ["information", "information finder"],
  "information": ["person information finder", "information finder"],
  
  // Additional category/tool patterns for comprehensive search
  "cat": ["category", "cannabis"],
  "categ": ["category"],
  "category": ["categories", "all categories"],
  "tech": ["technology", "technical"],
  "technology": ["tech tools", "innovation"],
  "market": ["marketing", "market"],
  "marketing": ["market", "sales", "promotion"],
  "content": ["content creation", "content tools"],
  "data": ["data analysis", "analytics", "database"],
  "image": ["image generation", "graphics"],
  "writing": ["writer", "write"],
  "develop": ["development", "developer"],
  "automation": ["automate", "automatic"],
  "communication": ["chat", "messaging"],
  "productivity": ["productive", "efficiency"],
  
  // Crisis & Geopolitical
  "hor": ["hormuz", "hormuz crisis"],
  "horm": ["hormuz", "hormuz crisis"],
  "hormu": ["hormuz", "hormuz crisis"],
  "hormuz": ["hormuz crisis", "oil crisis", "strait of hormuz"],
  "strait": ["strait of hormuz", "hormuz"],
  "oil": ["oil crisis", "petroleum", "energy", "hormuz"],
  "crisis": ["oil crisis", "hormuz crisis", "crisis prediction", "crisis management"],
  "ormuz": ["hormuz", "hormuz crisis"]
};

// Advanced fuzzy matching with Levenshtein distance
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // insertion
        matrix[j - 1][i] + 1, // deletion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
}

// Super intelligent typo correction with context awareness
export function superSmartTypoCorrection(searchTerm: string): string {
  const lower = searchTerm.toLowerCase().trim();
  
  // Direct typo dictionary lookup
  if (TYPO_DICTIONARY[lower]) {
    return TYPO_DICTIONARY[lower];
  }
  
  // Check for partial matches that should expand
  const words = lower.split(/\s+/);
  const correctedWords = words.map(word => {
    if (TYPO_DICTIONARY[word]) {
      return TYPO_DICTIONARY[word];
    }
    
    // Find closest match in dictionary with Levenshtein distance
    let closestMatch = word;
    let minDistance = 2; // Only consider corrections within 2 character differences
    
    for (const [typo, correction] of Object.entries(TYPO_DICTIONARY)) {
      const distance = levenshteinDistance(word, typo);
      if (distance < minDistance && distance > 0) {
        minDistance = distance;
        closestMatch = correction;
      }
    }
    
    return closestMatch;
  });
  
  return correctedWords.join(' ');
}

// Intelligent partial matching with predictive suggestions
export function getPartialMatchSuggestions(searchTerm: string): string[] {
  const lower = searchTerm.toLowerCase().trim();
  const suggestions: string[] = [];
  
  // Direct pattern matches
  if (PARTIAL_PATTERNS[lower]) {
    suggestions.push(...PARTIAL_PATTERNS[lower]);
  }
  
  // Prefix matching
  for (const [pattern, matches] of Object.entries(PARTIAL_PATTERNS)) {
    if (pattern.startsWith(lower) && pattern !== lower) {
      suggestions.push(...matches);
    }
  }
  
  // Substring matching for longer terms
  if (lower.length >= 3) {
    for (const [pattern, matches] of Object.entries(PARTIAL_PATTERNS)) {
      if (pattern.includes(lower) && pattern !== lower) {
        suggestions.push(...matches);
      }
    }
  }
  
  return [...new Set(suggestions)]; // Remove duplicates
}

// Advanced scoring for partial matches
export function scorePartialMatch(tool: Tool, searchTerm: string, suggestions: string[]): number {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  let score = 0;
  
  // Direct partial matching bonus
  if (lowerTitle.startsWith(lowerSearchTerm)) {
    score += 8000;
  }
  
  // Suggestion matching
  for (const suggestion of suggestions) {
    const lowerSuggestion = suggestion.toLowerCase();
    
    if (lowerTitle.includes(lowerSuggestion)) {
      score += 6000;
    }
    
    if (lowerDescription.includes(lowerSuggestion)) {
      score += 3000;
    }
    
    // Tag matching
    if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSuggestion))) {
      score += 2000;
    }
  }
  
  // Length-based scoring (shorter partial matches get higher scores)
  const lengthRatio = lowerSearchTerm.length / lowerTitle.length;
  if (lengthRatio > 0.3 && lengthRatio < 0.8) {
    score += 4000;
  }
  
  return score;
}

// Enhanced context-aware matching
export function matchWithContext(tool: Tool, searchTerm: string): boolean {
  const correctedTerm = superSmartTypoCorrection(searchTerm);
  const suggestions = getPartialMatchSuggestions(searchTerm);
  
  const searchableText = [
    tool.title,
    tool.description,
    tool.category || '',
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  // Check corrected term
  if (searchableText.includes(correctedTerm.toLowerCase())) {
    return true;
  }
  
  // Check suggestions
  return suggestions.some(suggestion => 
    searchableText.includes(suggestion.toLowerCase())
  );
}

// Super intelligent search scoring
export function superIntelligentScore(tool: Tool, searchTerm: string): number {
  const correctedTerm = superSmartTypoCorrection(searchTerm);
  const suggestions = getPartialMatchSuggestions(searchTerm);
  
  let score = 0;
  
  // Enhanced exact and near-exact matching
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  // Normalize for better matching (handle spaces in numbers/words)
  const normalizedTitle = lowerTitle.replace(/\s+/g, ' ').trim();
  const normalizedSearch = lowerSearchTerm.replace(/\s+/g, ' ').trim();
  const titleNoSpaces = normalizedTitle.replace(/\s+/g, '');
  const searchNoSpaces = normalizedSearch.replace(/\s+/g, '');
  
  // Extract words from search query
  const searchWords = normalizedSearch.split(/\s+/).filter(w => w.length > 1);
  const titleWords = normalizedTitle.split(/\s+/);
  
  // PERFECT exact match
  if (normalizedTitle === normalizedSearch) {
    score += 100000;
  }
  
  // Check if all search words appear in title in order (VEO 3 Prompt -> VEO3 TEXT TO VIDEO PROMPT)
  let allWordsInOrder = true;
  let lastIndex = -1;
  for (const word of searchWords) {
    const index = normalizedTitle.indexOf(word, lastIndex + 1);
    if (index === -1) {
      allWordsInOrder = false;
      break;
    }
    lastIndex = index;
  }
  if (allWordsInOrder && searchWords.length >= 2) {
    score += 90000; // Very high for ordered word matches like "VEO 3 Prompt"
  }
  
  // Number/spacing variation handling (VEO3 vs VEO 3)
  if (titleNoSpaces.includes(searchNoSpaces) && searchNoSpaces.length > 3) {
    score += 80000;
  }
  
  // All search words match title words exactly
  const matchedWords = searchWords.filter(sw => 
    titleWords.some(tw => tw === sw || tw.startsWith(sw))
  );
  if (matchedWords.length === searchWords.length && searchWords.length >= 2) {
    score += 75000;
  }
  
  // Base partial match scoring
  score += scorePartialMatch(tool, searchTerm, suggestions);
  
  // People search matching
  score += calculatePeopleSearchScore(tool, searchTerm);
  
  // Typo correction bonus
  if (correctedTerm !== searchTerm.toLowerCase()) {
    if (lowerTitle.includes(correctedTerm)) {
      score += 7000;
    }
    
    if (lowerDescription.includes(correctedTerm)) {
      score += 4000;
    }
  }
  
  // AI Web Tools priority boost
  if (tool.directUrl?.includes('aiwebtools') || tool.tags?.includes('aiwebtools')) {
    score += 1000;
  }
  
  return score;
}