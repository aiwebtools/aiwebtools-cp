
import { Tool } from "@/types/tools";
import { 
  Clock, 
  History, 
  Globe, 
  Scroll, 
  Calendar, 
  Crown,
  Ship,
  Users,
  BookOpen,
  Search
} from "lucide-react";

export const timeAndHistoryGPTs: Tool[] = [
  {
    icon: Clock,
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination. For deeper, more personal conversations with historical characters, we recommend using Talk to History GPT",
    emoji: "⏰",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/J31nNY5_PB4",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298793409806528/time.webp",
    tags: ["time travel", "history exploration", "historical figures", "alternative realities", "time periods", "aiwebtools", "Custom GPT"],
    category: "Time & History",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Users,
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history. Interact with any historical figures you imagine and gain unique insights and perspectives straight from the source. Powered by GPT-4o, it's a streamlined way to make history come alive. Perfect for students and enthusiasts alike. This tool is designed for educational and research purposes only by AiWebTools.Ai",
    emoji: "🏛️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/HQGNMR7oXXY",
    tags: ["historical conversations", "historical figures", "educational tool", "history learning", "interactive history", "aiwebtools", "Custom GPT"],
    category: "Time & History",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Ship,
    title: "Titanic Resurrections GPT",
    description: "Titanic Resurrections GPT is a historically immersive AI that brings the voices of the passengers and crew of the Titanic back to life. Through first-person storytelling, survivor testimonies, and documented historical accuracy, this AI allows users to interact directly with those who sailed aboard the doomed vessel in April 1912.",
    emoji: "🚢",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=XlWVaz5bw08",
    tags: ["titanic history", "historical storytelling", "survivor testimonies", "maritime history", "interactive history", "aiwebtools", "Custom GPT"],
    category: "Time & History",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Scroll,
    title: "Historical Headlines GPT",
    description: "Historical Headlines GPT is an AI that specializes in crafting immersive, historically accurate news articles as if they were written at the time of the event. It reports on history from the perspective of contemporary journalists, using period-accurate language, style, and viewpoints without modern bias or anachronisms. Whether covering ancient Rome, the Middle Ages, the Renaissance, or World War II, it recreates historical headlines with eyewitness accounts, political perspectives, and cultural context, making history feel alive.",
    emoji: "📰",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/historical-headlines-gpt-hero.jpg",
    tags: ["historical news", "period journalism", "historical accuracy", "news simulation", "historical perspective", "aiwebtools", "Custom GPT"],
    category: "Time & History",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Search,
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Uncovering Hidden Historical Patterns GPT is an advanced AI tool that reveals the suppressed truths and hidden power structures shaping our world. By analyzing symbolism, financial systems, and historical contradictions, it uncovers patterns connecting ancient empires to modern institutions. This tool cross-references mainstream narratives with alternative sources, secret societies, and esoteric knowledge to expose what history books omit. Perfect for truth seekers, researchers, and critical thinkers ready to see beyond the surface.",
    emoji: "🔍",
    color: "from-purple-500 to-red-600",
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_yonhGRCS3Y",
    tags: ["historical analysis", "pattern recognition", "alternative history", "research tool", "historical investigation", "aiwebtools", "Custom GPT"],
    category: "Time & History",
      rating: 4.7,
      totalVotes: 4567
    },
    {
      icon: History,
      title: "Black History Matters Time Machine GPT",
      description: "Explore pivotal moments, figures, and movements in Black history across eras. This time machine GPT immerses you in historically grounded narratives and perspectives to deepen understanding and appreciation of Black heritage.",
      emoji: "⏳",
      color: "from-amber-600 to-red-600",
      directUrl: "https://blackhistorymattersgpt.lovable.app/?via=aiwebtools",
      videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
      tags: ["Black history", "time machine", "time travel", "history exploration", "civil rights", "African American history", "historical education", "Custom GPT"],
      category: "Time & History",
      rating: 4.7,
      totalVotes: 1280
    },
    {
      icon: Globe,
      title: "Palestinian History Preserver",
      description: "Palestinian History Preserver is dedicated to preserving and sharing Palestinian history, culture, and voices. This educational tool provides comprehensive historical documentation, cultural insights, and personal narratives to ensure Palestinian stories are not forgotten. It serves as a digital archive and educational resource for understanding Palestinian heritage, struggles, and contributions throughout history.",
      emoji: "🕊️",
      color: "from-green-500 to-red-600",
      directUrl: "https://chatgpt.com/g/g-68ca033a29508191a8b51668f8bf8e78-palestinian-history-preserver/?via=aiwebtools",
      tags: ["Palestinian history", "cultural preservation", "historical documentation", "Middle East history", "heritage", "education", "aiwebtools", "Custom GPT"],
      category: "Time & History",
      rating: 4.8,
      totalVotes: 2341
    },
    {
      icon: BookOpen,
      title: "Middle East History Guide",
      description: "Expert guide on Middle Eastern history across all time periods. This comprehensive AI tool provides in-depth knowledge of Middle Eastern civilizations, cultures, conflicts, and developments from ancient times to the present. Perfect for students, researchers, and anyone seeking to understand the rich and complex history of the Middle East region.",
      emoji: "🏛️",
      color: "from-amber-500 to-purple-600",
      directUrl: "https://chatgpt.com/g/g-68c9e5c22f608191bcdd15d802b094b0-middle-east-history-guide/?via=aiwebtools",
      tags: ["Middle East history", "historical guide", "ancient civilizations", "regional history", "cultural studies", "education", "aiwebtools", "Custom GPT"],
      category: "Time & History",
      rating: 4.7,
      totalVotes: 1987
    },
    {
      icon: Search,
      title: "Gravestone Decoder GPT",
      description: "Uncover the true identity behind the stone—verified, sourced, and never forgotten. Uncover information about any grave powered by AI. Learn their story! This powerful genealogy and research tool helps you decode gravestone inscriptions, research family history, and discover the stories of those who came before us.",
      emoji: "🪦",
      color: "from-gray-600 to-slate-700",
      directUrl: "https://chatgpt.com/g/g-693c301e16448191a4793187c4800a7f-gravestone-decoder-gpt?via=aiwebtools",
      tags: ["gravestone", "decoder", "genealogy", "cemetery", "ancestry", "family history", "research", "grave", "memorial", "historical research", "aiwebtools", "Custom GPT", "grave decoder", "stone"],
      category: "Time & History",
      rating: 4.8,
      totalVotes: 1543,
      isFree: true
    }
];
