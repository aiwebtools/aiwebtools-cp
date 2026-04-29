import { Tool } from "@/types/tools";

/**
 * Marks tools from AI Web Tools (lovable.app domains) as free
 */
export const markFreeTools = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    // Check if the tool is from AI Web Tools (lovable.app domain)
    const isAIWebTool = tool.directUrl?.includes('lovable.app');
    
    return {
      ...tool,
      isFree: isAIWebTool || tool.isFree || false
    };
  });
};

/**
 * Check if a tool is free
 */
export const isToolFree = (tool: Tool): boolean => {
  return tool.isFree === true || tool.directUrl?.includes('lovable.app') || false;
};

/**
 * Ensures every tool's `tags` array contains its full title (and a few
 * normalized variants), its category, and the first meaningful word(s)
 * from its description so exact-name and intent searches always score a
 * direct hit. Pure, O(n), runs once at module load — zero search-runtime cost.
 */
const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'for', 'with', 'your', 'you',
  'this', 'that', 'these', 'those', 'is', 'are', 'was', 'were', 'be',
  'to', 'of', 'in', 'on', 'at', 'by', 'from', 'as', 'it', 'its',
  'our', 'we', 'us', 'i', 'my', 'me', 'all', 'any', 'can', 'will',
  'use', 'using', 'used', 'get', 'gets', 'one', 'two', 'powered',
  'powerful', 'best', 'new', 'top', 'free', 'tool', 'tools', 'app', 'apps'
]);

export const ensureTitleTags = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    if (!tool.title) return tool;

    const title = tool.title.trim();
    // Strip leading emoji / symbols for a cleaner alphanumeric variant
    const cleaned = title.replace(/^[^A-Za-z0-9]+/, '').trim();
    // Remove common suffixes for shorter alias matches
    const noSuffix = cleaned
      .replace(/\s+(GPT|AI|Ai|Bot|Suite|Studio|Tool)\s*$/i, '')
      .trim();

    const variants: string[] = [title, cleaned, noSuffix];

    // Category as a tag (helps "show me image tools" type searches)
    if (tool.category) variants.push(String(tool.category).trim());

    // First 1-2 significant words from description (skipping stopwords)
    if (tool.description) {
      const words = tool.description
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length >= 3 && !STOPWORDS.has(w));
      if (words[0]) variants.push(words[0]);
      if (words[1]) variants.push(words[1]);
    }

    const existing = new Set((tool.tags || []).map(t => t.toLowerCase().trim()));
    const additions: string[] = [];

    for (const v of variants) {
      if (!v) continue;
      const key = v.toLowerCase().trim();
      if (key && !existing.has(key)) {
        existing.add(key);
        additions.push(v);
      }
    }

    if (additions.length === 0) return tool;
    return { ...tool, tags: [...(tool.tags || []), ...additions] };
  });
};
