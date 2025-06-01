import { Tool } from "@/types/tools";
import { Film, GraduationCap, Car, Theater, Shield, BookOpen, Paintbrush, Camera, Clock, Users, Zap, Brain, Heart, Briefcase, Music, FileText, Search, Lightbulb, Star, Globe, Gamepad2, TrendingUp, Scale, Palette, CheckCircle, Leaf, Microscope, Home, Fish, Wheat, Diamond, Eye, Gamepad, Wand2, Beaker, Stethoscope, CircuitBoard, Cannabis, Calculator, Book, Gavel, Hammer, Award, PaintBucket, Rocket, Binary, Restaurant, HelpCircle, School, Atom, Trophy, Megaphone, Brush, Moon, Syringe, Scroll, Crown, Utensils, Bot, FlaskConical, Wrench, Coins, Landmark, Trees, History, Gem, Sparkles, Baby, Building2, Target, Coffee, Headphones, Prism, Pizza, Tent, Sunrise, HandCoins, Soup, ClapperBoard, Lightbulb as LightbulbIcon } from "lucide-react";

// FIFTH BATCH - CONTINUING FROM WHERE WE LEFT OFF
const fifthBatchTools: Tool[] = [
  {
    icon: HelpCircle,
    title: "Trivia Night GPT",
    description: "Trivia Night GPT by www.AIwebtools.ai – the ultimate AI-powered trivia showdown! Gather your friends and family, put your knowledge to the test, and dive into an electrifying game featuring history, science, pop culture, and more!",
    emoji: "🎯",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://trivianightgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg",
    tags: ["trivia", "games", "entertainment", "family fun", "quiz night", "aiwebtools"],
    category: "Entertainment & Gaming",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Stethoscope,
    title: "🐾Veterinarian GPT",
    description: "Veterinarian GPT is a compassionate virtual veterinarian simulation offering expert advice on pet health and well-being. It utilizes advanced Ai features to analyze your pet's health and provide tailored care recommendations. This multimodal AI tool allows you to upload data or images of your pets for detailed assessments and receive practical solutions to ensure their optimal health. 🐾 Disclaimer: Veterinarian GPT is for informational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment.",
    emoji: "🐾",
    color: "from-green-500 to-teal-600",
    directUrl: "https://petcaregpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=ElAfvB0yLEI",
    tags: ["veterinary", "pet care", "animal health", "pet advice", "veterinarian", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Cannabis,
    title: "Cannabis GPT",
    description: "Cannabis GPT is a multimodal AI designed for legal cannabis users, growers, and professionals, offering resources on strain genetics, dosing for edibles, and expert advice on cultivation techniques. Users can upload images for insights into plant health and receive updates on regulations, medical research, and product recommendations. It provides guidance on safe consumption, cannabinoid science, and terpene profiles for personalized use. Intended for adults 21+ in legal areas, Cannabis GPT serves as a complete resource for cannabis needs. Disclaimer: Cannabis GPT provides educational content only and is not legal or medical advice.",
    emoji: "🌿",
    color: "from-green-600 to-emerald-500",
    directUrl: "https://cannabisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-a-green-cannab_iUjpW.png",
    tags: ["cannabis", "cultivation", "strain genetics", "medical cannabis", "legal cannabis", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Calculator,
    title: "Probability GPT",
    description: "Discover the truth behind any claim with Probability GPT, where speculation ends, and accuracy begins. With precise probability scores and unbiased truth, Probability GPT cuts through the noise of misinformation, guiding you to make informed decisions. As the ultimate AI Truth Seeker, it illuminates uncertainty with clear, definitive answers. Let Probability GPT lead you to certainty, helping you see things as they truly are.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png",
    tags: ["probability", "truth analysis", "statistical analysis", "decision making", "facts", "aiwebtools"],
    category: "Science & Research",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Book,
    title: "LEARN ANY COURSE GPT",
    description: "Learn Any Course GPT is your dedicated AI-powered tutor, here to guide you through comprehensive, step-by-step courses on any subject you choose. Whether you want to master 12th-grade English, dive into advanced coding, or explore a specialized university degree, this tool brings a personalized, classroom-style experience right to your screen. Unlike static resources, Learn Any Course GPT combines rich, text-based explanations, curated YouTube video recommendations, and engaging visuals to deepen your understanding of complex subjects. on any subject you desire! #FreeEducation #EducationForAll #AnyAGE #SelfTaught #BelieveinYourself",
    emoji: "📚",
    color: "from-blue-600 to-indigo-500",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    tags: ["education", "learning", "courses", "tutoring", "self-taught", "aiwebtools"],
    category: "Education & Learning",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: Gavel,
    title: "Public Defender GPT",
    description: "As your dedicated Public Defender AI, I am an advanced legal assistant designed to support you in all aspects of your defense, including legal research, document drafting, evidence analysis, and trial strategy simulation. My ultimate goal is to assist you and your lawyer in proving your innocence and securing the best possible outcome for your situation.",
    emoji: "⚖️",
    color: "from-blue-700 to-purple-600",
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    tags: ["legal defense", "legal research", "court proceedings", "legal assistance", "public defense", "aiwebtools"],
    category: "Legal & Government",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Building2,
    title: "Property Data Finder GPT",
    description: "Property Data Finder GPT by Ai Web Tools LLC delivers unparalleled, precise, and current information about properties. Discover everything from market value and topography to living area, year built, estimated facing direction, geocoordinates, and beyond. Unlock a wealth of property insights like never before!",
    emoji: "🏠",
    color: "from-green-600 to-blue-500",
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    tags: ["real estate", "property analysis", "market data", "property valuation", "real estate research", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Calculator,
    title: "Algebraic Expression Inventor GPT",
    description: "Introducing the Algebraic Expression Inventor GPT—a powerful AI tool designed to help you tackle any mathematical challenge with creativity and precision. Whether you're exploring complex real-world scenarios, solving intricate equations, or inventing entirely new mathematical relationships, this AI is your go-to companion. It excels at understanding your unique problem, defining relevant variables, and crafting custom algebraic expressions tailored to your needs. With the added power of Python, it doesn't just solve equations—it uncovers insights, visualizes data, and offers clear, actionable results. Perfect for students, researchers, and problem-solvers, this tool is ready to push the boundaries of what's possible in mathematics!",
    emoji: "🔢",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png",
    tags: ["mathematics", "algebra", "equations", "problem solving", "mathematical modeling", "aiwebtools"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Zap,
    title: "MULTITASKER GPT",
    description: "You can give me multiple unrelated tasks at once, and I will work to complete them all for you. Fire away!",
    emoji: "⚡",
    color: "from-yellow-500 to-red-600",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    tags: ["multitasking", "productivity", "task management", "versatile AI", "efficiency", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Star,
    title: "Fortune Teller GPT",
    description: "Fortune Teller GPT is an advanced AI-powered analytical tool designed to predict trends, analyze data, and provide insights based on real-world patterns. It combines web searches, statistical modeling, and Python-driven calculations to generate data-backed forecasts on various topics, including economics, technology, resource management, and geopolitical shifts. Unlike traditional fortune-telling, Fortune Teller GPT relies on factual data, historical patterns, and predictive algorithms to uncover likely future outcomes.",
    emoji: "🔮",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png",
    tags: ["predictions", "fortune telling", "data analysis", "trends", "forecasting", "aiwebtools"],
    category: "Mysterious & Unusual",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Gamepad,
    title: "LEARN ANY SKILL GPT",
    description: "Learn Any Skill GPT by AiWebTools.AI is a dynamic AI-powered educational assistant that guides users through learning any skill, from beginner to expert. It combines step-by-step explanations, curated YouTube videos, and web-sourced visuals for an interactive, multimedia learning experience. Designed for adaptability, it breaks down complex topics into manageable modules, ensuring thorough understanding at every stage. Whether mastering practical skills or academic knowledge, Learn Any Skill GPT is your ultimate guide to success.",
    emoji: "🎯",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    tags: ["skill learning", "education", "training", "personal development", "step-by-step", "aiwebtools"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Coins,
    title: "MATERIAL VALUATION GPT",
    description: "Materiumor is a next-generation valuation assistant designed to bring clarity and transparency to the world of physical and digital assets. Whether you're exploring rare metals, precious gems, or digital currencies, Materiumor provides data-informed insights to help you better understand market value, trade opportunities, and economic trends. Our mission is to make material knowledge accessible, equitable, and empowering—so everyone can make informed decisions about their wealth and resources in an evolving global landscape.",
    emoji: "💎",
    color: "from-yellow-600 to-orange-500",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tbZu4vnsY_8",
    tags: ["valuation", "materials", "precious metals", "gems", "market analysis", "aiwebtools"],
    category: "Appraisal & Valuation",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Rocket,
    title: "MicroSaaS GPT",
    description: "MicroSaaS GPT is an AI-powered chat assistant that helps entrepreneurs and startups turn niche-specific ideas into fully structured, ready-to-build SaaS applications. By generating innovative concepts and providing complete development blueprints, it streamlines the journey from ideation to deployment. Designed for speed, scalability, and efficiency, it ensures seamless execution using AI code builders.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png",
    tags: ["SaaS", "startups", "entrepreneurship", "software development", "business ideas", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Atom,
    title: "Albert Einstein GPT",
    description: "Albert Einstein GPT is an advanced AI embodiment of Einstein's intellect, curiosity, and scientific rigor, designed to challenge conventional wisdom, foster deep critical thinking, and explore the mysteries of the universe through physics, mathematics, and philosophical inquiry. It pushes the boundaries of knowledge, encouraging users to question assumptions, analyze reality with scientific precision, and unlock new perspectives through logical reasoning and creative thought experiments.",
    emoji: "🧠",
    color: "from-blue-400 to-purple-600",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=kfGyOfjBI0s",
    tags: ["Einstein", "physics", "scientific thinking", "philosophy", "genius intellect", "aiwebtools"],
    category: "Science & Research",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: History,
    title: "Interpretis 🕰️",
    description: "Interpretis 🕰️ is a powerful tool that explores the deeper meanings behind language, history, and culture. By combining the study of word origins, symbols, and societal influences, it reveals how ideas have evolved and shaped the way we think. It goes beyond simple definitions to uncover hidden connections, stories, and metaphors within words and phrases. Whether examining ancient languages or modern expressions, Interpretis brings clarity to the true meanings behind human expression.",
    emoji: "🕰️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png",
    tags: ["etymology", "language", "history", "culture", "word origins", "aiwebtools"],
    category: "Time & History",
    rating: 4.5,
    totalVotes: 3456
  }
];

// TOP PRIORITY TOOL - MOVIE MAKER STUDIO AI SUITE
const topPriorityTool: Tool = {
  icon: Film,
  title: "Movie Maker Studio AI SUITE",
  description: "We proudly present to you Movie Maker Studio which consists of every tool needed for Movie & Motion Picture Production. Consisting of Movie Scripter Writer, Movie Scene Maker, Movie Trailer Poster Maker & more.....we offer you the key and show you the door, unlock your creativity my fellow humans--KB",
  emoji: "🎬",
  color: "from-purple-500 to-pink-600",
  directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
  videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
  tags: ["movie production", "music videos", "AI director", "cinematic quality", "scene creation", "aiwebtools", "creative suite"],
  category: "Creative & Media",
  rating: 4.9,
  totalVotes: 7234
};

// HIGH PRIORITY FEATURED TOOLS
const highPriorityFeaturedTools: Tool[] = [
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "College Degree GPT teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university. While it doesn't provide an accredited degree, it delivers a full, in-depth educational experience as if you were earning one. We believe that access to education is a fundamental human right, and it should be free for everyone. That's why we've open-sourced the prompt for you to save for your personal records. 🕊️",
    emoji: "🎓",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM&list=TLGGLsn0bAvnp3EyODA1MjAyNQ",
    tags: ["education", "college", "degree", "learning", "free education", "aiwebtools", "academic"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 6892
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Automobile GPT is your ultimate, all-encompassing AI automotive expert, designed to guide you through every aspect of the automotive world with precision. Whether you're searching for the best deals at local dealerships, need detailed repair cost assessments, or seek expert advice on maintenance and upgrades, Automobile GPT offers unmatched accuracy and thoroughness. It's your indispensable partner for making informed, precise decisions about your vehicle.",
    emoji: "🚗",
    color: "from-red-500 to-orange-600",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    tags: ["automotive", "cars", "repairs", "maintenance", "dealerships", "aiwebtools", "vehicle advice"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Theater,
    title: "StageMaster AI Suite",
    description: "A powerful suite of AI tools that transforms every aspect of stage production, from set design to choreography, costume creation to lighting optimization.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    tags: ["stage production", "theater", "choreography", "costume design", "lighting", "aiwebtools", "performing arts"],
    category: "Creative & Media",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "🔒Insurance Claims GPT",
    description: "Insurance Claims GPT by AIWebTools.ai is a cutting-edge AI tool revolutionizing claims management and estimation. It offers a seamless, user-friendly experience, guiding users through every step of the claims process with unparalleled accuracy and efficiency. Leveraging advanced damage analysis and generating comprehensive reports, Insurance Claims GPT ensures precise, professional, and swift insurance claim resolutions.",
    emoji: "🔒",
    color: "from-green-500 to-teal-600",
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    tags: ["insurance", "claims", "damage analysis", "reports", "settlements", "aiwebtools", "professional"],
    category: "Business & Finance",
    rating: 4.8,
    totalVotes: 3892
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Maker GPT",
    description: "Create Magical Picture Books for Children. Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.",
    emoji: "📚",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    tags: ["children's books", "storytelling", "illustrations", "creative writing", "family", "aiwebtools", "publishing"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Paintbrush,
    title: "Tattoo Designer GPT",
    description: "TattooGPT is your all-in-one tattoo and piercing assistant, designed to provide expert guidance in every aspect of body art and modification. From creating unique, high-quality tattoo designs tailored to personal styles and symbolism to assisting tattoo artists and shop owners with business planning, marketing, and compliance, TattooGPT ensures professionalism and precision.",
    emoji: "🎨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    tags: ["tattoo design", "body art", "piercing", "artistic", "business planning", "aiwebtools", "creative"],
    category: "Creative & Media",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "Movie Scene Maker GPT",
    description: "Transform Yourself Into A Movie Star. Become the star of your own cinematic adventure with Movie Scene Maker GPT. Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline. Powered by GPT 4o Image Generation Technology.",
    emoji: "🎥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    tags: ["movie scenes", "personalized", "cinematic", "image generation", "entertainment", "aiwebtools", "GPT-4o"],
    category: "Creative & Media",
    rating: 4.6,
    totalVotes: 2987
  }
];

// ADDITIONAL HIGH PRIORITY TOOLS - NEXT BATCH
const additionalPriorityTools: Tool[] = [
  {
    icon: Clock,
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination. For deeper, more personal conversations with historical characters, we recommend using Talk to History GPT",
    emoji: "⏰",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    tags: ["time travel", "history", "future exploration", "historical figures", "alternative realities", "aiwebtools"],
    category: "Time & History",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "Survivalist GPT",
    description: "Congratulations! You now have a survival expert in your pocket. Imagine a robot with vast knowledge and experience in survival techniques, ready to assist you anytime. This GPT, offers step-by-step guidance, practical strategies, and personalized support for any survival or battlefield scenario. It's the ultimate survival companion, always by your side. Remember, with Survivalist GPT, you're never alone.",
    emoji: "🏕️",
    color: "from-green-500 to-orange-600",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18&list=TLGGkaSLRgubL1gyODA1MjAyNQ",
    tags: ["survival", "wilderness", "emergency preparedness", "outdoor skills", "safety", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Zap,
    title: "ImmortalizeME",
    description: "ImmortalizeMe ™ is an AI service offered by AIWebTools.AI that creates fully interactive digital clones of individuals using their voice, personality, and life stories. The team at AI Web Tools handles the entire process—from voice cloning to knowledge integration—based on the data you provide. Your digital twin can engage in real-time voice conversations and reflect your unique mannerisms and memories. It's a hands-free, done-for-you solution to preserve your legacy for future generations.",
    emoji: "🔮",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    tags: ["digital cloning", "voice cloning", "legacy preservation", "AI personalities", "memory preservation", "aiwebtools"],
    category: "Professional Services",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Brain,
    title: "Movie Script Writer GPT",
    description: "Unlock your creative potential with Movie Scriptwriter GPT, the ultimate AI assistant designed to help you write award-winning movie scripts. Whether you're planning scenes or developing characters, our AI supports you through each stage of the scriptwriting process. It provides professional formatting, detailed descriptions, and captivating dialogue, ensuring your script meets industry standards. Ideal for both new writers and experienced filmmakers, this tool brings your story to life on screen. Begin your path to the red carpet with Movie Scriptwriter GPT.",
    emoji: "📝",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    tags: ["scriptwriting", "movie scripts", "creative writing", "screenwriting", "character development", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Heart,
    title: "Illuminous World Data Explorer GPT",
    description: "Illuminous specializes in data analysis and global data retrieval, designed to make accurate predictions about anything. This GPT offers real-time global data analysis, creating stunning infographics to turn complex information into clear insights and predictions. Illuminate the future of prediction with Illuminous.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Nd1Ui2-VLMU",
    tags: ["data analysis", "global data", "predictions", "infographics", "insights", "aiwebtools"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Briefcase,
    title: "GODMODE GPT",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode GPT",
    emoji: "⚡",
    color: "from-red-500 to-purple-600",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    tags: ["versatile AI", "powerful assistant", "multi-purpose", "advanced capabilities", "godmode", "aiwebtools"],
    category: "Professional Services",
    rating: 4.9,
    totalVotes: 7890
  },
  {
    icon: Music,
    title: "Music Video Maker AI Studio",
    description: "Step into the spotlight with Music Video Maker Studio, the ultimate AI-powered creative suite that transforms your music into cinematic experiences. Our advanced AI director helps you craft stunning, scene-by-scene visuals where you—and even your entire band—take center stage. Bring your sound to life with vivid, hyper-realistic scenes synced perfectly to your music, making every beat a visual masterpiece.",
    emoji: "🎵",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8&list=TLGGHKS5WME8OJ8yODA1MjAyNQ",
    tags: ["music videos", "AI director", "cinematic", "visual creation", "band videos", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: FileText,
    title: "BOOK WRITER GPT",
    description: "Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.",
    emoji: "📖",
    color: "from-blue-600 to-indigo-500",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    tags: ["book writing", "storytelling", "publishing", "creative writing", "literature", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Search,
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history. Interact with any historical figures you imagine and gain unique insights and perspectives straight from the source. Powered by GPT-4o, it's a streamlined way to make history come alive. Perfect for students and enthusiasts alike. This tool is designed for educational and research purposes only by AiWebTools.Ai",
    emoji: "🏛️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5t7EXS5tthQ",
    tags: ["history", "historical figures", "education", "conversation", "research", "aiwebtools"],
    category: "Time & History",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Star,
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Stellaris: AI Space Explorer is a cutting-edge AI designed for space exploration and exoplanet settlement simulations. It provides expert guidance in astrogation, terraforming, and colony planning, and excels in analyzing detailed schematics to offer recommendations based on current mission status. With advanced data analysis and predictive insights, it supports future interstellar missions with precision. Please note that this tool was created for research, educational, and simulation purposes only.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    tags: ["space exploration", "exoplanets", "terraforming", "astronomy", "simulation", "aiwebtools"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Shield,
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real life situations as this is a simulation only. Disclaimer: This AI tool is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts.",
    emoji: "🔍",
    color: "from-red-600 to-gray-700",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "investigation", "forensics", "law enforcement", "analysis", "aiwebtools"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Heart,
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of how AI technology can foster positive change. Imagine the collective benefit if everyone participated! #GPTS4GOOD",
    emoji: "🤝",
    color: "from-green-500 to-blue-500",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social services", "community support", "welfare", "assistance", "social impact", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Resurrection GPT",
    description: "Resurrection GPT offers a unique opportunity to simulate reconnecting with the memories of loved ones who have passed, providing comfort and a sense of presence through simulated conversations. By capturing the essence of those who have departed, this AI tool supports emotional healing and offers closure during times of loss. Disclaimer: The intent of this tool is to provide comfort and emotional support, and it's important to know that, even though it may feel very real, it is a simulation and not a replacement for mental health or grief counseling in a real-life setting.",
    emoji: "🕊️",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nEuxdGO-RZ4&t=4s",
    tags: ["grief support", "memory", "emotional healing", "bereavement", "simulation", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 2345
  },
  {
    icon: Lightbulb,
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection. Additionally, it can execute tasks flawlessly based on the generated prompts. Prompt Perfect Engine is your #1 personal prompt engineer, designed to fit in your pocket and ensure your success.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png",
    tags: ["prompt engineering", "AI optimization", "productivity", "chat enhancement", "AI assistance", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Globe,
    title: "Travel Advisor GPT",
    description: "Plan your next vacation with your personal AI travel advisor. Get tailored recommendations and craft your dream getaway within your preferences, budget, and envisioned experience. Enjoy a stress-free journey with expert guidance every step of the way.",
    emoji: "✈️",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png",
    tags: ["travel planning", "vacation advisor", "trip recommendations", "budget travel", "tourism", "aiwebtools"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 3789
  }
];

// THIRD BATCH - CONTINUING TO ADD MORE AI WEB TOOLS
const thirdBatchTools: Tool[] = [
  {
    icon: FileText,
    title: "Clarity Omni GPT",
    description: "Clarity Omni GPT is an AI tool designed to rewrite text for improved clarity while preserving the original meaning and intent. It can either maintain the exact wording of the input or make adjustments to the wording, tone, and structure to enhance readability. Regardless of the approach, this AI ensures that every detail is retained, delivering a refined version of the text that stays true to the user's purpose.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg",
    tags: ["text rewriting", "clarity enhancement", "content improvement", "writing assistant", "readability", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Gamepad2,
    title: "Engineering GPT AI Suite",
    description: "ENGINEERING GPTs by AiWebTools.Ai is a cutting-edge suite of AI-powered tools designed to provide expert-level support across a wide range of engineering disciplines, including Electrical, Mechanical, Civil, and Software Engineering. These tools deliver comprehensive assistance by offering detailed calculations, design recommendations, optimization strategies, and safety protocols tailored to your specific project needs.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png",
    tags: ["engineering", "technical design", "calculations", "mechanical", "electrical", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "TALK TO THE GODS GPT",
    description: "Talk to the Gods GPT' is a versatile AI chat tool that lets you simulate interacting with deities from any religious backgrounds. Whether you're seeking guidance, wisdom, or comparing world religions, this platform allows you to explore dialogues and gain insights from gods and deities across diverse mythologies. Designed to accommodate any of your inquiries in the persona of your chosen deity, it is powered by GPT-4o. This tool is intended for educational and research purposes only by AiWebTools.Ai",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://talktothegodsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xoUdjZDgplw",
    tags: ["spirituality", "mythology", "religion", "deities", "philosophy", "aiwebtools"],
    category: "Spiritual & Philosophy",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Phenomenon Explorer AI Suite",
    description: "Unveil the unexplained with AI precision using the Phenomenon Explorer AI Suite. This powerful collection of specialized AI tools enables users to investigate paranormal phenomena, document cryptid sightings, analyze supernatural myths, and conduct ghost hunts with scientific accuracy and analytical depth. Whether you're a UFO researcher, a paranormal investigator, a folklore scholar, or just someone intrigued by the unknown, our suite of tools guides you through structured methodologies and evidence-based approaches to uncover the truth behind some of the world's most mysterious occurrences.",
    emoji: "👽",
    color: "from-green-500 to-purple-600",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png",
    tags: ["paranormal", "UFO research", "cryptids", "supernatural", "mysteries", "aiwebtools"],
    category: "Mysterious & Unusual",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Scale,
    title: "Legislation Writer GPT",
    description: "I assist in drafting complete legislation page by page with clear, precise legal language and seamless continuity.",
    emoji: "⚖️",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    tags: ["legislation", "legal writing", "government", "policy", "law drafting", "aiwebtools"],
    category: "Legal & Government",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Palette,
    title: "Graphic & Cover Design GPT",
    description: "Create stunning custom designs, book covers, marketing materials, and more with our AI-powered design assistant. Powered by the new GPT 4o Image Generation Model",
    emoji: "🎨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/2e70f2ce-b17e-4b0f-b5d3-f36c9c22a2e3.png",
    tags: ["graphic design", "book covers", "marketing materials", "AI design", "GPT 4o", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 3567
  },
  {
    icon: CheckCircle,
    title: "FACT CHECKER GPT",
    description: "Fact Checker GPT is a powerful AI tool designed to combat misinformation by analyzing claims, articles, and websites for accuracy, bias, and reliability. It cross-references multiple credible sources, identifies patterns of misinformation, and assigns a truth score to evaluate content validity. By highlighting biases, detecting unreliable sources, and educating users on critical thinking, it empowers informed decision-making.",
    emoji: "✅",
    color: "from-green-500 to-blue-600",
    directUrl: "https://factcheckergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-holding-a-sign-that-_gfexU.png",
    tags: ["fact checking", "misinformation", "truth verification", "bias detection", "critical thinking", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 4234
  },
  {
    icon: Leaf,
    title: "Sustainable Futures GPT",
    description: "I am Sustainable Futures GPT, and my purpose is to assist governments, communities, and individuals in making informed, data-driven decisions to achieve environmental sustainability. I specialize in analyzing global climate data, offering predictions, and providing actionable strategies to reduce environmental impact and regenerate Earth's resources for future harmony with nature.",
    emoji: "🌱",
    color: "from-green-400 to-emerald-600",
    directUrl: "https://sustainablefuturesgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png",
    tags: ["sustainability", "environmental", "climate data", "green solutions", "future planning", "aiwebtools"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Microscope,
    title: "Nikola Tesla GPT",
    description: "Nikola Tesla GPT is a cutting-edge AI tool inspired by the visionary brilliance of Nikola Tesla, designed to investigate scientific mysteries, craft groundbreaking theories, and innovate across disciplines. With advanced capabilities in data analysis, Python modeling, and research synthesis, it uncovers patterns and delivers actionable insights to drive discovery.",
    emoji: "⚡",
    color: "from-blue-400 to-purple-600",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=DR_3MvP7Wws",
    tags: ["scientific research", "innovation", "Tesla", "data analysis", "discovery", "aiwebtools"],
    category: "Science & Research",
    rating: 4.9,
    totalVotes: 5678
  },
  {
    icon: Home,
    title: "Food Quality Inspector GPT",
    description: "Food Quality Inspector GPT by AiWebTools.Ai is your smart companion for grocery shopping, helping you assess food quality, freshness, and safety on the spot. It analyzes ingredients, flags unhealthy or banned substances, and provides clear nutritional insights to guide healthier choices. Whether you're choosing fresh produce or packaged goods, it's like having a food safety and nutrition expert right by your side. 🛒🍎",
    emoji: "🍎",
    color: "from-green-500 to-yellow-500",
    directUrl: "https://foodqualitygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png",
    tags: ["food safety", "nutrition", "grocery shopping", "health", "quality inspection", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Wrench,
    title: "Home Renovator GPT 🏡🔧",
    description: "Home Renovator GPT is your AI-powered home improvement assistant that simplifies every step of your repair or renovation. It provides personalized instructions, accurate cost estimates, and helps you find the best local suppliers and contractors. Upload photos for tailored advice, and get detailed reports with everything you need—from materials to labor costs.",
    emoji: "🏡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://homerenovationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-robot-fixing-a-bathroom-.png",
    tags: ["home renovation", "repairs", "cost estimates", "contractors", "DIY", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Fish,
    title: "Fisherman GPT🎣😊",
    description: "Hi there! 👋 I'm Fisherman GPT, your expert virtual fishing assistant. I specialize in providing detailed, step-by-step guidance for all things related to fishing, from finding the best fishing spots and recommending ideal baits, to sourcing the cheapest gear and calculating trip costs. I can also identify fish species, analyze water conditions, and provide local regulations to ensure you're fully prepared for your trip.",
    emoji: "🎣",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://fishermangpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png",
    tags: ["fishing", "outdoor recreation", "gear advice", "fish identification", "water conditions", "aiwebtools"],
    category: "Professional Services",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Wheat,
    title: "Agronomus AI Farming Expert",
    description: "Ai Farming Expert - Agronomus",
    emoji: "🌾",
    color: "from-green-600 to-yellow-500",
    directUrl: "https://agronomus.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=fFbtPFkRERA",
    tags: ["farming", "agriculture", "crop management", "soil analysis", "farming expert", "aiwebtools"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Diamond,
    title: "Antique and Collectible Appraisal GPT",
    description: "Antique and Collectible Appraisal GPT by AiWebTools.Ai is a powerful AI tool for expert appraisals and valuations of antiques, collectibles, and coins. By analyzing images, engravings, and condition, it delivers precise insights into an item's history, rarity, and market value. Perfect for collectors, sellers, or enthusiasts, it provides professional evaluations and organized, downloadable reports.",
    emoji: "💎",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://antiqueappraisalgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-antique-and-collectibl.png",
    tags: ["antique appraisal", "collectibles", "valuation", "coins", "art history", "aiwebtools"],
    category: "Appraisal & Valuation",
    rating: 4.5,
    totalVotes: 3098
  },
  {
    icon: Eye,
    title: "Oraculum – The Revealer of Hidden \"Truths\"",
    description: "Oraculum reveals hidden systems, symbols, and histories shaping our world. Through historical insight and symbolic wisdom, it helps seekers uncover patterns, expand knowledge, and think critically. Disclaimer: Oraculum is educational, encouraging exploration of hidden truths and reverse perspectives. It was made to show the power of perspective. **IMPORTANT: Its views are interpretive, not absolute fact.",
    emoji: "👁️",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://oraculum.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=dUNrGNj8rhM",
    tags: ["hidden knowledge", "symbolism", "alternative perspectives", "critical thinking", "mysteries", "aiwebtools"],
    category: "Mysterious & Unusual",
    rating: 4.3,
    totalVotes: 2567
  }
];

// FOURTH BATCH OF TOOLS
const fourthBatchTools: Tool[] = [
  {
    icon: Wand2,
    title: "Imagination Traveler GPT",
    description: "Imagination Traveler GPT is an AI-powered creative companion that transforms your ideas into immersive, multi-sensory experiences. Whether you're seeking adventure, relaxation, or inspiration, this tool crafts richly detailed scenarios that engage all your senses—sight, sound, smell, taste, and touch. Perfect for creative writing, meditation, stress relief, or simply exploring new worlds from the comfort of your device.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-person-wearing-a-vr-headset-_Yd9Ug.png",
    tags: ["imagination", "creative writing", "meditation", "sensory experiences", "virtual travel", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Beaker,
    title: "Titanic Resurrections GPT",
    description: "Titanic Resurrections GPT is a powerful AI tool that brings the stories of Titanic passengers and crew to life through detailed historical research and creative storytelling. By analyzing passenger manifests, survivor accounts, and historical records, it creates immersive narratives that honor the memories of those aboard the ill-fated ship. Whether you're seeking to connect with a specific passenger's experience or explore the broader human stories of the tragedy, this tool offers a respectful and educational window into one of history's most significant maritime disasters.",
    emoji: "🚢",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-the-titanic-ship-sailing-on-t_Yd9Ug.png",
    tags: ["Titanic", "historical research", "maritime history", "passenger stories", "historical narratives", "aiwebtools"],
    category: "Time & History",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Scroll,
    title: "Historical Headlines GPT",
    description: "Historical Headlines GPT is an innovative AI tool that transports you through time by creating authentic newspaper front pages from any historical era. Whether you're exploring the Roaring Twenties, the Renaissance, or ancient Rome, this tool crafts historically accurate headlines, articles, and advertisements that capture the language, concerns, and cultural nuances of your chosen period. Perfect for educators, history enthusiasts, writers, and anyone curious about how current events might have been reported in different times.",
    emoji: "📰",
    color: "from-amber-500 to-red-600",
    directUrl: "https://historicalheadlinesgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-old-newspaper-front-page-_Yd9Ug.png",
    tags: ["historical newspapers", "headlines", "time periods", "journalism history", "educational", "aiwebtools"],
    category: "Time & History",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Stethoscope,
    title: "Personalized DR. GPT",
    description: "Personalized DR. GPT is an AI-powered health companion designed to provide tailored health information and wellness guidance based on your specific needs and concerns. While not a replacement for professional medical care, it offers educational insights on health topics, helps you understand medical terminology, and suggests lifestyle adjustments that may support your wellbeing. This tool maintains a comprehensive memory of your health discussions to provide increasingly personalized information over time.",
    emoji: "👨‍⚕️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://personalizeddrgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-medical-office-_Yd9Ug.png",
    tags: ["health information", "wellness", "medical education", "personalized health", "lifestyle guidance", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: CircuitBoard,
    title: "Alchemist Scientist GPT",
    description: "Alchemist Scientist GPT is a cutting-edge AI tool that bridges ancient alchemical wisdom with modern scientific understanding. It explores the historical practices of alchemy while translating their insights into contemporary chemistry, physics, and materials science. This unique perspective reveals how many alchemical concepts were early attempts to understand phenomena we now explain through scientific principles. Perfect for researchers, educators, and curious minds seeking to connect historical knowledge with current scientific frameworks.",
    emoji: "⚗️",
    color: "from-purple-600 to-amber-500",
    directUrl: "https://alchemistscientistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-alchemist-laboratory-with-_Yd9Ug.png",
    tags: ["alchemy", "science history", "chemistry", "scientific discovery", "materials science", "aiwebtools"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Coins,
    title: "Trader GPT",
    description: "Trader GPT is an advanced AI assistant designed to provide educational insights on trading strategies, market analysis, and investment approaches. It offers detailed explanations of trading concepts, historical market patterns, and risk management techniques to help users develop their trading knowledge. While it doesn't provide financial advice or make specific investment recommendations, it serves as a valuable educational resource for those looking to understand trading principles and market dynamics.",
    emoji: "📈",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-trading-desk-_Yd9Ug.png",
    tags: ["trading education", "market analysis", "investment concepts", "risk management", "financial literacy", "aiwebtools"],
    category: "Business & Finance",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: Hammer,
    title: "Indiana Archeologist GPT",
    description: "Indiana Archeologist GPT is your AI companion for exploring the fascinating world of archaeology and ancient civilizations. Drawing from extensive knowledge of historical sites, artifacts, and cultural practices, it helps identify archaeological finds, explains excavation techniques, and provides context for ancient technologies and societal structures. Whether you're a professional archaeologist, student, or history enthusiast, this tool offers insights into humanity's past through the lens of archaeological discovery.",
    emoji: "🏺",
    color: "from-amber-600 to-brown-700",
    directUrl: "https://indianaarcheologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-archaeologist-examining-an_Yd9Ug.png",
    tags: ["archaeology", "ancient civilizations", "artifacts", "historical sites", "excavation", "aiwebtools"],
    category: "Time & History",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Heart,
    title: "Marriage Mender GPT",
    description: "Marriage Mender GPT is a compassionate AI relationship coach designed to help couples strengthen their bond through improved communication, conflict resolution, and emotional connection. Drawing from evidence-based relationship psychology, it offers personalized strategies for addressing common marital challenges, rebuilding trust, and rekindling intimacy. This tool provides a safe, judgment-free space for exploring relationship dynamics and developing practical skills to nurture a healthier partnership.",
    emoji: "💞",
    color: "from-pink-500 to-red-600",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-couple-sitting-together-hol_Yd9Ug.png",
    tags: ["marriage counseling", "relationship advice", "conflict resolution", "communication skills", "emotional connection", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Award,
    title: "Training Manual Generator GPT",
    description: "Training Manual Generator GPT is a specialized AI tool that creates comprehensive, customized training materials for any skill, process, or knowledge area. Whether you're developing employee onboarding resources, educational curricula, or technical documentation, this tool produces structured, easy-to-follow training manuals complete with learning objectives, step-by-step instructions, visual aids, assessment tools, and reference materials. Perfect for HR professionals, educators, and team leaders seeking to standardize and optimize their training processes.",
    emoji: "📚",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://trainingmanualgeneratorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-training-manua_Yd9Ug.png",
    tags: ["training manuals", "documentation", "employee onboarding", "educational materials", "process documentation", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: PaintBucket,
    title: "Mural Designer GPT",
    description: "Mural Designer GPT is an innovative AI tool that helps artists, community organizers, and property owners conceptualize and plan stunning mural projects. It generates detailed design concepts based on themes, available space, and artistic preferences, while providing guidance on materials, techniques, and logistical considerations. Whether you're beautifying urban spaces, creating corporate installations, or planning community art initiatives, this tool offers creative inspiration and practical advice for bringing large-scale visual art to life.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://muraldesignergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-colorful-mural-being-painte_Yd9Ug.png",
    tags: ["mural design", "public art", "urban beautification", "artistic planning", "community art", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.6,
    totalVotes: 3567
  },
  {
    icon: Binary,
    title: "Quantum Computing Educator GPT",
    description: "Quantum Computing Educator GPT is an advanced AI tool designed to make the complex world of quantum computing accessible to learners at all levels. It explains quantum concepts like superposition and entanglement in clear, relatable terms, while providing interactive examples and thought experiments to build intuitive understanding. Whether you're a student, professional, or curious mind, this tool bridges the gap between classical and quantum computing paradigms, preparing you for the next revolution in computational technology.",
    emoji: "⚛️",
    color: "from-blue-600 to-purple-700",
    directUrl: "https://quantumcomputingeducatorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-quantum-computer_Yd9Ug.png",
    tags: ["quantum computing", "physics education", "technology learning", "computational science", "quantum mechanics", "aiwebtools"],
    category: "Education & Learning",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Restaurant,
    title: "Culinary Creator GPT",
    description: "Culinary Creator GPT is your AI-powered kitchen companion, designed to inspire culinary creativity and solve everyday cooking challenges. It generates personalized recipes based on your available ingredients, dietary preferences, and skill level, while offering technique tutorials, flavor pairing suggestions, and meal planning assistance. Whether you're a seasoned chef looking for fresh ideas or a cooking novice seeking guidance, this tool helps transform ordinary ingredients into extraordinary meals.",
    emoji: "👨‍🍳",
    color: "from-orange-500 to-red-600",
    directUrl: "https://culinarycreator.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-chef-creating-a-gourmet-dis_Yd9Ug.png",
    tags: ["cooking", "recipes", "culinary arts", "meal planning", "food creativity", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4567
  }
];

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  // NEW FIFTH BATCH TOOLS - ADDED TO THE TOP
  ...fifthBatchTools,
  
  // TOP PRIORITY TOOL AT THE VERY BEGINNING
  topPriorityTool,
  
  // HIGH PRIORITY FEATURED TOOLS
  ...highPriorityFeaturedTools,
  
  // ADDITIONAL HIGH PRIORITY TOOLS
  ...additionalPriorityTools,
  
  // THIRD BATCH OF TOOLS
  ...thirdBatchTools,
  
  // FOURTH BATCH OF TOOLS
  ...fourthBatchTools,
  
  // TIME-BASED TOOLS AT THE TOP (as requested)
  ...timeAndHistoryGPTs,
  
  // INDUSTRY-SPECIFIC SOLUTIONS TOWARDS THE TOP (as requested)
  ...businessAndFinanceGPTs,
  ...professionalServicesGPTs,
  ...healthAndWellnessGPTs,
  ...legalAndGovernmentGPTs,
  ...appraisalAndValuationGPTs,
  
  // CORE FUNCTIONAL CATEGORIES
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...scienceAndResearchGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  
  // SPIRITUALITY MOVED TO THE BOTTOM (as requested)
  ...spiritualAndPhilosophyGPTs,
  
  // Additional GPTs will be added here as new category files are created
];
