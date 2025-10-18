
import { Tool } from "@/types/tools";
import { 
  Users, 
  Crown, 
  FlaskConical, 
  Lightbulb, 
  Shovel, 
  Theater, 
  Heart, 
  BookOpen, 
  Scroll,
  Star,
  User,
  History,
  Map,
  Library
} from "lucide-react";

export const historicalAndCultural: Tool[] = [
  {
    icon: Map,
    title: "Historical Map Explorer GPT",
    description: "Explore historical maps and discover how the world has changed over time. Visualize borders, cities, and landmarks from different eras.",
    emoji: "🗺️",
    color: "from-brown-500 to-amber-600",
    directUrl: "https://chatgpt.com/g/g-683c7770e1f08191bdb1a8140e337262-historical-map-explorer",
    category: "Historical & Time-Based AI Tools",
    tags: ["historical maps", "geography", "time exploration", "borders"],
    rating: 4.7,
    totalVotes: 3234
  },
  {
    icon: Library,
    title: "Ancient Knowledge GPT",
    description: "Explore ancient wisdom, lost civilizations, and timeless knowledge from across human history. Delve into mysterious texts, forgotten teachings, and the accumulated wisdom of ages past.",
    emoji: "📜",
    color: "from-amber-600 to-brown-800",
    directUrl: "https://chatgpt.com/g/g-688e9f50b7b8819185b2a354bbcb0bb1-ancient-knowledge-gpt",
    category: "Ancient Wisdom",
    tags: ["ancient knowledge", "wisdom", "lost civilizations", "historical texts", "ancient mysteries"],
    rating: 4.5,
    totalVotes: 2156
  }
];
