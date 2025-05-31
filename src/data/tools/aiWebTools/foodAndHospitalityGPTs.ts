
import { Tool } from "@/types/tools";
import { ChefHat, Wine, Menu, Utensils } from "lucide-react";

export const foodAndHospitalityGPTs: Tool[] = [
  {
    icon: Wine,
    title: "Mixologist GPT",
    description: "Meet Kenny, the Mixology GPT, your virtual bartender 🍸. He whips up custom cocktails based on your vibe, ingredients, and taste—fun, fresh, and always on point.",
    emoji: "🍸",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["cocktails", "bartending", "drinks", "mixology", "beverage creation"],
    category: "Food & Hospitality",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: ChefHat,
    title: "Chef \"Sizzle\" AI Culinary Assistant",
    description: "Chef Sizzle, the GOAT of the digital kitchen 👨‍🍳🔥. He crafts award-winning, drool-worthy recipes tailored to you—whether you're plant-based, meat-lovin', or somewhere in between.",
    emoji: "👨‍🍳",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    tags: ["cooking", "recipes", "culinary arts", "chef assistant", "food preparation"],
    category: "Food & Hospitality",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Menu,
    title: "Restaurant Menu Maker GPT",
    description: "Restaurant Menu Maker GPT is an advanced AI tool that creates fully customized, professional restaurant menus with visually appealing designs, optimized dish descriptions, and strategic pricing. It works step by step to gather business details, refine menu ideas, and generate a print-ready menu in PDF or DOCX format. The AI seamlessly integrates branding elements like logos, colors, and fonts while offering food pairing suggestions and profitability insights. It also provides QR code integration for digital menus, making it easy for customers to access menus on their devices. Whether you're launching a new restaurant or revamping an existing menu, this AI ensures a polished and engaging dining experience.",
    emoji: "📋",
    color: "from-green-500 to-blue-600",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["restaurant menus", "menu design", "food business", "restaurant marketing", "hospitality"],
    category: "Food & Hospitality",
    rating: 4.6,
    totalVotes: 4321
  }
];
