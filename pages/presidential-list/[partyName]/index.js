import dynamic from 'next/dynamic';

const PresidentialList = dynamic(
  () => import('components/Steps/PresidentialList'),
  {
    ssr: false,
  },
);

const nossrPresidentialList = () => <PresidentialList />;
export default nossrPresidentialList;
