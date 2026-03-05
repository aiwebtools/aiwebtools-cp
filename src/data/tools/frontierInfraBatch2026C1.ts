import { Tool } from "@/types/tools";
import { Cloud, Shield, Search, Code, Users, Brain, BarChart3, Cpu, Zap, Globe, Lightbulb, Monitor, Megaphone, Bot } from "lucide-react";

import awsBedrockHero from "@/assets/tools/aws-bedrock-agent-hero.jpg";
import trayAiHero from "@/assets/tools/tray-ai-hero.jpg";
import dynamics365Hero from "@/assets/tools/dynamics-365-copilot-hero.jpg";
import userjotHero from "@/assets/tools/userjot-hero.jpg";
import checkthatHero from "@/assets/tools/checkthat-ai-hero.jpg";
import perfectInterviewHero from "@/assets/tools/perfect-interview-hero.jpg";
import monteeHero from "@/assets/tools/montee-ai-hero.jpg";
import glinkyHero from "@/assets/tools/glinky-hero.jpg";
import perplexityCometHero from "@/assets/tools/perplexity-comet-hero.jpg";
import deepchecksHero from "@/assets/tools/deepchecks-hero.jpg";
import langsmithHero from "@/assets/tools/langsmith-hero.jpg";
import trulensHero from "@/assets/tools/trulens-hero.jpg";
import giskardHero from "@/assets/tools/giskard-hero.jpg";
import promptflowHero from "@/assets/tools/promptflow-hero.jpg";
import deepsourceHero from "@/assets/tools/deepsource-ai-hero.jpg";
import cerebrasHero from "@/assets/tools/cerebras-hero.jpg";
import modalHero from "@/assets/tools/modal-hero.jpg";
import runpodHero from "@/assets/tools/runpod-hero.jpg";
import nebiusHero from "@/assets/tools/nebius-hero.jpg";
import vastAiHero from "@/assets/tools/vast-ai-hero.jpg";

export const frontierInfraBatch2026C1: Tool[] = [
  {
    icon: Cloud, title: "AWS Bedrock Agent Core",
    description: "Amazon's native orchestration layer that allows AI agents to securely invoke Lambda functions, access private S3 data, and operate within the full AWS ecosystem with enterprise-grade security and compliance.",
    emoji: "☁️", color: "from-orange-500 to-orange-700",
    directUrl: "https://aws.amazon.com/bedrock/agents/?via=aiwebtools", imageUrl: awsBedrockHero,
    tags: ["AI Agents", "Developer Tools", "AWS", "cloud orchestration", "Lambda", "S3", "enterprise", "serverless"], category: "AI Agents", rating: 4.7,
  },
  {
    icon: Zap, title: "Tray.ai",
    description: "An AI-ready integration platform that uses a universal connector to transform static APIs into agent-callable tools. Build complex automation workflows connecting hundreds of enterprise apps.",
    emoji: "⚡", color: "from-blue-500 to-purple-600",
    directUrl: "https://tray.ai/?via=aiwebtools", imageUrl: trayAiHero,
    tags: ["AI Agents", "Productivity & Utilities", "integration platform", "API automation", "workflow", "enterprise connectors", "Automation Agent"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: BarChart3, title: "Dynamics 365 Copilot",
    description: "Microsoft's embedded AI agents for supply chain and ERP data, predicting inventory shortages before they happen. Autonomous insights across finance, operations, and customer engagement within the Microsoft ecosystem.",
    emoji: "📊", color: "from-blue-600 to-blue-800",
    directUrl: "https://dynamics.microsoft.com/?via=aiwebtools", imageUrl: dynamics365Hero,
    tags: ["AI Agents", "Business & Productivity", "Microsoft", "ERP", "supply chain", "inventory prediction", "enterprise"], category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Shield, title: "UserJot",
    description: "A governance tool for AI coding agents that provides IP indemnity and full audit logs for enterprise software teams. Ensures legal compliance and accountability when AI writes production code.",
    emoji: "📋", color: "from-teal-500 to-teal-700",
    directUrl: "https://userjot.com/?via=aiwebtools", imageUrl: userjotHero,
    tags: ["Security & Privacy", "Developer Tools", "governance", "IP indemnity", "audit logs", "compliance", "AI coding"], category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Search, title: "CheckThat.ai",
    description: "A visual tool that maps 'Architectural Differences' between AI agents to help security teams understand how an agent interacts with a system. Essential for agent security auditing and risk assessment.",
    emoji: "🔍", color: "from-indigo-500 to-indigo-700",
    directUrl: "https://checkthat.ai/?via=aiwebtools", imageUrl: checkthatHero,
    tags: ["Security & Privacy", "AI Agents", "architecture mapping", "security audit", "agent analysis", "risk assessment"], category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Users, title: "Perfect Interview AI",
    description: "A specialized tool for technical interview preparation using an AI agent to conduct mock coding interviews. Practice algorithms, system design, and behavioral questions with realistic AI-driven feedback.",
    emoji: "🎯", color: "from-blue-600 to-indigo-700",
    directUrl: "https://perfectinterview.ai/?via=aiwebtools", imageUrl: perfectInterviewHero,
    tags: ["Education & Learning", "Developer Tools", "interview prep", "coding interview", "mock interview", "career development"], category: "Education & Learning", rating: 4.5,
  },
  {
    icon: Code, title: "Montee AI",
    description: "An automation-first SaaS tool that allows developers to outsource routine bug fixing and documentation to background AI agents. Handles the tedious work so engineers can focus on building features.",
    emoji: "🔧", color: "from-green-500 to-green-700",
    directUrl: "https://montee.ai/?via=aiwebtools", imageUrl: monteeHero,
    tags: ["Developer Tools", "AI Agents", "bug fixing", "documentation", "automation", "developer productivity", "Coding Agent"], category: "Coding & Development", rating: 4.4,
  },
  {
    icon: Brain, title: "Glinky",
    description: "A meeting assistant that works without a visible bot, making it ideal for privacy-sensitive enterprise environments. Captures notes, action items, and insights without disrupting the meeting experience.",
    emoji: "👁️‍🗨️", color: "from-gray-600 to-gray-800",
    directUrl: "https://glinkco.com/?via=aiwebtools", imageUrl: glinkyHero,
    tags: ["Productivity & Utilities", "meeting assistant", "invisible bot", "privacy", "enterprise", "notes", "Meeting Agent"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Globe, title: "Perplexity Comet",
    description: "An agentic browser from Perplexity that automates multi-step research workflows directly within the search interface. Chains searches, synthesizes findings, and delivers comprehensive research reports autonomously.",
    emoji: "☄️", color: "from-blue-500 to-cyan-600",
    directUrl: "https://perplexity.ai/?via=aiwebtools", imageUrl: perplexityCometHero,
    tags: ["AI Agents", "Research & Academic", "agentic browser", "research automation", "web search", "synthesis", "Research Agent"], category: "Research & Academic", rating: 4.7,
  },
  {
    icon: BarChart3, title: "Deepchecks",
    description: "The most comprehensive system-level evaluation platform for catching behavioral regressions in AI agents before they hit production. Monitors model quality, data integrity, and performance drift continuously.",
    emoji: "✅", color: "from-blue-500 to-blue-700",
    directUrl: "https://deepchecks.com/?via=aiwebtools", imageUrl: deepchecksHero,
    tags: ["AI Agents", "Developer Tools", "evaluation", "testing", "regression detection", "model quality", "observability"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Search, title: "LangSmith",
    description: "Provides execution-level tracing by LangChain, allowing developers to see exactly how an agent used a tool or where its reasoning looped. Essential observability for debugging and optimizing agent behavior.",
    emoji: "🔬", color: "from-green-600 to-green-800",
    directUrl: "https://smith.langchain.com/?via=aiwebtools", imageUrl: langsmithHero,
    tags: ["AI Agents", "Developer Tools", "LangChain", "tracing", "observability", "debugging", "agent optimization"], category: "AI Agents", rating: 4.7,
  },
  {
    icon: Shield, title: "TruLens",
    description: "Uses 'Honesty, Helpfulness, and Harmlessness' (the RAG Triad) to provide automated scores for agent groundedness. Evaluate and monitor RAG pipeline quality with scientific rigor.",
    emoji: "🔰", color: "from-teal-500 to-blue-600",
    directUrl: "https://trulens.org/?via=aiwebtools", imageUrl: trulensHero,
    tags: ["AI Agents", "Developer Tools", "RAG evaluation", "groundedness", "trust scoring", "quality assurance"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Shield, title: "Giskard",
    description: "An open-source testing framework that automatically scans AI agents for adversarial risks and hidden biases. Detect vulnerabilities before deployment with comprehensive red-teaming automation.",
    emoji: "🛡️", color: "from-purple-500 to-pink-600",
    directUrl: "https://giskard.ai/?via=aiwebtools", imageUrl: giskardHero,
    tags: ["AI Agents", "Security & Privacy", "open-source", "bias testing", "adversarial", "red-teaming", "AI safety"], category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Cpu, title: "PromptFlow",
    description: "Microsoft's development tool that streamlines the iterative cycle of building, testing, and deploying high-quality agentic workflows. Visual prompt engineering pipeline with built-in evaluation.",
    emoji: "🔄", color: "from-blue-600 to-blue-800",
    directUrl: "https://microsoft.github.io/promptflow/?via=aiwebtools", imageUrl: promptflowHero,
    tags: ["Developer Tools", "AI Agents", "Microsoft", "prompt engineering", "workflow", "testing", "deployment"], category: "Coding & Development", rating: 4.5,
  },
  {
    icon: Code, title: "DeepSource AI",
    description: "An agent for code health that autonomously fixes security issues and style violations in your agent's source code. Continuous code quality monitoring with auto-fix capabilities.",
    emoji: "🧹", color: "from-red-500 to-red-700",
    directUrl: "https://deepsource.io/?via=aiwebtools", imageUrl: deepsourceHero,
    tags: ["Developer Tools", "Security & Privacy", "code quality", "auto-fix", "security scanning", "style violations", "Coding Agent"], category: "Coding & Development", rating: 4.5,
  },
  {
    icon: Cpu, title: "Cerebras",
    description: "A massive 'Wafer-Scale' inference engine that allows AI agents to perform inference with zero latency, ideal for real-time voice agents and high-throughput reasoning tasks requiring instant responses.",
    emoji: "🧠", color: "from-orange-500 to-red-600",
    directUrl: "https://cerebras.ai/?via=aiwebtools", imageUrl: cerebrasHero,
    tags: ["AI Agents", "Developer Tools", "wafer-scale", "inference", "zero latency", "hardware", "high-performance"], category: "AI Agents", rating: 4.7,
  },
  {
    icon: Cloud, title: "Modal",
    description: "The preferred infrastructure for serverless agents, allowing developers to run large-scale agentic functions without managing a single server. Auto-scaling compute with pay-per-use pricing.",
    emoji: "☁️", color: "from-purple-500 to-blue-600",
    directUrl: "https://modal.com/?via=aiwebtools", imageUrl: modalHero,
    tags: ["Developer Tools", "AI Agents", "serverless", "cloud compute", "auto-scaling", "infrastructure", "GPU cloud"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Cpu, title: "RunPod",
    description: "A globally distributed GPU cloud that offers agent-ready pods for deploying local models like Llama 3 or DeepSeek. On-demand and spot GPU instances for ML training and inference workloads.",
    emoji: "🖥️", color: "from-green-600 to-green-800",
    directUrl: "https://runpod.io/?via=aiwebtools", imageUrl: runpodHero,
    tags: ["Developer Tools", "AI Agents", "GPU cloud", "model hosting", "inference", "training", "Llama", "DeepSeek"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Globe, title: "Nebius",
    description: "A specialized AI cloud focused on high-performance training and hosting for the next generation of autonomous European agents. Full-stack GPU infrastructure with competitive pricing.",
    emoji: "🇪🇺", color: "from-blue-600 to-indigo-700",
    directUrl: "https://nebius.ai/?via=aiwebtools", imageUrl: nebiusHero,
    tags: ["Developer Tools", "AI Agents", "European AI", "GPU cloud", "training", "hosting", "infrastructure"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: BarChart3, title: "Vast.ai",
    description: "A market-driven GPU rental platform that lets you host agents on consumer-grade hardware for the lowest possible cost. Bid on GPU compute time with transparent pricing and global availability.",
    emoji: "💰", color: "from-blue-500 to-blue-700",
    directUrl: "https://vast.ai/?via=aiwebtools", imageUrl: vastAiHero,
    tags: ["Developer Tools", "AI Agents", "GPU rental", "cost optimization", "consumer hardware", "marketplace", "compute"], category: "AI Agents", rating: 4.5,
  },
];
