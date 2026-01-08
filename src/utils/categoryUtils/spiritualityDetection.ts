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
    
    // BIBLE & SCRIPTURE - Critical for Bible/Testament searches
    "bible", "bible studies", "scripture", "scriptures", "testament", "testiment",
    "old testament", "new testament", "septuagint", "lxx", "hebrew bible",
    "gospel", "gospels", "psalm", "psalms", "proverbs", "genesis", "exodus",
    "revelation", "apocalypse", "epistles", "acts of the apostles",
    
    // CHRISTIANITY specific
    "christianity", "catholic", "catholicism", "orthodox", "protestant",
    "evangelical", "baptist", "methodist", "lutheran", "presbyterian",
    "pentecostal", "anglican", "episcopal", "jesuit", "franciscan",
    "dominican", "benedictine", "monastic", "monastery", "convent",
    "early christian", "church fathers", "patristic", "apostolic",
    "trinity", "eucharist", "communion", "baptism", "salvation",
    "crucifixion", "resurrection", "ascension", "pentecost",
    
    // JUDAISM specific
    "jewish", "judaism", "torah", "talmud", "midrash", "mishnah",
    "kabbalah", "kabbalistic", "zohar", "sephardic", "ashkenazi",
    "rabbi", "rabbinical", "synagogue", "temple", "passover", "pesach",
    "hanukkah", "chanukah", "rosh hashanah", "yom kippur", "shabbat",
    "kosher", "bar mitzvah", "bat mitzvah", "hasidic", "orthodox jewish",
    "essenes", "dead sea scrolls", "qumran", "masoretic",
    
    // ISLAM specific
    "muslim", "islam", "islamic", "quran", "koran", "allah", "mosque",
    "muhammad", "prophet muhammad", "hadith", "sunnah", "sharia",
    "sunni", "shia", "shiite", "sufi", "sufism", "ramadan", "eid",
    "hajj", "mecca", "medina", "imam", "ayatollah", "fatwa", "jihad",
    "noor", "nur", "light of allah", "islamic mysticism",
    
    // Eastern spirituality
    "buddha", "buddhist", "buddhism", "dalai lama", "zen", "karma", "dharma",
    "hindu", "hinduism", "yoga", "chakra", "kundalini", "mantra", "om",
    "tao", "taoist", "taoism", "confucius", "confucianism", "shinto", "tibetan",
    "vedic", "vedas", "upanishad", "bhagavad gita", "mahabharata", "ramayana",
    "krishna", "vishnu", "shiva", "brahma", "ganesh", "lakshmi", "saraswati",
    "sikh", "sikhism", "guru nanak", "golden temple",
    
    // Mystical & Esoteric
    "mystic", "mystical", "mysticism", "esoteric", "occult", "alchemy", "alchemist",
    "gnostic", "gnosticism", "hermetic", "rosicrucian", "theosophy",
    "illumination", "illuminous", "enlightenment", "awakening", "ascension",
    "manicheism", "manichaeism", "mani", "zoroastrian", "zoroastrianism",
    
    // Angels & Divine beings
    "angel", "archangel", "cherub", "seraph", "guardian angel", "celestial",
    "deity", "goddess", "god of", "gods", "divinity", "heavenly",
    "metatron", "michael", "gabriel", "raphael", "uriel",
    
    // Divination & Fortune
    "oracle", "prophecy", "prophetic", "tarot", "astrology", "horoscope",
    "fortune", "fortune teller", "psychic", "clairvoyant", "medium",
    "dream interpretation", "numerology", "palmistry", "i ching",
    
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
    "yemaya", "quan yin", "kuan yin", "orishas", "santeria", "voodoo", "vodou",
    
    // Egyptian spirituality
    "maat", "ma'at", "egyptian proverbs", "ancient egypt", "oracle of maat",
    "hieroglyphic wisdom", "pharaoh wisdom", "duat", "osiris", "anubis", "ra", "horus",
    "isis", "thoth", "amon", "aten", "book of the dead"
  ];

  // Known AIWebTools spiritual brands / GPT names
  const brandedNames = [
    "talk to the gods", "mary magdalene gpt", "time machine gpt", "oraculum",
    "sophia aeterna", "historical headlines", "native american history time machine",
    "resurrection gpt", "immortalizeme", "god is light", "god is light — roman catholic", 
    "god is light — jewish", "god is light — islamic", "interpretis",
    "phenomenon explorer", "yemaya", "quan yin", "self sufficiency gpt",
    "alan watts", "carl sagan gpt", "manicheism", "mani gpt", "mingjiao", "catholic mysticism",
    "ancient egyptian proverbs", "metatron", "bible studies gpt", "septuagint",
    "dead sea scrolls", "essenes gpt", "all is one gpt", "i am q"
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
