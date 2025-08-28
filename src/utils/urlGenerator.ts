import { Tool } from "@/types/tools";

/**
 * Generates SEO-friendly URL slugs for tools
 * Converts tool titles to URL-safe slugs like "chatgpt", "claude-ai", etc.
 */
export const generateToolSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .substring(0, 50); // Limit length for SEO
};

/**
 * Creates a mapping of tool slugs to indices for fast lookup
 */
export const createSlugToIndexMap = (tools: Tool[]): Map<string, number> => {
  const slugMap = new Map<string, number>();
  const slugCounts = new Map<string, number>();
  
  tools.forEach((tool, index) => {
    let baseSlug = generateToolSlug(tool.title);
    
    // Handle duplicates by adding numbers
    if (slugCounts.has(baseSlug)) {
      const count = slugCounts.get(baseSlug)! + 1;
      slugCounts.set(baseSlug, count);
      baseSlug = `${baseSlug}-${count}`;
    } else {
      slugCounts.set(baseSlug, 1);
    }
    
    slugMap.set(baseSlug, index);
  });
  
  return slugMap;
};

/**
 * Gets the tool slug for a given index
 */
export const getToolSlugByIndex = (tools: Tool[], index: number): string => {
  if (index < 0 || index >= tools.length) {
    return '';
  }
  
  const tool = tools[index];
  return generateToolSlug(tool.title);
};

/**
 * Gets the tool index for a given slug
 */
export const getToolIndexBySlug = (tools: Tool[], slug: string): number => {
  const slugMap = createSlugToIndexMap(tools);
  return slugMap.get(slug) ?? -1;
};

/**
 * Handles duplicate slugs by checking existing slugs and adding numbers
 */
export const createUniqueSlugMap = (tools: Tool[]): { [key: string]: number } => {
  const slugToIndex: { [key: string]: number } = {};
  const usedSlugs = new Set<string>();
  
  tools.forEach((tool, index) => {
    let slug = generateToolSlug(tool.title);
    let counter = 1;
    let uniqueSlug = slug;
    
    // Ensure uniqueness
    while (usedSlugs.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }
    
    usedSlugs.add(uniqueSlug);
    slugToIndex[uniqueSlug] = index;
  });
  
  return slugToIndex;
};

/**
 * Gets the reverse mapping from index to slug
 */
export const createIndexToSlugMap = (tools: Tool[]): { [key: number]: string } => {
  const slugToIndex = createUniqueSlugMap(tools);
  const indexToSlug: { [key: number]: string } = {};
  
  Object.entries(slugToIndex).forEach(([slug, index]) => {
    indexToSlug[index] = slug;
  });
  
  return indexToSlug;
};