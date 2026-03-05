import { Tool } from "@/types/tools";
import { MessageSquare, Users, Mail, Calendar, Globe, Building, Search, Bot, Sparkles } from "lucide-react";

import gladlyHero from "@/assets/tools/gladly-hero.jpg";
import freshworksFreddyHero from "@/assets/tools/freshworks-freddy-hero.jpg";
import frontAiHero from "@/assets/tools/front-ai-hero.jpg";
import sprinklrHero from "@/assets/tools/sprinklr-hero.jpg";
import jotformAiHero from "@/assets/tools/jotform-ai-hero.jpg";
import circlebackHero from "@/assets/tools/circleback-hero.jpg";
import shortwaveHero from "@/assets/tools/shortwave-hero.jpg";
import motionAiHero from "@/assets/tools/motion-ai-hero.jpg";
import infobipHero from "@/assets/tools/infobip-hero.jpg";
import copilotStudioHero from "@/assets/tools/copilot-studio-hero.jpg";
import everythingAiHero from "@/assets/tools/everything-ai-hero.jpg";
import exaSearchHero from "@/assets/tools/exa-search-hero.jpg";

export const productivityAgentsBatch2026: Tool[] = [
  {
    icon: Users, title: "Gladly",
    description: "Customer service platform that shifts voice tickets into ongoing 'Customer Threads' for a relationship-first feel. Every interaction is part of a continuous conversation timeline, giving agents full historical context across all channels.",
    emoji: "💜", color: "from-purple-500 to-pink-600",
    directUrl: "https://www.gladly.com/?via=aiwebtools", imageUrl: gladlyHero,
    tags: ["AI Customer Support", "customer threads", "relationship CRM", "omnichannel", "support automation", "customer experience", "Support Agent", "agent"],
    category: "AI Customer Support", rating: 4.5,
  },
  {
    icon: Bot, title: "Freshworks Freddy AI",
    description: "AI-powered customer support assistant using natural language understanding to guide users through FAQs, automate ticket resolution, and provide intelligent agent assistance. Part of Freshworks' comprehensive CRM and helpdesk ecosystem.",
    emoji: "🤖", color: "from-green-500 to-emerald-600",
    directUrl: "https://www.freshworks.com/?via=aiwebtools", imageUrl: freshworksFreddyHero,
    tags: ["AI Customer Support", "chatbot", "FAQ automation", "ticket resolution", "NLU", "helpdesk", "CRM", "Support Agent", "agent"],
    category: "AI Customer Support", rating: 4.5,
  },
  {
    icon: MessageSquare, title: "Front AI",
    description: "AI-powered collaborative inbox platform focused on 'Complexity over Volume'—perfect for high-value account management. Intelligent routing, shared drafts, and AI-powered prioritization for teams managing critical customer relationships.",
    emoji: "📨", color: "from-red-400 to-blue-700",
    directUrl: "https://front.com/?via=aiwebtools", imageUrl: frontAiHero,
    tags: ["Email Agent", "collaborative inbox", "account management", "team email", "AI routing", "customer relationships", "high-value", "agent"],
    category: "Communication & Collaboration AI Tools", rating: 4.5,
  },
  {
    icon: Globe, title: "Sprinklr",
    description: "Unified customer experience platform that integrates AI voice agents with social media, marketing data, and customer insights. Enterprise-scale CX management across 30+ digital channels with AI-powered sentiment and trend analysis.",
    emoji: "🔴", color: "from-red-500 to-red-700",
    directUrl: "https://www.sprinklr.com/?via=aiwebtools", imageUrl: sprinklrHero,
    tags: ["AI Agents", "unified CX", "social media AI", "marketing AI", "customer insights", "enterprise", "omnichannel", "30+ channels", "agent"],
    category: "Marketing & Sales", rating: 4.6,
  },
  {
    icon: Sparkles, title: "Jotform AI Agent",
    description: "Turns complex forms into conversational AI voice interviews. Transform multi-step data collection into natural voice or chat interactions that feel like talking to a human, dramatically improving completion rates and user experience.",
    emoji: "📋", color: "from-orange-500 to-orange-700",
    directUrl: "https://www.jotform.com/?via=aiwebtools", imageUrl: jotformAiHero,
    tags: ["AI Agents", "form builder", "conversational AI", "voice interviews", "data collection", "no-code", "automation", "agent"],
    category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Calendar, title: "Circleback",
    description: "AI meeting assistant that specializes in automated follow-ups without 'babysitting.' Captures action items, sends contextual follow-up emails, and tracks commitments across meetings—ensuring nothing falls through the cracks.",
    emoji: "🔄", color: "from-teal-500 to-blue-700",
    directUrl: "https://circleback.ai/?via=aiwebtools", imageUrl: circlebackHero,
    tags: ["Meeting Agent", "Productivity & Utilities", "meeting assistant", "follow-ups", "action items", "automated reminders", "meeting notes", "agent"],
    category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Mail, title: "Shortwave",
    description: "AI email agent using RAG to answer questions about your entire inbox history and draft replies in your voice. Semantic search across years of email, intelligent categorization, and AI-written responses that match your writing style.",
    emoji: "📧", color: "from-blue-500 to-yellow-500",
    directUrl: "https://www.shortwave.com/?via=aiwebtools", imageUrl: shortwaveHero,
    tags: ["Email Agent", "AI email", "RAG", "inbox search", "smart replies", "email AI", "writing style", "productivity", "agent"],
    category: "Email Management Tools", rating: 4.5,
  },
  {
    icon: Calendar, title: "Motion",
    description: "AI calendar agent that autonomously re-orders your day based on task priority, deadlines, and current meetings. Intelligent time-blocking that protects deep work, auto-reschedules conflicts, and optimizes your schedule for peak productivity.",
    emoji: "📅", color: "from-purple-600 to-black",
    directUrl: "https://www.usemotion.com/?via=aiwebtools", imageUrl: motionAiHero,
    tags: ["Productivity Agent", "AI Agents", "calendar AI", "time blocking", "task management", "auto-scheduling", "deep work", "productivity", "agent"],
    category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Globe, title: "Infobip AgentOS",
    description: "Unified omnichannel platform bridging carrier-grade infrastructure (SMS, WhatsApp, RCS) with conversational AI orchestration. Enterprise messaging at telecom scale with AI-powered customer engagement across every communication channel.",
    emoji: "🔶", color: "from-orange-500 to-orange-700",
    directUrl: "https://www.infobip.com/?via=aiwebtools", imageUrl: infobipHero,
    tags: ["AI Agents", "omnichannel", "SMS", "WhatsApp", "RCS", "carrier-grade", "enterprise messaging", "conversational AI", "agent"],
    category: "Communication & Collaboration AI Tools", rating: 4.5,
  },
  {
    icon: Building, title: "Microsoft Copilot Studio",
    description: "Enterprise standard for building 'Internal Agents' that connect Microsoft 365, Teams, and Dynamics 365 with secure Entra ID governance. Low-code agent builder with deep Microsoft ecosystem integration and enterprise-grade security.",
    emoji: "🔷", color: "from-blue-600 to-blue-800",
    directUrl: "https://www.microsoft.com/copilot-studio/?via=aiwebtools", imageUrl: copilotStudioHero,
    tags: ["AI Agents", "Microsoft", "low-code", "enterprise", "Teams", "Dynamics 365", "governance", "internal agents", "Copilot", "agent"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Search, title: "Everything AI",
    description: "AI-powered discovery platform that uses an intelligent agent to help you find the best AI tools specifically for your business use case. Personalized recommendations based on your industry, team size, and workflow needs.",
    emoji: "🌌", color: "from-purple-600 to-blue-700",
    directUrl: "https://everythingai.com/?via=aiwebtools", imageUrl: everythingAiHero,
    tags: ["AI directory", "tool discovery", "AI search", "business tools", "recommendations", "AI comparison", "productivity"],
    category: "Productivity & Utilities", rating: 4.3,
  },
  {
    icon: Search, title: "Exa",
    description: "Neural search API that agents use to find high-quality, relevant web data that traditional search engines bury. Semantic understanding retrieves precisely relevant content from 1B+ pages—purpose-built for AI agent data retrieval.",
    emoji: "🔍", color: "from-green-500 to-blue-700",
    directUrl: "https://exa.ai/?via=aiwebtools", imageUrl: exaSearchHero,
    tags: ["AI Agents", "Developer Tools", "neural search", "semantic search", "API", "web data", "agent infrastructure", "data retrieval", "agent"],
    category: "AI Agents", rating: 4.6,
  },
];
