
import { Tool } from "@/types/tools";
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  Globe, 
  Scroll, 
  Crown,
  Users,
  Map,
  Landmark,
  Archive
} from "lucide-react";

export const timeAndHistory: Tool[] = [
  {
    icon: Clock,
    title: "TALK TO HISTORY GPT",
    description: "Engage in conversations with historical figures and explore historical events through AI. Experience immersive historical dialogues and learn from the past.",
    emoji: "📜",
    color: "from-yellow-500 to-brown-600",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5t7EXS5tthQ",
    category: "History & Time",
    tags: ["history", "historical figures", "education", "conversations", "learning"],
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Calendar,
    title: "TIME TRAVEL HISTORIAN GPT",
    description: "Journey through different time periods with detailed historical context, cultural insights, and immersive storytelling from any era.",
    emoji: "⏰",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://timetravelhistoriangpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    category: "History & Time",
    tags: ["time travel", "historical periods", "cultural history", "storytelling"],
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Archive,
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Advanced historical analysis and pattern recognition tool. Discover hidden connections in historical events, analyze trends, and uncover meaningful patterns across time periods.",
    emoji: "🔍",
    color: "from-brown-500 to-yellow-600",
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-advertisement-with-the-eye_C64dU.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    category: "History & Time",
    tags: ["historical analysis", "pattern recognition", "history research", "trends", "data analysis"],
    rating: 4.4,
    totalVotes: 2234
  }
];
