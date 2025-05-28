
import { Tool } from "@/types/tools";
import { 
  Bot, Code, Cpu, Zap, Settings, Wrench, Database,
  Cloud, Server, GitBranch, Terminal, Brain, Rocket,
  Star, Trophy, Crown, Shield, Globe, Users, Building
} from "lucide-react";

export const aiDevelopmentAndPlatforms: Tool[] = [
  {
    icon: Bot,
    title: "GROK",
    description: "Advanced AI assistant by xAI with real-time information access and cutting-edge conversational capabilities for complex problem-solving.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://grok.com/",
    videoUrl: "https://www.youtube.com/watch?v=LTE8js7y-ss",
    tags: ["AI assistant", "real-time", "conversational AI", "xAI", "advanced"],
    category: "AI Development & Platforms",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Brain,
    title: "BIG-AGI",
    description: "Comprehensive AI platform with multiple AI models and advanced features for developers and power users.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://get.big-agi.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000003211.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["AI platform", "multiple models", "developers", "advanced features", "power users"],
    category: "AI Development & Platforms",
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Cpu,
    title: "ChatRTX by NVIDIA",
    description: "Local AI chat assistant powered by NVIDIA RTX technology for enhanced privacy and performance.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/rtxchat%20pic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["local AI", "NVIDIA", "RTX", "privacy", "performance"],
    category: "AI Development & Platforms",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Bot,
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "Generate creative ideas and brainstorm custom GPT concepts. Get inspiration for unique AI applications and custom chatbot development.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    tags: ["custom GPT", "brainstorming", "ideas", "chatbot development", "AI applications"],
    category: "AI Development & Platforms",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Shield,
    title: "TheFreedomGPT – Uncensored & Decentralized Chat Tool",
    description: "Decentralized and uncensored AI chat platform for free expression and open dialogue without restrictions.",
    emoji: "🔓",
    color: "from-red-500 to-purple-600",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352651477614672/image.png?ex=6838a71e&is=6837559e&hm=b0dc0aa8fe73a8d3efe08a0bc3e4ac5f04c4bc743d1310505f53e80e933e573a&",
    tags: ["uncensored", "decentralized", "free expression", "open dialogue", "privacy"],
    category: "AI Development & Platforms",
    rating: 4.0,
    totalVotes: 1654
  },
  {
    icon: Code,
    title: "Cheatlayer Project Atlas (SWARM BETA)",
    description: "Advanced automation platform with AI-powered workflow creation and task automation for complex business processes.",
    emoji: "🔧",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://cheatlayer.com/?ref=zta2nth",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352898715062323/image.png?ex=6838a759&is=683755d9&hm=d32c66c79d433b9835b19ebebb6c63553d1647f77c44eb10217104d200df597c&",
    tags: ["automation", "workflow", "business processes", "AI-powered", "complex tasks"],
    category: "AI Development & Platforms",
    rating: 4.2,
    totalVotes: 2123
  },
  {
    icon: Users,
    title: "Hugging Face Chat",
    description: "Open-source AI chat platform with access to various language models and community-driven AI development.",
    emoji: "🤗",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://huggingface.co/chat/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005663.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["open source", "language models", "community", "AI development", "chat"],
    category: "AI Development & Platforms",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: Brain,
    title: "Sophia Aeterna AI",
    description: "Philosophical AI companion for deep conversations, wisdom exploration, and intellectual discourse on life's profound questions.",
    emoji: "🏛️",
    color: "from-gold-500 to-purple-600",
    directUrl: "https://sophiaaeterna.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["philosophy", "wisdom", "intellectual discourse", "deep conversations", "companion"],
    category: "AI Development & Platforms",
    rating: 4.2,
    totalVotes: 1876
  },
  {
    icon: Zap,
    title: "Groq",
    description: "Ultra-fast AI inference platform with lightning-speed response times for real-time AI applications.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://groq.com/",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377356378594873427/image.png?ex=6838aa96&is=68375916&hm=6055b10a7b77314902941a3c85bc62fca7c4dbc8419cb2a038c69cf5f9c74026&",
    tags: ["fast inference", "real-time", "high performance", "AI applications", "speed"],
    category: "AI Development & Platforms",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Bot,
    title: "BotSonic",
    description: "Advanced chatbot creation platform with AI-powered conversational abilities and custom bot development tools.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://writesonic.com/botsonic?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CzQdnpFawKI",
    tags: ["chatbot", "conversational AI", "bot development", "custom bots", "AI-powered"],
    category: "AI Development & Platforms",
    rating: 4.1,
    totalVotes: 2234
  },
  {
    icon: Brain,
    title: "Mistral",
    description: "Advanced open-source AI language model with sophisticated reasoning capabilities and multilingual support.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chat.mistral.ai/chat",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377358724829810719/image.png?ex=6838acc6&is=68375b46&hm=ab683553ec132d326caf50834883a32cdf8e3230bfa35299cf360227757a75fc&=&format=webp&quality=lossless&width=2848&height=1002",
    tags: ["open source", "language model", "multilingual", "reasoning", "advanced"],
    category: "AI Development & Platforms",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: Globe,
    title: "GOOGLE LABS & GOOGLE FLOW",
    description: "Experimental AI tools and research projects from Google, featuring cutting-edge AI technologies and innovative applications.",
    emoji: "🧪",
    color: "from-red-500 to-blue-600",
    directUrl: "https://labs.google/",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377359942578864258/image.png?ex=6838ade8&is=68375c68&hm=2c5d8dca1bb48660d84d1b8c6152d535a0b3ee3b8efb6f162286901003896fc4&",
    tags: ["experimental", "Google", "research", "cutting-edge", "innovation"],
    category: "AI Development & Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Building,
    title: "BuildAI.Space",
    description: "AI development platform and marketplace for building, sharing, and monetizing AI applications and tools.",
    emoji: "🏗️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://gumroad.com/a/815886803/cahfki",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377361060364816444/image.png?ex=6838aef2&is=68375d72&hm=5decaed233bbd7a01789666a0883196d15fb739e6f223406db095f63d424f7c7&",
    tags: ["AI development", "marketplace", "monetization", "applications", "platform"],
    category: "AI Development & Platforms",
    rating: 4.0,
    totalVotes: 1543
  }
];
