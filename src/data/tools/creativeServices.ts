
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Utensils, 
  Shirt, 
  Star,
  Brush,
  Coffee,
  ShoppingBag,
  MessageCircle
} from "lucide-react";

export const creativeServices: Tool[] = [
  {
    icon: Palette,
    title: "Tattoo Designer GPT",
    description: "Custom tattoo design creation with artistic guidance, style recommendations, and personalized tattoo artwork generation.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    category: "Creative Services",
    tags: ["tattoo design", "body art", "custom artwork", "artistic design", "personalized"],
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Utensils,
    title: "Mixologist GPT",
    description: "Professional cocktail and beverage creation assistant with recipe development, ingredient pairing, and mixology expertise.",
    emoji: "🍹",
    color: "from-blue-500 to-green-600",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    category: "Creative Services",
    tags: ["mixology", "cocktails", "beverage creation", "bartending", "recipe development"],
    rating: 4.3,
    totalVotes: 1987
  }
];
