import { Tool } from "@/types/tools";
import openartWorldsHero from "@/assets/tools/openart-worlds-hero.jpg";
import { Gamepad2, Globe, Layers, Box, Users, Wand2, Sparkles, Eye, Cpu, Package, Film, Zap, Brain, Search, BookOpen } from "lucide-react";

import gameerHero from "@/assets/tools/gameer-hero.jpg";
import gdevelopHero from "@/assets/tools/gdevelop-hero.jpg";
import buildboxHero from "@/assets/tools/buildbox-hero.jpg";
import blockadeLabsHero from "@/assets/tools/blockade-labs-hero.jpg";
import construct3Hero from "@/assets/tools/construct3-hero.jpg";
import avaturnHero from "@/assets/tools/avaturn-hero.jpg";
import readyPlayerMeHero from "@/assets/tools/ready-player-me-hero.jpg";
import rodinGen1Hero from "@/assets/tools/rodin-gen1-hero.jpg";
import decartOasisHero from "@/assets/tools/decart-oasis-hero.jpg";
import genie3Hero from "@/assets/tools/genie3-hero.jpg";
import metaWorldgenHero from "@/assets/tools/meta-worldgen-hero.jpg";
import mochiDiffusionHero from "@/assets/tools/mochi-diffusion-hero.jpg";
import ludoAiNewHero from "@/assets/tools/ludo-ai-new-hero.jpg";
import selfcadHero from "@/assets/tools/selfcad-hero.jpg";
import manticoreCoreHero from "@/assets/tools/manticore-core-hero.jpg";
import riveHero from "@/assets/tools/rive-hero.jpg";
import anythingWorldHero from "@/assets/tools/anything-world-hero.jpg";
import prometheanAiHero from "@/assets/tools/promethean-ai-hero.jpg";
import didimoHero from "@/assets/tools/didimo-hero.jpg";
import hypotheticalHero from "@/assets/tools/hypothetical-hero.jpg";
import elicitHero from "@/assets/tools/elicit-hero.jpg";
import infiniteCraftHero from "@/assets/tools/infinite-craft-hero.jpg";
import aiDungeonHero from "@/assets/tools/ai-dungeon-hero.jpg";
import storiqueHero from "@/assets/tools/storique-hero.jpg";
import scenarioHero from "@/assets/tools/scenario-hero.jpg";
import meshyGameHero from "@/assets/tools/meshy-game-hero.jpg";
import kaedimHero from "@/assets/tools/kaedim-hero.jpg";
import inworldAiHero from "@/assets/tools/inworld-ai-hero.jpg";
import thisPersonHero from "@/assets/tools/thispersondoesnotexist-hero.jpg";

export const gameVR3DBatch2026: Tool[] = [
  // === TEXT-TO-GAME & GAME CREATION ===
  {
    icon: Gamepad2,
    title: "Gameer",
    description: "AI game engine that turns text prompts into playable games in one click. Type a story, get a fully interactive game with cinematic video — no code, no team, no budget. Think TikTok meets Unity.",
    emoji: "🎮",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.gameer.io/?via=aiwebtools",
    imageUrl: gameerHero,
    tags: ["text-to-game", "AI game generator", "no-code games", "game creation", "interactive stories", "RPG maker", "game engine", "video game", "play games", "games"],
    category: "Gaming & Entertainment",
    rating: 4.8,
    totalVotes: 3450
  },
  {
    icon: Gamepad2,
    title: "GDevelop",
    description: "The best open-source, no-code & AI game engine. Create 2D and 3D games with visual scripting, publish on Steam, App Stores, and web. Used by over 250,000 creators monthly with games getting millions of plays.",
    emoji: "🕹️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://gdevelop.io/?via=aiwebtools",
    imageUrl: gdevelopHero,
    tags: ["game engine", "no-code", "open source", "2D games", "3D games", "visual scripting", "Steam", "game development", "games", "indie game"],
    category: "Gaming & Entertainment",
    rating: 4.7,
    totalVotes: 12800
  },
  {
    icon: Gamepad2,
    title: "Buildbox",
    description: "Drag-and-drop no-code game builder for creating mobile games without programming. Build beautiful 2D and 3D games with Buildbox Classic, Buildbox 3, and Buildbox 4 — then publish to app stores.",
    emoji: "📦",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.buildbox.com/?via=aiwebtools",
    imageUrl: buildboxHero,
    tags: ["game builder", "no-code", "mobile games", "drag-and-drop", "game creation", "app store", "2D games", "3D games", "games"],
    category: "Gaming & Entertainment",
    rating: 4.5,
    totalVotes: 8900
  },
  {
    icon: Gamepad2,
    title: "Construct 3",
    description: "Browser-based game engine used by EA, SEGA, and Zynga. Create 2D and 3D games with powerful visual scripting — no downloads needed. Games run on web, mobile, desktop, and consoles.",
    emoji: "🏗️",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.construct.net/?via=aiwebtools",
    imageUrl: construct3Hero,
    tags: ["game engine", "browser-based", "visual scripting", "HTML5 games", "2D games", "game development", "no download", "games"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 15400
  },
  {
    icon: Gamepad2,
    title: "Core by Manticore Games",
    description: "Free UGC game creation platform powered by Unreal Engine. Create, publish, and play multiplayer games with AI-assisted tools, pre-built assets, and community marketplace — like Roblox for AAA quality.",
    emoji: "🎯",
    color: "from-purple-600 to-violet-700",
    directUrl: "https://www.coregames.com/?via=aiwebtools",
    imageUrl: manticoreCoreHero,
    tags: ["UGC platform", "Unreal Engine", "multiplayer", "game creation", "free", "community", "game marketplace", "games"],
    category: "Gaming & Entertainment",
    rating: 4.5,
    totalVotes: 6700
  },
  {
    icon: Gamepad2,
    title: "AI Dungeon",
    description: "The original AI-powered infinite text adventure game. Every story is unique — explore fantasy worlds, solve mysteries, or create any scenario you can imagine. Powered by frontier AI models for endless interactive fiction.",
    emoji: "🐉",
    color: "from-red-700 to-amber-600",
    directUrl: "https://aidungeon.com/?via=aiwebtools",
    imageUrl: aiDungeonHero,
    tags: ["text adventure", "interactive fiction", "AI storytelling", "RPG", "infinite stories", "game", "creative writing", "games"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 45000
  },
  {
    icon: Sparkles,
    title: "Infinite Craft",
    description: "Mind-bending AI alchemy game by Neal.fun where you combine elements to create anything in the universe. Start with water, fire, earth, and wind — discover infinite combinations powered by AI. Addictively creative.",
    emoji: "♾️",
    color: "from-yellow-500 to-blue-500",
    directUrl: "https://neal.fun/infinite-craft/",
    imageUrl: infiniteCraftHero,
    tags: ["AI game", "alchemy", "creative game", "infinite combinations", "browser game", "puzzle", "neal.fun", "games", "weird AI"],
    category: "Gaming & Entertainment",
    rating: 4.9,
    totalVotes: 89000
  },

  // === 3D WORLD & VR CREATION ===
  {
    icon: Globe,
    title: "Blockade Labs Skybox AI",
    description: "Generate production-ready 360° panoramic environments in 15 seconds. Create stunning skyboxes for games, VR, film, and architecture — trusted by Volkswagen, Intel, and Siemens. 16K resolution output.",
    emoji: "🌌",
    color: "from-cyan-500 to-blue-700",
    directUrl: "https://www.blockadelabs.com/?via=aiwebtools",
    imageUrl: blockadeLabsHero,
    tags: ["360 panorama", "skybox", "environment generation", "VR", "game assets", "3D environments", "AI art", "virtual reality", "games"],
    category: "3D & Visualization",
    rating: 4.8,
    totalVotes: 18500
  },
  {
    icon: Globe,
    title: "Google Genie 3",
    description: "Google DeepMind's general-purpose world model generating interactive 3D environments from text prompts at 24fps. Navigate AI-generated worlds in real-time — the frontier of text-to-playable-world technology.",
    emoji: "🧞",
    color: "from-blue-500 to-green-500",
    directUrl: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
    imageUrl: genie3Hero,
    tags: ["world model", "text-to-world", "Google DeepMind", "interactive 3D", "AI game", "real-time", "frontier AI", "games"],
    category: "Gaming & Entertainment",
    rating: 4.9,
    totalVotes: 7800
  },
  {
    icon: Globe,
    title: "Meta WorldGen",
    description: "Meta's revolutionary AI system generating immersive 3D worlds from text prompts for VR. Type 'cartoon medieval village' or 'sci-fi Mars base' and explore cohesive, interactive virtual reality environments.",
    emoji: "🌍",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.meta.com/blog/worldgen-3d-world-generation-reality-labs-generative-ai-research/",
    imageUrl: metaWorldgenHero,
    tags: ["text-to-VR", "VR world generation", "Meta", "virtual reality", "3D worlds", "immersive", "AI generation", "metaverse", "games"],
    category: "3D & Visualization",
    rating: 4.8,
    totalVotes: 5600
  },
  {
    icon: Eye,
    title: "Promethean AI",
    description: "AI-powered virtual world building assistant for game developers and 3D artists. Automates environment creation, asset placement, and level design — build game worlds 10x faster with AI collaboration.",
    emoji: "🔥",
    color: "from-red-600 to-orange-700",
    directUrl: "https://www.prometheanai.com/?via=aiwebtools",
    imageUrl: prometheanAiHero,
    tags: ["world building", "level design", "game development", "3D environment", "AI assistant", "game art", "asset placement", "games"],
    category: "3D & Visualization",
    rating: 4.7,
    totalVotes: 4200
  },

  // === 3D MODEL & CHARACTER GENERATION ===
  {
    icon: Box,
    title: "Rodin Gen-1",
    description: "Hyper AI's foundation model for generating production-quality 3D assets from text or images in under a minute. Creates detailed characters, objects, and environments with PBR materials ready for game engines.",
    emoji: "🗿",
    color: "from-slate-600 to-gray-800",
    directUrl: "https://hyper.ai/?via=aiwebtools",
    imageUrl: rodinGen1Hero,
    tags: ["text-to-3D", "3D generation", "PBR materials", "game assets", "AI 3D", "character generation", "production quality", "3D modeling"],
    category: "3D & Visualization",
    rating: 4.8,
    totalVotes: 6900
  },
  {
    icon: Box,
    title: "SelfCAD",
    description: "All-in-one 3D modeling, sculpting, and 3D printing software with AI-powered tools. Design models from scratch, use AI text-to-3D generation, prepare for 3D printing with built-in slicer — perfect for makers and educators.",
    emoji: "🖨️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.selfcad.com/?via=aiwebtools",
    imageUrl: selfcadHero,
    tags: ["3D modeling", "3D printing", "CAD", "AI 3D", "sculpting", "slicer", "text-to-3D", "education", "maker"],
    category: "3D & Visualization",
    rating: 4.5,
    totalVotes: 7800
  },
  {
    icon: Package,
    title: "Anything World",
    description: "AI platform that transforms any object into an animated 3D model. Describe what you want, and AI generates rigged, animated 3D characters and objects ready for games, AR, and interactive experiences.",
    emoji: "🌐",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://anything.world/?via=aiwebtools",
    imageUrl: anythingWorldHero,
    tags: ["3D animation", "AI rigging", "text-to-3D", "animated models", "game assets", "AR", "character animation", "3D printing"],
    category: "3D & Visualization",
    rating: 4.6,
    totalVotes: 3400
  },

  // === AVATARS & DIGITAL HUMANS ===
  {
    icon: Users,
    title: "Ready Player Me",
    description: "Cross-game avatar platform used by 9,000+ developers. Create one personalized 3D avatar from a selfie and use it across thousands of games, apps, and metaverse experiences. The universal avatar system.",
    emoji: "🧑‍🎮",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://readyplayer.me/?via=aiwebtools",
    imageUrl: readyPlayerMeHero,
    tags: ["3D avatar", "cross-game", "metaverse", "selfie-to-avatar", "gaming", "digital identity", "character creator", "games"],
    category: "3D & Visualization",
    rating: 4.7,
    totalVotes: 22000
  },
  {
    icon: Users,
    title: "Avaturn",
    description: "Create photorealistic 3D avatars from a single selfie using generative AI. Export game-ready avatars for metaverse, games, and VR applications. Used by DeepMotion, AR companies, and game studios worldwide.",
    emoji: "🤳",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.avaturn.me/?via=aiwebtools",
    imageUrl: avaturnHero,
    tags: ["3D avatar", "selfie-to-3D", "photorealistic", "metaverse", "VR", "game ready", "digital twin", "character"],
    category: "3D & Visualization",
    rating: 4.6,
    totalVotes: 4500
  },
  {
    icon: Users,
    title: "Didimo",
    description: "Enterprise-grade photorealistic digital human creation platform. Generate ultra-realistic 3D digital twins from photos for games, healthcare, automotive, and enterprise applications with production-quality output.",
    emoji: "👤",
    color: "from-indigo-600 to-blue-700",
    directUrl: "https://www.didimo.co/?via=aiwebtools",
    imageUrl: didimoHero,
    tags: ["digital humans", "photorealistic avatar", "digital twin", "enterprise", "healthcare", "gaming", "3D character", "metaverse"],
    category: "3D & Visualization",
    rating: 4.7,
    totalVotes: 2800
  },

  // === ANIMATION & INTERACTIVE ===
  {
    icon: Film,
    title: "Rive",
    description: "Real-time interactive animation engine for apps, games, and websites. Design state-based animations that respond to user input — used by Google, Duolingo, and Netflix. The future of interactive motion design.",
    emoji: "🎬",
    color: "from-orange-500 to-yellow-500",
    directUrl: "https://rive.app/?via=aiwebtools",
    imageUrl: riveHero,
    tags: ["interactive animation", "motion design", "game UI", "state machine", "real-time", "web animation", "app design", "games"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 14200
  },

  // === AI GAME ENGINE & WORLD MODELS ===
  {
    icon: Cpu,
    title: "Decart Oasis",
    description: "Revolutionary real-time AI game engine generating interactive game worlds frame-by-frame using neural networks. Play in infinite, AI-generated Minecraft-style voxel worlds that evolve based on your actions.",
    emoji: "🏝️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://decart.ai/oasis/?via=aiwebtools",
    imageUrl: decartOasisHero,
    tags: ["AI game engine", "real-time generation", "neural network", "voxel worlds", "infinite gameplay", "procedural", "games"],
    category: "Gaming & Entertainment",
    rating: 4.7,
    totalVotes: 8900
  },
  {
    icon: Brain,
    title: "Ludo AI",
    description: "AI-powered game ideation and market research platform. Generate game concepts, analyze competitors, discover trends, and create game design documents — the ultimate AI co-pilot for game developers and studios.",
    emoji: "🎲",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://ludo.ai/?via=aiwebtools",
    imageUrl: ludoAiNewHero,
    tags: ["game ideation", "market research", "game design", "competitor analysis", "GDD", "game trends", "game development", "games"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 5600
  },
  {
    icon: Wand2,
    title: "Mochi Diffusion",
    description: "Run Stable Diffusion natively on Apple Silicon Macs. Generate AI art and game assets locally with no cloud dependency — fast, private, and free. Perfect for indie game developers creating concept art and textures.",
    emoji: "🍡",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://github.com/MochiDiffusion/MochiDiffusion/?via=aiwebtools",
    imageUrl: mochiDiffusionHero,
    tags: ["Stable Diffusion", "Mac", "Apple Silicon", "local AI", "image generation", "game art", "free", "open source", "concept art"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 11200
  },

  // === 5 WEIRD / MIND-BLOWING AI TOOLS ===
  {
    icon: Brain,
    title: "Hypothetical",
    description: "AI thought experiment simulator that explores impossible what-if scenarios with scientific rigor. Ask 'What if gravity reversed?' or 'What if humans had photosynthesis?' and get detailed, physics-based explorations of alternate realities.",
    emoji: "🤯",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://hypothetical.me/?via=aiwebtools",
    imageUrl: hypotheticalHero,
    tags: ["thought experiments", "what-if", "science", "simulation", "alternate reality", "physics", "mind-blowing", "weird AI"],
    category: "Research & Academic",
    rating: 4.7,
    totalVotes: 3200
  },
  {
    icon: Search,
    title: "Elicit",
    description: "AI research assistant that reads and analyzes millions of scientific papers for you. Ask a research question, get synthesized findings with citations. Used by researchers at Harvard, MIT, and Stanford. Your personal PhD-level research team.",
    emoji: "🔬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://elicit.com/?via=aiwebtools",
    imageUrl: elicitHero,
    tags: ["research assistant", "scientific papers", "literature review", "academic research", "AI science", "citations", "data extraction"],
    category: "Research & Academic",
    rating: 4.8,
    totalVotes: 28000
  },
  {
    icon: BookOpen,
    title: "Storique AI",
    description: "AI that transforms your memories, photos, and life stories into beautifully designed physical storybooks. Upload photos, add stories, and receive a professionally printed hardcover book — immortalize your memories with AI magic.",
    emoji: "📖",
    color: "from-amber-600 to-orange-700",
    directUrl: "https://www.storique.ai/?via=aiwebtools",
    imageUrl: storiqueHero,
    tags: ["memory book", "photo book", "AI storytelling", "personalized gift", "life story", "family history", "printed book", "weird AI"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 4500
  },

  // === 5 ADDITIONAL TOOLS (completing 30-count batch) ===
  {
    icon: Gamepad2,
    title: "Scenario",
    description: "AI-powered game asset generation platform. Create consistent, style-controlled game art, characters, props, and textures using custom-trained AI models. Trusted by AAA studios and indie devs for production-quality 2D game assets at scale.",
    emoji: "🎨",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://www.scenario.com/?via=aiwebtools",
    imageUrl: scenarioHero,
    tags: ["game assets", "AI art", "character design", "texture generation", "game art", "custom AI models", "2D art", "game development", "games"],
    category: "Gaming & Entertainment",
    rating: 4.8,
    totalVotes: 9200
  },
  {
    icon: Box,
    title: "Meshy",
    description: "Leading AI 3D model generator — turn text prompts or images into textured 3D models in minutes. Supports PBR textures, multiple export formats (FBX, OBJ, GLTF), and AI texturing of existing models. Perfect for game devs and 3D artists.",
    emoji: "🧊",
    color: "from-violet-500 to-blue-600",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    imageUrl: meshyGameHero,
    tags: ["text-to-3D", "3D model generator", "AI 3D", "PBR textures", "game assets", "FBX", "OBJ", "3D printing", "game development"],
    category: "3D & Visualization",
    rating: 4.7,
    totalVotes: 15600
  },
  {
    icon: Box,
    title: "Kaedim",
    description: "Transform 2D images into production-ready 3D models using AI. Upload concept art, photos, or sketches and get clean, game-ready 3D assets with proper topology. Used by game studios for rapid asset pipeline acceleration.",
    emoji: "📐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.kaedim3d.com/?via=aiwebtools",
    imageUrl: kaedimHero,
    tags: ["image-to-3D", "3D modeling", "game assets", "concept art", "topology", "AI 3D", "production pipeline", "game development"],
    category: "3D & Visualization",
    rating: 4.6,
    totalVotes: 5800
  },
  {
    icon: Users,
    title: "Inworld AI",
    description: "Create intelligent AI-powered NPCs with personalities, memories, and contextual awareness for games. Build characters that think, react, and converse naturally — used by major game studios for next-gen interactive storytelling and gameplay.",
    emoji: "🤖",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://inworld.ai/?via=aiwebtools",
    imageUrl: inworldAiHero,
    tags: ["NPC AI", "game characters", "AI dialogue", "interactive storytelling", "game AI", "character behavior", "game development", "games"],
    category: "Gaming & Entertainment",
    rating: 4.8,
    totalVotes: 7400
  },
  {
    icon: Eye,
    title: "This Person Does Not Exist",
    description: "Mind-bending AI that generates hyper-realistic human faces that don't exist in reality. Every refresh creates a brand new, unique face using generative adversarial networks. A mesmerizing demonstration of AI's creative power — and a window into the uncanny valley.",
    emoji: "👁️",
    color: "from-gray-700 to-slate-900",
    directUrl: "https://thispersondoesnotexist.com/",
    imageUrl: thisPersonHero,
    tags: ["face generation", "GAN", "AI faces", "deepfake", "generative AI", "weird AI", "mind-blowing", "AI art", "synthetic media"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 125000
  }
];
