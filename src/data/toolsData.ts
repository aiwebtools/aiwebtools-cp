import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { forceWEB3Reset } from '@/utils/forceWEB3CacheReset';

// Force WEB3 cache reset to ensure .transfermoney appears
forceWEB3Reset();

// Import AI Web Tools GPTs - PRIORITY FEATURED TOOLS
import { priorityFeaturedGPTs } from "./tools/aiWebTools/priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./tools/aiWebTools/secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./tools/aiWebTools/thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./tools/aiWebTools/fourthPriorityFeaturedGPTs";

// Import AI Web Tools GPT Collections
import { aiWebToolsGPTs } from "./tools/aiWebTools/aiWebToolsGPTs";
import { advancedSpecialtyGPTs } from "./tools/aiWebTools/advancedSpecialtyGPTs";
import { additionalSpecializedGPTs } from "./tools/aiWebTools/additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./tools/aiWebTools/finalSpecializedGPTs";
import { newSpecializedGPTs } from "./tools/aiWebTools/newSpecializedGPTs";

// Import AI Web Tools Category Collections
import { personalDevelopmentGPTs } from "./tools/aiWebTools/personalDevelopmentGPTs";
import { educationAndLearningGPTs } from "./tools/aiWebTools/educationAndLearningGPTs";
import { educationalToolsGPTs } from "./tools/aiWebTools/educationalToolsGPTs";
import { healthAndWellnessGPTs } from "./tools/aiWebTools/healthAndWellnessGPTs";
import { researchAndPharmaceuticalGPTs } from "./tools/aiWebTools/researchAndPharmaceuticalGPTs";
import { scienceAndResearchGPTs } from "./tools/aiWebTools/scienceAndResearchGPTs";
import { businessAndFinanceGPTs } from "./tools/aiWebTools/businessAndFinanceGPTs";
import { businessStrategyGPTs } from "./tools/aiWebTools/businessStrategyGPTs";
import { legalAndGovernmentGPTs } from "./tools/aiWebTools/legalAndGovernmentGPTs";
import { governmentCivicGPTs } from "./tools/aiWebTools/governmentCivicGPTs";
import { professionalServicesGPTs } from "./tools/aiWebTools/professionalServicesGPTs";
import { utilityAndProductivityGPTs } from "./tools/aiWebTools/utilityAndProductivityGPTs";
import { creativeAndMediaGPTs } from "./tools/aiWebTools/creativeAndMediaGPTs";
import { contentCreationToolsGPTs } from "./tools/aiWebTools/contentCreationToolsGPTs";
import { multimediaAndContentGPTs } from "./tools/aiWebTools/multimediaAndContentGPTs";
import { artAndCreativeGPTs } from "./tools/aiWebTools/artAndCreativeGPTs";
import { aiPromptingAndGenerationGPTs } from "./tools/aiWebTools/aiPromptingAndGenerationGPTs";
import { communicationAndEntertainmentGPTs } from "./tools/aiWebTools/communicationAndEntertainmentGPTs";
import { entertainmentAndGamingGPTs } from "./tools/aiWebTools/entertainmentAndGamingGPTs";
import { foodAndHospitalityGPTs } from "./tools/aiWebTools/foodAndHospitalityGPTs";
import { investigativeAndAnalysisGPTs } from "./tools/aiWebTools/investigativeAndAnalysisGPTs";
import { appraisalAndValuationGPTs } from "./tools/aiWebTools/appraisalAndValuationGPTs";
import { mysteriousAndUnusualGPTs } from "./tools/aiWebTools/mysteriousAndUnusualGPTs";
import { spiritualAndPhilosophyGPTs } from "./tools/aiWebTools/spiritualAndPhilosophyGPTs";
import { timeAndHistoryGPTs } from "./tools/aiWebTools/timeAndHistoryGPTs";
import { technologyInnovationGPTs } from "./tools/aiWebTools/technologyInnovationGPTs";
import { specializedNicheToolsGPTs } from "./tools/aiWebTools/specializedNicheToolsGPTs";

import { newAffiliatePlatforms2025 } from "./tools/newAffiliatePlatforms2025";
import { newPersonalDevelopmentTools } from "./tools/newPersonalDevelopmentTools";

// Import WEB3 domains
import { web3DomainsTools } from "./tools/web3DomainsTools";

const allToolCategories = consolidateTools([
  ...getAllToolCategories(), // Load only core tools initially
  ...newAffiliatePlatforms2025.slice(0, 10),
  ...newPersonalDevelopmentTools.slice(0, 10),
  ...web3DomainsTools.slice(0, 10),
  
  // Add PRIORITY AI Web Tools GPTs first (performance optimized)
  ...priorityFeaturedGPTs,
  ...secondPriorityFeaturedGPTs.slice(0, 15),
  ...thirdPriorityFeaturedGPTs.slice(0, 10)
]);

// Apply deduplication to remove tools that appear in multiple categories
const deduplicatedTools = deduplicateTools(allToolCategories);

// Use deduplicatedTools directly (power ranking now handled in featured tools)
let combinedTools: Tool[] = [...deduplicatedTools];

// SPECIFIC FIX: Ensure Property Data Finder GPT has the correct URL
combinedTools = combinedTools.map((tool, index) => {
  if (tool.title === "Property Data Finder GPT") {
    console.log(`🔧 FIXING Property Data Finder GPT at index ${index}`);
    return {
      ...tool,
      directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
      category: tool.category || "Real Estate & Property",
      description: tool.description || "Property Data Finder GPT by Ai Web Tools LLC delivers unparalleled, precise, and current information about properties. Discover everything from market value and topography to living area, year built, estimated facing direction, geocoordinates, and beyond. Unlock a wealth of property insights like never before!"
    };
  }
  return tool;
});

// Remove any duplicate "Financial Calculator Pro" entries - keep only the one from Business & Productivity
const filteredTools = combinedTools.filter((tool, index) => {
  if (tool.title === 'Financial Calculator Pro') {
    // Only keep the one with the correct category and URL
    return tool.category === 'Business & Productivity' && 
           tool.directUrl === 'https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools';
  }
  return true;
});

// REMOVED excessive console logging for performance
const elevenLabsInFinal = filteredTools.filter(tool => tool.title.toLowerCase().includes('eleven'));
const sunoInFinal = filteredTools.filter(tool => tool.title.toLowerCase().includes('suno'));

// Only log tool count summary for performance
console.log(`✅ AI Web Tools loaded: ${filteredTools.length} tools ready`);

export const allTools: Tool[] = filteredTools;

// REMOVED excessive property debugging for performance - only critical checks remain
if (allTools.findIndex(tool => tool.title === "Property Data Finder GPT") === -1) {
  console.error(`❌ Property Data Finder GPT not found!`);
}

// Use filtered tools for all exports
export const featuredTools: Tool[] = createFeaturedTools(filteredTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };

// Lazy initialization of tool count analysis to avoid circular dependency - PERFORMANCE OPTIMIZED
let toolCountAnalysis: any = null;

export const getToolCountAnalysis = () => {
  if (!toolCountAnalysis) {
    // Import getToolCount only when needed with reduced logging for performance
    import('@/utils/toolCounter').then(({ getToolCount, verifyAllToolsPreservation }) => {
      toolCountAnalysis = getToolCount();
      
      // REDUCED logging for better performance
      console.log(`🎉 Total tools loaded: ${filteredTools.length}`);
      console.log(`📊 Categories: ${Object.keys(getCategoriesWithCounts(filteredTools)).length}`);
      
      // Skip heavy preservation verification on page load for performance
      // Only run basic checks
      const uncategorizedTools = filteredTools.filter(tool => !tool.category || tool.category.trim() === '');
      if (uncategorizedTools.length === 0) {
        console.log('✅ All tools properly categorized');
      }

      // Quick status summary without heavy processing
      console.log(`📊 SUMMARY: ${filteredTools.length} tools, ${Object.keys(getCategoriesWithCounts(filteredTools)).length} categories`);
    }).catch(error => {
      console.error('Error loading tool count analysis:', error);
    });
  }
  return toolCountAnalysis;
};

// PERFORMANCE OPTIMIZED: Minimal initialization - only essential operations
// Only run analysis in development or if specifically requested
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    getToolCountAnalysis();
  }, 5000); // Further delayed to ensure smooth page load
}
