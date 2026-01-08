
import { Tool } from "@/types/tools";
import { 
  Newspaper, 
  Globe, 
  BookOpen, 
  Search, 
  TrendingUp,
  Users,
  Brain,
  Eye,
  MessageSquare,
  Rss
} from "lucide-react";

export const newsAndInformationTools: Tool[] = [
  {
    icon: Globe,
    title: "Wikipedia",
    description: "Free online encyclopedia with millions of articles in hundreds of languages. Collaborative knowledge base for everyone.",
    emoji: "📖",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://wikipedia.org/?via=aiwebtools",
    imageUrl: "/src/assets/tools/wikipedia-hero.png",
    tags: ["encyclopedia", "knowledge", "free", "collaborative", "research"],
    category: "News & Information",
    rating: 4.8,
    totalVotes: 9876
  },
  {
    icon: Search,
    title: "AllSides",
    description: "News platform showing multiple perspectives on current events. Compare how different sources cover the same story.",
    emoji: "⚖️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://allsides.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/allsides-hero.png",
    tags: ["multiple perspectives", "balanced news", "media bias", "current events"],
    category: "News & Information",
    rating: 4.3,
    totalVotes: 3456
  }
];
