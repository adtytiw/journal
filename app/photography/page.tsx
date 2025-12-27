import type { Metadata } from 'next';
import Image from 'next/image';
import light from 'public/images/photos/light.webp';
import crescent from 'public/images/photos/crescent.webp';

export const metadata: Metadata = {
  title: 'Photography',
  description: "Here's some of my photography works.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        photography
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        Growing my digital garden, one photo at a time.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-80 mb-4">
          <Image
            alt="moon za moooooooooooon!"
            src={crescent}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Sunset in Southern California"
            src={sunset}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Vintage shop in Art District in LA"
            src={vintage}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Wind will blow"
            src={wind}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Very cool art work at the Hammer Museum in LA"
            src={nest}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Chill afternoon in Laguna Beach"
            src={beach}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Lonely branches by the beach"
            src={branches}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="sunset at Laguna"
            src={couple}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        <div className="relative h-80 mb-4">
          <Image
            alt="The light shadowing down the tree, gracefully"
            src={light}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Evening sunset next to the highway"
            src={evening}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Sneak peek outside of a parking lot in Laguna Beach"
            src={house}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Crowds walking alongside the beach"
            src={people}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Crowds walking alongside the beach in the other direction"
            src={sea}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Volleyball field by the sea"
            src={volley}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        {/* <div className="relative h-80 mb-4">
          <Image
            alt="THE BIZARRE"
            src={bizarre}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}

        {/* TODO: something wrong with Vercel Blob and CSP */}
        {/* <div className="relative h-80 mb-4">
          <VideoPlayer />
        </div> */}
      </div>
    </section>
  );
}
