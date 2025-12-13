import { Tool } from "@/types/tools";

// Detect tools that are clearly spiritual, religious, or philosophical in focus
export const isSpiritualityTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = (tool.category || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");

  // Core spiritual & philosophical keywords
  const coreKeywords = [
    "spiritual", "spirituality", "spirit", "soul", "divine", "sacred", "holy",
    "religion", "religious", "christ", "jesus", "mary magdalene", "saint",
    "buddha", "dalai lama", "rumi", "sufi", "mystic", "mystical", "esoteric",
    "gnostic", "kabbalah", "kabbalistic", "angel", "archangel", "oracle",
    "prophet", "prophecy", "astrology", "tarot", "occult", "metaphysical",
    "philosophy", "philosophical", "stoic", "stoicism", "aurelius", "socrates",
    "plato", "aristotle", "wisdom teacher", "illumination", "enlightenment",
    "meditation", "mindfulness", "contemplation", "prayer", "devotional"
  ];

  // Known AIWebTools spiritual brands / GPT names
  const brandedNames = [
    "talk to the gods", "mary magdalene gpt", "time machine gpt", "oraculum",
    "sophia aeterna", "historical headlines", "native american history time machine",
    "resurrection gpt", "immortalizeme", "god is light", "interpretis",
    "phenomenon explorer", "yemaya", "quan yin", "self sufficiency gpt"
  ];

  const haystack = `${title} ${description} ${category} ${tags}`;

  const hasCoreKeyword = coreKeywords.some(kw => haystack.includes(kw));
  const hasBrandedName = brandedNames.some(kw => haystack.includes(kw));

  // Also treat explicit spiritual/philosophy categories as spiritual
  const spiritualCategories = [
    "spirituality", "spirituality & philosophy", "spiritual tools",
    "religion", "religious tools", "philosophy", "philosophy & lifestyle"
  ];
  const isSpiritualCategory = spiritualCategories.some(cat => category.includes(cat));

  const isSpiritualTool = hasCoreKeyword || hasBrandedName || isSpiritualCategory;

  if (isSpiritualTool) {
    console.log(`🕊️ SPIRITUALITY TOOL DETECTED: ${tool.title} (${tool.category})`);
  }

  return isSpiritualTool;
};
