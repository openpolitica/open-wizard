import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useHotjar } from 'react-use-hotjar';

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

const logger = (value) =>
  console.info(`%c${value}`, 'background: #222; color: #bada55');

const VotuWithHotjar = (props) => {
  const { initHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(process.env.hotjar.id, process.env.hotjar.version, logger);
  });

  return <Votu {...props} />;
};

export default process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
  ? Votu
  : VotuWithHotjar;
