
import { Tool } from "@/types/tools";
import { 
  Car, 
  Heart, 
  Home
} from "lucide-react";

import rootInsuranceHero from "@/assets/tools/root-insurance-hero.jpg";
import oscarHealthHero from "@/assets/tools/oscar-health-hero.jpg";
import kinInsuranceHero from "@/assets/tools/kin-insurance-hero.jpg";

export const aiInsuranceTools: Tool[] = [
  {
    icon: Car,
    title: "Root Insurance",
    description: "AI-based car insurance that prices premiums based on actual driving behavior using smartphone telematics and fair pricing algorithms.",
    emoji: "🚗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.joinroot.com/?via=aiwebtools",
    imageUrl: rootInsuranceHero,
    tags: ["car insurance", "driving behavior", "telematics", "usage-based insurance", "fair pricing"],
    category: "AI Insurance Tools",
    rating: 4.4,
    totalVotes: 3987
  },
  {
    icon: Heart,
    title: "Oscar Health",
    description: "AI-powered health insurance with personalized care navigation, telemedicine, and transparent pricing for better healthcare access.",
    emoji: "❤️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.hioscar.com/?via=aiwebtools",
    imageUrl: oscarHealthHero,
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
    imageUrl: kinInsuranceHero,
    tags: ["home insurance", "smart coverage", "instant quotes", "claims experience", "homeowners"],
    category: "AI Insurance Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
