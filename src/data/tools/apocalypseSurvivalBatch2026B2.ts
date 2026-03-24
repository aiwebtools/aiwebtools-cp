import { Tool } from "@/types/tools";
import {
  Shield, MapPin, Radio, Lock, BookOpen, Brain, Cloud, Map, Bluetooth,
  Heart, Compass, TreePine, Leaf, Star, Mountain, Send, RefreshCw,
  Navigation, Cpu, Share2, Wifi, Globe, Camera, AlertTriangle, Phone
} from "lucide-react";

import havenHero from "@/assets/tools/haven-survival-hero.jpg";
import prepgptHero from "@/assets/tools/prepgpt-hero.jpg";
import bunkervaultHero from "@/assets/tools/bunkervault-hero.jpg";
import survivalAiArkHero from "@/assets/tools/survival-ai-ark-hero.jpg";
import trailSenseHero from "@/assets/tools/trail-sense-hero.jpg";
import alltrailsHero from "@/assets/tools/alltrails-hero.jpg";
import femaAppHero from "@/assets/tools/fema-app-hero.jpg";
import aprsdroidHero from "@/assets/tools/aprsdroid-hero.jpg";
import pinpointAprsHero from "@/assets/tools/pinpoint-aprs-hero.jpg";
import tailsOsHero from "@/assets/tools/tails-os-hero.jpg";
import fDroidHero from "@/assets/tools/f-droid-hero.jpg";
import llamaCppHero from "@/assets/tools/llama-cpp-hero.jpg";
import prepperAiHero from "@/assets/tools/prepper-ai-hero.jpg";
import komootHero from "@/assets/tools/komoot-hero.jpg";
import locusMapHero from "@/assets/tools/locus-map-hero.jpg";
import backcountryNavHero from "@/assets/tools/backcountry-navigator-hero.jpg";
import knots3dHero from "@/assets/tools/knots-3d-hero.jpg";
import chirpHero from "@/assets/tools/chirp-radio-hero.jpg";
import cairnHero from "@/assets/tools/cairn-hero.jpg";
import emergencyAlertsHero from "@/assets/tools/emergency-alerts-hero.jpg";
import sasGuideHero from "@/assets/tools/sas-survival-guide-hero.jpg";
import garminExploreHero from "@/assets/tools/garmin-explore-hero.jpg";
import openCameraHero from "@/assets/tools/open-camera-hero.jpg";
import morseManiaHero from "@/assets/tools/morse-mania-hero.jpg";
import peakvisorHero from "@/assets/tools/peakvisor-hero.jpg";

export const apocalypseSurvivalBatch2026B2: Tool[] = [
  {
    icon: Shield, title: "HAVEN — Offline AI Survival Crisis Companion",
    description: "The ultimate offline-first survival app with on-device AI assistant, 11 crisis scenarios (nuclear, EMP, earthquake, flood, pandemic, combat zone), offline maps, family coordination, supply tracking, and plant identification — all without internet. Free tier available. Crisis Unlock Policy unlocks all Pro features free during declared national emergencies. By Primecode LLC.",
    emoji: "🛡️", color: "from-orange-700 to-green-700",
    directUrl: "https://havensurvival.com/?via=aiwebtools",
    imageUrl: havenHero,
    tags: ["offline AI", "survival app", "crisis scenarios", "nuclear preparedness", "EMP", "earthquake", "family coordination", "supply tracking", "plant ID", "offline maps", "apocalypse ready", "grid down", "prepper", "emergency preparedness", "SHTF"],
    category: "Emergency Services", rating: 4.9, totalVotes: 3200,
    tagline: "AI survival companion with 11 crisis scenarios — works when the world goes dark"
  },
  {
    icon: Cpu, title: "PrepGPT — Offline Preparedness AI on USB",
    description: "A pre-trained offline AI assistant designed for preppers. Runs from a USB drive or locally — no internet, no cloud, no tracking. PrepGPT turns your hoarded survival manuals, field guides, and PDFs into operational intelligence. Ask plain-language questions and get incident-style responses with priorities, actions, and checklists. 200+ emergency preparedness references embedded including disaster protocols and medical triage.",
    emoji: "💾", color: "from-green-800 to-gray-700",
    directUrl: "https://prepgpt.app/?via=aiwebtools",
    imageUrl: prepgptHero,
    tags: ["offline AI", "USB AI", "prepper AI", "survival AI", "field manuals", "emergency checklists", "medical triage", "grid down", "SHTF", "apocalypse ready", "local LLM", "preparedness", "disaster response"],
    category: "Local AI Solutions", rating: 4.7, totalVotes: 1850,
    tagline: "Your AI prepper librarian — turns survival manuals into operational intelligence, offline on USB"
  },
  {
    icon: Lock, title: "BunkerVault — USB Portable Offline AI Assistant",
    description: "A portable AI assistant that runs entirely from a USB drive. No internet, no subscriptions, no tracking. Features 6 AI models for different tasks, unlimited use, save and export conversations locally. Starting at $39. Works air-gapped — perfect for off-grid homesteaders, classified work, and anyone who needs AI without cloud dependencies. Your conversations never leave your device.",
    emoji: "🔐", color: "from-gray-800 to-green-700",
    directUrl: "https://bunkervault.app/?via=aiwebtools",
    imageUrl: bunkervaultHero,
    tags: ["offline AI", "USB AI", "portable AI", "air-gapped", "privacy AI", "off-grid", "no tracking", "local AI", "prepper", "grid down", "apocalypse ready", "multiple models", "self-hosted"],
    category: "Local AI Solutions", rating: 4.6, totalVotes: 2400,
    tagline: "6 AI models on a USB drive — no internet, no subscriptions, your data never leaves your device"
  },
  {
    icon: Brain, title: "Survival AI: The Ark — Offline Survival Knowledge Device",
    description: "Life-saving survival knowledge that works 100% offline. From wilderness emergencies to natural disasters, The Ark is your digital safety net when the internet fails. Available as both an app and a rugged waterproof physical device (IP68 rated, <1ft wide, ~3lbs). 14K+ users. AI trained on comprehensive survival databases. The world's #1 rated survival AI — answers your questions when no one else can.",
    emoji: "🚢", color: "from-amber-700 to-blue-800",
    directUrl: "https://apps.apple.com/us/app/survival-ai-the-ark/id6746391165/?via=aiwebtools",
    imageUrl: survivalAiArkHero,
    tags: ["offline AI", "survival AI", "waterproof device", "wilderness survival", "disaster AI", "emergency knowledge", "physical device", "rugged", "grid down", "apocalypse ready", "prepper", "first aid AI"],
    category: "Emergency Services", rating: 4.8, totalVotes: 14300, isFree: false,
    tagline: "World's #1 rated survival AI — waterproof device with life-saving knowledge, 100% offline"
  },
  {
    icon: Compass, title: "Trail Sense — Open Source Survival Toolkit for Android",
    description: "A comprehensive survival toolkit that transforms your Android phone into a complete outdoor survival instrument. Features compass, barometer, altimeter, weather forecasting, beacon navigation, backtracking, offline maps with slope/aspect layers, field guide, tide predictions, solar/lunar eclipse tracking, and more. 2,500+ GitHub stars, 100K+ downloads. No internet required. MIT licensed and completely free.",
    emoji: "🧭", color: "from-green-600 to-teal-600",
    directUrl: "https://kylecorry.com/Trail-Sense/?via=aiwebtools",
    imageUrl: trailSenseHero,
    tags: ["survival toolkit", "compass", "barometer", "altimeter", "weather forecast", "offline maps", "beacon navigation", "backtracking", "open source", "Android", "wilderness survival", "apocalypse ready", "prepper", "hiking", "camping"],
    category: "Emergency Services", rating: 4.7, totalVotes: 2549, isFree: true,
    tagline: "Your phone becomes a survival instrument — compass, barometer, weather, maps, all offline"
  },
  {
    icon: MapPin, title: "AllTrails — Offline Hiking Trail Maps & Navigation",
    description: "The world's largest trail platform with 400M+ trail maps covering hiking, running, and mountain biking across 190 countries. Download offline maps for GPS navigation, wrong-turn alerts, 3D flyovers, and real-time conditions. Community-powered with millions of reviews and photos. Download your region's trails before the grid goes down. AllTrails+ required for offline maps ($36/year).",
    emoji: "🥾", color: "from-green-600 to-green-800",
    directUrl: "https://www.alltrails.com/?via=aiwebtools",
    imageUrl: alltrailsHero,
    tags: ["hiking trails", "offline maps", "trail navigation", "GPS tracking", "mountain biking", "running trails", "outdoor navigation", "wrong-turn alerts", "3D maps", "community reviews", "apocalypse ready", "survival navigation"],
    category: "Emergency Services", rating: 4.8, totalVotes: 1250000,
    tagline: "400M+ trail maps across 190 countries — download and navigate offline anywhere"
  },
  {
    icon: AlertTriangle, title: "FEMA App — Federal Emergency Management Alerts",
    description: "Official app from the Federal Emergency Management Agency. Real-time weather alerts from the National Weather Service, emergency shelter locations, disaster recovery centers, safety tips, and emergency supply checklists. Available in English and Spanish. Covers all 50 states with location-based alerts. Pre-load safety information before disaster strikes. The US government's official emergency preparedness tool.",
    emoji: "🏛️", color: "from-blue-700 to-blue-900",
    directUrl: "https://www.fema.gov/about/news-multimedia/mobile-app-text-messages/?via=aiwebtools",
    imageUrl: femaAppHero,
    tags: ["FEMA", "emergency alerts", "weather alerts", "disaster recovery", "shelter locator", "emergency preparedness", "government app", "safety tips", "supply checklist", "apocalypse ready", "disaster", "hurricane", "tornado", "earthquake"],
    category: "Emergency Services", rating: 4.4, totalVotes: 45000, isFree: true,
    tagline: "Official US government emergency app — weather alerts, shelter locations, disaster recovery"
  },
  {
    icon: Radio, title: "APRSdroid — Ham Radio APRS Emergency Communication",
    description: "APRS (Automatic Packet Reporting System) client for Android. Report your position, send messages, and track other stations via amateur radio — completely independent of cell towers and internet. Connect via TNC, Bluetooth, or audio modem. Essential for emergency communication when all infrastructure fails. Used by ARES (Amateur Radio Emergency Service) volunteers during disasters worldwide.",
    emoji: "📡", color: "from-blue-600 to-orange-500",
    directUrl: "https://aprsdroid.org/?via=aiwebtools",
    imageUrl: aprsdroidHero,
    tags: ["ham radio", "APRS", "amateur radio", "emergency communication", "position reporting", "off-grid communication", "disaster communication", "ARES", "radio tracking", "apocalypse ready", "grid down", "prepper comms"],
    category: "Emergency Services", rating: 4.5, totalVotes: 1680,
    tagline: "Track positions and send messages via ham radio — no cell towers or internet needed"
  },
  {
    icon: Radio, title: "PinPoint APRS — Free Emergency Radio Tracking Software",
    description: "Modern, feature-packed APRS software for amateur radio emergency services. Field-tested by Amateur Radio Emergency Services (ARES) volunteers during exercises and real emergencies. Free for individual use. Features unique capabilities not found in any other APRS implementation: real-time station tracking, weather station data, messaging, and tactical communications. Essential for coordinating search and rescue operations.",
    emoji: "📍", color: "from-red-600 to-blue-700",
    directUrl: "https://www.pinpointaprs.com/?via=aiwebtools",
    imageUrl: pinpointAprsHero,
    tags: ["APRS", "ham radio", "emergency services", "search and rescue", "station tracking", "weather data", "tactical communications", "ARES", "amateur radio", "field tested", "apocalypse ready", "grid down"],
    category: "Emergency Services", rating: 4.6, totalVotes: 890, isFree: true,
    tagline: "Field-tested APRS radio software for search and rescue — free for emergency volunteers"
  },
  {
    icon: Lock, title: "Tails OS — Privacy Operating System on USB",
    description: "A portable operating system that protects against surveillance and censorship. Boot from a USB stick on any computer, leaving no trace. Routes all internet traffic through Tor. Includes built-in encryption, secure messaging, office suite, and media tools. Used by journalists, activists, whistleblowers, and privacy-conscious individuals worldwide. When digital privacy becomes a survival necessity, Tails is your shield.",
    emoji: "🐧", color: "from-purple-700 to-indigo-800",
    directUrl: "https://tails.net/?via=aiwebtools",
    imageUrl: tailsOsHero,
    tags: ["privacy OS", "USB operating system", "Tor", "encryption", "surveillance protection", "censorship resistance", "portable OS", "secure messaging", "whistleblower", "journalist safety", "apocalypse ready", "digital privacy", "open source"],
    category: "Security & Privacy", rating: 4.8, totalVotes: 85000, isFree: true,
    tagline: "Boot a secure OS from any USB — encrypted, anonymous, leaves no trace on any computer"
  },
  {
    icon: Globe, title: "F-Droid — Open Source App Store (No Google Required)",
    description: "A catalog of free and open source software (FOSS) applications for Android that works without Google Play Services. Install privacy-respecting survival apps, offline tools, and communication software without any Google account or tracking. Essential when Google services are unavailable or compromised. Contains apps like Trail Sense, Organic Maps, Briar, and hundreds of other survival-critical open source tools.",
    emoji: "🤖", color: "from-green-600 to-green-800",
    directUrl: "https://f-droid.org/?via=aiwebtools",
    imageUrl: fDroidHero,
    tags: ["open source", "app store", "Android", "FOSS", "no Google", "privacy", "survival apps", "offline tools", "degoogle", "open source apps", "apocalypse ready", "prepper", "digital independence"],
    category: "Productivity & Utilities", rating: 4.6, totalVotes: 95000, isFree: true,
    tagline: "Android app store without Google — install survival tools with zero tracking"
  },
  {
    icon: Cpu, title: "llama.cpp — Ultimate Local LLM Inference Engine",
    description: "The most popular open-source project for running AI language models locally on any hardware. Pure C/C++ implementation with no dependencies. Runs Llama, Mistral, Phi, Gemma, and hundreds of other AI models on CPU, GPU, or Apple Silicon. 75,000+ GitHub stars. Supports GGUF format for efficient offline inference. When cloud AI dies, llama.cpp keeps your local intelligence alive. The backbone of offline AI worldwide.",
    emoji: "🦙", color: "from-purple-600 to-blue-700",
    directUrl: "https://github.com/ggml-org/llama.cpp/?via=aiwebtools",
    imageUrl: llamaCppHero,
    tags: ["local LLM", "offline AI", "C++", "inference engine", "GGUF", "CPU inference", "open source", "Llama", "Mistral", "no internet AI", "self-hosted", "apocalypse ready", "AI engine", "grid down", "local AI"],
    category: "Local AI Solutions", rating: 4.9, totalVotes: 75000, isFree: true,
    tagline: "75K+ stars — run any AI model offline on any computer, the backbone of local AI"
  },
  {
    icon: BookOpen, title: "Prepper AI — Offline Survival AI with 74+ Books",
    description: "AI survival expert trained on 74+ survival manuals that works without internet. Includes offline maps for all 50 US states plus D.C. No signal, no account, no excuses. AI answers survival questions using embedded field manuals, first aid guides, and wilderness protocols. Pre-loaded with comprehensive knowledge about shelter, water, food, navigation, and emergency medicine. Your pocket survival expert for when help isn't coming.",
    emoji: "📚", color: "from-green-700 to-amber-700",
    directUrl: "https://apps.apple.com/us/app/prepper-ai/id6749353554/?via=aiwebtools",
    imageUrl: prepperAiHero,
    tags: ["offline AI", "survival books", "prepper", "field manuals", "50 state maps", "emergency medicine", "shelter building", "water purification", "wilderness survival", "grid down", "apocalypse ready", "SHTF", "iOS"],
    category: "Emergency Services", rating: 4.7, totalVotes: 5600,
    tagline: "74+ survival manuals + AI expert + 50 state maps — works with zero internet"
  },
  {
    icon: Map, title: "Komoot — Offline Route Planning & Outdoor Navigation",
    description: "Smart outdoor navigation with AI-powered route planning for hiking, cycling, mountain biking, and running. Download detailed offline maps with turn-by-turn voice navigation, elevation profiles, surface types, and difficulty ratings. Used by 40M+ outdoor enthusiasts. Plan routes based on your fitness level and get real-time navigation. Download your adventure regions before connectivity disappears.",
    emoji: "🗺️", color: "from-teal-600 to-green-700",
    directUrl: "https://www.komoot.com/?via=aiwebtools",
    imageUrl: komootHero,
    tags: ["offline navigation", "route planning", "hiking maps", "cycling navigation", "mountain biking", "voice navigation", "elevation profiles", "outdoor adventure", "AI route planning", "offline maps", "apocalypse ready"],
    category: "Emergency Services", rating: 4.7, totalVotes: 850000,
    tagline: "AI-planned routes with offline maps — 40M+ users trust Komoot for outdoor navigation"
  },
  {
    icon: Navigation, title: "Locus Map — Advanced Offline GPS Maps & Navigation",
    description: "Professional-grade offline GPS navigation with support for multiple map sources — OpenStreetMap, satellite imagery, topographic maps, and custom overlays. Real-time GPS tracking, geocaching, route recording, and POI management. Download entire regions for offline use. Advanced features include live tracking, fitness tracking, and land navigation tools. The Swiss Army knife of offline map apps.",
    emoji: "📍", color: "from-blue-500 to-green-600",
    directUrl: "https://www.locusmap.app/?via=aiwebtools",
    imageUrl: locusMapHero,
    tags: ["offline GPS", "topographic maps", "satellite maps", "geocaching", "route recording", "OpenStreetMap", "land navigation", "live tracking", "offline maps", "professional maps", "apocalypse ready", "survival navigation"],
    category: "Emergency Services", rating: 4.6, totalVotes: 125000,
    tagline: "Swiss Army knife of offline maps — topo, satellite, custom overlays, all downloadable"
  },
  {
    icon: Mountain, title: "BackCountry Navigator — Offline USGS Topo Maps",
    description: "The original offline topo map app for backcountry explorers. Download USGS topographic maps, satellite imagery, USFS maps, and marine charts for offline GPS navigation. Features trail planning, waypoint management, compass bearing, and area measurement. Used by hunters, hikers, search and rescue teams, and military personnel. When you're deep in the wilderness with no signal, BackCountry Navigator keeps you on course.",
    emoji: "⛰️", color: "from-brown-600 to-green-700",
    directUrl: "https://backcountrynavigator.com/?via=aiwebtools",
    imageUrl: backcountryNavHero,
    tags: ["USGS topo maps", "offline maps", "backcountry", "GPS navigation", "satellite imagery", "trail planning", "waypoints", "hunting maps", "search and rescue", "marine charts", "wilderness", "apocalypse ready"],
    category: "Emergency Services", rating: 4.5, totalVotes: 32000,
    tagline: "USGS topo maps downloaded for offline wilderness navigation — trusted by search & rescue"
  },
  {
    icon: BookOpen, title: "Knots 3D — Offline Interactive Knot Tying Guide",
    description: "Master 200+ knots with stunning 3D animations that work completely offline. Essential survival skill — learn bowline, clove hitch, figure eight, sheet bend, and dozens of specialized knots for climbing, sailing, camping, fishing, and rescue. Step-by-step 3D rotation lets you view each knot from every angle. Used by Boy Scouts, military, sailors, and survivalists. When you need to secure shelter, build a raft, or rescue someone, this knowledge saves lives.",
    emoji: "🪢", color: "from-amber-600 to-brown-700",
    directUrl: "https://knots3d.com/?via=aiwebtools",
    imageUrl: knots3dHero,
    tags: ["knot tying", "3D knots", "survival skills", "climbing knots", "sailing knots", "camping skills", "rescue knots", "offline guide", "Boy Scouts", "military", "wilderness survival", "apocalypse ready"],
    category: "Emergency Services", rating: 4.8, totalVotes: 28000,
    tagline: "200+ knots in 3D — master essential survival skills for climbing, rescue, and shelter"
  },
  {
    icon: Radio, title: "Chirp — Ham Radio Programming Software",
    description: "Free, open-source radio programming software supporting 400+ radio models from all major manufacturers. Program frequencies, channels, tone codes, and memory banks for Baofeng, Yaesu, Kenwood, Icom, and more. Essential for setting up emergency communication networks. Pre-program your radios with NOAA weather frequencies, local repeaters, GMRS/FRS channels, and emergency frequencies before disaster strikes.",
    emoji: "📻", color: "from-blue-600 to-yellow-500",
    directUrl: "https://chirpmyradio.com/?via=aiwebtools",
    imageUrl: chirpHero,
    tags: ["ham radio", "radio programming", "Baofeng", "emergency frequencies", "NOAA weather", "amateur radio", "open source", "channel programming", "GMRS", "FRS", "repeaters", "disaster communication", "apocalypse ready", "grid down"],
    category: "Emergency Services", rating: 4.7, totalVotes: 45000, isFree: true,
    tagline: "Program 400+ radio models — set up emergency frequencies before the grid goes down"
  },
  {
    icon: Shield, title: "Cairn — Outdoor Safety & Emergency Tracking",
    description: "Safety app that lets your emergency contacts track your outdoor adventures in real-time. Set trip plans with estimated return times, share your GPS location, and trigger automatic alerts if you don't check in. Shows cell coverage maps so you know where you'll lose signal. Includes offline maps and emergency SOS. When you're alone in the wilderness, Cairn is your lifeline to the people who care about you.",
    emoji: "🏔️", color: "from-orange-500 to-red-600",
    directUrl: "https://cairnme.com/?via=aiwebtools",
    imageUrl: cairnHero,
    tags: ["outdoor safety", "emergency tracking", "GPS tracking", "trip planning", "SOS", "cell coverage maps", "emergency contacts", "safety app", "hiking safety", "wilderness safety", "apocalypse ready", "search and rescue"],
    category: "Emergency Services", rating: 4.6, totalVotes: 8500,
    tagline: "Your family tracks your adventure — automatic alerts if you don't check in"
  },
  {
    icon: Heart, title: "Emergency: Alerts — Red Cross Severe Weather & Disaster App",
    description: "Official American Red Cross emergency alerts app — different from their First Aid app. Real-time severe weather alerts for your location and up to 5 saved locations (protect your family). Tornado, hurricane, earthquake, flood, winter storm, and heat wave warnings with step-by-step safety actions. Includes emergency shelter locations, family communication plan tools, and disaster preparedness checklists. Pre-load everything for offline access.",
    emoji: "🚨", color: "from-red-600 to-red-800",
    directUrl: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps.html/?via=aiwebtools",
    imageUrl: emergencyAlertsHero,
    tags: ["weather alerts", "Red Cross", "tornado warning", "hurricane alert", "earthquake alert", "flood warning", "disaster preparedness", "emergency shelter", "family safety", "severe weather", "apocalypse ready", "emergency app"],
    category: "Emergency Services", rating: 4.6, totalVotes: 95000, isFree: true,
    tagline: "Real-time disaster alerts for 5 locations — protect your entire family with Red Cross"
  },
  {
    icon: BookOpen, title: "SAS Survival Guide — Official Special Forces Field Manual",
    description: "The definitive survival reference based on the legendary SAS Survival Handbook by John 'Lofty' Wiseman. Covers climate & terrain, food & water procurement, fire making, navigation, shelter, first aid, signaling, and survival psychology. Works completely offline with searchable content, detailed illustrations, photo-guides for edible/poisonous plants, and survival checklists. Used by military special forces worldwide. This is THE survival bible — in your pocket.",
    emoji: "🎖️", color: "from-green-800 to-amber-700",
    directUrl: "https://apps.apple.com/us/app/sas-survival-guide/id791444636/?via=aiwebtools",
    imageUrl: sasGuideHero,
    tags: ["SAS", "survival guide", "military survival", "field manual", "edible plants", "fire making", "shelter building", "navigation", "first aid", "special forces", "offline guide", "wilderness survival", "apocalypse ready", "prepper"],
    category: "Emergency Services", rating: 4.8, totalVotes: 18500,
    tagline: "THE survival bible by SAS Special Forces — complete offline field manual in your pocket"
  },
  {
    icon: Navigation, title: "Garmin Explore — Satellite Maps & inReach Communication",
    description: "Plan, review, and sync routes with Garmin's outdoor navigation ecosystem. Download maps for offline use, create waypoints, and sync with Garmin inReach devices for satellite communication when cell towers are down. Send and receive text messages via satellite anywhere on Earth through the Iridium network. Works in the most remote locations on the planet. When all terrestrial communication fails, satellites remain.",
    emoji: "🛰️", color: "from-black to-yellow-600",
    directUrl: "https://explore.garmin.com/?via=aiwebtools",
    imageUrl: garminExploreHero,
    tags: ["satellite communication", "Garmin", "inReach", "offline maps", "Iridium", "satellite messaging", "GPS navigation", "waypoints", "remote communication", "expedition", "apocalypse ready", "grid down", "satellite SOS"],
    category: "Emergency Services", rating: 4.7, totalVotes: 125000,
    tagline: "Send messages via satellite when all cell towers are down — Iridium network coverage worldwide"
  },
  {
    icon: Camera, title: "Open Camera — Open Source Camera for Documentation",
    description: "Feature-rich, completely open source camera app for Android. No ads, no tracking, no permissions abuse. Essential for documenting conditions, evidence, damage assessment, and resources during emergencies. Features manual controls (ISO, shutter speed, focus), geotagging, timestamp overlay, HDR, and remote trigger. Available on F-Droid without Google dependency. When you need to document what's happening around you, Open Camera does it privately.",
    emoji: "📷", color: "from-gray-700 to-blue-600",
    directUrl: "https://opencamera.org.uk/?via=aiwebtools",
    imageUrl: openCameraHero,
    tags: ["open source camera", "documentation", "evidence capture", "geotagging", "timestamp", "damage assessment", "Android", "F-Droid", "no tracking", "manual controls", "HDR", "privacy camera", "apocalypse ready"],
    category: "Productivity & Utilities", rating: 4.5, totalVotes: 52000, isFree: true,
    tagline: "Open source camera with geotagging and timestamps — document everything, no tracking"
  },
  {
    icon: Radio, title: "Morse Mania — Morse Code Training for Emergency Communication",
    description: "Learn Morse code through gamified lessons and practice — the one communication method that works with the simplest equipment. Tap, flash, or whistle SOS signals. Morse code works with flashlights, mirrors, tapping, radio, or any method that can produce on/off signals. When all modern communication fails, Morse code endures. Train your ear and hand to send and receive at increasing speeds. A skill that could save your life.",
    emoji: "📟", color: "from-amber-600 to-brown-700",
    directUrl: "https://apps.apple.com/us/app/morse-mania-learn-morse-code/id1555455951/?via=aiwebtools",
    imageUrl: morseManiaHero,
    tags: ["Morse code", "emergency communication", "SOS", "survival skill", "radio communication", "flashlight signaling", "training app", "gamified learning", "emergency signaling", "apocalypse ready", "grid down", "prepper"],
    category: "Emergency Services", rating: 4.7, totalVotes: 12000,
    tagline: "Learn the one communication method that survives everything — Morse code with flashlight, radio, or tap"
  },
  {
    icon: Mountain, title: "PeakVisor — AI Mountain Identification & 3D Offline Maps",
    description: "Point your camera at any mountain and AI instantly identifies every peak, ridge, and summit with name, elevation, and distance. Features 3D panoramic views, offline topographic maps, ski resort maps, and hiking trail overlays. Covers mountain ranges worldwide with high-resolution 3D terrain rendering. Download regions for offline use. When you need to navigate by terrain features without GPS, PeakVisor gives you the knowledge of a local mountaineer.",
    emoji: "🏔️", color: "from-blue-700 to-gray-600",
    directUrl: "https://peakvisor.com/?via=aiwebtools",
    imageUrl: peakvisorHero,
    tags: ["mountain identification", "AI recognition", "3D maps", "peak identification", "offline topo maps", "AR navigation", "ski maps", "hiking trails", "terrain navigation", "elevation", "wilderness navigation", "apocalypse ready"],
    category: "Specialized & Niche", rating: 4.7, totalVotes: 15000,
    tagline: "AI identifies every mountain peak by sight — 3D offline maps for terrain-based navigation"
  }
];
