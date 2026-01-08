import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  Video, 
  Music, 
  Palette, 
  Camera,
  Edit,
  Wand2,
  Lightbulb,
  Sparkles,
  Search,
  Presentation,
  Leaf,
  Drill
} from "lucide-react";

export const contentCreationToolsGPTs: Tool[] = [
  {
    icon: Lightbulb,
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "GPT Ideas and Instructions Assistant",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/XSZM8ePQOzY",
    imageUrl: "/src/assets/tools/custom-gpt-ideas-hero.png",
    tags: ["gpt ideas", "brainstorming", "custom gpt", "ai ideas", "creativity", "assistant", "aiwebtools"],
    category: "Content Creation",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Music,
    title: "Music Melodies & Lessons GPT",
    description: "Music Melodies & Lessons GPT is your ultimate musical companion, here to inspire and guide you on your musical journey. Whether you're learning to play an instrument, perfecting your vocals, or writing your own songs, I provide step-by-step guidance, accurate lyrics, and easy-to-follow tablature. I tailor lessons to your goals, help you master techniques, and offer personalized advice on instrument selection and sound improvement. From beginners to experienced musicians, I'm here to make learning fun, creative, and engaging, helping you achieve your musical dreams with clarity and ease.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["music lessons", "melodies", "musical education", "instrument learning", "music theory", "vocals", "aiwebtools"],
    category: "Content Creation",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Presentation,
    title: "PPTx Powerpoint Maker GPT",
    description: "PPT Presentation Crafter is your all-in-one AI assistant for creating beautiful, detailed PowerPoint presentations with zero hassle. Whether you're building an educational deck, a business pitch, or a creative visual story, I generate polished content, custom DALLE visuals, and ready-to-download PPTX slides — slide by slide, in real time. Built by AIWebTools.ai, I'm the ultimate productivity partner for turning knowledge into powerful presentations.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["presentation creation", "PowerPoint", "slide design", "business presentations", "visual content", "Custom GPT", "Content Marketing", "Sales Enablement", "presentation maker", "slide generator", "powerpoint maker", "ai slides", "ppt generator"],
    category: "Content Creation Tools",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Edit,
    title: "Grant Writer GPT",
    description: "Grant Writer GPT is your expert AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding. Whether you're a nonprofit, small business, or research institution, we streamline the entire grant writing process—from research and drafting to budgeting and final submission—saving you time while ensuring compliance with funder expectations. Let us help you turn your vision into a winning proposal and secure the funding you deserve!",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["grant writing", "funding proposals", "nonprofit support", "research grants", "proposal writing", "Custom GPT", "Content Marketing", "Lead Generation"],
    category: "Content Creation Tools",
    rating: 4.9,
    totalVotes: 8234
  },
  {
    icon: Leaf,
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Fungus Whisperer GPT is an expert AI guide specializing in mushroom cultivation, safe foraging, and creative culinary uses of fungi. It provides precise identification assistance, step-by-step growing techniques, and innovative recipes, ensuring safety and sustainability. With deep knowledge of mycology, it enhances learning through scientific insights, folklore, and hands-on guidance for mushroom enthusiasts of all levels.",
    emoji: "🍄",
    color: "from-green-500 to-brown-600",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-with-a-beard-holding-a-_9DLLj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["mushroom cultivation", "mycology", "foraging", "fungi identification", "sustainable farming"],
    category: "Content Creation Tools",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Drill,
    title: "Drill Baby Drill Ai Suite For Oil & Gas",
    description: "Drill Baby Drill AI Tools Suite is a cutting-edge collection of 10 specialized AI tools designed to optimize every aspect of oil and gas operations, from exploration and drilling to logistics, safety, compliance, and financial forecasting.",
    emoji: "🛢️",
    color: "from-orange-500 to-black",
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["oil and gas", "energy industry", "drilling operations", "industrial automation", "energy management"],
    category: "Content Creation Tools",
    rating: 4.7,
    totalVotes: 5432
  }
];
