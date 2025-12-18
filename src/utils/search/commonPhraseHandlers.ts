// 50 COMMON SEARCH PHRASE HANDLERS
// Maps user intent phrases to the best matching tools

export interface PhraseHandler {
  triggers: string[];
  keywords: string[];
  priorityTools: string[];
  relatedCategories: string[];
}

// 50 commonly searched phrases mapped to tools
export const COMMON_PHRASE_HANDLERS: Record<string, PhraseHandler> = {
  // ===== WRITING & CONTENT =====
  writeBook: {
    triggers: ['write a book', 'write book', 'book writing', 'write my book', 'author a book', 'create a book', 'novel writing', 'write novel'],
    keywords: ['book', 'writer', 'author', 'novel', 'manuscript', 'chapter', 'publish', 'story'],
    priorityTools: ['BOOK WRITER GPT', 'Movie Script Writer GPT', 'Children\'s Picture Book Maker GPT'],
    relatedCategories: ['Writing & Text Generation', 'Content Creation']
  },
  
  writeScript: {
    triggers: ['write a script', 'write script', 'screenplay', 'movie script', 'film script', 'write screenplay'],
    keywords: ['script', 'screenplay', 'movie', 'film', 'scene', 'dialogue', 'director'],
    priorityTools: ['Movie Script Writer GPT', '🎭 Playwriter GPT', 'Movie Maker Studio AI SUITE'],
    relatedCategories: ['Writing & Text Generation', 'Video & Multimedia']
  },
  
  writeBlog: {
    triggers: ['write a blog', 'write blog', 'blog post', 'blog article', 'blogging', 'create blog'],
    keywords: ['blog', 'article', 'post', 'content', 'seo', 'writer'],
    priorityTools: ['Article and Blog Rewriter GPT', 'BOOK WRITER GPT'],
    relatedCategories: ['Writing & Text Generation', 'Content Creation', 'Marketing Tools']
  },
  
  writeResume: {
    triggers: ['write a resume', 'write resume', 'create resume', 'resume help', 'cv writing', 'job application'],
    keywords: ['resume', 'cv', 'job', 'career', 'employment', 'application', 'interview'],
    priorityTools: ['The Resume & Job Finder Ai Suite', 'Resume Enhancer GPT', 'Resume Specialist GPT'],
    relatedCategories: ['Business & Productivity', 'Career Tools']
  },
  
  // ===== VIDEO & MULTIMEDIA =====
  makeVideo: {
    triggers: ['make a video', 'make video', 'create video', 'video maker', 'generate video', 'ai video', 'text to video'],
    keywords: ['video', 'film', 'movie', 'animation', 'sora', 'runway', 'pika', 'luma', 'kling'],
    priorityTools: ['Sora', 'Runway', 'Pika', 'Luma Dream Machine', 'Kling AI', 'Movie Maker Studio AI SUITE'],
    relatedCategories: ['Video & Multimedia', 'AI Video Generation']
  },
  
  editVideo: {
    triggers: ['edit video', 'video editing', 'video editor', 'cut video', 'trim video'],
    keywords: ['edit', 'editing', 'editor', 'cut', 'trim', 'splice', 'premiere', 'davinci'],
    priorityTools: ['Runway', 'Descript', 'CapCut', 'Movie Maker Studio AI SUITE'],
    relatedCategories: ['Video & Multimedia', 'Video Editing']
  },
  
  makeMusicVideo: {
    triggers: ['make music video', 'music video', 'create music video', 'music video maker'],
    keywords: ['music video', 'mv', 'music', 'video', 'artist', 'song'],
    priorityTools: ['Music Video Maker AI Studio', 'Movie Maker Studio AI SUITE'],
    relatedCategories: ['Video & Multimedia', 'Music & Audio']
  },
  
  // ===== IMAGE & DESIGN =====
  generateImage: {
    triggers: ['generate image', 'create image', 'make image', 'ai image', 'text to image', 'image generator'],
    keywords: ['image', 'picture', 'photo', 'art', 'midjourney', 'dalle', 'stable diffusion', 'leonardo'],
    priorityTools: ['Midjourney', 'DALL-E 3', 'Stable Diffusion', 'Leonardo AI', 'Ideogram', 'Flux'],
    relatedCategories: ['Image & Design', 'AI Image Generation']
  },
  
  createLogo: {
    triggers: ['create logo', 'make logo', 'logo design', 'design logo', 'logo maker', 'brand logo'],
    keywords: ['logo', 'brand', 'branding', 'identity', 'design', 'graphic'],
    priorityTools: ['Graphic & Cover Design GPT', 'Canva', 'Looka', 'Logomaster'],
    relatedCategories: ['Image & Design', 'Graphic Design']
  },
  
  editPhoto: {
    triggers: ['edit photo', 'photo editing', 'edit picture', 'retouch photo', 'photo editor'],
    keywords: ['photo', 'edit', 'retouch', 'enhance', 'filter', 'photoshop'],
    priorityTools: ['Adobe Firefly', 'Canva', 'Remove.bg', 'Photoroom'],
    relatedCategories: ['Image & Design', 'Photo Editing']
  },
  
  removeBackground: {
    triggers: ['remove background', 'background removal', 'cut out background', 'transparent background'],
    keywords: ['background', 'remove', 'transparent', 'cutout', 'extract'],
    priorityTools: ['Remove.bg', 'Photoroom', 'Canva'],
    relatedCategories: ['Image & Design', 'Photo Editing']
  },
  
  // ===== MUSIC & AUDIO =====
  createMusic: {
    triggers: ['create music', 'make music', 'generate music', 'ai music', 'music generator', 'compose music'],
    keywords: ['music', 'song', 'melody', 'composition', 'suno', 'udio', 'beat'],
    priorityTools: ['Suno', 'Udio', 'Soundraw', 'AIVA', 'Mubert', 'Music Melodies & Lessons GPT'],
    relatedCategories: ['Music & Audio', 'AI Music Generation']
  },
  
  textToSpeech: {
    triggers: ['text to speech', 'tts', 'convert text to audio', 'read text aloud', 'voice over'],
    keywords: ['text to speech', 'tts', 'voice', 'speech', 'audio', 'narration'],
    priorityTools: ['ElevenLabs', 'Play.ht', 'Murf', 'Speechify'],
    relatedCategories: ['Music & Audio', 'Voice & Speech']
  },
  
  cloneVoice: {
    triggers: ['clone voice', 'voice cloning', 'copy voice', 'replicate voice', 'ai voice'],
    keywords: ['voice', 'clone', 'cloning', 'speech', 'elevenlabs', 'synthesis'],
    priorityTools: ['ElevenLabs', 'Play.ht', 'Resemble AI', 'Descript'],
    relatedCategories: ['Music & Audio', 'Voice & Speech']
  },
  
  transcribeAudio: {
    triggers: ['transcribe audio', 'audio transcription', 'speech to text', 'convert audio to text'],
    keywords: ['transcribe', 'transcription', 'speech to text', 'audio', 'text'],
    priorityTools: ['Otter.ai', 'Descript', 'Whisper', 'Rev'],
    relatedCategories: ['Music & Audio', 'Transcription']
  },
  
  // ===== CODING & DEVELOPMENT =====
  writeCode: {
    triggers: ['write code', 'code for me', 'generate code', 'ai coding', 'help me code', 'coding help'],
    keywords: ['code', 'coding', 'programming', 'developer', 'software', 'github', 'copilot'],
    priorityTools: ['GitHub Copilot', 'Cursor', 'Replit', 'Claude', 'ChatGPT'],
    relatedCategories: ['Coding & Development', 'AI Coding']
  },
  
  learnCoding: {
    triggers: ['learn coding', 'learn to code', 'learn programming', 'coding tutorial', 'how to code'],
    keywords: ['learn', 'coding', 'programming', 'tutorial', 'course', 'beginner'],
    priorityTools: ['LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'COLLEGE DEGREE GPT'],
    relatedCategories: ['Education & Learning', 'Coding & Development']
  },
  
  buildWebsite: {
    triggers: ['build website', 'create website', 'make website', 'website builder', 'web design'],
    keywords: ['website', 'web', 'site', 'builder', 'landing page', 'webflow'],
    priorityTools: ['Webflow', 'Framer', 'Wix', 'Squarespace', 'Lovable'],
    relatedCategories: ['Coding & Development', 'Website Building']
  },
  
  // ===== BUSINESS & FINANCE =====
  startBusiness: {
    triggers: ['start a business', 'start business', 'new business', 'business idea', 'entrepreneur'],
    keywords: ['business', 'startup', 'entrepreneur', 'company', 'venture', 'founder'],
    priorityTools: ['Business Plan Generator GPT', 'Startup Validator GPT', 'MicroSaaS GPT'],
    relatedCategories: ['Business & Productivity', 'Startup Tools']
  },
  
  businessPlan: {
    triggers: ['business plan', 'write business plan', 'create business plan', 'business strategy'],
    keywords: ['business plan', 'strategy', 'planning', 'forecast', 'projection'],
    priorityTools: ['Business Plan Generator GPT', 'Startup Validator GPT'],
    relatedCategories: ['Business & Productivity', 'Business Planning']
  },
  
  makeMoney: {
    triggers: ['make money', 'earn money', 'side hustle', 'passive income', 'how to make money'],
    keywords: ['money', 'income', 'earn', 'profit', 'revenue', 'hustle'],
    priorityTools: ['MicroSaaS GPT', 'Business Plan Generator GPT', 'Trader GPT'],
    relatedCategories: ['Business & Productivity', 'Finance & Trading']
  },
  
  tradingHelp: {
    triggers: ['trading help', 'stock trading', 'crypto trading', 'day trading', 'invest money'],
    keywords: ['trading', 'stock', 'crypto', 'investment', 'forex', 'market'],
    priorityTools: ['Trader GPT', 'TradingView', 'Composer'],
    relatedCategories: ['Finance & Trading', 'Investment Tools']
  },
  
  taxHelp: {
    triggers: ['tax help', 'file taxes', 'tax preparation', 'tax advice', 'do my taxes'],
    keywords: ['tax', 'taxes', 'irs', 'deduction', 'filing', 'return'],
    priorityTools: ['Taxes GPT', 'TurboTax'],
    relatedCategories: ['Finance & Trading', 'Tax Tools']
  },
  
  insuranceHelp: {
    triggers: ['insurance help', 'insurance claim', 'file claim', 'insurance advice'],
    keywords: ['insurance', 'claim', 'policy', 'coverage', 'premium'],
    priorityTools: ['Insurance Claims GPT'],
    relatedCategories: ['Finance & Trading', 'Insurance Tools']
  },
  
  // ===== EDUCATION & LEARNING =====
  learnSkill: {
    triggers: ['learn a skill', 'learn new skill', 'skill learning', 'teach me', 'how to learn'],
    keywords: ['learn', 'skill', 'tutorial', 'course', 'training', 'education'],
    priorityTools: ['LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'COLLEGE DEGREE GPT'],
    relatedCategories: ['Education & Learning', 'Skill Development']
  },
  
  takeCourse: {
    triggers: ['take a course', 'online course', 'free course', 'learn online', 'course learning'],
    keywords: ['course', 'class', 'lesson', 'online', 'learn', 'education'],
    priorityTools: ['LEARN ANY COURSE GPT', 'Course Maker GPT', 'COLLEGE DEGREE GPT'],
    relatedCategories: ['Education & Learning', 'Online Courses']
  },
  
  createCourse: {
    triggers: ['create a course', 'make course', 'course creator', 'build course', 'design course'],
    keywords: ['course', 'create', 'curriculum', 'lesson', 'module', 'training'],
    priorityTools: ['Course Maker GPT', 'Quiz Maker Ai'],
    relatedCategories: ['Education & Learning', 'Course Creation']
  },
  
  homeschool: {
    triggers: ['homeschool', 'home school', 'homeschooling', 'teach kids', 'educate children'],
    keywords: ['homeschool', 'home school', 'children', 'kids', 'education', 'parent'],
    priorityTools: ['Home-Schooling Assistant GPT', 'LEARN ANY COURSE GPT', 'Quiz Maker Ai'],
    relatedCategories: ['Education & Learning', 'Homeschool']
  },
  
  // ===== HEALTH & WELLNESS =====
  healthAdvice: {
    triggers: ['health advice', 'medical advice', 'health help', 'doctor help', 'am i sick'],
    keywords: ['health', 'medical', 'doctor', 'symptoms', 'diagnosis', 'wellness'],
    priorityTools: ['Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT'],
    relatedCategories: ['Health & Wellness', 'Medical Tools']
  },
  
  mentalHealth: {
    triggers: ['mental health', 'anxiety help', 'depression help', 'therapy', 'mental wellness'],
    keywords: ['mental', 'anxiety', 'depression', 'therapy', 'wellness', 'stress'],
    priorityTools: ['Mental Wellness GPT', 'Personalized DR. GPT (Doctor GPT)'],
    relatedCategories: ['Health & Wellness', 'Mental Health']
  },
  
  petHealth: {
    triggers: ['pet health', 'vet help', 'veterinarian', 'dog health', 'cat health', 'pet advice'],
    keywords: ['pet', 'vet', 'veterinarian', 'dog', 'cat', 'animal', 'health'],
    priorityTools: ['Veterinarian GPT', 'Pet Advisor GPT'],
    relatedCategories: ['Health & Wellness', 'Pet Care']
  },
  
  // ===== SPIRITUAL & MYSTICAL =====
  tarotReading: {
    triggers: ['tarot reading', 'tarot cards', 'fortune telling', 'psychic reading', 'read my fortune'],
    keywords: ['tarot', 'fortune', 'psychic', 'reading', 'cards', 'divination'],
    priorityTools: ['Fortune Teller GPT', 'Oraculum – The Revealer of Hidden "Truths"'],
    relatedCategories: ['Spirituality & Philosophy', 'Divination']
  },
  
  dreamMeaning: {
    triggers: ['dream meaning', 'interpret dream', 'dream interpretation', 'what does my dream mean'],
    keywords: ['dream', 'interpret', 'meaning', 'symbol', 'subconscious'],
    priorityTools: ['Dream Interpreter GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Dream Analysis']
  },
  
  talkToGod: {
    triggers: ['talk to god', 'speak to god', 'divine guidance', 'spiritual guidance', 'talk to gods'],
    keywords: ['god', 'gods', 'divine', 'spiritual', 'deity', 'prayer'],
    priorityTools: ['TALK TO THE GODS GPT', 'Sophia Aeterna AI', '🕊️Mary Magdalene GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Religious']
  },
  
  meditation: {
    triggers: ['meditation help', 'how to meditate', 'guided meditation', 'mindfulness', 'inner peace'],
    keywords: ['meditation', 'mindfulness', 'peace', 'zen', 'calm', 'relax'],
    priorityTools: ['ALAN WATTS GPT', 'Mental Wellness GPT', 'Sophia Aeterna AI'],
    relatedCategories: ['Spirituality & Philosophy', 'Wellness']
  },
  
  astrology: {
    triggers: ['astrology', 'horoscope', 'zodiac', 'birth chart', 'star sign', 'my horoscope'],
    keywords: ['astrology', 'horoscope', 'zodiac', 'star', 'planet', 'birth chart'],
    priorityTools: ['Fortune Teller GPT', 'Soul Map GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Astrology']
  },
  
  // ===== FOOD & COOKING =====
  cookRecipe: {
    triggers: ['cook recipe', 'recipe help', 'what to cook', 'cooking help', 'meal ideas', 'dinner ideas'],
    keywords: ['cook', 'recipe', 'meal', 'food', 'dinner', 'chef', 'ingredient'],
    priorityTools: ['Chef "Sizzle" AI Culinary Assistant', 'Recipe Generator'],
    relatedCategories: ['Food & Cooking', 'Recipe Tools']
  },
  
  mixDrinks: {
    triggers: ['mix drinks', 'cocktail recipe', 'bartender', 'make cocktails', 'drink recipes'],
    keywords: ['cocktail', 'drink', 'bartender', 'mixology', 'alcohol', 'bar'],
    priorityTools: ['Mixologist GPT'],
    relatedCategories: ['Food & Cooking', 'Beverages']
  },
  
  // ===== LEGAL =====
  legalHelp: {
    triggers: ['legal help', 'lawyer help', 'legal advice', 'need a lawyer', 'legal question'],
    keywords: ['legal', 'lawyer', 'attorney', 'law', 'court', 'rights'],
    priorityTools: ['Public Defender GPT', 'Legal Draftsmith GPT', 'Contract Review Bot'],
    relatedCategories: ['Legal & Government', 'Legal Tools']
  },
  
  contractHelp: {
    triggers: ['contract help', 'review contract', 'contract review', 'write contract', 'legal contract'],
    keywords: ['contract', 'agreement', 'legal', 'terms', 'clause', 'review'],
    priorityTools: ['Contract Review Bot', 'Legal Draftsmith GPT'],
    relatedCategories: ['Legal & Government', 'Contract Tools']
  },
  
  // ===== TRAVEL =====
  planTrip: {
    triggers: ['plan trip', 'plan vacation', 'travel planning', 'where to travel', 'vacation ideas'],
    keywords: ['travel', 'trip', 'vacation', 'destination', 'flight', 'hotel'],
    priorityTools: ['Travel Advisor GPT'],
    relatedCategories: ['Travel & Lifestyle', 'Travel Planning']
  },
  
  // ===== HOME & DIY =====
  homeRenovation: {
    triggers: ['home renovation', 'renovate house', 'home improvement', 'diy project', 'fix house'],
    keywords: ['renovation', 'home', 'house', 'repair', 'diy', 'improvement'],
    priorityTools: ['Home Renovator GPT 🏡🔧'],
    relatedCategories: ['Home & DIY', 'Renovation Tools']
  },
  
  // ===== PRESENTATIONS =====
  createPresentation: {
    triggers: ['create presentation', 'make presentation', 'powerpoint', 'slide deck', 'ppt maker'],
    keywords: ['presentation', 'powerpoint', 'slides', 'ppt', 'deck', 'keynote'],
    priorityTools: ['PPTx Powerpoint Maker GPT', 'Gamma', 'Beautiful.ai'],
    relatedCategories: ['Business & Productivity', 'Presentation Tools']
  },
  
  // ===== DATA & RESEARCH =====
  analyzeData: {
    triggers: ['analyze data', 'data analysis', 'research data', 'data insights', 'statistics'],
    keywords: ['data', 'analysis', 'analytics', 'statistics', 'research', 'insights'],
    priorityTools: ['Data Research Analysis Report GPT', 'Julius AI'],
    relatedCategories: ['Data & Analytics', 'Research Tools']
  },
  
  factCheck: {
    triggers: ['fact check', 'is this true', 'verify information', 'check facts', 'truth check'],
    keywords: ['fact', 'check', 'verify', 'true', 'false', 'information'],
    priorityTools: ['FACT CHECKER GPT', 'Probability GPT'],
    relatedCategories: ['Research & Academic', 'Fact Checking']
  },
  
  // ===== SOCIAL & MARKETING =====
  socialMedia: {
    triggers: ['social media', 'social post', 'instagram', 'tiktok content', 'social marketing'],
    keywords: ['social', 'media', 'instagram', 'tiktok', 'facebook', 'twitter', 'post'],
    priorityTools: ['Canva', 'Buffer', 'Hootsuite'],
    relatedCategories: ['Marketing Tools', 'Social Media']
  },
  
  seoHelp: {
    triggers: ['seo help', 'seo optimization', 'rank on google', 'search optimization', 'website seo'],
    keywords: ['seo', 'search', 'optimization', 'google', 'ranking', 'keywords'],
    priorityTools: ['Surfer SEO', 'Semrush', 'Ahrefs'],
    relatedCategories: ['Marketing Tools', 'SEO Tools']
  },
  
  // ===== AI CHAT =====
  chatWithAI: {
    triggers: ['chat with ai', 'talk to ai', 'ai assistant', 'ai chatbot', 'ai help'],
    keywords: ['chat', 'ai', 'assistant', 'chatbot', 'gpt', 'claude'],
    priorityTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'GODMODE GPT'],
    relatedCategories: ['AI Chatbots', 'AI Assistants']
  },
  
  summarizeText: {
    triggers: ['summarize text', 'summary', 'summarize article', 'tldr', 'quick summary'],
    keywords: ['summarize', 'summary', 'tldr', 'condense', 'brief'],
    priorityTools: ['ChatGPT', 'Claude', 'Perplexity', 'QuillBot'],
    relatedCategories: ['AI Chatbots', 'Writing Tools']
  },
  
  translateText: {
    triggers: ['translate', 'translation', 'translate text', 'language translation', 'translator'],
    keywords: ['translate', 'translation', 'language', 'translator', 'interpret'],
    priorityTools: ['DeepL', 'Google Translate', 'ChatGPT'],
    relatedCategories: ['AI Chatbots', 'Translation Tools']
  }
};

// Get matching phrase handler for a search term
export const getMatchingPhraseHandler = (searchTerm: string): PhraseHandler | null => {
  const lowerSearch = searchTerm.toLowerCase();
  
  for (const [key, handler] of Object.entries(COMMON_PHRASE_HANDLERS)) {
    if (handler.triggers.some(trigger => lowerSearch.includes(trigger))) {
      return handler;
    }
  }
  
  return null;
};

// Check if a tool matches a phrase handler
export const toolMatchesPhraseHandler = (
  tool: { title?: string; description?: string; category?: string; tags?: string[] },
  handler: PhraseHandler
): boolean => {
  const lowerTitle = (tool.title || '').toLowerCase();
  const lowerDesc = (tool.description || '').toLowerCase();
  const lowerCategory = (tool.category || '').toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  const allText = `${lowerTitle} ${lowerDesc} ${lowerCategory} ${lowerTags}`;
  
  // Check if tool is in priority list
  if (handler.priorityTools.some(pt => lowerTitle.includes(pt.toLowerCase()))) {
    return true;
  }
  
  // Check if tool matches keywords
  if (handler.keywords.some(kw => allText.includes(kw))) {
    return true;
  }
  
  // Check if tool is in related categories
  if (handler.relatedCategories.some(cat => lowerCategory.includes(cat.toLowerCase()))) {
    return true;
  }
  
  return false;
};

// Score a tool based on phrase handler relevance
export const scorePhraseHandlerMatch = (
  tool: { title?: string; description?: string; category?: string; tags?: string[] },
  handler: PhraseHandler
): number => {
  let score = 0;
  const lowerTitle = (tool.title || '').toLowerCase();
  const lowerDesc = (tool.description || '').toLowerCase();
  const lowerCategory = (tool.category || '').toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  // HIGHEST: Tool is in priority list (exact match)
  for (let i = 0; i < handler.priorityTools.length; i++) {
    const priorityTool = handler.priorityTools[i].toLowerCase();
    if (lowerTitle.includes(priorityTool) || lowerTitle === priorityTool) {
      score += 100000 - (i * 5000); // Higher priority for tools listed first
    }
  }
  
  // HIGH: Keywords in title
  const titleKeywordMatches = handler.keywords.filter(kw => lowerTitle.includes(kw));
  score += titleKeywordMatches.length * 30000;
  
  // MEDIUM: Keywords in description
  const descKeywordMatches = handler.keywords.filter(kw => lowerDesc.includes(kw));
  score += descKeywordMatches.length * 10000;
  
  // MEDIUM: Keywords in tags
  const tagKeywordMatches = handler.keywords.filter(kw => lowerTags.includes(kw));
  score += tagKeywordMatches.length * 8000;
  
  // LOWER: Related category match
  if (handler.relatedCategories.some(cat => lowerCategory.includes(cat.toLowerCase()))) {
    score += 5000;
  }
  
  return score;
};
