
// User intent and action keywords
export const userIntentKeywords: Record<string, string[]> = {
  // User Intent
  "create": ["generate", "make", "build", "produce", "AI creation", "creative AI", "construct", "develop"],
  "edit": ["modify", "change", "update", "AI editing", "editing tools", "revise", "improve"],
  "analyze": ["examine", "study", "research", "AI analysis", "analytical AI", "investigate", "assess"],
  "optimize": ["improve", "enhance", "better", "AI optimization", "performance AI", "refine", "streamline"],
  "automate": ["automatic", "streamline", "AI automation", "automated tools", "mechanize", "systematize"],
  
  // Data and Analytics
  "data": ["analysis", "analytics", "research", "insights", "AI data", "data analysis", "data science", "analytics AI", "database", "information"],
  "analytics": ["data", "analysis", "insights", "metrics", "AI analytics", "data analytics", "business intelligence", "statistics", "reporting"],
  "analysis": ["data", "research", "insights", "examination", "AI analysis", "analytical tools", "data analysis", "study", "evaluation"],
  "research": ["study", "investigation", "analysis", "academic", "scientific", "AI research", "research tools", "scholarly"],
  
  // Learning and Skills
  "learn": ["education", "study", "skill", "course", "training", "tutorial", "lesson", "teaching", "learning", "knowledge", "instruction", "master", "develop"],
  "skill": ["ability", "talent", "expertise", "competency", "proficiency", "capability", "training", "development", "learning", "mastery"],
  "course": ["class", "lesson", "tutorial", "training", "education", "curriculum", "program", "workshop", "seminar"],
  "tutorial": ["guide", "lesson", "instruction", "how-to", "walkthrough", "training", "learning", "educational"],
  "training": ["education", "learning", "skill development", "course", "workshop", "instruction", "coaching"],
};
