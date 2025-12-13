// Health & Wellness subtypes for enhanced categorization

export const healthWellnessSubtypes = [
  "Mental Health",
  "Fitness",
  "Nutrition",
  "Medical",
  "Therapy",
  "Wellness",
  "Healthcare",
  "Meditation",
  "Sleep",
  "Stress Management",
  "Health Tracking",
  "Medical Coding",
  "Pet Health"
] as const;

export type HealthWellnessSubtype = typeof healthWellnessSubtypes[number];

export const healthWellnessKeywords: Record<HealthWellnessSubtype, string[]> = {
  "Mental Health": ["mental health", "anxiety", "depression", "psychology", "emotional", "mindfulness", "stress", "therapy", "counseling", "psychological", "mental wellness", "emotional wellness", "mood", "cbt", "cognitive behavioral"],
  "Fitness": ["fitness", "exercise", "workout", "training", "gym", "sports", "athletic", "physical", "personal trainer", "fitness app", "workout plan", "exercise routine", "bodybuilding", "strength training", "cardio"],
  "Nutrition": ["nutrition", "diet", "food", "meal", "calorie", "vitamin", "eating", "nutrients", "dietary", "meal plan", "meal prep", "healthy eating", "macro", "weight loss", "recipe", "chef", "cooking"],
  "Medical": ["medical", "doctor", "diagnosis", "healthcare", "clinical", "patient", "symptom", "treatment", "medicine", "physician", "health condition", "disease", "medication", "prescription", "telehealth", "telemedicine"],
  "Therapy": ["therapy", "therapist", "counseling", "psychotherapy", "rehabilitation", "healing", "cognitive therapy", "behavioral therapy", "marriage counseling", "family therapy"],
  "Wellness": ["wellness", "wellbeing", "self-care", "holistic", "lifestyle", "balance", "health", "well-being", "healthy lifestyle", "wellness coach", "life balance"],
  "Healthcare": ["healthcare", "health care", "hospital", "clinic", "insurance", "claims", "billing", "health insurance", "medical records", "patient care", "health provider"],
  "Meditation": ["meditation", "mindfulness", "zen", "relaxation", "breathing", "calm", "guided meditation", "meditation app", "mindfulness practice", "inner peace", "spiritual", "contemplation"],
  "Sleep": ["sleep", "insomnia", "rest", "circadian", "sleep quality", "sleep tracker", "sleep improvement", "better sleep", "sleep schedule", "sleep hygiene"],
  "Stress Management": ["stress", "anxiety", "relaxation", "coping", "burnout", "stress relief", "stress reduction", "managing stress", "work-life balance"],
  "Health Tracking": ["tracking", "monitor", "wearable", "fitness tracker", "health data", "health metrics", "vital signs", "biometric", "health monitoring"],
  "Medical Coding": ["billing", "coding", "CPT", "ICD-10", "HCPCS", "reimbursement", "medical billing", "healthcare coding", "claims processing"],
  "Pet Health": ["pet", "veterinary", "animal health", "pet care", "vet", "veterinarian", "dog health", "cat health", "pet wellness", "animal care"]
};
