import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  BookOpen, 
  Edit3, 
  Type, 
  Feather,
  Scroll,
  Book,
  Pen,
  Sparkles,
  Eye,
  Film
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: Scroll,
    title: "Movie Script Writer GPT",
    description: "Unlock your creative potential with Movie Scriptwriter GPT, the ultimate AI assistant designed to help you write award-winning movie scripts. Whether you're planning scenes or developing characters, our AI supports you through each stage of the scriptwriting process. It provides professional formatting, detailed descriptions, and captivating dialogue, ensuring your script meets industry standards. Ideal for both new writers and experienced filmmakers, this tool brings your story to life on screen. Begin your path to the red carpet with Movie Scriptwriter GPT. You can use the Original Version 1 by clicking here (V1) Updated on 9/29/24 to Version 2 — now offering the ability to download each scene for your records.",
    emoji: "📝",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtube.com/shorts/IVoy-B4GkXU?si=0HxBQ5i3TcluZth9",
    tags: ["script writing", "movie scripts", "professional formatting", "character development", "industry standards", "Script Writing", "Creative Writing"],
    category: "Writing & Content",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Film,
    title: "ScreenPlay Writer",
    description: "Professional screenplay writing assistant powered by AI. Create compelling screenplays with proper formatting, character development, and industry-standard structure for film and television.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://screenplaywritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/screenplay-writer-hero.png",
    tags: ["screenplay", "screenwriting", "film writing", "television", "script formatting", "character development", "story structure", "Script Writing", "Creative Writing"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3245
  },
  {
    icon: Book,
    title: "BOOK WRITER GPT",
    description: "Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.",
    emoji: "📚",
    color: "from-brown-500 to-orange-600",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/nBd9Uk62UiI",
    tags: ["book writing", "page-to-page continuity", "engaging dialogue", "storytelling", "professional books", "Book Writing", "Creative Writing"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3892
  },
  {
    icon: Sparkles,
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection. Additionally, it can execute tasks flawlessly based on the generated prompts. Prompt Perfect Engine is your #1 personal prompt engineer, designed to fit in your pocket and ensure your success.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/M1PQHKrzKd8",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    tags: ["prompt optimization", "prompt engineering", "task execution", "productivity", "AI assistance", "Prompt Engineering"],
    category: "Writing & Content",
    rating: 4.8,
    totalVotes: 4234
  },
  {
    icon: Eye,
    title: "Clarity Omni GPT",
    description: "Clarity Omni GPT is an AI tool designed to rewrite text for improved clarity while preserving the original meaning and intent. It can either maintain the exact wording of the input or make adjustments to the wording, tone, and structure to enhance readability. Regardless of the approach, this AI ensures that every detail is retained, delivering a refined version of the text that stays true to the user's purpose.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    tags: ["writing", "clarity", "readability", "content optimization", "omni", "analysis", "Grammar & Editing"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 2876
  }
];
