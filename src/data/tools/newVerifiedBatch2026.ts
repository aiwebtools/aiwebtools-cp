import { Tool } from "@/types/tools";
import { Bot, Zap, Users, Smartphone, Brain } from "lucide-react";

import simAiHero from "@/assets/tools/sim-ai-hero.jpg";
import aiCrucibleHero from "@/assets/tools/ai-crucible-hero.jpg";
import twainAiHero from "@/assets/tools/twain-ai-hero.jpg";
import twineoHero from "@/assets/tools/twineo-hero.jpg";
import camelAiHero from "@/assets/tools/camel-ai-hero.jpg";

export const newVerifiedBatch2026: Tool[] = [
  {
    icon: Bot,
    title: "Sim AI",
    description: "Open-source AI agent orchestration platform with 27K+ GitHub stars. Build, deploy, and orchestrate AI agent workflows visually with Mothership — a central intelligence layer. Connect LLMs to tools like Slack, Supabase, and Pinecone with drag-and-drop simplicity. Features MCP server deployment, knowledge base connectors, scheduled tasks, and a copilot for rapid workflow creation.",
    emoji: "🧠",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://sim.ai/?via=aiwebtools",
    imageUrl: simAiHero,
    tags: ["AI Agents", "agent orchestration", "open source", "workflow builder", "Mothership", "MCP", "multi-agent", "no-code agents", "LLM tools", "Slack integration", "Supabase", "drag and drop", "agent platform"],
    category: "AI Agents",
    rating: 4.9,
    isFree: true,
  },
  {
    icon: Zap,
    title: "AI Crucible",
    description: "Precision AI engineering platform using advanced ensemble refinement techniques. Combine 38+ AI models from OpenAI, Anthropic, Google, xAI, and more with 7 ensemble strategies to reduce hallucination and achieve target output precision. Features 322 benchmarked evaluations across 20 models and 14 task categories. Perfect for enterprises needing reliable, accurate AI outputs for critical applications.",
    emoji: "🔥",
    color: "from-orange-500 to-red-700",
    directUrl: "https://ai-crucible.com/?via=aiwebtools",
    imageUrl: aiCrucibleHero,
    tags: ["ensemble AI", "model refinement", "hallucination reduction", "multi-model", "AI optimization", "precision engineering", "benchmarking", "enterprise AI", "model comparison", "AI accuracy"],
    category: "AI Research & Development",
    rating: 4.7,
    isFree: false,
  },
  {
    icon: Users,
    title: "Twain AI",
    description: "Revolutionary AI digital twin social networking platform. Build an AI clone trained on your voice, memories, and personality traits — then let your digital twin socialize in the network, having conversations with other digital twins while you live your life. Discover compatible people through AI-to-AI interactions. Your twin finds your tribe so you don't have to scroll endlessly.",
    emoji: "👥",
    color: "from-purple-500 to-teal-500",
    directUrl: "https://twain-ai.app/?via=aiwebtools",
    imageUrl: twainAiHero,
    tags: ["digital twin", "AI clone", "social networking", "AI socializing", "personality AI", "voice clone", "find your people", "AI matchmaking", "social AI", "networking"],
    category: "Communication & Social AI",
    rating: 4.5,
    isFree: true,
  },
  {
    icon: Smartphone,
    title: "Twineo",
    description: "Create your own AI Digital Twin on your iPhone — an AI version of you that knows your opinions, interests, and preferences. Train it with your personality, test its knowledge, ask for personalized recommendations, or let your Twin answer questions on your behalf. A deeply personal AI companion that truly understands you and can represent you digitally.",
    emoji: "📱",
    color: "from-blue-400 to-indigo-600",
    directUrl: "https://apps.apple.com/app/twineo-ai-digital-twin/id6744677005",
    imageUrl: twineoHero,
    tags: ["digital twin", "AI clone", "mobile app", "iOS", "iPhone", "personal AI", "AI avatar", "personality clone", "recommendations", "AI companion"],
    category: "Mobile AI Apps",
    rating: 4.4,
    isFree: true,
  },
  {
    icon: Brain,
    title: "CAMEL AI",
    description: "Open-source multi-agent framework for building communicative AI agent systems. CAMEL (Communicative Agents for 'Mind' Exploration of Large Language Models) enables role-playing between AI agents for autonomous cooperation and task solving. Used by researchers and developers to create sophisticated multi-agent conversations, simulations, and collaborative AI systems. A foundational framework for the future of AI teamwork.",
    emoji: "🐪",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://www.camel-ai.org/?via=aiwebtools",
    imageUrl: camelAiHero,
    tags: ["multi-agent", "open source", "agent framework", "role playing", "AI cooperation", "LLM research", "communicative agents", "AI simulation", "autonomous agents", "agent collaboration", "Python"],
    category: "AI Agents",
    rating: 4.8,
    isFree: true,
  },
];
