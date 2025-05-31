
import { Tool } from "@/types/tools";
import { getToolNameMatchScore } from "./toolNameScoring";
import { calculateIntentScore } from "./intentScoring";

// Re-export functions for backward compatibility
export { getToolNameMatchScore, calculateIntentScore };
