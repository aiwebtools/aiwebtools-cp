
import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";

export const getContextAwareSimilarTools = (
  currentTools: Tool[], 
  searchTerm: string = "", 
  selectedCategory: string | null = null,
  minRecommendations: number = 6
): Tool[] => {
  // If we already have enough tools, return empty array
  if (currentTools.length >= minRecommendations) {
    return [];
  }

  const currentToolTitles = new Set(currentTools.map(tool => tool.title));
  
  // Get your AI Web Tools creations for strategic placement
  const aiWebToolsCreations = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    !currentToolTitles.has(tool.title)
  );
  
  // Use a Set to track tools we've already added to prevent duplicates
  const seenToolTitles = new Set<string>();
  const candidateTools: Tool[] = [];
  
  // Find similar tools based on search context or category
  allTools.forEach(tool => {
    // Skip if already in current tools or already seen
    if (currentToolTitles.has(tool.title) || seenToolTitles.has(tool.title)) {
      return;
    }
    
    let shouldInclude = false;
    
    // If user searched for something, prioritize tools matching search terms
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const toolText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ') || ''}`.toLowerCase();
      
      // Check if tool matches search keywords
      const searchWords = lowerSearchTerm.split(' ').filter(word => word.length > 2);
      const hasSearchMatch = searchWords.some(word => toolText.includes(word));
      
      if (hasSearchMatch) shouldInclude = true;
    }
    
    // If user selected a category, prioritize tools from similar categories
    if (selectedCategory && !shouldInclude) {
      if (tool.category === selectedCategory) shouldInclude = true;
      
      // Find tools from related categories
      const relatedCategories = getRelatedCategories(selectedCategory);
      if (relatedCategories.includes(tool.category || '')) shouldInclude = true;
    }
    
    // Fallback: check for similar categories from current tools
    if (!shouldInclude && !searchTerm && !selectedCategory) {
      const currentCategories = new Set(currentTools.map(t => t.category));
      if (currentCategories.has(tool.category)) shouldInclude = true;
      
      // Check for shared tags
      const currentTags = new Set(
        currentTools.flatMap(t => t.tags || []).map(tag => tag.toLowerCase())
      );
      if (tool.tags?.some(tag => currentTags.has(tag.toLowerCase()))) shouldInclude = true;
    }
    
    if (shouldInclude) {
      candidateTools.push(tool);
      seenToolTitles.add(tool.title);
    }
  });

  // Strategic mixing: Include 1-2 of your tools in every recommendation set
  const needed = minRecommendations - currentTools.length;
  const aiWebToolsToInclude = Math.min(Math.ceil(needed * 0.3), 2); // 30% or max 2 tools
  const regularToolsNeeded = needed - aiWebToolsToInclude;
  
  // Select your tools strategically (also check for duplicates)
  const selectedAIWebTools = aiWebToolsCreations
    .filter(tool => !seenToolTitles.has(tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, aiWebToolsToInclude);
  
  // Select other similar tools (excluding already selected AI Web Tools)
  const selectedSimilarTools = candidateTools
    .filter(tool => !aiWebToolsCreations.some(awt => awt.title === tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, regularToolsNeeded);
  
  // Combine and shuffle for natural distribution
  const finalTools = [...selectedAIWebTools, ...selectedSimilarTools]
    .sort(() => Math.random() - 0.5);
  
  // Final deduplication check to be absolutely sure
  const uniqueFinalTools = finalTools.filter((tool, index, arr) => 
    arr.findIndex(t => t.title === tool.title) === index
  );
  
  return uniqueFinalTools.slice(0, needed);
};

// Helper function to get related categories
const getRelatedCategories = (category: string): string[] => {
  const categoryGroups: Record<string, string[]> = {
    "AI Chat": ["AI Assistants", "Conversational AI", "Customer Service"],
    "AI Assistants": ["AI Chat", "Productivity", "Business"],
    "Content Creation": ["Writing", "Marketing", "Design"],
    "Writing": ["Content Creation", "Marketing", "Education"],
    "Image Generation": ["Design", "Art", "Creative"],
    "Design": ["Image Generation", "Creative", "Art"],
    "Video": ["Content Creation", "Entertainment", "Marketing"],
    "Audio": ["Music", "Content Creation", "Entertainment"],
    "Business": ["Productivity", "Sales", "Marketing"],
    "Productivity": ["Business", "Automation", "AI Assistants"],
    // CRITICAL: Education ↔ History cross-reference for similar tools
    "Education": ["Learning", "Research", "Writing", "Time & History", "Historical & Time-Based AI Tools", "Spirituality & Philosophy"],
    "Education & Learning": ["Research", "Writing", "Time & History", "Historical & Time-Based AI Tools", "Spirituality & Philosophy"],
    "Healthcare": ["Medical", "Wellness", "Research"],
    "Health & Wellness": ["Healthcare", "Medical", "Wellness"],
    "Development": ["Programming", "Web Development", "AI Tools"],
    "Research": ["Education", "Academic", "Data Analysis", "Time & History", "Historical & Time-Based AI Tools"],
    "Entertainment": ["Games", "Fun", "Creative"],
    "Finance": ["Business", "Analytics", "Trading"],
    "Marketing": ["Business", "Content Creation", "Sales"],
    "E-commerce": ["Business", "Marketing", "Sales"],
    // CRITICAL: History ↔ Education cross-reference for similar tools
    "Time & History": ["Education", "Education & Learning", "Research", "Spirituality & Philosophy", "Science & Research"],
    "Historical & Time-Based AI Tools": ["Education", "Education & Learning", "Research", "Spirituality & Philosophy", "Science & Research"],
    "Spirituality & Philosophy": ["Education", "Education & Learning", "Time & History", "Historical & Time-Based AI Tools", "Research"]
  };

  return categoryGroups[category] || [];
};

export const getContextAwareAdditionalTools = (
  currentTools: Tool[],
  searchTerm: string = "",
  selectedCategory: string | null = null,
  neededCount: number = 6
): Tool[] => {
  const needed = Math.max(neededCount, 0);
  if (needed === 0) return [];

  const currentToolTitles = new Set(currentTools.map(t => t.title));

  const aiWebToolsCreations = allTools.filter(tool =>
    tool.directUrl?.includes('lovable.app') &&
    !currentToolTitles.has(tool.title)
  );

  const seenToolTitles = new Set<string>();
  const candidateTools: Tool[] = [];

  allTools.forEach(tool => {
    if (currentToolTitles.has(tool.title) || seenToolTitles.has(tool.title)) {
      return;
    }

    let shouldInclude = false;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const toolText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ') || ''}`.toLowerCase();
      const searchWords = lowerSearchTerm.split(' ').filter(word => word.length > 2);
      const hasSearchMatch = searchWords.some(word => toolText.includes(word));
      if (hasSearchMatch) shouldInclude = true;
    }

    if (selectedCategory && !shouldInclude) {
      if (tool.category === selectedCategory) shouldInclude = true;
      const relatedCategories = getRelatedCategories(selectedCategory);
      if (relatedCategories.includes(tool.category || '')) shouldInclude = true;
    }

    if (!shouldInclude && !searchTerm && !selectedCategory) {
      const currentCategories = new Set(currentTools.map(t => t.category));
      if (currentCategories.has(tool.category)) shouldInclude = true;
      const currentTags = new Set(
        currentTools.flatMap(t => t.tags || []).map(tag => tag.toLowerCase())
      );
      if (tool.tags?.some(tag => currentTags.has(tag.toLowerCase()))) shouldInclude = true;
    }

    if (shouldInclude) {
      candidateTools.push(tool);
      seenToolTitles.add(tool.title);
    }
  });

  const aiWebToolsToInclude = Math.min(Math.ceil(needed * 0.3), 2);
  const regularToolsNeeded = needed - aiWebToolsToInclude;

  const selectedAIWebTools = aiWebToolsCreations
    .filter(tool => !seenToolTitles.has(tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, aiWebToolsToInclude);

  const selectedSimilarTools = candidateTools
    .filter(tool => !aiWebToolsCreations.some(awt => awt.title === tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, regularToolsNeeded);

  const finalTools = [...selectedAIWebTools, ...selectedSimilarTools]
    .sort(() => Math.random() - 0.5);

  const uniqueFinalTools = finalTools.filter((tool, index, arr) =>
    arr.findIndex(t => t.title === tool.title) === index
  );

  return uniqueFinalTools.slice(0, needed);
};

export const shouldShowSimilarTools = (toolsCount: number, minRecommendations: number = 6): boolean => {
  return toolsCount < minRecommendations && toolsCount > 0;
};

// High-relevance recommendations for a single tool page
export const getHighlyRelevantSimilarTools = (currentTool: Tool, desired: number = 12): Tool[] => {
  const stopwords = new Set([
    "the","a","an","and","or","of","to","for","with","in","on","by","from","ai","tool","gpt","app","apps","best","top"
  ]);
  const normalize = (s: string = "") => s.toLowerCase();
  const tokenize = (s: string = "") => Array.from(new Set(
    normalize(s)
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 2 && !stopwords.has(w))
  ));

  const currCategory = currentTool.category || "";
  const related = new Set(getRelatedCategories(currCategory));
  const currTags = new Set((currentTool.tags || []).map(t => t.toLowerCase()));
  const currTokens = new Set([
    ...tokenize(currentTool.title),
    ...tokenize(currentTool.description),
    ...Array.from(currTags)
  ]);

  const scored = allTools
    .filter(t => t.title !== currentTool.title)
    .map(t => {
      let score = 0;
      // Category signals
      if (t.category === currCategory) score += 3;
      else if (related.has(t.category || "")) score += 1.5;

      // Tag overlap (Jaccard)
      const tTags = new Set((t.tags || []).map(x => x.toLowerCase()));
      const tagInter = Array.from(tTags).filter(x => currTags.has(x)).length;
      const tagUnion = new Set([...Array.from(tTags), ...Array.from(currTags)]).size || 1;
      score += (tagInter / tagUnion) * 2;

      // Keyword overlap
      const tTokens = new Set([
        ...tokenize(t.title),
        ...tokenize(t.description),
        ...Array.from(tTags)
      ]);
      const kwInter = Array.from(tTokens).filter(x => currTokens.has(x)).length;
      const kwUnion = new Set([...Array.from(tTokens), ...Array.from(currTokens)]).size || 1;
      score += (kwInter / kwUnion) * 1;

      // Light quality signal
      const quality = (t.rating || 4) + (t.totalVotes ? Math.min(t.totalVotes / 5000, 1) : 0);
      score += quality * 0.05;

      return { t, score };
    })
    .sort((a, b) => b.score - a.score);

  // Take top N with minimum relevance cutoff; if not enough, fill from same category
  let result = scored.filter(s => s.score > 0.2).slice(0, desired).map(s => s.t);
  if (result.length < desired) {
    const existing = new Set(result.map(x => x.title));
    const sameCatFill = allTools.filter(x => x.category === currCategory && !existing.has(x.title) && x.title !== currentTool.title)
      .slice(0, desired - result.length);
    result = [...result, ...sameCatFill];
  }

  // Final unique & limit
  const unique = result.filter((t, i, arr) => arr.findIndex(x => x.title === t.title) === i);
  return unique.slice(0, desired);
};
