import { Tool } from "@/types/tools";
import { Layers, Bot, Globe, FileText, MessageCircle, Search, Database, Brain, Cloud, Workflow } from "lucide-react";

import langflowHero from "@/assets/tools/langflow-hero.jpg";
import stackAiHero from "@/assets/tools/stack-ai-hero.jpg";
import vectaraHero from "@/assets/tools/vectara-hero.jpg";
import craftDocsHero from "@/assets/tools/craft-docs-hero.jpg";
import piAiHero from "@/assets/tools/pi-ai-hero.jpg";
import sciteAiHero from "@/assets/tools/scite-ai-hero.jpg";
import chaiAiHero from "@/assets/tools/chai-ai-hero.jpg";
import ragieHero from "@/assets/tools/ragie-hero.jpg";
import zepAiHero from "@/assets/tools/zep-ai-hero.jpg";
import llamaindexCloudHero from "@/assets/tools/llamaindex-cloud-hero.jpg";

export const aiInfraBatch2026: Tool[] = [
  {
    icon: Workflow,
    title: "Langflow",
    description: "Langflow is a powerful low-code visual builder for creating AI agents, RAG applications, and MCP servers. Drag and drop components to build sophisticated AI workflows with support for all major LLMs, vector databases, and a growing library of AI tools—then deploy with one click.",
    emoji: "🔗",
    color: "from-green-500 to-emerald-600",
    imageUrl: langflowHero,
    directUrl: "https://www.langflow.org/?via=aiwebtools",
    category: "Developer Tools & APIs",
    tags: ["low-code AI", "visual workflow", "Langflow", "AI agents", "RAG builder", "MCP server", "LangChain", "drag and drop", "AI pipeline", "open source AI"],
    tagline: "Drag-and-drop AI agent builder with 146K GitHub stars"
  },
  {
    icon: Bot,
    title: "Stack AI",
    description: "Stack AI is an enterprise-grade no-code platform for building AI agents and automating workflows. Design sophisticated AI systems with a visual interface, connect to 100+ data sources, and deploy production-ready agents that handle document processing, customer support, and internal operations.",
    emoji: "📊",
    color: "from-blue-800 to-blue-600",
    imageUrl: stackAiHero,
    directUrl: "https://www.stack-ai.com/?via=aiwebtools",
    category: "AI Agents & Automation",
    tags: ["enterprise AI", "Stack AI", "no-code agents", "AI automation", "workflow builder", "document processing", "AI for business", "enterprise automation", "agent builder"],
    tagline: "Enterprise AI agents built visually, deployed instantly"
  },
  {
    icon: Database,
    title: "Vectara",
    description: "Vectara is the enterprise agent platform with built-in multi-modal retrieval, orchestration, and always-on governance. Deploy RAG-powered AI agents on-prem, in your VPC, or as SaaS with source citations, audit trails, fine-grained access controls, and real-time factual-consistency enforcement.",
    emoji: "🔍",
    color: "from-teal-600 to-cyan-500",
    imageUrl: vectaraHero,
    directUrl: "https://vectara.com/?via=aiwebtools",
    category: "Developer Tools & APIs",
    tags: ["RAG platform", "Vectara", "enterprise search", "vector database", "retrieval augmented generation", "AI search", "semantic search", "knowledge retrieval", "enterprise AI"],
    tagline: "Enterprise RAG with built-in hallucination prevention"
  },
  {
    icon: FileText,
    title: "Craft Docs",
    description: "Craft is a beautiful, native document editor with built-in AI assistance. Create stunning documents, notes, and wikis with AI-powered writing, summarization, and organization. Its Apple-quality design and offline-first architecture make it the premium choice for teams and individuals.",
    emoji: "✍️",
    color: "from-sky-300 to-blue-400",
    imageUrl: craftDocsHero,
    directUrl: "https://www.craft.do/?via=aiwebtools",
    category: "Writing & Content",
    tags: ["AI documents", "Craft", "note-taking", "AI writing", "collaborative docs", "wiki", "knowledge management", "document editor", "Apple design", "offline-first"],
    tagline: "Beautiful AI-powered documents with Apple-quality design"
  },
  {
    icon: MessageCircle,
    title: "Pi by Inflection",
    description: "Pi is a personal AI companion by Inflection AI designed for meaningful, empathetic conversations. Unlike task-focused assistants, Pi excels at thoughtful dialogue, emotional support, brainstorming, and learning—acting as a kind, curious friend that remembers your preferences and adapts to you.",
    emoji: "🥧",
    color: "from-amber-300 to-orange-400",
    imageUrl: piAiHero,
    directUrl: "https://pi.ai/?via=aiwebtools",
    category: "AI Assistants & Chatbots",
    tags: ["personal AI", "Pi", "Inflection AI", "AI companion", "conversational AI", "emotional AI", "empathetic AI", "AI chat", "personal assistant", "AI friend"],
    tagline: "Your personal AI that actually listens and remembers you"
  },
  {
    icon: Search,
    title: "scite.ai",
    description: "scite is an AI-powered research platform that revolutionizes how scientists discover and evaluate research. It uses Smart Citations to show whether a paper has been supported or contrasted by subsequent studies, helping researchers quickly assess the reliability of scientific claims.",
    emoji: "📑",
    color: "from-blue-600 to-blue-800",
    imageUrl: sciteAiHero,
    directUrl: "https://scite.ai/?via=aiwebtools",
    category: "Research & Analysis",
    tags: ["research AI", "scite", "citation analysis", "smart citations", "academic research", "scientific papers", "literature review", "research tool", "evidence analysis", "scholarly AI"],
    tagline: "Smart Citations reveal if research is supported or contradicted"
  },
  {
    icon: MessageCircle,
    title: "Chai AI",
    description: "Chai is a leading conversational AI platform with 1.5 million daily active users. Create and chat with diverse AI characters, build your own chatbots, and explore a community-driven ecosystem of AI personalities—from helpful assistants to creative storytelling companions.",
    emoji: "☕",
    color: "from-orange-500 to-purple-600",
    imageUrl: chaiAiHero,
    directUrl: "https://chai.ml/?via=aiwebtools",
    category: "AI Assistants & Chatbots",
    tags: ["AI chatbot", "Chai", "AI characters", "conversational AI", "chatbot platform", "AI personality", "character AI", "social AI", "AI entertainment", "community chatbots"],
    tagline: "1.5M daily users chatting with community-built AI characters"
  },
  {
    icon: Layers,
    title: "Ragie",
    description: "Ragie is a fully managed RAG-as-a-service platform that makes it easy to connect your data to LLMs. Ingest documents, build retrieval pipelines, and deploy production-ready AI applications with simple APIs—no vector database management or embedding infrastructure required.",
    emoji: "📦",
    color: "from-purple-600 to-violet-700",
    imageUrl: ragieHero,
    directUrl: "https://ragie.ai/?via=aiwebtools",
    category: "Developer Tools & APIs",
    tags: ["RAG infrastructure", "Ragie", "document ingestion", "retrieval API", "managed RAG", "AI infrastructure", "embedding pipeline", "knowledge base API", "LLM integration"],
    tagline: "Managed RAG infrastructure—connect your data to LLMs in minutes"
  },
  {
    icon: Brain,
    title: "Zep AI",
    description: "Zep provides long-term memory infrastructure for AI assistants and agents. It stores, manages, and retrieves conversation history and user context, enabling AI applications to remember past interactions, build user profiles, and deliver personalized experiences across sessions.",
    emoji: "🧠",
    color: "from-indigo-700 to-green-500",
    imageUrl: zepAiHero,
    directUrl: "https://www.getzep.com/?via=aiwebtools",
    category: "Developer Tools & APIs",
    tags: ["AI memory", "Zep", "long-term memory", "conversation history", "AI infrastructure", "session memory", "user context", "persistent memory", "agent memory", "memory layer"],
    tagline: "Long-term memory that makes AI assistants actually remember you"
  },
  {
    icon: Cloud,
    title: "LlamaIndex Cloud",
    description: "LlamaIndex Cloud is a managed platform for building production-grade RAG and agentic AI applications. It provides hosted data ingestion, indexing, and retrieval infrastructure built on the popular open-source LlamaIndex framework, enabling teams to ship AI apps without managing complex infrastructure.",
    emoji: "🦙",
    color: "from-purple-700 to-indigo-600",
    imageUrl: llamaindexCloudHero,
    directUrl: "https://cloud.llamaindex.ai/?via=aiwebtools",
    category: "Developer Tools & APIs",
    tags: ["LlamaIndex", "managed RAG", "AI infrastructure", "data framework", "indexing platform", "retrieval engine", "agentic AI", "LLM framework", "cloud AI", "production RAG"],
    tagline: "The LlamaIndex framework, fully managed in the cloud"
  }
];
