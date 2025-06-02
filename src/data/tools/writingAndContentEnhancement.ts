
import { Tool } from "@/types/tools";
import { grammarAndWritingAssistants } from './grammarAndWritingAssistants';
import { aiContentGenerators } from './aiContentGenerators';
import { creativeWritingTools } from './creativeWritingTools';
import { transcriptionAndDocumentTools } from './transcriptionAndDocumentTools';

export const writingAndContentEnhancement: Tool[] = [
  ...grammarAndWritingAssistants,
  ...aiContentGenerators,
  ...creativeWritingTools,
  ...transcriptionAndDocumentTools
];
