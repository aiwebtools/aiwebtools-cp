
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Sparkles, 
  HeartHandshake,
  Coffee
} from "lucide-react";

import eharmonyHero from "@/assets/tools/eharmony-hero.jpg";
import hingeHero from "@/assets/tools/hinge-hero.jpg";
import coffeeMeetsBagelHero from "@/assets/tools/coffee-meets-bagel-hero.jpg";
import keeperHero from "@/assets/tools/keeper-hero.jpg";
import rizzAiHero from "@/assets/tools/rizz-ai-hero.jpg";

import replikaHero from "@/assets/tools/replika-hero.jpg";
import maiaHero from "@/assets/tools/maia-hero.jpg";
import amoriqHero from "@/assets/tools/amoriq-hero.jpg";
import doloresHero from "@/assets/tools/dolores-hero.jpg";
import flammeHero from "@/assets/tools/flamme-hero.jpg";

export const aiDatingRelationshipTools: Tool[] = [
  {
    icon: Heart,
    title: "eHarmony AI",
    description: "AI-powered matchmaking platform using compatibility algorithms and personality assessments for meaningful relationships.",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.eharmony.com/?via=aiwebtools",
    imageUrl: eharmonyHero,
    tags: ["dating", "matchmaking", "compatibility", "relationships", "AI matching"],
    category: "AI Dating & Relationship Tools",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "Hinge AI",
    description: "AI-enhanced dating app designed to be deleted, using smart prompts and machine learning for better matches.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://hinge.co/?via=aiwebtools",
    imageUrl: hingeHero,
    tags: ["dating", "AI matching", "prompts", "relationships", "meaningful connections"],
    category: "AI Dating & Relationship Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Coffee,
    title: "Coffee Meets Bagel",
    description: "AI-curated dating app that sends quality matches daily based on preferences and behavioral patterns.",
    emoji: "☕",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://coffeemeetsbagel.com/?via=aiwebtools",
    imageUrl: coffeeMeetsBagelHero,
    tags: ["dating", "curated matches", "daily matches", "AI recommendations", "quality dating"],
    category: "AI Dating & Relationship Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: HeartHandshake,
    title: "Keeper",
    description: "AI matchmaking service combining human expertise with machine learning for serious relationships and marriage.",
    emoji: "💍",
    color: "from-red-500 to-pink-600",
    directUrl: "https://keeper.ai/?via=aiwebtools",
    imageUrl: keeperHero,
    tags: ["matchmaking", "marriage", "serious relationships", "AI matching", "relationship coaching"],
    category: "AI Dating & Relationship Tools",
    rating: 4.5,
    totalVotes: 1876
  },
  {
    icon: MessageCircle,
    title: "Rizz AI",
    description: "AI conversation assistant for dating apps, providing personalized message suggestions and conversation starters.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://rizz.app/?via=aiwebtools",
    imageUrl: rizzAiHero,
    tags: ["dating assistant", "conversation AI", "message suggestions", "dating tips", "chat help"],
    category: "AI Dating & Relationship Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  // Removed: Relate - relate.com is not an AI relationship counseling platform (UK charity / unrelated meeting tool)
  // Removed: Nomi.ai, Romantic AI, Candy AI, Couple.me - adult/erotica tools not aligned with values
  // Removed: Lover AI - fake/non-existent tool
  {
    icon: MessageCircle,
    title: "Replika",
    description: "The AI companion who cares - build emotional connections through meaningful conversations that help you feel heard.",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://replika.ai/?via=aiwebtools",
    imageUrl: replikaHero,
    tags: ["AI companion", "emotional support", "conversation", "mental wellness", "virtual friend"],
    category: "AI Dating & Relationship Tools",
    rating: 4.4,
    totalVotes: 12456
  },
  {
    icon: HeartHandshake,
    title: "Maia",
    description: "AI relationship app designed for couples to heal faster, stay together, and strengthen their bond using AI insights.",
    emoji: "💑",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://www.ourmaia.com/?via=aiwebtools",
    imageUrl: maiaHero,
    tags: ["couples app", "relationship healing", "stay together", "AI counseling", "relationship health"],
    category: "AI Dating & Relationship Tools",
    rating: 4.6,
    totalVotes: 1987
  },
  {
    icon: MessageCircle,
    title: "AmorIQ",
    description: "24/7 AI relationship coach providing instant personalized advice on dating, communication, and relationship growth.",
    emoji: "💡",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://amoriq.app/?via=aiwebtools",
    imageUrl: amoriqHero,
    tags: ["relationship coach", "dating advice", "communication", "AI counselor", "love advisor"],
    category: "AI Dating & Relationship Tools",
    rating: 4.4,
    totalVotes: 1654
  },
  {
    icon: Sparkles,
    title: "Dolores",
    description: "Virtual AI companion with evolving personality that adapts to your conversations and retains your chat history.",
    emoji: "🌸",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://dolores.app/?via=aiwebtools",
    imageUrl: doloresHero,
    tags: ["AI companion", "evolving personality", "chat history", "virtual friend", "generative agent"],
    category: "AI Dating & Relationship Tools",
    rating: 4.3,
    totalVotes: 2123
  },
  {
    icon: HeartHandshake,
    title: "Flamme",
    description: "AI-powered relationship app for couples featuring daily questions, games, and activities to deepen your connection.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.flamme.app/?via=aiwebtools",
    imageUrl: flammeHero,
    tags: ["couples app", "relationship games", "daily questions", "connection building", "relationship growth"],
    category: "AI Dating & Relationship Tools",
    rating: 4.5,
    totalVotes: 2567
  }
];
