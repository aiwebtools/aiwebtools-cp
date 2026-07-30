// Central pricing classification: FREE / FREEMIUM / PAID
// Pure heuristics — never mutates or removes tools, only enriches tags.
import { Tool } from "@/types/tools";
import { isFreeTool } from "@/utils/freeToolDetection";

export type ToolPricing = "free" | "freemium" | "paid";

const FREE_DOMAINS = [
  "github.com",
  "huggingface.co",
  "gitlab.com",
  "sourceforge.net",
  "wikipedia.org",
  "gutenberg.org",
  "archive.org",
  "ocw.mit.edu",
  "khanacademy.org",
  "colab.research.google.com",
  "kaggle.com",
];

const FREE_HINTS = [
  "open source",
  "open-source",
  "opensource",
  "completely free",
  "100% free",
  "totally free",
  "free and open",
  "free forever",
  "self-hosted",
  "self hosted",
  "mit license",
  "apache license",
  "gpl",
  "no cost",
  "public domain",
];

const PAID_HINTS = [
  "no free tier",
  "paid only",
  "subscription only",
  "enterprise only",
  "requires a paid",
  "paid plan required",
  "premium only",
];

const haystack = (tool: Tool): string =>
  `${tool.description || ""} ${(tool.tags || []).join(" ")}`.toLowerCase();

/**
 * Classify a tool's pricing model.
 * - free: AIWebTools originals, custom GPTs/Gems, open-source & always-free resources
 * - paid: tools explicitly described as paid-only
 * - freemium: everything else (standard SaaS with a free tier/trial)
 */
export const getToolPricing = (tool: Tool): ToolPricing => {
  if (!tool) return "freemium";

  const url = (tool.directUrl || "").toLowerCase();
  const text = haystack(tool);

  if (isFreeTool(tool)) return "free";
  if (FREE_DOMAINS.some(d => url.includes(d))) return "free";
  if (FREE_HINTS.some(h => text.includes(h))) return "free";
  if (PAID_HINTS.some(h => text.includes(h))) return "paid";

  return "freemium";
};

export const getPricingLabel = (pricing: ToolPricing): string =>
  pricing === "free" ? "FREE" : pricing === "freemium" ? "FREEMIUM" : "PAID";

/**
 * Injects pricing tags ("Free" / "Freemium" / "Paid" + search aliases) into
 * every tool so all search bars can find them. Runs once at module load.
 */
export const ensurePricingTags = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    const pricing = getToolPricing(tool);
    const additions =
      pricing === "free"
        ? ["Free", "free tools", "free ai tools", "no cost"]
        : pricing === "freemium"
        ? ["Freemium", "free tier", "free trial"]
        : ["Paid", "premium pricing"];

    const existing = new Set((tool.tags || []).map(t => t.toLowerCase().trim()));
    const newTags = additions.filter(a => !existing.has(a.toLowerCase()));

    if (newTags.length === 0) return tool;
    return { ...tool, tags: [...(tool.tags || []), ...newTags] };
  });
};
