
import { Tool } from "@/types/tools";
import { Heart, Shield, Sparkles, Users, Briefcase, Shirt } from "lucide-react";

// Hero images for new tools
import datingKillerAiHero from "@/assets/tools/dating-killer-ai-hero.png";
import realfakeHero from "@/assets/tools/realfake-hero.png";
import beducatedHero from "@/assets/tools/beducated-hero.png";
import textsFromMyExHero from "@/assets/tools/texts-from-my-ex-hero.png";
import aiFashionModelsInsmindHero from "@/assets/tools/ai-fashion-models-insmind-hero.png";
import odooHero from "@/assets/tools/odoo-hero.png";

/**
 * Audit Batch Q2 2025 Part 14 - Fashion, Dating & Relationships, Healthcare, Automation
 * 6 verified new tools with 4K artistic hero images
 */
export const auditBatch2025Q2Part14Tools: Tool[] = [
  // === FASHION ===
  {
    icon: Shirt,
    title: "AI Fashion Models insMind",
    description: "AI-powered fashion model generator by insMind. Create diverse, photorealistic AI models for product showcases, virtual photoshoots, and e-commerce catalogs without hiring real models.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://www.insmind.com/ai-model-generator/?via=aiwebtools",
    imageUrl: aiFashionModelsInsmindHero,
    tags: ["AI models", "fashion photography", "e-commerce", "virtual models", "product photos", "insMind", "Fashion"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 1456
  },

  // === DATING & RELATIONSHIPS ===
  {
    icon: Heart,
    title: "Dating Killer AI",
    description: "AI dating coach that analyzes your dating profile and conversations to craft killer opening lines, witty responses, and engaging messages that actually get replies.",
    emoji: "💘",
    color: "from-red-500 to-pink-600",
    directUrl: "https://datingkiller.ai/?via=aiwebtools",
    imageUrl: datingKillerAiHero,
    tags: ["dating coach", "message generator", "opening lines", "dating AI", "relationship", "Dating & Relationships"],
    category: "Productivity & Utilities",
    rating: 4.4,
    totalVotes: 1234
  },
  {
    icon: Heart,
    title: "Texts from my ex",
    description: "AI-powered text analyzer that helps you decode and understand messages from your ex. Get emotional insights, pattern recognition, and relationship advice from AI analysis.",
    emoji: "💔",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://textsfromyourex.com/?via=aiwebtools",
    imageUrl: textsFromMyExHero,
    tags: ["text analysis", "relationship AI", "ex messages", "emotional intelligence", "dating insights", "Dating & Relationships"],
    category: "Productivity & Utilities",
    rating: 4.2,
    totalVotes: 987
  },
  {
    icon: Users,
    title: "Beducated",
    description: "AI-enhanced intimate education platform offering expert-led courses on relationships, communication, and intimacy. Learn from certified professionals with personalized recommendations.",
    emoji: "📚",
    color: "from-coral-500 to-peach-600",
    directUrl: "https://beducated.com/?via=aiwebtools",
    imageUrl: beducatedHero,
    tags: ["intimate education", "relationship courses", "wellness", "self-improvement", "couples education", "Dating & Relationships", "Healthcare"],
    category: "Education & Learning",
    rating: 4.6,
    totalVotes: 2345
  },

  // === SECURITY & VERIFICATION ===
  {
    icon: Shield,
    title: "RealFake",
    description: "AI deepfake detection tool that analyzes images and videos to verify authenticity. Protect yourself from fake media with advanced AI-powered verification and authenticity scoring.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.realfake.ai/?via=aiwebtools",
    imageUrl: realfakeHero,
    tags: ["deepfake detection", "authenticity verification", "AI security", "fake image detection", "media verification", "Security & Privacy"],
    category: "Security & Privacy",
    rating: 4.7,
    totalVotes: 1567
  },

  // === AUTOMATION & BUSINESS ===
  {
    icon: Briefcase,
    title: "Odoo",
    description: "All-in-one business management platform with AI-powered automation. Includes CRM, e-commerce, accounting, inventory, project management, and 40+ integrated apps for complete business operations.",
    emoji: "🏢",
    color: "from-purple-600 to-violet-700",
    directUrl: "https://www.odoo.com/?via=aiwebtools",
    imageUrl: odooHero,
    tags: ["ERP", "CRM", "business automation", "accounting", "e-commerce", "inventory", "project management", "Automation", "Business"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 4567
  }
];
