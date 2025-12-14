
import { Tool } from "@/types/tools";
import { isThreeDVisualizationTool } from "@/utils/categoryUtils/threeDVisualizationDetection";

// Core 3D keywords for search matching
const CORE_THREE_D_KEYWORDS = [
  '3d', 'three d', 'three dimensional', '3d modeling', '3d design', '3d generation',
  '3d models', '3d creation', '3d visualization', '3d printing', '3d animation',
  'mesh', 'meshy', 'spline', 'blender', 'modeling', 'visualization', 'rendering',
  'photogrammetry', 'nerf', 'neural radiance', '3d capture', '3d scanning',
  'geometry', 'polygons', 'vertices', 'wireframe', 'texture', 'material',
  'voxel', 'point cloud', 'mesh generation', 'procedural generation',
  'tripo', 'sloyd', 'luma', 'hyper', 'masterpiece', 'kaedim', 'alpha3d',
  'virtual reality', 'vr', 'augmented reality', 'ar', 'mixed reality', 'xr',
  'metaverse', 'immersive', 'holographic', 'game asset', 'game development',
  'unity', 'unreal', 'cad', 'ray tracing', 'volumetric', 'csm', 'scenario',
  'rosebud', 'manyworlds', 'genmo', 'instantmesh', '3dfy', 'vectary', 'polycam'
];

// Enhanced 3D tool matching for comprehensive 3D searches
export const matchThreeD = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // PRIORITY 1: Direct "3D" search - use comprehensive detection
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools' || lowerSearchTerm === 'three d') {
    return isThreeDVisualizationTool(tool);
  }

  // Check if search term matches any 3D keywords
  const isThreeDSearch = CORE_THREE_D_KEYWORDS.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );

  if (!isThreeDSearch) return false;

  // Use the comprehensive detection function
  return isThreeDVisualizationTool(tool);
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
  const categoryLower = (tool.category || '').toLowerCase();
  const titleLower = tool.title.toLowerCase();
  
  let score = 0;

  // HIGHEST PRIORITY: Exact "3D" search gets massive boost for 3D category tools
  if (lowerSearchTerm === '3d' || lowerSearchTerm === '3d tools' || lowerSearchTerm === 'three d') {
    // Maximum priority for 3D & Visualization category
    if (categoryLower.includes('3d') && categoryLower.includes('visualization')) {
      score += 25000;
    }
    
    // Very high priority for tools with "3D" in title
    if (titleLower.includes('3d')) {
      score += 20000;
    }
    
    // High priority for specific 3D tool names
    const premiumThreeDTools = ['meshy', 'tripo', 'spline', 'sloyd', 'luma', 'hyper', 'masterpiece', 
                                 'kaedim', 'alpha3d', 'polycam', 'blender', 'csm', 'scenario', 'rosebud'];
    for (const toolName of premiumThreeDTools) {
      if (searchableText.includes(toolName)) {
        score += 15000;
      }
    }
    
    // High priority for mesh and modeling tools
    if (searchableText.includes('mesh') || searchableText.includes('meshy')) {
      score += 12000;
    }
    
    // Good score for VR/AR/XR tools
    if (searchableText.includes('vr') || searchableText.includes('ar') || 
        searchableText.includes('virtual reality') || searchableText.includes('augmented reality')) {
      score += 10000;
    }
    
    // Good score for other 3D-related terms
    if (searchableText.includes('model') || searchableText.includes('render') || 
        searchableText.includes('design') || searchableText.includes('visual')) {
      score += 8000;
    }
    
    // Bonus for being in any 3D-related category
    if (categoryLower.includes('3d')) {
      score += 6000;
    }
  }

  // Bonus for specific 3D tool names regardless of search term
  const threeDToolNames = ['meshy', 'spline', 'blender', 'tripo', 'sloyd', 'luma', 'kaedim', 'polycam'];
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
          tagLower.includes('model') || tagLower.includes('render') ||
          tagLower.includes('vr') || tagLower.includes('ar')) {
        score += 3000;
      }
    }
  }

  return score;
};
