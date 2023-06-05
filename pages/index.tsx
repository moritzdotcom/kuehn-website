import Head from 'next/head';

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
        <header></header>
        <main className="my-9"></main>
      </div>
    </>
  );
}
