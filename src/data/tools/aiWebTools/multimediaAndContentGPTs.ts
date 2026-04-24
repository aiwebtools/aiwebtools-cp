
import { Tool } from "@/types/tools";
import { Mic, Video, Image, FileText, Headphones, Camera, Music, Film, Edit, Play, Binary, Palette, Copy } from "lucide-react";

export const multimediaAndContentGPTs: Tool[] = [
  {
    icon: Mic,
    title: "News-Channel GPT",
    description: "I'm NewsChannel GPT, your live TV news reporter AI, bringing your Customized Live Local and World News 24/7 news tailored to you! Get personalized news coverage, breaking stories, and comprehensive reporting on topics that matter most to you. This AI delivers news in engaging broadcast style, covering local events, global affairs, politics, business, technology, sports, entertainment, and more with professional journalism standards.",
    emoji: "📺",
    color: "from-red-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-ELRe07210-news-channel-gpt",
    imageUrl: "/src/assets/tools/news-channel-gpt-hero.png",
    tags: ["news", "news channel", "live news", "TV news", "world news", "local news", "breaking news", "journalism", "news reporter", "Custom GPT", "aiwebtools"],
    category: "Multimedia & Content",
    rating: 4.8,
    totalVotes: 3456,
    isFree: true
  },
  {
    icon: Copy,
    title: "AIWEBTOOLS GPT CLONER GPT",
    description: "Think it, Dream it, Spawn it! Clone any of our GPTs and receive operational instructions ready to deploy, written in the style of the creator of AIWebTools.AI. This powerful tool allows you to replicate the functionality and style of any AI Web Tools GPT, providing you with complete operational instructions that you can deploy on your own model. Perfect for developers, AI enthusiasts, and anyone looking to create their own custom GPT based on proven templates.",
    emoji: "🔄",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-6904dd7abc788191aff06ba097690983-aiwebtools-ai-gpt-a-w-t-gpt-instructions-cloner",
    imageUrl: "/src/assets/tools/gpt-cloner-hero.png",
    tags: ["gpt cloner", "operational instructions", "ai development", "custom gpts", "prompt engineering", "ai tools"],
    category: "Multimedia & Content",
    rating: 4.9,
    totalVotes: 2345
  },
  {
    icon: Mic,
    title: "Podcast Script Writer GPT",
    description: "Podcast Script Writer GPT by AI Web Tools is your expert AI-powered podcast production and audio storytelling platform, specializing in crafting engaging, professionally structured podcast scripts and episode outlines that transform ideas into compelling audio narratives optimized for maximum listener engagement and retention. This advanced tool revolutionizes podcast production by providing comprehensive scriptwriting services that combine storytelling expertise with audio-specific formatting, ensuring each episode captures audience attention, maintains narrative flow, and delivers exceptional listener experiences that build loyal audiences and drive podcast success. Whether you're launching a new podcast series, developing educational content, creating entertainment programs, or producing corporate communication content, this AI efficiently transforms concepts into professionally formatted scripts that resonate with target audiences and enhance overall podcast quality. The system analyzes content objectives, identifies narrative structures, develops engaging storylines, and creates detailed scripts with precise formatting that supports professional audio production and seamless podcast delivery. Input your podcast concepts, target audience demographics, or content themes to receive comprehensive episode scripts, detailed production notes, audience engagement strategies, and professional formatting that ensures broadcast-ready content. Features include episode structure development, audience engagement optimization, narrative flow enhancement, professional script formatting, and comprehensive podcast production guidance. Perfect for podcast creators seeking professional content development, media producers optimizing audio storytelling, content marketers developing podcast strategies, and audio enthusiasts committed to creating high-quality podcast experiences that educate, entertain, and inspire audiences. This tool ensures each script captures audience attention, maintains listener engagement, and delivers exceptional audio storytelling that builds successful podcast brands and loyal listener communities through expertly crafted, professionally formatted audio content.",
    emoji: "🎙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/NRAvHxHIj-U",
    tags: ["podcast", "script writing", "audio content", "storytelling", "content creation", "Custom GPT", "Content Marketing"],
    category: "Multimedia & Content",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "Video Script Generator",
    description: "AI-powered video script creation tool that generates professional, engaging scripts for various video content including marketing videos, educational content, social media videos, and promotional materials. This tool transforms ideas into compelling video narratives with proper structure and flow.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtube.com/shorts/IVoy-B4GkXU?si=0HxBQ5i3TcluZth9",
    tags: ["video scripts", "content creation", "marketing videos", "social media", "video production", "Custom GPT", "Content Marketing", "Social Media Marketing"],
    category: "Multimedia & Content",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Video,
    title: "Video Second-by-Second Analysis GPT",
    description: "Video Second-by-Second Analysis GPT by AI Web Tools is your sophisticated AI-powered video analysis and content extraction platform, delivering unprecedented precision in video content analysis through frame-by-frame examination that provides detailed insights, visual documentation, and comprehensive content understanding for professional and research applications. This cutting-edge tool revolutionizes video analysis by breaking down footage with incredible precision, analyzing every second of content while extracting key visual frames that provide detailed insights into actions, people, objects, scene changes, and contextual information that supports decision-making and content optimization. Whether you're conducting security analysis, media research, educational content development, marketing analysis, or investigative work, this AI provides step-by-step video examination that highlights critical moments, identifies patterns, and delivers structured, labeled visual data with contextual analysis. The system processes video content systematically, extracts key frames, analyzes visual elements, and provides comprehensive documentation that supports various professional applications while maintaining accuracy and analytical depth. Input your video files, analysis objectives, or specific content requirements to receive detailed frame-by-frame analysis, visual documentation, pattern recognition insights, and comprehensive video content reports. Features include precise frame extraction, visual element identification, pattern analysis tools, content categorization systems, and comprehensive reporting capabilities. Perfect for content creators optimizing video strategies, security professionals analyzing surveillance footage, researchers studying visual content, educators developing training materials, and investigators requiring detailed video documentation. This tool also serves as a powerful resource for training and fine-tuning Vision-Language Models (VLMs), offering structured, labeled visual data that advances AI development and research. Ideal for anyone requiring deep clarity from video content through professional-grade analysis and documentation.",
    emoji: "📹",
    color: "from-red-500 to-purple-600",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["video analysis", "frame extraction", "video processing", "content analysis", "video research"],
    category: "Multimedia & Content",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Image,
    title: "Sketch Artist GPT",
    description: "Sketch Artist GPT by AI Web Tools is your professional AI-powered artistic creation and sketch development platform, transforming images and text descriptions into clean, high-resolution sketches using advanced Python programming and DALLE technology that delivers precise, professional-quality artwork ready for creative and commercial use. This innovative tool revolutionizes digital art creation by providing sophisticated sketch generation capabilities that convert visual concepts into artistic representations, whether you're uploading existing photos for artistic transformation or describing creative ideas that need visual realization through professional sketch artistry. Whether you're developing concept art, creating marketing materials, producing educational illustrations, or exploring artistic expression, this AI delivers precise, professional sketches that meet commercial and creative standards while providing flexible artistic interpretation and stylistic options. The system analyzes visual inputs, applies artistic techniques, processes creative descriptions, and generates high-quality sketches that capture essential visual elements while adding artistic interpretation and professional presentation quality. Input your photos, creative descriptions, or artistic concepts to receive professional sketch artwork, artistic interpretations, creative variations, and high-resolution outputs suitable for various applications. Features include photo-to-sketch conversion, text-to-artwork generation, artistic style customization, resolution optimization, and comprehensive creative development tools. Perfect for artists seeking digital sketch assistance, marketers creating visual content, educators developing educational materials, designers producing concept art, and creative professionals requiring professional-quality sketch artwork for projects and presentations. This tool ensures every sketch meets professional standards while providing artistic interpretation that enhances visual communication and creative expression through advanced AI-powered artistic generation.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["sketch art", "digital drawing", "image conversion", "artistic sketches", "creative design"],
    category: "Multimedia & Content",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: FileText,
    title: "Article and Blog Rewriter GPT",
    description: "Article and Blog Rewriter GPT by AI Web Tools is your powerful AI-powered content optimization and SEO enhancement platform, transforming existing articles and blog content into fresh, engaging, search-engine-optimized content that maintains original meaning while improving readability, SEO performance, and audience engagement. This advanced tool revolutionizes content marketing by providing comprehensive content rewriting services that enhance existing articles, improve search engine rankings, and create unique content variations that avoid duplication issues while maintaining informational value and reader engagement. Whether you're updating existing blog content, optimizing articles for better SEO performance, creating content variations for different platforms, or refreshing outdated information, this AI delivers expertly rewritten content that improves both search visibility and reader experience. The system analyzes existing content structure, identifies optimization opportunities, enhances readability and engagement, and creates SEO-optimized rewrites that maintain original intent while improving content performance and search engine visibility. Input your existing articles, blog posts, or content pieces to receive completely rewritten versions with enhanced SEO optimization, improved readability, engaging headlines, and content structure that drives better search rankings and audience engagement. Features include comprehensive content rewriting, SEO optimization enhancement, readability improvement, keyword optimization, and content performance analytics. Perfect for content marketers optimizing blog performance, digital agencies managing client content, bloggers refreshing existing articles, and content creators seeking to improve search engine visibility and audience engagement. Simply copy and paste your existing blog or article content, and this AI transforms it into epic, SEO-optimized content that drives better results, higher search rankings, and increased reader engagement through expertly crafted content optimization.",
    emoji: "📝",
    color: "from-green-500 to-blue-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/5n1RHKoQ-Ds",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["content rewriting", "SEO optimization", "blog writing", "article creation", "content marketing", "Custom GPT", "SEO Tools", "Content Marketing"],
    category: "Multimedia & Content",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Music,
    title: "Music Melodies & Lessons GPT",
    description: "Music Melodies & Lessons GPT by AI Web Tools is your ultimate AI-powered musical education and creative development platform, serving as your comprehensive musical companion that inspires and guides musicians through every aspect of their musical journey from basic instruction to advanced composition and performance excellence. This revolutionary tool transforms musical education by providing step-by-step guidance, accurate musical notation, easy-to-follow tablature, and personalized instruction that adapts to individual goals, skill levels, and musical interests across all instruments and musical styles. Whether you're learning to play instruments, perfecting vocal techniques, writing original songs, mastering music theory, or developing performance skills, this AI provides tailored lessons, technique guidance, and personalized advice on instrument selection, sound improvement, and musical development that accelerates learning and enhances musical achievement. The system analyzes musical objectives, provides structured lesson plans, delivers accurate notation and tablature, and offers comprehensive guidance that makes learning fun, creative, and engaging while ensuring steady progress toward musical mastery and artistic expression. Input your musical goals, current skill level, or specific learning objectives to receive personalized lesson plans, accurate musical notation, technique improvement guidance, and comprehensive musical education that supports your artistic development. Features include instrument-specific instruction, vocal training support, songwriting assistance, music theory education, and comprehensive musical skill development tools. Perfect for beginning musicians starting their musical journey, experienced players seeking skill enhancement, music educators developing teaching materials, and composers creating original music. From beginners to experienced musicians, this AI makes learning engaging and effective, helping you achieve musical dreams with clarity, creativity, and comprehensive support that transforms musical aspirations into accomplished musical performance and creative expression.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["music education", "musical instruments", "songwriting", "music theory", "musical performance"],
    category: "Multimedia & Content",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Binary,
    title: "Binary-Text-Image Converter GPT",
    description: "Binary-Text-Image Converter GPT by AI Web Tools is your sophisticated AI-powered digital conversion and computer language platform, unlocking the fascinating world of binary computing by providing intuitive tools that effortlessly convert text to binary and binary to text, making computer language accessible and understandable for education, programming, and digital communication applications. This innovative tool revolutionizes digital literacy by providing comprehensive binary conversion capabilities that bridge the gap between human-readable text and computer binary language, enabling users to explore the fundamental language of computing while supporting educational, technical, and creative applications that require binary data manipulation. Whether you're learning computer science fundamentals, developing programming skills, creating digital art projects, or exploring cryptography and data encoding, this AI delivers fun and intuitive conversion tools that make binary operations accessible to users of all technical backgrounds and experience levels. The system processes text inputs efficiently, converts data between binary and text formats seamlessly, and provides educational insights into computer language fundamentals while maintaining accuracy and reliability in all conversion operations. Input your text content, binary data, or conversion requirements to receive accurate binary translations, text conversions, educational explanations, and comprehensive understanding of computer language fundamentals. Features include bidirectional text-binary conversion, educational computer science insights, data encoding exploration, and comprehensive digital literacy support tools. Perfect for computer science students learning programming fundamentals, educators teaching digital literacy, programmers working with binary data, and technology enthusiasts exploring the language of computers. This tool makes binary computing accessible and engaging, providing the foundation for understanding how computers communicate while supporting practical applications in programming, data analysis, and digital creativity through user-friendly, accurate conversion capabilities.",
    emoji: "💻",
    color: "from-blue-500 to-green-600",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["binary conversion", "text conversion", "computer language", "digital literacy", "programming tools"],
    category: "Multimedia & Content",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Video,
    title: "Website GPT 2.0",
    description: "Website GPT 2.0 by AI Web Tools is your next-generation AI-powered web development and digital presence platform, revolutionizing website creation through advanced artificial intelligence that transforms concepts into professional, fully-functional websites with cutting-edge design, optimal performance, and comprehensive digital marketing integration. This revolutionary tool represents the evolution of web development by providing sophisticated website creation capabilities that combine modern design principles with advanced functionality, ensuring every website delivers exceptional user experiences while maintaining professional standards and search engine optimization. Whether you're building business websites, e-commerce platforms, portfolio sites, or complex web applications, this AI delivers comprehensive web development services that include responsive design, content optimization, SEO enhancement, and digital marketing integration that drives online success. The system analyzes project requirements, applies modern web development best practices, implements advanced design frameworks, and creates fully optimized websites that perform exceptionally across all devices and platforms while ensuring maximum visibility and engagement. Input your website objectives, brand requirements, or design preferences to receive professionally developed websites with modern aesthetics, optimal performance, comprehensive SEO optimization, and advanced functionality that establishes strong digital presence and drives business growth. Features include responsive web design, advanced SEO optimization, e-commerce integration, content management systems, performance optimization, and comprehensive digital marketing tools. Perfect for businesses establishing online presence, entrepreneurs launching digital ventures, developers seeking advanced web creation tools, and digital marketers optimizing website performance and conversion rates. This tool ensures every website meets modern web standards while providing the advanced functionality and optimization needed for digital success in today's competitive online marketplace.",
    emoji: "🌐",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-UFb5cGCJV-website-gpt-2-0",
    imageUrl: "/src/assets/tools/website-gpt-hero.png",
    tags: ["website development", "web design", "digital presence", "SEO", "web applications"],
    category: "Multimedia & Content",
    rating: 4.8,
    totalVotes: 5678
  }
];
