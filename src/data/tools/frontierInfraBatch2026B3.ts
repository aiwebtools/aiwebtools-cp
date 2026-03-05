import { Tool } from "@/types/tools";
import { Bot, Brain, Calendar, Mail, Zap, Globe, Users, Search, BarChart3, Megaphone, Code, Cpu, Shield, Lightbulb } from "lucide-react";

import aphraHero from "@/assets/tools/aphra-hero.jpg";
import floraHero from "@/assets/tools/flora-dearflow-hero.jpg";
import morgenHero from "@/assets/tools/morgen-hero.jpg";
import fyxerHero from "@/assets/tools/fyxer-ai-hero.jpg";
import akiflowHero from "@/assets/tools/akiflow-hero.jpg";
import limitlessHero from "@/assets/tools/limitless-ai-hero.jpg";
import gooseHero from "@/assets/tools/goose-block-hero.jpg";
import observerHero from "@/assets/tools/observer-ai-hero.jpg";
import breezeHero from "@/assets/tools/breeze-hubspot-hero.jpg";
import kompasHero from "@/assets/tools/kompas-ai-hero.jpg";
import tidioHero from "@/assets/tools/tidio-lyro-hero.jpg";
import canvasHero from "@/assets/tools/canvas-ai-hero.jpg";
import reefHero from "@/assets/tools/reef-ai-hero.jpg";
import averyHero from "@/assets/tools/avery-hero.jpg";
import wiserHero from "@/assets/tools/wiser-hero.jpg";
import agentdockHero from "@/assets/tools/agentdock-hero.jpg";
import faktoryHero from "@/assets/tools/faktory-hero.jpg";
import nventrHero from "@/assets/tools/nventr-hero.jpg";
import teampalHero from "@/assets/tools/teampal-hero.jpg";
import upsonicHero from "@/assets/tools/upsonic-hero.jpg";
import customgptHero from "@/assets/tools/customgpt-ai-hero.jpg";

export const frontierInfraBatch2026B3: Tool[] = [
  {
    icon: Brain, title: "Aphra",
    description: "Hyper-private personal assistant that focuses on being 'proactive' rather than just responding to prompts. Anticipates your needs, surfaces relevant information, and takes action before you ask.",
    emoji: "💜", color: "from-purple-300 to-purple-500",
    directUrl: "https://aphra.ai/?via=aiwebtools", imageUrl: aphraHero,
    tags: ["AI Agents", "Productivity & Utilities", "personal assistant", "proactive AI", "privacy-focused", "anticipatory"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Bot, title: "Flora by DearFlow",
    description: "Lifestyle agent using hyper-personalization to manage your daily chores and physical wellness. Coordinates your routines, health tracking, and daily tasks for a more balanced life.",
    emoji: "🌸", color: "from-green-400 to-pink-500",
    directUrl: "https://dearflow.ai/?via=aiwebtools", imageUrl: floraHero,
    tags: ["AI Agents", "Health & Wellness", "lifestyle", "wellness", "daily management", "personalization"], category: "Health & Wellness", rating: 4.4,
  },
  {
    icon: Calendar, title: "Morgen",
    description: "AI-powered calendar agent that doesn't just schedule but 'plans' your day based on energy levels and task priority. Intelligent time management that optimizes your productivity rhythm.",
    emoji: "🌅", color: "from-orange-400 to-blue-500",
    directUrl: "https://morgen.ai/?via=aiwebtools", imageUrl: morgenHero,
    tags: ["Productivity & Utilities", "calendar", "time management", "scheduling", "energy optimization", "planning"], category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Mail, title: "Fyxer AI",
    description: "Specialized email agent designed to cut the time spent in your inbox by at least two hours a day. Drafts replies, prioritizes messages, and organizes your email with AI precision.",
    emoji: "📧", color: "from-blue-500 to-blue-700",
    directUrl: "https://fyxer.ai/?via=aiwebtools", imageUrl: fyxerHero,
    tags: ["Productivity & Utilities", "email", "inbox management", "email automation", "productivity", "time-saving"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Zap, title: "Akiflow",
    description: "Central command center acting as an agent to consolidate all your tasks from 50+ different productivity apps. Unifies calendars, task managers, and communication tools into one intelligent dashboard.",
    emoji: "⚡", color: "from-purple-500 to-indigo-600",
    directUrl: "https://akiflow.com/?via=aiwebtools", imageUrl: akiflowHero,
    tags: ["Productivity & Utilities", "task management", "app consolidation", "command center", "unified dashboard", "time management"], category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Brain, title: "Limitless AI",
    description: "AI-enabled wearable that gives you 'superintelligence' by remembering every meeting and conversation you have. Pendant device with always-on recording, transcription, and intelligent recall.",
    emoji: "♾️", color: "from-black to-gold-500",
    directUrl: "https://limitless.ai/?via=aiwebtools", imageUrl: limitlessHero,
    tags: ["AI Agents", "Productivity & Utilities", "wearable", "memory", "meeting recall", "conversation AI", "hardware"], category: "Productivity & Utilities", rating: 4.7,
  },
  {
    icon: Code, title: "Goose by Block",
    description: "Open-source, local-first agent from Block (Square) designed to help developers manage their own digital infrastructure. Extensible developer assistant running entirely on your machine.",
    emoji: "🪿", color: "from-blue-500 to-grey-600",
    directUrl: "https://block.github.io/goose/?via=aiwebtools", imageUrl: gooseHero,
    tags: ["AI Agents", "Developer Tools", "open-source", "local-first", "Block", "infrastructure", "Coding Agent"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Search, title: "Observer AI",
    description: "Specialized agent that 'watches' your business processes and suggests optimizations you didn't know were possible. Continuous process mining with AI-driven improvement recommendations.",
    emoji: "👁️", color: "from-teal-600 to-teal-800",
    directUrl: "https://observer.com/?via=aiwebtools", imageUrl: observerHero,
    tags: ["AI Agents", "Business & Productivity", "process optimization", "business intelligence", "workflow analysis", "Automation Agent"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Megaphone, title: "Breeze by HubSpot",
    description: "HubSpot's native agent ecosystem automating the 'unsexy' parts of CRM—lead research, data cleaning, and enrichment. Built directly into HubSpot for seamless CRM automation.",
    emoji: "🌬️", color: "from-orange-500 to-orange-700",
    directUrl: "https://hubspot.com/breeze?via=aiwebtools", imageUrl: breezeHero,
    tags: ["AI Agents", "Marketing & Sales", "HubSpot", "CRM", "lead research", "data cleaning", "enrichment"], category: "Marketing & Sales", rating: 4.6,
  },
  {
    icon: BarChart3, title: "Kompas AI",
    description: "Deep-research agent going beyond summaries to generate professional-grade reports for market analysts. Creates comprehensive market intelligence reports with data-backed insights.",
    emoji: "🧭", color: "from-navy-600 to-gold-500",
    directUrl: "https://kompas.ai/?via=aiwebtools", imageUrl: kompasHero,
    tags: ["AI Agents", "Data & Analytics", "market research", "reports", "market intelligence", "analysis", "Research Agent"], category: "Data & Analytics", rating: 4.6,
  },
  {
    icon: Bot, title: "Tidio Lyro",
    description: "Agent for SMBs handling up to 80% of common customer support questions without human intervention. Instant AI chatbot deployment with deep knowledge base integration and human handoff.",
    emoji: "💬", color: "from-blue-500 to-purple-500",
    directUrl: "https://tidio.com/lyro?via=aiwebtools", imageUrl: tidioHero,
    tags: ["AI Agents", "Customer Support", "SMB", "chatbot", "customer service", "automation", "self-service"], category: "AI Customer Support", rating: 4.5,
  },
  {
    icon: Search, title: "Canvas AI",
    description: "Specialized research agents for B2B sales teams that prep 360° 'pre-call' briefs in seconds. Aggregates prospect intelligence from multiple sources for confident sales conversations.",
    emoji: "🎨", color: "from-teal-500 to-teal-700",
    directUrl: "https://canvas.ai/?via=aiwebtools", imageUrl: canvasHero,
    tags: ["AI Agents", "Marketing & Sales", "sales intelligence", "pre-call research", "B2B", "prospect research"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: BarChart3, title: "Reef.ai",
    description: "Autonomous 'Customer Data Scoring' agent that tells you exactly which customers are at risk of churning. Predictive customer health scoring with actionable retention recommendations.",
    emoji: "🪸", color: "from-blue-400 to-coral-500",
    directUrl: "https://reef.ai/?via=aiwebtools", imageUrl: reefHero,
    tags: ["AI Agents", "Data & Analytics", "churn prediction", "customer scoring", "retention", "customer health"], category: "Data & Analytics", rating: 4.5,
  },
  {
    icon: Megaphone, title: "Avery",
    description: "Marketing-specific agent creating high-fidelity brand content while ensuring total visual consistency. Maintains brand guidelines across all generated content for professional output.",
    emoji: "🎯", color: "from-teal-400 to-teal-600",
    directUrl: "https://averi.com/?via=aiwebtools", imageUrl: averyHero,
    tags: ["Marketing & Sales", "brand content", "visual consistency", "content creation", "brand guidelines", "marketing automation"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: BarChart3, title: "Wiser",
    description: "Pricing intelligence agent that autonomously adjusts your product prices based on real-time competitor data. Dynamic pricing optimization powered by continuous market monitoring.",
    emoji: "💡", color: "from-green-500 to-green-700",
    directUrl: "https://wiser.com/?via=aiwebtools", imageUrl: wiserHero,
    tags: ["AI Agents", "Business & Productivity", "pricing intelligence", "competitor analysis", "dynamic pricing", "e-commerce"], category: "Business & Productivity", rating: 4.5,
  },
  {
    icon: Cpu, title: "AgentDock",
    description: "A 'Platform-as-a-Service' specifically for deploying and managing high-volume production AI agents. Enterprise-grade agent hosting with auto-scaling, monitoring, and version management.",
    emoji: "🚢", color: "from-navy-600 to-orange-500",
    directUrl: "https://agentdock.com/?via=aiwebtools", imageUrl: agentdockHero,
    tags: ["AI Agents", "Developer Tools", "PaaS", "agent hosting", "deployment", "production", "infrastructure"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Users, title: "Faktory",
    description: "Build 'AI Co-workers' specifically for internal departments like Finance, Legal, or HR. Pre-built departmental AI agents that integrate with your existing enterprise tools and processes.",
    emoji: "🏭", color: "from-orange-500 to-orange-700",
    directUrl: "https://faktory.ai/?via=aiwebtools", imageUrl: faktoryHero,
    tags: ["AI Agents", "Business & Productivity", "AI employees", "departmental AI", "Finance", "Legal", "HR", "Automation Agent"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Lightbulb, title: "nventr",
    description: "Creative agent focusing on 'Product Innovation,' helping teams brainstorm and validate new business ideas. AI-powered ideation, market validation, and concept testing for product development.",
    emoji: "💡", color: "from-yellow-500 to-yellow-700",
    directUrl: "https://nventr.ai/?via=aiwebtools", imageUrl: nventrHero,
    tags: ["AI Agents", "Business & Productivity", "innovation", "brainstorming", "product development", "idea validation"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Users, title: "TeamPal",
    description: "Workplace agent focusing on 'Social Intelligence' to help remote teams collaborate better and stay connected. Enhances team communication, engagement, and culture in distributed workforces.",
    emoji: "🤝", color: "from-blue-400 to-teal-500",
    directUrl: "https://teampal.ai/?via=aiwebtools", imageUrl: teampalHero,
    tags: ["AI Agents", "Productivity & Utilities", "team collaboration", "remote work", "social intelligence", "engagement"], category: "Productivity & Utilities", rating: 4.4,
  },
  {
    icon: Code, title: "Upsonic",
    description: "Developer framework for creating 'Production-Ready' agents built for high stability and low latency. Reliable agent infrastructure with built-in error handling, retry logic, and performance optimization.",
    emoji: "🔊", color: "from-purple-600 to-blue-600",
    directUrl: "https://upsonic.co/?via=aiwebtools", imageUrl: upsonicHero,
    tags: ["AI Agents", "Developer Tools", "framework", "production-ready", "stability", "low latency", "Multi-Agent Framework"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Globe, title: "CustomGPT.ai",
    description: "Build an agent using all your business content—even obscure PDFs and handwritten notes—to act as an expert on your company. No-code custom AI chatbot builder with enterprise knowledge base integration.",
    emoji: "🤖", color: "from-blue-700 to-gold-500",
    directUrl: "https://customgpt.ai/?via=aiwebtools", imageUrl: customgptHero,
    tags: ["AI Agents", "No Code/Low Code", "custom chatbot", "business content", "knowledge base", "enterprise AI", "Automation Agent"], category: "AI Agents", rating: 4.6,
  },
];
