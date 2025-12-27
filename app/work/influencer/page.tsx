'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const WorkSampleComponent = dynamic(
  () => import('../../components/work-sample')
);

export default function Page() {
  return (
    <section>
      <Link href={'/work'}>{'< Back'}</Link>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        <br />
        INFLUENCER STRATEGY
      </h1>
      <WorkSampleComponent path="/pdf/influencer.pdf" />
    </section>
  );
}
