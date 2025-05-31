
import { Tool } from "@/types/tools";
import { 
  Wrench, 
  Calculator, 
  Clock, 
  FileText, 
  Search, 
  Database,
  Settings,
  Zap,
  Target,
  BarChart3,
  Brain,
  Lightbulb,
  Binary
} from "lucide-react";

export const utilityAndProductivityGPTs: Tool[] = [
  {
    icon: Search,
    title: "AI Tools Finder GPT",
    description: "Your own personal expert in the world of Ai Tools and knowledge. Locate the best Ai tools for your projects and be presented with step by step guides on any Ai tool that exists.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    tags: ["ai tools", "tool finder", "ai discovery", "productivity tools", "tool search", "aiwebtools"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: FileText,
    title: "Legal Draftsmith GPT",
    description: "Legal Draftsmith GPT by AI Web Tools LLC is your specialized AI-powered legal document creation assistant, bringing precision and professionalism to legal writing through advanced AI technology and comprehensive legal knowledge. This expert tool transforms complex legal concepts into clear, properly formatted documents that meet professional standards and legal requirements. Whether you're drafting contracts, legal briefs, memorandums, or other legal documents, Legal Draftsmith GPT provides expert guidance on structure, language, and formatting that ensures your documents are legally sound and professionally presented. The AI analyzes legal precedents, applies appropriate terminology, and ensures compliance with standard legal formatting requirements while adapting to specific jurisdictional needs. Input your document requirements, case details, or legal objectives to receive professionally drafted documents with proper citations, clause structures, and legal language. Features include document template generation, legal citation formatting, clause optimization, jurisdictional compliance checking, and comprehensive legal writing guidance. Perfect for legal professionals seeking efficient document creation, law students learning legal writing skills, and small businesses needing basic legal documentation. This tool streamlines the legal writing process while maintaining the precision and attention to detail required in legal practice.",
    emoji: "⚖️",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    tags: ["legal drafting", "legal documents", "legal assistance", "document creation", "legal writing"],
    category: "Utility & Productivity",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Lightbulb,
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "Custom GPT Ideas & Brainstorming Assistant by AI Web Tools LLC is your creative AI-powered innovation companion, designed to spark brilliant ideas and transform concepts into actionable GPT implementations. This dynamic brainstorming tool unleashes your creativity by generating unique GPT concepts, providing detailed implementation guidance, and helping you develop custom AI solutions for specific needs and industries. Whether you're an entrepreneur seeking innovative business solutions, a developer planning AI tools, or a creative professional exploring new possibilities, this assistant provides comprehensive ideation support and practical development guidance. The AI analyzes market opportunities, identifies unique use cases, and suggests implementation strategies that turn creative concepts into successful AI applications. Input your interests, target audience, or problem statements to receive detailed GPT concepts with features, monetization strategies, and development roadmaps. Features include market gap analysis, feature specification, technical implementation guidance, user experience optimization, and comprehensive project planning. Perfect for AI entrepreneurs launching new tools, developers seeking project inspiration, and innovators exploring AI applications. This tool transforms abstract ideas into concrete, actionable plans that bridge the gap between imagination and implementation.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    tags: ["GPT creation", "brainstorming", "idea generation", "AI assistant", "custom tools"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Binary,
    title: "Binary-Text-Image Converter GPT",
    description: "Binary-Text-Image Converter GPT by AI Web Tools LLC is your comprehensive AI-powered digital conversion tool, making complex binary operations accessible and enjoyable for users of all technical levels. This innovative utility transforms the intimidating world of binary code into an intuitive, user-friendly experience that bridges the gap between human language and computer communication. Whether you're learning programming fundamentals, encoding messages for security purposes, or exploring computer science concepts, this tool provides seamless conversion between text, binary, and image formats. The AI handles complex conversion algorithms while presenting results in clear, understandable formats that make digital communication concepts accessible to everyone. Input text to see its binary representation, convert binary back to readable text, or explore image-to-binary conversions for educational purposes. Features include multi-format conversion support, educational explanations, batch processing capabilities, encoding verification, and comprehensive format compatibility. Perfect for students learning computer science fundamentals, developers working with binary data, educators teaching digital literacy, and anyone curious about how computers process information. This tool demystifies binary code and makes the language of computers accessible to everyone.",
    emoji: "🔢",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["binary conversion", "text conversion", "coding utilities", "data conversion", "programming tools"],
    category: "Utility & Productivity",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Zap,
    title: "King Blueberry GPT",
    description: "King Blueberry GPT by AI Web Tools LLC is your revolutionary AI-powered operational optimization tool, transforming complex English instructions into elegant algebraic variables and mathematical frameworks that streamline workflows and enhance productivity. This innovative tool reimagines how we approach operational efficiency by converting natural language processes into mathematical representations that can be analyzed, optimized, and automated. Whether you're managing business operations, optimizing workflows, or developing systematic approaches to complex tasks, King Blueberry GPT provides unique algebraic insights that reveal hidden patterns and optimization opportunities within your operations. The AI analyzes operational descriptions, identifies key variables and relationships, and creates mathematical models that clarify process dependencies and performance metrics. Input your operational challenges, workflow descriptions, or process optimization goals to receive algebraic representations, optimization suggestions, and systematic improvement recommendations. Features include process algebraic modeling, variable identification, optimization pathway analysis, efficiency measurement frameworks, and systematic improvement planning. Perfect for operations managers seeking optimization insights, business analysts developing process models, and anyone interested in mathematical approaches to operational excellence. Transform your operational thinking with the unique perspective that algebraic representation provides.",
    emoji: "👑",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=U8TLg15RTg8",
    tags: ["algebraic conversion", "mathematical operations", "language processing", "automation", "productivity"],
    category: "Utility & Productivity",
    rating: 4.5,
    totalVotes: 3678
  }
];
