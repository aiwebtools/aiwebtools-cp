
import { Tool } from "@/types/tools";
import { 
  Palette, 
  PenTool, 
  Film, 
  Music, 
  Camera, 
  Brush,
  Image,
  Gamepad2,
  Star,
  Coffee,
  Shirt,
  Users,
  Eye,
  Paintbrush
} from "lucide-react";

export const creativeServices: Tool[] = [
  {
    icon: Palette,
    title: "Graphic Designer GPT",
    description: "AI-powered graphic design assistant for creating logos, branding materials, and visual content with professional design principles.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://graphicdesignergpt.lovable.app/?via=aiwebtools",
    tags: ["graphic design", "logos", "branding", "visual content", "design"],
    category: "Creative Services",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Camera,
    title: "Photography Assistant GPT",
    description: "Professional photography AI assistant providing composition tips, lighting guidance, and photo editing recommendations.",
    emoji: "📸",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://photographygpt.lovable.app/?via=aiwebtools",
    tags: ["photography", "composition", "lighting", "photo editing", "visual arts"],
    category: "Creative Services",
    rating: 4.2,
    totalVotes: 2134
  },
  {
    icon: Music,
    title: "Music Producer GPT",
    description: "AI music production assistant for composers, producers, and musicians, offering composition guidance and production tips.",
    emoji: "🎵",
    color: "from-green-500 to-blue-600",
    directUrl: "https://musicproducergpt.lovable.app/?via=aiwebtools",
    tags: ["music production", "composition", "audio", "music", "sound design"],
    category: "Creative Services",
    rating: 4.1,
    totalVotes: 1987
  },
  {
    icon: Paintbrush,
    title: "Tattoo Designer GPT",
    description: "Create custom tattoo designs with AI assistance, exploring various styles, themes, and artistic approaches for unique body art.",
    emoji: "🎨",
    color: "from-red-500 to-purple-600",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    category: "Creative Services",
    tags: ["tattoo design", "body art", "creative design", "artistic"],
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Coffee,
    title: "Mixologist GPT",
    description: "Professional bartending assistant for cocktail recipes, drink creation, and mixology techniques for bars and home bartenders.",
    emoji: "🍸",
    color: "from-orange-500 to-red-600",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    category: "Creative Services",
    tags: ["mixology", "cocktails", "bartending", "drinks"],
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: Shirt,
    title: "RESTYLE ME GPT",
    description: "Personal styling and fashion assistant for wardrobe makeovers, outfit coordination, and style recommendations.",
    emoji: "👗",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    category: "Creative Services",
    tags: ["fashion", "styling", "wardrobe", "makeover"],
    rating: 4.5,
    totalVotes: 2087
  },
  {
    icon: Users,
    title: "Celebrity Chatline GPT",
    description: "Interactive celebrity conversation simulator for entertainment, roleplay, and creative storytelling experiences.",
    emoji: "⭐",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    category: "Creative Services",
    tags: ["celebrity", "entertainment", "roleplay", "conversation"],
    rating: 4.2,
    totalVotes: 1765
  },
  {
    icon: Brush,
    title: "Sketch Artist GPT",
    description: "Professional sketch and drawing assistance for creating detailed artwork, portraits, and technical illustrations.",
    emoji: "✏️",
    color: "from-gray-600 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    category: "Creative Services",
    tags: ["sketch", "drawing", "artwork", "illustration"],
    rating: 4.6,
    totalVotes: 2143
  },
  {
    icon: Palette,
    title: "Coloring Book Generator GPT",
    description: "Create custom coloring pages and books for children and adults with various themes and difficulty levels.",
    emoji: "🎨",
    color: "from-rainbow-500 to-pink-600",
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-coloring-page-of-a-robot-with-a-human-like-b.png/:/cr=t:4.3%25,l:0.78%25,w:94.34%25,h:84.09%25/rs=w:1200,h:600,cg:true,m",
    category: "Creative Services",
    tags: ["coloring book", "children", "art", "creative"],
    rating: 4.4,
    totalVotes: 1987
  }
];
