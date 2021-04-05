import dynamic from 'next/dynamic';

const ParliamentResults = dynamic(
  () => import('components/ParliamentResults'),
  {
    ssr: false,
  },
);

const nossrParliamentResults = () => <ParliamentResults />;
export default nossrParliamentResults;
