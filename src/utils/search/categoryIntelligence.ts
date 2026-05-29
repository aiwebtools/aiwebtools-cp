// SUPER-INTELLIGENT CATEGORY RELATIONSHIP SYSTEM
// Defines how all categories relate to each other for smart search recommendations

// Category families - groups of closely related categories that should boost each other
export const CATEGORY_FAMILIES = {
  // Knowledge & Wisdom family
  knowledge: ['history', 'spiritual', 'philosophy', 'education', 'science', 'research'],
  
  // Creative & Media family
  creative: ['video', 'image', 'music', 'audio', 'design', 'art', 'animation'],
  
  // Business & Finance family
  business: ['trading', 'finance', 'business', 'productivity', 'marketing', 'sales'],
  
  // Technical family
  technical: ['coding', 'development', 'security', 'automation', 'ai', 'data'],
  
  // Lifestyle family
  lifestyle: ['health', 'wellness', 'fitness', 'travel', 'food', 'entertainment'],
  
  // Professional Services family
  professional: ['legal', 'medical', 'consulting', 'real estate', 'insurance'],
  
  // Web3 & Blockchain family
  web3: ['web3', 'blockchain', 'crypto', 'nft', 'defi', 'decentralized']
};

// Sibling categories that should HEAVILY boost each other (treated almost as same category)
export const SIBLING_CATEGORIES: Record<string, string[]> = {
  history: ['spiritual', 'philosophy', 'ancient', 'civilization', 'archaeology'],
  spiritual: ['history', 'philosophy', 'religion', 'meditation', 'wisdom', 'mystical'],
  philosophy: ['history', 'spiritual', 'wisdom', 'consciousness', 'enlightenment'],
  education: ['learning', 'course', 'tutor', 'school', 'training', 'skill'],
  science: ['research', 'experiment', 'physics', 'chemistry', 'biology', 'astronomy'],
  research: ['science', 'data', 'analytics', 'academic', 'study'],
  
  video: ['film', 'movie', 'animation', 'multimedia', 'cinema'],
  image: ['art', 'design', 'graphics', 'visual', 'illustration', 'photo'],
  music: ['audio', 'sound', 'song', 'melody', 'composition'],
  
  trading: ['finance', 'investment', 'stock', 'crypto', 'forex', 'market'],
  finance: ['trading', 'investment', 'banking', 'money', 'economics'],
  business: ['productivity', 'startup', 'entrepreneur', 'management', 'strategy'],
  
  coding: ['development', 'programming', 'software', 'engineering', 'tech'],
  security: ['privacy', 'cyber', 'protection', 'encryption', 'hacking'],
  
  health: ['wellness', 'medical', 'fitness', 'nutrition', 'mental health'],
  wellness: ['health', 'fitness', 'meditation', 'self-care', 'mindfulness'],
  
  legal: ['law', 'attorney', 'court', 'contract', 'compliance'],
  
  writing: ['content', 'blog', 'article', 'copywriting', 'storytelling'],
  gaming: ['entertainment', 'esports', 'streaming', 'interactive'],
  
  // Web3 & Blockchain siblings
  web3: ['blockchain', 'crypto', 'cryptocurrency', 'nft', 'defi', 'decentralized', 'wallet', 'token'],
  blockchain: ['web3', 'crypto', 'nft', 'defi', 'decentralized', 'smart contract'],
  crypto: ['web3', 'blockchain', 'bitcoin', 'ethereum', 'defi', 'trading', 'finance']
};

// Extended title keywords for detecting tool categories by name
export const CATEGORY_TITLE_KEYWORDS: Record<string, string[]> = {
  history: [
    'history', 'historical', 'time machine', 'ancient', 'civilization', 'past',
    'archaeology', 'museum', 'heritage', 'era', 'century', 'dynasty', 'empire',
    'medieval', 'renaissance', 'antiquity', 'chronicles', 'legacy', 'ancestors'
  ],
  
  spiritual: [
    'spiritual', 'soul', 'divine', 'god', 'gods', 'goddess', 'meditation', 'prayer',
    'buddha', 'buddhist', 'jesus', 'christ', 'prophet', 'saint', 'angel', 'mystic',
    'wisdom', 'enlighten', 'consciousness', 'awakening', 'dharma', 'karma', 'zen',
    'tarot', 'astrology', 'zodiac', 'horoscope', 'oracle', 'psychic', 'intuition',
    'resurrection', 'reincarnation', 'afterlife', 'heaven', 'scripture', 'bible',
    'quran', 'torah', 'vedas', 'bhagavad', 'sufi', 'rumi', 'kabbalah', 'hermetic',
    'gnostic', 'esoteric', 'occult', 'chakra', 'kundalini', 'mantra', 'yoga',
    'shaman', 'pagan', 'wicca', 'druid', 'celtic', 'norse', 'greek gods', 'mythology',
    'temple', 'sacred', 'holy', 'blessing', 'miracle', 'faith', 'belief', 'devotion',
    'monk', 'priest', 'nun', 'guru', 'master', 'teacher', 'disciple', 'seeker',
    'light', 'darkness', 'yin yang', 'tao', 'confucius', 'lao tzu', 'alan watts',
    'eckhart', 'deepak', 'osho', 'sadguru', 'thich nhat', 'dalai lama'
  ],
  
  philosophy: [
    'philosophy', 'philosopher', 'socrates', 'plato', 'aristotle', 'nietzsche',
    'kant', 'descartes', 'hegel', 'marx', 'existential', 'stoic', 'epicurean',
    'metaphysics', 'ethics', 'logic', 'ontology', 'epistemology', 'aesthetics',
    'rational', 'empirical', 'dialectic', 'phenomenology', 'hermeneutics'
  ],
  
  education: [
    'learn', 'education', 'course', 'tutor', 'teach', 'school', 'university',
    'college', 'degree', 'study', 'student', 'lesson', 'curriculum', 'training',
    'skill', 'knowledge', 'academy', 'institute', 'class', 'lecture', 'professor'
  ],
  
  science: [
    'science', 'scientific', 'research', 'experiment', 'physics', 'chemistry',
    'biology', 'astronomy', 'geology', 'ecology', 'genetics', 'quantum',
    'molecular', 'atomic', 'laboratory', 'hypothesis', 'theory', 'discovery',
    'nasa', 'space', 'cosmos', 'universe', 'stellar', 'planet', 'galaxy',
    'evolution', 'genome', 'dna', 'cell', 'organism', 'species', 'ecosystem'
  ],
  
  video: [
    'video', 'film', 'movie', 'cinema', 'animation', 'sora', 'runway', 'pika',
    'luma', 'veo', 'kling', 'minimax', 'heygen', 'synthesia', 'descript',
    'premiere', 'davinci', 'final cut', 'capcut', 'tiktok', 'youtube', 'vimeo',
    'documentary', 'trailer', 'scene', 'director', 'producer', 'cinematography'
  ],
  
  image: [
    'image', 'picture', 'photo', 'art', 'design', 'graphic', 'visual', 'illustration',
    'midjourney', 'dalle', 'stable diffusion', 'leonardo', 'ideogram', 'flux',
    'firefly', 'canva', 'figma', 'photoshop', 'illustrator', 'sketch', 'drawing',
    'painting', 'portrait', 'landscape', 'abstract', 'digital art', 'concept art',
    'logo', 'icon', 'banner', 'poster', 'thumbnail', 'avatar', 'character design'
  ],
  
  music: [
    'music', 'song', 'audio', 'sound', 'melody', 'composition', 'suno', 'udio',
    'soundraw', 'aiva', 'amper', 'mubert', 'beatoven', 'loudly', 'boomy',
    'instrumental', 'vocal', 'lyrics', 'beat', 'rhythm', 'harmony', 'chord',
    'genre', 'rock', 'jazz', 'classical', 'hip hop', 'electronic', 'pop',
    'producer', 'dj', 'mixing', 'mastering', 'studio', 'recording'
  ],
  
  trading: [
    'trader', 'trading', 'stock', 'crypto', 'bitcoin', 'ethereum', 'forex',
    'investment', 'portfolio', 'market', 'bull', 'bear', 'chart', 'technical',
    'fundamental', 'dividend', 'hedge', 'futures', 'options', 'commodity',
    'currency', 'exchange', 'broker', 'wallet', 'defi', 'nft', 'blockchain'
  ],
  
  finance: [
    'finance', 'financial', 'money', 'banking', 'credit', 'loan', 'mortgage',
    'insurance', 'tax', 'accounting', 'budget', 'savings', 'wealth', 'asset',
    'liability', 'equity', 'cash flow', 'roi', 'interest', 'compound'
  ],
  
  business: [
    'business', 'startup', 'entrepreneur', 'company', 'enterprise', 'corporate',
    'management', 'strategy', 'marketing', 'sales', 'revenue', 'profit', 'growth',
    'scaling', 'pitch', 'investor', 'venture', 'founder', 'ceo', 'executive',
    'productivity', 'workflow', 'automation', 'efficiency', 'optimization'
  ],
  
  coding: [
    'code', 'coding', 'programming', 'developer', 'software', 'engineer',
    'javascript', 'python', 'react', 'node', 'api', 'database', 'frontend',
    'backend', 'fullstack', 'devops', 'github', 'git', 'deploy', 'debug',
    'algorithm', 'data structure', 'framework', 'library', 'package', 'module'
  ],
  
  security: [
    'security', 'cyber', 'hack', 'hacker', 'privacy', 'encryption', 'firewall',
    'vpn', 'antivirus', 'malware', 'phishing', 'breach', 'vulnerability',
    'penetration', 'forensic', 'authentication', 'password', 'two-factor'
  ],
  
  health: [
    'health', 'medical', 'doctor', 'nurse', 'hospital', 'clinic', 'diagnosis',
    'treatment', 'therapy', 'medicine', 'pharmaceutical', 'drug', 'prescription',
    'symptom', 'disease', 'condition', 'patient', 'wellness', 'nutrition', 'diet',
    'fitness', 'exercise', 'workout', 'gym', 'mental health', 'anxiety', 'depression'
  ],
  
  legal: [
    'legal', 'law', 'lawyer', 'attorney', 'court', 'judge', 'litigation',
    'contract', 'agreement', 'compliance', 'regulation', 'rights', 'lawsuit',
    'defense', 'prosecution', 'verdict', 'settlement', 'intellectual property'
  ],
  
  writing: [
    'writer', 'writing', 'book', 'author', 'novel', 'story', 'blog', 'article',
    'content', 'copywriting', 'screenplay', 'script', 'poem', 'essay', 'journal',
    'publish', 'editor', 'draft', 'manuscript', 'chapter', 'narrative', 'plot'
  ],
  
  gaming: [
    'game', 'gaming', 'gamer', 'esport', 'stream', 'twitch', 'console', 'pc',
    'mobile game', 'rpg', 'fps', 'mmorpg', 'strategy', 'puzzle', 'adventure',
    'multiplayer', 'single player', 'level', 'quest', 'achievement', 'leaderboard'
  ],
  
  // Web3 & Blockchain keywords
  web3: [
    'web3', 'web 3', 'blockchain', 'crypto', 'cryptocurrency', 'bitcoin', 'ethereum',
    'solana', 'polygon', 'nft', 'defi', 'decentralized', 'decentralised', 'wallet',
    'metamask', 'phantom', 'coinbase', 'token', 'smart contract', 'dao', 'dapp',
    'future of finance', 'digital asset', 'mint', 'minting', 'decentralized banking', 'fair world', 'financial freedom',
    'worldpeace', 'worldtrade', 'transfermoney', 'transfercoin', 'cashtransfer',
    'domain', 'freename', 'unstoppable', 'ens', '.eth', '.sol', '.crypto'
  ]
};

// Get all sibling categories for a search type (for mutual boosting)
export const getSiblingCategories = (searchType: string): string[] => {
  return SIBLING_CATEGORIES[searchType] || [];
};

// Get the family a category belongs to
export const getCategoryFamily = (category: string): string[] => {
  for (const [family, members] of Object.entries(CATEGORY_FAMILIES)) {
    if (members.includes(category)) {
      return members;
    }
  }
  return [];
};

// Check if two categories are siblings (should heavily boost each other)
export const areSiblingCategories = (cat1: string, cat2: string): boolean => {
  const siblings1 = SIBLING_CATEGORIES[cat1] || [];
  const siblings2 = SIBLING_CATEGORIES[cat2] || [];
  return siblings1.includes(cat2) || siblings2.includes(cat1);
};

// Check if two categories are in the same family (should moderately boost)
export const areInSameFamily = (cat1: string, cat2: string): boolean => {
  const family1 = getCategoryFamily(cat1);
  const family2 = getCategoryFamily(cat2);
  return family1.length > 0 && family1.some(f => family2.includes(f));
};

// Detect tool category from title using extensive keyword matching
export const detectToolCategoryFromTitle = (title: string): string[] => {
  const lowerTitle = title.toLowerCase();
  const detectedCategories: string[] = [];
  
  for (const [category, keywords] of Object.entries(CATEGORY_TITLE_KEYWORDS)) {
    if (keywords.some(keyword => lowerTitle.includes(keyword))) {
      detectedCategories.push(category);
    }
  }
  
  return detectedCategories;
};

// Get boost/penalty score based on category relationships
export const getCategoryRelationshipScore = (
  searchCategory: string,
  toolCategories: string[]
): number => {
  let score = 0;
  
  for (const toolCat of toolCategories) {
    // Exact match - highest boost
    if (toolCat === searchCategory) {
      score += 80000;
    }
    // Sibling category - high boost
    else if (areSiblingCategories(searchCategory, toolCat)) {
      score += 70000;
    }
    // Same family - moderate boost
    else if (areInSameFamily(searchCategory, toolCat)) {
      score += 30000;
    }
  }
  
  // If no relationship found, apply penalty
  if (score === 0 && toolCategories.length > 0) {
    // Check if it's a completely unrelated category
    const searchFamily = getCategoryFamily(searchCategory);
    const isCompletelyUnrelated = !toolCategories.some(tc => 
      searchFamily.includes(tc) || areSiblingCategories(searchCategory, tc)
    );
    
    if (isCompletelyUnrelated) {
      score = -60000; // Heavy penalty for unrelated
    }
  }
  
  return score;
};
