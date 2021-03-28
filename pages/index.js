import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const HomePage = dynamic(() => import('components/HomePage'), {
  ssr: false,
});

const nossrHomePage = () => (
  <TopicsProvider>
    <HomePage />
  </TopicsProvider>
);
export default nossrHomePage;
