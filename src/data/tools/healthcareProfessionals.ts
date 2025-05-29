import { Tool } from "@/types/tools";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Users, 
  Phone, 
  Eye,
  Zap
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Brain,
    title: "Youper",
    description: "AI-driven mental healthcare chatbot with empathetic, clinically validated support. Built on CBT, ACT, DBT, PST, and Mindfulness-based therapies serving over 2 million individuals.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.youper.ai/",
    tags: ["mental health", "AI therapy", "clinical validation", "behavioral therapy", "emotional support"],
    category: "Healthcare Professionals",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Stethoscope,
    title: "Dr. Gupta",
    description: "AI-driven health chatbot offering personalized health information and advice. Users input medical details for tailored recommendations based on symptoms, vital signs, and medications.",
    emoji: "👨‍⚕️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.drgupta.ai/",
    tags: ["health advice", "medical AI", "personalized recommendations", "symptom analysis", "health chatbot"],
    category: "Healthcare Professionals",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Eye,
    title: "BeMyEyes",
    description: "Inclusive platform connecting visually impaired individuals to sighted volunteers through live video calls. Features Be My AI powered by GPT-4 for instant image-to-text generation.",
    emoji: "👁️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.bemyeyes.com/",
    tags: ["visual assistance", "accessibility", "volunteer network", "live video", "visual impairment support"],
    category: "Healthcare Professionals",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Phone,
    title: "Call Annie",
    description: "AI-powered phone service offering ever-available virtual friend for advice, learning, conversations, mock interviews, and personal guidance accessible via phone calls.",
    emoji: "📞",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://callannie.ai/",
    tags: ["AI companion", "phone service", "virtual friend", "advice", "conversational AI"],
    category: "Healthcare Professionals",
    rating: 4.1,
    totalVotes: 2234
  },
  {
    icon: Stethoscope,
    title: "Dr. McGrath",
    description: "AI-powered veterinarian chatbot providing assistance for pet care questions and concerns. Offers guidance on pet health, nutrition, behavior, and general wellness tips.",
    emoji: "🐾",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.drgupta.ai/vet/",
    tags: ["veterinary AI", "pet care", "animal health", "pet nutrition", "veterinary advice"],
    category: "Healthcare Professionals",
    rating: 4.3,
    totalVotes: 2654
  }
];
