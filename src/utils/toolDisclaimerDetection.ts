import { Tool } from "@/types/tools";

// Keywords that identify tools impersonating deities, saints, prophets, or divine entities
const SPIRITUAL_ENTITY_KEYWORDS = [
  // Deities and gods
  "god", "gods", "deity", "divine", "allah", "yahweh", "brahma", "vishnu", "shiva",
  "zeus", "thor", "odin", "ra", "isis", "osiris", "krishna", "buddha", "jesus",
  "christ", "holy spirit", "archangel", "angel", "seraphim", "cherubim",
  
  // Saints and prophets
  "saint", "prophet", "apostle", "disciple", "moses", "abraham", "muhammad",
  "mary magdalene", "virgin mary", "st.", "st ", "francis", "teresa",
  
  // Spiritual figures and entities
  "quan yin", "kuan yin", "guanyin", "yemaya", "orisha", "loa", "spirit guide",
  "ascended master", "enlightened", "bodhisattva", "guru", "swami", "rishi",
  
  // Religious/spiritual traditions with entity simulation
  "talk to the gods", "talk to history", "resurrection", "oraculum", "sophia aeterna",
  "manicheism", "mingjiào", "manichaeism", "gnostic", "mystic", "mystical",
  
  // Historical spiritual figures used as AI personas
  "alan watts", "rumi", "hafiz", "socrates", "plato", "aristotle", "confucius",
  "lao tzu", "marcus aurelius", "seneca", "epictetus", "carl sagan", "nikola tesla",
  "albert einstein", "titanic resurrection", "chief crazy horse", "geronimo",
  
  // Fortune telling and divination
  "fortune teller", "oracle", "divination", "prophecy", "tarot", "astrology",
  
  // God-like AI claims
  "godmode", "god mode", "omniscient", "all-knowing", "god is light"
];

// Tools explicitly identified as spiritual entity simulators by title
const SPIRITUAL_ENTITY_TITLES = [
  "TALK TO THE GODS GPT",
  "Mary Magdalene GPT",
  "ALAN WATTS GPT",
  "Resurrection GPT",
  "Oraculum",
  "Sophia Aeterna",
  "Fortune Teller GPT",
  "GODMODE GPT",
  "Nikola Tesla GPT",
  "Albert Einstein GPT",
  "Carl Sagan GPT",
  "Titanic Resurrections GPT",
  "Chief Crazy Horse GPT",
  "St. Francis GPT",
  "Rumi GPT",
  "Buddha GPT",
  "Socrates GPT",
  "Marcus Aurelius GPT",
  "Seneca GPT",
  "Epictetus GPT",
  "Confucius GPT",
  "Lao Tzu GPT",
  "Quan Yin GPT",
  "Yemaya GPT",
  "God Is Light GPT",
  "Manicheism GPT",
  "Míngjiào Prophet of Light GPT",
  "Native American History Time Machine GPT",
  "Talk To History GPT",
  "Time Machine GPT",
  "Interpretis",
  "Imagination Traveler GPT",
  "Historical Headlines GPT",
  "Alchemist Scientist GPT"
];

// Keywords that identify medical/health/pharmaceutical tools
const MEDICAL_KEYWORDS = [
  // Medical terms
  "doctor", "dr.", "medical", "medicine", "diagnosis", "symptom", "treatment",
  "healthcare", "health care", "clinical", "patient", "prescription", "rx",
  
  // Pharmaceutical
  "pharma", "pharmaceutical", "drug", "medication", "pharmacy", "pharmacist",
  
  // Health conditions
  "disease", "illness", "condition", "therapy", "therapeutic",
  
  // Health professionals
  "physician", "nurse", "surgeon", "specialist", "therapist", "counselor",
  
  // Mental health
  "mental wellness", "mental health", "psychology", "psychiatry", "therapy",
  "counseling", "cbt", "cognitive behavioral",
  
  // Veterinary
  "veterinarian", "vet", "animal health", "pet care", "petcare"
];

// Tools explicitly identified as medical/health tools by title
const MEDICAL_TOOL_TITLES = [
  "Personalized DR. GPT",
  "Personalized Doctor GPT",
  "Doctor GPT",
  "DR. GPT",
  "Pharmaceutical Assistant GPT",
  "PHARMA RESEARCH PRO",
  "Veterinarian GPT",
  "Mental Wellness GPT",
  "Cannabis GPT",
  "Fungus GPT",
  "Ada Health",
  "Buoy Health",
  "K Health",
  "Your.MD",
  "Healthily",
  "Infermedica",
  "Food Quality Inspector GPT"
];

/**
 * Checks if a tool simulates or impersonates spiritual entities
 */
export function needsSpiritualDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  const descLower = tool.description?.toLowerCase() || "";
  const categoryLower = tool.category?.toLowerCase() || "";
  const tagsLower = tool.tags?.map(t => t.toLowerCase()).join(" ") || "";
  
  // Check against explicit titles
  for (const title of SPIRITUAL_ENTITY_TITLES) {
    if (titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  // Check title for keywords
  for (const keyword of SPIRITUAL_ENTITY_KEYWORDS) {
    if (titleLower.includes(keyword.toLowerCase())) {
      return true;
    }
  }
  
  // Check category
  if (categoryLower.includes("spirituality") || 
      categoryLower.includes("philosophy") ||
      categoryLower.includes("religious") ||
      categoryLower.includes("mystical")) {
    return true;
  }
  
  // Check description for strong spiritual simulation indicators
  const spiritualDescIndicators = [
    "talk to", "speak with", "converse with", "simulate", "embodies",
    "in the persona of", "as if speaking to", "channel", "channeling",
    "divine secrets", "hidden truths", "gnostic", "resurrection",
    "bring back", "interact with"
  ];
  
  for (const indicator of spiritualDescIndicators) {
    if (descLower.includes(indicator) && 
        SPIRITUAL_ENTITY_KEYWORDS.some(k => descLower.includes(k.toLowerCase()))) {
      return true;
    }
  }
  
  return false;
}

/**
 * Checks if a tool is medical/health/pharmaceutical related
 */
export function needsMedicalDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  const descLower = tool.description?.toLowerCase() || "";
  const categoryLower = tool.category?.toLowerCase() || "";
  
  // Check against explicit titles
  for (const title of MEDICAL_TOOL_TITLES) {
    if (titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  // Check title for keywords
  for (const keyword of MEDICAL_KEYWORDS) {
    if (titleLower.includes(keyword.toLowerCase())) {
      return true;
    }
  }
  
  // Check category
  if (categoryLower.includes("health") || 
      categoryLower.includes("medical") ||
      categoryLower.includes("pharmaceutical") ||
      categoryLower.includes("healthcare")) {
    return true;
  }
  
  // Check description for medical indicators
  const medicalDescIndicators = [
    "symptom", "diagnosis", "treatment", "prescription", "medical advice",
    "health assessment", "clinical", "therapeutic", "pharmaceutical"
  ];
  
  for (const indicator of medicalDescIndicators) {
    if (descLower.includes(indicator)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Get the type of disclaimer needed for a tool
 */
export function getDisclaimerType(tool: Tool): "spiritual" | "medical" | "both" | "none" {
  const needsSpiritual = needsSpiritualDisclaimer(tool);
  const needsMedical = needsMedicalDisclaimer(tool);
  
  if (needsSpiritual && needsMedical) return "both";
  if (needsSpiritual) return "spiritual";
  if (needsMedical) return "medical";
  return "none";
}
