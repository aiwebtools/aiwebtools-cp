
import { Tool } from "@/types/tools";
import { Scale, Gavel, FileText, Building, Users, Shield, Briefcase, BookOpen, PenTool, Calendar } from "lucide-react";

export const legalAndGovernmentGPTs: Tool[] = [
  {
    icon: Gavel,
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real life situations as this is a simulation only. Disclaimer: This AI tool is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts. It is not approved for autonomous decision-making or unsupervised deployment. All findings must be reviewed and verified by qualified professionals to ensure accuracy, fairness, and ethical compliance.",
    emoji: "🔍",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "investigation", "forensics", "law enforcement", "criminal analysis"],
    category: "Legal & Government",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Scale,
    title: "Public Defender GPT",
    description: "As your dedicated Public Defender AI, I am an advanced legal assistant designed to support you in all aspects of your defense, including legal research, document drafting, evidence analysis, and trial strategy simulation. My ultimate goal is to assist you and your lawyer in proving your innocence and securing the best possible outcome for your situation.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298533241065532/public_defender.webp",
    tags: ["legal defense", "legal research", "trial strategy", "legal assistance", "criminal defense"],
    category: "Legal & Government",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: FileText,
    title: "Legislation Writer GPT",
    description: "I assist in drafting complete legislation page by page with clear, precise legal language and seamless continuity.",
    emoji: "📜",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    tags: ["legislation", "legal drafting", "policy writing", "government", "legal documents"],
    category: "Legal & Government",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of how AI technology can foster positive change. Imagine the collective benefit if everyone participated! #GPTS4GOOD -How To Guide. ------------------------------------------------------------------------- #BUILDYOURWORLD- Builders Tips and Tricks.",
    emoji: "🤝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social services", "government assistance", "public welfare", "social support", "community aid"],
    category: "Legal & Government",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: PenTool,
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool Streamlines Legislative Testimony Process, Promotes Public Engagement in Local Policy. This tool was featured in various news articles such as the CT POST & CT INSIDER",
    emoji: "🗣️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    tags: ["public testimony", "civic engagement", "policy advocacy", "government participation", "legislative process"],
    category: "Legal & Government",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Calendar,
    title: "Legislator Link GPT",
    description: "This music video is inspired by a true story. In response to Connecticut's ban on CBD shops, as a former CBD shop owner, I've developed an AI tool to help you easily connect with legislators in your state or country and get involved in local legislative efforts. Click the link below to access LEGISLATOR LINK GPT. #Democracy #WethePeople",
    emoji: "🏛️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["civic engagement", "legislator contact", "democracy", "political advocacy", "government outreach"],
    category: "Legal & Government",
    rating: 4.6,
    totalVotes: 3567
  }
];
