import { Tool } from "@/types/tools";
import { 
  Camera, 
  Dog, 
  Activity, 
  MapPin, 
  Heart,
  Glasses,
  Cpu,
  Wifi,
  Watch,
  Smartphone
} from "lucide-react";

import petcubeHero from "@/assets/tools/petcube-hero.jpg";
import furboHero from "@/assets/tools/furbo-hero.jpg";
import whistleHero from "@/assets/tools/whistle-hero.jpg";
import fiCollarHero from "@/assets/tools/fi-collar-hero.jpg";
import petpaceHero from "@/assets/tools/petpace-hero.jpg";

export const aiGadgetsDevicesTools: Tool[] = [
  // === PET GADGETS & DEVICES ===
  {
    icon: Camera,
    title: "Petcube AI",
    description: "Smart pet camera with AI-powered activity monitoring, two-way audio, and treat dispensing for remote pet care and interaction.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://petcube.com/?via=aiwebtools",
    imageUrl: petcubeHero,
    tags: ["pet camera", "smart device", "remote monitoring", "activity tracking", "smart home", "AI gadget", "pet gadget", "IoT device"],
    category: "AI Gadgets & Devices",
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
    imageUrl: furboHero,
    tags: ["dog camera", "bark detection", "treat dispenser", "pet monitoring", "smart alerts", "AI gadget", "pet gadget", "smart device"],
    category: "AI Gadgets & Devices",
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
    imageUrl: whistleHero,
    tags: ["GPS tracking", "health monitoring", "activity tracking", "pet wellness", "location alerts", "wearable", "pet gadget", "smart device"],
    category: "AI Gadgets & Devices",
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
    imageUrl: fiCollarHero,
    tags: ["smart collar", "GPS tracking", "escape alerts", "activity monitor", "pet safety", "wearable", "pet gadget", "AI device"],
    category: "AI Gadgets & Devices",
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
    imageUrl: petpaceHero,
    tags: ["health monitoring", "vital signs", "veterinary grade", "illness detection", "behavior tracking", "wearable", "pet gadget", "AI device"],
    category: "AI Gadgets & Devices",
    rating: 4.4,
    totalVotes: 2987
  },
  // === SMART GLASSES & WEARABLES ===
  {
    icon: Glasses,
    title: "Meta AI Glasses",
    description: "Revolutionary AI-powered smart glasses that bring artificial intelligence directly to your field of view. Experience hands-free AI assistance, real-time information overlay, and seamless integration with your digital life.",
    emoji: "🤓",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://meta.com/ai-glasses/referrals/ATRR4FMR6WC4X7NFR3WRNRXTJ/?utm_source=mwa&utm_medium=growth&utm_campaign=rbm_referral",
    imageUrl: "/src/assets/tools/meta-ai-glasses-hero.png",
    category: "AI Gadgets & Devices",
    tags: ["smart glasses", "augmented reality", "AI assistant", "wearable tech", "Meta", "hands-free AI", "AI gadget", "smart device"],
    rating: 4.5,
    totalVotes: 1234
  }
];
