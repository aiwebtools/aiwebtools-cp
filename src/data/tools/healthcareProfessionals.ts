
import { Tool } from "@/types/tools";
import { 
  Stethoscope, 
  Pill, 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  Users,
  Target,
  Cross,
  Leaf,
  TestTube,
  Microscope
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "Professional pharmaceutical guidance covering drug information, medication interactions, pharmacy operations, and pharmaceutical research for healthcare professionals.",
    emoji: "💊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical", "drug information", "medication safety", "pharmacy operations", "healthcare"],
    category: "Healthcare Professionals",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: TestTube,
    title: "PHARMA RESEARCH PRO",
    description: "Advanced pharmaceutical research assistant for drug development, clinical trials, regulatory compliance, and pharmaceutical innovation in healthcare.",
    emoji: "🔬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "drug development", "clinical trials", "regulatory compliance", "healthcare innovation"],
    category: "Healthcare Professionals",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Heart,
    title: "Mental Wellness GPT",
    description: "Comprehensive mental health support and wellness guidance covering stress management, emotional well-being, and mental health resources.",
    emoji: "🧘‍♀️",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    tags: ["mental health", "wellness", "stress management", "emotional support", "mental well-being"],
    category: "Healthcare Professionals",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Leaf,
    title: "Agronomus AI Farming Expert",
    description: "Advanced agricultural guidance covering crop management, soil analysis, farming techniques, sustainable agriculture, and precision farming for agricultural professionals.",
    emoji: "🌱",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    tags: ["agriculture", "crop management", "soil analysis", "sustainable farming", "precision agriculture"],
    category: "Healthcare Professionals",
    rating: 4.4,
    totalVotes: 2987
  }
];
