import { Tool } from "@/types/tools";
import { Shirt, Sparkles, Scissors, Palette, ShoppingBag, Users } from "lucide-react";

import stitchFixHero from "@/assets/tools/stitch-fix-hero.jpg";
import threadHero from "@/assets/tools/thread-hero.jpg";
import trueFitHero from "@/assets/tools/true-fit-hero.jpg";
import vueAiHero from "@/assets/tools/vue-ai-hero.jpg";
import lookletHero from "@/assets/tools/looklet-hero.jpg";
import heuritechHero from "@/assets/tools/heuritech-hero.jpg";

export const aiFashionStyleTools: Tool[] = [
  {
    icon: Shirt,
    title: "Stitch Fix",
    description: "AI-powered personal styling service that curates clothing based on your style preferences, budget, and fit. Get personalized fashion recommendations delivered to your door.",
    emoji: "👔",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://www.stitchfix.com/?via=aiwebtools",
    imageUrl: stitchFixHero,
    tags: ["personal styling", "fashion AI", "clothing recommendations", "style curation", "subscription box", "personalized fashion"],
    category: "AI Fashion & Style",
    rating: 4.5,
    totalVotes: 12456
  },
  {
    icon: Users,
    title: "Thread",
    description: "AI styling assistant that provides personalized outfit recommendations based on your style profile. Chat with stylists and discover curated fashion picks.",
    emoji: "🧵",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.thread.com/?via=aiwebtools",
    imageUrl: threadHero,
    tags: ["personal stylist", "outfit recommendations", "fashion AI", "style assistant", "menswear", "clothing suggestions"],
    category: "AI Fashion & Style",
    rating: 4.4,
    totalVotes: 8234
  },
  {
    icon: Scissors,
    title: "True Fit",
    description: "AI-powered fit prediction platform that helps you find the right size across different brands. Reduce returns with accurate size recommendations based on fit preferences.",
    emoji: "📏",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.truefit.com/?via=aiwebtools",
    imageUrl: trueFitHero,
    tags: ["size prediction", "fit technology", "sizing AI", "virtual fitting", "size recommendations", "reduce returns"],
    category: "AI Fashion & Style",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Sparkles,
    title: "Vue.ai",
    description: "AI-powered fashion platform for retailers with virtual try-on, product recommendations, and automated catalog management. Transform online shopping experiences.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://vue.ai/?via=aiwebtools",
    imageUrl: vueAiHero,
    tags: ["virtual try-on", "fashion retail", "product recommendations", "catalog automation", "visual AI", "ecommerce fashion"],
    category: "AI Fashion & Style",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: ShoppingBag,
    title: "Looklet",
    description: "AI-powered visual merchandising platform for fashion ecommerce. Create styled product images, outfit combinations, and merchandising content automatically.",
    emoji: "🛍️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.looklet.com/?via=aiwebtools",
    imageUrl: lookletHero,
    tags: ["visual merchandising", "fashion photography", "product styling", "outfit creation", "ecommerce images", "automated styling"],
    category: "AI Fashion & Style",
    rating: 4.3,
    totalVotes: 5234
  },
  {
    icon: Palette,
    title: "Heuritech",
    description: "AI fashion trend forecasting platform that predicts upcoming trends from social media and runway shows. Data-driven insights for fashion brands and retailers.",
    emoji: "🎨",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.heuritech.com/?via=aiwebtools",
    imageUrl: heuritechHero,
    tags: ["trend forecasting", "fashion analytics", "predictive AI", "market insights", "fashion trends", "data-driven fashion"],
    category: "AI Fashion & Style",
    rating: 4.4,
    totalVotes: 4567
  }
];
