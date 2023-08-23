import Image, { StaticImageData } from 'next/image';

import ThroatImage from '@/public/images/services/throat.jpg';
import NoseImage from '@/public/images/services/nose.jpg';
import EarsImage from '@/public/images/services/ears.jpg';
import AllergiesImage from '@/public/images/services/allergies.jpg';
import NaturopathicImage from '@/public/images/services/naturopathic.jpg';
import UltrasoundImage from '@/public/images/services/ultrasound.jpg';
import Link from 'next/link';

export function ServiceCard({
  image,
  title,
  path,
}: {
  image: StaticImageData;
  title: string;
  path: string;
}) {
  return (
    <Link
      href={`/services/${path}`}
      className="flex flex-col gap-2 w-full relative rounded overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        className="object-cover w-full aspect-video"
      />
      <div className="absolute inset-0 bg-black transition-colors bg-opacity-50 hover:bg-opacity-30 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-white uppercase tracking-widest">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 px-3 sm:px-10 relative pb-3">
        <ServiceCard path="throat" title="Hals" image={ThroatImage} />
        <ServiceCard path="nose" title="Nase" image={NoseImage} />
        <ServiceCard path="ears" title="Ohren" image={EarsImage} />
        <ServiceCard
          path="allergies"
          title="Allergien"
          image={AllergiesImage}
        />
        <ServiceCard
          path="naturopathic"
          title="Naturheilverfahren"
          image={NaturopathicImage}
        />
        <ServiceCard
          path="ultrasound"
          title="Ultraschalluntersuchungen"
          image={UltrasoundImage}
        />
      </div>
    </>
  );
}
