import { Bot, Globe, Code, Wand2, Zap, Brain, Github, Rocket, Settings, Monitor, Server, HardDrive, Users, Settings2, Database as DatabaseIcon, Terminal as TerminalIcon, Cpu as CpuIcon, Layers, Smartphone, Video, Sparkles, Workflow, Link } from "lucide-react";
import { Tool } from "@/types/tools";

import claudeComputerUseHero from "@/assets/tools/claude-computer-use-hero.jpg";
import perplexityCometHero from "@/assets/tools/perplexity-comet-hero.jpg";
import surfNewHero from "@/assets/tools/surf-new-hero.jpg";
import lovableAiHero from "@/assets/tools/lovable-ai-hero.jpg";
import base44Hero from "@/assets/tools/base44-hero.jpg";
import replitAgentHero from "@/assets/tools/replit-agent-hero.jpg";
import githubCopilotAgentHero from "@/assets/tools/github-copilot-agent-hero.jpg";
import tabnineCodingHero from "@/assets/tools/tabnine-coding-hero.jpg";

export const aiAgents: Tool[] = [
  // ========================================
  // AI AGENT DIRECTORIES & DATABASES
  // ========================================
  {
    icon: DatabaseIcon,
    title: "AI Agent Store - Open Agent Directory",
    description: "Comprehensive open library and database of AI agents. Discover, explore, and compare hundreds of AI agents across categories including automation, coding, research, and more.",
    emoji: "📚",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aiagentstore.ai/ai-agents-directory?via=aiwebtools",
    imageUrl: "/src/assets/tools/ai-agent-store-hero.png",
    tags: ["AI Agent Directory", "agent database", "open library", "agent discovery", "AI Agent Store", "agent comparison", "agent catalog"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 3500
  },

  // ========================================
  // AUTOMATION AGENTS (Zapier, Make, n8n, etc.)
  // ========================================
  {
    icon: Zap,
    title: "Zapier AI Automation Agent",
    description: "The world's leading automation agent connecting 5,000+ apps. Create intelligent workflows that automatically move data between your apps without code. AI-powered automation for businesses.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://zapier.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/zapier-ai-hero.png",
    tags: ["Automation Agent", "workflow automation", "app integration", "no-code agent", "business automation", "AI automation", "Zapier", "integration agent"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 12567
  },
  {
    icon: Bot,
    title: "Make (Integromat) Automation Agent",
    description: "Visual automation agent for creating complex workflows. Build sophisticated automation scenarios connecting apps and services with advanced logic, loops, and data transformations.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.make.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/make-hero.png",
    tags: ["Automation Agent", "visual automation", "workflow builder", "integration agent", "advanced automation", "Make.com", "scenario builder"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 9456
  },
  {
    icon: Workflow,
    title: "n8n Open Source Automation Agent",
    description: "Free and open-source workflow automation agent. Self-host your own automation platform with 400+ integrations, custom code nodes, and enterprise-grade security.",
    emoji: "🔗",
    color: "from-green-500 to-purple-600",
    directUrl: "https://n8n.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/n8n-hero.png",
    tags: ["Automation Agent", "open source", "self-hosted", "workflow automation", "free automation", "n8n", "integration agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 7234
  },
  {
    icon: Link,
    title: "IFTTT Automation Agent",
    description: "Simple yet powerful automation agent with If This Then That logic. Connect smart devices, apps, and services with easy-to-create applets for home and business automation.",
    emoji: "🔗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://ifttt.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ifttt-hero.png",
    tags: ["Automation Agent", "IoT automation", "smart home", "applets", "conditional automation", "IFTTT", "simple automation"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 5987
  },
  {
    icon: Settings,
    title: "Microsoft Power Automate Agent",
    description: "Enterprise automation agent from Microsoft. Automate repetitive business processes across 500+ apps with AI capabilities, RPA bots, and deep Microsoft 365 integration.",
    emoji: "⚙️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://powerautomate.microsoft.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/power-automate-hero.png",
    tags: ["Automation Agent", "enterprise automation", "RPA", "Microsoft", "business process", "Power Platform", "workflow agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 6789
  },
  
  // ========================================
  // WEB TASKS AGENTS (Browser Control, Computer Use)
  // ========================================
  {
    icon: Bot,
    title: "ChatGPT Operator - OpenAI Web Agent",
    description: "AI agent by OpenAI autonomously performing web-based tasks, filling forms, booking travel, ordering groceries through its own browser with human-like browsing behavior.",
    emoji: "🕹️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://operator.chatgpt.com/",
    videoUrl: "https://www.youtube.com/watch?v=CSE77wAdDLg",
    imageUrl: "/src/assets/tools/chatgpt-operator-hero.png",
    tags: ["Web Tasks Agent", "OpenAI", "browser control", "autonomous browsing", "web automation", "ChatGPT Operator", "computer use"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 8567
  },
  {
    icon: Brain,
    title: "Claude Computer Use Agent",
    description: "Anthropic's groundbreaking computer use agent that can control your computer, navigate websites, fill forms, and complete complex multi-step tasks autonomously.",
    emoji: "🖥️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ODaHJzOyVCQ",
    tags: ["Web Tasks Agent", "computer use", "Anthropic", "autonomous browsing", "desktop control", "Claude", "task automation"],
    imageUrl: claudeComputerUseHero,
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 9654
  },
  {
    icon: Globe,
    title: "Perplexity Comet Web Agent",
    description: "Advanced AI web agent by Perplexity that autonomously browses the internet, conducts research, and performs complex web-based tasks with intelligent reasoning.",
    emoji: "☄️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://pplx.ai/kgmasterbic1853",
    videoUrl: "https://youtu.be/7ZsZ0DAbW-E?si=ej4X9bvRgzWyexBB",
    tags: ["Web Tasks Agent", "web browsing", "research agent", "autonomous search", "Perplexity", "Comet", "internet agent"],
    imageUrl: perplexityCometHero,
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 4890
  },
  {
    icon: Bot,
    title: "Manus Autonomous Web Agent",
    description: "Advanced AI-powered agent that controls your computer autonomously to complete digital tasks. Streamlines workflows with intuitive interface and intelligent task execution.",
    emoji: "🤖",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://manus.im/",
    videoUrl: "https://www.youtube.com/watch?v=K27diMbCsuw",
    imageUrl: "/src/assets/tools/manus-hero.png",
    tags: ["Web Tasks Agent", "autonomous agent", "computer control", "task automation", "digital workflows", "Manus", "productivity agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4456
  },
  {
    icon: Globe,
    title: "Surf.new Web Browsing Agent",
    description: "Platform by Steel.dev for testing web agents that interact with websites human-like, performing data scraping, investigations, and information gathering autonomously.",
    emoji: "🏄",
    color: "from-blue-500 to-green-600",
    directUrl: "https://surf.new",
    videoUrl: "https://www.youtube.com/watch?v=MieyLy_6N40",
    tags: ["Web Tasks Agent", "web scraping", "browser automation", "data extraction", "Steel.dev", "autonomous browsing"],
    imageUrl: surfNewHero,
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2890
  },
  
  // ========================================
  // CODING AGENTS (Lovable, Bolt, Cursor, etc.)
  // ========================================
  {
    icon: Rocket,
    title: "Lovable AI Coding Agent",
    description: "Revolutionary AI web building agent that transforms ideas into production-ready applications instantly. Uses advanced agentic AI to build, iterate, and deploy full-stack web apps through conversational interface.",
    emoji: "💜",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xDwR1_vrIg8",
    tags: ["Vibe Coding Agent", "Coding Agent", "vibe coding", "web builder", "full-stack agent", "no-code agent", "Lovable", "app development"],
    imageUrl: lovableAiHero,
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 7234
  },
  {
    icon: Zap,
    title: "Bolt.new AI Coding Agent",
    description: "AI-powered full-stack development agent that builds complete web applications from natural language prompts. Autonomous coding agent that handles frontend, backend, and deployment.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://bolt.new/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5zfOitaKfmM",
    imageUrl: "/src/assets/tools/bolt-new-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "full-stack agent", "vibe coding", "web development", "Bolt", "autonomous development", "deployment agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 6890
  },
  {
    icon: Code,
    title: "Base44 Vibe Coding Agent",
    description: "Vibe coding AI agent similar to Lovable - turns ideas into production-ready apps fast with agentic building and iterative edits. Full-stack development agent with intelligent code generation.",
    emoji: "🧠",
    color: "from-teal-500 to-emerald-600",
    directUrl: "https://base44.com/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fgRRdefBc4c",
    tags: ["Vibe Coding Agent", "Coding Agent", "vibe coding", "app builder", "full-stack agent", "Base44", "development agent", "code generation"],
    imageUrl: base44Hero,
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4456
  },
  {
    icon: Code,
    title: "Cursor AI IDE Agent",
    description: "Advanced AI-powered coding agent and IDE that enhances developer productivity with intelligent autocompletion, error detection, debugging, and AI-driven code suggestions.",
    emoji: "🎯",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://cursor.sh/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=LR04bU_yV5k",
    imageUrl: "/src/assets/tools/cursor-ai-hero.png",
    tags: ["Coding Agent", "IDE agent", "code editor", "autocompletion", "Cursor", "debugging agent", "developer productivity"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 8789
  },
  {
    icon: Code,
    title: "Replit Agent",
    description: "AI coding agent that builds complete applications from natural language. Autonomous development agent that writes code, debugs, installs packages, and deploys apps directly in browser.",
    emoji: "🚀",
    color: "from-orange-500 to-red-600",
    directUrl: "https://replit.com/agent?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4FxNXFOdt6w",
    tags: ["Coding Agent", "browser IDE", "autonomous coding", "Replit", "full-stack agent", "deployment agent", "app builder"],
    imageUrl: replitAgentHero,
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Github,
    title: "GitHub Copilot Coding Agent",
    description: "AI pair programming agent by GitHub and OpenAI. Intelligent coding agent that suggests code, writes functions, and helps debug in real-time across multiple programming languages.",
    emoji: "🐙",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://github.com/features/copilot?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=onVn-lnHZ9s",
    tags: ["Coding Agent", "pair programming", "code completion", "GitHub", "multi-language", "real-time coding", "Copilot"],
    imageUrl: githubCopilotAgentHero,
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 10900
  },
  {
    icon: Code,
    title: "Windsurf AI IDE Agent",
    description: "AI-powered coding agent and IDE that helps developers write, debug, and refactor code collaboratively. Features intelligent code completion, automated debugging, and seamless development workflows.",
    emoji: "🏄‍♂️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://windsurf.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/windsurf-ai-hero.png",
    tags: ["Coding Agent", "IDE agent", "code completion", "debugging", "Windsurf", "collaborative coding", "refactoring"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4200
  },
  {
    icon: Code,
    title: "OpenAI Codex Coding Agent",
    description: "OpenAI's powerful coding agent built on Codex technology. Assists developers with code generation, debugging, and programming tasks across multiple languages with advanced AI capabilities.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/codex/onboarding",
    imageUrl: "/src/assets/tools/openai-codex-hero.png",
    tags: ["Coding Agent", "OpenAI", "Codex", "code generation", "programming", "multi-language", "AI programming"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 6000
  },
  {
    icon: Wand2,
    title: "Devin AI Software Engineer",
    description: "World's first fully autonomous AI software engineer agent by Cognition AI. Complete development agent that plans, codes, debugs, and deploys entire applications independently.",
    emoji: "👨‍💻",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.cognition-labs.com/devin?via=aiwebtools",
    imageUrl: "/src/assets/tools/devin-ai-hero.png",
    tags: ["Coding Agent", "autonomous engineer", "Devin", "full-stack agent", "Cognition AI", "independent coding", "complete apps"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 6432
  },
  {
    icon: Code,
    title: "v0 by Vercel UI Agent",
    description: "AI agent for generating React UI components from text prompts. Autonomous design-to-code agent that creates production-ready components with Tailwind CSS and shadcn/ui.",
    emoji: "⚡",
    color: "from-black to-gray-600",
    directUrl: "https://v0.dev/?via=aiwebtools",
    imageUrl: "/src/assets/tools/v0-vercel-hero.png",
    tags: ["Coding Agent", "UI generation", "React", "Vercel", "component generator", "design-to-code", "frontend agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4890
  },
  {
    icon: Zap,
    title: "Amazon Q Developer Agent",
    description: "AWS's AI coding agent for building, debugging, and optimizing applications. Enterprise-grade development agent with deep AWS integration and security features.",
    emoji: "☁️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://aws.amazon.com/q/developer/?via=aiwebtools",
    imageUrl: "/src/assets/tools/amazon-q-developer-hero.png",
    tags: ["Coding Agent", "AWS", "enterprise", "debugging", "cloud integration", "Amazon Q", "security"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4210
  },
  {
    icon: Code,
    title: "Tabnine AI Coding Agent",
    description: "AI code completion agent that learns your coding patterns. Privacy-focused development agent with offline capabilities and team collaboration features.",
    emoji: "⌨️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.tabnine.com/?via=aiwebtools",
    imageUrl: tabnineCodingHero,
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Rocket,
    title: "Codeium Free Coding Agent",
    description: "Free AI coding agent with autocomplete, chat, and search capabilities. Fast development agent supporting 70+ programming languages with unlimited usage.",
    emoji: "🆓",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://codeium.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/codeium-hero.png",
    tags: ["Coding Agent", "free agent", "autocomplete", "Codeium", "multi-language", "unlimited usage", "fast coding"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5123
  },
  {
    icon: Code,
    title: "EMERGENT Agentic Coding AI",
    description: "Advanced agentic AI coding platform that enables autonomous code generation, debugging, and software development with intelligent decision-making capabilities.",
    emoji: "⚡",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://app.emergent.sh/register?ref=kgma581402",
    imageUrl: "/src/assets/tools/emergent-hero.png",
    tags: ["Coding Agent", "agentic AI", "autonomous development", "Emergent", "code generation", "software development"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Layers,
    title: "same.new Full Stack Agent",
    description: "Advanced AI agent specialized in full-stack application development. Automates the entire development process from frontend to backend, creating complete web applications.",
    emoji: "🏗️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://same.new/",
    imageUrl: "/src/assets/tools/same-new-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "full-stack", "web application", "same.new", "frontend", "backend", "complete apps"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3200
  },
  {
    icon: Rocket,
    title: "Launch.Today Vibe Coding Agent",
    description: "AI-powered vibe coding agent that turns ideas into production-ready web and mobile apps from natural language. Fast agentic building with iterative edits and seamless deployments.",
    emoji: "🚀",
    color: "from-indigo-500 to-cyan-600",
    directUrl: "https://app.launch.today/?via=aiwebtools",
    imageUrl: "/src/assets/tools/launch-today-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "vibe coding", "Launch.Today", "app builder", "full-stack", "rapid development"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3450
  },
  {
    icon: Rocket,
    title: "Rocket.New Vibe Coder",
    description: "AI-powered vibe coding agent that transforms ideas into production-ready applications. Features intelligent code generation, rapid prototyping, and seamless deployment.",
    emoji: "🚀",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.rocket.new/?via=aiwebtools",
    imageUrl: "/src/assets/tools/rocket-new-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "vibe coding", "Rocket.new", "rapid prototyping", "code generation", "deployment"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2500
  },
  {
    icon: Bot,
    title: "mgx.dev Team of Coding Agents",
    description: "A coordinated team of vibe coding agents that collaborate like employees to plan, build, and deploy your e‑commerce streams and app ideas end‑to‑end.",
    emoji: "🤖",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://mgx.dev/?via=aiwebtools",
    imageUrl: "/src/assets/tools/mgx-dev-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "Multi-Agent Framework", "team agents", "vibe coding", "mgx.dev", "e-commerce", "collaborative agents"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Smartphone,
    title: "RORK Mobile App Coding Agent",
    description: "AI agent created to bring mobile application designs to life with no coding experience necessary. Transform app ideas into functional mobile applications.",
    emoji: "📱",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://rork.com/?via=AIwebtools",
    imageUrl: "/src/assets/tools/rork-hero.png",
    tags: ["Vibe Coding Agent", "Coding Agent", "mobile app", "no-code", "RORK", "iOS", "Android", "app creation"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 2200
  },
  {
    icon: TerminalIcon,
    title: "Aider - AI Pair Programmer",
    description: "AI pair programming in your terminal. Aider is a command-line tool that lets you pair program with LLMs to edit code in your local git repo. Works with GPT-4, Claude, and local models.",
    emoji: "⌨️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://aider.chat/?via=aiwebtools",
    tags: ["Coding Agent", "terminal", "pair programming", "git", "Aider", "command-line", "open source", "local LLM"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 5200
  },
  {
    icon: Zap,
    title: "Supermaven - Fastest AI Code Completion",
    description: "The fastest code completion AI with 1 million token context window. Supermaven delivers blazing-fast inline suggestions with deep codebase understanding and minimal latency.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://supermaven.com/?via=aiwebtools",
    tags: ["Coding Agent", "code completion", "fast", "Supermaven", "inline suggestions", "large context", "autocomplete"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3800
  },
  {
    icon: Code,
    title: "Continue.dev - Open Source AI Coding",
    description: "Open-source AI code assistant that connects to any LLM. Customizable coding agent for VS Code and JetBrains with autocomplete, chat, and edit capabilities using your preferred AI models.",
    emoji: "🔄",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://continue.dev/?via=aiwebtools",
    tags: ["Coding Agent", "open source", "VS Code", "JetBrains", "Continue.dev", "customizable", "any LLM", "autocomplete"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4100
  },
  {
    icon: Brain,
    title: "Augment Code - Enterprise AI Coding",
    description: "AI coding agent built for enterprise teams. Augment understands your entire codebase, provides context-aware suggestions, and integrates with your development workflow securely.",
    emoji: "🔮",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://www.augmentcode.com/?via=aiwebtools",
    tags: ["Coding Agent", "enterprise", "Augment", "codebase understanding", "context-aware", "secure", "team collaboration"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2900
  },
  {
    icon: Code,
    title: "Zed AI Editor",
    description: "High-performance code editor with built-in AI assistant. Zed combines blazing-fast editing with AI-powered code generation, chat, and refactoring in a collaborative multiplayer environment.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://zed.dev/?via=aiwebtools",
    tags: ["Coding Agent", "code editor", "Zed", "multiplayer", "fast", "AI assistant", "collaborative coding"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3500
  },
  {
    icon: Settings2,
    title: "Qodo (CodiumAI) - AI Code Quality",
    description: "AI-powered code integrity agent that generates meaningful tests, reviews code, and improves code quality. Qodo analyzes your code to suggest tests that matter and catch edge cases.",
    emoji: "✅",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.qodo.ai/?via=aiwebtools",
    tags: ["Coding Agent", "testing", "Qodo", "CodiumAI", "code quality", "test generation", "code review", "edge cases"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3200
  },
  {
    icon: Layers,
    title: "Pieces for Developers",
    description: "AI-powered developer productivity tool that saves, enriches, and reuses code snippets. Intelligent code management with on-device AI, context-aware search, and workflow integration.",
    emoji: "🧩",
    color: "from-orange-500 to-red-600",
    directUrl: "https://pieces.app/?via=aiwebtools",
    tags: ["Coding Agent", "snippets", "Pieces", "productivity", "code management", "on-device AI", "workflow"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2800
  },
  {
    icon: Rocket,
    title: "Trae AI - ByteDance Code Assistant",
    description: "Advanced AI coding assistant by ByteDance with powerful code generation and understanding. Free IDE with built-in AI chat, inline suggestions, and multi-model support.",
    emoji: "🚀",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://trae.ai/?via=aiwebtools",
    tags: ["Coding Agent", "ByteDance", "Trae", "free IDE", "code generation", "multi-model", "AI chat"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2600
  },
  {
    icon: Code,
    title: "CodeGeeX - Open Source AI Coder",
    description: "Free open-source AI coding assistant supporting 100+ programming languages. Multilingual code generation, translation, explanation, and review powered by large language models.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://codegeex.cn/?via=aiwebtools",
    tags: ["Coding Agent", "open source", "CodeGeeX", "multilingual", "free", "code translation", "100+ languages"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2400
  },
  
  // ========================================
  // VOICE & CONVERSATIONAL AGENTS
  // ========================================
  {
    icon: Smartphone,
    title: "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator",
    description: "Advanced AI voice agents and conversational AI platform for businesses. Create intelligent phone agents that handle customer calls, appointments, and support with ultra-realistic human-like conversation.",
    emoji: "📞",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://try.elevenlabs.io/aiwebtools",
    tags: ["Voice Agent", "phone agent", "ElevenLabs", "conversational AI", "customer service", "call center", "voice AI"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 6321
  },
  {
    icon: Smartphone,
    title: "Millis AI Voice Agents Design Platform",
    description: "Build next-gen voice agents with 500ms latency. Effortlessly create advanced LLM-based voice applications with ultra-low latency — The Fastest on the Market.",
    emoji: "🎙️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.millis.ai/?via=aiwebtools",
    tags: ["Voice Agent", "low latency", "LLM voice", "voice applications", "Millis AI", "voice design", "conversational AI"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 2800
  },
  {
    icon: Brain,
    title: "Claude by Anthropic",
    description: "Advanced conversational AI agent by Anthropic with extended context window and superior reasoning. Multi-purpose AI agent for analysis, coding, writing, and complex problem-solving tasks.",
    emoji: "🧠",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    tags: ["Conversational Agent", "reasoning", "Anthropic", "Claude", "analysis", "writing", "problem-solving", "agent"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 9654
  },
  {
    icon: Sparkles,
    title: "Google Gemini Agent",
    description: "Google's most capable multimodal AI agent with advanced reasoning, coding, and creative capabilities. Versatile AI agent that handles text, images, video, and audio inputs.",
    emoji: "✨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    tags: ["Conversational Agent", "multimodal", "Google", "Gemini", "reasoning", "creative", "versatile AI", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 8543
  },
  {
    icon: Globe,
    title: "Perplexity AI Search Agent",
    description: "Advanced AI search and research agent that provides accurate, real-time answers with sources. Autonomous research agent that browses the web and delivers comprehensive insights.",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://perplexity.ai/?via=aiwebtools",
    tags: ["Research Agent", "search agent", "Perplexity", "real-time search", "web browsing", "knowledge agent", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 7678
  },
  
  // ========================================
  // MULTI-AGENT FRAMEWORKS
  // ========================================
  {
    icon: Users,
    title: "CrewAI Multi-Agent System",
    description: "Framework for orchestrating role-playing autonomous AI agents. Build complex multi-agent systems where specialized agents collaborate to accomplish sophisticated tasks.",
    emoji: "👥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.crewai.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/crewai-hero.png",
    tags: ["Multi-Agent Framework", "orchestration", "CrewAI", "collaborative AI", "autonomous agents", "agent framework", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3345
  },
  {
    icon: Brain,
    title: "SuperAGI Agent Framework",
    description: "Open-source autonomous AI agent framework for building, managing, and running useful agents. Infrastructure for deploying production-ready autonomous agents at scale.",
    emoji: "🦸",
    color: "from-red-500 to-orange-600",
    directUrl: "https://superagi.com/?via=aiwebtools",
    tags: ["Multi-Agent Framework", "open-source", "SuperAGI", "agent infrastructure", "production agents", "scalable agents", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3678
  },
  {
    icon: Bot,
    title: "Auto-GPT Autonomous Agent",
    description: "Autonomous AI agent that can develop and manage businesses, conduct research, and create content without human intervention. Self-improving AI that chains thoughts.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/Significant-Gravitas/Auto-GPT",
    tags: ["Autonomous Agent", "Auto-GPT", "business automation", "research", "content creation", "self-improving", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4200
  },
  {
    icon: Globe,
    title: "BabyAGI Task Agent",
    description: "Simplified AI agent for task management and execution. Breaks down large objectives into smaller tasks and executes them autonomously with intelligent planning.",
    emoji: "👶",
    color: "from-green-500 to-blue-600",
    directUrl: "https://babyagi.org/",
    tags: ["Autonomous Agent", "task management", "BabyAGI", "autonomous execution", "planning", "task breakdown", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3900
  },
  {
    icon: Zap,
    title: "AgentGPT Web Agent",
    description: "AI agent that can be deployed as a website to perform various tasks. Create and manage custom AI agents for specific purposes with no coding required.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://agentgpt.reworkd.ai/",
    tags: ["Autonomous Agent", "AgentGPT", "web deployment", "custom agents", "no-code", "task automation", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3700
  },
  {
    icon: Bot,
    title: "Microsoft JARVIS Agent",
    description: "AI assistant that helps developers build and manage AI-powered applications. Provides tools for creating, testing, and deploying AI agents at enterprise scale.",
    emoji: "🛡️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://github.com/microsoft/JARVIS",
    tags: ["Multi-Agent Framework", "Microsoft", "JARVIS", "developer tools", "enterprise", "testing", "agent"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 3500
  },
  
  // ========================================
  // GAME & SIMULATION AGENTS
  // ========================================
  {
    icon: Video,
    title: "Unity ML Agents - Game AI",
    description: "Open-source Unity package enabling games and simulations to serve as environments for training intelligent agents. Train agents using reinforcement learning and imitation learning.",
    emoji: "🎮",
    color: "from-green-500 to-teal-600",
    directUrl: "https://github.com/Unity-Technologies/ml-agents",
    tags: ["Game Agent", "Unity", "reinforcement learning", "ML Agents", "game AI", "simulations", "NPC agent", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 4500
  },
  
  // ========================================
  // CLOUD PLATFORM AGENTS
  // ========================================
  {
    icon: Bot,
    title: "Google Cloud AI Agents",
    description: "Enterprise AI agents deployed on Google Cloud infrastructure. Build, train, and deploy custom AI agents with Google's powerful ML platform and Vertex AI.",
    emoji: "☁️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://cloud.google.com/products/ai",
    tags: ["Cloud Agent", "Google Cloud", "Vertex AI", "enterprise", "ML platform", "deployment", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2950
  },
  {
    icon: Bot,
    title: "AWS AI Agents",
    description: "AI agents deployed on Amazon Web Services. Build intelligent agents with Amazon Bedrock, SageMaker, and AWS's comprehensive AI/ML services.",
    emoji: "☁️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://aws.amazon.com/machine-learning/",
    tags: ["Cloud Agent", "AWS", "Amazon Bedrock", "SageMaker", "enterprise", "ML services", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3020
  },
  {
    icon: Bot,
    title: "Azure AI Agents",
    description: "AI agents deployed on Microsoft Azure. Build and deploy intelligent agents with Azure OpenAI, Cognitive Services, and enterprise-grade ML infrastructure.",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://azure.microsoft.com/en-us/services/machine-learning/",
    tags: ["Cloud Agent", "Azure", "Microsoft", "Azure OpenAI", "enterprise", "cognitive services", "agent"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 2800
  },
  
  // ========================================
  // SPECIALIZED AGENTS
  // ========================================
  {
    icon: Bot,
    title: "Private LLM Agents",
    description: "Self-hosted AI agents for privacy-conscious organizations. Deploy and manage AI agents on your own infrastructure with full data control and security.",
    emoji: "🔒",
    color: "from-gray-500 to-gray-700",
    directUrl: "https://github.com/imaurer/privateGPT",
    tags: ["Privacy Agent", "self-hosted", "private", "data security", "on-premise", "enterprise"],
    category: "AI Agents",
    rating: 4.2,
    totalVotes: 1890
  },
  {
    icon: Zap,
    title: "Lindy AI Automation Agent",
    description: "AI automation platform creating intelligent agents to handle repetitive workflows across Gmail, Zoom, and Twilio without coding using natural language instructions.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.lindy.ai",
    tags: ["Automation Agent", "Lindy", "no-code", "workflow automation", "natural language", "email automation"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Bot,
    title: "RUNNER H AI Agent",
    description: "Advanced AI agent by H Company designed for autonomous task execution and intelligent workflow automation. Streamlines complex processes with cutting-edge AI capabilities.",
    emoji: "🏃‍♂️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.hcompany.ai/runner-h",
    tags: ["Autonomous Agent", "Runner H", "H Company", "task execution", "workflow automation"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3800
  },
  {
    icon: Bot,
    title: "Warmwind.Space Agent",
    description: "Advanced AI agent platform providing intelligent automation and task execution capabilities. Features sophisticated agent workflows for complex problem-solving and automated processes.",
    emoji: "🌪️",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://warmwind.space/",
    tags: ["Autonomous Agent", "Warmwind", "intelligent automation", "task execution", "problem-solving"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1800
  },
  {
    icon: Code,
    title: "Vitara AI Vibe Coding Agent",
    description: "AI-powered development platform that helps you design, build, and scale full-stack applications using vibe coding. Rapid prototyping with AI-assisted features for next-gen app development.",
    emoji: "🚀",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://vitara.ai/?via=aiwebtools",
    tags: ["Vibe Coding Agent", "Coding Agent", "app builder", "full-stack agent", "Vitara", "development agent", "rapid prototyping", "vibe coding"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Users,
    title: "Microsoft AutoGen Agent Framework",
    description: "Enterprise-grade multi-agent orchestration framework from Microsoft. Build teams of interoperating AI agents for complex workflows, automation, research, and sophisticated task handling at scale.",
    emoji: "🔧",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://microsoft.github.io/autogen/?via=aiwebtools",
    tags: ["Multi-Agent Framework", "Microsoft", "AutoGen", "orchestration", "enterprise", "collaborative agents", "workflow automation", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4567
  },
  
  // ========================================
  // PRODUCTIVITY & WORK AGENTS
  // ========================================
  {
    icon: Brain,
    title: "ClickUp Brain Work Agent",
    description: "AI work assistant and knowledge agent inside ClickUp that answers questions, writes, summarizes docs, and automates workflows across your tasks and projects.",
    emoji: "🧠",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://clickup.com/brain?via=aiwebtools",
    tags: ["Productivity Agent", "ClickUp", "work assistant", "project management", "docs", "automation"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 4800
  },
  {
    icon: DatabaseIcon,
    title: "Gibson AI Database Agent",
    description: "AI agent specializing in designing, building, and managing databases from natural language. Generate schemas, queries, and automations for your app data effortlessly.",
    emoji: "🗄️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.gibsonai.com/?via=aiwebtools",
    tags: ["Database Agent", "Gibson AI", "schema generation", "SQL", "data modeling", "automations"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 1980
  },
  {
    icon: Layers,
    title: "Thrive AI Project Manager Agent",
    description: "AI platform for project managers to build their own junior PM. Automates planning, standups, timelines, and stakeholder updates for efficient project management.",
    emoji: "📋",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://thriveai.pm/?via=aiwebtools",
    tags: ["Productivity Agent", "Thrive AI", "project management", "planning", "standups", "automation"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1860
  },
  {
    icon: Zap,
    title: "MACARON Productivity Agent",
    description: "Advanced productivity AI agent designed to streamline workflows, automate tasks, and enhance productivity. Intelligent platform for efficient task management and workflow optimization.",
    emoji: "🍪",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://macaron.im/en?via=aiwebtools",
    tags: ["Productivity Agent", "Macaron", "workflow automation", "task management", "workflow optimization"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3800
  },
  
  // ========================================
  // CREATIVE & MEDIA AGENTS
  // ========================================
  {
    icon: Wand2,
    title: "Fotor Image Editing Agent",
    description: "AI-powered image editing agent that automates photo enhancement, background removal, object editing, and creative design tasks. Streamlined photo editing with advanced AI.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://fotor.com/?via=aiwebtools",
    tags: ["Creative Agent", "Fotor", "image editing", "photo enhancement", "background removal", "design", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4200
  },
  {
    icon: Video,
    title: "Descript Video Editing Agent",
    description: "AI-powered video editing agent that automates video production workflows, transcription, voice cloning, and collaborative editing. Intelligent video content creation.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://descript.com/?via=aiwebtools",
    tags: ["Creative Agent", "Descript", "video editing", "transcription", "voice cloning", "video automation", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 4400
  },
  {
    icon: Video,
    title: "Hailuo AI Video Agent",
    description: "Advanced AI video agent platform for autonomous video creation, editing, and production workflows. Intelligent video generation with cutting-edge AI technology.",
    emoji: "🎥",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://hailuoai.video/agent/?via=aiwebtools",
    tags: ["Creative Agent", "Hailuo", "video creation", "video editing", "autonomous production", "video automation", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3100
  },
  
  // ========================================
  // SPIRITUAL & SPECIAL PURPOSE AGENTS
  // ========================================
  {
    icon: Bot,
    title: "GPTPastVoices - Resurrection GPT",
    description: "Poignant AI platform reconnecting with departed loved ones through personal stories and memories. AI technology for emotional healing, spiritual connection, and honoring those who have passed.",
    emoji: "💫",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    tags: ["grief support", "emotional healing", "memories", "connection", "afterlife", "Custom GPT"],
    category: "Spiritual & Philosophy AI Tools",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Bot,
    title: "God Mode GPT",
    description: "Powerful and versatile AI agent that can perform any task requested. Designed for comprehensive automation and complex problem-solving capabilities.",
    emoji: "👑",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://godmode.space/",
    tags: ["Autonomous Agent", "God Mode", "versatile", "task automation", "problem-solving", "comprehensive"],
    category: "AI Agents",
    rating: 4.3,
    totalVotes: 3100
  }
];

