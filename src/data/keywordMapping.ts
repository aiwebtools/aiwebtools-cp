
// Enhanced keyword mapping for intelligent search - significantly enhanced
export const keywordMapping: Record<string, string[]> = {
  // Writing and Content Creation
  "book": ["writer", "author", "novel", "manuscript", "publish", "literature", "authoring", "story creation", "fiction", "non-fiction", "dialogue writer", "storytelling", "professional books", "structured writing", "narrative", "create books", "AI writer", "full books", "professional writing", "BookGPT", "dream anything"],
  "write": ["writer", "author", "content", "blog", "article", "manuscript", "script", "screenplay"],
  "script": ["screenwriting", "movie scripts", "film", "cinema", "character development", "scene planning", "dialogue", "screenplay", "filmmaking", "cinematic", "industry-standard", "award-winning scripts", "MovieScriptGPT"],
  "author": ["writer", "book", "novel", "manuscript", "publish", "content creation"],
  
  // Time and History
  "time": ["history", "historical exploration", "future", "past", "alternative realities", "time travel", "historical figures", "eras", "imagination", "historical moments", "uncover past", "explore futures", "personal conversations", "educational", "simulation", "TimeMachineGPT"],
  "history": ["historical", "past", "ancient", "heritage", "civilization", "culture", "timeline", "historical headlines", "immersive news articles", "contemporary perspective", "period language", "eyewitness accounts", "cultural context"],
  "historical": ["history", "past", "ancient", "heritage", "civilization", "titanic", "resurrections", "voices", "passengers", "crew", "first-person storytelling", "survivor testimonies"],
  
  // Automotive and Transportation
  "car": ["automotive", "vehicle", "automobile", "dealership", "repair", "maintenance", "upgrades", "auto care", "local dealerships", "precise decisions", "automotive world", "car parts", "AutomobileGPT", "AutoGPT"],
  "automotive": ["car", "vehicle", "automobile", "auto", "transportation"],
  
  // Education and Learning
  "learn": ["education", "course", "skill", "study", "training", "college", "university", "homeschool", "free education", "college courses", "university degree", "learn any subject", "higher education", "online learning", "self-taught", "academic", "educational experience", "open source prompt", "human right", "all subjects", "curriculum", "CollegeDegreeGPT", "skill acquisition", "beginner to expert", "step-by-step", "YouTube videos", "visuals", "interactive learning", "multimedia", "practical skills", "academic knowledge", "self-improvement", "personal development", "LearnSkillGPT"],
  "education": ["learn", "course", "skill", "college", "homeschool", "training", "teaching", "curriculum"],
  "college": ["education", "learn", "course", "degree", "university", "academic"],
  "course": ["education", "learn", "training", "curriculum", "lesson", "class"],
  "skill": ["learn", "course", "education", "training", "development", "ability"],
  "homeschool": ["education", "learn", "course", "teaching", "parents", "state-specific legal guidance", "educational resources", "compliance", "nurturing learning", "child education", "curriculum support", "K-12", "alternative education", "HomeSchoolingGPT"],
  
  // Movie and Video Creation
  "movie": ["film", "cinema", "video", "production", "script", "scene", "director", "cinematic", "motion picture", "film making", "script writer", "scene maker", "trailer poster maker", "creative suite", "video editing", "cinematic tools", "film tools", "complete movie tools", "MovieStudioAI", "motion picture production"],
  "video": ["movie", "film", "cinema", "production", "editing", "creation", "content", "visual", "animation", "streaming"],
  "film": ["movie", "cinema", "video", "production", "cinematic", "filmmaking"],
  
  // Survival and Emergency
  "survival": ["survivalist", "emergency", "preparedness", "safety", "crisis", "outdoor", "battlefield scenario", "step-by-step guidance", "practical strategies", "pocket guide", "robot expert", "emergency preparedness", "outdoor survival", "crisis management", "safety", "ultimate companion", "SurvivalGPT"],
  "emergency": ["survival", "preparedness", "safety", "crisis", "response"],
  
  // Performance and Theater
  "theater": ["stage", "performance", "drama", "play", "acting", "theatrical", "production", "set design", "choreography", "costume creation", "lighting optimization", "theater", "drama", "live performance", "event production", "show design", "arts technology", "creative suite", "StageMasterAI"],
  "stage": ["theater", "performance", "drama", "play", "production", "show"],
  "play": ["theater", "stage", "drama", "performance", "script", "theatrical plays", "structured", "concept to finish", "original", "engaging", "captivate audiences", "drama", "comedy", "stage scripts", "script writing", "creative writing", "dialogue", "theater production", "PlaywriterGPT"],
  
  // AI and Technology
  "ai": ["artificial", "intelligence", "machine", "learning", "automation", "gpt", "claude", "gemini", "chatbot", "assistant"],
  "artificial": ["ai", "intelligence", "machine", "automation", "synthetic"],
  "gpt": ["ai", "openai", "chatgpt", "language model", "llm"],
  "claude": ["anthropic", "ai", "assistant", "llm", "Haiku", "Sonnet", "Opus models", "cognitive tasks", "200k context window", "coding", "math", "reasoning", "conversational AI", "advanced intelligence", "cost efficiency", "ClaudeAI"],
  "gemini": ["google", "ai", "assistant", "multimodal", "Android", "Gemini Live", "real-time captions", "translations", "stream summaries", "Q&A", "highlight reels", "branding", "live events", "educational content", "gaming", "social media", "GeminiAI"],
  
  // Business and Productivity
  "business": ["entrepreneur", "startup", "company", "brand", "marketing", "analysis", "website", "design", "plan", "strategy", "tailored business plans", "AI-driven", "key information", "market analysis", "financial projections", "strategic growth", "efficient", "personalized", "business goals", "startup planning", "entrepreneurship", "BusinessPlanGPT"],
  "startup": ["business", "entrepreneur", "company", "venture", "innovation", "validation", "StartupValidator"],
  "entrepreneur": ["business", "startup", "company", "venture", "innovation"],
  
  // Creative and Design
  "design": ["graphic", "visual", "creative", "art", "ui", "ux", "website", "logo", "illustration"],
  "art": ["design", "creative", "visual", "drawing", "painting", "illustration", "artistic"],
  "creative": ["art", "design", "visual", "innovation", "imagination", "artistic"],
  "tattoo": ["design", "body art", "custom artwork", "artistic design", "personalized", "TattooGPT"],
  
  // Music and Audio
  "music": ["audio", "sound", "song", "entertainment", "melody", "composition", "instrument", "vocals", "songwriting", "step-by-step guidance", "lyrics", "tablature", "master techniques", "instrument selection", "sound improvement", "music education", "MusicLessonsGPT", "text-to-music", "top generator", "theme to song", "amazed", "leader in music tech", "music industry", "unlock passion", "AI music creation", "song generation", "original music", "SunoAI"],
  "audio": ["music", "sound", "voice", "speech", "podcast", "recording"],
  "sound": ["audio", "music", "voice", "noise", "acoustic"],
  
  // Health and Medical
  "health": ["medical", "wellness", "fitness", "doctor", "healthcare", "medicine"],
  "medical": ["health", "doctor", "healthcare", "medicine", "clinical", "pharmaceutical"],
  "doctor": ["medical", "health", "healthcare", "physician", "medicine", "medical simulation", "informational", "health advice", "private", "confidential", "personalized", "not replacement for doctor", "health queries", "symptom checker", "well-being", "DoctorGPT"],
  "mental": ["wellness", "health", "therapy", "psychology", "emotional", "virtual chat", "emotional support", "mental well-being", "empathetic guidance", "cognitive behavioral therapy", "CBT", "stress", "anxiety", "life challenges", "practical tools", "coping strategies", "judgment-free space", "personal growth", "resilience", "self-care", "MentalWellnessGPT"],
  
  // Legal and Government
  "legal": ["law", "lawyer", "attorney", "contract", "compliance", "legislation", "court", "justice"],
  "law": ["legal", "lawyer", "attorney", "justice", "legislation", "court"],
  "contract": ["legal", "agreement", "document", "terms", "review"],
  "legislation": ["legal", "law", "government", "policy", "bill", "drafting legislation", "legal language", "page by page", "precise", "continuity", "law making", "government documents", "policy writing", "legal documents", "bill drafting", "legislative process", "legal tech", "LegislationWriter"],
  
  // Food and Cooking
  "food": ["cooking", "recipe", "chef", "cuisine", "nutrition", "restaurant", "menu"],
  "cooking": ["food", "recipe", "chef", "cuisine", "kitchen", "culinary"],
  "recipe": ["cooking", "food", "chef", "cuisine", "ingredient", "preparation"],
  "chef": ["cooking", "food", "recipe", "cuisine", "kitchen", "culinary"],
  "restaurant": ["food", "dining", "menu", "hospitality", "service"],
  
  // Gaming and Entertainment
  "game": ["gaming", "entertainment", "fun", "play", "interactive", "video game", "development"],
  "gaming": ["game", "entertainment", "fun", "play", "video game"],
  "entertainment": ["fun", "game", "music", "video", "show", "celebrity"],
  
  // Financial and Investment
  "money": ["finance", "financial", "investment", "budget", "accounting", "trading"],
  "finance": ["money", "financial", "investment", "budget", "accounting", "trading"],
  "trading": ["finance", "investment", "market", "stocks", "day traders", "investors", "real-time market analysis", "trading signals", "market data", "technical analysis", "actionable insights", "informed decisions", "simulation", "financial markets", "stock trading", "TraderGPT"],
  "investment": ["finance", "money", "trading", "market", "portfolio"],
  
  // Travel and Adventure
  "travel": ["trip", "vacation", "destination", "tourism", "adventure", "vacation planning", "travel recommendations", "dream getaway", "preferences", "budget", "stress-free journey", "expert guidance", "trip planning", "tourism", "holiday advisor", "personalized travel", "itinerary", "TravelAdvisorGPT"],
  "trip": ["travel", "vacation", "journey", "destination", "adventure"],
  "vacation": ["travel", "trip", "holiday", "destination", "leisure"],
  
  // Data and Analytics
  "data": ["analysis", "analytics", "statistics", "research", "insight", "information"],
  "analytics": ["data", "analysis", "statistics", "research", "metrics", "insights"],
  "analysis": ["data", "analytics", "research", "investigation", "examination"],
  
  // Cannabis and Hemp
  "cannabis": ["weed", "pot", "marijuana", "hemp", "cbd", "thc", "legal cannabis", "growers", "strain genetics", "dosing", "edibles", "cultivation", "plant health", "regulations", "medical research", "safe consumption", "cannabinoid science", "terpene profiles", "21+", "HempGPT", "CannabisGPT"],
  "weed": ["cannabis", "marijuana", "pot", "hemp"],
  "marijuana": ["cannabis", "weed", "pot", "hemp"],
  "hemp": ["cannabis", "cbd", "legal", "industrial"],
  
  // Communication and Social
  "chat": ["communication", "messaging", "conversation", "talk", "chatbot"],
  "communication": ["chat", "messaging", "conversation", "social", "talk"],
  "social": ["communication", "network", "community", "sharing", "media"],
  
  // Professional Services
  "professional": ["expert", "specialist", "service", "consultant", "business"],
  "expert": ["professional", "specialist", "authority", "master", "consultant"],
  "consultant": ["professional", "expert", "advisor", "specialist", "service"],
  
  // 3D and Modeling
  "3d": ["modeling", "three dimensional", "graphics", "animation", "design", "text to 3D assets", "images to 3D", "under a minute", "content creators", "3D modeling", "game assets", "virtual reality", "promo code AiWebTools", "fast 3D", "MeshyAI"],
  "modeling": ["3d", "design", "graphics", "creation", "simulation"],
  
  // Video Generation and Animation
  "sora": ["openai", "video", "generation", "text to video", "ai video", "OpenAI AI model", "text to realistic videos", "imaginative videos", "content creation", "groundbreaking", "high-quality video", "cinematic AI", "video synthesis", "SoraAI"],
  "runway": ["video", "generation", "ai video", "animation", "create videos from text", "images", "video clips", "Gen-3", "AI animation", "image-to-video", "motion graphics", "dynamic content", "web platform", "iOS app", "content creation", "RunwayMLAI"],
  "luma": ["dream machine", "video", "text to video", "Luma Labs", "text-to-video", "high quality video", "realistic", "surreal", "AI animation", "cinematic shorts", "creative content", "video synthesis", "prompt based video", "LumaDreamMachine"],
  
  // Specific Tool Keywords
  "suite": ["studio", "master", "pro", "collection", "toolkit", "comprehensive"],
  "einstein": ["physics", "science", "genius", "relativity", "Einstein intellect", "critical thinking", "universe mysteries", "physics", "mathematics", "philosophy", "challenge wisdom", "scientific rigor", "logical reasoning", "creative thought", "thought experiments", "science AI", "AlbertEinsteinGPT"],
  "dream": ["interpretation", "analysis", "subconscious", "analyze dreams", "interpret dreams", "psychological", "mythological", "symbolic frameworks", "uncover hidden meanings", "subconscious patterns", "emotions", "personal growth", "introspection", "dream symbols", "DreamInterpreterGPT"],
  "tesla": ["nikola", "invention", "electricity", "scientific mysteries", "groundbreaking theories", "innovation", "data analysis", "Python modeling", "research synthesis", "complex challenges", "uncharted ideas", "scientific precision", "inventors", "visionaries", "physics", "NikolaTeslaGPT"]
};
