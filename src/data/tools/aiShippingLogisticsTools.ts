
import { Tool } from "@/types/tools";
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle,
  Box
} from "lucide-react";

import shipstationHero from "@/assets/tools/shipstation-hero.jpg";
import easypostHero from "@/assets/tools/easypost-hero.jpg";
import aftershipHero from "@/assets/tools/aftership-hero.jpg";
import routeHero from "@/assets/tools/route-hero.jpg";
import shippoHero from "@/assets/tools/shippo-hero.jpg";
import narvarHero from "@/assets/tools/narvar-hero.jpg";

export const aiShippingLogisticsTools: Tool[] = [
  {
    icon: Package,
    title: "ShipStation",
    description: "AI-powered shipping software automating order imports, label printing, and multi-carrier shipping management for e-commerce businesses.",
    emoji: "📦",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.shipstation.com/?via=aiwebtools",
    imageUrl: shipstationHero,
    tags: ["shipping automation", "multi-carrier", "order management", "label printing", "e-commerce shipping"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Box,
    title: "EasyPost",
    description: "Modern shipping API with AI rate shopping, address verification, and automated carrier selection for optimized delivery costs.",
    emoji: "📮",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.easypost.com/?via=aiwebtools",
    imageUrl: easypostHero,
    tags: ["shipping API", "rate shopping", "address verification", "carrier selection", "developer tools"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: MapPin,
    title: "AfterShip",
    description: "AI-driven package tracking platform providing real-time shipping notifications and branded tracking experiences for customers.",
    emoji: "🗺️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.aftership.com/?via=aiwebtools",
    imageUrl: aftershipHero,
    tags: ["package tracking", "shipping notifications", "branded tracking", "delivery updates", "customer experience"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.4,
    totalVotes: 3876
  },
  {
    icon: CheckCircle,
    title: "Route",
    description: "AI package protection and tracking app offering real-time delivery updates, lost package resolution, and shipping insurance.",
    emoji: "✅",
    color: "from-orange-500 to-red-600",
    directUrl: "https://route.com/?via=aiwebtools",
    imageUrl: routeHero,
    tags: ["package protection", "tracking app", "delivery updates", "shipping insurance", "consumer app"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Truck,
    title: "Shippo",
    description: "Multi-carrier shipping platform with AI-powered rate comparison, label generation, and tracking for seamless logistics.",
    emoji: "🚚",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://goshippo.com/?via=aiwebtools",
    imageUrl: shippoHero,
    tags: ["multi-carrier", "rate comparison", "label generation", "logistics platform", "shipping API"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Clock,
    title: "Narvar",
    description: "AI customer experience platform for post-purchase engagement with intelligent delivery tracking and returns management.",
    emoji: "⏱️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://corp.narvar.com/?via=aiwebtools",
    imageUrl: narvarHero,
    tags: ["customer experience", "post-purchase", "delivery tracking", "returns management", "engagement platform"],
    category: "AI Shipping & Logistics Tools",
    rating: 4.4,
    totalVotes: 2987
  }
];
