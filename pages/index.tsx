import OpeningTimesBanner from '@/components/openingTimesBanner';
import Head from 'next/head';
import Image from 'next/image';
import WelcomeDesktop from '@/public/images/welcomeDesktop.jpg';
import WelcomeMobile from '@/public/images/welcomeMobile.jpg';
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
        <div
          className="bg-cover bg-center relative z-10"
          style={{ backgroundImage: 'url(/images/services/ears.jpg)' }}
        >
          <div className="bg-white bg-opacity-70 absolute inset-0 -z-10"></div>
          <header className="flex flex-col sm:flex-row-reverse items-center justify-center gap-1 sm:gap-5 px-3 py-5 z-30">
            <div className="max-w-xl text-center sm:text-start flex flex-col items-center sm:items-start my-4 sm:my-12">
              <h1 className="font-bold text-xl sm:text-4xl text-primary">
                Facharztpraxis für Hals-, Nasen- Ohrenheilkunde
              </h1>
              <h2 className="text-gray-500 font-semibold text-lg sm:text-2xl mt-5">
                in Mönchengladbach-Windberg.
              </h2>
            </div>
          </header>
          <div className="px-3 py-2 z-30">
            <div className="bg-white w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center rounded-lg sm:shadow-lg overflow-hidden relative">
              <div className="w-full sm:w-1/3 h-full">
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
              <div className="px-2 sm:px-5 py-2 sm:py-5 sm:w-2/3 flex flex-col gap-2.5 text-sm md:text-base text-gray-700 font-semibold">
                <p>
                  Liebe Patientinnen, liebe Patienten,
                  <br /> Herzlich willkommen auf der Internetseite unserer
                  HNO-Praxis!
                </p>
                <p>
                  Unser Team besteht aus zwei erfahrenen HNO-Fachärzten und
                  einem engagierten Praxisteam. Wir legen großen Wert auf eine
                  persönliche und einfühlsame Betreuung, um Ihre individuellen
                  Bedürfnisse bestmöglich zu erfüllen.
                </p>
                <p>
                  Unser oberstes Ziel ist es, Ihnen eine umfassende und
                  qualitativ hochwertige Versorgung in allen Bereichen der
                  Hals-Nasen-Ohren-Heilkunde zu bieten. Hierbei stehen modernste
                  und schonende Diagnostik- und Therapieverfahren im Fokus.
                </p>
                <p>Wir freuen uns auf Ihren Besuch!</p>
                <p>
                  Dr. med. Wolfram Kühn, Dr. med. Aline Paulussen und das
                  Praxisteam Kühn
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient text-gray-900 sm:-mt-36 sm:pt-36 sm:-mb-24 sm:pb-24">
          <div className="max-w-5xl mx-auto px-3 py-5 sm:py-20 flex flex-col gap-6 sm:gap-10">
            <h2 className="text-2xl font-semibold text-center">
              Terminsprechstunde
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-center gap-3 text-gray-700">
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-gray-900">Montag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-gray-900">Dienstag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-gray-900">Mittwoch</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-gray-900">Donnerstag</h6>
                <div>
                  <p>8:30 - 12:00 Uhr</p>
                  <p>14:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 justify-between sm:justify-start items-center">
                <h6 className="font-semibold text-gray-900">Freitag</h6>
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
        <div className="bg-gray-100 sm:rounded-lg sm:shadow-lg w-full max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6 text-center text-sm sm:text-base px-3 py-5">
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
        <div className="pt-5 sm:pt-10 relative">
          <div id="praxis" className="-mt-20 absolute top-0" />
          <h2 className="text-center text-2xl sm:text-4xl text-primary">
            Unsere Praxis
          </h2>
          <div className="mt-5">
            <SlideShow />
          </div>
          <div className="max-w-screen-md mx-auto px-3 py-5 text-gray-500 flex flex-col gap-2 text-justify">
            <p>
              Unsere Praxis hat im Jahr 2023 eine umfassende Renovierung
              erfahren. Wir sind stolz darauf, Ihnen eine zeitgemäße und
              einladende Umgebung mit höchstem technischen Standard bieten zu
              können.
            </p>
            <p>
              Für die kleinen Besucher haben wir eine Kinderspielecke im
              Wartezimmer eingerichtet, in der sie sich während Ihres Besuchs
              vergnügen können.
            </p>
            <p>
              Ein barrierefreier Zugang ist uns ein wichtiges Anliegen, daher
              ist die Praxis mit einem Aufzug erreichbar und behindertengerecht
              gestaltet. So stellen wir sicher, dass auch Menschen mit
              eingeschränkter Mobilität mühelos unsere Räumlichkeiten erreichen
              können.
            </p>
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
          <div className="bg-gradient w-full sm:w-2/5 p-3 sm:p-6 text-primary font-semibold">
            <h3 className="text-xl sm:text-3xl text-center sm:text-start">
              Anfahrt
            </h3>
            <p>
              Für eine Anfahrt mit dem Auto stehen für Sie hinter der Praxis
              <b className="mx-1">kostenlose Parkplätze</b>zur Verfügung. Die
              <b className="mx-1">Bushaltestelle Annakirchstraße</b>befindet
              sich direkt vor dem Praxisgebäude, sodass die Praxis auch mit dem
              ÖPNV gut erreichbar ist.
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
