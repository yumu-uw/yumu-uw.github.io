import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';
import mdx from "@astrojs/mdx";
import remarkBreaks from "remark-breaks";
import remarkFlexibleCodeTitles from "remark-flexible-code-titles";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx(), react()],
  markdown: {
    remarkPlugins: [remarkBreaks, remarkFlexibleCodeTitles]
  }
});