import { Tool } from "@/types/tools";

/**
 * Simple emoji detection using common emoji characters
 */
const hasEmojiPrefix = (title: string): boolean => {
  // Check for common non-alphanumeric characters at the start (simple emoji detection)
  return /^[^\w\s]/.test(title);
};

/**
 * Remove emoji prefix from title
 */
const removeEmojiPrefix = (title: string): string => {
  // Simple pattern to remove emojis and spaces at start
  return title.replace(/^[^\w\s]+\s*/, '').trim();
};

/**
 * Get the alphabetical sort key for a tool title
 * Treats emoji+AI prefixed tools as starting with "Z" to push them to the end
 */
export const getAlphabeticalSortKey = (title: string): string => {
  const normalized = removeEmojiPrefix(title).toLowerCase().trim();
  
  // If the title (after removing emojis) starts with "AI ", treat it as starting with "Z"
  if (normalized.startsWith('ai ')) {
    return `z${normalized}`;
  }
  
  return normalized;
};

/**
 * Sort tools alphabetically with emoji+AI tools pushed to the end
 */
export const sortToolsAlphabetically = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const keyA = getAlphabeticalSortKey(a.title);
    const keyB = getAlphabeticalSortKey(b.title);
    
    return keyA.localeCompare(keyB);
  });
};

/**
 * Check if a title starts with emoji + AI (for debugging)
 */
export const isEmojiAITitle = (title: string): boolean => {
  const hasEmoji = hasEmojiPrefix(title);
  const normalizedAfterEmoji = removeEmojiPrefix(title).toLowerCase();
  
  return hasEmoji && normalizedAfterEmoji.startsWith('ai ');
};