import { Tool } from "@/types/tools";
import { ShoppingCart, TrendingUp, Target, Star, Package, Sparkles } from "lucide-react";

import shopifyAiHero from "@/assets/tools/shopify-ai-hero.jpg";
import bigcommerceHero from "@/assets/tools/bigcommerce-hero.jpg";
import nostoHero from "@/assets/tools/nosto-hero.jpg";
import bazaarvoiceHero from "@/assets/tools/bazaarvoice-hero.jpg";
import algoliaHero from "@/assets/tools/algolia-hero.jpg";
import dynamicYieldHero from "@/assets/tools/dynamic-yield-hero.jpg";

export const aiEcommerceTools: Tool[] = [
  {
    icon: ShoppingCart,
    title: "Shopify AI",
    description: "AI-powered e-commerce platform with smart product recommendations, automated marketing, inventory optimization, and personalized shopping experiences. Build and scale your online store.",
    emoji: "🛒",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.shopify.com/?via=aiwebtools",
    imageUrl: shopifyAiHero,
    tags: ["e-commerce", "online store", "AI recommendations", "inventory management", "marketing automation", "shopping cart"],
    category: "AI E-commerce",
    rating: 4.8,
    totalVotes: 45678
  },
  {
    icon: Package,
    title: "BigCommerce AI",
    description: "Enterprise e-commerce platform with AI-powered personalization, smart search, automated merchandising, and omnichannel selling. Scale your business with intelligent insights.",
    emoji: "📦",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.bigcommerce.com/?via=aiwebtools",
    imageUrl: bigcommerceHero,
    tags: ["e-commerce", "enterprise", "personalization", "omnichannel", "merchandising", "AI insights"],
    category: "AI E-commerce",
    rating: 4.7,
    totalVotes: 28934
  },
  {
    icon: Target,
    title: "Nosto",
    description: "AI-powered commerce experience platform with personalized product recommendations, dynamic content, and behavioral targeting. Increase conversions with intelligent personalization.",
    emoji: "🎯",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.nosto.com/?via=aiwebtools",
    imageUrl: nostoHero,
    tags: ["personalization", "product recommendations", "behavioral targeting", "conversion optimization", "AI commerce", "dynamic content"],
    category: "AI E-commerce",
    rating: 4.6,
    totalVotes: 12456
  },
  {
    icon: Star,
    title: "Bazaarvoice",
    description: "AI-powered user-generated content platform for reviews, ratings, and Q&A. Collect authentic customer feedback, build trust, and drive sales with social proof.",
    emoji: "⭐",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.bazaarvoice.com/?via=aiwebtools",
    imageUrl: bazaarvoiceHero,
    tags: ["reviews", "ratings", "user content", "social proof", "customer feedback", "trust building", "UGC"],
    category: "AI E-commerce",
    rating: 4.5,
    totalVotes: 15678
  },
  {
    icon: Sparkles,
    title: "Algolia",
    description: "AI-powered search and discovery platform for e-commerce. Deliver fast, relevant search results with typo-tolerance, personalization, and merchandising controls.",
    emoji: "🔍",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://www.algolia.com/?via=aiwebtools",
    imageUrl: algoliaHero,
    tags: ["search", "discovery", "e-commerce search", "personalization", "merchandising", "AI search"],
    category: "AI E-commerce",
    rating: 4.7,
    totalVotes: 19876
  },
  {
    icon: TrendingUp,
    title: "Dynamic Yield",
    description: "AI-powered personalization platform for e-commerce. Optimize every customer touchpoint with personalized recommendations, content, and experiences at scale.",
    emoji: "📈",
    color: "from-teal-500 to-green-600",
    directUrl: "https://www.dynamicyield.com/?via=aiwebtools",
    imageUrl: dynamicYieldHero,
    tags: ["personalization", "optimization", "recommendations", "customer experience", "A/B testing", "merchandising"],
    category: "AI E-commerce",
    rating: 4.6,
    totalVotes: 11234
  }
];
