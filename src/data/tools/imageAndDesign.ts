
import { Tool } from "@/types/tools";
import { aiImageGeneration } from "./aiImageGeneration";
import { imageEditingTools } from "./imageEditingTools";
import { designAndGraphicsTools } from "./designAndGraphicsTools";

export const imageAndDesign: Tool[] = [
  ...aiImageGeneration,
  ...imageEditingTools,
  ...designAndGraphicsTools
];
