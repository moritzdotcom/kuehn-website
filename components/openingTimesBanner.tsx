import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function OpeningTimesBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary text-white py-2">
      <div className="md:hidden">
        <button
          className="flex justify-center items-center gap-2 mx-auto"
          onClick={() => setOpen((o) => !o)}
        >
          <BsChevronDown
            className={`stroke-1 transition-transform ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <p>Unsere Öffnungszeiten</p>
        </button>
        <div
          className={`transition-all overflow-hidden text-center ${
            open ? 'max-h-44' : 'max-h-0'
          }`}
        >
          <h6 className="mt-3">Montag, Dienstag, Donnerstag:</h6>
          <p className="font-semibold">8:30-12:00 & 14:00-18:30</p>
          <h6 className="mt-3">Mittwoch, Freitag:</h6>
          <p className="font-semibold">8:30-12:00</p>
        </div>
      </div>
      <p className="hidden md:block text-center">
        Unsere Öffnungszeiten: Mo, Di, Do: 8:30-12:00 & 14:00-18:30 und Mi, Fr:
        8:30-12:00
      </p>
    </div>
  );
}
