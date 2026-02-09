import { Tool } from "@/types/tools";
import { Presentation, Sparkles, Layout, Wand2, Palette } from "lucide-react";

import tomeHero from "@/assets/tools/tome-hero.jpg";
import gammaAppHero from "@/assets/tools/gamma-app-hero.jpg";
import beautifulAiHero from "@/assets/tools/beautiful-ai-hero.jpg";
import decktopusHero from "@/assets/tools/decktopus-hero.jpg";
import presentationsAiHero from "@/assets/tools/presentations-ai-hero.jpg";

export const aiPresentationTools: Tool[] = [
  {
    icon: Presentation,
    title: "Tome",
    description: "AI-powered storytelling and presentation tool. Create stunning presentations with AI-generated content, images, and layouts in seconds.",
    emoji: "📖",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://tome.app/?via=aiwebtools",
    imageUrl: tomeHero,
    tags: ["presentations", "AI storytelling", "slide deck", "content creation", "design", "AI presentations"],
    category: "AI Presentation Tools",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Sparkles,
    title: "Gamma.app",
    description: "Create beautiful presentations, documents, and websites with AI. No design skills needed - just ideas. Generate entire decks from prompts.",
    emoji: "✨",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://gamma.app/?via=aiwebtools",
    imageUrl: gammaAppHero,
    tags: ["presentations", "AI design", "slide deck", "no-code", "website builder", "AI content"],
    category: "AI Presentation Tools",
    rating: 4.9,
    totalVotes: 7891
  },
  {
    icon: Layout,
    title: "Beautiful.ai",
    description: "AI-powered presentation software with smart slide templates. Automatically formats content and maintains design consistency across your deck.",
    emoji: "🎨",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.beautiful.ai/?via=aiwebtools",
    imageUrl: beautifulAiHero,
    tags: ["presentations", "smart templates", "design automation", "slide deck", "business presentations"],
    category: "AI Presentation Tools",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Wand2,
    title: "Decktopus",
    description: "AI presentation maker that creates professional decks in minutes. Includes AI voice narration, smart forms, and analytics for your presentations.",
    emoji: "🐙",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.decktopus.com/?via=aiwebtools",
    imageUrl: decktopusHero,
    tags: ["presentations", "AI voice", "analytics", "slide deck", "professional presentations", "AI design"],
    category: "AI Presentation Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Palette,
    title: "Presentations.ai",
    description: "Transform ideas into stunning presentations with AI. Intelligent design assistance, content suggestions, and instant slide creation from text.",
    emoji: "🎯",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.presentations.ai/?via=aiwebtools",
    imageUrl: presentationsAiHero,
    tags: ["presentations", "AI design", "content generation", "slide deck", "business", "pitch decks"],
    category: "AI Presentation Tools",
    rating: 4.7,
    totalVotes: 5123
  }
];
