import { Tool } from "@/types/tools";

// Tools explicitly identified as spiritual entity simulators by title (simulating deities, saints, prophets, divine entities)
const SPIRITUAL_ENTITY_TITLES = [
  "TALK TO THE GODS GPT",
  "Talk to the Gods GPT",
  "Mary Magdalene GPT",
  "Resurrection GPT",
  "Oraculum",
  "Sophia Aeterna",
  "G-Mode GPT",
  "God Is Light GPT",
  "Manicheism GPT",
  "Míngjiào Prophet of Light GPT",
  "Quan Yin GPT",
  "Yemaya GPT"
];

// Tools that simulate conversations with historical figures (simulation disclaimer needed)
const HISTORICAL_SIMULATION_TITLES = [
  "Talk To History GPT",
  "TALK TO HISTORY GPT",
  "Time Machine GPT",
  "TIME MACHINE GPT",
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
  "ALAN WATTS GPT",
  "Alan Watts GPT",
  "Native American History Time Machine GPT",
  "Historical Headlines GPT",
  "Imagination Traveler GPT",
  "Interpretis",
  "Alchemist Scientist GPT",
  "Stellaris: 🚀AI Space Explorer",
  "Stellaris: AI Space Explorer",
  "Celebrity Chatline GPT"
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
  "Food Quality Inspector GPT",
  "Historical Apothecary GPT",
  "Apothecary GPT"
];

// AI Companion/Dating tools - emphasize real human connection
const AI_COMPANION_TOOL_TITLES = [
  "Candy AI",
  "Replika",
  "Character.AI",
  "Chai AI",
  "Romantic AI",
  "EVA AI",
  "Paradot AI",
  "Anima AI",
  "Kupid AI",
  "DreamGF",
  "Crushon AI",
  "Intimate AI",
  "Nectar AI",
  "Muah AI",
  "Kindroid",
  "Nomi AI",
  "SoulGen",
  "Fantasy GF",
  "AI Girlfriend",
  "AI Boyfriend",
  "Virtual Companion",
  "SpicyChat",
  "Janitor AI",
  "Talkie AI"
];

// Keywords that trigger AI companion disclaimer
const AI_COMPANION_KEYWORDS = [
  "ai girlfriend",
  "ai boyfriend",
  "virtual girlfriend",
  "virtual boyfriend",
  "ai companion",
  "romantic ai",
  "dating ai",
  "ai romance",
  "virtual date",
  "ai dating",
  "virtual companion"
];

// Fortune telling/divination tools - need educational entertainment disclaimer
const DIVINATION_TOOL_TITLES = [
  "Fortune Teller GPT",
  "Tarot GPT",
  "Astrology GPT",
  "Horoscope GPT",
  "Palm Reading GPT",
  "Numerology GPT",
  "I Ching GPT",
  "Crystal Ball GPT",
  "Psychic GPT",
  "Probability GPT"
];

// Keywords that trigger divination disclaimer  
const DIVINATION_KEYWORDS = [
  "fortune telling",
  "fortune teller",
  "tarot",
  "horoscope",
  "astrology reading",
  "palm reading",
  "numerology",
  "psychic reading",
  "crystal ball",
  "predict your future",
  "divination"
];

/**
 * Checks if a tool simulates or impersonates spiritual/historical entities
 * Returns true ONLY for explicitly listed spiritual and historical simulation tools
 */
export function needsSpiritualDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  
  // Check against explicit spiritual entity titles
  for (const title of SPIRITUAL_ENTITY_TITLES) {
    if (titleLower === title.toLowerCase() || titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  // Check against explicit historical simulation titles
  for (const title of HISTORICAL_SIMULATION_TITLES) {
    if (titleLower === title.toLowerCase() || titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  return false;
}

/**
 * Checks if a tool is medical/health/pharmaceutical related
 * Returns true ONLY for explicitly listed medical tools
 */
export function needsMedicalDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  
  // Check against explicit medical tool titles
  for (const title of MEDICAL_TOOL_TITLES) {
    if (titleLower === title.toLowerCase() || titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  return false;
}

/**
 * Checks if a tool is an AI companion/dating tool that needs
 * a reminder about real human connection
 */
export function needsCompanionDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  const descLower = tool.description?.toLowerCase() || "";
  const categoryLower = tool.category?.toLowerCase() || "";
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combinedText = `${titleLower} ${descLower} ${tagsLower}`;
  
  // Check explicit AI companion titles
  for (const title of AI_COMPANION_TOOL_TITLES) {
    if (titleLower === title.toLowerCase() || titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  // Check AI companion keywords
  for (const keyword of AI_COMPANION_KEYWORDS) {
    if (combinedText.includes(keyword)) {
      return true;
    }
  }
  
  // Check category
  if (categoryLower.includes("dating") || categoryLower.includes("ai companion") || 
      categoryLower.includes("relationship") && categoryLower.includes("ai")) {
    return true;
  }
  
  return false;
}

/**
 * Checks if a tool is a fortune telling/divination tool
 * that needs educational entertainment disclaimer
 */
export function needsDivinationDisclaimer(tool: Tool): boolean {
  const titleLower = tool.title?.toLowerCase() || "";
  const descLower = tool.description?.toLowerCase() || "";
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combinedText = `${titleLower} ${descLower} ${tagsLower}`;
  
  // Check explicit divination titles
  for (const title of DIVINATION_TOOL_TITLES) {
    if (titleLower === title.toLowerCase() || titleLower.includes(title.toLowerCase())) {
      return true;
    }
  }
  
  // Check divination keywords
  for (const keyword of DIVINATION_KEYWORDS) {
    if (combinedText.includes(keyword)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Get the type of disclaimer needed for a tool
 */
export type DisclaimerType = "spiritual" | "medical" | "companion" | "divination" | "both" | "multiple" | "none";

export function getDisclaimerType(tool: Tool): DisclaimerType {
  const needsSpiritual = needsSpiritualDisclaimer(tool);
  const needsMedical = needsMedicalDisclaimer(tool);
  const needsCompanion = needsCompanionDisclaimer(tool);
  const needsDivination = needsDivinationDisclaimer(tool);
  
  const count = [needsSpiritual, needsMedical, needsCompanion, needsDivination].filter(Boolean).length;
  
  if (count > 1) return "multiple";
  if (needsSpiritual) return "spiritual";
  if (needsMedical) return "medical";
  if (needsCompanion) return "companion";
  if (needsDivination) return "divination";
  return "none";
}

/**
 * Get all disclaimer types for a tool (for multi-disclaimer display)
 */
export function getAllDisclaimerTypes(tool: Tool): DisclaimerType[] {
  const types: DisclaimerType[] = [];
  
  if (needsSpiritualDisclaimer(tool)) types.push("spiritual");
  if (needsMedicalDisclaimer(tool)) types.push("medical");
  if (needsCompanionDisclaimer(tool)) types.push("companion");
  if (needsDivinationDisclaimer(tool)) types.push("divination");
  
  return types;
}
