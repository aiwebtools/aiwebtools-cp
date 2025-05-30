
import { Tool } from "@/types/tools";
import { videoGenerationTools } from './videoGenerationTools';
import { videoEditingTools } from './videoEditingTools';
import { videoBusinessTools } from './videoBusinessTools';
import { videoMarketingTools } from './videoMarketingTools';

export const videoTools: Tool[] = [
  ...videoGenerationTools,
  ...videoEditingTools,
  ...videoBusinessTools,
  ...videoMarketingTools
];
