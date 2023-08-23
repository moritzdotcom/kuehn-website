import image from '@/public/images/services/ultrasound.jpg';
import Image from 'next/image';

export default function UltrasoundServicesPage() {
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
          Ultraschalluntersuchungen
        </h1>
      </header>
      <main className="max-w-screen-lg mx-auto px-3 text-lg flex flex-col gap-3 mb-10 text-justify">
        <p>
          Mithilfe der schmerzfreien Ultraschalluntersuchung kann eine
          Untersuchung der Nasennebenhöhlen, der Weichteile des Halses, Gesichts
          und anderen Lokalisationen des HNO-Bereiches erfolgen.
        </p>
        <p>
          Hierbei lassen sich die Nasennebenhöhlen sowie alle Weichteile im
          Kopf- und Halsbereich, wie z.B. Lymphknoten, Speicheldrüsen,
          Schilddrüse und Gefäße auf Auffälligkeiten oder Veränderungen
          zuverlässig untersuchen.
        </p>
      </main>
    </>
  );
}
