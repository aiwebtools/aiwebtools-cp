import { Tool } from "@/types/tools";
import {
  Headphones,
  FlaskConical,
  Infinity as InfinityIcon,
  ShieldCheck,
  Radar,
  Columns3,
  Crosshair,
  Siren,
  Dna,
  Workflow,
  Eye,
  Boxes,
} from "lucide-react";

import parahelpHero from "@/assets/tools/parahelp-hero.jpg";
import momenticHero from "@/assets/tools/momentic-hero.jpg";
import antithesisHero from "@/assets/tools/antithesis-hero.jpg";
import zenityHero from "@/assets/tools/zenity-hero.jpg";
import nomaSecurityHero from "@/assets/tools/noma-security-hero.jpg";
import pillarSecurityHero from "@/assets/tools/pillar-security-hero.jpg";
import aimSecurityHero from "@/assets/tools/aim-security-hero.jpg";
import dropzoneAiHero from "@/assets/tools/dropzone-ai-hero.jpg";
import intezerHero from "@/assets/tools/intezer-hero.jpg";
import tinesHero from "@/assets/tools/tines-hero.jpg";
import meticulousHero from "@/assets/tools/meticulous-hero.jpg";
import freestyleHero from "@/assets/tools/freestyle-sh-hero.jpg";

export const agentOpsSecurityBatch2026: Tool[] = [
  {
    icon: Headphones, title: "Parahelp",
    description: "An AI customer support agent built for AI-native companies, resolving technical tickets end to end with deep product context. Handles triage, escalation and multilingual replies inside your existing helpdesk.",
    emoji: "🎧", color: "from-emerald-500 to-emerald-700",
    directUrl: "https://parahelp.com/?via=aiwebtools", imageUrl: parahelpHero,
    tags: ["AI Customer Support", "AI Agents", "support automation", "helpdesk", "ticket triage", "customer service AI", "SaaS support"],
    category: "AI Customer Support", rating: 4.5,
  },
  {
    icon: InfinityIcon, title: "Momentic",
    description: "AI-native end-to-end testing that writes, runs and self-heals browser tests using natural language instead of brittle selectors. Cuts QA maintenance dramatically for fast-moving web teams.",
    emoji: "⚡", color: "from-blue-500 to-blue-700",
    directUrl: "https://momentic.ai/?via=aiwebtools", imageUrl: momenticHero,
    tags: ["Coding & Development", "Productivity & Utilities", "QA testing", "end-to-end testing", "test automation", "browser testing", "self-healing tests"],
    category: "Coding & Development", rating: 4.5,
  },
  {
    icon: FlaskConical, title: "Antithesis",
    description: "An autonomous software testing platform that runs your system inside a deterministic simulation, hunting rare bugs and then replaying them perfectly for debugging. Built for distributed systems and databases.",
    emoji: "🧪", color: "from-violet-500 to-violet-700",
    directUrl: "https://antithesis.com/?via=aiwebtools", imageUrl: antithesisHero,
    tags: ["Coding & Development", "Data & Analytics", "autonomous testing", "deterministic simulation", "bug hunting", "distributed systems", "reliability"],
    category: "Coding & Development", rating: 4.6,
  },
  {
    icon: ShieldCheck, title: "Zenity",
    description: "Security and governance for AI agents and copilots across the enterprise, giving full visibility into what every agent can access and do. Detects risky agent behavior and enforces guardrail policies.",
    emoji: "🛡️", color: "from-indigo-500 to-indigo-700",
    directUrl: "https://zenity.io/?via=aiwebtools", imageUrl: zenityHero,
    tags: ["Security & Privacy", "AI Agents", "AI governance", "agent security", "copilot security", "enterprise compliance", "guardrails"],
    category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Radar, title: "Noma Security",
    description: "AI security posture management that discovers shadow AI, maps model and data pipelines, and flags risk across the full AI lifecycle. Gives security teams a live inventory of every AI asset in the org.",
    emoji: "📡", color: "from-sky-500 to-sky-700",
    directUrl: "https://noma.security/?via=aiwebtools", imageUrl: nomaSecurityHero,
    tags: ["Security & Privacy", "Data & Analytics", "AI security posture", "shadow AI", "model risk", "AI inventory", "enterprise security"],
    category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Columns3, title: "Pillar Security",
    description: "A runtime security platform for AI applications that blocks prompt injection, jailbreaks and data leakage before they reach your model. Adds adaptive guardrails and red-teaming for LLM products.",
    emoji: "🏛️", color: "from-amber-500 to-amber-700",
    directUrl: "https://pillar.security/?via=aiwebtools", imageUrl: pillarSecurityHero,
    tags: ["Security & Privacy", "AI Agents", "prompt injection", "LLM security", "guardrails", "red teaming", "AI runtime protection"],
    category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Crosshair, title: "Aim Security",
    description: "A generative AI security platform that lets employees use copilots and chatbots safely while preventing sensitive data from leaving the company. Monitors GenAI usage and enforces real-time policy.",
    emoji: "🎯", color: "from-purple-500 to-purple-700",
    directUrl: "https://aim.security/?via=aiwebtools", imageUrl: aimSecurityHero,
    tags: ["Security & Privacy", "Business & Productivity", "GenAI security", "data loss prevention", "copilot governance", "enterprise AI", "policy enforcement"],
    category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Siren, title: "Dropzone AI",
    description: "An autonomous AI SOC analyst that investigates every security alert end to end and delivers a written conclusion with evidence. Frees human analysts from endless tier-one alert triage.",
    emoji: "🪂", color: "from-cyan-500 to-cyan-700",
    directUrl: "https://dropzone.ai/?via=aiwebtools", imageUrl: dropzoneAiHero,
    tags: ["Security & Privacy", "AI Agents", "SOC automation", "alert triage", "threat investigation", "cybersecurity AI", "incident response"],
    category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Dna, title: "Intezer",
    description: "Autonomous security operations powered by genetic code analysis that fingerprints malware down to reused code and delivers verdicts in seconds. Automates alert triage, memory forensics and threat hunting.",
    emoji: "🧬", color: "from-teal-500 to-teal-700",
    directUrl: "https://intezer.com/?via=aiwebtools", imageUrl: intezerHero,
    tags: ["Security & Privacy", "AI Agents", "malware analysis", "SOC automation", "threat hunting", "forensics", "code genome"],
    category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Workflow, title: "Tines",
    description: "A no-code workflow automation platform with an AI copilot, widely used by security and IT teams to orchestrate detection, response and operations. Connect any API and build audit-ready automations without scripting.",
    emoji: "🔗", color: "from-lime-500 to-emerald-700",
    directUrl: "https://tines.com/?via=aiwebtools", imageUrl: tinesHero,
    tags: ["Business & Productivity", "Security & Privacy", "workflow automation", "no-code", "SOAR", "IT operations", "AI copilot"],
    category: "Business & Productivity", rating: 4.7,
  },
  {
    icon: Eye, title: "Meticulous",
    description: "AI that watches real user sessions and automatically generates a visual regression test suite for your frontend, catching UI breakage before release. Zero test writing and zero maintenance.",
    emoji: "👁️", color: "from-rose-500 to-rose-700",
    directUrl: "https://meticulous.ai/?via=aiwebtools", imageUrl: meticulousHero,
    tags: ["Coding & Development", "Image & Design", "visual regression", "frontend testing", "UI testing", "automated QA", "screenshot diff"],
    category: "Coding & Development", rating: 4.4,
  },
  {
    icon: Boxes, title: "Freestyle",
    description: "Infrastructure for AI app builders that securely executes and deploys AI-generated code with instant git repos, sandboxes and live domains. The deployment layer behind agentic coding products.",
    emoji: "📦", color: "from-orange-500 to-orange-700",
    directUrl: "https://freestyle.sh/?via=aiwebtools", imageUrl: freestyleHero,
    tags: ["Coding & Development", "AI Agents", "code execution", "sandbox", "deployment", "developer infrastructure", "AI app builders"],
    category: "Coding & Development", rating: 4.3,
  },
];
