import { Tool } from "@/types/tools";

// 3D & Visualization subtypes for filtering and discovery
export const THREE_D_VISUALIZATION_SUBTYPES = [
  "Text-to-3D Generation",
  "Image-to-3D Conversion",
  "3D Modeling & Design",
  "3D Animation",
  "3D Scanning & Capture",
  "Virtual Reality (VR)",
  "Augmented Reality (AR)",
  "Mixed Reality (XR)",
  "3D Printing",
  "Game Assets & Development",
  "CAD & Engineering",
  "Architectural Visualization",
  "Product Visualization",
  "Scientific & Medical Visualization",
  "Data Visualization 3D"
] as const;

export type ThreeDVisualizationSubtype = typeof THREE_D_VISUALIZATION_SUBTYPES[number];

// Keywords that indicate each 3D & Visualization subtype
const THREE_D_KEYWORDS: Record<ThreeDVisualizationSubtype, string[]> = {
  "Text-to-3D Generation": [
    "text to 3d", "text-to-3d", "text2-3d", "generate 3d", "3d generation", "3d from text",
    "ai 3d generation", "3d model generator", "create 3d", "prompt to 3d", "meshy", "tripo",
    "sloyd", "3dfy", "spline ai", "masterpiece", "hyper3d", "3d ai studio"
  ],
  "Image-to-3D Conversion": [
    "image to 3d", "image-to-3d", "photo to 3d", "2d to 3d", "convert to 3d",
    "picture to 3d", "kaedim", "alpha3d", "instantmesh", "single image 3d",
    "image reconstruction 3d"
  ],
  "3D Modeling & Design": [
    "3d modeling", "3d model", "3d design", "3d asset", "mesh", "polygon",
    "vertices", "wireframe", "sculpting", "subdivision", "nurbs", "parametric",
    "blender", "maya", "cinema 4d", "zbrush", "substance", "3ds max"
  ],
  "3D Animation": [
    "3d animation", "character animation", "motion graphics 3d", "rigging",
    "skeletal animation", "keyframe 3d", "animate 3d", "3d motion", "cg animation"
  ],
  "3D Scanning & Capture": [
    "3d scanning", "3d scan", "photogrammetry", "lidar", "point cloud",
    "reality capture", "3d capture", "depth scanning", "volumetric capture",
    "polycam", "luma ai", "nerf", "neural radiance"
  ],
  "Virtual Reality (VR)": [
    "virtual reality", "vr", "vr environment", "vr world", "vr experience",
    "vr headset", "immersive vr", "360 vr", "spatial computing", "metaverse",
    "manyworlds", "vr game"
  ],
  "Augmented Reality (AR)": [
    "augmented reality", "ar", "ar experience", "ar filter", "ar lens",
    "ar effect", "mixed reality ar", "ar app", "arkit", "arcore", "webxr ar"
  ],
  "Mixed Reality (XR)": [
    "mixed reality", "xr", "extended reality", "spatial", "holographic",
    "passthrough", "apple vision", "quest pro", "hololens"
  ],
  "3D Printing": [
    "3d printing", "3d print", "additive manufacturing", "stl", "gcode",
    "slicer", "fdm", "sla", "resin print", "filament", "print bed", "3d printer"
  ],
  "Game Assets & Development": [
    "game asset", "game development", "game engine", "unity", "unreal",
    "game model", "game character", "game environment", "game texture",
    "game prop", "lowpoly", "high poly", "game ready", "csm", "scenario",
    "rosebud", "game generation"
  ],
  "CAD & Engineering": [
    "cad", "computer aided design", "engineering design", "mechanical design",
    "solidworks", "fusion 360", "autocad", "inventor", "catia", "parametric design"
  ],
  "Architectural Visualization": [
    "architectural", "architecture", "building design", "interior design",
    "archviz", "architectural visualization", "floor plan", "building render",
    "home design 3d", "room design"
  ],
  "Product Visualization": [
    "product visualization", "product render", "product 3d", "e-commerce 3d",
    "product mockup", "configurator", "product display", "3d product"
  ],
  "Scientific & Medical Visualization": [
    "medical visualization", "scientific visualization", "molecular", "anatomical",
    "medical 3d", "scientific 3d", "protein", "dna visualization", "ct scan 3d"
  ],
  "Data Visualization 3D": [
    "3d data visualization", "3d chart", "3d graph", "spatial data", "3d mapping",
    "geographic 3d", "terrain", "topographic"
  ]
};

// Core 3D keywords that always indicate a 3D tool
const CORE_THREE_D_KEYWORDS = [
  "3d", "three d", "three-d", "3-d", "three dimensional",
  "mesh", "polygon", "vertex", "vertices", "wireframe",
  "render", "rendering", "ray tracing", "raytracing",
  "volumetric", "voxel", "point cloud", "nerf",
  "photogrammetry", "lidar", "depth", "spatial",
  "virtual reality", "augmented reality", "mixed reality", "xr", "vr", "ar",
  "blender", "maya", "cinema 4d", "zbrush", "unity", "unreal",
  "cad", "modeling", "sculpting", "rigging", "animation 3d",
  "game asset", "game development", "metaverse", "immersive",
  "holographic", "stereoscopic", "texture mapping", "uv mapping",
  "normal map", "bump map", "displacement", "subsurface scattering",
  "ambient occlusion", "global illumination", "pbr", "physically based"
];

// Category names that indicate 3D tools
const THREE_D_CATEGORY_PATTERNS = [
  "3d", "visualization", "virtual reality", "augmented reality", "mixed reality",
  "xr", "vr", "ar", "metaverse", "game development", "game assets",
  "cad", "engineering", "architecture"
];

// Specific tool names/patterns that are definitely 3D related
const THREE_D_TOOL_NAMES = [
  "meshy", "tripo", "spline", "sloyd", "luma", "polycam", "kaedim",
  "alpha3d", "csm", "scenario", "genmo", "instantmesh", "3dfy", "hyper3d",
  "masterpiece", "blender", "maya", "3d studio", "3d ai", "rosebud",
  "manyworlds", "many worlds", "3d print", "vectary", "meshcapade"
];

/**
 * Detects the 3D & Visualization subtype for a tool
 */
export const getThreeDVisualizationSubtype = (tool: Tool): ThreeDVisualizationSubtype | null => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(THREE_D_KEYWORDS)) {
    for (const keyword of keywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        return subtype as ThreeDVisualizationSubtype;
      }
    }
  }
  
  return null;
};

/**
 * Checks if a tool belongs to the 3D & Visualization category
 */
export const isThreeDVisualizationTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  const titleLower = tool.title.toLowerCase();
  const categoryLower = (tool.category || '').toLowerCase();
  
  // Priority 1: Check category contains 3D-related terms
  for (const pattern of THREE_D_CATEGORY_PATTERNS) {
    if (categoryLower.includes(pattern)) {
      return true;
    }
  }
  
  // Priority 2: Check if it's a known 3D tool name
  for (const toolName of THREE_D_TOOL_NAMES) {
    if (titleLower.includes(toolName) || searchText.includes(toolName)) {
      return true;
    }
  }
  
  // Priority 3: Check core 3D keywords
  for (const keyword of CORE_THREE_D_KEYWORDS) {
    if (searchText.includes(keyword)) {
      return true;
    }
  }
  
  // Priority 4: Check tags specifically
  if (tool.tags) {
    for (const tag of tool.tags) {
      const tagLower = tag.toLowerCase();
      if (tagLower.includes('3d') || 
          tagLower.includes('mesh') ||
          tagLower.includes('render') ||
          tagLower.includes('vr') ||
          tagLower.includes('ar') ||
          tagLower.includes('model') ||
          tagLower.includes('virtual reality') ||
          tagLower.includes('augmented reality') ||
          tagLower.includes('game asset') ||
          tagLower.includes('game development')) {
        return true;
      }
    }
  }
  
  return false;
};

/**
 * Gets all tools that match the 3D & Visualization category
 */
export const getThreeDVisualizationTools = (tools: Tool[]): Tool[] => {
  const threeDTools = tools.filter(tool => isThreeDVisualizationTool(tool));
  
  // Deduplicate by title
  const uniqueTools = threeDTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  if (import.meta.env.DEV) console.log(`🧊 3D & VISUALIZATION: Found ${uniqueTools.length} tools with enhanced detection`);
  
  return uniqueTools;
};

/**
 * Filters 3D tools by a specific subtype
 */
export const getThreeDToolsBySubtype = (tools: Tool[], subtype: ThreeDVisualizationSubtype): Tool[] => {
  return tools.filter(tool => {
    if (!isThreeDVisualizationTool(tool)) return false;
    return getThreeDVisualizationSubtype(tool) === subtype;
  });
};

/**
 * Get counts for each 3D subtype
 */
export const getThreeDSubtypeCounts = (tools: Tool[]): Record<ThreeDVisualizationSubtype, number> => {
  const threeDTools = getThreeDVisualizationTools(tools);
  const counts = {} as Record<ThreeDVisualizationSubtype, number>;
  
  for (const subtype of THREE_D_VISUALIZATION_SUBTYPES) {
    counts[subtype] = 0;
  }
  
  threeDTools.forEach(tool => {
    const subtype = getThreeDVisualizationSubtype(tool);
    if (subtype) {
      counts[subtype]++;
    }
  });
  
  return counts;
};
