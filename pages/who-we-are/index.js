import dynamic from 'next/dynamic';

const WhoWeAre = dynamic(() => import('components/WhoWeAre'), {
  ssr: false,
});

const nossrWhoWeAre = () => <WhoWeAre />;
export default nossrWhoWeAre;
