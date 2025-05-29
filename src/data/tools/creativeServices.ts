import { Tool } from "@/types/tools";
import { 
  Palette, 
  Utensils, 
  Shirt, 
  Star,
  Tattoo,
  Drink,
  Clothes,
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
  },
  {
    icon: Shirt,
    title: "RESTYLE ME GPT",
    description: "Personal styling and fashion advice assistant with outfit recommendations, wardrobe planning, and style transformation guidance.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    category: "Creative Services",
    tags: ["fashion styling", "outfit recommendations", "wardrobe planning", "personal style", "fashion advice"],
    rating: 4.5,
    totalVotes: 2567
  },
  {
    icon: Star,
    title: "Celebrity Chatline GPT",
    description: "Interactive celebrity conversation simulator with various personality models and entertainment-focused AI interactions.",
    emoji: "⭐",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    category: "Creative Services",
    tags: ["celebrity chat", "entertainment", "AI personalities", "interactive", "fun"],
    rating: 4.2,
    totalVotes: 1876
  }
];
