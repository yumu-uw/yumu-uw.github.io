import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()).min(1),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date(),
	}),
});

export const collections = { blog };
