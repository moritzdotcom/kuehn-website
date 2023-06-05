import Image, { StaticImageData } from 'next/image';

import AllergiesImage from '@/public/images/services/allergies.jpg';
import EarsImage from '@/public/images/services/ears.jpg';
import NoseImage from '@/public/images/services/nose.jpg';
import ThroatImage from '@/public/images/services/throat.jpg';
import OtherServicesImage from '@/public/images/services/other.jpg';
import { useEffect, useRef, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

function ServiceCard({
  image,
  title,
  children,
}: {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-[300px]">
      <Image
        src={image}
        alt={title}
        width={300}
        className="object-cover w-full aspect-video"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function ServicesSlider() {
  const serviceSliderRef = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (serviceSliderRef.current) {
        setIsOverflown(
          serviceSliderRef.current.scrollWidth >
            serviceSliderRef.current.clientWidth &&
            serviceSliderRef.current.scrollLeft == 0
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    serviceSliderRef.current?.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      serviceSliderRef.current?.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <div
      ref={serviceSliderRef}
      className="grid grid-cols-1 sm:grid-cols-[repeat(5,300px)] gap-5 overflow-x-scroll mt-5 text-primary px-3 sm:px-10 relative pb-3"
    >
      <ServiceCard image={ThroatImage} title="Hals">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </ServiceCard>
      <ServiceCard image={NoseImage} title="Nase">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </ServiceCard>
      <ServiceCard image={EarsImage} title="Ohren">
        Hören ist ein wichtiger Sinn. Er ermöglicht die Orientierung im Raum,
        Gefahren wahrzunehmen und dient der Kommunikation. Gut hören und
        verstehen ist ein wichtiges Stück Lebensqualität. Rund 15 Millionen
        Menschen in Deutschland haben Hörprobleme. Viele dieser Menschen waren
        noch nie bei einem Hals,-Nasen-, Ohren-Facharzt oder Hörakustiker. Wir
        testen und behandeln ggf. Ihr Hörvermögen.
      </ServiceCard>
      <ServiceCard image={AllergiesImage} title="Allergien">
        Für Patienten bei denen Verdacht auf eine allergische Erkrankung
        besteht, gibt es einige renomierte Untersuchungsmöglichkeiten (z.B.
        Pricktest, Provokationstest). Je nach Beschwerdebild beraten wir Sie
        über die Art der Tests und weiterführende Therapiemöglichkeiten.
      </ServiceCard>
      <ServiceCard image={OtherServicesImage} title="Weiteres">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </ServiceCard>
      {isOverflown && (
        <button
          onClick={() => {
            if (serviceSliderRef.current) {
              serviceSliderRef.current.scrollTo({
                left:
                  serviceSliderRef.current.scrollLeft +
                  serviceSliderRef.current.scrollWidth,
                behavior: 'smooth',
              });
            }
          }}
          className="absolute top-1/2 right-5 flex items-center justify-center p-2 rounded-full bg-primary text-white"
        >
          <BsChevronRight className="stroke-1 text-xl" />
        </button>
      )}
    </div>
  );
}
