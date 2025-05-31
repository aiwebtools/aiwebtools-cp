
import { Tool } from "@/types/tools";
import { 
  Microscope, 
  Atom, 
  Dna, 
  Beaker, 
  FlaskConical, 
  Rocket,
  Globe,
  Zap,
  Target,
  Search
} from "lucide-react";

export const scienceAndResearchGPTs: Tool[] = [
  {
    icon: Rocket,
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Stellaris: AI Space Explorer is a cutting-edge AI designed for space exploration and exoplanet settlement simulations. It provides expert guidance in astrogation, terraforming, and colony planning, and excels in analyzing detailed schematics to offer recommendations based on current mission status. With advanced data analysis and predictive insights, it supports future interstellar missions with precision. Please note that this tool was created for research, educational, and simulation purposes only.",
    emoji: "🚀",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    tags: ["space exploration", "exoplanet settlement", "astrogation", "terraforming", "space simulation", "aiwebtools"],
    category: "Science & Research",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "Nikola Tesla GPT is a cutting-edge AI tool inspired by the visionary brilliance of Nikola Tesla, designed to investigate scientific mysteries, craft groundbreaking theories, and innovate across disciplines. With advanced capabilities in data analysis, Python modeling, and research synthesis, it uncovers patterns and delivers actionable insights to drive discovery. This AI tool excels in solving complex challenges, exploring uncharted ideas, and bridging the gap between creativity and scientific precision. Nikola Tesla GPT is the ultimate partner for researchers, inventors, and visionaries seeking to revolutionize the future.",
    emoji: "⚡",
    color: "from-yellow-500 to-blue-600",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    tags: ["scientific research", "innovation", "tesla", "data analysis", "research synthesis", "aiwebtools"],
    category: "Science & Research",
    rating: 4.9,
    totalVotes: 7890
  },
  {
    icon: Dna,
    title: "Genome GPT",
    description: "Genome GPT is a cutting-edge AI tool designed to assist researchers, scientists, and enthusiasts in genetic analysis and discovery. Specializing in genomic data interpretation, Genome GPT provides comprehensive and detailed insights into genetic sequences, patterns, and variations. Whether you're analyzing human DNA, exploring plant genetics, or researching cannabis strains, Genome GPT offers thorough scientific analysis in a user-friendly, professional manner.",
    emoji: "🧬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298033468768477/genome.webp",
    tags: ["genetics", "genomic analysis", "DNA research", "genetic sequences", "scientific analysis", "aiwebtools"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Globe,
    title: "Sustainable Futures GPT",
    description: "I am Sustainable Futures GPT, and my purpose is to assist governments, communities, and individuals in making informed, data-driven decisions to achieve environmental sustainability. I specialize in analyzing global climate data, offering predictions, and providing actionable strategies to reduce environmental impact and regenerate Earth's resources for future harmony with nature.",
    emoji: "🌍",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["environmental sustainability", "climate data", "sustainability planning", "environmental impact", "green technology", "aiwebtools"],
    category: "Science & Research",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Target,
    title: "Food Quality Inspector GPT",
    description: "Food Quality Inspector GPT by AiWebTools.Ai is your smart companion for grocery shopping, helping you assess food quality, freshness, and safety on the spot. It analyzes ingredients, flags unhealthy or banned substances, and provides clear nutritional insights to guide healthier choices. Whether you're choosing fresh produce or packaged goods, it's like having a food safety and nutrition expert right by your side. 🛒🍎",
    emoji: "🍎",
    color: "from-orange-500 to-red-600",
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["food quality", "food safety", "nutrition analysis", "grocery shopping", "health assessment", "aiwebtools"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 4321
  }
];
