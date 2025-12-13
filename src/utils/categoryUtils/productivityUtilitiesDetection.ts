
import { Tool } from "@/types/tools";

// Productivity & Utilities subtypes for comprehensive categorization
export const productivityUtilitiesSubtypes = [
  "Task Management",
  "Note Taking",
  "Calendar & Scheduling",
  "File Management",
  "Automation Platform",
  "All-in-One Suite",
  "Email Management",
  "Workflow Optimization",
  "Translation & Language",
  "Data Conversion",
  "Code Assistant",
  "Progress Tracking",
  "Checklist & Planning",
  "Team Collaboration",
  "Multi-Tool Platform"
] as const;

export type ProductivityUtilitiesSubtype = typeof productivityUtilitiesSubtypes[number];

// Detect Productivity & Utilities subtype from tool properties
export const detectProductivityUtilitiesSubtype = (tool: Tool): ProductivityUtilitiesSubtype | null => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  const category = tool.category?.toLowerCase() || "";
  
  // All-in-One Suite detection
  if (
    title.includes("suite") ||
    title.includes("godmode") ||
    title.includes("multitasker") ||
    description.includes("all-in-one") ||
    description.includes("all in one") ||
    description.includes("comprehensive suite") ||
    description.includes("multi-tool") ||
    tags.some(t => t.includes("all-in-one") || t.includes("suite") || t.includes("multitasking"))
  ) {
    return "All-in-One Suite";
  }
  
  // Task Management detection
  if (
    description.includes("task management") ||
    description.includes("project management") ||
    description.includes("task tracking") ||
    tags.some(t => t.includes("task management") || t.includes("project management") || t.includes("to-do"))
  ) {
    return "Task Management";
  }
  
  // Note Taking detection
  if (
    title.includes("note") ||
    description.includes("note taking") ||
    description.includes("notes") && description.includes("organize") ||
    tags.some(t => t.includes("note") || t.includes("notes"))
  ) {
    return "Note Taking";
  }
  
  // Calendar & Scheduling detection
  if (
    title.includes("calendar") ||
    title.includes("schedule") ||
    description.includes("calendar") ||
    description.includes("scheduling") ||
    description.includes("appointment") ||
    tags.some(t => t.includes("calendar") || t.includes("scheduling") || t.includes("appointments"))
  ) {
    return "Calendar & Scheduling";
  }
  
  // File Management detection
  if (
    description.includes("file management") ||
    description.includes("document management") ||
    description.includes("file organization") ||
    tags.some(t => t.includes("file management") || t.includes("document management"))
  ) {
    return "File Management";
  }
  
  // Automation Platform detection
  if (
    title.includes("zapier") ||
    title.includes("make") ||
    title.includes("n8n") ||
    title.includes("ifttt") ||
    title.includes("automation") ||
    description.includes("workflow automation") ||
    description.includes("automation platform") ||
    description.includes("automate") && description.includes("workflow") ||
    tags.some(t => t.includes("automation agent") || t.includes("workflow automation"))
  ) {
    return "Automation Platform";
  }
  
  // Email Management detection
  if (
    title.includes("email") ||
    title.includes("mail") ||
    description.includes("email") && (description.includes("manage") || description.includes("draft")) ||
    description.includes("inbox") ||
    tags.some(t => t.includes("email") || t.includes("inbox"))
  ) {
    return "Email Management";
  }
  
  // Workflow Optimization detection
  if (
    title.includes("workflow") ||
    description.includes("workflow optim") ||
    description.includes("streamline") && description.includes("operation") ||
    description.includes("process optimization") ||
    tags.some(t => t.includes("workflow") || t.includes("process optimization"))
  ) {
    return "Workflow Optimization";
  }
  
  // Translation & Language detection
  if (
    title.includes("translat") ||
    title.includes("language") ||
    description.includes("translation") ||
    description.includes("multilingual") ||
    description.includes("language barrier") ||
    tags.some(t => t.includes("translation") || t.includes("multilingual") || t.includes("language"))
  ) {
    return "Translation & Language";
  }
  
  // Data Conversion detection
  if (
    title.includes("convert") ||
    title.includes("binary") ||
    description.includes("convert") && description.includes("data") ||
    description.includes("data conversion") ||
    description.includes("format conversion") ||
    tags.some(t => t.includes("conversion") || t.includes("converter") || t.includes("encoding"))
  ) {
    return "Data Conversion";
  }
  
  // Code Assistant detection
  if (
    title.includes("code") ||
    title.includes("copilot") ||
    title.includes("cursor") ||
    description.includes("code completion") ||
    description.includes("coding assistant") ||
    description.includes("code suggestion") ||
    tags.some(t => t.includes("code assistant") || t.includes("code completion") || t.includes("coding"))
  ) {
    return "Code Assistant";
  }
  
  // Progress Tracking detection
  if (
    title.includes("progress") ||
    title.includes("tracker") ||
    description.includes("track progress") ||
    description.includes("goal tracking") ||
    description.includes("progress monitor") ||
    tags.some(t => t.includes("progress tracking") || t.includes("goal tracking"))
  ) {
    return "Progress Tracking";
  }
  
  // Checklist & Planning detection
  if (
    title.includes("checklist") ||
    title.includes("planner") ||
    description.includes("checklist") ||
    description.includes("planning tool") ||
    description.includes("task list") ||
    tags.some(t => t.includes("checklist") || t.includes("planning") || t.includes("task list"))
  ) {
    return "Checklist & Planning";
  }
  
  // Team Collaboration detection
  if (
    description.includes("team collaboration") ||
    description.includes("team management") ||
    description.includes("collaborate") && description.includes("team") ||
    tags.some(t => t.includes("team collaboration") || t.includes("collaboration") || t.includes("team management"))
  ) {
    return "Team Collaboration";
  }
  
  // Multi-Tool Platform detection
  if (
    description.includes("comprehensive tool") ||
    description.includes("multiple tool") ||
    description.includes("platform integrations") ||
    tags.some(t => t.includes("multi-tool") || t.includes("platform integrations"))
  ) {
    return "Multi-Tool Platform";
  }
  
  return null;
};

// Check if tool is productivity/utilities related
export const isProductivityUtilitiesTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || "";
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  
  const productivityCategories = [
    "productivity", "utility", "utilities", "automation", "workflow", "business tools",
    "all-in-one", "multi-tool", "platform", "suite"
  ];
  
  const productivityKeywords = [
    "productivity", "automation", "workflow", "task", "organize", "schedule",
    "calendar", "email", "checklist", "collaborate", "efficiency", "optimize",
    "note", "document", "file", "translate", "convert", "manage", "track",
    "plan", "time", "reminder", "to-do", "todo", "goal", "habit", "focus"
  ];
  
  return productivityCategories.some(cat => category.includes(cat)) ||
    productivityKeywords.some(kw => title.includes(kw) || description.includes(kw)) ||
    tags.some(t => productivityKeywords.some(kw => t.includes(kw)));
};

// Get all productivity/utilities tools with their subtypes
export const getProductivityUtilitiesToolsWithSubtypes = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isProductivityUtilitiesTool(tool) || detectProductivityUtilitiesSubtype(tool) !== null);
};
