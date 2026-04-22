import { keywordMapping, searchSynonyms, categoryKeywords } from "@/data/keywords";
import { phoneticMatch } from "./core/fuzzyMatching";
import { getSemanticExpansions } from "@/data/keywords/semanticKeywords";
import { searchDebugLog } from "@/utils/debug/searchDebug";
import {
  PRESERVED_TIME_KEYWORDS,
  PRESERVED_EMERGENCY_KEYWORDS,
  PRESERVED_MONEY_KEYWORDS,
  PRESERVED_VALUE_KEYWORDS,
  TIME_TRAVEL_PRIORITY_TOOLS,
  EMERGENCY_PRIORITY_TOOLS,
  MONEY_PRIORITY_TOOLS,
  VALUE_PRIORITY_TOOLS,
} from "@/data/keywords/preservedKeywords";

// MASSIVELY expanded typo correction mapping for better intelligence
const typoCorrection: Record<string, string> = {
  "sciece": "science",
  "sciene": "science",
  "sience": "science",
  "scince": "science",
  
  "colege": "college",
  "collge": "college",
  "collega": "college",
  "colledge": "college",
  "coledge": "college",
  "collage": "college",
  "colleg": "college",
  "colegge": "college",
  
  // NEW: Emergency misspellings
  "emergancy": "emergency",
  "emergenci": "emergency",
  "emergeny": "emergency",
  "emergenc": "emergency",
  "emrgency": "emergency",
  "emergnecy": "emergency",
  "emergecny": "emergency",
  "fir fighter": "firefighter",
  "fire figther": "firefighter",
  "firefigher": "firefighter",
  "fire-fighter": "firefighter",
  "docter": "doctor",
  "survivial": "survival",
  "survial": "survival",
  "survivle": "survival",
  "mentl health": "mental health",
  "mental helth": "mental health",
  "mentl wellness": "mental wellness",
  "first responder": "first responder",
  "first respondr": "first responder",
  "first-responder": "first responder",
  "emrgency response": "emergency response",
  "crisis managment": "crisis management",
  "crisis managemnt": "crisis management",
  
  // Game-related misspellings
  "gaem": "game",
  "gam": "game",
  "gamin": "gaming",
  "gameing": "gaming",
  "vid game": "video game",
  "videogam": "video game",
  "video gam": "video game",
  "game creat": "game creation",
  "game mak": "game maker",
  "game buil": "game builder",
  "game gen": "game generator",
  "game desing": "game design",
  "game developement": "game development",
  "game devlopment": "game development",
  "unity3d": "unity",
  "unreal engin": "unreal engine",
  "metavers": "metaverse",
  "vr gam": "vr game",
  "virual reality": "virtual reality",
  "interactiv": "interactive",
  "immersiv": "immersive",
  "3d gam": "3d game",
  "three d game": "3d game",
  "txt to game": "text to game",
  "prompt to gam": "prompt to game",
  "sele": "seele",
  "seele ai": "seele",
  
  // Time travel specific misspellings
  "tim travel": "time travel",
  "time travle": "time travel",
  "time trevel": "time travel",
  "tim machine": "time machine",
  "time machien": "time machine",
  "bak to the future": "back to the future",
  "back too the future": "back to the future",
  "bak to future": "back to the future",
  "back to future": "back to the future",
  "travle in time": "travel in time",
  "travel inn time": "travel in time",
  "histroy": "history",
  "histoyr": "history",
  "hsitory": "history",
  "hostory": "history",

  // NEW: Web Development specific misspellings
  "webdev": "web development",
  "web-dev": "web development",
  "webdevelopment": "web development",
  "web-development": "web development",
  "webiste": "website",
  "websit": "website",
  "webstie": "website",
  "webite": "website",
  "frontent": "frontend",
  "frontned": "frontend",
  "front-end": "frontend",
  "bakend": "backend",
  "back-end": "backend",
  "fullstac": "fullstack",
  "full-stack": "fullstack",
  "aplplication": "application",
  "aplicaton": "application",
  "aplication": "application",
  "respnsive": "responsive",
  "responive": "responsive",
  "responsiv": "responsive",
  
  // App creation misspellings
  "mak an app": "make an app",
  "creat an app": "create an app",
  "bild an app": "build an app",
  "devlop an app": "develop an app",
  "buld app": "build app",
  "mke app": "make app",
  "creat app": "create app",
  
  // Book writing misspellings
  "writ a book": "write a book",
  "wriet a book": "write a book",
  "write boook": "write book",
  "wriet book": "write book",
  "book writting": "book writing",
  "book writng": "book writing",
  
  // Robotics misspellings
  "robbot": "robot",
  "robotic": "robotics",
  "robotik": "robotics",
  "robootics": "robotics",
  "humaniod": "humanoid",
  "humanod": "humanoid",
  "figur 01": "figure 01",
  "figur01": "figure 01",
  "tesla bot": "tesla optimus",
  "teslabot": "tesla optimus",
  "optmus": "optimus",
  "opimus": "optimus",
  "unitre": "unitree",
  "unitri": "unitree",
  "bston dynamics": "boston dynamics",
  "boston dinamic": "boston dynamics",
  
  // Cannabis/smoking related
  "smok": "smoke",
  "smoek": "smoke",
  "smoke wed": "smoke weed",
  "smke weed": "smoke weed",
  "smoek weed": "smoke weed",

  "writting": "writing",
  "writeing": "writing",
  "buisness": "business",
  "bussiness": "business",
  "helath": "health",
  "travle": "travel",
  "musik": "music",
  "desing": "design",
  "resarch": "research",
  "politcal": "political",
  "testimny": "testimony",
  "finacial": "financial",
  "learing": "learning",
  "educaton": "education",
  "scool": "school",
  "clas": "class",
  "homwork": "homework",
  "leson": "lesson",
  "tuor": "tutor",
  "analaytics": "analytics",
  "programing": "programming",
  "goverment": "government",
  "acitivism": "activism",
  "canabis": "cannabis",
  "cannibis": "cannabis",
  "mony": "money",
  "tradeing": "trading",
  "invesment": "investment",
  "soud": "sound",
  "efect": "effect",
  "elevan": "eleven"
};

// Function to calculate Levenshtein distance for fuzzy matching
const levenshteinDistance = (str1: string, str2: string): number => {
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

// Function to find fuzzy matches for a term
const findFuzzyMatches = (searchTerm: string, candidates: string[], maxDistance = 2): string[] => {
  const matches: string[] = [];
  
  for (const candidate of candidates) {
    const distance = levenshteinDistance(searchTerm.toLowerCase(), candidate.toLowerCase());
    if (distance <= maxDistance && candidate.length >= 4) {
      matches.push(candidate);
    }
  }
  
  return matches;
};

// Common tool keywords for fuzzy matching
const commonToolKeywords = [
  'college', 'university', 'education', 'learning', 'training', 'course',
  'writing', 'content', 'article', 'blog', 'script', 'book',
  'business', 'marketing', 'sales', 'finance', 'management',
  'design', 'graphic', 'creative', 'art', 'visual', 'image',
  'video', 'movie', 'film', 'animation', 'cinema',
  'music', 'audio', 'sound', 'voice', 'podcast',
  'health', 'medical', 'doctor', 'wellness', 'fitness',
  'science', 'research', 'analysis', 'data', 'analytics',
  'development', 'coding', 'programming', 'software',
  'artificial', 'intelligence', 'machine', 'learning',
  'automation', 'productivity', 'workflow', 'efficiency',
  'communication', 'collaboration', 'social', 'network',
  'security', 'privacy', 'protection', 'safety',
  'travel', 'adventure', 'exploration', 'discovery',
  'gaming', 'entertainment', 'fun', 'recreation',
  'legal', 'law', 'attorney', 'lawyer', 'contract',
  'real estate', 'property', 'housing', 'construction',
  'cannabis', 'hemp', 'marijuana', 'cbd', 'thc',
  'history', 'historical', 'time', 'past', 'ancient',
  'imagine', 'imagination', 'creative', 'fantasy', 'dream'
];

export const getExpandedKeywords = (searchTerm: string): string[] => {
  let lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // Apply phonetic matching first
  const phoneticMatches = phoneticMatch(lowerSearchTerm);
  
  // Apply direct typo correction
  if (typoCorrection[lowerSearchTerm]) {
    searchDebugLog(`🔄 Typo correction: "${lowerSearchTerm}" -> "${typoCorrection[lowerSearchTerm]}"`);
    lowerSearchTerm = typoCorrection[lowerSearchTerm];
  }

  const expandedKeywords = new Set<string>();

  // Add the original search term, corrected term, and phonetic matches
  expandedKeywords.add(searchTerm.toLowerCase().trim());
  expandedKeywords.add(lowerSearchTerm);
  phoneticMatches.forEach(match => expandedKeywords.add(match));

  // 🧠 SEMANTIC EXPANSION - Handle abstract concepts like "death", "sadness", etc.
  const semanticExpansions = getSemanticExpansions(lowerSearchTerm);
  if (semanticExpansions.length > 0) {
    searchDebugLog(`🧠 SEMANTIC EXPANSION for "${lowerSearchTerm}":`, semanticExpansions.slice(0, 8));
    semanticExpansions.forEach(keyword => expandedKeywords.add(keyword));
  }

  // DEEPFAKE AND VOICE CLONING SEARCH EXPANSION - HIGH PRIORITY
  const isDeepfakeOrClone = 
    lowerSearchTerm.includes('deep fake') || 
    lowerSearchTerm.includes('deepfake') ||
    lowerSearchTerm.includes('deep-fake') ||
    lowerSearchTerm.includes('clone') ||
    lowerSearchTerm.includes('cloning') ||
    lowerSearchTerm.includes('voice clone') ||
    lowerSearchTerm.includes('voice cloning') ||
    lowerSearchTerm.includes('voice synthesis') ||
    lowerSearchTerm.includes('voice generation') ||
    lowerSearchTerm.includes('voice mimicry') ||
    lowerSearchTerm.includes('voice replica') ||
    lowerSearchTerm.includes('voice copy') ||
    lowerSearchTerm.includes('fake voice') ||
    lowerSearchTerm.includes('ai voice') ||
    lowerSearchTerm.includes('voice ai') ||
    lowerSearchTerm.includes('speech synthesis') ||
    lowerSearchTerm.includes('speech generation') ||
    lowerSearchTerm.includes('text to speech') ||
    lowerSearchTerm.includes('tts') ||
    lowerSearchTerm.includes('avatar') ||
    lowerSearchTerm.includes('digital avatar') ||
    lowerSearchTerm.includes('ai avatar') ||
    lowerSearchTerm.includes('digital person') ||
    lowerSearchTerm.includes('virtual person') ||
    lowerSearchTerm.includes('talking head') ||
    lowerSearchTerm.includes('face swap') ||
    lowerSearchTerm.includes('face generation') ||
    lowerSearchTerm.includes('persona') ||
    lowerSearchTerm.includes('digital twin') ||
    lowerSearchTerm.includes('virtual identity') ||
    lowerSearchTerm === 'clone' ||
    lowerSearchTerm === 'deepfake' ||
    lowerSearchTerm === 'fake you' ||
    lowerSearchTerm === 'heygen' ||
    lowerSearchTerm === 'hey gen' ||
    lowerSearchTerm === '11 labs' ||
    lowerSearchTerm === 'eleven labs' ||
    lowerSearchTerm === 'elevenlabs' ||
    lowerSearchTerm === 'creatify';

  if (isDeepfakeOrClone) {
    console.log(`🎭 DEEPFAKE/CLONE SEARCH DETECTED for: "${searchTerm}"`);
    
    // Add specific tools and keywords for deepfake/clone searches
    const deepfakeKeywords = [
      'heygen',
      'hey gen',
      'eleven labs',
      '11 labs',
      'elevenlabs',
      'fake you',
      'fakeyou',
      'creatify',
      'synthesia',
      'runway',
      'runway ml',
      'deepfake',
      'deep fake',
      'voice clone',
      'voice cloning',
      'voice synthesis',
      'voice generation',
      'voice mimicry',
      'ai voice',
      'voice ai',
      'speech synthesis',
      'text to speech',
      'tts',
      'avatar generation',
      'digital avatar',
      'ai avatar',
      'talking avatar',
      'video avatar',
      'persona creation',
      'digital person',
      'virtual person',
      'face swap',
      'face generation',
      'digital twin',
      'voice replica',
      'speech generation',
      'ai speech',
      'synthetic voice',
      'artificial voice',
      'clone voice',
      'mimic voice',
      'replicate voice',
      'duplicate voice',
      'copy voice',
      'voice duplication',
      'voice replication',
      'talking head',
      'lip sync',
      'lipsync',
      'video synthesis',
      'personalized video',
      'custom avatar',
      'virtual presenter',
      'ai presenter',
      'digital spokesperson',
      'voice over',
      'voiceover',
      'narration',
      'ai narration',
      'synthetic speech',
      'artificial speech',
      'generated voice',
      'created voice',
      'made voice',
      'fake voice',
      'false voice',
      'imitation voice',
      'simulated voice',
      'virtual voice',
      'computer voice',
      'robot voice',
      'machine voice',
      'automated voice',
      'celebrity voice',
      'famous voice',
      'personality voice',
      'character voice',
      'actor voice',
      'actress voice'
    ];
    
    deepfakeKeywords.forEach(keyword => expandedKeywords.add(keyword));
    
    return Array.from(expandedKeywords);
  }
  
  // TIME TRAVEL SEARCH EXPANSION - ABSOLUTE HIGHEST PRIORITY
  // Enhanced detection for "back to the future" and all variations
  const isTimeTravel = 
    lowerSearchTerm.includes('time travel') || 
    lowerSearchTerm.includes('travel in time') ||
    lowerSearchTerm.includes('back to the future') || 
    lowerSearchTerm.includes('back to future') ||
    lowerSearchTerm.includes('bak to the future') ||
    lowerSearchTerm.includes('bak to future') ||
    lowerSearchTerm.includes('time machine') ||
    // Partial prefixes so autocomplete triggers as user types "time m", "time ma", etc.
    /\btime\s+m[a-z]*$/i.test(lowerSearchTerm) ||
    lowerSearchTerm === 'time travel' || 
    lowerSearchTerm === 'travel in time' ||
    lowerSearchTerm === 'back to the future' ||
    lowerSearchTerm === 'back to future' ||
    lowerSearchTerm.includes('tim travel') ||
    lowerSearchTerm.includes('time travle') ||
    lowerSearchTerm.includes('bak to the future') ||
    PRESERVED_TIME_KEYWORDS.some(keyword => lowerSearchTerm.includes(keyword));

  if (isTimeTravel) {
    console.log(`⏰ TIME TRAVEL SEARCH DETECTED for: "${searchTerm}"`);
    
    // Add all preserved time keywords
    PRESERVED_TIME_KEYWORDS.forEach(keyword => expandedKeywords.add(keyword));
    
    // Add all priority time travel tools
    TIME_TRAVEL_PRIORITY_TOOLS.forEach(tool => expandedKeywords.add(tool));
    
    // Add specific time-related keywords for better matching
    const timeKeywords = [
      'time machine gpt',
      'talk to history gpt',
      'historical headlines gpt',
      'titanic resurrections gpt',
      'uncovering hidden historical patterns gpt',
      'native american history time machine gpt',
      'historical apothecary gpt',
      'interpretis',
      'nikola tesla gpt',
      'albert einstein gpt',
      'indiana archeologist gpt',
      'alan watts gpt',
      'historical figures',
      'time travel',
      'history exploration',
      'historical conversations',
      'historical accuracy',
      'historical analysis',
      'historical research',
      'time periods',
      'ancient history',
      'modern history',
      'world history',
      'cultural history',
      'historical events',
      'historical documents',
      'historical artifacts',
      'archaeological',
      'heritage',
      'legacy',
      'chronicles',
      'annals',
      'archives',
      'timeline',
      'epoch',
      'dynasty',
      'empire',
      'time exploration',
      'temporal',
      'chronological',
      'past events',
      'future events',
      'historical simulation',
      'time periods exploration',
      'back to the future',
      'time traveler',
      'time portal',
      'temporal mechanics',
      'chronos',
      'time displacement'
    ];
    
    timeKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`⏰ TIME TRAVEL SEARCH DETECTED: Added ${timeKeywords.length} time travel keywords`);
  }

  // EMERGENCY SEARCH EXPANSION - ABSOLUTE HIGHEST PRIORITY
  if (PRESERVED_EMERGENCY_KEYWORDS.some(keyword => lowerSearchTerm.includes(keyword))) {
    PRESERVED_EMERGENCY_KEYWORDS.forEach(keyword => expandedKeywords.add(keyword));
    EMERGENCY_PRIORITY_TOOLS.forEach(tool => expandedKeywords.add(tool));
    
    const emergencyKeywords = [
      'firefighter gpt',
      'survivalist gpt',
      'personalized dr gpt',
      'doctor gpt',
      'mental wellness gpt',
      'veterinarian gpt',
      'criminologist gpt',
      'social safety net gpt',
      'firearms safety instructor gpt',
      'pharmaceutical assistant gpt',
      'emergency services',
      'emergency response',
      'first aid',
      'medical emergency',
      'fire safety',
      'survival skills',
      'crisis management',
      'emergency preparedness',
      'disaster response',
      'emergency care',
      'urgent care',
      'life safety',
      'emergency procedures',
      'rescue operations',
      'emergency planning',
      'safety protocols',
      'hazard response',
      'emergency medicine',
      'trauma care',
      'emergency evacuation',
      'emergency communications',
      'public safety',
      'emergency training',
      'first responder',
      'paramedic',
      'emt',
      'fire department',
      'police',
      'search and rescue',
      'emergency management',
      'disaster relief',
      'crisis intervention',
      'emergency shelter',
      'emergency supplies',
      'survival gear',
      'emergency kit'
    ];
    
    emergencyKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🚨 EMERGENCY SEARCH DETECTED: Added ${emergencyKeywords.length} emergency keywords`);
  }

  // MONEY SEARCH EXPANSION - ABSOLUTE HIGHEST PRIORITY
  if (PRESERVED_MONEY_KEYWORDS.some(keyword => lowerSearchTerm.includes(keyword))) {
    PRESERVED_MONEY_KEYWORDS.forEach(keyword => expandedKeywords.add(keyword));
    MONEY_PRIORITY_TOOLS.forEach(tool => expandedKeywords.add(tool));
    
    const moneyKeywords = [
      'trader gpt',
      'taxes gpt', 
      'material valuation gpt',
      'predictive credit score checker gpt',
      'insurance claims gpt',
      'business plan generator gpt',
      'startup validator gpt',
      'microsaas gpt',
      'property data finder gpt',
      'antique and collectible appraisal gpt',
      'artwork & vintage appraisal gpt',
      'financial',
      'finance',
      'money',
      'trading',
      'investment',
      'investing',
      'stock market',
      'cryptocurrency',
      'crypto',
      'bitcoin',
      'wealth management',
      'banking',
      'credit score',
      'credit',
      'loan',
      'mortgage',
      'insurance',
      'taxes',
      'tax planning',
      'budget',
      'budgeting',
      'savings',
      'retirement',
      'portfolio',
      'market analysis',
      'economic',
      'fiscal',
      'monetary',
      'currency',
      'exchange',
      'business plan',
      'startup',
      'entrepreneurship',
      'revenue',
      'profit',
      'income',
      'expenses',
      'accounting',
      'fintech',
      'financial planning'
    ];
    
    moneyKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`💰 MONEY/FINANCIAL SEARCH DETECTED: Added ${moneyKeywords.length} financial keywords`);
  }

  // VALUE/APPRAISAL SEARCH EXPANSION - ABSOLUTE HIGHEST PRIORITY
  if (PRESERVED_VALUE_KEYWORDS.some(keyword => lowerSearchTerm.includes(keyword))) {
    PRESERVED_VALUE_KEYWORDS.forEach(keyword => expandedKeywords.add(keyword));
    VALUE_PRIORITY_TOOLS.forEach(tool => expandedKeywords.add(tool));
    
    const valueKeywords = [
      'material valuation gpt',
      'antique and collectible appraisal gpt',
      'artwork & vintage appraisal gpt',
      'property data finder gpt',
      'predictive credit score checker gpt',
      'valuation',
      'appraisal',
      'assessment',
      'evaluation',
      'worth',
      'value estimation',
      'price assessment',
      'market value',
      'fair value',
      'asset valuation',
      'property valuation',
      'real estate appraisal',
      'collectibles appraisal',
      'antique valuation',
      'artwork appraisal',
      'vintage items',
      'precious metals',
      'gems',
      'jewelry appraisal',
      'coin valuation',
      'stamp appraisal',
      'art evaluation',
      'rare items',
      'collectibles',
      'memorabilia',
      'investment grade',
      'market price',
      'auction value',
      'retail value',
      'wholesale value',
      'insurance value',
      'replacement value'
    ];
    
    valueKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`💎 VALUE/APPRAISAL SEARCH DETECTED: Added ${valueKeywords.length} valuation keywords`);
  }

  // HISTORY SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('history') || lowerSearchTerm.includes('historical') ||
      lowerSearchTerm.includes('past') || lowerSearchTerm.includes('ancient') ||
      lowerSearchTerm.includes('time') || lowerSearchTerm.includes('era') ||
      lowerSearchTerm.includes('period') || lowerSearchTerm.includes('civilization')) {

    // Skip history expansion when query is clearly mobile-app related
    // (e.g., "mobile app" contains no history words, but guard for safety)
  }

  // MOBILE APP / APP BUILDER SEARCH EXPANSION - HIGHEST PRIORITY
  // Triggers for: "mobile", "mobile app", "mobile apps", "mobile app builder",
  // "ios app", "android app", "rork", "app builder", "no-code app"
  const isMobileAppQuery =
    /\bmobile\b/i.test(lowerSearchTerm) ||
    /\brork\b/i.test(lowerSearchTerm) ||
    /\bios\s+app/i.test(lowerSearchTerm) ||
    /\bandroid\s+app/i.test(lowerSearchTerm) ||
    /\bapp\s+build/i.test(lowerSearchTerm) ||
    /\bbuild\s+(an?\s+)?app\b/i.test(lowerSearchTerm) ||
    /\bno[- ]?code\s+app/i.test(lowerSearchTerm) ||
    /\bflutter\s*flow\b/i.test(lowerSearchTerm);

  if (isMobileAppQuery) {
    const mobileAppKeywords = [
      'rork mobile app coding agent',
      'rork mobile application vibe coding agent',
      'rork',
      'lovable',
      'lovable.dev',
      'bolt.new',
      'expo',
      'react native',
      'flutterflow',
      'thunkable',
      'adalo',
      'glide',
      'bubble',
      'softr',
      'draftbit',
      'appgyver',
      'buildfire',
      'mobile app',
      'mobile app builder',
      'mobile app development',
      'app builder',
      'no-code app builder',
      'vibe coding',
      'vibe coding agent',
      'ios',
      'android',
      'iphone',
      'ipad',
      'smartphone',
    ];
    mobileAppKeywords.forEach((k) => expandedKeywords.add(k));
    console.log(`📱 MOBILE APP SEARCH DETECTED: Added ${mobileAppKeywords.length} mobile app keywords`);
  }

  // HISTORY SEARCH EXPANSION - HIGHEST PRIORITY (re-entry point — original logic continues)
  if (
    !isMobileAppQuery &&
    (lowerSearchTerm.includes('history') || lowerSearchTerm.includes('historical') ||
      lowerSearchTerm.includes('past') || lowerSearchTerm.includes('ancient') ||
      (lowerSearchTerm.includes('time') && !/\bmobile\b/.test(lowerSearchTerm)) ||
      lowerSearchTerm.includes('era') ||
      lowerSearchTerm.includes('period') || lowerSearchTerm.includes('civilization'))
  ) {
    const historyKeywords = [
      'time machine gpt',
      'talk to history gpt',
      'historical headlines gpt',
      'titanic resurrections gpt',
      'uncovering hidden historical patterns gpt',
      'native american history time machine gpt',
      'historical apothecary gpt',
      'interpretis',
      'nikola tesla gpt',
      'albert einstein gpt',
      'indiana archeologist gpt',
      'alan watts gpt',
      'historical figures',
      'time travel',
      'history exploration',
      'historical conversations',
      'historical accuracy',
      'historical analysis',
      'historical research',
      'time periods',
      'ancient history',
      'modern history',
      'world history',
      'cultural history',
      'historical events',
      'historical documents',
      'historical artifacts',
      'archaeological',
      'heritage',
      'legacy',
      'chronicles',
      'annals',
      'archives',
      'timeline',
      'epoch',
      'dynasty',
      'empire'
    ];
    
    historyKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🏛️ HISTORY SEARCH DETECTED: Added ${historyKeywords.length} history keywords`);
  }

  // IMAGINATION SEARCH EXPANSION - HIGHEST PRIORITY  
  if (lowerSearchTerm.includes('imagine') || lowerSearchTerm.includes('imagination') ||
      lowerSearchTerm.includes('creative') || lowerSearchTerm.includes('fantasy') ||
      lowerSearchTerm.includes('dream') || lowerSearchTerm.includes('vision') ||
      lowerSearchTerm.includes('wonder') || lowerSearchTerm.includes('magical')) {
    const imaginationKeywords = [
      'imagination traveler gpt',
      'time machine gpt',
      'talk to history gpt',
      'stellaris',
      'space explorer',
      'oraculum',
      'dream interpreter gpt',
      'resurrection gpt',
      'talk to the gods gpt',
      'matrix gpt',
      'neo matrix gpt',
      'creative writing',
      'storytelling',
      'fantasy',
      'science fiction',
      'alternate reality',
      'imagination',
      'visionary',
      'creative exploration',
      'mind expansion',
      'consciousness',
      'metaphysical',
      'transcendent',
      'mystical',
      'esoteric',
      'philosophical',
      'spiritual journey',
      'inner exploration',
      'creative consciousness',
      'boundless imagination',
      'infinite possibilities'
    ];
    
    imaginationKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🌟 IMAGINATION SEARCH DETECTED: Added ${imaginationKeywords.length} imagination keywords`);
  }

  // APP CREATION SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('make an app') || lowerSearchTerm.includes('create an app') ||
      lowerSearchTerm.includes('build an app') || lowerSearchTerm.includes('develop an app') ||
      lowerSearchTerm.includes('make app') || lowerSearchTerm.includes('create app') ||
      lowerSearchTerm.includes('build app') || lowerSearchTerm.includes('app builder') ||
      (lowerSearchTerm.includes('make') && lowerSearchTerm.includes('app')) ||
      (lowerSearchTerm.includes('create') && lowerSearchTerm.includes('app')) ||
      (lowerSearchTerm.includes('build') && lowerSearchTerm.includes('app'))) {
    const appCreationKeywords = [
      'lovable.dev',
      'lovable',
      'bolt.new',
      'bolt',
      'vercel v0',
      'v0',
      'github copilot',
      'replit',
      'webflow',
      'framer',
      'builder.io',
      'builder',
      'netlify',
      'supabase',
      'railway',
      'cloudflare workers',
      'tabnine',
      'mutable ai',
      'sourcegraph',
      'deepcode',
      'code climate',
      'durable ai',
      'amazon codewhisperer',
      'engineering gpt ai suite',
      'web development',
      'app development',
      'web app builder',
      'app builder',
      'no code',
      'low code',
      'visual development',
      'rapid development',
      'web development tools',
      'app creation',
      'website builder',
      'application development',
      'software development',
      'development platform',
      'coding tools',
      'programming tools',
      'development environment'
    ];
    
    appCreationKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🚀 APP CREATION SEARCH DETECTED: Added ${appCreationKeywords.length} app creation keywords`);
  }

  // BOOK WRITING SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('write a book') || lowerSearchTerm.includes('write book') ||
      lowerSearchTerm.includes('book writing') || lowerSearchTerm.includes('book writer') ||
      lowerSearchTerm.includes('create a book') || lowerSearchTerm.includes('author') ||
      (lowerSearchTerm.includes('write') && lowerSearchTerm.includes('book')) ||
      (lowerSearchTerm.includes('create') && lowerSearchTerm.includes('book'))) {
    const bookWritingKeywords = [
      'book writer gpt',
      'book writing',
      'write a book',
      'book creation',
      'novel writing',
      'story writing',
      'creative writing',
      'author tools',
      'writing assistant',
      'content creation',
      'manuscript',
      'novel creation',
      'storytelling',
      'book publishing',
      'writing tools',
      'narrative writing',
      'fiction writing',
      'non-fiction writing',
      'autobiography',
      'memoir writing',
      'children book writer',
      'script writing',
      'screenplay',
      'writing platform',
      'author assistant',
      'book generator',
      'story generator',
      'writing software'
    ];
    
    bookWritingKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`📚 BOOK WRITING SEARCH DETECTED: Added ${bookWritingKeywords.length} book writing keywords`);
  }

  // ROBOTICS SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('robot') || lowerSearchTerm.includes('robotics') ||
      lowerSearchTerm.includes('humanoid') || lowerSearchTerm.includes('android') ||
      lowerSearchTerm.includes('figure 01') || lowerSearchTerm.includes('figure-01') ||
      lowerSearchTerm.includes('tesla optimus') || lowerSearchTerm.includes('optimus') ||
      lowerSearchTerm.includes('unitree') || lowerSearchTerm.includes('boston dynamics') ||
      lowerSearchTerm.includes('atlas robot') || lowerSearchTerm.includes('spot robot')) {
    const roboticsKeywords = [
      'unitree robotics',
      'unitree',
      'figure ai',
      'figure 01',
      'figure-01',
      'tesla bot',
      'tesla optimus',
      'optimus',
      'boston dynamics',
      'atlas robot',
      'spot robot',
      'agility robotics',
      'digit robot',
      'honda asimo',
      'asimo',
      'hanson robotics',
      'sophia robot',
      'softbank robotics',
      'pepper robot',
      'nao robot',
      'pal robotics',
      'talos robot',
      'ubtech robotics',
      'walker robot',
      '1x robotics',
      'neo robot',
      'eve robot',
      'clone robotics',
      'sanctuary ai',
      'phoenix robot',
      'engineered arts',
      'ameca robot',
      'apptronik',
      'apollo robot',
      'humanoid robot',
      'bipedal robot',
      'quadruped robot',
      'service robot',
      'commercial robot',
      'industrial robot',
      'personal robot',
      'ai robot',
      'robotic automation',
      'robotics company',
      'robot manufacturer',
      'advanced robotics',
      'robotics research',
      'robotic assistant',
      'home robot',
      'warehouse robot',
      'logistics robot'
    ];
    
    roboticsKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🤖 ROBOTICS SEARCH DETECTED: Added ${roboticsKeywords.length} robotics keywords`);
  }

  // WEB DEVELOPMENT SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('web') || lowerSearchTerm.includes('dev') ||
      lowerSearchTerm.includes('code') || lowerSearchTerm.includes('program') ||
      lowerSearchTerm.includes('app') || lowerSearchTerm.includes('site') ||
      lowerSearchTerm.includes('frontend') || lowerSearchTerm.includes('backend') ||
      lowerSearchTerm.includes('fullstack') || lowerSearchTerm.includes('javascript') ||
      lowerSearchTerm.includes('react') || lowerSearchTerm.includes('node') ||
      lowerSearchTerm.includes('html') || lowerSearchTerm.includes('css') ||
      lowerSearchTerm.includes('ui') || lowerSearchTerm.includes('ux') ||
      lowerSearchTerm.includes('api') || lowerSearchTerm.includes('database')) {
    const webDevKeywords = [
      'lovable.dev',
      'bolt.new',
      'vercel v0',
      'github copilot',
      'replit',
      'webflow',
      'framer',
      'builder.io',
      'netlify',
      'supabase',
      'railway',
      'cloudflare workers',
      'tabnine',
      'mutable ai',
      'sourcegraph',
      'deepcode',
      'code climate',
      'durable ai',
      'amazon codewhisperer',
      'engineering gpt ai suite',
      'web development',
      'web dev',
      'frontend',
      'backend',
      'fullstack',
      'javascript',
      'react',
      'vue',
      'angular',
      'node',
      'html',
      'css',
      'programming',
      'coding',
      'development',
      'developer',
      'code',
      'app',
      'application',
      'website',
      'web app',
      'mobile app',
      'ui design',
      'ux design',
      'responsive',
      'bootstrap',
      'tailwind',
      'api',
      'rest api',
      'graphql',
      'database',
      'sql',
      'mongodb',
      'deployment',
      'hosting',
      'server',
      'cloud',
      'aws',
      'azure',
      'framework',
      'library',
      'tool',
      'builder',
      'generator',
      'creator',
      'cms',
      'ecommerce',
      'blog',
      'portfolio',
      'landing page',
      'seo',
      'optimization',
      'performance',
      'analytics',
      'saas',
      'platform',
      'service'
    ];
    
    webDevKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`💻 WEB DEVELOPMENT SEARCH DETECTED: Added ${webDevKeywords.length} web dev keywords`);
  }

  // EDUCATION/COLLEGE SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('college') || lowerSearchTerm.includes('education') ||
      lowerSearchTerm.includes('learning') || lowerSearchTerm.includes('learn') ||
      lowerSearchTerm.includes('course') || lowerSearchTerm.includes('school') ||
      lowerSearchTerm.includes('study') || lowerSearchTerm.includes('skill') ||
      lowerSearchTerm.includes('training') || lowerSearchTerm.includes('tutorial')) {
    const educationKeywords = [
      'learn any course gpt',
      'learn any skill gpt',
      'college degree gpt',
      'course maker gpt',
      'course creator gpt',
      'quiz maker ai',
      'training manual generator gpt',
      'home-schooling assistant gpt',
      'homeschool gpt',
      'music melodies & lessons gpt',
      'education',
      'educational',
      'learning',
      'college',
      'university',
      'course',
      'courses',
      'skill',
      'skills',
      'training',
      'tutorial',
      'lesson',
      'lessons',
      'study',
      'academic',
      'school',
      'classroom',
      'homework',
      'assignment',
      'quiz',
      'test',
      'exam',
      'grade',
      'student',
      'teacher',
      'tutor',
      'instructor',
      'teaching',
      'instruction',
      'curriculum',
      'syllabus',
      'knowledge',
      'competency',
      'certification',
      'diploma',
      'degree',
      'homeschool',
      'home school',
      'online learning',
      'e-learning',
      'distance learning'
    ];
    
    educationKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🎓 EDUCATION SEARCH DETECTED: Added ${educationKeywords.length} education keywords`);
  }

  // CANNABIS/HEMP/SMOKING SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('cannabis') || lowerSearchTerm.includes('hemp') ||
      lowerSearchTerm.includes('cbd') || lowerSearchTerm.includes('thc') ||
      lowerSearchTerm.includes('marijuana') || lowerSearchTerm.includes('weed') ||
      lowerSearchTerm.includes('ganja') || lowerSearchTerm.includes('pot') ||
      lowerSearchTerm.includes('smoke') || lowerSearchTerm.includes('smoking') ||
      lowerSearchTerm === 'smoke weed' || lowerSearchTerm.includes('smoke weed')) {
    const cannabisKeywords = [
      'cannabis gpt',
      '🌿cannabis gpt',
      'cannabis',
      'hemp',
      'cbd',
      'thc',
      'marijuana',
      'weed',
      'ganja',
      'cannabis cultivation',
      'hemp gpt',
      'strain genetics',
      'cannabis growing',
      'cannabis medicine',
      'cannabis research',
      'cannabis legal',
      'cannabis industry',
      'cannabis science',
      'plant medicine',
      'herbal medicine',
      'botanical',
      'cultivation',
      'growing',
      'horticulture',
      'agriculture',
      'plant health',
      'organic farming',
      'medicinal plants',
      'wellness',
      'alternative medicine',
      'holistic health',
      'smoke',
      'smoking',
      'vaporize',
      'vaping',
      'edibles',
      'concentrates',
      'terpenes',
      'cannabinoids'
    ];
    
    cannabisKeywords.forEach(keyword => expandedKeywords.add(keyword));
    console.log(`🌿 CANNABIS/SMOKING SEARCH DETECTED: Added ${cannabisKeywords.length} cannabis keywords`);
  }
  
  // SOUND EFFECTS AND AUDIO SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('sound effect') || lowerSearchTerm.includes('sound effects') ||
      lowerSearchTerm.includes('fx') || lowerSearchTerm.includes('sfx') ||
      (lowerSearchTerm.includes('sound') && lowerSearchTerm.includes('effect')) ||
      lowerSearchTerm.includes('audio effect') || lowerSearchTerm.includes('audio effects')) {
    const soundEffectKeywords = [
      'eleven labs',
      'elevenlabs',
      'text to speech',
      'tts',
      'voice generation',
      'audio generation',
      'sound effects',
      'fx sounds',
      'audio fx',
      'voice synthesis',
      'speech synthesis',
      'ai voice',
      'voice ai',
      'audio ai',
      'sound generator',
      'voice generator',
      'audio tools',
      'voice tools',
      'sound design',
      'audio production',
      'voice over',
      'narration',
      'speech generation',
      'voice cloning',
      'ai audio',
      'synthetic voice',
      'artificial voice'
    ];
    
    soundEffectKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // Check direct keyword mappings
  if (keywordMapping[lowerSearchTerm]) {
    keywordMapping[lowerSearchTerm].forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // Check search synonyms
  Object.entries(searchSynonyms).forEach(([key, synonyms]) => {
    if (synonyms.some(synonym => lowerSearchTerm.includes(synonym))) {
      expandedKeywords.add(key);
      synonyms.forEach(synonym => expandedKeywords.add(synonym));
    }
  });
  
  // Check category keywords
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    if (keywords.some(keyword => lowerSearchTerm.includes(keyword))) {
      keywords.forEach(keyword => expandedKeywords.add(keyword));
    }
  });
  
  // Add semantic variations for better matching
  if (lowerSearchTerm.includes('generate') || lowerSearchTerm.includes('create') || lowerSearchTerm.includes('make')) {
    expandedKeywords.add('generation');
    expandedKeywords.add('creator');
    expandedKeywords.add('maker');
    expandedKeywords.add('generator');
  }
  
  // Convert back to array and remove empty strings
  const result = Array.from(expandedKeywords).filter(keyword => keyword.length > 0);
  return result;
};
