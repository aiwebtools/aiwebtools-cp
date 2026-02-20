import { Tool } from "@/types/tools";
import tripoAiHero from "@/assets/tools/tripo-ai-hero.jpg";
import sloydAiHero from "@/assets/tools/sloyd-ai-hero.jpg";
import blenderHero from "@/assets/tools/blender-hero.jpg";
import csmAiHero from "@/assets/tools/csm-ai-hero.jpg";
import scenarioAiHero from "@/assets/tools/scenario-ai-hero.jpg";
import threeDaiStudioHero from "@/assets/tools/3d-ai-studio-hero.jpg";
import hyper3dHero from "@/assets/tools/hyper-3d-hero.jpg";
import masterpiecexHero from "@/assets/tools/masterpiecex-hero.jpg";
import splineHero from "@/assets/tools/spline-hero.jpg";
import polycamHero from "@/assets/tools/polycam-hero.jpg";
import { 
  Box, 
  Package, 
  Eye, 
  Layers, 
  Zap, 
  Sparkles,
  Monitor,
  Camera,
  Globe,
  Settings,
  Wand2,
  Package2,
  Gamepad2
} from "lucide-react";

export const threeDAndVisualizationTools: Tool[] = [
  {
    icon: Globe,
    title: "Many-Worlds 3D Environment Generator",
    description: "ManyWorlds is a revolutionary AI-powered platform that generates immersive VR environments and video game worlds using advanced 3D generation technology. Create stunning virtual reality experiences, game environments, and interactive 3D spaces from text descriptions. Perfect for game developers, VR creators, and digital artists seeking to build expansive virtual worlds with cutting-edge AI technology.",
    emoji: "🌍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.manyworlds.run/?via=aiwebtools",
    tags: ["VR environments", "game environments", "3D generation", "virtual reality", "world building", "game development", "3D worlds", "aiwebtools", "video game", "video game generator", "ai to make video games"],
    category: "3D & VISUALIZATION",
    rating: 4.9,
    totalVotes: 4234
  },
  {
    icon: Gamepad2,
    title: "ROSEBUD AI - Video Game Generation",
    description: "Revolutionary AI-powered platform that generates complete video games from text descriptions. Create playable games, assets, and interactive experiences using advanced AI technology for game development and creative expression.",
    emoji: "🎮",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://rosebud.ai/?via=aiwebtools",
    tags: ["AI game generation", "video games", "game development", "text-to-game", "interactive experiences", "game assets", "rosebud ai", "aiwebtools", "video game generator", "ai to make video games", "make video games", "create video games"],
    category: "3D & VISUALIZATION",
    rating: 4.8,
    totalVotes: 3890
  },
  {
    icon: Package,
    title: "Meshy Ai - TEXT TO 3D Generator",
    description: "AI-powered 3D model generator that creates high-quality 3D assets from text prompts or images. Perfect for game development and 3D visualization. Get 20% OFF with Promo CODE: AIWEBTOOLS",
    emoji: "🎲",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377357834886582463/image.png?ex=6838abf1&is=68375a71&hm=8796d07ef297f42d59644ba648de8f8e892976312a6e04ec90242aea3c02c9ad&",
    tags: ["AI 3D generation", "text-to-3D", "image-to-3D", "game assets", "3D models", "meshy ai", "aiwebtools", "video game", "video game generator", "game development"],
    category: "3D & VISUALIZATION",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Package2,
    title: "TRIPO AI",
    description: "Advanced AI-powered 3D model generation platform that creates high-quality 3D assets from text descriptions and images with professional-grade results.",
    emoji: "🎯",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://tripo3d.ai/?via=aiwebtools",
    imageUrl: tripoAiHero,
    tags: ["AI 3D generation", "text-to-3D", "3D modeling", "professional 3D", "3D assets"],
    category: "3D & VISUALIZATION",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Wand2,
    title: "SPLINE AI",
    description: "AI-powered 3D design tool that generates stunning 3D objects and scenes from text prompts, integrated with Spline's collaborative design platform.",
    emoji: "✨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://spline.design/ai-generate/?via=aiwebtools",
    tags: ["AI 3D generation", "collaborative design", "3D objects", "web 3D", "design tool"],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Package,
    title: "Sloyd AI",
    description: "Revolutionary AI 3D generator that creates customizable 3D models from simple text prompts, perfect for game development and creative projects.",
    emoji: "🔧",
    color: "from-orange-500 to-red-600",
    directUrl: "https://sloyd.ai/?via=aiwebtools",
    imageUrl: sloydAiHero,
    tags: ["AI 3D models", "customizable 3D", "game development", "text-to-3D", "creative tools", "video game", "video game generator", "game assets"],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 2234
  },
  {
    icon: Sparkles,
    title: "3D AI Studio",
    description: "Comprehensive AI-powered 3D creation studio offering advanced tools for generating, editing, and optimizing 3D models with professional workflows.",
    emoji: "🏭",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://3daistudio.com/?via=aiwebtools",
    imageUrl: threeDaiStudioHero,
    tags: ["3D studio", "AI 3D creation", "professional tools", "3D editing", "workflow optimization"],
    category: "3D & VISUALIZATION",
    rating: 4.4,
    totalVotes: 1987
  },
  {
    icon: Zap,
    title: "Hyper 3D",
    description: "High-performance AI 3D generation platform delivering ultra-fast 3D model creation with exceptional quality and detail for professional applications.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://hyper3d.ai/?via=aiwebtools",
    imageUrl: hyper3dHero,
    tags: ["high-performance 3D", "fast 3D generation", "professional 3D", "AI modeling", "quality 3D"],
    category: "3D & VISUALIZATION",
    rating: 4.3,
    totalVotes: 1765
  },
  {
    icon: Globe,
    title: "MasterpieceX",
    description: "Premium AI-powered 3D creation platform designed for professionals, offering masterpiece-quality 3D models and advanced creative tools.",
    emoji: "🎨",
    color: "from-gold-500 to-purple-600",
    directUrl: "https://masterpiece.studio/?via=aiwebtools",
    imageUrl: masterpiecexHero,
    tags: ["premium 3D", "masterpiece quality", "professional 3D", "AI creation", "advanced tools"],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 2123
  },
  {
    icon: Box,
    title: "3D Print GPT",
    description: "Advanced 3D printing assistant for design optimization, troubleshooting, material selection, and printing guidance. Expert advice for all levels of 3D printing.",
    emoji: "🖨️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://3dprintgpt.lovable.app/?via=aiwebtools",
    tags: ["3D printing", "design optimization", "troubleshooting", "materials", "printing guidance"],
    category: "3D & VISUALIZATION",
    rating: 4.3,
    totalVotes: 2456
  },
  {
    icon: Box,
    title: "Spline",
    description: "Design and collaborate on 3D web experiences in the browser. Create interactive 3D objects, animations, and scenes with real-time collaboration.",
    emoji: "📦",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://spline.design/",
    imageUrl: splineHero,
    tags: ["3D design", "web 3D", "interactive", "collaboration", "browser-based"],
    category: "3D & Visualization Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "Luma AI",
    description: "Capture and create photorealistic 3D models using neural radiance fields. Transform photos into stunning 3D experiences.",
    emoji: "✨",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://lumalabs.ai/",
    tags: ["photorealistic 3D", "neural radiance fields", "photo-to-3D", "3D capture", "NeRF"],
    category: "3D & Visualization Tools",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Eye,
    title: "Polycam",
    description: "3D scanning app that turns photos into 3D models. Capture objects and spaces with your phone and create detailed 3D reconstructions.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://poly.cam/",
    imageUrl: polycamHero,
    tags: ["3D scanning", "photo-to-3D", "mobile scanning", "3D reconstruction", "photogrammetry"],
    category: "3D & Visualization Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Globe,
    title: "Blender",
    description: "Free and open-source 3D creation suite supporting modeling, rigging, animation, simulation, rendering, compositing, and motion tracking.",
    emoji: "🌐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.blender.org/",
    imageUrl: blenderHero,
    tags: ["3D modeling", "animation", "rendering", "open source", "free", "professional"],
    category: "3D & Visualization Tools",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Package,
    title: "Kaedim AI",
    description: "Convert 2D images into production-ready 3D models in minutes. AI-powered 3D asset generation with human quality control for game development and creative projects.",
    emoji: "🎯",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.kaedim3d.com/?via=aiwebtools",
    tags: ["2D to 3D", "AI 3D generation", "game assets", "production-ready", "quality control", "image to 3D"],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Sparkles,
    title: "Alpha3D",
    description: "Transform 2D images into high-quality 3D models automatically. AI-powered platform for creating 3D assets for AR, VR, gaming, and e-commerce.",
    emoji: "🔮",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://www.alpha3d.io/?via=aiwebtools",
    tags: ["2D to 3D", "AI 3D models", "AR", "VR", "e-commerce 3D", "game assets"],
    category: "3D & VISUALIZATION",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Box,
    title: "CSM.ai",
    description: "Generate game-ready 3D models from text, images, or sketches. AI-powered 3D asset creation with rigging, texturing, and animation support.",
    emoji: "🎮",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://csm.ai/?via=aiwebtools",
    imageUrl: csmAiHero,
    tags: ["game-ready 3D", "text to 3D", "rigging", "texturing", "animation", "game development"],
    category: "3D & VISUALIZATION",
    rating: 4.6,
    totalVotes: 3120
  },
  {
    icon: Layers,
    title: "Scenario AI",
    description: "AI-powered game asset generator creating consistent, style-matched art for games. Generate characters, props, environments, and textures with custom trained models.",
    emoji: "🎨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.scenario.com/?via=aiwebtools",
    imageUrl: scenarioAiHero,
    tags: ["game assets", "character design", "AI art", "style consistency", "game development", "textures"],
    category: "3D & VISUALIZATION",
    rating: 4.7,
    totalVotes: 3678
  },
  {
    icon: Wand2,
    title: "Genmo AI",
    description: "Create 3D objects, videos, and animations from text descriptions. AI-powered generative platform for immersive 3D content creation.",
    emoji: "🎬",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://www.genmo.ai/?via=aiwebtools",
    tags: ["3D generation", "AI video", "text to 3D", "animation", "creative AI", "generative"],
    category: "3D & VISUALIZATION",
    rating: 4.5,
    totalVotes: 2567
  },
  {
    icon: Package2,
    title: "InstantMesh",
    description: "Open-source AI model for instant 3D mesh generation from single images. Fast, high-quality 3D reconstruction for research and development.",
    emoji: "⚡",
    color: "from-green-500 to-teal-600",
    directUrl: "https://github.com/TencentARC/InstantMesh",
    tags: ["open source", "instant 3D", "mesh generation", "image to 3D", "research", "fast 3D"],
    category: "3D & VISUALIZATION",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Monitor,
    title: "3DFY AI",
    description: "Text-to-3D generation platform creating high-quality 3D models at scale. AI-powered solution for e-commerce, gaming, and enterprise applications.",
    emoji: "🏢",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://3dfy.ai/?via=aiwebtools",
    tags: ["text to 3D", "enterprise 3D", "e-commerce", "scalable 3D", "AI generation", "business"],
    category: "3D & VISUALIZATION",
    rating: 4.4,
    totalVotes: 2234
  }
];
