import { Tool } from "@/types/tools";
import { Brain, Users, CreditCard, Shield, ShieldCheck, Bot, Zap, Cpu, Heart, Calendar } from "lucide-react";

import ibmWatsonxHero from "@/assets/tools/ibm-watsonx-hero.jpg";
import conversicaHero from "@/assets/tools/conversica-hero.jpg";
import nexiCommerceHero from "@/assets/tools/nexi-commerce-hero.jpg";
import huntersAiHero from "@/assets/tools/hunters-ai-hero.jpg";
import msDefenderXdrHero from "@/assets/tools/microsoft-defender-xdr-hero.jpg";
import claudeCoworkHero from "@/assets/tools/claude-cowork-hero.jpg";
import jinbaFlowHero from "@/assets/tools/jinba-flow-hero.jpg";
import ionxHpcHero from "@/assets/tools/ionx-hpc-hero.jpg";
import microTherapistHero from "@/assets/tools/micro-therapist-hero.jpg";
import aiEventCoordinatorHero from "@/assets/tools/ai-event-coordinator-hero.jpg";

export const specializedAgentsBatch2026: Tool[] = [
  {
    icon: Brain, title: "IBM watsonx.ai",
    description: "Enterprise-grade AI studio where data teams can fine-tune foundation models with private data while maintaining strict governance and security controls. Build, train, and deploy custom AI models with IBM's trusted infrastructure.",
    emoji: "🔬", color: "from-blue-600 to-blue-800",
    directUrl: "https://www.ibm.com/watsonx?via=aiwebtools", imageUrl: ibmWatsonxHero,
    tags: ["AI Agents", "enterprise AI", "foundation models", "fine-tuning", "governance", "IBM", "model training", "data science", "MLOps"],
    category: "AI Development Tools", rating: 4.8,
  },
  {
    icon: Users, title: "Conversica",
    description: "AI-powered virtual sales representative that handles the entire top-of-funnel lead engagement process via natural, multi-turn conversations. Autonomously qualifies leads, books meetings, and nurtures prospects at scale.",
    emoji: "💬", color: "from-green-500 to-teal-600",
    directUrl: "https://www.conversica.com/?via=aiwebtools", imageUrl: conversicaHero,
    tags: ["AI Agents", "Sales Agent", "virtual SDR", "lead engagement", "sales automation", "conversational AI", "lead qualification", "agent"],
    category: "Marketing & Sales", rating: 4.6,
  },
  {
    icon: CreditCard, title: "Nexi Agentic Commerce",
    description: "Groundbreaking AI payment infrastructure that enables autonomous agents to execute secure payments on behalf of consumers based on explicit authorizations. Pioneering the future of agent-to-agent commerce and automated transactions.",
    emoji: "💳", color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.nexi.com/?via=aiwebtools", imageUrl: nexiCommerceHero,
    tags: ["AI Agents", "payments", "commerce", "fintech", "autonomous transactions", "agent commerce", "payment infrastructure", "agent"],
    category: "Business & Productivity", rating: 4.5,
  },
  {
    icon: Shield, title: "Hunters AI-Driven SIEM",
    description: "Advanced AI-driven SIEM platform that uses machine learning to correlate disparate data sources and automate investigation workflows. Dramatically reduces alert fatigue and accelerates threat detection for SOC teams.",
    emoji: "🎯", color: "from-orange-500 to-red-600",
    directUrl: "https://www.hunters.ai/?via=aiwebtools", imageUrl: huntersAiHero,
    tags: ["Security", "SIEM", "threat detection", "SOC", "investigation automation", "AI security", "data correlation", "Cybersecurity"],
    category: "AI Cybersecurity", rating: 4.7,
  },
  {
    icon: ShieldCheck, title: "Microsoft Defender XDR",
    description: "Cross-layered security platform that integrates signals from identity, email, endpoints, and cloud to prioritize alert triage and reduce incident fatigue. Unified threat detection and automated response across the entire Microsoft ecosystem.",
    emoji: "🛡️", color: "from-blue-500 to-blue-700",
    directUrl: "https://security.microsoft.com/?via=aiwebtools", imageUrl: msDefenderXdrHero,
    tags: ["Security", "XDR", "threat detection", "Microsoft", "identity protection", "email security", "cloud security", "incident response", "Cybersecurity"],
    category: "AI Cybersecurity", rating: 4.8,
  },
  {
    icon: Bot, title: "Claude Co-Work",
    description: "Collaborative AI environment by Anthropic where Claude acts as a true teammate, managing project state and persistent documentation across a team. Work alongside Claude on complex projects with shared context and continuous collaboration.",
    emoji: "🤝", color: "from-amber-500 to-orange-600",
    directUrl: "https://www.anthropic.com/?via=aiwebtools", imageUrl: claudeCoworkHero,
    tags: ["AI Agents", "Anthropic", "Claude", "collaboration", "team AI", "project management", "persistent context", "Coding Agent", "agent"],
    category: "AI Development Tools", rating: 4.9,
  },
  {
    icon: Zap, title: "Jinba Flow",
    description: "Emerging framework for 'Vibe Working' — a paradigm shift where AI handles execution based on the intent and creative direction of the user. Natural language-driven workflow automation that understands context and creative vision.",
    emoji: "🌊", color: "from-pink-500 to-purple-500",
    directUrl: "https://jinba.ai/?via=aiwebtools", imageUrl: jinbaFlowHero,
    tags: ["AI Agents", "Vibe Coding Agent", "vibe working", "workflow automation", "natural language", "creative AI", "intent-driven", "agent"],
    category: "AI Development Tools", rating: 4.3,
  },
  {
    icon: Cpu, title: "I/ONX HPC",
    description: "Purpose-built high-performance compute platform designed to remove bottlenecks for scaling advanced AI workloads without vendor lock-in. Optimized GPU clusters and infrastructure for training and inference at scale.",
    emoji: "⚡", color: "from-cyan-500 to-blue-600",
    directUrl: "https://ionx.ai/?via=aiwebtools", imageUrl: ionxHpcHero,
    tags: ["AI infrastructure", "HPC", "GPU", "compute", "training", "inference", "scalability", "cloud compute", "Cloud Agent"],
    category: "AI Development Tools", rating: 4.4,
  },
  {
    icon: Heart, title: "Micro-Therapist Chatbot",
    description: "Specialized wellness agent focused on mood tracking and CBT-based habit correction for professional burnout. Track emotional patterns, receive personalized cognitive behavioral techniques, and build healthier mental habits over time. Not a replacement for professional mental health care.",
    emoji: "🧘", color: "from-teal-400 to-green-500",
    directUrl: "https://moodtracking.ai/?via=aiwebtools", imageUrl: microTherapistHero,
    tags: ["Health & Wellness", "mental health", "CBT", "mood tracking", "burnout", "wellness", "chatbot", "self-care", "health information help"],
    category: "AI Mental Health & Wellness", rating: 4.2,
  },
  {
    icon: Calendar, title: "AI Virtual Event Coordinator",
    description: "AI-powered event management agent that handles guest lists, automated reminders, live Q&A moderation, and attendee engagement for high-stakes digital summits and virtual conferences. Streamline your entire event workflow with intelligent automation.",
    emoji: "🎪", color: "from-violet-500 to-purple-600",
    directUrl: "https://www.eventbrite.com/ai/?via=aiwebtools", imageUrl: aiEventCoordinatorHero,
    tags: ["AI Agents", "event management", "virtual events", "automation", "Q&A moderation", "guest management", "conferences", "Productivity Agent", "agent"],
    category: "Business & Productivity", rating: 4.3,
  },
];
