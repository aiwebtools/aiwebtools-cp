import { Tool } from "@/types/tools";
import { isAIWebToolsGPT } from "@/utils/aiWebToolsPrioritization";

/**
 * Deterministic category ordering.
 *
 * Goals (no randomness — a random sort re-shuffles on every "load more" and
 * makes already-rendered cards appear to repeat mid-scroll):
 *  1. Strong, well-documented tools surface near the top.
 *  2. One AIWebTools custom GPT is featured every 6th slot when the category
 *     actually contains matching GPTs.
 *  3. Stable order for a given category name + tool list, so pagination only
 *     ever appends new, unique cards.
 */

// Small deterministic hash so ordering feels varied per category yet is stable.
const hash = (value: string): number => {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
};

const qualityScore = (tool: Tool): number => {
  let score = 0;
  if (typeof tool.imageUrl === "string" && tool.imageUrl.trim()) score += 40;
  if (typeof tool.videoUrl === "string" && tool.videoUrl.trim()) score += 25;
  const description = tool.description || "";
  if (description.length > 240) score += 20;
  else if (description.length > 120) score += 12;
  if (Array.isArray(tool.tags) && tool.tags.length >= 4) score += 10;
  return score;
};

export const GPT_FEATURE_INTERVAL = 6;

export const orderCategoryTools = (tools: Tool[], categoryKey: string): Tool[] => {
  if (tools.length < 2) return tools;

  const rank = (tool: Tool) =>
    qualityScore(tool) + hash(`${categoryKey}::${tool.title}`) * 15;

  const gpts: Tool[] = [];
  const rest: Tool[] = [];
  for (const tool of tools) {
    (isAIWebToolsGPT(tool) ? gpts : rest).push(tool);
  }

  gpts.sort((a, b) => rank(b) - rank(a));
  rest.sort((a, b) => rank(b) - rank(a));

  if (!gpts.length) return rest;

  // Weave one AIWebTools GPT into every 6th position; leftovers append at the end.
  const ordered: Tool[] = [];
  let gptIndex = 0;
  let restIndex = 0;

  while (restIndex < rest.length) {
    const isFeatureSlot =
      (ordered.length + 1) % GPT_FEATURE_INTERVAL === 0 && gptIndex < gpts.length;
    ordered.push(isFeatureSlot ? gpts[gptIndex++] : rest[restIndex++]);
  }
  while (gptIndex < gpts.length) ordered.push(gpts[gptIndex++]);

  return ordered;
};
