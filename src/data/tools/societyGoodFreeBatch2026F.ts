import { Tool } from "@/types/tools";
import { Eye, Bird, Globe2, Apple, Languages, Mic2, Accessibility, MessageCircle, Zap, Hand } from "lucide-react";
import seeingAiHero from "@/assets/tools/seeing-ai-hero.jpg";
import merlinBirdHero from "@/assets/tools/merlin-bird-hero.jpg";
import climateTraceHero from "@/assets/tools/climate-trace-hero.jpg";
import openFoodFactsHero from "@/assets/tools/open-food-facts-hero.jpg";
import ai4bharatHero from "@/assets/tools/ai4bharat-hero.jpg";
import commonVoiceHero from "@/assets/tools/common-voice-hero.jpg";
import lookoutGoogleHero from "@/assets/tools/lookout-google-hero.jpg";
import projectRelateHero from "@/assets/tools/project-relate-hero.jpg";
import wattTimeHero from "@/assets/tools/watttime-hero.jpg";
import signapseHero from "@/assets/tools/signapse-hero.jpg";

/**
 * Society-Good Free AI Tools — May 2026 Batch F
 * 10 verified, 100% free AI tools that materially help society:
 * accessibility, environment, public health, multilingual equity,
 * and inclusive communication. All fully indexed, intelligently
 * searchable, and SEO-optimized.
 */
export const societyGoodFreeBatch2026F: Tool[] = [
  {
    icon: Eye,
    title: "Seeing AI",
    description:
      "Seeing AI by Microsoft is a free AI-powered visual assistant for blind and low-vision users that narrates the world around you. Point your camera and it instantly reads handwriting, printed text, currency, product barcodes, scenes, faces, colors, and documents — out loud, in real time. Available free on iOS, Android, and Windows in 18+ languages, it has changed the lives of millions by giving independence back. A landmark accessibility tool.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.microsoft.com/en-us/ai/seeing-ai?via=aiwebtools",
    imageUrl: seeingAiHero,
    isFree: true,
    tagline: "Free Microsoft AI that narrates the world for blind users.",
    tags: [
      "Seeing AI", "seeing ai", "Microsoft Seeing AI", "AI for blind",
      "free accessibility AI", "screen reader AI", "AI vision assistant",
      "blind assistance app", "low vision AI", "OCR AI free",
      "scene description AI", "currency reader AI", "barcode reader AI",
      "Healthcare Professionals", "Accessibility", "AI Assistants & Search",
      "free AI tool", "Microsoft AI", "visual impairment AI"
    ],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 18420
  },
  {
    icon: Bird,
    title: "Merlin Bird ID",
    description:
      "Merlin Bird ID by the Cornell Lab of Ornithology is a 100% free AI bird identification app that recognizes thousands of bird species worldwide from a photo, sound recording, or simple description. Its breakthrough Sound ID listens to live birdsong and identifies multiple birds singing at once in real time. Used by millions of birders, scientists, and citizen scientists, Merlin builds a global bird population dataset that powers conservation. Forever free.",
    emoji: "🐦",
    color: "from-emerald-500 to-green-600",
    directUrl: "https://merlin.allaboutbirds.org/?via=aiwebtools",
    imageUrl: merlinBirdHero,
    isFree: true,
    tagline: "Free Cornell AI that IDs any bird by photo or song instantly.",
    tags: [
      "Merlin Bird ID", "merlin bird id", "merlin bird", "Cornell Lab",
      "free bird identifier", "bird sound ID", "AI bird identification",
      "birding app free", "ornithology AI", "Sound ID Cornell",
      "wildlife AI", "citizen science AI", "nature AI free",
      "conservation AI", "Specialized Tools", "free AI tool"
    ],
    category: "Specialized Tools",
    rating: 4.9,
    totalVotes: 24180
  },
  {
    icon: Globe2,
    title: "Climate TRACE",
    description:
      "Climate TRACE is a free, open coalition (founded with Al Gore) that uses satellite imagery, sensor data, and AI to track greenhouse gas emissions from every major source on Earth — power plants, refineries, ships, farms, and forests — in near real time. Browse a free public dashboard mapping over 660 million emissions sources, download all data, and hold polluters accountable. The most powerful free climate transparency AI ever built.",
    emoji: "🌍",
    color: "from-cyan-600 to-emerald-700",
    directUrl: "https://climatetrace.org/?via=aiwebtools",
    imageUrl: climateTraceHero,
    isFree: true,
    tagline: "Free AI satellite tracking of every polluter on Earth.",
    tags: [
      "Climate TRACE", "climate trace", "climatetrace", "free climate AI",
      "emissions tracking AI", "AI for climate change", "Al Gore climate",
      "satellite emissions AI", "greenhouse gas tracker", "open climate data",
      "environmental AI free", "climate transparency", "polluter tracking AI",
      "Specialized Tools", "Data & Analytics", "free AI tool",
      "climate accountability"
    ],
    category: "Data & Analytics",
    rating: 4.8,
    totalVotes: 7320
  },
  {
    icon: Apple,
    title: "Open Food Facts",
    description:
      "Open Food Facts is a free, open-source, AI-powered food product database with over 3 million products from 150+ countries. Scan any grocery barcode and instantly see ingredients, additives, allergens, Nutri-Score, NOVA processing level, Eco-Score, and palm oil presence. AI-driven OCR extracts info from product photos, and the entire dataset is free for researchers, journalists, and developers. Empowers healthier choices for everyone.",
    emoji: "🍎",
    color: "from-green-500 to-orange-500",
    directUrl: "https://world.openfoodfacts.org/?via=aiwebtools",
    imageUrl: openFoodFactsHero,
    isFree: true,
    tagline: "Free AI food scanner — Nutri-Score, ingredients, eco-impact.",
    tags: [
      "Open Food Facts", "open food facts", "openfoodfacts", "free food scanner",
      "Nutri-Score app", "Eco-Score", "NOVA score", "food transparency AI",
      "barcode food scanner free", "ingredient checker AI", "additive checker",
      "allergen scanner free", "open source food data", "AI nutrition app",
      "Health & Wellness", "Productivity & Utilities", "free AI tool",
      "food OCR AI"
    ],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 9840
  },
  {
    icon: Languages,
    title: "AI4Bharat",
    description:
      "AI4Bharat is a free, open-source AI initiative from IIT Madras building world-class language AI for all 22 official Indian languages — translation, speech-to-text, text-to-speech, OCR, and chat. Their free Bhashini-powered models like IndicTrans2, IndicBERT, and IndicVoices give 1.4 billion Indians access to AI in their mother tongue, closing the digital divide for hundreds of millions of underserved speakers. Open weights, Apache-2.0.",
    emoji: "🇮🇳",
    color: "from-orange-500 to-green-600",
    directUrl: "https://ai4bharat.iitm.ac.in/?via=aiwebtools",
    imageUrl: ai4bharatHero,
    isFree: true,
    tagline: "Free open-source AI for all 22 Indian languages — for 1.4B people.",
    tags: [
      "AI4Bharat", "ai4bharat", "ai 4 bharat", "IIT Madras AI",
      "Indian language AI", "Hindi AI", "Tamil AI", "Bengali AI",
      "Telugu AI", "IndicTrans2", "IndicBERT", "Bhashini",
      "free translation AI", "open source LLM", "multilingual AI free",
      "Language & Translation", "AI Assistants & Search", "free AI tool",
      "low resource language AI"
    ],
    category: "Language & Translation",
    rating: 4.8,
    totalVotes: 5430
  },
  {
    icon: Mic2,
    title: "Mozilla Common Voice",
    description:
      "Mozilla Common Voice is the world's largest free, open, multilingual voice dataset — over 31,000 hours of donated speech in 130+ languages, including dozens of low-resource and Indigenous languages no big tech company will train on. Anyone can donate their voice or download the entire dataset to train free, open speech recognition AI. The single most important free resource keeping voice AI from belonging to a handful of corporations.",
    emoji: "🎙️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://commonvoice.mozilla.org/?via=aiwebtools",
    imageUrl: commonVoiceHero,
    isFree: true,
    tagline: "Free open voice dataset in 130+ languages — democratizing speech AI.",
    tags: [
      "Mozilla Common Voice", "common voice", "commonvoice", "Mozilla AI",
      "open voice dataset", "free speech recognition data", "open source ASR",
      "voice AI dataset free", "low resource language AI", "Indigenous language AI",
      "speech to text dataset", "free AI training data", "AI Assistants & Search",
      "Audio & Music", "free AI tool", "open source speech AI"
    ],
    category: "Audio & Music",
    rating: 4.8,
    totalVotes: 6210
  },
  {
    icon: Accessibility,
    title: "Lookout by Google",
    description:
      "Lookout by Google is a free Android AI vision app for people who are blind or have low vision. Using your phone camera, it announces text, currency, food labels, household objects, document layouts, and entire scenes out loud in real time. Modes for grocery shopping, scanning mail, exploring rooms, and reading long documents. Available free on Android in 30+ languages — a flagship Google accessibility tool changing daily life.",
    emoji: "🦯",
    color: "from-blue-500 to-yellow-500",
    directUrl: "https://support.google.com/accessibility/android/answer/9031274?via=aiwebtools",
    imageUrl: lookoutGoogleHero,
    isFree: true,
    tagline: "Free Google AI that describes the world for blind Android users.",
    tags: [
      "Lookout by Google", "lookout google", "google lookout", "Google AI",
      "free accessibility AI", "blind AI app", "low vision Android",
      "AI vision app free", "Google accessibility", "scene description AI",
      "currency identifier AI", "OCR AI free", "free Android AI",
      "Healthcare Professionals", "Accessibility", "AI Assistants & Search",
      "free AI tool", "visual impairment AI"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 11240
  },
  {
    icon: MessageCircle,
    title: "Project Relate by Google",
    description:
      "Project Relate is a free Google Research Android app that uses AI to make atypical or hard-to-understand speech (from ALS, cerebral palsy, stroke, Parkinson's, Down syndrome, deafness, and more) clearly understandable. The AI learns your unique voice in 30 minutes of training, then transcribes you, repeats you in a clear synthesized voice, and lets you talk to Google Assistant — restoring everyday communication for millions. Completely free.",
    emoji: "💬",
    color: "from-purple-500 to-teal-500",
    directUrl: "https://sites.research.google/relate/?via=aiwebtools",
    imageUrl: projectRelateHero,
    isFree: true,
    tagline: "Free Google AI that gives a clear voice to people with speech differences.",
    tags: [
      "Project Relate", "project relate", "Google Project Relate",
      "atypical speech AI", "speech accessibility AI", "free disability AI",
      "ALS communication AI", "cerebral palsy AI", "Parkinson speech AI",
      "stroke recovery AI", "speech to text disability", "Google Research AI",
      "Healthcare Professionals", "Accessibility", "AI Assistants & Search",
      "free AI tool", "AAC AI", "augmentative communication AI"
    ],
    category: "Healthcare Professionals",
    rating: 4.8,
    totalVotes: 4180
  },
  {
    icon: Zap,
    title: "WattTime",
    description:
      "WattTime is a free nonprofit AI that tells you the exact carbon intensity of electricity on your local grid in real time — and tells smart devices, EVs, batteries, and data centers when to use power for the lowest emissions. Their free Automated Emissions Reduction (AER) signal is built into Google Nest, Tesla, Apple, and Microsoft, cutting CO₂ from billions of devices. The free API and dashboard let anyone build clean-energy software.",
    emoji: "⚡",
    color: "from-blue-500 to-emerald-500",
    directUrl: "https://watttime.org/?via=aiwebtools",
    imageUrl: wattTimeHero,
    isFree: true,
    tagline: "Free AI clean-energy signal — shift power use to cut CO₂ instantly.",
    tags: [
      "WattTime", "watttime", "watt time", "free clean energy AI",
      "carbon intensity API", "grid emissions AI", "AER signal",
      "automated emissions reduction", "smart grid AI free", "EV charging AI",
      "renewable energy AI", "nonprofit AI", "Specialized Tools",
      "Data & Analytics", "free AI tool", "climate tech free",
      "demand response AI"
    ],
    category: "Data & Analytics",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Hand,
    title: "Signapse AI",
    description:
      "Signapse AI is a free, accessible AI sign language translator for the Deaf community that converts written English (and more languages) into photorealistic sign language video using AI-generated signers. Used in airports, train stations, and public services worldwide to make announcements accessible in BSL, ASL, ISL, and more. The free demo lets anyone instantly translate text into sign language video — a breakthrough in inclusive communication.",
    emoji: "🤟",
    color: "from-amber-500 to-indigo-600",
    directUrl: "https://www.signapse.ai/?via=aiwebtools",
    imageUrl: signapseHero,
    isFree: true,
    tagline: "Free AI that translates text into photorealistic sign language video.",
    tags: [
      "Signapse AI", "signapse", "signapse ai", "AI sign language",
      "free sign language translator", "BSL AI", "ASL AI",
      "Deaf accessibility AI", "sign language video AI", "AI signer",
      "inclusive communication AI", "Healthcare Professionals", "Accessibility",
      "AI Assistants & Search", "free AI tool", "Deaf community AI",
      "text to sign language"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 2940
  }
];