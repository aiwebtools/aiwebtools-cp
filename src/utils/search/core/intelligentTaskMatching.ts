import { Tool } from "@/types/tools";

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
    
    // Priority writing tools
    const writingTools = [
      'book writer gpt',
      'movie script writer gpt',
      'children\'s picture book maker gpt',
      'article and blog rewriter gpt',
      'podcast script writer gpt',
      'playwriter gpt',
      'creative writing',
      'content creation',
      'blog writer',
      'script writer',
      'story writer',
      'novel writer',
      'copywriter'
    ];
    
    if (writingTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General writing related matching
    if (lowerTitle.includes('write') || lowerDescription.includes('write') ||
        lowerTitle.includes('writer') || lowerDescription.includes('writer') ||
        lowerTitle.includes('writing') || lowerDescription.includes('writing') ||
        lowerTitle.includes('book') || lowerDescription.includes('book') ||
        lowerTitle.includes('script') || lowerDescription.includes('script') ||
        lowerTitle.includes('content') || lowerDescription.includes('content') ||
        lowerTitle.includes('article') || lowerDescription.includes('article') ||
        lowerTitle.includes('blog') || lowerDescription.includes('blog') ||
        lowerTags.some(tag => tag.includes('write') || tag.includes('writer') || 
                      tag.includes('writing') || tag.includes('book') || tag.includes('content'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreWriting = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
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
    
    // Top priority writing tools
    if (lowerTitle.includes('book writer gpt')) {
      score += 5000; // Highest priority
    }
    if (lowerTitle.includes('movie script writer gpt')) {
      score += 4900; // Second highest
    }
    if (lowerTitle.includes('children\'s picture book maker gpt')) {
      score += 4800; // Third highest
    }
    if (lowerTitle.includes('article and blog rewriter gpt')) {
      score += 4700;
    }
    if (lowerTitle.includes('podcast script writer gpt')) {
      score += 4600;
    }
    if (lowerTitle.includes('playwriter gpt') || lowerTitle.includes('🎭 playwriter gpt')) {
      score += 4500;
    }
    if (lowerTitle.includes('perfect prompt engine')) {
      score += 4400;
    }
    if (lowerTitle.includes('creative writing')) {
      score += 4300;
    }
    if (lowerTitle.includes('content creation')) {
      score += 4200;
    }
    if (lowerTitle.includes('copywriter') || lowerTitle.includes('copy writer')) {
      score += 4100;
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
    if (lowerTitle.includes('grant writer gpt')) {
      score += 3700;
    }
    if (lowerTitle.includes('legislation writer gpt')) {
      score += 3600;
    }
    if (lowerTitle.includes('public testimony writer gpt')) {
      score += 3500;
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
    priority: ['RORK Mobile Application Vibe Coding Agent', 'Lovable.dev - AI Web App Builder', 'same.new full stack building agent', 'Windsurf', 'Bolt.new'],
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
    keywords: ['health', 'medical', 'doctor', 'wellness', 'symptoms', 'diagnosis', 'medicine', 'healthcare'],
    priority: ['Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT', 'Veterinarian GPT', 'Pharmaceutical Assistant GPT'],
    score: 2400
  },

  // Legal Tasks
  'legal_help': {
    keywords: ['legal', 'law', 'lawyer', 'attorney', 'contract', 'legislation', 'legal advice', 'lawsuit'],
    priority: ['Legal Draftsmith GPT', 'Public Defender GPT', 'Contract Review Bot', 'Legislation Writer GPT'],
    score: 2300
  },

  // Financial Tasks
  'money_management': {
    keywords: ['money', 'finance', 'investment', 'trading', 'budget', 'financial', 'wealth', 'savings', 'taxes'],
    priority: ['Trader GPT', 'Taxes GPT', 'Insurance Claims GPT', 'Material Valuation GPT'],
    score: 2200
  },

  // Entertainment Tasks
  'create_content': {
    keywords: ['video', 'movie', 'music', 'entertainment', 'content creation', 'social media', 'youtube'],
    priority: ['Movie Maker Studio AI SUITE', 'Music Video Maker AI Studio', 'Podcast Script Writer GPT'],
    score: 2100
  },

  // Travel Tasks
  'plan_travel': {
    keywords: ['travel', 'vacation', 'trip', 'tourism', 'adventure', 'destination', 'travel planning'],
    priority: ['Travel Advisor GPT'],
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

// Smart typo correction with context
export const smartTypoCorrection = (searchTerm: string): string => {
  let corrected = searchTerm.toLowerCase();
  
  // Apply advanced misspelling corrections
  for (const [misspelling, correction] of Object.entries(advancedMisspellings)) {
    if (corrected.includes(misspelling)) {
      corrected = corrected.replace(misspelling, correction);
    }
  }

  // Handle common character substitutions
  const charSubstitutions: Record<string, string> = {
    '0': 'o',
    '3': 'e', 
    '1': 'i',
    '5': 's',
    '@': 'a',
    '$': 's'
  };

  for (const [char, replacement] of Object.entries(charSubstitutions)) {
    corrected = corrected.replace(new RegExp(char, 'g'), replacement);
  }

  return corrected;
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