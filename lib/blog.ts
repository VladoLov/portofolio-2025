import { db } from "@/db";
import { blogPosts } from "@/db/schema/blog";
import { desc, eq } from "drizzle-orm";
import { cache } from "react";

export type Blog = typeof blogPosts.$inferSelect;

export const getAllBlogs = cache(async () => {
  return db.select().from(blogPosts).orderBy(desc(blogPosts.date));
});

export const getBlogBySlug = cache(async (slug: string) => {
  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.slug, slug))
    .limit(1);
  return rows[0] ?? null;
});
