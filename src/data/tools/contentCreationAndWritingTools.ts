import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  Edit3, 
  Type, 
  Feather,
  BookOpen,
  Sparkles,
  Video,
  Monitor,
  Eye,
  Search,
  Mic
} from "lucide-react";

export const contentCreationAndWritingTools: Tool[] = [
  // AI Web Tools custom GPTs first
  {
    icon: FileText,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite and bam! 🎯",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["article rewriting", "SEO optimization", "blog content", "content repurposing", "writing assistance"],
    category: "Content Creation & Writing",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Video,
    title: "Video Second-by-Second Analysis GPT",
    description: "Video Second-by-Second Analysis GPT breaks down your footage with incredible precision, analyzing every second and extracting key visual frames for detailed insight. Just upload your video, and this AI tool will guide you through a step-by-step review of each moment—highlighting actions, people, objects, and scene changes. It's also a powerful resource for training and fine-tuning Vision-Language Models (VLMs), offering structured, labeled visual data with contextual analysis. Ideal for creators, analysts, educators, researchers, and investigators who need deep clarity from their video content.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["video analysis", "frame extraction", "VLM training", "content analysis", "video research"],
    category: "Content Creation & Writing",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Podcast Script Writer GPT specializes in crafting engaging, structured, and professionally formatted podcast scripts and episode outlines. This AI-powered tool efficiently transforms ideas into compelling narratives optimized specifically for audio storytelling, ensuring each script captures audience attention and enhances listener experience.",
    emoji: "🎙️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["podcast scripts", "audio storytelling", "episode outlines", "narrative structure", "podcast production"],
    category: "Content Creation & Writing",
    rating: 4.2,
    totalVotes: 2134
  },
  {
    icon: Monitor,
    title: "PPTx Powerpoint Maker GPT",
    description: "PPT Presentation Crafter is your all-in-one AI assistant for creating beautiful, detailed PowerPoint presentations with zero hassle. Whether you're building an educational deck, a business pitch, or a creative visual story, I generate polished content, custom DALLE visuals, and ready-to-download PPTX slides — slide by slide, in real time. Built by AIWebTools.ai, I'm the ultimate productivity partner for turning knowledge into powerful presentations.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["PowerPoint creation", "presentation design", "slide generation", "DALLE visuals", "business presentations"],
    category: "Content Creation & Writing",
    rating: 4.1,
    totalVotes: 1876
  },
  {
    icon: PenTool,
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool Streamlines Legislative Testimony Process, Promotes Public Engagement in Local Policy. This tool was featured in various news articles such as the CT POST & CT INSIDER",
    emoji: "📝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-giving-a-public-testim_Nl9Va.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["public testimony", "legislative process", "policy engagement", "AI writing", "civic tech"],
    category: "Content Creation & Writing",
    rating: 3.9,
    totalVotes: 1654
  },
  {
    icon: FileText,
    title: "Grant Writer GPT",
    description: "Grant Writer GPT is your expert AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding. Whether you're a nonprofit, small business, or research institution, we streamline the entire grant writing process—from research and drafting to budgeting and final submission—saving you time while ensuring compliance with funder expectations. Let us help you turn your vision into a winning proposal and secure the funding you deserve!",
    emoji: "✍️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-writing-a-grant-propo_99V01.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["grant writing", "proposal creation", "funding assistance", "nonprofit support", "business grants"],
    category: "Content Creation & Writing",
    rating: 3.8,
    totalVotes: 1432
  },
];
