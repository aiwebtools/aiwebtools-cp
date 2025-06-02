
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
  
  // Enhanced Sound and Audio AI Tools - HIGHEST PRIORITY
  "sound": ["suno", "udio", "eleven labs", "murf", "speechify", "text to speech", "tts", "voice generation", "audio generation", "music generation", "ai music", "audio ai", "voice ai", "sound effects", "audio tools", "music tools", "voice tools", "sound generator", "audio creator", "music creator", "voice creator", "speech synthesis", "audio production", "sound design", "music video maker", "podcast script writer"],
  "audio": ["sound", "music", "voice", "speech", "suno", "udio", "eleven labs", "murf", "speechify", "text to speech", "tts", "voice generation", "audio generation", "music generation", "ai music", "audio ai", "voice ai", "sound effects", "audio tools", "music tools", "voice tools", "podcast", "audio production", "sound design"],
  "voice": ["speech", "audio", "sound", "eleven labs", "murf", "speechify", "text to speech", "tts", "voice generation", "voice cloning", "ai voice", "voice ai", "voice tools", "voice over", "narration", "voice synthesis", "call agent", "phone agent", "voice agent", "nucleus", "voice ai"],
  "speech": ["voice", "audio", "sound", "text to speech", "tts", "speech synthesis", "eleven labs", "murf", "speechify", "voice generation", "ai voice", "voice ai", "speech ai", "speech tools"],
  "music": ["suno", "udio", "music generation", "ai music", "song creation", "audio generation", "music maker", "music creator", "boomy", "aiva", "music video maker", "audio production", "sound generation", "music ai", "song maker", "music tools", "audio tools", "sound", "audio"],
  "tts": ["text to speech", "voice", "speech", "audio", "eleven labs", "murf", "speechify", "voice generation", "speech synthesis", "ai voice", "voice ai"],
  "text to speech": ["tts", "voice", "speech", "audio", "eleven labs", "murf", "speechify", "voice generation", "speech synthesis", "ai voice", "voice ai"],
  
  // Enhanced Book Writing keywords - NEW ADDITION
  "write a book": ["book writer gpt", "book writing", "novel creation", "storytelling", "author tools", "creative writing", "manuscript", "book creation"],
  "book writing": ["book writer gpt", "novel creation", "storytelling", "author tools", "creative writing", "manuscript", "book creation"],
  "write book": ["book writer gpt", "book writing", "novel creation", "storytelling", "author tools", "creative writing"],
  
  // Enhanced Training and Employee keywords - NEW ADDITION
  "train employees": ["training manual generator gpt", "employee training", "staff training", "training materials", "business training", "onboarding", "training development"],
  "employee training": ["training manual generator gpt", "staff training", "training materials", "business training", "onboarding", "training development"],
  "training manual": ["training manual generator gpt", "employee training", "training materials", "business training", "training guide"],
  "staff training": ["training manual generator gpt", "employee training", "training materials", "business training", "onboarding"],
  
  // Enhanced Image and Visual AI Tools
  "image": ["dalle", "midjourney", "stable diffusion", "leonardo ai", "runway", "firefly", "image generation", "ai art", "art generator", "visual ai", "photo generator", "picture generator", "image creator", "ai image", "graphics", "design", "visual tools"],
  "art": ["dalle", "midjourney", "image generation", "ai art", "art generator", "creative", "design", "visual", "drawing", "painting", "illustration", "artistic", "sketch", "graphics"],
  "generate": ["generation", "create", "make", "produce", "build", "ai generator", "generator", "creator", "maker"],
  
  // Enhanced Video AI Tools
  "video": ["luma dream machine", "pika labs", "runway", "sora", "video generation", "ai video", "video creator", "video maker", "video ai", "video tools", "movie maker", "film maker"],
  "film": ["video", "movie", "cinema", "film maker", "video creation", "video tools", "movie maker", "video ai"],
  
  // Enhanced Text and Writing AI Tools
  "write": ["writing", "content", "text", "copywriting", "article", "blog", "script", "book writer gpt", "creative writing", "content creation", "writing tools", "text generation"],
  "content": ["writing", "creation", "text", "article", "blog", "content creation", "content tools", "copywriting"],
  "text": ["writing", "content", "text generation", "copywriting", "article", "blog", "text tools"],
  
  // Enhanced Chat and Communication AI Tools
  "chat": ["chatgpt", "claude", "conversation", "ai chat", "chatbot", "assistant", "communication", "talk", "speak", "dialogue"],
  "assistant": ["ai assistant", "helper", "support", "guide", "chatbot", "ai agent", "personal assistant"],
  
  // Enhanced Design AI Tools
  "design": ["canva", "figma", "adobe", "graphic design", "ui design", "ux design", "web design", "logo design", "design tools", "creative design", "visual design"],
  "logo": ["logo design", "branding", "graphic design", "design", "visual identity", "brand design"],
  
  // Enhanced Code and Development AI Tools
  "code": ["coding", "programming", "development", "github copilot", "code generation", "ai coding", "programming tools", "developer tools", "code assistant"],
  "programming": ["coding", "code", "development", "software", "programming tools", "developer tools", "ai coding"],
  
  // Solar and renewable energy keywords - NEW ADDITION
  "sun": ["solar", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar installation", "solar energy", "solar land", "solar professional", "solar project"],
  "solar": ["solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar installation", "solar energy", "solar land", "solar professional", "solar project", "sun", "solar power"],
  
  // Enhanced Communication and phone-related keywords - HIGHEST PRIORITY
  "phone": ["call", "voice", "communication", "telephone", "mobile", "cellular", "calling", "dial", "contact", "chat", "conversation", "talk", "speak", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform", "nucleus ai", "phone automation", "call automation", "voice ai", "call ai", "phone ai"],
  "call": ["phone", "voice", "calling", "telephone", "communication", "dial", "contact", "conversation", "chat", "talk", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform", "nucleus ai", "phone automation", "call automation", "voice ai", "call ai", "phone ai"],
  "nucleus": ["nucleus ai", "nucleus ai inbound call agents platform", "call agent", "phone agent", "voice agent", "inbound", "outbound", "call center", "phone automation", "call automation", "ai agent", "phone", "call", "voice"],
  "talk": ["speak", "voice", "conversation", "chat", "communication", "dialogue", "discussion", "call"],
  "phonecall": ["phone", "call", "voice", "telephone", "communication", "call agent", "phone agent", "voice agent", "nucleus", "nucleus ai"],
  "telephone": ["phone", "call", "voice", "communication", "landline", "call agent", "phone agent", "voice agent", "nucleus", "nucleus ai"],
  
  // Call center and agent specific keywords - ENHANCED
  "agent": ["assistant", "bot", "ai", "helper", "representative", "operator", "call agent", "voice agent", "nucleus", "inbound", "outbound", "nucleus ai"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "representatives", "operators", "call agents", "voice agents", "nucleus", "inbound agents", "outbound agents", "phone agents", "nucleus ai"],
  "call agent": ["phone agent", "voice agent", "ai agent", "call center", "inbound", "outbound", "nucleus", "telephone agent", "nucleus ai"],
  "call agents": ["phone agents", "voice agents", "ai agents", "call center", "inbound agents", "outbound agents", "nucleus", "telephone agents", "nucleus ai"],
  "phone agent": ["call agent", "voice agent", "ai agent", "phone system", "telephone agent", "nucleus", "call center", "nucleus ai"],
  "phone agents": ["call agents", "voice agents", "ai agents", "phone system", "telephone agents", "nucleus", "call center", "nucleus ai"],
  "voice agent": ["call agent", "phone agent", "ai agent", "voice system", "speech agent", "nucleus", "call center", "nucleus ai"],
  "voice agents": ["call agents", "phone agents", "ai agents", "voice system", "speech agents", "nucleus", "call center", "nucleus ai"],
  "inbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "incoming calls", "customer service", "nucleus ai"],
  "outbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "outgoing calls", "sales calls", "nucleus ai"],
  "call center": ["call agent", "phone agent", "voice agent", "inbound", "outbound", "nucleus", "customer service", "nucleus ai"],
};

// Enhanced search synonyms for better matching
export const searchSynonyms: Record<string, string[]> = {
  "write a book": ["book writing", "novel creation", "storytelling", "author tools", "book writer gpt", "creative writing"],
  "train employees": ["employee training", "staff training", "training manual", "business training", "training manual generator gpt"],
  "sound": ["audio", "music", "voice", "speech", "tts", "suno", "udio", "eleven labs", "murf", "speechify", "sound effects", "audio generation", "music generation", "voice generation"],
  "audio": ["sound", "music", "voice", "speech", "tts", "audio tools", "music tools", "voice tools", "audio generation", "music generation"],
  "voice": ["speech", "audio", "sound", "tts", "voice generation", "voice cloning", "ai voice", "voice ai", "voice tools"],
  "speech": ["voice", "audio", "sound", "text to speech", "tts", "speech synthesis", "speech ai"],
  "music": ["song", "audio", "sound", "track", "beat", "tune", "suno", "udio", "music generation", "ai music"],
  "suno": ["suno ai", "music generation", "ai music", "song creation", "music creator"],
  "udio": ["udio ai", "music generation", "ai music", "song creation", "music creator"],
  "image": ["picture", "photo", "visual", "graphic", "art", "dalle", "midjourney", "image generation"],
  "video": ["film", "movie", "clip", "recording", "video generation", "ai video"],
  "text": ["writing", "content", "article", "document", "copy"],
  "design": ["graphic", "visual", "creative", "layout", "ui", "ux"],
  "code": ["programming", "coding", "development", "software"],
  "sun": ["solar", "solar energy", "solar land assessor", "solar assessment", "renewable energy", "solar panels"],
  "solar": ["sun", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar energy"],
  "phone": ["call", "telephone", "mobile", "cellular", "voice", "communication", "call agent", "nucleus", "phone agent", "voice agent", "nucleus ai", "phone automation"],
  "call": ["phone", "voice", "telephone", "contact", "dial", "ring", "call agent", "nucleus", "phone agent", "voice agent", "nucleus ai", "call automation"],
  "nucleus": ["nucleus ai", "nucleus ai inbound call agents platform", "call agent", "phone agent", "voice agent", "call center"],
  "agent": ["assistant", "bot", "ai", "helper", "call agent", "voice agent", "nucleus", "phone agent", "nucleus ai"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "call agents", "voice agents", "nucleus", "phone agents", "nucleus ai"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "Audio & Voice Tools": ["sound", "audio", "voice", "speech", "music", "tts", "text to speech", "suno", "udio", "eleven labs", "murf", "speechify", "voice generation", "audio generation", "music generation", "ai music", "voice ai", "audio ai", "sound effects", "voice cloning", "speech synthesis", "podcast", "music video", "audio production", "sound design", "call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai", "phone automation", "voice ai"],
  "Content Creation & Writing Tools": ["write a book", "book writing", "novel creation", "storytelling", "book writer gpt", "creative writing", "author tools", "manuscript", "write", "writing", "content", "text", "article", "blog", "copywriting", "content creation"],
  "Business & Productivity": ["train employees", "employee training", "training manual", "staff training", "training manual generator gpt", "business training", "onboarding", "business", "productivity", "work", "professional", "corporate"],
  "Image & Visual Tools": ["image", "picture", "photo", "visual", "graphic", "art", "dalle", "midjourney", "stable diffusion", "image generation", "ai art", "art generator", "visual ai", "design", "creative"],
  "Video & Animation Tools": ["video", "film", "movie", "animation", "video generation", "ai video", "video creator", "video maker", "luma dream machine", "pika labs", "runway", "sora", "music video", "video creation", "animation", "video editing", "cinematic", "video maker", "video production"],
  "Communication & Entertainment": ["phone", "call", "voice", "chat", "talk", "celebrity", "entertainment", "conversation", "communication tools", "call agents", "voice agents", "call center", "nucleus", "phone agents", "telephone", "phonecall", "inbound", "outbound", "nucleus ai", "phone automation", "call automation"],
  "Call Center & Voice AI": ["call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai"],
  "Industry-Specific Solutions": ["solar", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar energy", "sun", "solar professional", "solar project"],
  "Code & Development Tools": ["code", "programming", "coding", "development", "software", "github", "developer tools", "ai coding", "code generation"],
  "Chat & AI Assistants": ["chat", "chatgpt", "claude", "assistant", "chatbot", "ai assistant", "conversation", "ai chat"]
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
  aiWebToolsKeywords,
};
