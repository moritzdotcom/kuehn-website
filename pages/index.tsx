import OpeningTimesBanner from '@/components/openingTimesBanner';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '@/public/images/Logo.png';
import WelcomeDesktop from '@/public/images/welcomeDesktop.jpg';
import WelcomeMobile from '@/public/images/welcomeMobile.jpg';
import Link from 'next/link';
import SlideShow from '@/components/slideShow';
import ServicesSlider from '@/components/servicesSlider';

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
            <h1 className="font-bold text-xl sm:text-4xl">
              Facharztpraxis für Hals-, Nasen- Ohrenheilkunde in
              Mönchengladbach-Windberg.
            </h1>
            <h2 className="text-gray-500 font-semibold text-lg sm:text-2xl mt-5">
              Medizinische Fachkompetenz seit 1997
            </h2>
            <Link
              href="/#services"
              className="block w-fit mt-8 bg-primary text-white rounded px-4 py-3 text-lg"
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
            <div className="px-0 sm:px-5 py-2 sm:py-5 sm:w-2/3 flex flex-col gap-2.5 text-sm text-primary font-semibold">
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
        <div className="w-full bg-gradient-to-r from-primary to-secondary text-white sm:-mt-36 sm:pt-36 sm:-mb-24 sm:pb-24">
          <div className="max-w-5xl mx-auto px-3 py-5 flex flex-col gap-6 sm:gap-10">
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
      </div>
    </>
  );
}
