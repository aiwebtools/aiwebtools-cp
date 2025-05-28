
import { LucideIcon } from "lucide-react";

export interface Tool {
  icon: LucideIcon;
  title: string;
  description: string;
  emoji: string;
  color: string;
  videoUrl?: string;
  imageUrl?: string;
  tags?: string[];
  category?: string;
}
