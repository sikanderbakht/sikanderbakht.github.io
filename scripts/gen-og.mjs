/**
 * Renders the 1200×630 Open Graph share card to public/og.png.
 *   node scripts/gen-og.mjs
 */
import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141417"/>
      <stop offset="100%" stop-color="#0a0a0c"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="12%" r="60%">
      <stop offset="0%" stop-color="#5b4df5" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#5b4df5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="120" font-family="Hanken Grotesk, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="4" fill="#8a8a90">◇  SIKANDER BAKHT</text>
  <text x="76" y="320" font-family="Hanken Grotesk, Arial, sans-serif" font-size="104" font-weight="500" letter-spacing="-3" fill="#f0f0f2">Mobile Lead</text>
  <text x="80" y="410" font-family="Hanken Grotesk, Arial, sans-serif" font-size="38" fill="#a6a6ae">Secure, high-scale Android &amp; React Native</text>
  <text x="80" y="458" font-family="Hanken Grotesk, Arial, sans-serif" font-size="38" fill="#a6a6ae">apps for fintech &amp; digital banking.</text>
  <g font-family="Hanken Grotesk, Arial, sans-serif" font-size="26" fill="#f0f0f2">
    <rect x="80" y="520" width="150" height="56" rx="28" fill="none" stroke="#33333a"/>
    <text x="118" y="556">10+ yrs</text>
    <rect x="248" y="520" width="220" height="56" rx="28" fill="none" stroke="#33333a"/>
    <text x="286" y="556">10M+ downloads</text>
    <rect x="486" y="520" width="180" height="56" rx="28" fill="none" stroke="#33333a"/>
    <text x="524" y="556">Dubai, UAE</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, "public/og.png"));
console.log("✓ public/og.png (1200×630)");
