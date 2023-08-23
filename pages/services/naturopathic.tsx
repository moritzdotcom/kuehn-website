import image from '@/public/images/services/naturopathic.jpg';
import Image from 'next/image';

export default function NaturopathicServicesPage() {
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
          Naturheilverfahren
        </h1>
      </header>
      <main className="max-w-screen-lg mx-auto px-3 text-lg flex flex-col gap-3 mb-10 text-justify">
        <b className="text-primary mt-3">
          Naturheilmittel und Homöopathie als ergänzender Behandlungsansatz
        </b>
        <p>
          Die Phytotherapie, auch Pflanzenheilkunde genannt, ist heute ein
          fester Bestandteil der Schulmedizin. Die Anwendung von pflanzlichen
          Heilmitteln kann vor allem bei der Behandlung nicht akut bedrohlicher
          Erkrankungen und bei chronischen Problemen eine wirksame und
          nebenwirkungsarme Ergänzung oder ggf. Alternative zur Standardtherapie
          sein.
        </p>
        <b className="text-primary mt-3">
          Was sind typische Anwendungsgebiete?
        </b>
        <p>
          Anwendungsbeispiele sind chronische Nasennebenhöhlenbeschwerden,
          Tinnitus oder Schwindel. Vor allem bei Kindern können sich
          homöopathische Ansätze eignen, um Medikationen oder Operationen, die
          häufig zu früh empfohlen werden, zu umgehen (z.B. bei Adenoiden -
          kindlichen Polypen).
        </p>
      </main>
    </>
  );
}
