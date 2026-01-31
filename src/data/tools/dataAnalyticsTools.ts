
import { Tool } from "@/types/tools";
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  PieChart, 
  LineChart,
  Activity,
  Target,
  Brain,
  Zap,
  Settings,
  MessageSquare,
  Cpu,
  Bot,
  Clock
} from "lucide-react";

export const dataAnalyticsTools: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "OpenAI's powerful conversational AI with strong analytical capabilities for data interpretation, trend analysis, and generating insights from complex datasets. Features advanced reasoning and can process and analyze various data formats.",
    emoji: "💭",
    color: "from-green-500 to-teal-600",
    directUrl: "https://chat.openai.com/",
    imageUrl: "/src/assets/tools/chatgpt-hero.png",
    tags: ["AI assistant", "data analysis", "OpenAI", "conversational AI", "trend analysis", "insights", "Data Analysis", "AI Analytics"],
    category: "Data & Analytics Tools",
    rating: 4.7,
    totalVotes: 15678
  },
  {
    icon: Cpu,
    title: "Gemini",
    description: "Google's advanced AI model with powerful analytical and reasoning capabilities. Excellent for data analysis, research tasks, multimodal analysis, and extracting insights from various data sources including text, images, and documents.",
    emoji: "⚡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gemini.google.com/",
    imageUrl: "/src/assets/tools/gemini-hero.png",
    tags: ["AI assistant", "Google", "multimodal analysis", "data insights", "research", "advanced reasoning", "Data Analysis", "AI Analytics"],
    category: "Data & Analytics Tools",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: BarChart3,
    title: "Data Research Analysis Report GPT",
    description: "Data Analysis Report AI is a revolutionary tool that transforms complex datasets into actionable insights with unparalleled precision. Leveraging advanced statistical methods, trend identification, and predictive modeling, it excels in delivering accurate and detailed analyses. With its robust capabilities in generating professional visualizations and customizable reports, it empowers users to make informed, strategic decisions effortlessly. Currently #8 in the world!",
    emoji: "📊",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    tags: ["data analysis", "research reports", "statistical analysis", "data visualization", "predictive modeling", "aiwebtools", "Data Visualization", "Predictive Analytics", "Reporting"],
    category: "Data & Analytics Tools",
    rating: 4.9,
    totalVotes: 5432
  },
  {
    icon: BarChart3,
    title: "Tableau",
    description: "Leading data visualization platform that helps people see and understand data. Create interactive dashboards and powerful analytics.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.tableau.com/",
    imageUrl: "/src/assets/tools/tableau-hero.png",
    tags: ["data visualization", "dashboards", "business intelligence", "analytics", "enterprise", "Data Visualization", "Business Intelligence", "Dashboard"],
    category: "Data & Analytics Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Database,
    title: "Power BI",
    description: "Microsoft's business analytics solution that delivers insights to enable fast, informed decisions. Connect to data sources and create reports.",
    emoji: "📈",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://powerbi.microsoft.com/",
    imageUrl: "/src/assets/tools/power-bi-hero.png",
    tags: ["business intelligence", "Microsoft", "data analysis", "reporting", "dashboards", "Data Visualization", "Business Intelligence", "Reporting"],
    category: "Data & Analytics Tools",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Brain,
    title: "DataRobot",
    description: "Enterprise AI platform that democratizes data science and accelerates digital transformation. Automated machine learning for business users.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.datarobot.com/",
    imageUrl: "/src/assets/tools/datarobot-hero.png",
    tags: ["automated ML", "enterprise AI", "data science", "digital transformation", "machine learning", "Predictive Analytics", "Machine Learning"],
    category: "Data & Analytics Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Activity,
    title: "Looker",
    description: "Modern business intelligence platform that helps companies access, analyze, and act on their data. Part of Google Cloud.",
    emoji: "📋",
    color: "from-green-500 to-teal-600",
    directUrl: "https://looker.com/",
    imageUrl: "/src/assets/tools/looker-hero.png",
    tags: ["business intelligence", "Google Cloud", "data platform", "analytics", "enterprise", "Business Intelligence", "Data Visualization"],
    category: "Data & Analytics Tools",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: TrendingUp,
    title: "Qlik Sense",
    description: "Self-service data visualization and discovery application. Create personalized dashboards and analytics with associative analytics engine.",
    emoji: "📈",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.qlik.com/us/products/qlik-sense",
    imageUrl: "/src/assets/tools/qlik-sense-hero.png",
    tags: ["self-service BI", "data discovery", "associative analytics", "dashboards", "visualization", "Business Intelligence", "Data Visualization"],
    category: "Data & Analytics Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Clock,
    title: "Oil Countdown Clock",
    description: "Real-time visualization tracking global oil reserves and consumption rates. Monitor the world's remaining oil resources with live data and projections, providing critical insights into energy sustainability and resource depletion timelines.",
    emoji: "⏰",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://oil-clock-now.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/oil-countdown-hero.png",
    tags: ["oil reserves", "resource tracking", "energy data", "sustainability", "real-time data", "countdown", "aiwebtools", "Data Visualization", "Real-Time Analytics"],
    category: "Data & Analytics Tools",
    rating: 4.5,
    totalVotes: 1234
  }
];
