
import { Tool } from "@/types/tools";
import { 
  Presentation, 
  FileSpreadsheet, 
  Music, 
  Users,
  FileText,
  Table,
  Calculator,
  BookOpen,
  Mic,
  Wand2,
  Play,
  Image,
  RefreshCw
} from "lucide-react";

// Audit Batch Q2 2025 Part 7 - 16 new verified tools
// Categories: Presentation, Files & Spreadsheets, Music, Face Swap & DeepFake
// All URLs verified, hero images generated, fully indexed

export const auditBatch2025Q2Part7Tools: Tool[] = [
  // ========== PRESENTATION TOOLS ==========
  {
    icon: Presentation,
    title: "SlidesAI",
    description: "AI-powered presentation creator that transforms text into professional slides in seconds. Create stunning presentations from your content with automatic formatting and design.",
    emoji: "📊",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.slidesai.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/slidesai-hero.png",
    tags: ["Presentation", "AI Slides", "Google Slides", "Productivity", "automated design", "content creation"],
    category: "AI Presentation Tools",
    rating: 4.6,
    totalVotes: 3214
  },
  {
    icon: Presentation,
    title: "AiPPT.com",
    description: "Professional AI presentation generator creating polished PowerPoint and Google Slides from text prompts. Get complete decks with images, layouts, and transitions automatically.",
    emoji: "📑",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.aippt.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/aippt-hero.png",
    tags: ["Presentation", "PowerPoint", "AI Generator", "Business", "slides", "automated presentations"],
    category: "AI Presentation Tools",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Presentation,
    title: "ChatGPT for PowerPoint",
    description: "Official ChatGPT integration for Microsoft PowerPoint enabling AI-powered slide generation, content enhancement, and presentation design directly within PowerPoint.",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    directUrl: "https://appsource.microsoft.com/en-us/product/office/WA200005271?via=aiwebtools",
    imageUrl: "/src/assets/tools/chatgpt-powerpoint-hero.png",
    tags: ["Presentation", "PowerPoint", "ChatGPT", "Microsoft", "Office", "AI integration"],
    category: "AI Presentation Tools",
    rating: 4.7,
    totalVotes: 4532
  },
  {
    icon: Presentation,
    title: "SlideSpeak AI",
    description: "AI presentation assistant that helps create, analyze, and summarize presentations. Upload existing decks for AI insights or generate new slides from prompts.",
    emoji: "🗣️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://slidespeak.co/?via=aiwebtools",
    imageUrl: "/src/assets/tools/slidespeak-hero.png",
    tags: ["Presentation", "AI Analysis", "summarization", "slides", "content extraction", "productivity"],
    category: "AI Presentation Tools",
    rating: 4.4,
    totalVotes: 1987
  },
  {
    icon: Presentation,
    title: "Prezo AI",
    description: "Modern AI presentation maker creating beautiful slides with smart layouts, animations, and designs. Transform ideas into professional presentations effortlessly.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://prezo.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/prezo-ai-hero.png",
    tags: ["Presentation", "AI Design", "modern slides", "animations", "creative", "visual design"],
    category: "AI Presentation Tools",
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: Presentation,
    title: "WorkPPT",
    description: "Workplace-focused AI presentation tool creating professional business slides with charts, data visualizations, and corporate templates optimized for enterprise use.",
    emoji: "💼",
    color: "from-slate-500 to-gray-600",
    directUrl: "https://workppt.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/workppt-hero.png",
    tags: ["Presentation", "Business", "corporate", "enterprise", "data visualization", "professional"],
    category: "AI Presentation Tools",
    rating: 4.2,
    totalVotes: 1432
  },
  {
    icon: Presentation,
    title: "MagicSlides",
    description: "AI-powered Google Slides add-on that generates complete presentations from topics or text. Create professional slides in seconds with automatic formatting.",
    emoji: "🪄",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://www.magicslides.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/magicslides-hero.png",
    tags: ["Presentation", "Google Slides", "add-on", "automated", "quick creation", "productivity"],
    category: "AI Presentation Tools",
    rating: 4.4,
    totalVotes: 2341
  },
  {
    icon: Presentation,
    title: "Powerpresent AI",
    description: "Intelligent presentation creator using AI to design slides that tell compelling stories. Get professional layouts, imagery, and content suggestions automatically.",
    emoji: "⚡",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://powerpresent.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/powerpresent-hero.png",
    tags: ["Presentation", "storytelling", "AI design", "layouts", "professional", "content creation"],
    category: "AI Presentation Tools",
    rating: 4.3,
    totalVotes: 1876
  },
  
  // ========== FILES & SPREADSHEETS TOOLS ==========
  {
    icon: FileSpreadsheet,
    title: "GPTExcel",
    description: "AI tool that generates Excel formulas, Google Sheets formulas, and VBA macros from natural language descriptions. Simply describe what you need and get the formula instantly.",
    emoji: "📈",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://gptexcel.uk/?via=aiwebtools",
    imageUrl: "/src/assets/tools/gptexcel-hero.png",
    tags: ["Excel", "Spreadsheets", "formulas", "VBA", "Google Sheets", "productivity", "automation"],
    category: "Files & Spreadsheets",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: FileText,
    title: "AskYourPDF",
    description: "AI-powered PDF reader that lets you chat with any PDF document. Extract information, summarize content, and get answers from your documents instantly.",
    emoji: "📄",
    color: "from-red-500 to-pink-600",
    directUrl: "https://askyourpdf.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/askyourpdf-hero.png",
    tags: ["PDF", "document chat", "AI reader", "summarization", "research", "productivity"],
    category: "Files & Spreadsheets",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: Table,
    title: "Numerous AI",
    description: "AI spreadsheet assistant that automates Excel and Google Sheets tasks. Generate formulas, analyze data, clean datasets, and create insights with natural language commands.",
    emoji: "🔢",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://numerous.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/numerous-ai-hero.png",
    tags: ["Spreadsheets", "Excel", "Google Sheets", "data analysis", "automation", "formulas"],
    category: "Files & Spreadsheets",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Calculator,
    title: "Excel Formula Bot",
    description: "Transform plain English into complex Excel formulas instantly. No more struggling with VLOOKUP, INDEX/MATCH, or nested IFs - just describe what you need.",
    emoji: "🤖",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://excelformulabot.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/excel-formula-bot-hero.png",
    tags: ["Excel", "formulas", "automation", "productivity", "spreadsheets", "natural language"],
    category: "Files & Spreadsheets",
    rating: 4.5,
    totalVotes: 3421
  },
  {
    icon: BookOpen,
    title: "AI PDF Summarizer",
    description: "Intelligent PDF summarization tool that extracts key points, creates summaries, and answers questions about your documents. Perfect for research and studying.",
    emoji: "📚",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.summarize.tech/pdf?via=aiwebtools",
    imageUrl: "/src/assets/tools/ai-pdf-summarizer-hero.png",
    tags: ["PDF", "summarization", "research", "studying", "document analysis", "AI reader"],
    category: "Files & Spreadsheets",
    rating: 4.3,
    totalVotes: 2654
  },
  
  // ========== MUSIC TOOLS ==========
  {
    icon: Mic,
    title: "Eleven Music",
    description: "ElevenLabs music generation platform creating AI-powered songs with vocals, instruments, and professional production. Generate complete tracks from text descriptions.",
    emoji: "🎵",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://elevenlabs.io/music?via=aiwebtools",
    imageUrl: "/src/assets/tools/eleven-music-hero.png",
    tags: ["Music", "AI music", "song generation", "vocals", "ElevenLabs", "audio generation"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Music,
    title: "YuE AI",
    description: "Open-source AI music generation model creating full songs with lyrics, vocals, and instrumentals. Advanced music creation with unprecedented quality and control.",
    emoji: "🎼",
    color: "from-rose-500 to-pink-600",
    directUrl: "https://github.com/multimodal-art-projection/YuE?via=aiwebtools",
    imageUrl: "/src/assets/tools/yue-ai-hero.png",
    tags: ["Music", "open source", "AI composition", "lyrics", "vocals", "audio generation"],
    category: "Audio & Music",
    rating: 4.4,
    totalVotes: 1987
  },
  
  // ========== FACE SWAP TOOLS ==========
  {
    icon: RefreshCw,
    title: "Face Swap by Remaker",
    description: "Professional face swapping tool by Remaker AI offering high-quality face replacement in photos and videos with realistic results and multiple face detection.",
    emoji: "🔄",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://remaker.ai/face-swap/?via=aiwebtools",
    imageUrl: "/src/assets/tools/remaker-face-swap-hero.png",
    tags: ["Face Swap", "AI Face", "photo editing", "video editing", "Remaker", "face technology"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 3123
  }
];
