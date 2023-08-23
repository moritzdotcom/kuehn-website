import Image, { StaticImageData } from 'next/image';
import kuehnImg from '@/public/images/team/kuehn.jpg';
import paulussenImg from '@/public/images/team/paulussen.jpg';

export default function TeamPage() {
  return (
    <main className="w-full max-w-screen-lg mx-auto mt-3">
      <div className="w-full aspect-video bg-gray-300 flex items-center justify-center text-white font-bold text-3xl">
        BILD
      </div>
      <div className="mx-1 mb-8">
        <h1 className="text-2xl sm:text-4xl text-primary my-2 text-center mb-5">
          Ihre Ärzte
        </h1>
        <DoctorCard
          name="Dr. med. Wolfram Kühn"
          image={kuehnImg}
          description="Facharzt für Hals-Nasen-Ohren-Heilkunde"
          qualifications="Stimm- und Sprachstörung, Naturheilverfahren"
        />
        <hr className="my-3" />
        <DoctorCard
          name="Dr. med. Aline Paulussen"
          image={paulussenImg}
          description="Fachärztin für Hals-Nasen-Ohren-Heilkunde"
        />
      </div>
    </main>
  );
}

function DoctorCard({
  name,
  image,
  description,
  qualifications,
}: {
  name: string;
  image: StaticImageData;
  description: string;
  qualifications?: string;
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <Image
        src={image}
        alt={name}
        className="w-full sm:w-1/3 aspect-video h-full object-cover"
      />
      <div className="w-full sm:w-2/3 flex flex-col gap-2">
        <h3 className="text-2xl text-primary">{name}</h3>
        <p className="text-gray-700">{description}</p>
        {qualifications && <p className="text-secondary">{qualifications}</p>}
      </div>
    </div>
  );
}
