
import { Tool } from "@/types/tools";
import { 
  Shield, 
  Car, 
  Heart, 
  Home, 
  Zap,
  FileText
} from "lucide-react";

export const aiInsuranceTools: Tool[] = [
  {
    icon: Shield,
    title: "Lemonade AI",
    description: "AI-powered insurance company offering instant quotes, fast claims processing, and transparent coverage for renters, homeowners, and pet insurance.",
    emoji: "🍋",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.lemonade.com/?via=aiwebtools",
    tags: ["instant quotes", "fast claims", "renters insurance", "homeowners insurance", "pet insurance"],
    category: "AI Insurance Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Car,
    title: "Root Insurance",
    description: "AI-based car insurance that prices premiums based on actual driving behavior using smartphone telematics and fair pricing algorithms.",
    emoji: "🚗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.joinroot.com/?via=aiwebtools",
    tags: ["car insurance", "driving behavior", "telematics", "usage-based insurance", "fair pricing"],
    category: "AI Insurance Tools",
    rating: 4.4,
    totalVotes: 3987
  },
  {
    icon: Zap,
    title: "Metromile",
    description: "Pay-per-mile car insurance with AI-driven pricing based on actual miles driven, perfect for low-mileage drivers.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.metromile.com/?via=aiwebtools",
    tags: ["pay-per-mile", "car insurance", "mileage tracking", "AI pricing", "low-mileage drivers"],
    category: "AI Insurance Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Heart,
    title: "Oscar Health",
    description: "AI-powered health insurance with personalized care navigation, telemedicine, and transparent pricing for better healthcare access.",
    emoji: "❤️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.hioscar.com/?via=aiwebtools",
    tags: ["health insurance", "care navigation", "telemedicine", "transparent pricing", "healthcare access"],
    category: "AI Insurance Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Home,
    title: "Kin Insurance",
    description: "AI home insurance platform offering smart coverage, instant quotes, and modern claims experience for homeowners.",
    emoji: "🏠",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.kin.com/?via=aiwebtools",
    tags: ["home insurance", "smart coverage", "instant quotes", "claims experience", "homeowners"],
    category: "AI Insurance Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: FileText,
    title: "Policygenius",
    description: "AI insurance marketplace comparing quotes from top insurers for life, home, auto, and disability insurance with expert guidance.",
    emoji: "📋",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.policygenius.com/?via=aiwebtools",
    tags: ["insurance marketplace", "quote comparison", "life insurance", "expert guidance", "multiple policies"],
    category: "AI Insurance Tools",
    rating: 4.5,
    totalVotes: 3456
  }
];
