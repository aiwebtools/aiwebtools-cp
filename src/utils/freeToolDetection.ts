// Utility to detect if a tool is FREE (custom GPT or Gemini Gem)
import { Tool } from "@/types/tools";

export const isFreeTool = (tool: Tool): boolean => {
  const url = tool.directUrl || '';
  
  // Check explicit isFree flag
  if (tool.isFree) return true;
  
  // Check URL patterns for custom GPTs and Gems
  if (url.includes('lovable.app')) return true;
  if (url.includes('chatgpt.com/g/')) return true;
  if (url.includes('gemini.google.com/gem/')) return true;
  
  // Check tags for custom GPT or Gemini Gem
  if (tool.tags?.some(tag => {
    const lowerTag = tag.toLowerCase();
    return lowerTag.includes('custom gpt') || lowerTag.includes('gemini gem');
  })) return true;
  
  return false;
};
