import { allTools } from "./src/data/toolsData.ts";
import { getToolsByMainCategory, getMainCategoriesWithCounts } from "./src/utils/categoryUtils/toolFiltering.ts";
console.log("total tools", allTools.length);
const pxb = allTools.filter(t => t.category === "Perplexity Bots");
console.log("raw perplexity bots tools", pxb.length);
const counts = getMainCategoriesWithCounts(allTools);
console.log("count via getMainCategoriesWithCounts", counts["PERPLEXITY BOTS"]);
const list = getToolsByMainCategory(allTools, "PERPLEXITY BOTS");
console.log("list via getToolsByMainCategory", list.length);
