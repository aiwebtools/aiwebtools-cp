
import { Tool } from "@/types/tools";
import { 
  Gamepad2, 
  Code, 
  Cpu, 
  Zap, 
  Target, 
  Puzzle,
  Trophy,
  Joystick,
  Settings,
  Play
} from "lucide-react";

export const gameDesignAndDevelopment: Tool[] = [
  {
    icon: Gamepad2,
    title: "GAME DESIGNER GPT",
    description: "Comprehensive game design assistant for creating engaging gameplay mechanics, storylines, character development, and game balancing across all genres.",
    emoji: "🎮",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gamedesignergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IfYeUgW5Ue4",
    category: "Game Design & Development",
    tags: ["game design", "gameplay mechanics", "storytelling", "character development"],
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Code,
    title: "UNITY GAME DEVELOPER GPT",
    description: "Expert Unity development assistant for C# scripting, game object management, physics implementation, and optimization techniques.",
    emoji: "🔧",
    color: "from-orange-500 to-red-600",
    directUrl: "https://unitygamedeveloper.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    category: "Game Design & Development",
    tags: ["Unity", "C# scripting", "game development", "optimization"],
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Trophy,
    title: "GAME MONETIZATION STRATEGIST GPT",
    description: "Strategic guidance for game monetization, player retention, in-app purchases, advertising integration, and revenue optimization.",
    emoji: "🏆",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://gamemonetization.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1556438064-2d7646166914",
    category: "Game Design & Development",
    tags: ["monetization", "player retention", "revenue optimization", "game economics"],
    rating: 4.5,
    totalVotes: 2345
  }
];
