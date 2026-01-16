
import { Tool } from "@/types/tools";
import { 
  Video,
  Sparkles,
  Gamepad2,
  Bot,
  Mic,
  Film,
  Brain,
  Globe,
  Cpu,
  Code,
  Music,
  Camera,
  Settings,
  Zap,
  Eye,
  Car,
  CircuitBoard,
  Layers,
  Cloud,
  Palette
} from "lucide-react";

// Import hero images
import gameNgenHero from "@/assets/tools/gamengen-hero.png";
import vloggerGoogleHero from "@/assets/tools/vlogger-google-hero.png";
import genieDeepMindHero from "@/assets/tools/genie-deepmind-hero.png";
import vasa1Hero from "@/assets/tools/vasa-1-hero.png";
import mochaMetaHero from "@/assets/tools/mocha-meta-hero.png";
import dreamer4Hero from "@/assets/tools/dreamer-4-hero.png";
import yanAiHero from "@/assets/tools/yan-ai-hero.png";
import producerAiHero from "@/assets/tools/producer-ai-hero.png";
import elevenLabsMusicHero from "@/assets/tools/elevenlabs-music-hero.png";
import githubSparkHero from "@/assets/tools/github-spark-hero.png";
import orionOpenAiHero from "@/assets/tools/orion-openai-hero.png";
import claudeChromeHero from "@/assets/tools/claude-for-chrome-hero.png";
import learnAboutGoogleHero from "@/assets/tools/learn-about-google-hero.png";
import imagenVideoHero from "@/assets/tools/imagen-video-hero.png";
import vidi2Hero from "@/assets/tools/vidi2-hero.png";
import simaGoogleHero from "@/assets/tools/sima-google-hero.png";
import fugattoHero from "@/assets/tools/fugatto-nvidia-hero.png";
import framesRunwayHero from "@/assets/tools/frames-runway-hero.png";
import tesslHero from "@/assets/tools/tessl-hero.png";
import sketch2SoundHero from "@/assets/tools/sketch2sound-adobe-hero.png";
import corleoKawasakiHero from "@/assets/tools/corleo-kawasaki-hero.png";
import worldLabsHero from "@/assets/tools/world-labs-hero.png";
import jarvisMicrosoftHero from "@/assets/tools/jarvis-microsoft-hero.png";
import googleVidsHero from "@/assets/tools/google-vids-hero.png";
import vallEHero from "@/assets/tools/vall-e-hero.png";
import torsoCloneHero from "@/assets/tools/torso-clone-robotics-hero.png";
import appleGptHero from "@/assets/tools/apple-gpt-hero.png";
import googleTitansHero from "@/assets/tools/google-titans-miras-hero.png";
import sima2Hero from "@/assets/tools/sima-2-hero.png";
import cloudflareAiValueHero from "@/assets/tools/cloudflare-ai-value-hero.png";
import projectDigitsHero from "@/assets/tools/project-digits-hero.png";
import learnLmHero from "@/assets/tools/learnlm-google-hero.png";
import genCastHero from "@/assets/tools/gencast-hero.png";
import boximatorHero from "@/assets/tools/boximator-hero.png";
import teslaRobotaxiHero from "@/assets/tools/tesla-robotaxi-hero.png";
import dreaMovingHero from "@/assets/tools/dreamoving-hero.png";
import copilotWorkspaceHero from "@/assets/tools/github-copilot-workspace-hero.png";
import makeAVideoHero from "@/assets/tools/make-a-video-hero.png";
import simulonHero from "@/assets/tools/simulon-hero.png";
import morpheus1Hero from "@/assets/tools/morpheus-1-hero.png";
import meta3dGenHero from "@/assets/tools/meta-3d-gen-hero.png";
import adobeProjectConceptHero from "@/assets/tools/adobe-project-concept-hero.png";
import xPortrait2Hero from "@/assets/tools/x-portrait-2-hero.png";

export const futureToolsBatch2025Q2: Tool[] = [
  // === GAME AI & SIMULATION ===
  {
    icon: Gamepad2,
    title: "GameNgen",
    description: "A revolutionary AI game engine powered entirely by neural networks, capable of simulating DOOM in real-time. It offers impressive visual quality and opens up new possibilities for AI-driven game development.",
    emoji: "🎮",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://gamengen.github.io/?via=aiwebtools",
    imageUrl: gameNgenHero,
    tags: ["AI game engine", "DOOM simulation", "neural game", "future tools", "games", "AI gaming", "real-time simulation"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Video,
    title: "VLOGGER by Google",
    description: "VLOGGER is a Google AI project capable of creating a realistic video avatar from a simple photo, controllable by voice! Generate lifelike talking head videos with natural expressions.",
    emoji: "📹",
    color: "from-blue-500 to-red-600",
    directUrl: "https://enriccorona.github.io/vlogger/?via=aiwebtools",
    imageUrl: vloggerGoogleHero,
    tags: ["Google AI", "avatar generation", "talking head", "video avatar", "future tools", "video generation"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 2900
  },
  {
    icon: Gamepad2,
    title: "Genie by DeepMind",
    description: "An AI model capable of autonomously creating the entire universe of a video game from a prompt (text-to-game). Revolutionary game world generation from Google DeepMind.",
    emoji: "🧞",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://sites.google.com/view/genie-2024/?via=aiwebtools",
    imageUrl: genieDeepMindHero,
    tags: ["DeepMind", "text-to-game", "game generation", "world model", "future tools", "AI gaming", "games"],
    category: "Gaming & Entertainment",
    rating: 4.7,
    totalVotes: 2100
  },
  {
    icon: Eye,
    title: "VASA-1 by Microsoft",
    description: "An AI project that generates realistic talking faces from an image or audio clip. Perfect lip-synchronization, emotions, facial movements with impressive realism from Microsoft Research.",
    emoji: "👁️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.microsoft.com/en-us/research/project/vasa-1/?via=aiwebtools",
    imageUrl: vasa1Hero,
    tags: ["Microsoft", "talking face", "lip sync", "facial AI", "future tools", "LLM models", "avatar"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 5100
  },
  {
    icon: Video,
    title: "MoCha by Meta",
    description: "A Meta project to create talking avatars from text and audio recordings. Control emotions and actions, and create multi-character compositions with realistic expressions.",
    emoji: "🎭",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://ai.meta.com/research/publications/mocha-motion-generation-and-co-ordination/?via=aiwebtools",
    imageUrl: mochaMetaHero,
    tags: ["Meta AI", "talking avatars", "motion generation", "avatar", "future tools", "character animation"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 6300
  },
  {
    icon: Brain,
    title: "Dreamer 4",
    description: "Generate realistic videos or simulations of environments and agents. Dreamer4 uses deep reinforcement learning to explore and model complex world dynamics.",
    emoji: "🌙",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://danijar.com/project/dreamerv3/?via=aiwebtools",
    imageUrl: dreamer4Hero,
    tags: ["AI simulation", "reinforcement learning", "world model", "future tools", "environment AI", "Dreamer"],
    category: "Video & Multimedia",
    rating: 4.4,
    totalVotes: 4300
  },
  {
    icon: Video,
    title: "Yan AI",
    description: "Interactive, real-time, scalable video simulations: smooth at 1080p/60 fps, multimodal generation from images or text, and advanced scene understanding.",
    emoji: "🎬",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://yan.ai/?via=aiwebtools",
    imageUrl: yanAiHero,
    tags: ["AI simulation", "real-time video", "multimodal", "future tools", "video simulation", "1080p"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 5500
  },
  {
    icon: Music,
    title: "Producer.ai",
    description: "Create high-quality, trendy songs with this AI music producer. Compose, remix, and explore new sounds easily with conversational AI interfaces.",
    emoji: "🎹",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://producer.ai/?via=aiwebtools",
    imageUrl: producerAiHero,
    tags: ["music production", "AI composer", "song creation", "future tools", "music", "remix"],
    category: "Audio & Music",
    rating: 4.4,
    totalVotes: 6100
  },
  {
    icon: Music,
    title: "ElevenLabs Music",
    description: "From a simple text description, generate complete songs without any editing. Get high-quality music in just seconds with ElevenLabs' AI music generation.",
    emoji: "🎵",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://elevenlabs.io/music/?via=aiwebtools",
    imageUrl: elevenLabsMusicHero,
    tags: ["ElevenLabs", "AI music", "text to music", "song generation", "future tools", "music"],
    category: "Audio & Music",
    rating: 5.0,
    totalVotes: 6100
  },
  {
    icon: Code,
    title: "GitHub Spark",
    description: "Create micro-applications without needing to know how to code. Describe your idea in natural language, customize the design and prototype instantly with AI.",
    emoji: "✨",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://githubnext.com/projects/github-spark/?via=aiwebtools",
    imageUrl: githubSparkHero,
    tags: ["GitHub", "no code", "AI coding", "micro apps", "future tools", "low code", "natural language programming"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 4300
  },
  {
    icon: Brain,
    title: "Orion by OpenAI",
    description: "A new language model in development, more powerful than GPT-4. Uses 'Strawberry' AI to generate high-quality training data for next-generation capabilities.",
    emoji: "🌟",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://openai.com/?via=aiwebtools",
    imageUrl: orionOpenAiHero,
    tags: ["OpenAI", "GPT successor", "LLM", "future tools", "AI model", "Strawberry"],
    category: "AI Assistants",
    rating: 4.0,
    totalVotes: 3300
  },
  {
    icon: Globe,
    title: "Claude for Chrome",
    description: "Automate your web tasks directly in Chrome with AI that reads, clicks, and navigates websites for you. Summarize pages, draft emails, and interact with web content seamlessly.",
    emoji: "🌐",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.anthropic.com/claude/chrome-extension/?via=aiwebtools",
    imageUrl: claudeChromeHero,
    tags: ["Anthropic", "Chrome extension", "browser AI", "web automation", "future tools", "Claude", "extensions ChatGPT"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 6600
  },
  {
    icon: Sparkles,
    title: "Learn About by Google",
    description: "An experimental educational tool from Google. Ask questions, upload documents and explore a variety of topics with an AI assistant that simplifies complex subjects.",
    emoji: "📚",
    color: "from-blue-500 to-green-600",
    directUrl: "https://learning.google/experiments/learn-about/?via=aiwebtools",
    imageUrl: learnAboutGoogleHero,
    tags: ["Google", "education", "learning AI", "AI useful", "education/studies", "future tools"],
    category: "Education & Learning",
    rating: 4.9,
    totalVotes: 4300
  },
  {
    icon: Video,
    title: "Imagen Video (Beta)",
    description: "Generation of videos from texts by Google DeepMind. High-fidelity video synthesis using cascaded video diffusion models.",
    emoji: "🎥",
    color: "from-red-500 to-yellow-600",
    directUrl: "https://imagen.research.google/video/?via=aiwebtools",
    imageUrl: imagenVideoHero,
    tags: ["Google", "text to video", "video diffusion", "future tools", "video generators"],
    category: "Video & Multimedia",
    rating: 5.0,
    totalVotes: 500
  },
  {
    icon: Video,
    title: "Vidi2",
    description: "Understand and edit your videos with precise spatio-temporal localization, object detection, and comprehensive editing instructions from this advanced video AI.",
    emoji: "📽️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.vidi2.ai/?via=aiwebtools",
    imageUrl: vidi2Hero,
    tags: ["video editing", "object detection", "spatio-temporal", "future tools", "video generators"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 5400
  },
  {
    icon: Gamepad2,
    title: "SIMA AI by Google",
    description: "An incredible AI capable of playing video games like a human. A true gaming partner from Google DeepMind that learns and adapts to game environments.",
    emoji: "🎮",
    color: "from-cyan-500 to-teal-600",
    directUrl: "https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/?via=aiwebtools",
    imageUrl: simaGoogleHero,
    tags: ["Google DeepMind", "game AI", "gaming agent", "future tools", "games", "3D environments"],
    category: "Gaming & Entertainment",
    rating: 4.5,
    totalVotes: 5000
  },
  {
    icon: Music,
    title: "Fugatto by Nvidia",
    description: "Transform your texts and audio files into never-before-heard sounds with this 2.5 billion-parameter AI model. Modify voices, create effects, and explore new audio frontiers.",
    emoji: "🔊",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/fugatto/?via=aiwebtools",
    imageUrl: fugattoHero,
    tags: ["Nvidia", "audio AI", "sound generation", "audio editing", "future tools", "voice modification"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 3600
  },
  {
    icon: Film,
    title: "Frames by Runway",
    description: "An image generator for ultra-precise stylistic control. Create coherent visual universes and explore different variations while maintaining consistent aesthetics.",
    emoji: "🖼️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://runwayml.com/research/introducing-frames/?via=aiwebtools",
    imageUrl: framesRunwayHero,
    tags: ["Runway", "image generation", "style control", "future tools", "image generators", "visual universe"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 4100
  },
  {
    icon: Code,
    title: "Tessl",
    description: "A fully automated solution where AI codes and maintains your software from your specifications. Create robust applications in minutes without writing code.",
    emoji: "🧩",
    color: "from-violet-500 to-indigo-600",
    directUrl: "https://tessl.io/?via=aiwebtools",
    imageUrl: tesslHero,
    tags: ["AI coding", "automated development", "no code", "future tools", "software automation"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 4300
  },
  {
    icon: Music,
    title: "Sketch2Sound by Adobe",
    description: "An audio generator that creates high-quality sounds from text descriptions. Control tone, volume and brightness using time signal sketches.",
    emoji: "🎨",
    color: "from-red-500 to-pink-600",
    directUrl: "https://adobe-research.github.io/sketch2sound/?via=aiwebtools",
    imageUrl: sketch2SoundHero,
    tags: ["Adobe", "audio generation", "sound design", "audio editing", "future tools", "text to audio"],
    category: "Audio & Music",
    rating: 4.5,
    totalVotes: 3600
  },
  {
    icon: Car,
    title: "CORLEO Kawasaki",
    description: "A four-legged hydrogen-powered robotic vehicle that revolutionizes off-road mobility. Controlled by the rider's body movements and leveraging advanced AI navigation.",
    emoji: "🤖",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.kawasaki.com/en-us/news/corleo/?via=aiwebtools",
    imageUrl: corleoKawasakiHero,
    tags: ["Kawasaki", "robotics", "hydrogen vehicle", "future tools", "mobility", "robots and devices"],
    category: "Robotics & Hardware",
    rating: 4.3,
    totalVotes: 5500
  },
  {
    icon: Globe,
    title: "World Labs",
    description: "A technology that transforms your images into 3D scenes that can be explored in your browser. Add camera effects, change the lighting and navigate freely.",
    emoji: "🌍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.worldlabs.ai/?via=aiwebtools",
    imageUrl: worldLabsHero,
    tags: ["3D generation", "image to 3D", "AI simulation", "future tools", "spatial AI", "world generation"],
    category: "3D Modeling",
    rating: 4.8,
    totalVotes: 6100
  },
  {
    icon: Bot,
    title: "Jarvis (Microsoft)",
    description: "An autonomous personal assistant driven by an AI. Developed by the Microsoft team, Jarvis can handle complex tasks and multi-step workflows autonomously.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.microsoft.com/en-us/research/project/jarvis/?via=aiwebtools",
    imageUrl: jarvisMicrosoftHero,
    tags: ["Microsoft", "AI assistant", "autonomous agent", "AI agents", "future tools", "personal AI"],
    category: "AI Agents",
    rating: 4.9,
    totalVotes: 2900
  },
  {
    icon: Video,
    title: "Google Vids",
    description: "An AI application for creating pro videos automatically. Write, produce and edit a video clip from your browser. Coming soon with Gemini integration.",
    emoji: "📹",
    color: "from-red-500 to-yellow-600",
    directUrl: "https://workspace.google.com/products/vids/?via=aiwebtools",
    imageUrl: googleVidsHero,
    tags: ["Google", "video creation", "AI video", "future tools", "video generators", "workspace"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 3000
  },
  {
    icon: Mic,
    title: "VALL-E",
    description: "Microsoft's neural codec language model that can reproduce a voice perfectly from just a 3-second audio sample. Revolutionary voice cloning technology.",
    emoji: "🎤",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://www.microsoft.com/en-us/research/project/vall-e-x/?via=aiwebtools",
    imageUrl: vallEHero,
    tags: ["Microsoft", "voice cloning", "TTS", "future tools", "voice synthesis", "neural codec"],
    category: "Audio & Music",
    rating: 4.3,
    totalVotes: 400
  },
  {
    icon: CircuitBoard,
    title: "Torso Clone Robotics",
    description: "A humanoid robot torso dedicated to AI research. Explore the possibilities of artificial intelligence with this robotic torso featuring muscles and precision movement.",
    emoji: "🦾",
    color: "from-gray-600 to-slate-700",
    directUrl: "https://clonerobotics.com/?via=aiwebtools",
    imageUrl: torsoCloneHero,
    tags: ["robotics", "humanoid robot", "AI research", "future tools", "robots and devices", "Clone Robotics"],
    category: "Robotics & Hardware",
    rating: 4.4,
    totalVotes: 4100
  },
  {
    icon: Bot,
    title: "Apple GPT",
    description: "A generative AI assistant with capabilities similar to ChatGPT created by Apple. Currently in the planning stage, expected to integrate deeply with Apple ecosystem.",
    emoji: "🍎",
    color: "from-gray-500 to-gray-700",
    directUrl: "https://www.apple.com/apple-intelligence/?via=aiwebtools",
    imageUrl: appleGptHero,
    tags: ["Apple", "AI assistant", "Apple Intelligence", "future tools", "chatbot"],
    category: "AI Assistants",
    rating: 5.0,
    totalVotes: 4200
  },
  {
    icon: Brain,
    title: "Google Titans+MIRAS",
    description: "An AI architecture with integrated long-term memory, selective updating based on a surprise signal, and context extended to 2 million tokens. Next-generation transformer technology.",
    emoji: "🧠",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://research.google/blog/titans-learning-to-memorize-at-test-time/?via=aiwebtools",
    imageUrl: googleTitansHero,
    tags: ["Google", "AI architecture", "long-term memory", "developer tools", "future tools", "transformer"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 5500
  },
  {
    icon: Gamepad2,
    title: "SIMA 2",
    description: "Control an AI agent that learns, reasons, and plays live in virtual 3D worlds. SIMA2 includes natural language instructions, emojis, and advanced game understanding.",
    emoji: "🎮",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/?via=aiwebtools",
    imageUrl: sima2Hero,
    tags: ["Google DeepMind", "AI agent", "3D worlds", "AI simulation", "future tools", "games"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 5900
  },
  {
    icon: Cloud,
    title: "Cloudflare AI Value Tool",
    description: "A tool in development to help website owners monetize access to their content through AI models. Control who can scan your site and generate revenue from AI training.",
    emoji: "☁️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.cloudflare.com/ai/?via=aiwebtools",
    imageUrl: cloudflareAiValueHero,
    tags: ["Cloudflare", "AI monetization", "content protection", "developer tools", "future tools"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 3300
  },
  {
    icon: Cpu,
    title: "Project DIGITS",
    description: "A supercomputer that can run AI models with up to 200 billion parameters. Train and test your models locally with the GB10 chip from Nvidia.",
    emoji: "💻",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.nvidia.com/en-us/project-digits/?via=aiwebtools",
    imageUrl: projectDigitsHero,
    tags: ["Nvidia", "AI hardware", "supercomputer", "future tools", "robots and devices", "GB10"],
    category: "Robotics & Hardware",
    rating: 4.9,
    totalVotes: 6100
  },
  {
    icon: Sparkles,
    title: "LearnLM by Google",
    description: "A series of generative AI models created by Google for the world of education. Ideal for facilitating and personalizing the educational experience with AI tutoring.",
    emoji: "📖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://ai.google.dev/gemini-api/docs/learnlm/?via=aiwebtools",
    imageUrl: learnLmHero,
    tags: ["Google", "education AI", "learning models", "education/studies", "future tools", "tutoring"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 3100
  },
  {
    icon: Globe,
    title: "GenCast",
    description: "A weather forecasting system that predicts atmospheric conditions with unrivalled accuracy. Anticipates extreme events up to 10 days in advance using AI.",
    emoji: "🌦️",
    color: "from-blue-400 to-cyan-500",
    directUrl: "https://deepmind.google/discover/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/?via=aiwebtools",
    imageUrl: genCastHero,
    tags: ["Google DeepMind", "weather AI", "forecasting", "future tools", "research & science"],
    category: "Research & Academic",
    rating: 4.5,
    totalVotes: 3300
  },
  {
    icon: Video,
    title: "Boximator by ByteDance",
    description: "An impressive AI video generator for precise motion control. Ideal for controlling motion in videos with box-based trajectory specification.",
    emoji: "📦",
    color: "from-pink-500 to-red-600",
    directUrl: "https://boximator.github.io/?via=aiwebtools",
    imageUrl: boximatorHero,
    tags: ["ByteDance", "video generation", "motion control", "future tools", "video generators"],
    category: "Video & Multimedia",
    rating: 4.4,
    totalVotes: 1900
  },
  {
    icon: Car,
    title: "Tesla Robotaxi",
    description: "A range of autonomous, futuristic Robotaxi vehicles (without steering wheel or pedals). Enjoy safe, affordable transportation thanks to Tesla's Full Self-Driving technology.",
    emoji: "🚕",
    color: "from-red-500 to-gray-700",
    directUrl: "https://www.tesla.com/we-robot/?via=aiwebtools",
    imageUrl: teslaRobotaxiHero,
    tags: ["Tesla", "autonomous vehicle", "robotaxi", "future tools", "self-driving", "transportation"],
    category: "Robotics & Hardware",
    rating: 4.7,
    totalVotes: 5300
  },
  {
    icon: Video,
    title: "DreaMoving",
    description: "Take your photos to the next level with DreaMoving by animating them, even in high resolution. Uses diffusion model techniques for realistic motion synthesis.",
    emoji: "🌀",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://dreamoving.github.io/dreamoving/?via=aiwebtools",
    imageUrl: dreaMovingHero,
    tags: ["image animation", "diffusion model", "motion synthesis", "future tools", "image editing"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 5500
  },
  {
    icon: Code,
    title: "GitHub Copilot Workspace",
    description: "Develop your code wherever you are with GitHub Copilot Workspace. This intuitive environment makes it easy to iterate, validate and run code with AI assistance.",
    emoji: "💻",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://githubnext.com/projects/copilot-workspace/?via=aiwebtools",
    imageUrl: copilotWorkspaceHero,
    tags: ["GitHub", "Copilot", "code workspace", "assistant code", "future tools", "AI coding"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 5500
  },
  {
    icon: Video,
    title: "Make-A-Video (Meta)",
    description: "A promising AI-based video generator from Meta. Generate videos from text descriptions using state-of-the-art diffusion technology.",
    emoji: "🎬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://makeavideo.studio/?via=aiwebtools",
    imageUrl: makeAVideoHero,
    tags: ["Meta", "text to video", "video generation", "future tools", "AI video"],
    category: "Video & Multimedia",
    rating: 4.0,
    totalVotes: 500
  },
  {
    icon: Camera,
    title: "Simulon",
    description: "An AI tool that transforms the way VFX is designed on mobile devices. Import 3D models into your videos for stunning cinematic rendering in real-time.",
    emoji: "🎥",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://www.simulon.ai/?via=aiwebtools",
    imageUrl: simulonHero,
    tags: ["VFX", "3D rendering", "mobile VFX", "3D model", "future tools", "cinematic"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Brain,
    title: "Morpheus-1 by Prophetic AI",
    description: "A surprising AI model designed to induce and stabilize lucid dreams. Ideal for exploring and controlling dreams through neural interface technology.",
    emoji: "💤",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://propheticai.co/?via=aiwebtools",
    imageUrl: morpheus1Hero,
    tags: ["dream AI", "lucid dreaming", "neural interface", "amazing", "future tools", "consciousness"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 1500
  },
  {
    icon: Layers,
    title: "Meta 3D Gen",
    description: "An AI project for rapidly generating realistic 3D models via a single prompt. This tool from Meta combines asset and texture generation for instant 3D creation.",
    emoji: "🎯",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://ai.meta.com/research/publications/meta-3d-gen/?via=aiwebtools",
    imageUrl: meta3dGenHero,
    tags: ["Meta", "3D generation", "text to 3D", "future tools", "3D models", "asset generation"],
    category: "3D Modeling",
    rating: 4.7,
    totalVotes: 2400
  },
  {
    icon: Palette,
    title: "Adobe Project Concept",
    description: "An experimental AI project to stimulate your creativity. Quickly explore multiple artistic directions, mix images and transform your concepts into stunning visuals.",
    emoji: "🎨",
    color: "from-red-500 to-purple-600",
    directUrl: "https://www.adobe.com/products/project-concept.html/?via=aiwebtools",
    imageUrl: adobeProjectConceptHero,
    tags: ["Adobe", "creative AI", "image mixing", "future tools", "artistic exploration"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 2700
  },
  {
    icon: Video,
    title: "X-Portrait 2",
    description: "Turn your photos into animated videos with an AI tool that faithfully reproduces facial expressions, head movements and emotions from source video.",
    emoji: "🖼️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://byteaigc.github.io/X-Portrait2/?via=aiwebtools",
    imageUrl: xPortrait2Hero,
    tags: ["portrait animation", "facial AI", "video editing", "future tools", "photo animation"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 5400
  }
];
