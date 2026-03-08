
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Video, 
  Mic, 
  FileText, 
  Bot, 
  Zap, 
  Globe, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Camera, 
  Calendar, 
  PenTool, 
  Share2, 
  Star,
  Headphones,
  Image,
  Edit
} from "lucide-react";
import flikiHero from "@/assets/tools/fliki-hero.jpg";
import logoaiHero from "@/assets/tools/logoai-hero.jpg";
import cre8tiveaiHero from "@/assets/tools/cre8tiveai-hero.jpg";
import aiprmHero from "@/assets/tools/aiprm-hero.jpg";
import fiberyHero from "@/assets/tools/fibery-hero.jpg";
import chatmapHero from "@/assets/tools/chatmap-hero.jpg";
import detangleaiHero from "@/assets/tools/detangleai-hero.jpg";
import chatshapeHero from "@/assets/tools/chatshape-hero.jpg";
import dictanoteHero from "@/assets/tools/dictanote-hero.jpg";
import audionotesHero from "@/assets/tools/audionotes-hero.jpg";
import filechatHero from "@/assets/tools/filechat-hero.jpg";
import askcsvHero from "@/assets/tools/askcsv-hero.jpg";
import koffyHero from "@/assets/tools/koffy-hero.jpg";
import click2magicHero from "@/assets/tools/click2magic-hero.jpg";
import coinscreenerHero from "@/assets/tools/coinscreener-hero.jpg";
import sweephyHero from "@/assets/tools/sweephy-hero.jpg";
import kiveHero from "@/assets/tools/kive-hero.jpg";
import vowelHero from "@/assets/tools/vowel-hero.jpg";
import planableHero from "@/assets/tools/planable-hero.jpg";
import trickleHero from "@/assets/tools/trickle-hero.jpg";
import xpeachoHero from "@/assets/tools/xpeacho-hero.jpg";
import miroHero from "@/assets/tools/miro-hero.jpg";
import pixlrHero from "@/assets/tools/pixlr-hero.jpg";
import theneoHero from "@/assets/tools/theneo-hero.jpg";
import imaggaHero from "@/assets/tools/imagga-hero.jpg";

export const designAssistantTools: Tool[] = [
  {
    icon: Video,
    title: "Fliki",
    description: "Create videos from scripts or blog posts using realistic voices in 2 minutes! Transform blog articles into videos. Lifelike Text to Speech Voices. Rich stock media library. Trusted by 30k+ content creators from companies like Google, Meta, Bytedance and Upwork.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://fliki.ai/?via=aiwebtools",
    imageUrl: flikiHero,
    tags: ["video creation", "text to speech", "content creation", "AI voices", "freemium"],
    category: "Video Creation",
    rating: 4.4,
    totalVotes: 25000
  },
  {
    icon: Palette,
    title: "LogoAI",
    description: "LogoAi is an AI powered logo maker and brand automation platform that can help small businesses create professional logos, design matching identities, and automate brand promotion with on-brand social media content.",
    emoji: "🎨",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://logo.com/?via=aiwebtools",
    imageUrl: logoaiHero,
    tags: ["logo design", "branding", "AI design", "business", "freemium"],
    category: "Design AI",
    rating: 4.2,
    totalVotes: 18000
  },
  {
    icon: MessageSquare,
    title: "ChatMap",
    description: "ChatGPT on a 2-Dimensional Map. ChatMap uses Chat GPT-2D, which enables users to navigate branching AI conversations interactively. Users can pose contextual questions based on AI responses.",
    emoji: "🗺️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.mymap.ai/?via=aiwebtools",
    imageUrl: chatmapHero,
    tags: ["conversational AI", "chat interface", "interactive", "branching conversations", "freemium"],
    category: "AI Chat",
    rating: 4.1,
    totalVotes: 12000
  },
  {
    icon: FileText,
    title: "DetangleAI",
    description: "Detangle gives you AI-generated summaries of your legal docs so you can actually understand them. Perfect for making legal documents accessible to everyone.",
    emoji: "⚖️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://detangle.ai/?via=aiwebtools",
    imageUrl: detangleaiHero,
    tags: ["legal AI", "document analysis", "summaries", "legal tech", "freemium"],
    category: "Legal AI",
    rating: 4.3,
    totalVotes: 8000
  },
  {
    icon: Bot,
    title: "ChatShape",
    description: "Chatshape lets you train a custom AI chatbot on the content of your website (or private content) in minutes, then you can take that chatbot and embed it on your website. Update the prompt, behavior, and more of the AI to suit your customers needs.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.chatshape.com/?via=aiwebtools",
    imageUrl: chatshapeHero,
    tags: ["custom chatbot", "website integration", "AI training", "customer service", "freemium"],
    category: "Chatbot Creation",
    rating: 4.0,
    totalVotes: 15000
  },
  {
    icon: Image,
    title: "Cre8tiveAI",
    description: "cre8tiveAI(creative AI) is online AI platform which revolutionize creative retouching work such as photo and video editing. This suite is specifically designed for anime character creation.",
    emoji: "🎭",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://cre8tiveai.com/?via=aiwebtools",
    imageUrl: cre8tiveaiHero,
    tags: ["photo editing", "anime creation", "creative AI", "image enhancement", "freemium"],
    category: "Creative AI",
    rating: 4.2,
    totalVotes: 22000
  },
  {
    icon: Zap,
    title: "AIPRM",
    description: "The Ultimate Time Saver for ChatGPT 1-Click Prompts in ChatGPT for SEO, Marketing, Copywriting, productivity, and more. The AIPRM extension adds easy to use list of curated prompt templates for ChatGPT curated for you by a community of prompt engineering experts. This is a chrome extension that is free.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj?via=aiwebtools",
    imageUrl: aiprmHero,
    tags: ["ChatGPT enhancement", "prompt templates", "productivity", "chrome extension", "free"],
    category: "Productivity",
    rating: 4.6,
    totalVotes: 45000
  },
  {
    icon: Mic,
    title: "Dictanote",
    description: "Type using Speech-To-Text Dictanote is a notes app with speech recognition integrated, making it easy for you to voice type your notes. Get it now for free.",
    emoji: "🗣️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://dictanote.co/?via=aiwebtools",
    imageUrl: dictanoteHero,
    tags: ["speech to text", "note taking", "voice typing", "transcription", "freemium"],
    category: "Productivity",
    rating: 4.1,
    totalVotes: 19000
  },
  {
    icon: Headphones,
    title: "AudioNotes",
    description: "Convert your voice notes into accurate and well-structured text and high-quality content within seconds. Search through your notes, tag them, and share them with your friends. Easily accessible on the web and mobile. Transcribe you voice into notes and compile and organize them with AI.",
    emoji: "🎧",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.audionotes.app/?gr_pk=VQ1w&gr_uid=5q8A&via=aiwebtools",
    imageUrl: audionotesHero,
    tags: ["voice notes", "transcription", "note organization", "AI compilation", "freemium"],
    category: "Productivity",
    rating: 4.4,
    totalVotes: 16000
  },
  {
    icon: FileText,
    title: "Filechat",
    description: "Filechat is the perfect tool to explore documents using artificial intelligence. Simply upload your PDF and start asking questions.",
    emoji: "📄",
    color: "from-red-500 to-pink-600",
    directUrl: "https://filechatai.com/?via=aiwebtools",
    imageUrl: filechatHero,
    tags: ["document AI", "PDF analysis", "question answering", "file exploration", "freemium"],
    category: "Document AI",
    rating: 4.2,
    totalVotes: 11000
  },
  {
    icon: BarChart3,
    title: "AskCSV",
    description: "AskCSV is an interactive analysis tool that uses the ChatGPT engine to provide questions and answers about data by loading CSV directly into your browser. It's secure way to analyse data without uploading, it useful for both personal and business purposes.",
    emoji: "📊",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.askcsv.com/?via=aiwebtools",
    imageUrl: askcsvHero,
    tags: ["data analysis", "CSV analysis", "ChatGPT integration", "secure analysis", "freemium"],
    category: "Data Analysis",
    rating: 4.0,
    totalVotes: 9000
  },
  {
    icon: Globe,
    title: "Koffy",
    description: "A web application similar to a daily newspaper that allows you to be aware of the entire cryptocurrency ecosystem. Our solution includes a clear data header on the market, news summarized by our AI, and a market thermometer on social networks.",
    emoji: "☕",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://koffy.finance/?via=aiwebtools",
    imageUrl: koffyHero,
    tags: ["cryptocurrency", "AI news", "market analysis", "fintech", "freemium"],
    category: "Finance AI",
    rating: 3.9,
    totalVotes: 7000
  },
  {
    icon: MessageSquare,
    title: "Click2Magic",
    description: "Click2Magic is a Customer Live chat support Application. Talk to your customers and ensure seamless support with quick and commendable new features. A smart new way to reach your customers.",
    emoji: "💬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.click2magic.com/?via=aiwebtools",
    imageUrl: click2magicHero,
    tags: ["customer support", "live chat", "customer service", "communication", "freemium"],
    category: "Customer Service",
    rating: 4.1,
    totalVotes: 13000
  },
  {
    icon: BarChart3,
    title: "CoinScreener",
    description: "CoinScreener offers accurate real-time data on the crypto market and the signal generated by AI. The insights with powerful technical analysis tools help traders get opportunities to maximize their profit. - AI signals - Whale Alert - Top Traders Alert - Unusual volume - And more to discover.",
    emoji: "🪙",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.coinscreener.ai/?via=aiwebtools",
    imageUrl: coinscreenerHero,
    tags: ["cryptocurrency", "trading signals", "AI analysis", "market data", "freemium"],
    category: "Finance AI",
    rating: 4.2,
    totalVotes: 14000
  },
  {
    icon: BarChart3,
    title: "Sweephy",
    description: "Sweephy is a SaaS platform that enables the creation of value from data using the latest open-source machine learning, and natural language processing models without the need for code knowledge. It also plays a role in cleaning and organizing data.",
    emoji: "🧹",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.sweephy.com/?via=aiwebtools",
    imageUrl: sweephyHero,
    tags: ["data cleaning", "machine learning", "no-code", "data organization", "freemium"],
    category: "Data AI",
    rating: 4.0,
    totalVotes: 8000
  },
  {
    icon: Image,
    title: "Kive",
    description: "Kive is an AI-powered creative collaboration platform to manage inspiration, build powerful archives or work together on planning creative projects. Fast, accurate search. Search through images you have saved with a simple prompt. This AI scans images and allows for you to not organize by filename but rather search by image content. Forget filenames. Search image content.",
    emoji: "🗂️",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.kive.ai/?via=aiwebtools",
    imageUrl: kiveHero,
    tags: ["creative collaboration", "image search", "content management", "visual search", "freemium"],
    category: "Creative Tools",
    rating: 4.3,
    totalVotes: 17000
  },
  {
    icon: Users,
    title: "Fibery",
    description: "Fibery is a work and knowledge platform for startups. It unites research, software development, marketing, and CRM and allows to have an uninterrupted workflow from an idea to IPO.",
    emoji: "🏢",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://fibery.io/?via=aiwebtools",
    imageUrl: fiberyHero,
    tags: ["startup platform", "workflow management", "CRM", "knowledge management", "freemium"],
    category: "Business Tools",
    rating: 4.1,
    totalVotes: 12000
  },
  {
    icon: Video,
    title: "Vowel",
    description: "Vowel is a video conferencing platform with AI-generated meeting summaries, recording, live transcript, universal search of meeting content, and more! Startups 10x the value of their meetings by turning them into searchable, shareable knowledge.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://workspace-9joqkpl.vowel.com/home?via=aiwebtools",
    imageUrl: vowelHero,
    tags: ["video conferencing", "meeting summaries", "transcription", "collaboration", "freemium"],
    category: "Video Conferencing",
    rating: 4.2,
    totalVotes: 15000
  },
  {
    icon: Calendar,
    title: "Planable",
    description: "Planable is the command center for your social media team. Create and plan social media campaigns, collaborate on content with your team and clients. Make sure every post is perfect and approved before going live. Easily publish and schedule content on supported social media platforms (Facebook, Twitter, LinkedIn, Instagram). If you plan content in sheets or task managers, this is for you.",
    emoji: "📅",
    color: "from-green-500 to-blue-600",
    directUrl: "https://planable.io/?via=aiwebtools",
    imageUrl: planableHero,
    tags: ["social media management", "content planning", "team collaboration", "scheduling", "freemium"],
    category: "Social Media",
    rating: 4.4,
    totalVotes: 28000
  },
  {
    icon: Users,
    title: "Trickle",
    description: "Trickle revolutionizes your team's collaboration and communication by seamlessly integrating AI power. With AI assistants at your fingertips, access information, spark inspiration, and drive project progress effortlessly.",
    emoji: "💧",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.trickle.so/?via=aiwebtools",
    imageUrl: trickleHero,
    tags: ["team collaboration", "AI assistants", "communication", "project management", "freemium"],
    category: "Collaboration",
    rating: 4.0,
    totalVotes: 9000
  },
  {
    icon: Mic,
    title: "Xpeacho",
    description: "Instantly Transform Any Text Into A 100% Human-Sounding Voiceover with only 3 clicks, The only A.I. Text-To-Speech that is created especially for VIDEO CREATORS. Which Will Help You To generate Real Human Like Professional Voice-Overs.",
    emoji: "🎙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://xpeacho.com/?via=aiwebtools",
    imageUrl: xpeachoHero,
    tags: ["text to speech", "voiceover", "video creation", "AI voice", "freemium"],
    category: "Audio Generation",
    rating: 4.1,
    totalVotes: 11000
  },
  {
    icon: PenTool,
    title: "Miro",
    description: "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
    emoji: "🗂️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://miro.com/?via=aiwebtools",
    imageUrl: miroHero,
    tags: ["collaborative whiteboard", "brainstorming", "visual collaboration", "team work", "freemium"],
    category: "Collaboration",
    rating: 4.5,
    totalVotes: 89000
  },
  {
    icon: Image,
    title: "Pixlr",
    description: "Pixlr is a provider of cloud-based photo editing services, delivering editing capabilities in the browsers for both consumers and companies. Pixlr provides a platform for many kinds of 3rd-party integrations.",
    emoji: "📸",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://pixlr.com/?via=aiwebtools",
    imageUrl: pixlrHero,
    tags: ["photo editing", "cloud-based", "browser editing", "image manipulation", "freemium"],
    category: "Photo Editing",
    rating: 4.3,
    totalVotes: 67000
  },
  {
    icon: FileText,
    title: "Theneo",
    description: "Theneo is an AI tool that generates Stripe-like API docs. Our ML models take care of tedious manual work in generating and publishing API docs, making them much easier to produce—less technically demanding for writers and less writing-intensive for developers. Generate Stripe-like API docs in seconds. Unlock the full potential of AI-powered API documentation: Create stunning, low-maintenance, and engaging docs with a single upload.",
    emoji: "📚",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.theneo.io/?via=aiwebtools",
    imageUrl: theneoHero,
    tags: ["API documentation", "technical writing", "developer tools", "documentation AI", "freemium"],
    category: "Developer Tools",
    rating: 4.2,
    totalVotes: 14000
  },
  {
    icon: Image,
    title: "Imagga",
    description: "Imagga Image Recognition API provides solutions for image tagging & categorization, visual search, content moderation. Available in the Cloud and On-Premise.",
    emoji: "👁️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://imagga.com/?via=aiwebtools",
    imageUrl: imaggaHero,
    tags: ["image recognition", "visual search", "content moderation", "API", "freemium"],
    category: "Image AI",
    rating: 4.1,
    totalVotes: 16000
  },
  {
    icon: Calendar,
    title: "Sessions",
    description: "Sessions is redefining hybrid communication by bringing all your collaboration tools in one single place. With our unique agenda designer, all your sessions will be flawlessly organized and always on time, no matter the format or the complexity.",
    emoji: "📋",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.sessions.us/?via=aiwebtools",
    tags: ["meeting management", "agenda design", "hybrid communication", "collaboration", "freemium"],
    category: "Meeting Tools",
    rating: 4.0,
    totalVotes: 8000
  },
  {
    icon: Edit,
    title: "Typed",
    description: "It's a one-stop tool for documentation writing where you can collect/manage resources, set an outline, and write a final draft while referring to collected resources on the side. It's Pocket, Workflowy, Google Docs put into one tool, only in a better form.",
    emoji: "📝",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://typed.do/?via=aiwebtools",
    tags: ["documentation", "writing tool", "resource management", "outline creation", "freemium"],
    category: "Writing Tools",
    rating: 4.1,
    totalVotes: 12000
  },
  {
    icon: Star,
    title: "ThoughtfulPost",
    description: "A new way to find gifts together! ThoughtfulPost organizes your social circles, tracks special moments, and suggests thoughtful & meaningful gifts to help you enrich your relationships. We use surveys, filled out by friends & family, as well as machine learning to recommend unique gifts that people will love.",
    emoji: "🎁",
    color: "from-pink-500 to-red-600",
    directUrl: "https://thoughtfulpost.com/?via=aiwebtools",
    tags: ["gift recommendations", "social circles", "relationship management", "machine learning", "free"],
    category: "Lifestyle",
    rating: 4.2,
    totalVotes: 7000
  },
  {
    icon: Share2,
    title: "Publer",
    description: "✨ Your virtual Social Media Superhero ✨ 📍 All major social channels managed from the same spot. 🛠️ Tools to schedule, analyze & collaborate on content. 🕵🏻‍♂️ Unique features that help customize posts in detail. 🧑🏻‍💻 Practical solutions built around user feedback.",
    emoji: "🦸",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://publer.io/?via=aiwebtools",
    tags: ["social media management", "content scheduling", "analytics", "collaboration", "freemium"],
    category: "Social Media",
    rating: 4.3,
    totalVotes: 25000
  },
  {
    icon: Zap,
    title: "typedesk",
    description: "Solo entrepreneurs and small teams reclaim several hours each week thanks to typedesk allowing text shortcuts. Create text shortcuts that work across all your apps and websites for all your repetitive text content! Forget manual copy & paste, ditch repetitive typing!",
    emoji: "⌨️",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://www.typedesk.com/?via=aiwebtools",
    tags: ["text shortcuts", "productivity", "automation", "typing efficiency", "freemium"],
    category: "Productivity",
    rating: 4.4,
    totalVotes: 18000
  },
  {
    icon: BarChart3,
    title: "Markopolo AI",
    description: "Markopolo AI is a cross-channel advertising SaaS capable of automating PPC campaigns in Facebook, Google, and Instagram. We've integrated GPT-3 based ad creation within it as an add-on so that users can experience an end-to-end digital advertising solution.",
    emoji: "📈",
    color: "from-red-500 to-orange-600",
    directUrl: "https://app.markopolo.ai/signup?ref=ymu5nmm&via=aiwebtools",
    tags: ["advertising automation", "PPC campaigns", "GPT-3 integration", "cross-channel", "paid"],
    category: "Marketing AI",
    rating: 4.0,
    totalVotes: 9000
  },
  {
    icon: Share2,
    title: "Hypefury",
    description: "Hypefury is a social media automation tool that allows you to schedule and publish posts on various social media platforms, including Twitter, Instagram, and LinkedIn. The tool also offers a range of features to help you optimize your social media strategy and grow your audience.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://hypefury.com/?via=aiwebtools",
    tags: ["social media automation", "scheduling", "audience growth", "multi-platform", "freemium"],
    category: "Social Media",
    rating: 4.2,
    totalVotes: 21000
  },
  {
    icon: Headphones,
    title: "WonderCraft AI",
    description: "Embrace the AI Revolution in podcasting. Turn existing content into captivating podcasts, effortlessly. Transform your written content into professional-quality audio content with AI-powered voice generation.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.wondercraft.ai/?via=aiwebtools",
    tags: ["podcast creation", "content transformation", "AI voice", "audio generation", "freemium"],
    category: "Audio Generation",
    rating: 4.3,
    totalVotes: 15000
  },
  {
    icon: Video,
    title: "WINDSOR.IO",
    description: "Personalized AI Videos to Boost Email and SMS. Record one video and use Windsor's AI platform to send millions of personalized videos to your customers. Scale personal communication with AI-powered video personalization.",
    emoji: "📹",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.windsor.io/?via=aiwebtools",
    tags: ["personalized video", "email marketing", "SMS marketing", "AI personalization", "paid"],
    category: "Video Marketing",
    rating: 4.1,
    totalVotes: 12000
  },
  {
    icon: Edit,
    title: "ARTIRO",
    description: "Create unique and engaging content that will increase conversions and drive sales. Welcome to ARTIRO, AI powered content generator - Create from prompts articles for blogs. Advertisement, SEO, FAQS, Hashtags, SmartBots unlimited, better than ChatGPT connected to Internet and trained to focus on a specific role. With 3.5 GPT and Davinci Smart Bots are free, not necessary to create an account, you can test it Later users will be able to create them own chatbots under membership.",
    emoji: "🎨",
    color: "from-gradient-start to-gradient-end",
    directUrl: "https://botsartiro.cavernatecnologica.net/?via=aiwebtools",
    tags: ["content generation", "SEO", "blog writing", "smart bots", "freemium"],
    category: "Content AI",
    rating: 3.9,
    totalVotes: 6000
  },
  {
    icon: Bot,
    title: "Robotalk",
    description: "Robotalk Is A Smart And Powerful AI Application That Transfers Infinite Knowledge And Capability From Robot To Human. Experience advanced AI conversation and knowledge transfer.",
    emoji: "🤖",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://robotalk.ai/?via=aiwebtools",
    tags: ["AI conversation", "knowledge transfer", "smart AI", "robot AI", "freemium"],
    category: "AI Assistant",
    rating: 3.8,
    totalVotes: 5000
  },
  {
    icon: PenTool,
    title: "Uizard",
    description: "Design digital products, mobile apps, website mockups, and wireframes in minutes with Uizard, the world's first AI-powered design tool! Sign up today and transform your design process with artificial intelligence.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://uizard.io/?transaction_id=102a5f0a69393a767ecb22245af103&offer_id=3&affiliate_id=109&utm_campaign=affiliates&utm_term=AI+WEB+TOOLS&utm_source=affilate_&utm_medium=affiliate&via=aiwebtools",
    tags: ["design tool", "mockups", "wireframes", "AI design", "app design", "freemium"],
    category: "Design AI",
    rating: 4.2,
    totalVotes: 32000
  }
];
