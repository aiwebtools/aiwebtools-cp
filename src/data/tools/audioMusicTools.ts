import { Tool } from "@/types/tools";
import { 
  Music, Headphones, Mic, Volume2, Radio, 
  Speaker, Disc, Video, Piano, Guitar,
  Drum, Zap, Star, Heart, Play, Pause,
  SkipForward, SkipBack, Shuffle, Repeat
} from "lucide-react";

export const audioMusicTools: Tool[] = [
  {
    icon: Music,
    title: "SUNO AI MUSIC GENERATOR",
    description: "Revolutionary AI music creation platform. Generate original songs, melodies, and complete musical compositions across all genres with advanced AI technology.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://suno.com/invite/@aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377357075260244098/image.png?ex=6838ab3c&is=683759bc&hm=1aa91ac7fb3fe0b9ff7844bc8e7de4121e2aaafac7b474707398367c99068b55&",
    tags: ["AI music", "song generation", "composition", "melodies", "original music"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Piano,
    title: "Music Melodies & Lessons GPT",
    description: "Comprehensive music education and melody creation assistant. Learn music theory, composition techniques, and create beautiful melodies with AI guidance.",
    emoji: "🎹",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["music education", "melody creation", "music theory", "composition", "lessons"],
    category: "Audio & Music Tools",
    rating: 4.3,
    totalVotes: 2678
  },
  {
    icon: Music,
    title: "UDIO MUSIC Generator",
    description: "Advanced AI music generation platform for creating high-quality musical compositions, beats, and soundtracks with professional-grade output.",
    emoji: "🎶",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.udio.com/home",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377364206441070592/image.png?ex=6838b1e1&is=68376061&hm=4872d401aedf46706d1213c2a93ce9ca260725cec15f98b2186eb25746fda56f&",
    tags: ["AI music", "professional", "compositions", "beats", "soundtracks"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Video,
    title: "MiniMax Video & Music Generator",
    description: "Dual-purpose AI platform for creating both video content and musical compositions with synchronized audio-visual generation capabilities.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://hailuoai.video/",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377364574084399265/image.png?ex=6838b238&is=683760b8&hm=20d61dcb4ae8f474612c5f535cc50ed50eb70eacac600ffd40866e30475f67de&",
    tags: ["video generation", "music generation", "synchronized", "audio-visual", "dual-purpose"],
    category: "Audio & Music Tools",
    rating: 4.2,
    totalVotes: 2789
  },
  {
    icon: Mic,
    title: "Eleven Labs Text to Speech & Sound Effect Generation Platform",
    description: "Professional AI voice synthesis and sound effect generation platform with realistic voice cloning and audio production capabilities.",
    emoji: "🎤",
    color: "from-orange-500 to-red-600",
    directUrl: "https://elevenlabs.io/?from=kennybastian5304",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377368060364849193/image.png?ex=6838b577&is=683763f7&hm=5d7af47618e4e284baa269ee596a3b68f2ee26e23dd13ed84be94a092aff4f44&",
    tags: ["text to speech", "voice synthesis", "sound effects", "voice cloning", "audio production"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3789
  }
];
