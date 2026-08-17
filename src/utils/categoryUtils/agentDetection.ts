
import { Tool } from "@/types/tools";

/**
 * Agent type subtags for categorization - 15+ agent types
 */
export const AGENT_SUBTYPES = {
  AUTOMATION: "Automation Agent",
  CODING: "Coding Agent",
  VIBE_CODING: "Vibe Coding Agent",
  VOICE: "Voice Agent",
  WEB_TASKS: "Web Tasks Agent",
  RESEARCH: "Research Agent",
  SUPPORT: "Support Agent",
  CHATBOT: "Chatbot Agent",
  CONVERSATIONAL: "Conversational Agent",
  MULTI_AGENT: "Multi-Agent Framework",
  DATA: "Data Agent",
  SALES: "Sales Agent",
  MARKETING: "Marketing Agent",
  SOCIAL_MEDIA: "Social Media Agent",
  PRODUCTIVITY: "Productivity Agent",
  EMAIL: "Email Agent",
  WRITING: "Writing Agent",
  SCHEDULING: "Scheduling Agent",
  HR: "HR Agent",
  MEETING: "Meeting Agent",
  CREATIVE: "Creative Agent",
  GAME: "Game Agent",
  CLOUD: "Cloud Agent",
  AUTONOMOUS: "Autonomous Agent"
} as const;

/**
 * Keywords that indicate automation agent behavior
 */
const AUTOMATION_KEYWORDS = [
  "zapier", "make.com", "integromat", "n8n", "ifttt", "power automate",
  "workflow automation", "automate tasks", "automated workflows", "workflow builder",
  "app integration", "process automation", "rpa", "robotic process automation",
  "task automation", "business automation", "no-code automation"
];

/**
 * Keywords that indicate coding agent behavior
 */
const CODING_KEYWORDS = [
  "coding agent", "code generation", "full-stack", "ai coder",
  "code completion", "autonomous coding", "software engineer", "devin",
  "cursor", "copilot", "bolt.new", "replit agent", "codeium",
  "tabnine", "windsurf", "codex", "pair programming", "ide agent",
  "autonomous development", "agentic coding"
];

/**
 * Keywords that indicate vibe coding agent behavior
 */
const VIBE_CODING_KEYWORDS = [
  "vibe coding", "vibe coder", "vibe coding agent", "lovable", "bolt.new",
  "base44", "launch.today", "rocket.new", "mgx.dev", "same.new", "rork",
  "app builder", "web builder", "no-code builder", "full-stack builder",
  "idea to app", "natural language coding", "conversational coding"
];

/**
 * Keywords that indicate voice agent behavior
 */
const VOICE_KEYWORDS = [
  "voice agent", "phone agent", "call center", "conversational ai",
  "voice assistant", "speech-to-speech", "elevenlabs", "voice ai",
  "telephony", "ivr", "interactive voice", "voice bot", "call handling",
  "voice cloning", "text-to-speech agent", "voice automation"
];

/**
 * Keywords that indicate web tasks agent behavior
 */
const WEB_TASKS_KEYWORDS = [
  "web agent", "browser automation", "web scraping", "computer use",
  "autonomous browsing", "web tasks", "browser control", "surf.new",
  "manus", "operator", "comet", "web navigation", "data extraction",
  "screen control", "desktop control", "autonomous web"
];

/**
 * Keywords that indicate research agent behavior
 */
const RESEARCH_KEYWORDS = [
  "research agent", "research assistant", "data analysis agent",
  "literature review", "academic research", "scientific analysis",
  "knowledge discovery", "information retrieval", "research ai",
  "perplexity", "consensus", "semantic scholar", "elicit"
];

/**
 * Keywords that indicate support agent behavior
 */
const SUPPORT_KEYWORDS = [
  "support agent", "customer support", "helpdesk", "ticket automation",
  "customer service", "zendesk", "intercom", "freshdesk", "ada",
  "support automation", "customer engagement", "live chat agent"
];

/**
 * Keywords that indicate chatbot agent behavior
 */
const CHATBOT_KEYWORDS = [
  "chatbot", "chat bot", "conversational bot", "ai chatbot",
  "custom chatbot", "chatbase", "botpress", "voiceflow", "landbot",
  "manychat", "bot builder", "chatbot platform", "chat assistant"
];

/**
 * Keywords that indicate multi-agent framework behavior
 */
const MULTI_AGENT_KEYWORDS = [
  "multi-agent", "agent swarm", "agent team", "collaborative agents",
  "agent framework", "orchestration", "autogen", "crewai", "langchain agents",
  "agent coordination", "multiple agents"
];

/**
 * Keywords that indicate social media agent behavior
 */
const SOCIAL_MEDIA_KEYWORDS = [
  "social media agent", "social media management", "buffer", "hootsuite",
  "later", "sprout social", "sendible", "social scheduling", "social automation"
];

/**
 * Keywords that indicate productivity agent behavior
 */
const PRODUCTIVITY_KEYWORDS = [
  "productivity agent", "project management", "task management", "asana",
  "monday.com", "clickup", "notion", "jira", "trello", "work os"
];

/**
 * Keywords that indicate email agent behavior
 */
const EMAIL_KEYWORDS = [
  "email agent", "email automation", "email marketing", "mailchimp",
  "klaviyo", "convertkit", "superhuman", "inbox management"
];

/**
 * Keywords that indicate writing agent behavior
 */
const WRITING_KEYWORDS = [
  "writing agent", "writing assistant", "content writer", "jasper",
  "grammarly", "writesonic", "rytr", "ai writer", "copywriting"
];

/**
 * Keywords that indicate meeting agent behavior
 */
const MEETING_KEYWORDS = [
  "meeting agent", "meeting assistant", "otter.ai", "transcription",
  "meeting notes", "meeting summary", "calendar agent", "scheduling"
];

/**
 * Determine the agent subtype for a tool
 */
export const getAgentSubtype = (tool: Tool): string | null => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combined = `${title} ${description} ${tags}`;

  // Check for explicit agent subtags first
  if (tool.tags?.some(t => Object.values(AGENT_SUBTYPES).includes(t as any))) {
    return tool.tags.find(t => Object.values(AGENT_SUBTYPES).includes(t as any)) || null;
  }

  // Priority order: more specific types first
  if (MULTI_AGENT_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.MULTI_AGENT;
  if (VIBE_CODING_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.VIBE_CODING;
  if (CODING_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.CODING;
  if (VOICE_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.VOICE;
  if (WEB_TASKS_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.WEB_TASKS;
  if (RESEARCH_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.RESEARCH;
  if (SUPPORT_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.SUPPORT;
  if (CHATBOT_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.CHATBOT;
  if (MEETING_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.MEETING;
  if (SOCIAL_MEDIA_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.SOCIAL_MEDIA;
  if (PRODUCTIVITY_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.PRODUCTIVITY;
  if (EMAIL_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.EMAIL;
  if (WRITING_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.WRITING;
  if (AUTOMATION_KEYWORDS.some(kw => combined.includes(kw))) return AGENT_SUBTYPES.AUTOMATION;

  return null;
};

/**
 * Check if a tool is any type of agent
 */
export const isAgentTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const category = (tool.category || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase());

  // Check for explicit "agent" tag
  if (tags.includes("agent")) return true;

  // Check for agent subtypes in tags
  if (tool.tags?.some(t => Object.values(AGENT_SUBTYPES).includes(t as any))) return true;

  // Check category
  if (category.includes("agent")) return true;
  if (category === "ai agents") return true;

  // Check title for agent indicators
  if (title.includes("agent")) return true;
  if (title.includes("operator")) return true;
  if (title.includes("autonomous")) return true;

  // Check description for strong agent indicators
  const agentDescriptionPatterns = [
    "autonomous",
    "agentic",
    "agent that",
    "ai agent",
    "intelligent agent",
    "automation agent",
    "coding agent",
    "voice agent",
    "web agent",
    "browser control",
    "computer use",
    "performs tasks autonomously",
    "executes tasks",
    "automates workflows"
  ];

  if (agentDescriptionPatterns.some(pattern => description.includes(pattern))) return true;

  // Check for agent subtype
  if (getAgentSubtype(tool)) return true;

  return false;
};

/**
 * Get all agent tools from a list with their subtypes
 */
export const getAgentTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isAgentTool(tool));
};

/**
 * Get agent tools by specific subtype
 */
export const getAgentToolsBySubtype = (tools: Tool[], subtype: string): Tool[] => {
  return tools.filter(tool => {
    if (!isAgentTool(tool)) return false;
    const toolSubtype = getAgentSubtype(tool);
    return toolSubtype === subtype;
  });
};

/**
 * Enhanced agent category detection for cache building - EXPANDED
 */
export const getEnhancedAgentTools = (tools: Tool[]): Tool[] => {
  const agentTools = tools.filter(tool => {
    const title = tool.title.toLowerCase();
    const description = (tool.description || "").toLowerCase();
    const category = (tool.category || "").toLowerCase();
    const tags = (tool.tags || []).map(t => t.toLowerCase());
    const directUrl = (tool.directUrl || "").toLowerCase();

    // Primary: explicit agent indicators
    if (isAgentTool(tool)) return true;

    // Bot making platforms are agent-adjacent
    if (category.includes("bot making") || category.includes("chatbot")) return true;

    // Customer support tools with automation
    if (category.includes("customer support") && 
        (description.includes("automat") || description.includes("ai-powered"))) return true;

    // Automation and workflow tools
    if (category.includes("automation") || category.includes("workflow")) return true;

    // Voice assistant tools
    if (category.includes("voice assistant") || category.includes("voice ai")) return true;

    // Check for strong agentic keywords in description
    const agenticKeywords = [
      "autonomous", "agentic", "self-operating", "orchestrate", "orchestration",
      "execute tasks", "perform tasks", "handles tasks", "complete tasks",
      "automate", "automated", "automation", "workflow", "pipeline",
      "assistant", "bot", "chatbot", "ai assistant", "virtual assistant",
      "copilot", "co-pilot", "helper", "agent", "operator"
    ];

    if (agenticKeywords.some(kw => description.includes(kw) || title.includes(kw))) return true;

    // Custom GPTs are agents
    if (directUrl.includes('chatgpt.com/g/g-') || directUrl.includes('.lovable.app')) return true;

    // Tags indicating agent behavior
    const agentTags = ['agent', 'automation', 'bot', 'assistant', 'workflow', 'custom gpt'];
    if (tags.some(tag => agentTags.some(at => tag.includes(at)))) return true;

    return false;
  });

  if (import.meta.env.DEV) console.log(`🤖 Enhanced Agent Detection: Found ${agentTools.length} agent tools`);
  return agentTools;
};
