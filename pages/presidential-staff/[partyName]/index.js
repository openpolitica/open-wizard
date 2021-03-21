import dynamic from 'next/dynamic';

const PresidentialStaff = dynamic(
  () => import('components/Steps/PresidentialStaff'),
  {
    ssr: false,
  },
);

const nossrPresidentialStaff = () => <PresidentialStaff />;
export default nossrPresidentialStaff;
