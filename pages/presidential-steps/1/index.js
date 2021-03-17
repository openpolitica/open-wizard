import dynamic from 'next/dynamic';
import { TopicsProvider } from 'hooks/useTopics';

const PresidentialStep1 = dynamic(
  () => import('components/PresidentialTopics'),
  {
    ssr: false,
  },
);

const nossrPresidentialStep1 = () => (
  <TopicsProvider>
    <PresidentialStep1 />
  </TopicsProvider>
);
export default nossrPresidentialStep1;
