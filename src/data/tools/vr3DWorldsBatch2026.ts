import { Tool } from "@/types/tools";
import { Globe, Box, Layers, Sparkles } from "lucide-react";

import openartWorldsHero from "@/assets/tools/openart-worlds-hero.jpg";
import marbleWorldlabsHero from "@/assets/tools/marble-worldlabs-hero.jpg";
import metaSam3dHero from "@/assets/tools/meta-sam3d-hero.jpg";
import metaWorldgenHero from "@/assets/tools/meta-worldgen-hero.jpg";

export const vr3DWorldsBatch2026: Tool[] = [
  {
    icon: Globe,
    title: "OpenArt Worlds",
    description: "Turn a single image into a fully navigable 3D world you can walk through, frame, and shoot from. Powered by World Labs spatial AI, exclusively on OpenArt — no Blender, no modeling, just images into walkable environments for VR, film, and game scenes.",
    emoji: "🌍",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://openart.ai/feature/openart-worlds?via=aiwebtools",
    imageUrl: openartWorldsHero,
    tags: ["3D world generator", "image to 3D world", "walkable 3D", "VR world creator", "spatial AI", "World Labs", "OpenArt", "image to world", "drop image become world", "AI world builder", "virtual world", "explorable environment"],
    category: "3D Modeling Tools",
    rating: 4.8,
    totalVotes: 2145
  },
  {
    icon: Box,
    title: "Marble (World Labs)",
    description: "Marble by World Labs transforms single images into persistent 3D environments you can navigate freely in your browser. Experience true spatial intelligence — drop in a photo and step inside a fully realized 3D world for VR exploration, storytelling, and creative worldbuilding.",
    emoji: "💎",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://marble.worldlabs.ai/?via=aiwebtools",
    imageUrl: marbleWorldlabsHero,
    tags: ["Marble", "World Labs", "image to 3D world", "explorable 3D environment", "spatial intelligence", "VR worlds", "AI world generator", "walkable world", "3D scene generator", "browser 3D"],
    category: "3D Modeling Tools",
    rating: 4.9,
    totalVotes: 3421
  },
  {
    icon: Layers,
    title: "Meta SAM 3D",
    description: "Meta's foundation 3D model that turns any single 2D image into a fully textured 3D object or human mesh. Capture, reconstruct, and reuse the world around you with one photo — perfect for AR/VR creators, game developers, and anyone needing instant photorealistic 3D assets.",
    emoji: "🧱",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://ai.meta.com/sam3d/?via=aiwebtools",
    imageUrl: metaSam3dHero,
    tags: ["Meta SAM 3D", "image to 3D object", "3D mesh generator", "single image 3D", "Meta AI", "AR VR assets", "3D reconstruction", "photorealistic 3D", "human mesh", "object capture"],
    category: "3D Modeling Tools",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Sparkles,
    title: "Meta WorldGen",
    description: "Meta Reality Labs' research engine that generates fully walkable 3D worlds from simple text prompts like 'medieval village town square.' A leap forward in spatial AI for VR creators, game designers, and immersive storytellers building entire universes from a single sentence.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://ai.meta.com/research/?via=aiwebtools",
    imageUrl: metaWorldgenHero,
    tags: ["WorldGen", "Meta Reality Labs", "text to 3D world", "walkable world", "VR world generator", "spatial AI", "immersive worlds", "3D environment generator", "game world", "research"],
    category: "3D Modeling Tools",
    rating: 4.6,
    totalVotes: 1987
  }
];
