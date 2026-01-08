
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Activity, 
  Brain, 
  Stethoscope,
  Shield,
  Zap,
  Eye,
  User
} from "lucide-react";

export const specializedHealthTools: Tool[] = [
  {
    icon: Heart,
    title: "HealthTap",
    description: "Connect with doctors 24/7 for medical advice, prescriptions, and telehealth consultations.",
    emoji: "💊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.healthtap.com",
    imageUrl: "/src/assets/tools/healthtap-hero.png",
    tags: ["telemedicine", "doctor consultation", "health advice", "prescriptions", "Medical", "Healthcare"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.4,
    totalVotes: 3210
  },
  {
    icon: Brain,
    title: "Headspace Health",
    description: "AI-powered meditation and mindfulness platform with personalized mental health support.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.headspace.com",
    imageUrl: "/src/assets/tools/headspace-hero.png",
    tags: ["meditation", "mindfulness", "mental health", "stress relief", "Mental Health", "Meditation", "Wellness"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Activity,
    title: "MyFitnessPal",
    description: "Comprehensive nutrition tracking with AI-powered insights and meal recommendations.",
    emoji: "🏃",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.myfitnesspal.com",
    imageUrl: "/src/assets/tools/myfitnesspal-hero.png",
    tags: ["fitness tracking", "nutrition", "diet planning", "health monitoring", "Fitness", "Nutrition", "Health Tracking"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.5,
    totalVotes: 5234
  },
  {
    icon: Stethoscope,
    title: "Ada Health",
    description: "AI-powered symptom checker and health assessment tool for personalized medical insights.",
    emoji: "🩺",
    color: "from-red-500 to-pink-600",
    directUrl: "https://ada.com",
    imageUrl: "/src/assets/tools/ada-health-hero.png",
    tags: ["symptom checker", "health assessment", "AI diagnosis", "medical insights", "Medical", "Healthcare"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.3,
    totalVotes: 2890
  },
  {
    icon: Shield,
    title: "Calm",
    description: "Mental wellness platform with AI-driven sleep stories, meditation, and relaxation programs.",
    emoji: "🌙",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.calm.com",
    imageUrl: "/src/assets/tools/calm-hero.png",
    tags: ["sleep", "meditation", "relaxation", "mental wellness", "Mental Health", "Meditation", "Sleep", "Stress Management"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.7,
    totalVotes: 6123
  }
];
