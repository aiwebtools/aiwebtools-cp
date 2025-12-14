// SEMANTIC KEYWORD LIBRARY - Maps abstract concepts to relevant tools
// These handle words that don't directly match tool names but have semantic meaning

export const semanticKeywordMapping: Record<string, string[]> = {
  // === LIFE, DEATH, GRIEF, LOSS ===
  "death": ["resurrection gpt", "mental wellness gpt", "marriage mender gpt", "immortalizeme", "grief", "loss", "healing", "counseling", "therapy", "spiritual", "afterlife", "memorial", "legacy", "remembrance", "soul map", "talk to history gpt"],
  "dying": ["resurrection gpt", "mental wellness gpt", "grief", "loss", "healing", "hospice", "end of life", "spiritual", "immortalizeme", "soul map"],
  "grief": ["resurrection gpt", "mental wellness gpt", "marriage mender gpt", "healing", "loss", "mourning", "counseling", "therapy", "emotional support", "bereavement"],
  "mourning": ["resurrection gpt", "mental wellness gpt", "grief", "loss", "healing", "counseling", "bereavement", "emotional support"],
  "loss": ["resurrection gpt", "mental wellness gpt", "marriage mender gpt", "grief", "healing", "recovery", "counseling", "therapy", "emotional support"],
  "bereavement": ["resurrection gpt", "mental wellness gpt", "grief", "loss", "mourning", "healing", "counseling"],
  "afterlife": ["resurrection gpt", "talk to the gods gpt", "spiritual", "religious", "soul", "heaven", "immortality", "sophia aeterna"],
  "memorial": ["resurrection gpt", "immortalizeme", "legacy", "remembrance", "tribute", "obituary"],
  "legacy": ["resurrection gpt", "immortalizeme", "memorial", "heritage", "inheritance", "history"],
  
  // === MENTAL HEALTH & EMOTIONS ===
  "sad": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "emotional support", "depression", "healing", "self-care"],
  "sadness": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "emotional support", "depression", "healing"],
  "depression": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "emotional support", "healing", "wellness", "self-care"],
  "depressed": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "emotional support", "healing", "wellness"],
  "anxiety": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "stress", "relaxation", "mindfulness", "meditation", "calm"],
  "anxious": ["mental wellness gpt", "counseling", "therapy", "stress", "relaxation", "mindfulness", "meditation"],
  "stress": ["mental wellness gpt", "marriage mender gpt", "counseling", "relaxation", "mindfulness", "meditation", "wellness", "self-care"],
  "stressed": ["mental wellness gpt", "counseling", "relaxation", "mindfulness", "meditation", "wellness"],
  "lonely": ["mental wellness gpt", "marriage mender gpt", "counseling", "social", "connection", "community", "support"],
  "loneliness": ["mental wellness gpt", "marriage mender gpt", "counseling", "social", "connection", "community"],
  "angry": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "anger management", "emotional regulation"],
  "anger": ["mental wellness gpt", "marriage mender gpt", "counseling", "therapy", "anger management", "emotional regulation"],
  "fear": ["mental wellness gpt", "counseling", "therapy", "anxiety", "phobia", "courage", "overcoming"],
  "scared": ["mental wellness gpt", "counseling", "therapy", "anxiety", "fear", "courage"],
  "trauma": ["mental wellness gpt", "counseling", "therapy", "ptsd", "healing", "recovery", "emotional support"],
  "ptsd": ["mental wellness gpt", "counseling", "therapy", "trauma", "healing", "recovery", "veteran", "survivalist gpt"],
  "healing": ["mental wellness gpt", "resurrection gpt", "counseling", "therapy", "recovery", "wellness", "self-care", "spiritual"],
  "therapy": ["mental wellness gpt", "marriage mender gpt", "counseling", "healing", "psychology", "mental health"],
  "counseling": ["mental wellness gpt", "marriage mender gpt", "therapy", "healing", "psychology", "support"],
  "suicide": ["mental wellness gpt", "counseling", "crisis", "hotline", "support", "therapy", "healing"],
  "crisis": ["mental wellness gpt", "counseling", "support", "emergency", "help", "hotline"],
  
  // === RELATIONSHIPS ===
  "divorce": ["marriage mender gpt", "mental wellness gpt", "legal", "counseling", "relationship", "separation", "lawyer"],
  "breakup": ["marriage mender gpt", "mental wellness gpt", "counseling", "relationship", "healing", "recovery"],
  "heartbreak": ["marriage mender gpt", "mental wellness gpt", "counseling", "healing", "relationship", "recovery"],
  "cheating": ["marriage mender gpt", "mental wellness gpt", "counseling", "relationship", "trust", "infidelity"],
  "infidelity": ["marriage mender gpt", "mental wellness gpt", "counseling", "relationship", "trust", "cheating"],
  "love": ["marriage mender gpt", "mental wellness gpt", "relationship", "romance", "dating", "compatibility", "fortune teller gpt"],
  "romance": ["marriage mender gpt", "relationship", "dating", "love", "compatibility"],
  "dating": ["marriage mender gpt", "relationship", "romance", "love", "compatibility", "social"],
  "marriage": ["marriage mender gpt", "relationship", "wedding", "spouse", "family", "counseling"],
  "relationship": ["marriage mender gpt", "mental wellness gpt", "counseling", "love", "dating", "compatibility"],
  "family": ["marriage mender gpt", "mental wellness gpt", "counseling", "parenting", "children", "homeschool gpt"],
  "parenting": ["homeschool gpt", "mental wellness gpt", "family", "children", "education", "childcare"],
  "children": ["homeschool gpt", "coloring book generator gpt", "children's picture book maker gpt", "family", "parenting", "education"],
  "kids": ["homeschool gpt", "coloring book generator gpt", "children's picture book maker gpt", "family", "parenting", "education", "entertainment"],
  
  // === EXISTENTIAL & PHILOSOPHICAL ===
  "meaning": ["alan watts gpt", "sophia aeterna", "philosophy", "purpose", "existential", "spiritual", "wisdom"],
  "purpose": ["alan watts gpt", "sophia aeterna", "philosophy", "meaning", "life", "spiritual", "career", "goal"],
  "existence": ["alan watts gpt", "sophia aeterna", "philosophy", "existential", "consciousness", "reality"],
  "existential": ["alan watts gpt", "sophia aeterna", "philosophy", "meaning", "purpose", "consciousness"],
  "consciousness": ["alan watts gpt", "sophia aeterna", "philosophy", "awareness", "meditation", "spiritual", "mind"],
  "soul": ["sophia aeterna", "spiritual", "religious", "afterlife", "soul map", "consciousness", "spirit"],
  "spirit": ["sophia aeterna", "spiritual", "religious", "soul", "consciousness", "metaphysical"],
  "truth": ["fact checker gpt", "oraculum", "sophia aeterna", "philosophy", "reality", "knowledge", "wisdom"],
  "reality": ["oraculum", "sophia aeterna", "philosophy", "consciousness", "truth", "perception", "neo matrix gpt"],
  "illusion": ["neo matrix gpt", "sophia aeterna", "oraculum", "philosophy", "perception", "reality"],
  "awakening": ["sophia aeterna", "alan watts gpt", "spiritual", "enlightenment", "consciousness", "awareness"],
  "enlightenment": ["alan watts gpt", "sophia aeterna", "buddha", "spiritual", "wisdom", "awakening", "consciousness"],
  
  // === SURVIVAL & EMERGENCY ===
  "survive": ["survivalist gpt", "emergency", "disaster", "preparedness", "safety", "crisis"],
  "survival": ["survivalist gpt", "emergency", "disaster", "preparedness", "wilderness", "prepper"],
  "emergency": ["survivalist gpt", "firefighter gpt", "crisis", "disaster", "safety", "first responder"],
  "disaster": ["survivalist gpt", "emergency", "crisis", "preparedness", "safety", "recovery"],
  "apocalypse": ["survivalist gpt", "disaster", "emergency", "preparedness", "doomsday", "survival"],
  "prepper": ["survivalist gpt", "preparedness", "survival", "emergency", "disaster", "self sufficiency gpt"],
  "wilderness": ["survivalist gpt", "outdoor", "camping", "nature", "hiking", "survival"],
  "danger": ["survivalist gpt", "safety", "security", "emergency", "protection", "risk"],
  "safe": ["survivalist gpt", "security", "protection", "safety", "privacy", "cyber security gpt"],
  "safety": ["survivalist gpt", "security", "protection", "safe", "emergency", "preparedness"],
  
  // === MYSTERY & UNKNOWN ===
  "mystery": ["oraculum", "phenomenon explorer", "criminologist gpt", "investigation", "unknown", "secrets"],
  "secrets": ["oraculum", "uncovering hidden historical patterns gpt", "mystery", "hidden", "knowledge"],
  "hidden": ["oraculum", "uncovering hidden historical patterns gpt", "secrets", "mystery", "esoteric"],
  "unknown": ["phenomenon explorer", "oraculum", "mystery", "discovery", "exploration"],
  "paranormal": ["phenomenon explorer", "ghost", "supernatural", "unexplained", "mystery"],
  "supernatural": ["phenomenon explorer", "ghost", "paranormal", "unexplained", "spiritual"],
  "ghost": ["phenomenon explorer", "paranormal", "supernatural", "haunting", "spirit"],
  "ufo": ["phenomenon explorer", "alien", "extraterrestrial", "space", "unexplained"],
  "alien": ["phenomenon explorer", "stellaris", "ufo", "extraterrestrial", "space"],
  "conspiracy": ["oraculum", "uncovering hidden historical patterns gpt", "fact checker gpt", "truth", "hidden"],
  
  // === MONEY & WEALTH ===
  "poor": ["trader gpt", "business plan generator gpt", "financial", "money", "poverty", "income"],
  "poverty": ["trader gpt", "ubi strategist gpt", "social safety net gpt", "financial", "money", "income"],
  "rich": ["trader gpt", "business plan generator gpt", "wealth", "money", "investing", "success"],
  "wealth": ["trader gpt", "business plan generator gpt", "money", "investing", "financial", "rich"],
  "broke": ["trader gpt", "financial", "money", "debt", "budgeting", "income"],
  "debt": ["trader gpt", "financial", "money", "credit", "budgeting", "bankruptcy"],
  "bankruptcy": ["trader gpt", "legal", "financial", "debt", "money", "recovery"],
  "unemployed": ["resume & job finder ai suite", "job", "career", "employment", "work"],
  "jobless": ["resume & job finder ai suite", "job", "career", "employment", "work"],
  "homeless": ["social safety net gpt", "housing", "shelter", "crisis", "support"],
  
  // === SUCCESS & FAILURE ===
  "success": ["startup validator gpt", "business plan generator gpt", "motivation", "achievement", "goals", "winning"],
  "failure": ["mental wellness gpt", "startup validator gpt", "learning", "growth", "recovery", "resilience"],
  "fail": ["mental wellness gpt", "startup validator gpt", "learning", "growth", "recovery"],
  "winning": ["trader gpt", "success", "achievement", "victory", "goals"],
  "losing": ["mental wellness gpt", "trader gpt", "recovery", "learning", "growth"],
  "motivation": ["mental wellness gpt", "inspiration", "goals", "productivity", "self-improvement"],
  "inspiration": ["sophia aeterna", "alan watts gpt", "motivation", "creativity", "ideas"],
  "goals": ["multitasker gpt", "productivity", "planning", "success", "achievement", "motivation"],
  
  // === NATURE & ENVIRONMENT ===
  "nature": ["sustainable futures gpt", "agronomus", "environment", "ecology", "outdoor", "wilderness"],
  "environment": ["sustainable futures gpt", "ecology", "climate", "nature", "green", "conservation"],
  "climate": ["sustainable futures gpt", "environment", "weather", "global warming", "ecology"],
  "pollution": ["sustainable futures gpt", "environment", "ecology", "climate", "health"],
  "ocean": ["sustainable futures gpt", "fisherman gpt", "marine", "water", "sea", "nature"],
  "forest": ["sustainable futures gpt", "nature", "trees", "wilderness", "ecology", "conservation"],
  "animals": ["veterinarian gpt", "pet", "wildlife", "nature", "zoology"],
  "pets": ["veterinarian gpt", "animals", "dog", "cat", "care", "health"],
  "dog": ["veterinarian gpt", "pet", "animals", "training", "care"],
  "cat": ["veterinarian gpt", "pet", "animals", "care", "health"],
  
  // === FOOD & COOKING ===
  "hungry": ["chef sizzle gpt", "food", "cooking", "recipe", "restaurant", "eat"],
  "food": ["chef sizzle gpt", "food quality inspector gpt", "cooking", "recipe", "restaurant", "nutrition"],
  "cooking": ["chef sizzle gpt", "recipe", "food", "kitchen", "culinary"],
  "recipe": ["chef sizzle gpt", "cooking", "food", "meal", "ingredients"],
  "starving": ["chef sizzle gpt", "food", "recipe", "cooking", "restaurant"],
  "cocktail": ["mixologist gpt", "drink", "bar", "alcohol", "beverage"],
  "bar": ["mixologist gpt", "cocktail", "drink", "alcohol", "nightlife"],
  
  // === ADVENTURE & EXPLORATION ===
  "adventure": ["imagination traveler gpt", "travel advisor gpt", "exploration", "journey", "discovery"],
  "explore": ["imagination traveler gpt", "stellaris", "travel", "discovery", "adventure"],
  "exploration": ["imagination traveler gpt", "stellaris", "travel", "discovery", "adventure"],
  "journey": ["imagination traveler gpt", "travel", "adventure", "exploration", "pilgrimage"],
  "discovery": ["imagination traveler gpt", "stellaris", "exploration", "innovation", "research"],
  "travel": ["travel advisor gpt", "vacation", "tourism", "adventure", "destination"],
  "vacation": ["travel advisor gpt", "travel", "tourism", "holiday", "destination"],
  "destination": ["travel advisor gpt", "travel", "vacation", "tourism", "location"],
  
  // === DREAMS & IMAGINATION ===
  "dream": ["dream interpreter gpt", "imagination traveler gpt", "sleep", "subconscious", "vision", "fantasy"],
  "dreams": ["dream interpreter gpt", "imagination traveler gpt", "sleep", "subconscious", "interpretation"],
  "nightmare": ["dream interpreter gpt", "mental wellness gpt", "sleep", "fear", "anxiety"],
  "sleep": ["dream interpreter gpt", "rest", "insomnia", "relaxation", "health"],
  "imagination": ["imagination traveler gpt", "creative", "fantasy", "ideas", "creativity"],
  "fantasy": ["imagination traveler gpt", "creative", "fiction", "imagination", "storytelling"],
  "vision": ["dream interpreter gpt", "imagination", "prophecy", "future", "clarity"],
  
  // === CRIME & JUSTICE ===
  "crime": ["criminologist gpt", "public defender gpt", "legal", "law", "investigation", "police"],
  "criminal": ["criminologist gpt", "public defender gpt", "legal", "law", "justice", "crime"],
  "murder": ["criminologist gpt", "crime", "investigation", "forensic", "detective"],
  "theft": ["criminologist gpt", "crime", "stealing", "robbery", "investigation"],
  "justice": ["public defender gpt", "criminologist gpt", "legal", "law", "court", "rights"],
  "prison": ["public defender gpt", "criminologist gpt", "legal", "incarceration", "criminal justice"],
  "jail": ["public defender gpt", "criminologist gpt", "legal", "incarceration", "arrest"],
  "police": ["criminologist gpt", "law enforcement", "crime", "investigation", "safety"],
  "detective": ["criminologist gpt", "investigation", "crime", "mystery", "forensic"],
  "evidence": ["criminologist gpt", "investigation", "forensic", "proof", "case"],
  
  // === WAR & PEACE ===
  "war": ["global peace restoration gpt", "history", "conflict", "military", "violence", "peace"],
  "peace": ["global peace restoration gpt", "harmony", "conflict resolution", "meditation", "spirituality"],
  "conflict": ["global peace restoration gpt", "marriage mender gpt", "war", "dispute", "resolution"],
  "violence": ["mental wellness gpt", "crisis", "safety", "protection", "conflict"],
  "military": ["survivalist gpt", "war", "defense", "veteran", "combat"],
  "veteran": ["survivalist gpt", "mental wellness gpt", "military", "ptsd", "service"],
  
  // === TECHNOLOGY FEARS ===
  "hacked": ["cyber security gpt", "security", "privacy", "protection", "breach"],
  "hacking": ["cyber security gpt", "security", "privacy", "protection", "breach"],
  "virus": ["cyber security gpt", "malware", "security", "protection", "computer"],
  "privacy": ["cyber security gpt", "security", "protection", "data", "surveillance"],
  "surveillance": ["cyber security gpt", "privacy", "security", "monitoring", "spy"],
  "spy": ["cyber security gpt", "surveillance", "privacy", "espionage", "investigation"],
  
  // === AGING & TIME ===
  "aging": ["immortalizeme", "health", "wellness", "longevity", "anti-aging"],
  "old": ["immortalizeme", "aging", "elderly", "senior", "longevity"],
  "elderly": ["immortalizeme", "aging", "senior", "care", "health"],
  "young": ["youth", "age", "vitality", "energy", "health"],
  "youth": ["young", "vitality", "energy", "health", "age"],
  "immortal": ["immortalizeme", "eternal", "longevity", "forever", "afterlife"],
  "immortality": ["immortalizeme", "eternal", "longevity", "afterlife", "soul"],
  "eternal": ["immortalizeme", "immortality", "forever", "spiritual", "afterlife"],
  "forever": ["immortalizeme", "eternal", "immortality", "lasting", "permanent"],
  
  // === ADDICTION ===
  "addiction": ["mental wellness gpt", "recovery", "substance", "counseling", "therapy", "rehab"],
  "addict": ["mental wellness gpt", "addiction", "recovery", "counseling", "therapy"],
  "alcoholic": ["mental wellness gpt", "addiction", "recovery", "alcohol", "counseling"],
  "drunk": ["mixologist gpt", "alcohol", "drinking", "bar", "intoxicated"],
  "drugs": ["mental wellness gpt", "cannabis gpt", "addiction", "recovery", "substance"],
  "rehab": ["mental wellness gpt", "addiction", "recovery", "therapy", "treatment"],
  "sober": ["mental wellness gpt", "recovery", "addiction", "sobriety", "clean"],
  "recovery": ["mental wellness gpt", "addiction", "healing", "sobriety", "therapy"],
  
  // === CREATIVITY & ART ===
  "art": ["graphic & cover design gpt", "sketch artist gpt", "creative", "artistic", "design", "visual"],
  "artist": ["graphic & cover design gpt", "sketch artist gpt", "creative", "art", "design"],
  "paint": ["graphic & cover design gpt", "art", "creative", "artistic", "canvas"],
  "painting": ["graphic & cover design gpt", "art", "creative", "artistic", "visual"],
  "draw": ["sketch artist gpt", "art", "creative", "illustration", "design"],
  "drawing": ["sketch artist gpt", "art", "creative", "illustration", "sketch"],
  "creative": ["graphic & cover design gpt", "imagination traveler gpt", "art", "design", "innovation"],
  "creativity": ["graphic & cover design gpt", "imagination traveler gpt", "innovation", "ideas", "artistic"],
  
  // === WORK & CAREER ===
  "job": ["resume & job finder ai suite", "career", "employment", "work", "hiring"],
  "career": ["resume & job finder ai suite", "job", "employment", "profession", "work"],
  "work": ["resume & job finder ai suite", "job", "career", "employment", "profession"],
  "employed": ["resume & job finder ai suite", "job", "work", "career", "employment"],
  "employment": ["resume & job finder ai suite", "job", "work", "career", "hiring"],
  "fired": ["resume & job finder ai suite", "mental wellness gpt", "job", "unemployed", "career"],
  "quit": ["resume & job finder ai suite", "mental wellness gpt", "job", "career", "resignation"],
  "boss": ["resume & job finder ai suite", "work", "management", "leadership", "career"],
  "coworker": ["resume & job finder ai suite", "work", "colleague", "office", "team"],
  
  // === LEARNING & CONFUSION ===
  "confused": ["clarity omni gpt", "learning", "understanding", "help", "explanation"],
  "confusion": ["clarity omni gpt", "learning", "understanding", "help", "clarity"],
  "understand": ["clarity omni gpt", "learning", "comprehension", "knowledge", "explanation"],
  "learn": ["learn any course gpt", "learn any skill gpt", "education", "study", "knowledge"],
  "study": ["learn any course gpt", "college degree gpt", "education", "learning", "academic"],
  "homework": ["learn any course gpt", "homeschool gpt", "education", "study", "assignment"],
  "exam": ["learn any course gpt", "quiz maker ai", "test", "study", "education"],
  "test": ["quiz maker ai", "exam", "education", "learning", "assessment"],
  
  // === LUCK & FORTUNE ===
  "luck": ["fortune teller gpt", "probability gpt", "chance", "fate", "destiny"],
  "lucky": ["fortune teller gpt", "probability gpt", "fortune", "chance", "blessing"],
  "unlucky": ["fortune teller gpt", "probability gpt", "misfortune", "chance", "fate"],
  "fortune": ["fortune teller gpt", "luck", "wealth", "destiny", "prediction"],
  "fate": ["fortune teller gpt", "destiny", "luck", "future", "karma"],
  "destiny": ["fortune teller gpt", "fate", "purpose", "future", "spiritual"],
  "karma": ["fortune teller gpt", "spiritual", "fate", "destiny", "consequence"],
  "prediction": ["fortune teller gpt", "probability gpt", "forecast", "future", "prophecy"],
  "future": ["fortune teller gpt", "time machine gpt", "prediction", "forecast", "destiny"],
  "past": ["time machine gpt", "talk to history gpt", "history", "memory", "retrospect"],
  
  // === BODY & APPEARANCE ===
  "ugly": ["restyle me gpt", "mental wellness gpt", "appearance", "self-esteem", "beauty"],
  "beautiful": ["restyle me gpt", "graphic & cover design gpt", "appearance", "beauty", "aesthetic"],
  "beauty": ["restyle me gpt", "appearance", "aesthetic", "cosmetic", "style"],
  "fat": ["mental wellness gpt", "fitness", "health", "diet", "weight"],
  "skinny": ["mental wellness gpt", "fitness", "health", "diet", "weight"],
  "weight": ["mental wellness gpt", "fitness", "diet", "health", "exercise"],
  "diet": ["chef sizzle gpt", "health", "nutrition", "weight", "food"],
  "fitness": ["mental wellness gpt", "exercise", "health", "workout", "gym"],
  "exercise": ["mental wellness gpt", "fitness", "workout", "health", "gym"],
  "style": ["restyle me gpt", "fashion", "appearance", "design", "aesthetic"],
  "fashion": ["restyle me gpt", "style", "clothing", "appearance", "trend"],
  
  // === HOME & LIVING ===
  "home": ["home renovator gpt", "house", "living", "residence", "property"],
  "house": ["home renovator gpt", "property data finder gpt", "home", "property", "real estate"],
  "apartment": ["home renovator gpt", "property", "rental", "living", "housing"],
  "rent": ["property data finder gpt", "housing", "apartment", "lease", "tenant"],
  "buy": ["property data finder gpt", "purchase", "shopping", "real estate", "investment"],
  "sell": ["property data finder gpt", "sales", "marketing", "real estate", "business"],
  "move": ["travel advisor gpt", "relocation", "moving", "home", "change"],
  "moving": ["travel advisor gpt", "relocation", "home", "change", "transition"],
  
  // === PAIN & SUFFERING ===
  "pain": ["mental wellness gpt", "doctor gpt", "suffering", "hurt", "health", "healing"],
  "suffering": ["mental wellness gpt", "pain", "healing", "counseling", "spiritual"],
  "hurt": ["mental wellness gpt", "pain", "injury", "emotional", "healing"],
  "sick": ["doctor gpt", "illness", "health", "medical", "disease"],
  "illness": ["doctor gpt", "sick", "disease", "health", "medical"],
  "disease": ["doctor gpt", "illness", "medical", "health", "condition"],
  "hospital": ["doctor gpt", "medical", "health", "emergency", "treatment"],
  "doctor": ["doctor gpt", "medical", "health", "physician", "treatment"],
  "medicine": ["pharmaceutical assistant gpt", "doctor gpt", "medical", "treatment", "health"],
  "medication": ["pharmaceutical assistant gpt", "medicine", "prescription", "treatment", "health"],
  
  // === HOPE & DESPAIR ===
  "hope": ["mental wellness gpt", "sophia aeterna", "optimism", "faith", "future", "positive"],
  "hopeless": ["mental wellness gpt", "despair", "counseling", "support", "crisis"],
  "despair": ["mental wellness gpt", "hopeless", "counseling", "crisis", "support"],
  "optimism": ["mental wellness gpt", "hope", "positive", "future", "motivation"],
  "pessimism": ["mental wellness gpt", "negative", "counseling", "perspective", "thinking"],
  "positive": ["mental wellness gpt", "optimism", "happiness", "motivation", "mindset"],
  "negative": ["mental wellness gpt", "pessimism", "counseling", "mindset", "thinking"],
  "happiness": ["mental wellness gpt", "joy", "positive", "wellbeing", "fulfillment"],
  "joy": ["mental wellness gpt", "happiness", "positive", "celebration", "wellbeing"],
  "misery": ["mental wellness gpt", "suffering", "pain", "despair", "counseling"],
};

// Function to get semantic expansions for a search term
export const getSemanticExpansions = (searchTerm: string): string[] => {
  const lowerTerm = searchTerm.toLowerCase().trim();
  const expansions = new Set<string>();
  
  // Direct match
  if (semanticKeywordMapping[lowerTerm]) {
    semanticKeywordMapping[lowerTerm].forEach(keyword => expansions.add(keyword));
  }
  
  // Check if any semantic keyword is contained in the search term
  for (const [keyword, values] of Object.entries(semanticKeywordMapping)) {
    if (lowerTerm.includes(keyword) || keyword.includes(lowerTerm)) {
      values.forEach(value => expansions.add(value));
    }
  }
  
  return Array.from(expansions);
};
