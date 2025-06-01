
import { Tool } from "@/types/tools";
import { 
  Clock, 
  Calendar, 
  History, 
  Globe, 
  BookOpen, 
  Camera, 
  Users, 
  Crown,
  Map,
  Search
} from "lucide-react";

export const timeAndHistory: Tool[] = [
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
    icon: Search,
    title: "Hidden Histories GPT",
    description: "Uncover hidden historical patterns, suppressed events, and alternative perspectives on historical narratives.",
    emoji: "🔍",
    color: "from-gray-600 to-purple-700",
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    category: "Historical & Cultural",
    tags: ["hidden history", "patterns", "alternative history", "research"],
    rating: 4.6,
    totalVotes: 2234
  },
  {
    icon: Clock,
    title: "Time Traveler GPT",
    description: "Explore different time periods, historical events, and cultural shifts with an AI-powered time-traveling assistant.",
    emoji: "🕰️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-ti_1j11g.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    category: "Historical & Time-Based AI Tools",
    tags: ["time travel", "history", "cultural shifts", "historical events"],
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Calendar,
    title: "Ancient Calendar GPT",
    description: "Navigate ancient calendars, track historical dates, and understand time-keeping systems of past civilizations.",
    emoji: "📅",
    color: "from-yellow-600 to-orange-700",
    directUrl: "https://ancientcalendargpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=AIJq-2KwnGs",
    category: "Historical & Time-Based AI Tools",
    tags: ["ancient calendars", "historical dates", "time-keeping", "civilizations"],
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: History,
    title: "Historical Figures GPT",
    description: "Engage with historical figures, explore their biographies, and gain insights into their contributions and legacies.",
    emoji: "👤",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://historicalfigures.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jSbvSzoinEU",
    category: "Historical Figures",
    tags: ["historical figures", "biographies", "legacies", "contributions"],
    rating: 4.6,
    totalVotes: 3123
  },
  {
    icon: Globe,
    title: "Historical Geography GPT",
    description: "Explore historical geography, ancient maps, and the evolution of landscapes and borders over time.",
    emoji: "🌍",
    color: "from-green-600 to-blue-700",
    directUrl: "https://historicalgeographygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=yRQ4_q6bd1Y",
    category: "Historical Geography",
    tags: ["historical geography", "ancient maps", "landscapes", "borders"],
    rating: 4.3,
    totalVotes: 2134
  },
  {
    icon: BookOpen,
    title: "Historical Literature GPT",
    description: "Analyze historical literature, explore classic texts, and understand the cultural and social contexts of literary works.",
    emoji: "📜",
    color: "from-orange-600 to-red-700",
    directUrl: "https://historicalliteraturegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=bJqq-wWjy74",
    category: "Historical Literature",
    tags: ["historical literature", "classic texts", "cultural contexts", "literary analysis"],
    rating: 4.5,
    totalVotes: 2678
  },
  {
    icon: Camera,
    title: "Historical Photography GPT",
    description: "Explore historical photography, analyze vintage images, and understand the evolution of photographic techniques.",
    emoji: "📸",
    color: "from-gray-600 to-black",
    directUrl: "https://historicalphotogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Ld-tgKmE9ss",
    category: "Historical Photography",
    tags: ["historical photography", "vintage images", "photographic techniques", "image analysis"],
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: Users,
    title: "Historical Demographics GPT",
    description: "Analyze historical demographics, population trends, and social structures of past societies and civilizations.",
    emoji: "📊",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://historicaldemographicsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jbk7_4j6g-s",
    category: "Historical Demographics",
    tags: ["historical demographics", "population trends", "social structures", "civilizations"],
    rating: 4.4,
    totalVotes: 2456
  },
  {
    icon: Crown,
    title: "Historical Royalty GPT",
    description: "Explore historical royalty, monarchies, and the lives of kings, queens, and emperors throughout history.",
    emoji: "👑",
    color: "from-yellow-600 to-amber-700",
    directUrl: "https://historicalroyaltygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KjKjJ3rK-c8",
    category: "Historical Royalty",
    tags: ["historical royalty", "monarchies", "kings", "queens", "emperors"],
    rating: 4.7,
    totalVotes: 3345
  }
];
