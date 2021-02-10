import { Fragment } from 'react';
import Head from 'next/head';

function Votu({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Votu.pe</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default Votu;
