import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO(props) {
  const { ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'VOTU | Tu guía digital para las elecciones del Perú.',
    description: `Votu.pe es tu guía digital para ayudarte a elegir tu voto. En VOTU.pe puedes encontrar informacion de todos los candidatos congresales y presidenciales, basada en fuentes de datos públicas y planes de gobierno. Mediante distintos filtros, y preguntas, VOTU.pe te ayuda a encontrar a los candidatos que más se alinean con tus preferencias personales. VOTU es una aplicación independiente desarrollada por Open Politica.`,
    image: 'https://votu.pe/images/banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://votu.pe${router.asPath}`} />
      <link rel="canonical" href={`https://votu.pe${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Votu.pe" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@votupe" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
}
