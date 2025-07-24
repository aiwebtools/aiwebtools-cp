
import { Tool } from "@/types/tools";
import { 
  Microscope, 
  TestTube, 
  Dna, 
  Atom, 
  FlaskConical, 
  Telescope,
  Calculator,
  Globe,
  Brain,
  Lightbulb,
  Database,
  Zap
} from "lucide-react";

export const scienceAndResearchGPTs: Tool[] = [
  {
    icon: Telescope,
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Stellaris: AI Space Explorer is a cutting-edge AI designed for space exploration and exoplanet settlement simulations. It provides expert guidance in astrogation, terraforming, and colony planning, and excels in analyzing detailed schematics to offer recommendations based on current mission status. With advanced data analysis and predictive insights, it supports future interstellar missions with precision. Please note that this tool was created for research, educational, and simulation purposes only.",
    emoji: "🚀",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    tags: ["space exploration", "astronomy", "research simulation", "space science", "exoplanet research", "aiwebtools"],
    category: "Science & Research",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Brain,
    title: "Nikola Tesla GPT",
    description: "Nikola Tesla GPT is a cutting-edge AI tool inspired by the visionary brilliance of Nikola Tesla, designed to investigate scientific mysteries, craft groundbreaking theories, and innovate across disciplines. With advanced capabilities in data analysis, Python modeling, and research synthesis, it uncovers patterns and delivers actionable insights to drive discovery. This AI tool excels in solving complex challenges, exploring uncharted ideas, and bridging the gap between creativity and scientific precision. Nikola Tesla GPT is the ultimate partner for researchers, inventors, and visionaries seeking to revolutionize the future.",
    emoji: "⚡",
    color: "from-yellow-500 to-purple-600",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    tags: ["scientific research", "innovation", "tesla", "electricity", "physics", "inventor", "aiwebtools"],
    category: "Science & Research",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: FlaskConical,
    title: "Alchemist Scientist GPT",
    description: "Alchemist Scientist GPT is a powerful AI tool that immerses you in the world of medieval alchemy, combining hands-on chemistry, ancient wisdom, and interactive storytelling. Whether you want to explore historical experiments, uncover the secrets of early science, or dive into the pursuit of legendary transmutations, this AI brings it all to life with vivid descriptions and practical guidance. Step into the alchemist's laboratory and experience the thrill of discovery—where fire, metal, and mystery forge the path to knowledge. ⚗️🔥",
    emoji: "⚗️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://alchemicalscientistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_C4irn.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["alchemy", "chemistry", "medieval science", "experiments", "historical science", "aiwebtools"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Dna,
    title: "Genome GPT",
    description: "Genome GPT is a cutting-edge AI tool designed to assist researchers, scientists, and enthusiasts in genetic analysis and discovery. Specializing in genomic data interpretation, Genome GPT provides comprehensive and detailed insights into genetic sequences, patterns, and variations. Whether you're analyzing human DNA, exploring plant genetics, or researching cannabis strains, Genome GPT offers thorough scientific analysis in a user-friendly, professional manner.",
    emoji: "🧬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["genetics", "dna analysis", "genomics", "scientific research", "biology", "aiwebtools"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 5123
  },
  {
    icon: Database,
    title: "Consensus",
    description: "AI-powered academic search engine that finds and summarizes scientific research. Consensus uses AI to extract key findings from peer-reviewed papers and provides evidence-based answers to research questions with proper citations.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://consensus.app",
    tags: ["academic search", "research", "citations", "peer review", "scientific papers", "evidence-based"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 3421
  },
  {
    icon: Lightbulb,
    title: "Elicit",
    description: "AI research assistant that helps you find relevant papers, extract key claims, and synthesize findings. Elicit automates parts of the research workflow using language models to help researchers work more efficiently.",
    emoji: "🔬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://elicit.org",
    tags: ["research assistant", "paper discovery", "claim extraction", "research workflow", "literature review", "academic"],
    category: "Science & Research",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Globe,
    title: "Semantic Scholar",
    description: "AI-powered academic search engine by Allen Institute that helps researchers discover relevant scientific literature. Uses machine learning to understand paper content and provide intelligent recommendations and insights.",
    emoji: "🌐",
    color: "from-teal-500 to-green-600",
    directUrl: "https://semanticscholar.org",
    tags: ["academic search", "ai research", "paper discovery", "machine learning", "scholarly articles", "citations"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: TestTube,
    title: "Research Rabbit",
    description: "AI-powered research discovery platform that helps you explore academic literature through interactive visualizations. Find connected papers, discover new research directions, and collaborate with other researchers.",
    emoji: "🐰",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://researchrabbitapp.com",
    tags: ["research discovery", "paper connections", "visualization", "collaboration", "academic network", "literature mapping"],
    category: "Science & Research",
    rating: 4.4,
    totalVotes: 1987
  },
  {
    icon: Calculator,
    title: "Connected Papers",
    description: "Visual tool to help researchers find and explore papers relevant to their work. Creates interactive graphs showing connections between academic papers based on citations and semantic similarity.",
    emoji: "🔗",
    color: "from-orange-500 to-red-600",
    directUrl: "https://connectedpapers.com",
    tags: ["paper visualization", "research mapping", "citation network", "academic discovery", "paper connections", "literature review"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 3654
  }
];
