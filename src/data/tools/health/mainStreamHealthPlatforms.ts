
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Brain, 
  Shield,
  Zap,
  Eye
} from "lucide-react";

export const mainStreamHealthPlatforms: Tool[] = [
  {
    icon: Heart,
    title: "Fitbit Health Solutions",
    description: "Comprehensive health tracking with AI-powered insights for fitness, sleep, and wellness monitoring.",
    emoji: "❤️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.fitbit.com",
    imageUrl: "/src/assets/tools/fitbit-hero.png",
    tags: ["fitness tracking", "health monitoring", "wearables", "wellness analytics", "Fitness", "Health Tracking", "Wellness"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Activity,
    title: "Apple Health",
    description: "Integrated health platform with AI analysis of health data from various sources and devices.",
    emoji: "🍎",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.apple.com/health",
    imageUrl: "/src/assets/tools/apple-health-hero.png",
    tags: ["health integration", "data analysis", "fitness tracking", "medical records", "Health Tracking", "Fitness", "Healthcare"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Stethoscope,
    title: "Teladoc Health",
    description: "Leading telehealth platform providing virtual medical consultations and health services.",
    emoji: "👨‍⚕️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.teladoc.com",
    imageUrl: "/src/assets/tools/teladoc-hero.png",
    tags: ["telemedicine", "virtual consultations", "healthcare access", "medical advice", "Medical", "Healthcare"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.4,
    totalVotes: 3890
  },
  {
    icon: Brain,
    title: "BetterHelp",
    description: "Online therapy platform connecting users with licensed therapists for mental health support.",
    emoji: "🧠",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.betterhelp.com",
    imageUrl: "/src/assets/tools/betterhelp-hero.png",
    tags: ["online therapy", "mental health", "counseling", "psychological support", "Mental Health", "Therapy"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.3,
    totalVotes: 4123
  },
  {
    icon: Shield,
    title: "Noom Health",
    description: "AI-powered weight management and wellness platform with personalized coaching.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.noom.com",
    imageUrl: "/src/assets/tools/noom-hero.png",
    tags: ["weight management", "behavior change", "health coaching", "wellness program", "Fitness", "Nutrition", "Wellness"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.2,
    totalVotes: 3567
  }
];
