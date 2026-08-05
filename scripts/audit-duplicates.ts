import { allTools } from '../src/data/toolsData';
const norm = (u?: string) => {
  if (!u) return '';
  try { const x = new URL(u); return (x.hostname.replace(/^www\./,'') + x.pathname.replace(/\/+$/,'')).toLowerCase(); }
  catch { return u.toLowerCase().trim(); }
};
const map = new Map<string, any[]>();
for (const t of allTools) {
  const k = t.title.toLowerCase().trim() + '|||' + norm(t.directUrl);
  map.set(k, [...(map.get(k) || []), t]);
}
let dupGroups = 0, extra = 0;
for (const [k, v] of map) if (v.length > 1) { dupGroups++; extra += v.length - 1; }
console.log('total tools', allTools.length, 'dup groups', dupGroups, 'redundant entries', extra);
let shown = 0;
for (const [k, v] of map) if (v.length > 1 && shown++ < 15) console.log(k, v.length, v.map(t=>t.category).join(' / '));
