
import { Tool } from "@/types/tools";

/**
 * Image & Design type subtags for categorization - 12+ types
 */
export const IMAGE_DESIGN_SUBTYPES = {
  IMAGE_GENERATOR: "Image Generator",
  PHOTO_EDITOR: "Photo Editor",
  LOGO_DESIGN: "Logo Design",
  GRAPHIC_DESIGN: "Graphic Design",
  AI_ART: "AI Art",
  AVATAR_CREATOR: "Avatar Creator",
  BACKGROUND_REMOVAL: "Background Removal",
  IMAGE_UPSCALER: "Image Upscaler",
  PHOTO_RESTORATION: "Photo Restoration",
  COLOR_GRADING: "Color Grading",
  PRODUCT_PHOTOGRAPHY: "Product Photography",
  ILLUSTRATION: "Illustration",
  FASHION_DESIGN: "Fashion Design",
  INTERIOR_DESIGN: "Interior Design",
  ARCHITECTURE: "Architecture Design",
  UI_UX_DESIGN: "UI/UX Design",
  THREE_D_MODELING: "3D Modeling"
} as const;

/**
 * Keywords that indicate image generator behavior
 */
const IMAGE_GENERATOR_KEYWORDS = [
  "image generator", "text-to-image", "image generation", "AI image",
  "midjourney", "dall-e", "stable diffusion", "flux", "ideogram",
  "generate images", "create images", "AI art generator", "image creator",
  "leonardo", "playground", "recraft", "image fx", "whisk", "krea",
  "imagen", "firefly", "ai image creation", "generate art"
];

/**
 * Keywords that indicate photo editor behavior
 */
const PHOTO_EDITOR_KEYWORDS = [
  "photo editor", "photo editing", "image editing", "edit photos",
  "enhance photos", "photo enhancement", "retouching", "photo manipulation",
  "fotor", "pixlr", "snapseed", "lightroom", "photoshop alternative",
  "image editor", "photo tool", "retouch", "photo fix", "image enhance"
];

/**
 * Keywords that indicate logo design behavior
 */
const LOGO_DESIGN_KEYWORDS = [
  "logo design", "logo creator", "logo generator", "logo maker",
  "brand logo", "custom logo", "logo ai", "create logo", "branding design",
  "looka", "hatchful", "brandmark", "logojoy", "logo creation"
];

/**
 * Keywords that indicate graphic design behavior
 */
const GRAPHIC_DESIGN_KEYWORDS = [
  "graphic design", "design tool", "canva", "design platform",
  "marketing design", "visual design", "creative design", "design assistant",
  "poster design", "banner design", "social media design", "flyer design",
  "presentation design", "infographic", "creative tool", "design software"
];

/**
 * Keywords that indicate AI art behavior
 */
const AI_ART_KEYWORDS = [
  "AI art", "digital art", "artwork", "artistic", "creative art",
  "art generator", "art creation", "artbreeder", "nightcafe",
  "generative art", "artistic style", "art styles", "ai artwork",
  "neural art", "creative ai", "art ai", "artistic ai"
];

/**
 * Keywords that indicate avatar creator behavior
 */
const AVATAR_CREATOR_KEYWORDS = [
  "avatar", "profile picture", "headshot", "portrait",
  "character creator", "AI avatar", "digital avatar", "avatar generator"
];

/**
 * Keywords that indicate background removal behavior
 */
const BACKGROUND_REMOVAL_KEYWORDS = [
  "background removal", "remove background", "background remover",
  "cutout", "erase background", "transparent background", "background eraser",
  "remove.bg", "photoroom", "slazzer", "cutout pro", "bg remove"
];

/**
 * Keywords that indicate image upscaler behavior
 */
const IMAGE_UPSCALER_KEYWORDS = [
  "upscale", "upscaler", "image upscaling", "enhance resolution",
  "increase resolution", "4k upscale", "8k upscale", "super resolution",
  "letsenhance", "upscayl", "imglarger", "topaz", "ai upscale", "enlarge image"
];

/**
 * Keywords that indicate photo restoration behavior
 */
const PHOTO_RESTORATION_KEYWORDS = [
  "photo restoration", "restore photos", "old photos", "colorize",
  "colorization", "repair photos", "fix old photos", "restore images",
  "vintage photo", "historical photo", "photo repair", "fix scratches"
];

/**
 * Keywords that indicate color grading behavior
 */
const COLOR_GRADING_KEYWORDS = [
  "color grading", "color correction", "LUT", "color adjustment",
  "color enhancement", "color palette", "color scheme", "color filter",
  "photo filter", "color preset", "cinematic color"
];

/**
 * Keywords that indicate product photography behavior
 */
const PRODUCT_PHOTOGRAPHY_KEYWORDS = [
  "product photography", "e-commerce photography", "product photos",
  "product shots", "product images", "flair.ai", "photoroom",
  "product mockup", "commercial photography", "catalog photo"
];

/**
 * Keywords that indicate illustration behavior
 */
const ILLUSTRATION_KEYWORDS = [
  "illustration", "illustrator", "sketch", "drawing", "concept art",
  "character design", "book illustration", "children's book",
  "vector art", "cartoon", "comic", "manga", "anime style"
];

/**
 * Determine the image/design subtype for a tool
 */
export const getImageDesignSubtype = (tool: Tool): string | null => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combined = `${title} ${description} ${tags}`;

  // Check for explicit subtags first
  if (tool.tags?.some(t => Object.values(IMAGE_DESIGN_SUBTYPES).includes(t as any))) {
    return tool.tags.find(t => Object.values(IMAGE_DESIGN_SUBTYPES).includes(t as any)) || null;
  }

  // Priority order: more specific types first
  if (LOGO_DESIGN_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.LOGO_DESIGN;
  if (AVATAR_CREATOR_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.AVATAR_CREATOR;
  if (BACKGROUND_REMOVAL_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.BACKGROUND_REMOVAL;
  if (IMAGE_UPSCALER_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.IMAGE_UPSCALER;
  if (PHOTO_RESTORATION_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.PHOTO_RESTORATION;
  if (COLOR_GRADING_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.COLOR_GRADING;
  if (PRODUCT_PHOTOGRAPHY_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.PRODUCT_PHOTOGRAPHY;
  if (ILLUSTRATION_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.ILLUSTRATION;
  if (PHOTO_EDITOR_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.PHOTO_EDITOR;
  if (GRAPHIC_DESIGN_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.GRAPHIC_DESIGN;
  if (AI_ART_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.AI_ART;
  if (IMAGE_GENERATOR_KEYWORDS.some(kw => combined.includes(kw))) return IMAGE_DESIGN_SUBTYPES.IMAGE_GENERATOR;

  return null;
};

/**
 * Check if a tool is an image/design tool
 */
export const isImageDesignTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const category = (tool.category || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase());

  // Check for explicit subtags
  if (tool.tags?.some(t => Object.values(IMAGE_DESIGN_SUBTYPES).includes(t as any))) return true;

  // Check category
  if (category.includes("image") || category.includes("design") || 
      category.includes("art") || category.includes("photo")) return true;

  // Check for subtype detection
  if (getImageDesignSubtype(tool)) return true;

  // Check common image/design keywords
  const imageDesignKeywords = [
    "image", "photo", "picture", "graphic", "design", "art",
    "visual", "illustration", "logo", "avatar", "background"
  ];

  if (imageDesignKeywords.some(kw => title.includes(kw) || description.includes(kw))) return true;

  return false;
};

/**
 * Get all image/design tools from a list
 */
export const getImageDesignTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isImageDesignTool(tool));
};

/**
 * Enhanced image/design category detection for cache building
 */
export const getEnhancedImageDesignTools = (tools: Tool[]): Tool[] => {
  const imageTools = tools.filter(tool => {
    if (isImageDesignTool(tool)) return true;

    const title = tool.title.toLowerCase();
    const description = (tool.description || "").toLowerCase();

    // Additional detection for creative/design tools
    const creativeKeywords = [
      "creative", "artistic", "visual", "canvas", "paint",
      "draw", "sketch", "render", "generate image"
    ];

    if (creativeKeywords.some(kw => title.includes(kw) || description.includes(kw))) return true;

    return false;
  });

  if (import.meta.env.DEV) console.log(`🎨 Enhanced Image/Design Detection: Found ${imageTools.length} tools`);
  return imageTools;
};
