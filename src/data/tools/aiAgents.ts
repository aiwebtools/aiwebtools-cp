

import { Tool } from "@/types/tools";
import { 
  Bot, Code, Cpu, Globe, Zap, Brain, Sparkles, Layers, Workflow, GitBranch
} from "lucide-react";

export const aiAgents: Tool[] = [
  {
    icon: Code,
    title: "Lovable",
    description: "AI-powered web application builder that creates React apps with natural language. Build full-stack applications with AI assistance and real-time collaboration.",
    emoji: "💜",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    tags: ["AI coding", "web development", "React", "full-stack", "AI builder"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Bot,
    title: "Bolt",
    description: "AI-powered coding assistant that helps developers write, debug, and optimize code across multiple programming languages with intelligent suggestions.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    directUrl: "https://bolt.new/?via=aiwebtools",
    tags: ["AI coding", "code assistant", "debugging", "programming", "AI development"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Cpu,
    title: "Manus",
    description: "Advanced AI agent for automated software development and code generation with intelligent project management and deployment capabilities.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://manus.lm/?via=aiwebtools",
    tags: ["AI agent", "automated development", "code generation", "project management", "deployment"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 2156
  },
  {
    icon: Globe,
    title: "Surf",
    description: "AI-powered web browsing agent that helps automate web tasks, extract information, and interact with websites intelligently through natural language commands.",
    emoji: "🏄",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://surf.new/?via=aiwebtools",
    tags: ["AI agent", "web automation", "web browsing", "task automation", "information extraction"],
    category: "AI Agents",
    rating: 4.3,
    totalVotes: 1845
  },
  {
    icon: Zap,
    title: "Cursor",
    description: "AI-first code editor that integrates advanced AI assistance directly into your development workflow with intelligent code completion and chat.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://cursor.sh/?via=aiwebtools",
    tags: ["AI coding", "code editor", "AI assistant", "development", "code completion"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4521
  },
  {
    icon: Brain,
    title: "Replit Agent",
    description: "Collaborative AI coding agent that builds and deploys applications from natural language descriptions with real-time development capabilities.",
    emoji: "🧠",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://replit.com/agent?via=aiwebtools",
    tags: ["AI agent", "collaborative coding", "deployment", "natural language", "development"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3654
  },
  {
    icon: Sparkles,
    title: "Claude Artifacts",
    description: "Anthropic's advanced AI assistant with artifact generation capabilities for creating interactive applications, visualizations, and documents.",
    emoji: "✨",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    tags: ["AI assistant", "artifacts", "interactive apps", "visualizations", "anthropic"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 6789
  },
  {
    icon: Layers,
    title: "v0 by Vercel",
    description: "AI-powered UI generator that creates React components and interfaces from text descriptions with Tailwind CSS and shadcn/ui integration.",
    emoji: "🎨",
    color: "from-slate-500 to-gray-600",
    directUrl: "https://v0.dev/?via=aiwebtools",
    tags: ["AI UI", "component generation", "React", "Tailwind CSS", "design"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Workflow,
    title: "n8n",
    description: "Open-source workflow automation tool that connects apps and services with visual workflow builder and AI-powered automation capabilities.",
    emoji: "🔗",
    color: "from-purple-600 to-blue-700",
    directUrl: "https://n8n.io/?via=aiwebtools",
    tags: ["workflow automation", "no-code", "integrations", "API connections", "open source"],
    category: "Automation",
    rating: 4.6,
    totalVotes: 3287
  },
  {
    icon: GitBranch,
    title: "Make.com",
    description: "Visual platform for creating automated workflows between apps and services with powerful automation scenarios and data transformation capabilities.",
    emoji: "⚙️",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://make.com/?via=aiwebtools",
    tags: ["automation platform", "integrations", "workflow builder", "data sync", "no-code"],
    category: "Automation",
    rating: 4.7,
    totalVotes: 4156
  }
];

