import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [mdx(), solidJs()]
});