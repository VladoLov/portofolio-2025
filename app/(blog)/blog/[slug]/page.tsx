import { getBlogBySlug } from "@/lib/blog";
import { formatDate } from "@/utils/formats";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [{ url: post.imageUrl }],
      type: "article",
    },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="relative mb-6 h-72 w-full overflow-hidden rounded-2xl">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
        <span>{formatDate(post.date as unknown as string)}</span>
        <span>•</span>
        <span>{post.readTime}</span>
        <div className="ml-2 flex flex-wrap gap-2">
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

      <p className="mb-6 text-lg text-gray-300">{post.excerpt}</p>

      {/* For now plain text; later swap to markdown renderer */}
      <article className="prose prose-invert max-w-none">
        {post.description}
      </article>
    </main>
  );
}
