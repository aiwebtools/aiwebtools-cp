import { Tool } from "@/types/tools";
import { TYPO_DICTIONARY } from "../typoDictionary";

// Time travel specific matching
export const matchTimeTravel = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Time-related search detection
  if (lowerSearchTerm.includes('time') || 
      lowerSearchTerm.includes('history') || 
      lowerSearchTerm.includes('historical') ||
      lowerSearchTerm.includes('ancient') ||
      lowerSearchTerm.includes('past') ||
      lowerSearchTerm.includes('travel') ||
      lowerSearchTerm === 'time' ||
      lowerSearchTerm === 'history' ||
      lowerSearchTerm === 'ancient') {
    
    // Priority time travel tools
    const timeTools = [
      'time machine gpt',
      'native american history time machine gpt',
      'talk to history gpt',
      'historical headlines gpt',
      'titanic resurrections gpt',
      'uncovering hidden historical patterns gpt',
      'historical apothecary gpt',
      'interpretis',
      'nikola tesla gpt',
      'albert einstein gpt',
      'indiana archeologist gpt',
      'alan watts gpt',
      'mary magdalene gpt',
      'imagination traveler gpt'
    ];
    
    if (timeTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General time/history related matching
    if (lowerTitle.includes('time') || lowerDescription.includes('time') ||
        lowerTitle.includes('history') || lowerDescription.includes('history') ||
        lowerTitle.includes('historical') || lowerDescription.includes('historical') ||
        lowerTitle.includes('ancient') || lowerDescription.includes('ancient') ||
        lowerTitle.includes('past') || lowerDescription.includes('past') ||
        lowerTags.some(tag => tag.includes('time') || tag.includes('history') || 
                      tag.includes('historical') || tag.includes('ancient'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreTimeTravel = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('time') || 
      lowerSearchTerm.includes('history') || 
      lowerSearchTerm.includes('historical') ||
      lowerSearchTerm.includes('ancient') ||
      lowerSearchTerm === 'time' ||
      lowerSearchTerm === 'history' ||
      lowerSearchTerm === 'ancient') {
    
    // Top priority time travel tools
    const isShortTimeQuery = lowerSearchTerm === 'time' || lowerSearchTerm.startsWith('time ');
    if (lowerTitle === 'time machine gpt') {
      score += 9000; // Highest priority - exact original tool
      if (isShortTimeQuery) score += 4000; // Extra boost for short "time" queries
    }
    if (lowerTitle.includes('native american history time machine gpt')) {
      score += 4900; // Second highest
    }
    if (lowerTitle.includes('talk to history gpt')) {
      score += 4800; // Third highest
    }
    if (lowerTitle.includes('historical headlines gpt')) {
      score += 4700;
    }
    if (lowerTitle.includes('titanic resurrections gpt')) {
      score += 4600;
    }
    if (lowerTitle.includes('uncovering hidden historical patterns gpt')) {
      score += 4500;
    }
    if (lowerTitle.includes('historical apothecary gpt')) {
      score += 4400;
    }
    if (lowerTitle.includes('interpretis')) {
      score += 4300;
    }
    if (lowerTitle.includes('nikola tesla gpt')) {
      score += 4200;
    }
    if (lowerTitle.includes('albert einstein gpt')) {
      score += 4100;
    }
    if (lowerTitle.includes('indiana archeologist gpt')) {
      score += 4000;
    }
    if (lowerTitle.includes('alan watts gpt')) {
      score += 3900;
    }
    if (lowerTitle.includes('mary magdalene gpt')) {
      score += 3800;
    }
    if (lowerTitle.includes('imagination traveler gpt')) {
      score += 3700;
    }
    
    // Bonus scoring for time-related terms
    if (lowerTitle.includes('time')) {
      score += 2000;
    }
    if (lowerDescription.includes('time')) {
      score += 1500;
    }
    if (lowerTitle.includes('history') || lowerTitle.includes('historical')) {
      score += 1800;
    }
    if (lowerDescription.includes('history') || lowerDescription.includes('historical')) {
      score += 1200;
    }
    if (lowerTitle.includes('ancient')) {
      score += 1600;
    }
    if (lowerDescription.includes('ancient')) {
      score += 1000;
    }
    if (lowerTags.some(tag => tag.includes('time') || tag.includes('history'))) {
      score += 1400;
    }
  }
  
  return score;
};

// Creative writing specific matching
export const matchWriting = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Writing-related search detection
  if (lowerSearchTerm.includes('write') || 
      lowerSearchTerm.includes('writer') || 
      lowerSearchTerm.includes('writing') ||
      lowerSearchTerm.includes('book') ||
      lowerSearchTerm.includes('script') ||
      lowerSearchTerm.includes('content') ||
      lowerSearchTerm.includes('article') ||
      lowerSearchTerm.includes('blog') ||
      lowerSearchTerm === 'write' ||
      lowerSearchTerm === 'writer' ||
      lowerSearchTerm === 'writing') {
    
    // EXCLUDE gaming/entertainment tools from writing searches
    const excludedCategories = [
      'gaming', 'entertainment', 'game', 'video game', 'gaming & entertainment',
      'entertainment & gaming', 'entertainment tools', 'gaming tools'
    ];
    
    const excludedTitles = [
      'ai dungeon', 'dungeon', 'game', 'gaming', 'entertainment', 'trivia',
      'ai communication tool', 'communication tool', 'assistant & search'
    ];
    
    // Skip gaming/entertainment tools completely
    if (excludedCategories.some(cat => lowerCategory.includes(cat)) ||
        excludedTitles.some(title => lowerTitle.includes(title))) {
      return false;
    }
    
    // Priority writing tools - most relevant for general writing
    const writingTools = [
      'book writer gpt',
      'article and blog rewriter gpt',
      'movie script writer gpt',
      'children\'s picture book maker gpt',
      'podcast script writer gpt',
      'grant writer gpt',
      'legislation writer gpt', 
      'public testimony writer gpt',
      'creative writing',
      'content creation',
      'blog writer',
      'copywriter',
      'copy writer',
      'content writer',
      'technical writer'
    ];
    
    if (writingTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // For pure "writing" searches, prioritize general writing tools
    if (lowerSearchTerm === 'writing' || lowerSearchTerm === 'write' || lowerSearchTerm === 'writer') {
      // Exclude very specific/niche writing tools for general searches
      const tooSpecific = [
        'playwriter', 'playwright', 'dungeon master', 'game master'
      ];
      
      if (tooSpecific.some(specific => lowerTitle.includes(specific))) {
        return false;
      }
    }
    
    // Check if tool is actually writing-focused
    const writingIndicators = [
      'write', 'writer', 'writing', 'author', 'book', 'script', 'content',
      'article', 'blog', 'copy', 'manuscript', 'document', 'text'
    ];
    
    const hasWritingFocus = writingIndicators.some(indicator =>
      lowerTitle.includes(indicator) || lowerDescription.includes(indicator)
    );
    
    // Additional check for writing categories
    const writingCategories = [
      'writing', 'content creation', 'content', 'creative', 'professional'
    ];
    
    const isWritingCategory = writingCategories.some(cat => 
      lowerCategory.includes(cat)
    );
    
    return hasWritingFocus || isWritingCategory;
  }
  
  return false;
};

export const scoreWriting = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('write') || 
      lowerSearchTerm.includes('writer') || 
      lowerSearchTerm.includes('writing') ||
      lowerSearchTerm.includes('book') ||
      lowerSearchTerm.includes('script') ||
      lowerSearchTerm.includes('content') ||
      lowerSearchTerm === 'write' ||
      lowerSearchTerm === 'writer' ||
      lowerSearchTerm === 'writing') {
    
    // PENALTY for gaming/entertainment tools
    const excludedCategories = [
      'gaming', 'entertainment', 'game', 'video game', 'gaming & entertainment'
    ];
    const excludedTitles = [
      'ai dungeon', 'dungeon', 'game', 'gaming', 'entertainment', 'trivia',
      'ai communication tool', 'communication tool'
    ];
    
    if (excludedCategories.some(cat => lowerCategory.includes(cat)) ||
        excludedTitles.some(title => lowerTitle.includes(title))) {
      return 0; // No score for gaming/entertainment tools
    }
    
    // MASSIVE BOOST for general writing searches - prioritize most useful tools
    if (lowerSearchTerm === 'writing' || lowerSearchTerm === 'write' || lowerSearchTerm === 'writer') {
      // Top tier: Most useful general writing tools
      if (lowerTitle.includes('book writer gpt')) {
        score += 8000;
      }
      if (lowerTitle.includes('article and blog rewriter gpt')) {
        score += 7500; // Higher for general writing
      }
      if (lowerTitle.includes('perfect prompt engine')) {
        score += 7000;
      }
      if (lowerTitle.includes('content creation') || lowerTitle.includes('content writer')) {
        score += 6500;
      }
      if (lowerTitle.includes('copywriter') || lowerTitle.includes('copy writer')) {
        score += 6000;
      }
      
      // Second tier: Specific but still useful
      if (lowerTitle.includes('movie script writer gpt')) {
        score += 5500;
      }
      if (lowerTitle.includes('grant writer gpt')) {
        score += 5200;
      }
      if (lowerTitle.includes('legislation writer gpt')) {
        score += 5000;
      }
      if (lowerTitle.includes('podcast script writer gpt')) {
        score += 4800;
      }
      
      // Lower tier: Very specific tools
      if (lowerTitle.includes('children\'s picture book maker gpt')) {
        score += 4000;
      }
      if (lowerTitle.includes('playwriter gpt') || lowerTitle.includes('🎭 playwriter gpt')) {
        score += 3000; // Lower for general writing searches
      }
      if (lowerTitle.includes('public testimony writer gpt')) {
        score += 2500;
      }
    } else {
      // Standard scoring for specific searches
      if (lowerTitle.includes('book writer gpt')) {
        score += 5000;
      }
      if (lowerTitle.includes('article and blog rewriter gpt')) {
        score += 4700;
      }
      if (lowerTitle.includes('movie script writer gpt')) {
        score += 4900;
      }
      if (lowerTitle.includes('children\'s picture book maker gpt')) {
        score += 4800;
      }
      if (lowerTitle.includes('podcast script writer gpt')) {
        score += 4600;
      }
      if (lowerTitle.includes('playwriter gpt') || lowerTitle.includes('🎭 playwriter gpt')) {
        score += 4500;
      }
      if (lowerTitle.includes('grant writer gpt')) {
        score += 3700;
      }
      if (lowerTitle.includes('legislation writer gpt')) {
        score += 3600;
      }
      if (lowerTitle.includes('public testimony writer gpt')) {
        score += 3500;
      }
    }
    
    // General writing bonuses
    if (lowerTitle.includes('perfect prompt engine')) {
      score += 4400;
    }
    if (lowerTitle.includes('content creation')) {
      score += 4200;
    }
    if (lowerTitle.includes('copywriter') || lowerTitle.includes('copy writer')) {
      score += 4100;
    }
    if (lowerTitle.includes('creative writing')) {
      score += 4300;
    }
    if (lowerTitle.includes('story writer') || lowerTitle.includes('novel writer')) {
      score += 4000;
    }
    if (lowerTitle.includes('blog writer') || lowerTitle.includes('blogger')) {
      score += 3900;
    }
    if (lowerTitle.includes('script writer') || lowerTitle.includes('scriptwriter')) {
      score += 3800;
    }
    
    // Bonus scoring for writing-related terms
    if (lowerTitle.includes('write') || lowerTitle.includes('writer')) {
      score += 2000;
    }
    if (lowerDescription.includes('write') || lowerDescription.includes('writer')) {
      score += 1500;
    }
    if (lowerTitle.includes('writing')) {
      score += 1800;
    }
    if (lowerDescription.includes('writing')) {
      score += 1200;
    }
    if (lowerTitle.includes('book')) {
      score += 1600;
    }
    if (lowerDescription.includes('book')) {
      score += 1000;
    }
    if (lowerTitle.includes('script')) {
      score += 1500;
    }
    if (lowerDescription.includes('script')) {
      score += 900;
    }
    if (lowerTitle.includes('content')) {
      score += 1400;
    }
    if (lowerDescription.includes('content')) {
      score += 800;
    }
    if (lowerTags.some(tag => tag.includes('write') || tag.includes('writer') || tag.includes('writing'))) {
      score += 1300;
    }
  }
  
  return score;
};

// Task-based intelligent matching for user intents
export const taskToToolMapping: Record<string, { keywords: string[], priority: string[], score: number }> = {
  // Time Travel Tasks
  'time_travel': {
    keywords: ['time', 'time machine', 'time travel', 'history', 'historical', 'ancient', 'past', 'talk to history', 'native american', 'titanic', 'tesla', 'einstein'],
    priority: ['TIME MACHINE GPT', 'Native American History Time Machine GPT', 'TALK TO HISTORY GPT', 'Historical Headlines GPT', 'Titanic Resurrections GPT', 'Nikola Tesla GPT', 'Albert Einstein GPT'],
    score: 3500
  },

  // App Building Tasks
  'build_app': {
    keywords: ['make an app', 'build an app', 'create an app', 'develop an app', 'app development', 'mobile app', 'web app', 'application', 'no code', 'app builder'],
    priority: ['RORK Mobile Application Vibe Coding Agent', 'Lovable.dev - AI Web App Builder', 'Launch.Today AI Vibe Coding Agent', 'same.new full stack building agent', 'Windsurf', 'Bolt.new'],
    score: 3000
  },

  // Creative Writing Tasks
  'creative_writing': {
    keywords: ['write', 'writer', 'writing', 'book', 'script', 'content', 'article', 'blog', 'story', 'novel', 'creative writing', 'author', 'manuscript', 'copywriter'],
    priority: ['BOOK WRITER GPT', 'Movie Script Writer GPT', 'Children\'s Picture Book Maker GPT', 'Article and Blog Rewriter GPT', 'Podcast Script Writer GPT', 'Playwriter GPT', 'Grant Writer GPT'],
    score: 3200
  },

  // Writing Tasks  
  'write_book': {
    keywords: ['write a book', 'book writing', 'author', 'novel', 'story', 'manuscript', 'publish book', 'book creator'],
    priority: ['BOOK WRITER GPT', 'Article and Blog Rewriter GPT', 'Creative Writing Assistant'],
    score: 2800
  },

  // Business Tasks
  'start_business': {
    keywords: ['start a business', 'business plan', 'startup', 'entrepreneur', 'business idea', 'company', 'venture'],
    priority: ['Business Plan Generator GPT', 'Startup Validator GPT', 'MicroSaaS GPT', 'Trader GPT'],
    score: 2700
  },

  // Learning Tasks
  'learn_skill': {
    keywords: ['learn', 'study', 'education', 'course', 'tutorial', 'training', 'skill', 'knowledge', 'teach me'],
    priority: ['LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'COLLEGE DEGREE GPT', 'Home-Schooling Assistant GPT'],
    score: 2600
  },

  // Design Tasks
  'create_design': {
    keywords: ['design', 'graphic design', 'logo', 'visual', 'art', 'creative', 'branding', 'graphics'],
    priority: ['Graphic & Cover Design GPT', 'RESTYLE ME GPT', 'Sketch Artist GPT'],
    score: 2500
  },

  // Medical Tasks
  'health_advice': {
    keywords: ['health', 'medical', 'doctor', 'wellness', 'symptoms', 'diagnosis', 'medicine', 'healthcare', 'sick', 'pain', 'illness', 'hospital', 'prescription', 'pharmacy', 'checkup'],
    priority: ['Medicus - The FREE Personal Medical GPT', 'Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT', 'Veterinarian GPT', 'Pharmaceutical Assistant GPT', 'PHARMA RESEARCH PRO', 'Genome GPT'],
    score: 2400
  },

  // Legal Tasks
  'legal_help': {
    keywords: ['legal', 'law', 'lawyer', 'attorney', 'contract', 'legislation', 'legal advice', 'lawsuit', 'court', 'defense', 'sue', 'rights', 'testimony'],
    priority: ['Legal Draftsmith GPT', 'Public Defender GPT', 'Contract Review Bot', 'Legislation Writer GPT', 'Public Testimony Writer GPT'],
    score: 2300
  },

  // Financial Tasks
  'money_management': {
    keywords: ['money', 'finance', 'investment', 'trading', 'budget', 'financial', 'wealth', 'savings', 'taxes', 'credit', 'stock', 'crypto', 'bitcoin', 'portfolio'],
    priority: ['Trader GPT', 'Taxes GPT', 'Insurance Claims GPT', 'MATERIAL VALUATION GPT (MATERIUMOR)', 'Predictive Credit Score Checker GPT'],
    score: 2200
  },

  // Entertainment Tasks
  'create_content': {
    keywords: ['video', 'movie', 'music', 'entertainment', 'content creation', 'social media', 'youtube', 'film', 'cinema', 'trailer'],
    priority: ['Movie Maker Studio AI SUITE', 'Music Video Maker AI Studio', 'Movie Script Writer GPT', 'Movie Scene Maker GPT', 'Podcast Script Writer GPT'],
    score: 2100
  },

  // Travel Tasks
  'plan_travel': {
    keywords: ['travel', 'vacation', 'trip', 'tourism', 'adventure', 'destination', 'travel planning', 'flight', 'hotel'],
    priority: ['Travel Advisor GPT', 'Imagination Traveler GPT'],
    score: 2000
  },

  // Survival & Crisis Tasks
  'survival_prep': {
    keywords: ['survive', 'survival', 'apocalypse', 'grid down', 'off grid', 'prepper', 'emergency', 'shtf', 'crisis', 'oil crisis', 'hormuz', 'doomsday', 'collapse', 'disaster'],
    priority: ['Survivalist GPT', 'Hormuz Crisis Impact Prediction Engine GPT', 'Global Supply Chain Collapse GPT', 'Firefighter GPT', 'Agronomus AI Farming Expert'],
    score: 2500
  },

  // Cooking & Food Tasks
  'cooking_food': {
    keywords: ['cook', 'recipe', 'food', 'meal', 'kitchen', 'chef', 'restaurant', 'menu', 'bake', 'drink', 'cocktail', 'bartender'],
    priority: ['Chef "Sizzle" AI Culinary Assistant', 'Mixologist GPT', 'Restaurant Menu Maker GPT', 'FOOD QUALITY INSPECTOR GPT', 'Cannabis GPT'],
    score: 2000
  },

  // Music Tasks
  'make_music': {
    keywords: ['music', 'song', 'beat', 'melody', 'instrument', 'guitar', 'piano', 'music production', 'compose', 'lyrics'],
    priority: ['Music Video Maker AI Studio', 'Music Melodies & Lessons GPT'],
    score: 2100
  },

  // Gaming Tasks
  'make_game': {
    keywords: ['game', 'video game', 'game design', 'game development', 'gaming', 'unity', 'unreal', 'game document'],
    priority: ['Game Design Document / Developer GPT', 'Trivia Night GPT'],
    score: 2000
  },

  // Real Estate Tasks
  'real_estate': {
    keywords: ['property', 'real estate', 'house', 'home', 'land', 'mortgage', 'renovation', 'solar', 'appraisal'],
    priority: ['Property Data Finder GPT', 'Home Renovator GPT', 'Solar Land Assessor GPT'],
    score: 2000
  },

  // Cybersecurity Tasks
  'cybersecurity': {
    keywords: ['hack', 'hacker', 'security', 'cyber', 'cybersecurity', 'protect', 'firewall', 'malware', 'virus', 'encrypt'],
    priority: ['Cyber Security GPT'],
    score: 2200
  },

  // Pet & Animal Tasks
  'pet_care': {
    keywords: ['pet', 'dog', 'cat', 'animal', 'vet', 'veterinary', 'puppy', 'kitten', 'fish', 'fishing'],
    priority: ['Veterinarian GPT', 'Fisherman GPT'],
    score: 2000
  },

  // Tattoo & Body Art
  'body_art': {
    keywords: ['tattoo', 'piercing', 'body art', 'ink', 'tattoo design'],
    priority: ['Tattoo Designer GPT'],
    score: 2000
  }
};

// Common misspellings and their corrections
export const advancedMisspellings: Record<string, string> = {
  // App building misspellings
  'mak app': 'make app',
  'buld app': 'build app', 
  'creat app': 'create app',
  'devlop app': 'develop app',
  'aplication': 'application',
  'aplicaton': 'application',
  'moble app': 'mobile app',
  'mobil app': 'mobile app',
  'web ap': 'web app',
  'webb app': 'web app',
  'no cod': 'no code',
  'nocode': 'no code',
  
  // Writing misspellings
  'writ book': 'write book',
  'wriet book': 'write book',
  'book writting': 'book writing',
  'autor': 'author',
  'novle': 'novel',
  'storey': 'story',
  
  // Business misspellings
  'busness': 'business',
  'buisness': 'business',
  'bussiness': 'business',
  'startup': 'start up',
  'entrepeneur': 'entrepreneur',
  'company': 'company',
  
  // Learning misspellings
  'lern': 'learn',
  'studdy': 'study',
  'educaton': 'education',
  'cours': 'course',
  'tutoral': 'tutorial',
  'skilll': 'skill',
  'knowledg': 'knowledge',
  
  // Design misspellings
  'desing': 'design',
  'grafic': 'graphic',
  'logo': 'logo',
  'visal': 'visual',
  'creativ': 'creative',
  
  // Medical misspellings
  'helth': 'health',
  'medcal': 'medical',
  'docter': 'doctor',
  'welness': 'wellness',
  'simptoms': 'symptoms',
  'diagnos': 'diagnosis',
  'medicin': 'medicine',
  
  // Legal misspellings
  'laywer': 'lawyer',
  'atorney': 'attorney',
  'contrct': 'contract',
  'ligal': 'legal',
  'legislaton': 'legislation',
  
  // Financial misspellings
  'mony': 'money',
  'finace': 'finance',
  'investmnt': 'investment',
  'tradng': 'trading',
  'budjet': 'budget',
  'financal': 'financial',
  
  // Technology misspellings
  'tecnology': 'technology',
  'compter': 'computer',
  'sofware': 'software',
  'programing': 'programming',
  'codng': 'coding',
  'develoment': 'development'
};

// Intelligent task matching based on user intent
export const matchUserTask = (searchTerm: string): { taskType: string | null, score: number, suggestedTools: string[] } => {
  const lowerSearch = searchTerm.toLowerCase().trim();
  let bestMatch: { taskType: string | null, score: number, suggestedTools: string[] } = {
    taskType: null,
    score: 0,
    suggestedTools: []
  };

  // Check for task matches
  for (const [taskType, config] of Object.entries(taskToToolMapping)) {
    let taskScore = 0;
    
    // Check for exact keyword matches
    for (const keyword of config.keywords) {
      if (lowerSearch.includes(keyword)) {
        taskScore += config.score;
        // Boost for exact matches
        if (lowerSearch === keyword) {
          taskScore += 1000;
        }
      }
    }

    // Check for partial word matches
    const searchWords = lowerSearch.split(' ');
    const keywordWords = config.keywords.flatMap(k => k.split(' '));
    
    for (const searchWord of searchWords) {
      for (const keywordWord of keywordWords) {
        if (searchWord.length >= 3 && keywordWord.includes(searchWord)) {
          taskScore += 500;
        }
      }
    }

    if (taskScore > bestMatch.score) {
      bestMatch = {
        taskType,
        score: taskScore,
        suggestedTools: config.priority
      };
    }
  }

  return bestMatch;
};

// Smart typo correction with context (uses centralized dictionary + word-level fixes)
export const smartTypoCorrection = (searchTerm: string): string => {
  const original = searchTerm.trim().toLowerCase();
  if (!original) return original;

  // Exact phrase correction first
  if (TYPO_DICTIONARY[original]) {
    return TYPO_DICTIONARY[original];
  }

  // Word-by-word correction
  const words = original.split(/\s+/);
  const correctedWords = words.map((w) => {
    if (TYPO_DICTIONARY[w]) return TYPO_DICTIONARY[w];
    if (advancedMisspellings[w]) return advancedMisspellings[w];

    // Character substitutions (basic leetspeak)
    const charSubs: Record<string, string> = { '0': 'o', '3': 'e', '1': 'i', '5': 's', '@': 'a', '$': 's' };
    let out = w;
    for (const [c, r] of Object.entries(charSubs)) {
      out = out.replace(new RegExp(c, 'g'), r);
    }
    return out;
  });

  return correctedWords.join(' ');
};

// Context-aware category inference
export const inferCategory = (searchTerm: string): string[] => {
  const lowerSearch = searchTerm.toLowerCase();
  const categories: string[] = [];

  const categoryPatterns: Record<string, string[]> = {
    'AI Agents': ['agent', 'autonomous', 'ai agent', 'chatbot', 'virtual assistant'],
    'Development & Coding': ['code', 'programming', 'development', 'software', 'app', 'web'],
    'Creative & Media': ['design', 'art', 'creative', 'video', 'music', 'image'],
    'Business & Finance': ['business', 'finance', 'money', 'trading', 'investment', 'startup'],
    'Education & Learning': ['learn', 'education', 'course', 'study', 'training', 'skill'],
    'Health & Wellness': ['health', 'medical', 'doctor', 'wellness', 'fitness'],
    'Legal & Government': ['legal', 'law', 'government', 'lawyer', 'contract'],
    'Entertainment & Gaming': ['game', 'entertainment', 'fun', 'music', 'video'],
    'Research & Analysis': ['research', 'analysis', 'data', 'science', 'study']
  };

  for (const [category, patterns] of Object.entries(categoryPatterns)) {
    for (const pattern of patterns) {
      if (lowerSearch.includes(pattern)) {
        categories.push(category);
        break;
      }
    }
  }

  return categories;
};

// Enhanced tool scoring based on context
export const scoreToolByContext = (tool: Tool, searchTerm: string, userTask: any): number => {
  let score = 0;
  const lowerSearch = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();

  // Task-based scoring
  if (userTask.taskType && userTask.suggestedTools.some(suggested => 
    lowerTitle.includes(suggested.toLowerCase()))) {
    score += 3000;
  }

  // Category relevance scoring
  const inferredCategories = inferCategory(searchTerm);
  if (tool.category && inferredCategories.includes(tool.category)) {
    score += 2000;
  }

  // Semantic relevance scoring
  const searchWords = lowerSearch.split(' ');
  const titleWords = lowerTitle.split(' ');
  const descWords = lowerDescription.split(' ');

  // Count semantic matches
  let semanticMatches = 0;
  for (const searchWord of searchWords) {
    if (searchWord.length >= 3) {
      for (const titleWord of titleWords) {
        if (titleWord.includes(searchWord) || searchWord.includes(titleWord)) {
          semanticMatches++;
        }
      }
      for (const descWord of descWords) {
        if (descWord.includes(searchWord) || searchWord.includes(descWord)) {
          semanticMatches++;
        }
      }
    }
  }

  score += semanticMatches * 300;

  return score;
};