
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Activity, 
  Brain, 
  Moon, 
  Apple,
  Timer,
  Zap,
  Shield,
  Smile,
  Users
} from "lucide-react";

export const healthAndWellnessTools: Tool[] = [
  {
    icon: Brain,
    title: "Headspace",
    description: "Meditation and mindfulness app with guided sessions for stress reduction, better sleep, and mental wellness.",
    emoji: "🧘",
    color: "from-orange-500 to-pink-600",
    directUrl: "https://headspace.com/",
    tags: ["meditation", "mindfulness", "stress reduction", "mental health", "sleep"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Activity,
    title: "MyFitnessPal",
    description: "Calorie counter and nutrition tracker. Log food, track macros, and monitor your fitness goals with extensive database.",
    emoji: "🏃",
    color: "from-blue-500 to-green-600",
    directUrl: "https://myfitnesspal.com/",
    tags: ["calorie tracking", "nutrition", "fitness goals", "food logging", "health"],
    category: "Health & Wellness",
    rating: 4.4,
    totalVotes: 6789
  },
  {
    icon: Moon,
    title: "Sleep Cycle",
    description: "Smart alarm clock that analyzes your sleep patterns and wakes you during light sleep for better mornings.",
    emoji: "😴",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://sleepcycle.com/",
    tags: ["sleep tracking", "smart alarm", "sleep analysis", "wellness", "health"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 4567
  },
  {
    icon: Apple,
    title: "Cronometer",
    description: "Accurate nutrition tracking with detailed micronutrient analysis. Track vitamins, minerals, and overall nutritional health.",
    emoji: "🍎",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://cronometer.com/",
    tags: ["nutrition tracking", "micronutrients", "vitamins", "health analysis", "diet"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Heart,
    title: "7 Cups",
    description: "Free emotional support and mental health platform. Connect with trained listeners and participate in support groups.",
    emoji: "💚",
    color: "from-green-500 to-blue-600",
    directUrl: "https://7cups.com/",
    tags: ["emotional support", "mental health", "counseling", "peer support", "free"],
    category: "Health & Wellness",
    rating: 4.2,
    totalVotes: 3789
  }
];
