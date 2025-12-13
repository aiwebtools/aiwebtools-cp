import { Tool } from "@/types/tools";

// Detect tools that are clearly spiritual, religious, or philosophical in focus - EXPANDED
export const isSpiritualityTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = (tool.category || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");

  // Core spiritual & philosophical keywords - COMPREHENSIVE
  const coreKeywords = [
    // Spirituality & Religion core
    "spiritual", "spirituality", "spirit", "soul", "divine", "sacred", "holy",
    "religion", "religious", "christ", "christian", "jesus", "god", "godly",
    "mary magdalene", "saint", "apostle", "prophet", "prophecy", "biblical",
    
    // Eastern spirituality
    "buddha", "buddhist", "buddhism", "dalai lama", "zen", "karma", "dharma",
    "hindu", "hinduism", "yoga", "chakra", "kundalini", "mantra", "om",
    "tao", "taoist", "confucius", "shinto", "tibetan",
    
    // Islamic & Middle Eastern
    "rumi", "sufi", "sufism", "islam", "islamic", "quran", "allah", "mosque",
    
    // Mystical & Esoteric
    "mystic", "mystical", "mysticism", "esoteric", "occult", "alchemy", "alchemist",
    "gnostic", "gnosticism", "kabbalah", "kabbalistic", "hermetic", "rosicrucian",
    "illumination", "illuminous", "enlightenment", "awakening", "ascension",
    
    // Angels & Divine beings
    "angel", "archangel", "cherub", "seraph", "guardian angel", "celestial",
    "deity", "goddess", "god of", "gods", "divinity", "heavenly",
    
    // Divination & Fortune
    "oracle", "prophecy", "prophetic", "tarot", "astrology", "horoscope",
    "fortune", "fortune teller", "psychic", "clairvoyant", "medium",
    "dream interpretation", "numerology", "palmistry",
    
    // Philosophy
    "philosophy", "philosophical", "philosopher", "stoic", "stoicism",
    "aurelius", "socrates", "plato", "aristotle", "nietzsche", "kant",
    "existential", "metaphysical", "ontology", "epistemology",
    "wisdom", "wise", "sage", "guru", "master", "teacher of wisdom",
    
    // Meditation & Mindfulness
    "meditation", "meditative", "mindfulness", "contemplation", "prayer",
    "devotional", "mantra", "chanting", "transcendental", "inner peace",
    
    // Life meaning & Purpose
    "meaning of life", "purpose", "soul purpose", "life path", "destiny",
    "resurrection", "immortal", "eternal", "afterlife", "reincarnation",
    
    // Indigenous & Ancient wisdom
    "shaman", "shamanic", "native american", "indigenous", "tribal wisdom",
    "ancient wisdom", "ancestral", "pagan", "druid", "celtic", "norse",
    "yemaya", "quan yin", "kuan yin", "orishas"
  ];

  // Known AIWebTools spiritual brands / GPT names
  const brandedNames = [
    "talk to the gods", "mary magdalene gpt", "time machine gpt", "oraculum",
    "sophia aeterna", "historical headlines", "native american history time machine",
    "resurrection gpt", "immortalizeme", "god is light", "interpretis",
    "phenomenon explorer", "yemaya", "quan yin", "self sufficiency gpt",
    "alan watts", "carl sagan gpt", "manicheism", "mani gpt", "mingjiao"
  ];

  const haystack = `${title} ${description} ${category} ${tags}`;

  const hasCoreKeyword = coreKeywords.some(kw => haystack.includes(kw));
  const hasBrandedName = brandedNames.some(kw => haystack.includes(kw));

  // Spiritual categories
  const spiritualCategories = [
    "spirituality", "spiritual", "philosophy", "religion", "religious",
    "mystical", "esoteric", "metaphysical", "wisdom", "meditation"
  ];
  const isSpiritualCategory = spiritualCategories.some(cat => category.includes(cat));

  return hasCoreKeyword || hasBrandedName || isSpiritualCategory;
};
