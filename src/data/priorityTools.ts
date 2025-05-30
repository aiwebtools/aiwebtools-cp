
import { Tool } from "@/types/tools";

// Helper function to extract priority tools and move them to the front
export const extractPriorityTools = (toolsArray: Tool[]): { priorityTools: Tool[], remainingTools: Tool[] } => {
  // All your GPTs that should appear at the top
  const priorityTitles = [
    'Book Writer GPT',
    'Business Plan GPT', 
    'HR GPT',
    'Sales GPT',
    'Marketing GPT',
    'Legal GPT',
    'Health GPT',
    'Event Planner GPT',
    'Restaurant GPT',
    'Gaming GPT',
    'Music GPT',
    'Photography GPT',
    'Art GPT',
    'Tech GPT',
    'Travel GPT',
    'Fitness GPT',
    'Fashion GPT',
    'Education GPT'
  ];
  
  const priorityTools: Tool[] = [];
  const remainingTools: Tool[] = [];
  
  // First, extract all priority GPTs in the order specified
  priorityTitles.forEach(title => {
    const tool = toolsArray.find(t => t.title === title);
    if (tool) {
      priorityTools.push(tool);
    }
  });
  
  // Then add all remaining tools that aren't in the priority list
  toolsArray.forEach(tool => {
    if (!priorityTitles.includes(tool.title)) {
      remainingTools.push(tool);
    }
  });
  
  return { priorityTools, remainingTools };
};
