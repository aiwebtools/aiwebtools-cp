
// Re-export all functions from the modular files
export * from "./types";
export * from "./constants";
export * from "./normalization";
export * from "./videoDetection";
export * from "./videoMultimediaDetection";
export * from "./categoryMatching";
export * from "./toolFiltering";
export * from "./threeDVisualizationDetection";
export * from "./audioMusicDetection";
export * from "./imageDesignDetection";
export * from "./writingContentDetection";
export * from "./codingDevelopmentDetection";
// Re-export marketingSalesDetection with explicit names to avoid conflict
export { 
  isMarketingSalesTool, 
  detectMarketingSalesSubtypes,
  MARKETING_SALES_SUBTYPES,
  MARKETING_SALES_KEYWORDS,
  getMarketingSalesTools as getMarketingSalesToolsDirect
} from "./marketingSalesDetection";
export * from "./educationLearningDetection";
export * from "./gamingEntertainmentDetection";
export * from "./securityPrivacyDetection";
export * from "./healthDetection";
export * from "./spiritualityDetection";
export * from "./industryDetection";
export * from "./specializedDetection";
