import { Tool } from "@/types/tools";
import { Sparkles } from "lucide-react";

import gpt51Hero from "@/assets/tools/gpt-5-1-hero.jpg";
import gpt51CodexMaxHero from "@/assets/tools/gpt-5-1-codex-max-hero.jpg";
import claudeOpus45Hero from "@/assets/tools/claude-opus-4-5-hero.jpg";
import gemini3ProHero from "@/assets/tools/gemini-3-pro-hero.jpg";
import grok41Hero from "@/assets/tools/grok-4-1-hero.jpg";

// Top 5 trending AI models released November 2025/2026 — verified launch URLs
export const trendingAIModels2026Nov: Tool[] = [
  {
    icon: Sparkles,
    title: "GPT-5.1",
    description: "OpenAI's GPT-5.1 — the next-generation model in the GPT-5 series that dynamically adapts thinking depth based on task complexity. Significantly faster and more token-efficient on everyday tasks while delivering frontier reasoning for complex agentic and coding workloads. Available now in ChatGPT and the OpenAI API for developers.",
    emoji: "🧠",
    color: "from-emerald-500 to-teal-700",
    directUrl: "https://chatgpt.com/?via=aiwebtools",
    imageUrl: gpt51Hero,
    tags: ["GPT-5.1", "GPT 5.1", "OpenAI", "ChatGPT", "GPT5", "frontier model", "agentic AI", "reasoning model", "AI Chat Platforms", "Large Language Models", "LLM", "new AI 2026", "trending AI", "latest AI release"],
    category: "AI Chat Platforms",
    rating: 4.9,
    totalVotes: 12450
  },
  {
    icon: Sparkles,
    title: "GPT-5.1 Codex Max",
    description: "OpenAI's frontier agentic coding model — built on the GPT-5.1 reasoning foundation and trained for software engineering, math, and research. Available in Codex CLI and IDE integrations, GPT-5.1-Codex-Max delivers state-of-the-art performance for autonomous coding agents that build, test, and ship production software.",
    emoji: "⚡",
    color: "from-green-500 to-emerald-700",
    directUrl: "https://openai.com/index/gpt-5-1-codex-max/?via=aiwebtools",
    imageUrl: gpt51CodexMaxHero,
    tags: ["GPT-5.1 Codex Max", "Codex Max", "GPT 5.1 Codex", "OpenAI Codex", "AI coding agent", "agentic coding", "autonomous coding", "AI Development Tools", "AI Coding Assistants", "code generation", "OpenAI", "frontier model", "trending AI", "new AI 2026"],
    category: "AI Development Tools",
    rating: 4.9,
    totalVotes: 9870
  },
  {
    icon: Sparkles,
    title: "Claude Opus 4.5",
    description: "Anthropic's Claude Opus 4.5 — the world's best model for coding, agents, and computer use, also significantly improved at deep research, slides, and spreadsheets. State-of-the-art on real-world software engineering benchmarks and a major leap in what AI systems can do for everyday knowledge work. Available in Claude.ai and the Anthropic API.",
    emoji: "✨",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://claude.ai/?via=aiwebtools",
    imageUrl: claudeOpus45Hero,
    tags: ["Claude Opus 4.5", "Claude 4.5", "Claude Opus", "Anthropic", "Claude AI", "AI Chat Platforms", "frontier model", "coding agent", "computer use", "deep research", "Large Language Models", "LLM", "trending AI", "new AI 2026", "latest AI release"],
    category: "AI Chat Platforms",
    rating: 4.9,
    totalVotes: 11200
  },
  {
    icon: Sparkles,
    title: "Gemini 3 Pro",
    description: "Google DeepMind's Gemini 3 Pro — the most intelligent Gemini model, with sharper reasoning, a major leap in vibe coding, multimodal mastery, and a new experimental agent. Built on a sparse mixture-of-experts architecture and embedded directly into Google Search, the Gemini app, and AI Studio for developers.",
    emoji: "💎",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gemini.google.com/?via=aiwebtools",
    imageUrl: gemini3ProHero,
    tags: ["Gemini 3", "Gemini 3 Pro", "Google Gemini", "Google DeepMind", "Gemini AI", "AI Chat Platforms", "multimodal AI", "vibe coding", "frontier model", "Google AI", "Large Language Models", "LLM", "trending AI", "new AI 2026", "latest AI release"],
    category: "AI Chat Platforms",
    rating: 4.9,
    totalVotes: 13580
  },
  {
    icon: Sparkles,
    title: "Grok 4.1",
    description: "xAI's Grok 4.1 — featuring more natural, fluid dialogue while maintaining strong core reasoning. Sets a new standard in blind human preference tests and emotional intelligence with reduced hallucinations and upgraded multimodal performance. Grok 4.1 Fast brings agentic tool-calling to the xAI API at competitive enterprise pricing.",
    emoji: "🚀",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://grok.com/?via=aiwebtools",
    imageUrl: grok41Hero,
    tags: ["Grok 4.1", "Grok 4", "xAI Grok", "xAI", "Elon Musk AI", "AI Chat Platforms", "frontier model", "agentic AI", "tool calling", "multimodal AI", "Large Language Models", "LLM", "trending AI", "new AI 2026", "latest AI release"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 8940
  }
];