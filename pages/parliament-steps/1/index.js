import dynamic from 'next/dynamic';

const ParliamentQuestion = dynamic(
  () => import('components/ParliamentQuestion'),
  {
    ssr: false,
  },
);

const nossrParliamentQuestion = () => <ParliamentQuestion />;
export default nossrParliamentQuestion;
