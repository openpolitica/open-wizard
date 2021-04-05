import dynamic from 'next/dynamic';

const ParliamentCandidatesResults = dynamic(
  () => import('components/ParliamentCandidatesResults'),
  {
    ssr: false,
  },
);

const nossrParliamentCandidatesResults = () => <ParliamentCandidatesResults />;
export default nossrParliamentCandidatesResults;
