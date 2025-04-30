import Image from "next/image";

export default function HomePage() {
  const posts = [
    {
      title: "Craft Cannabis and Sustainability",
      excerpt: "How local growers are changing the game with regenerative techniques.",
      category: "Environment",
      timeAgo: "4 hours ago",
      views: 320,
      image: "/images/cannabis1.png", // add real images later
    },
    {
      title: "5 Myths About Craft Cannabis Debunked",
      excerpt: "A breakdown of the most common misunderstandings.",
      category: "Health",
      timeAgo: "7 hours ago",
      views: 150,
      image: "/images/cannabis2.png",
    },
    {
      title: "Inside a Brooklyn Grow Lab",
      excerpt: "How one small team is building high-quality, low-footprint buds.",
      category: "Culture",
      timeAgo: "10 hours ago",
      views: 240,
      image: "/images/cannabis3.jpg",
    },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Featured Articles</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white">
            <img src={post.image} alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-green-600 font-semibold">{post.category}</span>
              <h2 className="text-lg font-bold mt-1">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
              <div className="text-xs text-gray-400 mt-3 flex justify-between">
                <span>{post.timeAgo}</span>
                <span>👁 {post.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
