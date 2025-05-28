
import { Tool } from "@/types/tools";
import { 
  Stethoscope, Heart, Brain, Pill, Activity, 
  Cross, Shield, Users, Zap, Bot,
  Microscope, FlaskConical, Clipboard
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Heart,
    title: "Mental Health Counselor GPT",
    description: "AI-powered mental health counseling assistant providing therapeutic guidance, coping strategies, and emotional support for various psychological challenges.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://mentalhealthcounselorgpt.lovable.app/?via=aiwebtools",
    tags: ["mental health", "counseling", "therapy", "emotional support", "psychology"],
    category: "Healthcare Professionals",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Stethoscope,
    title: "Doctor Assistant GPT",
    description: "Advanced medical AI assistant for healthcare professionals, offering diagnostic support, treatment recommendations, and medical knowledge assistance.",
    emoji: "👨‍⚕️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://doctorassistantgpt.lovable.app/?via=aiwebtools",
    tags: ["medical", "diagnosis", "healthcare", "treatment", "medical knowledge"],
    category: "Healthcare Professionals",
    rating: 4.5,
    totalVotes: 3421
  },
  {
    icon: Activity,
    title: "Veterinarian Assistant GPT",
    description: "Specialized AI assistant for veterinary professionals, providing animal health guidance, treatment protocols, and pet care recommendations.",
    emoji: "🐾",
    color: "from-orange-500 to-red-600",
    directUrl: "https://vetgpt.lovable.app/?via=aiwebtools",
    tags: ["veterinary", "animal health", "pet care", "treatment", "veterinarian"],
    category: "Healthcare Professionals",
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: FlaskConical,
    title: "Historical Apothecary GPT",
    description: "Expert AI assistant specializing in traditional herbal medicine, historical remedies, and apothecary practices with extensive knowledge of medicinal plants and ancient healing methods.",
    emoji: "🧪",
    color: "from-green-500 to-brown-600",
    directUrl: "https://apothecarygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    tags: ["herbal medicine", "traditional remedies", "apothecary", "medicinal plants", "historical healing"],
    category: "Healthcare Professionals",
    rating: 4.1,
    totalVotes: 1654
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "Advanced pharmaceutical AI assistant providing drug information, medication interactions, dosage guidelines, and pharmaceutical research support for healthcare professionals.",
    emoji: "💊",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical", "drug information", "medication", "interactions", "pharmacy"],
    category: "Healthcare Professionals",
    rating: 4.4,
    totalVotes: 2543
  },
  {
    icon: Microscope,
    title: "PHARMA RESEARCH PRO",
    description: "Professional pharmaceutical research assistant providing comprehensive drug development insights, clinical trial guidance, and pharmaceutical industry analysis.",
    emoji: "🔬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "drug development", "clinical trials", "pharmaceutical industry", "research"],
    category: "Healthcare Professionals",
    rating: 4.5,
    totalVotes: 3876
  }
];
