
import { Tool } from "@/types/tools";
import { ChefHat, Wine, Menu, UtensilsCrossed } from "lucide-react";
import culinaryMasterHero from "@/assets/tools/culinary-master-gpt-hero.jpg";

export const foodAndHospitalityGPTs: Tool[] = [
  {
    icon: Wine,
    title: "Mixologist GPT",
    description: "Mixologist GPT by AI Web Tools is your professional AI-powered bartending companion, transforming anyone into a skilled mixologist with expert cocktail knowledge and creative beverage innovation. Meet Kenny, your virtual bartender who brings decades of mixology expertise to your fingertips, helping you craft perfect cocktails for any occasion, mood, or flavor preference. Whether you're hosting intimate gatherings, running a professional bar, or exploring cocktail culture, Mixologist GPT provides personalized drink recommendations based on available ingredients, taste preferences, and seasonal selections. The AI analyzes flavor profiles, alcohol compatibility, and presentation techniques to suggest innovative cocktail combinations that impress guests and elevate any social experience. Upload photos of your bar setup or list available ingredients to receive custom cocktail recipes, precise mixing instructions, and professional presentation tips. Features include ingredient substitution suggestions, batch cocktail preparation for parties, wine and spirit pairing recommendations, and comprehensive bartending technique tutorials. Perfect for home entertainers seeking signature cocktails, professional bartenders exploring new creations, and hospitality professionals optimizing beverage programs. Kenny ensures every drink is balanced, delicious, and Instagram-worthy.",
    emoji: "🍸",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["cocktails", "bartending", "drinks", "mixology", "beverage creation", "cooking", "food", "recipe", "Custom GPT"],
    category: "Food & Hospitality",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: ChefHat,
    title: "Chef \"Sizzle\" AI Culinary Assistant",
    description: "Chef Sizzle by AI Web Tools is your ultimate AI-powered culinary companion, bringing professional chef expertise to home kitchens and commercial establishments worldwide. Meet Chef Sizzle, the GOAT of digital cooking who transforms ordinary ingredients into extraordinary culinary experiences through personalized recipe creation, advanced cooking techniques, and innovative flavor combinations. Whether you're following specific dietary requirements, exploring international cuisines, or seeking to impress dinner guests, Chef Sizzle crafts award-winning recipes tailored to your taste preferences, skill level, and available ingredients. The AI analyzes nutritional requirements, flavor profiles, and cooking methods to create perfectly balanced meals that satisfy both palate and health goals. Upload photos of ingredients or describe your cravings to receive custom recipes with step-by-step instructions, cooking tips, and presentation suggestions. Features include dietary restriction adaptations, meal planning optimization, cooking technique tutorials, and ingredient substitution recommendations. Perfect for home cooks seeking culinary inspiration, professional chefs exploring new concepts, and anyone wanting to elevate their cooking skills. Chef Sizzle ensures every meal is delicious, nutritious, and memorable, whether you're plant-based, meat-loving, or somewhere in between.",
    emoji: "👨‍🍳",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=89u14Jld7uA",
    tags: ["cooking", "recipes", "culinary arts", "chef assistant", "food preparation", "Custom GPT"],
    category: "Food & Hospitality",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Menu,
    title: "Restaurant Menu Maker GPT",
    description: "Restaurant Menu Maker GPT by AI Web Tools is your comprehensive AI-powered restaurant design and menu optimization solution, transforming food service operations through intelligent menu creation, strategic pricing, and customer engagement enhancement. This advanced tool revolutionizes how restaurants approach menu development by combining culinary expertise with business intelligence to create menus that maximize profitability while delighting customers. Whether you're launching a new restaurant, updating seasonal offerings, or optimizing existing menus, this AI delivers professionally designed, print-ready menus with strategic pricing and compelling descriptions that drive sales. The system analyzes food costs, competitor pricing, and customer preferences to suggest optimal menu structures that balance profitability with customer satisfaction. Upload your logo, describe your cuisine style, and input ingredient costs to receive fully customized menus with visually appealing designs, strategic item placement, and QR code integration for digital access. Features include profit margin analysis, food cost calculation, seasonal menu planning, dietary restriction accommodations, and comprehensive branding integration. Perfect for restaurant owners seeking competitive advantage, food service managers optimizing operations, and culinary entrepreneurs launching new concepts. Create menus that not only look professional but drive revenue growth through data-driven design and strategic pricing.",
    emoji: "📋",
    color: "from-green-500 to-blue-600",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["restaurant menus", "menu design", "food business", "restaurant marketing", "hospitality", "cooking", "food", "recipe", "Custom GPT"],
    category: "Food & Hospitality",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary Recipe Master GPT",
    description: "Culinary Master GPT is your expert AI kitchen companion, designed to elevate your cooking experience through comprehensive culinary guidance and personalized recipe assistance. This specialized cooking assistant provides professional-level culinary knowledge, helping both novice cooks and experienced chefs master the art of cooking with confidence and creativity. Whether you're planning weeknight dinners, preparing for special occasions, or exploring new cuisines, Culinary Master GPT offers detailed recipe instructions, cooking technique explanations, and ingredient substitution recommendations tailored to your preferences and dietary needs. The AI analyzes your cooking skill level, available ingredients, and flavor preferences to suggest perfectly matched recipes with step-by-step guidance and professional tips. Features include meal planning assistance, cooking time optimization, nutritional analysis, wine pairing suggestions, and troubleshooting for common cooking challenges. Perfect for home cooks seeking to expand their culinary repertoire, food enthusiasts exploring international flavors, and anyone wanting to create memorable dining experiences. Culinary Master GPT transforms your kitchen into a space of culinary discovery and mastery.",
    emoji: "🍳",
    color: "from-amber-500 to-orange-600",
     directUrl: "https://chatgpt.com/g/g-689239ba1cb0819197ae06454a25cee5-culinary-master-gpt",
     imageUrl: culinaryMasterHero,
    videoUrl: "https://youtu.be/YuLDWrZmRhc",
    tags: ["cooking", "culinary arts", "recipe assistant", "kitchen companion", "meal planning", "food preparation", "aiwebtools", "Custom GPT"],
    category: "Food & Hospitality",
    rating: 4.7,
    totalVotes: 4892
  }
];
