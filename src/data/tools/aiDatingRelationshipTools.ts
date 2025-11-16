
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Sparkles, 
  HeartHandshake,
  Coffee
} from "lucide-react";

export const aiDatingRelationshipTools: Tool[] = [
  {
    icon: Heart,
    title: "eHarmony AI",
    description: "AI-powered matchmaking platform using compatibility algorithms and personality assessments for meaningful relationships.",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.eharmony.com/?via=aiwebtools",
    tags: ["dating", "matchmaking", "compatibility", "relationships", "AI matching"],
    category: "AI Dating & Relationship Tools",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "Hinge AI",
    description: "AI-enhanced dating app designed to be deleted, using smart prompts and machine learning for better matches.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://hinge.co/?via=aiwebtools",
    tags: ["dating", "AI matching", "prompts", "relationships", "meaningful connections"],
    category: "AI Dating & Relationship Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Coffee,
    title: "Coffee Meets Bagel",
    description: "AI-curated dating app that sends quality matches daily based on preferences and behavioral patterns.",
    emoji: "☕",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://coffeemeetsbagel.com/?via=aiwebtools",
    tags: ["dating", "curated matches", "daily matches", "AI recommendations", "quality dating"],
    category: "AI Dating & Relationship Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: HeartHandshake,
    title: "Keeper",
    description: "AI matchmaking service combining human expertise with machine learning for serious relationships and marriage.",
    emoji: "💍",
    color: "from-red-500 to-pink-600",
    directUrl: "https://keeper.ai/?via=aiwebtools",
    tags: ["matchmaking", "marriage", "serious relationships", "AI matching", "relationship coaching"],
    category: "AI Dating & Relationship Tools",
    rating: 4.5,
    totalVotes: 1876
  },
  {
    icon: MessageCircle,
    title: "Rizz AI",
    description: "AI conversation assistant for dating apps, providing personalized message suggestions and conversation starters.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://rizzai.com/?via=aiwebtools",
    tags: ["dating assistant", "conversation AI", "message suggestions", "dating tips", "chat help"],
    category: "AI Dating & Relationship Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Users,
    title: "Relate",
    description: "AI relationship counseling and advice platform offering personalized guidance for couples and individuals.",
    emoji: "🤝",
    color: "from-teal-500 to-green-600",
    directUrl: "https://www.relate.com/?via=aiwebtools",
    tags: ["relationship advice", "counseling", "couples therapy", "AI guidance", "relationship health"],
    category: "AI Dating & Relationship Tools",
    rating: 4.3,
    totalVotes: 1654
  }
];
