import { useState } from 'react';
import { ServiceCard, ServiceDialog } from '.';
import image from '@/public/images/services/naturopathic.jpg';

export default function Naturopathic() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <ServiceCard image={image} title="Naturheilverfahren">
          Die Phytotherapie, auch Pflanzenheilkunde genannt, ist heute ein
          fester Bestandteil der Schulmedizin. Die Anwendung von pflanzlichen
          Heilmitteln kann vor allem bei der Behandlung nicht akut bedrohlicher
          Erkrankungen und bei chronischen Problemen eine wirksame und
          nebenwirkungsarme Alternative oder Ergänzung zur Standardtherapie
          sein.
        </ServiceCard>
      </a>
      <ServiceDialog
        image={image}
        open={open}
        title="Naturheilverfahren"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2 text-gray-500 mx-2">
          <b className="text-primary mt-3">
            Naturheilmittel und Homöopathie als ergänzender Behandlungsansatz
          </b>
          <p>
            Die Phytotherapie, auch Pflanzenheilkunde genannt, ist heute ein
            fester Bestandteil der Schulmedizin. Die Anwendung von pflanzlichen
            Heilmitteln kann vor allem bei der Behandlung nicht akut
            bedrohlicher Erkrankungen und bei chronischen Problemen eine
            wirksame und nebenwirkungsarme Ergänzung oder ggf. Alternative zur
            Standardtherapie sein.
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
        </div>
      </ServiceDialog>
    </>
  );
}
