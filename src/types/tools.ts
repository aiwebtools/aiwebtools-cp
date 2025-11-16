
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
}
