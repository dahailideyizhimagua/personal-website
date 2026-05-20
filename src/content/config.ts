import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['webcad', 'architecture', 'frontend', 'devops', 'tutorial']),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    role: z.string(),
    tech: z.array(z.string()),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    category: z.enum(['web', 'cad', 'opensource', 'design']),
    order: z.number().default(0),
  }),
});

export const collections = { blog, projects };
