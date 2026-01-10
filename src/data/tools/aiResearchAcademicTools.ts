import { Tool } from "@/types/tools";
import { BookOpen, Brain, FileText, Network, Search, Sparkles } from "lucide-react";

export const aiResearchAcademicTools: Tool[] = [
  {
    icon: Search,
    title: "Consensus",
    description: "AI-powered search engine for scientific research papers. Get instant answers from 200M+ papers with citation-backed insights and consensus analysis.",
    emoji: "🔬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://consensus.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/consensus-hero.png",
    tags: ["research", "academic", "scientific papers", "citations", "research assistant", "AI search", "Academic Search", "Evidence Analysis"],
    category: "AI Research & Academic",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Brain,
    title: "Elicit",
    description: "AI research assistant that analyzes papers, extracts key insights, and helps you understand research faster. Perfect for literature reviews and systematic reviews.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://elicit.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/elicit-hero.png",
    tags: ["research assistant", "literature review", "paper analysis", "academic", "AI research", "Literature Review", "Paper Summarization"],
    category: "AI Research & Academic",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: FileText,
    title: "Scholarcy",
    description: "Instantly summarize research papers and generate flashcards. Extract key findings, references, and create structured summaries for faster research.",
    emoji: "📄",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.scholarcy.com/?via=aiwebtools",
    tags: ["paper summarization", "research", "academic", "flashcards", "citations", "AI summarizer", "Paper Summarization", "Literature Review"],
    category: "AI Research & Academic",
    rating: 4.6,
    totalVotes: 3891
  },
  {
    icon: Network,
    title: "ResearchRabbit",
    description: "Discover papers, visualize research networks, and track the latest research in your field. AI-powered paper recommendations and literature mapping.",
    emoji: "🐰",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.researchrabbit.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/researchrabbit-hero.png",
    tags: ["research discovery", "paper recommendations", "literature mapping", "academic", "research network", "Research Discovery", "Literature Review"],
    category: "AI Research & Academic",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Network,
    title: "Connected Papers",
    description: "Explore academic papers in a visual graph. Find relevant papers, understand research trends, and discover connections between research works.",
    emoji: "🔗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.connectedpapers.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/connected-papers-hero.png",
    tags: ["research visualization", "paper discovery", "academic", "citation network", "literature review", "Research Discovery", "Citation Management"],
    category: "AI Research & Academic",
    rating: 4.7,
    totalVotes: 3765
  },
  {
    icon: Sparkles,
    title: "SciSpace (Typeset)",
    description: "AI copilot for research papers. Explain complex concepts, get summaries, and understand papers faster. Chat with PDFs and research documents.",
    emoji: "✨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://typeset.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/scispace-hero.png",
    tags: ["research assistant", "PDF chat", "paper explanation", "academic", "AI copilot", "literature review", "Paper Summarization", "Academic Search"],
    category: "AI Research & Academic",
    rating: 4.6,
    totalVotes: 4234
  }
];
