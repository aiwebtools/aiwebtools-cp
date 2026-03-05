import { Tool } from "@/types/tools";
import { DollarSign, Brain, Database, Link, Cpu, Shield, Code, Bot, Globe, Workflow, Search, Users, Megaphone } from "lucide-react";

import nominalHero from "@/assets/tools/nominal-hero.jpg";
import wisprHero from "@/assets/tools/wispr-hero.jpg";
import sanerHero from "@/assets/tools/saner-ai-hero.jpg";
import mulerunHero from "@/assets/tools/mulerun-hero.jpg";
import graphragHero from "@/assets/tools/graphrag-hero.jpg";
import braidHero from "@/assets/tools/braid-hero.jpg";
import llama4Hero from "@/assets/tools/llama4-hero.jpg";
import msAgentHero from "@/assets/tools/ms-agent-framework-hero.jpg";
import vstormHero from "@/assets/tools/vstorm-hero.jpg";
import lyzrHero from "@/assets/tools/lyzr-ai-hero.jpg";
import addllyHero from "@/assets/tools/addlly-ai-hero.jpg";
import louisaHero from "@/assets/tools/louisa-ai-hero.jpg";
import bloksHero from "@/assets/tools/bloks-hero.jpg";
import ruhAiHero from "@/assets/tools/ruh-ai-hero.jpg";
import airtopHero from "@/assets/tools/airtop-hero.jpg";
import arcadeHero from "@/assets/tools/arcade-hero.jpg";
import paragonHero from "@/assets/tools/paragon-hero.jpg";
import mergeHero from "@/assets/tools/merge-hero.jpg";
import aikidoHero from "@/assets/tools/aikido-security-hero.jpg";
import cycodeHero from "@/assets/tools/cycode-hero.jpg";
import checkmarxHero from "@/assets/tools/checkmarx-hero.jpg";
import semgrepHero from "@/assets/tools/semgrep-hero.jpg";
import guardrailsHero from "@/assets/tools/guardrails-ai-hero.jpg";

export const frontierInfraBatch2026B2: Tool[] = [
  {
    icon: DollarSign, title: "Nominal",
    description: "Agent designed for 'Complex General Ledgers,' helping multi-entity companies consolidate their finances autonomously. Handles intercompany eliminations, multi-currency conversions, and regulatory reporting for complex corporate structures.",
    emoji: "🏦", color: "from-purple-600 to-silver-500",
    directUrl: "https://nominal.io/?via=aiwebtools", imageUrl: nominalHero,
    tags: ["AI Agents", "Finance", "general ledger", "multi-entity", "consolidation", "financial reporting"], category: "Finance AI Tools", rating: 4.5,
  },
  {
    icon: Brain, title: "Wispr",
    description: "High-speed dictation agent allowing users to 'speak' their code and emails with zero lag and perfect formatting. Voice-to-text AI that understands developer jargon, programming syntax, and professional communication styles.",
    emoji: "🎙️", color: "from-cyan-500 to-blue-700",
    directUrl: "https://wisprflow.ai/?via=aiwebtools", imageUrl: wisprHero,
    tags: ["Productivity & Utilities", "dictation", "voice-to-text", "developer tools", "accessibility", "speech recognition"], category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Brain, title: "Saner.ai",
    description: "A 'Personal Knowledge Management' agent that helps users capture, organize, and retrieve their thoughts using a simple chat interface. Turns scattered notes, bookmarks, and ideas into a searchable second brain.",
    emoji: "🧠", color: "from-pink-500 to-purple-600",
    directUrl: "https://saner.ai/?via=aiwebtools", imageUrl: sanerHero,
    tags: ["Productivity & Utilities", "knowledge management", "note-taking", "second brain", "personal AI", "organization"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Globe, title: "Mulerun",
    description: "Specialized agent for 'E-commerce Logistics' that autonomously handles shipping disputes and tracking updates for brands. Manages returns, delivery exceptions, and carrier communications at scale.",
    emoji: "📦", color: "from-orange-600 to-brown-600",
    directUrl: "https://mulerun.com/?via=aiwebtools", imageUrl: mulerunHero,
    tags: ["AI Agents", "Business & Productivity", "e-commerce", "logistics", "shipping", "tracking", "Automation Agent"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Database, title: "GraphRAG",
    description: "Microsoft's specialized agent architecture using knowledge graphs to reason about complex relationships in massive datasets. Combines graph-based indexing with LLM generation for superior question answering over large document collections.",
    emoji: "🕸️", color: "from-blue-500 to-blue-700",
    directUrl: "https://microsoft.github.io/graphrag/?via=aiwebtools", imageUrl: graphragHero,
    tags: ["AI Agents", "Developer Tools", "knowledge graphs", "RAG", "Microsoft", "data reasoning", "Multi-Agent Framework"], category: "AI Agents", rating: 4.8,
  },
  {
    icon: Link, title: "Braid",
    description: "A protocol for agent-to-agent negotiation, allowing different companies' agents to schedule meetings or trade services securely. Enables autonomous inter-organizational collaboration with built-in trust and verification.",
    emoji: "🔗", color: "from-gold-500 to-blue-700",
    directUrl: "https://braid.tech/?via=aiwebtools", imageUrl: braidHero,
    tags: ["AI Agents", "Multi-Agent Framework", "agent protocol", "negotiation", "inter-agent", "collaboration"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Cpu, title: "Llama 4 (Meta)",
    description: "Meta's premier open-source model powering thousands of independent agents with high-reasoning and logic capabilities. The most capable open-weight LLM available, enabling developers to build sovereign AI applications.",
    emoji: "🦙", color: "from-blue-500 to-blue-700",
    directUrl: "https://llama.meta.com/?via=aiwebtools", imageUrl: llama4Hero,
    tags: ["LLM Models", "open-source", "Meta", "reasoning", "logic", "foundation model", "developer tools"], category: "LLM Models", rating: 4.9,
  },
  {
    icon: Cpu, title: "Microsoft Agent Framework",
    description: "The unified successor to Semantic Kernel and AutoGen, designed to scale agents to millions of concurrent users. Enterprise-grade framework for building, deploying, and managing AI agents across Azure infrastructure.",
    emoji: "🏢", color: "from-blue-500 to-purple-600",
    directUrl: "https://microsoft.com/?via=aiwebtools", imageUrl: msAgentHero,
    tags: ["AI Agents", "Multi-Agent Framework", "Microsoft", "Azure", "enterprise", "Semantic Kernel", "AutoGen"], category: "AI Agents", rating: 4.8,
  },
  {
    icon: Bot, title: "Vstorm",
    description: "An agentic engineering boutique specializing in custom RAG and voice AI for SMBs needing a 'CMO-in-a-box' experience. Provides done-for-you AI agent implementation with white-glove service.",
    emoji: "⛈️", color: "from-purple-600 to-purple-800",
    directUrl: "https://vstorm.co/?via=aiwebtools", imageUrl: vstormHero,
    tags: ["AI Agents", "consulting", "RAG", "voice AI", "SMB", "custom agents", "Automation Agent"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Shield, title: "Lyzr AI",
    description: "Known for its 'Private-by-Design' architecture, offering fully secure agents that run on your private cloud for regulated industries. Zero data leakage guaranteed with SOC 2 compliance and full audit trails.",
    emoji: "🔒", color: "from-green-700 to-green-500",
    directUrl: "https://lyzr.ai/?via=aiwebtools", imageUrl: lyzrHero,
    tags: ["AI Agents", "Security & Privacy", "private cloud", "regulated industries", "compliance", "secure AI"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Megaphone, title: "Addlly AI",
    description: "Content-engine agent specializing in creating SEO-optimized campaigns specifically for AI-driven search engines. Generates content that ranks in both traditional and AI-powered search results.",
    emoji: "📝", color: "from-blue-500 to-orange-500",
    directUrl: "https://addlly.ai/?via=aiwebtools", imageUrl: addllyHero,
    tags: ["Marketing & Sales", "SEO", "content creation", "AI search optimization", "campaigns", "content marketing"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Search, title: "Louisa AI",
    description: "A 'Networking Agent' that scours a firm's internal network to find warm introductions and cross-selling opportunities autonomously. Maps relationship networks to surface hidden revenue opportunities.",
    emoji: "🤝", color: "from-rose-500 to-navy-600",
    directUrl: "https://louisa.ai/?via=aiwebtools", imageUrl: louisaHero,
    tags: ["AI Agents", "Marketing & Sales", "networking", "warm introductions", "cross-selling", "relationship intelligence"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Users, title: "Bloks",
    description: "Relationship intelligence agent building a 360° view of prospects by pulling data from dozens of non-traditional sources. Transforms scattered information into actionable relationship insights for sales teams.",
    emoji: "🧩", color: "from-teal-500 to-teal-700",
    directUrl: "https://bloks.app/?via=aiwebtools", imageUrl: bloksHero,
    tags: ["AI Agents", "Marketing & Sales", "relationship intelligence", "prospect research", "data aggregation", "sales intelligence"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Bot, title: "Ruh AI",
    description: "Provides 'pre-configured AI employees' like Sarah (SDR) and customer support experts that share a unified intelligence layer. Ready-to-deploy AI team members for sales, support, and operations.",
    emoji: "👥", color: "from-blue-400 to-blue-600",
    directUrl: "https://ruh.ai/?via=aiwebtools", imageUrl: ruhAiHero,
    tags: ["AI Agents", "Automation Agent", "AI employees", "SDR", "customer support", "pre-configured agents"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Globe, title: "Airtop",
    description: "AI-powered scalable cloud browser designed specifically for agents needing high-volume web automation. Provides reliable browser infrastructure that handles CAPTCHAs, dynamic content, and authentication.",
    emoji: "☁️", color: "from-sky-400 to-sky-600",
    directUrl: "https://airtop.ai/?via=aiwebtools", imageUrl: airtopHero,
    tags: ["AI Agents", "Developer Tools", "cloud browser", "web automation", "headless browser", "infrastructure", "Web Tasks Agent"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Shield, title: "Arcade",
    description: "An MCP runtime giving agents 'just-in-time' permissions to act across tools like Gmail while keeping security tight. Fine-grained permission control for AI agents accessing sensitive business systems.",
    emoji: "🕹️", color: "from-pink-500 to-purple-600",
    directUrl: "https://arcade.software/?via=aiwebtools", imageUrl: arcadeHero,
    tags: ["AI Agents", "Developer Tools", "MCP", "permissions", "security", "runtime", "Multi-Agent Framework"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Link, title: "Paragon",
    description: "Specializes in 'embedded integrations,' allowing you to build agents that feel like a native part of your customer's software. White-label integration platform for SaaS companies building AI features.",
    emoji: "🧬", color: "from-blue-500 to-green-500",
    directUrl: "https://useparagon.com/?via=aiwebtools", imageUrl: paragonHero,
    tags: ["AI Agents", "Developer Tools", "embedded integrations", "SaaS", "white-label", "native integrations"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Link, title: "Merge",
    description: "Unified API for agents to interact specifically with HRIS, ATS, and Accounting software under strict governance. One integration to connect AI agents to 200+ HR, recruiting, and finance platforms.",
    emoji: "🔀", color: "from-blue-500 to-blue-700",
    directUrl: "https://merge.dev/?via=aiwebtools", imageUrl: mergeHero,
    tags: ["AI Agents", "Developer Tools", "unified API", "HRIS", "ATS", "accounting", "integrations"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Shield, title: "Aikido Security",
    description: "Uses 'AutoTriage' to differentiate between real security vulnerabilities and false positives in agent code. All-in-one application security platform that reduces noise by 95% for development teams.",
    emoji: "🥋", color: "from-red-600 to-red-800",
    directUrl: "https://aikido.dev/?via=aiwebtools", imageUrl: aikidoHero,
    tags: ["Security & Privacy", "Cybersecurity", "vulnerability scanning", "AutoTriage", "application security", "false positive reduction"], category: "Security & Privacy", rating: 4.6,
  },
  {
    icon: Shield, title: "Cycode",
    description: "Converged platform with a dedicated 'AI Security Layer' including an 'AI Exploitability Agent' to map attack paths in agent code. Complete application security posture management for AI-era development.",
    emoji: "🛡️", color: "from-blue-700 to-green-600",
    directUrl: "https://cycode.com/?via=aiwebtools", imageUrl: cycodeHero,
    tags: ["Security & Privacy", "Cybersecurity", "AI security", "exploitability", "attack path mapping", "ASPM"], category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Shield, title: "Checkmarx One",
    description: "Features agentic AI assistants for autonomous threat detection across enterprise software portfolios. Industry-leading AppSec platform with AI-powered code scanning, SCA, and supply chain security.",
    emoji: "✅", color: "from-purple-600 to-purple-800",
    directUrl: "https://checkmarx.com/?via=aiwebtools", imageUrl: checkmarxHero,
    tags: ["Security & Privacy", "Cybersecurity", "threat detection", "AppSec", "code scanning", "supply chain security"], category: "Security & Privacy", rating: 4.6,
  },
  {
    icon: Code, title: "Semgrep",
    description: "Lightweight scanner using an AI assistant to auto-generate security rules based on developer triage decisions. Fast, open-source static analysis that learns from your team's security patterns.",
    emoji: "🔎", color: "from-green-600 to-green-800",
    directUrl: "https://semgrep.dev/?via=aiwebtools", imageUrl: semgrepHero,
    tags: ["Security & Privacy", "Developer Tools", "static analysis", "security rules", "code scanning", "open-source"], category: "Security & Privacy", rating: 4.7,
  },
  {
    icon: Shield, title: "Guardrails AI",
    description: "Open-source framework adding a 'validation layer' to ensure agents don't break logic or safety rules. Define, test, and enforce guardrails for LLM outputs with structured validators and retry logic.",
    emoji: "🛤️", color: "from-steel-500 to-blue-600",
    directUrl: "https://guardrailsai.com/?via=aiwebtools", imageUrl: guardrailsHero,
    tags: ["AI Agents", "Security & Privacy", "validation", "safety", "guardrails", "open-source", "LLM safety"], category: "AI Agents", rating: 4.7,
  },
];
