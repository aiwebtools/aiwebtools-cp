import { Tool } from "@/types/tools";
import { Package, Truck, Ship, MapPin, Route } from "lucide-react";
import shipbobHero from "@/assets/tools/shipbob-hero.jpg";
import flexportHero from "@/assets/tools/flexport-hero.jpg";
import fourkitesHero from "@/assets/tools/fourkites-hero.jpg";
import project44Hero from "@/assets/tools/project44-hero.jpg";
import locusHero from "@/assets/tools/locus-hero.jpg";

export const aiLogisticsSupplyChainTools: Tool[] = [
  {
    icon: Package,
    title: "ShipBob",
    description: "AI-powered fulfillment and logistics platform for ecommerce. Automated inventory management, order fulfillment, and shipping optimization with real-time tracking.",
    emoji: "📦",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.shipbob.com/?via=aiwebtools",
    imageUrl: shipbobHero,
    tags: ["fulfillment", "logistics", "inventory management", "order fulfillment", "shipping optimization", "ecommerce logistics"],
    category: "AI Logistics & Supply Chain",
    rating: 4.6,
    totalVotes: 8234
  },
  {
    icon: Ship,
    title: "Flexport",
    description: "AI-enhanced freight forwarding and customs brokerage platform. Real-time shipment visibility, automated documentation, and supply chain optimization for global trade.",
    emoji: "🚢",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.flexport.com/?via=aiwebtools",
    imageUrl: flexportHero,
    tags: ["freight forwarding", "customs", "global shipping", "supply chain visibility", "logistics platform", "international trade"],
    category: "AI Logistics & Supply Chain",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: Truck,
    title: "FourKites",
    description: "AI-powered supply chain visibility platform with real-time tracking, predictive analytics, and automated alerts. Monitor shipments across all transportation modes.",
    emoji: "🚚",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.fourkites.com/?via=aiwebtools",
    imageUrl: fourkitesHero,
    tags: ["supply chain visibility", "real-time tracking", "predictive analytics", "shipment monitoring", "logistics tracking", "transportation"],
    category: "AI Logistics & Supply Chain",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: MapPin,
    title: "project44",
    description: "AI-powered supply chain visibility platform with real-time tracking, predictive ETAs, and automated exception management across global logistics networks.",
    emoji: "🗺️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.project44.com/?via=aiwebtools",
    imageUrl: project44Hero,
    tags: ["supply chain visibility", "predictive ETA", "exception management", "global logistics", "shipment tracking", "real-time visibility"],
    category: "AI Logistics & Supply Chain",
    rating: 4.7,
    totalVotes: 10234
  },
  // Removed: ClearMetal - acquired by project44 in 2019, website no longer exists
  {
    icon: Route,
    title: "Locus",
    description: "AI-powered logistics optimization platform for route planning, dispatch management, and last-mile delivery. Optimize delivery operations with machine learning.",
    emoji: "🛣️",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://locus.sh/?via=aiwebtools",
    imageUrl: locusHero,
    tags: ["route optimization", "last-mile delivery", "dispatch management", "delivery optimization", "logistics AI", "fleet management"],
    category: "AI Logistics & Supply Chain",
    rating: 4.6,
    totalVotes: 7456
  }
];
