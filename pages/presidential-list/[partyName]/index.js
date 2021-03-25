import dynamic from 'next/dynamic';

const PresidentialList = dynamic(() => import('components/PresidentialList'), {
  ssr: false,
});

const nossrPresidentialList = () => <PresidentialList />;
export default nossrPresidentialList;
