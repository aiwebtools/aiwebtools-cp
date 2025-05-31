
import { Tool } from "@/types/tools";
import { appraisalAndValuationGPTs } from "./appraisalAndValuationGPTs";
import { healthAndWellnessGPTs } from "./healthAndWellnessGPTs";
import { businessAndFinanceGPTs } from "./businessAndFinanceGPTs";
import { educationAndLearningGPTs } from "./educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./creativeAndMediaGPTs";
import { timeAndHistoryGPTs } from "./timeAndHistoryGPTs";
import { spiritualAndPhilosophyGPTs } from "./spiritualAndPhilosophyGPTs";
import { scienceAndResearchGPTs } from "./scienceAndResearchGPTs";
import { legalAndGovernmentGPTs } from "./legalAndGovernmentGPTs";
import { professionalServicesGPTs } from "./professionalServicesGPTs";
import { multimediaAndContentGPTs } from "./multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./mysteriousAndUnusualGPTs";
import { utilityAndProductivityGPTs } from "./utilityAndProductivityGPTs";
import { philosophyAndLifestyleGPTs } from "./philosophyAndLifestyleGPTs";
import { foodAndHospitalityGPTs } from "./foodAndHospitalityGPTs";
import { aiPromptingAndGenerationGPTs } from "./aiPromptingAndGenerationGPTs";
import { researchAndPharmaceuticalGPTs } from "./researchAndPharmaceuticalGPTs";
import { educationalToolsGPTs } from "./educationalToolsGPTs";
import { specializedNicheToolsGPTs } from "./specializedNicheToolsGPTs";
import { businessStrategyGPTs } from "./businessStrategyGPTs";
import { contentCreationToolsGPTs } from "./contentCreationToolsGPTs";

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  ...appraisalAndValuationGPTs,
  ...healthAndWellnessGPTs,
  ...businessAndFinanceGPTs,
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...timeAndHistoryGPTs,
  ...spiritualAndPhilosophyGPTs,
  ...scienceAndResearchGPTs,
  ...legalAndGovernmentGPTs,
  ...professionalServicesGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  ...utilityAndProductivityGPTs,
  ...philosophyAndLifestyleGPTs,
  ...foodAndHospitalityGPTs,
  ...aiPromptingAndGenerationGPTs,
  ...researchAndPharmaceuticalGPTs,
  ...educationalToolsGPTs,
  ...specializedNicheToolsGPTs,
  ...businessStrategyGPTs,
  ...contentCreationToolsGPTs,
  // Additional GPTs will be added here as new category files are created
];
