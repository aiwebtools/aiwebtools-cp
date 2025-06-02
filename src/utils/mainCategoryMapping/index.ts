
import { MainCategory } from "./types";
import { coreCategories } from "./coreCategories";
import { businessCategories } from "./businessCategories";
import { creativeCategories } from "./creativeCategories";
import { specializedCategories } from "./specializedCategories";
import { healthAndWellnessCategories } from "./healthAndWellnessCategories";

// Combine all main categories with proper ordering
export const mainCategories: MainCategory[] = [
  // Start with the special "ALL AI TOOLS" category
  {
    name: "ALL AI TOOLS",
    emoji: "🌟",
    description: "Browse our complete collection of 1100+ AI tools across all categories",
    subcategories: []
  },
  
  // Core AI categories
  ...coreCategories,
  
  // Business and productivity
  ...businessCategories,
  
  // Creative and content
  ...creativeCategories,
  
  // Health and wellness - RESTORED
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
  specializedCategories 
};
