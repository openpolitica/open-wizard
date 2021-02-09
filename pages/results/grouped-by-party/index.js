import dynamic from 'next/dynamic';

const PartyResults = dynamic(() => import('components/Steps/PartyResults'), {
  ssr: false,
});

const nossrPartyResults = () => <PartyResults />;
export default nossrPartyResults;
