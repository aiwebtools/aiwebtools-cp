import { Tool } from "@/types/tools";
import { 
  Stethoscope, Heart, Brain, Eye, Activity,
  Pill, Users, Baby, PawPrint, Shield
} from "lucide-react";

export const healthcareProfessionals: Tool[] = [
  {
    icon: Stethoscope,
    title: "Medical Assistant GPT",
    description: "AI-powered medical information and assistance tool for healthcare professionals and patients.",
    emoji: "🏥",
    color: "from-red-400 to-pink-500",
    directUrl: "https://medical.ai",
    tags: ["healthcare", "medical", "diagnosis", "treatment"],
    category: "Healthcare Professionals"
  },
  {
    icon: Heart,
    title: "Mental Health Companion",
    description: "AI-driven support for mental wellness and emotional health.",
    emoji: "❤️",
    color: "from-blue-400 to-indigo-500",
    directUrl: "https://mentalhealth.ai",
    tags: ["mental health", "wellness", "emotional support", "therapy"],
    category: "Healthcare Professionals"
  },
  {
    icon: Brain,
    title: "Neurology Diagnostic Tool",
    description: "Advanced AI for neurological disorder diagnosis and analysis.",
    emoji: "🧠",
    color: "from-green-400 to-teal-500",
    directUrl: "https://neuro.ai",
    tags: ["neurology", "diagnosis", "brain disorders", "neural analysis"],
    category: "Healthcare Professionals"
  },
  {
    icon: Eye,
    title: "Ophthalmology Assistant",
    description: "AI-powered vision care and eye health analysis for ophthalmologists.",
    emoji: "👁️",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://eyehealth.ai",
    tags: ["ophthalmology", "vision care", "eye health", "eye analysis"],
    category: "Healthcare Professionals"
  },
  {
    icon: Activity,
    title: "Fitness & Wellness Tracker",
    description: "AI-driven fitness and wellness tracking for personalized health management.",
    emoji: "🏃",
    color: "from-purple-400 to-pink-500",
    directUrl: "https://fitness.ai",
    tags: ["fitness", "wellness", "health tracking", "personalized health"],
    category: "Healthcare Professionals"
  },
  {
    icon: Pill,
    title: "Pharmaceutical Research Aid",
    description: "AI tool for pharmaceutical research and drug discovery.",
    emoji: "💊",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://pharma.ai",
    tags: ["pharmaceutical", "drug research", "drug discovery", "medicine"],
    category: "Healthcare Professionals"
  },
  {
    icon: Users,
    title: "Patient Care Coordinator",
    description: "AI-enhanced patient care coordination and management system.",
    emoji: "🧑‍⚕️",
    color: "from-green-400 to-blue-500",
    directUrl: "https://patientcare.ai",
    tags: ["patient care", "care coordination", "healthcare management", "patient support"],
    category: "Healthcare Professionals"
  },
  {
    icon: Baby,
    title: "Pediatric Diagnostic Tool",
    description: "AI-assisted pediatric diagnosis and child health monitoring.",
    emoji: "👶",
    color: "from-indigo-400 to-purple-500",
    directUrl: "https://pediatrics.ai",
    tags: ["pediatrics", "child health", "diagnosis", "child monitoring"],
    category: "Healthcare Professionals"
  },
  {
    icon: PawPrint,
    title: "Veterinary Diagnostic Assistant",
    description: "AI-powered diagnostic support for veterinary medicine.",
    emoji: "🐾",
    color: "from-yellow-400 to-green-500",
    directUrl: "https://veterinary.ai",
    tags: ["veterinary", "animal health", "diagnosis", "pet care"],
    category: "Healthcare Professionals"
  },
  {
    icon: Shield,
    title: "Public Health Monitor",
    description: "AI for monitoring and managing public health crises.",
    emoji: "🛡️",
    color: "from-orange-400 to-red-500",
    directUrl: "https://publichealth.ai",
    tags: ["public health", "crisis management", "health monitoring", "disease control"],
    category: "Healthcare Professionals"
  },
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Comprehensive medical consultation assistant providing personalized health guidance, symptom analysis, and general medical information.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    tags: ["medical consultation", "health guidance", "symptom analysis", "personalized care", "general medicine"],
    category: "Healthcare Professionals",
    rating: 4.3,
    totalVotes: 2876
  }
];
