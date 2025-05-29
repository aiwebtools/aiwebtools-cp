
import { Code, Terminal, Cpu, Wrench, Layers, Database, Globe, Settings } from "lucide-react";
import { Tool } from "@/types/tools";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Code,
    title: "GPT4o LONG",
    description: "OpenAI's experimental version of GPT-4o with maximum of 64K output tokens per request. Explore new use cases unlocked by longer completions for complex development tasks.",
    emoji: "📝",
    color: "from-green-400 to-blue-500",
    directUrl: "https://openai.com/gpt-4o-long-output/",
    tags: ["GPT-4o", "long output", "64K tokens", "experimental", "OpenAI"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Terminal,
    title: "Cursor AI",
    description: "Advanced code editor integrating AI directly into coding environment. Navigate, edit, and improve codebase with natural language commands and predictive text features. SOC 2 certified.",
    emoji: "🎯",
    color: "from-purple-400 to-indigo-500",
    directUrl: "https://www.cursor.com/",
    tags: ["code editor", "AI integration", "natural language", "predictive text", "privacy"],
    category: "Development Tools",
    rating: 4.9,
    totalVotes: 4200
  },
  {
    icon: Globe,
    title: "V0.dev",
    description: "AI tool by Vercel Labs that generates React code for user interfaces from text prompts. Integrates with Shadcn/UI and Tailwind CSS for fast prototyping and customization.",
    emoji: "⚛️",
    color: "from-cyan-400 to-blue-500",
    directUrl: "https://v0.dev/",
    tags: ["React", "UI generation", "Vercel", "Shadcn/UI", "Tailwind CSS"],
    category: "Development Tools",
    rating: 4.7,
    totalVotes: 3100
  },
  {
    icon: Layers,
    title: "Bolt.new",
    description: "Browser-based AI-powered development tool for building, editing, and deploying full-stack web applications without local setup. Supports Next.js, Node.js, and npm packages.",
    emoji: "⚡",
    color: "from-orange-400 to-red-500",
    directUrl: "https://bolt.new/?rid=iewkqu",
    tags: ["full-stack", "browser-based", "deployment", "Next.js", "no setup"],
    category: "Development Tools",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Code,
    title: "GPT Engineer",
    description: "Tool for building software products through chat-based interface. Outline requirements, specify features, and receive code outputs directly without extensive programming experience.",
    emoji: "🛠️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://gptengineer.app/",
    tags: ["chat-based development", "no-code", "software building", "requirements", "prototyping"],
    category: "Development Tools",
    rating: 4.5,
    totalVotes: 2450
  },
  {
    icon: Wrench,
    title: "FlowWise",
    description: "Open-source, low-code platform for building LLM applications easily. Designed for developers to create customized LLM orchestration workflows and AI agents.",
    emoji: "🌊",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://flowiseai.com/",
    tags: ["open-source", "low-code", "LLM workflows", "AI agents", "orchestration"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 2200
  },
  {
    icon: Cpu,
    title: "Qualcomm AI HUB",
    description: "Simplifies workflow for deploying AI models on Qualcomm devices. Tools for model conversion, optimization, and deployment supporting PyTorch and ONNX frameworks.",
    emoji: "🔧",
    color: "from-red-400 to-orange-500",
    directUrl: "https://aihub.qualcomm.com/",
    tags: ["Qualcomm", "model deployment", "PyTorch", "ONNX", "device optimization"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 1890
  },
  {
    icon: Database,
    title: "Compute.HyperSpace",
    description: "Powerful AI research platform enabling advanced, agent-driven task automation and optimization. Create multi-step AI agents for complex processes with iterative improvement.",
    emoji: "🌌",
    color: "from-indigo-400 to-purple-600",
    directUrl: "https://compute.hyper.space",
    tags: ["AI research", "agent automation", "task optimization", "multi-step", "iterative"],
    category: "AI Research Platforms",
    rating: 4.7,
    totalVotes: 2100
  },
  {
    icon: Settings,
    title: "Apify",
    description: "Cloud-based platform for building and running web scrapers, automating data extraction, and managing web workflows. Supports both developers and non-technical users.",
    emoji: "🕷️",
    color: "from-gray-400 to-blue-500",
    directUrl: "https://apify.com/",
    tags: ["web scraping", "data extraction", "automation", "cloud platform", "workflows"],
    category: "Data & Automation Tools",
    rating: 4.5,
    totalVotes: 2350
  },
  {
    icon: Code,
    title: "Databutton",
    description: "AI-powered platform for creating full-stack web applications by transforming ideas into functional apps. Generates React frontend and Python FastAPI backend components.",
    emoji: "🔲",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://databutton.com/",
    tags: ["full-stack", "React", "FastAPI", "Python", "idea to app"],
    category: "Development Tools",
    rating: 4.6,
    totalVotes: 1950
  },
  {
    icon: Wrench,
    title: "Pickaxe",
    description: "No-code platform for creating, sharing, and monetizing AI-powered applications. Train AI tools using prompts, documents, websites, and videos with customizable design options.",
    emoji: "⛏️",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://beta.pickaxeproject.com/?utm_campaign=AFFILIATE_OZQM2ZF",
    tags: ["no-code", "AI applications", "monetization", "custom training", "design"],
    category: "No-Code AI Platforms",
    rating: 4.4,
    totalVotes: 1780
  },
  {
    icon: Terminal,
    title: "Computer.TLDRAW",
    description: "Innovative platform providing infinite canvas for natural language computing. Create workflows connecting components that generate and transform data using multi-modal language models.",
    emoji: "💻",
    color: "from-cyan-400 to-indigo-500",
    directUrl: "https://computer.tldraw.com/",
    tags: ["natural language computing", "infinite canvas", "workflows", "data transformation", "multi-modal"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 1650
  },
  {
    icon: Code,
    title: "Autogen: Magnetic One",
    description: "Microsoft's AutoGen framework supporting sophisticated AI agent systems with multi-step planning and real-world data interaction. Features multimodal web surfer agent capabilities.",
    emoji: "🧲",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/microsoft/autogen/tree/main/python/packages/autogen-magentic-one",
    tags: ["Microsoft", "AI agents", "multi-step planning", "web interaction", "AutoGen"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 2890
  }
];
