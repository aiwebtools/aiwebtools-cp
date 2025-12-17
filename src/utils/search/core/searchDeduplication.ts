import { Tool } from "@/types/tools";

/**
 * Duplicate detection for search results.
 *
 * NOTE: This runs on many keystrokes, so it must be fast.
 * We preserve the exact same duplicate definition (similarity >= 0.80),
 * but avoid O(n^2) comparisons by bucketing candidates first.
 */

// Disable noisy logging by default (console logging on every keystroke causes lag)
const DEDUPE_DEBUG = false;
const debugLog = (...args: any[]) => {
  if (DEDUPE_DEBUG) console.log(...args);
};

/**
 * Normalize tool title for duplicate detection - handles emoji prefixes
 */
const normalizeTitle = (title: string): string => {
  return title
    .toLowerCase()
    // Remove leading non-alphanumeric characters (including emojis)
    .replace(/^[^\w]+\s*/g, "")
    .replace(/[^\w\s]/g, "") // Remove remaining special characters
    .replace(/\s+/g, " ") // Normalize spaces
    .trim();
};

/**
 * Bucket key used to drastically reduce comparison counts.
 *
 * We intentionally keep this "lossy": it only decides which titles are *worth*
 * comparing with the full similarity function.
 */
const getBucketKey = (title: string): string => {
  const n = normalizeTitle(title);
  if (!n) return "";

  // First token + first 8 chars + length band keeps related titles together
  const firstWord = n.split(" ")[0] || "";
  const prefix = n.slice(0, 8);
  const lenBand = Math.floor(n.length / 6); // coarser banding
  return `${firstWord}|${prefix}|${lenBand}`;
};

/**
 * Calculate similarity score between two normalized titles
 * Enhanced to better handle emoji prefix variations and tool variants
 */
const calculateSimilarity = (title1: string, title2: string): number => {
  const norm1 = normalizeTitle(title1);
  const norm2 = normalizeTitle(title2);

  // Exact match after normalization
  if (norm1 === norm2) return 1.0;

  // Enhanced subset detection for tool variants
  // Handle cases like "Copy.ai" vs "Copy.ai for Teams", "Grammarly" vs "Grammarly Business"
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    const shorter = Math.min(norm1.length, norm2.length);
    const longer = Math.max(norm1.length, norm2.length);
    const ratio = shorter / longer;

    // If the shorter title is at least 70% of the longer one, it's likely a variant
    if (ratio >= 0.7) return 0.95; // Very high similarity for variants

    return ratio;
  }

  // Special handling for common tool variants
  const commonVariants = [
    "for teams",
    "business",
    "pro",
    "premium",
    "enterprise",
    "plus",
    "advanced",
  ];
  const norm1Words = norm1.split(" ");
  const norm2Words = norm2.split(" ");

  // Check if one is just the other plus a common variant
  for (const variant of commonVariants) {
    const variantWords = variant.split(" ");

    // Check if norm1 = norm2 + variant
    if (norm1Words.length === norm2Words.length + variantWords.length) {
      const withoutVariant = norm1Words.slice(0, -variantWords.length).join(" ");
      if (withoutVariant === norm2) return 0.9;
    }

    // Check if norm2 = norm1 + variant
    if (norm2Words.length === norm1Words.length + variantWords.length) {
      const withoutVariant = norm2Words.slice(0, -variantWords.length).join(" ");
      if (withoutVariant === norm1) return 0.9;
    }
  }

  // Word-based similarity for tools like "Copy.ai" vs "Copy AI"
  const words1 = norm1Words.filter((w) => w.length > 0);
  const words2 = norm2Words.filter((w) => w.length > 0);

  if (words1.length === 0 || words2.length === 0) return 0;

  const commonWords = words1.filter((w1) =>
    words2.some((w2) => w2.includes(w1) || w1.includes(w2))
  );

  // Higher threshold for exact word matches
  const similarity = commonWords.length / Math.max(words1.length, words2.length);

  // Bonus for very similar titles (accounts for emoji prefix differences)
  if (similarity > 0.7 && Math.abs(norm1.length - norm2.length) <= 3) {
    return Math.min(1.0, similarity + 0.2);
  }

  return similarity;
};

/**
 * Determine if two tools are duplicates based on title similarity
 * Enhanced thresholds for better duplicate detection
 */
const areDuplicates = (tool1: Tool, tool2: Tool): boolean => {
  const similarity = calculateSimilarity(tool1.title, tool2.title);

  // Lower similarity threshold to catch more emoji prefix variations
  const threshold = 0.80;

  if (similarity >= threshold) {
    debugLog(
      `🔍 Duplicate detected: "${tool1.title}" vs "${tool2.title}" (similarity: ${similarity.toFixed(
        2
      )})`
    );
    return true;
  }

  return false;
};

/**
 * Select the best representative from a group of duplicate tools
 */
const selectBestRepresentative = (duplicates: Tool[]): Tool => {
  if (duplicates.length === 1) return duplicates[0];

  // Scoring system to pick the best representative
  const scored = duplicates.map((tool) => {
    let score = 0;

    // Prioritize AI Web Tools (lovable.app) - our custom GPTs
    if (tool.directUrl?.includes("lovable.app")) {
      score += 10000;
    }

    // Prioritize higher ratings
    score += (tool.rating || 0) * 1000;

    // Prioritize more votes (popularity)
    score += (tool.totalVotes || 0) * 10;

    // Prioritize shorter, cleaner titles (usually the main version)
    score += Math.max(0, 100 - tool.title.length);

    // Prioritize tools without emoji prefixes (cleaner titles)
    const hasEmojiPrefix = /^[^\w]/.test(tool.title);
    if (!hasEmojiPrefix) {
      score += 200;
    }

    // Prioritize tools that don't start with "AI " (to avoid generic AI tools dominating)
    const normalizedAfterEmoji = tool.title.replace(/^[^\w]+\s*/g, "").toLowerCase();
    if (!normalizedAfterEmoji.startsWith("ai ")) {
      score += 300;
    }

    // Prioritize specific categories
    const preferredCategories = [
      "AI Assistants & Search",
      "Content Creation",
      "AI Chat Platforms",
      "Writing & Text Generation",
      "AI Image Generation",
      "Video Generation",
      "Audio & Voice",
    ];

    if (preferredCategories.includes(tool.category || "")) {
      score += 500;
    }

    return { tool, score };
  });

  // Sort by score (highest first) and return the best
  scored.sort((a, b) => b.score - a.score);

  debugLog(`🎯 Selected best representative for "${scored[0].tool.title}" from ${duplicates.length} duplicates`);

  return scored[0].tool;
};

/**
 * Deduplicate search results by grouping similar tools and selecting best representatives
 */
export const deduplicateSearchResults = (tools: Tool[]): Tool[] => {
  if (tools.length <= 1) return tools;

  // 1) Bucket tools to limit duplicate checks to small candidate sets
  const buckets = new Map<string, Tool[]>();
  for (const tool of tools) {
    const key = getBucketKey(tool.title);
    const list = buckets.get(key);
    if (list) list.push(tool);
    else buckets.set(key, [tool]);
  }

  // 2) Within each bucket, run the original duplicate grouping logic
  const result: Tool[] = [];
  for (const [, bucketTools] of buckets) {
    if (bucketTools.length === 1) {
      result.push(bucketTools[0]);
      continue;
    }

    const processed = new Set<number>();
    for (let i = 0; i < bucketTools.length; i++) {
      if (processed.has(i)) continue;

      const group: Tool[] = [bucketTools[i]];
      processed.add(i);

      for (let j = i + 1; j < bucketTools.length; j++) {
        if (processed.has(j)) continue;
        if (areDuplicates(bucketTools[i], bucketTools[j])) {
          group.push(bucketTools[j]);
          processed.add(j);
        }
      }

      result.push(selectBestRepresentative(group));
    }
  }

  // 3) Preserve original ordering as much as possible by stable-sorting to input order
  // (The previous implementation preserved the first representative encountered in each group.)
  const order = new Map<string, number>();
  for (let i = 0; i < tools.length; i++) order.set(tools[i].title, i);
  result.sort((a, b) => (order.get(a.title) ?? 0) - (order.get(b.title) ?? 0));

  const duplicatesRemoved = tools.length - result.length;
  if (duplicatesRemoved > 0) {
    debugLog(`🧹 Search Deduplication: ${tools.length} → ${result.length} tools (removed ${duplicatesRemoved} duplicates)`);
  }

  return result;
};

/**
 * Quick deduplication for performance-critical scenarios
 * Only removes exact title matches, keeps the first occurrence
 */
export const quickDeduplicateSearchResults = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];

  for (const tool of tools) {
    const normalized = normalizeTitle(tool.title);

    if (!seen.has(normalized)) {
      seen.add(normalized);
      deduplicated.push(tool);
    }
  }

  return deduplicated;
};
