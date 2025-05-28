
import { Tool } from "@/types/tools";
import { 
  Truck, Phone, Shield, AlertTriangle, Cross,
  Siren, Activity, Radio, MapPin,
  Flame
} from "lucide-react";

export const emergencyServices: Tool[] = [
  {
    icon: Phone,
    title: "Emergency Response Coordinator GPT",
    description: "AI assistant for emergency response coordination, providing crisis management guidance and emergency protocol assistance.",
    emoji: "🚨",
    color: "from-red-500 to-orange-600",
    directUrl: "https://emergencyresponsegpt.lovable.app/?via=aiwebtools",
    tags: ["emergency response", "crisis management", "emergency protocols", "coordination", "safety"],
    category: "Emergency Services",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Cross,
    title: "Paramedic Assistant GPT",
    description: "Emergency medical AI assistant for paramedics and EMTs, providing medical protocol guidance and emergency care support.",
    emoji: "🚑",
    color: "from-blue-500 to-red-600",
    directUrl: "https://paramedicgpt.lovable.app/?via=aiwebtools",
    tags: ["paramedic", "emergency medical", "EMT", "medical protocols", "emergency care"],
    category: "Emergency Services",
    rating: 4.3,
    totalVotes: 2134
  },
  {
    icon: Flame,
    title: "Firefighter GPT",
    description: "Specialized AI assistant for firefighters and fire safety professionals, providing fire suppression techniques, safety protocols, and emergency response guidance.",
    emoji: "🚒",
    color: "from-red-500 to-orange-600",
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    tags: ["firefighting", "fire safety", "emergency response", "fire suppression", "safety protocols"],
    category: "Emergency Services",
    rating: 4.5,
    totalVotes: 3456
  }
];
