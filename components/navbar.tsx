import Image from 'next/image';
import Icon from '../public/Icon.svg';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setShowOverflow(true);
    } else {
      setTimeout(() => {
        setShowOverflow(false);
      }, 300);
    }
  }, [menuOpen]);

  return (
    <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
      <nav
        className={`flex items-center justify-between bg-white w-full sticky top-0 py-5 md:py-3 shadow-lg px-3 z-50 ${
          menuOpen || showOverflow ? '' : 'overflow-hidden'
        }`}
      >
        <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src={Icon} alt="Logo" width={45} height={45} />
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <h5 className="text-xs md:text-sm font-semibold text-primary">
              Facharztpraxis für Hals-, <br />
              Nasen-, Ohrenheilkunde
            </h5>
          </Link>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="block md:hidden"
          >
            <BurgerMenuBtn open={menuOpen} />
          </button>
        </div>
        <div className="hidden md:flex items-center justify-between gap-5 font-semibold text-primary">
          <Link
            href="/#services"
            className="hover:text-secondary hover:underline underline-offset-4"
          >
            Leistungen
          </Link>
          <Link
            href="/specialization"
            className="hover:text-secondary hover:underline underline-offset-4"
          >
            Spezialisierung
          </Link>
          <Link
            href="/#praxis"
            className="hover:text-secondary hover:underline underline-offset-4"
          >
            Praxis
          </Link>
          <Link
            href="/team"
            className="hover:text-secondary hover:underline underline-offset-4"
          >
            Team
          </Link>
        </div>
        <Link
          href="/#contact"
          className="bg-gray-500 text-white pl-3 pr-4 py-3 rounded-lg text-sm font-semibold hidden md:flex items-center gap-2 hover:bg-gray-600"
        >
          <FaPhoneAlt className="text-base rotate-6" />
          Kontakt
        </Link>
        <div
          className={`absolute bottom-0 translate-y-full transition-transform left-0 bg-gradient text-white w-full z-40 block md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col px-3 py-5 gap-4 items-start">
            <Link
              href="#services"
              onClick={() => setMenuOpen(false)}
              className={`w-full text-start transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[200ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            >
              Leistungen
            </Link>
            <div
              className={`bg-white w-full h-px rounded transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[300ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            />
            <Link
              href="/specialization"
              onClick={() => setMenuOpen(false)}
              className={`w-full text-start transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[400ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            >
              Spezialisierung
            </Link>
            <div
              className={`bg-white w-full h-px rounded transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[500ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            />
            <Link
              href="/praxis"
              onClick={() => setMenuOpen(false)}
              className={`w-full text-start transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[600ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            >
              Praxis
            </Link>
            <div
              className={`bg-white w-full h-px rounded transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[700ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            />
            <Link
              href="/team"
              onClick={() => setMenuOpen(false)}
              className={`w-full text-start transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[800ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            >
              Team
            </Link>
            <div
              className={`bg-white w-full h-px rounded transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[900ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            />
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`w-full text-start transition-opacity ${
                menuOpen
                  ? 'opacity-100 duration-500 delay-[1000ms]'
                  : 'opacity-0 duration-0 delay-200'
              }`}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </ClickAwayListener>
  );
}

function BurgerMenuBtn({ open }: { open: boolean }) {
  return (
    <div className="relative w-8 h-7">
      <div
        className={`absolute top-0 w-8 h-1 rounded-lg bg-primary transition-transform ${
          open ? 'rotate-45 translate-y-3' : 'rotate-0 translate-y-0'
        }`}
      />
      <div
        className={`absolute top-3 w-8 h-1 rounded-lg bg-primary transition-transform ${
          open ? 'rotate-45' : 'rotate-0'
        }`}
      />
      <div
        className={`absolute top-6 w-8 h-1 rounded-lg bg-primary transition-transform ${
          open ? '-rotate-45 -translate-y-3' : 'rotate-0 translate-y-0'
        }`}
      />
    </div>
  );
}
