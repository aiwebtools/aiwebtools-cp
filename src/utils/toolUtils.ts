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
 * normalized variants) so exact-name searches always score a direct hit.
 * Pure, O(n), runs once at module load — zero impact on search runtime.
 */
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

    const variants = [title, cleaned, noSuffix].filter(Boolean);
    const existing = new Set((tool.tags || []).map(t => t.toLowerCase().trim()));
    const additions: string[] = [];

    for (const v of variants) {
      const key = v.toLowerCase();
      if (!existing.has(key)) {
        existing.add(key);
        additions.push(v);
      }
    }

    if (additions.length === 0) return tool;
    return { ...tool, tags: [...(tool.tags || []), ...additions] };
  });
};
