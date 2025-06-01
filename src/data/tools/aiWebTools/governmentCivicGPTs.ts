
import { Tool } from "@/types/tools";
import { 
  Scale, 
  Building, 
  Users, 
  FileText, 
  Vote, 
  Globe, 
  Shield, 
  Gavel,
  BookOpen,
  Flag,
  MapPin,
  Database
} from "lucide-react";

export const governmentCivicGPTs: Tool[] = [
  {
    icon: Scale,
    title: "Legislation Writer GPT",
    description: "I assist in drafting complete legislation page by page with clear, precise legal language and seamless continuity.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    tags: ["legislation drafting", "legal writing", "government", "policy", "law", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.6,
    totalVotes: 3124
  },
  {
    icon: Building,
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool Streamlines Legislative Testimony Process, Promotes Public Engagement in Local Policy. This tool was featured in various news articles such as the CT POST & CT INSIDER",
    emoji: "🏛️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    tags: ["public testimony", "legislative process", "civic engagement", "government", "policy", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.7,
    totalVotes: 2987
  },
  {
    icon: Users,
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of how AI technology can foster positive change. Imagine the collective benefit if everyone participated! #GPTS4GOOD -How To Guide. ------------------------------------------------------------------------- #BUILDYOURWORLD- Builders Tips and Tricks.",
    emoji: "🤝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social safety net", "social support", "community aid", "welfare", "assistance", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.5,
    totalVotes: 2654
  },
  {
    icon: FileText,
    title: "Universal Basic Income Strategist GPT",
    description: "UBI Strategist GPT helps you design sustainable, future-ready Universal Basic Income models tailored to your region. It analyzes real-time economic data, automation trends, and societal needs to craft step-by-step implementation roadmaps. From funding strategies to impact forecasts, it covers everything needed to build a fair and abundant future. Ideal for policymakers, researchers, activists, and visionaries shaping a post-AI world.",
    emoji: "💰",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    tags: ["universal basic income", "economic policy", "social welfare", "automation", "future planning", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.4,
    totalVotes: 2321
  },
  {
    icon: Vote,
    title: "Global Peace Restoration Strategist GPT",
    description: "Global Peace Restoration GPT is an AI-powered diplomatic tool engineered to resolve complex global conflicts through structured negotiation, historical analysis, and real-time intelligence. It is the world's most advanced mediator, capable of simulating multi-party negotiations, designing peace roadmaps, and facilitating trust-building between adversaries. Whether addressing geopolitical tensions, resource disputes, or ideological divides, Global Peace Restoration GPT brings data-driven clarity, impartial strategy, and actionable solutions to the world's most pressing crises. With full-spectrum conflict resolution capabilities, it is the essential tool for diplomats, peacebuilders, NGOs, and international organizations seeking lasting peace.",
    emoji: "🕊️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-earth-with-a-dark-blue-atmosp_Uq9U_.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300/qt=q:30",
    tags: ["global peace", "conflict resolution", "diplomacy", "mediation", "international relations", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.8,
    totalVotes: 3876
  },
  {
    icon: Globe,
    title: "Legislator Link GPT",
    description: "This music video is inspired by a true story. In response to Connecticut's ban on CBD shops, as a former CBD shop owner, I've developed an AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts. Click the link below to access LEGISLATOR LINK GPT. #Democracy #WethePeople",
    emoji: "🏛️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["legislator contact", "civic engagement", "democracy", "government connection", "political advocacy", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.6,
    totalVotes: 2843
  },
  {
    icon: Database,
    title: "CT MMP Data Explorer",
    description: "Connecticut Medical Marijuana Program Data Explorer - Comprehensive analysis and insights into Connecticut's medical marijuana program data, patient demographics, and program effectiveness.",
    emoji: "📊",
    color: "from-green-500 to-blue-600",
    directUrl: "https://ctmmpdata.lovable.app/?via=aiwebtools",
    imageUrl: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-6e68-61f5-adf4-a5e60789f72f/raw?se=2025-06-01T22%3A49%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=2877f519-6d5c-5d1a-a313-beffbca60c37&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-01T20%3A47%3A48Z&ske=2025-06-02T20%3A47%3A48Z&sks=b&skv=2024-08-04&sig=C5WUDA3dwtywro0JPDwsFDiPvJOgjPAfTVUTn5jkLp4%3D",
    tags: ["medical marijuana", "data analysis", "Connecticut", "healthcare data", "program tracking", "aiwebtools"],
    category: "Government & Civic Tools",
    rating: 4.5,
    totalVotes: 1987
  }
];
