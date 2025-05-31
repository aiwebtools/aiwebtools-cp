
import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Users, 
  Building2, 
  Vote, 
  Gavel,
  Shield,
  BookOpen,
  UserCheck,
  AlertTriangle
} from "lucide-react";

export const governmentCivicGPTs: Tool[] = [
  {
    icon: Vote,
    title: "Legislator Link GPT",
    description: "This music video is inspired by a true story. In response to Connecticut's ban on CBD shops, as a former CBD shop owner, I've developed an AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts.",
    emoji: "🏛️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["legislation", "government", "civic engagement", "democracy", "legislators", "political", "advocacy", "aiwebtools"],
    category: "Government & Civic",
    rating: 4.5,
    totalVotes: 2867
  }
];
