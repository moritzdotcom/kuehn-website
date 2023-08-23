import { useState } from 'react';
import { ServiceCard, ServiceDialog } from '.';
import image from '@/public/images/services/allergies.jpg';

export default function Allergies() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <ServiceCard image={image} title="Allergien">
          Immer mehr Menschen erwerben im Lebensverlauf eine Allergie, wie z.B.
          die Pollen-, Staub-, Milbenallergie. Um herauszufinden, ob bzw. worauf
          sie allergisch reagieren, reicht die Diagnostik vom Fragebogen über
          die Nasen-Endoskopie, Hauttest (Pricktest) und serologische
          Untersuchungen (Antikörper-Bluttest) bis zum nasalen Provokationstest.
          Je nach Beschwerdebild beraten wir Sie über die Art der Tests und
          weiterführende Therapiemöglichkeiten.
        </ServiceCard>
      </a>
      <ServiceDialog
        image={image}
        open={open}
        title="Allergien"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2 text-gray-500 mx-2">
          <b className="text-primary mt-3">Diagnostik:</b>
          <ul className="list-disc list-inside">
            <li>Allergiespezifischer Fragebogen</li>
            <li>Nasenendoskopie</li>
            <li>Prick-Test (Hauttest)</li>
            <li>Antikörperbluttest</li>
          </ul>
          <b className="text-primary mt-3">Therapieformen:</b>
          <ul className="list-disc list-inside">
            <li>Konventionelle Immuntherapie über 3 Jahre</li>
            <li>Kurzzeittherapie mit 4-7 Injektionen pro Jahr</li>
            <li>RUSH- oder Cluster-Immuntherapie</li>
            <li>Sublingualen Immuntherapie (Tropfen)</li>
          </ul>
          <b className="text-primary mt-3">Haben Sie eine Allergie?</b>
          <p>
            Anzeichen für eine Allergie sind: Juckreiz in der Nase,
            Niesattacken, starke wässrige Sekretion, behinderte Nasenatmung,
            Augentränen bei Bindehautentzündung - vor allem, wenn diese Symptome
            in bestimmten Situationen, an besonderen Orten oder immer in der
            gleichen Jahreszeit auftreten.
          </p>
          <b className="text-primary mt-3">
            Warum ist eine Allergietherapie wichtig?
          </b>
          <p>
            Schon bei leichten Beschwerden sollte eine konsequente Therapie
            erfolgen, um eine Verschlimmerung der Beschwerden zu verhindern. So
            kann ein allergischer Schnupfen für die Entwicklung weiterer
            Allergien prädisponieren oder den sogenannten Etagenwechsel
            erzeugen. Hierbei breitet sich die Allergie auf die unteren Atemwege
            aus und kann zu einem allergischen Asthma führen. Mit entsprechender
            Therapie kann dies verhindert werden.
          </p>
          <b className="text-primary mt-3">Häufige Allergieauslöser:</b>
          <p>
            Zu den häufigsten Allergieauslösern gehören Pollen, Milben, Tiere,
            Hausstaub, Nahrungsmittel/Lebensmittel und Stiche von Bienen oder
            Wespen. Am bekanntesten ist der Heuschnupfen, der von Blütenpollen
            verursacht wird.
          </p>
        </div>
      </ServiceDialog>
    </>
  );
}
