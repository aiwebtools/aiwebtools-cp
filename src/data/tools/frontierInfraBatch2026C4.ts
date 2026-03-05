import { Tool } from "@/types/tools";
import { Brain, Mic, Bot, Users, Mail, Search, Globe, Shield, Code, BarChart3 } from "lucide-react";

import vellumHero from "@/assets/tools/vellum-ai-hero.jpg";
import codiumHero from "@/assets/tools/codium-ai-hero.jpg";
import humeHero from "@/assets/tools/hume-ai-hero.jpg";
import vapiHero from "@/assets/tools/vapi-hero.jpg";
import nanoBananaHero from "@/assets/tools/nano-banana-hero.jpg";
import jasonHero from "@/assets/tools/jason-ai-hero.jpg";
import reclaimHero from "@/assets/tools/reclaim-ai-hero.jpg";
import yellowHero from "@/assets/tools/yellow-ai-hero.jpg";
import capacityHero from "@/assets/tools/capacity-hero.jpg";
import granolaHero from "@/assets/tools/granola-hero.jpg";
import cognosysHero from "@/assets/tools/cognosys-hero.jpg";

export const frontierInfraBatch2026C4: Tool[] = [
  {
    icon: Brain, title: "Vellum AI",
    description: "A specialized platform for teams to automate operational work by simply describing tasks to build prompt-based agents. Visual prompt engineering, evaluation, and deployment for enterprise AI workflows.",
    emoji: "📜", color: "from-blue-600 to-purple-700",
    directUrl: "https://vellum.ai/?via=aiwebtools", imageUrl: vellumHero,
    tags: ["AI Agents", "Developer Tools", "prompt engineering", "agent orchestration", "workflow automation", "enterprise", "Multi-Agent Framework"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Code, title: "Codium AI",
    description: "An agent focused on 'Meaningful Test Generation,' autonomously writing unit tests that actually find bugs rather than just increasing coverage. AI-powered code integrity for confident deployments.",
    emoji: "🧪", color: "from-green-500 to-green-700",
    directUrl: "https://codium.ai/?via=aiwebtools", imageUrl: codiumHero,
    tags: ["Developer Tools", "AI Agents", "test generation", "unit testing", "bug detection", "code quality", "Coding Agent"], category: "Coding & Development", rating: 4.6,
  },
  {
    icon: Mic, title: "Hume AI",
    description: "An Empathic Voice Interface (EVI) that detects user frustration or joy and adjusts the agent's tone in real-time. Build emotionally intelligent voice experiences with expressive AI understanding.",
    emoji: "💜", color: "from-purple-500 to-pink-600",
    directUrl: "https://hume.ai/?via=aiwebtools", imageUrl: humeHero,
    tags: ["AI Agents", "Audio & Music", "empathic AI", "emotion detection", "voice interface", "EVI", "conversational AI"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Mic, title: "Vapi",
    description: "A developer platform specifically for building Voice AI Employees that can hold 30-minute phone conversations with perfect latency. Enterprise-grade voice agent infrastructure with sub-second response times.",
    emoji: "📞", color: "from-blue-500 to-cyan-600",
    directUrl: "https://vapi.ai/?via=aiwebtools", imageUrl: vapiHero,
    tags: ["AI Agents", "Audio & Music", "voice AI", "phone agents", "conversational AI", "developer platform", "Voice Agent"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Bot, title: "Nano Banana",
    description: "A prompt-based photo editing agent that maintains perfect character consistency and scene fidelity across multiple edits. Generate and edit images with the same characters in different contexts seamlessly.",
    emoji: "🍌", color: "from-yellow-400 to-yellow-600",
    directUrl: "https://nanobanana.com/?via=aiwebtools", imageUrl: nanoBananaHero,
    tags: ["Image & Design", "AI Agents", "photo editing", "character consistency", "scene fidelity", "prompt-based", "image generation"], category: "Image & Design", rating: 4.4,
  },
  {
    icon: Users, title: "Jason AI",
    description: "A specialized Sales Development agent by Reply.io that handles the entire B2B outreach funnel—from lead finding to booking the meeting. Autonomous prospecting, sequencing, and follow-up at scale.",
    emoji: "🤝", color: "from-blue-600 to-orange-500",
    directUrl: "https://reply.io/jason/?via=aiwebtools", imageUrl: jasonHero,
    tags: ["Marketing & Sales", "AI Agents", "sales development", "B2B outreach", "lead generation", "prospecting", "Sales Agent"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: BarChart3, title: "Reclaim.ai",
    description: "An intelligent calendar agent that protects your time by autonomously blocking out slots for deep work based on your habits. Smart scheduling that defends focus time and optimizes meeting placement.",
    emoji: "📅", color: "from-purple-600 to-purple-800",
    directUrl: "https://reclaim.ai/?via=aiwebtools", imageUrl: reclaimHero,
    tags: ["Productivity & Utilities", "AI Agents", "calendar management", "deep work", "time blocking", "smart scheduling", "Productivity Agent"], category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Globe, title: "Yellow.ai",
    description: "A specialized customer service agent platform supporting over 35 channels including WhatsApp, SMS, and voice. Enterprise-grade conversational AI with multi-language support for global customer engagement.",
    emoji: "💛", color: "from-yellow-400 to-yellow-600",
    directUrl: "https://yellow.ai/?via=aiwebtools", imageUrl: yellowHero,
    tags: ["AI Agents", "AI Customer Support", "omnichannel", "WhatsApp", "SMS", "multi-language", "enterprise", "Customer Support Agent"], category: "AI Customer Support", rating: 4.5,
  },
  {
    icon: Search, title: "Capacity",
    description: "A 'Knowledge-to-Action' agent that connects to your internal document stores to answer team questions and automate HR tickets. Enterprise knowledge base automation with intelligent ticket resolution.",
    emoji: "📚", color: "from-blue-500 to-blue-700",
    directUrl: "https://capacity.com/?via=aiwebtools", imageUrl: capacityHero,
    tags: ["AI Agents", "Business & Productivity", "knowledge management", "HR automation", "ticket resolution", "enterprise", "Knowledge Agent"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Brain, title: "Granola",
    description: "A meeting agent that focuses on 'User-First' notes—it enhances what you write rather than giving a wall of transcript. AI-augmented note-taking that respects your style while adding context and action items.",
    emoji: "🥣", color: "from-amber-500 to-amber-700",
    directUrl: "https://granola.so/?via=aiwebtools", imageUrl: granolaHero,
    tags: ["Productivity & Utilities", "AI Agents", "meeting notes", "note-taking", "user-first", "transcription enhancement", "Meeting Agent"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Shield, title: "Cognosys",
    description: "A high-level autonomous agent that breaks large, vague goals into sub-tasks and uses web search to fulfill them. Autonomous task decomposition and execution with transparent reasoning chains.",
    emoji: "🧠", color: "from-blue-600 to-cyan-700",
    directUrl: "https://cognosys.ai/?via=aiwebtools", imageUrl: cognosysHero,
    tags: ["AI Agents", "Productivity & Utilities", "autonomous agent", "task decomposition", "web search", "goal planning", "Autonomous Agent"], category: "AI Agents", rating: 4.5,
  },
];
