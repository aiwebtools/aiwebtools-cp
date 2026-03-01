import { Tool } from "@/types/tools";
import { Bot, Cpu, Zap, Building, Users, Wrench, Gamepad2, Brain, Eye, Factory, Star, Dna, Activity, Palette, Gauge } from "lucide-react";
import palRoboticsHero from "@/assets/tools/pal-robotics-hero.jpg";
import ubtechRoboticsHero from "@/assets/tools/ubtech-robotics-hero.jpg";
import oneXTechHero from "@/assets/tools/1x-tech-hero.jpg";
import cloneRoboticsHero from "@/assets/tools/clone-robotics-hero.jpg";
import apptronikHero from "@/assets/tools/apptronik-hero.jpg";
import unitreeHero from "@/assets/tools/unitree-robotics-hero.jpg";
import figureAiHero from "@/assets/tools/figure-ai-hero.jpg";
import teslaBotHero from "@/assets/tools/tesla-bot-hero.jpg";
import bostonDynamicsHero from "@/assets/tools/boston-dynamics-hero.jpg";
import agilityRoboticsHero from "@/assets/tools/agility-robotics-hero.jpg";
import hondaRoboticsHero from "@/assets/tools/honda-robotics-hero.jpg";
import hansonRoboticsHero from "@/assets/tools/hanson-robotics-hero.jpg";
import softbankRoboticsHero from "@/assets/tools/softbank-robotics-hero.jpg";
import sanctuaryAiHero from "@/assets/tools/sanctuary-ai-hero.jpg";
import engineeredArtsHero from "@/assets/tools/engineered-arts-hero.jpg";

export const roboticsCompanies: Tool[] = [
  {
    icon: Bot,
    title: "Unitree Robotics - G1 Humanoid & Go Series",
    emoji: "🤖",
    category: "Robotics Companies",
    description: "Leading manufacturer of quadruped and humanoid robots including the G1 humanoid robot and Go series quadrupeds. Specializes in advanced robotics for research, education, and commercial applications with cutting-edge AI integration.",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://www.unitree.com/?via=aiwebtools",
    imageUrl: unitreeHero,
    rating: 4.8,
    totalVotes: 2341,
    tags: ["humanoid robots", "quadruped robots", "robotics manufacturer", "AI robotics", "commercial robots", "G1 robot", "Go series", "unitree"]
  },
  {
    icon: Factory,
    title: "Figure AI - Figure-01 Humanoid Robot",
    emoji: "🏭",
    category: "Robotics Companies",
    description: "Developing Figure-01 humanoid robot for commercial deployment in manufacturing and logistics. Focus on general-purpose humanoid workers with advanced AI capabilities for workplace automation.",
    color: "from-gray-600 to-green-600",
    directUrl: "https://www.figure.ai/?via=aiwebtools",
    imageUrl: figureAiHero,
    rating: 4.6,
    totalVotes: 1876,
    tags: ["Figure-01", "Figure 01", "commercial humanoid", "manufacturing robots", "general purpose", "workplace automation", "figure ai", "humanoid worker"]
  },
  {
    icon: Zap,
    title: "Tesla Bot (Optimus) - Tesla Humanoid Robot",
    emoji: "⚡",
    category: "Robotics Companies",
    description: "Tesla's humanoid robot project designed for general-purpose tasks. Aims to create affordable humanoid robots for manufacturing and household applications with advanced AI and neural networks.",
    color: "from-gray-600 to-blue-600",
    directUrl: "https://www.tesla.com/AI/?via=aiwebtools",
    imageUrl: teslaBotHero,
    rating: 4.5,
    totalVotes: 3421,
    tags: ["Tesla Bot", "Optimus", "Tesla Optimus", "general purpose robot", "manufacturing automation", "humanoid", "tesla robot", "elon musk robot"]
  },
  {
    icon: Gauge,
    title: "Boston Dynamics",
    emoji: "🦿",
    category: "Robotics Companies", 
    description: "World-renowned robotics company famous for Atlas humanoid robot, Spot quadruped, and Stretch warehouse robot. Pioneers in dynamic mobility and advanced robotics research.",
    color: "from-orange-600 to-red-600",
    directUrl: "https://www.bostondynamics.com/?via=aiwebtools",
    imageUrl: bostonDynamicsHero,
    rating: 4.9,
    totalVotes: 4532,
    tags: ["Atlas robot", "Spot robot", "dynamic robotics", "humanoid", "commercial robotics", "boston dynamics"]
  },
  {
    icon: Users,
    title: "Agility Robotics",
    emoji: "🚶",
    category: "Robotics Companies",
    description: "Creator of Digit, the bipedal humanoid robot designed for logistics and warehouse automation. Focus on human-robot collaboration in workplace environments.",
    color: "from-green-600 to-blue-600", 
    directUrl: "https://agilityrobotics.com/?via=aiwebtools",
    imageUrl: agilityRoboticsHero,
    rating: 4.7,
    totalVotes: 1987,
    tags: ["Digit robot", "bipedal robot", "warehouse automation", "logistics robotics", "humanoid", "agility robotics"]
  },
  {
    icon: Building,
    title: "Honda Robotics (ASIMO)",
    emoji: "🎌",
    category: "Robotics Companies",
    description: "Honda's advanced robotics division, famous for ASIMO humanoid robot. Pioneering research in bipedal locomotion, AI integration, and human-robot interaction.",
    color: "from-red-600 to-orange-600",
    directUrl: "https://global.honda/innovation/robotics/?via=aiwebtools",
    imageUrl: hondaRoboticsHero,
    rating: 4.6,
    totalVotes: 2134,
    tags: ["ASIMO", "bipedal locomotion", "Honda robotics", "humanoid research", "AI integration"]
  },
  {
    icon: Eye,
    title: "Hanson Robotics",
    emoji: "👤",
    category: "Robotics Companies",
    description: "Creator of Sophia the robot and other social humanoid robots. Specializes in AI-powered social robotics with lifelike expressions and conversational abilities.",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://www.hansonrobotics.com/?via=aiwebtools",
    imageUrl: hansonRoboticsHero,
    rating: 4.4,
    totalVotes: 1654,
    tags: ["Sophia robot", "social robotics", "AI conversation", "humanoid expressions", "entertainment robots"]
  },
  {
    icon: Building,
    title: "SoftBank Robotics",
    emoji: "🏢",
    category: "Robotics Companies",
    description: "Manufacturer of Pepper and NAO humanoid robots for education, retail, and healthcare. Focus on emotion-sensing and interactive service robots.",
    color: "from-blue-600 to-cyan-600",
    directUrl: "https://www.softbankrobotics.com/?via=aiwebtools",
    imageUrl: softbankRoboticsHero,
    rating: 4.3,
    totalVotes: 1432,
    tags: ["Pepper robot", "NAO robot", "service robots", "education robotics", "emotion sensing"]
  },
  {
    icon: Wrench,
    title: "PAL Robotics",
    emoji: "🔬",
    category: "Robotics Companies",
    description: "European robotics company creating TALOS, REEM, and TIAGo humanoid robots for research and service applications. Focus on mobile manipulation and AI.",
    color: "from-indigo-600 to-purple-600",
    directUrl: "https://pal-robotics.com/?via=aiwebtools",
    imageUrl: palRoboticsHero,
    rating: 4.5,
    totalVotes: 987,
    tags: ["TALOS robot", "REEM robot", "research robotics", "mobile manipulation", "European robotics"]
  },
  {
    icon: Gamepad2,
    title: "Ubtech Robotics",
    emoji: "🎓",
    category: "Robotics Companies",
    description: "Chinese robotics company producing Walker humanoid robots and Alpha educational robots. Focuses on AI education and entertainment robotics.",
    color: "from-yellow-600 to-orange-600",
    directUrl: "https://www.ubtrobot.com/?via=aiwebtools",
    imageUrl: ubtechRoboticsHero,
    rating: 4.2,
    totalVotes: 876,
    tags: ["Walker robot", "Alpha robot", "education robotics", "entertainment robots", "AI learning"]
  },
  {
    icon: Star,
    title: "1X (formerly Halodi)",
    emoji: "🌟",
    category: "Robotics Companies",
    description: "Norwegian robotics company developing NEO and EVE humanoid robots for home and workplace assistance. Focus on safe human-robot coexistence.",
    color: "from-teal-600 to-blue-600",
    directUrl: "https://www.1x.tech/?via=aiwebtools",
    imageUrl: oneXTechHero,
    rating: 4.4,
    totalVotes: 765,
    tags: ["NEO robot", "EVE robot", "home assistance", "workplace robots", "human-robot coexistence"]
  },
  {
    icon: Dna,
    title: "Clone Robotics",
    emoji: "🧬",
    category: "Robotics Companies",
    description: "Advanced humanoid robotics company focusing on bio-inspired artificial muscles and human-like dexterity. Developing next-generation humanoid robots.",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://www.clone-robotics.com/?via=aiwebtools",
    imageUrl: cloneRoboticsHero,
    rating: 4.3,
    totalVotes: 543,
    tags: ["bio-inspired robotics", "artificial muscles", "human dexterity", "advanced humanoids", "biomimetics"]
  },
  {
    icon: Brain,
    title: "Sanctuary AI",
    emoji: "🧠",
    category: "Robotics Companies",
    description: "Canadian AI robotics company developing Phoenix humanoid robot with human-like intelligence and dexterity for general-purpose work.",
    color: "from-red-600 to-purple-600",
    directUrl: "https://sanctuary.ai/?via=aiwebtools",
    imageUrl: sanctuaryAiHero,
    rating: 4.5,
    totalVotes: 1234,
    tags: ["Phoenix robot", "general intelligence", "human dexterity", "Canadian robotics", "AI workforce"]
  },
  {
    icon: Palette,
    title: "Engineered Arts",
    emoji: "🎭",
    category: "Robotics Companies",
    description: "UK-based company creating ultra-realistic humanoid robots like Ameca for entertainment, education, and research applications.",
    color: "from-pink-600 to-purple-600",
    directUrl: "https://www.engineeredarts.co.uk/?via=aiwebtools",
    imageUrl: engineeredArtsHero,
    rating: 4.4,
    totalVotes: 987,
    tags: ["Ameca robot", "realistic humanoids", "entertainment robots", "research platforms", "UK robotics"]
  },
  {
    icon: Activity,
    title: "Apptronik",
    emoji: "💪",
    category: "Robotics Companies",
    description: "Texas-based robotics company developing Apollo humanoid robot for logistics and manufacturing. Focus on practical commercial applications.",
    color: "from-orange-600 to-yellow-600",
    directUrl: "https://apptronik.com/?via=aiwebtools",
    imageUrl: apptronikHero,
    rating: 4.3,
    totalVotes: 654,
    tags: ["Apollo robot", "logistics automation", "manufacturing robots", "commercial humanoids", "Texas robotics"]
  }
];
