
import { Tool } from "@/types/tools";
import { Globe, Code, Cpu, Database, Play, Shield, Zap, Bot } from "lucide-react";

// Hero images for new tools
import websimHero from "@/assets/tools/websim-ai-hero.png";
import aiWebsiteGenHero from "@/assets/tools/ai-website-generator-hero.png";
import qwen3CoderHero from "@/assets/tools/qwen3-coder-hero.png";
import kiroAIHero from "@/assets/tools/kiro-ai-hero.png";
import kiloCodeHero from "@/assets/tools/kilo-code-hero.png";
import codeLlamaHero from "@/assets/tools/code-llama-70b-hero.png";
import firebaseStudioHero from "@/assets/tools/firebase-studio-hero.png";
import openManusHero from "@/assets/tools/openmanus-hero.png";
import browserUseHero from "@/assets/tools/browser-use-hero.png";
import databricksHero from "@/assets/tools/databricks-ai-hero.png";
import playgroundOpenAIHero from "@/assets/tools/playground-openai-hero.png";
import adobeCredentialsHero from "@/assets/tools/adobe-content-credentials-hero.png";

/**
 * Audit Batch Q2 2025 Part 11 - No Code/Low Code, Assistant Code, Developer Tools, Legal Assistants
 * 12 verified new tools with 4K artistic hero images
 */
export const auditBatch2025Q2Part11Tools: Tool[] = [
  // === NO CODE / LOW CODE ===
  {
    icon: Globe,
    title: "Websim AI",
    description: "AI-powered web simulation platform that generates interactive websites and web experiences from prompts. Create complex web applications without coding using natural language descriptions.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://websim.ai/?via=aiwebtools",
    imageUrl: websimHero,
    tags: ["No-Code/Low-Code", "web simulation", "AI website", "interactive", "prompt to website", "no-code", "web builder"],
    category: "Website & Design Tools",
    rating: 4.6,
    totalVotes: 892
  },
  {
    icon: Zap,
    title: "AI Website Generator",
    description: "Instant AI-powered website creation tool that transforms ideas into fully functional websites in seconds. Perfect for entrepreneurs, small businesses, and creators who need quick professional web presence.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://aiwebsitegenerator.com/?via=aiwebtools",
    imageUrl: aiWebsiteGenHero,
    tags: ["No-Code/Low-Code", "website generator", "AI builder", "instant website", "no-code", "landing page", "business website"],
    category: "Website & Design Tools",
    rating: 4.4,
    totalVotes: 567
  },

  // === ASSISTANT CODE ===
  {
    icon: Code,
    title: "Qwen3-Coder",
    description: "Alibaba's advanced coding model optimized for programming tasks. Supports 100+ programming languages with superior code generation, debugging, and explanation capabilities.",
    emoji: "💻",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://huggingface.co/Qwen/Qwen3-Coder?via=aiwebtools",
    imageUrl: qwen3CoderHero,
    tags: ["Code Assistant", "coding model", "Qwen", "Alibaba", "programming", "code generation", "open source", "LLM"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 1243
  },
  {
    icon: Bot,
    title: "Kiro AI",
    description: "Amazon's AI coding assistant designed for AWS developers. Intelligent code suggestions, infrastructure automation, and cloud-native development support built directly into your workflow.",
    emoji: "🤖",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://kiro.dev/?via=aiwebtools",
    imageUrl: kiroAIHero,
    tags: ["Code Assistant", "AWS", "Amazon", "cloud development", "infrastructure", "coding AI", "developer tools"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 789
  },
  {
    icon: Code,
    title: "Kilo Code",
    description: "Lightweight AI coding assistant focused on speed and efficiency. Fast code completions, inline suggestions, and minimal resource usage for developers who value performance.",
    emoji: "📦",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://kilocode.ai/?via=aiwebtools",
    imageUrl: kiloCodeHero,
    tags: ["Code Assistant", "lightweight", "fast", "code completion", "developer tools", "efficient", "IDE extension"],
    category: "DEVELOPMENT & CODING",
    rating: 4.3,
    totalVotes: 456
  },
  {
    icon: Cpu,
    title: "Code Llama 70B",
    description: "Meta's largest and most capable code generation model. 70 billion parameters trained on code for superior programming assistance, debugging, and code explanation across all major languages.",
    emoji: "🦙",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://ai.meta.com/llama/?via=aiwebtools",
    imageUrl: codeLlamaHero,
    tags: ["Code Assistant", "Meta", "Llama", "open source", "70B", "code generation", "LLM", "programming"],
    category: "DEVELOPMENT & CODING",
    rating: 4.8,
    totalVotes: 2345
  },

  // === DEVELOPER TOOLS ===
  {
    icon: Database,
    title: "Firebase Studio",
    description: "Google's integrated development environment for Firebase projects. AI-assisted app building with real-time database, authentication, hosting, and cloud functions all in one unified studio.",
    emoji: "🔥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://firebase.google.com/studio?via=aiwebtools",
    imageUrl: firebaseStudioHero,
    tags: ["Developer Tools", "Firebase", "Google", "backend", "database", "authentication", "cloud functions", "hosting"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 1876
  },
  {
    icon: Bot,
    title: "OpenManus",
    description: "Open-source AI agent framework for building autonomous systems. Create multi-agent workflows, browser automation, and complex AI-driven processes with community-driven development.",
    emoji: "🤲",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://github.com/mannaandpoem/OpenManus?via=aiwebtools",
    imageUrl: openManusHero,
    tags: ["Developer Tools", "AI Agents", "open source", "multi-agent", "automation", "framework", "autonomous"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 678
  },
  {
    icon: Globe,
    title: "Browser Use",
    description: "AI-powered browser automation framework enabling LLMs to interact with web pages. Build intelligent web agents that can navigate, click, type, and extract data autonomously.",
    emoji: "🖥️",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://browser-use.com/?via=aiwebtools",
    imageUrl: browserUseHero,
    tags: ["Developer Tools", "AI Agents", "browser automation", "web agent", "LLM", "automation", "scraping"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 923
  },
  {
    icon: Database,
    title: "Databricks AI",
    description: "Enterprise data lakehouse platform with integrated AI and machine learning. Build, train, and deploy AI models at scale with unified analytics, data engineering, and MLOps.",
    emoji: "📊",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.databricks.com/?via=aiwebtools",
    imageUrl: databricksHero,
    tags: ["Developer Tools", "data analytics", "machine learning", "enterprise", "MLOps", "data engineering", "lakehouse"],
    category: "Data & Analytics",
    rating: 4.8,
    totalVotes: 3456
  },
  {
    icon: Play,
    title: "Playground OpenAI",
    description: "OpenAI's interactive API testing environment. Experiment with GPT models, fine-tune parameters, test prompts, and prototype AI applications before deploying to production.",
    emoji: "🎮",
    color: "from-green-500 to-teal-600",
    directUrl: "https://platform.openai.com/playground?via=aiwebtools",
    imageUrl: playgroundOpenAIHero,
    tags: ["Developer Tools", "OpenAI", "API testing", "GPT", "prototyping", "prompt engineering", "AI sandbox"],
    category: "AI Chatbot",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "Adobe Content Credentials",
    description: "Content authenticity tool that adds tamper-evident metadata to digital content. Verify origin, edits, and AI involvement in images and media for transparency and trust.",
    emoji: "🛡️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://contentcredentials.org/?via=aiwebtools",
    imageUrl: adobeCredentialsHero,
    tags: ["Developer Tools", "content authenticity", "Adobe", "metadata", "verification", "AI detection", "trust"],
    category: "Security & Privacy",
    rating: 4.5,
    totalVotes: 789
  }
];
