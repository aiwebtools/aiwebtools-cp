
import { Tool } from "@/types/tools";
import { 
  Code,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Bug,
  Layers,
  Share2,
  Wand2,
  Monitor,
  Wrench
} from "lucide-react";

import githubCopilotDevHero from "@/assets/tools/github-copilot-dev-hero.jpg";
import lmStudioHero from "@/assets/tools/lm-studio-hero.jpg";
import tabnineHero from "@/assets/tools/tabnine-hero.jpg";
import mutableAiHero from "@/assets/tools/mutable-ai-hero.jpg";
import sourcegraphHero from "@/assets/tools/sourcegraph-hero.jpg";
import deepcodeHero from "@/assets/tools/deepcode-hero.jpg";
import browseractHero from "@/assets/tools/browseract-hero.jpg";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Wrench,
    title: "Brancher.ai",
    description: "AI tool for building AI tools. Create, deploy, and manage AI applications with a no-code platform designed for developers and businesses.",
    emoji: "🔧",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://brancher.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/brancher-hero.png",
    tags: ["No-Code/Low-Code", "AI builder", "no-code", "AI development", "tool creation", "platform"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 1234
  },
  {
    icon: Monitor,
    title: "LM STUDIO – Run AI Locally & Download & Deploy Countless AI Models",
    description: "Desktop application for running large language models locally on your machine. Download, install, and run various AI models without requiring cloud services or internet connectivity.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://lmstudio.ai/",
    videoUrl: "https://www.youtube.com/watch?v=yBI1nPep72Q",
    imageUrl: lmStudioHero,
    tags: ["Backend", "local AI", "LLM deployment", "offline AI", "model hosting", "AI development", "desktop AI", "local models"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 3789
  },
  {
    icon: Code,
    title: "GitHub Copilot",
    description: "AI pair programmer that offers code suggestions and autocompletion in real-time. Integrates with popular code editors to boost developer productivity.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/features/copilot",
    imageUrl: githubCopilotDevHero,
    tags: ["Code Assistant", "Coding Agent", "AI coding", "code completion", "pair programming", "developer tools", "GitHub", "agent"],
    category: "DEVELOPMENT & CODING",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Terminal,
    title: "Tabnine",
    description: "AI code completion tool that uses deep learning to provide accurate and context-aware suggestions. Supports multiple languages and integrates with various IDEs.",
    emoji: "⌨️",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.tabnine.com/",
    imageUrl: tabnineHero,
    tags: ["Code Assistant", "Coding Agent", "AI coding", "code completion", "deep learning", "IDE integration", "developer tools", "agent"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Cpu,
    title: "Mutable AI",
    description: "AI-powered platform that automatically generates, tests, and evolves code. Helps developers automate repetitive tasks and improve code quality.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://mutable.ai/",
    imageUrl: mutableAiHero,
    tags: ["Code Assistant", "Testing", "Coding Agent", "AI code generation", "automated testing", "code evolution", "developer tools", "AI platform", "agent"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Database,
    title: "Sourcegraph",
    description: "Code search and intelligence platform that helps developers understand, navigate, and automate code changes at scale. Integrates with code repositories and CI/CD systems.",
    emoji: "🔍",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://sourcegraph.com/",
    imageUrl: sourcegraphHero,
    tags: ["Code Assistant", "CI/CD", "code search", "code intelligence", "automation", "developer tools", "CI/CD integration"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: GitBranch,
    title: "DeepCode",
    description: "AI-powered code review tool that identifies critical bugs and vulnerabilities in code. Provides actionable insights and recommendations to improve code quality and security.",
    emoji: "🛡️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.deepcode.ai/",
    imageUrl: deepcodeHero,
    tags: ["Security", "Testing", "code review", "bug detection", "vulnerability analysis", "security", "AI analysis"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 3210
  },
  {
    icon: Share2,
    title: "Durable AI Website Builder",
    description: "AI-powered website builder that generates a complete website with content and images in seconds. Perfect for small businesses and entrepreneurs looking to quickly establish an online presence.",
    emoji: "🌐",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://durable.co/ai-website-builder?via=aiwebtools",
    imageUrl: "/src/assets/tools/durable-hero.png",
    tags: ["No-Code/Low-Code", "Frontend", "website builder", "AI website", "content generation", "small business", "online presence"],
    category: "DEVELOPMENT & CODING",
    rating: 4.1,
    totalVotes: 2543
  },
  {
    icon: Wand2,
    title: "Amazon CodeWhisperer",
    description: "AI-powered coding companion that generates code suggestions in real-time. Supports multiple languages and integrates with popular IDEs.",
    emoji: "✨",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://aws.amazon.com/codewhisperer/",
    imageUrl: "/src/assets/tools/codewhisperer-hero.png",
    tags: ["Code Assistant", "Cloud Platform", "Coding Agent", "AI coding", "code completion", "real-time suggestions", "developer tools", "Amazon", "agent"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 3322
  },
  {
    icon: Code,
    title: "Engineering GPT AI Suite",
    description: "ENGINEERING GPTs by AiWebTools.Ai is a cutting-edge suite of AI-powered tools designed to provide expert-level support across a wide range of engineering disciplines, including Electrical, Mechanical, Civil, and Software Engineering. These tools deliver comprehensive assistance by offering detailed calculations, design recommendations, optimization strategies, and safety protocols tailored to your specific project needs.",
    emoji: "⚙️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/kDyI8A2xBe8?si=17__oTLSE7HbbApB",
    imageUrl: "/lovable-uploads/d96aa982-9238-415c-b8ae-c2f4b91d5392.png",
    tags: ["Backend", "engineering", "calculations", "design", "optimization", "safety protocols", "technical support"],
    category: "DEVELOPMENT & CODING",
    rating: 4.8,
    totalVotes: 4200
  },
  {
    icon: Database,
    title: "BrowserAct",
    description: "An AI web scraping and automation tool that extracts data from any website without coding limits. Automate browser tasks, extract structured data, and perform complex web interactions with AI assistance.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://browseract.com/?via=aiwebtools",
    imageUrl: browseractHero,
    tags: ["API Tools", "Web Tasks Agent", "web scraping", "automation", "data extraction", "browser automation", "no-code", "AI automation", "agent"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 2345
  }
];
