import json, os, asyncio, aiohttp, sys, urllib.request

KEY = os.environ["LOVABLE_API_KEY"]
URL = "https://ai.gateway.lovable.dev/v1/responses"
SB = os.environ["VITE_SUPABASE_URL"]
AK = os.environ["VITE_SUPABASE_PUBLISHABLE_KEY"]
req = urllib.request.Request(
    f"{SB}/rest/v1/gpt_apps?select=slug,display_name,tagline,supports_images,starter_prompts&is_active=eq.true&limit=300",
    headers={"apikey": AK, "Authorization": f"Bearer {AK}"})
bots = json.load(urllib.request.urlopen(req))
todo = [b for b in bots if any("give me your expert plan" in p for p in (b["starter_prompts"] or []))]
print("todo", len(todo), flush=True)

SCHEMA = {"type": "json_schema", "name": "starters", "strict": True, "schema": {
    "type": "object", "additionalProperties": False, "required": ["items"], "properties": {"items": {"type": "array", "items": {
        "type": "object", "additionalProperties": False, "required": ["slug", "starters"],
        "properties": {"slug": {"type": "string"}, "starters": {"type": "array", "items": {"type": "string"}}}}}}}}

SYS = ("You write opening suggestion buttons for specialist AI assistants on a tools directory. "
       "For each assistant, write exactly 2 starter prompts, written in first person by the visitor, "
       "that are unmistakably specific to that assistant's subject matter and would trigger its best work. "
       "Each 8-18 words, concrete, no generic phrasing like 'help me get started' or 'what can you do'. "
       "Never mention the assistant's name. If can_make_pictures is true, make the SECOND prompt explicitly "
       "ask for an image/picture/visual relevant to that subject.")


async def one(session, batch, attempt=0):
    payload = {"model": "openai/gpt-6-astra", "stream": True, "instructions": SYS,
               "input": [{"role": "user", "content": [{"type": "input_text", "text": json.dumps(
                   [{"slug": b["slug"], "name": b["display_name"], "role": (b.get("tagline") or "")[:300],
                     "can_make_pictures": bool(b.get("supports_images"))} for b in batch])}]}],
               "reasoning": {"effort": "low"}, "text": {"format": SCHEMA}, "store": False}
    text = ""
    async with session.post(URL, json=payload, headers={"Content-Type": "application/json", "Lovable-API-Key": KEY, "X-Lovable-AIG-SDK": "fetch"}) as r:
        if r.status != 200:
            print("HTTP", r.status, (await r.text())[:200], file=sys.stderr)
            if r.status in (429, 500, 502, 503) and attempt < 3:
                await asyncio.sleep(4 * (attempt + 1))
                return await one(session, batch, attempt + 1)
            return []
        async for raw in r.content:
            line = raw.decode("utf-8", "ignore").strip()
            if not line.startswith("data:"):
                continue
            try:
                ev = json.loads(line[5:].strip())
            except Exception:
                continue
            if ev.get("type") == "response.output_text.delta":
                text += ev.get("delta", "")
    try:
        return json.loads(text)["items"]
    except Exception:
        print("parse fail", file=sys.stderr)
        return []


def esc(s):
    return s.replace("'", "''")


async def main():
    out = []
    batches = [todo[i:i + 15] for i in range(0, len(todo), 15)]
    async with aiohttp.ClientSession() as s:
        for i in range(0, len(batches), 4):
            res = await asyncio.gather(*[one(s, b) for b in batches[i:i + 4]])
            for r in res:
                out.extend(r)
            print(f"{len(out)}/{len(todo)}", flush=True)
    d = os.path.dirname(os.path.abspath(__file__))
    rows = ["('%s',ARRAY['%s','%s'])" % (esc(x["slug"]), esc(x["starters"][0]), esc(x["starters"][1]))
            for x in out if len(x.get("starters", [])) >= 2]
    n = 3
    size = (len(rows) + n - 1) // n
    for i in range(n):
        c = rows[i * size:(i + 1) * size]
        if not c:
            continue
        open(f"{d}/sql{i}.sql", "w").write(
            "update gpt_apps a set starter_prompts=v.p, updated_at=now() from (values " + ",".join(c) + ") as v(slug,p) where a.slug=v.slug;")
        print("wrote", i, len(c))


asyncio.run(main())
