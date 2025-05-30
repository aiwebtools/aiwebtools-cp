
import { Tool } from "@/types/tools";
import { 
  Search, BookOpen, Database, BarChart3, Brain, Microscope,
  FileText, Globe, Calculator, TrendingUp, Atom, Beaker
} from "lucide-react";

export const aiResearchTools: Tool[] = [
  {
    icon: Search,
    title: "Semantic Scholar",
    description: "AI-powered academic search engine with intelligent paper recommendations and research insights from over 200M papers.",
    emoji: "🔬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.semanticscholar.org/",
    tags: ["academic search", "research papers", "AI recommendations", "citations"],
    category: "Information & Research",
    rating: 4.7,
    totalVotes: 3456
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
