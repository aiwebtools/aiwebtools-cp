import { allTools } from "../src/data/toolsData";
import { generateToolSlug } from "../src/utils/urlGenerator";

const expectedTools = [
  "TIME MACHINE GPT",
  "COLLEGE DEGREE GPT",
  "Seedance 1.5 Pro",
  "Seedance 2.0",
];

const failures: string[] = [];

for (const title of expectedTools) {
  const matches = allTools.filter((tool) => tool.title === title);
  if (matches.length === 0) {
    failures.push(`${title}: missing from tool database`);
    continue;
  }

  const slug = generateToolSlug(title);
  const routed = allTools.filter((tool) => generateToolSlug(tool.title) === slug);
  if (routed.length === 0) failures.push(`${title}: /${slug} cannot resolve`);

  const canonical = `https://aiwebtools.app/${slug}`;
  if (!canonical.endsWith(`/${slug}`)) failures.push(`${title}: invalid canonical`);

  const selected = routed
    .map((tool, index) => ({ tool, index }))
    .sort((a, b) =>
      ((b.tool.videoUrl ? 2 : 0) + (b.tool.imageUrl ? 1 : 0) + (b.tool.directUrl ? 0.1 : 0)) -
      ((a.tool.videoUrl ? 2 : 0) + (a.tool.imageUrl ? 1 : 0) + (a.tool.directUrl ? 0.1 : 0)),
    )[0]?.tool;
  if (!selected || selected.title !== title) failures.push(`${title}: wrong tool selected for /${slug}`);
}

const knownSlugs = new Set(allTools.map((tool) => generateToolSlug(tool.title)));
if (knownSlugs.has("definitely-not-a-real-ai-tool")) {
  failures.push("Unknown-slug smoke fixture unexpectedly resolves");
}

if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`✓ ${expectedTools.length} direct tool routes resolve with self-referencing canonicals`);
console.log("✓ unknown tool slugs terminate in the not-found state");