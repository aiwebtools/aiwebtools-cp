
import { Tool } from "@/types/tools";
import { aiWebToolsHealthGPTs } from "./health/aiWebToolsHealthGPTs";
import { specializedHealthTools } from "./health/specializedHealthTools";
import { mainStreamHealthPlatforms } from "./health/mainStreamHealthPlatforms";

export const healthAndWellness: Tool[] = [
  ...aiWebToolsHealthGPTs,
  ...specializedHealthTools,
  ...mainStreamHealthPlatforms
];
