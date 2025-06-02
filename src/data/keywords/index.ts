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
  
  // NAME ANALYSIS KEYWORDS - HIGHEST PRIORITY FOR NAME SEARCHES
  "name": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "naming", "whatsmynamegpt", "name insight research & predictor gpt"],
  "names": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "naming", "whatsmynamegpt", "name insight research & predictor gpt"],
  "naming": ["name insight research", "name predictor", "name meaning", "name analysis", "name", "names", "identity", "whatsmynamegpt", "name insight research & predictor gpt"],
  "name meaning": ["name insight research", "name predictor", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "whatsmynamegpt", "name insight research & predictor gpt"],
  "name analysis": ["name insight research", "name predictor", "name meaning", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "whatsmynamegpt", "name insight research & predictor gpt"],
  "personality insights": ["name insight research", "name predictor", "name meaning", "name analysis", "numerology", "cultural significance", "personal discovery", "whatsmynamegpt", "name insight research & predictor gpt"],
  "numerology": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "cultural significance", "personal discovery", "whatsmynamegpt", "name insight research & predictor gpt"],
  "identity": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "whatsmynamegpt", "name insight research & predictor gpt"],
  "whatsmynamegpt": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "name insight research & predictor gpt"],
  "whats my name": ["name insight research", "name predictor", "name meaning", "name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name research", "identity", "whatsmynamegpt", "name insight research & predictor gpt"],
  
  // Enhanced Science and Research keywords - HIGHEST PRIORITY FOR SCIENCE SEARCH
  "science": ["stellaris", "space explorer", "nikola tesla gpt", "albert einstein gpt", "alchemist scientist gpt", "genome gpt", "scientific research", "research", "laboratory", "experiment", "analysis", "space exploration", "astronomy", "physics", "chemistry", "biology", "genetics", "dna", "scientific", "scientist", "researcher", "innovation", "discovery", "invention", "technology", "ai research"],
  "scientific": ["science", "research", "laboratory", "experiment", "analysis", "stellaris", "nikola tesla gpt", "albert einstein gpt", "alchemist scientist gpt", "genome gpt", "scientific research", "researcher", "scientist"],
  "research": ["science", "scientific", "laboratory", "experiment", "analysis", "stellaris", "nikola tesla gpt", "albert einstein gpt", "alchemist scientist gpt", "genome gpt", "data analysis", "researcher", "research tools"],
  "laboratory": ["science", "scientific", "research", "experiment", "analysis", "alchemist scientist gpt", "lab work", "testing", "experimentation"],
  "experiment": ["science", "scientific", "research", "laboratory", "analysis", "alchemist scientist gpt", "testing", "hypothesis", "theory"],
  "analysis": ["science", "scientific", "research", "laboratory", "experiment", "data analysis", "genome gpt", "statistical analysis", "analytical"],
  "space": ["stellaris", "space explorer", "astronomy", "space exploration", "space science", "exoplanet", "terraforming", "astrogation", "cosmic", "universe"],
  "astronomy": ["stellaris", "space explorer", "space", "space exploration", "telescope", "celestial", "cosmic", "universe", "planetary"],
  "physics": ["nikola tesla gpt", "albert einstein gpt", "science", "scientific", "research", "quantum", "mechanics", "relativity", "energy", "matter"],
  "chemistry": ["alchemist scientist gpt", "science", "scientific", "research", "laboratory", "experiment", "chemical", "molecular", "biochemistry"],
  "biology": ["genome gpt", "science", "scientific", "research", "genetics", "dna", "biological", "life science", "biotech", "molecular biology"],
  "genetics": ["genome gpt", "biology", "dna", "genetic analysis", "genomics", "heredity", "genes", "genetic research"],
  "dna": ["genome gpt", "genetics", "biology", "genetic analysis", "genomics", "molecular", "nucleotide", "sequence"],
  "tesla": ["nikola tesla gpt", "physics", "electricity", "invention", "innovation", "science", "scientific", "research", "electrical engineering"],
  "einstein": ["albert einstein gpt", "physics", "relativity", "science", "scientific", "research", "theory", "quantum", "theoretical physics"],
  "genome": ["genome gpt", "genetics", "dna", "biology", "genetic analysis", "genomics", "sequencing", "bioinformatics"],
  "alchemy": ["alchemist scientist gpt", "chemistry", "medieval science", "transmutation", "laboratory", "experiment", "historical science"],
  
  // Enhanced Education keywords - FIXED FOR COLLEGE SEARCH
  "college": ["education", "university", "degree", "learning", "academic", "student", "course", "school", "higher education", "college degree gpt", "learn any course", "homeschool", "educational", "study", "curriculum", "teaching"],
  "university": ["college", "education", "degree", "learning", "academic", "student", "higher education", "course", "school"],
  "education": ["learning", "teaching", "academic", "college", "university", "school", "student", "course", "tutorial", "educational", "study", "curriculum"],
  "learning": ["education", "teaching", "study", "course", "tutorial", "academic", "college", "university", "school", "learn any course", "learn any skill"],
  "degree": ["college", "university", "education", "academic", "bachelor", "master", "phd", "diploma", "certification", "college degree gpt"],
  "student": ["education", "learning", "college", "university", "school", "academic", "study", "course"],
  "school": ["education", "learning", "college", "university", "academic", "student", "teaching", "homeschool"],
  "homeschool": ["education", "learning", "teaching", "school", "student", "curriculum", "homeschooling assistant gpt"],
  
  // Enhanced App Building and Development Keywords - HIGHEST PRIORITY
  "build app": ["lovable.dev", "lovable", "bolt.new", "cursor", "app builder", "web app builder", "application builder", "ai web builder", "no-code", "low-code", "web development", "app development", "react builder", "build web app", "create app", "make app", "develop app"],
  "build web app": ["lovable.dev", "lovable", "bolt.new", "cursor", "web app builder", "build app", "web development", "react builder", "ai web builder", "no-code", "create web app"],
  "app builder": ["lovable.dev", "lovable", "bolt.new", "cursor", "build app", "web app builder", "application builder", "ai web builder", "no-code", "low-code", "app development"],
  "web app builder": ["lovable.dev", "lovable", "bolt.new", "cursor", "build app", "app builder", "web development", "ai web builder", "no-code", "react builder"],
  "create app": ["lovable.dev", "lovable", "bolt.new", "cursor", "build app", "app builder", "make app", "develop app", "app development", "web app builder"],
  "make app": ["lovable.dev", "lovable", "bolt.new", "cursor", "build app", "create app", "app builder", "develop app", "app development"],
  "develop app": ["lovable.dev", "lovable", "bolt.new", "cursor", "build app", "create app", "make app", "app development", "web development"],
  "bolt.new": ["bolt", "stackblitz", "web development", "code editor", "online ide", "lovable.dev", "cursor", "build app", "web app builder"],
  "bolt": ["bolt.new", "stackblitz", "web development", "lovable.dev", "cursor", "build app", "code editor"],
  "lovable.dev": ["lovable", "ai web builder", "build app", "web app builder", "react builder", "no-code", "web development", "app builder"],
  "lovable": ["lovable.dev", "ai web builder", "build app", "web app builder", "react builder", "no-code", "web development"],
  "cursor": ["cursor ai", "ai code editor", "code assistant", "programming", "development", "lovable.dev", "bolt.new", "ai coding"],
  "no-code": ["lovable.dev", "app builder", "build app", "web app builder", "no code", "visual development", "drag and drop"],
  "low-code": ["lovable.dev", "app builder", "build app", "web app builder", "low code", "visual development"],
  
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
  "code": ["coding", "programming", "development", "github copilot", "code generation", "ai coding", "programming tools", "developer tools", "code assistant", "cursor", "lovable.dev", "bolt.new"],
  "programming": ["coding", "code", "development", "software", "programming tools", "developer tools", "ai coding", "cursor", "lovable.dev"],
  "coding": ["code", "programming", "development", "ai coding", "code assistant", "cursor", "lovable.dev", "bolt.new"],
  
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
  // NAME ANALYSIS SYNONYMS - HIGHEST PRIORITY
  "name": ["names", "naming", "name meaning", "name analysis", "personality insights", "numerology", "identity", "whatsmynamegpt", "name insight research", "name predictor"],
  "names": ["name", "names", "name meaning", "name analysis", "personality insights", "numerology", "identity", "whatsmynamegpt", "name insight research", "name predictor"],
  "naming": ["name", "names", "name meaning", "name analysis", "identity", "whatsmynamegpt", "name insight research", "name predictor"],
  "identity": ["name", "names", "naming", "personality", "self-discovery", "personal", "whatsmynamegpt", "name insight research"],
  "personality": ["name", "personality insights", "character", "traits", "numerology", "whatsmynamegpt", "name insight research"],
  "numerology": ["name", "numbers", "mystical", "spiritual", "divination", "whatsmynamegpt", "name insight research"],
  "meaning": ["name meaning", "significance", "interpretation", "definition", "symbolism", "whatsmynamegpt", "name insight research"],
  
  // Science and Research synonyms - NEW PRIORITY SECTION
  "science": ["scientific", "research", "laboratory", "experiment", "analysis", "stellaris", "nikola tesla gpt", "albert einstein gpt", "alchemist scientist gpt", "genome gpt"],
  "scientific": ["science", "research", "laboratory", "experiment", "analysis", "researcher", "scientist"],
  "research": ["science", "scientific", "laboratory", "experiment", "analysis", "researcher", "study"],
  "laboratory": ["lab", "science", "scientific", "research", "experiment"],
  "experiment": ["experimental", "testing", "trial", "science", "scientific", "research"],
  "analysis": ["analytical", "analyze", "examination", "study", "research"],
  "space": ["stellaris", "space explorer", "astronomy", "cosmic", "universe", "planetary"],
  "astronomy": ["astronomical", "space", "cosmic", "celestial", "planetary"],
  "physics": ["physical", "quantum", "mechanics", "tesla", "einstein"],
  "chemistry": ["chemical", "molecular", "alchemy", "biochemistry"],
  "biology": ["biological", "genetics", "dna", "genome", "life science"],
  "genetics": ["genetic", "dna", "genome", "heredity", "genomics"],
  "dna": ["genetic", "genetics", "genome", "nucleotide", "molecular"],
  "tesla": ["nikola tesla", "electricity", "electrical", "invention"],
  "einstein": ["albert einstein", "relativity", "theoretical", "quantum"],
  
  "college": ["university", "education", "degree", "learning", "academic", "school", "higher education", "college degree gpt"],
  "university": ["college", "education", "degree", "learning", "academic", "higher education"],
  "education": ["learning", "teaching", "academic", "college", "university", "school", "educational"],
  "learning": ["education", "teaching", "study", "course", "tutorial", "academic", "learn any course", "learn any skill"],
  "degree": ["college", "university", "education", "academic", "diploma", "certification", "college degree gpt"],
  
  "build app": ["app builder", "create app", "make app", "develop app", "lovable.dev", "bolt.new", "cursor", "web app builder"],
  "build web app": ["web app builder", "build app", "create web app", "lovable.dev", "bolt.new", "web development"],
  "app builder": ["build app", "web app builder", "lovable.dev", "bolt.new", "cursor", "no-code", "application builder"],
  "web app builder": ["build app", "app builder", "lovable.dev", "bolt.new", "web development", "no-code"],
  "bolt.new": ["bolt", "stackblitz", "lovable.dev", "cursor", "build app", "web development", "code editor"],
  "lovable.dev": ["lovable", "build app", "web app builder", "ai web builder", "no-code", "react builder"],
  "cursor": ["cursor ai", "ai code editor", "code assistant", "programming", "development", "ai coding"],
  "no-code": ["no code", "app builder", "build app", "lovable.dev", "visual development", "drag and drop"],
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
  "code": ["programming", "coding", "development", "software", "cursor", "lovable.dev", "bolt.new"],
  "programming": ["coding", "code", "development", "software", "cursor", "lovable.dev"],
  "coding": ["code", "programming", "development", "cursor", "lovable.dev", "bolt.new"],
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
  "Personal Development & Self-Discovery": ["name", "names", "naming", "name meaning", "name analysis", "personality insights", "numerology", "identity", "personal discovery", "self-discovery", "personal growth", "whatsmynamegpt", "name insight research", "name predictor"],
  "Science & Research": ["science", "scientific", "research", "laboratory", "experiment", "analysis", "stellaris", "space explorer", "nikola tesla gpt", "albert einstein gpt", "alchemist scientist gpt", "genome gpt", "space exploration", "astronomy", "physics", "chemistry", "biology", "genetics", "dna", "tesla", "einstein", "alchemy", "scientist", "researcher", "innovation", "discovery", "invention"],
  "Education & Research Tools": ["college", "university", "education", "learning", "teaching", "academic", "school", "student", "degree", "course", "tutorial", "educational", "study", "curriculum", "homeschool", "college degree gpt", "learn any course", "learn any skill"],
  "Development & Coding Tools": ["build app", "app builder", "web app builder", "lovable.dev", "bolt.new", "cursor", "no-code", "low-code", "web development", "app development", "code", "programming", "coding", "development", "ai coding", "code assistant", "react builder", "ai web builder"],
  "Audio & Voice Tools": ["sound", "audio", "voice", "speech", "music", "tts", "text to speech", "suno", "udio", "eleven labs", "murf", "speechify", "voice generation", "audio generation", "music generation", "ai music", "voice ai", "audio ai", "sound effects", "voice cloning", "speech synthesis", "podcast", "music video", "audio production", "sound design", "call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai", "phone automation", "voice ai"],
  "Content Creation & Writing Tools": ["write a book", "book writing", "novel creation", "storytelling", "book writer gpt", "creative writing", "author tools", "manuscript", "write", "writing", "content", "text", "article", "blog", "copywriting", "content creation"],
  "Business & Productivity": ["train employees", "employee training", "training manual", "staff training", "training manual generator gpt", "business training", "onboarding", "business", "productivity", "work", "professional", "corporate"],
  "Image & Visual Tools": ["image", "picture", "photo", "visual", "graphic", "art", "dalle", "midjourney", "stable diffusion", "image generation", "ai art", "art generator", "visual ai", "design", "creative"],
  "Video & Animation Tools": ["video", "film", "movie", "animation", "video generation", "ai video", "video creator", "video maker", "luma dream machine", "pika labs", "runway", "sora", "music video", "video creation", "animation", "video editing", "cinematic", "video maker", "video production"],
  "Communication & Entertainment": ["phone", "call", "voice", "chat", "talk", "celebrity", "entertainment", "conversation", "communication tools", "call agents", "voice agents", "call center", "nucleus", "phone agents", "telephone", "phonecall", "inbound", "outbound", "nucleus ai", "phone automation", "call automation"],
  "Call Center & Voice AI": ["call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai"],
  "Industry-Specific Solutions": ["solar", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar energy", "sun", "solar professional", "solar project"],
  "Code & Development Tools": ["code", "programming", "coding", "development", "software", "github", "developer tools", "ai coding", "code generation", "cursor", "lovable.dev", "bolt.new", "build app", "app builder"],
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
