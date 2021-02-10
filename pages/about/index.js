import dynamic from 'next/dynamic';

const About = dynamic(() => import('components/About'), {
  ssr: false,
});

const nossrAbout = () => <About />;
export default nossrAbout;
