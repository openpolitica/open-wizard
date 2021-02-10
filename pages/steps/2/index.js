import dynamic from 'next/dynamic';

const Step2 = dynamic(() => import('components/Steps/2'), {
  ssr: false,
});

const nossrStep2 = () => <Step2 />;
export default nossrStep2;
