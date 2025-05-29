
import { Tool } from "@/types/tools";

// Helper function to normalize tool titles for comparison
const normalizeTitle = (title: string): string => {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();
};

// Helper function to determine the best category for a tool
const getBestCategory = (tool: Tool, duplicateCategories: string[]): string => {
  // Priority mapping for category selection
  const categoryPriority: Record<string, number> = {
    "Creative Suites": 10,
    "Advanced AI Tools": 9,
    "AI Development Tools": 8,
    "Video & Content Creation": 7,
    "Image & Design Tools": 6,
    "Writing & Content Creation": 5,
    "Business & Productivity": 4,
    "Audio & Voice Tools": 3,
    "Education & Learning": 2,
    "Specialized Tools": 1
  };

  // Find the highest priority category
  return duplicateCategories.reduce((best, current) => {
    const currentPriority = categoryPriority[current] || 0;
    const bestPriority = categoryPriority[best] || 0;
    return currentPriority > bestPriority ? current : best;
  });
};

// Function to identify and resolve duplicate tools
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seenTitles = new Map<string, Tool[]>();
  const deduplicatedTools: Tool[] = [];

  // Group tools by normalized title
  tools.forEach(tool => {
    const normalizedTitle = normalizeTitle(tool.title);
    if (!seenTitles.has(normalizedTitle)) {
      seenTitles.set(normalizedTitle, []);
    }
    seenTitles.get(normalizedTitle)!.push(tool);
  });

  // Process each group of tools with same normalized title
  seenTitles.forEach((toolGroup, normalizedTitle) => {
    if (toolGroup.length === 1) {
      // No duplicates, add as is
      deduplicatedTools.push(toolGroup[0]);
    } else {
      // Handle duplicates
      console.log(`Found duplicate tools: ${toolGroup.map(t => t.title).join(', ')}`);
      
      // Get all categories these tools appear in
      const categories = toolGroup.map(t => t.category).filter(Boolean) as string[];
      const bestCategory = getBestCategory(toolGroup[0], categories);
      
      // Use the tool with the most complete data
      const bestTool = toolGroup.reduce((best, current) => {
        const bestScore = (best.description?.length || 0) + 
                         (best.tags?.length || 0) + 
                         (best.videoUrl ? 10 : 0) + 
                         (best.imageUrl ? 5 : 0);
        const currentScore = (current.description?.length || 0) + 
                           (current.tags?.length || 0) + 
                           (current.videoUrl ? 10 : 0) + 
                           (current.imageUrl ? 5 : 0);
        return currentScore > bestScore ? current : best;
      });

      // Merge tags from all duplicates
      const allTags = new Set<string>();
      toolGroup.forEach(tool => {
        tool.tags?.forEach(tag => allTags.add(tag));
        // Add category names as tags for search
        if (tool.category) {
          allTags.add(tool.category.toLowerCase());
        }
      });

      // Create the consolidated tool
      const consolidatedTool: Tool = {
        ...bestTool,
        category: bestCategory,
        tags: Array.from(allTags)
      };

      deduplicatedTools.push(consolidatedTool);
      console.log(`Consolidated "${normalizedTitle}" into category: ${bestCategory}`);
    }
  });

  return deduplicatedTools;
};

// Function to get category-specific keywords for search enhancement
export const getCategorySearchKeywords = (category: string): string[] => {
  const categoryKeywords: Record<string, string[]> = {
    "Video & Content Creation": ["video", "content", "editing", "movie", "film", "cinema", "youtube", "streaming", "production", "animation"],
    "Image & Design Tools": ["image", "design", "art", "photo", "picture", "graphic", "visual", "illustration", "logo", "color", "cover", "graph"],
    "Creative Suites": ["creative", "suite", "design", "multimedia", "production", "artistic", "professional"],
    "Writing & Content Creation": ["writing", "content", "text", "article", "blog", "copy", "document", "research", "paper"],
    "Business & Productivity": ["business", "productivity", "work", "office", "management", "team", "collaboration"],
    "AI Development Tools": ["ai", "development", "coding", "programming", "developer", "api", "model"],
    "Audio & Voice Tools": ["audio", "voice", "music", "sound", "podcast", "speech", "recording"],
    "Advanced AI Tools": ["advanced", "ai", "sophisticated", "complex", "enterprise", "professional"]
  };

  return categoryKeywords[category] || [];
};
