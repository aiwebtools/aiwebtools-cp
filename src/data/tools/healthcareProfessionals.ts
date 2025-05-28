
import { Tool } from "@/types/tools";
import { 
  Stethoscope, Pill, FlaskConical, Heart, Microscope
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: FlaskConical,
    title: "Historical Apothecary GPT",
    description: "Explore the ancient art of pharmacy and herbal medicine with AI. Learn about historical remedies, traditional healing methods, and the evolution of pharmaceutical practices.",
    emoji: "🧪",
    color: "from-green-500 to-brown-600",
    category: "Healthcare Professionals",
    directUrl: "https://apothecarygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    tags: ["apothecary", "historical", "pharmacy", "herbal medicine", "traditional healing"],
    rating: 4.1,
    totalVotes: 2234
  },
  {
    icon: FlaskConical,
    title: "PHARMA RESEARCH PRO",
    description: "Advanced pharmaceutical research and development assistant. Get expert insights on drug development, clinical trials, regulatory compliance, and pharmaceutical innovation.",
    emoji: "💊",
    color: "from-green-500 to-blue-600",
    category: "Healthcare Professionals",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "drug development", "clinical trials", "regulatory", "innovation"],
    rating: 4.3,
    totalVotes: 2678
  },
  {
    icon: Heart,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "AI medical assistant for health consultations and medical guidance. Get preliminary health advice, symptom analysis, and medical information from an AI doctor.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-green-600",
    category: "Healthcare Professionals",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    tags: ["medical", "health", "doctor", "consultation", "diagnosis"],
    rating: 4.4,
    totalVotes: 3234
  }
];
