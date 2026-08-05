#!/usr/bin/env python3
"""Attach generated hero images to tool entries.

Usage: python3 scripts/attach_tool_images.py '{"Tool Title": "file-hero.jpg"}'
Searches every file under src/data/tools/ for the title and injects
imageUrl: "/src/assets/tools/<file>" into that tool object if missing.
"""
import json, re, sys, glob

mapping = json.loads(sys.argv[1])
files = glob.glob('src/data/tools/**/*.ts', recursive=True)
done, missed = 0, []

for title, img in mapping.items():
    placed = False
    for path in files:
        s = open(path, encoding='utf-8').read()
        needle = f'title: "{title}",'
        if needle not in s:
            continue
        idx = s.index(needle)
        end = s.index('\n  },', idx)
        block = s[idx:end]
        if 'imageUrl' in block or 'videoUrl' in block:
            placed = True
            break
        m = re.search(r'\n(\s*)emoji:.*\n', block)
        anchor = m.end() if m else block.index('\n') + 1
        indent = m.group(1) if m else '    '
        block = block[:anchor] + f'{indent}imageUrl: "/src/assets/tools/{img}",\n' + block[anchor:]
        open(path, 'w', encoding='utf-8').write(s[:idx] + block + s[end:])
        done += 1
        placed = True
        break
    if not placed:
        missed.append(title)

print(f'attached {done}')
if missed:
    print('MISSED:', missed)
