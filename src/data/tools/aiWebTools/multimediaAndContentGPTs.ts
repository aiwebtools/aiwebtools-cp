
import { Tool } from "@/types/tools";
import { Mic, Video, Image, FileText, Headphones, Camera, Music, Film, Edit, Play } from "lucide-react";

export const multimediaAndContentGPTs: Tool[] = [
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Podcast Script Writer GPT specializes in crafting engaging, structured, and professionally formatted podcast scripts and episode outlines. This AI-powered tool efficiently transforms ideas into compelling narratives optimized specifically for audio storytelling, ensuring each script captures audience attention and enhances listener experience.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["podcast", "script writing", "audio content", "storytelling", "content creation"],
    category: "Multimedia & Content",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "Video Second-by-Second Analysis GPT",
    description: "Video Second-by-Second Analysis GPT breaks down your footage with incredible precision, analyzing every second and extracting key visual frames for detailed insight. Just upload your video, and this AI tool will guide you through a step-by-step review of each moment—highlighting actions, people, objects, and scene changes. It's also a powerful resource for training and fine-tuning Vision-Language Models (VLMs), offering structured, labeled visual data with contextual analysis. Ideal for creators, analysts, educators, researchers, and investigators who need deep clarity from their video content.",
    emoji: "📹",
    color: "from-red-500 to-purple-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["video analysis", "frame extraction", "video processing", "content analysis", "video research"],
    category: "Multimedia & Content",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Image,
    title: "Sketch Artist GPT",
    description: "Sketch Artist GPT is your AI-powered sketch art assistant, turning images or text descriptions into clean, high-resolution sketches using advanced Python and DALLE technology. Whether you're uploading a photo or describing an idea, Sketch Artist GPT delivers precise, professional sketches ready for creative use.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["sketch art", "digital drawing", "image conversion", "artistic sketches", "creative design"],
    category: "Multimedia & Content",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: FileText,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite and bam! 🎯",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["content rewriting", "SEO optimization", "blog writing", "article creation", "content marketing"],
    category: "Multimedia & Content",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Music,
    title: "Music Melodies & Lessons GPT",
    description: "Music Melodies & Lessons GPT is your ultimate musical companion, here to inspire and guide you on your musical journey. Whether you're learning to play an instrument, perfecting your vocals, or writing your own songs, I provide step-by-step guidance, accurate lyrics, and easy-to-follow tablature. I tailor lessons to your goals, help you master techniques, and offer personalized advice on instrument selection and sound improvement. From beginners to experienced musicians, I'm here to make learning fun, creative, and engaging, helping you achieve your musical dreams with clarity and ease.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["music education", "music lessons", "songwriting", "instrument learning", "musical training"],
    category: "Multimedia & Content",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Play,
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Whether you have a concept or need inspiration, create original, engaging plays designed to captivate audiences.",
    emoji: "🎭",
    color: "from-red-500 to-purple-600",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI&list=TLGGGcedR_qZHHYyODA1MjAyNQ",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298129782575217/playwrite.webp",
    tags: ["theatrical writing", "play creation", "script writing", "dramatic arts", "theater"],
    category: "Multimedia & Content",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Edit,
    title: "Children's Picture Book Maker GPT",
    description: "Create Magical Picture Books for Children Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.",
    emoji: "📚",
    color: "from-orange-500 to-pink-600",
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    tags: ["children's books", "storytelling", "illustration", "creative writing", "book creation"],
    category: "Multimedia & Content",
    rating: 4.8,
    totalVotes: 6789
  }
];
