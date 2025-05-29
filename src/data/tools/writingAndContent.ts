import { Tool } from "@/types/tools";
import { 
  BookOpen, PenTool, FileText, Edit3, Type, Scroll, 
  Quote, Feather, FileEdit, Target, Briefcase, Users
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: BookOpen,
    title: "BOOK WRITER GPT",
    description: "Professional book writing assistant for authors, covering plot development, character creation, and publishing guidance.",
    emoji: "📚",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    tags: ["book writing", "authoring", "plot development", "publishing"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 3876
  },
  {
    icon: PenTool,
    title: "Movie Script Writer GPT",
    description: "Your AI companion for full industry-standard movie scripts, storytelling, and cinematic excellence. Supports scene planning, character development with professional formatting, detailed descriptions, and captivating dialogue. Version 2 allows downloading scenes.",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-stunning-advertisement-for-an-ai-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["screenwriting", "movie scripts", "storytelling", "film industry", "creative writing"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: FileText,
    title: "Clarity Omni GPT",
    description: "Rewrites text for clarity, preserving original meaning. Can maintain exact wording or adjust wording, tone, structure for readability. Retains every detail, true to user's purpose. Transform confusing text into crystal-clear communication.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://clarityomnigpt.lovable.app/?via=aiwebtools",
    tags: ["text clarity", "editing", "rewriting", "communication", "content improvement"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 2134
  },
  {
    icon: Edit3,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs. Simply copy and paste your content, and bam! Get professional, engaging, search-engine optimized content that drives traffic and engagement.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://articlerewritergpt.lovable.app/?via=aiwebtools",
    tags: ["article rewriting", "blog content", "SEO optimization", "content marketing", "copywriting"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 1876
  },
  {
    icon: Scroll,
    title: "Legislation Writer & Compiler GPT",
    description: "Assists in drafting complete legislation page by page with clear, precise legal language and seamless continuity. Perfect for lawmakers, legal professionals, and policy advocates creating comprehensive legislative documents.",
    emoji: "⚖️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    tags: ["legislation", "legal writing", "policy drafting", "legal documents", "government"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Users,
    title: "Training Manual Generator GPT",
    description: "AI-powered tool that creates comprehensive, customized business training manuals. Aligns with company needs for effective employee training and enhances onboarding processes with professional documentation.",
    emoji: "📚",
    color: "from-orange-500 to-red-600",
    directUrl: "https://trainingmanualgpt.lovable.app/?via=aiwebtools",
    tags: ["training manuals", "employee training", "business documentation", "onboarding", "corporate training"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 1987
  },
  {
    icon: Target,
    title: "Grant Writer GPT",
    description: "Expert AI partner for compelling, funder-ready grant proposals. Maximizes funding chances for nonprofits, small businesses, and research organizations. Streamlines writing process from research and drafting to budgeting and submission.",
    emoji: "💰",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    tags: ["grant writing", "fundraising", "nonprofit", "proposal writing", "funding"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Feather,
    title: "Podcast Script Writer GPT",
    description: "Crafts engaging, structured, professionally formatted podcast scripts and episode outlines. Transforms ideas into compelling narratives perfect for audio storytelling and professional podcast production.",
    emoji: "🎙️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://podcastscriptgpt.lovable.app/?via=aiwebtools",
    tags: ["podcast scripts", "audio content", "storytelling", "broadcasting", "media production"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 1654
  },
  {
    icon: FileEdit,
    title: "Legal Draftsmith GPT",
    description: "Specializes in precise drafting of legal documents with professional accuracy and attention to detail. Creates comprehensive legal documentation for various legal needs and professional requirements.",
    emoji: "⚖️",
    color: "from-gray-600 to-blue-700",
    directUrl: "https://legaldraftsmithgpt.lovable.app/?via=aiwebtools",
    tags: ["legal documents", "legal drafting", "contracts", "legal writing", "law"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2567
  },
  {
    icon: Quote,
    title: "Public Testimony Writer GPT",
    description: "Streamlines legislative testimony creation and promotes public engagement in local policy. Featured in CT POST & CT INSIDER. Helps citizens effectively communicate with lawmakers and participate in democratic processes.",
    emoji: "🏛️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://publictestimonygpt.lovable.app/?via=aiwebtools",
    tags: ["public testimony", "civic engagement", "policy advocacy", "government", "democracy"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 1876
  }
];
