import { Tool } from "@/types/tools";
import { 
  Code, Terminal, Cpu, Database, Cloud,
  Settings, Zap, Bot, Brain, Wrench
} from "lucide-react";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Code,
    title: "GPT-3",
    description: "Advanced language model for natural language processing and text generation tasks.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://openai.com/api/",
    tags: ["language model", "NLP", "text generation", "AI", "machine learning"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 6321
  },
  {
    icon: Terminal,
    title: "TensorFlow",
    description: "Open-source machine learning framework for building and training AI models.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.tensorflow.org/",
    tags: ["machine learning", "AI", "framework", "deep learning", "neural networks"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 5876
  },
  {
    icon: Cpu,
    title: "PyTorch",
    description: "Open-source machine learning library for Python, used for computer vision and NLP.",
    emoji: "🐍",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://pytorch.org/",
    tags: ["machine learning", "Python", "computer vision", "NLP", "deep learning"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Database,
    title: "scikit-learn",
    description: "Simple and efficient tools for predictive data analysis.",
    emoji: "📊",
    color: "from-green-500 to-blue-600",
    directUrl: "https://scikit-learn.org/",
    tags: ["machine learning", "data analysis", "Python", "statistics", "AI"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 4987
  },
  {
    icon: Cloud,
    title: "IBM Watson",
    description: "Set of enterprise-ready AI services, applications, and tooling.",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.ibm.com/watson",
    tags: ["AI services", "enterprise AI", "cloud computing", "machine learning", "AI"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 4543
  },
  {
    icon: Settings,
    title: "AutoML",
    description: "Automated machine learning to easily train and deploy custom models.",
    emoji: "🛠️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://cloud.google.com/automl/",
    tags: ["machine learning", "automation", "AI", "model training", "cloud computing"],
    category: "AI Development Tools",
    rating: 4.2,
    totalVotes: 4123
  },
  {
    icon: Zap,
    title: "Hugging Face",
    description: "Provides tools for building, training, and deploying machine learning models.",
    emoji: "🤗",
    color: "from-pink-500 to-red-600",
    directUrl: "https://huggingface.co/",
    tags: ["machine learning", "NLP", "transformers", "AI", "model deployment"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: Bot,
    title: "Microsoft Azure AI",
    description: "Cloud-based AI services for building intelligent applications.",
    emoji: "🤖",
    color: "from-red-500 to-orange-600",
    directUrl: "https://azure.microsoft.com/en-us/solutions/ai",
    tags: ["AI services", "cloud computing", "machine learning", "AI", "application development"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 3654
  },
  {
    icon: Brain,
    title: "Amazon SageMaker",
    description: "Fully managed service to build, train, and deploy machine learning models quickly.",
    emoji: "🧠",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://aws.amazon.com/sagemaker/",
    tags: ["machine learning", "model training", "AI", "cloud computing", "deployment"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3432
  },
  {
    icon: Wrench,
    title: "OpenVINO",
    description: "Toolkit for optimizing and deploying AI inference across multiple platforms.",
    emoji: "🔧",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html",
    tags: ["AI inference", "optimization", "deployment", "cross-platform", "AI"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 3210
  },
  {
    icon: Bot,
    title: "Customizable GPT Maker",
    description: "Create and customize your own GPT models and AI assistants. Build specialized AI tools tailored to your specific needs and requirements.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    tags: ["GPT creation", "AI customization", "model building", "AI development", "automation"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 2876
  }
];
