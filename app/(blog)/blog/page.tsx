import { getAllBlogs } from "@/lib/blog";
import { formatDate } from "@/utils/formats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 300; // revalidate every 5 minutes

export default async function BlogIndexPage() {
  const posts = await getAllBlogs();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900?/50 shadow-sm transition hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-52 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <p className="mb-3 line-clamp-3 text-gray-400">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span>{formatDate(post.date as unknown as string)}</span>
                  <span>*</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
