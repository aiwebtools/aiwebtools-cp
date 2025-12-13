
import { Tool } from "@/types/tools";

// Import all detection utilities with correct export names
import { AGENT_SUBTYPES, getAgentSubtype, isAgentTool } from "./agentDetection";
import { AUDIO_MUSIC_SUBTYPES, getAudioMusicSubtype, isAudioMusicTool } from "./audioMusicDetection";
import { businessProductivitySubtypes, detectBusinessProductivitySubtypes, isBusinessProductivityTool } from "./businessProductivityDetection";
import { CODING_DEVELOPMENT_SUBTYPES, getCodingDevelopmentSubtype, isCodingDevelopmentTool } from "./codingDevelopmentDetection";
import { DATA_ANALYTICS_SUBTYPES, detectDataAnalyticsSubtypes, isDataAnalyticsTool } from "./dataAnalyticsDetection";
import { educationLearningSubtypes, educationLearningKeywords } from "./educationLearningDetection";
import { healthWellnessSubtypes, healthWellnessKeywords } from "./healthWellnessDetection";
import { IMAGE_DESIGN_SUBTYPES, getImageDesignSubtype, isImageDesignTool } from "./imageDesignDetection";
import { MARKETING_SALES_SUBTYPES, detectMarketingSalesSubtypes, isMarketingSalesTool } from "./marketingSalesDetection";
import { productivityUtilitiesSubtypes, detectProductivityUtilitiesSubtype, isProductivityUtilitiesTool } from "./productivityUtilitiesDetection";
import { researchAcademicSubtypes, detectResearchAcademicSubtype, isResearchAcademicTool } from "./researchAcademicDetection";
import { VIDEO_SUBTYPES, detectVideoSubtypes, isVideoMultimediaTool } from "./videoMultimediaDetection";
import { writingContentSubtypes, detectWritingContentSubtypes, isWritingContentTool } from "./writingContentDetection";
import { SECURITY_PRIVACY_SUBTYPES, detectSecurityPrivacySubtype, isSecurityPrivacyTool } from "./securityPrivacyDetection";
import { GAMING_ENTERTAINMENT_SUBTYPES, detectGamingEntertainmentSubtype, isGamingEntertainmentTool } from "./gamingEntertainmentDetection";

export interface PhaseTestResult {
  phase: number;
  name: string;
  subtypesCount: number;
  toolsDetected: number;
  toolsWithSubtags: number;
  detectionRate: number;
  subtypes: readonly string[];
  status: 'pass' | 'warning' | 'fail';
}

export interface CategoryPhaseTestReport {
  totalPhases: number;
  passedPhases: number;
  warningPhases: number;
  failedPhases: number;
  totalToolsAnalyzed: number;
  totalToolsWithSubtags: number;
  overallCoverage: number;
  phases: PhaseTestResult[];
  timestamp: string;
}

// Helper to check if detection returns a result (handles both single value and array returns)
const hasSubtypeDetection = (detectFn: (tool: Tool) => any, tool: Tool): boolean => {
  const result = detectFn(tool);
  if (result === null || result === undefined) return false;
  if (Array.isArray(result)) return result.length > 0;
  return true;
};

// Simple detection wrappers for categories that don't have explicit detect functions
const detectEducationLearning = (tool: Tool): string | null => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  for (const subtype of educationLearningSubtypes) {
    const keywords = educationLearningKeywords[subtype];
    if (keywords.some(kw => searchText.includes(kw.toLowerCase()))) {
      return subtype;
    }
  }
  return null;
};

const detectHealthWellness = (tool: Tool): string | null => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  for (const subtype of healthWellnessSubtypes) {
    const keywords = healthWellnessKeywords[subtype];
    if (keywords.some(kw => searchText.includes(kw.toLowerCase()))) {
      return subtype;
    }
  }
  return null;
};

// Check if a tool belongs to education category
const isEducationLearningTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || "";
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  
  const eduCategories = ["education", "learning", "academic", "course", "tutoring"];
  const eduKeywords = ["learn", "course", "education", "training", "tutoring", "teaching", "school", "university"];
  
  return eduCategories.some(cat => category.includes(cat)) ||
    eduKeywords.some(kw => title.includes(kw) || description.includes(kw));
};

// Check if a tool belongs to health category
const isHealthWellnessTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || "";
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  
  const healthCategories = ["health", "wellness", "medical", "fitness"];
  const healthKeywords = ["health", "wellness", "medical", "doctor", "therapy", "fitness", "nutrition", "mental"];
  
  return healthCategories.some(cat => category.includes(cat)) ||
    healthKeywords.some(kw => title.includes(kw) || description.includes(kw));
};

const CATEGORY_PHASES = [
  {
    phase: 1,
    name: "AI Agents",
    subtypes: Object.values(AGENT_SUBTYPES),
    detect: getAgentSubtype,
    isCategory: isAgentTool
  },
  {
    phase: 2,
    name: "Image & Design",
    subtypes: Object.values(IMAGE_DESIGN_SUBTYPES),
    detect: getImageDesignSubtype,
    isCategory: isImageDesignTool
  },
  {
    phase: 3,
    name: "Data & Analytics",
    subtypes: [...DATA_ANALYTICS_SUBTYPES],
    detect: detectDataAnalyticsSubtypes,
    isCategory: isDataAnalyticsTool
  },
  {
    phase: 4,
    name: "Video & Multimedia",
    subtypes: [...VIDEO_SUBTYPES],
    detect: detectVideoSubtypes,
    isCategory: isVideoMultimediaTool
  },
  {
    phase: 5,
    name: "Education & Learning",
    subtypes: [...educationLearningSubtypes],
    detect: detectEducationLearning,
    isCategory: isEducationLearningTool
  },
  {
    phase: 6,
    name: "Health & Wellness",
    subtypes: [...healthWellnessSubtypes],
    detect: detectHealthWellness,
    isCategory: isHealthWellnessTool
  },
  {
    phase: 7,
    name: "Writing & Content",
    subtypes: [...writingContentSubtypes],
    detect: detectWritingContentSubtypes,
    isCategory: isWritingContentTool
  },
  {
    phase: 8,
    name: "Business & Productivity",
    subtypes: [...businessProductivitySubtypes],
    detect: detectBusinessProductivitySubtypes,
    isCategory: isBusinessProductivityTool
  },
  {
    phase: 9,
    name: "Coding & Development",
    subtypes: Object.values(CODING_DEVELOPMENT_SUBTYPES),
    detect: getCodingDevelopmentSubtype,
    isCategory: isCodingDevelopmentTool
  },
  {
    phase: 10,
    name: "Audio & Music",
    subtypes: Object.values(AUDIO_MUSIC_SUBTYPES),
    detect: getAudioMusicSubtype,
    isCategory: isAudioMusicTool
  },
  {
    phase: 11,
    name: "Research & Academic",
    subtypes: [...researchAcademicSubtypes],
    detect: detectResearchAcademicSubtype,
    isCategory: isResearchAcademicTool
  },
  {
    phase: 12,
    name: "Productivity & Utilities",
    subtypes: [...productivityUtilitiesSubtypes],
    detect: detectProductivityUtilitiesSubtype,
    isCategory: isProductivityUtilitiesTool
  },
  {
    phase: 13,
    name: "Marketing & Sales",
    subtypes: Object.values(MARKETING_SALES_SUBTYPES),
    detect: detectMarketingSalesSubtypes,
    isCategory: isMarketingSalesTool
  },
  {
    phase: 14,
    name: "Security & Privacy",
    subtypes: [...SECURITY_PRIVACY_SUBTYPES],
    detect: detectSecurityPrivacySubtype,
    isCategory: isSecurityPrivacyTool
  },
  {
    phase: 15,
    name: "Gaming & Entertainment",
    subtypes: [...GAMING_ENTERTAINMENT_SUBTYPES],
    detect: detectGamingEntertainmentSubtype,
    isCategory: isGamingEntertainmentTool
  }
];

export function runCategoryPhaseTest(tools: Tool[]): CategoryPhaseTestReport {
  console.log("🧪 CATEGORY PHASE TEST - Starting comprehensive test of all 15 phases...");
  console.log(`📊 Total tools to analyze: ${tools.length}`);
  
  const phaseResults: PhaseTestResult[] = [];
  let totalToolsWithSubtags = 0;
  
  for (const phase of CATEGORY_PHASES) {
    const subtypeValues = phase.subtypes;
    const toolsInCategory = tools.filter(t => phase.isCategory(t));
    const toolsWithSubtag = toolsInCategory.filter(t => hasSubtypeDetection(phase.detect, t));
    
    const detectionRate = toolsInCategory.length > 0 
      ? (toolsWithSubtag.length / toolsInCategory.length) * 100 
      : 0;
    
    let status: 'pass' | 'warning' | 'fail';
    if (detectionRate >= 70) status = 'pass';
    else if (detectionRate >= 40) status = 'warning';
    else status = 'fail';
    
    totalToolsWithSubtags += toolsWithSubtag.length;
    
    const result: PhaseTestResult = {
      phase: phase.phase,
      name: phase.name,
      subtypesCount: subtypeValues.length,
      toolsDetected: toolsInCategory.length,
      toolsWithSubtags: toolsWithSubtag.length,
      detectionRate: Math.round(detectionRate * 10) / 10,
      subtypes: subtypeValues,
      status
    };
    
    phaseResults.push(result);
    
    const statusIcon = status === 'pass' ? '✅' : status === 'warning' ? '⚠️' : '❌';
    console.log(`${statusIcon} Phase ${phase.phase}: ${phase.name} - ${toolsInCategory.length} tools, ${toolsWithSubtag.length} with subtags (${result.detectionRate}%)`);
  }
  
  const passedPhases = phaseResults.filter(r => r.status === 'pass').length;
  const warningPhases = phaseResults.filter(r => r.status === 'warning').length;
  const failedPhases = phaseResults.filter(r => r.status === 'fail').length;
  
  const report: CategoryPhaseTestReport = {
    totalPhases: CATEGORY_PHASES.length,
    passedPhases,
    warningPhases,
    failedPhases,
    totalToolsAnalyzed: tools.length,
    totalToolsWithSubtags,
    overallCoverage: Math.round((totalToolsWithSubtags / tools.length) * 100 * 10) / 10,
    phases: phaseResults,
    timestamp: new Date().toISOString()
  };
  
  console.log("\n📋 CATEGORY PHASE TEST SUMMARY:");
  console.log(`   Total Phases: ${report.totalPhases}`);
  console.log(`   ✅ Passed: ${passedPhases}`);
  console.log(`   ⚠️ Warning: ${warningPhases}`);
  console.log(`   ❌ Failed: ${failedPhases}`);
  console.log(`   📊 Overall Coverage: ${report.overallCoverage}%`);
  console.log(`   🛠️ Tools with Subtags: ${totalToolsWithSubtags}/${tools.length}`);
  
  return report;
}

// Export for use in debugging
export { CATEGORY_PHASES };
