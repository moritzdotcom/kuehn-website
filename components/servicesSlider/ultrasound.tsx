import { useState } from 'react';
import { ServiceCard, ServiceDialog } from '.';
import image from '@/public/images/services/ultrasound.jpg';

export default function Ultrasound() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <ServiceCard image={image} title="Ultraschalluntersuchungen">
          Mithilfe der schmerzfreien Ultraschalluntersuchung kann eine
          Untersuchung der Nasennebenhöhlen, der Weichteile des Halses, Gesichts
          und anderen Lokalisationen des HNO-Bereiches erfolgen. Hierbei lassen
          sich die Nasennebenhöhlen sowie alle Weichteile im Kopf- und
          Halsbereich, wie z.B. Lymphknoten, Speicheldrüsen, Schilddrüse und
          Gefäße auf Auffälligkeiten oder Veränderungen zuverlässig untersuchen.
        </ServiceCard>
      </a>
      <ServiceDialog
        image={image}
        open={open}
        title="Ultraschalluntersuchungen"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2 text-gray-500 mx-2">
          <p>
            Mithilfe der schmerzfreien Ultraschalluntersuchung kann eine
            Untersuchung der Nasennebenhöhlen, der Weichteile des Halses,
            Gesichts und anderen Lokalisationen des HNO-Bereiches erfolgen.
          </p>
          <p>
            Hierbei lassen sich die Nasennebenhöhlen sowie alle Weichteile im
            Kopf- und Halsbereich, wie z.B. Lymphknoten, Speicheldrüsen,
            Schilddrüse und Gefäße auf Auffälligkeiten oder Veränderungen
            zuverlässig untersuchen.
          </p>
        </div>
      </ServiceDialog>
    </>
  );
}
