
import { Tool } from "@/types/tools";
import { Bot, Globe, Shield, Code, Zap, Brain, Cpu, Layers, Terminal, Users, Search, MessageSquare, Settings2, Workflow, Monitor } from "lucide-react";

import salesforceAgentforceHero from "@/assets/tools/salesforce-agentforce-hero.jpg";
import vertexAiHero from "@/assets/tools/vertex-ai-agent-builder-hero.jpg";
import emaAiHero from "@/assets/tools/ema-ai-hero.jpg";
import decagonAiHero from "@/assets/tools/decagon-ai-hero.jpg";
import sierraAiHero from "@/assets/tools/sierra-ai-hero.jpg";
import zapierCentralHero from "@/assets/tools/zapier-central-hero.jpg";
import servicenowHero from "@/assets/tools/servicenow-virtual-agent-hero.jpg";
import oracleAiHero from "@/assets/tools/oracle-ai-agents-hero.jpg";
import claudeCodeHero from "@/assets/tools/claude-code-hero.jpg";
import roocodeHero from "@/assets/tools/roocode-hero.jpg";
import gojiberryHero from "@/assets/tools/gojiberry-hero.jpg";
import abnormalAiHero from "@/assets/tools/abnormal-ai-hero.jpg";
import torqSocratesHero from "@/assets/tools/torq-socrates-hero.jpg";
import rampAiHero from "@/assets/tools/ramp-ai-hero.jpg";
import intercomFinHero from "@/assets/tools/intercom-fin-hero.jpg";
import sullyAiHero from "@/assets/tools/sully-ai-hero.jpg";
import nullclawHero from "@/assets/tools/nullclaw-hero.jpg";
import copawHero from "@/assets/tools/copaw-hero.jpg";
import groqHero from "@/assets/tools/groq-hero.jpg";
import vellumAiHero from "@/assets/tools/vellum-ai-hero.jpg";
import lobechatHero from "@/assets/tools/lobechat-hero.jpg";
import fabricAiHero from "@/assets/tools/fabric-ai-hero.jpg";
import stackAiHero from "@/assets/tools/stack-ai-hero.jpg";
import retoolAiHero from "@/assets/tools/retool-ai-hero.jpg";
import vocaAiHero from "@/assets/tools/voca-ai-hero.jpg";
import mcpHero from "@/assets/tools/mcp-hero.jpg";

export const enterpriseAgents2026: Tool[] = [
  // ========================================
  // ENTERPRISE & OPERATIONAL AI EMPLOYEES
  // ========================================
  {
    icon: Globe,
    title: "Salesforce Agentforce",
    description: "Salesforce's autonomous AI agent platform powered by the Atlas Reasoning Engine. Deploys intelligent agents that execute actions directly on live CRM data—automating sales, service, marketing, and commerce workflows with enterprise-grade trust and compliance built in.",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-700",
    directUrl: "https://www.salesforce.com/agentforce/?via=aiwebtools",
    imageUrl: salesforceAgentforceHero,
    tags: ["AI Agents", "Automation Agent", "CRM", "Salesforce", "enterprise", "sales automation", "customer service", "autonomous agent", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 6200,
    tagline: "Autonomous AI agents living inside your Salesforce CRM"
  },
  {
    icon: Cpu,
    title: "Vertex AI Agent Builder",
    description: "Google Cloud's enterprise agent development platform. Build, deploy, and manage AI agents with deep BigQuery integration, managed RAG pipelines, and Gemini model access. Features grounding with Google Search, enterprise data connectors, and high-compliance governance for regulated industries.",
    emoji: "🔷",
    color: "from-blue-600 to-green-500",
    directUrl: "https://cloud.google.com/products/agent-builder",
    imageUrl: vertexAiHero,
    tags: ["AI Agents", "Multi-Agent Framework", "Google Cloud", "enterprise", "RAG", "BigQuery", "Gemini", "agent builder", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5400,
    tagline: "Google's enterprise answer to building production AI agents"
  },
  {
    icon: Users,
    title: "Ema - Universal AI Employee",
    description: "A Universal AI Employee platform that builds goal-oriented agents capable of owning entire workflows across 200+ SaaS applications. Ema's Generative Workflow Engine™ breaks complex tasks into specialized sub-agents that collaborate to complete multi-step business processes autonomously.",
    emoji: "👩‍💼",
    color: "from-purple-500 to-indigo-700",
    directUrl: "https://www.ema.co/?via=aiwebtools",
    imageUrl: emaAiHero,
    tags: ["AI Agents", "Automation Agent", "enterprise", "AI employee", "workflow automation", "SaaS integration", "autonomous agent", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2800,
    tagline: "Your Universal AI Employee that owns entire workflows"
  },
  {
    icon: MessageSquare,
    title: "Decagon - AI Customer Concierge",
    description: "Enterprise AI customer support agent that uses a proprietary data flywheel to resolve complex support issues with brand-consistent reasoning. Learns from every interaction to continuously improve resolution quality, integrates with existing support stacks, and delivers human-like customer experiences.",
    emoji: "💎",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.decagon.ai/?via=aiwebtools",
    imageUrl: decagonAiHero,
    tags: ["AI Agents", "Automation Agent", "customer support", "enterprise", "data flywheel", "conversational AI", "support agent", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2100,
    tagline: "AI concierge that learns from every customer interaction"
  },
  {
    icon: Bot,
    title: "Sierra - Agent OS",
    description: "Co-founded by former Salesforce CEO Bret Taylor, Sierra builds an Agent OS for premium consumer brands to deliver human-like AI customer experiences. Trusted by WeightWatchers, SiriusXM, and Sonos for conversational AI that handles complex brand interactions with empathy and intelligence.",
    emoji: "🏔️",
    color: "from-slate-600 to-blue-800",
    directUrl: "https://www.sierra.ai/?via=aiwebtools",
    imageUrl: sierraAiHero,
    tags: ["AI Agents", "Automation Agent", "customer experience", "consumer brands", "conversational AI", "Agent OS", "enterprise", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3600,
    tagline: "Bret Taylor's Agent OS for premium brand experiences"
  },
  {
    icon: Zap,
    title: "Zapier Central - AI Agent Hub",
    description: "Zapier's AI agent platform that lets you teach agents how to work across 7,000+ apps using plain English. Create autonomous AI bots that monitor triggers, take actions, and complete multi-step workflows without coding. The easiest way to deploy AI agents across your entire tech stack.",
    emoji: "⚡",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://zapier.com/central/?via=aiwebtools",
    imageUrl: zapierCentralHero,
    tags: ["AI Agents", "Automation Agent", "Zapier", "no-code", "workflow automation", "app integration", "autonomous agent", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4800,
    tagline: "Teach AI agents to work across 7,000+ apps in plain English"
  },
  {
    icon: Settings2,
    title: "ServiceNow Virtual Agent",
    description: "Enterprise IT Service Management AI agent built into the Now Platform. Automates ticket resolution, employee self-service, and IT workflows with pre-built conversation flows and generative AI capabilities. Resolves common IT issues instantly without human intervention.",
    emoji: "🔧",
    color: "from-green-600 to-emerald-800",
    directUrl: "https://www.servicenow.com/products/virtual-agent.html",
    imageUrl: servicenowHero,
    tags: ["AI Agents", "Automation Agent", "ITSM", "enterprise", "IT automation", "ticket resolution", "employee self-service", "ServiceNow", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 4200,
    tagline: "AI agents that resolve IT tickets before you even submit them"
  },
  {
    icon: Shield,
    title: "Oracle AI Agents",
    description: "High-compliance autonomous AI agents integrated directly into Oracle Fusion Cloud ERP, HCM, and SCM. Automates financial auditing, procurement approvals, supply chain optimization, and HR workflows with enterprise-grade security and regulatory compliance built in.",
    emoji: "🔴",
    color: "from-red-600 to-red-800",
    directUrl: "https://www.oracle.com/artificial-intelligence/ai-agents/",
    imageUrl: oracleAiHero,
    tags: ["AI Agents", "Automation Agent", "Oracle", "ERP", "enterprise", "financial auditing", "compliance", "supply chain", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3800,
    tagline: "Autonomous AI agents inside Oracle ERP for financial auditing"
  },

  // ========================================
  // AI CODING & ENGINEERING AGENTS
  // ========================================
  {
    icon: Terminal,
    title: "Claude Code",
    description: "Anthropic's terminal-based agentic coding tool. Claude Code understands your entire codebase, executes shell commands, edits files, and manages git workflows directly from the command line. Known for superior reasoning on complex codebases and the ability to handle massive local repositories with Constitutional AI safety.",
    emoji: "🖥️",
    color: "from-amber-600 to-orange-800",
    directUrl: "https://www.anthropic.com/claude-code/?via=aiwebtools",
    imageUrl: claudeCodeHero,
    tags: ["Coding Agent", "Anthropic", "Claude", "terminal", "command-line", "codebase understanding", "agentic coding", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 7200,
    tagline: "Anthropic's terminal agent that truly understands your codebase"
  },
  {
    icon: Code,
    title: "RooCode - VS Code AI Agent",
    description: "Reliability-focused AI coding agent for VS Code that specializes in safe, multi-file refactoring for large-scale projects. Features intelligent code analysis, context-aware suggestions, and automated testing to ensure refactoring doesn't break existing functionality. Built for enterprise development teams.",
    emoji: "🦘",
    color: "from-teal-500 to-cyan-700",
    directUrl: "https://roocode.com/?via=aiwebtools",
    imageUrl: roocodeHero,
    tags: ["Coding Agent", "VS Code", "refactoring", "code safety", "multi-file editing", "enterprise", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 3200,
    tagline: "Safe multi-file refactoring agent for large codebases"
  },

  // ========================================
  // SPECIALIZED INDUSTRY & SALES AGENTS
  // ========================================
  {
    icon: Search,
    title: "Gojiberry - LinkedIn Sales Agent",
    description: "Specialized AI sales agent focused on LinkedIn outbound prospecting. Monitors role changes, job transitions, and intent signals on LinkedIn to trigger hyper-personalized outreach at the perfect moment. Automates the entire SDR workflow from prospect discovery to meeting booking.",
    emoji: "🫐",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.gojiberry.ai/?via=aiwebtools",
    imageUrl: gojiberryHero,
    tags: ["AI Agents", "Automation Agent", "sales", "LinkedIn", "outbound", "prospecting", "lead generation", "SDR automation", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1800,
    tagline: "AI sales agent that stalks LinkedIn signals so you don't have to"
  },
  {
    icon: Shield,
    title: "Abnormal AI - Behavioral Cybersecurity",
    description: "AI-powered cybersecurity platform that uses behavioral AI to stop phishing, social engineering, and email-based attacks. Analyzes communication patterns across your organization to detect anomalies that traditional security tools miss. Protects against BEC, account takeover, and supply chain compromise.",
    emoji: "🛡️",
    color: "from-blue-700 to-purple-800",
    directUrl: "https://abnormal.ai/?via=aiwebtools",
    imageUrl: abnormalAiHero,
    tags: ["AI Agents", "cybersecurity", "behavioral AI", "phishing detection", "email security", "threat detection", "enterprise security", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 4500,
    tagline: "Behavioral AI that catches phishing attacks humans can't see"
  },
  {
    icon: Shield,
    title: "Torq Socrates - AI SOC Analyst",
    description: "Autonomous AI Security Operations Center analyst capable of independent threat research, investigation, and incident remediation. Torq Socrates reasons through complex security incidents, correlates alerts across tools, and executes response playbooks without human intervention.",
    emoji: "🔍",
    color: "from-indigo-600 to-blue-800",
    directUrl: "https://torq.io/socrates/?via=aiwebtools",
    imageUrl: torqSocratesHero,
    tags: ["AI Agents", "cybersecurity", "SOC", "threat detection", "incident response", "security automation", "autonomous analyst", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2400,
    tagline: "Autonomous SOC analyst that investigates threats while you sleep"
  },
  {
    icon: Zap,
    title: "Ramp AI - Finance Agent",
    description: "Autonomous corporate finance agent that manages company spending, flags duplicate receipts, categorizes expenses, and optimizes accounting workflows. Ramp's AI automates expense management, bill payments, and financial reporting to save companies time and money on back-office operations.",
    emoji: "💰",
    color: "from-green-500 to-emerald-700",
    directUrl: "https://ramp.com/?via=aiwebtools",
    imageUrl: rampAiHero,
    tags: ["AI Agents", "Automation Agent", "finance", "expense management", "corporate finance", "accounting", "spend management", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5100,
    tagline: "AI finance agent that saves companies millions on expenses"
  },
  {
    icon: MessageSquare,
    title: "Intercom Fin - AI Customer Agent",
    description: "Intercom's AI-first customer service agent that resolves up to 86% of support tickets instantly. Fin draws from your entire knowledge base, past conversations, and help center to provide accurate, conversational answers. Features human handoff, multilingual support, and real-time performance analytics.",
    emoji: "💬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.intercom.com/fin/?via=aiwebtools",
    imageUrl: intercomFinHero,
    tags: ["AI Agents", "Automation Agent", "customer support", "Intercom", "chatbot", "knowledge base", "ticket resolution", "conversational AI", "agent"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 5800,
    tagline: "Resolves 86% of support tickets before a human even sees them"
  },
  {
    icon: Users,
    title: "Sully.ai - AI Medical Team",
    description: "HIPAA-compliant AI medical team platform that coordinates modular AI agents—Scribe, Receptionist, Triage Nurse, and Clinical Assistant—into one unified healthcare workflow. Automates clinical documentation, patient intake, appointment scheduling, and triage assessment for healthcare providers.",
    emoji: "🏥",
    color: "from-cyan-500 to-blue-700",
    directUrl: "https://www.sully.ai/?via=aiwebtools",
    imageUrl: sullyAiHero,
    tags: ["AI Agents", "healthcare", "medical AI", "HIPAA", "clinical documentation", "patient intake", "triage", "healthcare automation", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2900,
    tagline: "A coordinated AI medical team in one HIPAA-compliant platform"
  },

  // ========================================
  // AGENT INFRASTRUCTURE & FRAMEWORKS
  // ========================================
  {
    icon: Cpu,
    title: "NullClaw - Ultra-Lightweight Agent Framework",
    description: "An ultra-lightweight, open-source AI agent framework written in Zig, designed to run on hardware as small as $5 devices with only 1MB of RAM. NullClaw enables edge AI deployment where traditional frameworks can't reach, making autonomous agents accessible on embedded systems and IoT devices.",
    emoji: "🔩",
    color: "from-gray-600 to-zinc-800",
    directUrl: "https://github.com/nullclaw/nullclaw/?via=aiwebtools",
    imageUrl: nullclawHero,
    tags: ["AI Agents", "Multi-Agent Framework", "open source", "Zig", "edge AI", "lightweight", "embedded", "IoT", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 1500,
    tagline: "AI agents running on $5 hardware with just 1MB of RAM"
  },
  {
    icon: Monitor,
    title: "Alibaba CoPaw - AI Workstation",
    description: "Personal AI workstation by Alibaba's AgentScope team. CoPaw provides persistent memory, multi-channel control, and a unified developer workspace for building and managing AI agents. Features long-term context retention and cross-session agent collaboration capabilities.",
    emoji: "🐾",
    color: "from-orange-500 to-red-600",
    directUrl: "https://copaw.agentscope.io/?via=aiwebtools",
    imageUrl: copawHero,
    tags: ["AI Agents", "Multi-Agent Framework", "Alibaba", "developer workspace", "persistent memory", "agent management", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2200,
    tagline: "Alibaba's AI workstation with persistent agent memory"
  },
  {
    icon: Layers,
    title: "Stack AI - Enterprise RAG Platform",
    description: "No-code platform specifically designed for deploying enterprise-grade RAG (Retrieval-Augmented Generation) agents. Build AI agents that connect to your company's documents, databases, and knowledge bases without writing code. Features SOC 2 compliance, HIPAA readiness, and enterprise security.",
    emoji: "📚",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.stack-ai.com/?via=aiwebtools",
    imageUrl: stackAiHero,
    tags: ["AI Agents", "Automation Agent", "RAG", "no-code", "enterprise", "knowledge base", "document AI", "SOC 2", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 3100,
    tagline: "No-code enterprise RAG agents with SOC 2 compliance"
  },
  {
    icon: Settings2,
    title: "Retool AI - Internal Tool Agent Builder",
    description: "Drag-and-drop AI agents directly into custom internal business dashboards. Retool AI lets developers build AI-powered internal tools that combine traditional UI components with LLM capabilities, vector search, and agent workflows. Connect to any database or API for intelligent business applications.",
    emoji: "🔧",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://retool.com/ai/?via=aiwebtools",
    imageUrl: retoolAiHero,
    tags: ["AI Agents", "Automation Agent", "internal tools", "drag-and-drop", "business dashboards", "developer tools", "low-code", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4100,
    tagline: "Drag-and-drop AI agents into your internal business tools"
  },
  {
    icon: Workflow,
    title: "Model Context Protocol (MCP)",
    description: "An open standard created by Anthropic for connecting AI models to external data sources and tools without custom integration code. MCP provides a universal protocol for AI agents to interact with APIs, databases, file systems, and developer tools—becoming the USB-C of AI integrations.",
    emoji: "🔌",
    color: "from-violet-500 to-purple-700",
    directUrl: "https://modelcontextprotocol.io/?via=aiwebtools",
    imageUrl: mcpHero,
    tags: ["AI Agents", "Multi-Agent Framework", "open standard", "Anthropic", "protocol", "API integration", "developer tools", "interoperability", "agent"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 6800,
    tagline: "The USB-C of AI — one protocol to connect agents to everything"
  },

  // ========================================
  // MODELS, INFERENCE & MONITORING
  // ========================================
  {
    icon: Zap,
    title: "Groq - Lightning-Fast AI Inference",
    description: "Hardware-based AI inference engine that delivers responses at 500+ tokens per second—the fastest in the industry. Groq's custom LPU (Language Processing Unit) chips enable human-speed AI interactions, making it the preferred infrastructure for latency-sensitive agent applications and real-time AI systems.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://groq.com/?via=aiwebtools",
    imageUrl: groqHero,
    tags: ["AI Inference Platforms", "inference engine", "LPU", "hardware", "fast inference", "real-time AI", "developer tools", "performance"],
    category: "AI Inference Platforms",
    rating: 4.8,
    totalVotes: 7500,
    tagline: "500+ tokens per second — the fastest AI inference on Earth"
  },
  {
    icon: Brain,
    title: "Vellum AI - Agent Testing & Monitoring",
    description: "Platform for teams to test, version, evaluate, and monitor their AI agents in production. Vellum provides prompt engineering tools, A/B testing for LLM outputs, evaluation frameworks, and real-time monitoring dashboards to ensure AI agents remain accurate, reliable, and cost-effective at scale.",
    emoji: "📊",
    color: "from-purple-500 to-violet-700",
    directUrl: "https://www.vellum.ai/?via=aiwebtools",
    imageUrl: vellumAiHero,
    tags: ["AI Agents", "monitoring", "testing", "evaluation", "prompt engineering", "LLM ops", "production AI", "developer tools", "agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 2800,
    tagline: "Test, version, and monitor AI agents so they never go rogue"
  },

  // ========================================
  // PRODUCTIVITY & PERSONAL ASSISTANTS
  // ========================================
  {
    icon: MessageSquare,
    title: "LobeChat - Open Source AI Chat",
    description: "Open-source, self-hostable multi-model chat framework with an extensive marketplace of specialized agents. Supports GPT-4, Claude, Gemini, Ollama, and 20+ model providers. Features plugin system, knowledge base integration, text-to-image, and TTS capabilities. The most extensible AI chat client available.",
    emoji: "💬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://lobechat.com/?via=aiwebtools",
    imageUrl: lobechatHero,
    tags: ["AI Chat Platforms", "open source", "multi-model", "self-hosted", "agent marketplace", "plugins", "extensible", "developer tools"],
    category: "AI Chat & Assistants",
    rating: 4.7,
    totalVotes: 4200,
    tagline: "Open-source AI chat with a marketplace of specialized agents"
  },
  {
    icon: Brain,
    title: "Fabric - AI Augmented Memory",
    description: "AI workspace agent that acts as an augmented memory for your entire digital life. Fabric connects your notes, files, bookmarks, and documents into an intelligent knowledge graph that surfaces relevant information when you need it. Think of it as a second brain powered by AI.",
    emoji: "🧠",
    color: "from-indigo-500 to-blue-700",
    directUrl: "https://fabric.so/?via=aiwebtools",
    imageUrl: fabricAiHero,
    tags: ["AI Agents", "knowledge management", "second brain", "notes", "augmented memory", "knowledge graph", "personal AI", "productivity"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2600,
    tagline: "Your AI-powered second brain that never forgets anything"
  },
  {
    icon: Bot,
    title: "Voca AI - Contact Center Voice Agent",
    description: "Conversational AI platform by AudioCodes for enterprise contact centers. Replaces legacy phone trees with natural language voice agents that understand intent, handle complex routing, and resolve customer inquiries through human-like phone conversations. Integrates with major CCaaS platforms.",
    emoji: "📞",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://www.audiocodes.com/solutions/voca/?via=aiwebtools",
    imageUrl: vocaAiHero,
    tags: ["Voice Agent", "contact center", "conversational AI", "phone agent", "AudioCodes", "IVR replacement", "enterprise", "agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 2200,
    tagline: "Natural language voice agents that replace legacy phone trees"
  }
];
