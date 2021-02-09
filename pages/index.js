import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('components/HomePage'), {
  ssr: false,
});

const nossrHomePage = () => <HomePage />;
export default nossrHomePage;
