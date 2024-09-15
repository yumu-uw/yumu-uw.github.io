import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import remarkBreaks from "remark-breaks";
import remarkFlexibleCodeTitles from "remark-flexible-code-titles";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://blog.yumu-uw.com",
	integrations: [
		mdx(),
		react(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	markdown: {
		remarkPlugins: [remarkBreaks, remarkFlexibleCodeTitles],
	},
	redirects: {
		"/posts": "/posts/1",
	},
});
