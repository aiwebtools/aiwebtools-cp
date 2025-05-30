
import { Tool } from "@/types/tools";
import { musicVideoCreationTools } from './musicVideoCreationTools';
import { musicGenerationTools } from './musicGenerationTools';
import { voiceAndSpeechTools } from './voiceAndSpeechTools';
import { audioEditingAndProductionTools } from './audioEditingAndProductionTools';
import { podcastAndStreamingTools } from './podcastAndStreamingTools';

// Combine all audio and music tool categories
export const audioMusicTools: Tool[] = [
  ...musicVideoCreationTools,
  ...musicGenerationTools,
  ...voiceAndSpeechTools,
  ...audioEditingAndProductionTools,
  ...podcastAndStreamingTools
];
