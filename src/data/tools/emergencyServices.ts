
import { Tool } from "@/types/tools";
import { 
  Shield, 
  Truck, 
  Heart, 
  Phone, 
  AlertTriangle,
  Flame,
  Target,
  Users,
  Plus
} from "lucide-react";

export const emergencyServices: Tool[] = [
  {
    icon: Plus,
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
    icon: Target,
    title: "Firearms Safety Instructor GPT",
    description: "Comprehensive firearms safety education and training resources for instructors, students, and gun safety programs.",
    emoji: "🎯",
    color: "from-red-600 to-orange-600",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    category: "Emergency Services",
    tags: ["firearms safety", "education", "training", "safety"],
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: Flame,
    title: "Firefighter GPT",
    description: "Professional firefighting guidance, emergency response protocols, and fire safety education for firefighters and emergency personnel.",
    emoji: "🚒",
    color: "from-red-600 to-yellow-600",
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    category: "Emergency Services",
    tags: ["firefighting", "emergency response", "fire safety", "first responder"],
    rating: 4.7,
    totalVotes: 2456
  }
];
