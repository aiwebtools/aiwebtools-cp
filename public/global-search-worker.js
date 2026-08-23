const keys = ["title", "category", "tags", "directUrl", "imageUrl", "videoUrl", "emoji", "color", "rating", "totalVotes", "isFree"];
let indexPromise;

const normalize = (value) => String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

const distance = (a, b) => {
  if (a === b) return 0;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const saved = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = saved;
    }
  }
  return row[b.length];
};

const loadIndex = () => {
  if (!indexPromise) {
    indexPromise = fetch("/search-catalog.json", { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error(`Search catalog HTTP ${response.status}`);
        return response.json();
      })
      .then((rows) => rows.map((row, order) => {
        const tool = Object.fromEntries(keys.map((key, i) => [key, row[i]]).filter(([, value]) => value !== null));
        const title = normalize(tool.title);
        const category = normalize(tool.category);
        const tags = normalize((tool.tags || []).join(" "));
        return { tool, order, title, compact: title.replace(/\s+/g, ""), words: title.split(" ").filter(Boolean), category, tags, searchable: `${title} ${category} ${tags}` };
      }));
  }
  return indexPromise;
};

const score = (entry, query, words) => {
  let value = 0;
  const compact = query.replace(/\s+/g, "");
  if (entry.title === query) value += 1000000;
  else if (entry.compact === compact) value += 950000;
  else if (entry.title.startsWith(query)) value += 500000;
  else if (entry.title.includes(query)) value += 300000;
  else if (entry.searchable.includes(query)) value += 100000;
  let matches = 0;
  for (const word of words) {
    if (entry.words.includes(word)) { value += 45000; matches += 1; }
    else if (entry.words.some((candidate) => candidate.startsWith(word) || word.startsWith(candidate))) { value += 25000; matches += 1; }
    else if (entry.category.includes(word) || entry.tags.includes(word)) { value += 8000; matches += 1; }
    else if (word.length >= 4 && entry.words.some((candidate) => Math.abs(candidate.length - word.length) <= 2 && distance(candidate, word) <= (word.length >= 8 ? 2 : 1))) { value += 12000; matches += 1; }
  }
  if (words.length > 1 && matches === words.length) value += 80000;
  if (!matches && !value) return 0;
  if (entry.tags.includes("aiwebtools") || entry.tags.includes("custom gpt")) value += 2000;
  return value + Math.min(1000, Number(entry.tool.rating || 0) * 100);
};

self.onmessage = async ({ data }) => {
  const { id, query: rawQuery } = data;
  try {
    const query = normalize(rawQuery);
    const words = query.split(" ").filter(Boolean);
    const index = await loadIndex();
    const results = index.map((entry) => ({ entry, score: score(entry, query, words) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.order - b.entry.order)
      .map((item) => item.entry.tool);
    self.postMessage({ id, query: rawQuery, results });
  } catch (error) {
    self.postMessage({ id, query: rawQuery, results: [], error: String(error) });
  }
};

loadIndex();
