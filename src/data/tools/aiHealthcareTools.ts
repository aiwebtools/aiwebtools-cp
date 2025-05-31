
import { Tool } from "@/types/tools";
import { 
  Heart, Brain, Activity, Stethoscope, Pill, Microscope,
  Eye, Zap, Shield, Plus, Thermometer, Clipboard
} from "lucide-react";

export const aiHealthcareTools: Tool[] = [
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
