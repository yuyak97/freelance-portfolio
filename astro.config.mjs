// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
