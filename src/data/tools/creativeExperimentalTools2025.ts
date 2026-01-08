import { Tool } from "@/types/tools";
import { 
  Gamepad2, Palette, Brain, Calculator, 
  Sparkles, Code, Globe, Zap
} from "lucide-react";

export const creativeExperimentalTools2025: Tool[] = [
  {
    icon: Calculator,
    title: "AlphaGeometry",
    description: "Research model by Google DeepMind that reasons about geometry problems and mathematical proofs with advanced AI reasoning.",
    emoji: "📐",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/?via=aiwebtools",
    imageUrl: "/src/assets/tools/alphageometry-hero.png",
    tags: ["Google DeepMind", "Geometry", "Mathematical Proofs", "AI Reasoning", "Research"],
    category: "CREATIVE & ENTERTAINMENT",
    rating: 4.6,
    totalVotes: 2840
  },
  {
    icon: Gamepad2,
    title: "Genie 3",
    description: "World model system from Google DeepMind capable of generating playable 2D games from simple prompts and descriptions.",
    emoji: "🎮",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://deepmind.google/discover/blog/genie-generative-interactive-environments/?via=aiwebtools",
    imageUrl: "/src/assets/tools/genie3-hero.png",
    tags: ["Google DeepMind", "Game Generation", "2D Games", "Playable", "Interactive Environments"],
    category: "CREATIVE & ENTERTAINMENT",
    rating: 4.8,
    totalVotes: 3920
  },
  {
    icon: Brain,
    title: "Project Astra",
    description: "Prototype from Google DeepMind showcasing an AI assistant capable of real-world understanding and interaction.",
    emoji: "🧠",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://deepmind.google/technologies/gemini/project-astra/?via=aiwebtools",
    imageUrl: "/src/assets/tools/project-astra-hero.png",
    tags: ["Google DeepMind", "AI Assistant", "Real-world Understanding", "Prototype", "Advanced AI"],
    category: "CREATIVE & ENTERTAINMENT",
    rating: 4.7,
    totalVotes: 3150
  }
];