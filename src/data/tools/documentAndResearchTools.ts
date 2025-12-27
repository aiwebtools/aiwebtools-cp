
import { Tool } from "@/types/tools";
import { 
  FileText, 
  Search, 
  BookOpen, 
  Database, 
  Brain, 
  Shield,
  GraduationCap,
  Copy,
  Award,
  Users
} from "lucide-react";

export const documentAndResearchTools: Tool[] = [
  {
    icon: FileText,
    title: "ChatDOC",
    description: "ChatGPT-powered file-reading assistant for various document formats. PDFs, Word, Markdown, eBooks, websites, scanned documents. Extract, locate, summarize with cited sources.",
    emoji: "📄",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatdoc.com/",
    tags: ["ChatGPT powered", "multiple formats", "PDF", "Word", "cited sources", "document processing", "Paper Summarization", "Data Analysis", "document assistant", "pdf reader", "document analyzer", "file reader", "document summarizer"],
    category: "Document & Research Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "Citation Machine",
    description: "One-stop destination for smarter writing. Create citations, check plagiarism and grammar. Educational content, writing tips. ATS-friendly resume optimization with 250+ checks.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.citationmachine.net/",
    tags: ["citations", "plagiarism check", "grammar", "ATS-friendly", "250+ checks", "educational", "Citation Management", "Academic Writing"],
    category: "Document & Research Tools",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Brain,
    title: "DocLime",
    description: "Revolutionary AI document analysis platform. Lightning-fast searches reducing hours to minutes. Trusted by universities and corporations. Document references with citations.",
    emoji: "🧠",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://doclime.com/",
    tags: ["document analysis", "lightning-fast", "universities", "corporations", "citations", "research", "Data Analysis", "Citation Management", "document assistant", "document analyzer", "data analysis", "data analyzer"],
    category: "Document & Research Tools",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Copy,
    title: "Duplichecker",
    description: "Comprehensive content management suite. Plagiarism checker, grammar checker, paraphrasing tool, reverse image search. Multiple languages, SEO tools included.",
    emoji: "🔍",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.duplichecker.com/",
    tags: ["plagiarism checker", "grammar", "paraphrasing", "reverse image", "multiple languages", "SEO", "Fact Checking", "Academic Writing"],
    category: "Document & Research Tools",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Search,
    title: "Elicit",
    description: "Cutting-edge research tool automating paper summarization, data extraction. 200 million papers database. One-sentence summaries, organized tables, theme synthesis.",
    emoji: "🔬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://elicit.com/",
    tags: ["research automation", "200M papers", "summarization", "data extraction", "theme synthesis", "Literature Review", "Paper Summarization", "Academic Search"],
    category: "Document & Research Tools",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Award,
    title: "Enhancv",
    description: "Resume Builder for landing positions at Tesla, Google, Facebook, Spotify, Amazon. ATS-friendly, 250+ checks, Resume Tailoring feature. Professional templates.",
    emoji: "🏆",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://enhancv.com/",
    tags: ["resume builder", "Tesla", "Google", "Facebook", "ATS-friendly", "250+ checks", "Academic Writing"],
    category: "Document & Research Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: BookOpen,
    title: "BooksAI.app",
    description: "AI-generated book summaries and recommendations. 40+ million summaries available. Nine languages support, celebrity book lists, digital reading list creation.",
    emoji: "📚",
    color: "from-green-500 to-teal-600",
    directUrl: "https://booksai.app/",
    tags: ["40M summaries", "9 languages", "celebrity lists", "digital reading", "recommendations", "Paper Summarization", "Learning Platform"],
    category: "Document & Research Tools",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: Users,
    title: "JustCluck.com",
    description: "Comprehensive AI tools suite for Business, Social Media, SEO, Blog Tools, Personal Development, E-Commerce. Diverse AI-powered solutions for efficiency.",
    emoji: "🐓",
    color: "from-orange-500 to-red-600",
    directUrl: "https://justcluck.com/business-tools/",
    tags: ["business tools", "social media", "SEO tools", "blog tools", "personal development", "e-commerce", "Data Analysis"],
    category: "Document & Research Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
