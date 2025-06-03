import { keywordMapping, searchSynonyms, categoryKeywords } from "@/data/keywords";
import { phoneticMatch } from "./core/fuzzyMatching";

// Massively expanded typo correction mapping
const typoCorrection: Record<string, string> = {
  "sciece": "science",
  "sciene": "science",
  "sience": "science",
  "scince": "science",
  
  // NEW: More comprehensive misspelling corrections
  "colege": "college",
  "collge": "college",
  "collega": "college",
  "colledge": "college",
  "coledge": "college",
  "collage": "college",
  "univercity": "university",
  "universty": "university",
  "universtiy": "university",
  "univesity": "university",
  "unversity": "university",
  
  "writting": "writing",
  "writeing": "writing",
  "writen": "writing",
  "writng": "writing",
  "riting": "writing",
  
  "buisness": "business",
  "bussiness": "business",
  "busines": "business",
  "busness": "business",
  "bizness": "business",
  "bussines": "business",
  
  "helath": "health",
  "healt": "health",
  "helth": "health",
  "healthh": "health",
  "heatlh": "health",
  
  "docktor": "doctor",
  "docter": "doctor",
  "doctr": "doctor",
  "doktor": "doctor",
  "dcotor": "doctor",
  
  "travle": "travel",
  "trvel": "travel",
  "travell": "travel",
  "trvl": "travel",
  "travaling": "traveling",
  
  "musik": "music",
  "musick": "music",
  "muzic": "music",
  "misic": "music",
  "mucis": "music",
  
  "desing": "design",
  "desgn": "design",
  "designg": "design",
  "dezign": "design",
  "deisng": "design",
  
  "resarch": "research",
  "reserch": "research",
  "reasearch": "research",
  "researh": "research",
  "reseach": "research",
  
  "politcal": "political",
  "poltical": "political",
  "politial": "political",
  "polical": "political",
  "politicle": "political",
  
  "testimny": "testimony",
  "testmony": "testimony",
  "testimoney": "testimony",
  "testimonie": "testimony",
  "testamony": "testimony",
  
  "finacial": "financial",
  "financal": "financial",
  "fincancial": "financial",
  "finacnal": "financial",
  "finanical": "financial",
  
  "learing": "learning",
  "lerning": "learning",
  "learnig": "learning",
  "lernig": "learning",
  "learng": "learning",
  
  "educaton": "education",
  "educatin": "education",
  "eduction": "education",
  "educaion": "education",
  "educatoin": "education",
  
  "analaytics": "analytics",
  "analitics": "analytics",
  "analytcs": "analytics",
  "anaytics": "analytics",
  "analyitcs": "analytics",
  
  "programing": "programming",
  "programmin": "programming",
  "progaming": "programming",
  "programing": "programming",
  "programimg": "programming",
  
  "goverment": "government",
  "govenment": "government",
  "govermnent": "government",
  "governmnet": "government",
  "goverment": "government",
  
  "acitivism": "activism",
  "activisim": "activism",
  "activsim": "activism",
  "actvism": "activism",
  "activizm": "activism"
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
  
  // Apply phonetic matching first
  const phoneticMatches = phoneticMatch(lowerSearchTerm);
  
  // Apply direct typo correction
  if (typoCorrection[lowerSearchTerm]) {
    lowerSearchTerm = typoCorrection[lowerSearchTerm];
  }
  
  const expandedKeywords = new Set<string>();
  
  // Add the original search term, corrected term, and phonetic matches
  expandedKeywords.add(searchTerm.toLowerCase().trim());
  expandedKeywords.add(lowerSearchTerm);
  phoneticMatches.forEach(match => expandedKeywords.add(match));
  
  // INTELLIGENT CONTEXT-BASED EXPANSION
  const contextPatterns = [
    {
      triggers: ['college', 'university', 'degree', 'education', 'course', 'learn'],
      expansions: ['college degree gpt', 'learn any course gpt', 'learn any skill gpt', 'education', 'learning', 'university', 'course', 'study', 'tutorial', 'teaching', 'academic']
    },
    {
      triggers: ['doctor', 'medical', 'health', 'wellness', 'dr'],
      expansions: ['doctor gpt', 'personalized dr gpt', 'health', 'medical', 'wellness', 'healthcare', 'medicine', 'physician', 'clinic', 'hospital']
    },
    {
      triggers: ['travel', 'vacation', 'trip', 'tourism'],
      expansions: ['travel advisor gpt', 'vacation', 'trip', 'tourism', 'adventure', 'journey', 'explore', 'destination']
    },
    {
      triggers: ['music', 'song', 'audio', 'sound'],
      expansions: ['music video maker', 'music melodies', 'audio', 'sound', 'melody', 'song', 'instrument', 'musical']
    },
    {
      triggers: ['political', 'politics', 'activism', 'civic', 'democracy', 'government'],
      expansions: ['we the people ai', 'public testimony writer', 'political', 'activism', 'civic', 'democracy', 'government', 'legislation', 'policy']
    },
    {
      triggers: ['business', 'finance', 'money', 'financial', 'marketing'],
      expansions: ['business plan generator', 'financial calculator', 'marketing', 'finance', 'money', 'economic', 'commercial', 'enterprise']
    },
    {
      triggers: ['design', 'graphic', 'visual', 'art', 'creative'],
      expansions: ['graphic design gpt', 'restyle me gpt', 'design', 'graphic', 'visual', 'art', 'creative', 'aesthetic', 'artistic']
    },
    {
      triggers: ['video', 'movie', 'film', 'cinema'],
      expansions: ['movie maker studio', 'movie scene maker', 'video', 'film', 'cinema', 'cinematic', 'movie', 'production']
    },
    {
      triggers: ['write', 'writing', 'content', 'author'],
      expansions: ['book writer gpt', 'article writer', 'content', 'writing', 'author', 'script', 'text', 'copywriting']
    },
    {
      triggers: ['research', 'analysis', 'data', 'science'],
      expansions: ['research', 'analysis', 'data', 'science', 'scientific', 'study', 'investigation', 'examination']
    }
  ];
  
  // Apply context-based expansions
  for (const pattern of contextPatterns) {
    if (pattern.triggers.some(trigger => lowerSearchTerm.includes(trigger))) {
      pattern.expansions.forEach(expansion => expandedKeywords.add(expansion));
    }
  }
  
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
