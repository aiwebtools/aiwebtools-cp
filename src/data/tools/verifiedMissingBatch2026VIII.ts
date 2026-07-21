import { Tool } from "@/types/tools";
import {
  Database, Server, Cloud, Zap, Workflow, Mic, Volume2, FileText,
  ScanText, FileSearch, Search, MessageCircleQuestion, Bot, Cpu, Layers, Radio
} from "lucide-react";

import neonHero from "@/assets/tools/neon-hero.jpg";
import pocketbaseHero from "@/assets/tools/pocketbase-hero.jpg";
import xataHero from "@/assets/tools/xata-hero.jpg";
import tursoHero from "@/assets/tools/turso-hero.jpg";
import upstashHero from "@/assets/tools/upstash-hero.jpg";
import flyteHero from "@/assets/tools/flyte-hero.jpg";
import unrealSpeechHero from "@/assets/tools/unreal-speech-hero.jpg";
import fishAudioHero from "@/assets/tools/fish-audio-hero.jpg";
import firefliesAiHero from "@/assets/tools/fireflies-ai-hero.jpg";
import otterAiHero from "@/assets/tools/otter-ai-hero.jpg";
import semblyAiHero from "@/assets/tools/sembly-ai-hero.jpg";
import nottaHero from "@/assets/tools/notta-hero.jpg";
import docparserHero from "@/assets/tools/docparser-hero.jpg";
import rossumHero from "@/assets/tools/rossum-hero.jpg";
import klippaHero from "@/assets/tools/klippa-hero.jpg";
import mindeeHero from "@/assets/tools/mindee-hero.jpg";
import awsTextractHero from "@/assets/tools/aws-textract-hero.jpg";
import azureDocumentIntelligenceHero from "@/assets/tools/azure-document-intelligence-hero.jpg";
import googleDocumentAiHero from "@/assets/tools/google-document-ai-hero.jpg";
import reductoHero from "@/assets/tools/reducto-hero.jpg";
import llamaparseHero from "@/assets/tools/llamaparse-hero.jpg";
import llamacloudHero from "@/assets/tools/llamacloud-hero.jpg";
import kagiHero from "@/assets/tools/kagi-hero.jpg";
import andiHero from "@/assets/tools/andi-hero.jpg";
import iaskAiHero from "@/assets/tools/iask-ai-hero.jpg";

// Batch VIII 2026 — 25 verified real AI / dev-infra / doc-AI tools not previously in the database.
// All URLs verified as live products or OSS projects at time of writing. Free or free-tier available.
export const verifiedMissingBatch2026VIII: Tool[] = [
  {
    icon: Database, title: "Neon",
    description: "Serverless Postgres built for the AI era with branching, autoscaling, and generous free tier. Popular backend for AI agents and LLM apps.",
    emoji: "🟢", color: "from-emerald-500 to-green-700",
    directUrl: "https://neon.tech/?via=aiwebtools",
    tags: ["serverless Postgres", "database", "AI backend", "branching", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.7, isFree: true,
  },
  {
    icon: Server, title: "PocketBase",
    description: "Open-source backend in a single Go file: SQLite database, auth, file storage, realtime APIs, and admin UI. Perfect self-hosted backend for AI apps.",
    emoji: "📦", color: "from-slate-600 to-slate-900",
    directUrl: "https://pocketbase.io/?via=aiwebtools",
    tags: ["open source", "backend", "self-hosted", "SQLite", "auth", "developer tools", "free"],
    category: "AI Tools & Development", rating: 4.7, isFree: true,
  },
  {
    icon: Database, title: "Xata",
    description: "Serverless data platform combining Postgres, full-text search, and vector search for AI apps. Free tier with generous limits.",
    emoji: "🦋", color: "from-violet-500 to-purple-700",
    directUrl: "https://xata.io/?via=aiwebtools",
    tags: ["serverless database", "vector search", "Postgres", "AI backend", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.5, isFree: true,
  },
  {
    icon: Zap, title: "Turso",
    description: "Edge-hosted SQLite (libSQL) database with global replicas and embedded replicas for lightning-fast AI apps. Free plan includes 500 databases.",
    emoji: "⚡", color: "from-teal-500 to-cyan-700",
    directUrl: "https://turso.tech/?via=aiwebtools",
    tags: ["edge database", "SQLite", "libSQL", "serverless", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.6, isFree: true,
  },
  {
    icon: Cloud, title: "Upstash",
    description: "Serverless Redis, Kafka, and Vector database with per-request pricing — ideal for AI apps, rate limiting, and RAG pipelines. Generous free tier.",
    emoji: "🔴", color: "from-red-500 to-rose-700",
    directUrl: "https://upstash.com/?via=aiwebtools",
    tags: ["serverless Redis", "vector database", "AI infrastructure", "RAG", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.7, isFree: true,
  },
  {
    icon: Workflow, title: "Flyte",
    description: "Open-source production-grade orchestrator for ML and data workflows, used by Lyft, Spotify, and Freenome. Kubernetes-native.",
    emoji: "🪁", color: "from-indigo-500 to-blue-700",
    directUrl: "https://flyte.org/?via=aiwebtools",
    tags: ["open source", "ML workflow", "orchestration", "MLOps", "Kubernetes", "developer tools", "free"],
    category: "AI Tools & Development", rating: 4.5, isFree: true,
  },
  {
    icon: Volume2, title: "Unreal Speech",
    description: "Low-cost, high-quality text-to-speech API — up to 90% cheaper than ElevenLabs, with lifelike voices and streaming. Free tier included.",
    emoji: "🔊", color: "from-orange-500 to-red-600",
    directUrl: "https://unrealspeech.com/?via=aiwebtools",
    tags: ["text to speech", "TTS", "voice API", "AI voice", "audio", "free tier"],
    category: "AI Voice & Audio", rating: 4.5,
  },
  {
    icon: Mic, title: "Fish Audio",
    description: "Open-source voice cloning and multilingual TTS platform. Clone any voice in seconds and generate speech in 13+ languages. Free tier.",
    emoji: "🐟", color: "from-blue-500 to-cyan-700",
    directUrl: "https://fish.audio/?via=aiwebtools",
    tags: ["voice cloning", "TTS", "open source", "multilingual", "AI voice", "free tier"],
    category: "AI Voice & Audio", rating: 4.6,
  },
  {
    icon: Radio, title: "Fireflies.ai",
    description: "AI meeting assistant that records, transcribes, and summarizes voice conversations across Zoom, Meet, and Teams. Free forever plan.",
    emoji: "🪰", color: "from-yellow-500 to-orange-600",
    directUrl: "https://fireflies.ai/?via=aiwebtools",
    tags: ["AI meeting notes", "transcription", "meeting assistant", "productivity", "Zoom", "free tier"],
    category: "AI Tools & Development", rating: 4.6, isFree: true,
  },
  {
    icon: Mic, title: "Otter.ai",
    description: "Real-time AI meeting transcription, notes, and action-item extraction across Zoom, Google Meet, and Teams. Free plan with 300 minutes/month.",
    emoji: "🦦", color: "from-sky-500 to-indigo-700",
    directUrl: "https://otter.ai/?via=aiwebtools",
    tags: ["meeting transcription", "AI notes", "speech to text", "productivity", "free tier"],
    category: "AI Tools & Development", rating: 4.6, isFree: true,
  },
  {
    icon: Bot, title: "Sembly AI",
    description: "AI meeting assistant that generates smart summaries, tasks, and insights from calls in 42+ languages. Free personal plan.",
    emoji: "🧠", color: "from-purple-500 to-fuchsia-700",
    directUrl: "https://www.sembly.ai/?via=aiwebtools",
    tags: ["meeting AI", "transcription", "summaries", "productivity", "multilingual", "free tier"],
    category: "AI Tools & Development", rating: 4.4,
  },
  {
    icon: Mic, title: "Notta",
    description: "AI transcription and translation tool supporting 58 languages with real-time transcription, meeting recording, and AI summaries. Free plan available.",
    emoji: "📝", color: "from-emerald-500 to-teal-700",
    directUrl: "https://www.notta.ai/?via=aiwebtools",
    tags: ["transcription", "translation", "meeting notes", "multilingual", "productivity", "free tier"],
    category: "AI Tools & Development", rating: 4.5, isFree: true,
  },
  {
    icon: FileText, title: "Docparser",
    description: "AI-powered document data extraction from PDFs, Word docs, and images into structured data with zero coding. Free trial available.",
    emoji: "📄", color: "from-blue-500 to-indigo-700",
    directUrl: "https://docparser.com/?via=aiwebtools",
    tags: ["document AI", "PDF extraction", "data extraction", "OCR", "automation"],
    category: "AI Tools & Development", rating: 4.4,
  },
  {
    icon: FileSearch, title: "Rossum",
    description: "AI-driven invoice and document processing platform that automates data capture from any transactional document with high accuracy. Free trial.",
    emoji: "📑", color: "from-cyan-500 to-blue-700",
    directUrl: "https://rossum.ai/?via=aiwebtools",
    tags: ["invoice AI", "IDP", "document processing", "OCR", "automation", "enterprise"],
    category: "AI Tools & Development", rating: 4.5,
  },
  {
    icon: ScanText, title: "Klippa",
    description: "AI document processing and OCR platform for receipts, invoices, IDs, and contracts. Enterprise-grade IDP with free tier.",
    emoji: "✂️", color: "from-orange-500 to-amber-700",
    directUrl: "https://www.klippa.com/?via=aiwebtools",
    tags: ["document OCR", "receipt scanning", "IDP", "invoice processing", "automation", "free tier"],
    category: "AI Tools & Development", rating: 4.4,
  },
  {
    icon: ScanText, title: "Mindee",
    description: "Developer-friendly document AI APIs for invoices, receipts, IDs, and passports with an OSS receipt parser. Generous free tier.",
    emoji: "🧾", color: "from-pink-500 to-rose-700",
    directUrl: "https://www.mindee.com/?via=aiwebtools",
    tags: ["document AI", "OCR API", "receipt parser", "developer tools", "open source", "free tier"],
    category: "AI Tools & Development", rating: 4.6, isFree: true,
  },
  {
    icon: FileSearch, title: "AWS Textract",
    description: "Amazon's ML service that extracts text, handwriting, tables, and forms from scanned documents at scale. Free tier for the first 3 months.",
    emoji: "🅰️", color: "from-yellow-500 to-orange-700",
    directUrl: "https://aws.amazon.com/textract/?via=aiwebtools",
    tags: ["document AI", "OCR", "AWS", "forms extraction", "cloud AI", "free tier"],
    category: "AI Tools & Development", rating: 4.5,
  },
  {
    icon: FileText, title: "Azure Document Intelligence",
    description: "Microsoft's AI service (formerly Form Recognizer) that turns forms, invoices, and receipts into structured data with prebuilt and custom models. Free tier.",
    emoji: "🔷", color: "from-blue-500 to-sky-700",
    directUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence?via=aiwebtools",
    tags: ["document AI", "Azure", "form recognizer", "OCR", "IDP", "cloud AI", "free tier"],
    category: "AI Tools & Development", rating: 4.5,
  },
  {
    icon: FileText, title: "Google Document AI",
    description: "Google Cloud's document understanding platform that extracts, classifies, and splits documents with prebuilt and custom processors. Free credits.",
    emoji: "📘", color: "from-red-500 to-yellow-600",
    directUrl: "https://cloud.google.com/document-ai?via=aiwebtools",
    tags: ["document AI", "Google Cloud", "OCR", "IDP", "enterprise AI", "free credits"],
    category: "AI Tools & Development", rating: 4.5,
  },
  {
    icon: Cpu, title: "Reducto",
    description: "Enterprise-grade document parsing API that turns complex PDFs, tables, and figures into structured, LLM-ready JSON. Free tier for developers.",
    emoji: "🧩", color: "from-fuchsia-500 to-purple-700",
    directUrl: "https://reducto.ai/?via=aiwebtools",
    tags: ["document parsing", "LLM tooling", "RAG", "PDF extraction", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.6,
  },
  {
    icon: Layers, title: "LlamaParse",
    description: "LlamaIndex's flagship document parser purpose-built for RAG — extracts tables, images, and complex layouts from PDFs. Free tier: 1,000 pages/day.",
    emoji: "🦙", color: "from-pink-500 to-purple-700",
    directUrl: "https://www.llamaindex.ai/llamaparse?via=aiwebtools",
    tags: ["document parsing", "RAG", "LlamaIndex", "PDF AI", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.7, isFree: true,
  },
  {
    icon: Cloud, title: "LlamaCloud",
    description: "Managed platform from LlamaIndex for building production RAG pipelines with parsing, ingestion, indexing, and retrieval as a service. Free tier.",
    emoji: "☁️", color: "from-indigo-500 to-purple-700",
    directUrl: "https://cloud.llamaindex.ai/?via=aiwebtools",
    tags: ["RAG platform", "LlamaIndex", "vector search", "AI infrastructure", "developer tools", "free tier"],
    category: "AI Tools & Development", rating: 4.6,
  },
  {
    icon: Search, title: "Kagi",
    description: "Premium, ad-free search engine with built-in AI answers, custom lens filtering, and privacy-first design. 100 free searches on signup.",
    emoji: "🔎", color: "from-orange-500 to-yellow-600",
    directUrl: "https://kagi.com/?via=aiwebtools",
    tags: ["AI search", "privacy search", "ad-free", "search engine", "productivity"],
    category: "AI Tools & Development", rating: 4.7,
  },
  {
    icon: MessageCircleQuestion, title: "Andi",
    description: "Generative AI search engine that answers questions conversationally with visual results, no ads, and no tracking. 100% free.",
    emoji: "🤖", color: "from-cyan-500 to-blue-700",
    directUrl: "https://andisearch.com/?via=aiwebtools",
    tags: ["AI search", "generative search", "chat search", "privacy", "free"],
    category: "AI Tools & Development", rating: 4.5, isFree: true,
  },
  {
    icon: MessageCircleQuestion, title: "iAsk.Ai",
    description: "Free AI-powered answer engine that delivers instant, unbiased, factual answers to any question with cited sources. 100% free, no signup.",
    emoji: "❓", color: "from-violet-500 to-indigo-700",
    directUrl: "https://iask.ai/?via=aiwebtools",
    tags: ["AI answer engine", "AI search", "question answering", "research", "free"],
    category: "AI Tools & Development", rating: 4.5, isFree: true,
  },
];