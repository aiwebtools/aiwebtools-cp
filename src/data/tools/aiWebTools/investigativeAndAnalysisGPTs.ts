
import { Tool } from "@/types/tools";
import { 
  Search, 
  Eye, 
  FileSearch, 
  TrendingUp, 
  BarChart3, 
  Target,
  Microscope,
  ShieldCheck,
  Camera,
  AlertTriangle
} from "lucide-react";

export const investigativeAndAnalysisGPTs: Tool[] = [
  {
    icon: Camera,
    title: "Snoop Image Ai - Experimental AI Image Generation Detector",
    description: "Introducing Snoop Image AI — your go-to tool for verifying image authenticity, infused with the unmistakable style of Snoop Dogg. This experimental tool analyzes images to assess whether they are likely real or AI-generated. While not 100% accurate—due to the advanced realism of modern AI-generated visuals—it identifies key indicators of an image's origin. These include metadata analysis, deep color screening, and precision pixel measurements to offer clues about its authenticity.",
    emoji: "🕵️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["image detection", "ai detection", "authenticity", "forensics", "snoop dogg", "experimental", "image analysis", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Eye,
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Uncovering Hidden Historical Patterns GPT is an advanced AI tool that reveals the suppressed truths and hidden power structures shaping our world. By analyzing symbolism, financial systems, and historical contradictions, it uncovers patterns connecting ancient empires to modern institutions. This tool cross-references mainstream narratives with alternative sources, secret societies, and esoteric knowledge to expose what history books omit. Perfect for truth seekers, researchers, and critical thinkers ready to see beyond the surface.",
    emoji: "🔍",
    color: "from-orange-500 to-red-600",
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-advertisement-with-the-eye_C64dU.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    tags: ["historical patterns", "hidden truths", "pattern recognition", "alternative history", "research", "truth seeking", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: FileSearch,
    title: "Video Second-by-Second Analysis GPT",
    description: "Video Second-by-Second Analysis GPT breaks down your footage with incredible precision, analyzing every second and extracting key visual frames for detailed insight. Just upload your video, and this AI tool will guide you through a step-by-step review of each moment—highlighting actions, people, objects, and scene changes. It's also a powerful resource for training and fine-tuning Vision-Language Models (VLMs), offering structured, labeled visual data with contextual analysis. Ideal for creators, analysts, educators, researchers, and investigators who need deep clarity from their video content.",
    emoji: "📹",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["video analysis", "frame analysis", "visual inspection", "content analysis", "video processing", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 3789
  },
  {
    icon: Eye,
    title: "Phenomenon Explorer AI Suite",
    description: "Unveil the unexplained with AI precision using the Phenomenon Explorer AI Suite. This powerful collection of specialized AI tools enables users to investigate paranormal phenomena, document cryptid sightings, analyze supernatural myths, and conduct ghost hunts with scientific accuracy and analytical depth. Whether you're a UFO researcher, a paranormal investigator, a folklore scholar, or just someone intrigued by the unknown, our suite of tools—UFO Investigation GPT, Supernatural Myths GPT, Cryptozoology Report GPT, and Ghost Hunting GPT—guides you through structured methodologies and evidence-based approaches to uncover the truth behind some of the world's most mysterious occurrences. Each tool provides tailored support for your investigative journey, combining cutting-edge AI technology with expert-level analysis to offer you a clearer understanding of the unexplained. Start exploring today and see how AI can help illuminate the unknown.",
    emoji: "👻",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/faBkRli0puc?si=Sao0KIfV2iGWLGB-",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["paranormal investigation", "cryptozoology", "supernatural", "ufo research", "ghost hunting", "phenomena analysis", "mystery investigation", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.2,
    totalVotes: 2156
  },
  {
    icon: Search,
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real life situations as this is a simulation only. Disclaimer: This AI tool is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts. It is not approved for autonomous decision-making or unsupervised deployment. All findings must be reviewed and verified by qualified professionals to ensure accuracy, fairness, and ethical compliance.",
    emoji: "🔍",
    color: "from-red-500 to-purple-600",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/3Ll7KPhTt3M",
    tags: ["crime scene analysis", "forensic analysis", "investigation", "crime scene", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: FileSearch,
    title: "Declassified Files Explorer GPT",
    description: "AI-powered tool for researching and analyzing declassified government files that have been released to the public. Access and explore historical government documents, intelligence reports, and official records with advanced search capabilities. Perfect for researchers, historians, journalists, and truth seekers investigating government transparency and historical events. For informational and research purposes only.",
    emoji: "📂",
    color: "from-slate-500 to-gray-700",
    directUrl: "https://chatgpt.com/g/g-68eeaf21bd1481919a34936a27d917a3-declassified-files-explorer-gpt",
    videoUrl: "https://youtu.be/kqMPocOgEZ8?si=UlxkH6weSVM1fp-I",
    tags: ["declassified files", "government documents", "research", "historical records", "transparency", "intelligence reports", "document analysis", "aiwebtools", "Custom GPT"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 2543
  }
];

// Debug logging to ensure proper categorization
console.log(`🔍 INVESTIGATIVE TOOLS DEBUG: ${investigativeAndAnalysisGPTs.length} tools loaded in Investigative & Analysis category`);
investigativeAndAnalysisGPTs.forEach((tool, index) => {
  if (index < 3) { // Log first 3 for verification
    console.log(`   ${index + 1}. ${tool.title} - Category: ${tool.category}`);
  }
});
