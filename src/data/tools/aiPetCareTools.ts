
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Camera, 
  Activity, 
  MapPin, 
  Dog,
  Bone
} from "lucide-react";

export const aiPetCareTools: Tool[] = [
  {
    icon: Camera,
    title: "Petcube AI",
    description: "Smart pet camera with AI-powered activity monitoring, two-way audio, and treat dispensing for remote pet care and interaction.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://petcube.com/?via=aiwebtools",
    tags: ["pet camera", "remote monitoring", "pet care", "activity tracking", "smart home"],
    category: "AI Pet Care Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Dog,
    title: "Furbo",
    description: "AI dog camera with bark alerts, treat tossing, and smart notifications to keep your pet entertained and monitored throughout the day.",
    emoji: "🐕",
    color: "from-orange-500 to-red-600",
    directUrl: "https://shopus.furbo.com/?via=aiwebtools",
    tags: ["dog camera", "bark detection", "treat dispenser", "pet monitoring", "smart alerts"],
    category: "AI Pet Care Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Activity,
    title: "Whistle",
    description: "AI-powered GPS pet tracker and health monitor providing real-time location tracking, activity monitoring, and wellness insights.",
    emoji: "📡",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.whistle.com/?via=aiwebtools",
    tags: ["GPS tracking", "health monitoring", "activity tracking", "pet wellness", "location alerts"],
    category: "AI Pet Care Tools",
    rating: 4.6,
    totalVotes: 3876
  },
  {
    icon: MapPin,
    title: "Fi",
    description: "Smart dog collar with AI-driven GPS tracking, escape alerts, activity monitoring, and long-lasting battery for comprehensive pet safety.",
    emoji: "🗺️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://tryfi.com/?via=aiwebtools",
    tags: ["smart collar", "GPS tracking", "escape alerts", "activity monitor", "pet safety"],
    category: "AI Pet Care Tools",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Heart,
    title: "PetPace",
    description: "AI veterinary-grade health monitoring collar tracking vitals, activity, and behavior patterns to detect early signs of illness.",
    emoji: "❤️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://petpace.com/?via=aiwebtools",
    tags: ["health monitoring", "vital signs", "veterinary grade", "illness detection", "behavior tracking"],
    category: "AI Pet Care Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Bone,
    title: "Pawp",
    description: "AI-powered telehealth for pets providing 24/7 virtual vet consultations, emergency fund coverage, and pet health guidance.",
    emoji: "🦴",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.pawp.com/?via=aiwebtools",
    tags: ["pet telehealth", "virtual vet", "24/7 support", "emergency coverage", "health guidance"],
    category: "AI Pet Care Tools",
    rating: 4.3,
    totalVotes: 2654
  }
];
