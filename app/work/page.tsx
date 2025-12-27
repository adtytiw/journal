"use client";

import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>

      <p className="prose prose-neutral dark:prose-invert">
        Curiosity has always been a pillar for me to weave the behind-the-scenes
        stories that deserve to be seen and heard. The transition from a
        dominant identity in my native culture to a minority identity in
        American society grants me a subtler, more culturally-nuanced, and
        multi-dimensional perspective. Therefore, I firmly believe that empathy
        builds empire.
      </p>

      <br />

      <p className="prose prose-neutral dark:prose-invert">
        I'm hungry to do things differently. I enjoy combining data-driven
        insights with creativity to uncover good stories that brings people
        together, which has always been what jazzes me most. I'm eager to create
        work that adds value to people's lives, connecting with them by speaking
        their languages, showing empathy and build genuine trust. “Diversity”
        isn't just a buzzword or challenge, but rather an opportunity and school
        of thought I use to embrace creativity and collaboration in all that I
        do.
      </p>

      <br />
      <p className="prose prose-neutral dark:prose-invert">Buckle up!</p>
      <br />
      <Link href={"/work/big-brand"} className="underline">
        How Big Brand Matters
      </Link>
      <br />
      <Link href={"/work/influencer"} className="underline">
        Influencer Strategies
      </Link>
      <br />
      <Link href={"/work/localize-market"} className="underline">
        Market Localization
      </Link>
      <br />
      <Link href={"/work/roommate"} className="underline">
        Roommate Matches
      </Link>
    </section>
  );
}
