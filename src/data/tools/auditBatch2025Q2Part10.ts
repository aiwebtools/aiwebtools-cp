// Audit Batch Q2 2025 Part 10 - ChatBots, Voice Cloning, Avatars, Amazing categories
// 8 NEW verified tools added to database

import { Tool } from "@/types/tools";
import { Video, Users, Bot, Mic, Pencil, Sparkles, MessageCircle, Image } from "lucide-react";

// Import hero images
import akoolHero from "@/assets/tools/akool-ai-hero.png";
import vidnozHero from "@/assets/tools/vidnoz-ai-hero.png";
import humvaHero from "@/assets/tools/humva-hero.png";
import kreadoHero from "@/assets/tools/kreado-ai-hero.png";
import dreamactorHero from "@/assets/tools/dreamactor-m1-hero.png";
import keevxHero from "@/assets/tools/keevx-hero.png";
import andiHero from "@/assets/tools/andi-ai-hero.png";
import animatedDrawingsHero from "@/assets/tools/animated-drawings-hero.png";

export const auditBatch2025Q2Part10Tools: Tool[] = [
  // ============ AVATARS ============
  {
    icon: Video,
    title: "Akool AI",
    description: "Enterprise-grade AI video platform offering face swap, avatar creation, talking photos, and real-time lip sync for marketing and content creation.",
    emoji: "🎬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://akool.com/?via=aiwebtools",
    imageUrl: akoolHero,
    tags: ["avatar", "face swap", "talking photo", "AI video", "marketing", "video generation", "enterprise"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Users,
    title: "Vidnoz AI",
    description: "Free AI video generator with 1000+ realistic avatars, 1000+ voices, and templates. Create professional videos for marketing, training, and social media.",
    emoji: "🎥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.vidnoz.com/?via=aiwebtools",
    imageUrl: vidnozHero,
    tags: ["AI avatars", "video generator", "talking heads", "templates", "marketing video", "video generation"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 3450
  },
  {
    icon: Users,
    title: "Humva",
    description: "AI-powered virtual human platform creating hyper-realistic digital humans for customer service, virtual assistants, and interactive experiences.",
    emoji: "👤",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.humva.ai/?via=aiwebtools",
    imageUrl: humvaHero,
    tags: ["virtual humans", "digital avatars", "customer service", "interactive AI", "avatar", "video generation"],
    category: "Video & Multimedia",
    rating: 4.4,
    totalVotes: 890
  },
  {
    icon: Video,
    title: "Kreado AI",
    description: "Multi-language AI video creation platform with digital avatars. Generate marketing videos in 140+ languages with lip-sync and custom avatar options.",
    emoji: "🌍",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.kreadoai.com/?via=aiwebtools",
    imageUrl: kreadoHero,
    tags: ["multilingual video", "AI avatars", "marketing", "lip sync", "translation", "video generation", "avatar"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 2100
  },
  {
    icon: Sparkles,
    title: "DreamActor-M1",
    description: "Advanced AI motion transfer technology that animates static portraits with lifelike movements, expressions, and gestures from reference videos.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://dreamactor.github.io/?via=aiwebtools",
    imageUrl: dreamactorHero,
    tags: ["motion transfer", "portrait animation", "AI animation", "expressions", "avatar", "video generation"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 1560
  },
  {
    icon: Users,
    title: "Keevx",
    description: "AI avatar and virtual influencer platform for creating digital personas, virtual spokespersons, and branded AI characters for marketing campaigns.",
    emoji: "🤖",
    color: "from-indigo-500 to-violet-600",
    directUrl: "https://keevx.com/?via=aiwebtools",
    imageUrl: keevxHero,
    tags: ["virtual influencer", "AI avatar", "digital persona", "marketing", "branded character", "avatar"],
    category: "Video & Multimedia",
    rating: 4.3,
    totalVotes: 780
  },

  // ============ CHATBOTS ============
  {
    icon: MessageCircle,
    title: "Andi AI",
    description: "Next-generation AI search assistant that provides direct answers with sources instead of just links. Conversational search reimagined for accuracy and privacy.",
    emoji: "🔍",
    color: "from-teal-500 to-emerald-600",
    directUrl: "https://andisearch.com/?via=aiwebtools",
    imageUrl: andiHero,
    tags: ["AI search", "conversational search", "direct answers", "privacy", "chatbot", "search engine"],
    category: "AI CHAT & ASSISTANTS",
    rating: 4.5,
    totalVotes: 4200
  },

  // ============ AMAZING / CREATIVE ============
  {
    icon: Pencil,
    title: "Animated Drawings",
    description: "Meta's AI tool that brings children's drawings to life with animation. Upload any drawing and watch it dance, jump, and move in delightful ways.",
    emoji: "✏️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://sketch.metademolab.com/?via=aiwebtools",
    imageUrl: animatedDrawingsHero,
    tags: ["animation", "children's art", "drawing animation", "Meta AI", "creative", "fun", "kids"],
    category: "Creative & Entertainment",
    rating: 4.8,
    totalVotes: 8900
  }
];
