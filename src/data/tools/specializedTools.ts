
import { Tool } from "@/types/tools";
import { 
  Brain, 
  Zap, 
  Target, 
  Eye, 
  Shield, 
  Search, 
  Database,
  Cpu,
  Code,
  Globe,
  Bot,
  Sparkles,
  
  Bug,
  Apple,
  Wheat,
  Utensils
} from "lucide-react";

import openaiApiHero from "@/assets/tools/openai-api-hero.jpg";
// Uber removed - not an AI tool
import pineconeHero from "@/assets/tools/pinecone-hero.jpg";
import huggingFaceHero from "@/assets/tools/hugging-face-hero.jpg";
import roboflowHero from "@/assets/tools/roboflow-hero.jpg";
import anthropicClaudeApiHero from "@/assets/tools/anthropic-claude-api-hero.jpg";
import algoliaHero from "@/assets/tools/algolia-hero.jpg";
import cohereHero from "@/assets/tools/cohere-hero.jpg";
import replicateHero from "@/assets/tools/replicate-hero.jpg";
import langchainHero from "@/assets/tools/langchain-hero.jpg";
import githubCopilotStandaloneHero from "@/assets/tools/github-copilot-standalone-hero.jpg";

export const specializedTools: Tool[] = [
  {
    icon: Brain,
    title: "OpenAI API",
    description: "Access powerful AI models including GPT-4, DALL-E, and Whisper through OpenAI's API. Build custom AI applications and integrations.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://openai.com/api/",
    imageUrl: openaiApiHero,
    tags: ["API", "GPT-4", "DALL-E", "Whisper", "custom applications"],
    category: "Specialized AI Tools",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Code,
    title: "GitHub Copilot",
    description: "AI pair programmer that helps write code faster and with fewer errors. Powered by OpenAI Codex for intelligent code suggestions.",
    emoji: "👨‍💻",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://github.com/features/copilot",
    imageUrl: githubCopilotStandaloneHero,
    tags: ["code assistant", "programming", "GitHub", "Codex", "code suggestions"],
    category: "Specialized AI Tools",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Database,
    title: "Pinecone",
    description: "Vector database for AI applications. Build and deploy AI systems that can search, recommend, and understand data at scale.",
    emoji: "🌲",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.pinecone.io/",
    imageUrl: pineconeHero,
    tags: ["vector database", "AI applications", "search", "recommendations", "data understanding"],
    category: "Specialized AI Tools",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Cpu,
    title: "Hugging Face",
    description: "Open-source platform for machine learning models, datasets, and applications. Access thousands of pre-trained models and build AI systems.",
    emoji: "🤗",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://huggingface.co/",
    imageUrl: huggingFaceHero,
    tags: ["machine learning", "pre-trained models", "datasets", "open source", "AI systems"],
    category: "Specialized AI Tools",
    rating: 4.6,
    totalVotes: 3654
  },
  {
    icon: Eye,
    title: "Roboflow",
    description: "Computer vision platform for building and deploying AI models. Train custom object detection and image segmentation models.",
    emoji: "👁️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://roboflow.com/",
    imageUrl: roboflowHero,
    tags: ["computer vision", "object detection", "image segmentation", "custom models", "deployment"],
    category: "Specialized AI Tools",
    rating: 4.4,
    totalVotes: 2654
  },
  {
    icon: Shield,
    title: "Anthropic Claude API",
    description: "Access Claude AI models through Anthropic's API. Build safe and beneficial AI applications with constitutional AI principles.",
    emoji: "🛡️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.anthropic.com/api",
    imageUrl: anthropicClaudeApiHero,
    tags: ["Claude API", "safe AI", "constitutional AI", "beneficial AI", "Anthropic"],
    category: "Specialized AI Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Search,
    title: "Algolia",
    description: "AI-powered search and discovery platform. Build fast, relevant search experiences with machine learning and natural language processing.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.algolia.com/",
    imageUrl: algoliaHero,
    tags: ["AI search", "discovery platform", "machine learning", "NLP", "search experiences"],
    category: "Specialized AI Tools",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Globe,
    title: "Cohere",
    description: "Natural language AI platform for developers. Access large language models for text generation, classification, and semantic search.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://cohere.ai/",
    imageUrl: cohereHero,
    tags: ["natural language AI", "text generation", "classification", "semantic search", "developers"],
    category: "Specialized AI Tools",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Bot,
    title: "Replicate",
    description: "Run open-source machine learning models in the cloud. Deploy and scale AI models without managing infrastructure.",
    emoji: "🤖",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://replicate.com/",
    imageUrl: replicateHero,
    tags: ["machine learning models", "cloud deployment", "open source", "model scaling", "infrastructure"],
    category: "Specialized AI Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Sparkles,
    title: "LangChain",
    description: "Framework for developing applications powered by language models. Build context-aware and reasoning applications with AI chains.",
    emoji: "⛓️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://langchain.com/",
    imageUrl: langchainHero,
    tags: ["LLM framework", "context-aware", "reasoning applications", "AI chains", "development"],
    category: "Specialized AI Tools",
    rating: 4.6,
    totalVotes: 3789
  }
];
