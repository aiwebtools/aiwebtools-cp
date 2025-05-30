
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
  Settings
} from "lucide-react";

export const dataAnalyticsTools: Tool[] = [
  {
    icon: BarChart3,
    title: "Tableau",
    description: "Leading data visualization platform that helps people see and understand data. Create interactive dashboards and powerful analytics.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.tableau.com/",
    tags: ["data visualization", "dashboards", "business intelligence", "analytics", "enterprise"],
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
    tags: ["business intelligence", "Microsoft", "data analysis", "reporting", "dashboards"],
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
    tags: ["automated ML", "enterprise AI", "data science", "digital transformation", "machine learning"],
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
    tags: ["business intelligence", "Google Cloud", "data platform", "analytics", "enterprise"],
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
    tags: ["self-service BI", "data discovery", "associative analytics", "dashboards", "visualization"],
    category: "Data & Analytics Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
