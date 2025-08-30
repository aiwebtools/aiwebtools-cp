import { Tool } from "@/types/tools";

/**
 * Normalize tool title for duplicate detection
 */
const normalizeTitle = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();
};

/**
 * Calculate similarity score between two normalized titles
 */
const calculateSimilarity = (title1: string, title2: string): number => {
  const norm1 = normalizeTitle(title1);
  const norm2 = normalizeTitle(title2);
  
  // Exact match after normalization
  if (norm1 === norm2) return 1.0;
  
  // One contains the other (like "Grammarly" vs "Grammarly Business")
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    const shorter = Math.min(norm1.length, norm2.length);
    const longer = Math.max(norm1.length, norm2.length);
    return shorter / longer; // Higher similarity for closer lengths
  }
  
  // Word-based similarity for tools like "Copy.ai" vs "Copy AI"
  const words1 = norm1.split(' ').filter(w => w.length > 0);
  const words2 = norm2.split(' ').filter(w => w.length > 0);
  
  if (words1.length === 0 || words2.length === 0) return 0;
  
  const commonWords = words1.filter(w1 => 
    words2.some(w2 => w2.includes(w1) || w1.includes(w2))
  );
  
  return commonWords.length / Math.max(words1.length, words2.length);
};

/**
 * Determine if two tools are duplicates based on title similarity
 */
const areDuplicates = (tool1: Tool, tool2: Tool): boolean => {
  const similarity = calculateSimilarity(tool1.title, tool2.title);
  
  // High similarity threshold for duplicate detection
  return similarity >= 0.85;
};

/**
 * Select the best representative from a group of duplicate tools
 */
const selectBestRepresentative = (duplicates: Tool[]): Tool => {
  if (duplicates.length === 1) return duplicates[0];
  
  // Scoring system to pick the best representative
  const scored = duplicates.map(tool => {
    let score = 0;
    
    // Prioritize AI Web Tools (lovable.app) - our custom GPTs
    if (tool.directUrl?.includes('lovable.app')) {
      score += 10000;
    }
    
    // Prioritize higher ratings
    score += (tool.rating || 0) * 1000;
    
    // Prioritize more votes (popularity)
    score += (tool.totalVotes || 0) * 10;
    
    // Prioritize shorter, cleaner titles (usually the main version)
    score += Math.max(0, 100 - tool.title.length);
    
    // Prioritize tools without special characters in titles
    if (!/[^\w\s]/.test(tool.title)) {
      score += 50;
    }
    
    // Prioritize specific categories
    const preferredCategories = [
      'AI Assistants & Search',
      'Content Creation',
      'AI Chat Platforms',
      'Writing & Text Generation',
      'AI Image Generation',
      'Video Generation',
      'Audio & Voice'
    ];
    
    if (preferredCategories.includes(tool.category || '')) {
      score += 500;
    }
    
    return { tool, score };
  });
  
  // Sort by score (highest first) and return the best
  scored.sort((a, b) => b.score - a.score);
  
  console.log(`🎯 Selected best representative for "${scored[0].tool.title}" from ${duplicates.length} duplicates`);
  
  return scored[0].tool;
};

/**
 * Deduplicate search results by grouping similar tools and selecting best representatives
 */
export const deduplicateSearchResults = (tools: Tool[]): Tool[] => {
  if (tools.length <= 1) return tools;
  
  const groups: Tool[][] = [];
  const processed = new Set<number>();
  
  // Group similar tools together
  for (let i = 0; i < tools.length; i++) {
    if (processed.has(i)) continue;
    
    const currentGroup = [tools[i]];
    processed.add(i);
    
    // Find all duplicates of this tool
    for (let j = i + 1; j < tools.length; j++) {
      if (processed.has(j)) continue;
      
      if (areDuplicates(tools[i], tools[j])) {
        currentGroup.push(tools[j]);
        processed.add(j);
      }
    }
    
    groups.push(currentGroup);
  }
  
  // Select best representative from each group
  const deduplicated = groups.map(group => selectBestRepresentative(group));
  
  // Log deduplication results
  const duplicatesRemoved = tools.length - deduplicated.length;
  if (duplicatesRemoved > 0) {
    console.log(`🧹 Search Deduplication: ${tools.length} → ${deduplicated.length} tools (removed ${duplicatesRemoved} duplicates)`);
    
    // Log specific duplicates found
    groups.filter(group => group.length > 1).forEach(group => {
      const titles = group.map(t => t.title);
      console.log(`   📎 Grouped: ${titles.join(', ')} → Selected: ${selectBestRepresentative(group).title}`);
    });
  }
  
  return deduplicated;
};

/**
 * Quick deduplication for performance-critical scenarios
 * Only removes exact title matches, keeps the first occurrence
 */
export const quickDeduplicateSearchResults = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  
  for (const tool of tools) {
    const normalizedTitle = normalizeTitle(tool.title);
    
    if (!seen.has(normalizedTitle)) {
      seen.add(normalizedTitle);
      deduplicated.push(tool);
    }
  }
  
  return deduplicated;
};