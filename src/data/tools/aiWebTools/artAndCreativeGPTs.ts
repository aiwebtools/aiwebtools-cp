
import { Tool } from "@/types/tools";
import { 
  PenTool,
  Edit,
  Wand2
} from "lucide-react";

export const artAndCreativeGPTs: Tool[] = [
  {
    icon: PenTool,
    title: "Sketch Artist GPT",
    description: "Sketch Artist GPT is your AI-powered sketch art assistant, turning images or text descriptions into clean, high-resolution sketches using advanced Python and DALLE technology. Whether you're uploading a photo or describing an idea, Sketch Artist GPT delivers precise, professional sketches ready for creative use.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["sketch art", "drawing", "digital sketching", "art creation", "image to sketch", "creative tools", "aiwebtools", "Custom GPT"],
    category: "Art & Creative",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Edit,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite and bam! 🎯",
    emoji: "📝",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/5n1RHKoQ-Ds",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["article rewriting", "blog rewriting", "SEO optimization", "content rewriting", "content enhancement", "aiwebtools", "Custom GPT"],
    category: "Art & Creative",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Wand2,
    title: "AI Logo Generator",
    description: "Create professional logos for your brand using AI-powered design tools.",
    emoji: "🪄",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant",
    imageUrl: "/src/assets/tools/ai-logo-generator-hero.png",
    tags: ["logo design", "AI logo", "branding", "graphic design", "AI tools"],
    category: "Art & Creative",
    rating: 4.8,
    totalVotes: 3567
  }
];
