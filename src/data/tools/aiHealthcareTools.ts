
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
    directUrl: "https://www.pathai.com/?via=aiwebtools",
    tags: ["pathology", "cancer diagnosis", "medical imaging", "AI diagnostics"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 1432
  }
];
