// app/page.tsx

import { sanityClient } from '../lib/sanity';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
};

export default async function HomePage() {
  const query = `*[_type == "post"] | order(_createdAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt
  }`;

  const posts: Post[] = await sanityClient.fetch(query, {}, { next: { revalidate: 60 } })

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      {posts.map((post) => (
        <article key={post._id} className="mb-6 p-4 border rounded bg-white shadow-sm">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-600">{post.excerpt || 'No summary available'}</p>
          <a href={`/blog/${post.slug.current}`} className="text-green-600 text-sm mt-2 inline-block">Read more →</a>
        </article>
      ))}
    </main>
  );
}
