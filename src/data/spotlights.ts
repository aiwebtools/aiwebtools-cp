import { Tool } from "@/types/tools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";
import { generateToolSlug } from "@/utils/urlGenerator";

/**
 * SPOTLIGHT PAGES ("back pages")
 * -----------------------------------------------------------------------------
 * 100 long-form, SEO-optimised write-ups — one per AIWebTools.ai custom GPT /
 * Gem — that each link back into the tool's own page, its category and the
 * wider directory. Everything below is derived from the REAL tool records in
 * our database (title, description, category, tags, live URL). Nothing is
 * invented: no ratings, no testimonials, no fabricated statistics.
 */

export const SPOTLIGHT_COUNT = 100;

export interface SpotlightSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Spotlight {
  slug: string;
  toolTitle: string;
  toolSlug: string;
  toolUrl?: string;
  category: string;
  emoji: string;
  imageUrl?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keywords: string[];
  publishDate: string;
  readTime: string;
  sections: SpotlightSection[];
  faq: Array<{ q: string; a: string }>;
}

const clean = (value?: string) => (value || "").replace(/\s+/g, " ").trim();

const firstSentence = (text: string) => {
  const t = clean(text);
  const match = t.match(/^(.{40,220}?[.!?])\s/);
  return match ? match[1] : t.slice(0, 200);
};

const truncate = (text: string, max: number) => {
  const t = clean(text);
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).replace(/[,\s]+\S*$/, "")}…`;
};

/** Deterministic angle so each of the 100 pages reads differently. */
const ANGLES = [
  {
    key: "why-it-stands-out",
    titleFor: (name: string) => `${name}: Why This AI Tool Stands Out`,
    lead: "stands apart from the crowd",
  },
  {
    key: "hands-on-guide",
    titleFor: (name: string) => `${name} Explained — A Practical Guide`,
    lead: "works in practice",
  },
  {
    key: "who-its-for",
    titleFor: (name: string) => `${name} Review: Who Should Use It`,
    lead: "fits into real workflows",
  },
  {
    key: "deep-dive",
    titleFor: (name: string) => `Inside ${name} — Features, Use Cases & Tips`,
    lead: "was designed and what it unlocks",
  },
] as const;

const buildSpotlight = (tool: Tool, index: number, siblings: Tool[]): Spotlight => {
  const name = clean(tool.title);
  const description = clean(tool.description) || `${name} is a custom AI assistant built by AIWebTools.ai.`;
  const category = clean(tool.category) || "AI Tools";
  const angle = ANGLES[index % ANGLES.length];
  const toolSlug = generateToolSlug(name);
  const tags = (tool.tags || []).map(clean).filter(Boolean).slice(0, 8);

  const related = siblings
    .filter((t) => t.title !== tool.title && clean(t.category) === category)
    .slice(0, 3);

  const title = angle.titleFor(name);

  const sections: SpotlightSection[] = [
    {
      heading: `What ${name} actually does`,
      body: `${description}\n\nIt lives inside the AIWebTools.ai directory alongside thousands of other catalogued AI tools, filed under ${category}. Every custom GPT and Gem we publish is built for one job and tuned to do that job without the usual prompt wrestling.`,
    },
    {
      heading: `Why ${name} ${angle.lead}`,
      body: `Most general chat assistants make you re-explain your context every session. ${name} starts from a fixed brief, so the first answer already assumes what you are trying to accomplish.`,
      bullets: [
        `Purpose-built for ${category.toLowerCase()} work rather than generic conversation.`,
        `Free to open — no install, no account juggling, straight from the browser.`,
        tags.length
          ? `Indexed under ${tags.slice(0, 4).join(", ")}, so it surfaces the moment you search those terms.`
          : `Fully indexed in our search bar so it surfaces the moment you look for it.`,
        `Maintained by AIWebTools.ai and cross-linked to related tools in the same category.`,
      ],
    },
    {
      heading: "How to get the most out of it",
      body: `Open ${name}, describe your situation in plain language, and let it ask for what it still needs. The more specific your opening message — goal, constraints, audience, format — the closer the first draft lands. Follow-up messages refine rather than restart, so keep the session going instead of opening a fresh one.`,
      bullets: [
        "Start with the outcome you want, not the steps you think it should take.",
        "Give it any real numbers, names or files it should work from.",
        "Ask it to reformat, shorten or expand the result — it holds the context.",
      ],
    },
    {
      heading: `${name} in the wider AI toolkit`,
      body: related.length
        ? `If you are working through a bigger project, pair it with other ${category} tools in the directory — for example ${related
            .map((r) => clean(r.title))
            .join(", ")}. Browsing the full category is usually faster than searching blind.`
        : `Browse the full ${category} category to see everything else we catalogue in this space, or search the directory for a narrower use case.`,
    },
  ];

  const faq = [
    {
      q: `Is ${name} free to use?`,
      a: `Yes — ${name} opens directly from AIWebTools.ai at no cost. Any usage limits come from the underlying model provider, not from us.`,
    },
    {
      q: `What is ${name} best at?`,
      a: firstSentence(description),
    },
    {
      q: `Where can I find similar AI tools?`,
      a: `The ${category} category on AIWebTools.ai lists every related tool we have catalogued, and the site-wide search bar indexes the full directory.`,
    },
  ];

  const metaDescription = truncate(
    `${name} — ${firstSentence(description)} Read why it stands out, who it is for, and open it free on AIWebTools.ai.`,
    158
  );

  return {
    slug: `${toolSlug}-${angle.key}`,
    toolTitle: name,
    toolSlug,
    toolUrl: tool.directUrl,
    category,
    emoji: tool.emoji || "🤖",
    imageUrl: tool.imageUrl,
    title,
    metaTitle: truncate(`${title} | AIWebTools.ai`, 60),
    metaDescription,
    intro: `${description}`,
    keywords: Array.from(
      new Set([
        name.toLowerCase(),
        `${name.toLowerCase()} review`,
        `${name.toLowerCase()} ai tool`,
        category.toLowerCase(),
        "ai tools",
        "free ai tools",
        "custom gpt",
        ...tags.map((t) => t.toLowerCase()),
      ])
    ).slice(0, 12),
    publishDate: "2026-01-15",
    readTime: "5 min",
    sections,
    faq,
  };
};

let cache: Spotlight[] | null = null;

export const getSpotlights = (): Spotlight[] => {
  if (cache) return cache;

  const seen = new Set<string>();
  const source = aiWebToolsGPTs.filter((tool) => {
    const key = clean(tool.title).toLowerCase();
    if (!key || seen.has(key)) return false;
    if (!clean(tool.description)) return false;
    seen.add(key);
    return true;
  });

  const picked = source.slice(0, SPOTLIGHT_COUNT);
  const usedSlugs = new Set<string>();
  const built: Spotlight[] = [];

  picked.forEach((tool, index) => {
    const spotlight = buildSpotlight(tool, index, source);
    if (!spotlight.slug || usedSlugs.has(spotlight.slug)) return;
    usedSlugs.add(spotlight.slug);
    built.push(spotlight);
  });

  cache = built;
  return built;
};

export const getSpotlightBySlug = (slug: string): Spotlight | undefined =>
  getSpotlights().find((s) => s.slug === slug);

export const getRelatedSpotlights = (slug: string, limit = 6): Spotlight[] => {
  const all = getSpotlights();
  const current = all.find((s) => s.slug === slug);
  if (!current) return all.slice(0, limit);
  const sameCategory = all.filter((s) => s.slug !== slug && s.category === current.category);
  const rest = all.filter((s) => s.slug !== slug && s.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
};
