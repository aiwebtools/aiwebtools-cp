import { Tool } from "@/types/tools";
import { Gamepad2, Sparkles, Users, Wand2, Bot, Dice5 } from "lucide-react";

export const aiGamingTools: Tool[] = [
  {
    icon: Gamepad2,
    title: "Scenario.ai",
    description: "AI-powered game asset generation platform. Create custom game art, characters, environments, and props with consistent style for your game development projects.",
    emoji: "🎮",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.scenario.com/?via=aiwebtools",
    tags: ["game assets", "AI art", "game development", "character design", "environment art", "asset generation"],
    category: "AI Gaming & Game Development",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: Dice5,
    title: "Ludo.ai",
    description: "AI-powered game design assistant for ideation, research, and documentation. Generate game concepts, mechanics, and design documents with intelligent suggestions.",
    emoji: "🎲",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://ludo.ai/?via=aiwebtools",
    tags: ["game design", "game concepts", "ideation", "game mechanics", "design documents", "AI assistant"],
    category: "AI Gaming & Game Development",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Users,
    title: "Inworld AI",
    description: "AI-powered character engine for creating intelligent NPCs with natural conversations, emotions, and memories. Build immersive interactive experiences and games.",
    emoji: "👥",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.inworld.ai/?via=aiwebtools",
    tags: ["AI NPCs", "character AI", "conversational AI", "game characters", "interactive experiences", "intelligent agents"],
    category: "AI Gaming & Game Development",
    rating: 4.8,
    totalVotes: 13456
  },
  {
    icon: Wand2,
    title: "Rosebud AI",
    description: "AI game development platform for creating games through natural language. Build games by describing what you want, generate assets, and iterate instantly.",
    emoji: "🪄",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.rosebud.ai/?via=aiwebtools",
    tags: ["game development", "no-code games", "AI game creation", "natural language", "game builder", "rapid prototyping"],
    category: "AI Gaming & Game Development",
    rating: 4.5,
    totalVotes: 7890
  },
  {
    icon: Bot,
    title: "Convai",
    description: "Conversational AI for game characters and virtual worlds. Create NPCs with voice-based conversations, contextual awareness, and dynamic responses.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.convai.com/?via=aiwebtools",
    tags: ["conversational AI", "game NPCs", "voice AI", "virtual characters", "interactive dialogue", "game AI"],
    category: "AI Gaming & Game Development",
    rating: 4.6,
    totalVotes: 8234
  },
  {
    icon: Sparkles,
    title: "Leonardo.Ai",
    description: "AI-powered creative tool for generating game assets, concept art, and visual content. Create consistent, high-quality game art with style control.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://leonardo.ai/?via=aiwebtools",
    tags: ["game art", "concept art", "AI generation", "game assets", "visual content", "style consistency"],
    category: "AI Gaming & Game Development",
    rating: 4.7,
    totalVotes: 16789
  }
];
