import { Tool } from "@/types/tools";
import { BarChart3, TrendingUp, Database, Sparkles, PieChart } from "lucide-react";

import tableauAiHero from "@/assets/tools/tableau-ai-hero.jpg";
import powerBiCopilotHero from "@/assets/tools/power-bi-copilot-hero.jpg";
import thoughtspotHero from "@/assets/tools/thoughtspot-hero.jpg";
import polymerHero from "@/assets/tools/polymer-hero.jpg";
import lookerGcloudHero from "@/assets/tools/looker-gcloud-hero.jpg";
import qlikSenseAiHero from "@/assets/tools/qlik-sense-ai-hero.jpg";

export const aiDataAnalyticsTools: Tool[] = [
  {
    icon: BarChart3,
    title: "Tableau AI",
    description: "AI-powered data visualization and business intelligence platform. Ask questions in natural language, get instant insights, and create stunning dashboards automatically.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.tableau.com/?via=aiwebtools",
    imageUrl: tableauAiHero,
    tags: ["Data Agent", "data visualization", "business intelligence", "AI analytics", "dashboards", "data insights", "BI platform", "agent", "Data Visualization", "Business Intelligence", "Dashboard"],
    category: "AI Data Analytics & BI",
    rating: 4.8,
    totalVotes: 15234
  },
  {
    icon: TrendingUp,
    title: "Power BI Copilot",
    description: "Microsoft's AI-powered business intelligence tool with natural language queries, automated insights, and intelligent data modeling. Transform data into actionable insights.",
    emoji: "📈",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://powerbi.microsoft.com/?via=aiwebtools",
    imageUrl: powerBiCopilotHero,
    tags: ["Data Agent", "business intelligence", "data visualization", "AI copilot", "Microsoft", "analytics", "dashboards", "data insights", "agent", "Data Visualization", "Business Intelligence", "Reporting"],
    category: "AI Data Analytics & BI",
    rating: 4.9,
    totalVotes: 18567
  },
  {
    icon: Sparkles,
    title: "ThoughtSpot",
    description: "AI-powered analytics platform with search-driven insights. Ask questions in plain English and get instant answers with interactive visualizations and analysis.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.thoughtspot.com/?via=aiwebtools",
    imageUrl: thoughtspotHero,
    tags: ["Data Agent", "AI analytics", "search analytics", "business intelligence", "data insights", "natural language", "self-service BI", "agent", "AI Analytics", "Business Intelligence"],
    category: "AI Data Analytics & BI",
    rating: 4.7,
    totalVotes: 8234
  },
  {
    icon: Database,
    title: "Polymer",
    description: "AI-powered data analysis tool that transforms spreadsheets into interactive dashboards. No coding required - just upload data and get instant insights with beautiful visualizations.",
    emoji: "🔮",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.polymersearch.com/?via=aiwebtools",
    imageUrl: polymerHero,
    tags: ["Data Agent", "data analysis", "spreadsheet analytics", "no-code", "AI insights", "data visualization", "automated dashboards", "agent", "Data Visualization", "Dashboard", "Data Analysis"],
    category: "AI Data Analytics & BI",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: PieChart,
    title: "Looker (Google Cloud)",
    description: "AI-enhanced business intelligence and analytics platform. Build data-driven applications, create custom reports, and share insights across your organization.",
    emoji: "🥧",
    color: "from-green-500 to-teal-600",
    directUrl: "https://cloud.google.com/looker?via=aiwebtools",
    imageUrl: lookerGcloudHero,
    tags: ["Data Agent", "business intelligence", "data analytics", "Google Cloud", "data modeling", "enterprise BI", "data insights", "agent", "Business Intelligence", "Reporting", "Data Visualization"],
    category: "AI Data Analytics & BI",
    rating: 4.7,
    totalVotes: 9876
  },
  {
    icon: BarChart3,
    title: "Qlik Sense",
    description: "AI-powered analytics platform with associative engine and intelligent insights. Discover hidden relationships in data and make data-driven decisions faster.",
    emoji: "📉",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://www.qlik.com/?via=aiwebtools",
    imageUrl: qlikSenseAiHero,
    tags: ["Data Agent", "analytics", "business intelligence", "AI insights", "data discovery", "enterprise analytics", "data visualization", "agent", "Business Intelligence", "Data Visualization", "AI Analytics"],
    category: "AI Data Analytics & BI",
    rating: 4.6,
    totalVotes: 7234
  }
];
