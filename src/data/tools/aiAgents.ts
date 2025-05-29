
import { Tool } from "@/types/tools";
import { 
  Bot, Code, Cpu, Globe
} from "lucide-react";

export const aiAgents: Tool[] = [
  {
    icon: Code,
    title: "Lovable",
    description: "AI-powered web application builder that creates React apps with natural language. Build full-stack applications with AI assistance and real-time collaboration.",
    emoji: "💜",
    color: "from-purple-500 to-pink-600",
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
  }
];
