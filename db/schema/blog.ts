import {
  pgTable,
  serial,
  text,
  varchar,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  excerpt: text("excerpt").notNull(),
  description: text("description").notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  date: date("date").notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  tags: text("tags").array().notNull(), // PostgreSQL array
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
