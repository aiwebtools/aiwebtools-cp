
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  Activity, 
  Shield, 
  Leaf,
  Pill,
  UserCheck,
  Zap
} from "lucide-react";

export const healthAndWellnessGPTs: Tool[] = [
  {
    icon: Stethoscope,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT is a compassionate virtual veterinarian simulation offering expert advice on pet health and well-being. It utilizes advanced AI features to analyze your pet's health and provide tailored care recommendations.",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    tags: ["veterinary", "pet health", "animal care", "health assessment", "pet advice", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Shield,
    title: "🔒Insurance Claims GPT",
    description: "Insurance Claims GPT by AIWebTools.ai is a cutting-edge AI tool revolutionizing claims management and estimation. It offers a seamless, user-friendly experience, guiding users through every step of the claims process with unparalleled accuracy and efficiency.",
    emoji: "🔒",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    tags: ["insurance", "claims processing", "risk assessment", "insurance estimation", "legal assistance", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Leaf,
    title: "Cannabis GPT",
    description: "Cannabis GPT is a multimodal AI designed for legal cannabis users, growers, and professionals, offering resources on strain genetics, dosing for edibles, and expert advice on cultivation techniques. Users can upload images for insights into plant health and receive updates on regulations, medical research, and product recommendations.",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://vimeo.com/1041016055",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-a-green-cannab_iUjpW.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["cannabis", "marijuana", "cultivation", "strain genetics", "medical cannabis", "dispensary", "420", "weed", "pot", "ganja", "herb", "thc", "cbd", "hemp", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Brain,
    title: "Mental Wellness GPT",
    description: "Mental Wellness GPT is a virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles. Designed to help navigate stress, anxiety, and life's challenges.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    tags: ["mental health", "therapy", "cbt", "wellness", "emotional support", "anxiety", "stress", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information, checking for interactions, and helping with scheduling.",
    emoji: "💊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical", "medication", "pharmacy", "drug information", "medical assistance", "healthcare", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 3567
  }
];
