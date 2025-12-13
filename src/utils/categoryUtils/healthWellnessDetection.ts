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
  "Mental Health": ["mental health", "anxiety", "depression", "psychology", "emotional", "mindfulness", "stress", "therapy", "counseling"],
  "Fitness": ["fitness", "exercise", "workout", "training", "gym", "sports", "athletic", "physical"],
  "Nutrition": ["nutrition", "diet", "food", "meal", "calorie", "vitamin", "eating", "nutrients", "dietary"],
  "Medical": ["medical", "doctor", "diagnosis", "healthcare", "clinical", "patient", "symptom", "treatment", "medicine"],
  "Therapy": ["therapy", "therapist", "counseling", "psychotherapy", "rehabilitation", "healing"],
  "Wellness": ["wellness", "wellbeing", "self-care", "holistic", "lifestyle", "balance", "health"],
  "Healthcare": ["healthcare", "health care", "hospital", "clinic", "insurance", "claims", "billing"],
  "Meditation": ["meditation", "mindfulness", "zen", "relaxation", "breathing", "calm"],
  "Sleep": ["sleep", "insomnia", "rest", "circadian", "sleep quality"],
  "Stress Management": ["stress", "anxiety", "relaxation", "coping", "burnout"],
  "Health Tracking": ["tracking", "monitor", "wearable", "fitness tracker", "health data"],
  "Medical Coding": ["billing", "coding", "CPT", "ICD-10", "HCPCS", "reimbursement"],
  "Pet Health": ["pet", "veterinary", "animal health", "pet care", "vet"]
};
