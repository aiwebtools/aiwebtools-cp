import { Tool } from "@/types/tools";
import { 
  Code, Cpu, Database, Globe, Zap, Brain, 
  Settings, Terminal, Github, Cloud,
  Wrench, Cog, BookOpen, GraduationCap
} from "lucide-react";

export const aiDevelopmentAndPlatforms: Tool[] = [
  {
    icon: Youtube,
    title: "Anything LLM",
    description: "Run LLMs locally on your PC and select from all the latest LLM models. Similar to LM Studio for local AI deployment.",
    emoji: "🖥️",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=gd4xkmzLWSQ",
    directUrl: "https://anythingllm.com/",
    tags: ["local AI", "LLM", "models", "desktop", "offline", "machine learning"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "BIG-AGI",
    description: "An innovative AI suite for accessing cutting-edge AI technology, focusing on productivity and user data control.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000003211.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true/qt=q:98",
    directUrl: "https://get.big-agi.com/",
    tags: ["AI interface", "model management", "workflow", "productivity", "multiple models"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Bolt.New",
    description: "AI-powered web development platform to create, run, edit, and deploy full-stack applications from the browser.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-high-tech-office-with-mu.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://bolt.new/?rid=iewkqu",
    tags: ["web development", "full-stack", "browser", "coding", "deployment"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "BuildAI.Space",
    description: "Build your own AI-enhanced applications effortlessly by simply describing it. Platform for no-code AI development.",
    emoji: "🏗️",
    color: "from-purple-500 to-blue-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377361060364816444/image.png?ex=6838aef2&is=68375d72&hm=5decaed233bbd7a01789666a0883196d15fb739e6f223406db095f63d424f7c7",
    directUrl: "https://gumroad.com/a/815886803/cahfki",
    tags: ["AI building", "no-code", "deployment", "platform", "development"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "ChatRTX by NVIDIA",
    description: "Personalize a GPT LLM connected to your own content (docs, notes). Runs locally on Windows RTX PCs with 8GB+ VRAM.",
    emoji: "💬",
    color: "from-green-500 to-black-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/rtxchat%20pic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    directUrl: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/",
    tags: ["local AI", "NVIDIA", "RTX", "chatbot", "graphics card", "privacy"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "Claude 3.5 Sonnet",
    description: "Advanced AI model family (Haiku, Sonnet, Opus) by Anthropic, setting new benchmarks in cognitive tasks with large context windows.",
    emoji: "🤖",
    color: "from-orange-500 to-red-500",
    videoUrl: "https://www.youtube.com/watch?v=oqUclC3gqKs",
    directUrl: "https://claude.ai/",
    tags: ["AI assistant", "conversation", "analysis", "reasoning", "anthropic", "chat"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "Customizable GPT Maker",
    description: "A customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations.",
    emoji: "🛠️",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    tags: ["custom GPT", "data analysis", "web data", "visualization", "customization"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "Assists with GPT ideas and instructions for creating custom GPTs with innovative use cases and implementation strategies.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    tags: ["brainstorming", "ideas", "custom GPT", "creativity", "innovation"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "GEMINI/GOOGLE AI STUDIO (Gemini LIVE 2.0)",
    description: "Cutting-edge multimodal API by Google for real-time interaction across text, voice, video, and screen sharing. Powers Gemini Live.",
    emoji: "🎯",
    color: "from-blue-500 to-green-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "http://g.co/g1referral/911Z9NTK",
    tags: ["multimodal", "real-time", "voice", "video", "Google", "live interaction"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "GodMode GPT",
    description: "A versatile AI companion designed to transform and meet various needs with advanced capabilities and flexibility.",
    emoji: "⚡",
    color: "from-purple-500 to-gold-500",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    tags: ["versatile AI", "multi-purpose", "advanced", "flexible", "companion"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "GROK",
    description: "AI model developed by X.AI with real-time information access and conversational capabilities.",
    emoji: "🤖",
    color: "from-black-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=LTE8js7y-ss",
    directUrl: "https://grok.com/",
    tags: ["AI assistant", "real-time", "conversation", "xAI", "elon musk", "twitter"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Groq",
    description: "Platform to use Mistral and Llama LLMs; free, fast, and efficient, comparable to GPT-3.5 Turbo with ultra-fast inference.",
    emoji: "⚡",
    color: "from-blue-500 to-green-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377356378594873427/image.png?ex=6838aa96&is=68375916&hm=6055b10a7b77314902941a3c85bc62fca7c4dbc8419cb2a038c69cf5f9c74026&",
    directUrl: "https://groq.com/",
    tags: ["fast inference", "AI processing", "speed", "performance", "real-time"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Hugging Face Chat",
    description: "Use various large language models without a paid membership. Design and deploy AI assistants with AI Humanizer powered by Nvidia Nemotron 70B.",
    emoji: "🤗",
    color: "from-yellow-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005663.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    directUrl: "https://huggingface.co/chat/",
    tags: ["open source", "models", "chat", "research", "huggingface"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "LM STUDIO – Run AI Locally & Download Models",
    description: "Download hundreds of AI tools and run them locally on your computer without internet connection required.",
    emoji: "💻",
    color: "from-black-500 to-gray-500",
    videoUrl: "https://www.youtube.com/watch?v=yBI1nPep72Q",
    directUrl: "https://lmstudio.ai/",
    tags: ["local AI", "models", "desktop", "privacy", "offline", "download"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Llama by META (Llama 3.1)",
    description: "Open-source AI model available in 8B, 70B, and 405B versions for fine-tuning and deployment with advanced language capabilities.",
    emoji: "🦙",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/converted_image.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    directUrl: "https://llama.meta.com/",
    tags: ["open source", "language model", "META", "AI development", "facebook"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "LMSYS CHATBOT ARENA",
    description: "Platform for benchmarking LLMs through anonymous, randomized chatbot duels. Compare models like GPT-4, Grok-2, Mistral Large.",
    emoji: "⚔️",
    color: "from-red-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-and-electrifying-advertisement-fe.png/:/rs=w:600,cg:true,m/qt=q:98",
    directUrl: "https://arena.lmsys.org/",
    tags: ["AI comparison", "chatbots", "testing", "evaluation", "benchmark"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Lovable.dev",
    description: "AI-powered platform to transform ideas into functional web applications without coding, using natural language. Integrates with Supabase.",
    emoji: "💖",
    color: "from-pink-500 to-purple-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/loveable.dev.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    tags: ["web development", "no-code", "natural language", "supabase", "deployment"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "Merlin AI",
    description: "All-in-one AI extension powered by GPT-4, Claude 100k, and Llama 2 models. Integrates into workflows for writing, summarizing, coding.",
    emoji: "🧙‍♂️",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=rDrG5DqCCgY",
    directUrl: "https://app.getmerlin.in/plans?ref=mte1mgu4",
    tags: ["browser extension", "productivity", "research", "AI assistant"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Mistral",
    description: "Chatbot comparable to GPT-4 and Claude 2, free to use with strong reasoning capabilities and advanced language understanding.",
    emoji: "🌟",
    color: "from-orange-500 to-red-500",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377358724829810719/image.png?ex=6838acc6&is=68375b46&hm=ab683553ec132d326caf50834883a32cdf8e3230bfa35299cf360227757a75fc&=&format=webp&quality=lossless&width=2848&height=1002",
    directUrl: "https://chat.mistral.ai/chat",
    tags: ["language model", "reasoning", "AI assistant", "advanced", "french ai"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "MULTITASKER GPT",
    description: "Advanced AI that handles multiple unrelated tasks simultaneously with efficiency and accuracy.",
    emoji: "🎯",
    color: "from-green-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    tags: ["multitasking", "efficiency", "multiple tasks", "productivity", "workflow"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "PINOKIO.COMPUTER",
    description: "Install multiple different AI applications and run them locally on your computer with easy management interface.",
    emoji: "🖥️",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/blob.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1152,cg:true",
    directUrl: "https://pinokio.computer/",
    tags: ["local AI", "desktop", "installation", "management", "interface"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "TheFreedomGPT – Uncensored & Decentralized Chat Tool",
    description: "Uncensored and decentralized chat tool. Also powers Phone GPT for AI Phone Agents with unrestricted conversations.",
    emoji: "🆓",
    color: "from-red-500 to-black-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352651477614672/image.png?ex=6838a71e&is=6837559e&hm=b0dc0aa8fe73a8d3efe08a0bc3e4ac5f04c4bc743d1310505f53e80e933e573a&",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    tags: ["uncensored", "decentralized", "freedom", "chat", "open source"],
    category: "AI Development & Platforms"
  },
  {
    icon: Youtube,
    title: "AI Tools Finder GPT",
    description: "Discover and find the perfect AI tools for your needs. Search through comprehensive databases of AI applications and services.",
    emoji: "🛠️",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    tags: ["AI tools", "discovery", "search", "productivity", "finder", "database"],
    category: "AI Development & Platforms"
  },
  {
    icon: Wrench,
    title: "Engineering GPT AI Suite",
    description: "Comprehensive engineering AI assistant for all disciplines. Get expert help with mechanical, electrical, civil, software, and other engineering challenges with advanced problem-solving capabilities.",
    emoji: "⚙️",
    color: "from-blue-500 to-gray-600",
    category: "AI Development & Platforms",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["engineering", "technical", "problem solving", "design", "analysis"],
    rating: 4.4,
    totalVotes: 3245
  },
  {
    icon: Brain,
    title: "Nikola Tesla GPT",
    description: "Channel the genius of Nikola Tesla for innovative engineering and scientific insights. Explore electricity, magnetism, wireless technology, and futuristic inventions with Tesla's brilliant mind.",
    emoji: "⚡",
    color: "from-purple-500 to-blue-600",
    category: "AI Development & Platforms",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    tags: ["Tesla", "innovation", "electricity", "science", "genius"],
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: GraduationCap,
    title: "LEARN ANY COURSE GPT",
    description: "Master any subject with personalized AI tutoring. Get comprehensive course guidance, learning plans, and expert instruction across all academic disciplines and professional skills.",
    emoji: "📚",
    color: "from-green-500 to-blue-600",
    category: "AI Development & Platforms",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    tags: ["education", "learning", "courses", "tutoring", "skills"],
    rating: 4.3,
    totalVotes: 2945
  }
];
