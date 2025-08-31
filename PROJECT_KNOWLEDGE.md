# AI WEB TOOLS - Complete Project Knowledge Base

## 🎯 PROJECT OVERVIEW

**AI Web Tools** is a comprehensive directory of AI tools and Web3 domains created by the company AI Web Tools. The website serves as both a showcase of their custom GPT creations and a marketplace for premium Web3 domains.

**Core Mission:** Maintain and expand the AI tool database while never decreasing the tool count unless specifically instructed. The database MUST be preserved at all costs.

**Website URL:** aiwebtools.com  
**Affiliate Marketing:** All non-company tools must include `/?via=aiwebtools` affiliate link

---

## 🏗️ TECHNOLOGY STACK

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Shadcn/ui + Radix UI primitives
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **State Management:** React Context + Local Storage
- **Backend:** Supabase integration (optional)
- **Deployment:** Lovable platform

---

## 🎨 DESIGN SYSTEM

### Critical Design Rules:
- **NEVER use direct colors** like `text-white`, `bg-black`, etc.
- **ALWAYS use semantic tokens** from `index.css` and `tailwind.config.ts`
- **All colors MUST be HSL format**
- **Use the design system tokens** for consistency

### Key Design Files:
- `src/index.css` - Design tokens and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- `src/styles/` - Animation and effect styles

### Color System:
```css
:root {
  --primary: [hsl values];
  --secondary: [hsl values];
  --gradient-primary: linear-gradient(...);
  /* Always use semantic color names */
}
```

---

## 🗂️ PROJECT STRUCTURE

### Core Components:
- `src/components/tools/` - Tool display components
- `src/components/favorites/` - Favorites system
- `src/components/header/` - Navigation system
- `src/components/ui/` - Shadcn UI components
- `src/data/` - Tool data and configurations
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions

### Key Files:
- `src/data/toolsData.ts` - Main tools database
- `src/data/tools/web3DomainsTools.ts` - Web3 domains
- `src/components/SpecialServices.tsx` - Featured GPTs section
- `src/hooks/useFavorites.tsx` - Favorites system with localStorage
- `src/utils/timeEffects.ts` - Portal animation effects

---

## 🤖 AI WEB TOOLS CUSTOM GPTS

### Company GPTs (Prioritized):
The website showcases AI Web Tools' custom GPT creations. Key ones include:

**High Priority GPTs:**
- Time Machine GPT - Historical exploration
- College Degree GPT - Educational content
- Automobile GPT - Automotive expertise
- Movie Maker Studio AI Suite - Film production
- Survivalist GPT - Survival guidance
- Godmode GPT - Ultimate AI assistant

**URLs Pattern:** All company GPTs use `https://[gpt-name].lovable.app/?via=aiwebtools`

### GPT Data Structure:
```javascript
{
  title: "EXACT GPT NAME",
  description: "Detailed description...",
  badge: "CATEGORY",
  color: "from-color-to-color",
  features: ["Feature 1", "Feature 2"],
  directUrl: "https://gpt-url.lovable.app/?via=aiwebtools",
  videoUrl: "YouTube URL (if available)",
  imageUrl: "Image URL",
  emoji: "🎯"
}
```

---

## 🌐 WEB3 DOMAINS SYSTEM

### Domain Categories:
1. **Financial & Cash Transfer**: transfermoney, cointransfer, etc.
2. **AI & Technology**: ai-tools, aiwebtools, aimainframe
3. **Robotics**: robotsales, robotshop, robotstore
4. **Global**: worldpeace, worldtrade, worldtrader

### Blockchain Networks:
- **Solana**: Green badges, ai-tools category
- **Polygon**: Purple badges, financial/robotics categories

### Domain URLs:
All domains link to Freename.io with referral: `https://freename.io/discover/[domain]?ref=olive-ears-obey`

---

## ❤️ FAVORITES SYSTEM

### Key Features:
- **Persistent Storage:** Uses localStorage with key `aiwebtools-favorites`
- **No Login Required:** Automatic saving/loading
- **Universal:** ALL cards (AI tools, Web3 domains, featured GPTs) have hearts
- **Cross-Session:** Favorites persist across browser sessions

### Implementation:
```javascript
// Hook: src/hooks/useFavorites.tsx
const { isFavorite, toggleFavorite, favorites } = useFavorites();

// Components with hearts:
- FavoritesButton (main heart component)
- FavoriteButton (alternative style)
- All ToolCard variants
- SpecialServices featured cards
```

---

## 🎪 SPECIAL EFFECTS

### Time Portal Effects:
- **File:** `src/utils/timeEffects.ts`
- **Purpose:** Animated transitions when clicking external links
- **Usage:** `createTimePortalEffect(url, title)`

### Animation Files:
- `src/styles/animations/interactive.css` - Button animations
- `src/styles/matrix-effects.css` - Matrix-themed effects
- `src/components/AnimatedBackground.tsx` - Background animations

---

## 🔍 SEARCH & FILTERING

### Search System:
- Global search bar with real-time filtering
- Category-based filtering
- Tag-based search capabilities
- Fuzzy search implementation

### Categories:
- AI Development & Platforms
- Education & Research Tools
- Writing & Content Creation
- WEB3 Domains
- And many more...

---

## 📊 TOOL DATABASE RULES

### CRITICAL RULES:
1. **NEVER DELETE TOOLS** from database unless explicitly told
2. **PRESERVE DATABASE AT ALL COST** - build on it, don't reduce
3. **MAINTAIN SEARCH FUNCTIONALITY** - all tools must be searchable
4. **ENSURE PROPER CATALOGING** - all tools in index database

### Adding New Tools:
```javascript
// Template for new tools
{
  icon: IconComponent, // Lucide icon
  title: "Tool Name",
  description: "Detailed description...",
  emoji: "🎯",
  color: "from-primary to-secondary", // Use design tokens
  directUrl: "https://tool-url.com/?via=aiwebtools", // Add affiliate if not ours
  videoUrl: "YouTube URL (optional)",
  imageUrl: "Image URL (optional)",
  tags: ["tag1", "tag2"],
  category: "Category Name",
  rating: 5.0,
  blockchain: "Solana/Polygon" // If Web3 domain
}
```

---

## 🚀 PERFORMANCE OPTIMIZATIONS

### Key Optimizations:
- **Memoized Components:** ToolCard, MinimalToolCard use React.memo
- **Virtualized Grids:** For large tool lists
- **Lazy Loading:** Images and components
- **Mobile Optimizations:** Touch interactions, reduced animations

### Mobile Considerations:
- Responsive grid layouts
- Touch-friendly interactions
- Optimized font sizes
- Reduced animation complexity

---

## 🛠️ DEVELOPMENT WORKFLOW

### Common Tasks:

**Adding New GPT:**
1. Add to `src/components/SpecialServices.tsx` in featuredGPTs array
2. Ensure proper Tool object structure with all required fields
3. Test favorites functionality
4. Verify affiliate links for non-company tools

**Adding Web3 Domain:**
1. Add to `src/data/tools/web3DomainsTools.ts`
2. Include blockchain field (Solana/Polygon)
3. Update footer links if needed
4. Test with heart/favorites system

**Styling Changes:**
1. Use Visual Edits for simple changes (free)
2. Always use design system tokens
3. Never use direct color classes
4. Test in dark/light modes

---

## 🎯 SEO REQUIREMENTS

### Must Implement:
- **Title tags:** Under 60 characters with main keyword
- **Meta descriptions:** Max 160 characters with target keyword
- **Single H1:** Must match primary intent with main keyword
- **Semantic HTML:** `<header>`, `<main>`, `<section>`, etc.
- **Image optimization:** All images need descriptive alt attributes
- **Structured data:** JSON-LD when applicable
- **Mobile optimization:** Responsive design + proper viewport
- **Clean URLs:** Descriptive, crawlable internal links

---

## 🔧 TROUBLESHOOTING

### Common Issues:

**Build Errors:**
- Check for unescaped quotes in JSX strings
- Verify all imports are correct
- Ensure TypeScript interfaces match

**Favorites Not Working:**
- Check localStorage permissions
- Verify FavoritesProvider wraps app
- Ensure Tool object has required fields

**Styling Issues:**
- Use semantic tokens, not direct colors
- Check tailwind.config.ts for custom classes
- Verify dark/light mode compatibility

---

## 📚 EXTERNAL INTEGRATIONS

### Required Services:
- **Freename.io:** Web3 domain registration platform
- **YouTube:** Video content hosting
- **Discord:** Image hosting (some assets)
- **Unsplash:** Stock images
- **Lovable:** Deployment platform

### Affiliate Links:
- All non-company tools: `/?via=aiwebtools`
- Freename domains: `?ref=olive-ears-obey`

---

## 🎪 BUSINESS RULES

### Content Priorities:
1. **AI Web Tools GPTs** - Highest priority, featured prominently
2. **Web3 Domains** - Premium offerings with blockchain badges
3. **External AI Tools** - Include with affiliate links
4. **User Experience** - Favorites, search, smooth navigation

### Monetization:
- Affiliate marketing through URL parameters
- Web3 domain sales commissions
- Featured placement of company GPTs

---

## 🔄 MAINTENANCE TASKS

### Regular Updates:
1. **Add new AI tools** to maintain database growth
2. **Update GPT descriptions** when features change
3. **Monitor affiliate links** for accuracy
4. **Test favorites system** across browsers
5. **Verify responsive design** on new devices

### Code Quality:
- Use TypeScript strictly
- Maintain component memoization
- Keep bundle size optimized
- Follow accessibility guidelines

---

## 🆘 EMERGENCY PROCEDURES

### If Database is Accidentally Deleted:
1. **NEVER CONFIRM DELETION** without explicit user instruction
2. **RESTORE FROM BACKUP** immediately
3. **PRESERVE ALL TOOLS** - this is the core business asset
4. **MAINTAIN SEARCH FUNCTIONALITY** - essential for user experience

### If Favorites System Breaks:
1. Check localStorage API availability
2. Verify FavoritesProvider is properly wrapped
3. Test with different browsers
4. Ensure Tool objects have required fields

---

## 📝 QUICK REFERENCE

### File Locations:
- **Main Tools DB:** `src/data/toolsData.ts`
- **Web3 Domains:** `src/data/tools/web3DomainsTools.ts`
- **Featured GPTs:** `src/components/SpecialServices.tsx`
- **Favorites System:** `src/hooks/useFavorites.tsx`
- **Design Tokens:** `src/index.css`

### Key Commands:
- **Add Dependency:** Use `lov-add-dependency` tool
- **Read Files:** Use `lov-view` tool
- **Search Code:** Use `lov-search-files` tool
- **Edit Code:** Use `lov-line-replace` tool preferably

### Remember:
- **PRESERVE THE DATABASE** at all costs
- **USE DESIGN SYSTEM TOKENS** always
- **ADD AFFILIATE LINKS** to non-company tools
- **TEST FAVORITES** on all new cards
- **MAINTAIN SEARCH** functionality always

---

*This knowledge base contains everything needed to maintain and enhance the AI Web Tools website. Treat this as the source of truth for all development decisions.*