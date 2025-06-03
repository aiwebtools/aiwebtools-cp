
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";

// Enhanced category and subcategory matching for search
export const matchCategory = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // Direct category matching
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    return true;
  }
  
  // Main category matching
  for (const mainCat of mainCategories) {
    // Check if search term matches main category name
    if (mainCat.name.toLowerCase().includes(lowerSearchTerm)) {
      // Check if tool belongs to this main category
      if (mainCat.subcategories.some(subcat => 
        tool.category?.toLowerCase().includes(subcat.toLowerCase())
      )) {
        return true;
      }
    }
    
    // Check if search term matches any subcategory
    for (const subcat of mainCat.subcategories) {
      if (subcat.toLowerCase().includes(lowerSearchTerm) && 
          tool.category?.toLowerCase().includes(subcat.toLowerCase())) {
        return true;
      }
    }
  }
  
  // Special category keyword matching
  const categoryKeywords = {
    '3d': ['3d', 'visualization', 'modeling', 'design'],
    'business': ['business', 'finance', 'productivity', 'strategy'],
    'health': ['health', 'wellness', 'medical', 'fitness'],
    'creative': ['creative', 'art', 'design', 'media'],
    'education': ['education', 'learning', 'academic', 'course'],
    'communication': ['communication', 'collaboration', 'social'],
    'security': ['security', 'privacy', 'protection'],
    'development': ['development', 'coding', 'programming'],
    'research': ['research', 'science', 'analysis'],
    'entertainment': ['entertainment', 'gaming', 'fun']
  };
  
  for (const [keyword, categories] of Object.entries(categoryKeywords)) {
    if (lowerSearchTerm.includes(keyword)) {
      return categories.some(cat => 
        tool.category?.toLowerCase().includes(cat)
      );
    }
  }
  
  return false;
};

export const scoreCategory = (tool: Tool, searchTerm: string): number => {
  if (!matchCategory(tool, searchTerm)) return 0;
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // HIGHEST PRIORITY: Exact category name match
  if (tool.category?.toLowerCase() === lowerSearchTerm) {
    score += 8000;
  }
  
  // HIGH PRIORITY: Category contains search term
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 6000;
  }
  
  // MEDIUM PRIORITY: Main category match
  for (const mainCat of mainCategories) {
    if (mainCat.name.toLowerCase().includes(lowerSearchTerm)) {
      if (mainCat.subcategories.some(subcat => 
        tool.category?.toLowerCase().includes(subcat.toLowerCase())
      )) {
        score += 4000;
        break;
      }
    }
  }
  
  // MEDIUM PRIORITY: Subcategory match
  for (const mainCat of mainCategories) {
    for (const subcat of mainCat.subcategories) {
      if (subcat.toLowerCase().includes(lowerSearchTerm) && 
          tool.category?.toLowerCase().includes(subcat.toLowerCase())) {
        score += 3000;
        break;
      }
    }
  }
  
  // BONUS: Special keyword category matching
  if (lowerSearchTerm === '3d' && tool.category?.toLowerCase().includes('3d')) {
    score += 5000;
  }
  
  if (lowerSearchTerm === 'business' && tool.category?.toLowerCase().includes('business')) {
    score += 4000;
  }
  
  if (lowerSearchTerm === 'health' && tool.category?.toLowerCase().includes('health')) {
    score += 4000;
  }
  
  return score;
};
