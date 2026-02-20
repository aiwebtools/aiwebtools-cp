import { Tool } from "@/types/tools";
import { 
  Code, 
  Terminal,
  Zap,
  Sparkles,
  GitBranch,
  Cpu,
  Layers,
  Box
} from "lucide-react";

import githubCopilotHero from "@/assets/tools/github-copilot-hero.jpg";
import cursorHero from "@/assets/tools/cursor-ai-hero.jpg";
import codeiumHero from "@/assets/tools/codeium-hero.jpg";
import windsurfHero from "@/assets/tools/windsurf-hero.jpg";
import v0VercelHero from "@/assets/tools/v0-vercel-hero.jpg";
import sourcegraphCodyHero from "@/assets/tools/sourcegraph-cody-hero.jpg";
import tabnineHero from "@/assets/tools/tabnine-hero.jpg";
import warpAiHero from "@/assets/tools/warp-ai-hero.jpg";

export const developerProductivityAI: Tool[] = [
  {
    icon: GitBranch,
    title: "GitHub Copilot",
    description: "AI pair programmer by GitHub and OpenAI. Get code suggestions, complete functions, write tests, and explain code directly in your IDE. Powered by GPT-4 and trained on billions of lines of code.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/features/copilot?via=aiwebtools",
    imageUrl: githubCopilotHero,
    tags: ["Code Assistant", "GitHub Copilot", "code completion", "AI coding", "pair programming", "GPT-4", "IDE integration", "OpenAI", "All-in-One Suite"],
    category: "Developer Tools",
    rating: 4.8,
    totalVotes: 187000
  },
  {
    icon: Sparkles,
    title: "Cursor",
    description: "AI-first code editor built for productivity. Chat with your codebase, edit multiple files simultaneously, and get intelligent code suggestions. The future of coding with GPT-4 integration.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://cursor.sh/?via=aiwebtools",
    imageUrl: cursorHero,
    tags: ["IDE", "Code Assistant", "Cursor", "AI code editor", "codebase chat", "multi-file editing", "GPT-4", "productivity", "intelligent IDE", "All-in-One Suite"],
    category: "Developer Tools",
    rating: 4.9,
    totalVotes: 124000
  },
  {
    icon: Zap,
    title: "Codeium",
    description: "Free AI code completion tool supporting 70+ languages. Lightning-fast autocomplete, intelligent search, and chat with your code. Free alternative to GitHub Copilot with no limits.",
    emoji: "⚡",
    color: "from-green-500 to-teal-600",
    directUrl: "https://codeium.com/?via=aiwebtools",
    imageUrl: codeiumHero,
    tags: ["Code Assistant", "Codeium", "free AI coding", "code completion", "70+ languages", "autocomplete", "code search", "free alternative", "Multi-Tool Platform"],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 98000
  },
  {
    icon: Box,
    title: "Replit AI",
    description: "AI-powered cloud development environment. Code, deploy, and collaborate with AI assistance. Complete code generation, debugging, and deployment all in one platform with Ghostwriter AI.",
    emoji: "📦",
    color: "from-orange-500 to-red-600",
    directUrl: "https://replit.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/replit-hero.png",
    tags: ["IDE", "Cloud Platform", "Replit", "cloud IDE", "AI coding", "Ghostwriter", "code generation", "debugging", "deployment", "collaboration", "All-in-One Suite", "Team Collaboration"],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 145000
  },
  {
    icon: Terminal,
    title: "Tabnine",
    description: "AI code assistant that learns your coding patterns. Context-aware code completions, supports all major IDEs, and can run locally for privacy. Enterprise-ready with team training.",
    emoji: "🔧",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://www.tabnine.com/?via=aiwebtools",
    imageUrl: tabnineHero,
    tags: ["Code Assistant", "Tabnine", "AI assistant", "code completion", "privacy", "local AI", "enterprise", "pattern learning", "Workflow Optimization"],
    category: "Developer Tools",
    rating: 4.5,
    totalVotes: 112000
  },
  {
    icon: Code,
    title: "Amazon CodeWhisperer",
    description: "AWS AI coding companion with security scanning. Real-time code suggestions optimized for AWS APIs, built-in security vulnerability scanning, and reference tracking. Free for individuals.",
    emoji: "🔐",
    color: "from-orange-600 to-yellow-600",
    directUrl: "https://aws.amazon.com/codewhisperer/?via=aiwebtools",
    imageUrl: "/src/assets/tools/codewhisperer-hero.png",
    tags: ["Code Assistant", "Security", "Cloud Platform", "CodeWhisperer", "AWS", "AI coding", "security scanning", "code suggestions", "free", "cloud native", "Automation Platform"],
    category: "Developer Tools",
    rating: 4.4,
    totalVotes: 87000
  },
  {
    icon: Layers,
    title: "Sourcegraph Cody",
    description: "AI coding assistant with deep codebase understanding. Answer questions about your code, generate unit tests, and fix bugs with context-aware AI that reads your entire repository.",
    emoji: "🧠",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://sourcegraph.com/cody?via=aiwebtools",
    imageUrl: sourcegraphCodyHero,
    tags: ["Code Assistant", "Testing", "Cody", "Sourcegraph", "codebase understanding", "unit tests", "bug fixing", "repository analysis", "context-aware", "Workflow Optimization"],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 76000
  },
  {
    icon: Cpu,
    title: "Windsurf Editor",
    description: "Next-generation AI-powered code editor with flow state optimization. Seamless AI integration, intelligent suggestions, and distraction-free coding environment for maximum productivity.",
    emoji: "🌊",
    color: "from-blue-600 to-cyan-600",
    directUrl: "https://codeium.com/windsurf?via=aiwebtools",
    imageUrl: windsurfHero,
    tags: ["IDE", "Code Assistant", "Windsurf", "AI editor", "flow state", "productivity", "code editor", "intelligent suggestions", "distraction-free", "All-in-One Suite"],
    category: "Developer Tools",
    rating: 4.7,
    totalVotes: 89000
  },
  {
    icon: Sparkles,
    title: "v0 by Vercel",
    description: "AI-powered UI generation tool by Vercel. Generate React components and full interfaces from text descriptions. Creates production-ready code with shadcn/ui components instantly.",
    emoji: "⚡",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://v0.dev/?via=aiwebtools",
    imageUrl: v0VercelHero,
    tags: ["No-Code/Low-Code", "Frontend", "v0", "Vercel", "UI generation", "React components", "shadcn/ui", "text-to-UI", "production code", "Automation Platform"],
    category: "Developer Tools",
    rating: 4.8,
    totalVotes: 134000
  },
  {
    icon: Code,
    title: "Warp AI",
    description: "Modern terminal with AI capabilities. Get natural language command suggestions, debug errors, and explain complex commands. The terminal reimagined with GPT-4 integration.",
    emoji: "🚀",
    color: "from-green-600 to-emerald-600",
    directUrl: "https://www.warp.dev/?via=aiwebtools",
    imageUrl: warpAiHero,
    tags: ["IDE", "Code Assistant", "Warp", "AI terminal", "command suggestions", "debugging", "GPT-4", "modern terminal", "developer tools", "Workflow Optimization"],
    category: "Developer Tools",
    rating: 4.6,
    totalVotes: 92000
  }
];
