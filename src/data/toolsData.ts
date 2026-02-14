import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { markFreeTools } from '@/utils/toolUtils';
import { applySpirtualTags } from '@/utils/spiritualTagging';

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

// Import SFX Generator Tools
import { sfxGeneratorTools } from "./tools/sfxGeneratorTools";

// Import Emerging & Healthcare AI Tools 2025
import { emergingAITools2025 } from "./tools/emergingAITools2025";
import { healthcareAITools2025 } from "./tools/healthcareAITools2025";
import { healthcareAITools2025Batch2 } from "./tools/healthcareAITools2025Batch2";

// Import Email Productivity Tools 2025
import { emailProductivityTools2025 } from "./tools/emailProductivityTools2025";

// Import 3D Modeling Tools 2025
import { threeDModelingTools2025 } from "./tools/threeDModelingTools2025";

// Import AI Agents 2025
import { aiAgents2025 } from "./tools/aiAgents2025";
import { aiAgents2025Batch2 } from "./tools/aiAgents2025Batch2";

// Import Lifestyle Tools 2025 (Life Assistants, Memory, Face Swap, Finance, Audio)
import { lifestyleTools2025 } from "./tools/lifestyleTools2025";

// Import Multi-Category Tools 2025 (Legal, Real Estate, Games, Travel, Fashion, Healthcare, Data, Future Video, Prompts)
import { multiCategoryTools2025 } from "./tools/multiCategoryTools2025";

// Import Image, Translation & Storytelling Tools 2025
import { imageTranslationStorytelling2025 } from "./tools/imageTranslationStorytelling2025";

// Import Marketing, Transcriber & Storytelling Tools 2025 (16 new verified tools)
import { marketingTranscriberStorytelling2025 } from "./tools/marketingTranscriberStorytelling2025";

// Import Verified AI Tools Batch 2025 (20+ new verified tools)
import { verifiedToolsBatch2025 } from "./tools/verifiedToolsBatch2025";

// Import Missing Tools Batch 2025 (7 new verified tools)
import { missingToolsBatch2025 } from "./tools/missingToolsBatch2025";

// Import Audit Batch Q2 2025 (14 new verified tools: TTS, AI Detection, Logo, Email Marketing)
import { auditBatch2025Q2Tools } from "./tools/auditBatch2025Q2";

// Import Audit Batch Q2 2025 Part 2 (20 new verified tools: E-commerce, AI Humanizer, Human Resources)
import { auditBatch2025Q2Part2Tools } from "./tools/auditBatch2025Q2Part2";

// Import Audit Batch Q2 2025 Part 3 (12 new verified tools: AI Chat, Video Gen, TTS, Education)
import { auditBatch2025Q2Part3 } from "./tools/auditBatch2025Q2Part3";

// Import Audit Batch Q2 2025 Part 4 (8 new verified tools: Logo Creation, Website & Design)
import { auditBatch2025Q2Part4Tools } from "./tools/auditBatch2025Q2Part4";

// Import Audit Batch Q2 2025 Part 5 (8 new verified tools: Image Editing, Video Edition, Audio Editing)
import { auditBatch2025Q2Part5Tools } from "./tools/auditBatch2025Q2Part5";

// Import Audit Batch Q2 2025 Part 6 (16 new verified tools: Extensions ChatGPT, Social Networks, Summarizer, Productivity)
import { auditBatch2025Q2Part6Tools } from "./tools/auditBatch2025Q2Part6";

// Import Audit Batch Q2 2025 Part 7 (17 new verified tools: Presentation, Files & Spreadsheets, Music, Face Swap)
import { auditBatch2025Q2Part7Tools } from "./tools/auditBatch2025Q2Part7";

// Import Audit Batch Q2 2025 Part 8 (7 new verified tools: Finance, Text Generators, Research & Science, Text-to-Video)
import { auditBatch2025Q2Part8Tools } from "./tools/auditBatch2025Q2Part8";

// Import Audit Batch Q2 2025 Part 9 (13 new verified tools: Translation, Marketing, Transcriber, Storytelling Generator)
import { auditBatch2025Q2Part9Tools } from "./tools/auditBatch2025Q2Part9";

// Import Audit Batch Q2 2025 Part 10 (8 new verified tools: ChatBots, Voice Cloning, Avatars, Amazing)
import { auditBatch2025Q2Part10Tools } from "./tools/auditBatch2025Q2Part10";

// Import Audit Batch Q2 2025 Part 11 (12 new verified tools: No Code/Low Code, Assistant Code, Developer Tools, Legal Assistants)
import { auditBatch2025Q2Part11Tools } from "./tools/auditBatch2025Q2Part11";

// Import Audit Batch Q2 2025 Part 12 (4 new verified tools: Business, Prompts & Aids)
import { auditBatch2025Q2Part12Tools } from "./tools/auditBatch2025Q2Part12";

// Import Audit Batch Q2 2025 Part 13 (6 new verified tools: Real Estate/Architect, Art, Travel)
import { auditBatch2025Q2Part13Tools } from "./tools/auditBatch2025Q2Part13";

// Import Audit Batch Q2 2025 Part 14 (6 new verified tools: Fashion, Dating & Relationships, Healthcare, Automation)
import { auditBatch2025Q2Part14Tools } from "./tools/auditBatch2025Q2Part14";

// Import Audit Batch Q2 2025 Part 15 (15 new verified tools: LLM Models, Data & Analytics, Assistive Technology, Future Tools)
import { auditBatch2025Q2Part15Tools } from "./tools/auditBatch2025Q2Part15";

// Import Future Tools Batch Q2 2025 (45+ new verified Future Tools)
import { futureToolsBatch2025Q2 } from "./tools/futureToolsBatch2025Q2";

// Import Trending Tools Batch 2025 (11 new trending tools: Face Shape, Photo Editor, Seedance, Wan2.6, MiniMax, etc.)
import { trendingToolsBatch2025 } from "./tools/trendingToolsBatch2025";

// Import Top AI Agent Platforms 2026 (Dify, Coze, Flowise, Letta, Agno)
import { topAgentPlatforms2026 } from "./tools/topAgentPlatforms2026";

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
  ...videoPromptGPTs,
  
  // SFX Generator Tools
  ...sfxGeneratorTools,
  
  // Emerging & Healthcare AI Tools 2025
  ...emergingAITools2025,
  ...healthcareAITools2025,
  ...healthcareAITools2025Batch2,
  
  // Email Productivity Tools 2025
  ...emailProductivityTools2025,
  
  // 3D Modeling Tools 2025
  ...threeDModelingTools2025,
  
  // AI Agents 2025 (85+ new agent tools)
  ...aiAgents2025,
  ...aiAgents2025Batch2,
  
  // Lifestyle Tools 2025 (Life Assistants, Memory, Face Swap, Finance, Audio)
  ...lifestyleTools2025,
  
  // Multi-Category Tools 2025 (Legal, Real Estate, Games, Travel, Fashion, Healthcare, Data, Future Video, Prompts)
  ...multiCategoryTools2025,
  
  // Image, Translation & Storytelling Tools 2025
  ...imageTranslationStorytelling2025,
  
  // Marketing, Transcriber & Storytelling Tools 2025 (16 new verified tools)
  ...marketingTranscriberStorytelling2025,
  
  // Verified AI Tools Batch 2025 (20+ new verified tools)
  ...verifiedToolsBatch2025,
  
  // Missing Tools Batch 2025 (7 new verified tools)
  ...missingToolsBatch2025,
  
  // Audit Batch Q2 2025 (14 new verified tools: TTS, AI Detection, Logo, Email Marketing)
  ...auditBatch2025Q2Tools,
  
  // Audit Batch Q2 2025 Part 2 (20 new verified tools: E-commerce, AI Humanizer, Human Resources)
  ...auditBatch2025Q2Part2Tools,
  
  // Audit Batch Q2 2025 Part 3 (12 new verified tools: AI Chat, Video Gen, TTS, Education)
  ...auditBatch2025Q2Part3,
  
  // Audit Batch Q2 2025 Part 4 (8 new verified tools: Logo Creation, Website & Design)
  ...auditBatch2025Q2Part4Tools,
  
  // Audit Batch Q2 2025 Part 5 (8 new verified tools: Image Editing, Video Edition, Audio Editing)
  ...auditBatch2025Q2Part5Tools,
  
  // Audit Batch Q2 2025 Part 6 (16 new verified tools: Extensions ChatGPT, Social Networks, Summarizer, Productivity)
  ...auditBatch2025Q2Part6Tools,
  
  // Audit Batch Q2 2025 Part 7 (17 new verified tools: Presentation, Files & Spreadsheets, Music, Face Swap)
  ...auditBatch2025Q2Part7Tools,
  
  // Audit Batch Q2 2025 Part 8 (7 new verified tools: Finance, Text Generators, Research & Science, Text-to-Video)
  ...auditBatch2025Q2Part8Tools,
  
  // Audit Batch Q2 2025 Part 9 (13 new verified tools: Translation, Marketing, Transcriber, Storytelling Generator)
  ...auditBatch2025Q2Part9Tools,
  
  // Audit Batch Q2 2025 Part 10 (8 new verified tools: ChatBots, Voice Cloning, Avatars, Amazing)
  ...auditBatch2025Q2Part10Tools,
  
  // Audit Batch Q2 2025 Part 11 (12 new verified tools: No Code/Low Code, Assistant Code, Developer Tools, Legal Assistants)
  ...auditBatch2025Q2Part11Tools,
  
  // Audit Batch Q2 2025 Part 12 (4 new verified tools: Business, Prompts & Aids)
  ...auditBatch2025Q2Part12Tools,
  
  // Audit Batch Q2 2025 Part 13 (6 new verified tools: Real Estate/Architect, Art, Travel)
  ...auditBatch2025Q2Part13Tools,
  
  // Audit Batch Q2 2025 Part 14 (6 new verified tools: Fashion, Dating & Relationships, Healthcare, Automation)
  ...auditBatch2025Q2Part14Tools,
  
  // Audit Batch Q2 2025 Part 15 (15 new verified tools: LLM Models, Data & Analytics, Assistive Technology, Future Tools)
  ...auditBatch2025Q2Part15Tools,
  
  // Future Tools Batch Q2 2025 (45+ new verified Future Tools)
  ...futureToolsBatch2025Q2,
  
  // Trending Tools Batch 2025 (11 new trending tools from industry rankings)
  ...trendingToolsBatch2025,
  
  // Top AI Agent Platforms 2026 (Dify, Coze, Flowise, Letta, Agno)
  ...topAgentPlatforms2026
]);

// Apply deduplication to remove tools that appear in multiple categories
const deduplicatedTools = deduplicateTools(allToolCategories);

// Use deduplicatedTools directly (power ranking now handled in featured tools)
let combinedTools: Tool[] = [...deduplicatedTools];

// Apply specific fixes for known tools
combinedTools = combinedTools.map(tool => {
  if (tool.title === "Property Data Finder GPT") {
    return {
      ...tool,
      directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
      category: tool.category || "Real Estate & Property",
      description: tool.description || "Property Data Finder GPT by Ai Web Tools delivers unparalleled, precise, and current information about properties."
    };
  }
  if (tool.title === "Manicheism GPT") {
    return { ...tool, imageUrl: "/images/manicheism-gpt-hero.png", isFree: true };
  }
  return tool;
});

// Remove duplicate Financial Calculator Pro entries
const filteredTools = combinedTools.filter(tool => {
  if (tool.title === 'Financial Calculator Pro') {
    return tool.category === 'Business & Productivity' && 
           tool.directUrl === 'https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools';
  }
  return true;
});

// Mark all AI Web Tools GPTs as free and apply spiritual/simulation tags
const toolsWithFreeFlags = markFreeTools(filteredTools);
const toolsWithTags = applySpirtualTags(toolsWithFreeFlags);

export const allTools: Tool[] = toolsWithTags;

// Use filtered tools for all exports
export const featuredTools: Tool[] = createFeaturedTools(filteredTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };
