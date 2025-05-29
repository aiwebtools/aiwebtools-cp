
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Video, 
  Music, 
  Pen, 
  Camera, 
  Film, 
  Brush, 
  Wand2,
  Play,
  Edit,
  Sparkles,
  Crown
} from "lucide-react";

export const creativeSuites: Tool[] = [
  {
    icon: Film,
    title: "Movie Maker Studio AI SUITE",
    description: "Complete AI-powered movie production suite with scriptwriting, storyboarding, editing, and post-production tools for creating professional films and videos.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
    tags: ["movie making", "video production", "AI suite", "filmmaking", "post-production"],
    category: "Creative Suites",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "TEXT TO VIDEO PROMPTER GPT",
    description: "Advanced text-to-video prompt engineering tool for creating effective prompts for video generation AI platforms like Sora, Runway ML, and other video AI tools.",
    emoji: "📹",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    tags: ["text to video", "prompt engineering", "video generation", "AI prompts", "video creation"],
    category: "Creative Suites",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Music,
    title: "Music Video Maker AI Studio",
    description: "Create professional music videos with AI-powered editing, effects, and synchronization tools for musicians and content creators.",
    emoji: "🎵",
    color: "from-green-500 to-blue-600",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8&list=TLGGHKS5WME8OJ8yODA1MjAyNQ",
    tags: ["music videos", "video editing", "AI effects", "synchronization", "music production"],
    category: "Creative Suites",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Crown,
    title: "STAGEMASTER AI SUITE FOR THE Performing Arts",
    description: "Comprehensive suite for performing arts including stage design, lighting, choreography, and production management for theater and live performances.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    tags: ["performing arts", "stage design", "theater production", "choreography", "live performance"],
    category: "Creative Suites",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Pen,
    title: "Movie Script Writer GPT",
    description: "Professional screenplay and script writing assistant for creating compelling movie scripts, dialogue, and narrative structures.",
    emoji: "📝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    tags: ["screenplay writing", "script creation", "dialogue", "narrative structure", "screenwriting"],
    category: "Creative Suites",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Brush,
    title: "Sketch Artist GPT",
    description: "Professional digital sketching and drawing assistant. Create detailed sketches, concept art, character designs, and artistic illustrations with AI-powered guidance.",
    emoji: "✏️",
    color: "from-gray-500 to-purple-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-sketch-ar.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:300,cg:true",
    tags: ["digital sketching", "concept art", "character design", "drawing", "illustration"],
    category: "Creative Suites",
    rating: 4.3,
    totalVotes: 2543
  },
  {
    icon: Palette,
    title: "Graphic & Cover Design GPT",
    description: "Professional graphic design assistant for creating book covers, marketing materials, logos, and visual branding with expert design principles.",
    emoji: "🎨",
    color: "from-pink-500 to-red-600",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/2e70f2ce-b17e-4b0f-b5d3-f36c9c22a2e3.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    tags: ["graphic design", "cover design", "logos", "visual branding", "marketing materials"],
    category: "Creative Suites",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Play,
    title: "Movie Scene Maker GPT",
    description: "Create detailed movie scenes with professional cinematography guidance, shot composition, and scene development for filmmakers and content creators.",
    emoji: "🎬",
    color: "from-blue-500 to-green-600",
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    tags: ["movie scenes", "cinematography", "shot composition", "scene development", "filmmaking"],
    category: "Creative Suites",
    rating: 4.4,
    totalVotes: 2789
  },
  {
    icon: Edit,
    title: "🎭 Playwriter GPT",
    description: "Professional playwriting assistant for creating theatrical scripts, stage directions, character development, and dramatic structure for live theater.",
    emoji: "🎭",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI&list=TLGGGcedR_qZHHYyODA1MjAyNQ",
    tags: ["playwriting", "theatrical scripts", "stage directions", "character development", "theater"],
    category: "Creative Suites",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Sparkles,
    title: "Coloring Book Generator GPT",
    description: "Create engaging coloring books with custom designs, educational themes, and age-appropriate content for children and adults.",
    emoji: "🖍️",
    color: "from-rainbow-500 to-pink-600",
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-coloring-page-of-a-robot-with-a-human-like-b.png/:/cr=t:4.3%25,l:0.78%25,w:94.34%25,h:84.09%25/rs=w:1200,h:600,cg:true,m",
    tags: ["coloring books", "custom designs", "educational content", "art therapy", "creative activities"],
    category: "Creative Suites",
    rating: 4.2,
    totalVotes: 2456
  }
];
