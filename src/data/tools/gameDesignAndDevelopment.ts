
import { Tool } from "@/types/tools";
import { 
  Gamepad2,
  Monitor,
  Code,
  Paintbrush,
  Music,
  Zap,
  Target,
  Users,
  Cpu,
  Layers,
  FileText,
  Joystick,
  Globe
} from "lucide-react";

import seeleHero from "@/assets/tools/seele-hero.jpg";
import mirage2Hero from "@/assets/tools/mirage-2-hero.jpg";
import scenarioHero from "@/assets/tools/scenario-hero.jpg";
import leonardoGameArtHero from "@/assets/tools/leonardo-game-art-hero.jpg";
import ludoAiHero from "@/assets/tools/ludo-ai-hero.jpg";
import charismaAiHero from "@/assets/tools/charisma-ai-hero.jpg";
import prometheanAiHero from "@/assets/tools/promethean-ai-hero.jpg";
import soundrawAiHero from "@/assets/tools/soundraw-ai-hero.jpg";
import inworldAiHero from "@/assets/tools/inworld-ai-hero.jpg";

export const gameDesignAndDevelopment: Tool[] = [
  {
    icon: FileText,
    title: "Game Design Document / Developer GPT",
    description: "Bring your video game ideas to life with Game Design Document Developer GPT! This tool is your ultimate assistant for game development, guiding you from concept to completion. It helps you create the perfect Game Design Document (GDD) to plan your video game. Whether you're using Unity, Unreal Engine, or another platform, Game Document Design Developer GPT is your comprehensive assistant for designing and developing your next game.",
    emoji: "🎮",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://gamedesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["game design", "game development", "Unity", "Unreal Engine", "GDD", "video game", "video game generator", "ai to make video games", "make video games", "create video games"],
    category: "COMMUNICATION & COLLABORATION AI TOOLS",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Gamepad2,
    title: "Seele Video Game Generator",
    description: "AI-powered 3D game creation platform that transforms text prompts into playable interactive game worlds. Create and remix 3D games without coding using cutting-edge AI technology backed by Baidu and designed for the metaverse.",
    emoji: "🎮",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://www.seeles.ai/home?via=aiwebtools",
    imageUrl: seeleHero,
    tags: ["3D games", "text to game", "AI game creation", "no coding", "metaverse", "3D worlds"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.6,
    totalVotes: 1250
  },
  {
    icon: Globe,
    title: "Mirage 2 - Generative World Engine",
    description: "Research demonstration of AI-powered generative world engine for creating dynamic game environments. Limited-time availability research project showcasing advanced procedural world generation capabilities. Not endorsed by video game studios and is purely for research purposes.",
    emoji: "🌍",
    color: "from-green-500 to-teal-600",
    directUrl: "https://demo.dynamicslab.ai/",
    imageUrl: mirage2Hero,
    tags: ["world generation", "procedural generation", "research demo", "AI worlds", "game environments", "experimental"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.4,
    totalVotes: 890
  },
  {
    icon: Paintbrush,
    title: "Scenario - AI Game Asset Generator",
    description: "Custom AI-powered game asset generator that creates style-consistent characters, props, environments, and textures. Train your own AI models for unique game art.",
    emoji: "🎨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.scenario.com/?via=aiwebtools",
    imageUrl: scenarioHero,
    tags: ["game assets", "character design", "AI art", "style consistency", "custom models", "game development"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.7,
    totalVotes: 3450
  },
  {
    icon: Joystick,
    title: "Leonardo.AI for Game Art",
    description: "AI art generator optimized for game development. Create character designs, concept art, items, and environments with game-focused AI models.",
    emoji: "🎮",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://leonardo.ai/?via=aiwebtools",
    imageUrl: leonardoGameArtHero,
    tags: ["game art", "character design", "concept art", "AI generation", "game development", "creative"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.6,
    totalVotes: 4120
  },
  {
    icon: Code,
    title: "Ludo AI",
    description: "AI-powered game design platform for ideation and research. Discover game trends, analyze competitors, and generate game concepts with AI assistance.",
    emoji: "🎲",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://ludo.ai/?via=aiwebtools",
    imageUrl: ludoAiHero,
    tags: ["game design", "game research", "trend analysis", "ideation", "competitive analysis", "AI assistant"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.5,
    totalVotes: 2780
  },
  {
    icon: Cpu,
    title: "Charisma.ai",
    description: "AI-powered interactive storytelling platform for games. Create believable virtual characters with dynamic dialogue and emotional responses.",
    emoji: "🎭",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://charisma.ai/?via=aiwebtools",
    imageUrl: charismaAiHero,
    tags: ["interactive storytelling", "game dialogue", "virtual characters", "AI NPCs", "narrative design", "game development"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.6,
    totalVotes: 2340
  },
  {
    icon: Target,
    title: "Promethean AI",
    description: "AI assistant for virtual world creation, helping game artists build 3D environments faster. Automates asset placement and environment design.",
    emoji: "🌎",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.prometheanai.com/?via=aiwebtools",
    imageUrl: prometheanAiHero,
    tags: ["world building", "environment design", "3D environments", "asset placement", "game development", "automation"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Music,
    title: "Soundraw AI - Game Music",
    description: "AI music generator for creating custom game soundtracks and background music. Generate royalty-free music tailored to your game's mood and style.",
    emoji: "🎵",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://soundraw.io/?via=aiwebtools",
    imageUrl: soundrawAiHero,
    tags: ["game music", "soundtrack generation", "AI music", "royalty-free", "background music", "audio"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.4,
    totalVotes: 3120
  },
  {
    icon: Zap,
    title: "Inworld AI",
    description: "AI engine for creating interactive NPCs with natural conversation, emotional intelligence, and dynamic personalities for games.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.inworld.ai/?via=aiwebtools",
    imageUrl: inworldAiHero,
    tags: ["AI NPCs", "interactive characters", "game AI", "conversational AI", "character intelligence", "game development"],
    category: "GAME DESIGN & DEVELOPMENT",
    rating: 4.7,
    totalVotes: 3560
  }
];
