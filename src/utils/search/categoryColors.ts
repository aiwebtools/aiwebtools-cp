// CATEGORY COLOR CODING SYSTEM
// Maps categories to distinctive colors for visual identification
// This strengthens search intelligence by providing visual category cues

// Primary category colors - distinctive and memorable
export const CATEGORY_COLORS: Record<string, { bg: string; border: string; glow: string }> = {
  // Knowledge & Wisdom family - warm spiritual colors
  spiritual: {
    bg: 'from-rose-600 to-pink-500',
    border: 'border-rose-400/50',
    glow: 'shadow-rose-500/30'
  },
  philosophy: {
    bg: 'from-purple-600 to-violet-500',
    border: 'border-purple-400/50',
    glow: 'shadow-purple-500/30'
  },
  history: {
    bg: 'from-amber-600 to-orange-500',
    border: 'border-amber-400/50',
    glow: 'shadow-amber-500/30'
  },
  education: {
    bg: 'from-blue-600 to-indigo-500',
    border: 'border-blue-400/50',
    glow: 'shadow-blue-500/30'
  },
  science: {
    bg: 'from-yellow-500 to-amber-400',
    border: 'border-yellow-400/50',
    glow: 'shadow-yellow-500/30'
  },
  research: {
    bg: 'from-teal-600 to-cyan-500',
    border: 'border-teal-400/50',
    glow: 'shadow-teal-500/30'
  },

  // Creative & Media family - vibrant colors
  video: {
    bg: 'from-red-600 to-rose-500',
    border: 'border-red-400/50',
    glow: 'shadow-red-500/30'
  },
  image: {
    bg: 'from-fuchsia-600 to-pink-500',
    border: 'border-fuchsia-400/50',
    glow: 'shadow-fuchsia-500/30'
  },
  music: {
    bg: 'from-violet-600 to-purple-500',
    border: 'border-violet-400/50',
    glow: 'shadow-violet-500/30'
  },
  audio: {
    bg: 'from-indigo-600 to-violet-500',
    border: 'border-indigo-400/50',
    glow: 'shadow-indigo-500/30'
  },
  design: {
    bg: 'from-pink-600 to-rose-500',
    border: 'border-pink-400/50',
    glow: 'shadow-pink-500/30'
  },
  art: {
    bg: 'from-orange-600 to-red-500',
    border: 'border-orange-400/50',
    glow: 'shadow-orange-500/30'
  },

  // Business & Finance family - professional colors
  trading: {
    bg: 'from-green-600 to-emerald-500',
    border: 'border-green-400/50',
    glow: 'shadow-green-500/30'
  },
  finance: {
    bg: 'from-emerald-600 to-teal-500',
    border: 'border-emerald-400/50',
    glow: 'shadow-emerald-500/30'
  },
  business: {
    bg: 'from-slate-600 to-gray-500',
    border: 'border-slate-400/50',
    glow: 'shadow-slate-500/30'
  },
  productivity: {
    bg: 'from-sky-600 to-blue-500',
    border: 'border-sky-400/50',
    glow: 'shadow-sky-500/30'
  },
  marketing: {
    bg: 'from-orange-600 to-amber-500',
    border: 'border-orange-400/50',
    glow: 'shadow-orange-500/30'
  },

  // Technical family - tech colors
  coding: {
    bg: 'from-lime-600 to-green-500',
    border: 'border-lime-400/50',
    glow: 'shadow-lime-500/30'
  },
  development: {
    bg: 'from-cyan-600 to-teal-500',
    border: 'border-cyan-400/50',
    glow: 'shadow-cyan-500/30'
  },
  security: {
    bg: 'from-red-700 to-rose-600',
    border: 'border-red-500/50',
    glow: 'shadow-red-600/30'
  },
  automation: {
    bg: 'from-blue-700 to-indigo-600',
    border: 'border-blue-500/50',
    glow: 'shadow-blue-600/30'
  },
  ai: {
    bg: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-400/50',
    glow: 'shadow-cyan-500/30'
  },
  data: {
    bg: 'from-teal-600 to-emerald-500',
    border: 'border-teal-400/50',
    glow: 'shadow-teal-500/30'
  },

  // Web3 & Blockchain family - crypto colors
  web3: {
    bg: 'from-purple-600 to-blue-500',
    border: 'border-purple-400/50',
    glow: 'shadow-purple-500/30'
  },
  blockchain: {
    bg: 'from-blue-600 to-indigo-500',
    border: 'border-blue-400/50',
    glow: 'shadow-blue-500/30'
  },
  crypto: {
    bg: 'from-amber-500 to-yellow-400',
    border: 'border-amber-400/50',
    glow: 'shadow-amber-500/30'
  },

  // Lifestyle family
  health: {
    bg: 'from-green-500 to-teal-400',
    border: 'border-green-400/50',
    glow: 'shadow-green-500/30'
  },
  wellness: {
    bg: 'from-teal-500 to-cyan-400',
    border: 'border-teal-400/50',
    glow: 'shadow-teal-500/30'
  },
  fitness: {
    bg: 'from-orange-500 to-red-400',
    border: 'border-orange-400/50',
    glow: 'shadow-orange-500/30'
  },
  travel: {
    bg: 'from-sky-500 to-blue-400',
    border: 'border-sky-400/50',
    glow: 'shadow-sky-500/30'
  },
  food: {
    bg: 'from-amber-500 to-orange-400',
    border: 'border-amber-400/50',
    glow: 'shadow-amber-500/30'
  },
  entertainment: {
    bg: 'from-purple-500 to-pink-400',
    border: 'border-purple-400/50',
    glow: 'shadow-purple-500/30'
  },

  // Professional family
  legal: {
    bg: 'from-slate-700 to-gray-600',
    border: 'border-slate-500/50',
    glow: 'shadow-slate-600/30'
  },
  medical: {
    bg: 'from-blue-600 to-cyan-500',
    border: 'border-blue-400/50',
    glow: 'shadow-blue-500/30'
  },

  // Writing family
  writing: {
    bg: 'from-indigo-600 to-blue-500',
    border: 'border-indigo-400/50',
    glow: 'shadow-indigo-500/30'
  },

  // Gaming family
  gaming: {
    bg: 'from-purple-600 to-indigo-500',
    border: 'border-purple-400/50',
    glow: 'shadow-purple-500/30'
  },

  // Default
  default: {
    bg: 'from-gray-600 to-slate-500',
    border: 'border-gray-400/50',
    glow: 'shadow-gray-500/30'
  }
};

// Category icons/symbols for visual distinction
export const CATEGORY_ICONS: Record<string, string> = {
  spiritual: '🕊️',
  philosophy: '🧠',
  history: '📜',
  education: '🎓',
  science: '🔬',
  research: '📊',
  video: '🎬',
  image: '🎨',
  music: '🎵',
  audio: '🎧',
  design: '✨',
  art: '🖼️',
  trading: '📈',
  finance: '💰',
  business: '💼',
  productivity: '⚡',
  marketing: '📣',
  coding: '💻',
  development: '🔧',
  security: '🔒',
  automation: '🤖',
  ai: '🤖',
  data: '📊',
  health: '💚',
  wellness: '🧘',
  fitness: '💪',
  travel: '✈️',
  food: '🍳',
  entertainment: '🎮',
  legal: '⚖️',
  medical: '🏥',
  writing: '✍️',
  gaming: '🎮',
  // Web3 & Blockchain
  web3: '🌐',
  blockchain: '⛓️',
  crypto: '🪙',
  default: '🔧'
};

// Detect category from tool data
export const detectToolCategory = (tool: { 
  title?: string; 
  category?: string; 
  tags?: string[];
  description?: string;
}): string => {
  const lowerTitle = (tool.title || '').toLowerCase();
  const lowerCategory = (tool.category || '').toLowerCase();
  const lowerDesc = (tool.description || '').toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  const combinedText = `${lowerTitle} ${lowerCategory} ${lowerDesc} ${lowerTags}`;
  
  // Priority detection order (most specific first)
  const detectionRules: [string, string[]][] = [
    // Web3 detection (check early since it's specific)
    ['web3', ['web3', 'web 3', 'blockchain', 'decentralized', 'nft', 'defi', 'wallet', 'metamask', 'phantom', 'coinbase wallet', 'solana', 'polygon', 'ethereum', '.worldpeace', '.worldtrade', '.transfermoney', 'freename', 'domain nft', 'web3 domain', 'decentralized banking', 'fair world', 'future of finance']],
    ['spiritual', ['spiritual', 'soul', 'divine', 'god', 'buddha', 'meditation', 'prayer', 'faith', 'sacred', 'mystical', 'enlighten', 'consciousness', 'tarot', 'astrology', 'oracle', 'psychic', 'resurrection', 'scripture', 'religious', 'sufi', 'kabbalah', 'gnostic', 'esoteric', 'chakra', 'kundalini', 'mantra', 'temple', 'prophet', 'saint', 'angel']],
    ['philosophy', ['philosophy', 'philosopher', 'socrates', 'plato', 'aristotle', 'nietzsche', 'stoic', 'metaphysics', 'ethics', 'existential', 'wisdom']],
    ['history', ['history', 'historical', 'time machine', 'ancient', 'civilization', 'archaeology', 'heritage', 'dynasty', 'empire', 'medieval', 'renaissance', 'ancestors', 'chronicles']],
    ['science', ['science', 'scientific', 'physics', 'chemistry', 'biology', 'astronomy', 'quantum', 'molecular', 'laboratory', 'experiment', 'genome', 'dna', 'nasa', 'space', 'cosmos', 'stellar', 'planet', 'galaxy']],
    ['education', ['education', 'learn', 'course', 'tutor', 'teach', 'school', 'university', 'college', 'degree', 'student', 'lesson', 'curriculum', 'training', 'academy']],
    ['research', ['research', 'analysis', 'data analysis', 'study', 'academic', 'analytics']],
    ['video', ['video', 'film', 'movie', 'cinema', 'animation', 'sora', 'runway', 'pika', 'luma', 'heygen', 'synthesia', 'trailer', 'scene maker']],
    ['image', ['image', 'picture', 'photo', 'art', 'graphic', 'illustration', 'midjourney', 'dall-e', 'stable diffusion', 'leonardo', 'ideogram', 'flux', 'firefly', 'canva', 'figma', 'sketch', 'drawing', 'painting', 'portrait', 'logo', 'design']],
    ['music', ['music', 'song', 'audio', 'melody', 'suno', 'udio', 'soundraw', 'aiva', 'mubert', 'instrumental', 'vocal', 'lyrics', 'beat', 'rhythm', 'composer']],
    ['trading', ['trader', 'trading', 'stock', 'crypto', 'bitcoin', 'ethereum', 'forex', 'investment', 'portfolio', 'market']],
    ['finance', ['finance', 'financial', 'money', 'banking', 'credit', 'loan', 'tax', 'accounting', 'budget', 'wealth']],
    ['business', ['business', 'startup', 'entrepreneur', 'company', 'enterprise', 'management', 'strategy', 'marketing', 'sales']],
    ['productivity', ['productivity', 'workflow', 'automation', 'efficiency', 'optimization', 'task', 'project management']],
    ['coding', ['code', 'coding', 'programming', 'developer', 'software', 'engineer', 'javascript', 'python', 'react', 'api', 'github']],
    ['security', ['security', 'cyber', 'hack', 'privacy', 'encryption', 'firewall', 'vpn', 'antivirus', 'malware']],
    ['health', ['health', 'medical', 'doctor', 'diagnosis', 'treatment', 'therapy', 'medicine', 'pharmaceutical', 'wellness', 'nutrition', 'fitness', 'mental health']],
    ['legal', ['legal', 'law', 'lawyer', 'attorney', 'court', 'contract', 'compliance', 'rights', 'litigation']],
    ['writing', ['writer', 'writing', 'book', 'author', 'novel', 'story', 'blog', 'article', 'content', 'copywriting', 'screenplay', 'script', 'poem']],
    ['gaming', ['game', 'gaming', 'gamer', 'esport', 'stream', 'twitch', 'rpg', 'fps', 'multiplayer', 'quest']],
    ['entertainment', ['entertainment', 'fun', 'trivia', 'celebrity', 'movie', 'show']],
    ['travel', ['travel', 'trip', 'vacation', 'tourism', 'adventure', 'destination', 'flight', 'hotel']],
    ['food', ['food', 'recipe', 'cooking', 'chef', 'culinary', 'restaurant', 'meal', 'ingredient', 'cuisine']]
  ];
  
  for (const [category, keywords] of detectionRules) {
    if (keywords.some(kw => combinedText.includes(kw))) {
      return category;
    }
  }
  
  return 'default';
};

// Get color styling for a tool
export const getToolCategoryColor = (tool: { 
  title?: string; 
  category?: string; 
  tags?: string[];
  description?: string;
}): { bg: string; border: string; glow: string; icon: string; categoryName: string } => {
  const category = detectToolCategory(tool);
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.default;
  const icon = CATEGORY_ICONS[category] || CATEGORY_ICONS.default;
  
  return {
    ...colors,
    icon,
    categoryName: category
  };
};
