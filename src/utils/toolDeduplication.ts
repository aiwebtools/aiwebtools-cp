
import { Tool } from "@/types/tools";

/**
 * Normalize a destination URL so the same tool linked with/without the
 * affiliate param, `www.`, protocol or a trailing slash is recognised as
 * the SAME destination. Query strings (?via=aiwebtools, utm, invite codes)
 * are intentionally ignored — they never change where the user lands.
 */
const normalizeDestination = (url?: string): string => {
  if (!url) return "";
  const raw = url.trim();
  if (!raw) return "";
  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
    const path = parsed.pathname.replace(/\/+$/, "").toLowerCase();
    return `${host}${path}`;
  } catch {
    return raw.toLowerCase().replace(/\/+$/, "");
  }
};

/**
 * Completeness score — the richer entry always wins so we never downgrade a
 * tool card by dropping the wrong copy.
 */
const completenessScore = (tool: Tool): number => {
  let score = 0;
  if (tool.imageUrl) score += 40;
  if (tool.videoUrl) score += 40;
  if (tool.description) score += Math.min(tool.description.length / 20, 25);
  if (Array.isArray(tool.tags)) score += Math.min(tool.tags.length * 2, 20);
  if (tool.directUrl) score += 10;
  if (tool.rating) score += 5;
  if (tool.emoji) score += 2;
  if (tool.category) score += 2;
  return score;
};

/**
 * Merge a duplicate into the winning entry: nothing is lost, missing media,
 * tags and metadata are back-filled from the copy being hidden.
 */
const mergeIntoWinner = (winner: Tool, other: Tool): Tool => {
  const mergedTags = Array.from(
    new Set([...(winner.tags || []), ...(other.tags || [])])
  );
  return {
    ...winner,
    imageUrl: winner.imageUrl || other.imageUrl,
    videoUrl: winner.videoUrl || other.videoUrl,
    description:
      (winner.description?.length || 0) >= (other.description?.length || 0)
        ? winner.description
        : other.description,
    directUrl: winner.directUrl || other.directUrl,
    rating: winner.rating || other.rating,
    totalVotes: winner.totalVotes || other.totalVotes,
    tags: mergedTags,
  };
};

/**
 * CONSERVATIVE deduplication — only collapses entries that are the SAME tool:
 * identical title AND the same destination (after normalising affiliate
 * params / www / trailing slashes). Nothing is deleted from the database
 * files; the redundant copy is simply hidden from the merged list and its
 * data is merged into the most complete surviving entry.
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const indexByKey = new Map<string, number>();
  const deduplicated: Tool[] = [];

  for (const tool of tools) {
    const titleKey = tool.title.toLowerCase().trim();
    const destination = normalizeDestination(tool.directUrl);

    // No destination = we cannot prove it is the same tool -> always keep it.
    if (!destination) {
      deduplicated.push(tool);
      continue;
    }

    const key = `${titleKey}|||${destination}`;
    const existingIndex = indexByKey.get(key);

    if (existingIndex === undefined) {
      indexByKey.set(key, deduplicated.length);
      deduplicated.push(tool);
      continue;
    }

    const existing = deduplicated[existingIndex];
    const winner =
      completenessScore(tool) > completenessScore(existing) ? tool : existing;
    const loser = winner === tool ? existing : tool;
    deduplicated[existingIndex] = mergeIntoWinner(winner, loser);
  }

  return deduplicated;
};

/**
 * DISABLED - No distance-based deduplication to preserve all tools
 */
export const createDeduplicatedToolsList = (tools: Tool[], maxDistance: number = 0): Tool[] => {
  return deduplicateTools(tools);
};

/**
 * Shuffle array while maintaining some structure
 */
export const shuffleWithStructure = (tools: Tool[], preserveFirst: number = 0): Tool[] => {
  if (tools.length <= preserveFirst) return [...tools];
  
  const preserved = tools.slice(0, preserveFirst);
  const toShuffle = tools.slice(preserveFirst);
  
  // Fisher-Yates shuffle
  for (let i = toShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
  }
  
  return [...preserved, ...toShuffle];
};
