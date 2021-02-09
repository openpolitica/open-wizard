import dynamic from 'next/dynamic';

const Step3 = dynamic(() => import('components/Steps/3'), {
  ssr: false,
});

const nossrStep3 = () => <Step3 />;
export default nossrStep3;
