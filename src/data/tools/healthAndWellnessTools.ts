
import { Tool } from "@/types/tools";
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Activity, 
  Shield, 
  Zap,
  Apple,
  Moon,
  Dumbbell,
  Smile
} from "lucide-react";

export const healthAndWellnessTools: Tool[] = [
  {
    icon: Heart,
    title: "Petcare GPT",
    description: "Comprehensive pet care assistance with veterinary guidance, health monitoring, nutrition advice, and behavioral training tips for all types of pets.",
    emoji: "🐾",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298535833407488/vet.webp?ex=683874b7&is=68372337&hm=6274e617c1d1c74e075cc96681923fe4888b86be9ca89183217ec758bd4947af&",
    tags: ["pet care", "veterinary advice", "animal health", "pet nutrition", "pet training"],
    category: "Health & Wellness",
    rating: 4.6,
    totalVotes: 3245
  }
];
