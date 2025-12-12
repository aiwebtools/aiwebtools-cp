import { Tool } from "@/types/tools";

// Tools explicitly identified as spiritual entity simulators by title (simulating deities, saints, prophets, divine entities)
const SPIRITUAL_ENTITY_TITLES = [
  "TALK TO THE GODS GPT",
  "Talk to the Gods GPT",
  "Mary Magdalene GPT",
  "Resurrection GPT",
  "Oraculum",
  "Sophia Aeterna",
  "Fortune Teller GPT",
  "GODMODE GPT",
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
