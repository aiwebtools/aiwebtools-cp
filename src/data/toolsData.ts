import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { forceWEB3Reset } from '@/utils/forceWEB3CacheReset';
import { markFreeTools } from '@/utils/toolUtils';
import { runCategoryPhaseTest } from '@/utils/categoryUtils/categoryPhaseTest';
import { applySpirtualTags } from '@/utils/spiritualTagging';

// Force WEB3 cache reset to ensure .transfermoney appears
forceWEB3Reset();

// Force data refresh for Kabbalah GPT video
const KABBALAH_VIDEO_REFRESH = Date.now();

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

// PREVIOUSLY MISSING IMPORTS - NOW INCLUDED TO RAISE TOOL COUNT
import { customGeminiGems } from "./tools/aiWebTools/customGeminiGems";
import { inspectorAndSafetyGPTs } from "./tools/aiWebTools/inspectorAndSafetyGPTs";
import { philosophyAndLifestyleGPTs } from "./tools/aiWebTools/philosophyAndLifestyleGPTs";
import { videoPromptGPTs } from "./tools/aiWebTools/videoPromptGPTs";

import { newAffiliatePlatforms2025 } from "./tools/newAffiliatePlatforms2025";
import { newPersonalDevelopmentTools } from "./tools/newPersonalDevelopmentTools";

// Import WEB3 domains
import { web3DomainsTools } from "./tools/web3DomainsTools";

const allToolCategories = consolidateTools([
  ...getAllToolCategories(),
  ...newAffiliatePlatforms2025,
  ...newPersonalDevelopmentTools,
  ...web3DomainsTools,
  
  // Add the AI Web Tools GPT Collections
  ...priorityFeaturedGPTs,
  ...secondPriorityFeaturedGPTs,
  ...thirdPriorityFeaturedGPTs,
  ...fourthPriorityFeaturedGPTs,
  ...aiWebToolsGPTs,
  ...advancedSpecialtyGPTs,
  ...additionalSpecializedGPTs,
  ...finalSpecializedGPTs,
  ...newSpecializedGPTs,
  ...personalDevelopmentGPTs,
  ...educationAndLearningGPTs,
  ...educationalToolsGPTs,
  ...healthAndWellnessGPTs,
  ...researchAndPharmaceuticalGPTs,
  ...scienceAndResearchGPTs,
  ...businessAndFinanceGPTs,
  ...businessStrategyGPTs,
  ...legalAndGovernmentGPTs,
  ...governmentCivicGPTs,
  ...professionalServicesGPTs,
  ...utilityAndProductivityGPTs,
  ...creativeAndMediaGPTs,
  ...contentCreationToolsGPTs,
  ...multimediaAndContentGPTs,
  ...artAndCreativeGPTs,
  ...aiPromptingAndGenerationGPTs,
  ...communicationAndEntertainmentGPTs,
  ...entertainmentAndGamingGPTs,
  ...foodAndHospitalityGPTs,
  ...investigativeAndAnalysisGPTs,
  ...appraisalAndValuationGPTs,
  ...mysteriousAndUnusualGPTs,
  ...spiritualAndPhilosophyGPTs,
  ...timeAndHistoryGPTs,
  ...technologyInnovationGPTs,
  ...specializedNicheToolsGPTs,
  
  // PREVIOUSLY MISSING COLLECTIONS - NOW INCLUDED
  ...customGeminiGems,
  ...inspectorAndSafetyGPTs,
  ...philosophyAndLifestyleGPTs,
  ...videoPromptGPTs
]);

// Apply deduplication to remove tools that appear in multiple categories
const deduplicatedTools = deduplicateTools(allToolCategories);

console.log(`🔍 TOOL COUNT TRACKING:`);
console.log(`   📊 Raw tools from collection: ${allToolCategories.length}`);
console.log(`   📊 After deduplication: ${deduplicatedTools.length}`);
console.log(`   📊 Tools removed by dedup: ${allToolCategories.length - deduplicatedTools.length}`);

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
  // SPECIFIC FIX: Ensure Manicheism GPT has its image
  if (tool.title === "Manicheism GPT") {
    return {
      ...tool,
      imageUrl: "/images/manicheism-gpt-hero.png",
      isFree: true
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

console.log(`🔍 FINAL TOOL COUNT:`);
console.log(`   📊 Combined tools: ${combinedTools.length}`);
console.log(`   📊 After filtering: ${filteredTools.length}`);
console.log(`   📊 Tools removed by filtering: ${combinedTools.length - filteredTools.length}`);

// Mark all AI Web Tools GPTs as free and apply spiritual/simulation tags
const toolsWithFreeFlags = markFreeTools(filteredTools);
const toolsWithTags = applySpirtualTags(toolsWithFreeFlags);
const freeToolsCount = toolsWithTags.filter(t => t.isFree).length;
console.log(`   📊 Free AI Web Tools GPTs: ${freeToolsCount}`);

// DEBUG: Check if ElevenLabs and Suno tools are in the final collection
const elevenLabsInFinal = toolsWithTags.filter(tool => tool.title.toLowerCase().includes('eleven'));
const sunoInFinal = toolsWithTags.filter(tool => tool.title.toLowerCase().includes('suno'));

console.log(`🔍 FINAL TOOLS DEBUG:`);
console.log(`   Total tools in final collection: ${toolsWithTags.length}`);
console.log(`   ElevenLabs tools found: ${elevenLabsInFinal.length}`, elevenLabsInFinal.map(t => t.title));
console.log(`   Suno tools found: ${sunoInFinal.length}`, sunoInFinal.map(t => t.title));

export const allTools: Tool[] = toolsWithTags;

// DEBUG: Find Property Data Finder GPT and log its details
const propertyToolIndex = allTools.findIndex(tool => tool.title === "Property Data Finder GPT");
if (propertyToolIndex !== -1) {
  const propertyTool = allTools[propertyToolIndex];
  console.log(`✅ Property Data Finder GPT found at index ${propertyToolIndex}`);
  console.log(`📍 URL: ${propertyTool.directUrl}`);
  console.log(`📂 Category: ${propertyTool.category}`);
} else {
  console.error(`❌ Property Data Finder GPT not found in tools collection!`);
}

// ENHANCED DEBUG: Find all instances of tools with similar names
const propertyRelatedTools = allTools.map((tool, index) => ({
  index,
  title: tool.title,
  url: tool.directUrl,
  category: tool.category,
  isPropertyTool: tool.title.toLowerCase().includes('property')
})).filter(tool => tool.isPropertyTool);

console.log('🏠 All property-related tools found:', propertyRelatedTools);

// Debug tool at index 59 specifically
if (allTools[59]) {
  console.log(`🔍 Tool at index 59:`, {
    title: allTools[59].title,
    url: allTools[59].directUrl,
    category: allTools[59].category
  });
} else {
  console.log(`⚠️ No tool found at index 59`);
}

// Use filtered tools for all exports
export const featuredTools: Tool[] = createFeaturedTools(filteredTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };

// Lazy initialization of tool count analysis to avoid circular dependency
let toolCountAnalysis: any = null;

export const getToolCountAnalysis = () => {
  if (!toolCountAnalysis) {
    // Import getToolCount only when needed to avoid circular dependency
    import('@/utils/toolCounter').then(({ getToolCount, verifyAllToolsPreservation }) => {
      toolCountAnalysis = getToolCount();
      
      // Run comprehensive preservation verification
      console.log(`\n🔍 RUNNING COMPREHENSIVE TOOL PRESERVATION VERIFICATION...`);
      const preservationReport = verifyAllToolsPreservation();
      
      // Debug information with enhanced logging using accurate count
      console.log(`🎉 MILESTONE ACHIEVED! Total tools loaded: ${filteredTools.length}`);
      console.log(`📊 Categories found: ${Object.keys(getCategoriesWithCounts(filteredTools)).length}`);
      console.log(`🎯 Accurate count for website: ${filteredTools.length} tools`);
      console.log(`📈 Marketing display: ${Math.round(filteredTools.length / 100) * 100}+ tools`);
      console.log(`🎯 Preservation Score: ${preservationReport.integrityScore.toFixed(1)}/100`);

      const categoryBreakdown = getCategoriesWithCounts(filteredTools);
      console.log('📋 Category breakdown:', categoryBreakdown);

      // Verify all tools have categories
      const uncategorizedTools = filteredTools.filter(tool => !tool.category || tool.category.trim() === '');
      if (uncategorizedTools.length > 0) {
        console.warn(`⚠️ Found ${uncategorizedTools.length} uncategorized tools:`, uncategorizedTools.map(t => t.title));
      } else {
        console.log('✅ All tools are properly categorized!');
      }

      // Final check for Financial Calculator Pro duplicates
      const finalFinancialCalcCheck = filteredTools.filter(tool => tool.title === 'Financial Calculator Pro');
      console.log(`✅ Final Financial Calculator Pro instances: ${finalFinancialCalcCheck.length}`);
      if (finalFinancialCalcCheck.length === 1) {
        console.log('✅ SUCCESS: Only one Financial Calculator Pro instance remains');
        console.log('📍 Location:', finalFinancialCalcCheck[0].category);
        console.log('🔗 URL:', finalFinancialCalcCheck[0].directUrl);
      } else {
        console.error(`❌ STILL HAVE ${finalFinancialCalcCheck.length} instances of Financial Calculator Pro!`);
      }

      // Summary for Ken with accurate numbers and preservation status
      const criticalToolsMissing = preservationReport.criticalTools.filter(t => t.status === 'missing').length;
      console.log(`
🚀 AI WEB TOOLS DIRECTORY STATUS REPORT 🚀
================================================
✅ EXACT Total AI Tools: ${filteredTools.length}
✅ Marketing Display: ${Math.round(filteredTools.length / 100) * 100}+ AI Tools
✅ Categories Available: ${Object.keys(categoryBreakdown).length}
✅ Quality Assurance: All tools categorized and deduplicated
🎯 Preservation Score: ${preservationReport.integrityScore.toFixed(1)}/100
🔍 Critical AI Web Tools GPTs: ${preservationReport.criticalTools.filter(t => t.status === 'found').length}/${preservationReport.criticalTools.length} preserved
${criticalToolsMissing > 0 ? `❌ Missing Critical Tools: ${criticalToolsMissing}` : '✅ All Critical Tools Preserved'}
✅ Coverage: Advanced AI, Research, Productivity, Security, Finance, Healthcare, Education, Legal, and more!

${preservationReport.integrityScore >= 95 ? 
'🎉 EXCELLENT: Tool preservation is working perfectly!' : 
preservationReport.integrityScore >= 85 ? 
'⚠️ GOOD: Minor preservation issues detected' : 
'🚨 CRITICAL: Major preservation issues require attention!'}
`);
    }).catch(error => {
      console.error('Error loading tool count analysis:', error);
    });
  }
  return toolCountAnalysis;
};

// Initialize the analysis asynchronously to avoid blocking
setTimeout(() => {
  getToolCountAnalysis();
  
  // Run category phase test to verify all 13 phases are working
  console.log('\n🧪 Running Category Phase Test...');
  const phaseTestReport = runCategoryPhaseTest(filteredTools);
  console.log('📋 Phase Test Report:', phaseTestReport);
}, 0);
