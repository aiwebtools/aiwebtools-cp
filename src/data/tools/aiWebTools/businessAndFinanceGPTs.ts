import { Tool } from "@/types/tools";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Calculator, 
  Briefcase,
  Target,
  Building,
  CreditCard,
  Banknote,
  ChartBar
} from "lucide-react";

export const businessAndFinanceGPTs: Tool[] = [
  {
    icon: ChartBar,
    title: "Business Analyst GPT",
    description: "Professional AI-powered business analyst assistant that helps analyze business processes, performance metrics, market trends, and strategic opportunities. Provides comprehensive business intelligence, data analysis, process optimization recommendations, and strategic insights to drive informed decision-making and business growth.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-683aa58c19348191b966b332ba14b282-business-analyst-gpt",
    tags: ["business analysis", "data analysis", "market research", "business intelligence", "strategic planning", "performance metrics"],
    category: "Business & Finance",
    rating: 4.7,
    totalVotes: 4156
  },
  {
    icon: TrendingUp,
    title: "Trader GPT",
    description: "Trader GPT is an advanced AI tool designed to assist day traders and investors by providing real-time market analysis and trading signals. It leverages the latest market data to perform comprehensive technical analysis, offering actionable insights for informed trading decisions. Disclaimer: Trader GPT is a simulation ai tool for informational and research purposes only, not professional trading advice, and users agree not to rely on it for real-life trading scenarios or decisions.",
    emoji: "📈",
    color: "from-green-500 to-blue-600",
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    tags: ["trading", "stock market", "investment", "financial analysis", "market data", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Calculator,
    title: "MATERIAL VALUATION GPT",
    description: "Materiumor is a next-generation valuation assistant designed to bring clarity and transparency to the world of physical and digital assets. Whether you're exploring rare metals, precious gems, or digital currencies, Materiumor provides data-informed insights to help you better understand market value, trade opportunities, and economic trends. Our mission is to make material knowledge accessible, equitable, and empowering—so everyone can make informed decisions about their wealth and resources in an evolving global landscape.",
    emoji: "⚖️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tbZu4vnsY_8",
    tags: ["material valuation", "asset valuation", "precious metals", "market analysis", "wealth management", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Building,
    title: "MicroSaaS GPT",
    description: "MicroSaaS GPT is an AI-powered chat assistant that helps entrepreneurs and startups turn niche-specific ideas into fully structured, ready-to-build SaaS applications. By generating innovative concepts and providing complete development blueprints, it streamlines the journey from ideation to deployment. Designed for speed, scalability, and efficiency, it ensures seamless execution using AI code builders.",
    emoji: "🏢",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["SaaS development", "startup", "business ideas", "entrepreneurship", "micro SaaS", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: CreditCard,
    title: "Predictive Credit Score Checker GPT",
    description: "Predictive Credit Score Checker GPT is an AI tool for estimating creditworthiness based on specific addresses. Ideal for real estate, finance, and lending, it provides quick, data-backed credit score estimates by analyzing local demographics and trends. Use it to assess prospects or evaluate risk. Note that predictions are estimates to guide decision-making, not guarantees. Fast, efficient, and insightful—this AI helps you target leads with confidence!",
    emoji: "💳",
    color: "from-blue-500 to-green-600",
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["credit score", "financial assessment", "lending", "risk analysis", "creditworthiness", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: DollarSign,
    title: "Taxes GPT",
    description: "Taxes GPT is your AI-powered tax assistant, designed to simplify tax preparation while maximizing your deductions. Securely analyze your financial data, receive accurate tax reports, and minimize liabilities with ease. Let Taxes GPT handle the complexity so you can enjoy greater savings.",
    emoji: "💰",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    tags: ["tax preparation", "tax assistance", "financial planning", "deductions", "tax software", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.7,
    totalVotes: 5123
  }
];
