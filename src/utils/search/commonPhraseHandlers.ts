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
  },

  // ===== NICHE QUERIES - ANTIQUES & COLLECTIBLES =====
  appraiseAntiques: {
    triggers: ['appraise antiques', 'antique appraisal', 'value antiques', 'antique worth', 'old items value', 'collectible appraisal'],
    keywords: ['antique', 'appraisal', 'collectible', 'vintage', 'value', 'worth', 'rare'],
    priorityTools: ['Antique and Collectible Appraisal GPT', 'Artwork & Vintage Appraisal GPT'],
    relatedCategories: ['Appraisal Tools', 'Collectibles']
  },

  appraiseArt: {
    triggers: ['appraise art', 'art appraisal', 'artwork value', 'painting worth', 'art valuation'],
    keywords: ['art', 'artwork', 'painting', 'sculpture', 'appraisal', 'value', 'gallery'],
    priorityTools: ['Artwork & Vintage Appraisal GPT', 'Antique and Collectible Appraisal GPT'],
    relatedCategories: ['Appraisal Tools', 'Art']
  },

  sportCards: {
    triggers: ['sports cards', 'card appraisal', 'baseball cards', 'trading cards', 'card value', 'sport card'],
    keywords: ['card', 'sports', 'baseball', 'basketball', 'trading', 'collectible', 'grading'],
    priorityTools: ['Sport Card Appraisal GPT'],
    relatedCategories: ['Appraisal Tools', 'Collectibles']
  },

  // ===== SURVIVAL & PREPAREDNESS =====
  survivalSkills: {
    triggers: ['survival skills', 'survivalist', 'prepping', 'emergency preparedness', 'wilderness survival', 'doomsday prep'],
    keywords: ['survival', 'survivalist', 'prepper', 'emergency', 'wilderness', 'bushcraft', 'disaster'],
    priorityTools: ['Survivalist GPT', 'Self Sufficiency GPT'],
    relatedCategories: ['Survival & Preparedness', 'Emergency Tools']
  },

  selfSufficiency: {
    triggers: ['self sufficiency', 'homesteading', 'off grid', 'live off grid', 'sustainable living', 'self sufficient'],
    keywords: ['homestead', 'self sufficient', 'off grid', 'sustainable', 'farming', 'garden'],
    priorityTools: ['Self Sufficiency GPT', 'Agronomus AI Farming Expert', 'Survivalist GPT'],
    relatedCategories: ['Homesteading', 'Sustainable Living']
  },

  // ===== SPACE & EXPLORATION =====
  spaceExploration: {
    triggers: ['space exploration', 'explore space', 'astronomy', 'space travel', 'exoplanets', 'cosmos'],
    keywords: ['space', 'astronomy', 'cosmos', 'planet', 'galaxy', 'star', 'nasa', 'exoplanet'],
    priorityTools: ['Stellaris: 🚀AI Space Explorer', 'Illuminous World Data Explorer GPT'],
    relatedCategories: ['Science & Research', 'Space & Astronomy']
  },

  alienLife: {
    triggers: ['alien life', 'extraterrestrial', 'ufo', 'aliens', 'ufos', 'et life', 'are aliens real'],
    keywords: ['alien', 'ufo', 'extraterrestrial', 'et', 'abduction', 'sighting', 'phenomenon'],
    priorityTools: ['Phenomenon Explorer AI Suite', 'Stellaris: 🚀AI Space Explorer'],
    relatedCategories: ['Paranormal', 'Space & Astronomy']
  },

  // ===== GENEALOGY & HISTORY =====
  genealogyResearch: {
    triggers: ['genealogy research', 'family tree', 'ancestry', 'find ancestors', 'family history', 'trace lineage'],
    keywords: ['genealogy', 'ancestry', 'family tree', 'lineage', 'heritage', 'relatives', 'dna'],
    priorityTools: ['Person Information Finder GPT', 'TALK TO HISTORY GPT'],
    relatedCategories: ['Research & Academic', 'Genealogy']
  },

  historyResearch: {
    triggers: ['history research', 'historical research', 'learn history', 'ancient history', 'world history'],
    keywords: ['history', 'historical', 'ancient', 'medieval', 'war', 'civilization', 'empire'],
    priorityTools: ['TALK TO HISTORY GPT', 'TIME MACHINE GPT', 'Historical Headlines GPT'],
    relatedCategories: ['History', 'Education & Learning']
  },

  talkToHistoricalFigure: {
    triggers: ['talk to historical figure', 'chat with einstein', 'talk to tesla', 'speak to ancestors', 'historical conversation'],
    keywords: ['historical', 'figure', 'einstein', 'tesla', 'ancestor', 'conversation', 'resurrect'],
    priorityTools: ['TALK TO HISTORY GPT', 'Nikola Tesla GPT', 'Albert Einstein GPT', 'Resurrection GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'History']
  },

  // ===== CANNABIS & PLANTS =====
  cannabisInfo: {
    triggers: ['cannabis info', 'marijuana', 'weed help', 'cannabis strains', 'grow cannabis', 'cbd info'],
    keywords: ['cannabis', 'marijuana', 'weed', 'cbd', 'thc', 'strain', 'hemp', 'grow'],
    priorityTools: ['Cannabis GPT'],
    relatedCategories: ['Health & Wellness', 'Cannabis']
  },

  mushroomInfo: {
    triggers: ['mushroom info', 'mushroom identification', 'fungi', 'mycology', 'foraging mushrooms', 'grow mushrooms'],
    keywords: ['mushroom', 'fungi', 'mycology', 'foraging', 'spore', 'cultivation', 'edible'],
    priorityTools: ['Fungus GPT – AI Mushroom Specialist'],
    relatedCategories: ['Health & Wellness', 'Mycology']
  },

  farmingHelp: {
    triggers: ['farming help', 'agriculture', 'grow crops', 'farm advice', 'farming tips', 'crop management'],
    keywords: ['farm', 'farming', 'agriculture', 'crop', 'soil', 'harvest', 'agronomy'],
    priorityTools: ['Agronomus AI Farming Expert', 'Self Sufficiency GPT'],
    relatedCategories: ['Agriculture', 'Farming Tools']
  },

  // ===== PARANORMAL & MYSTERIES =====
  paranormalInvestigation: {
    triggers: ['paranormal investigation', 'ghost hunting', 'supernatural', 'haunted', 'spirit communication'],
    keywords: ['paranormal', 'ghost', 'supernatural', 'haunted', 'spirit', 'psychic', 'medium'],
    priorityTools: ['Phenomenon Explorer AI Suite', 'Oraculum – The Revealer of Hidden "Truths"'],
    relatedCategories: ['Paranormal', 'Spirituality & Philosophy']
  },

  cryptozoology: {
    triggers: ['cryptozoology', 'cryptids', 'bigfoot', 'loch ness', 'mythical creatures', 'monster sightings'],
    keywords: ['cryptid', 'bigfoot', 'sasquatch', 'creature', 'monster', 'sighting', 'legend'],
    priorityTools: ['Phenomenon Explorer AI Suite', 'Criminologist GPT'],
    relatedCategories: ['Paranormal', 'Cryptozoology']
  },

  conspiracyResearch: {
    triggers: ['conspiracy research', 'hidden truth', 'secret history', 'cover up', 'deep state', 'truth seeking'],
    keywords: ['conspiracy', 'hidden', 'secret', 'truth', 'coverup', 'illuminati', 'investigate'],
    priorityTools: ['Oraculum – The Revealer of Hidden "Truths"', 'Uncovering Hidden Historical Patterns GPT', 'FACT CHECKER GPT'],
    relatedCategories: ['Research & Academic', 'Truth Seeking']
  },

  // ===== CRIME & INVESTIGATION =====
  crimeInvestigation: {
    triggers: ['crime investigation', 'forensics', 'solve crime', 'criminal investigation', 'detective work'],
    keywords: ['crime', 'forensic', 'investigation', 'detective', 'evidence', 'criminal', 'case'],
    priorityTools: ['Criminologist GPT', 'Sketch Artist GPT'],
    relatedCategories: ['Legal & Government', 'Investigation']
  },

  findPerson: {
    triggers: ['find person', 'locate someone', 'people search', 'find someone', 'background check'],
    keywords: ['person', 'find', 'locate', 'search', 'background', 'lookup', 'trace'],
    priorityTools: ['Person Information Finder GPT'],
    relatedCategories: ['Research & Academic', 'People Search']
  },

  // ===== RELIGION & PHILOSOPHY =====
  compareReligions: {
    triggers: ['compare religions', 'world religions', 'religious comparison', 'different faiths', 'spirituality comparison'],
    keywords: ['religion', 'faith', 'spiritual', 'belief', 'theology', 'compare', 'christian', 'buddhist', 'hindu', 'islam'],
    priorityTools: ['God Is Light GPT', 'TALK TO THE GODS GPT', 'Sophia Aeterna AI'],
    relatedCategories: ['Spirituality & Philosophy', 'Religion']
  },

  philosophyDiscussion: {
    triggers: ['philosophy discussion', 'philosophical questions', 'meaning of life', 'existential questions', 'deep thinking'],
    keywords: ['philosophy', 'philosophical', 'existential', 'meaning', 'wisdom', 'truth', 'socrates'],
    priorityTools: ['ALAN WATTS GPT', 'Carl Sagan GPT', 'Sophia Aeterna AI', 'Socrates GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Philosophy']
  },

  ancientWisdom: {
    triggers: ['ancient wisdom', 'ancient knowledge', 'lost knowledge', 'ancient texts', 'esoteric knowledge'],
    keywords: ['ancient', 'wisdom', 'esoteric', 'mystical', 'occult', 'sacred', 'gnostic'],
    priorityTools: ['Intergalactic Ancient Archivist GPT', 'Sophia Aeterna AI', 'Historical Apothecary GPT', 'Alchemist Scientist GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Ancient Studies']
  },

  // ===== GAMING & ENTERTAINMENT =====
  gameDesign: {
    triggers: ['game design', 'make a game', 'video game design', 'game development', 'create game'],
    keywords: ['game', 'gaming', 'design', 'development', 'unity', 'unreal', 'rpg'],
    priorityTools: ['Game Design Document / Developer GPT', 'Unity', 'Unreal Engine'],
    relatedCategories: ['Gaming & Entertainment', 'Game Development']
  },

  triviaQuestions: {
    triggers: ['trivia questions', 'trivia night', 'quiz questions', 'pub quiz', 'trivia game'],
    keywords: ['trivia', 'quiz', 'question', 'game', 'knowledge', 'fun fact'],
    priorityTools: ['Trivia Night GPT', 'Quiz Maker Ai'],
    relatedCategories: ['Gaming & Entertainment', 'Trivia']
  },

  // ===== AUTOMOTIVE & VEHICLES =====
  carHelp: {
    triggers: ['car help', 'car repair', 'auto repair', 'vehicle problems', 'fix car', 'car advice'],
    keywords: ['car', 'auto', 'vehicle', 'repair', 'mechanic', 'engine', 'maintenance'],
    priorityTools: ['AUTOMOBILE GPT'],
    relatedCategories: ['Automotive', 'Vehicle Tools']
  },

  // ===== OIL & ENERGY =====
  oilAndGas: {
    triggers: ['oil and gas', 'drilling', 'petroleum', 'energy industry', 'oil exploration'],
    keywords: ['oil', 'gas', 'drilling', 'petroleum', 'energy', 'exploration', 'rig'],
    priorityTools: ['Drill Baby Drill Ai Suite For Oil & Gas'],
    relatedCategories: ['Energy & Resources', 'Oil & Gas']
  },

  solarEnergy: {
    triggers: ['solar energy', 'solar panels', 'solar installation', 'renewable energy', 'solar power'],
    keywords: ['solar', 'renewable', 'energy', 'panel', 'photovoltaic', 'green', 'sustainable'],
    priorityTools: ['Solar Land Assessor GPT', 'Sustainable Futures GPT'],
    relatedCategories: ['Energy & Resources', 'Solar Energy']
  },

  // ===== REAL ESTATE & PROPERTY =====
  propertyInfo: {
    triggers: ['property info', 'real estate', 'property data', 'home value', 'property search'],
    keywords: ['property', 'real estate', 'home', 'house', 'land', 'value', 'market'],
    priorityTools: ['Property Data Finder GPT'],
    relatedCategories: ['Real Estate', 'Property Tools']
  },

  // ===== FIREARMS & SAFETY =====
  firearmsInfo: {
    triggers: ['firearms info', 'gun safety', 'shooting', 'firearm training', 'gun education'],
    keywords: ['firearm', 'gun', 'shooting', 'safety', 'training', 'weapon', 'ammunition'],
    priorityTools: ['Firearms Safety Instructor GPT'],
    relatedCategories: ['Safety & Training', 'Firearms']
  },

  // ===== FISHING & OUTDOORS =====
  fishingHelp: {
    triggers: ['fishing help', 'go fishing', 'fishing tips', 'best fishing spots', 'catch fish'],
    keywords: ['fishing', 'fish', 'angler', 'bait', 'tackle', 'lake', 'river', 'ocean'],
    priorityTools: ['Fisherman GPT🎣😊'],
    relatedCategories: ['Outdoor Activities', 'Fishing']
  },

  // ===== FASHION & STYLE =====
  fashionAdvice: {
    triggers: ['fashion advice', 'style help', 'outfit ideas', 'what to wear', 'personal style'],
    keywords: ['fashion', 'style', 'outfit', 'clothing', 'wear', 'wardrobe', 'look'],
    priorityTools: ['RESTYLE ME GPT'],
    relatedCategories: ['Fashion & Style', 'Personal Styling']
  },

  tattooDesign: {
    triggers: ['tattoo design', 'tattoo ideas', 'design tattoo', 'custom tattoo', 'tattoo artist'],
    keywords: ['tattoo', 'design', 'ink', 'body art', 'custom', 'artist', 'sleeve'],
    priorityTools: ['Tattoo Designer GPT'],
    relatedCategories: ['Art & Design', 'Tattoos']
  },

  // ===== GOVERNMENT & LEGISLATION =====
  writeLegislation: {
    triggers: ['write legislation', 'draft law', 'legislative writing', 'policy writing', 'government policy'],
    keywords: ['legislation', 'law', 'policy', 'bill', 'government', 'congress', 'senate'],
    priorityTools: ['Legislation Writer GPT', 'Public Testimony Writer GPT', 'Legislator Link GPT'],
    relatedCategories: ['Legal & Government', 'Legislation']
  },

  publicTestimony: {
    triggers: ['public testimony', 'testify', 'government hearing', 'public comment', 'citizen testimony'],
    keywords: ['testimony', 'testify', 'hearing', 'comment', 'public', 'legislature', 'council'],
    priorityTools: ['Public Testimony Writer GPT', 'Legislator Link GPT'],
    relatedCategories: ['Legal & Government', 'Public Engagement']
  },

  // ===== ARCHAEOLOGY & ANCIENT =====
  archaeology: {
    triggers: ['archaeology', 'ancient artifacts', 'archaeological dig', 'excavation', 'ancient ruins'],
    keywords: ['archaeology', 'artifact', 'ancient', 'excavation', 'ruins', 'civilization', 'dig'],
    priorityTools: ['Indiana Archeologist GPT', 'Intergalactic Ancient Archivist GPT'],
    relatedCategories: ['History', 'Archaeology']
  },

  // ===== PERFORMING ARTS =====
  theaterProduction: {
    triggers: ['theater production', 'stage design', 'theatrical', 'performing arts', 'drama production'],
    keywords: ['theater', 'stage', 'drama', 'performance', 'acting', 'production', 'play'],
    priorityTools: ['STAGEMASTER AI SUITE FOR THE Preforming Arts', '🎭 Playwriter GPT'],
    relatedCategories: ['Arts & Entertainment', 'Theater']
  },

  // ===== SUPPLY CHAIN & LOGISTICS =====
  supplyChain: {
    triggers: ['supply chain', 'logistics', 'shipping', 'inventory', 'supply management', 'distribution'],
    keywords: ['supply chain', 'logistics', 'shipping', 'inventory', 'distribution', 'warehouse'],
    priorityTools: ['Global Supply Chain Collapse GPT'],
    relatedCategories: ['Business & Productivity', 'Logistics']
  },

  // ===== FIREFIGHTING & EMERGENCY =====
  firefighting: {
    triggers: ['firefighting', 'fire safety', 'wildfire', 'fire prevention', 'emergency response'],
    keywords: ['fire', 'firefight', 'wildfire', 'emergency', 'rescue', 'safety', 'prevention'],
    priorityTools: ['Firefighter GPT'],
    relatedCategories: ['Safety & Emergency', 'Firefighting']
  },

  // ===== PROBABILITY & PREDICTIONS =====
  probabilityAnalysis: {
    triggers: ['probability analysis', 'odds calculator', 'what are the odds', 'likelihood', 'chance of'],
    keywords: ['probability', 'odds', 'chance', 'likelihood', 'statistics', 'predict', 'forecast'],
    priorityTools: ['Probability GPT', 'Fortune Teller GPT'],
    relatedCategories: ['Data & Analytics', 'Predictions']
  },

  // ===== ENGINEERING =====
  engineeringHelp: {
    triggers: ['engineering help', 'engineer assistance', 'technical engineering', 'mechanical engineering', 'civil engineering'],
    keywords: ['engineering', 'engineer', 'mechanical', 'electrical', 'civil', 'structural', 'design'],
    priorityTools: ['Engineering GPT AI Suite'],
    relatedCategories: ['Science & Research', 'Engineering']
  },

  // ===== PHARMACY & MEDICINE =====
  pharmacyInfo: {
    triggers: ['pharmacy info', 'medication info', 'drug information', 'prescription help', 'medicine lookup'],
    keywords: ['pharmacy', 'medication', 'drug', 'prescription', 'medicine', 'pharmaceutical', 'rx'],
    priorityTools: ['Pharmaceutical Assistant GPT', 'PHARMA RESEARCH PRO'],
    relatedCategories: ['Health & Wellness', 'Pharmacy']
  },

  // ===== GRANTS & FUNDING =====
  grantWriting: {
    triggers: ['grant writing', 'write grant', 'grant application', 'funding application', 'get grants'],
    keywords: ['grant', 'funding', 'application', 'nonprofit', 'proposal', 'foundation'],
    priorityTools: ['Grant Writer GPT'],
    relatedCategories: ['Business & Productivity', 'Nonprofit Tools']
  },

  // ===== WEB3 & BLOCKCHAIN =====
  web3Domains: {
    triggers: ['web3 domain', 'blockchain domain', 'decentralized web', 'crypto domain', 'web3 banking'],
    keywords: ['web3', 'blockchain', 'decentralized', 'crypto', 'domain', 'defi', 'nft'],
    priorityTools: ['.worldpeace', '.worldtrade', '.transfermoney'],
    relatedCategories: ['Web3 & Blockchain', 'Cryptocurrency']
  },

  // ===== MARRIAGE & RELATIONSHIPS =====
  marriageHelp: {
    triggers: ['marriage help', 'relationship advice', 'couples therapy', 'marriage counseling', 'fix marriage'],
    keywords: ['marriage', 'relationship', 'couple', 'counseling', 'therapy', 'spouse', 'partner'],
    priorityTools: ['Marriage Mender GPT'],
    relatedCategories: ['Health & Wellness', 'Relationships']
  },

  // ===== RESTAURANT & FOOD BUSINESS =====
  restaurantMenu: {
    triggers: ['restaurant menu', 'menu design', 'create menu', 'food menu', 'menu maker'],
    keywords: ['restaurant', 'menu', 'food', 'dining', 'cafe', 'bistro', 'design'],
    priorityTools: ['Restaurant Menu Maker GPT', 'Chef "Sizzle" AI Culinary Assistant'],
    relatedCategories: ['Food & Cooking', 'Business Tools']
  },

  // ===== CREDIT & FINANCE =====
  creditScore: {
    triggers: ['credit score', 'check credit', 'improve credit', 'credit report', 'credit rating'],
    keywords: ['credit', 'score', 'rating', 'report', 'fico', 'loan', 'debt'],
    priorityTools: ['Predictive Credit Score Checker GPT'],
    relatedCategories: ['Finance & Trading', 'Credit Tools']
  },

  // ===== COLORING & KIDS =====
  coloringBook: {
    triggers: ['coloring book', 'coloring pages', 'kids coloring', 'color pages', 'printable coloring'],
    keywords: ['coloring', 'color', 'kids', 'children', 'printable', 'drawing', 'activity'],
    priorityTools: ['Coloring Book Generator GPT', 'Children\'s Picture Book Maker GPT'],
    relatedCategories: ['Education & Learning', 'Kids Activities']
  },

  // ===== PODCASTING =====
  startPodcast: {
    triggers: ['start podcast', 'podcast script', 'create podcast', 'podcast help', 'podcast writing'],
    keywords: ['podcast', 'audio', 'episode', 'script', 'host', 'interview', 'show'],
    priorityTools: ['Podcast Script Writer GPT'],
    relatedCategories: ['Content Creation', 'Podcasting']
  },

  // ===== NATIVE AMERICAN HISTORY =====
  nativeAmericanHistory: {
    triggers: ['native american history', 'indigenous history', 'tribal history', 'native culture', 'first nations'],
    keywords: ['native', 'indigenous', 'tribal', 'american indian', 'apache', 'cherokee', 'navajo'],
    priorityTools: ['Native American History Time Machine GPT - (Special Edition)', 'Chief Crazy Horse GPT'],
    relatedCategories: ['History', 'Cultural Studies']
  },

  // ===== AI WORLD SIMULATION =====
  aiSimulation: {
    triggers: ['ai simulation', 'if ai ruled', 'ai world', 'ai takeover', 'ai future', 'singularity'],
    keywords: ['simulation', 'ai rule', 'future', 'singularity', 'takeover', 'scenario'],
    priorityTools: ['"IF AI RULED THE WORLD" - AI SIMULATION GPT', 'GODMODE GPT'],
    relatedCategories: ['AI & Technology', 'Simulations']
  },

  // ===== FOOD SAFETY =====
  foodSafety: {
    triggers: ['food safety', 'food quality', 'food inspection', 'is food safe', 'food ingredients'],
    keywords: ['food', 'safety', 'quality', 'inspection', 'ingredient', 'nutrition', 'label'],
    priorityTools: ['Food Quality Inspector GPT'],
    relatedCategories: ['Health & Wellness', 'Food Safety']
  },

  // ===== UBI & SOCIAL POLICY =====
  universalBasicIncome: {
    triggers: ['universal basic income', 'ubi', 'basic income', 'guaranteed income', 'social welfare'],
    keywords: ['ubi', 'basic income', 'universal', 'welfare', 'social', 'policy', 'guaranteed'],
    priorityTools: ['Universal Basic Income Strategist GPT', 'Social Safety Net GPT'],
    relatedCategories: ['Legal & Government', 'Social Policy']
  },

  // ===== WORLD PEACE =====
  worldPeace: {
    triggers: ['world peace', 'global peace', 'end wars', 'peace strategy', 'conflict resolution'],
    keywords: ['peace', 'war', 'conflict', 'diplomacy', 'global', 'resolution', 'international'],
    priorityTools: ['Global Peace Restoration Strategist GPT', 'WE THE PEOPLE AI'],
    relatedCategories: ['Legal & Government', 'International Relations']
  },

  // ===== IMMORTALITY & LEGACY =====
  digitalLegacy: {
    triggers: ['digital legacy', 'immortalize', 'preserve memory', 'digital clone', 'after death'],
    keywords: ['immortal', 'legacy', 'preserve', 'clone', 'memory', 'digital', 'eternal'],
    priorityTools: ['ImmortalizeME', 'Resurrection GPT'],
    relatedCategories: ['Spirituality & Philosophy', 'Legacy Tools']
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
