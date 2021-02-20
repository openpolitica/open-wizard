import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Votu.pe</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
