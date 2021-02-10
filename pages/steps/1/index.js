import dynamic from 'next/dynamic';

const Step1 = dynamic(() => import('components/Steps/1'), {
  ssr: false,
});

const nossrStep1 = () => <Step1 />;
export default nossrStep1;
