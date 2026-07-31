/**
 * Resolves project screenshots to Astro ImageMetadata by "<slug>/<file>".
 *
 * Uses a single eager glob so any file dropped into
 * src/assets/projects/<slug>/ is picked up automatically — swapping a
 * placeholder for a real capture needs no wiring here.
 */
import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  // path === "/src/assets/projects/<slug>/<file>"
  const key = path.replace("/src/assets/projects/", "");
  byKey.set(key, mod.default);
}

export function projectImage(slug: string, file: string): ImageMetadata {
  const key = `${slug}/${file}`;
  const img = byKey.get(key);
  if (!img) {
    throw new Error(
      `Missing project image "${key}". Expected a file at src/assets/projects/${key}.`,
    );
  }
  return img;
}

/** True for SVG placeholders — the <Image> pipeline skips transforming these. */
export function isVector(img: ImageMetadata): boolean {
  return img.format === "svg";
}
