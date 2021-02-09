import dynamic from 'next/dynamic';

const CandidateSingle = dynamic(
  () => import('components/Steps/CandidateSingle'),
  {
    ssr: false,
  },
);

const nossrCandidateSingle = () => <CandidateSingle />;
export default nossrCandidateSingle;
