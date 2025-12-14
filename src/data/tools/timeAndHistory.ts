
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
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    videoUrl: "https://youtu.be/J31nNY5_PB4",
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
    directUrl: "https://chatgpt.com/g/g-683cc76d31008191924249acfdd128b0-ancient-calendar-gpt",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    directUrl: "https://chatgpt.com/g/g-689e66144d1881918292dc95f6bad371-historical-figures-gpt",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    directUrl: "https://chatgpt.com/g/g-689e66f91b3c8191ad80f1c715a056aa-historical-geography-gpt",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    directUrl: "https://chatgpt.com/g/g-683cc947ccc08191bf3669d21b6518d9-historical-literature-gpt",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    directUrl: "https://chatgpt.com/g/g-683ccb6716d48191b0f7ddcd0b19387d-historical-photography-gpt-sacred-lens-of-time",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
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
    directUrl: "https://chatgpt.com/g/g-683cce7947048191880cabf0093b2822-historical-demographics-gpt",
    imageUrl: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4704-622f-b855-c11eda6c9095/raw?se=2025-06-01T23%3A33%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=551f2b29-6bf8-56dd-8295-f64dd6634414&skoid=add8ee7d-5fc7-451e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-01T20%3A47%3A28Z&ske=2025-06-02T20%3A47%3A28Z&sks=b&skv=2024-08-04&sig=K9IMD1NqSTSzyF2EWcSEcAuprEJOA1nGgkKqqaOZbBA%3D",
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
    directUrl: "https://chatgpt.com/g/g-683e3bf39e1481919498b69e479d8464-historical-royalty-gpt",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    category: "Historical Royalty",
    tags: ["historical royalty", "monarchies", "kings", "queens", "emperors"],
    rating: 4.7,
    totalVotes: 3345
  }
];
