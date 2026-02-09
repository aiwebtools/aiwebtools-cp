
import { Tool } from "@/types/tools";
import { 
  Activity, 
  Heart, 
  Apple, 
  Dumbbell, 
  Target,
  TrendingUp
} from "lucide-react";

import myfitnesspalHero from "@/assets/tools/myfitnesspal-hero.jpg";
import noomHero from "@/assets/tools/noom-hero.jpg";
import fitbodHero from "@/assets/tools/fitbod-hero.jpg";
import strongrFastrHero from "@/assets/tools/strongr-fastr-hero.jpg";
import freeleticsHero from "@/assets/tools/freeletics-hero.jpg";
import whoopHero from "@/assets/tools/whoop-hero.jpg";

export const aiFitnessNutritionTools: Tool[] = [
  {
    icon: Apple,
    title: "MyFitnessPal AI",
    description: "AI-powered calorie counter and nutrition tracker with smart food recognition and personalized meal recommendations.",
    emoji: "🍎",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.myfitnesspal.com/?via=aiwebtools",
    imageUrl: myfitnesspalHero,
    tags: ["nutrition", "calorie tracking", "meal planning", "fitness tracking", "health"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.5,
    totalVotes: 5432
  },
  {
    icon: Target,
    title: "Noom",
    description: "AI-driven weight loss and wellness program using psychology-based approaches and personalized coaching.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.noom.com/?via=aiwebtools",
    imageUrl: noomHero,
    tags: ["weight loss", "wellness", "coaching", "psychology", "behavior change"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.4,
    totalVotes: 4321
  },
  {
    icon: Dumbbell,
    title: "Fitbod",
    description: "AI personal trainer app that creates customized workout plans based on your goals, equipment, and progress.",
    emoji: "💪",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.fitbod.me/?via=aiwebtools",
    imageUrl: fitbodHero,
    tags: ["workout planning", "personal training", "strength training", "fitness AI", "exercise"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Activity,
    title: "Strongr Fastr",
    description: "AI-powered meal planning and workout generator for customized fitness and nutrition programs.",
    emoji: "🏋️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://strongrfastr.com/?via=aiwebtools",
    imageUrl: strongrFastrHero,
    tags: ["meal planning", "workout generator", "fitness", "nutrition", "custom programs"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Heart,
    title: "Freeletics",
    description: "AI personal trainer delivering adaptive HIIT workouts and personalized fitness coaching through machine learning.",
    emoji: "❤️",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.freeletics.com/?via=aiwebtools",
    imageUrl: freeleticsHero,
    tags: ["HIIT", "personal training", "adaptive workouts", "fitness coaching", "bodyweight training"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Whoop",
    description: "AI-powered fitness and health tracker analyzing sleep, recovery, and strain to optimize performance.",
    emoji: "📈",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.whoop.com/?via=aiwebtools",
    imageUrl: whoopHero,
    tags: ["fitness tracking", "recovery", "sleep analysis", "performance optimization", "health monitoring"],
    category: "AI Fitness & Nutrition Tools",
    rating: 4.6,
    totalVotes: 4123
  }
];
