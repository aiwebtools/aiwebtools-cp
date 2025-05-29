
import { Tool } from "@/types/tools";
import { 
  Globe, BookOpen, History, Search, 
  MessageSquare, Lightbulb, Telescope
} from "lucide-react";

export const researchAndLearning: Tool[] = [
  {
    icon: Globe,
    title: "Illuminous World Data Explorer GPT",
    description: "Explore and analyze global data with AI assistance. Discover insights from world statistics, demographics, economics, and international trends through intelligent data exploration.",
    emoji: "🌍",
    color: "from-cyan-500 to-blue-600",
    category: "Research & Learning",
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Nd1Ui2-VLMU",
    tags: ["data analysis", "global trends", "statistics", "research", "insights"],
    rating: 4.3,
    totalVotes: 2578
  },
  {
    icon: BookOpen,
    title: "BOOK WRITER GPT",
    description: "Professional book writing assistant for authors and writers. Get help with plot development, character creation, writing techniques, and publishing guidance.",
    emoji: "📚",
    color: "from-green-500 to-blue-600",
    category: "Research & Learning",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    tags: ["writing", "books", "authoring", "publishing", "creativity"],
    rating: 4.4,
    totalVotes: 3267
  },
  {
    icon: History,
    title: "TALK TO HISTORY GPT",
    description: "Engage in conversations with historical figures and explore historical events through AI. Experience immersive historical dialogues and learn from the past.",
    emoji: "📜",
    color: "from-yellow-500 to-brown-600",
    category: "Research & Learning",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5t7EXS5tthQ",
    tags: ["history", "historical figures", "education", "conversations", "learning"],
    rating: 4.1,
    totalVotes: 2456
  },
  {
    icon: Telescope,
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Advanced space exploration and astronomy research assistant with interactive cosmic simulations.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://stellarisaiexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    tags: ["space exploration", "astronomy", "cosmic simulations", "research"],
    category: "Research & Learning",
    rating: 4.7,
    totalVotes: 3245
  }
];
