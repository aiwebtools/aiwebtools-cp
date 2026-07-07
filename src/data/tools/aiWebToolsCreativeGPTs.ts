
import { Tool } from "@/types/tools";
import { 
  Mic, 
  Music, 
  Palette,
  BookOpen,
  Trophy
} from "lucide-react";
import adLogoMakerGptHero from "@/assets/tools/ad-logo-maker-gpt-hero.jpg";
import triviaNightGptHero from "@/assets/tools/trivia-night-gpt-hero.jpg";

export const aiWebToolsCreativeGPTs: Tool[] = [
  {
    icon: Music,
    title: "Music Video Maker AI Studio",
    description: "Transform yourself into the star of cinematic-quality music videos with our cutting-edge AI director. Build scene-by-scene visuals where you and even your band are featured in vivid, realistic scenes tied to your music.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-dynamic-product-advertisement-showcase_TiaF.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8",
    tags: ["music video", "ai director", "video creation", "music production", "cinematic", "video maker"],
    category: "Video & Animation Tools",
    rating: 4.7,
    totalVotes: 3245
  },
  {
    icon: Palette,
    title: "AD & LOGO MAKER GPT",
    description: "Create Breathtaking Ads with AI Power. AD MAKER GPT transforms your ideas into high-quality, personalized advertisements in seconds using cutting-edge GPT-4o image generation technology.",
    emoji: "🎨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://adandlogomakergpt.lovable.app/?via=aiwebtools",
    imageUrl: adLogoMakerGptHero,
    tags: ["ad maker", "logo generator", "GPT-4o", "advertisement creation", "AI design", "professional design", "brand identity", "instant generation", "cutting-edge technology", "personalized ads", "high-quality design", "ad variations", "logo design", "marketing materials", "AI advertising"],
    category: "Creative & Entertainment",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: BookOpen,
    title: "Comic Book Generator GPT",
    description: "Create full comic books with GPT-4o! This AI chat assistant collaborates with you to bring whatever you imagine to life in stunning comic book format. From superheroes to slice-of-life stories, transform your ideas into professional comic books.",
    emoji: "📚",
    color: "from-red-500 to-yellow-600",
    directUrl: "https://comicbookmakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/MryAyvg_N0U",
    tags: ["comic book", "comic creation", "GPT-4o", "comic generator", "storytelling", "visual storytelling", "comic book maker", "comic art", "graphic novel", "sequential art", "comic strips", "creative writing", "illustration", "character creation", "comic panels"],
    category: "Creative & Entertainment",
    rating: 4.8,
    totalVotes: 3456
  },
  {
    icon: Trophy,
    title: "TRIVIA NIGHT GPT",
    description: "Bringing Friends & Families Together with the Power of AI Trivia! The Ultimate AI Trivia Experience with 7 exciting categories, 4 difficulty levels, and multiple question formats including multiple choice, true/false, and image-based trivia.",
    emoji: "🏆",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: triviaNightGptHero,
    tags: ["trivia", "ai trivia", "family games", "friends", "multiple choice", "true false", "image trivia", "quiz games", "party games", "entertainment", "trivia night", "game night", "brain games", "knowledge quiz", "interactive games"],
    category: "Creative & Entertainment",
    rating: 4.7,
    totalVotes: 3289
  }
];
