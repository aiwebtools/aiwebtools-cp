/**
 * Build-time URL map for hero images that are referenced by raw "/src/assets/..." paths.
 * Loaded lazily (dynamic import) so it never touches the first-paint bundle.
 */
const modules = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,webp,avif,gif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const assetUrlByPath: Record<string, string> = modules;
