import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  Book, 
  Edit, 
  Type,
  Search,
  Target,
  Users,
  Star,
  Brain,
  Lightbulb,
  Video,
  Music
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: PenTool,
    title: "Grant Writer GPT",
    description: "Professional grant writing assistant for non-profits, researchers, and organizations. Expert guidance on crafting compelling grant proposals, funding applications, and securing financial support.",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["grant writing", "funding", "proposals", "non-profit", "research grants"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Search,
    title: "AI Tools Finder GPT",
    description: "Discover and find the perfect AI tools for any task or project with comprehensive tool recommendations and comparisons.",
    emoji: "🔍",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    category: "Writing & Content",
    tags: ["AI tools", "discovery", "recommendations", "productivity"],
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Edit,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite and improve articles, blog posts, and content while maintaining original meaning and enhancing readability.",
    emoji: "✏️",
    color: "from-green-600 to-blue-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    category: "Writing & Content",
    tags: ["content rewriting", "blog writing", "article improvement", "SEO"],
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Video,
    title: "Video Second-by-Second Analysis GPT",
    description: "Analyze videos frame by frame with detailed content analysis, scene detection, and comprehensive video insights.",
    emoji: "📹",
    color: "from-red-600 to-purple-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    category: "Writing & Content",
    tags: ["video analysis", "content analysis", "media research", "frame analysis"],
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Star,
    title: "🕊️Mary Magdalene GPT",
    description: "Explore spiritual wisdom and biblical knowledge through conversations with historical religious figure Mary Magdalene.",
    emoji: "🕊️",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://marymagdalenegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=7qxEnBR2BwQ",
    category: "Writing & Content",
    tags: ["spirituality", "biblical", "religious", "wisdom"],
    rating: 4.3,
    totalVotes: 1654
  }
];
