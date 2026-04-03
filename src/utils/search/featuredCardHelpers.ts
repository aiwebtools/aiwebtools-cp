export const toFeatureLabels = (tags: string[] = [], fallback: string[] = []) => {
  const source = tags.length > 0 ? tags : fallback;

  return source
    .slice(0, 4)
    .map((tag) =>
      tag
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
};