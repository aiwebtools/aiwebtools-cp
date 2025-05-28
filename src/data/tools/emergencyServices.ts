
import { Tool } from "@/types/tools";
import { 
  Flame, Shield
} from "lucide-react";

export const emergencyServices: Tool[] = [
  {
    icon: Flame,
    title: "Firefighter GPT",
    description: "Professional firefighting and emergency response training assistant. Learn fire safety protocols, emergency procedures, rescue techniques, and firefighting strategies.",
    emoji: "🚒",
    color: "from-red-500 to-orange-600",
    category: "Emergency Services",
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    tags: ["firefighting", "emergency response", "safety", "rescue", "training"],
    rating: 4.4,
    totalVotes: 3012
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Ultimate survival guide AI. Learn wilderness survival skills, emergency preparedness, outdoor safety, and self-reliance techniques from an expert AI survivalist.",
    emoji: "🏕️",
    color: "from-green-500 to-brown-600",
    category: "Emergency Services",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18",
    tags: ["survival", "wilderness", "emergency", "preparedness", "outdoor"],
    rating: 4.3,
    totalVotes: 2123
  },
  {
    icon: Shield,
    title: "Firearms Safety Instructor GPT",
    description: "Professional firearms safety education and training assistant. Learn proper gun safety protocols, handling techniques, storage guidelines, and responsible ownership practices.",
    emoji: "🛡️",
    color: "from-red-500 to-gray-600",
    category: "Emergency Services",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["firearms safety", "training", "education", "safety protocols", "responsible ownership"],
    rating: 4.1,
    totalVotes: 2123
  }
];
