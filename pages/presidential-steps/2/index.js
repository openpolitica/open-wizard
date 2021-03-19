import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const PresidentialStep2 = dynamic(
  () => import('components/PresidentialQuizBreakdown'),
  {
    ssr: false,
  },
);

const nossrPresidentialStep2 = () => (
  <TopicsProvider>
    <PresidentialStep2 />
  </TopicsProvider>
);
export default nossrPresidentialStep2;
