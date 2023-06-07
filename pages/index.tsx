import OpeningTimesBanner from '@/components/openingTimesBanner';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '@/public/Icon.svg';
import WelcomeDesktop from '@/public/images/welcomeDesktop.jpg';
import WelcomeMobile from '@/public/images/welcomeMobile.jpg';
import Link from 'next/link';
import SlideShow from '@/components/slideShow';
import ServicesSlider from '@/components/servicesSlider';
import { FaBus, FaCar } from 'react-icons/fa';
import { IoMdTrain } from 'react-icons/io';
import ContactForm from '@/components/contactForm';

export default function Home() {
  const title = 'Praxis Dr. Wolfram Kühn';
  const description =
    'Facharztpraxis für Hals-, Nasen- Ohrenheilkunde in Mönchengladbach-Windberg.';
  const favicon = '/favicon.ico';
  const metaImage = 'https://www.hno-kühn.de/images/logo.jpg';
  const url = 'https://www.hno-kühn.de';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={favicon} />
        <link rel="icon" href={favicon} />

        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
      </Head>
      <div>
        <OpeningTimesBanner />
        <header className="flex flex-col sm:flex-row-reverse items-center justify-center gap-1 sm:gap-5 bg-gray-100 px-3 py-5">
          <Image src={Logo} alt="Logo" className="w-full max-w-xs" />
          <div className="max-w-xl text-center sm:text-start flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-2xl sm:text-4xl text-primary">
              Facharztpraxis für Hals-, Nasen- Ohrenheilkunde
            </h1>
            <h2 className="text-gray-500 font-semibold text-lg sm:text-2xl mt-5">
              in Mönchengladbach-Windberg.
            </h2>
            <Link
              href="/#services"
              className="block w-fit mt-8 bg-gradient text-white rounded px-4 py-3 text-lg"
            >
              Wie wir Ihnen helfen können
            </Link>
          </div>
        </header>
        <div className="sm:bg-gray-100 px-3 py-2">
          <div className="bg-white w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center rounded-lg sm:shadow-lg overflow-hidden relative">
            <div className="w-full sm:w-1/3">
              <Image
                src={WelcomeDesktop}
                alt="Welcome"
                className="object-cover hidden sm:block w-full h-full"
              />
              <Image
                src={WelcomeMobile}
                alt="Welcome"
                className="object-cover block sm:hidden max-h-60 w-full h-full"
              />
            </div>
            <div className="px-0 sm:px-5 py-2 sm:py-5 sm:w-2/3 flex flex-col gap-2.5 text-sm md:text-base text-primary font-semibold">
              <p>
                Liebe Patientinnen und Patienten,
                <br /> schön, dass Sie zu uns gefunden haben.
              </p>
              <p>
                Wir sind eine Facharztpraxis für Hals-, Nasen- und
                Ohrenheilkunde in Mönchengladbach-Windberg. Es erwarten Sie zwei
                erfahrene HNO Fachärzte und ein engagiertes Praxisteam.
              </p>
              <p>
                Dr. med. Wolfram Kühn, eröffnete diese Praxis bereits 1997 und
                folgte damit dem Ruf einer langen Familientradition und der
                Leidenschaft für das Fachgebiet HNO.
              </p>
              <p>
                Seit April 2020 wird die Praxis zusätzlich durch seine
                kompetente Kollegin, Dr. med. Aline Paulußen, unterstützt.
              </p>
              <p>Wir freuen uns auf Ihren Besuch!</p>
              <p>
                Dr. med. Wolfram Peter Kühn & Dr. med. Aline Paulußen
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient text-white sm:-mt-36 sm:pt-36 sm:-mb-24 sm:pb-24">
          <div className="max-w-5xl mx-auto px-3 py-5 sm:py-20 flex flex-col gap-6 sm:gap-10">
            <h2 className="text-2xl font-semibold text-center">
              Terminsprechstunde
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-center gap-3 text-gray-200">
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-white">Montag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-white">Dienstag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-white">Mittwoch</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-white">Donnerstag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-white">Freitag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                </div>
              </div>
            </div>
            <h5 className="text-center text-lg font-light">
              Die <b className="font-extrabold">offene Notfall Sprechstunde</b>{' '}
              ist vormittags um <b className="font-extrabold">8.30 Uhr</b> und
              Mo, Di, und Do um <b className="font-extrabold">14.30 Uhr</b>.
            </h5>
          </div>
        </div>
        <div className="bg-gray-200 sm:rounded-lg sm:shadow-lg w-full max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6 text-center text-sm sm:text-base px-3 py-5">
          <p>
            In dringenden Fällen außerhalb der Sprechstundenzeiten erreichen Sie
            unter{' '}
            <a href="tel:116 117" className="text-red-600">
              116 117
            </a>{' '}
            den Kassenärztlichen Notdienst. In lebensbedrohlichen Notfällen
            unter{' '}
            <a href="tel:112" className="text-red-600">
              112
            </a>{' '}
            den Rettungsdienst der Feuerwehr.
          </p>
          <p>
            Bei Erkältungssymptomen ist ein negativer Schnelltest erwünscht.
          </p>
          <p>
            Bei Verdacht auf eine Corona-Infektion sollten sich Betroffene
            ausschließlich telefonisch bei uns,oder direkt beim nächstgelegenen
            Gesundheitsamt melden.
          </p>
        </div>
        <div className="pt-5 sm:pt-10">
          <h2 className="text-center text-2xl sm:text-4xl text-primary">
            Unsere Praxis
          </h2>
          <div className="mt-5 sm:mt-10">
            <SlideShow />
          </div>
        </div>
        <div className="py-5 relative">
          <div id="services" className="-mt-20 absolute top-0" />
          <h2 className="text-center text-2xl sm:text-4xl text-primary">
            Unsere Leistungen
          </h2>
          <ServicesSlider />
        </div>
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="bg-tertiary w-full sm:w-2/5 p-3 sm:p-6 text-primary font-semibold">
            <h3 className="text-xl sm:text-3xl text-center sm:text-start">
              Anfahrt
            </h3>
            <p>
              Unsere Praxis ist mit dem Auto sowie mit dem ÖPNV bestens zu
              erreichen. Es befinden sich kostenlose Parkmöglichkeiten vor Ort.
            </p>
            <div className="my-5 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary">
                  <FaCar className="text-white text-2xl" />
                </div>
                <p>Lindenstraße 260, 41063 Mönchengladbach</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary">
                  <IoMdTrain className="text-white text-2xl" />
                </div>
                <p>Bahn: Mönchengladbach Hbf</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary">
                  <FaBus className="text-white text-2xl" />
                </div>
                <p>Bus: Mönchengladbach Annakirchstr.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-3/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.9565373166943!2d6.412308869674409!3d51.203855038505196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ab7034154101%3A0xe968cf6df7fcc489!2sHNO%20Facharztpraxis%20in%20M%C3%B6nchengladbach%20Dr.med.%20Wolfram%20Peter%20K%C3%BChn%2C%20Dr.med.%20Aline%20Paulu%C3%9Fen%20(angest.%C3%84rztin)!5e0!3m2!1sde!2sde!4v1686036092678!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="sm:py-10 max-w-screen-lg mx-auto relative">
          <div id="contact" className="-mt-20 absolute top-0" />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
