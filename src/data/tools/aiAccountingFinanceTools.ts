import { Tool } from "@/types/tools";
import { Calculator, DollarSign, CreditCard, TrendingUp, FileText, PieChart } from "lucide-react";

import quickbooksAiHero from "@/assets/tools/quickbooks-ai-hero.jpg";
import xeroAiHero from "@/assets/tools/xero-ai-hero.jpg";
import billComHero from "@/assets/tools/bill-com-hero.jpg";
import rampHero from "@/assets/tools/ramp-hero.jpg";
import expensifyHero from "@/assets/tools/expensify-hero.jpg";
import brexHero from "@/assets/tools/brex-hero.jpg";
import freshbooksHero from "@/assets/tools/freshbooks-hero.jpg";

export const aiAccountingFinanceTools: Tool[] = [
  {
    icon: Calculator,
    title: "QuickBooks AI",
    description: "AI-powered accounting software with automated bookkeeping, expense categorization, invoice management, and financial insights. Trusted by millions of small businesses.",
    emoji: "📊",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://quickbooks.intuit.com/?via=aiwebtools",
    imageUrl: quickbooksAiHero,
    tags: ["accounting", "bookkeeping", "invoicing", "expense tracking", "financial management", "small business", "Intuit"],
    category: "AI Accounting & Finance",
    rating: 4.7,
    totalVotes: 34567
  },
  {
    icon: FileText,
    title: "Xero AI",
    description: "Cloud-based accounting platform with AI-powered bank reconciliation, automated invoicing, expense claims, and real-time financial reporting for businesses.",
    emoji: "📈",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.xero.com/?via=aiwebtools",
    imageUrl: xeroAiHero,
    tags: ["cloud accounting", "bank reconciliation", "invoicing", "expense management", "financial reports", "small business"],
    category: "AI Accounting & Finance",
    rating: 4.6,
    totalVotes: 28934
  },
  {
    icon: CreditCard,
    title: "Bill.com",
    description: "AI-powered accounts payable and receivable automation. Streamline bill payment, invoice management, and approval workflows with intelligent automation.",
    emoji: "💳",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.bill.com/?via=aiwebtools",
    imageUrl: billComHero,
    tags: ["AP automation", "AR automation", "bill payment", "invoice management", "workflow automation", "payment processing"],
    category: "AI Accounting & Finance",
    rating: 4.6,
    totalVotes: 16789
  },
  {
    icon: TrendingUp,
    title: "Ramp",
    description: "AI-powered corporate card and spend management platform. Automate expense management, optimize spending, and get real-time financial insights with intelligent automation.",
    emoji: "🚀",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://ramp.com/?via=aiwebtools",
    imageUrl: rampHero,
    tags: ["corporate card", "spend management", "expense automation", "financial insights", "cost savings", "expense tracking"],
    category: "AI Accounting & Finance",
    rating: 4.8,
    totalVotes: 12456
  },
  {
    icon: DollarSign,
    title: "Expensify",
    description: "AI-powered expense management with receipt scanning, automated reporting, and real-time tracking. Simplify expense reports and reimbursements with smart automation.",
    emoji: "💰",
    color: "from-green-600 to-teal-700",
    directUrl: "https://www.expensify.com/?via=aiwebtools",
    imageUrl: expensifyHero,
    tags: ["expense management", "receipt scanning", "expense reports", "reimbursements", "travel expenses", "automation"],
    category: "AI Accounting & Finance",
    rating: 4.5,
    totalVotes: 19876
  },
  {
    icon: PieChart,
    title: "Brex",
    description: "AI-powered financial platform with corporate cards, banking, and spend management. Automate expense tracking, integrate with accounting software, and get real-time insights.",
    emoji: "💼",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://www.brex.com/?via=aiwebtools",
    imageUrl: brexHero,
    tags: ["corporate card", "business banking", "spend management", "expense automation", "financial platform", "rewards"],
    category: "AI Accounting & Finance",
    rating: 4.7,
    totalVotes: 14567
  },
  {
    icon: Calculator,
    title: "FreshBooks",
    description: "AI-enhanced accounting software for freelancers and small businesses. Automate invoicing, expense tracking, time tracking, and financial reporting with ease.",
    emoji: "📚",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.freshbooks.com/?via=aiwebtools",
    imageUrl: freshbooksHero,
    tags: ["accounting", "invoicing", "freelancers", "time tracking", "expense tracking", "small business", "financial reports"],
    category: "AI Accounting & Finance",
    rating: 4.6,
    totalVotes: 21234
  }
];
