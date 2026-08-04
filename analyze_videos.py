import re
import json

def extract_videos(file_path, var_name):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Simple regex to find the array content
    pattern = rf'{var_name}: Array<[^>]+> = \[(.*?)\];'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        # Try without type annotation
        pattern = rf'{var_name} = \[(.*?)\];'
        match = re.search(pattern, content, re.DOTALL)
    
    if not match:
        return []
    
    array_content = match.group(1)
    # Find all objects { id: "...", title: "..." }
    video_pattern = r'\{[^{}]*?id:\s*"(.*?)",\s*title:\s*"(.*?)"[^{}]*?\}'
    videos = re.findall(video_pattern, array_content)
    return [{"id": v[0], "title": v[1]} for v in videos]

pinned_videos = extract_videos('src/components/PinnedVideoPlayer.tsx', 'MUSIC_VIDEO_GALLERY')
book_videos = extract_videos('src/components/BookPromotionCard.tsx', 'originalVideos')

print(f"Pinned Videos: {len(pinned_videos)}")
print(f"Book Videos: {len(book_videos)}")

def check_duplicates(videos, name):
    ids = [v['id'] for v in videos]
    seen = set()
    dupes = []
    for vid in ids:
        if vid in seen:
            dupes.append(vid)
        seen.add(vid)
    if dupes:
        print(f"Duplicates in {name}: {dupes}")
    else:
        print(f"No duplicates in {name}")
    return dupes

pinned_dupes = check_duplicates(pinned_videos, "Pinned")
book_dupes = check_duplicates(book_videos, "Book")

pinned_ids = set(v['id'] for v in pinned_videos)
book_ids = set(v['id'] for v in book_videos)

overlap = pinned_ids.intersection(book_ids)
print(f"Overlap count: {len(overlap)}")
print(f"Videos in Pinned but not in Book: {len(pinned_ids - book_ids)}")
print(f"Videos in Book but not in Pinned: {len(book_ids - pinned_ids)}")

# Find specific missing ones if small
if len(book_ids - pinned_ids) < 20:
    print(f"In Book only: {book_ids - pinned_ids}")

