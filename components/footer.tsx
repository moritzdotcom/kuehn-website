import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-2 px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-primary font-semibold">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <div>
            <MdLocationPin className="text-xl" />
          </div>
          <p>Lindenstraße 260, 41063 Mönchengladbach</p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <FaPhoneAlt className="rotate-6" />
          </div>
          <a href="tel:+49 2161 980 890">+49 2161 980 890</a>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <IoMdMail />
          </div>
          <a href="mailto:kontakt@hno-kuehn.de">kontakt@hno-kuehn.de</a>
        </div>
      </div>
      <div className="flex md:flex-col flex-wrap items-center justify-center gap-1 md:gap-3 md:place-self-end text-start text-sm">
        <Link className="md:w-full" href="/">
          Startseite
        </Link>
        <p className="block md:hidden">•</p>
        <Link className="md:w-full" href="/imprint">
          Impressum
        </Link>
        <p className="block md:hidden">•</p>
        <Link className="md:w-full" href="/privacy">
          Datenschutzerklärung
        </Link>
      </div>
      <p className="text-xs text-center md:col-span-2">
        © Facharztpraxis für Hals-,Nasen- und Ohrenheilkunde Dr. med. Wolfram
        Peter Kühn.
      </p>
    </footer>
  );
}
