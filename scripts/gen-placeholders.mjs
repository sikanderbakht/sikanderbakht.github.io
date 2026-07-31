/**
 * Generates branded phone-aspect (9:19.5) placeholder screenshots as SVG for
 * every project without real captures yet. Re-runnable & idempotent.
 *
 *   node scripts/gen-placeholders.mjs
 *
 * Replace a placeholder by dropping a real screenshot into
 * src/assets/projects/<slug>/ and updating that image entry in
 * src/data/projects.ts (set temp:false or point `file` at the new name).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = join(root, "src/assets/projects");

// slug, display name, initials, brand tint, primary stack. ENBD X excluded
// (real screenshots supplied).
const projects = [
  ["emirates-islamic", "Emirates Islamic", "EI", "#16A34A", "Android"],
  ["liv", "Liv", "LIV", "#FF4D6D", "Android"],
  ["mbio", "MB.io", "MB", "#F5A623", "React Native"],
  ["mbfx", "MultiBank Plus", "MB+", "#3B82F6", "React Native"],
  ["mex", "MEX", "MEX", "#D4A72C", "React Native"],
  ["edara", "Edara", "ED", "#14B8A6", "React Native"],
  ["stc-pay", "STC Pay", "STC", "#9333EA", "Android"],
  ["sadad", "Sadad", "SD", "#22C55E", "Android"],
  ["hello-demo", "Hello", "H", "#A855F7", "React Native"],
];

const W = 1080;
const H = 2340;

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function tile({ name, initials, tint, stack, variant }) {
  // vary the glow position per shot so the strip doesn't look identical
  const cx = [0.5, 0.22, 0.8, 0.35][variant % 4] * W;
  const cy = [0.32, 0.24, 0.4, 0.6][variant % 4] * H;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(name)} screenshot placeholder">
  <defs>
    <radialGradient id="g" cx="${(cx / W) * 100}%" cy="${(cy / H) * 100}%" r="75%">
      <stop offset="0%" stop-color="${tint}" stop-opacity="0.55"/>
      <stop offset="42%" stop-color="${tint}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="${tint}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#101014"/>
      <stop offset="100%" stop-color="#0a0a0c"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#v)"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${(i + 1) * (H / 12)}" x2="${W}" y2="${(i + 1) * (H / 12)}"/>`).join("\n    ")}
  </g>
  <text x="${W / 2}" y="${H / 2 - 40}" text-anchor="middle" font-family="'Space Grotesk','Segoe UI',sans-serif" font-size="230" font-weight="600" fill="#ededf0" letter-spacing="-6">${esc(initials)}</text>
  <text x="${W / 2}" y="${H / 2 + 120}" text-anchor="middle" font-family="'Space Grotesk','Segoe UI',sans-serif" font-size="72" font-weight="500" fill="#ededf0">${esc(name)}</text>
  <text x="${W / 2}" y="${H / 2 + 210}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="40" fill="${tint}" letter-spacing="4">${esc(stack.toUpperCase())}</text>
  <g>
    <rect x="${W / 2 - 220}" y="${H - 220}" width="440" height="86" rx="43" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="${W / 2}" y="${H - 163}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="34" fill="#8c8a99" letter-spacing="6">PLACEHOLDER</text>
  </g>
</svg>
`;
}

let count = 0;
for (const [slug, name, initials, tint, stack] of projects) {
  const dir = join(base, slug);
  mkdirSync(dir, { recursive: true });
  const files = ["cover.svg", "shot-1.svg", "shot-2.svg"];
  files.forEach((f, i) => {
    writeFileSync(join(dir, f), tile({ name, initials, tint, stack, variant: i }));
    count++;
  });
  console.log(`  ✓ ${slug} (${files.length})`);
}
console.log(`\nGenerated ${count} placeholder tiles for ${projects.length} projects.`);
