import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Users, 
  Building2, 
  Vote, 
  Gavel,
  Shield,
  BookOpen,
  UserCheck,
  AlertTriangle
} from "lucide-react";

export const governmentCivicGPTs: Tool[] = [
  {
    icon: Vote,
    title: "Legislator Link GPT",
    description: "This music video is inspired by a true story. In response to Connecticut's ban on CBD shops, as a former CBD shop owner, I've developed an AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts.",
    emoji: "🏛️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["legislation", "government", "civic engagement", "democracy", "legislators", "political", "advocacy", "aiwebtools"],
    category: "Government & Civic",
    rating: 4.5,
    totalVotes: 2867
  },
  {
    icon: Shield,
    title: "AI Legal Assistant GPT",
    description: "AI Legal Assistant GPT is an advanced AI tool designed to provide comprehensive legal support and guidance. It offers assistance in understanding legal concepts, drafting documents, and navigating legal processes.",
    emoji: "⚖️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://aiweblegal.lovable.app/?via=aiwebtools",
    tags: ["legal", "law", "legal advice", "legal assistance", "legal documents", "legal support", "aiwebtools"],
    category: "Legal & Government",
    rating: 4.4,
    totalVotes: 2754
  },
  {
    icon: BookOpen,
    title: "AI Book Summarizer GPT",
    description: "AI Book Summarizer GPT is an innovative tool that provides concise summaries of books, extracting key insights and themes. It's designed to help users quickly grasp the essence of a book, saving time and enhancing comprehension.",
    emoji: "📚",
    color: "from-orange-500 to-red-600",
    directUrl: "https://aibooksummarizer.lovable.app/?via=aiwebtools",
    tags: ["book summary", "summarizer", "book insights", "reading", "aiwebtools"],
    category: "Education & Learning",
    rating: 4.3,
    totalVotes: 2643
  },
  {
    icon: UserCheck,
    title: "AI Resume GPT",
    description: "AI Resume GPT is a cutting-edge tool designed to help you create a professional and effective resume. It offers personalized suggestions, formatting assistance, and keyword optimization to help you stand out in the job market.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://airesume.lovable.app/?via=aiwebtools",
    tags: ["resume", "job search", "career", "resume builder", "aiwebtools"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 3123
  },
  {
    icon: AlertTriangle,
    title: "Emergency GPT",
    description: "Emergency GPT is a critical tool designed to provide immediate assistance and guidance during emergencies. It offers step-by-step instructions, safety tips, and resources to help you navigate crisis situations effectively.",
    emoji: "🚨",
    color: "from-red-500 to-orange-600",
    directUrl: "https://emergencygpt.lovable.app/?via=aiwebtools",
    tags: ["emergency", "first aid", "safety", "crisis", "aiwebtools"],
    category: "Emergency Services",
    rating: 4.7,
    totalVotes: 3234
  }
];
