import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const PresidentialResults = dynamic(
  () => import('components/PresidentialResults'),
  {
    ssr: false,
  },
);

const nossrPresidentialResults = () => (
  <TopicsProvider>
    <PresidentialResults />
  </TopicsProvider>
);
export default nossrPresidentialResults;
