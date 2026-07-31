// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sikanderbakht.github.io",
  // User/org pages repo -> served from root, no base path.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Emit clean directory URLs (/projects/enbdx/).
    format: "directory",
  },
});
