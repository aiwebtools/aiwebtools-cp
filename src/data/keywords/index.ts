
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
  
  // Enhanced Music-related keywords - HIGHEST PRIORITY
  "music": ["suno", "udio", "music generation", "ai music", "song creation", "audio generation", "music maker", "music creator", "boomy", "aiva", "music video maker", "audio production", "sound generation", "music ai", "song maker"],
  "suno": ["suno ai", "music generation", "ai music", "song creation", "vocals", "instruments", "music creator", "audio production"],
  "udio": ["udio ai", "music generation", "ai music", "song creation", "vocals", "instruments", "music creator", "audio production"],
  "song": ["music", "suno", "udio", "music generation", "ai music", "song creation", "vocals", "audio", "music maker"],
  "audio": ["music", "suno", "udio", "sound", "voice", "audio generation", "music creation", "audio production"],
  
  // Solar and renewable energy keywords - NEW ADDITION
  "sun": ["solar", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar installation", "solar energy", "solar land", "solar professional", "solar project"],
  "solar": ["solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar installation", "solar energy", "solar land", "solar professional", "solar project", "sun", "solar power"],
  
  // Enhanced Communication and phone-related keywords - HIGHEST PRIORITY
  "phone": ["call", "voice", "communication", "telephone", "mobile", "cellular", "calling", "dial", "contact", "chat", "conversation", "talk", "speak", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform", "nucleus ai", "phone automation", "call automation", "voice ai", "call ai", "phone ai"],
  "call": ["phone", "voice", "calling", "telephone", "communication", "dial", "contact", "conversation", "chat", "talk", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform", "nucleus ai", "phone automation", "call automation", "voice ai", "call ai", "phone ai"],
  "voice": ["speech", "audio", "sound", "call", "phone", "talk", "speak", "vocal", "microphone", "recording", "voice agent", "ai voice", "call agent", "nucleus", "voice ai", "phone ai", "call ai"],
  "nucleus": ["nucleus ai", "nucleus ai inbound call agents platform", "call agent", "phone agent", "voice agent", "inbound", "outbound", "call center", "phone automation", "call automation", "ai agent", "phone", "call", "voice"],
  "chat": ["conversation", "talk", "communication", "messaging", "text", "dialogue", "discussion", "speak", "call agent", "ai agent"],
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
  "music": ["song", "audio", "sound", "track", "beat", "tune", "suno", "udio", "music generation", "ai music"],
  "suno": ["suno ai", "music generation", "ai music", "song creation", "music creator"],
  "udio": ["udio ai", "music generation", "ai music", "song creation", "music creator"],
  "sun": ["solar", "solar energy", "solar land assessor", "solar assessment", "renewable energy", "solar panels"],
  "solar": ["sun", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar energy"],
  "phone": ["call", "telephone", "mobile", "cellular", "voice", "communication", "call agent", "nucleus", "phone agent", "voice agent", "nucleus ai", "phone automation"],
  "call": ["phone", "voice", "telephone", "contact", "dial", "ring", "call agent", "nucleus", "phone agent", "voice agent", "nucleus ai", "call automation"],
  "voice": ["speech", "audio", "vocal", "sound", "call", "phone", "voice agent", "call agent", "voice ai"],
  "nucleus": ["nucleus ai", "nucleus ai inbound call agents platform", "call agent", "phone agent", "voice agent", "call center"],
  "agent": ["assistant", "bot", "ai", "helper", "call agent", "voice agent", "nucleus", "phone agent", "nucleus ai"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "call agents", "voice agents", "nucleus", "phone agents", "nucleus ai"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "Audio & Voice Tools": ["music", "suno", "udio", "audio", "sound", "voice", "speech", "music generation", "ai music", "song creation", "call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai", "phone automation", "voice ai"],
  "Communication & Entertainment": ["phone", "call", "voice", "chat", "talk", "celebrity", "entertainment", "conversation", "communication tools", "call agents", "voice agents", "call center", "nucleus", "phone agents", "telephone", "phonecall", "inbound", "outbound", "nucleus ai", "phone automation", "call automation"],
  "Call Center & Voice AI": ["call agents", "voice agents", "phone agents", "ai agents", "call center", "inbound calls", "outbound calls", "nucleus", "voice communication", "phone systems", "customer service AI", "nucleus ai"],
  "Video & Animation Tools": ["music video", "video creation", "animation", "video editing", "cinematic", "video maker", "video production"],
  "Industry-Specific Solutions": ["solar", "solar land assessor", "solar assessment", "renewable energy", "solar panels", "solar energy", "sun", "solar professional", "solar project"]
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
