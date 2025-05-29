
// Enhanced keyword mapping for intelligent search - AI tools focused
export const keywordMapping: Record<string, string[]> = {
  // Core AI Keywords
  "ai": ["artificial intelligence", "machine learning", "automation", "gpt", "claude", "gemini", "chatbot", "assistant", "neural network", "deep learning", "AI tools", "artificial intelligence tools", "AI software", "AI platforms", "AI solutions", "smart", "intelligent", "automated"],
  "artificial": ["ai", "intelligence", "machine", "automation", "synthetic", "artificial intelligence", "AI tools", "machine learning", "neural networks", "smart technology"],
  "intelligence": ["ai", "artificial", "smart", "cognitive", "machine learning", "neural", "intelligent systems", "AI intelligence", "cognitive computing"],
  "machine": ["learning", "ai", "artificial", "automation", "algorithm", "ML", "machine learning tools", "AI machine", "neural networks", "deep learning"],
  "automation": ["ai", "workflow", "business", "productivity", "automated", "smart automation", "AI automation", "process automation", "robotic", "streamline"],
  
  // Popular AI Models and Platforms
  "gpt": ["openai", "chatgpt", "language model", "llm", "generative ai", "GPT-4", "GPT-3", "text generation", "AI writing", "conversational ai", "chat"],
  "chatgpt": ["openai", "gpt", "ai chat", "conversational ai", "chat assistant", "AI chatbot", "language model", "text generation"],
  "claude": ["anthropic", "ai assistant", "llm", "conversational ai", "AI chat", "intelligent assistant", "Haiku", "Sonnet", "Opus", "language model"],
  "gemini": ["google", "ai assistant", "multimodal", "google ai", "bard", "AI chat", "intelligent assistant", "language model"],
  "openai": ["gpt", "chatgpt", "dall-e", "api", "AI platform", "artificial intelligence", "language models", "AI company"],
  "anthropic": ["claude", "ai safety", "constitutional ai", "ai assistant", "language model", "ai research"],
  
  // Creative AI Tools
  "art": ["design", "creative", "visual", "drawing", "painting", "illustration", "artistic", "AI art", "generative art", "digital art", "art generator", "creative tools", "image generation", "dall-e", "midjourney"],
  "design": ["graphic", "visual", "creative", "art", "ui", "ux", "website", "logo", "illustration", "AI design", "design tools", "creative design", "layout", "typography"],
  "image": ["generation", "ai art", "visual", "picture", "photo", "graphic", "AI image", "image generator", "picture generator", "visual AI", "dall-e", "midjourney", "stable diffusion"],
  "video": ["editing", "creation", "production", "AI video", "video generator", "film", "movie", "animation", "video AI", "video tools", "motion graphics", "multimedia"],
  "music": ["audio", "sound", "composition", "AI music", "music generator", "audio AI", "song creation", "music production", "audio tools", "beat", "melody", "soundtrack"],
  "audio": ["music", "sound", "voice", "speech", "podcast", "audio editing", "sound effects", "voice synthesis", "text to speech", "audio generation"],
  
  // Business and Productivity
  "business": ["productivity", "enterprise", "commercial", "professional", "business tools", "AI business", "business automation", "workflow", "corporate", "management", "strategy"],
  "productivity": ["efficiency", "workflow", "automation", "business", "tools", "productivity AI", "work tools", "efficiency tools", "task management", "organization"],
  "writing": ["content", "text", "copywriting", "authoring", "AI writing", "writing assistant", "content creation", "text generation", "blog", "article", "essay", "creative writing"],
  "content": ["creation", "writing", "marketing", "blog", "article", "content AI", "content generator", "creative content", "copywriting", "social media"],
  "marketing": ["advertising", "promotion", "digital marketing", "AI marketing", "marketing tools", "ad AI", "social media", "brand", "campaign", "seo"],
  
  // Technical and Development
  "code": ["programming", "development", "software", "coding", "AI coding", "code generator", "programming AI", "developer tools", "script", "algorithm"],
  "programming": ["code", "development", "software", "coding", "AI programming", "coding assistant", "developer AI", "software engineering"],
  "development": ["coding", "programming", "software", "web development", "AI development", "developer tools", "coding tools", "app development"],
  "api": ["integration", "development", "programming", "AI API", "API tools", "developer API", "AI integration", "webhook", "endpoint"],
  "web": ["website", "internet", "online", "browser", "html", "css", "javascript", "web development", "web design", "frontend"],
  "app": ["application", "mobile", "software", "program", "tool", "platform", "service", "utility"],
  
  // Data and Analytics
  "data": ["analysis", "analytics", "research", "insights", "AI data", "data analysis", "data science", "analytics AI", "database", "information"],
  "analytics": ["data", "analysis", "insights", "metrics", "AI analytics", "data analytics", "business intelligence", "statistics", "reporting"],
  "analysis": ["data", "research", "insights", "examination", "AI analysis", "analytical tools", "data analysis", "study", "evaluation"],
  "research": ["study", "investigation", "analysis", "academic", "scientific", "AI research", "research tools", "scholarly"],
  
  // Specific Tool Categories
  "chatbot": ["ai chat", "conversational ai", "customer service", "chat assistant", "AI chatbot", "intelligent chat", "virtual assistant", "bot"],
  "assistant": ["ai helper", "virtual assistant", "AI assistant", "personal assistant", "intelligent assistant", "digital assistant", "aide", "helper"],
  "generator": ["creation", "AI generator", "content generator", "image generator", "text generator", "creative generator", "maker", "creator"],
  "editor": ["editing", "modification", "AI editor", "content editor", "image editor", "video editor", "text editor", "photo editor"],
  "chat": ["conversation", "messaging", "talk", "dialogue", "communication", "chatbot", "ai chat", "conversational"],
  
  // Industry-Specific
  "healthcare": ["medical", "health", "clinical", "AI healthcare", "medical AI", "health tools", "clinical AI", "medicine", "patient care"],
  "medical": ["healthcare", "medicine", "clinical", "doctor", "patient", "diagnosis", "treatment", "health", "medical AI"],
  "education": ["learning", "teaching", "academic", "AI education", "educational AI", "learning tools", "teaching AI", "school", "student"],
  "finance": ["financial", "banking", "investment", "AI finance", "financial AI", "fintech", "trading AI", "money", "economics"],
  "legal": ["law", "compliance", "legal AI", "law tools", "legal tech", "compliance AI", "attorney", "lawyer", "judicial"],
  
  // Automotive Keywords - ENHANCED FOR CAR SEARCH
  "car": ["automobile", "automotive", "vehicle", "auto", "cars", "transportation", "driving", "motor", "car maintenance", "auto repair", "vehicle diagnostics", "automotive tools", "car buying", "automobile gpt"],
  "automobile": ["car", "automotive", "vehicle", "auto", "cars", "transportation", "driving", "motor", "auto industry", "car gpt", "automotive gpt"],
  "automotive": ["car", "automobile", "vehicle", "auto", "cars", "transportation", "driving", "motor", "auto repair", "car maintenance", "vehicle diagnostics"],
  "vehicle": ["car", "automobile", "automotive", "auto", "cars", "transportation", "driving", "motor", "truck", "suv"],
  "auto": ["car", "automobile", "automotive", "vehicle", "cars", "automatic", "auto repair", "auto maintenance", "auto industry"],
  
  // Learning and Skills
  "learn": ["education", "study", "skill", "course", "training", "tutorial", "lesson", "teaching", "learning", "knowledge", "instruction"],
  "skill": ["ability", "talent", "expertise", "competency", "proficiency", "capability", "training", "development", "learning"],
  "course": ["class", "lesson", "tutorial", "training", "education", "curriculum", "program", "workshop", "seminar"],
  "tutorial": ["guide", "lesson", "instruction", "how-to", "walkthrough", "training", "learning", "educational"],
  "training": ["education", "learning", "skill development", "course", "workshop", "instruction", "coaching"],
  
  // Entertainment and Gaming
  "game": ["gaming", "entertainment", "fun", "play", "interactive", "video game", "game development", "gaming AI"],
  "entertainment": ["fun", "leisure", "amusement", "recreation", "gaming", "media", "content", "show"],
  "fun": ["entertainment", "enjoyable", "amusing", "recreational", "playful", "engaging", "interactive"],
  
  // Communication and Social
  "social": ["media", "network", "community", "sharing", "communication", "interaction", "platform", "connect"],
  "communication": ["messaging", "chat", "talk", "conversation", "interaction", "contact", "dialogue"],
  "translate": ["translation", "language", "convert", "interpret", "multilingual", "localization"],
  
  // Popular Features
  "free": ["no cost", "gratis", "complimentary", "free AI tools", "free software", "no payment", "open source", "zero cost"],
  "premium": ["paid", "subscription", "pro", "premium AI", "professional tools", "paid AI", "advanced", "commercial"],
  "online": ["web", "browser", "cloud", "online AI", "web tools", "browser AI", "internet", "web-based"],
  "offline": ["local", "desktop", "standalone", "no internet", "local AI", "offline tools"],
  "real-time": ["live", "instant", "immediate", "real-time AI", "instant AI", "live processing", "on-demand"],
  
  // Search Intent Keywords
  "best": ["top", "recommended", "popular", "best AI tools", "top AI", "recommended AI", "leading", "excellent"],
  "how": ["tutorial", "guide", "instructions", "how to use AI", "AI tutorial", "AI guide", "method", "process"],
  "comparison": ["vs", "versus", "compare", "AI comparison", "tool comparison", "AI vs", "difference", "evaluate"],
  "review": ["evaluation", "assessment", "AI review", "tool review", "AI evaluation", "rating", "feedback"],
  
  // Trending AI Terms
  "llm": ["large language model", "language model", "AI model", "GPT", "natural language", "transformer", "neural language"],
  "prompt": ["prompt engineering", "AI prompts", "prompt design", "AI instructions", "command", "query"],
  "workflow": ["automation", "process", "pipeline", "AI workflow", "automated workflow", "procedure", "system"],
  "integration": ["connect", "API", "plugin", "AI integration", "tool integration", "combine", "merge"],
  "multimodal": ["text and image", "multiple formats", "AI multimodal", "cross-modal AI", "vision and language"],
  
  // User Intent
  "create": ["generate", "make", "build", "produce", "AI creation", "creative AI", "construct", "develop"],
  "edit": ["modify", "change", "update", "AI editing", "editing tools", "revise", "improve"],
  "analyze": ["examine", "study", "research", "AI analysis", "analytical AI", "investigate", "assess"],
  "optimize": ["improve", "enhance", "better", "AI optimization", "performance AI", "refine", "streamline"],
  "automate": ["automatic", "streamline", "AI automation", "automated tools", "mechanize", "systematize"],
  
  // Platform Types
  "mobile": ["app", "smartphone", "tablet", "mobile AI", "AI app", "phone", "ios", "android"],
  "desktop": ["computer", "software", "application", "desktop AI", "local AI", "pc", "mac"],
  "cloud": ["online", "web", "saas", "cloud AI", "AI cloud", "cloud tools", "remote", "hosted"],
  
  // Advanced AI Concepts
  "neural": ["network", "deep learning", "AI neural", "neural AI", "brain-inspired", "artificial neural network"],
  "generative": ["creative", "generation", "AI generative", "generative AI", "creative AI", "synthetic"],
  "conversational": ["chat", "dialogue", "AI conversation", "conversational AI", "chat AI", "interactive"],
  "predictive": ["forecasting", "prediction", "AI predictive", "predictive analytics", "forecasting AI", "future"],
  "cognitive": ["thinking", "intelligence", "AI cognitive", "cognitive AI", "intelligent systems", "reasoning"],
  
  // Health and Wellness
  "wellness": ["health", "wellbeing", "fitness", "mental health", "self care", "lifestyle", "healthy"],
  "fitness": ["exercise", "workout", "health", "training", "physical", "gym", "sport", "activity"],
  "mental": ["health", "wellness", "psychology", "therapy", "emotional", "mindfulness", "stress"],
  
  // Creative and Media
  "photo": ["image", "picture", "photography", "visual", "camera", "snapshot", "portrait"],
  "voice": ["audio", "speech", "sound", "vocal", "speaking", "narration", "pronunciation"],
  "podcast": ["audio", "show", "episode", "broadcast", "media", "content", "listening"],
  
  // Specific Tools and Services
  "einstein": ["physics", "genius", "scientist", "smart", "intelligent", "brilliant", "scientific"],
  "celebrity": ["famous", "star", "actor", "musician", "public figure", "personality", "icon"],
  "dream": ["sleep", "subconscious", "interpretation", "meaning", "psychology", "symbols"],
  "cannabis": ["marijuana", "weed", "hemp", "medical marijuana", "cbd", "thc", "plant"],
  "fishing": ["angling", "fish", "outdoor", "sport", "recreation", "water", "hobby"],
  "peace": ["meditation", "calm", "tranquil", "serenity", "mindfulness", "relaxation", "zen"],
  "binary": ["code", "programming", "computer", "digital", "conversion", "numbers", "computing"],
  "food": ["nutrition", "cooking", "recipe", "meal", "diet", "culinary", "eating", "quality"],
  "quality": ["standard", "grade", "assessment", "evaluation", "rating", "measure", "level"],
  
  // Professional Services
  "consulting": ["advisory", "guidance", "expert", "professional", "consultation", "advice"],
  "therapy": ["counseling", "treatment", "healing", "psychological", "mental health", "therapeutic"],
  "coaching": ["training", "mentoring", "guidance", "development", "instruction", "teaching"],
  
  // Time and Productivity
  "schedule": ["calendar", "time", "planning", "organization", "appointment", "agenda"],
  "task": ["todo", "work", "assignment", "job", "activity", "duty", "project"],
  "project": ["work", "assignment", "task", "job", "undertaking", "initiative"],
  
  // Technology and Computing
  "software": ["program", "application", "tool", "system", "platform", "technology"],
  "technology": ["tech", "digital", "innovation", "computing", "modern", "advanced"],
  "digital": ["electronic", "online", "virtual", "cyber", "computerized", "tech"],
  
  // Language and Communication
  "language": ["linguistic", "communication", "speaking", "writing", "verbal", "tongue"],
  "english": ["language", "communication", "writing", "speaking", "grammar", "vocabulary"],
  "grammar": ["language", "writing", "english", "syntax", "structure", "rules"],
  
  // Science and Research
  "science": ["scientific", "research", "study", "knowledge", "discovery", "investigation"],
  "scientific": ["science", "research", "academic", "scholarly", "empirical", "systematic"],
  "experiment": ["test", "trial", "research", "study", "investigation", "analysis"],
  
  // Emotions and Psychology
  "emotion": ["feeling", "mood", "psychological", "mental", "emotional", "sentiment"],
  "mood": ["emotion", "feeling", "state", "mental", "psychological", "temperament"],
  "stress": ["pressure", "tension", "anxiety", "strain", "mental health", "wellness"],
  
  // Money and Finance
  "money": ["finance", "financial", "economic", "currency", "cash", "payment"],
  "investment": ["finance", "money", "financial", "portfolio", "trading", "economic"],
  "trading": ["investment", "finance", "market", "stocks", "financial", "economic"],
  
  // Home and Lifestyle
  "home": ["house", "domestic", "household", "residence", "living", "family"],
  "lifestyle": ["living", "way of life", "habits", "routine", "personal", "wellness"],
  "family": ["relatives", "household", "domestic", "personal", "relationships", "home"],
  
  // Travel and Geography
  "travel": ["trip", "journey", "vacation", "tourism", "adventure", "exploration"],
  "location": ["place", "position", "geography", "area", "region", "spot"],
  "map": ["geography", "location", "navigation", "direction", "spatial", "route"]
};

// Enhanced search synonyms for better matching
export const searchSynonyms: Record<string, string[]> = {
  "AI": ["artificial intelligence", "machine learning", "smart", "intelligent", "automated"],
  "tool": ["software", "application", "platform", "solution", "utility", "service"],
  "generator": ["creator", "maker", "builder", "producer", "engine"],
  "assistant": ["helper", "aide", "companion", "guide", "support"],
  "free": ["gratis", "no cost", "complimentary", "open source"],
  "premium": ["paid", "pro", "professional", "advanced", "subscription"],
  "create": ["generate", "make", "build", "produce", "design"],
  "edit": ["modify", "change", "update", "enhance", "improve"],
  "analyze": ["examine", "study", "review", "assess", "evaluate"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "AI Assistants": ["chatbot", "virtual assistant", "AI chat", "conversational AI", "digital assistant"],
  "Image Generation": ["AI art", "image generator", "visual AI", "art creation", "picture generator"],
  "Writing & Content": ["AI writing", "content creation", "text generator", "copywriting", "article writer"],
  "Video Tools": ["video AI", "video generator", "film AI", "video editing", "animation AI", "video creation", "video editing", "film production", "animation"],
  "Audio & Music": ["music AI", "audio generator", "sound AI", "music creation", "voice AI"],
  "Business & Productivity": ["business AI", "productivity tools", "workflow automation", "business automation"],
  "Education & Learning": ["educational AI", "learning tools", "teaching AI", "academic AI"],
  "Creative Services": ["creative AI", "design tools", "artistic AI", "creative automation"],
  "Healthcare": ["medical AI", "health tools", "wellness AI", "healthcare technology"]
};
