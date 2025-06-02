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
  
  // Enhanced Communication and phone-related keywords - HIGHEST PRIORITY
  "phone": ["call", "voice", "communication", "telephone", "mobile", "cellular", "calling", "dial", "contact", "chat", "conversation", "talk", "speak", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform"],
  "call": ["phone", "voice", "calling", "telephone", "communication", "dial", "contact", "conversation", "chat", "talk", "call center", "call agent", "inbound", "outbound", "nucleus", "ai agent", "phone agent", "voice agent", "nucleus ai inbound call agents platform"],
  "voice": ["speech", "audio", "sound", "call", "phone", "talk", "speak", "vocal", "microphone", "recording", "voice agent", "ai voice", "call agent", "nucleus"],
  "chat": ["conversation", "talk", "communication", "messaging", "text", "dialogue", "discussion", "speak", "call agent", "ai agent"],
  "talk": ["speak", "voice", "conversation", "chat", "communication", "dialogue", "discussion", "call"],
  "phonecall": ["phone", "call", "voice", "telephone", "communication", "call agent", "phone agent", "voice agent", "nucleus"],
  "telephone": ["phone", "call", "voice", "communication", "landline", "call agent", "phone agent", "voice agent", "nucleus"],
  
  // Call center and agent specific keywords - ENHANCED
  "agent": ["assistant", "bot", "ai", "helper", "representative", "operator", "call agent", "voice agent", "nucleus", "inbound", "outbound"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "representatives", "operators", "call agents", "voice agents", "nucleus", "inbound agents", "outbound agents", "phone agents"],
  "call agent": ["phone agent", "voice agent", "ai agent", "call center", "inbound", "outbound", "nucleus", "telephone agent"],
  "call agents": ["phone agents", "voice agents", "ai agents", "call center", "inbound agents", "outbound agents", "nucleus", "telephone agents"],
  "phone agent": ["call agent", "voice agent", "ai agent", "phone system", "telephone agent", "nucleus", "call center"],
  "phone agents": ["call agents", "voice agents", "ai agents", "phone system", "telephone agents", "nucleus", "call center"],
  "voice agent": ["call agent", "phone agent", "ai agent", "voice system", "speech agent", "nucleus", "call center"],
  "voice agents": ["call agents", "phone agents", "ai agents", "voice system", "speech agents", "nucleus", "call center"],
  "inbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "incoming calls", "customer service"],
  "outbound": ["call agent", "phone agent", "voice agent", "call center", "nucleus", "outgoing calls", "sales calls"],
  "nucleus": ["call agent", "ai agent", "inbound", "call center", "phone", "voice", "communication", "call platform"],
  "call center": ["call agent", "phone agent", "voice agent", "inbound", "outbound", "nucleus", "customer service"],
};

// Enhanced search synonyms for better matching
export const searchSynonyms: Record<string, string[]> = {
  "phone": ["call", "telephone", "mobile", "cellular", "voice", "communication", "call agent", "nucleus", "phone agent", "voice agent"],
  "call": ["phone", "voice", "telephone", "contact", "dial", "ring", "call agent", "nucleus", "phone agent", "voice agent"],
  "voice": ["speech", "audio", "vocal", "sound", "call", "phone", "voice agent", "call agent"],
  "agent": ["assistant", "bot", "ai", "helper", "call agent", "voice agent", "nucleus", "phone agent"],
  "agents": ["assistants", "bots", "ai agents", "helpers", "call agents", "voice agents", "nucleus", "phone agents"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "Communication & Entertainment": ["phone", "call", "voice", "chat", "talk", "celebrity", "entertainment", "conversation", "communication tools", "call agents", "voice agents", "call center", "nucleus", "phone agents", "telephone", "phonecall", "inbound", "outbound"],
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
  aiWebToolsKeywords,
};
