
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";

// Enhanced category and subcategory matching for search
export const matchCategory = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // PRIORITY 1: Direct exact "3D" search enhancement
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools') {
    // Check if tool is in 3D & Visualization category or has 3D in category
    if (tool.category?.toLowerCase().includes('3d') || 
        tool.category?.toLowerCase().includes('visualization') ||
        tool.category?.toLowerCase() === '3d & visualization') {
      return true;
    }
  }
  
  // PRIORITY 2: Direct category matching
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    return true;
  }
  
  // PRIORITY 3: Main category matching
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
  
  // PRIORITY 4: Enhanced category keyword mapping
  const categoryKeywords = {
    '3d': ['3d', 'visualization', 'modeling', 'design', '3d & visualization'],
    'ai': ['artificial intelligence', 'machine learning', 'ai tools'],
    'business': ['business', 'finance', 'productivity', 'strategy'],
    'health': ['health', 'wellness', 'medical', 'fitness'],
    'creative': ['creative', 'art', 'design', 'media'],
    'education': ['education', 'learning', 'academic', 'course'],
    'communication': ['communication', 'collaboration', 'social'],
    'security': ['security', 'privacy', 'protection'],
    'development': ['development', 'coding', 'programming'],
    'research': ['research', 'science', 'analysis'],
    'entertainment': ['entertainment', 'gaming', 'fun'],
    'video': ['video', 'media', 'content'],
    'audio': ['audio', 'voice', 'sound'],
    'image': ['image', 'photo', 'picture']
  };
  
  // Check category keywords
  for (const [keyword, categories] of Object.entries(categoryKeywords)) {
    if (lowerSearchTerm.includes(keyword) || keyword === lowerSearchTerm) {
      return categories.some(cat => 
        tool.category?.toLowerCase().includes(cat.toLowerCase())
      );
    }
  }
  
  // PRIORITY 5: Special handling for abbreviated searches
  const abbreviationMap = {
    '3d': '3d & visualization',
    'ai': 'ai tools',
    'ml': 'machine learning',
    'dev': 'development',
    'biz': 'business'
  };
  
  const fullCategoryName = abbreviationMap[lowerSearchTerm];
  if (fullCategoryName && tool.category?.toLowerCase().includes(fullCategoryName.toLowerCase())) {
    return true;
  }
  
  return false;
};

export const scoreCategory = (tool: Tool, searchTerm: string): number => {
  if (!matchCategory(tool, searchTerm)) return 0;
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // HIGHEST PRIORITY: Exact "3D" search gets massive boost for 3D tools
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools') {
    if (tool.category?.toLowerCase().includes('3d') && tool.category?.toLowerCase().includes('visualization')) {
      score += 12000; // Massive boost for 3D & Visualization category
    } else if (tool.category?.toLowerCase().includes('3d')) {
      score += 10000; // High boost for any 3D category
    } else if (tool.category?.toLowerCase().includes('visualization')) {
      score += 8000; // Good boost for visualization tools
    }
  }
  
  // VERY HIGH PRIORITY: Exact category name match
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
  
  // BONUS: Special keyword category matching with higher scores
  if (lowerSearchTerm === 'business' && tool.category?.toLowerCase().includes('business')) {
    score += 4000;
  }
  
  if (lowerSearchTerm === 'health' && tool.category?.toLowerCase().includes('health')) {
    score += 4000;
  }
  
  if (lowerSearchTerm === 'ai' && tool.category?.toLowerCase().includes('ai')) {
    score += 4000;
  }
  
  return score;
};
