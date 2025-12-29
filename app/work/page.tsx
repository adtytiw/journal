"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);
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
      <button onClick={() => setShowMessage(true)} className="flex items-center gap-2 w-auto px-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        </svg>
        Download Resume
      </button>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setShowMessage(false)}>
          <div className="bg-white dark:bg-neutral-900 px-6 py-4 rounded-lg shadow-lg max-w-sm">
            <p className="text-neutral-800 dark:text-neutral-200">Resume coming soon...</p>
          </div>
        </div>
      )}
    </section>
  );
}
