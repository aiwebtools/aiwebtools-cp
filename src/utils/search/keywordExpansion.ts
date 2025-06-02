import { keywordMapping, searchSynonyms, categoryKeywords } from "@/data/keywords";

// Enhanced typo correction mapping for common misspellings
const typoCorrection: Record<string, string> = {
  "sciece": "science",
  "sciene": "science",
  "sience": "science",
  "scince": "science",
  "resarch": "research",
  "reserch": "research",
  "reasearch": "research",
  "laboratry": "laboratory",
  "laboraty": "laboratory",
  "expirement": "experiment",
  "experimnt": "experiment",
  "anlaysis": "analysis",
  "anaylsis": "analysis",
  "analysys": "analysis",
  "genom": "genome",
  "genme": "genome",
  "dna": "dna",
  "rna": "rna",
  "tesla": "tesla",
  "einstien": "einstein",
  "einsten": "einstein",
  "nam": "name",
  "nameing": "naming",
  
  // New common misspellings
  "colege": "college",
  "collge": "college",
  "collega": "college",
  "univercity": "university",
  "universty": "university",
  "universtiy": "university",
  "writting": "writing",
  "writeing": "writing",
  "writen": "writing",
  "buisness": "business",
  "bussiness": "business",
  "busines": "business",
  "busness": "business",
  "managment": "management",
  "manegement": "management",
  "devlopment": "development",
  "developement": "development",
  "develpment": "development",
  "programing": "programming",
  "programmin": "programming",
  "progaming": "programming",
  "artifical": "artificial",
  "artficial": "artificial",
  "inteligence": "intelligence",
  "inteligent": "intelligent",
  "intellegence": "intelligence",
  "marekting": "marketing",
  "marketting": "marketing",
  "markting": "marketing",
  "desing": "design",
  "desgn": "design",
  "designg": "design",
  "creativ": "creative",
  "creatve": "creative",
  "creativty": "creativity",
  "analaytics": "analytics",
  "analitics": "analytics",
  "analytcs": "analytics",
  "finacial": "financial",
  "financal": "financial",
  "fincancial": "financial",
  "helath": "health",
  "healt": "health",
  "helth": "health",
  "medial": "medical",
  "medicl": "medical",
  "medcial": "medical",
  "docktor": "doctor",
  "docter": "doctor",
  "doctr": "doctor",
  "educaton": "education",
  "educatin": "education",
  "eduction": "education",
  "learing": "learning",
  "lerning": "learning",
  "learnig": "learning",
  "traning": "training",
  "trainig": "training",
  "trainng": "training",
  "productivity": "productivity",
  "productivty": "productivity",
  "productivety": "productivity",
  "comunicaton": "communication",
  "comunication": "communication",
  "comunicaion": "communication",
  "colaboration": "collaboration",
  "colaboraton": "collaboration",
  "colabration": "collaboration",
  "automaion": "automation",
  "automaton": "automation",
  "automtion": "automation",
  "generaton": "generation",
  "generaion": "generation",
  "genration": "generation",
  "optimizaton": "optimization",
  "optimizaion": "optimization",
  "optimzation": "optimization",
  "recomendation": "recommendation",
  "recomendaton": "recommendation",
  "recomendaion": "recommendation",
  "personalizaton": "personalization",
  "personalizaion": "personalization",
  "personaliztion": "personalization"
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
  'real estate', 'property', 'housing', 'construction'
];

export const getExpandedKeywords = (searchTerm: string): string[] => {
  let lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // Apply direct typo correction first
  if (typoCorrection[lowerSearchTerm]) {
    lowerSearchTerm = typoCorrection[lowerSearchTerm];
  }
  
  const expandedKeywords = new Set<string>();
  
  // Add the original search term and corrected term
  expandedKeywords.add(searchTerm.toLowerCase().trim());
  expandedKeywords.add(lowerSearchTerm);
  
  // Apply fuzzy matching to find similar keywords
  const fuzzyMatches = findFuzzyMatches(lowerSearchTerm, commonToolKeywords, 2);
  fuzzyMatches.forEach(match => expandedKeywords.add(match));
  
  // Apply fuzzy matching to typo correction keys
  const typoKeys = Object.keys(typoCorrection);
  const typoFuzzyMatches = findFuzzyMatches(lowerSearchTerm, typoKeys, 1);
  typoFuzzyMatches.forEach(match => {
    if (typoCorrection[match]) {
      expandedKeywords.add(typoCorrection[match]);
    }
  });

  // NAME SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('naming') ||
      lowerSearchTerm.includes('identity') || lowerSearchTerm.includes('personality') ||
      lowerSearchTerm.includes('meaning') || lowerSearchTerm.includes('numerology')) {
    const nameKeywords = [
      'name insight research',
      'name predictor',
      'name meaning',
      'name analysis',
      'personality insights',
      'numerology',
      'cultural significance',
      'personal discovery',
      'name research',
      'identity',
      'naming',
      'what name means',
      'name significance',
      'name interpretation',
      'name psychology',
      'whatsmynamegpt',
      'whats my name',
      'my name meaning'
    ];
    
    nameKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // SCIENCE AND RESEARCH SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('science') || lowerSearchTerm.includes('research') || 
      lowerSearchTerm.includes('scientific') || lowerSearchTerm.includes('laboratory') ||
      lowerSearchTerm.includes('experiment') || lowerSearchTerm.includes('analysis') ||
      lowerSearchTerm.includes('genome') || lowerSearchTerm.includes('dna') ||
      lowerSearchTerm.includes('tesla') || lowerSearchTerm.includes('einstein') ||
      lowerSearchTerm.includes('space') || lowerSearchTerm.includes('astronomy') ||
      lowerSearchTerm.includes('physics') || lowerSearchTerm.includes('chemistry') ||
      lowerSearchTerm.includes('biology') || lowerSearchTerm.includes('genetics')) {
    const scienceKeywords = [
      'stellaris',
      'space explorer',
      'nikola tesla gpt',
      'tesla',
      'einstein',
      'albert einstein gpt',
      'alchemist scientist gpt',
      'alchemy',
      'genome gpt',
      'genetics',
      'dna',
      'scientific research',
      'research',
      'laboratory',
      'experiment',
      'analysis',
      'data analysis',
      'space exploration',
      'astronomy',
      'physics',
      'chemistry',
      'biology',
      'scientific',
      'science',
      'scientist',
      'researcher',
      'innovation',
      'discovery',
      'invention',
      'technology',
      'ai research',
      'space science',
      'exoplanet',
      'terraforming',
      'astrogation',
      'genomics',
      'genetic analysis',
      'molecular',
      'biochemistry',
      'biotech',
      'scientific methodology',
      'hypothesis',
      'theory',
      'empirical',
      'peer review',
      'publication',
      'journal',
      'academic',
      'university research',
      'lab work',
      'field study'
    ];
    
    scienceKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }

  // SOUND AND AUDIO SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('sound') || lowerSearchTerm.includes('audio') || 
      lowerSearchTerm.includes('voice') || lowerSearchTerm.includes('speech') ||
      lowerSearchTerm.includes('music') || lowerSearchTerm === 'tts' ||
      lowerSearchTerm.includes('text to speech')) {
    const soundAudioKeywords = [
      'suno',
      'udio', 
      'eleven labs',
      'murf',
      'speechify',
      'text to speech',
      'tts',
      'voice generation',
      'audio generation',
      'music generation',
      'ai music',
      'voice ai',
      'audio ai',
      'sound effects',
      'voice cloning',
      'speech synthesis',
      'audio tools',
      'music tools',
      'voice tools',
      'sound generator',
      'audio creator',
      'music creator',
      'voice creator',
      'podcast script writer',
      'music video maker',
      'audio production',
      'sound design',
      'voice over',
      'narration',
      'nucleus ai inbound call agents platform',
      'nucleus',
      'call agent',
      'voice agent',
      'phone agent'
    ];
    
    soundAudioKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // BOOK WRITING SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('write a book') || lowerSearchTerm.includes('book writing') ||
      (lowerSearchTerm.includes('write') && lowerSearchTerm.includes('book'))) {
    const bookWritingKeywords = [
      'book writer gpt',
      'book writing',
      'novel creation',
      'storytelling',
      'book creation',
      'writing assistant',
      'author tools',
      'book publishing',
      'creative writing',
      'manuscript'
    ];
    
    bookWritingKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // TRAINING EMPLOYEES SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('train employees') || lowerSearchTerm.includes('employee training') ||
      lowerSearchTerm.includes('training manual') || lowerSearchTerm.includes('staff training') ||
      (lowerSearchTerm.includes('train') && lowerSearchTerm.includes('employees'))) {
    const trainingKeywords = [
      'training manual generator gpt',
      'training manual generator',
      'employee training',
      'staff training',
      'training materials',
      'business training',
      'onboarding',
      'training program',
      'training development',
      'employee onboarding',
      'corporate training',
      'training guide'
    ];
    
    trainingKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // IMAGE AND VISUAL AI SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('image') || lowerSearchTerm.includes('art') || 
      lowerSearchTerm.includes('visual') || lowerSearchTerm.includes('photo') ||
      lowerSearchTerm.includes('picture') || lowerSearchTerm.includes('graphic')) {
    const imageVisualKeywords = [
      'dalle',
      'midjourney',
      'stable diffusion',
      'leonardo ai',
      'runway',
      'firefly',
      'image generation',
      'ai art',
      'art generator',
      'visual ai',
      'photo generator',
      'picture generator',
      'image creator',
      'ai image',
      'graphics',
      'design',
      'visual tools',
      'creative',
      'drawing',
      'painting',
      'illustration',
      'sketch'
    ];
    
    imageVisualKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // VIDEO AI SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('video') || lowerSearchTerm.includes('film') || 
      lowerSearchTerm.includes('movie') || lowerSearchTerm.includes('animation')) {
    const videoKeywords = [
      'luma dream machine',
      'pika labs',
      'runway',
      'sora',
      'video generation',
      'ai video',
      'video creator',
      'video maker',
      'video ai',
      'video tools',
      'movie maker',
      'film maker',
      'animation',
      'video editing',
      'cinematic',
      'video production',
      'movie script writer',
      'music video maker'
    ];
    
    videoKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // TEXT AND WRITING AI SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('write') || lowerSearchTerm.includes('text') || 
      lowerSearchTerm.includes('content') || lowerSearchTerm.includes('article') ||
      lowerSearchTerm.includes('blog') || lowerSearchTerm.includes('copy')) {
    const writingKeywords = [
      'writing',
      'content creation',
      'text generation',
      'copywriting',
      'article writing',
      'blog writing',
      'script writing',
      'creative writing',
      'writing tools',
      'content tools',
      'book writer gpt',
      'article and blog rewriter gpt',
      'training manual generator gpt',
      'podcast script writer gpt'
    ];
    
    writingKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // DESIGN AI SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('design') || lowerSearchTerm.includes('logo') || 
      lowerSearchTerm.includes('graphic') || lowerSearchTerm.includes('ui') ||
      lowerSearchTerm.includes('ux') || lowerSearchTerm.includes('layout')) {
    const designKeywords = [
      'canva',
      'figma',
      'adobe',
      'graphic design',
      'ui design',
      'ux design',
      'web design',
      'logo design',
      'design tools',
      'creative design',
      'visual design',
      'branding',
      'visual identity',
      'graphic & cover design gpt'
    ];
    
    designKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // CODE AND DEVELOPMENT AI SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('code') || lowerSearchTerm.includes('programming') || 
      lowerSearchTerm.includes('coding') || lowerSearchTerm.includes('development') ||
      lowerSearchTerm.includes('software')) {
    const codingKeywords = [
      'github copilot',
      'code generation',
      'ai coding',
      'programming tools',
      'developer tools',
      'code assistant',
      'software development',
      'coding assistant',
      'lovable.dev',
      'bolt.new',
      'chatgpt operator',
      'manus autonomous agent'
    ];
    
    codingKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // CHAT AND AI ASSISTANT SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('chat') || lowerSearchTerm.includes('assistant') || 
      lowerSearchTerm.includes('bot') || lowerSearchTerm.includes('ai helper')) {
    const chatAssistantKeywords = [
      'chatgpt',
      'claude',
      'conversation',
      'ai chat',
      'chatbot',
      'ai assistant',
      'personal assistant',
      'helper',
      'support',
      'guide',
      'ai agent',
      'celebrity chatline gpt',
      'godmode gpt',
      'multitasker gpt'
    ];
    
    chatAssistantKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // SOLAR/SUN SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('sun') || lowerSearchTerm.includes('solar')) {
    const solarKeywords = [
      'solar land assessor gpt',
      'solar land assessor',
      'solar assessment',
      'solar professional',
      'solar installation',
      'solar energy',
      'renewable energy',
      'solar panels',
      'solar project',
      'solar land',
      'solar power'
    ];
    
    solarKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // PHONE/CALL AGENT SEARCH EXPANSION - HIGHEST PRIORITY
  if (lowerSearchTerm.includes('phone') || lowerSearchTerm.includes('call') || 
      lowerSearchTerm.includes('telephone') || lowerSearchTerm.includes('voice agent') ||
      lowerSearchTerm.includes('phone agent') || lowerSearchTerm.includes('call agent') ||
      lowerSearchTerm.includes('phonecall')) {
    const phoneAgentKeywords = [
      'nucleus ai inbound call agents platform',
      'nucleus',
      'call agent',
      'phone agent',
      'voice agent',
      'ai agent',
      'call center',
      'inbound calls',
      'outbound calls',
      'phone system',
      'voice communication',
      'call automation',
      'phone automation',
      'telephone agent',
      'voice assistant',
      'call handling',
      'phone support',
      'customer service',
      'call management',
      'voice ai'
    ];
    
    phoneAgentKeywords.forEach(keyword => expandedKeywords.add(keyword));
  }
  
  // AGENTS SEARCH EXPANSION - HIGH PRIORITY
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Add specific agent tool names
    const agentKeywords = [
      'chatgpt operator',
      'manus autonomous agent',
      'surf.new web agents',
      'lindy ai automation',
      'nucleus ai inbound call agents platform',
      'nucleus',
      'auto-gpt',
      'babyagi',
      'agentgpt',
      'god mode gpt',
      'ai town',
      'autonomous',
      'automation',
      'intelligent agent',
      'ai assistant',
      'workflow automation',
      'task automation',
      'web automation',
      'browser automation',
      'ai workflow',
      'ai automation platform',
      'call agent',
      'phone agent',
      'voice agent'
    ];
    
    agentKeywords.forEach(keyword => expandedKeywords.add(keyword));
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
  return Array.from(expandedKeywords).filter(keyword => keyword.length > 0);
};
