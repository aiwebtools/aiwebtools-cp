
import { getCategoriesWithCounts } from "./categoryUtils";
import { allTools } from "@/data/toolsData";

// Centralized category title configuration
export const CATEGORY_TITLES = {
  // Core categories with standardized titles
  "Video & Content Creation": "Video & Content Creation",
  "Image & Design Tools": "Image & Design Tools", 
  "Business & Productivity": "Business & Productivity",
  "Writing & Content Creation": "Writing & Content Creation",
  "AI Development Tools": "AI Development Tools",
  "Audio & Voice Tools": "Audio & Voice Tools",
  "Education & Learning": "Education & Learning",
  "Specialized Tools": "Specialized Tools",
  "Creative Suites": "Creative Suites",
  "Advanced AI Tools": "Advanced AI Tools",
  "Learning & Education": "Learning & Education",
  "Time & History": "Time & History",
  "Spirituality & Wellness": "Spirituality & Wellness",
  "Emergency Services": "Emergency Services",
  "Game Design & Development": "Game Design & Development"
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
    standardizedCategories[standardizedTitle] = count;
  });
  
  console.log('Standardized category titles applied:', standardizedCategories);
  
  return standardizedCategories;
};

// Psychologically Strategic Order for consistent display
export const CATEGORY_DISPLAY_ORDER = [
  "Creative Suites",
  "Advanced AI Tools", 
  "Learning & Education",
  "Time & History",
  "Spirituality & Wellness",
  "Emergency Services",
  "Game Design & Development",
  "Video & Content Creation",
  "Image & Design Tools",
  "Business & Productivity",
  "Writing & Content Creation",
  "AI Development Tools",
  "Audio & Voice Tools",
  "Education & Learning",
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
