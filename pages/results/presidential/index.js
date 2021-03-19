import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const PresidentialResults = dynamic(
  () => import('components/PresidentialResults'),
  {
    ssr: false,
  },
);

const nossrPresidentQuestion = () => (
  <TopicsProvider>
    <PresidentialResults />
  </TopicsProvider>
);
export default nossrPresidentQuestion;
