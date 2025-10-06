import "dotenv/config";
import { db } from "@/db"; // adjust path
import { blogPosts } from "@/db/schema/blog"; // adjust path
import { blogPostsData } from "./blogPostData"; // or paste data inline

async function seed() {
  try {
    await db.insert(blogPosts).values(blogPostsData);
    console.log("✅ Blog posts seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding blog posts:", error);
  }
}

seed();
