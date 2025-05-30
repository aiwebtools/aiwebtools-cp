
import { Tool } from "@/types/tools";
import { aiWebToolsGPTs } from "./aiWebToolsGPTs";
import { traditionalBusinessTools } from "./traditionalBusinessTools";

export const businessAndProductivity: Tool[] = [
  ...aiWebToolsGPTs,
  ...traditionalBusinessTools
];
