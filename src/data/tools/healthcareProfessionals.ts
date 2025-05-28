import { Tool } from "@/types/tools";
import { 
  Stethoscope, Heart, Brain, Shield, Cross,
  Activity, Pill, Thermometer, Syringe, Microscope
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Brain,
    title: "Mental Wellness GPT",
    description: "Comprehensive mental health support and wellness guidance. Get help with stress management, emotional well-being, and mental health resources.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental health", "wellness", "stress management", "emotional support", "resources"],
    category: "Healthcare Professionals",
    rating: 4.3,
    totalVotes: 2567
  }
];
