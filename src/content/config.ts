import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const writing = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        type: z.string().optional(), // e.g. "Novel", "Short Story"
        status: z.string().optional(), // e.g. "Drafting", "Published"
        description: z.string(),
        excerpt: z.string().optional(),
        date: z.coerce.date(),
        link: z.string().optional(), // Internal link (slug usually handles this, maybe this is external?)
        fullLink: z.string().optional(), // Link to full version/buy/read
        order: z.number().optional(),
    })
});

const music = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        genre: z.string(),
        link: z.string(), // SoundCloud or Spotify link
        coverColor: z.string().optional(), // For the vinyl record center
    })
});

const rants = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        angerLevel: z.number().min(0).max(100), // 0 = mild annoyance, 100 = pure rage
        tags: z.array(z.string()).optional(),
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(), // CSS class e.g. "fi fi-rr-print"
        tech: z.array(z.string()),
        year: z.string(), // e.g. "2025"
        link: z.string().optional(),
        featured: z.boolean().default(false), // For homepage selection
        order: z.number().default(99), // Control sort order
    })
});

export const collections = { blog, writing, music, rants, projects };
