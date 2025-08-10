
import { MainCategory } from "./types";
import { coreCategories } from "./coreCategories";
import { businessCategories } from "./businessCategories";
import { creativeCategories } from "./creativeCategories";
import { specializedCategories } from "./specializedCategories";
import { healthAndWellnessCategories } from "./healthAndWellnessCategories";
import { web3Categories } from "./web3Categories";

// Combine all main categories with proper ordering - remove duplicate ALL AI TOOLS
export const mainCategories: MainCategory[] = [
  // Core AI categories - these already include ALL AI TOOLS
  ...coreCategories,
  
  // Business and productivity
  ...businessCategories,
  
  // Creative and content
  ...creativeCategories,
  
  // Health and wellness
  ...healthAndWellnessCategories,
  
  // WEB3 and blockchain future
  ...web3Categories,
  
  // Specialized and industry-specific
  ...specializedCategories
];

// Export types
export type { MainCategory } from "./types";

// Export individual category groups for reference
export { 
  coreCategories, 
  businessCategories, 
  creativeCategories, 
  healthAndWellnessCategories,
  web3Categories,
  specializedCategories 
};
