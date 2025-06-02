
import { Tool } from "@/types/tools";
import { getImageAndDesignTools } from "./imageDesignMatching";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools 
} from "./basicCategoryMatching";

// Re-export all category matching functions from their respective modules
export { getImageAndDesignTools } from "./imageDesignMatching";
export { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools 
} from "./basicCategoryMatching";
