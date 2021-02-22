import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useHotjar } from 'react-use-hotjar';
import { init as initMatomo } from '@socialgouv/matomo-next';

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

const withHotjar = (Component) => (props) => {
  const { initHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(process.env.hotjar.id, process.env.hotjar.version, logger);
  });

  return <Component {...props} />;
};

const withMatomo = (Component) => (props) => {
  useEffect(() => {
    initMatomo({
      url: process.env.matomo.url,
      siteId: process.env.matomo.siteId,
    });
  });

  return <Component {...props} />;
};

export default process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
  ? Votu
  : withMatomo(withHotjar(Votu));
