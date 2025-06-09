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
    tags: ["image detection", "ai detection", "authenticity", "forensics", "snoop dogg", "experimental", "image analysis", "aiwebtools"],
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
    tags: ["historical patterns", "hidden truths", "pattern recognition", "alternative history", "research", "truth seeking", "aiwebtools"],
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
    tags: ["video analysis", "frame analysis", "visual inspection", "content analysis", "video processing", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 3789
  },
  {
    icon: Eye,
    title: "Phenomenon Investigator Suite",
    description: "Unveil the unexplained with AI precision using the Phenomenon Explorer AI Suite. This powerful collection of specialized AI tools enables users to investigate paranormal phenomena, document cryptid sightings, analyze supernatural myths, and conduct ghost hunts with scientific accuracy and analytical depth. Whether you're a UFO researcher, a paranormal investigator, a folklore scholar, or just someone intrigued by the unknown, our suite of tools—UFO Investigation GPT, Supernatural Myths GPT, Cryptozoology Report GPT, and Ghost Hunting GPT—guides you through structured methodologies and evidence-based approaches to uncover the truth behind some of the world's most mysterious occurrences. Each tool provides tailored support for your investigative journey, combining cutting-edge AI technology with expert-level analysis to offer you a clearer understanding of the unexplained. Start exploring today and see how AI can help illuminate the unknown.",
    emoji: "👻",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["paranormal investigation", "cryptozoology", "supernatural", "ufo research", "ghost hunting", "phenomena analysis", "mystery investigation", "aiwebtools"],
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
    tags: ["crime scene analysis", "forensic analysis", "investigation", "crime scene", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Eye,
    title: "Truth Seeker GPT",
    description: "Truth Seeker GPT is designed to help you uncover the truth behind any topic. Whether you're researching historical events, verifying news, or exploring complex subjects, this AI tool provides in-depth analysis and reliable information.",
    emoji: "🧐",
    color: "from-blue-500 to-orange-600",
    directUrl: "https://truthseekergpt.lovable.app/?via=aiwebtools",
    tags: ["truth seeking", "fact checking", "research", "analysis", "information verification", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 3234
  },
  {
    icon: FileSearch,
    title: "Document Analyzer GPT",
    description: "Document Analyzer GPT is your AI assistant for in-depth document analysis. Upload any document, and our AI will extract key information, summarize content, and provide insights to help you understand complex texts quickly.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://documentanalyzertool.lovable.app/?via=aiwebtools",
    tags: ["document analysis", "text extraction", "summarization", "information retrieval", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 3123
  },
  {
    icon: TrendingUp,
    title: "Trend Forecaster GPT",
    description: "Trend Forecaster GPT helps you stay ahead of the curve by predicting future trends. Input any topic, and our AI will analyze data to forecast upcoming trends, providing valuable insights for business, marketing, and innovation.",
    emoji: "📈",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://trendforecastergpt.lovable.app/?via=aiwebtools",
    tags: ["trend forecasting", "future trends", "data analysis", "market research", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.4,
    totalVotes: 2867
  },
  {
    icon: BarChart3,
    title: "Data Insights GPT",
    description: "Data Insights GPT transforms raw data into actionable insights. Upload your data, and our AI will analyze it to identify patterns, correlations, and key metrics, helping you make informed decisions.",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    directUrl: "https://datainsightsgpt.lovable.app/?via=aiwebtools",
    tags: ["data analysis", "insights", "pattern recognition", "data visualization", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.8,
    totalVotes: 3345
  },
  {
    icon: Target,
    title: "Target Audience Analyzer GPT",
    description: "Target Audience Analyzer GPT helps you understand your audience better. Input any topic or product, and our AI will analyze demographics, behaviors, and preferences to identify your ideal target audience.",
    emoji: "🎯",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://targetaudienceanalyzer.lovable.app/?via=aiwebtools",
    tags: ["target audience", "market analysis", "demographics", "consumer behavior", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.5,
    totalVotes: 2923
  },
  {
    icon: Microscope,
    title: "Scientific Research Assistant GPT",
    description: "Scientific Research Assistant GPT supports your research endeavors. Input any scientific topic, and our AI will provide relevant papers, data, and insights to accelerate your research process.",
    emoji: "🔬",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://scientificresearchgpt.lovable.app/?via=aiwebtools",
    tags: ["scientific research", "research assistant", "scientific papers", "data analysis", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.7,
    totalVotes: 3189
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Threat Analyzer GPT",
    description: "Cybersecurity Threat Analyzer GPT helps you protect your digital assets. Input any potential threat, and our AI will analyze vulnerabilities, risks, and countermeasures to enhance your cybersecurity posture.",
    emoji: "🛡️",
    color: "from-red-500 to-black-600",
    directUrl: "https://cybersecurityanalyzer.lovable.app/?via=aiwebtools",
    tags: ["cybersecurity", "threat analysis", "vulnerability assessment", "risk management", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.6,
    totalVotes: 3056
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment GPT",
    description: "Risk Assessment GPT helps you identify and evaluate potential risks. Input any scenario, and our AI will analyze potential risks, impacts, and mitigation strategies to help you make informed decisions.",
    emoji: "⚠️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://riskassessmentgpt.lovable.app/?via=aiwebtools",
    tags: ["risk assessment", "risk management", "scenario analysis", "mitigation strategies", "aiwebtools"],
    category: "Investigative & Analysis",
    rating: 4.4,
    totalVotes: 2765
  }
];

// Debug logging to ensure proper categorization
console.log(`🔍 INVESTIGATIVE TOOLS DEBUG: ${investigativeAndAnalysisGPTs.length} tools loaded in Investigative & Analysis category`);
investigativeAndAnalysisGPTs.forEach((tool, index) => {
  if (index < 3) { // Log first 3 for verification
    console.log(`   ${index + 1}. ${tool.title} - Category: ${tool.category}`);
  }
});
