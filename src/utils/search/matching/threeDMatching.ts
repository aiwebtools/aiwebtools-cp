
import { Tool } from "@/types/tools";

// Enhanced 3D tool matching for comprehensive 3D searches
export const matchThreeD = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // PRIORITY 1: Direct "3D" search - match ANY 3D-related tool
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools') {
    // Check category first
    if (tool.category?.toLowerCase().includes('3d') || 
        tool.category?.toLowerCase().includes('visualization') ||
        tool.category?.toLowerCase() === '3d & visualization') {
      return true;
    }
    
    // Check if tool has 3D content anywhere
    if (searchableText.includes('3d') || 
        searchableText.includes('three d') ||
        searchableText.includes('mesh') ||
        searchableText.includes('model') ||
        searchableText.includes('render')) {
      return true;
    }
  }

  // Direct 3D related matches
  const threeDKeywords = [
    '3d', 'three d', 'three dimensional', '3d modeling', '3d design', '3d generation',
    '3d models', '3d creation', '3d visualization', '3d printing', '3d animation',
    'mesh', 'meshy', 'spline', 'blender', 'modeling', 'visualization', 'rendering',
    'photogrammetry', 'nerf', 'neural radiance', '3d capture', '3d scanning',
    'geometry', 'polygons', 'vertices', 'wireframe', 'texture', 'material',
    'voxel', 'point cloud', 'mesh generation', 'procedural generation',
    'tripo', 'sloyd', 'luma', 'hyper', 'masterpiece'
  ];

  // Check if search term matches any 3D keywords
  const isThreeDSearch = threeDKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );

  if (!isThreeDSearch) return false;

  // Check if tool is 3D-related
  const isThreeDTool = threeDKeywords.some(keyword => 
    searchableText.includes(keyword)
  ) || tool.category?.toLowerCase().includes('3d') ||
     tool.category?.toLowerCase().includes('visualization');

  return isThreeDTool;
};

export const scoreThreeD = (tool: Tool, searchTerm: string): number => {
  if (!matchThreeD(tool, searchTerm)) return 0;

  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  let score = 0;

  // HIGHEST PRIORITY: Exact "3D" search gets massive boost for 3D category tools
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools') {
    // Maximum priority for 3D & Visualization category
    if (tool.category?.toLowerCase().includes('3d') && tool.category?.toLowerCase().includes('visualization')) {
      score += 20000; // Increased for better category matching
    }
    
    // Very high priority for tools with "3D" in title
    if (tool.title.toLowerCase().includes('3d')) {
      score += 15000;
    }
    
    // High priority for specific 3D tool names
    const premiumThreeDTools = ['meshy', 'tripo', 'spline', 'sloyd', 'luma', 'hyper', 'masterpiece'];
    for (const toolName of premiumThreeDTools) {
      if (searchableText.includes(toolName)) {
        score += 12000;
      }
    }
    
    // High priority for mesh and modeling tools
    if (searchableText.includes('mesh') || searchableText.includes('meshy')) {
      score += 10000;
    }
    
    // Good score for other 3D-related terms
    if (searchableText.includes('model') || searchableText.includes('render') || 
        searchableText.includes('design') || searchableText.includes('visual')) {
      score += 8000;
    }
    
    // Bonus for being in any 3D-related category
    if (tool.category?.toLowerCase().includes('3d')) {
      score += 5000;
    }
  }

  // Bonus for specific 3D tool names regardless of search term
  const threeDToolNames = ['meshy', 'spline', 'blender', 'tripo', 'sloyd', 'luma'];
  for (const toolName of threeDToolNames) {
    if (searchableText.includes(toolName)) {
      score += 6000;
    }
  }

  // Bonus for 3D-related tags
  if (tool.tags) {
    for (const tag of tool.tags) {
      const tagLower = tag.toLowerCase();
      if (tagLower.includes('3d') || tagLower.includes('mesh') || 
          tagLower.includes('model') || tagLower.includes('render')) {
        score += 3000;
      }
    }
  }

  return score;
};
