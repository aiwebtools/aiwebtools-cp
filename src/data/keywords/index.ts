
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
  
  // AI and assistant keywords
  "assistant": ["helper", "aide", "support", "guide", "ai", "bot", "agent", "companion"],
  "helper": ["assistant", "aide", "support", "guide", "tool", "utility"],
  
  // Content creation keywords
  "content": ["creation", "generate", "make", "produce", "write", "create", "build", "develop"],
  "create": ["make", "generate", "build", "produce", "design", "craft", "develop", "content"],
  "generate": ["create", "make", "produce", "build", "content", "ai", "automatic"],
  
  // Professional services keywords
  "doctor": ["medical", "health", "healthcare", "physician", "medicine", "clinic", "treatment"],
  "medical": ["health", "healthcare", "doctor", "physician", "medicine", "treatment", "diagnosis"],
  "lawyer": ["legal", "attorney", "law", "court", "justice", "legal advice", "counsel"],
  "legal": ["law", "lawyer", "attorney", "court", "justice", "counsel", "advice"],
  
  // Creative and design keywords
  "design": ["creative", "art", "graphic", "visual", "style", "aesthetic", "layout", "interface"],
  "art": ["creative", "design", "artistic", "visual", "drawing", "painting", "illustration"],
  "graphic": ["design", "visual", "art", "image", "picture", "illustration", "creative"],
  
  "business": ["professional", "corporate", "enterprise", "commercial", "work", "office", "company"],
  "productivity": ["efficiency", "workflow", "automation", "organization", "business", "work"],
  "workflow": ["automation", "process", "productivity", "business", "efficiency", "organization"],
  
  "learn": ["education", "study", "training", "course", "tutorial", "skill", "knowledge"],
  "education": ["learning", "study", "training", "course", "school", "academic", "knowledge"],
  "course": ["education", "learning", "training", "tutorial", "class", "lesson", "study"],
  
  "game": ["gaming", "entertainment", "play", "fun", "interactive", "video game", "puzzle"],
  "entertainment": ["fun", "game", "music", "video", "media", "leisure", "recreation"],
  "fun": ["entertainment", "game", "play", "enjoyable", "amusing", "recreation"],
  
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
