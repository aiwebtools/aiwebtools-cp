import { GraduationCap, BookOpen, Brain, Target, Code, Lightbulb, Users, Search, Globe, Award } from "lucide-react";
import { Tool } from "@/types/tools";

export const educationAndLearning: Tool[] = [
  {
    icon: GraduationCap,
    title: "Magic School AI",
    description: "AI lesson plan generator that simplifies creating comprehensive lesson plans for educators. Input grade level, subject, and learning objectives to generate customized plans with activities and assessments.",
    emoji: "🎓",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://www.magicschool.ai/",
    tags: ["lesson planning", "education", "teachers", "curriculum", "learning objectives"],
    category: "Education & Learning",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: Code,
    title: "Python for AI Free Class",
    description: "Free beginner-friendly course by DeepLearning.AI teaching Python programming with focus on AI applications. Covers essential syntax, AI concepts, and hands-on projects.",
    emoji: "🐍",
    color: "from-green-400 to-teal-500",
    directUrl: "https://www.deeplearning.ai/short-courses/ai-python-for-beginners/",
    tags: ["Python", "AI programming", "free course", "beginners", "DeepLearning.AI"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Target,
    title: "Nathan's Playbook",
    description: "Learn ChatGPT tips, tricks, and automation flows using Make. Training and starter templates from Nathan Hodgson for mastering AI automation and workflow creation.",
    emoji: "📋",
    color: "from-orange-400 to-red-500",
    directUrl: "https://nathanhodgson.co.uk/playbook-opt-in",
    tags: ["ChatGPT training", "automation", "Make workflows", "tips and tricks", "templates"],
    category: "AI Training & Tutorials",
    rating: 4.5,
    totalVotes: 1890
  },
  {
    icon: Search,
    title: "Profundo",
    description: "Ultimate research assistant delivering in-depth content with speed and precision. Automates research process from data gathering to customized reporting for students and professionals.",
    emoji: "🔬",
    color: "from-purple-400 to-indigo-500",
    directUrl: "https://www.profundo.app",
    tags: ["research assistant", "data gathering", "analysis", "reporting", "academic"],
    category: "Research & Learning",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Users,
    title: "Ryan & Jason's Personal Jarvis GPT",
    description: "Personal assistant GPTs created by Ryan and Jason for managing tasks, providing insights, and enhancing productivity through customized AI assistance.",
    emoji: "🤵",
    color: "from-cyan-400 to-blue-500",
    directUrl: "https://chatgpt.com/g/g-M9NtPUOmv-jason-s-personal-jarvis",
    tags: ["personal assistant", "productivity", "task management", "custom GPT", "insights"],
    category: "Personal AI Assistants",
    rating: 4.4,
    totalVotes: 1650
  },
  {
    icon: Lightbulb,
    title: "F5Bot",
    description: "Free online tool that emails you whenever selected keywords are mentioned on Reddit or similar forums. Stay informed about topics, brands, or projects with no usage limits.",
    emoji: "🔔",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://f5bot.com/",
    tags: ["keyword monitoring", "Reddit alerts", "free tool", "brand monitoring", "notifications"],
    category: "Monitoring & Research",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Globe,
    title: "Google AI Training Courses",
    description: "Free AI training courses from Google Cloud Skills Boost with hands-on experience in machine learning, AI, and cloud computing. Interactive labs, tutorials, and real-world projects.",
    emoji: "🎓",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.cloudskillsboost.google/paths/118",
    tags: ["Google Cloud", "free courses", "machine learning", "hands-on labs", "certifications"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Award,
    title: "Career Dreamer by Google",
    description: "AI-powered tool by Grow with Google that analyzes skills and experiences to explore new career possibilities. Creates personalized Career Identity Statements with U.S. labor market data.",
    emoji: "💼",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://grow.google/career-dreamer/home/",
    tags: ["career exploration", "Google Grow", "skills analysis", "labor market data", "career planning"],
    category: "Education & Learning",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: BookOpen,
    title: "Gospel of AI: Super Book of Deployable Robot Prompts",
    description: "Groundbreaking manifesto by AIWebTools.ai with 50+ fully operational GPT instructions. Includes Book Writer GPT, Trader GPT, and more specialized tools requiring no technical expertise.",
    emoji: "📖",
    color: "from-gold-500 to-yellow-600",
    directUrl: "https://amzn.to/4bk3pmu",
    tags: ["GPT prompts", "deployable robots", "AIWebTools", "book", "specialized tools"],
    category: "Education & Learning",
    rating: 4.9,
    totalVotes: 5678
  },
  {
    icon: Brain,
    title: "Google AI Studio",
    description: "Versatile platform for developers to explore and integrate AI capabilities with Google's Gemini models. Features prompt engineering, fine-tuning, API management, and Multimodal Live API.",
    emoji: "🧪",
    color: "from-red-500 to-orange-600",
    directUrl: "https://aistudio.google.com/live",
    tags: ["Google Gemini", "AI development", "prompt engineering", "multimodal", "API management"],
    category: "Education & Learning",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Target,
    title: "Project Astra by Google",
    description: "Research prototype by Google DeepMind exploring universal AI assistant capabilities. Natural voice/video interaction, real-time conversations, context memory, and tool integration.",
    emoji: "🌟",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://deepmind.google/technologies/project-astra/",
    tags: ["Google DeepMind", "universal AI", "voice interaction", "research prototype", "context memory"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 4123
  },
  {
    icon: Code,
    title: "QWEN",
    description: "Alibaba's family of large language models developed by Alibaba Cloud AI. Similar to OpenAI's GPT models, designed for text generation, code assistance, chatbots, and enterprise AI solutions.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chat.qwenlm.ai/",
    tags: ["Alibaba AI", "LLM", "text generation", "code assistance", "enterprise AI"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2890
  }
];
