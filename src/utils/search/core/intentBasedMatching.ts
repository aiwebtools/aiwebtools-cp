
import { Tool } from "@/types/tools";
import { searchDebugLog } from "@/utils/debug/searchDebug";

interface IntentPattern {
  triggers: string[];
  intent: string;
  toolCategories: string[];
  priorityTools: string[];
  description: string;
}

// Define intelligent intent patterns for natural language queries
const intentPatterns: IntentPattern[] = [
  {
    triggers: [
      "make an app",
      "create an app",
      "build an app",
      "develop an app",
      "app builder",
      "make app",
      "create app",
      "build app",
    ],
    intent: "app_creation",
    toolCategories: ["web development", "development", "coding", "programming"],
    priorityTools: [
      "lovable.dev",
      "bolt.new",
      "vercel v0",
      "webflow",
      "framer",
      "builder.io",
      "replit",
      "github copilot",
    ],
    description: "User wants to create/build applications",
  },
  {
    triggers: ["write a book", "write book", "book writing", "create book", "author", "novel", "story writing"],
    intent: "book_writing",
    toolCategories: ["writing", "content creation", "creative"],
    priorityTools: ["book writer gpt", "article and blog rewriter gpt", "training manual generator gpt"],
    description: "User wants to write books or creative content",
  },
  {
    triggers: ["robot", "robotics", "humanoid", "android", "figure 01", "tesla optimus", "unitree", "boston dynamics"],
    intent: "robotics",
    toolCategories: ["robotics companies", "ai", "automation"],
    priorityTools: ["unitree robotics", "figure ai", "tesla bot", "boston dynamics", "agility robotics"],
    description: "User is interested in robotics and robotic companies",
  },
  {
    triggers: ["history", "historical", "past", "ancient", "time travel", "civilization", "heritage"],
    intent: "history",
    toolCategories: ["time & history", "historical & cultural", "educational"],
    priorityTools: [
      "time machine gpt",
      "talk to history gpt",
      "historical headlines gpt",
      "titanic resurrections gpt",
      "uncovering hidden historical patterns gpt",
      "native american history time machine gpt",
    ],
    description: "User wants historical tools and time-related content",
  },
  {
    triggers: ["imagine", "imagination", "creative", "fantasy", "dream", "vision", "wonder", "magical"],
    intent: "imagination",
    toolCategories: ["creative", "entertainment", "mystical"],
    priorityTools: [
      "imagination traveler gpt",
      "time machine gpt",
      "talk to history gpt",
      "stellaris",
      "oraculum",
      "dream interpreter gpt",
    ],
    description: "User wants imaginative and creative exploration tools",
  },
  {
    triggers: ["web development", "web dev", "frontend", "backend", "fullstack", "javascript", "react", "coding"],
    intent: "web_development",
    toolCategories: ["development & coding", "web development", "programming"],
    priorityTools: ["lovable.dev", "bolt.new", "vercel v0", "github copilot", "engineering gpt ai suite"],
    description: "User wants web development tools and resources",
  },
  {
    triggers: ["learn", "education", "course", "college", "school", "study", "tutorial", "skill"],
    intent: "education",
    toolCategories: ["education", "learning", "professional development"],
    priorityTools: ["learn any course gpt", "learn any skill gpt", "college degree gpt", "course maker gpt", "quiz maker ai"],
    description: "User wants educational tools and learning resources",
  },
  {
    triggers: ["design", "graphic design", "ui design", "ux design", "visual design", "logo"],
    intent: "design",
    toolCategories: ["design", "creative", "graphics"],
    priorityTools: ["graphic & cover design gpt", "restyle me gpt", "sketch artist gpt"],
    description: "User wants design and creative tools",
  },
  {
    triggers: ["video", "movie", "film", "cinema", "video editing"],
    intent: "video_creation",
    toolCategories: ["video", "media", "entertainment"],
    priorityTools: ["movie maker studio", "movie scene maker gpt", "music video maker ai studio"],
    description: "User wants video creation and editing tools",
  },
  {
    triggers: ["music", "audio", "sound", "voice", "song"],
    intent: "audio_music",
    toolCategories: ["audio", "music", "voice"],
    priorityTools: ["music video maker ai studio", "music melodies & lessons gpt", "mixologist gpt"],
    description: "User wants audio and music tools",
  },
  {
    triggers: ["business", "startup", "entrepreneur", "company", "business plan"],
    intent: "business",
    toolCategories: ["business", "finance", "productivity"],
    priorityTools: ["business plan generator gpt", "startup validator gpt", "microsaas gpt"],
    description: "User wants business and entrepreneurship tools",
  },
  {
    triggers: ["health", "medical", "doctor", "wellness", "fitness"],
    intent: "health",
    toolCategories: ["health", "medical", "wellness"],
    priorityTools: ["personalized dr gpt", "veterinarian gpt", "mental wellness gpt"],
    description: "User wants health and medical tools",
  },
];

export const detectUserIntent = (searchTerm: string): IntentPattern | null => {
  const lowerTerm = searchTerm.toLowerCase().trim();

  for (const pattern of intentPatterns) {
    if (pattern.triggers.some((trigger) => lowerTerm.includes(trigger))) {
      searchDebugLog(`🎯 INTENT DETECTED: ${pattern.intent} for search: "${searchTerm}"`);
      return pattern;
    }
  }

  return null;
};

export const scoreToolByIntent = (tool: Tool, intent: IntentPattern, searchTerm: string): number => {
  let score = 0;
  const searchableText = [tool.title, tool.description, tool.category, ...(tool.tags || [])].join(" ").toLowerCase();

  // MASSIVE bonus for priority tools that match the intent
  for (const priorityTool of intent.priorityTools) {
    if (tool.title.toLowerCase().includes(priorityTool.toLowerCase())) {
      score += 15000;
      searchDebugLog(`🚀 PRIORITY TOOL MATCH: ${tool.title} gets 15000 points for intent ${intent.intent}`);
      break;
    }
  }

  // High bonus for category matching
  for (const category of intent.toolCategories) {
    if (tool.category?.toLowerCase().includes(category.toLowerCase())) {
      score += 10000;
      searchDebugLog(`📂 CATEGORY MATCH: ${tool.title} gets 10000 points for category ${category}`);
      break;
    }
  }

  // Medium bonus for description matching intent keywords
  for (const trigger of intent.triggers) {
    if (searchableText.includes(trigger.toLowerCase())) {
      score += 5000;
      searchDebugLog(`🔍 INTENT KEYWORD MATCH: ${tool.title} gets 5000 points for ${trigger}`);
      break;
    }
  }

  return score;
};

export const matchToolByIntent = (tool: Tool, searchTerm: string): { matched: boolean; score: number } => {
  const intent = detectUserIntent(searchTerm);
  
  if (!intent) {
    return { matched: false, score: 0 };
  }

  const score = scoreToolByIntent(tool, intent, searchTerm);
  const matched = score > 0;

  return { matched, score };
};
