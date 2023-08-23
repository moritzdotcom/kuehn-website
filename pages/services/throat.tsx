import image from '@/public/images/services/throat.jpg';
import Image from 'next/image';

export default function ThroatServicesPage() {
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
          Hals
        </h1>
      </header>
      <main className="max-w-screen-lg mx-auto px-3 text-lg flex flex-col gap-3 mb-10 text-justify">
        <p>
          Neben der Stimmbildung durch die Stimmbänder, ist der Hals am
          Schluckakt der Nahrungs-/Flüssigkeitsaufnahme beteiligt. Wir sind
          spezialisiert auf die Diagnostik und Behandlung von Halsschmerzen,
          Heiserkeit, Schluck-, Schnarchprobleme, Tumorvor- und nachsorge (z.B.
          Kehlkopfkrebs). Herr Dr. Kühn ist zudem zertifizierter HNO-Arzt für
          Stimm- und Sprachstörungen.
        </p>
        <b className="text-primary mt-3">
          Untersuchungen (neben der HNO-ärztlichen Spiegeluntersuchung):
        </b>
        <ul className="list-disc list-inside">
          <li>flexible und videogeführte Endoskopie des Kehlkopfs</li>
          <li>starre Endoskopie des Kehlkopfs</li>
          <li>Stimm- und Sprachdiagnostik</li>
          <li>Sonographie</li>
        </ul>
        <b className="text-primary mt-3">
          Kehlkopfkrebs (Larynxkarzinom): Vor- und Nachsorge Was ist
          Kehlkopfkrebs?
        </b>
        <p>
          Kehlkopfkrebs gehört zu einer großen Gruppe von Kopf-Hals-Tumoren und
          ist einer der häufigsten Tumoren in der Hals-Nasen-Ohren-Heilkunde.
          Dieser ist bösartig (maligne) und kann streuende (metastasierende)
          Verläufe zeigen.
        </p>
        <p className="text-xl font-bold">
          Je früher ein Kehlkopfkrebs erkannt wird, desto besser sind die
          Heilungschancen!
        </p>
        <b className="text-primary mt-3">Wie äußert sich Kehlkopfkrebs?</b>
        <p>
          Leider wird Kehlkopfkrebs erst sehr spät als klinische Manifestation
          erkannt. In etwa zwei Dritteln der Fälle entsteht Kehlkopfkrebs im
          Bereich der Stimmbänder und führt zu einem Verlust der
          Stimmbildungsfunktion, daher ist das erste Krankheitszeichen oft eine
          anhaltende Heiserkeit oder Stimmveränderung. Auch häufiger Husten und
          Fremdkörpergefühle können auf diese Erkrankung hinweisen. Allerdings
          treten diese Symptome nicht immer auf. Die Krankheit kann ebenso über
          längere Zeiträume symptomlos verlaufen.
        </p>
        <b className="text-primary mt-3">
          Für welche Patienten eignet sich eine Kehlkopfkrebsvorsorge?
        </b>
        <p>
          Eine gründliche Untersuchung durch einen HNO-Arzt kann helfen, Krebs
          frühzeitig zu diagnostizieren, da Krebs bei frühzeitiger Erkennung oft
          geheilt werden kann.
        </p>
      </main>
    </>
  );
}
