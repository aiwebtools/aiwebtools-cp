/**
 * Seeds the link_health table with every external tool URL in the directory.
 *
 * Usage:
 *   DIGEST_CRON_SECRET=... bunx tsx scripts/seed-link-health.ts
 *
 * Read-only against the tool database — it never edits or removes a tool.
 */
import { allTools } from "../src/data/toolsData";

const FUNCTION_URL =
  "https://huupailptzvcykyqdkar.supabase.co/functions/v1/link-health-sweep";
const SECRET = process.env.DIGEST_CRON_SECRET;

if (!SECRET) {
  console.error("Missing DIGEST_CRON_SECRET env var.");
  process.exit(1);
}

const seen = new Set<string>();
const rows = (allTools as Array<{ title: string; directUrl?: string; category?: string }>)
  .filter((t) => typeof t.directUrl === "string" && /^https?:\/\//i.test(t.directUrl))
  .filter((t) => {
    const key = t.directUrl!.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  })
  .map((t) => ({ title: t.title, url: t.directUrl!, category: t.category }));

console.log(`Seeding ${rows.length} unique tool URLs...`);

const BATCH = 400;
let done = 0;
for (let i = 0; i < rows.length; i += BATCH) {
  const tools = rows.slice(i, i + BATCH);
  const res = await fetch(FUNCTION_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-cron-secret": SECRET },
    body: JSON.stringify({ mode: "seed", tools }),
  });
  if (!res.ok) {
    console.error(`Batch ${i} failed:`, res.status, await res.text());
    process.exit(1);
  }
  done += tools.length;
  console.log(`  seeded ${done}/${rows.length}`);
}
console.log("Done.");
