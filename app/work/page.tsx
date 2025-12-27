"use client";

import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am currently in my second year of college, focusing on building a
          strong foundation in Machine Learning and Fullstack development.
        </p>
        <p>
          I am actively learning and experimenting with new technologies. While
          I don't have a showcase ready just yet, I am working on several
          projects that I hope to share here soon.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Current Focus
        </h2>
        <ul>
          <li>Deep Learning & Neural Networks</li>
          <li>Fullstack Web Development (Next.js, React)</li>
          <li>Python & TypeScript</li>
        </ul>
      </div>
    </section>
  );
}
