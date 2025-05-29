
import { Tool } from "@/types/tools";
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Building, 
  Search, 
  Calendar, 
  Mail, 
  Phone,
  Bot,
  DollarSign,
  Zap,
  Globe,
  Brain,
  Share2
} from "lucide-react";

export const businessAndTeamTools: Tool[] = [
  {
    icon: Brain,
    title: "AI Solution Finder",
    description: "Your go-to platform for quick and efficient problem-solving. Simply enter your problem, and this AI-powered tool will provide you with a tailored solution. Whether you need assistance with business challenges, creative ideas, or any other issue, AI Solution Finder simplifies the process, helping you find answers and insights in no time. A basic yet simple free tool.",
    emoji: "🔧",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://app.brancher.ai/ab76b060-ec7d-4cf7-a8c1-c090add50f42",
    tags: ["problem solving", "AI assistant", "business solutions", "creative ideas", "free tool"],
    category: "Business & Team Tools",
    rating: 4.1,
    totalVotes: 1876
  },
  {
    icon: Users,
    title: "MeetAlfred",
    description: "Robust AI-powered sales automation platform that empowers businesses and sales professionals to accelerate lead generation and engagement across multiple channels, including LinkedIn, Email, and Twitter. With its intuitive interface and advanced features, Meet Alfred streamlines the prospecting process by automating personalized follow-up messages and enabling multi-channel outreach, increasing response rates.",
    emoji: "🤝",
    color: "from-blue-500 to-green-600",
    directUrl: "https://meetalfred.com/?ref=ztg3ymv",
    tags: ["sales automation", "lead generation", "LinkedIn outreach", "multi-channel", "prospecting"],
    category: "Business & Team Tools",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "MeetOtis",
    description: "All-in-one digital marketing solution designed to help growing businesses manage their online advertising efforts across various platforms such as Facebook, Instagram, Google, TikTok, YouTube, and more. Powered by AI-driven features, MeetOtis enables businesses to create cross-channel ad campaigns efficiently while maximizing ad performance.",
    emoji: "🎯",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://meetotis.com/",
    tags: ["digital marketing", "ad campaigns", "cross-channel", "AI-driven", "performance optimization"],
    category: "Business & Team Tools",
    rating: 4.2,
    totalVotes: 2789
  },
  {
    icon: Zap,
    title: "BannerBear",
    description: "Powerful marketing automation tool that simplifies the process of generating social media visuals, e-commerce banners, and more through its API and integrations. With BannerBear, you can streamline your marketing efforts and create stunning visuals without the need for coding skills.",
    emoji: "🐻",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.bannerbear.com/?via=aiwebtools",
    tags: ["marketing automation", "visual generation", "API integration", "social media", "e-commerce"],
    category: "Business & Team Tools",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: Users,
    title: "Zopto",
    description: "Game-changing marketing automation tool that revolutionizes lead generation on LinkedIn and Email. With its intelligent multi-channel campaigns, real-time reporting, and AI-powered templates, Zopto simplifies prospecting efforts and fuels business growth. Trusted by over 42,000 users worldwide.",
    emoji: "🚀",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://zopto.com/?fpr=aiwebtools",
    tags: ["LinkedIn automation", "lead generation", "multi-channel campaigns", "prospecting", "business growth"],
    category: "Business & Team Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Building,
    title: "BIT.AI",
    description: "Cutting-edge workplace and document collaboration platform designed for teams and individuals to create, collaborate, and organize knowledge seamlessly. It offers a wide array of features, including document creation, wikis, document tracking, client portals, website embedding, and data rooms, all while integrating with your favorite apps.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://bit.ai/?deal=aiwebtools",
    tags: ["document collaboration", "workplace platform", "team productivity", "knowledge management", "integrations"],
    category: "Business & Team Tools",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Users,
    title: "Wiza",
    description: "Powerful LinkedIn automation tool designed to streamline lead generation and outbound sales efforts. Its primary function is to help users create prospect lists directly from LinkedIn, offering accurate contact information such as emails and phone numbers. Wiza enables users to export leads effortlessly.",
    emoji: "📊",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://wiza.co/?via=aiwebtools",
    tags: ["LinkedIn automation", "lead generation", "contact information", "prospect lists", "sales tools"],
    category: "Business & Team Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: DollarSign,
    title: "RevealBot",
    description: "Comprehensive ad management automation platform designed to streamline and optimize digital advertising campaigns. Its core capabilities include the automation of routine ad management tasks, creation of custom metrics using external data, generation of actionable insights and reports, and the ability to create new ads and variants quickly.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://reveal.grsm.io/aiwebtools",
    tags: ["ad management", "automation", "digital advertising", "campaign optimization", "analytics"],
    category: "Business & Team Tools",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Bot,
    title: "ChatIQ.ai",
    description: "Next-generation chatbot builder powered by AI. Create custom ChatGPT chatbots tailored to your business needs using your own data. 14-day free trial available.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://chatiq.ai/?via=aiwebtools",
    tags: ["chatbot builder", "custom ChatGPT", "business automation", "custom data", "14-day trial"],
    category: "Business & Team Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: DollarSign,
    title: "FinChat.io",
    description: "AI platform for financial investors and stock traders with ChatGPT-based capabilities. Provides verified data on over 50,000 public companies for informed market decisions.",
    emoji: "📊",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://finchat.io/",
    tags: ["financial AI", "stock trading", "market data", "investors", "public companies", "financial analysis"],
    category: "Business & Team Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: TrendingUp,
    title: "ChainGPT",
    description: "Versatile platform covering blockchain and cryptocurrency services. Smart contract development, market analysis, crypto news, AI trading strategies, and blockchain analytics.",
    emoji: "⛓️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.chaingpt.org/",
    tags: ["blockchain", "cryptocurrency", "smart contracts", "trading", "market analysis", "DeFi"],
    category: "Business & Team Tools",
    rating: 4.1,
    totalVotes: 2345
  },
  {
    icon: Target,
    title: "Jason AI",
    description: "First B2B Conversational AI powered by ChatGPT streamlining outreach, handling prospect responses, and facilitating meeting bookings. Essential sales AI assistant for SDRs and businesses.",
    emoji: "🤝",
    color: "from-blue-500 to-green-600",
    directUrl: "https://get.reply.io/aiwebtools",
    tags: ["B2B sales", "conversational AI", "lead generation", "meeting booking", "sales automation"],
    category: "Business & Team Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: User,
    title: "Coach Vox",
    description: "Innovative platform creating AI version of yourself for lead generation, audience engagement, client coaching, and team empowerment. Ultimate lead magnet for entrepreneurs and creators.",
    emoji: "👤",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://coachvox.ai/",
    tags: ["AI avatar", "lead generation", "coaching", "audience engagement", "entrepreneur tools"],
    category: "Business & Team Tools",
    rating: 4.3,
    totalVotes: 2876
  }
];
