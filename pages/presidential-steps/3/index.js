import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const PresidentialStep3 = dynamic(
  () => import('components/PresidentialQuestion'),
  {
    ssr: false,
  },
);

const nossrPresidentialQuestion = () => (
  <TopicsProvider>
    <PresidentialStep3 />
  </TopicsProvider>
);
export default nossrPresidentialQuestion;
