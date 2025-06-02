
import { MainCategory } from "./types";
import { coreCategories } from "./coreCategories";
import { businessCategories } from "./businessCategories";
import { creativeCategories } from "./creativeCategories";
import { specializedCategories } from "./specializedCategories";
import { healthAndWellnessCategories } from "./healthAndWellnessCategories";
import { mediaCategories } from "./mediaCategories";

// Combine all main categories with proper ordering
export const mainCategories: MainCategory[] = [
  // Core AI categories first
  ...coreCategories,
  
  // Media and content creation
  ...mediaCategories,
  
  // Creative and content
  ...creativeCategories,
  
  // Business and productivity
  ...businessCategories,
  
  // Health and wellness
  ...healthAndWellnessCategories,
  
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
  specializedCategories,
  mediaCategories 
};
