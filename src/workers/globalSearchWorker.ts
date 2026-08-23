type SearchRequest = { id: number; query: string };

type SearchResultLite = {
  title: string;
  category?: string;
  description?: string;
  tags?: string[];
  directUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  emoji?: string;
  color?: string;
  rating?: number;
  totalVotes?: number;
  isFree?: boolean;
};

type SearchResponse = {
  id: number;
  query: string;
  results: SearchResultLite[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const editDistance = (a: string, b: string) => {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const saved = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = saved;
    }
  }
  return row[b.length];
};

const catalogKeys = ["title", "category", "tags", "directUrl", "imageUrl", "videoUrl", "emoji", "color", "rating", "totalVotes", "isFree"] as const;
type IndexedTool = {
  tool: SearchResultLite;
  order: number;
  title: string;
  titleCompact: string;
  titleWords: string[];
  category: string;
  tags: string;
  description: string;
  searchable: string;
};

let indexedToolsPromise: Promise<IndexedTool[]> | null = null;

const getIndexedTools = () => {
  if (indexedToolsPromise) return indexedToolsPromise;
  indexedToolsPromise = fetch("/search-catalog.json", { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Search catalog HTTP ${response.status}`);
      return response.json() as Promise<unknown[][]>;
    })
    .then((rows) => rows.map((row) =>
      Object.fromEntries(catalogKeys.map((key, index) => [key, row[index]]).filter(([, value]) => value !== null)) as SearchResultLite
    ))
    .then((tools) => tools.map((tool, order) => {
  const title = normalize(tool.title || "");
  const category = normalize(tool.category || "");
  const tags = normalize((tool.tags || []).join(" "));
  const description = "";
  return {
    tool,
    order,
    title,
    titleCompact: title.replace(/\s+/g, ""),
    titleWords: title.split(" ").filter(Boolean),
    category,
    tags,
    description,
    searchable: `${title} ${category} ${tags} ${description}`,
  };
    }));
  return indexedToolsPromise;
};

const scoreTool = (entry: IndexedTool, query: string, words: string[]) => {
  const compactQuery = query.replace(/\s+/g, "");
  let score = 0;

  if (entry.title === query) score += 1_000_000;
  else if (entry.titleCompact === compactQuery) score += 950_000;
  else if (entry.title.startsWith(query)) score += 500_000;
  else if (entry.title.includes(query)) score += 300_000;
  else if (entry.searchable.includes(query)) score += 100_000;

  let matchedWords = 0;
  for (const word of words) {
    if (entry.titleWords.includes(word)) {
      score += 45_000;
      matchedWords += 1;
    } else if (entry.titleWords.some((candidate) => candidate.startsWith(word) || word.startsWith(candidate))) {
      score += 25_000;
      matchedWords += 1;
    } else if (entry.category.includes(word) || entry.tags.includes(word)) {
      score += 8_000;
      matchedWords += 1;
    } else if (entry.description.includes(word)) {
      score += 1_500;
      matchedWords += 1;
    } else if (word.length >= 4 && entry.titleWords.some((candidate) => {
      if (Math.abs(candidate.length - word.length) > 2) return false;
      return editDistance(candidate, word) <= (word.length >= 8 ? 2 : 1);
    })) {
      score += 12_000;
      matchedWords += 1;
    }
  }

  if (words.length > 1 && matchedWords === words.length) score += 80_000;
  if (matchedWords === 0 && score === 0) return 0;
  if (entry.tags.includes("aiwebtools") || entry.tags.includes("custom gpt")) score += 2_000;
  score += Math.min(1_000, Number(entry.tool.rating || 0) * 100);
  return score;
};

const runSearch = async (rawQuery: string) => {
  const query = normalize(rawQuery);
  if (!query) return [];
  const words = query.split(" ").filter(Boolean);
  const indexedTools = await getIndexedTools();

  return indexedTools
    .map((entry) => ({ entry, score: scoreTool(entry, query, words) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.order - b.entry.order)
    .map(({ entry }) => entry.tool);
};

const workerScope = globalThis as typeof globalThis & {
  onmessage: ((event: MessageEvent<SearchRequest>) => void) | null;
  postMessage: (message: SearchResponse) => void;
};

workerScope.onmessage = async (event: MessageEvent<SearchRequest>) => {
  const { id, query } = event.data;
  try {
    workerScope.postMessage({ id, query, results: await runSearch(query) });
  } catch {
    workerScope.postMessage({ id, query, results: [] });
  }
};

export {};