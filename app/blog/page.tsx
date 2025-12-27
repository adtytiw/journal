import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();
  // Group blogs by year
  let blogsByYear: { [year: string]: typeof allBlogs } = {};
  allBlogs.forEach((post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear();
    if (!blogsByYear[year]) blogsByYear[year] = [];
    blogsByYear[year].push(post);
  });
  // Sort years descending
  const years = Object.keys(blogsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {years[0]}
      </h1>
      {/* Render the latest year blogs without repeating the year heading */}
      <div className="mb-8">
        {blogsByYear[years[0]]
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-4 whitespace-nowrap">
                  {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </Link>
          ))}
      </div>
      {years.length > 1 && <hr className="border-t border-neutral-200 dark:border-neutral-800 my-8" />}
      {/* Render the rest of the years */}
      {years.slice(1).map((year, idx) => (
        <div key={year} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-neutral-700 dark:text-neutral-200">{year}</h2>
          {blogsByYear[year]
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </p>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-4 whitespace-nowrap">
                    {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </Link>
            ))}
          {/* Only show a line if this is not the last year */}
          {idx < years.slice(1).length - 1 && (
            <hr className="border-t border-neutral-200 dark:border-neutral-800 my-8" />
          )}
        </div>
      ))}
    </section>
  );
}
