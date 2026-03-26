
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { 
  CATEGORY_TITLE_KEYWORDS, 
  SIBLING_CATEGORIES,
  areSiblingCategories,
  areInSameFamily,
  detectToolCategoryFromTitle,
  getCategoryRelationshipScore
} from "@/utils/search/categoryIntelligence";

// ==================== LRU CACHE FOR SEARCH RESULTS ====================
// Caches the last 50 search queries to avoid recomputation on repeated searches

class LRUCache<K, V> {
  private maxSize: number;
  private cache: Map<K, V>;
  
  constructor(maxSize: number = 50) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }
  
  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    
    // Move to end (most recently used)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  set(key: K, value: V): void {
    // Remove oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) this.cache.delete(firstKey);
    }
    
    // Remove existing to update position
    this.cache.delete(key);
    this.cache.set(key, value);
  }
  
  clear(): void {
    this.cache.clear();
  }
}

// FAST spread function - simplified O(n) algorithm for instant spreading
const spreadSimilarToolsFast = (tools: any[]): any[] => {
  if (tools.length < 20) return tools;
  
  const result: any[] = [];
  const seen = new Set<string>();
  const recentBases: string[] = [];
  const MIN_GAP = 8;
  
  const getBase = (title: string): string => {
    return title.toLowerCase()
      .replace(/\s*(gpt|gem|gemini|\(gem\)|\[gem\])\s*/gi, '')
      .split(' ').slice(0, 2).join(' ');
  };
  
  for (const tool of tools) {
    const title = (tool?.title || "").toLowerCase();
    const base = getBase(title);
    
    // Check if similar base was recent
    const recentMatch = recentBases.slice(-MIN_GAP).includes(base);
    
    if (!recentMatch || result.length < 10) {
      result.push(tool);
      recentBases.push(base);
    } else {
      // Defer to end
      seen.add(title);
    }
  }
  
  // Add deferred tools
  for (const tool of tools) {
    const title = (tool?.title || "").toLowerCase();
    if (seen.has(title) && !result.some(r => (r?.title || "").toLowerCase() === title)) {
      result.push(tool);
    }
  }
  
  return result;
};

// Global search cache (persists across component re-renders)
// NOTE: versioned to prevent "stale" cached results after search-intelligence updates.
const SEARCH_CACHE_VERSION = "v36";
const searchCache = new LRUCache<string, any[]>(50);

// ==================== INTELLIGENCE MAPS (precomputed, instant lookup) ====================

// 1. COMMON MISSPELLINGS → correct spelling (COMPREHENSIVE)
const TYPO_MAP: Record<string, string> = {
  // Major platforms
  "chatgtp": "chatgpt", "chatgot": "chatgpt", "chtgpt": "chatgpt", "chatgbt": "chatgpt", "cahtgpt": "chatgpt",
  "cluade": "claude", "clade": "claude", "claued": "claude", "cluad": "claude",
  "midjourny": "midjourney", "midjorney": "midjourney", "midjouney": "midjourney", "midjoureny": "midjourney", "midjournye": "midjourney",
  "perplexty": "perplexity", "perplexiy": "perplexity", "perpelxity": "perplexity", "preplexity": "perplexity",
  "runwya": "runway", "runwa": "runway", "ruwnay": "runway", "rnuway": "runway", "runaway": "runway",
  "stabledifusion": "stable diffusion", "stablediffusion": "stable diffusion", "stabel diffusion": "stable diffusion",
  "dallE": "dalle", "dall-e": "dalle", "dali": "dalle", "dalli": "dalle",
  "elevnlabs": "elevenlabs", "elevenlab": "elevenlabs", "11labs": "elevenlabs", "elevnlab": "elevenlabs",
  "synthsia": "synthesia", "syntehsia": "synthesia", "synthseia": "synthesia",
  "heyegn": "heygen", "heygne": "heygen", "hayegen": "heygen",
  "luam": "luma", "lumaa": "luma", "luma dream": "luma dream machine",
  "pikaa": "pika", "piak": "pika", "pika labs": "pika",
  "soar": "sora", "soraa": "sora", "sorra": "sora",
  "gemni": "gemini", "gemnii": "gemini", "gimini": "gemini", "gemeni": "gemini",
  "leonadro": "leonardo", "lenoardo": "leonardo", "lionardo": "leonardo",
  "notoin": "notion", "ntoion": "notion", "notin": "notion",
  "canav": "canva", "canvaa": "canva", "cnavaa": "canva",
  "grammrly": "grammarly", "gramamrly": "grammarly", "gramarly": "grammarly",
  "jaspr": "jasper", "jaspre": "jasper", "jaspor": "jasper",
  // Business / Common words
  "buisness": "business", "busines": "business", "bussiness": "business", "buisines": "business", "bizness": "business",
  "maketing": "marketing", "marketng": "marketing", "markting": "marketing", "markteing": "marketing",
  "autmation": "automation", "automaton": "automation", "autoamtion": "automation", "automtaion": "automation",
  "wedsite": "website", "websit": "website", "webiste": "website", "wbesite": "website", "wesbite": "website",
  "desgin": "design", "desgn": "design", "deisgn": "design", "desing": "design",
  "anaysis": "analysis", "analaysis": "analysis", "analyis": "analysis", "anlysis": "analysis",
  "genrator": "generator", "genertor": "generator", "geneartor": "generator", "generatr": "generator",
  "assitant": "assistant", "asistant": "assistant", "assistent": "assistant", "asisstant": "assistant",
  // Learning / Education
  "colege": "college", "collge": "college", "colleeg": "college", "colelge": "college", "colledge": "college",
  "leanr": "learn", "laern": "learn", "leran": "learn", "learnr": "learn", "lern": "learn",
  "skil": "skill", "skiil": "skill", "skll": "skill", "skils": "skills",
  "corse": "course", "coarse": "course", "coures": "course", "coursse": "course", "cors": "course",
  "educaton": "education", "eductaion": "education", "educaiton": "education", "edcuation": "education",
  "tutoiral": "tutorial", "tutoral": "tutorial", "tutorail": "tutorial",
  "trainng": "training", "traning": "training", "trainging": "training",

  // Spiritual / Religion - COMPREHENSIVE typo coverage
  "spirtual": "spiritual", "spirtuality": "spirituality", "spirutal": "spiritual", "spiritul": "spiritual",
  "spiritualty": "spirituality", "spirtualism": "spiritualism", "spirutual": "spiritual",
  "relgion": "religion", "religon": "religion", "religous": "religious", "relgious": "religious",
  "relgiion": "religion", "religoin": "religion", "religeon": "religion",
  "bibile": "bible", "bilbe": "bible", "bibl": "bible", "bibel": "bible",
  "testiment": "testament", "testement": "testament", "testamnt": "testament",
  "quaran": "quran", "qoran": "quran", "koran": "quran", "quoran": "quran",
  "torah": "torah", "torath": "torah",
  "meditatoin": "meditation", "mediation": "meditation", "meditaiton": "meditation",
  "philsophy": "philosophy", "philosphy": "philosophy", "philosopy": "philosophy", "philoshopy": "philosophy",
  "buddah": "buddha", "budda": "buddha", "bhudda": "buddha", "buhdda": "buddha",
  "zues": "zeus", "zuess": "zeus", "zeuss": "zeus",
  "jessu": "jesus", "jessus": "jesus", "jeus": "jesus", "jeasus": "jesus",
  "muhammed": "muhammad", "mohamad": "muhammad", "mohhamed": "muhammad",
  "krishna": "krishna", "krisna": "krishna",
  "mysticsm": "mysticism", "mysticim": "mysticism", "mysticsim": "mysticism",
  "enligthenment": "enlightenment", "enlightment": "enlightenment", "enlightenmet": "enlightenment",
  // Media / Creative
  "viedo": "video", "vidoe": "video", "vedio": "video", "vido": "video", "vdieo": "video",
  "immage": "image", "imge": "image", "iamge": "image", "imag": "image",
  "auido": "audio", "adio": "audio", "audoi": "audio", "aidio": "audio",
  "musci": "music", "muisc": "music", "muscic": "music", "msuic": "music",
  "writter": "writer", "writerr": "writer", "writr": "writer", "wirter": "writer",
  "moive": "movie", "movei": "movie", "movvie": "movie", "mvie": "movie",
  "grpahic": "graphic", "graphc": "graphic", "grahpic": "graphic",
  "anmation": "animation", "animtion": "animation", "animaiton": "animation",
  // Tech / Coding
  "codign": "coding", "codin": "coding", "coidng": "coding",
  "progamming": "programming", "programing": "programming", "progrmming": "programming",
  "javscript": "javascript", "javascrpt": "javascript", "javasript": "javascript",
  "aplication": "application", "applcation": "application", "applicaton": "application",
  // Custom GPTs
  "survivlist": "survivalist", "survivlaist": "survivalist", "survivalst": "survivalist",
  "crinimologist": "criminologist", "criminoligist": "criminologist", "criminoloist": "criminologist",
  "vetrinarian": "veterinarian", "veternarian": "veterinarian", "vetarnarian": "veterinarian",
  "apotehcary": "apothecary", "apothecray": "apothecary", "apotheacry": "apothecary",
  "alchemsit": "alchemist", "alchemits": "alchemist", "alcemist": "alchemist",
  "interpetis": "interpretis", "interpretsi": "interpretis", "interpreits": "interpretis",
  "oraclum": "oraculum", "oracluum": "oraculum", "oracluem": "oraculum",
  "resurection": "resurrection", "ressurection": "resurrection", "resurrecion": "resurrection",
  "legistlation": "legislation", "legilsation": "legislation", "legislaton": "legislation",
  "probabilty": "probability", "probablity": "probability", "probabiilty": "probability",
  "phenomeon": "phenomenon", "phenomenn": "phenomenon", "phenmenon": "phenomenon",
  "archeologist": "archaeologist", "archeaologist": "archaeologist", "archeoligist": "archaeologist",
  "genone": "genome", "genoe": "genome", "genme": "genome",
  "manichaesim": "manicheism", "manichaeism": "manicheism", "mancihaeism": "manicheism",
  "tatto": "tattoo", "tatoo": "tattoo", "tattooo": "tattoo",
  "docter": "doctor", "doctr": "doctor", "docor": "doctor",
  "helth": "health", "heatlh": "health", "healht": "health", "helath": "health",
  // Legal
  "contarct": "contract", "contrct": "contract", "cntract": "contract",
  "leagl": "legal", "legla": "legal", "lega": "legal",
  "laywer": "lawyer", "lawyr": "lawyer", "lwayer": "lawyer",
  "agreemnt": "agreement", "agrement": "agreement", "agrrement": "agreement",
  // Finance
  "fiannce": "finance", "finace": "finance", "finacne": "finance", "fianance": "finance", "financ": "finance",
  "invstment": "investment", "investmnt": "investment", "investent": "investment", "invesment": "investment",
  "anlytics": "analytics", "analtyics": "analytics", "anaytics": "analytics",
  // Agent
  "agnet": "agent", "agetn": "agent", "agnt": "agent", "agentt": "agent",
  "agnets": "agents", "agenst": "agents", "agetns": "agents",
  // Common typos
  "ai tol": "ai tool", "ai tols": "ai tools", "aitool": "ai tool",
  "speach": "speech", "speec": "speech", "speeck": "speech",
  "vocie": "voice", "voic": "voice", "vioce": "voice",
  "soudns": "sounds", "souns": "sounds", "soudn": "sound",
  // More comprehensive typo coverage
  "fotune": "fortune", "fortnue": "fortune", "fotunre": "fortune",
  "triava": "trivia", "trivai": "trivia", "triviaa": "trivia",
  "celberity": "celebrity", "celebrtiy": "celebrity", "celebirty": "celebrity",
  "fireeighter": "firefighter", "firefigther": "firefighter", "firefihgter": "firefighter",
  "fising": "fishing", "fishng": "fishing", "fiashing": "fishing",
  "farmnig": "farming", "farmng": "farming", "framing": "farming",
  "gardning": "gardening", "gardenign": "gardening", "gardneing": "gardening",
  "insuracne": "insurance", "insurane": "insurance", "insruance": "insurance",
  "propery": "property", "proprety": "property", "porperty": "property",
  "realestate": "real estate", "realestae": "real estate", "real estaet": "real estate",
  "canabis": "cannabis", "cananbis": "cannabis", "cannabsi": "cannabis",
  "mixolgoyst": "mixologist", "mixoligist": "mixologist", "mixolgist": "mixologist",
  "cheff": "chef", "cheif": "chef", "shef": "chef",
  "tatle": "tattoo", "tato": "tattoo", "tattoart": "tattoo",
  "grnat": "grant", "grannt": "grant", "grent": "grant",
  "podacst": "podcast", "pocast": "podcast", "podcsat": "podcast",
  "draem": "dream", "drema": "dream", "deram": "dream",
  "essenes": "essenes", "esenes": "essenes", "essense": "essenes",
  "kabbalh": "kabbalah", "kabbala": "kabbalah", "kabalah": "kabbalah",
  "histroy": "history", "hisotry": "history", "histor": "history",
  "archeology": "archaeology", "archeaology": "archaeology", "archealogy": "archaeology",
  "antiqeu": "antique", "antuiqe": "antique", "antiquee": "antique",
  "colectible": "collectible", "collectibel": "collectible", "collectable": "collectible",
  "genealoogy": "genealogy", "geneology": "genealogy", "geneaology": "genealogy",
  "traduccion": "translation", "translaton": "translation", "translaiton": "translation",
  "psycic": "psychic", "pschic": "psychic", "psychci": "psychic",
  "tarott": "tarot", "taret": "tarot", "taroet": "tarot",
  "astrologi": "astrology", "astrolgy": "astrology", "astroloy": "astrology",
  "numerologi": "numerology", "numerlogy": "numerology", "numerolgy": "numerology",
  "enginering": "engineering", "enginneering": "engineering", "engeneering": "engineering",
  "solra": "solar", "soalr": "solar", "solor": "solar",
  "agricultrue": "agriculture", "agriculutre": "agriculture", "agriclture": "agriculture",

  // ==================== EXPANDED TYPO COVERAGE ====================
  
  // Technology & Computing
  "tecnology": "technology", "technolgy": "technology", "tehcnology": "technology", "technoloy": "technology",
  "computar": "computer", "compter": "computer", "computor": "computer", "comupter": "computer",
  "sofware": "software", "softwear": "software", "sotfware": "software", "softwar": "software",
  "hardwear": "hardware", "hardwre": "hardware", "hardwar": "hardware",
  "interent": "internet", "intrenet": "internet", "internett": "internet", "intenet": "internet",
  "artifical": "artificial", "artifcial": "artificial", "articifial": "artificial", "artficial": "artificial",
  "inteligence": "intelligence", "intellegence": "intelligence", "inteligance": "intelligence", "intellignce": "intelligence",
  "machien": "machine", "machin": "machine", "machne": "machine", "mashine": "machine",
  "algoritm": "algorithm", "algorythm": "algorithm", "algorthm": "algorithm", "algorhythm": "algorithm",
  "databse": "database", "datbase": "database", "databaes": "database", "databas": "database",
  "securtiy": "security", "securty": "security", "secuirty": "security", "secrity": "security",
  "privicy": "privacy", "priacy": "privacy", "privcy": "privacy", "pricacy": "privacy",
  "encryptioin": "encryption", "encyrption": "encryption", "encrytpion": "encryption",
  "blockchan": "blockchain", "blockchian": "blockchain", "blokchain": "blockchain", "blockhain": "blockchain",
  "cryptocurreny": "cryptocurrency", "cryptoccurrency": "cryptocurrency", "cryto": "crypto", "cyrpto": "crypto",
  "decenteralized": "decentralized", "decentrilized": "decentralized", "decentraliezd": "decentralized",

  // Food & Cooking
  "reciepe": "recipe", "recipie": "recipe", "recepie": "recipe", "receipe": "recipe", "recpie": "recipe",
  "ingrediant": "ingredient", "ingredent": "ingredient", "ingrdient": "ingredient", "ingredeint": "ingredient",
  "resturant": "restaurant", "restarant": "restaurant", "restraunt": "restaurant", "restuarant": "restaurant",
  "nutirtion": "nutrition", "nutriton": "nutrition", "nutrtion": "nutrition", "nutritoin": "nutrition",
  "cokking": "cooking", "cookin": "cooking", "cookng": "cooking", "coking": "cooking",
  "bakeing": "baking", "bakng": "baking", "baknig": "baking",
  "cocktial": "cocktail", "coctail": "cocktail", "cocktale": "cocktail", "cockatail": "cocktail",

  // Health & Medical
  "medcine": "medicine", "medicne": "medicine", "medecine": "medicine", "mediicne": "medicine",
  "pharamcy": "pharmacy", "pharmcy": "pharmacy", "pharamacy": "pharmacy", "pharmacey": "pharmacy",
  "perscription": "prescription", "presciption": "prescription", "prescirption": "prescription",
  "symtoms": "symptoms", "symptms": "symptoms", "symtpoms": "symptoms", "symptons": "symptoms",
  "diagnossis": "diagnosis", "diagnosi": "diagnosis", "diagnoses": "diagnosis", "diagnoisis": "diagnosis",
  "theraphy": "therapy", "theropy": "therapy", "therapie": "therapy", "thearpy": "therapy",
  "counceling": "counseling", "counsling": "counseling", "conseling": "counseling", "counselling": "counseling",
  "psycology": "psychology", "phychology": "psychology", "psyhcology": "psychology", "pschology": "psychology",
  "anxeity": "anxiety", "anixety": "anxiety", "anxitey": "anxiety", "anxeiety": "anxiety",
  "depresion": "depression", "depresssion": "depression", "deppression": "depression", "depresson": "depression",
  "insomina": "insomnia", "insomania": "insomnia", "insomia": "insomnia", "insmonia": "insomnia",
  "nutrician": "nutrition", "nutrishion": "nutrition",
  "excercise": "exercise", "exersice": "exercise", "excersize": "exercise", "exercize": "exercise",
  "wieght": "weight", "weigth": "weight", "wight": "weight", "wheight": "weight",
  "diabeties": "diabetes", "diabetis": "diabetes", "diabtes": "diabetes", "diabeetes": "diabetes",
  "cancre": "cancer", "canser": "cancer", "caner": "cancer",
  "pregancy": "pregnancy", "pregnacy": "pregnancy", "pregnanacy": "pregnancy", "pregnany": "pregnancy",

  // Education & Learning
  "languauge": "language", "langauge": "language", "languge": "language", "langague": "language",
  "grammer": "grammar", "gramar": "grammar", "grammr": "grammar", "gramm": "grammar",
  "vocabluary": "vocabulary", "vocabulry": "vocabulary", "vocaulary": "vocabulary", "vocabular": "vocabulary",
  "mathemtics": "mathematics", "mathmatics": "mathematics", "matematics": "mathematics", "mathematcs": "mathematics",
  "algerbra": "algebra", "alegbra": "algebra", "algebr": "algebra", "algabra": "algebra",
  "calculis": "calculus", "calculas": "calculus", "calculuss": "calculus", "caluculus": "calculus",
  "geometery": "geometry", "geomety": "geometry", "geomtry": "geometry", "geoemetry": "geometry",
  "trigonometery": "trigonometry", "trigonmetry": "trigonometry", "trigonomatry": "trigonometry",
  "chemisty": "chemistry", "chemestry": "chemistry", "chemisrty": "chemistry", "chemsitry": "chemistry",
  "biologi": "biology", "biolgy": "biology", "bioligy": "biology", "bioloy": "biology",
  "phsyics": "physics", "physcs": "physics", "phyiscs": "physics", "physicis": "physics",
  "literture": "literature", "literatue": "literature", "litreature": "literature", "litrature": "literature",
  "universtiy": "university", "univeristy": "university", "unviersity": "university", "univerity": "university",
  "scholarhsip": "scholarship", "scolarship": "scholarship", "scholrship": "scholarship", "scholaship": "scholarship",

  // Writing & Content
  "writting": "writing", "writng": "writing", "wrtiting": "writing", "writeing": "writing",
  "artcile": "article", "articel": "article", "artile": "article", "aritcle": "article",
  "essey": "essay", "essy": "essay", "essya": "essay", "eassy": "essay",
  "sumary": "summary", "summery": "summary", "sumarry": "summary", "summmary": "summary",
  "paragrpah": "paragraph", "paragrah": "paragraph", "paragaph": "paragraph", "paragrap": "paragraph",
  "sentance": "sentence", "sentense": "sentence", "sentenc": "sentence", "snetence": "sentence",
  "speling": "spelling", "spellng": "spelling", "spelilng": "spelling", "speeling": "spelling",
  "puncuation": "punctuation", "punctation": "punctuation", "punctuaiton": "punctuation",
  "copywrite": "copyright", "copywirte": "copyright", "copyrght": "copyright",
  "plagerism": "plagiarism", "plagarism": "plagiarism", "plagirism": "plagiarism", "plaigarism": "plagiarism",
  "poetrey": "poetry", "potery": "poetry", "poetyr": "poetry", "poertry": "poetry",
  "novle": "novel", "novell": "novel", "nvel": "novel",
  "biograpy": "biography", "biografy": "biography", "biographhy": "biography",
  "autobiograpy": "autobiography", "autobiogrpahy": "autobiography",

  // Business & Finance
  "managment": "management", "managemnt": "management", "mangement": "management", "managemnet": "management",
  "entreprener": "entrepreneur", "entrepeneur": "entrepreneur", "entreprenuer": "entrepreneur", "entreprenur": "entrepreneur",
  "stratgey": "strategy", "stragety": "strategy", "startegy": "strategy", "stratagy": "strategy",
  "budgeting": "budgeting", "budgting": "budgeting", "budjeting": "budgeting",
  "accountng": "accounting", "acounting": "accounting", "accountin": "accounting", "accoutning": "accounting",
  "ecoomics": "economics", "economis": "economics", "economcs": "economics", "econmics": "economics",
  "advertisment": "advertisement", "advertisemnt": "advertisement", "adverstisement": "advertisement",
  "ecomerce": "ecommerce", "ecommerece": "ecommerce", "e-comerce": "ecommerce",
  "dropshiping": "dropshipping", "dropshoping": "dropshipping", "dropsipping": "dropshipping",
  "affilate": "affiliate", "affilliate": "affiliate", "afiliate": "affiliate", "affilaite": "affiliate",
  "comission": "commission", "commision": "commission", "commsision": "commission",
  "curreny": "currency", "currancy": "currency", "curency": "currency", "currecy": "currency",
  "transacion": "transaction", "transction": "transaction", "transacton": "transaction",
  "morgage": "mortgage", "mortage": "mortgage", "morgatge": "mortgage", "mortgae": "mortgage",
  "intrest": "interest", "interset": "interest", "interst": "interest", "interrest": "interest",
  "dividned": "dividend", "divident": "dividend", "dividnd": "dividend",
  "retiremnt": "retirement", "retirment": "retirement", "retirementt": "retirement",
  "pensoin": "pension", "penson": "pension", "penison": "pension",
  "taxs": "taxes", "taxex": "taxes", "txes": "taxes",

  // Relationships & Social
  "realtionship": "relationship", "relatioship": "relationship", "relaitonship": "relationship", "relationshp": "relationship",
  "marraige": "marriage", "mariage": "marriage", "marrige": "marriage", "marriag": "marriage",
  "divorse": "divorce", "divorec": "divorce", "divoce": "divorce", "divorice": "divorce",
  "dateing": "dating", "datin": "dating", "daiting": "dating",
  "pareting": "parenting", "paranting": "parenting", "parentng": "parenting", "pareniting": "parenting",
  "pregnent": "pregnant", "pregnat": "pregnant", "pregnnat": "pregnant",
  "famly": "family", "famliy": "family", "familiy": "family", "familly": "family",
  "freind": "friend", "frend": "friend", "freand": "friend", "fiend": "friend",
  "comunity": "community", "commuinty": "community", "communty": "community", "commnuity": "community",
  "socail": "social", "soical": "social", "sociall": "social",

  // Home & DIY
  "remodle": "remodel", "remdoel": "remodel", "remmodel": "remodel",
  "rennovation": "renovation", "renovaton": "renovation", "renvation": "renovation", "renovaiton": "renovation",
  "plumbing": "plumbing", "plumming": "plumbing", "plubming": "plumbing",
  "electical": "electrical", "electircal": "electrical", "eletrical": "electrical", "electricl": "electrical",
  "furnitre": "furniture", "furnture": "furniture", "furnitrue": "furniture", "furntiure": "furniture",
  "applaince": "appliance", "applience": "appliance", "appliace": "appliance", "appliane": "appliance",
  "kitchn": "kitchen", "kicthen": "kitchen", "kithen": "kitchen", "kithcen": "kitchen",
  "bathrom": "bathroom", "bathrrom": "bathroom", "bathrooom": "bathroom",
  "bedrrom": "bedroom", "bedrom": "bedroom", "bedroon": "bedroom",

  // Travel & Geography
  "vaccation": "vacation", "vacaton": "vacation", "vacaction": "vacation", "vaction": "vacation",
  "travle": "travel", "tavel": "travel", "travell": "travel", "traval": "travel",
  "destiation": "destination", "destinaton": "destination", "destinaiton": "destination",
  "hotell": "hotel", "hotl": "hotel", "hotal": "hotel",
  "airprot": "airport", "airpotr": "airport", "aiport": "airport", "ariport": "airport",
  "passoprt": "passport", "pasport": "passport", "passprot": "passport", "passsport": "passport",
  "georgraphy": "geography", "geogrpahy": "geography", "geograpy": "geography",
  "continant": "continent", "contient": "continent", "contnient": "continent",

  // Science & Nature
  "enviroment": "environment", "enviornment": "environment", "enviorment": "environment", "envrionment": "environment",
  "ecologi": "ecology", "ecolgy": "ecology", "ecollogy": "ecology",
  "sustainible": "sustainable", "sustainble": "sustainable", "sustianable": "sustainable", "sustanable": "sustainable",
  "reycling": "recycling", "recyceling": "recycling", "reccyling": "recycling",
  "polluton": "pollution", "polution": "pollution", "polltuion": "pollution",
  "atmospher": "atmosphere", "atmoshpere": "atmosphere", "atmosphre": "atmosphere",
  "tempature": "temperature", "temperture": "temperature", "temprature": "temperature", "temerature": "temperature",
  "hurrican": "hurricane", "huricane": "hurricane", "hurricaine": "hurricane",
  "earthquak": "earthquake", "earthquke": "earthquake", "earhquake": "earthquake",
  "astronmy": "astronomy", "astromomy": "astronomy", "astrononmy": "astronomy", "astronoy": "astronomy",
  "galazy": "galaxy", "galaxxy": "galaxy", "gallaxy": "galaxy",
  "plante": "planet", "plannet": "planet", "palnet": "planet",
  "univrse": "universe", "universse": "universe", "unvierse": "universe",

  // Sports & Fitness
  "excersise": "exercise", "exerscise": "exercise", "exericse": "exercise",
  "atheltic": "athletic", "atheletic": "athletic", "atheltc": "athletic",
  "champoin": "champion", "champin": "champion", "champian": "champion",
  "tournment": "tournament", "tournement": "tournament", "tournamnet": "tournament",
  "competetion": "competition", "competion": "competition", "competiton": "competition",
  "proffesional": "professional", "profesional": "professional", "proffessional": "professional",
  "amatuer": "amateur", "amature": "amateur", "amatuar": "amateur",
  "strenght": "strength", "stregth": "strength", "strenth": "strength",
  "flexability": "flexibility", "flexibilty": "flexibility", "flexiblity": "flexibility",
  "endurnace": "endurance", "endurence": "endurance", "endurace": "endurance",

  // Art & Entertainment
  "entertianment": "entertainment", "entertainmnet": "entertainment", "entertaiment": "entertainment",
  "theather": "theater", "teahter": "theater", "theatr": "theater", "theateer": "theater",
  "perfomance": "performance", "performace": "performance", "preformance": "performance",
  "muscian": "musician", "musicain": "musician", "musican": "musician",
  "orchesta": "orchestra", "orchesrta": "orchestra", "orchestera": "orchestra",
  "sculputre": "sculpture", "sculpure": "sculpture", "scultpure": "sculpture",
  "photographey": "photography", "photograpy": "photography", "photgraphy": "photography",
  "cinematogrpahy": "cinematography", "cinematograpy": "cinematography",

  // Government & Politics
  "goverment": "government", "govermnent": "government", "governmnet": "government", "govenment": "government",
  "politcs": "politics", "politcis": "politics", "poiltics": "politics",
  "democrasy": "democracy", "democray": "democracy", "democarcy": "democracy",
  "legisaltion": "legislation", "legislatoin": "legislation", "legislture": "legislation",
  "constituion": "constitution", "constiution": "constitution", "constituiton": "constitution",
  "presedent": "president", "presidnet": "president", "pressident": "president",
  "senatror": "senator", "seantor": "senator", "sentor": "senator",
  "congerss": "congress", "congres": "congress", "congrees": "congress",
  "electoin": "election", "eleciton": "election", "elction": "election",

  // Miscellaneous Common Words
  "definately": "definitely", "definatly": "definitely", "defintely": "definitely", "definetly": "definitely",
  "occured": "occurred", "occurrd": "occurred", "ocurred": "occurred",
  "seperate": "separate", "seprate": "separate", "seperete": "separate",
  "necessery": "necessary", "neccessary": "necessary", "neccesary": "necessary", "necesary": "necessary",
  "accomodate": "accommodate", "acommodate": "accommodate", "accomadate": "accommodate",
  "recomend": "recommend", "reccommend": "recommend", "reccomend": "recommend", "recomnd": "recommend",
  "occurence": "occurrence", "occurrance": "occurrence", "occurance": "occurrence",
  "succesful": "successful", "successfull": "successful", "sucesful": "successful", "sucessful": "successful",
  "expereince": "experience", "experiance": "experience", "expereience": "experience", "experince": "experience",
  "knowlege": "knowledge", "knowldge": "knowledge", "knowlegde": "knowledge", "knowlede": "knowledge",
  "diffrent": "different", "diferent": "different", "differnt": "different", "differet": "different",
  "importnat": "important", "importent": "important", "importan": "important", "improtant": "important",
  "beautifull": "beautiful", "beatiful": "beautiful", "beutiful": "beautiful", "beautful": "beautiful",
  "intresting": "interesting", "intersting": "interesting", "intresing": "interesting", "interesing": "interesting",
  "begining": "beginning", "begginning": "beginning", "beggining": "beginning", "beginng": "beginning",
  "tommorrow": "tomorrow", "tommorow": "tomorrow", "tomorow": "tomorrow", "tommrow": "tomorrow",
  "calender": "calendar", "calandar": "calendar", "calander": "calendar",
  "enviromental": "environmental", "enviornmental": "environmental", "enviromentl": "environmental",
  "govermental": "governmental", "governemntal": "governmental",
  "immediatly": "immediately", "imediately": "immediately", "immedietly": "immediately",
  "unfortunatly": "unfortunately", "unfortunatley": "unfortunately", "unfortunetly": "unfortunately",
  "basicly": "basically", "basicaly": "basically", "basially": "basically",
  "probaly": "probably", "probabley": "probably", "proabably": "probably", "probablly": "probably",
  "suprise": "surprise", "surprize": "surprise", "suprize": "surprise",
  "existance": "existence", "existense": "existence", "existnce": "existence",
  "refrence": "reference", "referance": "reference", "refernce": "reference",
  "performnce": "performance", "performence": "performance", "preformence": "performance",
  "maintainance": "maintenance", "maintenace": "maintenance", "maintanance": "maintenance",
  "aquire": "acquire", "aquir": "acquire", "aqcuire": "acquire",
  "acheive": "achieve", "acheiv": "achieve", "achive": "achieve",
  "recieve": "receive", "recive": "receive", "receve": "receive",
  "beleive": "believe", "belive": "believe", "beleif": "belief",
  "foriegn": "foreign", "forein": "foreign", "foregin": "foreign",
  "wierd": "weird", "wried": "weird", "werid": "weird"
};

// 1b. PARTIAL WORD → FULL WORD (for 2-4 character guessing)
const PARTIAL_WORD_MAP: Record<string, string[]> = {
  // Video/Media partials
  "vid": ["video", "video generation", "video generator"],
  "vide": ["video", "video generation"],
  "mov": ["movie", "movie maker"],
  "movi": ["movie", "movie maker"],
  "film": ["film", "movie", "video"],
  "ani": ["animation", "anime"],
  "anim": ["animation", "animate", "anime"],
  // Audio partials
  "aud": ["audio", "audio tools"],
  "audi": ["audio", "audio tools"],
  "sou": ["sound", "sounds", "soul"],
  "soun": ["sound", "sounds"],
  "mus": ["music", "music generation"],
  "musi": ["music", "music generation"],
  "voi": ["voice", "voice synthesis"],
  "voic": ["voice", "voice synthesis"],
  "spe": ["speech", "speech synthesis"],
  "spee": ["speech", "speech synthesis"],
  "tts": ["text to speech"],
  "t2v": ["text to video"],
  // Agent partials
  "age": ["agent", "agents"],
  "agen": ["agent", "agents", "agentic"],
  "agent": ["agents", "agent", "agentic"],
  "auto": ["automation", "automate"],
  "autom": ["automation", "automate"],
  "work": ["workflow", "workspace"],
  "workf": ["workflow"],
  // Website/Web partials
  "web": ["website", "web builder", "webflow"],
  "webs": ["website", "web builder"],
  "websi": ["website", "web builder"],
  "site": ["website", "site builder"],
  "land": ["landing page"],
  "landi": ["landing page"],
  // Business partials
  "bus": ["business", "business tools"],
  "busi": ["business", "business plan"],
  "busin": ["business", "business plan"],
  "star": ["startup", "start"],
  "start": ["startup", "startup validator"],
  "mark": ["marketing", "market"],
  "marke": ["marketing", "market"],
  "sale": ["sales", "sale"],
  "comm": ["commerce", "ecommerce"],
  "ecom": ["ecommerce", "e-commerce"],
  // Image/Design partials
  "img": ["image", "image generator"],
  "imag": ["image", "image generator"],
  "des": ["design", "designer"],
  "desi": ["design", "designer"],
  "desig": ["design", "designer"],
  "logo": ["logo", "logo design"],
  "grap": ["graphic", "graphics"],
  "graph": ["graphic", "graphics", "graph"],
  "ui": ["ui", "ui design"],
  "ux": ["ux", "ux design"],
  // Writing partials
  "wri": ["write", "writing", "writer"],
  "writ": ["write", "writing", "writer"],
  "write": ["writer", "writing"],
  "blog": ["blog", "blogging"],
  "art": ["article", "art"],
  "arti": ["article"],
  "copy": ["copywriting", "copy"],
  "copyw": ["copywriting"],
  "res": ["resume", "research"],
  "resu": ["resume"],
  "emai": ["email"],
  // Learning partials
  "lea": ["learn", "learning"],
  "lear": ["learn", "learning"],
  "learn": ["learning", "learn any"],
  "edu": ["education", "educational"],
  "educ": ["education", "educational"],
  "cour": ["course", "courses"],
  "cours": ["course", "courses"],
  "tut": ["tutorial", "tutor"],
  "tuto": ["tutorial", "tutor"],
  "trai": ["training", "train"],
  "train": ["training", "train"],
  "stu": ["study", "student"],
  "stud": ["study", "student"],
  // Coding partials
  "cod": ["code", "coding", "coder"],
  "code": ["coding", "coder", "code"],
  "codi": ["coding"],
  "prog": ["programming", "program"],
  "progr": ["programming", "program"],
  "dev": ["developer", "development"],
  "deve": ["developer", "development"],
  "app": ["app", "application"],
  // AI partials
  "ai": ["ai", "artificial intelligence"],
  "gpt": ["gpt", "chatgpt"],
  "bot": ["bot", "chatbot"],
  "chat": ["chatbot", "chat", "chatgpt"],
  "assi": ["assistant"],
  "assis": ["assistant"],
  // Legal partials
  "leg": ["legal", "legislation"],
  "lega": ["legal"],
  "con": ["contract", "content"],
  "cont": ["contract", "content"],
  "contr": ["contract"],
  "law": ["lawyer", "law", "legal"],
  // Health partials
  "hea": ["health", "healthcare"],
  "heal": ["health", "healthcare"],
  "med": ["medical", "medicine"],
  "medi": ["medical", "medicine", "meditation"],
  "doc": ["doctor", "document"],
  "doct": ["doctor"],
  // Data partials
  "dat": ["data", "database"],
  "data": ["data", "database", "analytics"],
  "anal": ["analytics", "analysis"],
  "analy": ["analytics", "analysis"],
  "char": ["chart", "character"],
  "chart": ["chart", "charts"],
  "rep": ["report", "reports"],
  "repo": ["report", "reports"],
  "spre": ["spreadsheet"],
  "sprea": ["spreadsheet"],
  // Finance partials
  "fin": ["finance", "financial"],
  "fina": ["finance", "financial"],
  "inv": ["investment", "invest"],
  "inve": ["investment", "invest"],
  "trad": ["trading", "trade", "trader"],
  "trade": ["trading", "trader"],
  "mon": ["money", "monetize"],
  "mone": ["money", "monetize"],
  // Spiritual partials  
  "spi": ["spiritual", "spirit"],
  "spir": ["spiritual", "spirit"],
  "spiri": ["spiritual", "spirit"],
  "god": ["god", "gods", "deity", "divine"],
  "medit": ["meditation"],
  "rel": ["religion", "religious"],
  "reli": ["religion", "religious"],
  "relig": ["religion", "religious"],
  "bib": ["bible", "biblical"],
  "bibl": ["bible", "biblical"],
  "jes": ["jesus"],
  "jesu": ["jesus"],
  "bud": ["buddha", "buddhist"],
  "budd": ["buddha", "buddhist"],
  "myst": ["mystical", "mystic", "mysticism"],
  "mysti": ["mystical", "mystic", "mysticism"],
  "phi": ["philosophy", "philosophical"],
  "phil": ["philosophy", "philosophical"],
  "wis": ["wisdom", "wise"],
  "wisd": ["wisdom"],
  "soul": ["soul", "soul map"],
  "div": ["divine", "divination"],
  "divi": ["divine", "divination"],
  "tar": ["tarot"],
  "taro": ["tarot"],
  "ast": ["astrology", "astronomy"],
  "astr": ["astrology", "astronomy"],
  // History & Research partials
  "his": ["history", "historical"],
  "hist": ["history", "historical"],
  "rese": ["research", "researcher"],
  "resea": ["research", "researcher"],
  "arch": ["archaeology", "archaeologist", "architecture"],
  "anti": ["antique", "antiques"],
  "antiq": ["antique", "antiques"],
  // Food & Home partials
  "che": ["chef", "check"],
  "chef": ["chef", "culinary"],
  "foo": ["food", "food quality"],
  "food": ["food", "food quality", "culinary"],
  "coo": ["cooking", "cook"],
  "cook": ["cooking", "cook", "culinary"],
  "hom": ["home", "homeschool"],
  "home": ["home", "homeschool", "home renovation"],
  // Misc utility partials
  "tra": ["travel", "trader", "trading", "translation"],
  "trav": ["travel", "travel advisor"],
  "trave": ["travel", "travel advisor"],
  "ins": ["insurance", "instagram"],
  "insu": ["insurance"],
  "pro": ["property", "prompt", "productivity"],
  "prop": ["property", "prompt"],
  "prope": ["property"],
  "gam": ["game", "gaming"],
  "game": ["game", "gaming", "video game"],
  "ent": ["entertainment", "enterprise"],
  "enter": ["entertainment", "enterprise"],
  "tri": ["trivia", "trip"],
  "triv": ["trivia"],
};

// Helper: Remove doubled letters (e.g., "learnn" → "learn", "anyy" → "any")
const removeDoubledLetters = (s: string): string => s.replace(/(.)\1+/g, '$1');

// Helper: Smart typo normalization
const normalizeTypos = (q: string): string => {
  let normalized = q.toLowerCase().trim();
  
  // Direct typo map lookup first
  if (TYPO_MAP[normalized]) return TYPO_MAP[normalized];
  
  // Remove doubled letters and check again
  const deduped = removeDoubledLetters(normalized);
  if (TYPO_MAP[deduped]) return TYPO_MAP[deduped];
  if (deduped !== normalized) normalized = deduped;
  
  // Handle multi-word queries (e.g., "learnn anyy skill")
  const words = normalized.split(/\s+/);
  if (words.length > 1) {
    const correctedWords = words.map(w => {
      if (TYPO_MAP[w]) return TYPO_MAP[w];
      const dedupedWord = removeDoubledLetters(w);
      if (TYPO_MAP[dedupedWord]) return TYPO_MAP[dedupedWord];
      return dedupedWord;
    });
    return correctedWords.join(' ');
  }
  
  return normalized;
};

// 2. ABBREVIATIONS → full names
const ABBREV_MAP: Record<string, string[]> = {
  "mj": ["midjourney"],
  "sd": ["stable diffusion"],
  "gpt": ["chatgpt", "gpt"],
  "gpt4": ["chatgpt", "gpt-4"],
  "gpt4o": ["chatgpt", "gpt-4o"],
  "llm": ["chatgpt", "claude", "gemini", "llama"],
  "ai": ["artificial intelligence", "ai"],
  "ml": ["machine learning", "runway ml"],
  "cv": ["computer vision", "resume"],
  "nlp": ["natural language"],
  "tts": ["text to speech", "elevenlabs"],
  "stt": ["speech to text", "whisper"],
  "t2v": ["text to video", "sora", "runway", "pika"],
  "t2i": ["text to image", "midjourney", "dalle", "stable diffusion"],
  "vid": ["video"],
  "img": ["image"],
  "aud": ["audio", "music"],
  "doc": ["document", "documentation"],
  "ppt": ["powerpoint", "presentation"],
  "pdf": ["document", "pdf"],
};

// 3. SYNONYMS → related terms (expanded for comprehensive intelligence)
const SYNONYM_MAP: Record<string, string[]> = {
  "picture": ["image", "photo", "visual"],
  "photo": ["image", "picture", "photography"],
  "film": ["video", "movie", "cinema", "sora", "runway", "veo", "pika", "luma"],
  "movie": ["film", "video", "cinema", "sora", "runway", "veo", "pika", "luma", "text to video", "video generation"],
  "cinema": ["movie", "film", "video"],
  "song": ["music", "audio", "melody"],
  "voice": ["audio", "speech", "tts", "sound", "elevenlabs"],
  "write": ["writing", "writer", "content", "text"],
  "code": ["coding", "programming", "developer"],
  "learn": ["education", "course", "training", "skill"],
  "money": ["finance", "trading", "investment", "budget"],
  "health": ["medical", "wellness", "doctor", "fitness"],
  "law": ["legal", "lawyer", "attorney", "contract"],
  "spirit": ["spiritual", "soul", "meditation", "philosophy"],
  "god": ["spiritual", "divine", "religious", "deity"],
  "chat": ["chatbot", "conversation", "assistant"],
  "bot": ["chatbot", "assistant", "agent"],
  "make": ["create", "generate", "build"],
  "create": ["make", "generate", "build", "design"],
  "edit": ["editing", "editor", "modify"],
  "fix": ["repair", "correct", "improve"],
  "find": ["search", "discover", "locate", "finder"],
  "exercise": ["fitness", "workout", "running", "gym"],
  "run": ["runway", "running", "execute"],
  "game": ["gaming", "video game", "game design"],
  "video": ["movie", "film", "sora", "runway", "veo", "pika", "luma", "video generation"],
  "sound": ["audio", "voice", "music", "sfx", "speech"],
  "sounds": ["audio", "voice", "music", "sfx", "speech"],
  "audio": ["sound", "voice", "music", "speech", "podcast"],
  "speech": ["voice", "audio", "tts", "text to speech"],
  "agent": ["agents", "automation", "workflow", "agentic", "autonomous", "operator", "multi-agent", "orchestration"],
  "agents": ["agent", "automation", "workflow", "agentic", "autonomous", "operator", "lovable", "bolt", "n8n", "zapier", "multi-agent", "orchestration"],
  "autonomous": ["agent", "agents", "agentic", "automation", "self-driving", "auto"],
  "multi-agent": ["agents", "orchestration", "workflow", "automation", "multiagent"],
  "workflow automation": ["automation", "workflow", "zapier", "make", "n8n", "agent"],
  "orchestration": ["multi-agent", "workflow", "automation", "agents"],
  "website": ["web", "site", "webpage", "landing page", "web builder"],
  "web": ["website", "site", "webpage", "internet"],
  "business": ["enterprise", "company", "startup", "productivity", "work", "professional"],
  "text to video": ["t2v", "video generation", "sora", "runway", "veo", "pika", "luma"],
  "text to speech": ["tts", "voice synthesis", "elevenlabs", "play.ht", "murf"],
};

// 4. MAJOR PLATFORM ALIASES
const PLATFORM_ALIASES: Record<string, string[]> = {
  "openai": ["chatgpt", "dalle", "sora", "whisper", "gpt"],
  "anthropic": ["claude"],
  "google": ["gemini", "bard", "vertex"],
  "meta": ["llama", "meta ai"],
  "microsoft": ["copilot", "bing", "azure"],
  "stability": ["stable diffusion", "stability ai"],
  "adobe": ["firefly", "photoshop", "premiere"],
};

// 5. INSTANT PHRASE → TOOL TITLES (bypasses heavy search for common phrases)
const PHRASE_TO_TOOLS: Record<string, string[]> = {
  // ==================== TEXT TO VIDEO ====================
  "text to video": ["Sora", "Sora 2", "SORA2 Text to Video Prompt Maker GPT", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Luma Dream Machine Prompt Assistant", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI", "Higgsfield AI", "Movie Maker Studio AI SUITE"],
  "text-to-video": ["Sora", "Sora 2", "SORA2 Text to Video Prompt Maker GPT", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Luma Dream Machine Prompt Assistant", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI"],
  "t2v": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI"],
  "txt to video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "video prompt": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "video prompts": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "text to video prompt": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "video generator": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "video generators": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "ai video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "HeyGen", "Synthesia", "Movie Maker Studio AI SUITE"],
  
  // ==================== VIDEO GENERATION ====================
  "video generation": ["Sora", "Sora 2", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI", "Higgsfield AI", "Movie Maker Studio AI SUITE", "Music Video Maker AI Studio"],
  "generate video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen"],
  "create video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Movie Maker Studio AI SUITE"],
  "make video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Movie Maker Studio AI SUITE"],
  "video ai": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "video tools": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia", "Movie Maker Studio AI SUITE", "Video Second-by-Second Analysis GPT"],
  
  // ==================== TEXT TO SPEECH ====================
  "text to speech": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify", "Amazon Polly", "Google Text-to-Speech"],
  "text-to-speech": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify"],
  "tts": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify"],
  "voice synthesis": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI"],
  "speech synthesis": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs"],
  "ai voice": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO"],
  "voice generator": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI"],
  "voice over": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Speechify"],
  "voiceover": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Speechify"],
  
  // ==================== SOUND EFFECTS & FX ====================
  "sound effects": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "sound effect": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "sfx": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "fx": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "audio fx": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "audio effects": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "fx sounds": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio"],
  "fx generator": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  "sound design": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Suno", "Udio", "Descript"],
  "foley": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  
  // ==================== VOICE AGENTS ====================
  "voice agents": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI", "Vocode"],
  "voice agent": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI"],
  "phone agent": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI"],
  "phone agents": ["Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI", "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  "call agent": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI"],
  "call agents": ["Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Lindy AI Voice Agents", "Dialora AI", "CallPod AI"],
  "conversational ai": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Voiceflow", "Cognigy", "Kore.ai"],
  "ai phone": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Synthflow AI", "Goodcall", "Dialora AI", "CallPod AI"],
  "ai caller": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Vapi", "Bland AI", "Retell AI", "Air AI", "Dialora AI", "CallPod AI"],
  "ai receptionist": ["Goodcall", "Air AI", "Synthflow AI", "Lindy AI Voice Agents", "Vapi", "Bland AI"],
  "call center ai": ["Retell AI", "Bland AI", "Vapi", "Air AI", "Synthflow AI", "CallPod AI", "Dialora AI"],
  "elevenlabs": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  "eleven labs": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  "11labs": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  
  // ==================== TEXT TO SPEECH / VOICE CLONING ====================
  "fakeyou": ["FakeYou"],
  "fake you": ["FakeYou"],
  "celebrity voices": ["FakeYou", "Replica Studios", "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator"],
  "character voices": ["FakeYou", "Replica Studios", "Typecast"],
  "voice cloning": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Resemble AI", "Respeecher", "Cartesia AI", "Play.ht", "FakeYou"],
  "clone voice": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Resemble AI", "Respeecher", "Cartesia AI", "Play.ht"],
  "ai voiceover": ["Murf AI", "Play.ht", "Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "LOVO", "Listnr", "WellSaid Labs", "Typecast"],
  "podcast ai": ["Podcast.ai", "Descript", "Listnr", "Podcast Script Writer GPT"],
  "cartesia": ["Cartesia AI"],
  "respeecher": ["Respeecher"],
  "listnr": ["Listnr"],
  "typecast": ["Typecast"],
  "replica studios": ["Replica Studios"],
  
  // ==================== SOUND & AUDIO ====================
  "sound": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify", "Podcast Script Writer GPT"],
  "sounds": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify"],
  "audio": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify", "Descript", "Podcast Script Writer GPT"],
  "audio tools": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Descript", "Podcast Script Writer GPT"],
  "voice": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify", "Cartesia AI", "FakeYou"],
  "voice tools": ["Eleven Labs: Voice Agents, Text to Speech, FX Sound Effects Generator", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Cartesia AI"],
  
  // ==================== AGENTS ====================
  "agent": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "Zapier", "Make.com", "Browser Use", "AgentGPT", "Auto-GPT", "BabyAGI", "MetaGPT", "LangChain Agents", "CrewAI", "Microsoft AutoGen"],
  "agents": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "Zapier", "Make.com", "Browser Use", "AgentGPT", "Auto-GPT", "BabyAGI", "MetaGPT", "Comet", "Taxy AI", "Genspark Agent", "LangChain Agents", "CrewAI", "Microsoft AutoGen", "Lindy AI", "Vitara AI", "Base44"],
  "ai agent": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Manus", "Claude Computer Use", "AgentGPT", "Auto-GPT", "LangChain Agents", "CrewAI", "Microsoft AutoGen", "Lindy AI"],
  "ai agents": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "AgentGPT", "Auto-GPT", "BabyAGI", "LangChain Agents", "CrewAI", "Microsoft AutoGen", "Lindy AI"],
  "autonomous agent": ["Auto-GPT", "AgentGPT", "BabyAGI", "MetaGPT", "Microsoft AutoGen", "LangChain Agents", "CrewAI", "Lindy AI", "Manus"],
  "autonomous agents": ["Auto-GPT", "AgentGPT", "BabyAGI", "MetaGPT", "Microsoft AutoGen", "LangChain Agents", "CrewAI", "Lindy AI", "Manus"],
  "autonomous": ["Auto-GPT", "AgentGPT", "BabyAGI", "MetaGPT", "Microsoft AutoGen", "LangChain Agents", "CrewAI", "Lindy AI"],
  "multi-agent": ["Microsoft AutoGen", "CrewAI", "LangChain Agents", "MetaGPT", "Auto-GPT", "BabyAGI"],
  "multi agent": ["Microsoft AutoGen", "CrewAI", "LangChain Agents", "MetaGPT", "Auto-GPT", "BabyAGI"],
  "multiagent": ["Microsoft AutoGen", "CrewAI", "LangChain Agents", "MetaGPT", "Auto-GPT", "BabyAGI"],
  "agentic": ["Auto-GPT", "AgentGPT", "BabyAGI", "MetaGPT", "Microsoft AutoGen", "LangChain Agents", "CrewAI", "Lindy AI", "Manus", "Lovable", "Bolt.new"],
  "agentic ai": ["Auto-GPT", "AgentGPT", "BabyAGI", "MetaGPT", "Microsoft AutoGen", "LangChain Agents", "CrewAI", "Lindy AI"],
  "automation": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Tray.io", "Bardeen", "Lindy AI"],
  "automation agent": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Lindy AI"],
  "workflow": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Tray.io", "CrewAI", "Lindy AI"],
  "workflow automation": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Tray.io", "CrewAI", "Lindy AI"],
  "workflow agent": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "Lindy AI", "CrewAI"],
  "task automation": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Lindy AI", "Auto-GPT"],
  "automate tasks": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Lindy AI", "Auto-GPT"],
  "digital worker": ["Lindy AI", "Auto-GPT", "AgentGPT", "CrewAI", "Microsoft AutoGen"],
  "digital employee": ["Lindy AI", "Auto-GPT", "AgentGPT", "CrewAI"],
  "coding agent": ["Lovable", "Bolt.new", "Replit Agent", "Cursor", "GitHub Copilot", "Codeium", "Tabnine", "Base44", "Vitara AI"],
  "web agent": ["Claude Computer Use", "ChatGPT Operator", "Browser Use", "Surf.new", "Manus", "Comet", "Taxy AI"],
  "browser agent": ["Claude Computer Use", "ChatGPT Operator", "Browser Use", "Surf.new", "Manus", "Taxy AI"],
  "app builder": ["Lovable", "Bolt.new", "Replit Agent", "Base44", "Vitara AI", "Vercel v0", "Cursor"],
  "app builder agent": ["Lovable", "Bolt.new", "Replit Agent", "Base44", "Vitara AI"],
  "no code agent": ["Lovable", "Bolt.new", "Base44", "Vitara AI", "Zapier", "Make.com"],
  "low code": ["Lovable", "Bolt.new", "Base44", "Vitara AI", "n8n", "Make.com"],
  "prompt to app": ["Lovable", "Bolt.new", "Base44", "Vitara AI", "Vercel v0"],
  "role based agent": ["CrewAI", "Microsoft AutoGen", "LangChain Agents"],
  "agent framework": ["LangChain Agents", "Microsoft AutoGen", "CrewAI", "Auto-GPT", "MetaGPT"],
  "agent orchestration": ["Microsoft AutoGen", "CrewAI", "LangChain Agents", "n8n"],
  
  // ==================== WEBSITE BUILDERS ====================
  "website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Vercel v0", "Durable AI", "10Web"],
  "build a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Vercel v0"],
  "make a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "create a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "website builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Durable AI"],
  "website generator": ["Lovable", "Bolt.new", "Webflow", "Framer", "Durable AI", "10Web", "Vercel v0"],
  "web builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "landing page": ["Lovable", "Bolt.new", "Webflow", "Framer", "Carrd", "Unbounce"],
  "build website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "site builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  
  // ==================== TRADING & FINANCE ====================
  "trading": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online", "Predictive Credit Score Checker GPT"],
  "trade": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "trader": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "day trading": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "daytrading": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "day trader": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "daytrader": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "trading advice": ["Trader GPT", "ChainGPT", "FinChat.io"],
  "trade stocks": ["Trader GPT", "FinChat.io", "ChainGPT"],
  "trade crypto": ["ChainGPT", "Trader GPT"],
  "stock": ["Trader GPT", "FinChat.io", "ChainGPT", "Predictive Credit Score Checker GPT"],
  "stocks": ["Trader GPT", "FinChat.io", "ChainGPT", "Predictive Credit Score Checker GPT"],
  "stock market": ["Trader GPT", "FinChat.io", "ChainGPT"],
  "stock trading": ["Trader GPT", "FinChat.io", "ChainGPT"],
  "crypto": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "cryptocurrency": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "cryptocurrencies": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "bitcoin": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "btc": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "ethereum": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "eth": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "coin": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "coins": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "altcoin": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "altcoins": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "blockchain": ["ChainGPT", "Trader GPT"],
  "defi": ["ChainGPT", "Trader GPT"],
  "nft": ["ChainGPT", "Trader GPT"],
  "nfts": ["ChainGPT", "Trader GPT"],
  "web3": ["ChainGPT", "Trader GPT"],
  "solana": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "dogecoin": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "litecoin": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "ripple": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "xrp": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "forex": ["Buy Forex Expert Advisor Online", "Trader GPT", "FinChat.io"],
  "investment": ["Trader GPT", "FinChat.io", "ChainGPT", "Business Plan Generator GPT"],
  "investing": ["Trader GPT", "FinChat.io", "ChainGPT", "Business Plan Generator GPT"],
  "invest": ["Trader GPT", "FinChat.io", "ChainGPT", "Business Plan Generator GPT"],
  "market analysis": ["Trader GPT", "FinChat.io", "ChainGPT", "Data Research Analysis Report GPT"],
  "financial": ["FinChat.io", "Trader GPT", "Taxes GPT", "Predictive Credit Score Checker GPT", "Insurance Claims GPT"],
  "finance": ["FinChat.io", "Trader GPT", "Taxes GPT", "Predictive Credit Score Checker GPT", "Insurance Claims GPT"],
  "money": ["Trader GPT", "FinChat.io", "Taxes GPT", "Predictive Credit Score Checker GPT", "Business Plan Generator GPT"],
  // Natural language crypto/trading intents
  "how to buy crypto": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "buy crypto": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "crypto trading tips": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "best crypto exchange": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "crypto exchange": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "crypto advice": ["ChainGPT", "Trader GPT", "FinChat.io"],
  "trading tips": ["Trader GPT", "ChainGPT", "FinChat.io"],
  "stock tips": ["Trader GPT", "FinChat.io", "ChainGPT"],
  "investment advice": ["Trader GPT", "FinChat.io", "ChainGPT", "Business Plan Generator GPT"],
  "how to invest": ["Trader GPT", "FinChat.io", "ChainGPT", "Business Plan Generator GPT"],
  "how to trade": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "learn trading": ["Trader GPT", "ChainGPT", "FinChat.io"],
  "learn to trade": ["Trader GPT", "ChainGPT", "FinChat.io"],
  "make money trading": ["Trader GPT", "ChainGPT", "FinChat.io", "Buy Forex Expert Advisor Online"],
  "financial advice": ["FinChat.io", "Trader GPT", "Taxes GPT", "Predictive Credit Score Checker GPT"],
  "smart contract": ["ChainGPT"],
  "smart contracts": ["ChainGPT"],
  
  // ==================== BUSINESS TOOLS ====================
  "business": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Taxes GPT", "The Resume & Job Finder Ai Suite", "Grant Writer GPT", "Training Manual Generator GPT", "Data Research Analysis Report GPT", "MULTITASKER GPT"],
  "business tools": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Taxes GPT", "The Resume & Job Finder Ai Suite", "Grant Writer GPT", "Training Manual Generator GPT", "Data Research Analysis Report GPT"],
  "startup": ["Startup Validator GPT", "Business Plan Generator GPT", "MicroSaaS GPT"],
  "business plan": ["Business Plan Generator GPT", "Startup Validator GPT"],
  "start a business": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT"],
  "company": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Training Manual Generator GPT"],
  "enterprise": ["Business Plan Generator GPT", "Data Research Analysis Report GPT", "Training Manual Generator GPT"],
  "productivity": ["Notion", "ClickUp", "Asana", "Monday.com", "Todoist", "Trello", "MULTITASKER GPT"],
  "productivity tools": ["Notion", "ClickUp", "Asana", "Monday.com", "Todoist", "Trello", "MULTITASKER GPT"],
  
  // ==================== IMAGE GENERATION ====================
  "image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "Adobe Firefly", "Graphic & Cover Design GPT", "DALL-E 3"],
  "image generation": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "Adobe Firefly", "DALL-E 3"],
  "image generator": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "Adobe Firefly", "DALL-E 3"],
  "text to image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "Adobe Firefly", "DALL-E 3"],
  "ai image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "Adobe Firefly", "DALL-E 3"],
  "generate image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "DALL-E 3"],
  "make image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "DALL-E 3"],
  "create image": ["Midjourney", "Flux AI", "Ideogram", "Stable Diffusion", "Leonardo AI", "DALL-E 3"],
  
  // ==================== MUSIC ====================
  "music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "Music Video Maker AI Studio", "AIVA", "Soundraw", "Boomy"],
  "music generation": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy", "Mubert"],
  "music generator": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy"],
  "make music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "AIVA", "Soundraw"],
  "create music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "AIVA"],
  "ai music": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy", "Mubert"],
  "song": ["Suno", "Udio", "Music Melodies & Lessons GPT"],
  "make a song": ["Suno", "Udio"],
  
  // Writing intents
  "write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "want to write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "i want to write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "write book": ["BOOK WRITER GPT"],
  "book writing": ["BOOK WRITER GPT"],
  "write a story": ["BOOK WRITER GPT", "Movie Script Writer GPT"],
  "write a script": ["Movie Script Writer GPT", "Playwriter GPT"],
  "write a movie": ["Movie Script Writer GPT", "Movie Maker Studio AI SUITE"],
  "write a play": ["Playwriter GPT"],
  "write an article": ["Article and Blog Rewriter GPT"],
  "write a blog": ["Article and Blog Rewriter GPT"],
  "writing": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT", "Movie Script Writer GPT", "Playwriter GPT", "Grammarly", "Jasper AI"],
  "writing tools": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT", "Grammarly", "Jasper AI", "Writesonic"],
  
  // Learning intents - EXACT TOOL NAMES FIRST
  "learn everything": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "learn any skill": ["LEARN ANY SKILL GPT"],
  "learn any skill gpt": ["LEARN ANY SKILL GPT"],
  "learn any course": ["LEARN ANY COURSE GPT"],
  "learn any course gpt": ["LEARN ANY COURSE GPT"],
  "college degree": ["COLLEGE DEGREE GPT"],
  "college degree gpt": ["COLLEGE DEGREE GPT"],
  "learn a skill": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "want to learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "i want to learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "take a course": ["LEARN ANY COURSE GPT", "Course Maker GPT"],
  "go to college": ["COLLEGE DEGREE GPT"],
  "get a degree": ["COLLEGE DEGREE GPT"],
  "study": ["LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "skill": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "skills": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "education": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT", "Home-Schooling Assistant GPT", "Course Maker GPT"],
  "education tools": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT", "Home-Schooling Assistant GPT"],
  "learning": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  
  // Video/movie intents (EXPANDED for all video production tools)
  "make a video": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "create a video": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "make a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "i want to make a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway"],
  "create a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway"],
  "movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Movie Scene Maker GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant"],
  "film": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "video production": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika"],
  "make a music video": ["Music Video Maker AI Studio"],
  
  // Image intents
  "make an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "create an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "generate an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "make a picture": ["Midjourney", "DALL-E 3", "Stable Diffusion"],
  "design a logo": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  "make a logo": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  
  // Business intents
  "write a business plan": ["Business Plan Generator GPT"],
  "create a business plan": ["Business Plan Generator GPT"],
  "find a job": ["The Resume & Job Finder Ai Suite"],
  "get a job": ["The Resume & Job Finder Ai Suite"],
  "write a resume": ["The Resume & Job Finder Ai Suite"],
  "file taxes": ["Taxes GPT"],
  "do my taxes": ["Taxes GPT"],
  
  // Health intents - DOCTOR MUST BE FIRST
  "doctor": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT", "Veterinarian GPT"],
  "dr": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT"],
  "doc": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT"],
  "doctor gpt": ["Personalized DR. GPT (Doctor GPT)"],
  "medical doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "ai doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "talk to a doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "talk to doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "need a doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "medical advice": ["Personalized DR. GPT (Doctor GPT)"],
  "health advice": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT"],
  "mental health": ["Mental Wellness GPT"],
  "pet health": ["Veterinarian GPT"],
  "vet advice": ["Veterinarian GPT"],
  "health": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT", "Veterinarian GPT", "Pharmaceutical Assistant GPT"],
  "health tools": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT", "Veterinarian GPT"],
  "symptoms": ["Personalized DR. GPT (Doctor GPT)"],
  "diagnosis": ["Personalized DR. GPT (Doctor GPT)"],
  "medical": ["Personalized DR. GPT (Doctor GPT)", "Pharmaceutical Assistant GPT"],
  
  // Spiritual/philosophy intents
  "talk to god": ["TALK TO THE GODS GPT"],
  "speak to god": ["TALK TO THE GODS GPT"],
  "talk to history": ["TALK TO HISTORY GPT", "TIME MACHINE GPT"],
  "time travel": ["TIME MACHINE GPT", "TALK TO HISTORY GPT"],
  "fortune telling": ["Fortune Teller GPT"],
  "read my fortune": ["Fortune Teller GPT"],
  "interpret my dream": ["Dream Interpreter GPT"],
  "what does my dream mean": ["Dream Interpreter GPT"],
  "spiritual": ["TALK TO THE GODS GPT", "ALAN WATTS GPT", "Sophia Aeterna AI", "Resurrection GPT", "Mary Magdalene GPT", "God Is Light GPT"],
  "spiritual tools": ["TALK TO THE GODS GPT", "ALAN WATTS GPT", "Sophia Aeterna AI", "Resurrection GPT"],
  
  // Legal intents
  "legal help": ["Public Defender GPT", "Legal Draftsmith GPT"],
  "write a contract": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "review a contract": ["Contract Review Bot"],
  "legal": ["Public Defender GPT", "Legal Draftsmith GPT", "Contract Review Bot", "Legislation Writer GPT"],
  "legal tools": ["Public Defender GPT", "Legal Draftsmith GPT", "Contract Review Bot"],
  
  // Coding intents
  "build an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "make an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "create an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "coding": ["Lovable", "Bolt.new", "GitHub Copilot", "Cursor", "Replit", "Codeium", "Tabnine"],
  "coding tools": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new", "Replit", "Codeium"],
  "programming": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new", "Replit", "Codeium", "Tabnine"],
  
  // Fun/entertainment intents  
  "play trivia": ["Trivia Night GPT"],
  "trivia game": ["Trivia Night GPT"],
  "talk to a celebrity": ["Celebrity Chatline GPT"],
  "chat with celebrity": ["Celebrity Chatline GPT"],
  "make a game": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  "create a game": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  "game": ["Game Design Document / Developer GPT", "Seele Video Game Generator", "Trivia Night GPT"],
  "gaming": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  
  // ==================== RELATIONSHIPS, DATING, COMPANIONSHIP ====================
  "lonely": ["Nomi.ai", "Replika", "Romantic AI", "Mental Wellness GPT", "Marriage Mender GPT", "Lover AI", "Dolores"],
  "loneliness": ["Nomi.ai", "Replika", "Romantic AI", "Mental Wellness GPT", "Marriage Mender GPT", "Lover AI"],
  "i feel lonely": ["Nomi.ai", "Replika", "Romantic AI", "Mental Wellness GPT", "Lover AI", "Dolores"],
  "im lonely": ["Nomi.ai", "Replika", "Romantic AI", "Mental Wellness GPT", "Lover AI", "Dolores"],
  "someone to talk to": ["Nomi.ai", "Replika", "Mental Wellness GPT", "Lover AI", "Dolores", "Celebrity Chatline GPT"],
  "need someone to talk to": ["Nomi.ai", "Replika", "Mental Wellness GPT", "Lover AI", "Dolores"],
  "virtual girlfriend": ["Nomi.ai", "Romantic AI", "Candy AI", "Couple.me", "Lover AI", "Dolores"],
  "ai girlfriend": ["Nomi.ai", "Romantic AI", "Candy AI", "Couple.me", "Lover AI", "Dolores"],
  "virtual boyfriend": ["Nomi.ai", "Romantic AI", "Lover AI"],
  "ai boyfriend": ["Nomi.ai", "Romantic AI", "Lover AI"],
  "ai companion": ["Nomi.ai", "Replika", "Romantic AI", "Dolores", "Lover AI", "Character.AI"],
  "virtual companion": ["Nomi.ai", "Replika", "Romantic AI", "Dolores", "Lover AI"],
  "companion": ["Nomi.ai", "Replika", "Romantic AI", "Dolores", "Lover AI", "Mental Wellness GPT"],
  "companionship": ["Nomi.ai", "Replika", "Romantic AI", "Dolores", "Lover AI", "Mental Wellness GPT"],
  "love": ["Marriage Mender GPT", "Nomi.ai", "Romantic AI", "Keeper", "Rizz AI", "Hinge AI", "eHarmony AI"],
  "in love": ["Marriage Mender GPT", "Nomi.ai", "Romantic AI", "Fortune Teller GPT"],
  "find love": ["eHarmony AI", "Hinge AI", "Coffee Meets Bagel", "Keeper", "Nomi.ai", "Romantic AI"],
  "looking for love": ["eHarmony AI", "Hinge AI", "Coffee Meets Bagel", "Keeper", "Rizz AI"],
  "relationship": ["Marriage Mender GPT", "Mental Wellness GPT", "Maia", "Flamme", "AmorIQ", "Relate"],
  "relationship help": ["Marriage Mender GPT", "Mental Wellness GPT", "Maia", "AmorIQ", "Relate", "Flamme"],
  "relationship advice": ["Marriage Mender GPT", "AmorIQ", "Maia", "Relate", "Mental Wellness GPT"],
  "relationship problems": ["Marriage Mender GPT", "AmorIQ", "Maia", "Mental Wellness GPT", "Relate"],
  "dating": ["Rizz AI", "Hinge AI", "eHarmony AI", "Coffee Meets Bagel", "Keeper", "AmorIQ"],
  "dating help": ["Rizz AI", "AmorIQ", "Hinge AI", "eHarmony AI", "Coffee Meets Bagel"],
  "dating advice": ["Rizz AI", "AmorIQ", "Keeper", "Hinge AI"],
  "dating tips": ["Rizz AI", "AmorIQ", "Keeper"],
  "how to date": ["Rizz AI", "AmorIQ", "Keeper", "Hinge AI"],
  "marriage": ["Marriage Mender GPT", "Keeper", "Maia", "Flamme"],
  "marriage help": ["Marriage Mender GPT", "Maia", "Flamme", "Mental Wellness GPT"],
  "marriage advice": ["Marriage Mender GPT", "Maia", "AmorIQ"],
  "save my marriage": ["Marriage Mender GPT", "Maia", "Mental Wellness GPT"],
  "fix my marriage": ["Marriage Mender GPT", "Maia", "Mental Wellness GPT"],
  "couples": ["Marriage Mender GPT", "Maia", "Flamme", "Mental Wellness GPT"],
  "couples therapy": ["Marriage Mender GPT", "Maia", "Mental Wellness GPT", "AmorIQ"],
  "talk to someone": ["Nomi.ai", "Replika", "Mental Wellness GPT", "Lover AI", "Dolores"],
  "friend": ["Nomi.ai", "Replika", "Dolores", "Mental Wellness GPT", "Lover AI"],
  "need a friend": ["Nomi.ai", "Replika", "Dolores", "Mental Wellness GPT", "Lover AI"],
  "chat friend": ["Nomi.ai", "Replika", "Dolores", "Lover AI", "Character.AI"],
  "flirt": ["Rizz AI", "Romantic AI", "Candy AI", "Nomi.ai"],
  "flirting": ["Rizz AI", "Romantic AI", "Candy AI", "Nomi.ai"],
  "rizz": ["Rizz AI", "Romantic AI", "Candy AI"],
  "pickup lines": ["Rizz AI", "Romantic AI"],
  "conversation starters": ["Rizz AI", "AmorIQ"],
  "heartbreak": ["Mental Wellness GPT", "Marriage Mender GPT", "Resurrection GPT"],
  "heartbroken": ["Mental Wellness GPT", "Marriage Mender GPT", "Resurrection GPT"],
  "breakup": ["Mental Wellness GPT", "Marriage Mender GPT"],
  "broke up": ["Mental Wellness GPT", "Marriage Mender GPT"],
  "divorce": ["Marriage Mender GPT", "Mental Wellness GPT", "Public Defender GPT"],
  
  // ==================== GRIEF, DEATH, LOSS, HEALING ====================
  "death": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT", "Titanic Resurrections GPT"],
  "died": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT", "Titanic Resurrections GPT"],
  "someone died": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT"],
  "grief": ["Resurrection GPT", "Mental Wellness GPT", "ImmortalizeME"],
  "grieving": ["Resurrection GPT", "Mental Wellness GPT", "ImmortalizeME"],
  "grief tools": ["Resurrection GPT", "Mental Wellness GPT", "ImmortalizeME"],
  "loss": ["Resurrection GPT", "Mental Wellness GPT", "ImmortalizeME", "Marriage Mender GPT"],
  "lost someone": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT"],
  "mourning": ["Resurrection GPT", "Mental Wellness GPT", "ImmortalizeME"],
  "passed away": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT"],
  "miss someone": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT", "Nomi.ai"],
  "missing someone": ["Resurrection GPT", "ImmortalizeME", "Mental Wellness GPT", "Nomi.ai"],
  "afterlife": ["Resurrection GPT", "TALK TO THE GODS GPT", "Sophia Aeterna AI"],
  "speak to the dead": ["Resurrection GPT", "ImmortalizeME", "Titanic Resurrections GPT"],
  "talk to the dead": ["Resurrection GPT", "ImmortalizeME", "Titanic Resurrections GPT"],
  "talk to loved one": ["Resurrection GPT", "ImmortalizeME"],
  "memorial": ["Resurrection GPT", "ImmortalizeME"],
  "remember someone": ["Resurrection GPT", "ImmortalizeME", "TALK TO HISTORY GPT"],
  "preserve memory": ["ImmortalizeME", "Resurrection GPT"],
  "digital clone": ["ImmortalizeME"],
  "clone myself": ["ImmortalizeME"],
  
  // ==================== MENTAL HEALTH & EMOTIONAL SUPPORT ====================
  "sad": ["Mental Wellness GPT", "Nomi.ai", "Replika", "Marriage Mender GPT"],
  "sadness": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "depressed": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "depression": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "anxiety": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "anxious": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "stressed": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "stress": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "feeling down": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "emotional support": ["Mental Wellness GPT", "Nomi.ai", "Replika", "Lover AI"],
  "therapy": ["Mental Wellness GPT", "Marriage Mender GPT", "AmorIQ"],
  "counseling": ["Mental Wellness GPT", "Marriage Mender GPT", "AmorIQ", "Maia"],
  "self care": ["Mental Wellness GPT", "Nomi.ai", "Replika"],
  "wellness": ["Mental Wellness GPT", "Personalized DR. GPT (Doctor GPT)"],
  
  // Question patterns - "how do I..."
  "how do i write a book": ["BOOK WRITER GPT"],
  "how do i make a video": ["Movie Maker Studio AI SUITE", "Sora", "Runway"],
  "how do i make an app": ["Lovable", "Bolt.new", "Replit"],
  "how do i learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "how do i start a business": ["Business Plan Generator GPT", "Startup Validator GPT"],
  "how do i cook": ["Chef \"Sizzle\" AI Culinary Assistant"],
  "how do i trade": ["Trader GPT"],
  "how to write a book": ["BOOK WRITER GPT"],
  "how to make a video": ["Movie Maker Studio AI SUITE", "Sora", "Runway"],
  "how to make music": ["Suno", "Udio", "Music Melodies & Lessons GPT"],
  
  // "Help me..." patterns
  "help me write": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "help me learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "help me code": ["Lovable", "GitHub Copilot", "Cursor"],
  "help me design": ["Graphic & Cover Design GPT", "Canva", "Figma"],
  "help me cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude", "Mixologist GPT"],
  "help me with taxes": ["Taxes GPT"],
  "help with resume": ["The Resume & Job Finder Ai Suite"],
  
  // "Best..." patterns
  "best ai for writing": ["BOOK WRITER GPT", "ChatGPT", "Claude"],
  "best ai for images": ["Midjourney", "DALL-E 3", "Stable Diffusion"],
  "best ai for video": ["Sora", "Runway", "Pika", "Veo 3"],
  "best ai for coding": ["GitHub Copilot", "Cursor", "Lovable"],
  
  // Specific task patterns
  "analyze data": ["Data Research Analysis Report GPT", "ChatGPT"],
  "check facts": ["FACT CHECKER GPT"],
  "fact check": ["FACT CHECKER GPT"],
  "find a person": ["Person Information Finder GPT"],
  "find property": ["Property Data Finder GPT"],
  "appraise antiques": ["Antique and Collectible Appraisal GPT"],
  "value antiques": ["Antique and Collectible Appraisal GPT"],
  "appraise art": ["Artwork & Vintage Appraisal GPT"],
  "value artwork": ["Artwork & Vintage Appraisal GPT"],
  "fix my home": ["Home Renovator GPT"],
  "home repair": ["Home Renovator GPT"],
  "go fishing": ["Fisherman GPT"],
  "fishing tips": ["Fisherman GPT"],
  "survival tips": ["Survivalist GPT"],
  "survive": ["Survivalist GPT"],
  "insurance claim": ["Insurance Claims GPT"],
  "file insurance": ["Insurance Claims GPT"],
  "tattoo design": ["Tattoo Designer GPT"],
  "get a tattoo": ["Tattoo Designer GPT"],
  "make a presentation": ["PPTx Powerpoint Maker GPT"],
  "create slides": ["PPTx Powerpoint Maker GPT"],
  "powerpoint": ["PPTx Powerpoint Maker GPT"],
  "write a grant": ["Grant Writer GPT"],
  "grant application": ["Grant Writer GPT"],
  "coloring book": ["Coloring Book Generator GPT"],
  "kids book": ["Children's Picture Book Maker GPT"],
  "children book": ["Children's Picture Book Maker GPT"],
  "make a quiz": ["Quiz Maker Ai"],
  "create a quiz": ["Quiz Maker Ai"],
  "podcast script": ["Podcast Script Writer GPT"],
  "write a podcast": ["Podcast Script Writer GPT"],
  
  // Chat/Assistant patterns
  "chatbot": ["ChatGPT", "Claude", "Gemini", "Perplexity", "Character.AI"],
  "chat": ["ChatGPT", "Claude", "Gemini", "Perplexity", "Character.AI"],
  "assistant": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  "ai assistant": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  
  // Design patterns
  "design": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT", "Framer"],
  "design tools": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT"],
  "graphic design": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT"],
  
  // Research patterns
  "research": ["Perplexity", "ChatGPT", "Claude", "Data Research Analysis Report GPT", "FACT CHECKER GPT"],
  "research tools": ["Perplexity", "ChatGPT", "Claude", "Data Research Analysis Report GPT"],
  
  // ==================== NATURAL LANGUAGE INTENT (50+ phrases) ====================
  // "I want to..." patterns
  "i want to build a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix"],
  "i want to make money": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Trader GPT"],
  "i want to make money online": ["Business Plan Generator GPT", "MicroSaaS GPT", "Dropshipping tools"],
  "i want to automate": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate"],
  "i want to automate my business": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate"],
  
  // "Help me..." patterns
  "help me make money online": ["Business Plan Generator GPT", "MicroSaaS GPT", "Startup Validator GPT"],
  "help me build a website": ["Lovable", "Bolt.new", "Webflow", "Framer"],
  "help me analyze": ["Data Research Analysis Report GPT", "ChatGPT", "Claude", "Perplexity"],
  "help me automate": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate"],
  
  // "Tool to..." patterns
  "tool to analyze contracts": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "tool to write emails": ["ChatGPT", "Claude", "Jasper AI", "Grammarly"],
  "tool to make videos": ["Sora", "Runway", "Pika", "Veo 3", "Movie Maker Studio AI SUITE"],
  "tool to generate images": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  
  // "Something that..." patterns
  "something that writes emails for me": ["ChatGPT", "Claude", "Jasper AI", "Grammarly"],
  "something that makes videos": ["Sora", "Runway", "Pika", "Veo 3", "Movie Maker Studio AI SUITE"],
  "something that generates images": ["Midjourney", "DALL-E 3", "Stable Diffusion"],
  "something for learning": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  
  // "AI for..." patterns
  "ai for learning anything": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "ai for writing": ["BOOK WRITER GPT", "ChatGPT", "Claude", "Jasper AI"],
  "ai for coding": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new"],
  "ai for business": ["Business Plan Generator GPT", "ChatGPT", "Claude", "MULTITASKER GPT"],
  "ai for marketing": ["Jasper AI", "ChatGPT", "Claude", "Canva"],
  "ai for sales": ["ChatGPT", "Claude", "Salesforce Einstein"],
  "ai for design": ["Midjourney", "DALL-E 3", "Canva", "Figma"],
  
  // Business intent patterns
  "make money": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Trader GPT"],
  "passive income": ["Business Plan Generator GPT", "MicroSaaS GPT"],
  "side hustle": ["Business Plan Generator GPT", "MicroSaaS GPT", "Startup Validator GPT"],
  "online business": ["Business Plan Generator GPT", "MicroSaaS GPT", "Startup Validator GPT"],
  "dropshipping": ["Business Plan Generator GPT", "Startup Validator GPT"],
  "ecommerce": ["Business Plan Generator GPT", "Startup Validator GPT", "Shopify"],
  "e-commerce": ["Business Plan Generator GPT", "Startup Validator GPT", "Shopify"],
  
  // Data/Analytics patterns
  "analytics": ["Data Research Analysis Report GPT", "Google Analytics", "Mixpanel"],
  "spreadsheet": ["ChatGPT", "Claude", "Airtable", "Notion"],
  "csv": ["ChatGPT", "Claude", "Data Research Analysis Report GPT"],
  "chart": ["Data Research Analysis Report GPT", "ChatGPT", "Claude"],
  "report": ["Data Research Analysis Report GPT", "ChatGPT", "Claude"],
  "convert spreadsheet to chart": ["Data Research Analysis Report GPT", "ChatGPT"],
  
  // Design fast patterns
  "design a logo fast": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  "quick logo": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  "fast design": ["Canva", "Figma", "Graphic & Cover Design GPT"],
  "branding": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  "ui": ["Figma", "Framer", "Canva"],
  "ux": ["Figma", "Framer", "Maze"],
  "ui design": ["Figma", "Framer", "Canva"],
  "ux design": ["Figma", "Framer", "Maze"],
  
  // Tech/Coding patterns
  "javascript": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new"],
  "html": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new"],
  "css": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new"],
  "seo": ["ChatGPT", "Claude", "Surfer SEO", "Jasper AI"],
  
  // Learning shortcuts
  "tutorial": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "course": ["LEARN ANY COURSE GPT", "Course Maker GPT", "COLLEGE DEGREE GPT"],
  "training": ["LEARN ANY SKILL GPT", "Training Manual Generator GPT"],
  
  // Legal shortcuts
  "nda": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "terms of service": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "compliance": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "policy": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "document review": ["Contract Review Bot", "Legal Draftsmith GPT"],
  
  // AI/General shortcuts
  "smart tool": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  "ai helper": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  "machine learning": ["ChatGPT", "Claude", "Hugging Face", "TensorFlow"],
  "neural": ["ChatGPT", "Claude", "Hugging Face", "Runway"],
  "gpt": ["ChatGPT", "Claude", "Gemini", "G-Mode GPT"],
  "artificial intelligence": ["ChatGPT", "Claude", "Gemini", "Perplexity"],
  "ai": ["ChatGPT", "Claude", "Gemini", "Perplexity", "Midjourney", "DALL-E 3"],
  
  // Copywriting patterns  
  "copywriting": ["Jasper AI", "ChatGPT", "Claude", "Writesonic", "Copy.ai"],
  "email": ["ChatGPT", "Claude", "Jasper AI", "Mailchimp"],
  "resume": ["The Resume & Job Finder Ai Suite"],
  "article": ["Article and Blog Rewriter GPT", "ChatGPT", "Jasper AI"],
  "blog": ["Article and Blog Rewriter GPT", "ChatGPT", "Jasper AI"],
  
  // ==================== VISION / EYES / SIGHT / ACCESSIBILITY ====================
  "be my eyes": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "TapTapSee", "Aira", "Envision AI", "Supersense", "ChatGPT", "Claude", "Gemini"],
  "eyes": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "TapTapSee", "Aira", "Envision AI", "Midjourney", "DALL-E 3"],
  "vision": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "ChatGPT Vision", "Claude", "Gemini", "GPT-4 Vision", "Computer Vision"],
  "see for me": ["Be My Eyes", "Be My AI", "Seeing AI", "Aira", "Envision AI"],
  "blind": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "Aira", "Envision AI", "Supersense"],
  "sight": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "Aira", "Envision AI"],
  "visually impaired": ["Be My Eyes", "Be My AI", "Seeing AI", "Aira", "Envision AI", "Supersense"],
  "accessibility": ["Be My Eyes", "Be My AI", "Seeing AI", "Aira", "Lookout"],
  "help me see": ["Be My Eyes", "Be My AI", "Seeing AI", "Lookout", "Aira"],
  "can't see": ["Be My Eyes", "Be My AI", "Seeing AI", "Aira", "Envision AI"],
  "image recognition": ["Be My Eyes", "ChatGPT", "Claude", "Gemini", "GPT-4 Vision", "Google Lens"],
  "read text for me": ["Be My Eyes", "Seeing AI", "Envision AI", "Speechify", "NaturalReader"],
  "describe image": ["ChatGPT", "Claude", "Gemini", "Be My Eyes", "Seeing AI", "GPT-4 Vision"],
  "what am i looking at": ["Be My Eyes", "ChatGPT", "Claude", "Gemini", "Google Lens", "Seeing AI"],
  "identify this": ["ChatGPT", "Claude", "Gemini", "Google Lens", "Be My Eyes", "Seeing AI"],
  
  // ==================== COOKING / FOOD / RECIPES / CHEF ====================
  "cook": ["Chef \"Sizzle\" AI Culinary Assistant", "Mixologist GPT", "Food Quality Inspector GPT"],
  "cooking": ["Chef \"Sizzle\" AI Culinary Assistant", "Mixologist GPT", "Food Quality Inspector GPT"],
  "recipe": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "recipes": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "food": ["Chef \"Sizzle\" AI Culinary Assistant", "Food Quality Inspector GPT", "Mixologist GPT"],
  "chef": ["Chef \"Sizzle\" AI Culinary Assistant"],
  "meal": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "meals": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "dinner": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "lunch": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "breakfast": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "kitchen": ["Chef \"Sizzle\" AI Culinary Assistant", "Home Renovator GPT"],
  "bake": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "baking": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "make food": ["Chef \"Sizzle\" AI Culinary Assistant", "Mixologist GPT"],
  "make dinner": ["Chef \"Sizzle\" AI Culinary Assistant"],
  "what should i cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "what to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "i need to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "i want to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "need to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "teach me to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "LEARN ANY SKILL GPT"],
  "learn to cook": ["Chef \"Sizzle\" AI Culinary Assistant", "LEARN ANY SKILL GPT"],
  "cooking help": ["Chef \"Sizzle\" AI Culinary Assistant", "ChatGPT", "Claude"],
  "culinary": ["Chef \"Sizzle\" AI Culinary Assistant", "Mixologist GPT"],
  "drink": ["Mixologist GPT", "Chef \"Sizzle\" AI Culinary Assistant"],
  "drinks": ["Mixologist GPT", "Chef \"Sizzle\" AI Culinary Assistant"],
  "cocktail": ["Mixologist GPT"],
  "cocktails": ["Mixologist GPT"],
  "bar": ["Mixologist GPT"],
  "bartender": ["Mixologist GPT"],
  "wine": ["Mixologist GPT", "Chef \"Sizzle\" AI Culinary Assistant"],
  "beer": ["Mixologist GPT"],
};

// 6. INTENT KEYWORDS → tool types (fallback for partial matches)
const INTENT_MAP: Record<string, string[]> = {
  "want to write": ["book writer", "content", "writing"],
  "want to make video": ["video", "sora", "runway", "pika", "veo"],
  "want to make image": ["image", "midjourney", "dalle", "stable diffusion"],
  "want to learn": ["learn", "course", "education", "skill"],
  "want to code": ["coding", "developer", "programming", "lovable", "bolt"],
  "want to trade": ["trader", "trading", "finance"],
  "need help": ["assistant", "gpt", "helper"],
  "create music": ["music", "audio", "suno", "udio"],
  "build website": ["website", "lovable", "bolt", "webflow", "framer"],
  "make money": ["business", "startup", "income", "saas"],
  "automate": ["automation", "zapier", "make", "n8n", "workflow"],
};

// Helper: fast Levenshtein for strings (max 2 edits, extended length)
const quickLevenshtein = (a: string, b: string): number => {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  if (a.length > 15 || b.length > 15) return 99; // extended from 10 to handle longer words
  
  const m = a.length, n = b.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1] 
        ? dp[i-1][j-1] 
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
};

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTermInternal] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [displayedCount, setDisplayedCount] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Precompute lowercase fields once (keeps search snappy)
  const quickIndex = useMemo(() => {
    return allTools.map((tool) => {
      const t = tool.title?.toLowerCase() || "";
      const tNoSpace = t.replace(/[\s\-_]+/g, "");
      const words = t.split(/[\s\-_\u0026,.:()]+/).filter(w => w.length > 0);
      return {
        tool,
        t,
        tNoSpace,
        words,
        d: tool.description?.toLowerCase() || "",
        c: tool.category?.toLowerCase() || "",
        tags: tool.tags?.map(tag => tag.toLowerCase()) || [],
      };
    });
  }, []);

  // HYPER-INTELLIGENT instant search with LRU cache
  const quickSearch = useCallback((term: string) => {
    let qRaw = term.toLowerCase().trim();
    if (!qRaw) return [];

    // === CHECK CACHE FIRST (instant return for repeated searches) ===
    const cacheKey = `${SEARCH_CACHE_VERSION}:${qRaw}`;
    const cached = searchCache.get(cacheKey);
    if (cached) return cached;

    // === SINGLE LETTER SEARCH - Show all tools starting with that letter alphabetically ===
    if (qRaw.length === 1 && /^[a-z]$/.test(qRaw)) {
      const letter = qRaw;
      
      // Get all tools starting with this letter (strip emojis first)
      const getCleanFirstChar = (title: string): string => {
        // Remove leading emojis/symbols and get first letter
        const cleaned = title.replace(/^[^\w\s]+\s*/g, '').trim().toLowerCase();
        return cleaned.charAt(0);
      };
      
      const matchingTools: any[] = [];
      const otherTools: any[] = [];
      
      for (const it of quickIndex) {
        const firstChar = getCleanFirstChar(it.tool.title);
        if (firstChar === letter) {
          matchingTools.push(it.tool);
        } else {
          otherTools.push(it.tool);
        }
      }
      
      // Sort matching tools alphabetically
      matchingTools.sort((a, b) => {
        const cleanA = a.title.replace(/^[^\w\s]+\s*/g, '').trim().toLowerCase();
        const cleanB = b.title.replace(/^[^\w\s]+\s*/g, '').trim().toLowerCase();
        return cleanA.localeCompare(cleanB);
      });
      
      // Sort other tools alphabetically too
      otherTools.sort((a, b) => {
        const cleanA = a.title.replace(/^[^\w\s]+\s*/g, '').trim().toLowerCase();
        const cleanB = b.title.replace(/^[^\w\s]+\s*/g, '').trim().toLowerCase();
        return cleanA.localeCompare(cleanB);
      });
      
      const results = [...matchingTools, ...otherTools];
      searchCache.set(cacheKey, results);
      return results;
    }

    // === STEP 0: INSTANT PHRASE MATCHING (bypasses all heavy computation) ===
    // Check for exact phrase matches first - this is O(1) lookup
    const phraseTools = PHRASE_TO_TOOLS[qRaw];
    if (phraseTools && phraseTools.length > 0) {
      // Find matching tools by title (case-insensitive)
      const matched: any[] = [];
      const remaining: any[] = [];
      
      for (const it of quickIndex) {
        const titleLower = it.t;
        const isMatch = phraseTools.some(pt => titleLower.includes(pt.toLowerCase()));
        if (isMatch) {
          matched.push(it.tool);
        } else {
          remaining.push(it.tool);
        }
      }
      
      // Sort matched tools by the order they appear in phraseTools
      matched.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aIdx = phraseTools.findIndex(pt => aTitle.includes(pt.toLowerCase()));
        const bIdx = phraseTools.findIndex(pt => bTitle.includes(pt.toLowerCase()));
        return aIdx - bIdx;
      });
      
      // Get categories from matched tools to prioritize similar tools in remaining
      const matchedCategories = new Set(matched.map(t => t.category?.toLowerCase()).filter(Boolean));
      const matchedTags = new Set(matched.flatMap(t => (t.tags || []).map((tag: string) => tag.toLowerCase())));
      
      // Sort remaining by category/tag relevance to matched tools
      const scoredRemaining = remaining.map(tool => {
        let score = 0;
        const cat = tool.category?.toLowerCase() || '';
        const toolTags = (tool.tags || []).map((t: string) => t.toLowerCase());
        
        // Boost tools from same category
        if (matchedCategories.has(cat)) score += 1000;
        
        // Boost tools with matching tags
        for (const tag of toolTags) {
          if (matchedTags.has(tag)) score += 100;
        }
        
        // Penalize video tools when searching for non-video terms (trading, finance, etc.)
        const isVideoTool = cat.includes('video') || toolTags.some((t: string) => 
          t.includes('video') || t.includes('text to video') || t.includes('video generation')
        );
        const isVideoSearch = qRaw.includes('video') || qRaw.includes('movie') || qRaw.includes('film');
        if (isVideoTool && !isVideoSearch) score -= 500;
        
        return { tool, score };
      });
      
      scoredRemaining.sort((a, b) => b.score - a.score);
      const sortedRemaining = scoredRemaining.map(s => s.tool);
      
      const results = [...matched, ...sortedRemaining.slice(0, 50)];
      searchCache.set(cacheKey, results);
      return results;
    }
    
    // Also check partial phrase matches (e.g., "i want to write" matches "i want to write a book")
    for (const [phrase, tools] of Object.entries(PHRASE_TO_TOOLS)) {
      if (phrase.startsWith(qRaw) || qRaw.startsWith(phrase)) {
        const matched: any[] = [];
        for (const it of quickIndex) {
          if (tools.some(pt => it.t.includes(pt.toLowerCase()))) {
            matched.push(it.tool);
          }
        }
        if (matched.length > 0) {
          // Get categories from matched tools to prioritize similar tools
          const matchedCategories = new Set(matched.map(t => t.category?.toLowerCase()).filter(Boolean));
          const matchedTags = new Set(matched.flatMap(t => (t.tags || []).map((tag: string) => tag.toLowerCase())));
          const matchedTitles = new Set(matched.map(m => m.title));
          
          // Score remaining tools by relevance
          const rest = quickIndex
            .filter(it => !matchedTitles.has(it.tool.title))
            .map(it => {
              let score = 0;
              const cat = it.tool.category?.toLowerCase() || '';
              const toolTags = (it.tool.tags || []).map((t: string) => t.toLowerCase());
              
              if (matchedCategories.has(cat)) score += 1000;
              for (const tag of toolTags) {
                if (matchedTags.has(tag)) score += 100;
              }
              
              // Penalize video tools for non-video searches
              const isVideoTool = cat.includes('video') || toolTags.some((t: string) => 
                t.includes('video') || t.includes('text to video')
              );
              const isVideoSearch = qRaw.includes('video') || qRaw.includes('movie') || qRaw.includes('film');
              if (isVideoTool && !isVideoSearch) score -= 500;
              
              return { tool: it.tool, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 30)
            .map(s => s.tool);
          
          const results = [...matched, ...rest];
          searchCache.set(cacheKey, results);
          return results;
        }
      }
    }

    // === STEP 1: Normalize & expand query ===
    
    // Smart typo correction (handles doubled letters, common misspellings, multi-word)
    let q = normalizeTypos(qRaw);
    
    // Also keep original for prefix matching (in case typo correction went too far)
    const qOriginal = removeDoubledLetters(qRaw);
    
    // Expand abbreviations
    const abbrevExpansions = ABBREV_MAP[q] || [];
    
    // Get synonyms (but only for corrected single words)
    const synonyms = (q.split(/\s+/).length === 1) ? (SYNONYM_MAP[q] || []) : [];
    
    // === PARTIAL WORD EXPANSION (for 2-4 character queries) ===
    const partialExpansions: string[] = [];
    if (q.length >= 2 && q.length <= 5) {
      const expansions = PARTIAL_WORD_MAP[q];
      if (expansions) {
        partialExpansions.push(...expansions);
      }
      // Also check for close matches in partial word map
      for (const [partial, words] of Object.entries(PARTIAL_WORD_MAP)) {
        if (partial.startsWith(q) || q.startsWith(partial)) {
          partialExpansions.push(...words);
        }
      }
    }
    
    // Normalize compound words
    q = q
      .replace(/\s+/g, " ")
      .replace(/\brun way\b/g, "runway")
      .replace(/\bchat gpt\b/g, "chatgpt")
      .replace(/\bmid journey\b/g, "midjourney")
      .replace(/\bstable diffusion\b/g, "stablediffusion")
      .replace(/\bdall e\b/g, "dalle")
      .replace(/\beleven labs\b/g, "elevenlabs")
      .replace(/\btext to video\b/g, "text-to-video")
      .replace(/\btext to speech\b/g, "text-to-speech")
      .trim();

    const qNoSpace = q.replace(/\s+/g, "");
    const qOriginalNoSpace = qOriginal.replace(/\s+/g, "");
    
    // Handle plural/singular normalization
    const qSingular = q.endsWith('s') && q.length > 3 ? q.slice(0, -1) : q;
    const qPlural = !q.endsWith('s') ? q + 's' : q;

    // Fast intent extraction (keeps typing smooth)
    const qWords = q.split(/\s+/).filter(Boolean);
    const qFirstWord = qWords[0] || "";

    // === STEP 2: Score all tools ===
    type Scored = { tool: any; score: number };
    const scored: Scored[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      let score = 0;
      const isAIWebToolsGPT = it.tool.directUrl?.includes('lovable.app') || it.tool.directUrl?.includes('chatgpt.com/g/');

      // TIER 1: EXACT MATCH (highest priority)
      if (it.t === q || it.tNoSpace === qNoSpace) {
        score = 100000;
        if (isAIWebToolsGPT) score += 10000;
      }
      // TIER 1.5: ALL QUERY WORDS MATCH TITLE WORDS (e.g., "learn any skill" → "LEARN ANY SKILL GPT")
      else if (qWords.length >= 2) {
        const allMatch = qWords.every(qw => qw.length < 2 ? true : it.words.some(tw => tw === qw || tw.startsWith(qw)));
        if (allMatch) {
          // Check if consecutive in title (exact phrase match)
          if (it.t.includes(q)) {
            score = 95000; // Almost as good as exact match
            if (isAIWebToolsGPT) score += 9500;
          } else {
            score = 85000; // All words match but not consecutive
            if (isAIWebToolsGPT) score += 8500;
          }
        }
      }

      // TIER 1.7: HEAD-INTENT MATCH ("learn anything", "learn everything")
      // If the query starts with "learn", prioritize all "LEARN ..." tools even if the second word doesn't match.
      if (!score && qFirstWord === "learn" && it.words[0] === "learn") {
        score = 78000;
        if (isAIWebToolsGPT) score += 7800;
      }

      // TIER 1.75: ULTRA-PREFIX BOOST for short "le"/"lea"/"lear" queries
      // Users expect typing "le" to instantly surface LEARN tools first.
      if (!score && q.length <= 3 && "learn".startsWith(q) && it.words[0] === "learn") {
        score = 90000;
        if (isAIWebToolsGPT) score += 9000;
      }

      // TIER 2: First word of title IS the query exactly (e.g., "learn" → "LEARN ANY COURSE GPT")
      if (!score && it.words[0] === q) {
        score = 80000;
        if (isAIWebToolsGPT) score += 8000;
      }
      // TIER 3: Title starts with query (e.g., "le" → "LEARN ANY SKILL GPT")
      else if (!score && (it.t.startsWith(q) || it.tNoSpace.startsWith(qNoSpace))) {
        score = 60000;
        if (isAIWebToolsGPT) score += 6000;
        // Boost for complete word match at start
        if (it.t.startsWith(`${q} `) || it.t.startsWith(`${q}-`)) score += 5000;
        
        // Prefer tools where query matches MORE of the first word
        const firstWord = it.words[0] || it.t;
        const matchRatio = q.length / firstWord.length;
        score += Math.floor(matchRatio * 10000);
      }
      // TIER 4: Any word in title starts with query
      if (!score) {
        for (const word of it.words) {
          if (word.startsWith(q) || word.startsWith(qSingular)) {
            score = 30000;
            if (isAIWebToolsGPT) score += 3000;
            score += Math.max(0, 1000 - word.length * 50);
            break;
          }
        }
      }

      // TIER 5: Title contains query
      if (!score && (it.t.includes(q) || it.tNoSpace.includes(qNoSpace))) {
        score = 15000;
        if (isAIWebToolsGPT) score += 1500;
      }

      // TIER 6: Abbreviation expansion matches
      if (!score && abbrevExpansions.length > 0) {
        for (const exp of abbrevExpansions) {
          if (it.t.includes(exp) || it.tNoSpace.includes(exp.replace(/\s/g, ""))) {
            score = 10000;
            if (isAIWebToolsGPT) score += 1000;
            break;
          }
        }
      }

      // TIER 7: Synonym matches (LOWER priority than direct matches)
      if (!score && synonyms.length > 0) {
        for (const syn of synonyms) {
          if (it.t.includes(syn)) {
            score = 5000;  // Much lower than direct title matches
            if (isAIWebToolsGPT) score += 500;
            break;
          }
        }
      }

      // TIER 7.5: Partial word expansion matches (for 2-4 char queries like "vid" → video)
      if (!score && partialExpansions.length > 0) {
        for (const exp of partialExpansions) {
          if (it.t.includes(exp)) {
            score = 6500;  // Higher than synonyms
            if (isAIWebToolsGPT) score += 650;
            break;
          }
          if (it.c.includes(exp)) {
            score = 5500;
            if (isAIWebToolsGPT) score += 550;
            break;
          }
          if (it.tags.some(tag => tag.includes(exp))) {
            score = 5000;
            if (isAIWebToolsGPT) score += 500;
            break;
          }
        }
      }

      // TIER 8: Tag/category matches (2+ chars) + plural/singular
      if (!score && q.length >= 2) {
        if (it.c.startsWith(q) || it.c.includes(q) || it.c.includes(qSingular) || it.c.includes(qPlural)) {
          score = 4000;
        } else if (it.tags.some(tag => tag.startsWith(q) || tag.startsWith(qSingular))) {
          score = 3500;
        } else if (it.tags.some(tag => tag.includes(q) || tag.includes(qSingular) || tag.includes(qPlural))) {
          score = 3000;
        }
      }
      
      // TIER 8.5: Description matches (lower priority)
      if (!score && q.length >= 3) {
        if (it.d.includes(q) || it.d.includes(qSingular)) {
          score = 2000;
          if (isAIWebToolsGPT) score += 200;
          // Boost if description starts with query
          if (it.d.startsWith(q)) score += 500;
        }
      }

      // TIER 9: Fuzzy match for typos (increased tolerance)
      if (!score && q.length >= 3) {
        // Check first word with 2-edit tolerance
        const firstWord = it.words[0];
        if (firstWord && firstWord.length >= 3) {
          const dist = quickLevenshtein(q.substring(0, Math.min(q.length, firstWord.length + 2)), firstWord);
          if (dist <= 2) {
            score = 2500 - dist * 500;
            if (isAIWebToolsGPT) score += 500;
          }
        }
        // Check other words
        if (!score) {
          for (const word of it.words) {
            if (word.length >= 3 && word.length <= 15) {
              const dist = quickLevenshtein(q.substring(0, Math.min(q.length, word.length + 2)), word);
              if (dist <= 2) {
                score = 2000 - dist * 400;
                if (isAIWebToolsGPT) score += 400;
                break;
              }
            }
          }
        }
      }
      
      // TIER 10: Multi-word fuzzy match (e.g., "learnn anyy skill" → "learn any skill")
      if (!score && qOriginal.includes(' ')) {
        const queryWords = qOriginal.split(/\s+/).filter(w => w.length >= 2);
        if (queryWords.length >= 2) {
          let matchedWords = 0;
          for (const qWord of queryWords) {
            for (const tWord of it.words) {
              if (tWord.startsWith(qWord) || quickLevenshtein(qWord, tWord) <= 1) {
                matchedWords++;
                break;
              }
            }
          }
          // If most query words match tool words
          if (matchedWords >= Math.ceil(queryWords.length * 0.6)) {
            score = 8000 + matchedWords * 1000;
            if (isAIWebToolsGPT) score += 2000;
          }
        }
      }

      // === BOOSTS for major platforms ===
      if (score > 0) {
        // Boost exact platform matches
        const majorPlatforms = ["runway", "chatgpt", "claude", "midjourney", "dalle", "sora", "pika", "luma", "gemini", "perplexity", "elevenlabs", "synthesia", "heygen"];
        for (const platform of majorPlatforms) {
          if (q.startsWith(platform.substring(0, Math.min(q.length, 4))) && it.t.includes(platform)) {
            score += 3000;
            break;
          }
        }
      }

      if (score > 0) {
        scored.push({ tool: it.tool, score });
      }
    }

    // === STEP 3: Sort by score, then alphabetically ===
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const at = a.tool.title?.toLowerCase() || "";
      const bt = b.tool.title?.toLowerCase() || "";
      return at.localeCompare(bt);
    });

    const results = scored.map(s => s.tool).slice(0, 120);
    
    // === CACHE RESULTS for instant repeated searches ===
    searchCache.set(cacheKey, results);
    
    return results;
  }, [quickIndex]);

  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  const quickRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fullRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastInputTimeRef = useRef(0);

  // INSTANT typing - defer ALL search work so input never blocks
  const setSearchTerm = useCallback((value: string) => {
    // 1) Update input state IMMEDIATELY - zero blocking
    setSearchTermInternal(value);

    // 2) Cancel any pending search operations
    if (quickRef.current) clearTimeout(quickRef.current);
    if (fullRef.current) clearTimeout(fullRef.current);

    const t = value.trim();
    if (!t) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      lastInputTimeRef.current = 0;
      return;
    }

    setIsOpen(true);
    const currentId = ++searchIdRef.current;

    // Detect rapid typing/deletion — add adaptive delay to prevent lag
    const now = performance.now();
    const timeSinceLastInput = now - lastInputTimeRef.current;
    lastInputTimeRef.current = now;
    const isRapidTyping = timeSinceLastInput < 80; // Rapid keystrokes < 80ms apart
    const quickDelay = isRapidTyping ? 30 : 0; // Small delay for rapid input, instant otherwise

    // 3) Check cache FIRST - if hit, apply results in next frame (zero compute)
    const fullCacheKey = `${SEARCH_CACHE_VERSION}:full:${t.toLowerCase().trim()}`;
    const cachedFull = searchCache.get(fullCacheKey);
    if (cachedFull) {
      // Cache hit - apply in next animation frame for zero blocking
      requestAnimationFrame(() => {
        if (currentId !== searchIdRef.current) return;
        setSearchResults(cachedFull);
        setDisplayedCount(50);
      });
      return;
    }

    // 4) Run quick search AFTER paint to prevent any typing lag
    // Adaptive delay: rapid typing gets 30ms batch, normal typing is instant
    quickRef.current = setTimeout(() => {
      if (currentId !== searchIdRef.current) return;
      const fast = quickSearch(t);
      setSearchResults(fast);
      setDisplayedCount(50);
    }, quickDelay);

    // 5) Full intelligent ranking for 3+ chars - only 50ms debounce for near-instant refinement
    if (t.length >= 3) {
      fullRef.current = setTimeout(() => {
        if (currentId !== searchIdRef.current) return;
        
        // Run search SYNCHRONOUSLY - no requestIdleCallback delays
        const results = searchTools(allTools, t);

        // Keep full intelligence, but ensure literal prefix matches never get buried
        const q = t.toLowerCase().trim();
        const qFirst = q.split(/\s+/)[0] || "";
        
        // Detect search intent for ALL category filtering using intelligent keywords
        const detectSearchIntent = (query: string): string[] => {
          const intents: string[] = [];
          const q = query.toLowerCase();
          
          // Check each category's keywords
          for (const [category, keywords] of Object.entries(CATEGORY_TITLE_KEYWORDS)) {
            if (keywords.some(kw => q.includes(kw))) {
              intents.push(category);
            }
          }
          
          // Also check common search patterns
          if (q.includes("trad") || q.includes("stock") || q.includes("crypto") || q.includes("forex") || q.includes("invest")) intents.push('trading');
          if (q.includes("video") || q.includes("movie") || q.includes("film")) intents.push('video');
          if (q.includes("music") || q.includes("song")) intents.push('music');
          // Sound effects / FX intent - separate from music
          if (
            q.includes("fx") ||
            q.includes("sfx") ||
            q.includes("sound effect") ||
            q.includes("sound effects") ||
            q.includes("sound design") ||
            q.includes("foley") ||
            q.includes("audio effect") ||
            (q.includes("sound") && q.includes("generat"))
          ) intents.push('audio');
          if (q.includes("audio") && !q.includes("fx") && !q.includes("effect")) intents.push('music');
          if (q.includes("image") || q.includes("picture") || q.includes("photo") || q.includes("art")) intents.push('image');
          if (q.includes("business") || q.includes("startup") || q.includes("entrepreneur")) intents.push('business');
          if (q.includes("history") || q.includes("historical") || q.includes("ancient")) intents.push('history');
          if (q.includes("learn") || q.includes("education") || q.includes("course")) intents.push('education');
          if (q.includes("health") || q.includes("medical") || q.includes("doctor")) intents.push('health');
          if (q.includes("legal") || q.includes("law") || q.includes("lawyer")) intents.push('legal');
          if (q.includes("spiritual") || q.includes("religion") || q.includes("god") || q.includes("meditation")) intents.push('spiritual');
          if (q.includes("code") || q.includes("coding") || q.includes("programming")) intents.push('coding');
          if (q.includes("writ") || q.includes("book") || q.includes("blog") || q.includes("article")) intents.push('writing');
          if (q.includes("science") || q.includes("research") || q.includes("experiment")) intents.push('science');
          if (q.includes("game") || q.includes("gaming")) intents.push('gaming');
          if (q.includes("security") || q.includes("cyber") || q.includes("hack")) intents.push('security');
          if (q.includes("philosophy") || q.includes("philosopher") || q.includes("wisdom")) intents.push('philosophy');
          
          // Remove duplicates
          return [...new Set(intents)];
        };
        
        const searchIntents = detectSearchIntent(q);
        const primaryIntent = searchIntents[0] || '';
        
        // Get all sibling categories for the primary intent
        const siblingCats = primaryIntent ? (SIBLING_CATEGORIES[primaryIntent] || []) : [];
        
        const reranked = results
          .map((tool, idx) => {
            const title = (tool?.title || "").toLowerCase();
            const words = title.split(/\s+/).filter(Boolean);
            const firstWord = words[0] || "";
            const category = (tool?.category || "").toLowerCase();
            const tags = (tool?.tags || []).map((t: string) => t.toLowerCase());
            const desc = (tool?.description || "").toLowerCase();
            let boost = 0;

            // Exact / prefix boosts
            if (title === q) boost = 400000;
            else if (firstWord === q) boost = 300000;
            else if (title.startsWith(q)) boost = 200000;
            else if (words.some((w) => w.startsWith(q))) boost = 120000;

            // Head-intent boosts (e.g., "learn everything" should still prioritize LEARN tools)
            if (!boost && qFirst && firstWord === qFirst) boost = 180000;
            
            // INTELLIGENT CATEGORY DETECTION - detect tool categories from title, tags, and category
            const toolCategories = detectToolCategoryFromTitle(title);
            
            // Also check category and tags
            for (const [cat, keywords] of Object.entries(CATEGORY_TITLE_KEYWORDS)) {
              if (category.includes(cat) || tags.some((t: string) => keywords.some(kw => t.includes(kw)))) {
                if (!toolCategories.includes(cat)) toolCategories.push(cat);
              }
            }
            
            // Apply intelligent category relationship scoring
            if (primaryIntent && toolCategories.length > 0) {
              const relationScore = getCategoryRelationshipScore(primaryIntent, toolCategories);
              boost += relationScore;
              
              // Additional sibling boosts for all detected intents
              for (const intent of searchIntents) {
                for (const toolCat of toolCategories) {
                  if (areSiblingCategories(intent, toolCat)) {
                    boost += 50000; // Strong sibling boost
                  } else if (areInSameFamily(intent, toolCat)) {
                    boost += 20000; // Family boost
                  }
                }
              }
            }
            
            // SPECIAL SIBLING RELATIONSHIPS - heavily boost bidirectionally
            const specialSiblings: Record<string, string[]> = {
              history: ['spiritual', 'philosophy', 'ancient', 'archaeology', 'civilization'],
              spiritual: ['history', 'philosophy', 'wisdom', 'mystical', 'meditation', 'religion'],
              philosophy: ['history', 'spiritual', 'wisdom', 'consciousness'],
              trading: ['finance', 'investment', 'crypto', 'stock', 'forex'],
              finance: ['trading', 'investment', 'banking', 'money'],
              video: ['film', 'movie', 'animation', 'cinema', 'multimedia'],
              image: ['art', 'design', 'visual', 'graphics', 'illustration'],
              music: ['audio', 'sound', 'song', 'melody'],
              coding: ['development', 'programming', 'software', 'engineering'],
              health: ['wellness', 'medical', 'fitness', 'nutrition'],
              education: ['learning', 'course', 'training', 'skill', 'tutor'],
              science: ['research', 'experiment', 'academic', 'study']
            };
            
            // Apply special sibling boosts based on title keywords
            if (primaryIntent && specialSiblings[primaryIntent]) {
              for (const sibling of specialSiblings[primaryIntent]) {
                if (title.includes(sibling) || category.includes(sibling) || 
                    tags.some((t: string) => t.includes(sibling))) {
                  boost += 60000; // Strong sibling boost
                }
              }
            }
            
            // HEAVY PENALTIES for completely unrelated categories when search has clear intent
            if (primaryIntent && toolCategories.length > 0) {
              const isUnrelated = !toolCategories.some(tc => 
                tc === primaryIntent || 
                areSiblingCategories(primaryIntent, tc) ||
                areInSameFamily(primaryIntent, tc) ||
                (specialSiblings[primaryIntent] || []).includes(tc)
              );
              
              if (isUnrelated) {
                // === ULTRA-HEAVY PENALTIES for obvious category mismatches ===
                // When searching for "image generation", spiritual tools should NOT appear
                const creativeCategories = ['video', 'image', 'music', 'gaming', 'design', 'art'];
                const professionalCategories = ['coding', 'business', 'finance', 'trading', 'legal'];
                const academicCategories = ['education', 'learning', 'science', 'research', 'history'];
                const wellnessCategories = ['health', 'medical', 'wellness', 'fitness'];
                const spiritualCategories = ['spiritual', 'philosophy', 'religion', 'wisdom', 'mystical'];
                
                // Determine which category family the search intent belongs to
                const isCreativeSearch = creativeCategories.includes(primaryIntent);
                const isProfessionalSearch = professionalCategories.includes(primaryIntent);
                const isAcademicSearch = academicCategories.includes(primaryIntent);
                const isWellnessSearch = wellnessCategories.includes(primaryIntent);
                const isSpiritualSearch = spiritualCategories.includes(primaryIntent);
                
                // Determine which category family the tool belongs to  
                const isCreativeTool = toolCategories.some(tc => creativeCategories.includes(tc)) ||
                                      category.includes('image') || category.includes('video') ||
                                      category.includes('music') || category.includes('design');
                const isProfessionalTool = toolCategories.some(tc => professionalCategories.includes(tc));
                const isAcademicTool = toolCategories.some(tc => academicCategories.includes(tc));
                const isWellnessTool = toolCategories.some(tc => wellnessCategories.includes(tc));
                const isSpiritualTool = toolCategories.some(tc => spiritualCategories.includes(tc)) ||
                                       category.includes('spiritual') || category.includes('philosophy') ||
                                       title.includes('aristotle') || title.includes('confucius') ||
                                       title.includes('marcus aurelius') || title.includes('socrates') ||
                                       title.includes('buddha') || title.includes('jesus') ||
                                       title.includes('prophet') || title.includes('mystic');
                
                // Apply massive penalties for cross-family mismatches
                if (isCreativeSearch && isSpiritualTool) {
                  boost -= 200000; // Creative search but spiritual tool = HUGE penalty
                } else if (isCreativeSearch && !isCreativeTool) {
                  boost -= 120000; // Creative search but non-creative tool
                } else if (isProfessionalSearch && isSpiritualTool) {
                  boost -= 150000; 
                } else if (isProfessionalSearch && !isProfessionalTool && !isAcademicTool) {
                  boost -= 100000;
                } else if (isSpiritualSearch && isCreativeTool) {
                  // Don't heavily penalize creative tools for spiritual search (some overlap)
                  boost -= 30000;
                } else {
                  // Standard unrelated penalty
                  boost -= 50000;
                }
              }
            }

            return { tool, idx, boost };
          })
          .sort((a, b) => {
            if (b.boost !== a.boost) return b.boost - a.boost;
            return a.idx - b.idx; // stable fallback (preserve searchTools ordering)
          })
          .map((x) => x.tool);

        // CRITICAL: merge in quickSearch "must-have" prefix hits so nothing disappears after full search
        const quick = quickSearch(t);
        const mustHave = quick.filter((tool) => {
          const title = (tool?.title || "").toLowerCase();
          const category = (tool?.category || "").toLowerCase();
          const tags = (tool?.tags || []).map((t: string) => t.toLowerCase());
          const firstWord = title.split(/\s+/)[0] || "";
          
          // === IMAGE GENERATION SEARCH PROTECTION ===
          if (q.includes("image") || q.includes("generat") || q.includes("picture") || 
              q.includes("photo") || q.includes("art") || q.includes("visual") || 
              q.includes("dall") || q.includes("midjourney") || q.includes("stable diffusion")) {
            const isImageTool = category.includes("image") || category.includes("design") || 
                               category.includes("art") || category.includes("visual") ||
                               title.includes("image") || title.includes("dall") || 
                               title.includes("midjourney") || title.includes("stable diffusion") ||
                               title.includes("ideogram") || title.includes("leonardo") ||
                               title.includes("flux") || title.includes("firefly") ||
                               tags.some((t: string) => t.includes("image") || t.includes("art") || 
                                                       t.includes("generator") || t.includes("design"));
            if (isImageTool) return true;
          }
          
          // === VIDEO GENERATION SEARCH PROTECTION ===
          if (q.includes("video") || q.includes("movie") || q.includes("film") || 
              q.includes("sora") || q.includes("runway") || q.includes("pika") ||
              q.includes("kling") || q.includes("luma")) {
            const isVideoTool = category.includes("video") || 
                               title.includes("video") || title.includes("sora") || 
                               title.includes("runway") || title.includes("pika") ||
                               title.includes("kling") || title.includes("luma") ||
                               tags.some((t: string) => t.includes("video") || t.includes("text to video"));
            if (isVideoTool) return true;
          }
          
          // === SOUND EFFECTS / FX SEARCH PROTECTION ===
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
            const isSoundFxTool = title.includes("eleven") || title.includes("elevenlabs") ||
                                 title.includes("sound") || title.includes("fx") ||
                                 category.includes("audio") || category.includes("sound") ||
                                 tags.some((t: string) => t.includes("sound") || t.includes("fx") || 
                                                         t.includes("sfx") || t.includes("effect"));
            if (isSoundFxTool) return true;
          }
          
          // === MUSIC/AUDIO SEARCH PROTECTION ===
          if (q.includes("music") || q.includes("song") || 
              q.includes("suno") || q.includes("udio")) {
            const isMusicTool = category.includes("music") || category.includes("audio") ||
                               title.includes("music") || title.includes("suno") || title.includes("udio") ||
                               tags.some((t: string) => t.includes("music") || t.includes("audio"));
            if (isMusicTool) return true;
          }
          
          // === CODING/DEVELOPMENT SEARCH PROTECTION ===
          if (q.includes("code") || q.includes("coding") || q.includes("programming") || 
              q.includes("developer") || q.includes("software")) {
            const isCodeTool = category.includes("code") || category.includes("develop") ||
                              title.includes("code") || title.includes("programming") ||
                              tags.some((t: string) => t.includes("code") || t.includes("develop"));
            if (isCodeTool) return true;
          }
          
          // === LEARN/EDUCATION SEARCH PROTECTION ===
          if (q.includes("learn") || q.startsWith("le") || q.includes("skill") || 
              q.includes("education") || q.includes("course")) {
            if (title.includes("learn") || title.includes("course") || title.includes("education") ||
                category.includes("education") || category.includes("learning")) return true;
          }
          
          // === TRADING/FINANCE SEARCH PROTECTION ===
          if (q.includes("trad") || q.includes("stock") || q.includes("crypto") || 
              q.includes("forex") || q.includes("invest") || q.includes("coin") ||
              q.includes("bitcoin") || q.includes("ethereum") || q.includes("day trader") ||
              q.includes("daytrader") || q.includes("finance") || q.includes("financial")) {
            if (title.includes("trader") || title.includes("chain") || title.includes("finchat") ||
                title.includes("forex") || title.includes("credit") || title.includes("taxes") ||
                category.includes("finance") || category.includes("trading")) return true;
          }
          
          // === WRITING SEARCH PROTECTION ===
          if (q.includes("writ") || q.includes("book") || q.includes("blog") || 
              q.includes("article") || q.includes("content")) {
            const isWritingTool = category.includes("writ") || category.includes("content") ||
                                 title.includes("writer") || title.includes("book") ||
                                 tags.some((t: string) => t.includes("writ") || t.includes("content"));
            if (isWritingTool) return true;
          }
          
          // === HEALTH/MEDICAL SEARCH PROTECTION ===
          if (q.includes("health") || q.includes("medical") || q.includes("doctor") || 
              q.includes("wellness") || q.includes("therapy")) {
            const isHealthTool = category.includes("health") || category.includes("medical") ||
                                title.includes("doctor") || title.includes("health") ||
                                tags.some((t: string) => t.includes("health") || t.includes("medical"));
            if (isHealthTool) return true;
          }
          
          if (title.startsWith(q) || firstWord.startsWith(q)) return true;
          return false;
        });

        const seen = new Set<string>();
        const merged: any[] = [];
        const push = (tool: any) => {
          const key = `${(tool?.title || "").toLowerCase()}|||${(tool?.directUrl || "").toLowerCase()}`;
          if (seen.has(key)) return;
          seen.add(key);
          merged.push(tool);
        };

        mustHave.forEach(push);
        reranked.forEach(push);

        // Spread out similar tools - simplified for speed
        const spreadResults = merged.length > 50 ? spreadSimilarToolsFast(merged) : merged;

        // Cache full search results
        searchCache.set(fullCacheKey, spreadResults);

        setSearchResults(spreadResults);
        setDisplayedCount(50);
      }, 50); // 50ms debounce - ultra fast refinement
    }
  }, [quickSearch]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (quickRef.current) clearTimeout(quickRef.current);
      if (fullRef.current) clearTimeout(fullRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToolClick = useCallback((toolIndex: number) => {
    setIsOpen(false);
    setSearchTermInternal("");
    navigate(`/tool/${toolIndex}`);
  }, [navigate]);

  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTermInternal("");
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTermInternal("");
    setSearchResults([]);
    setIsOpen(false);
    setDisplayedCount(50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTermInternal("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      if (searchResults.length > 0) {
        const topResult = searchResults[0];
        const toolIndex = allTools.findIndex(t => t.title === topResult.title);
        if (toolIndex !== -1) {
          setIsOpen(false);
          setSearchTermInternal("");
          navigate(`/tool/${toolIndex}`);
        }
      }
    }
  }, [searchTerm, searchResults, navigate]);

  // Track how many direct matches exist vs total shown (including recommendations)
  const [directMatchCount, setDirectMatchCount] = useState(0);
  const [recommendedTools, setRecommendedTools] = useState<any[]>([]);
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(false);
  
  // Update direct match count when search results change
  useEffect(() => {
    setDirectMatchCount(searchResults.length);
    setRecommendedTools([]);
  }, [searchResults]);

  // Generate recommended tools when direct matches are exhausted
  const loadMoreRecommendations = useCallback(() => {
    if (isLoadingRecommendations) return;
    
    setIsLoadingRecommendations(true);
    
    // Get tools NOT already in search results
    const existingTitles = new Set([
      ...searchResults.map(t => t?.title?.toLowerCase()),
      ...recommendedTools.map(t => t?.title?.toLowerCase())
    ]);
    
    // Get category preferences from search results to find similar tools
    const categoryBoosts = new Map<string, number>();
    searchResults.forEach(tool => {
      if (tool?.category) {
        categoryBoosts.set(tool.category, (categoryBoosts.get(tool.category) || 0) + 1);
      }
    });
    
    // Filter and score remaining tools
    const remaining = allTools.filter(t => 
      t?.title && !existingTitles.has(t.title.toLowerCase())
    );
    
    // Score by category similarity to search results
    const scored = remaining.map(tool => {
      let score = 0;
      if (tool?.category && categoryBoosts.has(tool.category)) {
        score += categoryBoosts.get(tool.category)! * 10;
      }
      // Add some randomization to keep it interesting
      score += Math.random() * 5;
      return { tool, score };
    });
    
    // Sort by score and take next batch
    scored.sort((a, b) => b.score - a.score);
    const nextBatch = scored.slice(0, 30).map(s => s.tool);
    
    requestAnimationFrame(() => {
      setRecommendedTools(prev => [...prev, ...nextBatch]);
      setIsLoadingRecommendations(false);
    });
  }, [searchResults, recommendedTools, isLoadingRecommendations]);

  // Combined results: direct matches + recommendations
  const combinedResults = useMemo(() => {
    return [...searchResults, ...recommendedTools];
  }, [searchResults, recommendedTools]);

  // INFINITE SCROLL - Load more results as user scrolls
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Don't trigger if already loading
    if (isLoadingMore || isLoadingRecommendations) return;
    
    // Trigger load when within 300px of bottom
    const threshold = 300;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom) {
      // If we haven't shown all direct matches yet
      if (displayedCount < searchResults.length) {
        setIsLoadingMore(true);
        requestAnimationFrame(() => {
          setDisplayedCount(prev => Math.min(prev + 50, searchResults.length));
          setIsLoadingMore(false);
        });
      } 
      // If direct matches exhausted, load recommendations
      else if (displayedCount < combinedResults.length) {
        setIsLoadingMore(true);
        requestAnimationFrame(() => {
          setDisplayedCount(prev => Math.min(prev + 30, combinedResults.length));
          setIsLoadingMore(false);
        });
      }
      // If showing all combined results, load more recommendations
      else if (recommendedTools.length < allTools.length - searchResults.length) {
        loadMoreRecommendations();
      }
    }
  }, [displayedCount, searchResults.length, combinedResults.length, recommendedTools.length, isLoadingMore, isLoadingRecommendations, loadMoreRecommendations]);

  // Generate prediction based on top result
  const prediction = useMemo(() => {
    if (!searchTerm.trim() || searchResults.length === 0) return "";
    
    const topResult = searchResults[0];
    if (!topResult?.title) return "";
    
    const topTitle = topResult.title.toLowerCase();
    const query = searchTerm.toLowerCase().trim();
    
    // Only predict if the top result starts with what user typed
    if (topTitle.startsWith(query)) {
      // Return the first word or two for cleaner predictions
      const words = topResult.title.split(/\s+/);
      if (words.length >= 2) {
        // Return first 2-3 words for multi-word predictions
        return words.slice(0, Math.min(3, words.length)).join(" ");
      }
      return topResult.title;
    }
    
    return "";
  }, [searchTerm, searchResults]);

  // Accept prediction (Tab key)
  const acceptPrediction = useCallback(() => {
    if (prediction) {
      setSearchTerm(prediction);
    }
  }, [prediction, setSearchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults: combinedResults, // Return combined results
    directMatchCount, // How many were direct matches
    displayedCount,
    isOpen,
    isLoadingMore: isLoadingMore || isLoadingRecommendations,
    toolStats,
    searchRef,
    prediction,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
    acceptPrediction,
  };
};
