// Centralized typo dictionary for search correction and synonym handling
// Feel free to expand this list safely without touching code
export const TYPO_DICTIONARY: Record<string, string> = {
  // Writing
  "wrter": "writer",
  "writr": "writer",
  "writter": "writer",
  "writeing": "writing",
  "writting": "writing",

  // Ancient / History
  "ancint": "ancient",
  "anchient": "ancient",
  "anchien": "ancient",
  "ancent": "ancient",
  "ancien": "ancient",
  "ancie": "ancient",
  "anci": "ancient",
  "hist": "history",
  "histo": "history",
  "histoy": "history",
  "histroy": "history",

  // Time & Time Machine
  "tim": "time",
  "tiem": "time",
  "tmie": "time",
  "timee": "time",
  "time-machine": "time machine",
  "timemachine": "time machine",
  "time-travel": "time travel",
  "timetravel": "time travel",

  // Vibe Coding
  "vib": "vibe",
  "vieb": "vibe",
  "vibe agent": "vibe coding agent",

  // Education
  "collge": "college",
  "colege": "college",
  "colleg": "college",
  "colledge": "college",
  "educaton": "education",

  // Website & Web Development
  "web": "website",
  "websit": "website", 
  "webiste": "website",
  "webstie": "website",
  "websie": "website",
  "webte": "website",
  "webdev": "web development",
  "webdevelopment": "web development",
  "web-dev": "web development",

  // General common
  "buisness": "business",
  "bussiness": "business",
  "programing": "programming",
  "develoment": "development",
  "sofware": "software",
  "aplication": "application",
  "aplicaton": "application",
  
  // Partial word predictions
  "co": "college",
  "coll": "college",
  "tm": "time",
  "tme": "time machine",
  "wr": "writer",
  "wri": "writer",
  "writ": "writer",
  "bo": "book",
  "boo": "book",
  "vid": "video",
  "vide": "video",
  "mus": "music",
  "musi": "music",
  "gam": "game",
  "ga": "game",
  "ai": "artificial intelligence",
  "art": "artificial",
  "bus": "business",
  "heal": "health",
  "hea": "health",
  "med": "medical",
  "doc": "doctor",
  "leg": "legal",
  "law": "legal",
  "ed": "education",
  "edu": "education",
  "cr": "creative",
  "cre": "creative",
  "des": "design",
  "fin": "finance",
  "tra": "trading",
  "trd": "trading"
};
