import { useState } from 'react';
import { ServiceCard, ServiceDialog } from '.';
import image from '@/public/images/services/nose.jpg';

export default function Nose() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <ServiceCard image={image} title="Nase">
          Die Nase spielt eine wichtige Rolle in unserem täglichen Leben. Sie
          hilft uns zu atmen, Gerüche wahrzunehmen und beeinflusst unseren
          Geschmackssinn. Wir erkennen und behandeln Nasenprobleme, wie eine
          Nasennebenhöhlenentzündung (Sinusitis) mit oder ohne Polypen,
          Nasenbluten, eine fließende Nase und eine eingeschränkte Nasenatmung.
        </ServiceCard>
      </a>
      <ServiceDialog
        image={image}
        open={open}
        title="Nase"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-2 text-gray-500 mx-2">
          <p>
            Die Nase spielt eine wichtige Rolle in unserem täglichen Leben. Sie
            hilft uns zu atmen, Gerüche wahrzunehmen und beeinflusst unseren
            Geschmackssinn. Wir erkennen und behandeln Nasenprobleme, wie eine
            Nasennebenhöhlenentzündung (Sinusitis) mit oder ohne Polypen,
            Nasenbluten, eine fließende Nase und eine eingeschränkte
            Nasenatmung.
          </p>
          <b className="text-primary mt-3">Diagnostik:</b>
          <ul className="list-disc list-inside">
            <li>Mikroskopie/Endoskopie der Nase</li>
            <li>Geruchs-/Geschmacksprüfung</li>
          </ul>
        </div>
      </ServiceDialog>
    </>
  );
}
