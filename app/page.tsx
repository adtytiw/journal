'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
// individual image imports
import vapi from 'public/images/vapi.webp';
import sadcar from 'public/images/giphy.gif';
import zoo2 from 'public/images/zoo2.webp';
import mew from 'public/images/mew.webp';
import catcar from 'public/images/catcar.webp';
import sunflower from 'public/images/sunflower.webp';
// back button icon
import ArrowIcon from './components/arrow-icon';

function IndianTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-sm text-neutral-500 dark:text-neutral-500">{time} IST</span>;
}

export default function Page() {
  return (
    <section className="min-h-screen flex flex-col">
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        Hey, this is Aditya
      </h1>
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Available for opportunities</p>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        I am a ML developer in 2nd year of college @<a href="https://www.google.com/search?q=navi+mumbai" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 hover:underline">Navi mumbai, Mh</a>.
        Keen on deep learning, Fullstack software development & more.
      </p>
      <div className="my-6">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Python</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Java</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">C</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">TypeScript</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">HTML, CSS, JS</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Next.js</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">PostgreSQL</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">TensorFlow</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Pandas</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">NumPy</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Git</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">GitHub</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Docker</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Linux</span>
          <span className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">Vercel</span>
        </div>
      </div>
      <div className="my-4">
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 pl-2">learning</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full">PyTorch</span>
          <span className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full">Scikit-learn</span>
          <span className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full">Computer Vision</span>
          <span className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full">Transformers</span>
          <span className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full">NLP</span>
        </div>
      </div>
      <div className="my-6 w-full h-64 rounded-lg bg-neutral-100 dark:bg-neutral-900 px-2">
        <p className="px-2 py-1 font-semibold text-md pt-2">Drop a message</p>
        <div className="mt-1">
          <form action="mailto:aditya80.tiwari@gmail.com" method="post" encType="text/plain" className="px-1">
            <div className="space-y-2 w-full">
              <input
                type="email"
                placeholder="your email"
                className="flex h-10 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-900 dark:text-neutral-100"
                name="email"
              />
            </div>
            <div className="mt-2 flex gap-3 w-full">
              <div className="space-y-2 w-full">
                <textarea
                  placeholder="your message here"
                  className="flex min-h-[60px] rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 h-28 w-full text-neutral-900 dark:text-neutral-100"
                  name="message"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 py-2 w-36 h-8"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="sunflower near kharghar"
            src={sunflower}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="zoo visit with friends"
            src={zoo2}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="vapi temple visit"
            src={vapi}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            unoptimized
            alt="cute sad car"
            src={sadcar}
            // fill
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            placeholder="blur"
            alt="cat riding a car lol but under the tyre"
            src={catcar}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            placeholder="blur"
            alt="me with uh- me?"
            src={mew}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}
      <p className="mb-0 text-neutral-900 dark:text-neutral-100">you can find me here.</p>
      <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://in.linkedin.com/in/aditya-tiwari-38ba35310"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="Github.com/adtytiw"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:aditya80.tiwari@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Email</p>
          </a>
        </li>
      </ul>
      <footer className="mt-auto py-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-sm">
        <IndianTime />
        <span className="text-neutral-400 dark:text-neutral-600">© 2025</span>
      </footer>
    </section>
  );
}
