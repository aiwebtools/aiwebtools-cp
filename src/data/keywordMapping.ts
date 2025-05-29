
// Enhanced keyword mapping for intelligent search - AI tools focused
export const keywordMapping: Record<string, string[]> = {
  // Core AI Keywords
  "ai": ["artificial intelligence", "machine learning", "automation", "gpt", "claude", "gemini", "chatbot", "assistant", "neural network", "deep learning", "AI tools", "artificial intelligence tools", "AI software", "AI platforms", "AI solutions"],
  "artificial": ["ai", "intelligence", "machine", "automation", "synthetic", "artificial intelligence", "AI tools", "machine learning", "neural networks"],
  "intelligence": ["ai", "artificial", "smart", "cognitive", "machine learning", "neural", "intelligent systems", "AI intelligence"],
  "machine": ["learning", "ai", "artificial", "automation", "algorithm", "ML", "machine learning tools", "AI machine"],
  "automation": ["ai", "workflow", "business", "productivity", "automated", "smart automation", "AI automation", "process automation"],
  
  // Popular AI Models and Platforms
  "gpt": ["openai", "chatgpt", "language model", "llm", "generative ai", "GPT-4", "GPT-3", "text generation", "AI writing"],
  "chatgpt": ["openai", "gpt", "ai chat", "conversational ai", "chat assistant", "AI chatbot", "language model"],
  "claude": ["anthropic", "ai assistant", "llm", "conversational ai", "AI chat", "intelligent assistant", "Haiku", "Sonnet", "Opus"],
  "gemini": ["google", "ai assistant", "multimodal", "google ai", "bard", "AI chat", "intelligent assistant"],
  "openai": ["gpt", "chatgpt", "dall-e", "api", "AI platform", "artificial intelligence", "language models"],
  
  // Creative AI Tools
  "art": ["design", "creative", "visual", "drawing", "painting", "illustration", "artistic", "AI art", "generative art", "digital art", "art generator", "creative tools"],
  "design": ["graphic", "visual", "creative", "art", "ui", "ux", "website", "logo", "illustration", "AI design", "design tools", "creative design"],
  "image": ["generation", "ai art", "visual", "picture", "photo", "graphic", "AI image", "image generator", "picture generator", "visual AI"],
  "video": ["editing", "creation", "production", "AI video", "video generator", "film", "movie", "animation", "video AI", "video tools"],
  "music": ["audio", "sound", "composition", "AI music", "music generator", "audio AI", "song creation", "music production", "audio tools"],
  
  // Business and Productivity
  "business": ["productivity", "enterprise", "commercial", "professional", "business tools", "AI business", "business automation", "workflow"],
  "productivity": ["efficiency", "workflow", "automation", "business", "tools", "productivity AI", "work tools", "efficiency tools"],
  "writing": ["content", "text", "copywriting", "authoring", "AI writing", "writing assistant", "content creation", "text generation"],
  "content": ["creation", "writing", "marketing", "blog", "article", "content AI", "content generator", "creative content"],
  
  // Technical and Development
  "code": ["programming", "development", "software", "coding", "AI coding", "code generator", "programming AI", "developer tools"],
  "programming": ["code", "development", "software", "coding", "AI programming", "coding assistant", "developer AI"],
  "development": ["coding", "programming", "software", "web development", "AI development", "developer tools", "coding tools"],
  "api": ["integration", "development", "programming", "AI API", "API tools", "developer API", "AI integration"],
  
  // Data and Analytics
  "data": ["analysis", "analytics", "research", "insights", "AI data", "data analysis", "data science", "analytics AI"],
  "analytics": ["data", "analysis", "insights", "metrics", "AI analytics", "data analytics", "business intelligence"],
  "analysis": ["data", "research", "insights", "examination", "AI analysis", "analytical tools", "data analysis"],
  
  // Specific Tool Categories
  "chatbot": ["ai chat", "conversational ai", "customer service", "chat assistant", "AI chatbot", "intelligent chat"],
  "assistant": ["ai helper", "virtual assistant", "AI assistant", "personal assistant", "intelligent assistant", "digital assistant"],
  "generator": ["creation", "AI generator", "content generator", "image generator", "text generator", "creative generator"],
  "editor": ["editing", "modification", "AI editor", "content editor", "image editor", "video editor"],
  
  // Industry-Specific
  "healthcare": ["medical", "health", "clinical", "AI healthcare", "medical AI", "health tools", "clinical AI"],
  "education": ["learning", "teaching", "academic", "AI education", "educational AI", "learning tools", "teaching AI"],
  "finance": ["financial", "banking", "investment", "AI finance", "financial AI", "fintech", "trading AI"],
  "marketing": ["advertising", "promotion", "digital marketing", "AI marketing", "marketing tools", "ad AI"],
  "legal": ["law", "compliance", "legal AI", "law tools", "legal tech", "compliance AI"],
  
  // Automotive Keywords - ENHANCED FOR CAR SEARCH
  "car": ["automobile", "automotive", "vehicle", "auto", "cars", "transportation", "driving", "motor", "car maintenance", "auto repair", "vehicle diagnostics", "automotive tools", "car buying", "automobile gpt"],
  "automobile": ["car", "automotive", "vehicle", "auto", "cars", "transportation", "driving", "motor", "auto industry", "car gpt", "automotive gpt"],
  "automotive": ["car", "automobile", "vehicle", "auto", "cars", "transportation", "driving", "motor", "auto repair", "car maintenance", "vehicle diagnostics"],
  "vehicle": ["car", "automobile", "automotive", "auto", "cars", "transportation", "driving", "motor", "truck", "suv"],
  "auto": ["car", "automobile", "automotive", "vehicle", "cars", "automatic", "auto repair", "auto maintenance", "auto industry"],
  
  // Popular Features
  "free": ["no cost", "gratis", "complimentary", "free AI tools", "free software", "no payment"],
  "premium": ["paid", "subscription", "pro", "premium AI", "professional tools", "paid AI"],
  "online": ["web", "browser", "cloud", "online AI", "web tools", "browser AI"],
  "real-time": ["live", "instant", "immediate", "real-time AI", "instant AI", "live processing"],
  
  // Search Intent Keywords
  "best": ["top", "recommended", "popular", "best AI tools", "top AI", "recommended AI"],
  "how": ["tutorial", "guide", "instructions", "how to use AI", "AI tutorial", "AI guide"],
  "comparison": ["vs", "versus", "compare", "AI comparison", "tool comparison", "AI vs"],
  "review": ["evaluation", "assessment", "AI review", "tool review", "AI evaluation"],
  
  // Trending AI Terms
  "llm": ["large language model", "language model", "AI model", "GPT", "natural language"],
  "prompt": ["prompt engineering", "AI prompts", "prompt design", "AI instructions"],
  "workflow": ["automation", "process", "pipeline", "AI workflow", "automated workflow"],
  "integration": ["connect", "API", "plugin", "AI integration", "tool integration"],
  "multimodal": ["text and image", "multiple formats", "AI multimodal", "cross-modal AI"],
  
  // User Intent
  "create": ["generate", "make", "build", "produce", "AI creation", "creative AI"],
  "edit": ["modify", "change", "update", "AI editing", "editing tools"],
  "analyze": ["examine", "study", "research", "AI analysis", "analytical AI"],
  "optimize": ["improve", "enhance", "better", "AI optimization", "performance AI"],
  "automate": ["automatic", "streamline", "AI automation", "automated tools"],
  
  // Platform Types
  "web": ["browser", "online", "cloud", "web AI", "browser AI", "online tools"],
  "mobile": ["app", "smartphone", "tablet", "mobile AI", "AI app"],
  "desktop": ["computer", "software", "application", "desktop AI", "local AI"],
  "cloud": ["online", "web", "saas", "cloud AI", "AI cloud", "cloud tools"],
  
  // Advanced AI Concepts
  "neural": ["network", "deep learning", "AI neural", "neural AI", "brain-inspired"],
  "generative": ["creative", "generation", "AI generative", "generative AI", "creative AI"],
  "conversational": ["chat", "dialogue", "AI conversation", "conversational AI", "chat AI"],
  "predictive": ["forecasting", "prediction", "AI predictive", "predictive analytics", "forecasting AI"],
  "cognitive": ["thinking", "intelligence", "AI cognitive", "cognitive AI", "intelligent systems"]
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
  "Creative Services": ["creative AI", "design tools", "artistic AI", "creative automation"]
};
