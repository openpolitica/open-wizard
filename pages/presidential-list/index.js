import dynamic from 'next/dynamic';

const AllPresidentialList = dynamic(
  () => import('components/AllPresidentialList'),
  {
    ssr: false,
  },
);

const nossrAllPresidentialList = () => <AllPresidentialList />;
export default nossrAllPresidentialList;
