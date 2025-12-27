import Image from 'next/image';
// individual image imports
import vapi from 'public/images/vapi.webp';
import sadcar from 'public/images/giphy.gif';
import zudio from 'public/images/zudio.webp';
import zoo2 from 'public/images/zoo2.webp';
import mew from 'public/images/mew.webp';
import catcar from 'public/images/catcar.webp';
import sunflower from 'public/images/sunflower.webp';
// back button icon
import ArrowIcon from './components/arrow-icon';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Hey, this is Aditya 
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a ML developer in 2nd year of college. 
        Keen on deep learning, Fullstack software development & more.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
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
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>you can find me from these links.</p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
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
    </section>
  );
}
