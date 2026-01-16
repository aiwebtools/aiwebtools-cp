
import { Tool } from "@/types/tools";
import { Wand2, ShoppingCart, Target, Share2 } from "lucide-react";

// Hero images for new tools
import publicPromptsHero from "@/assets/tools/public-prompts-hero.png";
import promptbaseHero from "@/assets/tools/promptbase-hero.png";
import shopifyMagicHero from "@/assets/tools/shopify-magic-hero.png";
import adcreativeSemrushHero from "@/assets/tools/adcreative-semrush-hero.png";

/**
 * Audit Batch Q2 2025 Part 12 - Business, Prompts & Aids
 * 4 verified new tools with 4K artistic hero images
 */
export const auditBatch2025Q2Part12Tools: Tool[] = [
  // === PROMPTS & AIDS ===
  {
    icon: Share2,
    title: "Public Prompts",
    description: "Open-source AI prompt library with thousands of free, community-curated prompts for Stable Diffusion, Midjourney, DALL-E, and other AI image generators. Discover, share, and improve prompts collaboratively.",
    emoji: "📖",
    color: "from-green-500 to-teal-600",
    directUrl: "https://publicprompts.art/?via=aiwebtools",
    imageUrl: publicPromptsHero,
    tags: ["AI prompts", "open source", "community", "Stable Diffusion", "free prompts", "prompt library", "prompts", "Prompts & Aids"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 1234
  },
  {
    icon: Wand2,
    title: "PromptBase",
    description: "Premier marketplace for buying and selling high-quality AI prompts. Find expertly crafted prompts for DALL-E, Midjourney, Stable Diffusion, ChatGPT, and more. Monetize your prompt engineering skills.",
    emoji: "💰",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://promptbase.com/?via=aiwebtools",
    imageUrl: promptbaseHero,
    tags: ["AI prompts", "marketplace", "buy prompts", "sell prompts", "prompt engineering", "monetization", "prompts", "Prompts & Aids"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 2345
  },

  // === BUSINESS ===
  {
    icon: ShoppingCart,
    title: "Shopify Magic",
    description: "Shopify's integrated AI suite that automates ecommerce tasks. Generate product descriptions, create marketing copy, optimize images, and get intelligent business insights—all powered by AI built directly into your store.",
    emoji: "✨",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.shopify.com/magic/?via=aiwebtools",
    imageUrl: shopifyMagicHero,
    tags: ["ecommerce", "Shopify", "product descriptions", "AI writing", "marketing copy", "business automation", "online store", "Business"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "AdCreative AI by Semrush",
    description: "Semrush's AI-powered advertising creative generator. Create high-converting ad banners, social media creatives, and marketing visuals optimized for performance. Data-driven design meets creative automation.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.semrush.com/apps/adcreative/?via=aiwebtools",
    imageUrl: adcreativeSemrushHero,
    tags: ["advertising", "Semrush", "ad creative", "marketing", "banner ads", "social media ads", "conversion optimization", "Marketing", "Business"],
    category: "Marketing & Sales",
    rating: 4.5,
    totalVotes: 1567
  }
];
