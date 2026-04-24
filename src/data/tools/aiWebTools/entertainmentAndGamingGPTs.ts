
import { Tool } from "@/types/tools";
import { Camera, Star, Sparkles, Crown } from "lucide-react";

import illuminatiCardGameHero from "@/assets/tools/illuminati-card-game-hero.jpg";
import kingBlueberryGptHero from "@/assets/tools/king-blueberry-gpt-hero.jpg";

export const entertainmentAndGamingGPTs: Tool[] = [
  {
    icon: Camera,
    title: "Trivia Night GPT",
    description: "Trivia Night GPT by www.AIwebtools.ai – the ultimate AI-powered trivia showdown! Gather your friends and family, put your knowledge to the test, and dive into an electrifying game featuring history, science, pop culture, and more!",
    emoji: "🎯",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["trivia games", "entertainment", "knowledge testing", "family fun", "interactive games", "Custom GPT"],
    category: "Entertainment & Gaming",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Sparkles,
    title: "Imagination Traveler GPT",
    description: "Imagination Traveler GPT is a cosmic guide, unlocking immersive journeys through alternate histories, possible futures, and realities beyond comprehension. With vivid storytelling and photorealistic imagery, it transforms every interaction into an unforgettable voyage across the infinite dimensions of existence, unlocking your imagination.",
    emoji: "🌌",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["imagination", "storytelling", "alternate realities", "creative journeys", "immersive experiences", "Custom GPT"],
    category: "Entertainment & Gaming",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Crown,
    title: "King Blueberry GPT",
    description: "Reimagine your operational instructions by converting English to algebraic variables. Try King Blueberry GPT today",
    emoji: "👑",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/aFuAxVNXBvg",
    imageUrl: kingBlueberryGptHero,
    tags: ["operational instructions", "algebraic conversion", "process optimization", "variable mapping", "instruction translation", "Custom GPT"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 2456
  },
  {
    icon: Star,
    title: "1995 Illuminati Card Game GPT",
    description: "A cunning opponent and oracle for the 1995 Illuminati card game. Experience the classic conspiracy-themed card game with AI-powered gameplay, strategic guidance, and immersive storytelling. This GPT brings the iconic Steve Jackson Games creation to life with intelligent game mechanics and engaging narrative elements.",
    emoji: "🃏",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://chatgpt.com/g/g-68cadce3e2f08191a9b8203a32fe8846-1995-illuminati-card-game-gpt/",
    imageUrl: illuminatiCardGameHero,
    tags: ["card game", "illuminati", "strategy game", "1995", "conspiracy", "gaming", "interactive game", "aiwebtools", "Custom GPT"],
    category: "Entertainment & Gaming",
    rating: 4.5,
    totalVotes: 1876
  }
];
