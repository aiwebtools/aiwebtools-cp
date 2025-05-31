
// Enhanced category name normalization
export const normalizeCategoryName = (categoryName: string): string => {
  return categoryName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
};

// Check if two category names are similar enough to be considered the same
export const isSimilarCategory = (cat1: string, cat2: string): boolean => {
  const norm1 = normalizeCategoryName(cat1);
  const norm2 = normalizeCategoryName(cat2);
  
  // Exact match after normalization
  if (norm1 === norm2) return true;
  
  // One contains the other (for variations like "Health & Wellness" vs "Health & Wellness Tools")
  if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
  
  // Check for common variations
  const variations = [
    ['ai tools and development', 'ai development tools'],
    ['business and productivity', 'business tools'],
    ['content creation and writing tools', 'writing and content'],
    ['video editing and content tools', 'video tools'],
    ['data and analytics tools', 'data analytics tools'],
    ['marketing and sales ai tools', 'marketing tools'],
    ['communication and collaboration ai tools', 'communication tools']
  ];
  
  for (const [var1, var2] of variations) {
    if ((norm1.includes(var1) && norm2.includes(var2)) || 
        (norm1.includes(var2) && norm2.includes(var1))) {
      return true;
    }
  }
  
  return false;
};
