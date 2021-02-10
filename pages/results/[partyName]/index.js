import dynamic from 'next/dynamic';

const CandidateResults = dynamic(
  () => import('components/Steps/CandidateResults'),
  {
    ssr: false,
  },
);

const nossrCandidateResults = () => <CandidateResults />;
export default nossrCandidateResults;
