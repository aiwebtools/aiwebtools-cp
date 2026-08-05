/**
 * Lazy title -> hero image lookup for search dropdowns.
 * The tools module is already loaded by the search engine, so this is cache-cheap.
 */
let cache: Map<string, string> | null = null;
let pending: Promise<Map<string, string>> | null = null;

const isUsable = (url?: string) => typeof url === "string" && url.length > 0;

export const getToolImageMapSync = () => cache;

export const loadToolImageMap = (): Promise<Map<string, string>> => {
  if (cache) return Promise.resolve(cache);
  if (pending) return pending;

  pending = import("@/data/toolsData")
    .then(({ allTools }) => {
      const map = new Map<string, string>();
      for (const tool of allTools as Array<{ title?: string; imageUrl?: string }>) {
        if (!tool?.title || !isUsable(tool.imageUrl)) continue;
        const key = tool.title.trim().toLowerCase();
        if (!map.has(key)) map.set(key, tool.imageUrl as string);
      }
      cache = map;
      return map;
    })
    .catch(() => new Map<string, string>());

  return pending;
};

export const getToolImage = (
  tool: { title?: string; imageUrl?: string } | null | undefined,
  map: Map<string, string> | null,
): string | undefined => {
  if (!tool) return undefined;
  if (isUsable(tool.imageUrl)) return tool.imageUrl;
  if (!map || !tool.title) return undefined;
  return map.get(tool.title.trim().toLowerCase());
};
