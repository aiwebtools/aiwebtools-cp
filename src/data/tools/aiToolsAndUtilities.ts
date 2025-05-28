import { Tool } from "@/types/tools";
import { 
  Settings, Wrench, Code, Cpu, Shield, FlaskConical, Atom,
  Search, Target, TrendingUp, Users, Globe, Lightbulb, Zap
} from "lucide-react";

export const aiToolsAndUtilities: Tool[] = [
  {
    icon: Settings,
    title: "AI Config Generator",
    description: "Generate optimized configurations for AI models and applications. Customize settings, parameters, and deployment options for peak performance.",
    emoji: "⚙️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://aiconfig.com/",
    tags: ["AI configuration", "model optimization", "deployment", "parameters", "settings"],
    category: "AI Tools & Utilities",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Wrench,
    title: "AI Code Converter",
    description: "Convert code between different programming languages with AI assistance. Streamline code migration, cross-platform development, and language interoperability.",
    emoji: "🛠️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.ai-code-converter.com/",
    tags: ["code conversion", "programming languages", "cross-platform", "migration", "interoperability"],
    category: "AI Tools & Utilities",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Code,
    title: "AI Syntax Checker",
    description: "Advanced AI syntax checking and error detection for code. Ensure code quality, identify bugs, and improve code reliability with AI-powered analysis.",
    emoji: "✅",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.compile2.com/",
    tags: ["syntax checking", "error detection", "code quality", "debugging", "reliability"],
    category: "AI Tools & Utilities",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Cpu,
    title: "AI Hardware Optimizer",
    description: "Optimize hardware configurations for AI workloads. Maximize performance, reduce latency, and improve efficiency with AI-driven hardware optimization.",
    emoji: "💽",
    color: "from-red-500 to-blue-600",
    directUrl: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/ai-analytics-toolkit.html",
    tags: ["hardware optimization", "AI workloads", "performance", "latency", "efficiency"],
    category: "AI Tools & Utilities",
    rating: 4.0,
    totalVotes: 1789
  },
  {
    icon: Shield,
    title: "AI Security Analyzer",
    description: "AI-powered security analysis and vulnerability detection for applications. Identify security risks, prevent attacks, and ensure application integrity with AI.",
    emoji: "🛡️",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://www.synopsys.com/software-integrity/security-testing/static-analysis.html",
    tags: ["security analysis", "vulnerability detection", "application security", "risk prevention", "integrity"],
    category: "AI Tools & Utilities",
    rating: 4.4,
    totalVotes: 2789
  },
  {
    icon: FlaskConical,
    title: "AI Experiment Tracker",
    description: "Track, manage, and analyze AI experiments with advanced tracking tools. Monitor performance, compare results, and optimize AI models with experiment tracking.",
    emoji: "🧪",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.comet.com/",
    tags: ["experiment tracking", "AI management", "performance monitoring", "model optimization", "analysis"],
    category: "AI Tools & Utilities",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Atom,
    title: "AI Data Synthesizer",
    description: "Synthesize realistic data for AI model training and testing. Generate synthetic datasets, augment existing data, and improve model performance with AI.",
    emoji: "⚛️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://mostly.ai/",
    tags: ["data synthesis", "model training", "synthetic data", "data augmentation", "performance"],
    category: "AI Tools & Utilities",
    rating: 4.2,
    totalVotes: 2123
  },
  {
    icon: Search,
    title: "AI Tools Finder GPT",
    description: "Comprehensive AI tools discovery and recommendation platform. Find the perfect AI tools for your specific needs, compare features, and get expert recommendations.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    tags: ["AI tools", "discovery", "recommendations", "tool finder", "AI directory"],
    category: "AI Tools & Utilities",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Target,
    title: "LMSYS CHATBOT ARENA",
    description: "Advanced chatbot comparison and evaluation platform. Test different AI models, compare performance, and find the best AI chatbot for your specific requirements.",
    emoji: "🏟️",
    color: "from-red-500 to-purple-600",
    directUrl: "https://arena.lmsys.org/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-and-electrifying-advertisement-fe.png/:/rs=w:600,cg:true,m/qt=q:98",
    tags: ["chatbot arena", "AI comparison", "model evaluation", "AI testing", "performance"],
    category: "AI Tools & Utilities",
    rating: 4.3,
    totalVotes: 2789
  }
];
