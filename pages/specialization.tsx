import Image from 'next/image';
import EarsImage from '@/public/images/services/ears.jpg';

export default function SpecializationPage() {
  return (
    <>
      <header>
        <div className="w-full h-[25vh] sm:h-[33vh]">
          <Image
            src={EarsImage}
            alt="Title Image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl text-primary my-2 text-center">
          Spezialisierung
        </h1>
      </header>
      <main className="px-3 text-lg mb-10 text-justify">
        <p className="text-gray-700 text-center">
          Neben den üblichen HNO-Untersuchungen ist Herr Dr. Kühn auf Stimm- und
          Sprachstörungen und zentrale Fehlhörigkeitsdiagnostik bei Kindern
          spezialisiert.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <section>
            <div className="w-full aspect-video bg-gray-300 flex items-center justify-center text-white font-bold text-3xl rounded">
              BILD
            </div>
            <div className="mx-3 flex flex-col gap-3">
              <h3 className="text-xl text-primary my-2 text-center">
                Stimm- und Sprachstörungen:
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-left">
                <li>
                  Störungen der Stimm- und Sprechfunktion (z.B. heisere,
                  belegte, raue, brüchige Stimme bis Ausfall der Stimme)
                </li>
                <li>Sprachentwicklungsstörungen bei Kleinkindern</li>
                <li>
                  Sprechstörungen, Störung der Sprechmotorik (z.B. Stottern,
                  Poltern) und Sprachverzögerung
                </li>
              </ul>
              <p className="text-gray-700">
                Stimmveränderungen und Sprachstörungen treten in jedem Alter
                auf. Unser Behandlungsfeld umfasst die Prävention, Diagnose und
                Behandlung von Kommunikationsstörungen.
                Sprachentwicklungsstörungen kommen bei Kindern häufig vor und
                sollten möglichst früh diagnostiziert werden. Bei Erwachsenen
                gehen wir auch auf die spezifischen Situationen der
                Sprecherberufe (Lehrer, Juristen, Pädagogen etc.) entsprechend
                ihrer stimmlichen Fähigkeiten ein.
              </p>
            </div>
          </section>
          <section>
            <div className="w-full aspect-video bg-gray-300 flex items-center justify-center text-white font-bold text-3xl rounded">
              BILD
            </div>
            <div className="mx-3 flex flex-col gap-3">
              <h3 className="text-xl text-primary my-2 text-center">
                Zentrale Fehlhörigkeit bei Kindern:
              </h3>
              <p className="text-gray-700">
                Der Begriff der Zentralen Fehlhörigkeit umfasst eine Störung der
                auditiven Wahrnehmung. Betroffene hören zwar, was um sie herum
                geschieht, ihr Gehirn ist jedoch nicht in der Lage, die
                zahlreichen Reize und Informationen korrekt oder nicht schnell
                genug zu verarbeiten. In solchen Fällen können diverse auditive
                Teilfunktionen beeinträchtigt sein:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-left">
                <li>
                  Gestörtes Zuordnen von Gesagtem (z.B. häufiges Nachfragen im
                  Gespräch)
                </li>
                <li>
                  Gestörte Merkfähigkeit (z.B. Schwierigkeiten, sich
                  Kinderlieder, Gedichte oder mehrere Aufträge zu merken)
                </li>
                <li>Leichte Ablenkbarkeit durch Umgebungsgeräusche</li>
                <li>Gestörtes Richtungshören</li>
                <li>Probleme beim Unterscheiden von Lauten</li>
              </ul>
              <p className="text-gray-700">
                Bei älteren Kindern führen wir umfangreichere Tests zur
                Beurteilung der auditiven Wahrnehmung und der Verarbeitung von
                Sprache durch. Die Evaluierung von Störungen in der auditiven
                Wahrnehmung und Verarbeitung ist bei schulpflichtigen Kindern
                auch des Öfteren notwendig, um eventuelle Anzeichen einer
                <b> Lese-Rechtschreibschwäche </b> abzuklären.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
