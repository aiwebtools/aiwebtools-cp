import { Tool } from "@/types/tools";
import { Bot, Code, Mic, Globe, Search, Headphones, Users, Briefcase, Mail, TrendingUp, Megaphone, Zap } from "lucide-react";

import rooCodeHero from "@/assets/tools/roo-code-hero.jpg";
import codebuffHero from "@/assets/tools/codebuff-hero.jpg";
import plandexHero from "@/assets/tools/plandex-hero.jpg";
import temboLabsHero from "@/assets/tools/tempo-labs-hero.jpg";
import createXyzHero from "@/assets/tools/create-xyz-hero.jpg";
import magicPatternsHero from "@/assets/tools/magic-patterns-hero.jpg";
import vapiHero from "@/assets/tools/vapi-hero.jpg";
import retellAiHero from "@/assets/tools/retell-ai-hero.jpg";
import blandAiHero from "@/assets/tools/bland-ai-hero.jpg";
import lutraHero from "@/assets/tools/lutra-hero.jpg";
import multionHero from "@/assets/tools/multion-hero.jpg";
import adeptHero from "@/assets/tools/adept-hero.jpg";
import stormStanfordHero from "@/assets/tools/storm-stanford-hero.jpg";
import undermindHero from "@/assets/tools/undermind-hero.jpg";
import sciteAssistantHero from "@/assets/tools/scite-assistant-hero.jpg";
import decagonHero from "@/assets/tools/decagon-hero.jpg";
import sierraAiHero from "@/assets/tools/sierra-ai-hero.jpg";
import forethoughtHero from "@/assets/tools/forethought-hero.jpg";
import lettaHero from "@/assets/tools/letta-hero.jpg";
import camelAiHero from "@/assets/tools/camel-ai-hero.jpg";
import memAiHero from "@/assets/tools/mem-ai-hero.jpg";
import motionAiHero from "@/assets/tools/motion-ai-hero.jpg";
import shortwaveHero from "@/assets/tools/shortwave-hero.jpg";
import clayAgentHero from "@/assets/tools/clay-agent-hero.jpg";
import elevenXHero from "@/assets/tools/eleven-x-hero.jpg";

export const mixedAgentsBatch2026: Tool[] = [
  // Coding Agents (3)
  { icon: Code, title: "Roo Code", description: "Open-source autonomous coding agent for VS Code with multi-mode personas (architect, code, ask, debug) and full project context awareness. Cline's powerful fork.", emoji: "🦘", color: "from-orange-500 to-red-700", directUrl: "https://roocode.com/?via=aiwebtools", imageUrl: rooCodeHero, tags: ["AI Agents", "Coding Agent", "Autonomous Agent", "VS Code", "Open Source", "Multi-Mode"], category: "AI Agents", rating: 4.8, totalVotes: 2410 },
  { icon: Code, title: "Codebuff", description: "Terminal-native AI coding agent that edits your entire codebase from the CLI — faster than Cursor, simpler than Devin. Built for indie hackers shipping fast.", emoji: "⚡", color: "from-cyan-500 to-blue-700", directUrl: "https://codebuff.com/?via=aiwebtools", imageUrl: codebuffHero, tags: ["AI Agents", "Coding Agent", "CLI", "Terminal", "Codebase", "Autonomous"], category: "AI Agents", rating: 4.7, totalVotes: 1820 },
  { icon: Code, title: "Plandex", description: "Open-source terminal-based AI dev agent for large, real-world projects. Manages context across 100+ files, runs sandboxed, ships production code.", emoji: "📋", color: "from-emerald-600 to-teal-800", directUrl: "https://plandex.ai/?via=aiwebtools", imageUrl: plandexHero, tags: ["AI Agents", "Coding Agent", "Open Source", "Terminal", "Large Codebase", "Sandboxed"], category: "AI Agents", rating: 4.7, totalVotes: 1640 },

  // Vibe Coding Agents (3)
  { icon: Code, title: "Tempo Labs", description: "AI-powered React app builder that generates production-grade UI from natural language prompts. The vibe-coding agent for designers building real apps.", emoji: "🎨", color: "from-pink-500 to-purple-700", directUrl: "https://tempo.new/?via=aiwebtools", imageUrl: temboLabsHero, tags: ["AI Agents", "Vibe Coding Agent", "App Builder", "React", "No-Code", "UI Generator"], category: "AI Agents", rating: 4.6, totalVotes: 1980 },
  { icon: Code, title: "Create.xyz", description: "Idea-to-app vibe coding platform that ships full-stack web apps from a single prompt. Visual editor, instant deploy, database included.", emoji: "✨", color: "from-violet-500 to-indigo-700", directUrl: "https://www.create.xyz/?via=aiwebtools", imageUrl: createXyzHero, tags: ["AI Agents", "Vibe Coding Agent", "App Builder", "Full-Stack", "No-Code", "Idea to App"], category: "AI Agents", rating: 4.6, totalVotes: 1720 },
  { icon: Code, title: "Magic Patterns", description: "Generative UI agent that produces production-ready React + Tailwind components from prompts or screenshots. The Figma-to-code vibe coder.", emoji: "🪄", color: "from-fuchsia-500 to-pink-700", directUrl: "https://magicpatterns.com/?via=aiwebtools", imageUrl: magicPatternsHero, tags: ["AI Agents", "Vibe Coding Agent", "UI Generator", "React", "Tailwind", "Figma to Code"], category: "AI Agents", rating: 4.5, totalVotes: 1540 },

  // Voice Agents (3)
  { icon: Mic, title: "Vapi", description: "Developer-first voice AI platform for building production phone agents in minutes. Handles inbound/outbound calls with sub-500ms latency and any LLM.", emoji: "📞", color: "from-green-500 to-emerald-700", directUrl: "https://vapi.ai/?via=aiwebtools", imageUrl: vapiHero, tags: ["AI Agents", "Voice Agent", "Phone Agent", "Conversational AI", "Developer Platform", "Telephony"], category: "AI Agents", rating: 4.8, totalVotes: 2680 },
  { icon: Mic, title: "Retell AI", description: "Build human-like voice agents that handle real customer calls — appointment scheduling, lead qualification, support — with custom voices and any backend.", emoji: "🎙️", color: "from-blue-500 to-cyan-700", directUrl: "https://www.retellai.com/?via=aiwebtools", imageUrl: retellAiHero, tags: ["AI Agents", "Voice Agent", "Phone Agent", "Conversational AI", "Customer Service", "Call Center"], category: "AI Agents", rating: 4.7, totalVotes: 2240 },
  { icon: Mic, title: "Bland AI", description: "Enterprise voice agent platform that runs autonomous AI phone calls at scale — outbound sales, inbound support, surveys — with self-hosted infrastructure.", emoji: "☎️", color: "from-slate-700 to-zinc-900", directUrl: "https://www.bland.ai/?via=aiwebtools", imageUrl: blandAiHero, tags: ["AI Agents", "Voice Agent", "Phone Agent", "Enterprise", "Outbound Sales", "Conversational AI"], category: "AI Agents", rating: 4.7, totalVotes: 2110 },

  // Web Tasks Agents (3)
  { icon: Globe, title: "Lutra", description: "Conversational web-task agent that connects to Gmail, Slack, Salesforce, and 100+ apps to autonomously execute multi-step workflows from chat.", emoji: "🦦", color: "from-cyan-600 to-teal-800", directUrl: "https://lutra.ai/?via=aiwebtools", imageUrl: lutraHero, tags: ["AI Agents", "Web Tasks Agent", "Automation Agent", "Workflow", "Integrations", "Autonomous"], category: "AI Agents", rating: 4.6, totalVotes: 1680 },
  { icon: Globe, title: "MultiOn", description: "Personal AI agent that autonomously browses the web on your behalf — booking flights, ordering food, filling forms — with cloud browsers and natural language.", emoji: "🌐", color: "from-purple-600 to-pink-700", directUrl: "https://multion.ai/?via=aiwebtools", imageUrl: multionHero, tags: ["AI Agents", "Web Tasks Agent", "Browser Automation", "Autonomous Agent", "Personal Assistant"], category: "AI Agents", rating: 4.5, totalVotes: 2030 },
  { icon: Globe, title: "Adept", description: "Adept's ACT-class web agents perform complex multi-step browser tasks — research, data entry, SaaS workflows — directly in the cloud or your environment.", emoji: "🤖", color: "from-indigo-600 to-blue-800", directUrl: "https://www.adept.ai/?via=aiwebtools", imageUrl: adeptHero, tags: ["AI Agents", "Web Tasks Agent", "Browser Automation", "Enterprise", "Multi-Step", "Autonomous"], category: "AI Agents", rating: 4.6, totalVotes: 1870 },

  // Research Agents (3)
  { icon: Search, title: "STORM by Stanford", description: "Stanford's open-source research agent that writes Wikipedia-style articles from scratch by autonomously planning, searching, and synthesizing sources.", emoji: "🌩️", color: "from-red-600 to-rose-800", directUrl: "https://storm.genie.stanford.edu/?via=aiwebtools", imageUrl: stormStanfordHero, tags: ["AI Agents", "Research Agent", "Open Source", "Stanford", "Wikipedia", "Knowledge Synthesis"], category: "AI Agents", rating: 4.8, totalVotes: 2540 },
  { icon: Search, title: "Undermind", description: "Deep scientific research agent that autonomously digs through millions of papers to deliver exhaustive literature reviews with citations no keyword search can find.", emoji: "🔬", color: "from-emerald-600 to-cyan-800", directUrl: "https://www.undermind.ai/?via=aiwebtools", imageUrl: undermindHero, tags: ["AI Agents", "Research Agent", "Scientific", "Literature Review", "Academic", "Citations"], category: "AI Agents", rating: 4.8, totalVotes: 1920 },
  { icon: Search, title: "Scite Assistant", description: "AI research agent that answers questions with smart citations showing how each paper supports, contrasts, or mentions a claim. Built for peer-reviewed truth.", emoji: "📊", color: "from-blue-600 to-violet-800", directUrl: "https://scite.ai/?via=aiwebtools", imageUrl: sciteAssistantHero, tags: ["AI Agents", "Research Agent", "Citations", "Academic", "Smart Citations", "Peer Review"], category: "AI Agents", rating: 4.7, totalVotes: 1680 },

  // Support Agents (3)
  { icon: Headphones, title: "Decagon", description: "Enterprise AI support agent platform powering Notion, Eventbrite, and Duolingo — resolves complex tickets autonomously across chat, email, and voice.", emoji: "🛟", color: "from-amber-500 to-orange-700", directUrl: "https://decagon.ai/?via=aiwebtools", imageUrl: decagonHero, tags: ["AI Agents", "Support Agent", "Customer Service", "Enterprise", "Ticket Resolution", "Autonomous"], category: "AI Agents", rating: 4.8, totalVotes: 2310 },
  { icon: Headphones, title: "Sierra AI", description: "Bret Taylor's conversational AI agent platform for customer experience — handles complex inquiries, takes actions, and follows brand voice for global enterprises.", emoji: "⛰️", color: "from-stone-600 to-amber-800", directUrl: "https://sierra.ai/?via=aiwebtools", imageUrl: sierraAiHero, tags: ["AI Agents", "Support Agent", "Conversational Agent", "Enterprise", "Customer Experience", "Brand Voice"], category: "AI Agents", rating: 4.8, totalVotes: 2180 },
  { icon: Headphones, title: "Forethought", description: "Generative AI agent for customer support that auto-resolves tickets, predicts intent, and routes intelligently across Zendesk, Salesforce, and Intercom.", emoji: "🎯", color: "from-purple-600 to-pink-800", directUrl: "https://forethought.ai/?via=aiwebtools", imageUrl: forethoughtHero, tags: ["AI Agents", "Support Agent", "Customer Service", "Ticket Automation", "Zendesk", "Generative AI"], category: "AI Agents", rating: 4.6, totalVotes: 1740 },

  // Multi-Agent Frameworks (2)
  { icon: Users, title: "Letta", description: "Open-source framework for stateful agents with long-term memory (formerly MemGPT). Build agents that remember every conversation across sessions.", emoji: "🧬", color: "from-violet-600 to-fuchsia-800", directUrl: "https://www.letta.com/?via=aiwebtools", imageUrl: lettaHero, tags: ["AI Agents", "Multi-Agent Framework", "Open Source", "Long-Term Memory", "MemGPT", "Stateful"], category: "AI Agents", rating: 4.7, totalVotes: 1980 },
  { icon: Users, title: "Camel-AI", description: "Open-source multi-agent framework for studying agent societies, role-playing collaboration, and large-scale agent communication. Research-grade and production-ready.", emoji: "🐫", color: "from-yellow-600 to-orange-800", directUrl: "https://www.camel-ai.org/?via=aiwebtools", imageUrl: camelAiHero, tags: ["AI Agents", "Multi-Agent Framework", "Open Source", "Agent Societies", "Role-Playing", "Research"], color: "from-yellow-600 to-orange-800" as any, category: "AI Agents", rating: 4.6, totalVotes: 1620 },

  // Productivity Agents (2)
  { icon: Briefcase, title: "Mem AI", description: "Self-organizing AI workspace where notes write themselves, link themselves, and surface themselves. Your second brain — agent-augmented.", emoji: "🧠", color: "from-rose-500 to-pink-700", directUrl: "https://mem.ai/?via=aiwebtools", imageUrl: memAiHero, tags: ["AI Agents", "Productivity Agent", "Note Taking", "Second Brain", "Knowledge Management", "Self-Organizing"], category: "AI Agents", rating: 4.6, totalVotes: 2140 },
  { icon: Briefcase, title: "Motion", description: "AI calendar agent that auto-schedules every task, meeting, and project deadline across your day with optimal focus blocks and real-time replanning.", emoji: "📅", color: "from-purple-500 to-indigo-700", directUrl: "https://www.usemotion.com/?via=aiwebtools", imageUrl: motionAiHero, tags: ["AI Agents", "Productivity Agent", "Scheduling", "Calendar", "Task Management", "Project Management"], category: "AI Agents", rating: 4.7, totalVotes: 2620 },

  // Email Agent (1)
  { icon: Mail, title: "Shortwave", description: "AI-native email agent that drafts replies, schedules meetings, triages inbox, and surfaces what matters using your Gmail history as context.", emoji: "📧", color: "from-blue-500 to-cyan-700", directUrl: "https://www.shortwave.com/?via=aiwebtools", imageUrl: shortwaveHero, tags: ["AI Agents", "Email Agent", "Gmail", "Inbox Management", "Auto-Reply", "Productivity"], category: "AI Agents", rating: 4.7, totalVotes: 2380 },

  // Sales/GTM Agents (2)
  { icon: TrendingUp, title: "Clay Agent", description: "Clay's GTM data + AI agent stack — autonomously enriches leads, drafts personalized outbound, and ships full prospecting workflows across 100+ data sources.", emoji: "🎯", color: "from-amber-500 to-red-700", directUrl: "https://www.clay.com/?via=aiwebtools", imageUrl: clayAgentHero, tags: ["AI Agents", "Sales Agent", "GTM", "Lead Enrichment", "Outbound", "Data Enrichment"], category: "AI Agents", rating: 4.8, totalVotes: 2480 },
  { icon: Megaphone, title: "11x.ai", description: "Autonomous digital workers for sales — Alice the SDR, Mike the AE — that source, qualify, and close pipeline 24/7 across email, LinkedIn, and voice.", emoji: "👥", color: "from-violet-600 to-purple-800", directUrl: "https://www.11x.ai/?via=aiwebtools", imageUrl: elevenXHero, tags: ["AI Agents", "Sales Agent", "Autonomous Agent", "SDR", "Digital Worker", "Outbound"], category: "AI Agents", rating: 4.7, totalVotes: 2210 },
];