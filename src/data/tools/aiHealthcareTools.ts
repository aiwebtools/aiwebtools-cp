
import { Tool } from "@/types/tools";
import { 
  Heart, Brain, Activity, Stethoscope, Pill, Microscope,
  Eye, Zap, Shield, Plus, Thermometer, Clipboard
} from "lucide-react";

export const aiHealthcareTools: Tool[] = [
  {
    icon: Brain,
    title: "IBM Watson Health",
    description: "AI platform for healthcare that analyzes medical data to assist in diagnosis, treatment planning, and research.",
    emoji: "🧠",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.ibm.com/watson-health",
    tags: ["medical AI", "diagnosis", "treatment planning", "healthcare analytics"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Eye,
    title: "DeepMind Health",
    description: "AI research for healthcare including eye disease detection, protein folding, and medical imaging analysis.",
    emoji: "👁️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://deepmind.com/applied/deepmind-health/",
    tags: ["medical research", "disease detection", "medical imaging", "protein folding"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 1987
  },
  {
    icon: Activity,
    title: "Babylon Health",
    description: "AI-powered healthcare app providing symptom checking, health monitoring, and virtual consultations.",
    emoji: "💓",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.babylonhealth.com/",
    tags: ["telemedicine", "symptom checker", "health monitoring", "virtual consultations"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: Microscope,
    title: "PathAI",
    description: "AI-powered pathology platform that assists pathologists in cancer diagnosis and treatment selection.",
    emoji: "🔬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.pathai.com/",
    tags: ["pathology", "cancer diagnosis", "medical imaging", "AI diagnostics"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 1432
  },
  {
    icon: Pill,
    title: "Atomwise",
    description: "AI platform for drug discovery that uses deep learning to identify potential new medicines faster.",
    emoji: "💊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.atomwise.com/",
    tags: ["drug discovery", "pharmaceutical AI", "molecular analysis", "medical research"],
    category: "Health & Wellness",
    rating: 4.4,
    totalVotes: 1876
  }
];
