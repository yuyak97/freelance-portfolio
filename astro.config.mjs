// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import react from "@astrojs/react";
import icon from "astro-icon";
import { fileURLToPath, URL } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  integrations: [
    expressiveCode({
      themes: ["github-dark"],
    }),
    icon(),
    mdx(),
    sitemap(),
    react(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
