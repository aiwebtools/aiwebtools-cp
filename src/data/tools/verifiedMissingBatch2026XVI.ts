import { Tool } from "@/types/tools";
import { Bot, Boxes, BriefcaseBusiness, ChartNoAxesCombined, Code2, Database, Network, Workflow } from "lucide-react";

import hubspotAgentHubHero from "@/assets/tools/hubspot-agent-hub.jpg.asset.json";
import chatgptWorkHero from "@/assets/tools/chatgpt-work.jpg.asset.json";
import claudeManagedAgentsHero from "@/assets/tools/claude-managed-agents.jpg.asset.json";
import qwenWorkHero from "@/assets/tools/qwenwork.jpg.asset.json";
import anyAiAgentHero from "@/assets/tools/anyai-agent.jpg.asset.json";
import deepnoteAgentWorkspaceHero from "@/assets/tools/deepnote-agent-workspace.jpg.asset.json";
import dockerGordonHero from "@/assets/tools/docker-gordon.jpg.asset.json";
import asanaAiTeammatesHero from "@/assets/tools/asana-ai-teammates.jpg.asset.json";
import asanaDashHero from "@/assets/tools/asana-dash.jpg.asset.json";
import chatgptWorkspaceAgentsHero from "@/assets/tools/chatgpt-workspace-agents.jpg.asset.json";

// Batch XVI 2026 — ten real products verified against official product or
// company announcement pages and checked against the directory by exact title.
export const verifiedMissingBatch2026XVI: Tool[] = [
  {
    icon: Network, title: "HubSpot Agent Hub", emoji: "🟠", color: "from-orange-500 to-rose-600",
    description: "HubSpot Agent Hub is a shared command center for managing AI agents across marketing, sales, and service with coordinated business context and governance.",
    directUrl: "https://www.hubspot.com/products/artificial-intelligence/agent-hub?via=aiwebtools", imageUrl: hubspotAgentHubHero.url,
    tags: ["HubSpot Agent Hub", "HubSpot AI", "CRM agents", "marketing agent", "sales agent", "service agent", "agent management", "enterprise AI", "paid", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: BriefcaseBusiness, title: "ChatGPT Work", emoji: "✅", color: "from-emerald-500 to-slate-600",
    description: "ChatGPT Work is an OpenAI agent designed to carry ambitious projects across connected apps and files, stay with long-running tasks, and turn goals into finished work.",
    directUrl: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/?via=aiwebtools", imageUrl: chatgptWorkHero.url,
    tags: ["ChatGPT Work", "OpenAI agent", "work agent", "long-running agent", "connected apps", "document agent", "productivity AI", "paid", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Boxes, title: "Claude Managed Agents", emoji: "🧩", color: "from-orange-500 to-stone-700",
    description: "Claude Managed Agents is Anthropic's suite of composable APIs for building, deploying, and operating cloud-hosted agents at production scale.",
    directUrl: "https://claude.com/blog/claude-managed-agents?via=aiwebtools", imageUrl: claudeManagedAgentsHero.url,
    tags: ["Claude Managed Agents", "Anthropic", "Claude API", "cloud agents", "agent deployment", "composable agents", "developer platform", "paid", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Workflow, title: "QwenWork", emoji: "🔷", color: "from-blue-600 to-cyan-500",
    description: "QwenWork is Alibaba's all-in-one workplace AI agent platform for coordinating knowledge, productivity tasks, analysis, communication, and business workflows.",
    directUrl: "https://www.alibabacloud.com/blog/alibaba-launches-qwenwork-an-all-in-one-workplace-ai-agent-platform_603419?via=aiwebtools", imageUrl: qwenWorkHero.url,
    tags: ["QwenWork", "Alibaba Qwen", "workplace agent", "enterprise AI", "workflow agent", "office productivity", "Qwen AI", "AI Agents"],
    category: "AI Agents", rating: 4.5,
  },
  {
    icon: ChartNoAxesCombined, title: "AnyAI Agent", emoji: "📣", color: "from-red-600 to-emerald-500",
    description: "AnyAI Agent is AnyMind Group's enterprise agent for autonomous marketing and ecommerce operations, combining business data, workflows, and operational expertise.",
    directUrl: "https://anymindgroup.com/products/anyai/?via=aiwebtools", imageUrl: anyAiAgentHero.url,
    tags: ["AnyAI Agent", "AnyMind Group", "marketing agent", "ecommerce agent", "campaign automation", "business operations", "enterprise AI", "paid", "Marketing & Sales"],
    category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Database, title: "Deepnote Agent Workspace", emoji: "📊", color: "from-violet-600 to-amber-500",
    description: "Deepnote Agent Workspace gives data teams an AI-native environment where agents work with organizational schemas, metrics, notebooks, and business context.",
    directUrl: "https://deepnote.com/blog/agent-workspace?via=aiwebtools", imageUrl: deepnoteAgentWorkspaceHero.url,
    tags: ["Deepnote Agent Workspace", "Deepnote", "data agent", "AI notebook", "data analysis", "business intelligence", "collaborative analytics", "freemium", "Data & Analytics"],
    category: "Data & Analytics", rating: 4.6, isFree: true,
  },
  {
    icon: Code2, title: "Docker Gordon", emoji: "🐳", color: "from-blue-600 to-cyan-500",
    description: "Docker Gordon is an AI agent that understands Docker workflows, helps troubleshoot containers and builds, and proposes actions while keeping developers in control.",
    directUrl: "https://www.docker.com/products/gordon/?via=aiwebtools", imageUrl: dockerGordonHero.url,
    tags: ["Docker Gordon", "Docker AI", "container agent", "developer agent", "Docker troubleshooting", "DevOps AI", "coding assistant", "freemium", "Coding & Development"],
    category: "Coding & Development", rating: 4.6, isFree: true,
  },
  {
    icon: Network, title: "Asana AI Teammates", emoji: "🤝", color: "from-rose-500 to-amber-500",
    description: "Asana AI Teammates are purpose-built collaborative agents that work beside people on shared plans with organizational context, permissions, and governance.",
    directUrl: "https://asana.com/product/ai?via=aiwebtools", imageUrl: asanaAiTeammatesHero.url,
    tags: ["Asana AI Teammates", "Asana AI", "collaborative agents", "project management AI", "work management", "team agents", "enterprise productivity", "paid", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: BriefcaseBusiness, title: "Asana Dash", emoji: "🎯", color: "from-rose-500 to-violet-600",
    description: "Asana Dash is an AI chief of staff that understands individual goals, priorities, and work context to surface decisions and move important work forward.",
    directUrl: "https://asana.com/product/ai?via=aiwebtools", imageUrl: asanaDashHero.url,
    tags: ["Asana Dash", "AI chief of staff", "Asana AI", "priority assistant", "goal management", "work intelligence", "productivity agent", "paid", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Bot, title: "ChatGPT Workspace Agents", emoji: "🧠", color: "from-emerald-500 to-slate-700",
    description: "ChatGPT Workspace Agents let teams create shared Codex-powered agents for complex and long-running workflows within organizational permissions and controls.",
    directUrl: "https://openai.com/index/introducing-workspace-agents-in-chatgpt/?via=aiwebtools", imageUrl: chatgptWorkspaceAgentsHero.url,
    tags: ["ChatGPT Workspace Agents", "OpenAI workspace agents", "Codex agents", "team agents", "shared agents", "enterprise automation", "long-running workflows", "paid", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
];