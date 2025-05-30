
import { Tool } from "@/types/tools";

interface SeenTool {
  title: string;
  lastSeenIndex: number;
}

export class ToolDeduplicationManager {
  private seenTools: Map<string, SeenTool> = new Map();
  private minSpacing: number;

  constructor(minSpacing: number = 8) {
    this.minSpacing = minSpacing;
  }

  shouldShowTool(tool: Tool, currentIndex: number): boolean {
    const toolKey = tool.title.toLowerCase();
    const seenTool = this.seenTools.get(toolKey);

    if (!seenTool) {
      this.seenTools.set(toolKey, {
        title: tool.title,
        lastSeenIndex: currentIndex
      });
      return true;
    }

    const spacing = currentIndex - seenTool.lastSeenIndex;
    if (spacing >= this.minSpacing) {
      seenTool.lastSeenIndex = currentIndex;
      return true;
    }

    return false;
  }

  reset() {
    this.seenTools.clear();
  }

  getFilteredTools(tools: Tool[]): Tool[] {
    this.reset();
    const filteredTools: Tool[] = [];
    let currentIndex = 0;

    for (const tool of tools) {
      if (this.shouldShowTool(tool, currentIndex)) {
        filteredTools.push(tool);
        currentIndex++;
      }
    }

    return filteredTools;
  }
}

export const createDeduplicatedToolsList = (tools: Tool[], minSpacing: number = 8): Tool[] => {
  const manager = new ToolDeduplicationManager(minSpacing);
  return manager.getFilteredTools(tools);
};
