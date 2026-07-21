
import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche,
  educationAndLearning,
  creativeAndEntertainment,
  researchAndLearning,
  aiToolsAndUtilities,
  healthcareProfessionals,
  legalProfessionals,
  emergencyServices,
  creativeServices,
  specializedPolicyTools,
  artAndCollectibles,
  aiChatPlatforms,
  aiDevelopmentTools,
  localAISolutions,
  aiInferencePlatforms,
  imageGenerationPlatforms,
  aiProductivityTools,
  openSourceAIModels,
  aiAgents,
  timeAndHistory,
  creativeSuites,
  advancedAITools,
  gameDesignAndDevelopment,
  learningAndEducation,
  platformsAndDevelopment,
  professionalServices,
  spiritualityTools,
  rawUncutTools,
  videoAndContentTools,
  businessAndTeamTools,
  searchAndProductivityTools,
  advancedChatPlatforms,
  developerAndCodingTools,
  contentDetectionTools,
  contentCreationAndWritingTools,
  documentAndResearchTools,
  designAndGraphicsTools,
  writingAndContentEnhancement,
  resumeAndCareerTools,
  ecommerceAndMarketingTools,
  videoEditingAndContentTools,
  coreImageGenerators,
  imageEditingTools,
  specializedImageTools,
  backgroundAndObjectTools,
  audioAndVoiceTools,
  financialAndTradingTools,
  specializedNicheTools,
  meetingAndTranscriptionTools,
  webDevelopmentTools,
  emailManagementTools,
  technicalAndUtilityTools,
  roboticsCompanies
} from './tools';

// Import the refactored tools
import { advancedVideoTools } from './tools/advancedVideoTools';
import { creativeDesignTools } from './tools/creativeDesignTools';
import { businessSalesTools } from './tools/businessSalesTools';
import { specializedAITools } from './tools/specializedAITools';
import { entertainmentMediaTools } from './tools/entertainmentMediaTools';

// Import existing categories
import { threeDAndVisualizationTools } from './tools/threeDAndVisualizationTools';
import { dataAnalyticsTools } from './tools/dataAnalyticsTools';
import { automationAndWorkflowTools } from './tools/automationAndWorkflowTools';

// Import new categories (100 additional tools)
import { socialMediaTools } from './tools/socialMediaTools';
import { collaborationTools } from './tools/collaborationTools';
import { marketingTools } from './tools/marketingTools';
import { utilitiesTools } from './tools/utilitiesTools';
import { creativePlatforms } from './tools/creativePlatforms';
import { learningPlatforms } from './tools/learningPlatforms';
import { cloudServices } from './tools/cloudServices';
import { developerTools } from './tools/developerTools';
import { communicationTools } from './tools/communicationTools';
import { entertainmentTools } from './tools/entertainmentTools';
import { newsAndInformationTools } from './tools/newsAndInformationTools';
import { healthAndWellness } from './tools/healthAndWellness';

// Import NEW comprehensive AI tool categories to reach 1000+
import { aiGenerativeTools } from './tools/aiGenerativeTools';
import { aiResearchTools } from './tools/aiResearchTools';
import { aiProductivitySuite } from './tools/aiProductivitySuite';
import { aiSecurityTools } from './tools/aiSecurityTools';
import { aiFinanceTools } from './tools/aiFinanceTools';
import { aiHealthcareTools } from './tools/aiHealthcareTools';
import { aiEducationTools } from './tools/aiEducationTools';
import { aiLegalTools } from './tools/aiLegalTools';

// Import mind-blowing AI tools for everyday users
import { mindBlowingAITools } from './tools/mindBlowingAITools';

// Import new design assistant tools category
import { designAssistantTools } from './tools/designAssistantTools';

// Import the comprehensive AI tools collection
import { comprehensiveAITools } from './tools/comprehensiveAITools';

// Import the new specialized GPTs from AI Web Tools
import { newSpecializedGPTs } from './tools/aiWebTools/newSpecializedGPTs';

// Import ALL AI Web Tools GPTs - CRITICAL for full indexing
import { aiWebToolsGPTs } from './tools/aiWebToolsGPTs';

// Import additional popular tools for 2025
import { additionalPopularTools2025 } from './tools/additionalPopularTools2025';

// Import ALL AI Web Tools GPT Collections to match toolsData.ts
import { priorityFeaturedGPTs } from "./tools/aiWebTools/priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./tools/aiWebTools/secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./tools/aiWebTools/thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./tools/aiWebTools/fourthPriorityFeaturedGPTs";
import { advancedSpecialtyGPTs } from "./tools/aiWebTools/advancedSpecialtyGPTs";
import { additionalSpecializedGPTs } from "./tools/aiWebTools/additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./tools/aiWebTools/finalSpecializedGPTs";
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

// Import the new additional real AI tools
import { additionalRealAITools } from './tools/additionalRealAITools';

// Import the NEWEST additional real AI tools
import { moreRealAITools } from './tools/moreRealAITools';

// Import historical and cultural tools
import { historicalAndCultural } from './tools/historicalAndCultural';

// Import new 2025 marketing and video tools
import { newMarketingTools2025 } from './tools/newMarketingTools2025';
import { newVideoMultimediaTools2025 } from './tools/newVideoMultimediaTools2025';

// Import additional 2025 tools
import { additionalVideoTools2025 } from './tools/additionalVideoTools2025';
import { additionalAudioTools2025 } from './tools/additionalAudioTools2025';
import { creativeExperimentalTools2025 } from './tools/creativeExperimentalTools2025';

// Import Web3 and Blockchain Tools
import { web3DomainsTools } from './tools/web3DomainsTools';

// Import missing tool categories (non-duplicates only)
import { aiImageGeneration } from './tools/aiImageGeneration';
import { businessProductivityAudio } from './tools/businessProductivityAudio';
import { coreAudioVoiceTools } from './tools/coreAudioVoiceTools';
import { videoBusinessTools } from './tools/videoBusinessTools';
import { videoEditingTools } from './tools/videoEditingTools';
import { videoGenerationTools } from './tools/videoGenerationTools';
import { videoMarketingTools } from './tools/videoMarketingTools';
import { professionalGPTsAudio } from './tools/professionalGPTsAudio';

// Import MAJOR AI PLATFORMS - The essentials
import { majorAIPlatforms } from './tools/majorAIPlatforms';
import { topImageGenerators } from './tools/topImageGenerators';
import { topMusicVideoTools } from './tools/topMusicVideoTools';
import { aiMusicVideoGeneratorTools } from './tools/aiMusicVideoGeneratorTools';
import { openSourceModelsBatch2026 } from './tools/openSourceModelsBatch2026';
import { mixedAgentsBatch2026 } from './tools/mixedAgentsBatch2026';
import { openSourceAgentsBatch2026Part3 } from './tools/openSourceAgentsBatch2026Part3';
import { openSourceAgentsBatch2026Part4 } from './tools/openSourceAgentsBatch2026Part4';
import { deepAgentToolsBatch2026 } from './tools/deepAgentToolsBatch2026';
import { freeOpenSourceBatch2026F } from './tools/freeOpenSourceBatch2026F';
import { freeOpenSourceBatch2026G } from './tools/freeOpenSourceBatch2026G';
import { freeOpenSourceBatch2026H } from './tools/freeOpenSourceBatch2026H';
import { freeAwesomeBatch2026I } from './tools/freeAwesomeBatch2026I';
import { freeAwesomeBatch2026II } from './tools/freeAwesomeBatch2026II';
import { freeAwesomeBatch2026III } from './tools/freeAwesomeBatch2026III';
import { popularWorldToolsBatch2026IV } from './tools/popularWorldToolsBatch2026IV';
import { popularWorldToolsBatch2026V } from './tools/popularWorldToolsBatch2026V';
import { openFreeAgentsBatch2026VI } from './tools/openFreeAgentsBatch2026VI';
import { verifiedMissingBatch2026VII } from './tools/verifiedMissingBatch2026VII';
import { aiToolDatabases2026 } from './tools/aiToolDatabases2026';
import { openSourceLocal2026 } from './tools/openSourceLocal2026';
import { openSourceLocal2026B } from './tools/openSourceLocal2026B';
import { openSourceLocal2026C } from './tools/openSourceLocal2026C';
import { openSourceLocal2026D } from './tools/openSourceLocal2026D';
import { openSourceLocal2026E } from './tools/openSourceLocal2026E';
import { openSourceLocal2026F } from './tools/openSourceLocal2026F';
import { openSourceLocal2026G } from './tools/openSourceLocal2026G';
import { openSourceLocal2026H } from './tools/openSourceLocal2026H';
import { topProductivityWriting } from './tools/topProductivityWriting';
import { developerProductivityAI } from './tools/developerProductivityAI';
import { aiResearchAcademicTools } from './tools/aiResearchAcademicTools';
import { aiPresentationTools } from './tools/aiPresentationTools';
import { aiSeoContentTools } from './tools/aiSeoContentTools';
import { aiCustomerSupportTools } from './tools/aiCustomerSupportTools';
import { aiDataAnalyticsTools } from './tools/aiDataAnalyticsTools';
import { aiVideoEditingTools } from './tools/aiVideoEditingTools';
import { aiHrRecruitmentTools } from './tools/aiHrRecruitmentTools';
import { aiTranslationTools } from './tools/aiTranslationTools';
import { aiProjectManagementTools } from './tools/aiProjectManagementTools';
import { aiEducationalTools } from './tools/aiEducationalTools';
import { aiCybersecurityTools } from './tools/aiCybersecurityTools';
import { aiSalesCrmTools } from './tools/aiSalesCrmTools';
import { aiLegalTechTools } from './tools/aiLegalTechTools';
import { aiHealthcareDiagnosisTools } from './tools/aiHealthcareDiagnosisTools';
import { aiRealEstateTools } from './tools/aiRealEstateTools';
import { aiAccountingFinanceTools } from './tools/aiAccountingFinanceTools';
import { aiFashionStyleTools } from './tools/aiFashionStyleTools';
import { aiLogisticsSupplyChainTools } from './tools/aiLogisticsSupplyChainTools';
import { aiMentalHealthWellnessTools } from './tools/aiMentalHealthWellnessTools';
import { aiEcommerceTools } from './tools/aiEcommerceTools';
import { aiVoiceSpeechTools } from './tools/aiVoiceSpeechTools';
import { aiGamingTools } from './tools/aiGamingTools';
import { aiGptStorePlatforms } from './tools/aiGptStorePlatforms';
import { aiBotMakingPlatforms } from './tools/aiBotMakingPlatforms';
import { aiDatingRelationshipTools } from './tools/aiDatingRelationshipTools';
import { aiFitnessNutritionTools } from './tools/aiFitnessNutritionTools';
import { aiInteriorDesignTools } from './tools/aiInteriorDesignTools';
import { aiCryptoTradingTools } from './tools/aiCryptoTradingTools';
import { aiSocialMediaTools } from './tools/aiSocialMediaTools';
import { aiMusicProductionTools } from './tools/aiMusicProductionTools';
import { aiTravelTourismTools } from './tools/aiTravelTourismTools';
import { aiPetCareTools } from './tools/aiPetCareTools';
import { aiAgricultureTools } from './tools/aiAgricultureTools';
import { aiConstructionTools } from './tools/aiConstructionTools';
import { aiShippingLogisticsTools } from './tools/aiShippingLogisticsTools';
import { aiInsuranceTools } from './tools/aiInsuranceTools';
import { aiAutomotiveTools } from './tools/aiAutomotiveTools';
import { additionalVideoImageGenerators } from './tools/additionalVideoImageGenerators';
import { ai3DModelingTools } from './tools/ai3DModelingTools';
import { aiPhotographyTools } from './tools/aiPhotographyTools';
import { aiRecruitmentHRTools } from './tools/aiRecruitmentHRTools';
import { aiSportsAnalyticsTools } from './tools/aiSportsAnalyticsTools';
import { aiVoiceAssistantTools } from './tools/aiVoiceAssistantTools';
import { aiAnimationTools } from './tools/aiAnimationTools';
import { aiPodcastTools } from './tools/aiPodcastTools';
import { aiTranscriptionToolsPro } from './tools/aiTranscriptionToolsPro';
import { aiMeetingAssistants } from './tools/aiMeetingAssistants';
import { aiNoteTakingTools } from './tools/aiNoteTakingTools';

// NEW 2025: Website Builders and Specialized Tools
import { newWebsiteBuilders2025 } from './tools/newWebsiteBuilders2025';
import { newSpecializedTools2025 } from './tools/newSpecializedTools2025';


// Import AI Gadgets & Devices (pet gadgets, smart glasses, wearables)
import { aiGadgetsDevicesTools } from './tools/aiGadgetsDevicesTools';

// Import AI Gadgets & Devices Batch 2026 (Ray-Ban Meta, Even Realities G1, Brilliant Frame, Omi, Plaud Note, Insta360 GO 3S, Looi, Eilik, Loona, Rewind Pendant)
import { aiGadgetsDevicesBatch2026 } from './tools/aiGadgetsDevicesBatch2026';

// Import AI Gadgets Batch 2026 Trust (Humane Pin, XREAL, Halliday, Solos, Vuzix, Oura 4, Galaxy Ring, Ultrahuman, RingConn, WHOOP MG, Lumen, Fenix 8, inReach+, Reachy 2, Ameca, Walker S1, XPeng Iron, Kepler K2, Aibo, Lovot)
import { aiGadgetsBatch2026Trust } from './tools/aiGadgetsBatch2026Trust';

// Import One More Shot AI (AI music video generator)
import { oneMoreShotAi } from './tools/oneMoreShotAi';

// Import Trending AI Batch 2026 April (Cluely, Felo, Pi, SambaNova, Same.dev, Lambda, MotherDuck, Milvus, Heyboss, MultiOn)
import { trendingAiBatch2026Apr } from './tools/trendingAiBatch2026Apr';

// Import Vid.ai (faceless YouTube Shorts / TikTok automation)
import { vidAi } from './tools/vidAi';

// Import Free Awesome Batch 2026 (Excalidraw, Cleanup.pictures, Consensus, HuggingChat, Scribble Diffusion)
import { freeAwesomeBatch2026 } from './tools/freeAwesomeBatch2026';
// Import Free Awesome Batch 2026 B (Photopea, Penpot, Stirling PDF, Pinokio, Fooocus)
import { freeAwesomeBatch2026B } from './tools/freeAwesomeBatch2026B';
// Import Free Awesome Batch 2026 C (Kokoro TTS, Perplexica, OpenUI, FreeConvert, Yourware)
import { freeAwesomeBatch2026C } from './tools/freeAwesomeBatch2026C';
// Import Free Awesome Batch 2026 D (Khoj, Venice AI, Morphic, Cobalt, Supermeme, DeepWiki)
import { freeAwesomeBatch2026D } from './tools/freeAwesomeBatch2026D';
// Import Free Awesome Batch 2026 E (20 powerhouse free open-source AI tools/agents: Smolagents, Magentic-One, Dyad, Onlook, Plandex, Roo Code, Pipecat, Open Notebook, SurfSense, RAGFlow, Quivr, Maxun, ScrapeGraphAI, LightRAG, Devika, AppFlowy, AFFiNE, Reor, Daytona, Chatbox)
import { freeAwesomeBatch2026E } from './tools/freeAwesomeBatch2026E';
// Import Free Awesome Batch 2026 F/G/H — 55 verified free/open-source AI tools (July 2026)
import { freeAwesomeBatch2026F } from './tools/freeAwesomeBatch2026F';
import { freeAwesomeBatch2026G } from './tools/freeAwesomeBatch2026G';
import { freeAwesomeBatch2026H } from './tools/freeAwesomeBatch2026H';
// Import New Agents + Free Medical Batch 2026 E (Sim Studio, AgentKit by OpenAI, Symptomate)
import { newAgentsAndMedicalBatch2026E } from './tools/newAgentsAndMedicalBatch2026E';
// Import Offline Downloadable Batch 2026 (InvokeAI, Backyard AI, SillyTavern, MLC Chat mobile, Enchanted mobile)
import { offlineDownloadableBatch2026 } from './tools/offlineDownloadableBatch2026';

// Import AI Hardware (legacy - moved to gadgets)
import { aiHardware } from './tools/aiHardware';

// Combine all tool categories - REORGANIZED FOR BETTER PRIORITY
export const getAllToolCategories = (): Tool[] => {
  return [
    // ========================================
    // TIER 1: MAJOR AI PLATFORMS (Most Popular & Essential)
    // ========================================
    // AI TOOL DATABASES — AIWebTools.ai is dominant, always first-appearing
    ...aiToolDatabases2026,
    ...majorAIPlatforms, // ChatGPT, Claude, Gemini, Perplexity, etc.
    ...topImageGenerators, // Midjourney, DALL-E, Flux, Stable Diffusion, etc.
    ...topMusicVideoTools, // Sora, Runway, ElevenLabs, Udio, etc.
    ...aiMusicVideoGeneratorTools, // Muvio, Kaiber, Neural Frames, Specterr, Rotor, etc.
    ...openSourceModelsBatch2026, // Qwen3, DeepSeek V3, Mistral Large 2, Phi-4, Gemma 3, Jan, Ollama tools, OpenHands, Aider, etc.
    ...openSourceLocal2026, // 50 open-source / local AI models & tools (2026)
    ...openSourceLocal2026B, // +50 more open-source / local AI models & tools (2026 Batch B)
    ...openSourceLocal2026C, // +50 more unique open-source / local AI models & tools (2026 Batch C)
    ...openSourceLocal2026D, // +50 more unique open-source / local AI models & tools (2026 Batch D)
    ...openSourceLocal2026E, // +50 more unique open-source / local AI models & tools (2026 Batch E)
    ...openSourceLocal2026F, // +55 more unique open-source / local AI models & tools (2026 Batch F)
    ...openSourceLocal2026G, // +55 more unique open-source / local AI models & tools (2026 Batch G)
    ...openSourceLocal2026H, // +55 more unique open-source / local AI models & tools (2026 Batch H)
    ...freeAwesomeBatch2026I, // +9 free/OSS: AI Horde, AudioPen, Inkscape, Kroki, Mage AI, Marp, Mermaid Live, Presenton, Whimsical AI (2026 Batch I)
    ...freeAwesomeBatch2026II, // +8 free/OSS: Anytype, Novita AI, Cap, Screen Studio, Yoodli, Poised, Bluedot, FigJam AI (2026 Batch II)
    ...freeAwesomeBatch2026III, // +12 free AI: Google AI Studio, Chatbot Arena, Google Illuminate, Google Learn About, Google ImageFX, Google VideoFX, Microsoft Designer, Meta Imagine, Presearch, Marginalia Search, SearchGPT, AppFlowy AI (2026 Batch III)
    ...popularWorldToolsBatch2026IV, // +15 popular world tools: Plaud Note, Limitless AI, Recall.ai, Kits AI, Mem AI, Logseq, Capacities, Pollo AI, RenderNet, Flora, Wegic, PlayHT, Rephrase.ai, Whisper by OpenAI, SoundHound AI (2026 Batch IV)
    ...popularWorldToolsBatch2026V, // +16 completing the 60-tool arc: Ninja AI, Cubby, Kimi/Moonshot, Rows AI, Bricks AI, Formula Bot, Jenni AI, Talkie AI, Kittl, Playground v3, Piggy Magic, Tripo3D, Wonder Studio, Rokoko Vision, Trade Ideas, TrendSpider (2026 Batch V)
    ...openFreeAgentsBatch2026VI, // +25 verified-unique free/open-source AI agents & tools: Chat Nio, Fabric AI, Nari Dia, RA.Aid, Rill Data, Simple AI, Storm AI, Turboseek, smolagents, SWE-Kit, Cofounder, H2O.ai, Reflex, SearxNG, Storia Sage, Whisper WebGPU, Wren AI, PyGWalker, Data Formulator, Playwright MCP, Grok-1, PocketFlow, OpenELM, Open-Sora, Nomic Embed (2026 Batch VI)
    ...verifiedMissingBatch2026VII, // +25 verified real free/free-tier tools: Airbyte, Fivetran, Metabase, Helicone, Portkey, Braintrust, Keywords AI, Vercel AI Gateway, Freshchat, Gorgias, Help Scout, Pipedrive AI, Slidesgo, Presentations.AI, Formularizer, Chatwoot, Google Vertex AI, AI21 Studio, Aleph Alpha, Databricks Mosaic AI, TrueFoundry, Typesense, Rev, PromptPerfect, Mode Analytics (2026 Batch VII)
    ...mixedAgentsBatch2026, // Roo Code, Vapi, Retell, Lutra, MultiOn, STORM, Decagon, Sierra, Letta, Mem, Motion, Shortwave, Clay, 11x, etc.
    ...openSourceAgentsBatch2026Part3, // Dolphin 3, Mixtral 8x22B, Smaug, Zephyr, OpenChat, SOLAR, StarCoder2, DeepSeek Coder V2, Bielik, SmolLM2, MiniCPM-V, InternLM3, Molmo, Granite, Arcee, NeuralChat, Swarms, ShellGPT, Twinny, AIChat, Griptape, LocalGPT, Oobabooga, SGLang, TensorRT-LLM, Unsloth, Axolotl, Gorilla, Xinference, FastChat, ModelScope Agent, Qwen Agent, AutoGroq, LightLLM, KTransformers, PowerInfer, NextChat, Refuel, Hyperbee, MetaChain, ChatHub, Llama Stack, LangServe, NPCsh, KitOps, AIConfig, LlamaCoder, LitServe, Repomix
    ...openSourceAgentsBatch2026Part4, // 50 fresh open-source tools: UFO Agent, WebVoyager, llama.cpp, ExLlamaV2, MLC LLM, WasmEdge, KoboldCpp, LMDeploy, Distilabel, TRL, PEFT, LM Eval Harness, OpenCompass, Inspect AI, NeMo Guardrails, Avante.nvim, txtai, NLUX, LocalRecall, Jina Reader, SearXNG AI, Witsy, Page Assist, GPTeam, Semantic Router, aisuite, ChainForge, HumanLayer, Marker PDF, Surya OCR, olmOCR, Nougat OCR, RapidOCR, whisper.cpp, Faster Whisper, Distil-Whisper, WhisperX, OpenVoice, F5-TTS, Parler-TTS, Coqui XTTS, StyleTTS2, MeloTTS, Piper TTS, ESPnet, SpeechBrain, ToolLLM, Granite Code, Mathstral, Chronos
    ...deepAgentToolsBatch2026,
    ...freeOpenSourceBatch2026F, // 50 free/open-source humanity tools: Swarm, KaibanJS, LlamaDeploy, agent benchmarks, local inference, MLOps
    ...freeOpenSourceBatch2026G, // 40 more free/OSS humanity tools: Doccano, Label Studio, Danswer, MinerU, InstructLab, Torchtune, Mergekit, Metaflow, HF TGI, Arize Phoenix, Chidori, LLMFlows, Modelfusion, NeMo Curator, CVAT, GROBID, Rig, Rivet, SkyPilot, Ludwig, H2O LLM Studio, CTranslate2, Petals, BigAGI, Serge, OpenBB, Chainlit, Gradio, Streamlit, Automatic1111, SD.Next, Kohya SS, Draw Things, HF Diffusers, TensorZero, nanoGPT, Apple MLX, Exo, Candle, AutoChain
    ...freeOpenSourceBatch2026H, // 40 more free/OSS: RAGAS, Evidently, Garak, Presidio, tinygrad, Burn, torchchat, LlamaSharp, Unstructured, Marker, Kernel Memory, Prompt Flow, OpenLIT, HF TEI, Rebuff, Vigil, Llama Guard, PurpleLlama, GPTCache, Vanna, PandasAI, Jupyter AI, Shell GPT, LLaVA, TabbyML, Code Llama, SuperDuperDB, Txtai, USearch, Skorch, fast.ai, micrograd, llm.c, OpenAssistant, Open-Sora, AnimateAnyone, AudioLDM, Bark, WebLLM, Distilabel
    ...topProductivityWriting, // Notion AI, Grammarly, Jasper, etc.
    ...additionalPopularTools2025, // Kling AI, RunwayML Gen-3, etc.
    
    // ========================================
    // TIER 2: POWERFUL PROFESSIONAL TOOLS
    // ========================================
    ...developerProductivityAI, // GitHub Copilot, Cursor, Codeium, etc.
    ...aiDevelopmentTools,
    ...aiChatPlatforms,
    ...advancedChatPlatforms,
    ...aiAgents,
    ...aiAssistants,
    
    // ========================================
    // TIER 3: CONTENT CREATION & DESIGN
    // ========================================
    ...coreImageGenerators,
    ...imageGenerationPlatforms,
    ...videoGenerationTools,
    ...videoTools,
    ...advancedVideoTools,
    ...aiVideoEditingTools,
    ...videoEditingAndContentTools,
    ...videoAndContentTools,
    ...videoBusinessTools,
    ...videoMarketingTools,
    ...additionalVideoTools2025,
    ...additionalVideoImageGenerators,
    
    ...audioMusicTools,
    ...audioAndVoiceTools,
    ...coreAudioVoiceTools,
    ...aiVoiceSpeechTools,
    ...aiMusicProductionTools,
    ...additionalAudioTools2025,
    ...businessProductivityAudio,
    ...professionalGPTsAudio,
    
    ...imageEditingTools,
    ...specializedImageTools,
    ...backgroundAndObjectTools,
    ...aiImageGeneration,
    ...ai3DModelingTools,
    ...aiPhotographyTools,
    ...aiAnimationTools,
    
    ...writingAndContent,
    ...writingAndContentEnhancement,
    ...contentCreationTools,
    ...contentCreationAndWritingTools,
    ...aiSeoContentTools,
    ...contentDetectionTools,
    
    ...designAndGraphicsTools,
    ...imageAndDesign,
    ...creativeDesignTools,
    ...designAssistantTools,
    ...aiArtTools,
    
    // ========================================
    // TIER 4: BUSINESS & PRODUCTIVITY
    // ========================================
    ...businessAndProductivity,
    ...businessTools,
    ...businessAndTeamTools,
    ...businessSalesTools,
    ...aiProductivityTools,
    ...aiProductivitySuite,
    ...searchAndProductivityTools,
    ...aiProjectManagementTools,
    
    ...ecommerceAndMarketingTools,
    ...marketingTools,
    ...newMarketingTools2025,
    ...aiSocialMediaTools,
    ...socialMediaTools,
    
    ...aiSalesCrmTools,
    ...aiCustomerSupportTools,
    ...aiDataAnalyticsTools,
    ...dataAnalyticsTools,
    ...financialAndTradingTools,
    ...aiFinanceTools,
    ...aiAccountingFinanceTools,
    ...aiCryptoTradingTools,
    
    ...resumeAndCareerTools,
    ...aiHrRecruitmentTools,
    ...aiRecruitmentHRTools,
    
    ...meetingAndTranscriptionTools,
    ...aiTranscriptionToolsPro,
    ...aiMeetingAssistants,
    ...aiNoteTakingTools,
    
    // ========================================
    // TIER 5: RESEARCH & EDUCATION
    // ========================================
    ...aiResearchTools,
    ...aiResearchAcademicTools,
    ...documentAndResearchTools,
    ...researchAndLearning,
    
    ...aiEducationTools,
    ...aiEducationalTools,
    ...educationAndLearning,
    ...learningAndEducation,
    ...learningPlatforms,
    
    ...aiPresentationTools,
    ...aiTranslationTools,
    
    // ========================================
    // TIER 6: SPECIALIZED PROFESSIONAL SERVICES
    // ========================================
    ...professionalServices,
    ...legalProfessionals,
    ...aiLegalTools,
    ...aiLegalTechTools,
    
    ...healthcareProfessionals,
    ...aiHealthcareTools,
    ...aiHealthcareDiagnosisTools,
    ...aiMentalHealthWellnessTools,
    ...healthAndWellness,
    
    ...aiRealEstateTools,
    ...aiInsuranceTools,
    ...aiConstructionTools,
    
    // ========================================
    // TIER 7: DEVELOPMENT & TECHNICAL
    // ========================================
    ...developerAndCodingTools,
    ...developerTools,
    ...webDevelopmentTools,
    ...newWebsiteBuilders2025,
    ...platformsAndDevelopment,
    ...aiToolsAndDevelopment,
    ...aiToolsAndUtilities,
    
    ...localAISolutions,
    ...aiInferencePlatforms,
    ...openSourceAIModels,
    ...aiCybersecurityTools,
    ...aiSecurityTools,
    ...technicalAndUtilityTools,
    ...utilitiesTools,
    
    ...automationAndWorkflowTools,
    ...cloudServices,
    ...emailManagementTools,
    ...collaborationTools,
    ...communicationTools,
    
    // ========================================
    // TIER 8: CREATIVE & ENTERTAINMENT
    // ========================================
    ...creativeSuites,
    ...creativePlatforms,
    ...creativeAndEntertainment,
    ...entertainmentMediaTools,
    ...entertainmentTools,
    ...gameDesignAndDevelopment,
    ...aiGamingTools,
    ...aiPodcastTools,
    
    // ========================================
    // TIER 9: AI WEB TOOLS CUSTOM GPTs (Your Creations)
    // ========================================
    ...priorityFeaturedGPTs,
    ...secondPriorityFeaturedGPTs,
    ...thirdPriorityFeaturedGPTs,
    ...fourthPriorityFeaturedGPTs,
    ...aiWebToolsGPTs,
    ...advancedSpecialtyGPTs,
    ...additionalSpecializedGPTs,
    ...finalSpecializedGPTs,
    ...newSpecializedGPTs,
    
    // Categorized AI Web Tools GPTs
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
    ...timeAndHistoryGPTs,
    ...technologyInnovationGPTs,
    
    // ========================================
    // TIER 10: NICHE & SPECIALIZED TOOLS
    // ========================================
    ...aiFashionStyleTools,
    ...aiFitnessNutritionTools,
    ...aiTravelTourismTools,
    ...aiPetCareTools,
    ...aiDatingRelationshipTools,
    ...aiInteriorDesignTools,
    ...aiSportsAnalyticsTools,
    
    ...aiAgricultureTools,
    ...aiAutomotiveTools,
    ...aiLogisticsSupplyChainTools,
    ...aiShippingLogisticsTools,
    
    ...aiGptStorePlatforms,
    ...aiBotMakingPlatforms,
    ...aiVoiceAssistantTools,
    ...aiEcommerceTools,
    
    ...newSpecializedTools2025,
    ...specializedAITools,
    ...specializedAndNiche,
    ...specializedTools,
    ...specializedNicheTools,
    ...specializedNicheToolsGPTs,
    
    // ========================================
    // TIER 11: UNIQUE & EXPERIMENTAL (Funky/Unknown)
    // ========================================
    ...mindBlowingAITools,
    ...comprehensiveAITools,
    ...aiGenerativeTools,
    ...creativeExperimentalTools2025,
    
    ...spiritualityTools,
    ...spiritualAndPhilosophyGPTs,
    ...mysteriousAndUnusualGPTs,
    
    ...timeAndHistory,
    ...historicalAndCultural,
    
    ...emergencyServices,
    ...creativeServices,
    ...advancedAITools,
    ...specializedPolicyTools,
    ...artAndCollectibles,
    
    ...threeDAndVisualizationTools,
    ...newsAndInformationTools,
    ...roboticsCompanies,
    ...aiGadgetsDevicesTools,
    ...aiGadgetsDevicesBatch2026,
    ...aiGadgetsBatch2026Trust,
    ...oneMoreShotAi,
    ...trendingAiBatch2026Apr,
    ...vidAi,
    ...freeAwesomeBatch2026,
    ...freeAwesomeBatch2026B,
    ...freeAwesomeBatch2026C,
    ...freeAwesomeBatch2026D,
    ...freeAwesomeBatch2026E,
    ...freeAwesomeBatch2026F,
    ...freeAwesomeBatch2026G,
    ...freeAwesomeBatch2026H,
    ...newAgentsAndMedicalBatch2026E,
    ...offlineDownloadableBatch2026,
    ...aiHardware,
    
    // NEW 2025: Additional tools
    ...newVideoMultimediaTools2025,
    
    // Additional collections
    ...additionalRealAITools,
    ...moreRealAITools,
    
    // WEB3 & BLOCKCHAIN TOOLS (Niche)
    ...web3DomainsTools,
    
    // MISSING TOOL CATEGORIES (non-duplicates only)
    ...aiImageGeneration,
    ...businessProductivityAudio,
    ...coreAudioVoiceTools,
    ...videoBusinessTools,
    ...videoEditingTools,
    ...videoGenerationTools,
    ...videoMarketingTools,
    ...professionalGPTsAudio,
    
    // ADDITIONAL POPULAR TOOLS 2025
    ...additionalPopularTools2025,
    
    // AI HARDWARE
    ...aiHardware,
    
    // MAJOR AI PLATFORMS - The essentials everyone expects
    ...majorAIPlatforms,
    ...topImageGenerators,
    ...topMusicVideoTools,
    ...aiMusicVideoGeneratorTools,
    ...openSourceModelsBatch2026,
    ...mixedAgentsBatch2026,
    ...openSourceAgentsBatch2026Part3,
    ...openSourceAgentsBatch2026Part4,
    ...deepAgentToolsBatch2026,
    ...topProductivityWriting,
    ...developerProductivityAI,
    ...aiResearchAcademicTools,
    ...aiPresentationTools,
    ...aiSeoContentTools,
    ...aiCustomerSupportTools,
    ...aiDataAnalyticsTools,
    ...aiVideoEditingTools,
    ...aiHrRecruitmentTools,
    ...aiTranslationTools,
    ...aiProjectManagementTools,
    ...aiEducationalTools,
    ...aiCybersecurityTools,
    ...aiSalesCrmTools,
    ...aiLegalTechTools,
    ...aiHealthcareDiagnosisTools,
    ...aiRealEstateTools,
    ...aiAccountingFinanceTools,
    ...aiFashionStyleTools,
    ...aiLogisticsSupplyChainTools,
    ...aiMentalHealthWellnessTools,
    ...aiEcommerceTools,
    ...aiVoiceSpeechTools,
    ...aiGamingTools,
    ...aiGptStorePlatforms,
    ...aiBotMakingPlatforms,
    ...aiDatingRelationshipTools,
    ...aiFitnessNutritionTools,
    ...aiInteriorDesignTools,
    ...aiCryptoTradingTools,
    ...aiSocialMediaTools,
    ...aiMusicProductionTools,
    ...aiTravelTourismTools,
    ...aiPetCareTools,
    ...aiAgricultureTools,
    ...aiConstructionTools,
    ...aiShippingLogisticsTools,
    ...aiInsuranceTools,
    ...aiAutomotiveTools,
    ...additionalVideoImageGenerators,
    ...ai3DModelingTools,
    ...aiPhotographyTools,
    ...aiRecruitmentHRTools,
    ...aiSportsAnalyticsTools,
    ...aiVoiceAssistantTools,
    ...aiAnimationTools,
    ...aiPodcastTools,
    ...aiTranscriptionToolsPro,
    ...aiMeetingAssistants,
    ...aiNoteTakingTools,
    
    // NEW 2025: Website Builders and Specialized Tools
    ...newWebsiteBuilders2025,
    ...newSpecializedTools2025
  ];
};
