import image from '@/public/images/services/nose.jpg';
import Image from 'next/image';

export default function NoseServicesPage() {
  return (
    <>
      <header>
        <div className="w-full h-[25vh] sm:h-[33vh]">
          <Image
            src={image}
            alt="Title Image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl text-primary my-2 text-center">
          Nase
        </h1>
      </header>
      <main className="max-w-screen-lg mx-auto px-3 text-lg flex flex-col gap-3 mb-10 text-justify">
        <p>
          Die Nase spielt eine wichtige Rolle in unserem täglichen Leben. Sie
          hilft uns zu atmen, Gerüche wahrzunehmen und beeinflusst unseren
          Geschmackssinn. Wir erkennen und behandeln Nasenprobleme, wie eine
          Nasennebenhöhlenentzündung (Sinusitis) mit oder ohne Polypen,
          Nasenbluten, eine fließende Nase und eine eingeschränkte Nasenatmung.
        </p>
        <b className="text-primary mt-3">Diagnostik:</b>
        <ul className="list-disc list-inside">
          <li>Mikroskopie/Endoskopie der Nase</li>
          <li>Geruchs-/Geschmacksprüfung</li>
        </ul>
      </main>
    </>
  );
}
