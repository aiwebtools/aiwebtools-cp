import { Tool } from "@/types/tools";
import { 
  Heart, Users, Home, Baby, PawPrint,
  Scissors, Wrench, Car, Briefcase, Shield,
  UserCheck, Calendar, MessageCircle, Phone, Smile
} from "lucide-react";

export const personalServices: Tool[] = [
  {
    icon: Scissors,
    title: "Hair Stylist GPT",
    description: "AI-powered hair styling consultant providing personalized hairstyle recommendations, hair care advice, and styling tips.",
    emoji: "💇‍♀️",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://hairstylistgpt.lovable.app/?via=aiwebtools",
    tags: ["hair styling", "beauty", "hairstyles", "hair care", "personal styling"],
    category: "Personal Services",
    rating: 4.1,
    totalVotes: 2134
  },
  {
    icon: Heart,
    title: "Personal Trainer GPT",
    description: "AI fitness coach providing personalized workout plans, nutrition guidance, and health recommendations.",
    emoji: "💪",
    color: "from-orange-500 to-red-600",
    directUrl: "https://personaltrainergpt.lovable.app/?via=aiwebtools",
    tags: ["fitness", "personal training", "workout", "nutrition", "health"],
    category: "Personal Services",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Wine,
    title: "Mixologist GPT",
    description: "Professional bartending AI assistant specializing in cocktail recipes, drink recommendations, and mixology techniques for bartenders and cocktail enthusiasts.",
    emoji: "🍸",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["mixology", "cocktails", "bartending", "drink recipes", "beverage"],
    category: "Personal Services",
    rating: 4.2,
    totalVotes: 2543
  },
  {
    icon: ChefHat,
    title: "Chef 'Sizzle' AI Culinary Assistant",
    description: "Professional culinary AI assistant providing recipes, cooking techniques, meal planning, and culinary expertise for chefs and cooking enthusiasts.",
    emoji: "👨‍🍳",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    tags: ["cooking", "recipes", "culinary", "chef", "meal planning"],
    category: "Personal Services",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Shirt,
    title: "RESTYLE ME GPT",
    description: "Personal styling AI assistant providing fashion advice, wardrobe recommendations, style transformation guidance, and outfit coordination for all occasions.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    tags: ["fashion", "styling", "wardrobe", "outfit coordination", "personal style"],
    category: "Personal Services",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Relationship counseling and marriage guidance assistant. Get advice on communication, conflict resolution, and strengthening romantic relationships.",
    emoji: "💕",
    color: "from-pink-500 to-red-600",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    tags: ["relationships", "marriage", "counseling", "communication", "love"],
    category: "Personal Services",
    rating: 4.1,
    totalVotes: 2345
  }
];
