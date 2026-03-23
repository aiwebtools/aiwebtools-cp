import { Tool } from "@/types/tools";
import {
  Shield, MapPin, Radio, Lock, Phone, AlertTriangle, BookOpen,
  Brain, Cloud, Database, Map, Bluetooth, Heart, Compass,
  TreePine, Leaf, Star, Mountain, Send, RefreshCw, Navigation,
  Cpu, Share2, Wifi, Globe
} from "lucide-react";

import projectNomadHero from "@/assets/tools/project-nomad-hero.jpg";
import kiwixHero from "@/assets/tools/kiwix-hero.jpg";
import osmandHero from "@/assets/tools/osmand-hero.jpg";
import organicMapsHero from "@/assets/tools/organic-maps-hero.jpg";
import meshtasticHero from "@/assets/tools/meshtastic-hero.jpg";
import briarHero from "@/assets/tools/briar-hero.jpg";
import zelloHero from "@/assets/tools/zello-hero.jpg";
import bunkersAppHero from "@/assets/tools/bunkers-app-hero.jpg";
import offlineSurvivalManualHero from "@/assets/tools/offline-survival-manual-hero.jpg";
import privateLlmHero from "@/assets/tools/private-llm-hero.jpg";
import windyHero from "@/assets/tools/windy-hero.jpg";
import koboToolboxHero from "@/assets/tools/kobotoolbox-hero.jpg";
import mapsMeHero from "@/assets/tools/maps-me-hero.jpg";
import bridgefyHero from "@/assets/tools/bridgefy-hero.jpg";
import redCrossFirstAidHero from "@/assets/tools/red-cross-first-aid-hero.jpg";
import what3wordsHero from "@/assets/tools/what3words-hero.jpg";
import avenzaMapsHero from "@/assets/tools/avenza-maps-hero.jpg";
import inaturalistHero from "@/assets/tools/inaturalist-hero.jpg";
import plantnetHero from "@/assets/tools/plantnet-hero.jpg";
import starWalkHero from "@/assets/tools/star-walk-hero.jpg";
import outdooractiveHero from "@/assets/tools/outdooractive-hero.jpg";
import koboldcppHero from "@/assets/tools/koboldcpp-hero.jpg";
import localsendHero from "@/assets/tools/localsend-hero.jpg";
import syncthingHero from "@/assets/tools/syncthing-hero.jpg";
import gaiaGpsHero from "@/assets/tools/gaia-gps-hero.jpg";

export const apocalypseSurvivalBatch2026: Tool[] = [
  {
    icon: Shield, title: "Project NOMAD — Offline AI Survival Computer",
    description: "Node for Offline Media, Archives, and Data — a free, open-source offline server you install on any computer. Bundles Wikipedia, AI chatbot (local LLM), offline maps, medical guides, and education tools. Works without internet — forever. 8,500+ GitHub stars. The ultimate digital survival bunker for when the grid goes dark. Install it on a mini PC, Raspberry Pi, or laptop and carry civilization's knowledge in your backpack.",
    emoji: "🖥️", color: "from-green-700 to-amber-600",
    directUrl: "https://www.projectnomad.us/?via=aiwebtools",
    imageUrl: projectNomadHero,
    tags: ["offline AI", "survival computer", "local AI", "Wikipedia offline", "offline maps", "emergency preparedness", "open source", "self-hosted", "Linux", "Raspberry Pi", "disaster readiness", "off-grid", "apocalypse ready", "prepper tech"],
    category: "Emergency Services", rating: 4.9, totalVotes: 8573, isFree: true,
    tagline: "Civilization's knowledge in a box — Wikipedia, AI, maps, and education tools running offline forever"
  },
  {
    icon: BookOpen, title: "Kiwix — Offline Wikipedia & Knowledge Library",
    description: "Access the world's knowledge offline with Kiwix. Download all of Wikipedia, medical encyclopedias, textbooks, Stack Overflow, TED talks, and more — compressed into portable files you can store on any device. Works on Windows, Mac, Linux, iOS, Android, and even Raspberry Pi. When the internet dies, Kiwix keeps humanity's knowledge alive. 1M+ downloads on Google Play. Free and open-source since 2006.",
    emoji: "📚", color: "from-blue-600 to-cyan-500",
    directUrl: "https://kiwix.org/?via=aiwebtools",
    imageUrl: kiwixHero,
    tags: ["offline Wikipedia", "knowledge base", "offline encyclopedia", "survival knowledge", "education offline", "open source", "emergency preparedness", "medical reference", "Raspberry Pi", "no internet required", "prepper", "apocalypse ready"],
    category: "Emergency Services", rating: 4.8, totalVotes: 37700, isFree: true,
    tagline: "All of Wikipedia in your pocket — no internet required, ever"
  },
  {
    icon: MapPin, title: "OsmAnd — Offline GPS Maps & Navigation Download",
    description: "Open-source offline world map application based on OpenStreetMap. Download entire countries for offline GPS navigation, route planning, elevation tracking, and GPX recording — no internet needed. Supports hiking, cycling, driving, and marine navigation. 10M+ downloads. Your map never goes dark even when cell towers do. Plan routes based on inclines, record tracks, and navigate through the apocalypse with precision.",
    emoji: "🗺️", color: "from-green-600 to-blue-500",
    directUrl: "https://osmand.net/?via=aiwebtools",
    imageUrl: osmandHero,
    tags: ["offline maps", "GPS navigation", "OpenStreetMap", "offline download", "hiking maps", "survival navigation", "no internet", "open source", "route planning", "GPX tracking", "apocalypse ready", "prepper maps"],
    category: "Emergency Services", rating: 4.7, totalVotes: 236000, isFree: true,
    tagline: "Navigate the entire world offline — download maps before the grid goes down"
  },
  {
    icon: Map, title: "Organic Maps — Offline Hiking & Cycling Navigation",
    description: "Privacy-focused, open-source offline maps for hiking, trekking, and cycling. Built by the original MAPS.ME team using OpenStreetMap data. Download detailed maps of any region for completely offline navigation with turn-by-turn directions. No ads, no tracking, no data collection. Fast, battery-efficient, and designed for outdoor adventures. 1M+ downloads.",
    emoji: "🥾", color: "from-green-500 to-emerald-600",
    directUrl: "https://organicmaps.app/?via=aiwebtools",
    imageUrl: organicMapsHero,
    tags: ["offline maps", "hiking navigation", "cycling maps", "privacy maps", "OpenStreetMap", "outdoor navigation", "no tracking", "open source", "trail maps", "apocalypse ready", "survival navigation"],
    category: "Emergency Services", rating: 4.7, totalVotes: 16700, isFree: true,
    tagline: "Privacy-first offline maps for hikers — no ads, no tracking, just pure navigation"
  },
  {
    icon: Radio, title: "Meshtastic — Off-Grid Mesh Radio Network",
    description: "Open-source, off-grid, decentralized mesh network built on affordable LoRa radio devices ($30). No cell towers, no internet — just pure peer-to-peer communication across miles. Send text messages, share GPS locations, and coordinate with your group when all infrastructure fails. 100K+ app downloads, 5,900+ GitHub followers, supports 26 LoRa regions worldwide. The communication backbone for when civilization's networks collapse.",
    emoji: "📡", color: "from-cyan-600 to-blue-700",
    directUrl: "https://meshtastic.org/?via=aiwebtools",
    imageUrl: meshtasticHero,
    tags: ["mesh network", "off-grid communication", "LoRa radio", "peer-to-peer", "emergency communication", "no internet", "open source", "GPS sharing", "disaster communication", "ham radio", "apocalypse ready", "prepper comms"],
    category: "Emergency Services", rating: 4.8, totalVotes: 4650, isFree: true,
    tagline: "Text and GPS over miles with $30 radios — no cell towers, no internet, just mesh"
  },
  {
    icon: Lock, title: "Briar — Encrypted P2P Messenger (No Internet Required)",
    description: "Secure messaging that works without internet infrastructure. Briar syncs messages via WiFi, Bluetooth, or Tor — meaning you can communicate even when the internet and cell networks are completely down. End-to-end encrypted, peer-to-peer, with no central servers. Designed for journalists, activists, and anyone who needs to communicate securely during crises. When every other messenger fails, Briar still works.",
    emoji: "🔐", color: "from-green-700 to-yellow-600",
    directUrl: "https://briarproject.org/?via=aiwebtools",
    imageUrl: briarHero,
    tags: ["encrypted messaging", "peer-to-peer", "no internet messenger", "Bluetooth messaging", "WiFi direct", "Tor", "secure communication", "offline messaging", "crisis communication", "apocalypse ready", "privacy"],
    category: "Security & Privacy", rating: 4.7, totalVotes: 3200, isFree: true,
    tagline: "Encrypted messaging that works via Bluetooth and WiFi — no internet or servers needed"
  },
  {
    icon: Phone, title: "Zello — Emergency Walkie-Talkie App",
    description: "Turn any smartphone into a powerful walkie-talkie. Zello delivers 10 billion live voice messages monthly and is 100% free for first responders. Used by rescue teams during hurricanes, earthquakes, and disasters worldwide. Push-to-talk with crystal-clear audio, group channels, and emergency dispatch. When phone lines are overloaded, Zello keeps communication flowing. The go-to emergency communication tool trusted by millions.",
    emoji: "📻", color: "from-yellow-500 to-orange-600",
    directUrl: "https://zello.com/?via=aiwebtools",
    imageUrl: zelloHero,
    tags: ["walkie-talkie", "emergency communication", "push-to-talk", "first responder", "hurricane communication", "disaster app", "voice messaging", "group channels", "rescue coordination", "apocalypse ready"],
    category: "Emergency Services", rating: 4.6, totalVotes: 12500, isFree: true,
    tagline: "Your phone becomes a walkie-talkie — free for first responders, trusted in hurricanes"
  },
  {
    icon: AlertTriangle, title: "Bunkers App — Nuclear Shelter & Bunker Locator",
    description: "Find nearby bunkers, fallout shelters, tornado shelters, and storm shelters worldwide. Bunkers App maps safe shelter locations for nuclear threats, terrorist attacks, and natural disasters. Bookmark shelters for each emergency type, share locations with family, and prepare escape routes. In an unpredictable world, knowing where to shelter is the difference between survival and catastrophe.",
    emoji: "🏗️", color: "from-gray-700 to-red-600",
    directUrl: "https://bunkersapp.com/?via=aiwebtools",
    imageUrl: bunkersAppHero,
    tags: ["bunker locator", "nuclear shelter", "fallout shelter", "emergency shelter", "tornado shelter", "disaster preparedness", "safety", "nuclear war", "survival", "apocalypse ready", "prepper"],
    category: "Emergency Services", rating: 4.5, totalVotes: 2800,
    tagline: "Find nuclear bunkers and emergency shelters near you — anywhere in the world"
  },
  {
    icon: BookOpen, title: "Offline Survival Manual — Complete Field Guide App",
    description: "A comprehensive survival manual that works completely offline. Covers fire making, shelter building, water purification, first aid, food foraging, navigation, signaling, knot tying, and wilderness medicine. Based on military survival training manuals. 1M+ downloads, 4.7-star rating. When you're miles from help with no signal, this app becomes your lifeline. Download it now while you still can.",
    emoji: "📖", color: "from-amber-600 to-green-700",
    directUrl: "https://play.google.com/store/apps/details?id=org.ligi.survivalmanual&via=aiwebtools",
    imageUrl: offlineSurvivalManualHero,
    tags: ["survival manual", "offline guide", "fire making", "shelter building", "water purification", "first aid", "wilderness survival", "field guide", "military survival", "foraging", "apocalypse ready", "prepper"],
    category: "Emergency Services", rating: 4.7, totalVotes: 34800, isFree: true,
    tagline: "Military-grade survival knowledge in your pocket — fire, shelter, water, first aid, all offline"
  },
  {
    icon: Brain, title: "Private LLM — Offline AI Chatbot with Survival Model",
    description: "Run powerful AI models completely offline on your iPhone, iPad, or Mac. No cloud, no tracking, no logins. Features the exclusive SurviveV3 model — a fine-tuned survival AI delivering wilderness strategies, self-reliance guidance, and emergency readiness advice with zero internet connection. Your data never leaves your device. When the internet goes dark, Private LLM keeps your AI advisor running.",
    emoji: "🧠", color: "from-purple-600 to-indigo-700",
    directUrl: "https://privatellm.app/?via=aiwebtools",
    imageUrl: privateLlmHero,
    tags: ["offline AI", "local LLM", "iOS AI", "Mac AI", "survival AI", "SurviveV3", "privacy AI", "no internet AI", "offline chatbot", "Apple", "on-device AI", "apocalypse ready"],
    category: "Local AI Solutions", rating: 4.6, totalVotes: 2100,
    tagline: "Survival AI that runs offline on your iPhone — SurviveV3 model for when SHTF"
  },
  {
    icon: Cloud, title: "Windy — Advanced Weather Radar & Storm Tracking",
    description: "The most powerful weather visualization platform on Earth. Real-time weather radar, wind patterns, storm tracking, hurricane paths, temperature, precipitation, air quality, and satellite imagery. Essential for survival decision-making — know exactly when and where dangerous weather is heading. Used by pilots, sailors, storm chasers, and emergency planners. Download weather data before storms hit for offline reference.",
    emoji: "🌪️", color: "from-blue-700 to-purple-600",
    directUrl: "https://windy.com/?via=aiwebtools",
    imageUrl: windyHero,
    tags: ["weather radar", "storm tracking", "hurricane tracker", "wind maps", "weather forecast", "satellite imagery", "emergency weather", "survival weather", "meteorology", "disaster preparedness", "apocalypse ready"],
    category: "Emergency Services", rating: 4.8, totalVotes: 45000, isFree: true,
    tagline: "See every storm on Earth in real-time — radar, wind, hurricanes, and satellite imagery"
  },
  {
    icon: Database, title: "KoBoToolbox — Humanitarian Data Collection (Offline)",
    description: "Free, open-source data collection platform built for humanitarian organizations and disaster response. Collect survey data, assessments, and field reports offline in the most challenging environments — conflict zones, disaster areas, and remote locations. Used by UN agencies, Red Cross, and thousands of NGOs worldwide. Sync data when connectivity returns. Essential for coordinating humanitarian response when infrastructure collapses.",
    emoji: "📋", color: "from-blue-500 to-orange-500",
    directUrl: "https://www.kobotoolbox.org/?via=aiwebtools",
    imageUrl: koboToolboxHero,
    tags: ["humanitarian tech", "offline data collection", "disaster response", "field surveys", "NGO tools", "UN tools", "Red Cross", "emergency assessment", "open source", "crisis management", "apocalypse ready"],
    category: "Emergency Services", rating: 4.5, totalVotes: 5400, isFree: true,
    tagline: "The UN's data collection tool — works offline in disaster zones and conflict areas"
  },
  {
    icon: Globe, title: "MAPS.ME — Offline World Maps Download",
    description: "Download detailed maps of any country or region for completely offline navigation. Turn-by-turn directions, public transit, hiking trails, and points of interest — all without internet. Built on OpenStreetMap data and trusted by travelers worldwide. Lightweight, fast, and battery-efficient. Download the maps of your region, your state, your escape routes — before connectivity disappears.",
    emoji: "🌍", color: "from-green-500 to-blue-500",
    directUrl: "https://maps.me/?via=aiwebtools",
    imageUrl: mapsMeHero,
    tags: ["offline maps", "world maps download", "GPS navigation", "travel maps", "offline directions", "OpenStreetMap", "hiking trails", "no internet maps", "survival navigation", "apocalypse ready"],
    category: "Emergency Services", rating: 4.5, totalVotes: 28000, isFree: true,
    tagline: "Download the entire world's maps to your phone — navigate anywhere without internet"
  },
  {
    icon: Bluetooth, title: "Bridgefy — Bluetooth Mesh Messaging (No Internet)",
    description: "Send messages without internet using Bluetooth mesh networking. Messages hop from phone to phone, creating a decentralized communication network that works when cell towers and WiFi are down. Used during natural disasters, protests, and in areas with no connectivity. End-to-end encrypted. Range extends as more users join the mesh. When all else fails, Bridgefy keeps communities connected.",
    emoji: "🔗", color: "from-blue-500 to-cyan-600",
    directUrl: "https://bridgefy.me/?via=aiwebtools",
    imageUrl: bridgefyHero,
    tags: ["Bluetooth messaging", "mesh networking", "no internet messenger", "offline communication", "peer-to-peer", "disaster communication", "encrypted", "emergency messaging", "apocalypse ready"],
    category: "Emergency Services", rating: 4.4, totalVotes: 8900, isFree: true,
    tagline: "Messages hop phone-to-phone via Bluetooth — no internet, no cell towers needed"
  },
  {
    icon: Heart, title: "Red Cross First Aid — Offline Emergency Medical Guide",
    description: "Official American Red Cross first aid app with step-by-step instructions for every emergency — CPR, choking, burns, bleeding, fractures, allergic reactions, hypothermia, heatstroke, and more. Works completely offline with pre-loaded content, videos, and interactive quizzes. Includes emergency phone numbers and hospital locators. When there's no doctor and no ambulance, this app can save lives.",
    emoji: "❤️", color: "from-red-600 to-red-800",
    directUrl: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps.html/?via=aiwebtools",
    imageUrl: redCrossFirstAidHero,
    tags: ["first aid", "CPR", "emergency medical", "offline medical", "Red Cross", "emergency guide", "wound care", "survival medicine", "disaster first aid", "apocalypse ready"],
    category: "Emergency Services", rating: 4.7, totalVotes: 18500, isFree: true,
    tagline: "Step-by-step first aid from the Red Cross — CPR, burns, bleeding, all offline"
  },
  {
    icon: Compass, title: "what3words — Precise Location Sharing for Search & Rescue",
    description: "Every 3-meter square on Earth has been assigned a unique 3-word address. Share your exact location with rescue teams, emergency services, or family using just three words — more precise than street addresses or GPS coordinates. Used by emergency services in 40+ countries. Works offline once downloaded. When you need to tell someone exactly where you are in a crisis, three words could save your life.",
    emoji: "📍", color: "from-red-500 to-blue-600",
    directUrl: "https://what3words.com/?via=aiwebtools",
    imageUrl: what3wordsHero,
    tags: ["location sharing", "search and rescue", "GPS alternative", "emergency location", "precise positioning", "3-word address", "offline location", "rescue coordination", "apocalypse ready"],
    category: "Emergency Services", rating: 4.6, totalVotes: 15200, isFree: true,
    tagline: "Every 3m² on Earth has a 3-word address — tell rescue teams exactly where you are"
  },
  {
    icon: Map, title: "Avenza Maps — Offline Georeferenced Map Downloads",
    description: "Download and use professional georeferenced maps offline — topographic, nautical, trail, and custom maps with real-time GPS tracking. Import geospatial PDFs, record tracks, drop pins, and measure distances without internet. Used by geologists, surveyors, search and rescue, military, and outdoor adventurers. Access a map store with thousands of official government and commercial maps.",
    emoji: "🧭", color: "from-green-600 to-brown-600",
    directUrl: "https://www.avenzamaps.com/?via=aiwebtools",
    imageUrl: avenzaMapsHero,
    tags: ["georeferenced maps", "topographic maps", "offline GPS", "trail maps", "nautical maps", "search and rescue", "geospatial", "military maps", "survey maps", "apocalypse ready"],
    category: "Emergency Services", rating: 4.5, totalVotes: 9800,
    tagline: "Professional topographic and nautical maps with GPS — download and use offline"
  },
  {
    icon: Leaf, title: "iNaturalist — AI Plant & Animal Identification for Foraging",
    description: "Identify any plant, animal, insect, or fungus using AI-powered image recognition backed by a global community of naturalists and scientists. Essential for survival foraging — know which plants are edible, which are medicinal, and which will kill you. Over 150 million observations from 2 million users. Snap a photo, get instant AI identification. Download observation data for offline reference. Knowledge that could mean the difference between dinner and danger.",
    emoji: "🌿", color: "from-green-600 to-lime-500",
    directUrl: "https://www.inaturalist.org/?via=aiwebtools",
    imageUrl: inaturalistHero,
    tags: ["plant identification", "AI species recognition", "foraging", "wildlife ID", "nature identification", "edible plants", "mushroom ID", "survival foraging", "biodiversity", "citizen science", "apocalypse ready"],
    category: "Specialized & Niche", rating: 4.7, totalVotes: 42000, isFree: true,
    tagline: "AI identifies any plant or animal from a photo — essential for survival foraging"
  },
  {
    icon: TreePine, title: "PlantNet — Botanical AI Plant Identification",
    description: "Identify plants instantly by photographing them. PlantNet uses deep learning trained on millions of botanical images to recognize over 40,000 plant species worldwide. Identify edible wild plants, medicinal herbs, poisonous species, and invasive plants. A collaborative citizen science project backed by major research institutions. When you need to know if that berry will feed you or poison you, PlantNet has the answer.",
    emoji: "🌱", color: "from-green-500 to-emerald-700",
    directUrl: "https://plantnet.org/?via=aiwebtools",
    imageUrl: plantnetHero,
    tags: ["plant identification", "botanical AI", "species recognition", "edible plants", "medicinal herbs", "poisonous plants", "foraging", "citizen science", "deep learning", "apocalypse ready"],
    category: "Specialized & Niche", rating: 4.6, totalVotes: 35000, isFree: true,
    tagline: "AI-powered plant identification — 40,000+ species, know what's edible vs deadly"
  },
  {
    icon: Star, title: "Star Walk — Celestial Navigation & Stargazing",
    description: "Navigate by the stars like ancient explorers. Star Walk turns your phone into a real-time star map — point it at the sky to identify stars, constellations, planets, satellites, and deep-sky objects. Essential for celestial navigation when GPS fails. Learn to find North using Polaris, track the sun's path for direction, and understand celestial patterns for time-keeping. When technology fails, the stars remain your eternal compass.",
    emoji: "⭐", color: "from-indigo-700 to-purple-900",
    directUrl: "https://starwalk.space/?via=aiwebtools",
    imageUrl: starWalkHero,
    tags: ["star map", "celestial navigation", "stargazing", "constellation guide", "astronomy", "night sky", "offline star chart", "navigation by stars", "Polaris", "apocalypse ready"],
    category: "Specialized & Niche", rating: 4.7, totalVotes: 22000,
    tagline: "Navigate by the stars when GPS dies — real-time sky map for celestial navigation"
  },
  {
    icon: Mountain, title: "Outdooractive — Offline Trail Maps & Route Planning",
    description: "Europe's largest outdoor platform with 400,000+ curated trails for hiking, cycling, mountain biking, and skiing. Download complete offline maps with elevation profiles, difficulty ratings, and points of interest. Plan routes, record tracks, and share adventures. Essential for wilderness travel and evacuation route planning when you need reliable offline trail navigation through backcountry terrain.",
    emoji: "⛰️", color: "from-orange-500 to-green-600",
    directUrl: "https://www.outdooractive.com/?via=aiwebtools",
    imageUrl: outdooractiveHero,
    tags: ["trail maps", "offline hiking", "route planning", "elevation profiles", "cycling maps", "backcountry navigation", "outdoor adventure", "wilderness travel", "evacuation routes", "apocalypse ready"],
    category: "Emergency Services", rating: 4.5, totalVotes: 14500,
    tagline: "400,000+ trails with offline maps — plan escape routes through any wilderness"
  },
  {
    icon: Cpu, title: "KoboldCPP — Offline Local AI Text Generation Engine",
    description: "Run powerful AI language models completely offline on your own hardware with zero internet dependency. KoboldCPP is a lightweight, single-file C++ inference engine supporting GGUF, GGML, and GPTQ model formats. Runs on CPU (no GPU required), supports Windows, Linux, and Mac. Load survival knowledge, medical guides, or any fine-tuned model. When cloud AI goes down, KoboldCPP keeps your local AI running.",
    emoji: "⚡", color: "from-green-600 to-gray-800",
    directUrl: "https://github.com/LostRuins/koboldcpp/?via=aiwebtools",
    imageUrl: koboldcppHero,
    tags: ["local AI", "offline LLM", "text generation", "GGUF", "CPU inference", "no GPU required", "open source", "self-hosted AI", "offline AI engine", "apocalypse ready", "C++"],
    category: "Local AI Solutions", rating: 4.6, totalVotes: 6800, isFree: true,
    tagline: "Run AI models offline on any computer — no GPU, no internet, just raw local intelligence"
  },
  {
    icon: Send, title: "LocalSend — File Sharing Without Internet",
    description: "Share files between devices on your local network without internet — like AirDrop but cross-platform. Works on Windows, Mac, Linux, Android, and iOS. Transfer documents, photos, survival guides, maps, and any data between devices using only local WiFi (no router needed with WiFi Direct). Open-source, encrypted, and completely free. When cloud storage dies, LocalSend keeps your team sharing critical information.",
    emoji: "📤", color: "from-blue-500 to-indigo-600",
    directUrl: "https://localsend.org/?via=aiwebtools",
    imageUrl: localsendHero,
    tags: ["file sharing", "no internet sharing", "AirDrop alternative", "cross-platform", "local network", "WiFi Direct", "open source", "encrypted transfer", "offline sharing", "apocalypse ready"],
    category: "Productivity & Utilities", rating: 4.7, totalVotes: 48000, isFree: true,
    tagline: "Cross-platform AirDrop without internet — share files locally between any devices"
  },
  {
    icon: RefreshCw, title: "Syncthing — Peer-to-Peer File Synchronization",
    description: "Continuous file synchronization between devices with no central server or cloud dependency. Your data stays on your devices — encrypted, private, and decentralized. Automatically sync survival documents, medical references, maps, and critical data between computers and phones on your local network. Open-source and trusted by privacy advocates worldwide. Keep your critical files synchronized across all devices without relying on anyone's cloud.",
    emoji: "🔄", color: "from-teal-600 to-blue-700",
    directUrl: "https://syncthing.net/?via=aiwebtools",
    imageUrl: syncthingHero,
    tags: ["file sync", "peer-to-peer", "decentralized", "no cloud", "privacy", "encrypted sync", "open source", "self-hosted", "continuous backup", "data sovereignty", "apocalypse ready"],
    category: "Productivity & Utilities", rating: 4.7, totalVotes: 62000, isFree: true,
    tagline: "Sync files between all your devices — no cloud, no servers, fully encrypted P2P"
  },
  {
    icon: Navigation, title: "Gaia GPS — Backcountry Offline Maps & Navigation",
    description: "The ultimate backcountry navigation app with downloadable offline maps including USGS topographic, satellite imagery, slope angle shading, and public land boundaries. Plan routes, track trips, and navigate remote wilderness with precision. Used by search and rescue teams, hunters, and backcountry explorers. Essential for off-road evacuation planning and wilderness survival navigation when cellular service is nonexistent.",
    emoji: "🏔️", color: "from-orange-600 to-green-700",
    directUrl: "https://www.gaiagps.com/?via=aiwebtools",
    imageUrl: gaiaGpsHero,
    tags: ["backcountry maps", "USGS topographic", "offline navigation", "satellite maps", "search and rescue", "wilderness navigation", "hunting maps", "public land", "trail navigation", "slope angle", "apocalypse ready"],
    category: "Emergency Services", rating: 4.6, totalVotes: 19500,
    tagline: "USGS topo maps + satellite imagery downloaded for offline backcountry survival navigation"
  }
];
