---
name: Pricing badges & pricing search
description: Every tool is classified Free/Freemium/Paid via pricingClassification.ts; badges on all cards; "free"/"freemium"/"paid" searches return the full matching set
type: feature
---
- `src/utils/pricingClassification.ts` — `getToolPricing`, `getPricingLabel`, `ensurePricingTags`.
- Free = AIWebTools originals/custom GPTs/Gems, open-source & always-free resources (github, huggingface, gutenberg, MIT OCW, etc). Paid = explicit "no free tier"/"paid only". Everything else = Freemium.
- `ensurePricingTags` runs in `src/data/toolsData.ts` so tags Free/Freemium/Paid are fully indexed (worker + main search).
- Badges: ToolCardHeader (top-right), MinimalToolCard (top-left), tool-detail ToolHeader. Gold = FREE, cyan/blue = FREEMIUM, gray = PAID.
- `useGlobalSearch` short-circuits pricing queries (free, free tools, freemium, paid, premium…) to return ALL matching tools first, then the rest — endless scroll loads them.
