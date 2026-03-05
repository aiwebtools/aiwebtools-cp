import { Tool } from "@/types/tools";
import { Phone, Headphones, Mic, Bot, Globe, Building, AudioLines, MessageSquare } from "lucide-react";

import polyaiHero from "@/assets/tools/polyai-hero.jpg";
import five9Hero from "@/assets/tools/five9-hero.jpg";
import niceCxoneHero from "@/assets/tools/nice-cxone-hero.jpg";
import huaweiAiccHero from "@/assets/tools/huawei-aicc-hero.jpg";
import talkdeskHero from "@/assets/tools/talkdesk-hero.jpg";
import agentvoiceHero from "@/assets/tools/agentvoice-hero.jpg";
import nocaHero from "@/assets/tools/noca-ai-hero.jpg";
import cloudtalkHero from "@/assets/tools/cloudtalk-hero.jpg";
import insightoHero from "@/assets/tools/insighto-ai-hero.jpg";
import smallestHero from "@/assets/tools/smallest-ai-hero.jpg";
import qwen3TtsHero from "@/assets/tools/qwen3-tts-hero.jpg";
import regalHero from "@/assets/tools/regal-ai-hero.jpg";
import calldeskHero from "@/assets/tools/calldesk-hero.jpg";
import dialpadHero from "@/assets/tools/dialpad-hero.jpg";
import ringcentralHero from "@/assets/tools/ringcentral-hero.jpg";
import nextivaHero from "@/assets/tools/nextiva-hero.jpg";

export const voiceAgentsBatch2026: Tool[] = [
  {
    icon: Phone, title: "PolyAI",
    description: "Enterprise-grade conversational AI for customer service, supporting over 45 languages with superhuman containment rates. Handles complex voice interactions autonomously with natural, human-like dialogue that resolves issues without human handoff.",
    emoji: "🗣️", color: "from-blue-600 to-purple-700",
    directUrl: "https://poly.ai/?via=aiwebtools", imageUrl: polyaiHero,
    tags: ["Voice Agent", "AI Agents", "enterprise voice AI", "customer service", "multilingual", "conversational AI", "contact center", "phone agent", "agent"],
    category: "Phone & Voice Agents", rating: 4.7,
  },
  {
    icon: Headphones, title: "Five9",
    description: "Full-stack AI cloud contact center platform achieving 62% automation rate across enterprise digital transformation. Intelligent virtual agents handle calls, chats, and emails with advanced workforce optimization and real-time analytics.",
    emoji: "☁️", color: "from-teal-500 to-blue-700",
    directUrl: "https://www.five9.com/?via=aiwebtools", imageUrl: five9Hero,
    tags: ["Voice Agent", "AI Agents", "cloud contact center", "enterprise", "workforce optimization", "digital transformation", "call center", "automation", "agent"],
    category: "Phone & Voice Agents", rating: 4.6,
  },
  {
    icon: Headphones, title: "NICE CXone",
    description: "Enterprise-scale AI platform using 'Enlighten AI' for sentiment-driven call routing, agent coaching, and real-time interaction analytics. Transforms contact centers with predictive behavioral insights and autonomous quality management.",
    emoji: "✨", color: "from-indigo-600 to-blue-800",
    directUrl: "https://www.nice.com/?via=aiwebtools", imageUrl: niceCxoneHero,
    tags: ["Voice Agent", "AI Agents", "contact center", "sentiment analysis", "call routing", "agent coaching", "enterprise", "workforce management", "agent"],
    category: "Phone & Voice Agents", rating: 4.6,
  },
  {
    icon: Phone, title: "Huawei AICC",
    description: "Launched at MWC 2026, Huawei's AI Contact Center uses domain-specific models to achieve a Mean Opinion Score (MOS) of 4.5, rivaling human speech quality. Enterprise-grade voice AI with industry-leading naturalness and clarity.",
    emoji: "📡", color: "from-red-600 to-red-800",
    directUrl: "https://www.huawei.com/?via=aiwebtools", imageUrl: huaweiAiccHero,
    tags: ["Voice Agent", "AI Agents", "contact center", "enterprise", "domain-specific models", "speech quality", "MWC 2026", "voice AI", "agent"],
    category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Building, title: "Talkdesk AI",
    description: "Features 'Industry Experience Clouds' with pre-built AI logic for banking, healthcare, and retail. Purpose-built contact center AI that understands industry-specific terminology, compliance requirements, and customer journeys out of the box.",
    emoji: "🏥", color: "from-purple-500 to-purple-800",
    directUrl: "https://www.talkdesk.com/?via=aiwebtools", imageUrl: talkdeskHero,
    tags: ["Voice Agent", "AI Agents", "industry clouds", "banking AI", "healthcare AI", "retail AI", "contact center", "enterprise", "compliance", "agent"],
    category: "Phone & Voice Agents", rating: 4.6,
  },
  {
    icon: Mic, title: "AgentVoice",
    description: "Turnkey AI voice agent platform with pre-built business templates for teams that need to go live in minutes. Deploy professional voice agents for appointment booking, lead qualification, and customer support without any coding.",
    emoji: "🎙️", color: "from-green-500 to-emerald-700",
    directUrl: "https://agentvoice.ai/?via=aiwebtools", imageUrl: agentvoiceHero,
    tags: ["Voice Agent", "AI Agents", "no-code", "business templates", "appointment booking", "lead qualification", "voice automation", "quick deploy", "agent"],
    category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Bot, title: "Noca AI",
    description: "Pioneers 'Vibe Coding' for voice agents—describe the agent's logic in natural language and the platform builds the code for you. Revolutionary approach to voice agent creation that eliminates technical barriers entirely.",
    emoji: "🌊", color: "from-cyan-500 to-blue-700",
    directUrl: "https://noca.ai/?via=aiwebtools", imageUrl: nocaHero,
    tags: ["Voice Agent", "AI Agents", "vibe coding", "no-code", "natural language", "voice agent builder", "conversational AI", "agent"],
    category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Phone, title: "CloudTalk",
    description: "AI-powered voice agent platform excelling at personalized outbound sales and real-time CRM syncing. Intelligent call analytics, automatic call tagging, and AI-powered conversation intelligence for sales and support teams.",
    emoji: "☁️", color: "from-blue-500 to-blue-700",
    directUrl: "https://www.cloudtalk.io/?via=aiwebtools", imageUrl: cloudtalkHero,
    tags: ["Voice Agent", "AI Agents", "outbound sales", "CRM sync", "call analytics", "conversation intelligence", "sales automation", "phone system", "agent"],
    category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Mic, title: "Insighto.ai",
    description: "Simple drag-and-drop builder specifically for small business 24/7 answering services. Create AI phone agents that handle customer inquiries, take messages, and schedule appointments around the clock without technical expertise.",
    emoji: "📞", color: "from-orange-500 to-amber-600",
    directUrl: "https://insighto.ai/?via=aiwebtools", imageUrl: insightoHero,
    tags: ["Voice Agent", "AI Agents", "small business", "answering service", "drag-and-drop", "24/7 support", "appointment scheduling", "no-code", "agent"],
    category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: AudioLines, title: "Smallest.ai",
    description: "Extreme low-latency voice AI with sub-100ms response times and personalized voice cloning for recruitment and sales. The fastest voice agent platform available, enabling truly real-time natural conversations.",
    emoji: "⚡", color: "from-yellow-500 to-amber-600",
    directUrl: "https://smallest.ai/?via=aiwebtools", imageUrl: smallestHero,
    tags: ["Voice Agent", "AI Agents", "low latency", "voice cloning", "real-time", "recruitment", "sales", "sub-100ms", "fastest voice AI", "agent"],
    category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: AudioLines, title: "Qwen3-TTS",
    description: "High-performance open-source text-to-speech model (Apache 2.0) from Alibaba that beats many proprietary models in accents, emotional delivery, and multilingual support. Self-hostable with full commercial rights.",
    emoji: "🔊", color: "from-red-600 to-amber-600",
    directUrl: "https://github.com/QwenLM/Qwen3/?via=aiwebtools", imageUrl: qwen3TtsHero,
    tags: ["Text-to-Speech", "open source", "Alibaba", "Qwen", "voice synthesis", "multilingual", "emotional speech", "Apache 2.0", "self-hosted"],
    category: "Audio & Voice", rating: 4.5,
  },
  {
    icon: Phone, title: "Regal.ai",
    description: "High-touch outbound phone agent designed to prevent spam flagging and maximize connection rates. AI-powered personalized outbound campaigns for luxury brands and high-consideration purchases with intelligent caller ID management.",
    emoji: "👑", color: "from-purple-600 to-amber-500",
    directUrl: "https://www.regal.ai/?via=aiwebtools", imageUrl: regalHero,
    tags: ["Voice Agent", "AI Agents", "outbound sales", "spam prevention", "luxury brands", "phone agent", "caller ID", "high-touch", "agent"],
    category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: MessageSquare, title: "Calldesk",
    description: "Specialized in 'Call Deflection'—intelligently moving simple phone queries to SMS, chat, or self-service channels. Reduces call volume while improving customer satisfaction by routing to the most efficient resolution path.",
    emoji: "📱", color: "from-blue-500 to-teal-600",
    directUrl: "https://www.calldesk.ai/?via=aiwebtools", imageUrl: calldeskHero,
    tags: ["Voice Agent", "AI Agents", "call deflection", "SMS routing", "self-service", "call volume reduction", "customer experience", "agent"],
    category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: Phone, title: "Dialpad",
    description: "AI-powered communications platform with real-time coaching, live sentiment analysis, and 100% uptime SLA for sales teams. Provides instant AI suggestions during calls and comprehensive post-call analytics.",
    emoji: "💬", color: "from-purple-500 to-purple-700",
    directUrl: "https://www.dialpad.com/?via=aiwebtools", imageUrl: dialpadHero,
    tags: ["Voice Agent", "AI Agents", "real-time coaching", "sentiment analysis", "sales", "uptime SLA", "call analytics", "business phone", "agent"],
    category: "Communication & Collaboration AI Tools", rating: 4.5,
  },
  {
    icon: Globe, title: "RingCentral",
    description: "Massive enterprise-scale AI communications platform with built-in AI translation for 50+ languages. Unified communications combining voice, video, messaging, and contact center with advanced AI-powered analytics and insights.",
    emoji: "🌐", color: "from-blue-600 to-orange-500",
    directUrl: "https://www.ringcentral.com/?via=aiwebtools", imageUrl: ringcentralHero,
    tags: ["Voice Agent", "AI Agents", "enterprise", "AI translation", "unified communications", "video conferencing", "contact center", "50+ languages", "agent"],
    category: "Communication & Collaboration AI Tools", rating: 4.6,
  },
  {
    icon: Phone, title: "Nextiva",
    description: "Highly rated AI-powered business phone system for small teams with crystal-clear call quality and straightforward administrative controls. Smart call routing, AI-powered voicemail transcription, and unified team communications.",
    emoji: "📞", color: "from-blue-500 to-green-600",
    directUrl: "https://www.nextiva.com/?via=aiwebtools", imageUrl: nextivaHero,
    tags: ["Voice Agent", "AI Agents", "business phone", "small teams", "call quality", "VoIP", "call routing", "voicemail AI", "agent"],
    category: "Communication & Collaboration AI Tools", rating: 4.4,
  },
];
