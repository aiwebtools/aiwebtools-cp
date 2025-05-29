
import { Tool } from "@/types/tools";
import { 
  PenTool, 
  BookOpen, 
  FileText, 
  Newspaper, 
  MessageSquare, 
  Mic, 
  Video,
  Edit,
  Users,
  Search,
  Crown,
  Star
} from "lucide-react";

export const contentCreationAndWritingTools: Tool[] = [
  {
    icon: BookOpen,
    title: "BOOK WRITER GPT",
    description: "Comprehensive book writing assistant for authors covering plot development, character creation, chapter structuring, and publishing guidance for all genres.",
    emoji: "📚",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    tags: ["book writing", "plot development", "character creation", "publishing", "author assistance"],
    category: "Content Creation & Writing Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Professional podcast content creation including script writing, episode planning, interview questions, and podcast structure for engaging audio content.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["podcast writing", "script creation", "episode planning", "interview questions", "audio content"],
    category: "Content Creation & Writing Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: FileText,
    title: "PPTx Powerpoint Maker GPT",
    description: "Professional PowerPoint presentation creation with slide design, content structuring, visual elements, and presentation flow for business and educational purposes.",
    emoji: "📊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["PowerPoint", "presentation design", "slide creation", "business presentations", "visual content"],
    category: "Content Creation & Writing Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Search,
    title: "Person Information Finder GPT",
    description: "Advanced people search and background research tool for finding public information, contact details, and professional profiles for legitimate research purposes.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://personfindergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-p_gHXnM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["people search", "background research", "contact finding", "professional profiles", "research tool"],
    category: "Content Creation & Writing Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Edit,
    title: "Article and Blog Rewriter GPT",
    description: "Advanced content rewriting and optimization tool for improving articles, blog posts, and written content while maintaining originality and SEO value.",
    emoji: "✍️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    tags: ["content rewriting", "article optimization", "blog improvement", "SEO writing", "content enhancement"],
    category: "Content Creation & Writing Tools",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: FileText,
    title: "Grant Writer GPT",
    description: "Professional grant writing assistance for non-profits, researchers, and organizations seeking funding with proposal writing, budget planning, and application guidance.",
    emoji: "💰",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    tags: ["grant writing", "funding proposals", "non-profit assistance", "research grants", "application writing"],
    category: "Content Creation & Writing Tools",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Users,
    title: "Name Insight Research & Predictor GPT",
    description: "Comprehensive name analysis and research tool providing insights into name meanings, origins, popularity trends, and cultural significance.",
    emoji: "📛",
    color: "from-orange-500 to-red-600",
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-interface-with-a-dark-blue-_mXbL6.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["name analysis", "name research", "name meanings", "cultural significance", "popularity trends"],
    category: "Content Creation & Writing Tools",
    rating: 4.1,
    totalVotes: 2543
  },
  {
    icon: Crown,
    title: "Celebrity Chatline GPT",
    description: "Interactive celebrity conversation experience allowing users to chat with AI versions of famous personalities, celebrities, and public figures.",
    emoji: "⭐",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    tags: ["celebrity chat", "famous personalities", "interactive conversations", "entertainment", "AI personalities"],
    category: "Content Creation & Writing Tools",
    rating: 4.0,
    totalVotes: 2456
  }
];
