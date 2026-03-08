
import { Tool } from "@/types/tools";
import { 
  FileText, 
  Download, 
  Upload, 
  Scissors, 
  Archive,
  RefreshCw,
  Shield,
  Lock,
  Zap,
  Settings
} from "lucide-react";

import smallpdfHero from "@/assets/tools/smallpdf-hero.jpg";
import tinypngHero from "@/assets/tools/tinypng-hero.jpg";
import virustotalHero from "@/assets/tools/virustotal-hero.jpg";
import waybackMachineHero from "@/assets/tools/wayback-machine-hero.jpg";
import clipconverterHero from "@/assets/tools/clipconverter-hero.jpg";

export const utilitiesTools: Tool[] = [
  {
    icon: FileText,
    title: "SmallPDF",
    description: "Online PDF tools for compressing, converting, editing, and signing PDF documents. Easy-to-use interface for all PDF needs.",
    emoji: "📄",
    color: "from-red-500 to-pink-600",
    directUrl: "https://smallpdf.com/?via=aiwebtools",
    imageUrl: smallpdfHero,
    tags: ["PDF", "compression", "conversion", "editing", "document tools"],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Archive,
    title: "TinyPNG",
    description: "Advanced lossy compression for PNG and JPEG images. Reduce file sizes while maintaining quality for web optimization.",
    emoji: "🖼️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://tinypng.com/?via=aiwebtools",
    imageUrl: tinypngHero,
    tags: ["image compression", "PNG", "JPEG", "optimization", "file size"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Download,
    title: "ClipConverter",
    description: "Free online media conversion application to convert, download, and edit videos from YouTube and other platforms.",
    emoji: "📹",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://clipconverter.cc/?via=aiwebtools",
    imageUrl: clipconverterHero,
    tags: ["video conversion", "YouTube downloader", "media converter", "editing"],
    category: "Productivity & Utilities",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Shield,
    title: "VirusTotal",
    description: "Free online service that analyzes files and URLs for viruses, worms, trojans, and other malicious content using multiple engines.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://virustotal.com/?via=aiwebtools",
    imageUrl: virustotalHero,
    tags: ["virus scanning", "malware detection", "file analysis", "security"],
    category: "Productivity & Utilities",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: RefreshCw,
    title: "Archive.org Wayback Machine",
    description: "Digital archive that captures and preserves web pages over time. Browse historical versions of websites and documents.",
    emoji: "🕰️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://archive.org/?via=aiwebtools",
    imageUrl: waybackMachineHero,
    tags: ["web archive", "historical websites", "digital preservation", "research"],
    category: "Productivity & Utilities",
    rating: 4.9,
    totalVotes: 6789
  }
];
