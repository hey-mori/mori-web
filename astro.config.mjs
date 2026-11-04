// @ts-check
import { defineConfig } from "astro/config";

// Served from mori.swarea.com by .github/workflows/deploy.yml; `site` makes
// canonical and absolute URLs point there.
export default defineConfig({
  site: "https://mori.swarea.com",
  trailingSlash: "never",
});
