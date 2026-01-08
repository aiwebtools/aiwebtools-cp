
import { Tool } from "@/types/tools";
import { 
  CheckCircle, 
  BookOpen, 
  Eye,
  Languages,
  MessageSquare
} from "lucide-react";

export const grammarAndWritingAssistants: Tool[] = [
  {
    icon: CheckCircle,
    title: "Grammarly",
    description: "AI-powered writing assistant that helps improve grammar, spelling, clarity, and tone. Real-time suggestions for better writing across all platforms.",
    emoji: "✅",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.grammarly.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/grammarly-hero.png",
    tags: ["grammar check", "writing assistant", "spell check", "tone", "clarity", "Grammar & Editing"],
    category: "Writing & Content Enhancement",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Languages,
    title: "DeepL Write",
    description: "AI writing assistant that helps improve and perfect your writing. Fix grammar, enhance clarity, and refine tone with advanced language models.",
    emoji: "🌐",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.deepl.com/write?via=aiwebtools",
    imageUrl: "/src/assets/tools/deepl-write-hero.png",
    tags: ["writing improvement", "grammar", "clarity", "tone refinement", "DeepL", "Grammar & Editing"],
    category: "Writing & Content Enhancement",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: BookOpen,
    title: "Wordtune",
    description: "AI writing companion that understands context and suggests ways to rewrite sentences. Improve clarity, tone, and style of your writing.",
    emoji: "📖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.wordtune.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/wordtune-hero.png",
    tags: ["sentence rewriting", "context understanding", "clarity", "tone", "style", "Grammar & Editing", "Creative Writing"],
    category: "Writing & Content Enhancement",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: MessageSquare,
    title: "QuillBot",
    description: "AI paraphrasing tool that rewrites text while maintaining meaning. Features grammar checker, summarizer, and citation generator.",
    emoji: "💬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://quillbot.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/quillbot-hero.png",
    tags: ["paraphrasing", "grammar check", "summarizer", "citations", "text rewriting", "Grammar & Editing", "Academic Writing"],
    category: "Writing & Content Enhancement",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Eye,
    title: "Hemingway Editor",
    description: "Writing app that helps make your text clear and concise. Highlights complex sentences, passive voice, and suggests improvements for readability.",
    emoji: "👁️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://hemingwayapp.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/hemingway-hero.png",
    tags: ["readability", "clear writing", "concise text", "sentence complexity", "passive voice", "Grammar & Editing"],
    category: "Writing & Content Enhancement",
    rating: 4.3,
    totalVotes: 2654
  }
];
