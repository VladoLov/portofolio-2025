import "dotenv/config";
import { db } from "@/db"; // your db connection file
import { blogPosts } from "@/db/schema/blog"; // adjust path if needed

interface BlogPost {
  title: string;
  excerpt: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  imageUrl: string;
}

export const blogPostsData: BlogPost[] = [
  {
    title: "Building Performant Apps with Next.js 15",
    excerpt:
      "Exploring the new features in Next.js 15 and how they improve application performance and developer experience.",
    description:
      "Next.js 15 introduces several groundbreaking improvements such as enhanced caching, server actions, and React Compiler integration. In this article, we’ll explore practical techniques for optimizing app performance and developer workflow.",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["Next.js", "Performance", "React"],
    slug: "nextjs-15-performance",
    imageUrl: "https://images.unsplash.com/photo-1611078489935-0cb964de46d0",
  },
  {
    title: "Advanced TypeScript Patterns for React",
    excerpt:
      "Deep dive into advanced TypeScript patterns that make your React components more type-safe and maintainable.",
    description:
      "Learn how to apply advanced TypeScript utilities and generic types to create reusable and scalable React components. This article covers discriminated unions, mapped types, and pattern matching for better DX.",
    date: "2025-02-28",
    readTime: "12 min read",
    tags: ["TypeScript", "React", "Best Practices"],
    slug: "advanced-typescript-react",
    imageUrl: "https://images.unsplash.com/photo-1590608897129-79da98d159a9",
  },
  {
    title: "Server Components vs Client Components",
    excerpt:
      "Understanding when to use Server Components and Client Components in Next.js for optimal performance.",
    description:
      "Next.js offers flexibility through Server and Client Components. This article explains how to decide which one to use, how rendering differs, and how to avoid unnecessary re-renders for better performance.",
    date: "2025-02-10",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Architecture"],
    slug: "server-vs-client-components",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

async function seed() {
  try {
    await db.insert(blogPosts).values(blogPostsData);
    console.log("✅ Blog posts seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding blog posts:", error);
  }
}

seed();
