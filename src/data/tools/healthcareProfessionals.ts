import { Tool } from "@/types/tools";
import { 
  Stethoscope, Heart, Brain, Activity, 
  Pill, Cross, UserCheck, Shield,
  HeartHandshake, Users, BookOpen, Youtube
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Stethoscope,
    title: "AI Medical Assistant",
    description: "Advanced AI tool for medical professionals providing diagnostic support, treatment recommendations, and medical research assistance.",
    emoji: "🏥",
    color: "from-blue-500 to-green-500",
    directUrl: "https://medical-ai.com",
    tags: ["medical", "diagnosis", "healthcare", "treatment", "research"],
    category: "Healthcare Professionals"
  },
  {
    icon: Heart,
    title: "Mental Wellness GPT",
    description: "AI-powered mental health support providing wellness strategies, coping mechanisms, and emotional guidance for mental wellbeing.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental health", "wellness", "emotional support", "coping strategies", "wellbeing"],
    category: "Healthcare Professionals",
    rating: 4.3,
    totalVotes: 2876
  }
];
