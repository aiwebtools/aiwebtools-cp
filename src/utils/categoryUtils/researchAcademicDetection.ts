
import { Tool } from "@/types/tools";

// Research & Academic subtypes for comprehensive categorization
export const researchAcademicSubtypes = [
  "Research Discovery",
  "Literature Review",
  "Citation Management",
  "Academic Writing",
  "Paper Summarization",
  "Data Analysis",
  "Scientific Research",
  "Pharmaceutical Research",
  "Genomics Research",
  "Academic Search",
  "Learning Platform",
  "STEM Education",
  "Language Learning",
  "Fact Checking",
  "Evidence Analysis"
] as const;

export type ResearchAcademicSubtype = typeof researchAcademicSubtypes[number];

// Detect Research & Academic subtype from tool properties
export const detectResearchAcademicSubtype = (tool: Tool): ResearchAcademicSubtype | null => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  const category = tool.category?.toLowerCase() || "";
  
  // Research Discovery detection
  if (
    title.includes("research rabbit") ||
    title.includes("connected papers") ||
    description.includes("paper discovery") ||
    description.includes("research discovery") ||
    description.includes("literature mapping") ||
    tags.some(t => t.includes("research discovery") || t.includes("paper connections"))
  ) {
    return "Research Discovery";
  }
  
  // Literature Review detection
  if (
    description.includes("literature review") ||
    description.includes("systematic review") ||
    description.includes("paper analysis") ||
    tags.some(t => t.includes("literature review") || t.includes("systematic review"))
  ) {
    return "Literature Review";
  }
  
  // Citation Management detection
  if (
    title.includes("zotero") ||
    title.includes("citation") ||
    description.includes("citation") ||
    description.includes("reference management") ||
    tags.some(t => t.includes("citation") || t.includes("reference management"))
  ) {
    return "Citation Management";
  }
  
  // Academic Writing detection
  if (
    description.includes("academic writing") ||
    description.includes("scholarly writing") ||
    description.includes("research paper writing") ||
    tags.some(t => t.includes("academic writing") || t.includes("scholarly"))
  ) {
    return "Academic Writing";
  }
  
  // Paper Summarization detection
  if (
    title.includes("scholarcy") ||
    description.includes("paper summar") ||
    description.includes("summariz") && description.includes("paper") ||
    description.includes("extract key") ||
    tags.some(t => t.includes("summarization") || t.includes("paper summary"))
  ) {
    return "Paper Summarization";
  }
  
  // Data Analysis detection
  if (
    title.includes("data") && (title.includes("analysis") || title.includes("research")) ||
    title.includes("probability") ||
    title.includes("illuminous") ||
    description.includes("data analysis") ||
    description.includes("statistical") ||
    description.includes("predictive modeling") ||
    tags.some(t => t.includes("data analysis") || t.includes("statistical"))
  ) {
    return "Data Analysis";
  }
  
  // Scientific Research detection
  if (
    title.includes("stellaris") ||
    title.includes("tesla") ||
    title.includes("einstein") ||
    title.includes("alchemist") ||
    title.includes("astrodynamics") ||
    description.includes("scientific research") ||
    description.includes("scientific discover") ||
    description.includes("space exploration") ||
    description.includes("physics") ||
    tags.some(t => t.includes("scientific") || t.includes("physics") || t.includes("astronomy"))
  ) {
    return "Scientific Research";
  }
  
  // Pharmaceutical Research detection
  if (
    title.includes("pharma") ||
    title.includes("pharmaceutical") ||
    description.includes("pharmaceutical") ||
    description.includes("drug development") ||
    description.includes("clinical trial") ||
    tags.some(t => t.includes("pharmaceutical") || t.includes("drug development"))
  ) {
    return "Pharmaceutical Research";
  }
  
  // Genomics Research detection
  if (
    title.includes("genome") ||
    title.includes("genetic") ||
    description.includes("genomic") ||
    description.includes("genetic analysis") ||
    description.includes("dna") ||
    tags.some(t => t.includes("genomics") || t.includes("genetics") || t.includes("dna"))
  ) {
    return "Genomics Research";
  }
  
  // Academic Search detection
  if (
    title.includes("consensus") ||
    title.includes("elicit") ||
    title.includes("semantic scholar") ||
    title.includes("scite") ||
    description.includes("academic search") ||
    description.includes("research papers") ||
    description.includes("peer-reviewed") ||
    tags.some(t => t.includes("academic search") || t.includes("research papers"))
  ) {
    return "Academic Search";
  }
  
  // Learning Platform detection
  if (
    title.includes("coursera") ||
    title.includes("duolingo") ||
    title.includes("brilliant") ||
    title.includes("freecodecamp") ||
    category.includes("learning platform") ||
    description.includes("online courses") ||
    description.includes("learn to code") ||
    tags.some(t => t.includes("learning platform") || t.includes("online courses"))
  ) {
    return "Learning Platform";
  }
  
  // STEM Education detection
  if (
    title.includes("engineering") ||
    title.includes("algebraic") ||
    description.includes("stem") ||
    description.includes("math") && description.includes("science") ||
    description.includes("engineering") ||
    tags.some(t => t.includes("stem") || t.includes("engineering") || t.includes("mathematics"))
  ) {
    return "STEM Education";
  }
  
  // Language Learning detection
  if (
    title.includes("duolingo") ||
    description.includes("language learning") ||
    description.includes("learn languages") ||
    tags.some(t => t.includes("language learning") || t.includes("multiple languages"))
  ) {
    return "Language Learning";
  }
  
  // Fact Checking detection
  if (
    title.includes("fact check") ||
    description.includes("fact check") ||
    description.includes("misinformation") ||
    description.includes("truth verification") ||
    tags.some(t => t.includes("fact check") || t.includes("truth verification"))
  ) {
    return "Fact Checking";
  }
  
  // Evidence Analysis detection
  if (
    description.includes("evidence-based") ||
    description.includes("evidence analysis") ||
    description.includes("source validation") ||
    tags.some(t => t.includes("evidence") || t.includes("source validation"))
  ) {
    return "Evidence Analysis";
  }
  
  return null;
};

// Check if tool is research/academic related
export const isResearchAcademicTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || "";
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  
  const researchCategories = [
    "research", "academic", "learning", "education", "science", "pharmaceutical"
  ];
  
  const researchKeywords = [
    "research", "academic", "paper", "citation", "literature", "scholarly",
    "scientific", "study", "analysis", "data", "learning", "education",
    "genome", "pharma", "university", "course"
  ];
  
  return researchCategories.some(cat => category.includes(cat)) ||
    researchKeywords.some(kw => title.includes(kw) || description.includes(kw)) ||
    tags.some(t => researchKeywords.some(kw => t.includes(kw)));
};

// Get all research/academic tools with their subtypes
export const getResearchAcademicToolsWithSubtypes = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isResearchAcademicTool(tool) || detectResearchAcademicSubtype(tool) !== null);
};
