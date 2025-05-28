
import { Tool } from "@/types/tools";
import { 
  Briefcase, Heart, Map
} from "lucide-react";

export const personalServices: Tool[] = [
  {
    icon: Briefcase,
    title: "AUTOMOBILE GPT",
    description: "Expert automotive AI assistant for car enthusiasts, mechanics, and buyers. Get advice on car maintenance, repairs, buying guides, and automotive troubleshooting.",
    emoji: "🚗",
    color: "from-blue-500 to-gray-600",
    category: "Personal Services",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    tags: ["automotive", "cars", "maintenance", "repair", "advice"],
    rating: 4.2,
    totalVotes: 2456
  },
  {
    icon: Heart,
    title: "Social Safety Net GPT",
    description: "Navigate social services and support systems with AI assistance. Get help understanding benefits, social programs, and community resources available to you.",
    emoji: "🤝",
    color: "from-blue-500 to-green-600",
    category: "Personal Services",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social services", "benefits", "support", "community", "assistance"],
    rating: 4.4,
    totalVotes: 3156
  },
  {
    icon: Map,
    title: "Travel Advisor GPT",
    description: "Your AI travel companion for planning perfect trips. Get personalized recommendations, travel tips, itinerary planning, and destination insights from an expert travel advisor.",
    emoji: "✈️",
    color: "from-blue-500 to-cyan-600",
    category: "Personal Services",
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["travel", "planning", "destinations", "advisor", "tourism"],
    rating: 4.3,
    totalVotes: 2834
  }
];
