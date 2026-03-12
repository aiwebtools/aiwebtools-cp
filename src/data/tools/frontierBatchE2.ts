import { Tool } from "@/types/tools";
import { Bot, Brain, Code, Shield, Users, Globe, Search, BarChart3, Phone, Cpu, Workflow, DollarSign, Briefcase, Building, Wrench, Mic } from "lucide-react";

import elizaosHero from "@/assets/tools/elizaos-hero.jpg";
import kandaHero from "@/assets/tools/kanda-software-hero.jpg";
import autogenHero from "@/assets/tools/autogen-studio-hero.jpg";
import unifyHero from "@/assets/tools/unify-ai-hero.jpg";
import gladiaHero from "@/assets/tools/gladia-hero.jpg";
import cognigyHero from "@/assets/tools/cognigy-hero.jpg";
import procoreHero from "@/assets/tools/procore-hero.jpg";
import openagentsHero from "@/assets/tools/openagents-hero.jpg";
import siemensHero from "@/assets/tools/siemens-copilot-hero.jpg";
import honeywellHero from "@/assets/tools/honeywell-forge-hero.jpg";
import adpHero from "@/assets/tools/adp-ai-hero.jpg";
import mi9Hero from "@/assets/tools/mi9-hero.jpg";
import dellHero from "@/assets/tools/dell-ai-factory-hero.jpg";
import cleoHero from "@/assets/tools/cleo-autopilot-hero.jpg";
import ardorHero from "@/assets/tools/ardor-ai-hero.jpg";
import fullestopHero from "@/assets/tools/fullestop-hero.jpg";
import talenticaHero from "@/assets/tools/talentica-hero.jpg";
import itransitionHero from "@/assets/tools/itransition-hero.jpg";
import zazzHero from "@/assets/tools/zazz-hero.jpg";
import leewayhertzHero from "@/assets/tools/leewayhertz-hero.jpg";

export const frontierBatchE2: Tool[] = [
  {
    icon: Bot, title: "elizaOS",
    description: "A framework for building multi-agent systems that can collaborate and execute tasks autonomously. Agents communicate through shared protocols, enabling complex cooperative problem-solving at scale.",
    emoji: "🤖", color: "from-red-500 to-pink-600",
    directUrl: "https://github.com/elizaos/eliza/?via=aiwebtools", imageUrl: elizaosHero,
    tags: ["AI Agents", "Multi-Agent Framework", "open-source", "collaboration", "autonomous", "multi-agent systems"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Brain, title: "Kanda Software Pharma Agent",
    description: "An agentic platform specifically for pharmaceutical discovery, managing the entire lifecycle of molecule simulation. Accelerates drug development from target identification to clinical trial optimization.",
    emoji: "💊", color: "from-blue-600 to-purple-700",
    directUrl: "https://kandasoft.com/?via=aiwebtools", imageUrl: kandaHero,
    tags: ["AI Agents", "Healthcare & Medical AI", "pharmaceutical", "drug discovery", "molecule simulation", "biotech"], category: "Healthcare & Medical AI", rating: 4.5,
  },
  {
    icon: Workflow, title: "AutoGen Studio",
    description: "A no-code interface from Microsoft that allows users to rapidly prototype and test multi-agent collaborative workflows. Visual drag-and-drop builder for designing agent teams and communication patterns.",
    emoji: "🎨", color: "from-blue-600 to-green-600",
    directUrl: "https://microsoft.github.io/autogen/?via=aiwebtools", imageUrl: autogenHero,
    tags: ["AI Agents", "Multi-Agent Framework", "no-code", "Microsoft", "prototyping", "multi-agent", "visual builder"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Search, title: "Unify AI",
    description: "Automates 'Warm Outbound' by finding high-intent signals across the web. Identifies prospects actively researching solutions like yours and triggers personalized outreach at the perfect moment.",
    emoji: "🎯", color: "from-purple-500 to-blue-600",
    directUrl: "https://unify.ai/?via=aiwebtools", imageUrl: unifyHero,
    tags: ["AI Agents", "Sales & CRM Tools", "warm outbound", "intent signals", "lead generation", "sales intelligence"], category: "Sales & CRM Tools", rating: 4.4,
  },
  {
    icon: Mic, title: "Gladia",
    description: "A production-ready Speech-to-Text API agent designed for teams shipping global, multilingual voice products. Handles 100+ languages with enterprise-grade accuracy and real-time streaming.",
    emoji: "🎤", color: "from-green-500 to-teal-600",
    directUrl: "https://gladia.io/?via=aiwebtools", imageUrl: gladiaHero,
    tags: ["Audio & Voice", "speech-to-text", "multilingual", "API", "voice products", "transcription", "real-time"], category: "Audio & Voice AI", rating: 4.5,
  },
  {
    icon: Globe, title: "Cognigy.ai",
    description: "A leader in 'Multilingual Chat Automation,' providing cultural adaptation tools for agents operating globally. Understands context, idioms, and cultural nuances across 100+ languages.",
    emoji: "🌍", color: "from-blue-500 to-indigo-600",
    directUrl: "https://cognigy.com/?via=aiwebtools", imageUrl: cognigyHero,
    tags: ["AI Agents", "multilingual", "chat automation", "cultural adaptation", "global", "customer service", "contact center"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Building, title: "Procore AI",
    description: "Construction management agents that track safety protocols and project timelines in real-time. Monitors jobsite progress, flags compliance issues, and predicts schedule delays before they happen.",
    emoji: "🏗️", color: "from-orange-500 to-yellow-600",
    directUrl: "https://procore.com/?via=aiwebtools", imageUrl: procoreHero,
    tags: ["AI Agents", "construction", "project management", "safety", "compliance", "real-time monitoring"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Bot, title: "OpenAgents",
    description: "An open ecosystem that connects LLMs to a massive library of 150+ tools, including browser-based research, code execution, and local file access. The universal agent toolkit.",
    emoji: "🔓", color: "from-red-500 to-orange-600",
    directUrl: "https://openagents.com/?via=aiwebtools", imageUrl: openagentsHero,
    tags: ["AI Agents", "Multi-Agent Framework", "open ecosystem", "150+ tools", "browser research", "code execution", "open-source"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Wrench, title: "Siemens Industrial CoPilot",
    description: "An agent designed for maintenance engineers to troubleshoot complex PLCs and factory robots using natural language. Diagnoses faults, suggests repairs, and generates maintenance procedures autonomously.",
    emoji: "🏭", color: "from-teal-600 to-cyan-700",
    directUrl: "https://siemens.com/industrial-copilot/?via=aiwebtools", imageUrl: siemensHero,
    tags: ["AI Agents", "industrial", "manufacturing", "PLC", "maintenance", "troubleshooting", "factory automation"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Building, title: "Honeywell Forge Agent",
    description: "An autonomous building-management agent that optimizes HVAC and energy grids for massive commercial real estate portfolios. Reduces energy costs by 20-30% while maintaining occupant comfort.",
    emoji: "🏢", color: "from-red-600 to-red-800",
    directUrl: "https://honeywell.com/forge/?via=aiwebtools", imageUrl: honeywellHero,
    tags: ["AI Agents", "building management", "HVAC", "energy optimization", "smart buildings", "commercial real estate"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Users, title: "ADP Marketplace AI Agents",
    description: "A curated ecosystem of agents for payroll, talent acquisition, and workforce operations that integrate directly with core HR data. Automates compliance, benefits administration, and workforce planning.",
    emoji: "👥", color: "from-red-500 to-red-700",
    directUrl: "https://adp.com/?via=aiwebtools", imageUrl: adpHero,
    tags: ["AI Agents", "HR & Recruitment", "payroll", "talent", "workforce", "compliance", "benefits"], category: "AI HR & Recruitment", rating: 4.3,
  },
  {
    icon: Cpu, title: "Dell AI Factory with NVIDIA",
    description: "An end-to-end stack designed to help organizations operationalize agentic AI at massive scale across data centers. Pre-configured hardware and software for deploying enterprise AI agents.",
    emoji: "🖥️", color: "from-blue-600 to-blue-800",
    directUrl: "https://dell.com/ai/?via=aiwebtools", imageUrl: dellHero,
    tags: ["AI Agents", "enterprise", "infrastructure", "NVIDIA", "data center", "hardware", "deployment"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: DollarSign, title: "Cleo Autopilot",
    description: "An active financial agent that detects spending shifts and autonomously moves money to savings or issues advances to prevent overdrafts. Your AI-powered financial guardian angel.",
    emoji: "💸", color: "from-purple-500 to-pink-600",
    directUrl: "https://meetcleo.com/?via=aiwebtools", imageUrl: cleoHero,
    tags: ["AI Agents", "personal finance", "budgeting", "savings", "overdraft protection", "spending analysis"], category: "Finance AI Tools", rating: 4.4,
  },
  {
    icon: Globe, title: "Fullestop",
    description: "Award-winning IT solutions and software development company with 25+ years experience and 7100+ completed projects. Offers AI-powered digital solutions, data analytics, web and mobile development, and enterprise technology consulting for businesses worldwide.",
    emoji: "🌐", color: "from-blue-500 to-green-600",
    directUrl: "https://fullestop.com/?via=aiwebtools", imageUrl: fullestopHero,
    tags: ["IT Services", "Software Development", "Data Analytics", "Digital Solutions", "Enterprise", "Consulting"], category: "Business & Productivity", rating: 4.2,
  },
  {
    icon: Briefcase, title: "Talentica Software",
    description: "A product engineering firm focused on building 'Lean Iteration' agents for startups to find product-market fit. Rapid prototyping with autonomous A/B testing and user feedback analysis.",
    emoji: "💼", color: "from-orange-400 to-orange-600",
    directUrl: "https://talentica.com/?via=aiwebtools", imageUrl: talenticaHero,
    tags: ["AI Agents", "agency", "startups", "product-market fit", "lean iteration", "prototyping"], category: "AI Agents", rating: 4.2,
  },
  {
    icon: Cpu, title: "Itransition Cloud Agents",
    description: "Cross-platform AI solutions that orchestrate complex business processes on cloud-native architectures. Multi-cloud deployment with enterprise-grade security and scalability.",
    emoji: "☁️", color: "from-blue-400 to-indigo-600",
    directUrl: "https://itransition.com/?via=aiwebtools", imageUrl: itransitionHero,
    tags: ["AI Agents", "cloud", "cross-platform", "business processes", "enterprise", "cloud-native"], category: "AI Agents", rating: 4.2,
  },
  {
    icon: Workflow, title: "Zazz",
    description: "Enterprise IT services company offering AI-powered software development, cybersecurity solutions, cloud engineering, and digital transformation services. Helps businesses modernize core systems and launch new platforms with scalable technology.",
    emoji: "✨", color: "from-cyan-400 to-blue-500",
    directUrl: "https://zazz.io/?via=aiwebtools", imageUrl: zazzHero,
    tags: ["IT Services", "Software Development", "Digital Transformation", "Cybersecurity", "Cloud Engineering", "Enterprise"], category: "Business & Productivity", rating: 4.2,
  },
  {
    icon: Brain, title: "LeewayHertz Custom Reasoning",
    description: "Builds agents with fine-tuned RAG pipelines for businesses needing ultra-secure and high-precision reasoning engines. Enterprise-grade knowledge retrieval with zero hallucination tolerance.",
    emoji: "🧪", color: "from-red-600 to-purple-700",
    directUrl: "https://leewayhertz.com/?via=aiwebtools", imageUrl: leewayhertzHero,
    tags: ["AI Agents", "RAG", "fine-tuned", "enterprise", "precision reasoning", "secure AI", "knowledge retrieval"], category: "AI Agents", rating: 4.3,
  },
];
