import { Tool } from "@/types/tools";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Pill, 
  Activity,
  Users,
  Shield,
  HeartHandshake,
  Sparkles
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Stethoscope,
    title: "Medical Diagnosis GPT",
    description: "AI-powered diagnostic tool for healthcare professionals, providing insights and support for medical diagnosis.",
    emoji: "🩺",
    color: "from-blue-500 to-green-500",
    directUrl: "https://medicalgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=mPwY2V8OH7o",
    category: "Healthcare Professionals",
    tags: ["medical", "diagnosis", "healthcare", "AI"],
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Heart,
    title: "Mental Health GPT",
    description: "AI-driven mental health support and resources for individuals seeking guidance and assistance with mental well-being.",
    emoji: "❤️",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://mentalhealthgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=wz-v9J6J0pc",
    category: "Healthcare Professionals",
    tags: ["mental health", "well-being", "support", "AI"],
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: Activity,
    title: "Fitness Trainer GPT",
    description: "Personalized fitness training and workout plans powered by AI, tailored to individual fitness goals and preferences.",
    emoji: "💪",
    color: "from-red-500 to-orange-500",
    directUrl: "https://fitnesstrainergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=a-xOyJt-O34",
    category: "Healthcare Professionals",
    tags: ["fitness", "training", "workout", "AI"],
    rating: 4.6,
    totalVotes: 2123
  },
  {
    icon: Brain,
    title: "Psychologist GPT",
    description: "AI-powered psychology assistant providing insights, support, and resources for mental health and psychological well-being.",
    emoji: "🧠",
    color: "from-yellow-500 to-green-500",
    directUrl: "https://psychologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=YO2-j76O-MI",
    category: "Healthcare Professionals",
    tags: ["psychology", "mental health", "well-being", "AI"],
    rating: 4.4,
    totalVotes: 1987
  },
  {
    icon: Eye,
    title: "Optometrist GPT",
    description: "AI-driven vision care assistant offering information, resources, and support for eye health and vision-related queries.",
    emoji: "👁️",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://optometristgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nKz1aeh6jWM",
    category: "Healthcare Professionals",
    tags: ["optometry", "vision care", "eye health", "AI"],
    rating: 4.2,
    totalVotes: 1654
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "Professional pharmaceutical guidance for pharmacists and healthcare providers with drug information, interactions, and dosage recommendations.",
    emoji: "💊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    category: "Healthcare Professionals",
    tags: ["pharmaceutical", "drug information", "pharmacy", "healthcare", "medications"],
    rating: 4.5,
    totalVotes: 2456
  },
  {
    icon: Brain,
    title: "PHARMA RESEARCH PRO",
    description: "Advanced pharmaceutical research assistant for drug development, clinical trials, and regulatory compliance in the pharmaceutical industry.",
    emoji: "🔬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    category: "Healthcare Professionals",
    tags: ["pharmaceutical research", "drug development", "clinical trials", "regulatory", "medical research"],
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: HeartHandshake,
    title: "Mental Wellness GPT",
    description: "Supportive mental health and wellness guidance for individuals seeking emotional support and coping strategies.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    category: "Healthcare Professionals",
    tags: ["mental health", "wellness", "emotional support", "coping strategies", "therapy"],
    rating: 4.6,
    totalVotes: 3234
  }
];
