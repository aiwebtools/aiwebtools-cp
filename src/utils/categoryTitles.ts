
import { getCategoriesWithCounts } from "./categoryUtils";
import { allTools } from "@/data/toolsData";

// Streamlined category title configuration with better organization
export const CATEGORY_TITLES = {
  // Core AI & Development
  "AI Development Tools": "AI Development Tools",
  "Advanced AI Tools": "Advanced AI Tools",
  
  // Content Creation
  "Video & Content Creation": "Video & Content Creation",
  "Image & Design Tools": "Image & Design Tools", 
  "Writing & Content Creation": "Writing & Content Creation",
  "Audio & Voice Tools": "Audio & Voice Tools",
  
  // Business & Professional
  "Business & Productivity": "Business & Productivity",
  "Professional Services": "Professional Services",
  "Marketing & Social Media": "Marketing & Social Media",
  "Communication & Collaboration": "Communication & Collaboration",
  
  // Specialized & Industry
  "Education & Learning": "Education & Learning",
  "Health & Wellness": "Health & Wellness",
  "Finance & Trading": "Finance & Trading",
  "Legal & Compliance": "Legal & Compliance",
  
  // Creative & Entertainment
  "Creative & Entertainment": "Creative & Entertainment",
  "Game Design & Development": "Game Design & Development",
  "3D & Animation": "3D & Animation",
  
  // Technical & Utilities
  "Data & Analytics": "Data & Analytics",
  "Automation & Workflows": "Automation & Workflows",
  "Cloud Services": "Cloud Services",
  "Utilities & Productivity": "Utilities & Productivity",
  
  // Specialized Categories
  "Time & History": "Time & History",
  "Spirituality & Wellness": "Spirituality & Wellness",
  "Emergency Services": "Emergency Services",
  "Specialized Tools": "Specialized Tools"
} as const;

// Function to get standardized category title
export const getStandardizedCategoryTitle = (category: string): string => {
  return CATEGORY_TITLES[category as keyof typeof CATEGORY_TITLES] || category;
};

// Function to get all categories with standardized titles and counts
export const getStandardizedCategoriesWithCounts = (): Record<string, number> => {
  const categoriesWithCounts = getCategoriesWithCounts(allTools);
  const standardizedCategories: Record<string, number> = {};
  
  Object.entries(categoriesWithCounts).forEach(([category, count]) => {
    const standardizedTitle = getStandardizedCategoryTitle(category);
    standardizedCategories[standardizedTitle] = (standardizedCategories[standardizedTitle] || 0) + count;
  });
  
  console.log('Organized category structure applied:', standardizedCategories);
  
  return standardizedCategories;
};

// Improved strategic order with logical groupings
export const CATEGORY_DISPLAY_ORDER = [
  // Core AI & Development (Most Popular)
  "AI Development Tools",
  "Advanced AI Tools",
  
  // Content Creation (High Usage)
  "Video & Content Creation",
  "Image & Design Tools",
  "Writing & Content Creation",
  "Audio & Voice Tools",
  
  // Business & Professional (Essential)
  "Business & Productivity",
  "Marketing & Social Media",
  "Communication & Collaboration",
  "Professional Services",
  
  // Technical & Data
  "Data & Analytics",
  "Automation & Workflows",
  "Cloud Services",
  "Utilities & Productivity",
  
  // Industry Specific
  "Education & Learning",
  "Health & Wellness",
  "Finance & Trading",
  "Legal & Compliance",
  
  // Creative & Entertainment
  "Creative & Entertainment",
  "Game Design & Development",
  "3D & Animation",
  
  // Specialized & Niche
  "Time & History",
  "Spirituality & Wellness",
  "Emergency Services",
  "Specialized Tools"
];

// Function to get sorted categories with consistent ordering
export const getSortedStandardizedCategories = (): [string, number][] => {
  const categoriesWithCounts = getStandardizedCategoriesWithCounts();
  
  return Object.entries(categoriesWithCounts).sort(([a], [b]) => {
    const aIndex = CATEGORY_DISPLAY_ORDER.indexOf(a);
    const bIndex = CATEGORY_DISPLAY_ORDER.indexOf(b);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    } else if (aIndex !== -1) {
      return -1;
    } else if (bIndex !== -1) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
};
