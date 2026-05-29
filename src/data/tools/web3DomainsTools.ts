import { Tool } from "@/types/tools";
import { Globe } from "lucide-react";

// Common Web3 tags for all domain tools - ensures they appear in web3/crypto/decentralized searches
const WEB3_COMMON_TAGS = [
  // Core Web3 terms
  "WEB3", "web 3", "web3 domain", "web3 domains", "decentralized", "decentralised", "blockchain", "crypto", "cryptocurrency", 
  "NFT", "wallet", "future of finance", "digital asset", "decentralized banking", "fair world", "financial freedom", "decentralized finance", "defi",
  // Wallet mentions
  "metamask", "phantom", "coinbase wallet", "phantom wallet", "trust wallet",
  // Domain/registration terms
  "domain", "domain name", "register domain", "buy domain", "nft domain", "blockchain domain", "freename",
  // Search variations
  "decentralized web", "crypto domain", "web3 banking", "digital domain", "crypto wallet", "nft marketplace"
];

// Common video for all Web3 domain tools
const WEB3_VIDEO_URL = "https://youtu.be/Aq5R2ZrOdco";

export const web3DomainsTools: Tool[] = [
  {
    icon: Globe,
    title: ".ai-tools Domain",
    description: "🧠 Secure the premium .ai-tools domain and lead the AI revolution. Perfect for AI tool directories, platforms, and cutting-edge technology companies building the future.",
    emoji: "🧠",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/ai-tools?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".ai-tools", "ai-tools", "ai tools domain", "Domain", "AI", "Future Tech", "Solana"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Solana"
  },
  {
    icon: Globe,
    title: ".aiwebtools Domain",
    description: "🤖 Own the .aiwebtools domain and establish your presence in the AI web tools ecosystem. Ideal for AI platforms, development tools, and innovative web solutions.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/.aiwebtools?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".aiwebtools", "aiwebtools", "aiwebtools domain", "Domain", "AI Tools", "Web Development", "Innovation", "Solana"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Solana"
  },
  {
    icon: Globe,
    title: ".aimainframe Domain",
    description: "🗄️ Command the digital future with the .aimainframe domain. Perfect for AI infrastructure, enterprise solutions, and next-generation computing platforms.",
    emoji: "🗄️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/aimainframe?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".aimainframe", "aimainframe", "aimainframe domain", "Domain", "AI Infrastructure", "Enterprise", "Computing", "Solana"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Solana"
  },
  {
    icon: Globe,
    title: ".aitoolscompany Domain",
    description: "🏢 Establish your AI empire with the .aitoolscompany domain. Perfect for AI startups, tech companies, and businesses leading the artificial intelligence revolution.",
    emoji: "🏢",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/aitoolscompany?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".aitoolscompany", "aitoolscompany", "aitoolscompany domain", "Domain", "AI Company", "Business", "Startup", "Solana"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Solana"
  },
  {
    icon: Globe,
    title: ".robotsales Domain",
    description: "🦾 Dominate the robotics marketplace with the .robotsales domain. Ideal for robotic sales platforms, automation companies, and the future of commerce.",
    emoji: "🦾",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/robotsales?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".robotsales", "robotsales", "robot sales domain", "Domain", "Robotics", "Sales", "Automation", "Polygon"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".robotshop Domain",
    description: "🛍️ Build the ultimate robotics shopping destination with the .robotshop domain. Perfect for robotic retail, automated commerce, and futuristic marketplaces.",
    emoji: "🛍️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/robotshop?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".robotshop", "robotshop", "robot shop domain", "Domain", "Robot Shop", "E-commerce", "Future Commerce", "Polygon"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".robotstore Domain",
    description: "🛒 Create the premier robotics store with the .robotstore domain. Ideal for robotic retail platforms, automation stores, and next-generation shopping experiences.",
    emoji: "🛒",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/robotstore?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".robotstore", "robotstore", "robot store domain", "Domain", "Robot Store", "Retail", "Technology", "Polygon"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".worldpeace Domain",
    description: "🕊️ Buy and own your .worldpeace domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address. Compatible with Phantom, Coinbase Wallet, MetaMask, and more.",
    emoji: "🕊️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/worldpeace?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".worldpeace", "worldpeace", "world peace", "world peace domain", "Domain", "World Peace", "Humanitarian", "Global Unity", "Polygon", "peace"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".worldtrade Domain",
    description: "🌐 Buy and own your .worldtrade domain as a tradable NFT minted to your wallet of choice. Resell it, link it to your website, and send/receive crypto with a human-readable address. Compatible with Phantom, Coinbase Wallet, MetaMask, and more.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/worldtrade?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".worldtrade", "worldtrade", "world trade", "world trade domain", "Domain", "World Trade", "Global Commerce", "International Business", "Solana", "trade", "trading"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Solana"
  },
  {
    icon: Globe,
    title: ".worldtrader Domain",
    description: "💹 Master global financial markets with the .worldtrader domain. Perfect for trading platforms, financial services, and revolutionary investment technologies.",
    emoji: "💹",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/worldtrader?ref=olive-ears-obey",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".worldtrader", "worldtrader", "world trader", "world trader domain", "Domain", "World Trading", "Finance", "Investment", "Polygon", "trader", "trading"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".transfermoney Domain",
    description: "💸 Revolutionize financial transfers with the .transfermoney domain. Perfect for fintech platforms, money transfer services, and next-generation payment solutions.",
    emoji: "💸",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/transfermoney",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".transfermoney", "transfermoney", "transfer money", "transfer money domain", "Domain", "Money Transfer", "Fintech", "Payments", "Polygon", "send money", "remittance"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".transfercoin Domain",
    description: "🪙 Command the cryptocurrency transfer space with the .transfercoin domain. Perfect for crypto exchanges, blockchain platforms, and digital asset transfer services.",
    emoji: "🪙",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/transfercoin",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".transfercoin", "transfercoin", "transfer coin", "transfer coin domain", "Domain", "Cryptocurrency", "Digital Assets", "Polygon", "send crypto", "crypto transfer"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".cointransfer Domain",
    description: "💰 Secure the .cointransfer domain for your cryptocurrency business. Ideal for digital coin transfer services, crypto payment platforms, and blockchain financial solutions.",
    emoji: "💰",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/cointransfer",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".cointransfer", "cointransfer", "coin transfer", "coin transfer domain", "Domain", "Coin Transfer", "Crypto Payments", "Blockchain Finance", "Polygon", "crypto exchange"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".transfercash Domain",
    description: "💵 Own the .transfercash domain for cash transfer services. Perfect for money remittance platforms, cash payment systems, and financial transfer solutions.",
    emoji: "💵",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/transfercash",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".transfercash", "transfercash", "transfer cash", "transfer cash domain", "Domain", "Cash Transfer", "Money Remittance", "Financial Services", "Polygon", "cash app", "payment"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  },
  {
    icon: Globe,
    title: ".cashtransfer Domain",
    description: "💴 Secure the .cashtransfer domain for your financial platform. Ideal for cash remittance services, money transfer apps, and digital cash solutions.",
    emoji: "💴",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://freename.io/discover/cashtransfer",
    videoUrl: WEB3_VIDEO_URL,
    tags: [...WEB3_COMMON_TAGS, ".cashtransfer", "cashtransfer", "cash transfer", "cash transfer domain", "Domain", "Cash Remittance", "Money Transfer", "Digital Cash", "Polygon", "send cash", "payment app"],
    category: "WEB3 Domains",
    rating: 5.0,
    blockchain: "Polygon"
  }
];
