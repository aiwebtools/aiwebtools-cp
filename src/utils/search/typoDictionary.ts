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

  // General common
  "buisness": "business",
  "bussiness": "business",
  "programing": "programming",
  "develoment": "development",
  "sofware": "software",
  "aplication": "application",
  "aplicaton": "application"
};
