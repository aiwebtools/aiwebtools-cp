
import { Tool } from "@/types/tools";
import { coreAudioVoiceTools } from './coreAudioVoiceTools';
import { aiWebToolsCreativeGPTs } from './aiWebToolsCreativeGPTs';
import { professionalGPTsAudio } from './professionalGPTsAudio';
import { businessProductivityAudio } from './businessProductivityAudio';

export const audioAndVoiceTools: Tool[] = [
  ...coreAudioVoiceTools,
  ...professionalGPTsAudio,
  ...businessProductivityAudio,
  ...aiWebToolsCreativeGPTs
];
