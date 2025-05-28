import { Tool } from "@/types/tools";
import {
  Video, Film, Camera, Play, Edit, Clapperboard,
  Mic, Music, Headphones, Volume2, Settings,
  Wand2, Sparkles, Zap, Star, Trophy, Award,
  Crown, Diamond, Rocket, Heart, Smile, Coffee,
  Gift, Cake, PartyPopper, Palette, Brush,
  PenTool, Scissors, ImageIcon, Gamepad2,
  Target, Lightbulb, Globe, Users, TrendingUp,
  BarChart3, FileText, Briefcase, Building,
  Search, Monitor, Youtube, UserCheck, BookOpen
} from "lucide-react";

export const videoTools: Tool[] = [
  {
    icon: Video,
    title: "InVideo AI",
    description: "Create professional videos with AI assistance. Transform text into engaging video content with automated editing and production.",
    emoji: "🎥",
    color: "from-red-500 to-purple-500",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377349795445739520/image.png?ex=6838a475&is=683752f5&hm=4e72fe93f1d3e8f1641da970546dbad34b8b2726a7e0fb9022dfcee4c612e4a8&=&format=webp&quality=lossless&width=2848&height=1206",
    directUrl: "https://invideo.sjv.io/k0kMbn",
    tags: ["video creation", "AI video", "editing", "content", "text to video", "accessibility"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "PixVerse AI",
    description: "Generate and edit videos with AI-powered tools. Create dynamic video content with automated editing and visual effects.",
    emoji: "📹",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377359320823500861/image.png?ex=6838ad54&is=68375bd4&hm=ceee738c816c8c0266ae87d3e2a23a67a23510b1bec01bea948744dfc3149612&",
    directUrl: "https://pixverse.ai/",
    tags: ["video generation", "AI video", "editing", "effects", "creation", "animation", "image to video"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "SORA – OPENAI's Video Generation Model",
    description: "Generate high-quality videos from text descriptions using OpenAI's advanced video AI model.",
    emoji: "🎥",
    color: "from-green-500 to-blue-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377360868613820609/image.png?ex=6838aec5&is=68375d45&hm=b944d49b82b4779a88a1e4cd5d895f84867b12d9ce9fc12fa3641b32f6828117&",
    directUrl: "http://www.sora.com/",
    tags: ["video generation", "OpenAI", "text to video", "AI video", "sora"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "KLING Video Generator",
    description: "Generate professional videos with advanced AI technology. Create high-quality video content from text descriptions and prompts.",
    emoji: "📹",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377365031859130488/image.png?ex=6838b2a5&is=68376125&hm=87457ee910dab0a591c01ce0eece6a413e9cdd1e2505aa961250315823ddb490&",
    directUrl: "https://klingai.com/",
    tags: ["video generation", "AI video", "professional", "content", "chinese ai", "text to video"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "LUMA DREAM MACHINE - TEXT TO VIDEO GENERATOR",
    description: "Transform text descriptions into stunning videos with Luma's Dream Machine AI technology.",
    emoji: "🌟",
    color: "from-purple-500 to-pink-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377366717532999710/image.png?ex=6838b437&is=683762b7&hm=7637a7614ee14474abe314383e91481e3d5c43dc9445d0085e8c042f7bdbed35&",
    directUrl: "https://lumalabs.ai/dream-machine",
    tags: ["text to video", "AI video", "dream machine", "generation", "luma"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "GOOGLE VEO 3 Video & FX Generator – Video with Sound Generation",
    description: "Create videos with sound effects and audio using Google's advanced VEO 3 AI technology for comprehensive multimedia generation.",
    emoji: "🎥",
    color: "from-red-500 to-blue-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377367549376729088/image.png?ex=6838b4fe&is=6837637e&hm=5e0adb734d3dfd56244543427ec52bd8fb031ff6962424935198ce1e977b22e9&",
    directUrl: "https://labs.google/fx/tools/flow",
    tags: ["video generation", "sound effects", "Google", "multimedia", "veo", "FX", "flow"],
    category: "Video & Animation Creation"
  },
  {
    icon: Video,
    title: "Music Video Maker AI Studio",
    description: "Create professional music videos with AI assistance. Generate visual content synchronized with audio tracks and musical elements.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-dynamic-product-advertisement-showcase_TiaF.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    tags: ["music videos", "video creation", "AI production", "multimedia", "music"],
    category: "Video & Animation Creation"
  },
  {
    icon: UserCheck,
    title: "Hey Gen – Interactive Avatar Creation Hub",
    description: "Advanced AI avatar creation platform for interactive video content, digital presenters, and personalized video experiences.",
    emoji: "👥",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://app.heygen.com/guest/home?sid=rewardful&via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377360265238155334/image.png?ex=6838ae35&is=68375cb5&hm=0707c33ddc6e2d86638158d89c26611517049cd508cd73468072bfec6fda488c&",
    tags: ["interactive avatars", "digital presenters", "personalized video", "avatar creation", "video experiences"],
    category: "Video Tools",
    rating: 4.3,
    totalVotes: 2456
  },
  {
    icon: Search,
    title: "Video Second-by-Second Analysis GPT",
    description: "Advanced video analysis tool for detailed frame-by-frame examination. Analyze video content, extract insights, identify objects, and perform comprehensive video data analysis.",
    emoji: "🔍",
    color: "from-red-500 to-purple-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["video analysis", "frame analysis", "content examination", "video data", "detailed analysis"],
    category: "Video Tools",
    rating: 4.2,
    totalVotes: 2345
  }
];
