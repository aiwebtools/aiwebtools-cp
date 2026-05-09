import { Tool } from "@/types/tools";
import { Workflow, Bot, Stethoscope } from "lucide-react";
import simStudioHero from "@/assets/tools/sim-studio-hero.jpg";
import agentkitHero from "@/assets/tools/agentkit-openai-hero.jpg";
import symptomateHero from "@/assets/tools/symptomate-hero.jpg";

/**
 * New AI Agents + Free Medical Doctor Chat — May 2026 Batch E
 * Two brand-new AI agent platforms not yet in the directory plus a 100% free
 * AI medical doctor chat. Fully indexed, intelligently searchable, and
 * SEO-optimized.
 */
export const newAgentsAndMedicalBatch2026E: Tool[] = [
  {
    icon: Workflow,
    title: "Sim Studio",
    description:
      "Sim Studio is an open-source visual AI agent workflow builder that lets you design, simulate, and deploy multi-agent systems on a drag-and-drop canvas. Connect planner, research, execution, and reviewer agents with any LLM (OpenAI, Anthropic, Google, Llama, Mistral), plug in 100+ tool integrations, debug runs step-by-step, and ship production agents to the cloud or self-host. Free to start with a generous community tier.",
    emoji: "🧩",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.sim.ai/?via=aiwebtools",
    imageUrl: simStudioHero,
    tagline: "Drag-and-drop multi-agent workflows you can actually ship.",
    tags: [
      "Sim Studio", "sim.ai", "sim studio ai", "AI agent builder",
      "visual agent builder", "multi-agent workflow", "no-code agents",
      "open source agent platform", "agent orchestration", "drag and drop AI",
      "AI workflow automation", "agent IDE", "LLM workflow builder",
      "AI Agents", "Multi-Agent Framework", "Automation Agent",
      "agent simulator", "self-hosted AI agents"
    ],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 2840
  },
  {
    icon: Bot,
    title: "AgentKit by OpenAI",
    description:
      "AgentKit is OpenAI's official toolkit for building, deploying, and scaling production AI agents. Includes the Agents SDK for orchestration, Agent Builder for visual workflow design, ChatKit for embeddable agent UIs, Connector Registry for tools and data sources, and built-in evaluations and tracing. Build single-agent or multi-agent systems with handoffs, guardrails, and real observability — straight from OpenAI.",
    emoji: "🤖",
    color: "from-emerald-500 to-slate-900",
    directUrl: "https://openai.com/index/introducing-agentkit/?via=aiwebtools",
    imageUrl: agentkitHero,
    tagline: "OpenAI's official kit for shipping production-grade AI agents.",
    tags: [
      "AgentKit", "OpenAI AgentKit", "agentkit openai", "openai agents",
      "Agents SDK", "Agent Builder", "ChatKit", "openai agent builder",
      "agent orchestration", "agent handoffs", "agent guardrails",
      "agent evaluations", "agent tracing", "production AI agents",
      "AI Agents", "Multi-Agent Framework", "Automation Agent",
      "openai sdk", "official openai agents", "agent connector registry"
    ],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 5120
  },
  {
    icon: Stethoscope,
    title: "Symptomate - Free AI Doctor Chat",
    description:
      "Symptomate is a 100% FREE AI medical doctor chat powered by Infermedica's clinically-validated medical engine. Describe your symptoms in natural conversation and get an instant triage report covering possible conditions, urgency level, and recommended next steps — including whether to see a doctor, go to the ER, or self-care at home. Available in 20+ languages on web and mobile, used by millions worldwide. Disclaimer: Symptomate is for informational purposes only and is not a replacement for professional medical advice, diagnosis, or treatment.",
    emoji: "🩺",
    color: "from-sky-500 to-blue-600",
    directUrl: "https://symptomate.com/?via=aiwebtools",
    imageUrl: symptomateHero,
    isFree: true,
    tagline: "Free AI doctor chat — describe symptoms, get instant triage.",
    tags: [
      "Symptomate", "symptomate", "symptomate.com", "free AI doctor",
      "free medical chat", "AI symptom checker", "AI doctor chat",
      "free doctor AI", "talk to AI doctor", "online doctor chat free",
      "AI health assistant", "symptom assessment", "medical triage AI",
      "Infermedica", "free health chat", "AI medical assistant",
      "Healthcare Professionals", "Health, Wellness & Personal Lifestyle",
      "AI Chat & Assistants", "free medical AI", "virtual doctor",
      "doctor in pocket", "health questions AI"
    ],
    category: "Healthcare Professionals",
    rating: 4.6,
    totalVotes: 3870
  }
];