import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 IMAGE & DESIGN enhanced matching for: ${categoryName}`);
  
  // Priority AI Web Tools GPTs for Image & Design (first priority)
  const priorityAIWebToolsGPTs = [
    'Graphic & Cover Design GPT',
    'RESTYLE ME GPT',
    'Sketch Artist GPT',
    'Coloring Book Generator GPT'
  ];

  // Other Priority Image & Design Tools (second priority)
  const otherPriorityTools = [
    'DALL-E 3',
    'DALL-E 2',
    'Midjourney',
    'Stable Diffusion',
    'Leonardo AI',
    'Adobe Firefly',
    'Canva',
    'Figma',
    'RunwayML',
    'Photoshop',
    'GIMP',
    'Procreate',
    'Sketch',
    'InVision',
    'Framer',
    'Principle',
    'Marvel',
    'Zeplin',
    'Abstract',
    'Avocode'
  ];

  const imageDesignKeywords = [
    'image', 'design', 'graphic', 'visual', 'art', 'creative', 'illustration',
    'photo', 'picture', 'drawing', 'painting', 'sketch', 'digital art',
    'logo', 'branding', 'typography', 'layout', 'composition', 'color',
    'editing', 'manipulation', 'enhancement', 'filter', 'effect',
    'ui', 'ux', 'interface', 'prototype', 'wireframe', 'mockup',
    'vector', 'raster', 'bitmap', 'svg', 'png', 'jpg', 'jpeg'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = imageDesignKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('image') ||
      tool.category.toLowerCase().includes('design') ||
      tool.category.toLowerCase().includes('graphic') ||
      tool.category.toLowerCase().includes('visual') ||
      tool.category.toLowerCase().includes('art')
    );

    return keywordMatch || categoryMatch;
  });

  // Remove duplicates by creating a map based on normalized titles
  const uniqueToolsMap = new Map<string, Tool>();
  
  categoryMatchedTools.forEach(tool => {
    const normalizedTitle = tool.title.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '');
    
    // If we haven't seen this tool before, or if this version is better, keep it
    if (!uniqueToolsMap.has(normalizedTitle) || 
        shouldReplaceWithBetterVersion(uniqueToolsMap.get(normalizedTitle)!, tool)) {
      uniqueToolsMap.set(normalizedTitle, tool);
    }
  });

  const deduplicatedTools = Array.from(uniqueToolsMap.values());

  // Separate tools into priority groups
  const priorityAIWebTools = deduplicatedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} image & design tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  console.log(`🗑️ Removed ${categoryMatchedTools.length - finalTools.length} duplicates`);
  
  return finalTools;
};

// Helper function to determine if we should replace with a better version
const shouldReplaceWithBetterVersion = (existing: Tool, candidate: Tool): boolean => {
  // Prioritize AI Web Tools GPTs
  const existingIsGPT = existing.directUrl?.includes('lovable.app') || existing.directUrl?.includes('chatgpt.com/g/');
  const candidateIsGPT = candidate.directUrl?.includes('lovable.app') || candidate.directUrl?.includes('chatgpt.com/g/');
  
  if (candidateIsGPT && !existingIsGPT) return true;
  if (existingIsGPT && !candidateIsGPT) return false;
  
  // Choose based on completeness and quality
  const candidateScore = (candidate.directUrl ? 1 : 0) + 
                         (candidate.description?.length || 0) / 100 +
                         (candidate.rating || 0) +
                         (candidate.tags?.length || 0) / 10;
  
  const existingScore = (existing.directUrl ? 1 : 0) + 
                       (existing.description?.length || 0) / 100 +
                       (existing.rating || 0) +
                       (existing.tags?.length || 0) / 10;
  
  return candidateScore > existingScore;
};
