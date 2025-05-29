
import { GraduationCap, BookOpen, Brain, Target, Code, Lightbulb, Users, Search } from "lucide-react";
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
  }
];
