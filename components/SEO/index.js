import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO(props) {
  const { ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'VOTU | Transparentamos la información política en el Perú.',
    description: `Votu.pe es una aplicación independiente desarrollada para ayudarte en la selección de tus candidatos congresales y presidenciales basándose en datos de fuentes públicas y un análisis de los planes de gobierno. Su objetivo es ser tu herramienta de consulta para decidir mejor tu voto.`,
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
