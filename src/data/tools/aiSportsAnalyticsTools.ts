
import { Tool } from "@/types/tools";
import { 
  Activity, 
  Heart, 
  TrendingUp, 
  Zap, 
  Target,
  BarChart3
} from "lucide-react";

import whoopHero from "@/assets/tools/whoop-hero.jpg";
import ouraRingHero from "@/assets/tools/oura-ring-hero.jpg";
import catapultSportsHero from "@/assets/tools/catapult-sports-hero.jpg";
import zone7Hero from "@/assets/tools/zone7-hero.jpg";
import stravaHero from "@/assets/tools/strava-hero.jpg";
import trainingpeaksHero from "@/assets/tools/trainingpeaks-hero.jpg";

export const aiSportsAnalyticsTools: Tool[] = [
  {
    icon: Activity,
    title: "Whoop",
    description: "AI-powered fitness and health tracker analyzing sleep, recovery, and strain to optimize performance with personalized coaching insights.",
    emoji: "💪",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.whoop.com/?via=aiwebtools",
    imageUrl: whoopHero,
    tags: ["fitness tracking", "recovery", "sleep analysis", "performance optimization", "health monitoring"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Heart,
    title: "Oura Ring",
    description: "Smart ring with AI-driven health tracking providing insights on sleep quality, readiness, and activity levels through advanced biometrics.",
    emoji: "💍",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://ouraring.com/?via=aiwebtools",
    imageUrl: ouraRingHero,
    tags: ["smart ring", "sleep tracking", "biometrics", "health insights", "readiness score"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: TrendingUp,
    title: "Catapult Sports",
    description: "Elite athlete tracking and performance analytics platform using wearable technology and AI for professional sports teams.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.catapultsports.com/?via=aiwebtools",
    imageUrl: catapultSportsHero,
    tags: ["athlete tracking", "performance analytics", "wearable tech", "professional sports", "team analytics"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Zone7",
    description: "AI injury prediction and prevention platform for sports teams using machine learning to optimize training loads and reduce injury risk.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://zone7.ai/?via=aiwebtools",
    imageUrl: zone7Hero,
    tags: ["injury prediction", "injury prevention", "training optimization", "machine learning", "sports science"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Target,
    title: "Strava",
    description: "Social fitness network with AI-powered activity tracking, performance insights, and training analytics for runners and cyclists.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.strava.com/?via=aiwebtools",
    imageUrl: stravaHero,
    tags: ["fitness network", "activity tracking", "performance insights", "running", "cycling analytics"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.6,
    totalVotes: 7891
  },
  {
    icon: BarChart3,
    title: "TrainingPeaks",
    description: "AI-enhanced training platform for endurance athletes with workout planning, performance tracking, and data-driven coaching tools.",
    emoji: "📈",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.trainingpeaks.com/?via=aiwebtools",
    imageUrl: trainingpeaksHero,
    tags: ["training platform", "endurance sports", "workout planning", "performance tracking", "coaching tools"],
    category: "AI Sports & Fitness Analytics Tools",
    rating: 4.5,
    totalVotes: 4123
  }
];
