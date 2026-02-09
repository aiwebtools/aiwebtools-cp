
import { Tool } from "@/types/tools";
import { 
  Briefcase, 
  Brain, 
  Lightbulb, 
  MessageSquare, 
  Clock, 
  BarChart3, 
  Users, 
  Calculator 
} from "lucide-react";

import bardeenHero from "@/assets/tools/bardeen-hero.jpg";
import otterAiHero from "@/assets/tools/otter-ai-hero.jpg";
import jasperAiHero from "@/assets/tools/jasper-ai-hero.jpg";
import firefliesHero from "@/assets/tools/fireflies-hero.jpg";
import clockwiseHero from "@/assets/tools/clockwise-hero.jpg";
import notionAiHero from "@/assets/tools/notion-ai-hero.jpg";
import mondayHero from "@/assets/tools/monday-hero.jpg";
import slackAiHero from "@/assets/tools/slack-ai-hero.jpg";
import quickbooksHero from "@/assets/tools/quickbooks-hero.jpg";

export const traditionalBusinessTools: Tool[] = [
  {
    icon: Briefcase,
    title: "Bardeen",
    description: "AI-powered automation platform that helps automate repetitive tasks and workflows across different apps and services.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.bardeen.ai/",
    imageUrl: bardeenHero,
    tags: ["automation", "workflow", "productivity", "integrations"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 6543
  },
  {
    icon: Brain,
    title: "Otter.ai",
    description: "AI-powered transcription and meeting notes platform that automatically captures and summarizes conversations.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://otter.ai/",
    imageUrl: otterAiHero,
    tags: ["transcription", "meeting notes", "summarization", "productivity"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 5876
  },
  {
    icon: Lightbulb,
    title: "Jasper",
    description: "AI-powered content creation platform that helps businesses generate high-quality blog posts, articles, and marketing copy.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://jasper.ai/",
    imageUrl: jasperAiHero,
    tags: ["content creation", "AI writing", "marketing copy", "blogging"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 5234
  },
  {
    icon: MessageSquare,
    title: "Fireflies.ai",
    description: "AI-powered meeting assistant that automatically records, transcribes, and summarizes meetings across platforms.",
    emoji: "💬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://fireflies.ai/",
    imageUrl: firefliesHero,
    tags: ["meeting recording", "transcription", "summarization", "productivity"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 4789
  },
  {
    icon: Clock,
    title: "Clockwise AI",
    description: "AI-powered time management tool that optimizes schedules, blocks out focus time, and automates meeting scheduling.",
    emoji: "⏰",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://clockwise.ai/",
    imageUrl: clockwiseHero,
    tags: ["time management", "scheduling", "productivity", "AI optimization"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: Briefcase,
    title: "Notion AI",
    description: "AI-powered workspace that helps teams collaborate, organize, and automate workflows with intelligent content generation.",
    emoji: "📝",
    color: "from-gray-600 to-blue-600",
    directUrl: "https://notion.so/",
    imageUrl: notionAiHero,
    tags: ["workspace", "collaboration", "AI writing", "productivity"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: BarChart3,
    title: "Monday.com",
    description: "Work management platform with AI-powered project tracking, automation, and team collaboration features.",
    emoji: "📊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://monday.com/",
    imageUrl: mondayHero,
    tags: ["project management", "team collaboration", "workflow automation", "business intelligence"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: Users,
    title: "Slack AI",
    description: "Enhanced team communication platform with AI-powered message summarization, search, and workflow automation.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://slack.com/",
    imageUrl: slackAiHero,
    tags: ["team communication", "AI summarization", "workflow automation", "collaboration"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 5432
  },
  {
    icon: Calculator,
    title: "QuickBooks AI",
    description: "Intelligent accounting software with AI-powered expense categorization, financial insights, and automated bookkeeping.",
    emoji: "💰",
    color: "from-blue-500 to-green-600",
    directUrl: "https://quickbooks.intuit.com/",
    imageUrl: quickbooksHero,
    tags: ["accounting", "financial management", "AI automation", "business intelligence"],
    category: "Business & Productivity",
    rating: 4.2,
    totalVotes: 2987
  }
];
