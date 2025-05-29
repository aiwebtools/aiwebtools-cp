
import { Tool } from "@/types/tools";
import { 
  Clock, Users, Globe, BookOpen, MapPin
} from "lucide-react";

export const timeAndHistory: Tool[] = [
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Uncover pasts, explore potential futures, and dive into alternative realities. Experience key historical moments, interact with notable figures, and journey through eras—unlock imagination. For deeper conversations, use Talk to History GPT. Time travel through history with AI precision.",
    emoji: "🌀",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://timemachinegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-mesmerizing-advertisement-for-an-ai-tool-c.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["time travel", "history", "historical simulation", "alternative realities", "educational"],
    category: "Time & History",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Users,
    title: "Talk to History GPT",
    description: "Gateway to immersive historical conversations with influential leaders. Interact with imagined historical figures for unique insights. Powered by GPT-4o. Educational and research tool by AiWebTools.Ai for exploring history through dialogue.",
    emoji: "🏛️",
    color: "from-amber-500 to-red-600",
    directUrl: "https://talktohistorygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-compelling-advertisement-for-an-ai-tool-ca.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["historical figures", "conversation", "education", "research", "historical simulation"],
    category: "Time & History",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: Globe,
    title: "Native American History - Time Machine GPT",
    description: "Immersive time travel to any Native American history era with Geronimo (Chief of Rainbow Apache Destiny) as your guide. Experience authentic stories, cultures, and wisdom from Native American heritage through AI-powered historical simulation.",
    emoji: "🪶",
    color: "from-orange-500 to-red-600",
    directUrl: "https://nativeamericanhistorygpt.lovable.app/?via=aiwebtools",
    tags: ["Native American history", "cultural heritage", "historical education", "indigenous cultures", "time travel"],
    category: "Time & History",
    rating: 4.4,
    totalVotes: 2789
  },
  {
    icon: BookOpen,
    title: "Historical Headlines GPT",
    description: "AI crafts immersive, historically accurate news articles as if written at the time of events. Features period-accurate language, style, and viewpoints from ancient Rome to WWII and beyond. Experience history through contemporary eyes.",
    emoji: "📰",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://historicalheadlinesgpt.lovable.app/?via=aiwebtools",
    tags: ["historical news", "period journalism", "historical accuracy", "news writing", "time periods"],
    category: "Time & History",
    rating: 4.3,
    totalVotes: 2156
  },
  {
    icon: MapPin,
    title: "Titanic Resurrections GPT",
    description: "Historically immersive AI brings Titanic passenger and crew voices to life. Experience first-person storytelling, survivor testimonies, and historical accuracy. Interact directly with those from April 1912 and relive this pivotal moment in history.",
    emoji: "🚢",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    tags: ["Titanic history", "historical simulation", "maritime history", "survivor stories", "1912"],
    category: "Time & History",
    rating: 4.4,
    totalVotes: 2987
  }
];
