import { Tool } from "@/types/tools";
import { 
  ShoppingCart, 
  TrendingUp, 
  Target, 
  Mail, 
  Zap,
  Video,
  Users
} from "lucide-react";

export const ecommerceAndMarketingTools: Tool[] = [
  {
    icon: Target,
    title: "GoCharlie AI",
    description: "Powerful content creation AI platform designed for businesses. Charlie's AI agent streamlines content creation, saving up to 10x time for on-brand content. Over 70 tools generating content with one click.",
    emoji: "🎯",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://gocharlie.ai/?fpr=aiwebtools",
    tags: ["10x time saving", "on-brand content", "70+ tools", "marketers", "10-day trial", "flexible cancellation"],
    category: "E-commerce & Marketing Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Mail,
    title: "Hoppy Copy",
    description: "AI-powered tool for email marketing campaigns. Over 50 Email AI Templates for holiday campaigns, drip sequences, newsletters. Content Converter, Spam Checker, and competitor insights included.",
    emoji: "📧",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.hoppycopy.co/?via=Aiwebtools",
    tags: ["50+ templates", "email marketing", "spam checker", "competitor insights", "content converter", "free trial"],
    category: "E-commerce & Marketing Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: ShoppingCart,
    title: "Mentum AI",
    description: "Game-changing solution for e-commerce businesses offering 90% reduction in product listing and localization costs. Automates product information collection, enhances catalog organization, generates descriptions.",
    emoji: "🛒",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.mentum.ai/?via=aiwebtools",
    tags: ["90% cost reduction", "product listing", "localization", "catalog organization", "multilingual", "SEO optimization"],
    category: "E-commerce & Marketing Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: ShoppingCart,
    title: "Shopify Magic",
    description: "Groundbreaking AI innovation seamlessly integrated into Shopify. Sidekick AI commerce assistant refines writing, streamlines tasks, and optimizes workflows.",
    emoji: "🛍️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://shopify.pxf.io/baqN2M",
    tags: ["Shopify integration", "AI assistant", "e-commerce", "workflow optimization", "content creation", "conversions"],
    category: "Ecommerce & Marketing Tools",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "LiveReacting",
    description: "Go-to solution for running interactive live streams that boost follower count and engagement. Incorporate pre-recorded videos, games, countdowns, and polls.",
    emoji: "📺",
    color: "from-red-500 to-pink-600",
    directUrl: "https://livereacting.sjv.io/c/4110048/461538/8208",
    tags: ["live streaming", "interactive content", "engagement boost", "multi-platform", "branded videos", "5-20x engagement"],
    category: "Ecommerce & Marketing Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "MyHeritage Deep Nostalgia",
    description: "Viral sensation with 110+ million animations. Breathe life into family photos with realistic video footage using deep learning technology from D-ID.",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://myheritage.sjv.io/c/4110048/909501/12471",
    tags: ["photo animation", "deep learning", "family photos", "viral technology", "D-ID powered", "110M+ animations"],
    category: "Ecommerce & Marketing Tools",
    rating: 4.6,
    totalVotes: 5234
  }
];
