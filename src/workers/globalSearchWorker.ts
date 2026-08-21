import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import {
  CATEGORY_TITLE_KEYWORDS,
  SIBLING_CATEGORIES,
  areSiblingCategories,
  areInSameFamily,
  detectToolCategoryFromTitle,
  getCategoryRelationshipScore,
} from "@/utils/search/categoryIntelligence";

type SearchRequest = {
  id: number;
  query: string;
};

type SearchResponse = {
  id: number;
  query: string;
  indices: number[];
  results: SearchResultLite[];
};

type SearchResultLite = {
  title: string;
  category?: string;
  description?: string;
  tags?: string[];
  directUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  emoji?: string;
  color?: string;
  rating?: number;
  totalVotes?: number;
  isFree?: boolean;
};

const sanitizeToolForMainThread = (tool: (typeof allTools)[number]): SearchResultLite => ({
  title: tool.title,
  category: tool.category,
  description: tool.description,
  tags: Array.isArray(tool.tags) ? tool.tags.slice(0, 24) : [],
  directUrl: tool.directUrl,
  imageUrl: tool.imageUrl,
  videoUrl: tool.videoUrl,
  emoji: tool.emoji,
  color: tool.color,
  rating: tool.rating,
  totalVotes: tool.totalVotes,
  isFree: tool.isFree,
});

const toolKey = (tool: (typeof allTools)[number]) =>
  `${(tool?.title || "").toLowerCase()}|||${(tool?.directUrl || "").toLowerCase()}`;

const toolIndexByKey = new Map<string, number>(
  allTools.map((tool, index) => [toolKey(tool), index])
);

const detectSearchIntent = (query: string): string[] => {
  const intents: string[] = [];
  const q = query.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_TITLE_KEYWORDS)) {
    if (keywords.some((kw) => q.includes(kw))) {
      intents.push(category);
    }
  }

  if (q.includes("trad") || q.includes("stock") || q.includes("crypto") || q.includes("forex") || q.includes("invest")) intents.push("trading");
  if (q.includes("video") || q.includes("movie") || q.includes("film")) intents.push("video");
  if (q.includes("music") || q.includes("song")) intents.push("music");
  if (
    q.includes("fx") ||
    q.includes("sfx") ||
    q.includes("sound effect") ||
    q.includes("sound effects") ||
    q.includes("sound design") ||
    q.includes("foley") ||
    q.includes("audio effect") ||
    (q.includes("sound") && q.includes("generat"))
  ) intents.push("audio");
  if (q.includes("audio") && !q.includes("fx") && !q.includes("effect")) intents.push("music");
  if (q.includes("image") || q.includes("picture") || q.includes("photo") || q.includes("art")) intents.push("image");
  if (q.includes("business") || q.includes("startup") || q.includes("entrepreneur")) intents.push("business");
  if (q.includes("history") || q.includes("historical") || q.includes("ancient")) intents.push("history");
  if (q.includes("learn") || q.includes("education") || q.includes("course")) intents.push("education");
  if (q.includes("health") || q.includes("medical") || q.includes("doctor")) intents.push("health");
  if (q.includes("legal") || q.includes("law") || q.includes("lawyer")) intents.push("legal");
  if (q.includes("spiritual") || q.includes("religion") || q.includes("god") || q.includes("meditation")) intents.push("spiritual");
  if (q.includes("code") || q.includes("coding") || q.includes("programming")) intents.push("coding");
  if (q.includes("writ") || q.includes("book") || q.includes("blog") || q.includes("article")) intents.push("writing");
  if (q.includes("science") || q.includes("research") || q.includes("experiment")) intents.push("science");
  if (q.includes("game") || q.includes("gaming")) intents.push("gaming");
  if (q.includes("security") || q.includes("cyber") || q.includes("hack")) intents.push("security");
  if (q.includes("philosophy") || q.includes("philosopher") || q.includes("wisdom")) intents.push("philosophy");
  if (q.includes("perplexity")) intents.push("perplexity bots");
  if (q.includes("perplexity")) intents.push("perplexity bots");

  return [...new Set(intents)];
};

const getMustHaveMatches = (q: string) => {
  return allTools.filter((tool) => {
    const title = (tool?.title || "").toLowerCase();
    const category = (tool?.category || "").toLowerCase();
    const tags = (tool?.tags || []).map((t: string) => t.toLowerCase());
    const firstWord = title.split(/\s+/)[0] || "";

    if (
      q.includes("image") || q.includes("generat") || q.includes("picture") ||
      q.includes("photo") || q.includes("art") || q.includes("visual") ||
      q.includes("dall") || q.includes("midjourney") || q.includes("stable diffusion")
    ) {
      const isImageTool =
        category.includes("image") || category.includes("design") ||
        category.includes("art") || category.includes("visual") ||
        title.includes("image") || title.includes("dall") ||
        title.includes("midjourney") || title.includes("stable diffusion") ||
        title.includes("ideogram") || title.includes("leonardo") ||
        title.includes("flux") || title.includes("firefly") ||
        tags.some((t: string) => t.includes("image") || t.includes("art") || t.includes("generator") || t.includes("design"));
      if (isImageTool) return true;
    }

    if (
      q.includes("video") || q.includes("movie") || q.includes("film") ||
      q.includes("sora") || q.includes("runway") || q.includes("pika") ||
      q.includes("kling") || q.includes("luma")
    ) {
      const isVideoTool =
        category.includes("video") ||
        title.includes("video") || title.includes("sora") ||
        title.includes("runway") || title.includes("pika") ||
        title.includes("kling") || title.includes("luma") ||
        tags.some((t: string) => t.includes("video") || t.includes("text to video"));
      if (isVideoTool) return true;
    }

    if (
      q.includes("fx") ||
      q.includes("sfx") ||
      q.includes("sound effect") ||
      q.includes("sound effects") ||
      q.includes("sound design") ||
      q.includes("foley") ||
      q.includes("audio effect") ||
      (q.includes("sound") && q.includes("generat"))
    ) {
      const isSoundFxTool =
        title.includes("eleven") || title.includes("elevenlabs") ||
        title.includes("sound") || title.includes("fx") ||
        category.includes("audio") || category.includes("sound") ||
        tags.some((t: string) => t.includes("sound") || t.includes("fx") || t.includes("sfx") || t.includes("effect"));
      if (isSoundFxTool) return true;
    }

    if (q.includes("music") || q.includes("song") || q.includes("suno") || q.includes("udio")) {
      const isMusicTool =
        category.includes("music") || category.includes("audio") ||
        title.includes("music") || title.includes("suno") || title.includes("udio") ||
        tags.some((t: string) => t.includes("music") || t.includes("audio"));
      if (isMusicTool) return true;
    }

    if (q.includes("code") || q.includes("coding") || q.includes("programming") || q.includes("developer") || q.includes("software")) {
      const isCodeTool =
        category.includes("code") || category.includes("develop") ||
        title.includes("code") || title.includes("programming") ||
        tags.some((t: string) => t.includes("code") || t.includes("develop"));
      if (isCodeTool) return true;
    }

    if (q.includes("learn") || q.startsWith("le") || q.includes("skill") || q.includes("education") || q.includes("course")) {
      if (title.includes("learn") || title.includes("course") || title.includes("education") || category.includes("education") || category.includes("learning")) return true;
    }

    if (
      q.includes("trad") || q.includes("stock") || q.includes("crypto") ||
      q.includes("forex") || q.includes("invest") || q.includes("coin") ||
      q.includes("bitcoin") || q.includes("ethereum") || q.includes("day trader") ||
      q.includes("daytrader") || q.includes("finance") || q.includes("financial")
    ) {
      if (title.includes("trader") || title.includes("chain") || title.includes("finchat") || title.includes("forex") || title.includes("credit") || title.includes("taxes") || category.includes("finance") || category.includes("trading")) return true;
    }

    if (q.includes("writ") || q.includes("book") || q.includes("blog") || q.includes("article") || q.includes("content")) {
      const isWritingTool =
        category.includes("writ") || category.includes("content") ||
        title.includes("writer") || title.includes("book") ||
        tags.some((t: string) => t.includes("writ") || t.includes("content"));
      if (isWritingTool) return true;
    }

    if (q.includes("health") || q.includes("medical") || q.includes("doctor") || q.includes("wellness") || q.includes("therapy")) {
      const isHealthTool =
        category.includes("health") || category.includes("medical") ||
        title.includes("doctor") || title.includes("health") ||
        tags.some((t: string) => t.includes("health") || t.includes("medical"));
      if (isHealthTool) return true;
    }

    return title.startsWith(q) || firstWord.startsWith(q);
  });
};

const runFullSearch = (rawQuery: string): number[] => {
  const results = searchTools(allTools, rawQuery);
  const q = rawQuery.toLowerCase().trim();
  const qFirst = q.split(/\s+/)[0] || "";
  const searchIntents = detectSearchIntent(q);
  const primaryIntent = searchIntents[0] || "";

  const reranked = results
    .map((tool, idx) => {
      const title = (tool?.title || "").toLowerCase();
      const words = title.split(/\s+/).filter(Boolean);
      const firstWord = words[0] || "";
      const category = (tool?.category || "").toLowerCase();
      const tags = (tool?.tags || []).map((t: string) => t.toLowerCase());
      let boost = 0;

      if (title === q) boost = 400000;
      else if (firstWord === q) boost = 300000;
      else if (title.startsWith(q)) boost = 200000;
      else if (words.some((w) => w.startsWith(q))) boost = 120000;

      if (!boost && qFirst && firstWord === qFirst) boost = 180000;

      const toolCategories = detectToolCategoryFromTitle(title);

      for (const [cat, keywords] of Object.entries(CATEGORY_TITLE_KEYWORDS)) {
        if (category.includes(cat) || tags.some((t: string) => keywords.some((kw) => t.includes(kw)))) {
          if (!toolCategories.includes(cat)) toolCategories.push(cat);
        }
      }

      if (primaryIntent && toolCategories.length > 0) {
        boost += getCategoryRelationshipScore(primaryIntent, toolCategories);

        for (const intent of searchIntents) {
          for (const toolCat of toolCategories) {
            if (areSiblingCategories(intent, toolCat)) {
              boost += 50000;
            } else if (areInSameFamily(intent, toolCat)) {
              boost += 20000;
            }
          }
        }
      }

      const specialSiblings: Record<string, string[]> = {
        history: ["spiritual", "philosophy", "ancient", "archaeology", "civilization"],
        spiritual: ["history", "philosophy", "wisdom", "mystical", "meditation", "religion"],
        philosophy: ["history", "spiritual", "wisdom", "consciousness"],
        trading: ["finance", "investment", "crypto", "stock", "forex"],
        finance: ["trading", "investment", "banking", "money"],
        video: ["film", "movie", "animation", "cinema", "multimedia"],
        image: ["art", "design", "visual", "graphics", "illustration"],
        music: ["audio", "sound", "song", "melody"],
        coding: ["development", "programming", "software", "engineering"],
        health: ["wellness", "medical", "fitness", "nutrition"],
        education: ["learning", "course", "training", "skill", "tutor"],
        science: ["research", "experiment", "academic", "study"],
      };

      if (primaryIntent && specialSiblings[primaryIntent]) {
        for (const sibling of specialSiblings[primaryIntent]) {
          if (title.includes(sibling) || category.includes(sibling) || tags.some((t: string) => t.includes(sibling))) {
            boost += 60000;
          }
        }
      }

      if (primaryIntent && toolCategories.length > 0) {
        const isUnrelated = !toolCategories.some(
          (tc) =>
            tc === primaryIntent ||
            areSiblingCategories(primaryIntent, tc) ||
            areInSameFamily(primaryIntent, tc) ||
            (specialSiblings[primaryIntent] || []).includes(tc)
        );

        if (isUnrelated) {
          const creativeCategories = ["video", "image", "music", "gaming", "design", "art"];
          const professionalCategories = ["coding", "business", "finance", "trading", "legal"];
          const academicCategories = ["education", "learning", "science", "research", "history"];
          const wellnessCategories = ["health", "medical", "wellness", "fitness"];
          const spiritualCategories = ["spiritual", "philosophy", "religion", "wisdom", "mystical"];

          const isCreativeSearch = creativeCategories.includes(primaryIntent);
          const isProfessionalSearch = professionalCategories.includes(primaryIntent);
          const isSpiritualSearch = spiritualCategories.includes(primaryIntent);

          const isCreativeTool = toolCategories.some((tc) => creativeCategories.includes(tc)) || category.includes("image") || category.includes("video") || category.includes("music") || category.includes("design");
          const isProfessionalTool = toolCategories.some((tc) => professionalCategories.includes(tc));
          const isAcademicTool = toolCategories.some((tc) => academicCategories.includes(tc));
          const isSpiritualTool =
            toolCategories.some((tc) => spiritualCategories.includes(tc)) ||
            category.includes("spiritual") ||
            category.includes("philosophy") ||
            title.includes("aristotle") ||
            title.includes("confucius") ||
            title.includes("marcus aurelius") ||
            title.includes("socrates") ||
            title.includes("buddha") ||
            title.includes("jesus") ||
            title.includes("prophet") ||
            title.includes("mystic");

          if (isCreativeSearch && isSpiritualTool) {
            boost -= 200000;
          } else if (isCreativeSearch && !isCreativeTool) {
            boost -= 120000;
          } else if (isProfessionalSearch && isSpiritualTool) {
            boost -= 150000;
          } else if (isProfessionalSearch && !isProfessionalTool && !isAcademicTool) {
            boost -= 100000;
          } else if (isSpiritualSearch && isCreativeTool) {
            boost -= 30000;
          } else {
            boost -= 50000;
          }
        }
      }

      return { tool, idx, boost };
    })
    .sort((a, b) => {
      if (b.boost !== a.boost) return b.boost - a.boost;
      return a.idx - b.idx;
    })
    .map((item) => item.tool);

  const mustHave = getMustHaveMatches(q);
  const seen = new Set<string>();
  const merged: (typeof allTools)[number][] = [];

  const push = (tool: (typeof allTools)[number]) => {
    const key = toolKey(tool);
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(tool);
  };

  mustHave.forEach(push);
  reranked.forEach(push);

  return merged
    .map((tool) => toolIndexByKey.get(toolKey(tool)))
    .filter((index): index is number => typeof index === "number");
};

const workerScope = globalThis as typeof globalThis & {
  onmessage: ((event: MessageEvent<SearchRequest>) => void) | null;
  postMessage: (message: SearchResponse) => void;
};

workerScope.onmessage = (event: MessageEvent<SearchRequest>) => {
  const { id, query } = event.data;
  const indices = runFullSearch(query);
  const results = indices.slice(0, 140).map((index) => sanitizeToolForMainThread(allTools[index]));
  const response: SearchResponse = { id, query, indices, results };
  workerScope.postMessage(response);
};

export {};