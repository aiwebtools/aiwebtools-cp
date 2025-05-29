
import { Tool } from "@/types/tools";
import { coreImageGenerators } from './coreImageGenerators';
import { imageEditingTools } from './imageEditingTools';
import { specializedImageTools } from './specializedImageTools';
import { backgroundAndObjectTools } from './backgroundAndObjectTools';

// Combine all image generation and editing tools
export const imageGenerationPlatforms: Tool[] = [
  ...coreImageGenerators,
  ...imageEditingTools,
  ...specializedImageTools,
  ...backgroundAndObjectTools
];
