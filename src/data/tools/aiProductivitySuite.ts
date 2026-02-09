
import { Tool } from "@/types/tools";
import { 
  Zap, Calendar, Clock, Target, CheckSquare, Users, MessageSquare,
  FileText, Briefcase, Settings, Lightbulb, Activity
} from "lucide-react";

import motionHero from "@/assets/tools/motion-hero.jpg";
import reclaimAiHero from "@/assets/tools/reclaim-ai-hero.jpg";
import clickupAiHero from "@/assets/tools/clickup-ai-hero.jpg";
import notionAiHero from "@/assets/tools/notion-ai-hero.jpg";
import clockifyAiHero from "@/assets/tools/clockify-ai-hero.jpg";

export const aiProductivitySuite: Tool[] = [
  {
    icon: Zap,
    title: "Motion",
    description: "AI-powered calendar and task manager that automatically schedules your tasks and meetings for optimal productivity.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://usemotion.com/?via=aiwebtools",
    imageUrl: motionHero,
    tags: ["AI scheduling", "calendar", "task management", "productivity", "automation"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "Reclaim AI",
    description: "Smart calendar assistant that protects your time for focused work and automatically schedules habits and breaks.",
    emoji: "🎯",
    color: "from-green-500 to-blue-600",
    directUrl: "https://reclaim.ai/?via=aiwebtools",
    imageUrl: reclaimAiHero,
    tags: ["time blocking", "focus time", "calendar automation", "productivity"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: CheckSquare,
    title: "ClickUp AI",
    description: "AI-powered project management with smart task creation, content generation, and workflow optimization.",
    emoji: "✅",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://clickup.com/ai?via=aiwebtools",
    imageUrl: clickupAiHero,
    tags: ["project management", "AI assistant", "task automation", "workflow"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 2654
  },
  {
    icon: Briefcase,
    title: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace for content creation, summarization, and brainstorming.",
    emoji: "💼",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.notion.so/product/ai?via=aiwebtools",
    imageUrl: notionAiHero,
    tags: ["Notion", "AI writing", "workspace", "content creation", "summarization"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 2321
  },
  {
    icon: Activity,
    title: "Clockify AI",
    description: "AI-enhanced time tracking with smart project categorization and productivity insights for teams.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://clockify.me/?via=aiwebtools",
    imageUrl: clockifyAiHero,
    tags: ["time tracking", "productivity analytics", "project management", "team insights"],
    category: "Business & Productivity",
    rating: 4.2,
    totalVotes: 1987
  }
];
