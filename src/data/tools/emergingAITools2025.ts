import { Tool } from "@/types/tools";
import { 
  Bot, 
  Stethoscope, 
  Heart,
  Scale, 
  FileSignature
} from "lucide-react";

export const emergingAITools2025: Tool[] = [
  // AI AGENTS
  {
    icon: Bot,
    title: "Relevance AI",
    description: "No-code AI agent builder platform. Create, deploy, and manage autonomous AI agents without coding. Build workflows, connect to APIs, and automate complex business processes with visual agent design.",
    emoji: "🤖",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://relevanceai.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/relevance-ai-hero.png",
    tags: ["AI agents", "no-code", "automation", "workflow builder", "autonomous agents", "agent builder", "Automation Agent"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 4532
  },

  // HEALTHCARE AI
  {
    icon: Stethoscope,
    title: "Glass Health",
    description: "Clinical decision support AI for healthcare professionals. Get AI-powered differential diagnoses, treatment suggestions, and clinical reasoning support. Used by physicians and medical students for evidence-based care.",
    emoji: "🏥",
    color: "from-blue-600 to-cyan-500",
    directUrl: "https://glass.health/?via=aiwebtools",
    imageUrl: "/src/assets/tools/glass-health-hero.png",
    tags: ["healthcare AI", "clinical decision support", "diagnosis", "medical AI", "physicians", "treatment planning", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 3421
  },
  {
    icon: Heart,
    title: "Nabla",
    description: "AI copilot for clinicians that automates clinical documentation. Listens to patient consultations and generates accurate medical notes, saving doctors hours of administrative work while improving care quality.",
    emoji: "💊",
    color: "from-teal-500 to-purple-600",
    directUrl: "https://www.nabla.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/nabla-ai-hero.png",
    tags: ["healthcare AI", "clinical documentation", "medical notes", "AI scribe", "physicians", "patient care", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 2876
  },

  // LEGAL AI
  {
    icon: Scale,
    title: "Clio Duo",
    description: "AI-powered legal assistant integrated into Clio's practice management platform. Draft documents, summarize cases, find precedents, and get instant answers about your matters. Built specifically for law firm workflows.",
    emoji: "⚖️",
    color: "from-indigo-600 to-blue-700",
    directUrl: "https://www.clio.com/duo/?via=aiwebtools",
    imageUrl: "/src/assets/tools/clio-duo-hero.png",
    tags: ["legal AI", "law firm", "practice management", "document drafting", "case management", "legal assistant", "legal information help"],
    category: "AI Legal Tech",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: FileSignature,
    title: "Spellbook",
    description: "AI contract drafting assistant trained on billions of legal data points. Draft, review, and negotiate contracts 10x faster. Suggests clauses, identifies risks, and ensures compliance with legal standards.",
    emoji: "📜",
    color: "from-purple-600 to-amber-500",
    directUrl: "https://www.spellbook.legal/?via=aiwebtools",
    imageUrl: "/src/assets/tools/spellbook-hero.png",
    tags: ["legal AI", "contract drafting", "contract review", "legal automation", "clause suggestions", "legal tech", "legal information help"],
    category: "AI Legal Tech",
    rating: 4.7,
    totalVotes: 4123
  }
];
