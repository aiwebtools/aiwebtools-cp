
import { Mail, Filter, Clock, Users, Zap, Shield, Search, Bot, Calendar, Star } from "lucide-react";
import { Tool } from "@/types/tools";

export const emailManagementTools: Tool[] = [
  {
    icon: Zap,
    title: "Superhuman",
    description: "AI-powered email client designed for speed and efficiency. Features keyboard shortcuts, AI-powered insights, and advanced email management capabilities for power users.",
    emoji: "⚡",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://www.superhuman.com",
    tags: ["email client", "AI-powered", "speed", "efficiency", "power users"],
    category: "Email Management Tools",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Bot,
    title: "Gmail Smart Compose",
    description: "AI writing assistance integrated into Gmail that helps compose emails faster with intelligent suggestions and auto-completion based on context and writing patterns.",
    emoji: "✍️",
    color: "from-green-400 to-teal-500",
    directUrl: "https://www.gmail.com/smartcompose",
    tags: ["Gmail", "writing assistance", "auto-completion", "AI suggestions", "productivity"],
    category: "Email Management Tools",
    rating: 4.6,
    totalVotes: 4100
  },
  {
    icon: Clock,
    title: "Boomerang for Gmail",
    description: "Email scheduling and reminder tool that lets you send emails later, set follow-up reminders, and track email responses. Helps manage email timing and follow-ups effectively.",
    emoji: "🔄",
    color: "from-orange-400 to-red-500",
    directUrl: "https://www.boomeranggmail.com",
    tags: ["email scheduling", "reminders", "follow-up", "Gmail integration", "timing"],
    category: "Email Management Tools",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Filter,
    title: "SaneBox",
    description: "Email filtering and organization tool that automatically sorts emails into folders, reduces email overload, and helps prioritize important messages using AI-powered filtering.",
    emoji: "📂",
    color: "from-purple-400 to-indigo-500",
    directUrl: "https://www.sanebox.com",
    tags: ["email filtering", "organization", "AI sorting", "priority", "productivity"],
    category: "Email Management Tools",
    rating: 4.4,
    totalVotes: 2450
  },
  {
    icon: Shield,
    title: "Unroll.Me",
    description: "Subscription management tool that helps declutter your inbox by identifying all subscription emails and allowing you to unsubscribe from unwanted lists with one click.",
    emoji: "🗂️",
    color: "from-cyan-400 to-blue-500",
    directUrl: "https://www.unroll.me",
    tags: ["subscription management", "inbox cleanup", "unsubscribe", "email declutter", "organization"],
    category: "Email Management Tools",
    rating: 4.3,
    totalVotes: 3100
  },
  {
    icon: Bot,
    title: "EmailTree.ai",
    description: "Email automation and analysis platform that uses AI to automate email responses, analyze email patterns, and provide insights for customer service and business communications.",
    emoji: "🌳",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.emailtree.ai",
    tags: ["email automation", "AI analysis", "customer service", "business communication", "insights"],
    category: "Email Management Tools",
    rating: 4.6,
    totalVotes: 1890
  },
  {
    icon: Star,
    title: "Spark by Adobe",
    description: "Email prioritization tool that intelligently sorts and prioritizes emails based on importance, helping users focus on what matters most in their inbox.",
    emoji: "✨",
    color: "from-red-400 to-pink-500",
    directUrl: "https://www.spark.adobe.com",
    tags: ["email prioritization", "intelligent sorting", "focus", "importance", "Adobe"],
    category: "Email Management Tools",
    rating: 4.5,
    totalVotes: 2200
  },
  {
    icon: Users,
    title: "Front",
    description: "Team inbox management platform that combines email, social media, and other communication channels into one collaborative workspace for teams and customer support.",
    emoji: "👥",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.front.com",
    tags: ["team inbox", "collaboration", "customer support", "multi-channel", "workspace"],
    category: "Email Management Tools",
    rating: 4.7,
    totalVotes: 2650
  },
  {
    icon: Search,
    title: "Gmelius",
    description: "Email collaboration and workflow tool that transforms Gmail into a powerful team workspace with shared inboxes, project management, and automation features.",
    emoji: "🔧",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.gmelius.com",
    tags: ["email collaboration", "workflow", "team workspace", "Gmail enhancement", "automation"],
    category: "Email Management Tools",
    rating: 4.4,
    totalVotes: 1950
  },
  {
    icon: Calendar,
    title: "GetMagic",
    description: "Email assistant and scheduling tool that helps manage email communications and coordinate meetings through intelligent automation and personal assistant capabilities.",
    emoji: "🎩",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://www.getmagic.com",
    tags: ["email assistant", "scheduling", "automation", "meetings", "personal assistant"],
    category: "Email Management Tools",
    rating: 4.3,
    totalVotes: 1780
  }
];
