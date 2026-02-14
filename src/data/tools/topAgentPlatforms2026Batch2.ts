
import { Tool } from "@/types/tools";
import { Bot, Workflow, Brain, Cpu, BarChart3 } from "lucide-react";
import wordwareHero from "@/assets/tools/wordware-ai-hero.jpg";
import composioHero from "@/assets/tools/composio-ai-hero.jpg";
import smythosHero from "@/assets/tools/smythos-ai-hero.jpg";
import mindpalHero from "@/assets/tools/mindpal-ai-hero.jpg";
import agentopsHero from "@/assets/tools/agentops-ai-hero.jpg";

export const topAgentPlatforms2026Batch2: Tool[] = [
  {
    icon: Workflow,
    title: "Wordware",
    description: "Web-hosted IDE for building AI agents with natural language. Turn plain English into AI workflows connecting 2000+ apps. Y Combinator-backed platform that looks like a document but works like code. Build personal automations or full AI products without traditional programming.",
    emoji: "📝",
    color: "from-orange-500 to-blue-700",
    directUrl: "https://www.wordware.ai/?via=aiwebtools",
    imageUrl: wordwareHero,
    tags: ["AI agents", "natural language IDE", "workflow builder", "no-code", "Y Combinator", "LLM orchestration", "AI Agents", "Automation Agent", "agent builder"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5234,
    tagline: "Write English, build AI agents — the document that thinks"
  },
  {
    icon: Cpu,
    title: "Composio",
    description: "The integration layer for AI agents. Connect your AI agents to 250+ tools like GitHub, Slack, Gmail, and databases with managed authentication and tooling. Works with LangChain, CrewAI, AutoGen, and OpenAI. Handles auth, permissions, and API complexity so agents can take real actions.",
    emoji: "🔌",
    color: "from-green-500 to-emerald-700",
    directUrl: "https://composio.dev/?via=aiwebtools",
    imageUrl: composioHero,
    tags: ["AI agents", "agent integrations", "tooling platform", "API connections", "managed auth", "LangChain", "CrewAI", "AI Agents", "Multi-Agent Framework", "Automation Agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4876,
    tagline: "Give your AI agents hands — 250+ tool integrations in minutes"
  },
  {
    icon: Brain,
    title: "SmythOS",
    description: "Enterprise AI agent operating system for building, deploying, and orchestrating autonomous agents at scale. Visual no-code builder with 350,000+ API integrations, brand-safe guardrails, and multi-agent coordination. Deploy agents as APIs, chatbots, webhooks, or scheduled workflows.",
    emoji: "🖥️",
    color: "from-blue-700 to-slate-600",
    directUrl: "https://smythos.com/?via=aiwebtools",
    imageUrl: smythosHero,
    tags: ["AI agents", "agent OS", "enterprise agents", "no-code", "multi-agent orchestration", "API integrations", "AI Agents", "Automation Agent", "Multi-Agent Framework"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3654,
    tagline: "The operating system for autonomous AI agents at enterprise scale"
  },
  {
    icon: Bot,
    title: "MindPal",
    description: "AI agent builder designed for business teams and professionals. Create multi-agent workflows, AI chatbots, and automated pipelines with drag-and-drop simplicity. Build agents trained on your company knowledge base for customer support, content creation, research, and internal operations.",
    emoji: "🧩",
    color: "from-purple-600 to-teal-500",
    directUrl: "https://mindpal.space/?via=aiwebtools",
    imageUrl: mindpalHero,
    tags: ["AI agents", "business agents", "multi-agent workflows", "no-code", "knowledge base", "team AI", "AI Agents", "Automation Agent", "Chatbot Agents"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4123,
    tagline: "Your team's AI workforce — agents trained on your business"
  },
  {
    icon: BarChart3,
    title: "AgentOps",
    description: "Observability and monitoring platform purpose-built for AI agents. Track agent sessions, replay conversations, monitor costs, debug failures, and measure performance with just two lines of code. Integrates with CrewAI, AutoGen, LangChain, and OpenAI Agents SDK.",
    emoji: "📊",
    color: "from-emerald-600 to-gray-800",
    directUrl: "https://www.agentops.ai/?via=aiwebtools",
    imageUrl: agentopsHero,
    tags: ["AI agents", "agent monitoring", "observability", "debugging", "agent analytics", "session replay", "AI Agents", "Multi-Agent Framework", "developer tools"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3421,
    tagline: "Mission control for AI agents — monitor, debug, optimize"
  }
];
