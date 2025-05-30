
import { Tool } from "@/types/tools";

// Helper function to extract priority tools and move them to the front
export const extractPriorityTools = (toolsArray: Tool[]): { priorityTools: Tool[], remainingTools: Tool[] } => {
  const priorityTitles = ['BOOK WRITER GPT', 'MOVIE MAKER STUDIO', 'STAGE MASTER SUITE'];
  
  const priorityTools: Tool[] = [];
  const remainingTools: Tool[] = [];
  
  toolsArray.forEach(tool => {
    if (priorityTitles.some(title => tool.title.includes(title))) {
      priorityTools.push(tool);
    } else {
      remainingTools.push(tool);
    }
  });
  
  return { priorityTools, remainingTools };
};
