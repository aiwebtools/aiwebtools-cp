
import { Tool } from "@/types/tools";
import { videoGenerationTools } from './videoGenerationTools';
import { videoEditingTools } from './videoEditingTools';
import { videoBusinessTools } from './videoBusinessTools';
import { videoMarketingTools } from './videoMarketingTools';
import { newVideoGenerationTools2025 } from './newVideoGenerationTools2025';

export const videoTools: Tool[] = [
  ...videoGenerationTools,
  ...newVideoGenerationTools2025,
  ...videoEditingTools,
  ...videoBusinessTools,
  ...videoMarketingTools
];
