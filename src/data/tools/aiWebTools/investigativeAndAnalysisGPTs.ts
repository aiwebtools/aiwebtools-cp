import { Tool } from "@/types/tools";
import { 
  Search,
  Shield,
  FileSearch,
  UserCheck,
  AlertTriangle,
  Eye,
  Target,
  Zap
} from "lucide-react";

export const investigativeAndAnalysisGPTs: Tool[] = [
  {
    icon: Shield,
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real life situations as this is a simulation only. Disclaimer: This AI tool is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts. It is not approved for autonomous decision-making or unsupervised deployment. All findings must be reviewed and verified by qualified professionals to ensure accuracy, fairness, and ethical compliance.",
    emoji: "🔍",
    color: "from-red-500 to-orange-600",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/3Ll7KPhTt3M",
    tags: ["criminology", "investigation", "forensics", "law enforcement", "evidence analysis", "criminal justice", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Search,
    title: "SEO Keyword Research GPT",
    description: "Unlock the power of data-driven SEO with our Keyword Research GPT! Discover high-impact keywords, analyze competitor strategies, and optimize your content for top rankings. Perfect for marketers, bloggers, and SEO professionals.",
    emoji: "📈",
    color: "from-blue-500 to-green-600",
    directUrl: "https://seokeywordresearchgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/SEO%20KEYWORD%20RESEARCH%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["SEO", "keyword research", "digital marketing", "content optimization", "search engine optimization", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: FileSearch,
    title: "PDF Insights GPT",
    description: "Unlock the hidden insights within your PDFs using PDF Insights GPT. Summarize lengthy documents, extract key data, and answer complex questions with ease. Perfect for researchers, analysts, and anyone dealing with large volumes of PDF documents.",
    emoji: "📄",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://pdfinsightsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/PDF%20INSIGHTS%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["PDF analysis", "document summarization", "data extraction", "information retrieval", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: UserCheck,
    title: "Background Check GPT",
    description: "Quickly and discreetly gather information about individuals with Background Check GPT. Access public records, verify credentials, and uncover potential risks. Ideal for HR professionals, landlords, and anyone needing to make informed decisions.",
    emoji: "👤",
    color: "from-green-500 to-gray-600",
    directUrl: "https://backgroundcheckgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/BACKGROUND%20CHECK%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["background checks", "public records", "identity verification", "risk assessment", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detector GPT",
    description: "Protect your business and customers with Fraud Detector GPT. Identify and prevent fraudulent activities with advanced AI algorithms. Get real-time alerts and detailed risk assessments to stay one step ahead of scammers.",
    emoji: "🚨",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://frauddectectorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/FRAUD%20DETECTOR%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["fraud detection", "risk management", "cybersecurity", "financial security", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 3678
  },
  {
    icon: Eye,
    title: "Market Research Analyst GPT",
    description: "Gain a competitive edge with Market Research Analyst GPT. Analyze market trends, identify consumer behaviors, and develop winning strategies. Perfect for business owners, marketers, and product developers.",
    emoji: "👁️",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://marketresearchanalystgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/MARKET%20RESEARCH%20ANALYST%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["market research", "business analysis", "consumer insights", "competitive analysis", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Target,
    title: "Target Audience Finder GPT",
    description: "Pinpoint your ideal customers with Target Audience Finder GPT. Analyze demographics, interests, and behaviors to create highly targeted marketing campaigns. Maximize your ROI and connect with the right audience.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://targetaudiencefinder.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/TARGET%20AUDIENCE%20FINDER%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["target audience", "marketing strategy", "customer profiling", "demographic analysis", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: Zap,
    title: "Trend Spotter GPT",
    description: "Stay ahead of the curve with Trend Spotter GPT. Identify emerging trends, analyze social media buzz, and predict future market shifts. Perfect for innovators, marketers, and anyone wanting to stay relevant.",
    emoji: "⚡",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://trendspottergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/TREND%20SPOTTER%20GPT.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["trend analysis", "social media monitoring", "market forecasting", "innovation", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.8,
    totalVotes: 4234
  }
];
