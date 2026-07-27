import { Tool } from "@/types/tools";
import {
  BarChart3, GitCompare, Bot, Chrome, BookOpen, Video, Scissors,
  Database, Cpu, Shield, Users, Waves, Notebook, Layers, Workflow,
  Search, AlertTriangle, Radar, Activity, Rocket, LineChart, FileText,
  Zap, GitPullRequest, FileCode
} from "lucide-react";

import rillHero from "@/assets/tools/rill-hero.jpg";
import datafoldHero from "@/assets/tools/datafold-hero.jpg";
import qodoHero from "@/assets/tools/qodo-hero.jpg";
import siderHero from "@/assets/tools/sider-hero.jpg";
import wiseoneHero from "@/assets/tools/wiseone-hero.jpg";
import vidnozHero from "@/assets/tools/vidnoz-hero.jpg";
import klapHero from "@/assets/tools/klap-hero.jpg";
import chalkHero from "@/assets/tools/chalk-hero.jpg";
import novitaAiHero from "@/assets/tools/novita-ai-hero.jpg";
import gretelHero from "@/assets/tools/gretel-hero.jpg";
import mostlyAiHero from "@/assets/tools/mostly-ai-hero.jpg";
import hightouchHero from "@/assets/tools/hightouch-hero.jpg";
import censusHero from "@/assets/tools/census-hero.jpg";
import spiceAiHero from "@/assets/tools/spice-ai-hero.jpg";
import orkesHero from "@/assets/tools/orkes-hero.jpg";
import hyperdxHero from "@/assets/tools/hyperdx-hero.jpg";
import signozHero from "@/assets/tools/signoz-hero.jpg";
import checklyHero from "@/assets/tools/checkly-hero.jpg";
import noteableHero from "@/assets/tools/noteable-hero.jpg";
import zerveHero from "@/assets/tools/zerve-hero.jpg";
import activepiecesHero from "@/assets/tools/activepieces-hero.jpg";
import valdHero from "@/assets/tools/vald-hero.jpg";
import sentryAiHero from "@/assets/tools/sentry-ai-hero.jpg";
import raygunHero from "@/assets/tools/raygun-hero.jpg";
import logrocketHero from "@/assets/tools/logrocket-hero.jpg";
import coralogixHero from "@/assets/tools/coralogix-hero.jpg";
import logtailHero from "@/assets/tools/logtail-hero.jpg";
import betterStackHero from "@/assets/tools/better-stack-hero.jpg";
import graphiteHero from "@/assets/tools/graphite-hero.jpg";
import swimmHero from "@/assets/tools/swimm-hero.jpg";

// Batch XII 2026 — 30 verified real AI tools not previously indexed.
// Focus: BI/analytics, data quality, AI coding assistants, browser AI, video AI,
// feature stores, inference platforms, synthetic data, reverse ETL, data science
// notebooks, workflow orchestration, vector search, observability & code intelligence.
export const verifiedMissingBatch2026XII: Tool[] = [
  {
    icon: BarChart3, title: "Rill",
    description: "Rill is an open-source operational BI tool that turns raw data into fast, interactive dashboards in seconds — powered by DuckDB with sub-second slice-and-dice on billions of rows.",
    emoji: "📊", color: "from-orange-500 to-red-600",
    directUrl: "https://www.rilldata.com/?via=aiwebtools", imageUrl: rillHero,
    tags: ["Rill", "Rill Data", "BI", "dashboards", "DuckDB", "operational analytics", "open source", "Data & Analytics"],
    category: "Data & Analytics", rating: 4.7,
  },
  {
    icon: GitCompare, title: "Datafold",
    description: "Datafold is the AI-powered data reliability platform — data diff, column-level lineage, and CI checks that catch data quality issues before they hit production.",
    emoji: "🔀", color: "from-emerald-500 to-cyan-600",
    directUrl: "https://www.datafold.com/?via=aiwebtools", imageUrl: datafoldHero,
    tags: ["Datafold", "data diff", "data quality", "data reliability", "lineage", "CI for data", "Data & Analytics"],
    category: "Data & Analytics", rating: 4.6,
  },
  {
    icon: Bot, title: "Qodo",
    description: "Qodo (formerly Codium AI) is an AI code integrity platform — generates meaningful tests, reviews pull requests, and explains behavior across your codebase.",
    emoji: "🧪", color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.qodo.ai/?via=aiwebtools", imageUrl: qodoHero,
    tags: ["Qodo", "Codium AI", "AI code review", "test generation", "code integrity", "AI Coding"],
    category: "AI Coding Tools", rating: 4.7,
  },
  {
    icon: Chrome, title: "Sider",
    description: "Sider is an all-in-one AI browser copilot — chat with any webpage or PDF, translate, summarize, and use ChatGPT, Claude, and Gemini side-by-side.",
    emoji: "🧭", color: "from-blue-500 to-purple-600",
    directUrl: "https://sider.ai/?via=aiwebtools", imageUrl: siderHero,
    tags: ["Sider", "AI browser copilot", "ChatGPT sidebar", "AI extension", "webpage chat", "AI Assistants"],
    category: "AI Assistants", rating: 4.6,
  },
  {
    icon: BookOpen, title: "Wiseone",
    description: "Wiseone is an AI reading companion browser extension — explains difficult terms, fact-checks, and surfaces related sources as you read online.",
    emoji: "🦉", color: "from-teal-500 to-blue-600",
    directUrl: "https://wiseone.io/?via=aiwebtools", imageUrl: wiseoneHero,
    tags: ["Wiseone", "AI reading assistant", "browser extension", "fact check", "study aid", "AI Assistants"],
    category: "AI Assistants", rating: 4.5,
  },
  {
    icon: Video, title: "Vidnoz AI",
    description: "Vidnoz AI generates studio-quality talking-avatar videos from text — 1,500+ AI avatars, 1,380+ voices, face swap, and lip-sync in 140+ languages.",
    emoji: "🎥", color: "from-pink-500 to-rose-600",
    directUrl: "https://www.vidnoz.com/?via=aiwebtools", imageUrl: vidnozHero,
    tags: ["Vidnoz", "AI avatar video", "text to video", "face swap", "AI voiceover", "Video Generation"],
    category: "Video Generation", rating: 4.6,
  },
  {
    icon: Scissors, title: "Klap",
    description: "Klap turns long YouTube videos into viral TikTok, Reels, and Shorts automatically — AI reframing, captions, and highlight detection in one click.",
    emoji: "✂️", color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://klap.app/?via=aiwebtools", imageUrl: klapHero,
    tags: ["Klap", "video repurposing", "shorts generator", "TikTok clips", "YouTube to Shorts", "Video Editing"],
    category: "Video Editing", rating: 4.6,
  },
  {
    icon: Database, title: "Chalk",
    description: "Chalk is the real-time feature store for machine learning — declare Python features, get sub-millisecond serving, offline training, and streaming pipelines out of the box.",
    emoji: "🧮", color: "from-slate-700 to-emerald-500",
    directUrl: "https://chalk.ai/?via=aiwebtools", imageUrl: chalkHero,
    tags: ["Chalk", "feature store", "real-time ML", "MLOps", "Python features", "AI Infrastructure"],
    category: "AI Infrastructure", rating: 4.6,
  },
  {
    icon: Cpu, title: "Novita AI",
    description: "Novita AI is a serverless GPU cloud for AI inference — 200+ open-source models, cheap image/video generation APIs, and pay-per-second H100/A100 rentals.",
    emoji: "🚀", color: "from-cyan-500 to-blue-700",
    directUrl: "https://novita.ai/?via=aiwebtools", imageUrl: novitaAiHero,
    tags: ["Novita AI", "GPU cloud", "AI inference", "serverless GPU", "open source models", "AI Infrastructure"],
    category: "AI Infrastructure", rating: 4.7,
  },
  {
    icon: Shield, title: "Gretel",
    description: "Gretel generates safe synthetic data on demand — differentially-private, drop-in replacements for sensitive datasets so teams can train and share without leaking PII.",
    emoji: "🛡️", color: "from-indigo-500 to-purple-700",
    directUrl: "https://gretel.ai/?via=aiwebtools", imageUrl: gretelHero,
    tags: ["Gretel", "synthetic data", "differential privacy", "PII", "data anonymization", "AI Data"],
    category: "Data & Analytics", rating: 4.6,
  },
  {
    icon: Users, title: "MOSTLY AI",
    description: "MOSTLY AI is the enterprise synthetic data platform — generates statistically identical, privacy-safe versions of production datasets for banks, insurers, and healthcare.",
    emoji: "👥", color: "from-blue-600 to-teal-500",
    directUrl: "https://mostly.ai/?via=aiwebtools", imageUrl: mostlyAiHero,
    tags: ["MOSTLY AI", "synthetic data", "enterprise privacy", "GDPR", "data sharing", "AI Data"],
    category: "Data & Analytics", rating: 4.6,
  },
  {
    icon: Waves, title: "Hightouch",
    description: "Hightouch is the leading AI-powered composable CDP and reverse ETL — sync warehouse data to 200+ business tools with SQL, no engineering required.",
    emoji: "🌊", color: "from-purple-500 to-pink-500",
    directUrl: "https://hightouch.com/?via=aiwebtools", imageUrl: hightouchHero,
    tags: ["Hightouch", "reverse ETL", "composable CDP", "data activation", "SQL sync", "Marketing & Sales"],
    category: "Marketing & Sales", rating: 4.7,
  },
  {
    icon: Waves, title: "Census",
    description: "Census is the operational data activation platform — sync customer data from Snowflake, BigQuery, and Databricks to Salesforce, HubSpot, and every SaaS tool.",
    emoji: "🔄", color: "from-pink-500 to-purple-600",
    directUrl: "https://www.getcensus.com/?via=aiwebtools", imageUrl: censusHero,
    tags: ["Census", "data activation", "reverse ETL", "customer data platform", "warehouse to SaaS", "Marketing & Sales"],
    category: "Marketing & Sales", rating: 4.6,
  },
  {
    icon: Zap, title: "Spice.ai",
    description: "Spice.ai is a portable AI data engine — accelerates SQL by 10-100x, brings AI to your data wherever it lives, and runs anywhere from edge to cloud.",
    emoji: "🌶️", color: "from-orange-500 to-pink-600",
    directUrl: "https://spice.ai/?via=aiwebtools", imageUrl: spiceAiHero,
    tags: ["Spice.ai", "AI data engine", "SQL acceleration", "edge AI", "portable data", "AI Infrastructure"],
    category: "AI Infrastructure", rating: 4.6,
  },
  {
    icon: Workflow, title: "Orkes",
    description: "Orkes is the AI-native workflow orchestration platform built on Netflix Conductor — design, run, and scale resilient microservice and agent workflows across any infrastructure.",
    emoji: "🎼", color: "from-pink-500 to-blue-600",
    directUrl: "https://orkes.io/?via=aiwebtools", imageUrl: orkesHero,
    tags: ["Orkes", "Conductor", "workflow orchestration", "AI workflows", "microservices", "AI Agents"],
    category: "AI Agents", rating: 4.6,
  },
  {
    icon: Notebook, title: "Noteable",
    description: "Noteable is a collaborative AI-powered notebook for data teams — Python, SQL, and visualizations with a real-time AI assistant that turns questions into charts.",
    emoji: "📓", color: "from-purple-500 to-blue-500",
    directUrl: "https://noteable.io/?via=aiwebtools", imageUrl: noteableHero,
    tags: ["Noteable", "AI notebook", "collaborative data science", "Python notebook", "Jupyter alternative", "Data & Analytics"],
    category: "Data & Analytics", rating: 4.5,
  },
  {
    icon: Layers, title: "Zerve",
    description: "Zerve is the AI data science operating system — a visual canvas for connecting code, data, models, and AI agents in one collaborative workspace.",
    emoji: "🧬", color: "from-violet-500 to-fuchsia-600",
    directUrl: "https://www.zerve.ai/?via=aiwebtools", imageUrl: zerveHero,
    tags: ["Zerve", "data science canvas", "AI OS", "visual notebook", "collaborative ML", "Data & Analytics"],
    category: "Data & Analytics", rating: 4.5,
  },
  {
    icon: Workflow, title: "Activepieces",
    description: "Activepieces is an open-source AI automation platform — visual workflow builder with 200+ pieces, self-hostable, and MIT-licensed alternative to Zapier and Make.",
    emoji: "🧩", color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.activepieces.com/?via=aiwebtools", imageUrl: activepiecesHero,
    tags: ["Activepieces", "open source automation", "Zapier alternative", "workflow builder", "self-hosted", "AI Agents"],
    category: "AI Agents", rating: 4.7,
  },
  {
    icon: Search, title: "Vald",
    description: "Vald is a highly scalable, cloud-native distributed vector search engine — designed for billion-scale similarity search with fast indexing on Kubernetes.",
    emoji: "🔎", color: "from-blue-500 to-indigo-700",
    directUrl: "https://vald.vdaas.org/?via=aiwebtools", imageUrl: valdHero,
    tags: ["Vald", "vector search", "distributed", "Kubernetes", "similarity search", "open source", "AI Infrastructure"],
    category: "AI Infrastructure", rating: 4.5,
  },
  {
    icon: AlertTriangle, title: "Sentry AI",
    description: "Sentry AI adds autonomous issue triage to Sentry's error monitoring — AI Autofix suggests root causes and code changes for exceptions in real time.",
    emoji: "🚨", color: "from-purple-600 to-violet-800",
    directUrl: "https://sentry.io/for/ai/?via=aiwebtools", imageUrl: sentryAiHero,
    tags: ["Sentry", "Sentry AI", "AI Autofix", "error monitoring", "root cause analysis", "AI Coding"],
    category: "AI Coding Tools", rating: 4.7,
  },
  {
    icon: Radar, title: "Raygun",
    description: "Raygun is real-user monitoring, crash reporting, and application performance monitoring in one platform — see every user experience across web and mobile.",
    emoji: "📡", color: "from-red-500 to-orange-500",
    directUrl: "https://raygun.com/?via=aiwebtools", imageUrl: raygunHero,
    tags: ["Raygun", "APM", "crash reporting", "real user monitoring", "error tracking", "Developer Tools"],
    category: "Developer Tools", rating: 4.5,
  },
  {
    icon: Activity, title: "LogRocket",
    description: "LogRocket combines session replay, frontend performance monitoring, and AI-powered issue detection — see exactly what users saw when things broke.",
    emoji: "🚀", color: "from-purple-500 to-indigo-600",
    directUrl: "https://logrocket.com/?via=aiwebtools", imageUrl: logrocketHero,
    tags: ["LogRocket", "session replay", "frontend monitoring", "AI issue detection", "user experience", "Developer Tools"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: LineChart, title: "Coralogix",
    description: "Coralogix is an AI-powered observability platform — streaming analytics on logs, metrics, and traces without indexing, at a fraction of legacy SIEM costs.",
    emoji: "🪸", color: "from-emerald-500 to-teal-600",
    directUrl: "https://coralogix.com/?via=aiwebtools", imageUrl: coralogixHero,
    tags: ["Coralogix", "observability", "log analytics", "streaming analytics", "APM", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: FileText, title: "Logtail",
    description: "Logtail is modern log management with SQL-compatible querying — search billions of log lines in milliseconds with a beautiful, developer-friendly UI.",
    emoji: "📜", color: "from-violet-500 to-purple-700",
    directUrl: "https://betterstack.com/logtail/?via=aiwebtools", imageUrl: logtailHero,
    tags: ["Logtail", "log management", "SQL logs", "Better Stack", "developer tools", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Rocket, title: "Better Stack",
    description: "Better Stack unifies log management, uptime monitoring, and incident management in one platform — beautiful dashboards and instant alerts for reliable software.",
    emoji: "📈", color: "from-purple-500 to-blue-600",
    directUrl: "https://betterstack.com/?via=aiwebtools", imageUrl: betterStackHero,
    tags: ["Better Stack", "uptime monitoring", "incident management", "log management", "observability", "Developer Tools"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: GitPullRequest, title: "Graphite",
    description: "Graphite is the AI-powered code review platform for stacked pull requests — Diamond AI reviews code and suggests fixes so teams ship faster with fewer bugs.",
    emoji: "💎", color: "from-purple-500 to-indigo-700",
    directUrl: "https://graphite.dev/?via=aiwebtools", imageUrl: graphiteHero,
    tags: ["Graphite", "Diamond AI", "AI code review", "stacked PRs", "developer productivity", "AI Coding"],
    category: "AI Coding Tools", rating: 4.7,
  },
  {
    icon: FileCode, title: "Swimm",
    description: "Swimm is AI-powered code documentation that stays in sync with your codebase — auto-generates and updates docs so engineers understand any code, faster.",
    emoji: "🏊", color: "from-blue-500 to-cyan-500",
    directUrl: "https://swimm.io/?via=aiwebtools", imageUrl: swimmHero,
    tags: ["Swimm", "code documentation", "AI docs", "developer onboarding", "living documentation", "AI Coding"],
    category: "AI Coding Tools", rating: 4.6,
  },
  {
    icon: Activity, title: "HyperDX",
    description: "HyperDX is an open-source observability platform that unifies traces, logs, metrics, and session replays in one experience — an OSS Datadog alternative.",
    emoji: "🔭", color: "from-purple-500 to-pink-500",
    directUrl: "https://www.hyperdx.io/?via=aiwebtools", imageUrl: hyperdxHero,
    tags: ["HyperDX", "open source observability", "session replay", "APM", "Datadog alternative", "Developer Tools"],
    category: "Developer Tools", rating: 4.6,
  },
  {
    icon: LineChart, title: "SigNoz",
    description: "SigNoz is an open-source APM and observability platform built on OpenTelemetry — unified metrics, traces, and logs as a self-hostable Datadog alternative.",
    emoji: "📶", color: "from-orange-500 to-red-500",
    directUrl: "https://signoz.io/?via=aiwebtools", imageUrl: signozHero,
    tags: ["SigNoz", "OpenTelemetry", "open source APM", "observability", "Datadog alternative", "Developer Tools"],
    category: "Developer Tools", rating: 4.7,
  },
  {
    icon: Radar, title: "Checkly",
    description: "Checkly is code-driven synthetic monitoring — write Playwright browser tests and API checks that run from 50+ global locations to catch outages before users do.",
    emoji: "✅", color: "from-blue-500 to-cyan-500",
    directUrl: "https://www.checklyhq.com/?via=aiwebtools", imageUrl: checklyHero,
    tags: ["Checkly", "synthetic monitoring", "Playwright", "API monitoring", "uptime checks", "Developer Tools"],
    category: "Developer Tools", rating: 4.7,
  },
];