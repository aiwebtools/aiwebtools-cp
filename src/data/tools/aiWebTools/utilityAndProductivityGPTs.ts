
import { Tool } from "@/types/tools";
import { 
  Calculator, 
  Globe, 
  Settings, 
  Zap, 
  Search, 
  FileText, 
  Briefcase, 
  Target, 
  Bot,
  Languages,
  Code,
  Database,
  Smartphone,
  Calendar,
  Mail,
  CheckSquare,
  BarChart3,
  Workflow,
  Binary
} from "lucide-react";

import aiToolExpertHero from "@/assets/tools/ai-tool-expert-hero.jpg";
import aiCalculatorHero from "@/assets/tools/ai-calculator-hero.jpg";
import universalTranslatorHero from "@/assets/tools/universal-translator-hero.jpg";
import codeCompanionHero from "@/assets/tools/code-companion-hero.jpg";
import dataVisualizerHero from "@/assets/tools/data-visualizer-hero.jpg";
import mobileOptimizerHero from "@/assets/tools/mobile-optimizer-hero.jpg";
import emailAssistantHero from "@/assets/tools/email-assistant-hero.jpg";
import checklistCreatorHero from "@/assets/tools/checklist-creator-hero.jpg";
import progressTrackerHero from "@/assets/tools/progress-tracker-hero.jpg";
import workflowOptimizerHero from "@/assets/tools/workflow-optimizer-hero.jpg";
import aiLanguageTranslatorHero from "@/assets/tools/ai-language-translator-hero.jpg";
import mindmapMaestroGptHero from "@/assets/tools/mindmap-maestro-gpt-hero.jpg";

export const utilityAndProductivityGPTs: Tool[] = [
  {
    icon: Search,
    title: "AI TOOL EXPERT",
    description: "AI Tool Expert is your comprehensive guide to discovering, evaluating, and implementing the best AI tools for any project or need. Whether you're looking for productivity enhancers, creative assistants, or specialized solutions, this expert provides detailed recommendations, comparisons, and step-by-step implementation guides to help you leverage the power of AI tools effectively.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt",
    imageUrl: aiToolExpertHero,
    tags: ["AI tools", "tool discovery", "expert recommendations", "implementation guides", "AI solutions", "productivity", "ai tool expert", "tool finder", "ai expert", "Custom GPT", "All-in-One Suite", "Multi-Tool Platform"],
    category: "Utility & Productivity",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Languages,
    title: "AI LANGUAGE TRANSLATOR GPT",
    description: "AI Language Translator GPT is a powerful multilingual translation assistant that provides accurate, context-aware translations across dozens of languages. Whether you're translating documents, conversations, or creative content, this AI tool maintains meaning, tone, and cultural nuances while offering real-time translation capabilities. Perfect for business communications, travel, education, and international collaboration.",
    emoji: "🌐",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chatgpt.com/g/g-683cd0e910bc819195cf96b2b252c7c5-ai-language-translator-gpt",
    videoUrl: "https://youtu.be/mko9NgC1vrU",
    imageUrl: aiLanguageTranslatorHero,
    tags: ["language translation", "multilingual", "real-time translation", "cultural context", "international communication", "aiwebtools", "translator", "language", "translate", "Custom GPT", "Translation & Language"],
    category: "Utility & Productivity",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Calculator,
    title: "AI Calculator",
    description: "AI Calculator is an advanced computational tool that leverages artificial intelligence to solve complex mathematical problems, perform scientific calculations, and provide step-by-step solutions. Whether you're a student, engineer, or researcher, this AI-powered calculator simplifies intricate equations, offers detailed explanations, and enhances your problem-solving capabilities.",
    emoji: "🧮",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    imageUrl: aiCalculatorHero,
    tags: ["mathematical calculations", "scientific computations", "problem-solving", "step-by-step solutions", "AI assistance", "Custom GPT", "Data Conversion", "Task Management"],
    category: "Utility & Productivity",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Globe,
    title: "Universal Translator",
    description: "Breaks down language barriers with real-time translation and interpretation across multiple languages.",
    emoji: "🌍",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chat.openai.com/g/g-Cd5QdQ9Kt-universal-translator",
    imageUrl: universalTranslatorHero,
    tags: ["language translation", "real-time interpretation", "multilingual support", "global communication", "Custom GPT", "Translation & Language"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 5123
  },
  {
    icon: Code,
    title: "Code Companion",
    description: "Your expert AI coding assistant! I can generate code, debug, explain, and document it for you.",
    emoji: "💻",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-j49Jok77O-code-companion",
    imageUrl: codeCompanionHero,
    tags: ["code generation", "debugging", "code explanation", "documentation", "AI coding assistant", "Custom GPT", "Code Assistant"],
    category: "Utility & Productivity",
    rating: 4.9,
    totalVotes: 6123
  },
  {
    icon: Database,
    title: "Data Visualizer",
    description: "Creates insightful visualizations from raw data to help users understand trends and patterns.",
    emoji: "📊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chat.openai.com/g/g-6qDKdddio-data-visualizer",
    imageUrl: dataVisualizerHero,
    tags: ["data visualization", "trend analysis", "pattern identification", "raw data processing", "Custom GPT", "Data Conversion", "Task Management"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 5456
  },
  {
    icon: Smartphone,
    title: "Mobile Optimizer",
    description: "Optimizes websites and applications for mobile devices to ensure seamless user experiences.",
    emoji: "📱",
    color: "from-green-500 to-teal-600",
    directUrl: "https://chat.openai.com/g/g-hfddkJjdh-mobile-optimizer",
    imageUrl: mobileOptimizerHero,
    tags: ["mobile optimization", "website optimization", "application optimization", "user experience", "Custom GPT", "Workflow Optimization"],
    category: "Utility & Productivity",
    rating: 4.5,
    totalVotes: 4789
  },
  {
    icon: Mail,
    title: "Email Assistant",
    description: "Helps draft professional emails, manage inboxes, and prioritize important messages.",
    emoji: "📧",
    color: "from-red-500 to-pink-600",
    directUrl: "https://chat.openai.com/g/g-m08jT4l9x-email-assistant",
    imageUrl: emailAssistantHero,
    tags: ["email drafting", "inbox management", "message prioritization", "professional emails", "Custom GPT", "Email Management", "Email Marketing"],
    category: "Utility & Productivity",
    rating: 4.6,
    totalVotes: 5123
  },
  {
    icon: CheckSquare,
    title: "Checklist Creator",
    description: "Generates customizable checklists for various tasks and projects to ensure thoroughness.",
    emoji: "✅",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://chat.openai.com/g/g-dmAGMBmAn-checklist-creator",
    imageUrl: checklistCreatorHero,
    tags: ["checklist generation", "task management", "project thoroughness", "customizable checklists", "Custom GPT", "Checklist & Planning", "Task Management"],
    category: "Utility & Productivity",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: BarChart3,
    title: "Progress Tracker",
    description: "Tracks progress on goals and projects, providing visual representations of achievements.",
    emoji: "📈",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://chat.openai.com/g/g-6sFbiExGx-progress-tracker",
    imageUrl: progressTrackerHero,
    tags: ["progress tracking", "goal achievement", "visual representation", "project monitoring", "Custom GPT", "Progress Tracking", "Task Management"],
    category: "Utility & Productivity",
    rating: 4.8,
    totalVotes: 5345
  },
  {
    icon: Workflow,
    title: "Workflow Optimizer",
    description: "Analyzes existing workflows and suggests improvements for streamlined operations.",
    emoji: "🔄",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chat.openai.com/g/g-gzi92f3kt-workflow-optimizer",
    imageUrl: workflowOptimizerHero,
    tags: ["workflow analysis", "streamlined operations", "efficiency improvements", "process optimization", "Custom GPT", "Workflow Optimization", "Automation Platform"],
    category: "Utility & Productivity",
    rating: 4.5,
    totalVotes: 4890
  },
  {
    icon: Binary,
    title: "Binary-Text-Image Converter GPT",
    description: "Unlock the power of binary with the Binary-Text Image Converter GPT by AI Web Tools! This fun and intuitive tool allows you to effortlessly convert text to binary and binary to text, making it simple to communicate in the language of computers.",
    emoji: "🔢",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["binary conversion", "text encoding", "computer language", "data conversion", "programming tools", "aiwebtools", "binary", "converter", "text to binary", "Custom GPT", "Data Conversion"],
    category: "Utility & Productivity",
    rating: 4.3,
    totalVotes: 2156
  },
  {
    icon: Zap,
    title: "MULTITASKER GPT",
    description: "You can give me multiple unrelated tasks at once, and I will work to complete them all for you. Fire away!",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    tags: ["multitasking", "task management", "productivity", "efficiency", "multiple tasks", "aiwebtools", "multitask", "tasks", "Custom GPT", "All-in-One Suite", "Task Management"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Search,
    title: "AI Tools Finder GPT",
    description: "Your own personal expert in the world of Ai Tools and knowledge. Locate the best Ai tools for your projects and be presented with step by step guides on any Ai tool that exists.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/p3czNalrf8c",
    tags: ["AI tools discovery", "tool recommendations", "step-by-step guides", "AI knowledge", "project tools", "aiwebtools", "ai tools", "tool finder", "Custom GPT", "Multi-Tool Platform"],
    category: "Utility & Productivity",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Database,
    title: "PHARMA RESEARCH PRO",
    description: "Pharma Research Pro, an AI-powered assistant designed to streamline pharmaceutical research and clinical trials by providing advanced data analysis, literature reviews, and predictive insights. My capabilities ensure efficient and accurate drug development while maintaining regulatory and ethical compliance. From optimizing trial design to monitoring safety, I empower researchers and clinicians to make informed decisions and accelerate the path to safe, effective medications.",
    emoji: "🧪",
    color: "from-blue-500 to-green-600",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["pharmaceutical research", "clinical trials", "drug development", "regulatory compliance", "data analysis", "aiwebtools", "pharma", "research", "pharmaceutical", "Custom GPT", "All-in-One Suite", "Workflow Optimization"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 3892
  },
  {
    icon: Workflow,
    title: "Mindmap Maestro GPT",
    description: "Mindmap Maestro GPT by AIWebTools.AI is your master conductor for visual thinking — instantly transforming any topic, document, or brainstorm into beautifully organized mind maps. From study notes and project plans to business strategies, research breakdowns, and creative ideation, Mindmap Maestro structures your thoughts into clear, branching visual hierarchies that unlock clarity, memory retention, and breakthrough insight. Whether you're a student, founder, teacher, or strategist, this AI orchestrates your ideas into actionable, exportable mind maps with elegance and precision.",
    emoji: "🧠",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://chatgpt.com/g/g-6cLfhefUj-mindmap-maestro",
    imageUrl: mindmapMaestroGptHero,
    tags: [
      "mindmap maestro",
      "mindmap maestro gpt",
      "mind map",
      "mind maps",
      "mindmap",
      "mindmaps",
      "mind mapping",
      "visual thinking",
      "brainstorming",
      "knowledge graph",
      "concept map",
      "idea organization",
      "study notes",
      "note taking",
      "productivity",
      "planning",
      "outline generator",
      "aiwebtools",
      "Custom GPT",
      "Brainstorming & Ideation",
      "Productivity"
    ],
    category: "Utility & Productivity",
    rating: 4.9,
    totalVotes: 2871
  }
];
