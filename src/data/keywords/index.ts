// Main keyword mapping index that combines all keyword categories
import { coreAIKeywords } from './coreAIKeywords';
import { creativeKeywords } from './creativeKeywords';
import { businessKeywords } from './businessKeywords';
import { technicalKeywords } from './technicalKeywords';
import { industryKeywords } from './industryKeywords';
import { contentKeywords } from './contentKeywords';
import { userIntentKeywords } from './userIntentKeywords';
import { specialtyKeywords } from './specialtyKeywords';
import { searchMetaKeywords } from './searchMetaKeywords';
import { aiWebToolsKeywords } from './aiWebToolsKeywords';

// Enhanced keyword mapping for intelligent search - AI tools focused
export const keywordMapping: Record<string, string[]> = {
  ...coreAIKeywords,
  ...creativeKeywords,
  ...businessKeywords,
  ...technicalKeywords,
  ...industryKeywords,
  ...contentKeywords,
  ...userIntentKeywords,
  ...specialtyKeywords,
  ...searchMetaKeywords,
  ...aiWebToolsKeywords,
  
  // Text-to-speech and voice AI keywords
  "tts": ["text to speech", "text-to-speech", "speech synthesis", "voice generation", "eleven labs", "elevenlabs", "voice ai", "speech ai", "voice cloning", "synthetic voice"],
  "text to speech": ["tts", "speech synthesis", "voice generation", "eleven labs", "elevenlabs", "voice ai", "artificial voice", "voice cloning", "voice over", "narration"],
  "text-to-speech": ["tts", "speech synthesis", "voice generation", "eleven labs", "elevenlabs", "voice ai", "artificial voice", "voice cloning", "voice over", "narration"],
  "speech synthesis": ["tts", "text to speech", "voice generation", "eleven labs", "elevenlabs", "voice ai", "artificial voice", "synthetic voice"],
  "voice generation": ["tts", "text to speech", "speech synthesis", "eleven labs", "elevenlabs", "voice ai", "voice cloning", "synthetic voice", "artificial voice"],
  "voice cloning": ["voice clone", "voice generation", "eleven labs", "elevenlabs", "voice ai", "synthetic voice", "artificial voice", "speech synthesis"],
  "voice clone": ["voice cloning", "voice generation", "eleven labs", "elevenlabs", "voice ai", "synthetic voice", "artificial voice"],
  "eleven labs": ["elevenlabs", "tts", "text to speech", "voice generation", "voice cloning", "speech synthesis", "voice ai", "sound effects", "audio ai"],
  "elevenlabs": ["eleven labs", "tts", "text to speech", "voice generation", "voice cloning", "speech synthesis", "voice ai", "sound effects", "audio ai"],
  "voice ai": ["voice generation", "speech synthesis", "tts", "eleven labs", "elevenlabs", "voice cloning", "artificial voice", "synthetic voice"],
  "speech ai": ["speech synthesis", "voice generation", "tts", "eleven labs", "elevenlabs", "voice ai", "speech technology"],
  "voice over": ["voiceover", "narration", "tts", "text to speech", "voice generation", "eleven labs", "elevenlabs", "voice ai"],
  "voiceover": ["voice over", "narration", "tts", "text to speech", "voice generation", "eleven labs", "elevenlabs", "voice ai"],
  "narration": ["voice over", "voiceover", "tts", "text to speech", "voice generation", "eleven labs", "elevenlabs"],
  "synthetic voice": ["artificial voice", "voice generation", "voice ai", "speech synthesis", "eleven labs", "elevenlabs", "voice cloning"],
  "artificial voice": ["synthetic voice", "voice generation", "voice ai", "speech synthesis", "eleven labs", "elevenlabs", "voice cloning"],
  
  // Sound generation and audio effects keywords
  "sound effects": ["sfx", "sound generation", "audio effects", "eleven labs", "elevenlabs", "audio ai", "sound ai", "foley", "ambient sounds"],
  "sound generation": ["sound effects", "audio generation", "eleven labs", "elevenlabs", "audio ai", "sound ai", "sound design"],
  "audio generation": ["sound generation", "audio ai", "eleven labs", "elevenlabs", "sound effects", "audio effects", "sound design"],
  "audio effects": ["sound effects", "audio generation", "sfx", "eleven labs", "elevenlabs", "audio ai", "sound design"],
  "sfx": ["sound effects", "audio effects", "sound generation", "eleven labs", "elevenlabs", "audio ai", "foley"],
  "sound design": ["sound effects", "audio effects", "sound generation", "eleven labs", "elevenlabs", "audio ai", "audio production"],
  "audio ai": ["sound generation", "audio effects", "eleven labs", "elevenlabs", "voice ai", "speech ai", "sound ai", "audio technology"],
  "sound ai": ["audio ai", "sound generation", "eleven labs", "elevenlabs", "sound effects", "audio effects"],
  "foley": ["sound effects", "sfx", "audio effects", "sound design", "eleven labs", "elevenlabs"],
  "ambient": ["ambient sounds", "sound effects", "audio effects", "sound generation", "eleven labs", "elevenlabs"],
  "audio production": ["sound design", "audio editing", "sound effects", "eleven labs", "elevenlabs", "audio ai", "voice production"],
  
  // Cannabis and marijuana related keywords - comprehensive slang and terms
  "weed": ["cannabis", "marijuana", "pot", "ganja", "herb", "bud", "green", "mary jane", "420", "thc", "cbd", "hemp", "medical marijuana", "recreational cannabis", "dispensary", "strain", "indica", "sativa", "hybrid"],
  "cannabis": ["marijuana", "weed", "pot", "hemp", "cbd", "thc", "medical cannabis", "recreational marijuana", "dispensary", "strain", "cultivation", "grow", "420", "ganja", "herb", "bud"],
  "marijuana": ["cannabis", "weed", "pot", "mary jane", "ganja", "herb", "420", "thc", "cbd", "medical marijuana", "recreational cannabis", "dispensary", "strain", "bud", "green"],
  "pot": ["cannabis", "marijuana", "weed", "herb", "ganja", "420", "thc", "cbd", "april 20", "four twenty", "cannabis culture", "medical marijuana"],
  "420": ["cannabis", "marijuana", "weed", "pot", "herb", "ganja", "thc", "cbd", "april 20", "four twenty", "cannabis culture", "medical marijuana"],
  "ganja": ["cannabis", "marijuana", "weed", "pot", "herb", "420", "rastafarian", "jamaican", "reggae", "bob marley", "thc", "cbd"],
  "herb": ["cannabis", "marijuana", "weed", "pot", "ganja", "420", "natural", "herbal", "botanical", "medicinal herbs", "thc", "cbd"],
  "mary jane": ["cannabis", "marijuana", "weed", "pot", "ganja", "420", "thc", "cbd", "herb", "bud", "green"],
  "bud": ["cannabis", "marijuana", "weed", "flower", "nug", "420", "thc", "cbd", "strain", "indica", "sativa", "dispensary"],
  "thc": ["cannabis", "marijuana", "psychoactive", "tetrahydrocannabinol", "420", "high", "euphoria", "medical marijuana", "recreational cannabis"],
  "cbd": ["cannabidiol", "cannabis", "hemp", "non-psychoactive", "medical", "wellness", "pain relief", "anxiety", "therapeutic"],
  "hemp": ["cannabis", "cbd", "industrial hemp", "fiber", "seeds", "oil", "legal cannabis", "non-psychoactive", "sustainable"],
  "dispensary": ["cannabis store", "marijuana shop", "medical marijuana", "recreational cannabis", "cannabis retail", "420", "legal cannabis"],
  "strain": ["cannabis variety", "indica", "sativa", "hybrid", "genetics", "cultivation", "effects", "terpenes", "420"],

  // Communication and phone-related keywords
  "phone": ["call", "voice", "communication", "telephone", "mobile", "cellular", "calling", "dial", "contact", "chat", "conversation", "talk", "speak", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent"],
  "call": ["phone", "voice", "calling", "telephone", "communication", "dial", "contact", "conversation", "chat", "talk", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent"],
  "voice": ["speech", "audio", "sound", "call", "phone", "talk", "speak", "vocal", "microphone", "recording", "voice agent", "ai voice", "call agent"],
  "chat": ["conversation", "talk", "communication", "messaging", "text", "dialogue", "discussion", "speak", "call agent", "ai agent"],
  "talk": ["speak", "voice", "conversation", "chat", "communication", "dialogue", "discussion", "call"],
  
  // Call center and agent specific keywords
  "agent": ["assistant", "bot", "ai", "helper", "representative", "operator", "call agent", "voice agent", "nucleus", "inbound", "outbound"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "representatives", "operators", "call agents", "voice agents", "nucleus", "inbound agents", "outbound agents"],
  "call agent": ["phone agent", "voice agent", "ai agent", "call center", "inbound", "outbound", "nucleus", "telephone agent"],
  "call agents": ["phone agents", "voice agents", "ai agents", "call center", "inbound agents", "outbound agents", "nucleus", "telephone agents"],
  "inbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "incoming calls", "customer service"],
  "outbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "outgoing calls", "sales calls"],
  "nucleus": ["call agent", "ai agent", "inbound", "call center", "phone", "voice", "communication", "call platform"],
  "call center": ["call agent", "phone agent", "voice agent", "inbound", "outbound", "nucleus", "customer service"],
  
  // Celebrity and entertainment keywords
  "celebrity": ["famous", "star", "actor", "musician", "entertainer", "public figure", "personality", "artist", "performer"],
  "famous": ["celebrity", "star", "well-known", "renowned", "popular", "notable", "prominent"],
  "chatline": ["phone", "call", "conversation", "talk", "communication", "celebrity", "chat"],
  
  // Enhanced AI and tech slang
  "ai": ["artificial intelligence", "machine learning", "neural network", "deep learning", "bot", "chatbot", "gpt", "llm", "algorithm", "automation"],
  "gpt": ["chatgpt", "openai", "language model", "conversational ai", "text generation", "ai assistant", "chat bot", "artificial intelligence"],
  "bot": ["chatbot", "ai", "automated", "robot", "assistant", "agent", "artificial intelligence", "machine"],
  
  // Creative and design slang
  "art": ["artwork", "creative", "design", "artistic", "visual", "drawing", "painting", "illustration", "graphic design", "digital art"],
  "design": ["creative", "art", "graphic", "visual", "style", "aesthetic", "layout", "interface", "ui", "ux"],
  "video": ["film", "movie", "clip", "footage", "recording", "cinematography", "editing", "production", "youtube", "tiktok"],
  "music": ["audio", "sound", "song", "track", "beat", "melody", "composition", "production", "spotify", "soundcloud"],
  
  // Business and productivity slang
  "business": ["company", "corporate", "enterprise", "commercial", "work", "office", "professional", "b2b", "startup"],
  "money": ["finance", "financial", "cash", "payment", "revenue", "profit", "income", "salary", "investment", "trading"],
  "work": ["job", "career", "employment", "office", "professional", "productivity", "business", "workplace"],
  
  // Social media and platform slang
  "social": ["facebook", "instagram", "twitter", "tiktok", "linkedin", "youtube", "social media", "networking", "community"],
  "content": ["creation", "generate", "make", "produce", "write", "create", "build", "develop", "blog", "post"],
  "youtube": ["video", "content creation", "streaming", "monetization", "views", "subscribers", "channel"],
  "instagram": ["photos", "stories", "reels", "influencer", "social media", "hashtags", "followers"],
  "tiktok": ["short video", "viral", "trending", "social media", "content creation", "dance", "music"],
  
  // Health and wellness slang
  "health": ["medical", "wellness", "fitness", "doctor", "healthcare", "medicine", "nutrition", "exercise"],
  "fitness": ["exercise", "workout", "gym", "health", "training", "muscle", "cardio", "strength"],
  "mental": ["psychology", "therapy", "counseling", "wellness", "mindfulness", "meditation", "stress", "anxiety"],
  
  // Gaming and entertainment slang
  "game": ["gaming", "video game", "play", "entertainment", "fun", "interactive", "console", "pc gaming"],
  "gaming": ["video games", "esports", "streaming", "twitch", "console", "pc", "mobile games", "gameplay"],
  
  // Learning and education slang
  "learn": ["education", "study", "training", "course", "tutorial", "skill", "knowledge", "school", "university"],
  "study": ["learning", "education", "research", "academic", "homework", "exam", "knowledge", "school"],
  "course": ["class", "lesson", "tutorial", "training", "education", "online learning", "certification"],
  
  // Tech and development slang
  "code": ["programming", "coding", "development", "software", "computer", "tech", "developer", "github"],
  "app": ["application", "software", "mobile app", "web app", "program", "tool", "platform"],
  "website": ["web", "site", "online", "internet", "domain", "webpage", "blog", "portfolio"],
  
  // Food and cooking slang
  "food": ["cooking", "recipe", "kitchen", "chef", "restaurant", "cuisine", "meal", "nutrition"],
  "cooking": ["recipe", "chef", "kitchen", "food", "meal prep", "baking", "culinary", "ingredients"],
  
  // Additional professional services
  "doctor": ["medical", "health", "healthcare", "physician", "medicine", "clinic", "treatment", "dr", "md"],
  "lawyer": ["legal", "attorney", "law", "court", "justice", "legal advice", "counsel", "litigation"],
  "legal": ["law", "lawyer", "attorney", "court", "justice", "counsel", "advice", "contract", "litigation"],
  
  // Travel and transportation
  "travel": ["trip", "vacation", "journey", "tourism", "flight", "hotel", "destination", "adventure"],
  "car": ["vehicle", "automobile", "transportation", "driving", "automotive", "motor", "wheels"],
  
  // Time and productivity
  "time": ["schedule", "calendar", "clock", "timing", "deadline", "productivity", "management", "planning"],
  "productivity": ["efficiency", "workflow", "automation", "organization", "business", "work", "time management"],
  
  // Robotics and automation
  "robot": ["robotics", "automation", "mechanical", "ai", "android", "cyborg", "artificial", "machine"],
  "robotics": ["robot", "robotics companies", "humanoid robots", "robot manufacturers", "robot distributors"],
  "humanoid": ["humanoid robots", "bipedal robots", "human-like robots", "android", "cyborg"],
  "unitree": ["unitree robotics", "G1 robot", "quadruped robots", "robot dogs"],
  "boston dynamics": ["atlas robot", "spot robot", "dynamic robotics", "advanced robotics"],
  "agility": ["digit robot", "bipedal locomotion", "warehouse robotics"],
  "tesla bot": ["optimus robot", "tesla robotics", "general purpose robots"],
  "sophia": ["hanson robotics", "social robots", "conversational robots"],
  "pepper": ["softbank robotics", "nao robot", "service robots"],
  "manufacturing robots": ["industrial robots", "factory automation", "robotic workers"],
  "service robots": ["hospitality robots", "healthcare robots", "retail robots"],
  "research robots": ["academic robotics", "laboratory robots", "experimental robots"]
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
  "analyze": ["examine", "study", "review", "assess", "evaluate"],
  "design": ["create", "build", "craft", "develop", "style"],
  "cover": ["wrapper", "jacket", "face", "front", "surface"],
  "graph": ["chart", "diagram", "plot", "visualization", "infographic"],
  "3d": ["three dimensional", "3D modeling", "3D design", "three-d"],
  "automation": ["workflow", "process automation", "task automation", "auto"],
  "analytics": ["data analysis", "business intelligence", "reporting", "metrics"],
  "robot": ["robotics", "humanoid", "android", "automaton", "cyborg"],
  "humanoid": ["human-like", "bipedal", "android", "anthropomorphic"],
  "phone": ["call", "telephone", "mobile", "cellular", "voice", "communication", "call agent", "nucleus"],
  "call": ["phone", "voice", "telephone", "contact", "dial", "ring", "call agent", "nucleus"],
  "celebrity": ["famous", "star", "actor", "musician", "public figure"],
  "agent": ["assistant", "bot", "ai", "helper", "call agent", "voice agent", "nucleus"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "call agents", "voice agents", "nucleus"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "Creative Suites": ["creative tools", "design suites", "artistic platforms", "creative AI", "multimedia", "professional creative", "all-in-one creative"],
  "Advanced AI Tools": ["advanced AI", "AI platforms", "sophisticated AI", "AI development", "enterprise AI", "professional AI"],
  "Video & Content Creation": ["video AI", "video generator", "film AI", "video editing", "animation AI", "video creation", "content creation", "multimedia"],
  "Image & Design Tools": ["AI art", "image generator", "visual AI", "art creation", "picture generator", "design tools", "graphic design", "cover design", "logo design"],
  "Writing & Content Creation": ["AI writing", "content creation", "text generator", "copywriting", "article writer", "writing assistant"],
  "Business & Productivity": ["business AI", "productivity tools", "workflow automation", "business automation", "office tools"],
  "Audio & Voice Tools": ["music AI", "audio generator", "sound AI", "music creation", "voice AI", "audio editing", "call", "phone", "voice assistant"],
  "AI Development Tools": ["AI development", "machine learning", "neural networks", "AI programming", "developer tools"],
  "Education & Learning": ["educational AI", "learning tools", "teaching AI", "academic AI", "training tools"],
  "Specialized Tools": ["niche tools", "technical tools", "industry-specific", "professional tools", "expert systems"],
  "Time & History": ["historical AI", "time tools", "history research", "historical analysis", "timeline tools"],
  "Spirituality & Wellness": ["spiritual AI", "wellness tools", "meditation AI", "spiritual guidance", "mindfulness"],
  "Game Design & Development": ["game AI", "game development", "gaming tools", "game design", "interactive entertainment"],
  "Emergency Services": ["emergency tools", "safety AI", "crisis management", "first aid", "disaster response"],
  "Professional Services": ["professional AI", "service tools", "business services", "expert assistance", "consultation tools", "doctor", "lawyer", "medical", "legal"],
  "3D & Visualization": ["3D modeling", "3D design", "3D animation", "3D rendering", "visualization", "three dimensional", "3D tools"],
  "Data & Analytics": ["data analysis", "business intelligence", "analytics", "data visualization", "reporting", "dashboards", "metrics"],
  "Automation & Workflows": ["automation", "workflow", "process automation", "task automation", "business automation", "workflow tools"],
  "Robotics Companies": ["robotics", "humanoid robots", "robot manufacturers", "robot distributors", "commercial robots", "industrial robots", "service robots", "research robots", "bipedal robots", "quadruped robots", "robot companies", "robotics industry"],
  "Communication & Entertainment": ["phone", "call", "voice", "chat", "talk", "celebrity", "entertainment", "conversation", "communication tools", "call agents", "voice agents", "call center", "nucleus"],
  "Call Center & Voice AI": ["call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI"]
};

// Export individual keyword categories for specific use cases
export {
  coreAIKeywords,
  creativeKeywords,
  businessKeywords,
  technicalKeywords,
  industryKeywords,
  contentKeywords,
  userIntentKeywords,
  specialtyKeywords,
  searchMetaKeywords,
};
