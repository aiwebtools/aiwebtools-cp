
import { LucideIcon } from "lucide-react";

export interface Tool {
  icon: LucideIcon;
  title: string;
  description: string;
  emoji: string;
  color: string;
  videoUrl?: string;
  imageUrl?: string;
  directUrl?: string;
  tags?: string[];
  category?: string;
  rating?: number;
  totalVotes?: number;
  blockchain?: string;
  isFree?: boolean; // Flag for free tools from AI Web Tools
  tagline?: string; // Short, mind-blowing one-liner about what the tool does
  platform?: "mobile" | "desktop" | "cross-platform"; // Primary platform type
  platforms?: string[]; // Specific platforms: iOS, Android, Windows, macOS, Linux, Web, etc.
}
