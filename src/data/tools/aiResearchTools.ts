import { Tool } from "@/types/tools";
import { 
  Search, 
  Database, 
  BarChart3, 
  Brain, 
  Eye, 
  FileSearch,
  Microscope,
  Target,
  Beaker,
  BookOpen,
  TrendingUp,
  Users
} from "lucide-react";

export const aiResearchTools: Tool[] = [
  {
    icon: Target,
    title: "Probability GPT",
    description: "Discover the truth behind any claim with Probability GPT, where speculation ends, and accuracy begins. With precise probability scores and unbiased truth, Probability GPT cuts through the noise of misinformation, guiding you to make informed decisions. As the ultimate AI Truth Seeker, it illuminates uncertainty with clear, definitive answers. Let Probability GPT lead you to certainty, helping you see things as they truly are.",
    emoji: "⚖️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["probability analysis", "truth seeking", "prediction accuracy", "data verification", "decision support"],
    category: "AI Research Tools",
    rating: 4.9,
    totalVotes: 5678
  },
  {
    icon: BarChart3,
    title: "Data Research Analysis Report GPT",
    description: "Data Analysis Report AI is a revolutionary tool that transforms complex datasets into actionable insights with unparalleled precision. Leveraging advanced statistical methods, trend identification, and predictive modeling, it excels in delivering accurate and detailed analyses. With its robust capabilities in generating professional visualizations and customizable reports, it empowers users to make informed, strategic decisions effortlessly. Currently #8 in the world!",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    tags: ["data analysis", "research reports", "statistical modeling", "visualizations", "strategic insights"],
    category: "AI Research Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: TrendingUp,
    title: "Predictive Credit Score Checker GPT",
    description: "Predictive Credit Score Checker GPT is an AI tool for estimating creditworthiness based on specific addresses. Ideal for real estate, finance, and lending, it provides quick, data-backed credit score estimates by analyzing local demographics and trends. Use it to assess prospects or evaluate risk. Note that predictions are estimates to guide decision-making, not guarantees. Fast, efficient, and insightful—this AI helps you target leads with confidence!",
    emoji: "💳",
    color: "from-green-500 to-blue-600",
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["credit scoring", "risk assessment", "demographic analysis", "financial prediction", "real estate"],
    category: "AI Research Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Search,
    title: "Name Insight Research & Predictor GPT",
    description: "Your name holds hidden meanings, shaping your personality, strengths, and destiny through history, numerology, and culture. Dive deep into its origins, global significance, and psychological impact with AI-driven insights. Discover what your name says about YOU today!",
    emoji: "🔍",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-interface-with-a-dark-blue-_mXbL6.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["name analysis", "numerology", "cultural research", "personality insights", "historical origins"],
    category: "AI Research Tools",
    rating: 4.2,
    totalVotes: 2134
  },
  {
    icon: Beaker,
    title: "Genome GPT",
    description: "Genome GPT is a cutting-edge AI tool designed to assist researchers, scientists, and enthusiasts in genetic analysis and discovery. Specializing in genomic data interpretation, Genome GPT provides comprehensive and detailed insights into genetic sequences, patterns, and variations. Whether you're analyzing human DNA, exploring plant genetics, or researching cannabis strains, Genome GPT offers thorough scientific analysis in a user-friendly, professional manner.",
    emoji: "🧬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["genetic analysis", "DNA research", "genomic data", "scientific analysis", "biotechnology"],
    category: "AI Research Tools",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "Person Information Finder GPT",
    description: "Person Information Finder GPT is an AI tool that specializes in uncovering detailed public information about individuals by searching the web, social media, news, and public records. Whether you're reconnecting with a lost contact, researching a public figure, or verifying someone's background, this AI compiles comprehensive profiles with precision and speed.",
    emoji: "👤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://personfindergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-p_gHXnM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["background research", "public records", "social media search", "contact verification", "profile compilation"],
    category: "AI Research Tools",
    rating: 4.0,
    totalVotes: 1876
  },
  {
    icon: Database,
    title: "Connected Papers",
    description: "Visual tool to find and explore academic papers through interactive graphs showing paper connections and citations.",
    emoji: "📊",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.connectedpapers.com/",
    tags: ["research visualization", "paper discovery", "citation analysis", "academic"],
    category: "Information & Research",
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Microscope,
    title: "Elicit",
    description: "AI research assistant that helps find, summarize, and extract data from research papers using language models.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://elicit.org/",
    tags: ["research assistant", "paper summarization", "data extraction", "AI analysis"],
    category: "Information & Research",
    rating: 4.5,
    totalVotes: 2654
  },
  {
    icon: BarChart3,
    title: "Research Rabbit",
    description: "Personalized research discovery platform that learns your interests and suggests relevant papers and authors.",
    emoji: "🐰",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.researchrabbit.ai/",
    tags: ["personalized research", "paper discovery", "author tracking", "recommendations"],
    category: "Information & Research",
    rating: 4.4,
    totalVotes: 2321
  },
  {
    icon: Brain,
    title: "Consensus",
    description: "AI-powered search engine that finds insights in research papers and provides evidence-based answers to questions.",
    emoji: "🧠",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://consensus.app/",
    tags: ["evidence-based search", "research insights", "question answering", "scientific"],
    category: "Information & Research",
    rating: 4.3,
    totalVotes: 1987
  }
];
