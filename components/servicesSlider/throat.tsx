import { useState } from 'react';
import { ServiceCard, ServiceDialog } from '.';
import image from '@/public/images/services/throat.jpg';

export default function Throat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <ServiceCard image={image} title="Hals">
          Neben der Stimmbildung durch die Stimmbänder, ist der Hals am
          Schluckakt der Nahrungs-/Flüssigkeitsaufnahme beteiligt. Wir sind
          spezialisiert auf die Diagnostik und Behandlung von Halsschmerzen,
          Heiserkeit, Schluck-, Schnarchprobleme, Tumorvor- und nachsorge. Herr
          Dr. Kühn ist zudem zertifizierter HNO-Arzt für Stimm- und
          Sprachstörungen.
        </ServiceCard>
      </a>
      <ServiceDialog
        image={image}
        open={open}
        title="Hals"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2 text-gray-500 mx-2">
          <p>
            Neben der Stimmbildung durch die Stimmbänder, ist der Hals am
            Schluckakt der Nahrungs-/Flüssigkeitsaufnahme beteiligt. Wir sind
            spezialisiert auf die Diagnostik und Behandlung von Halsschmerzen,
            Heiserkeit, Schluck-, Schnarchprobleme, Tumorvor- und nachsorge
            (z.B. Kehlkopfkrebs). Herr Dr. Kühn ist zudem zertifizierter
            HNO-Arzt für Stimm- und Sprachstörungen.
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
            Kehlkopfkrebs gehört zu einer großen Gruppe von Kopf-Hals-Tumoren
            und ist einer der häufigsten Tumoren in der
            Hals-Nasen-Ohren-Heilkunde. Dieser ist bösartig (maligne) und kann
            streuende (metastasierende) Verläufe zeigen.
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
            Stimmbildungsfunktion, daher ist das erste Krankheitszeichen oft
            eine anhaltende Heiserkeit oder Stimmveränderung. Auch häufiger
            Husten und Fremdkörpergefühle können auf diese Erkrankung hinweisen.
            Allerdings treten diese Symptome nicht immer auf. Die Krankheit kann
            ebenso über längere Zeiträume symptomlos verlaufen.
          </p>
          <b className="text-primary mt-3">
            Für welche Patienten eignet sich eine Kehlkopfkrebsvorsorge?
          </b>
          <p>
            Eine gründliche Untersuchung durch einen HNO-Arzt kann helfen, Krebs
            frühzeitig zu diagnostizieren, da Krebs bei frühzeitiger Erkennung
            oft geheilt werden kann.
          </p>
        </div>
      </ServiceDialog>
    </>
  );
}
