
import { Tool } from "@/types/tools";
import { 
  Shield, 
  Search, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Chrome
} from "lucide-react";

export const contentDetectionTools: Tool[] = [
  {
    icon: Shield,
    title: "The Checker AI",
    description: "Revolutionizing education through AI innovation. Ensures authenticity of student work with 99.7% accuracy rate. Member of EduLink AI family, setting new standards in academic integrity.",
    emoji: "🛡️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.aicheatcheck.com/",
    tags: ["academic integrity", "AI detection", "education", "99.7% accuracy", "student work", "authenticity"],
    category: "Content Detection Tools",
    rating: 4.8,
    totalVotes: 3456
  },
  {
    icon: Eye,
    title: "Content At Scale AI Detector",
    description: "Leading AI content detection with 98% accuracy. Identifies content from ChatGPT, GPT-4, Bard, Claude and more. Trained on billions of pages with sentence-level analysis.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://contentatscale.ai/ai-content-detector/",
    tags: ["AI detection", "98% accuracy", "ChatGPT", "GPT-4", "content analysis", "sentence-level"],
    category: "Content Detection Tools",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: AlertTriangle,
    title: "GPT-2 Output Detector",
    description: "Free web tool for detecting GPT-2 generated text. Still effective for GPT-3 and similar models. Valuable resource for identifying AI-generated content and transparency.",
    emoji: "⚠️",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://openai-openai-detector--6w8v9.hf.space/",
    tags: ["GPT-2 detection", "free tool", "plagiarism detector", "AI content", "transparency", "outdated"],
    category: "Content Detection Tools",
    rating: 3.8,
    totalVotes: 2134
  },
  {
    icon: Chrome,
    title: "Detect GPT",
    description: "Chrome extension analyzing web content for AI-generated text. Visual indicators show AI vs human content. Paste text feature for quick authenticity assessment.",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chrome.google.com/webstore/detail/detectgpt-detect-chat-gpt/oadkgbgppkhoaaoepjbcnjejmkknaobg",
    tags: ["Chrome extension", "AI detection", "visual indicators", "web content", "authenticity", "browser tool"],
    category: "Content Detection Tools",
    rating: 4.2,
    totalVotes: 2876
  }
];
